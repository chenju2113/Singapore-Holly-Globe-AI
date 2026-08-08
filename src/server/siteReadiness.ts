/**
 * Real site readiness probes for the citation audit.
 *
 * The citation report shows a "site notes" panel (robots.txt, sitemap.xml,
 * structured data). Those rows must reflect actual fetches against the brand
 * domain — never assumed defaults — so a failed audit never renders as a pass.
 */

export type SiteCheckStatus = 'found' | 'weak' | 'missing' | 'unknown';

export interface SiteCheck {
  label: string;
  status: SiteCheckStatus;
  detail: string;
}

const DEFAULT_TIMEOUT_MS = 8000;
const USER_AGENT = 'HollyGlobe-CitationAudit/1.0 (+https://sghollyglobe.com)';

function toOrigin(website: string): string {
  const withScheme = /^https?:\/\//i.test(website) ? website : `https://${website}`;
  return new URL(withScheme).origin;
}

async function fetchText(url: string, timeoutMs: number) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'User-Agent': USER_AGENT },
    });
    return { ok: response.ok, status: response.status, body: response.ok ? await response.text() : '' };
  } catch (error) {
    return { ok: false, status: 0, body: '', error: error as Error };
  } finally {
    clearTimeout(timer);
  }
}

async function checkRobots(origin: string, timeoutMs: number): Promise<SiteCheck> {
  const result = await fetchText(`${origin}/robots.txt`, timeoutMs);
  if (!result.ok) {
    return {
      label: 'robots.txt',
      status: result.status === 404 ? 'missing' : 'unknown',
      detail: result.status ? `HTTP ${result.status}` : 'Request failed or timed out',
    };
  }

  const body = result.body;
  const blocksAiCrawlers = /User-agent:\s*(GPTBot|PerplexityBot|ClaudeBot|Google-Extended)[\s\S]*?Disallow:\s*\//i.test(body);
  const hasSitemapDirective = /^\s*Sitemap:\s*\S+/im.test(body);

  if (blocksAiCrawlers) {
    return { label: 'robots.txt', status: 'weak', detail: 'Reachable but disallows one or more AI crawlers' };
  }
  return {
    label: 'robots.txt',
    status: 'found',
    detail: hasSitemapDirective ? 'Reachable with a Sitemap directive' : 'Reachable but declares no Sitemap directive',
  };
}

async function checkSitemap(origin: string, timeoutMs: number): Promise<SiteCheck> {
  const result = await fetchText(`${origin}/sitemap.xml`, timeoutMs);
  if (!result.ok) {
    return {
      label: 'sitemap.xml',
      status: result.status === 404 ? 'missing' : 'unknown',
      detail: result.status ? `HTTP ${result.status}` : 'Request failed or timed out',
    };
  }
  if (!/<(urlset|sitemapindex)\b/i.test(result.body)) {
    return { label: 'sitemap.xml', status: 'weak', detail: 'Reachable but no <urlset> or <sitemapindex> element found' };
  }
  const urlCount = (result.body.match(/<loc>/gi) || []).length;
  return { label: 'sitemap.xml', status: 'found', detail: `Valid sitemap with ${urlCount} <loc> entries` };
}

async function checkStructuredData(origin: string, timeoutMs: number): Promise<SiteCheck> {
  const result = await fetchText(origin, timeoutMs);
  if (!result.ok) {
    return {
      label: 'Homepage structured data',
      status: 'unknown',
      detail: result.status ? `HTTP ${result.status}` : 'Request failed or timed out',
    };
  }

  const blocks = result.body.match(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi) || [];
  if (blocks.length === 0) {
    return { label: 'Homepage structured data', status: 'missing', detail: 'No JSON-LD schema block found on the homepage' };
  }

  const types = new Set<string>();
  let hasSameAs = false;
  for (const block of blocks) {
    const json = block.replace(/^<script[^>]*>/i, '').replace(/<\/script>$/i, '');
    try {
      const nodes = JSON.parse(json);
      for (const node of Array.isArray(nodes) ? nodes : [nodes]) {
        const graph = Array.isArray(node?.['@graph']) ? node['@graph'] : [node];
        for (const item of graph) {
          const type = item?.['@type'];
          for (const value of Array.isArray(type) ? type : [type]) {
            if (typeof value === 'string') types.add(value);
          }
          if (item?.sameAs) hasSameAs = true;
        }
      }
    } catch {
      return { label: 'Homepage structured data', status: 'weak', detail: 'JSON-LD block present but failed to parse' };
    }
  }

  const hasEntity = ['Organization', 'LocalBusiness', 'Corporation'].some((type) => types.has(type));
  if (!hasEntity) {
    return {
      label: 'Homepage structured data',
      status: 'weak',
      detail: `JSON-LD present (${[...types].join(', ') || 'no @type'}) but no Organization entity`,
    };
  }
  if (!hasSameAs) {
    return { label: 'Homepage structured data', status: 'weak', detail: 'Organization entity present but declares no sameAs links' };
  }
  return { label: 'Homepage structured data', status: 'found', detail: 'Organization entity with sameAs links present' };
}

/**
 * Probes the brand site and returns real check results. Never throws: an
 * unreachable site yields `unknown` rows so the audit stays truthful rather
 * than failing the whole run on a transient network error.
 */
export async function runSiteReadinessChecks(
  website: string,
  timeoutMs = DEFAULT_TIMEOUT_MS,
): Promise<SiteCheck[]> {
  let origin: string;
  try {
    origin = toOrigin(website);
  } catch {
    return [
      { label: 'robots.txt', status: 'unknown', detail: `Could not parse website URL: ${website}` },
      { label: 'sitemap.xml', status: 'unknown', detail: `Could not parse website URL: ${website}` },
      { label: 'Homepage structured data', status: 'unknown', detail: `Could not parse website URL: ${website}` },
    ];
  }

  return Promise.all([
    checkRobots(origin, timeoutMs),
    checkSitemap(origin, timeoutMs),
    checkStructuredData(origin, timeoutMs),
  ]);
}
