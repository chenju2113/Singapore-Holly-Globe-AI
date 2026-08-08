import { spawn } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import { CitationFormData } from '../types/citation';
import { CitationAuditError } from './errors';
import { runSiteReadinessChecks, type SiteCheck } from './siteReadiness';

export interface HgBrandCitationWorkflowConfig {
  scriptPath: string;
  workDir: string;
  timeoutMs: number;
  /** Injectable for tests so unit runs never hit the network. */
  runSiteChecks?: (website: string) => Promise<SiteCheck[]>;
}

export interface HgBrandCitationWorkflowResult {
  runDir: string;
  requestPath: string;
  summaryPath: string;
  auditPath: string;
  request: Record<string, unknown>;
  summary: Record<string, unknown>;
  audit: Record<string, unknown>;
  stdout: string;
  stderr: string;
}

const SUMMARY_OUTPUT_NAME = 'hg-brand-citation.summary.json';
const AUDIT_OUTPUT_NAME = 'perplexity-citations.json';

function normalizeDomain(website: string): string {
  return website.replace(/^https?:\/\//i, '').replace(/\/.*$/, '').trim();
}

function summarizeStderr(stderr: string) {
  const lines = stderr.trim().split(/\r?\n/).filter(Boolean);
  return lines.slice(-6).join('\n');
}

function buildQueries(params: CitationFormData, domain: string) {
  const industry = params.industry || 'B2B Tech & SaaS';
  const market = params.targetMarket || 'Singapore & Southeast Asia';
  const competitor = params.competitors || 'leading competitors';
  const focus = params.queryFocus || industry;

  if (params.targetLanguage === 'zh') {
    return [
      `在${market}市场上，最受推荐的${industry}品牌有哪些？`,
      `${params.brandName} 在${focus}方面的核心优势和案例是什么？`,
      `${params.brandName} 与 ${competitor} 相比有什么差异？`,
      `${params.brandName} 官方网站 ${domain} 提供哪些产品或服务？`,
    ];
  }

  if (params.targetLanguage === 'ms') {
    return [
      `Apakah jenama ${industry} yang paling disyorkan di ${market}?`,
      `Apakah kelebihan utama dan contoh kes bagi ${params.brandName} dalam ${focus}?`,
      `Bagaimanakah ${params.brandName} dibandingkan dengan ${competitor}?`,
      `Apakah produk atau perkhidmatan rasmi di laman ${domain} milik ${params.brandName}?`,
    ];
  }

  return [
    `Who are the most recommended ${industry} brands in ${market}?`,
    `What are the main strengths and case studies of ${params.brandName} for ${focus}?`,
    `How does ${params.brandName} compare with ${competitor}?`,
    `What products or services are offered on ${params.brandName}'s official website ${domain}?`,
  ];
}

/**
 * Derives recommendations from real check results only. Each action is tied to a
 * check that actually failed, so the report never advises fixing something that
 * was never measured.
 */
function buildRecommendedActions(params: CitationFormData, siteChecks: SiteCheck[]) {
  const actions: Array<{ title: string; body: string; priority: string }> = [];
  const byLabel = (label: string) => siteChecks.find((check) => check.label === label);

  const schema = byLabel('Homepage structured data');
  if (schema && schema.status !== 'found') {
    actions.push({
      title: 'P0: Align brand entity markup',
      body: `Homepage structured data check returned "${schema.status}" (${schema.detail}). Publish an Organization JSON-LD block for ${params.brandName} with a canonical name, website, and sameAs links.`,
      priority: 'high',
    });
  }

  const robots = byLabel('robots.txt');
  if (robots && robots.status !== 'found') {
    actions.push({
      title: 'P0: Open crawler access',
      body: `robots.txt check returned "${robots.status}" (${robots.detail}). Allow AI crawlers such as GPTBot, PerplexityBot, and ClaudeBot, and declare a Sitemap directive.`,
      priority: 'high',
    });
  }

  const sitemap = byLabel('sitemap.xml');
  if (sitemap && sitemap.status !== 'found') {
    actions.push({
      title: 'P1: Publish a valid sitemap',
      body: `sitemap.xml check returned "${sitemap.status}" (${sitemap.detail}). Serve a valid XML sitemap so AI crawlers can enumerate citable pages.`,
      priority: 'medium',
    });
  }

  if (actions.length === 0) {
    actions.push({
      title: 'P1: Grow citable third-party coverage',
      body: `All technical checks passed for ${params.brandName}. The remaining lever is off-site: earn citations from industry media and reference sources that AI engines already trust for ${params.industry || 'your category'}.`,
      priority: 'medium',
    });
  }

  return actions;
}

function buildRequest(params: CitationFormData, runDir: string, siteChecks: SiteCheck[]) {
  const reportDate = new Date().toISOString().slice(0, 10);
  const outputBasename = `HollyGlobe_GEO_${reportDate.replace(/-/g, '')}`;
  const domain = normalizeDomain(params.website);

  return {
    brand_name: params.brandName,
    brand_domain: domain,
    brand_website: params.website,
    brand_summary: params.queryFocus || params.industry,
    industry: params.industry,
    target_market: params.targetMarket,
    query_focus: params.queryFocus || '',
    client_logo_url: path.join(process.cwd(), 'public', 'hollyglobe_logo.svg'),
    agency_name: 'HollyGlobe Singapore',
    agency_contact_email: 'enquiry@sghollyglobe.com',
    agency_logo_light_path: path.join(process.cwd(), 'public', 'hollyglobe_white_logo.svg'),
    agency_logo_dark_path: path.join(process.cwd(), 'public', 'hollyglobe_logo.svg'),
    agency_icon_path: path.join(process.cwd(), 'public', 'hollyglobe_logo.svg'),
    provider: 'perplexity',
    provider_api_key_env: 'PERPLEXITY_API_KEY',
    report_date: reportDate,
    output_basename: outputBasename,
    output_dir: runDir,
    languages: [params.targetLanguage === 'zh' ? 'zh-CN' : params.targetLanguage === 'ms' ? 'ms' : 'en'],
    queries: buildQueries(params, domain),
    site_checks: siteChecks,
    recommended_actions: buildRecommendedActions(params, siteChecks),
    // hg-brand-citation derives the audit filename from `audit_output_name` when set,
    // otherwise from `{brand-slug}-{report-date}-citations.json`. Pin it so the adapter
    // and the workflow agree on one deterministic path.
    audit_output_name: AUDIT_OUTPUT_NAME,
    audit_json: path.join(runDir, AUDIT_OUTPUT_NAME),
    run_audit: true,
  };
}

async function readJsonFile(filePath: string) {
  const content = await fs.readFile(filePath, 'utf8');
  try {
    return JSON.parse(content) as Record<string, unknown>;
  } catch {
    throw new CitationAuditError(`Failed to parse JSON file at ${filePath}`, 'OUTPUT_ERROR');
  }
}

export async function runHgBrandCitationWorkflow(
  params: CitationFormData,
  config: HgBrandCitationWorkflowConfig,
): Promise<HgBrandCitationWorkflowResult> {
  if (!config.scriptPath) {
    throw new CitationAuditError('HG_BRAND_CITATION_SCRIPT is not set', 'CONFIG_ERROR');
  }
  if (!config.workDir) {
    throw new CitationAuditError('HG_BRAND_CITATION_WORKDIR is not set', 'CONFIG_ERROR');
  }

  await fs.mkdir(config.workDir, { recursive: true });
  const runDir = await fs.mkdtemp(path.join(config.workDir, 'hg-brand-citation-'));
  const requestPath = path.join(runDir, 'request.json');
  const siteChecks = await (config.runSiteChecks ?? runSiteReadinessChecks)(params.website);
  const request = buildRequest(params, runDir, siteChecks);

  await fs.writeFile(requestPath, JSON.stringify(request, null, 2));

  let stdout = '';
  let stderr = '';

  await new Promise<void>((resolve, reject) => {
    const child = spawn('python3', [config.scriptPath, '--input', requestPath, '--output-dir', runDir, '--run-audit'], {
      stdio: ['ignore', 'pipe', 'pipe'],
    });

    const timer = setTimeout(() => {
      child.kill('SIGKILL');
      reject(new CitationAuditError('hg-brand-citation timed out', 'EXECUTION_ERROR', 504));
    }, config.timeoutMs);

    child.stdout.on('data', (chunk) => {
      stdout += chunk.toString();
    });

    child.stderr.on('data', (chunk) => {
      stderr += chunk.toString();
    });

    child.on('error', (error) => {
      clearTimeout(timer);
      reject(new CitationAuditError(`Failed to start hg-brand-citation: ${(error as Error).message}`, 'EXECUTION_ERROR'));
    });

    child.on('exit', (code) => {
      clearTimeout(timer);
      if (code === 0) {
        resolve();
        return;
      }
      const stderrExcerpt = summarizeStderr(stderr);
      const authMatch = /401|unauthorized|forbidden/i.test(stderrExcerpt);
      const message = stderrExcerpt
        ? `hg-brand-citation exited with code ${code}. Upstream error:\n${stderrExcerpt}`
        : `hg-brand-citation exited with code ${code}`;
      reject(new CitationAuditError(message, authMatch ? 'AUTH_ERROR' : 'EXECUTION_ERROR', authMatch ? 502 : 500));
    });
  });

  const summaryPath = path.join(runDir, SUMMARY_OUTPUT_NAME);

  try {
    await fs.access(summaryPath);
  } catch {
    throw new CitationAuditError('hg-brand-citation did not produce a summary output file', 'OUTPUT_ERROR');
  }

  const summary = await readJsonFile(summaryPath);
  const auditPath = typeof summary.audit_path === 'string' && summary.audit_path.trim()
    ? summary.audit_path
    : path.join(runDir, AUDIT_OUTPUT_NAME);

  try {
    await fs.access(auditPath);
  } catch {
    throw new CitationAuditError(`hg-brand-citation summary referenced a missing audit file: ${auditPath}`, 'OUTPUT_ERROR');
  }

  return {
    runDir,
    requestPath,
    summaryPath,
    auditPath,
    request,
    summary,
    audit: await readJsonFile(auditPath),
    stdout,
    stderr,
  };
}
