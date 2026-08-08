import { CitationSnapshotData, ExternalDomainEntry } from '../types/citation';
import { CitationAuditError } from './errors';

function toLanguage(value: unknown) {
  if (value === 'zh-CN') return 'zh';
  if (value === 'ms') return 'ms';
  return 'en';
}

function requireString(value: unknown, label: string) {
  if (typeof value !== 'string' || !value.trim()) {
    throw new CitationAuditError(`Missing ${label}`, 'OUTPUT_ERROR');
  }
  return value;
}

function normalizePercent(value: unknown) {
  const numeric = Number(value ?? 0);
  if (!Number.isFinite(numeric)) {
    return 0;
  }
  return Math.round(numeric <= 1 ? numeric * 100 : numeric);
}

function normalizeEntry(entry: any, query: string, index: number, brandWebsite: string, brandDomain: string) {
  const citedSources = Array.isArray(entry?.cited_sources)
    ? entry.cited_sources.filter((source: unknown) => typeof source === 'string' && source.trim())
    : [];
  const topCitedSource = citedSources[0] || brandDomain;
  const mentionedBrand = Boolean(entry?.brand_mentioned ?? entry?.mentionedBrand);
  const citedOwnedDomain = Boolean(entry?.domain_cited ?? entry?.citedOwnedDomain);
  const snippet = entry?.snippet ?? entry?.aiAnswerSnippet ?? entry?.error ?? 'No citation evidence was returned for this query.';

  return {
    id: `snippet-${index + 1}`,
    query,
    platform: typeof entry?.platform === 'string' && entry.platform.trim() ? entry.platform : 'perplexity',
    aiAnswerSnippet: requireString(snippet, 'snippet'),
    mentionedBrand,
    citedOwnedDomain,
    topCitedSource: requireString(topCitedSource, 'top cited source'),
    citedSourcesCount: citedSources.length,
    citationUrl: citedOwnedDomain ? brandWebsite : undefined,
    sentiment: mentionedBrand ? 'Positive' : citedOwnedDomain ? 'Neutral' : 'Absent',
  } as const;
}

function toPercent(numerator: number, denominator: number) {
  if (!denominator) {
    return 0;
  }
  return Math.round((numerator / denominator) * 100);
}

function normalizeHost(value: string) {
  return value.replace(/^https?:\/\//i, '').replace(/^www\./i, '').split('/')[0].toLowerCase();
}

/**
 * Classifies a cited domain from the domain string alone. Only patterns that are
 * unambiguous get a specific label; everything else stays 'Industry Media' rather
 * than guessing at an authority tier we have not measured.
 */
function classifyDomain(domain: string, isOwned: boolean): ExternalDomainEntry['type'] {
  if (isOwned) return 'Owned';
  const host = normalizeHost(domain);
  if (/(^|\.)(wikipedia|wikidata|fandom|wiki)\./.test(host)) return 'Wikipedia/Wiki';
  if (/(^|\.)(prnewswire|businesswire|globenewswire|einpresswire|prweb)\./.test(host)) return 'PR/News';
  if (/(^|\.)(clutch|g2|capterra|trustpilot|yelp|glassdoor|crunchbase|yellowpages)\./.test(host)) return 'Directory';
  return 'Industry Media';
}

function toSiteCategory(label: unknown): CitationSnapshotData['site_notes'][number]['category'] {
  const value = typeof label === 'string' ? label.toLowerCase() : '';
  if (value.includes('robots')) return 'Technical Robots.txt & Crawling';
  if (value.includes('structured data') || value.includes('schema')) return 'Brand Entity Markup';
  if (value.includes('sitemap')) return 'Technical Robots.txt & Crawling';
  return 'Content Citation Friendliness';
}

/**
 * A check that could not be completed must not read as a pass. `unknown` and
 * `missing` are distinct from `weak` so the report shows what was measured.
 */
function toSiteStatus(status: unknown): CitationSnapshotData['site_notes'][number]['status'] {
  if (status === 'found') return 'Pass';
  if (status === 'missing') return 'Needs Attention';
  return 'Warning';
}

function toPlatformLabel(value: string) {
  const platform = value.trim().toLowerCase();
  if (platform === 'perplexity') return 'Perplexity';
  if (platform === 'chatgpt') return 'ChatGPT Search';
  if (platform === 'gemini') return 'Gemini';
  return value;
}

export function mapHgBrandCitationResult({
  summary,
  audit,
  request,
}: {
  summary: any;
  audit: any;
  request: any;
}): CitationSnapshotData {
  const brand = requireString(audit?.brand ?? request?.brand_name, 'brand');
  const brandWebsite = requireString(request?.brand_website, 'website');
  const brandDomain = requireString(request?.brand_domain ?? request?.brand_website, 'brand domain');
  const queries = Array.isArray(request?.queries) ? request.queries : [];
  const entriesSource = Array.isArray(audit?.entries) ? audit.entries : [];
  const entries = (queries.length > 0 ? queries : entriesSource.map((entry: any, index: number) => entry?.query ?? `query-${index + 1}`))
    .map((query, index) => {
      const matchingEntry = entriesSource.find((entry: any) => entry?.query === query) ?? entriesSource[index];
      return normalizeEntry(matchingEntry, requireString(query, 'query'), index, brandWebsite, brandDomain);
    });
  const keywordPlatformStats = entries.map((entry) => ({
    id: entry.id,
    query: entry.query,
    platform: toPlatformLabel(entry.platform || 'perplexity'),
    mentionedBrand: entry.mentionedBrand,
    citedOwnedDomain: entry.citedOwnedDomain,
    recommended: entry.sentiment === 'Positive',
    sentiment: entry.sentiment,
    citedSourcesCount: entry.citedSourcesCount || 0,
    topCitedSource: entry.topCitedSource,
  }));
  const platformStatsMap = new Map<string, typeof keywordPlatformStats>();
  for (const stat of keywordPlatformStats) {
    const list = platformStatsMap.get(stat.platform) || [];
    list.push(stat);
    platformStatsMap.set(stat.platform, list);
  }
  const platformRecommendationStats = Array.from(platformStatsMap.entries()).map(([platform, stats]) => ({
    platform,
    queriesEvaluated: stats.length,
    mentionRate: toPercent(stats.filter((item) => item.mentionedBrand).length, stats.length),
    citationRate: toPercent(stats.filter((item) => item.citedOwnedDomain).length, stats.length),
    recommendationRate: toPercent(stats.filter((item) => item.recommended).length, stats.length),
  }));
  const uniqueSourceDomains = new Set(
    entriesSource.flatMap((entry: any) =>
      Array.isArray(entry?.cited_sources)
        ? entry.cited_sources
            .filter((source: unknown) => typeof source === 'string' && source.trim())
            .map((source: string) => source.replace(/^https?:\/\//i, '').replace(/^www\./i, '').split('/')[0])
        : [],
    ),
  );
  const recommendationRate = toPercent(keywordPlatformStats.filter((item) => item.recommended).length, keywordPlatformStats.length);
  const mentionRate = normalizePercent(audit?.brand_mention_rate);
  const ownedCitationRate = normalizePercent(audit?.domain_citation_rate);
  const brandSearchIndicators: CitationSnapshotData['brand_search_indicators'] = [
    {
      key: 'mention-rate',
      label: 'AI品牌提及率',
      value: mentionRate,
      unit: '%',
      tone: mentionRate >= 70 ? 'good' : mentionRate >= 40 ? 'warn' : 'neutral',
      description: '核心查询里，AI 是否会主动提到你的品牌。',
    },
    {
      key: 'recommendation-rate',
      label: 'AI推荐率',
      value: recommendationRate,
      unit: '%',
      tone: recommendationRate >= 70 ? 'good' : recommendationRate >= 40 ? 'warn' : 'neutral',
      description: '在已采样平台中，AI 结果呈现为正向推荐的比例。',
    },
    {
      key: 'owned-citation-rate',
      label: '官网引用率',
      value: ownedCitationRate,
      unit: '%',
      tone: ownedCitationRate >= 50 ? 'good' : ownedCitationRate >= 25 ? 'warn' : 'neutral',
      description: 'AI 回答是否直接把流量和可信度导回你的官网。',
    },
    {
      key: 'source-diversity',
      label: '来源多样性',
      value: uniqueSourceDomains.size,
      unit: 'sources',
      tone: uniqueSourceDomains.size >= 8 ? 'good' : uniqueSourceDomains.size >= 4 ? 'warn' : 'neutral',
      description: '支撑品牌被理解与被推荐的外部来源数量。',
    },
  ];

  const topExternalDomains: Array<[string, number]> = (Array.isArray(audit?.top_cited_domains) ? audit.top_cited_domains : [])
    .filter((pair: unknown): pair is [string, number] => Array.isArray(pair) && typeof pair[0] === 'string');
  const totalCitations = topExternalDomains.reduce((sum, [, count]) => sum + (Number(count) || 0), 0);

  return {
    brand,
    website: brandDomain,
    industry: requireString(request?.industry ?? request?.brand_summary, 'industry'),
    targetMarket: requireString(request?.target_market, 'target market'),
    runTimestamp: new Date().toISOString(),
    status: summary?.status === 'ok' && audit?.checked !== false ? 'completed' : 'partial',
    language: toLanguage(request?.languages?.[0]),
    metrics: {
      mention_rate: mentionRate,
      owned_domain_citation_rate: ownedCitationRate,
      queries_run: Number(audit?.queries_run ?? queries.length ?? entries.length ?? 0),
      competitor_mention_rate: normalizePercent(audit?.competitor_mention_rate),
      recommendation_rate: recommendationRate,
    },
    entries,
    keyword_platform_stats: keywordPlatformStats,
    platform_recommendation_stats: platformRecommendationStats,
    brand_search_indicators: brandSearchIndicators,
    top_external_domains: topExternalDomains.map(([domain, count]) => {
      const isOwned = normalizeHost(domain) === normalizeHost(brandDomain);
      return {
        domain,
        citationShare: toPercent(Number(count) || 0, totalCitations),
        citationsCount: Number(count) || 0,
        isOwned,
        type: classifyDomain(domain, isOwned),
      };
    }),
    site_notes: (request?.site_checks ?? []).map((check: any) => ({
      category: toSiteCategory(check?.label),
      status: toSiteStatus(check?.status),
      note: check?.detail ? `${check?.label}: ${check.detail}` : `${check?.label}: ${check?.status}`,
    })),
    actions: (request?.recommended_actions ?? []).map((action: any) => ({
      priority: action?.priority === 'high' ? 'High' : 'Medium',
      title: requireString(action?.title, 'recommended action title'),
      description: requireString(action?.body, 'recommended action body'),
    })),
    methodology: {
      sampleQueries: queries,
      evaluatedPlatforms: ['Perplexity'],
      detectionDate: request?.report_date,
      disclaimer: `Workflow verdict: ${audit?.verdict || summary?.verdict || 'unknown'}`,
    },
    cta: {
      reviewText: 'Book a strategy review',
      auditText: 'Request a full audit',
      contactEmail: requireString(request?.agency_contact_email, 'agency contact email'),
    },
  };
}
