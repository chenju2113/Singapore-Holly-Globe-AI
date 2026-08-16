import { CitationFormData, CitationSnapshotData, ExternalDomainEntry } from '../types/citation';

interface ImportedPlatformResult {
  platform: string;
  query: string;
  verdict: string;
  mentionedBrand: boolean;
  citedOwnedDomain: boolean;
  source: string;
  snippet: string;
}

function normalizeDomain(website: string): string {
  return website.replace(/^https?:\/\//i, '').replace(/\/.*$/, '').trim().toLowerCase();
}

function normalizePlatform(value: string) {
  const raw = value.trim().toLowerCase();
  if (raw === '豆包' || raw === 'doubao') return 'Doubao';
  if (raw === '元宝' || raw === 'yuanbao') return 'Yuanbao';
  if (raw === 'kimi') return 'Kimi';
  if (raw === '通义' || raw === 'tongyi') return 'Tongyi';
  if (raw === '文心一言' || raw === 'wenxin' || raw === 'ernie') return 'Baidu Ernie';
  return value.trim() || 'China AI';
}

function parseBoolean(value: string) {
  const normalized = value.trim().toLowerCase();
  return ['yes', 'true', '1', 'y', '是', '有', '推荐', 'mentioned', 'cited'].includes(normalized);
}

function parseBlocks(raw: string) {
  return raw
    .split(/\n\s*\n/g)
    .map((block) => block.trim())
    .filter(Boolean);
}

function parseLine(line: string) {
  const match = line.match(/^([^:：]+)\s*[:：]\s*(.*)$/);
  if (!match) return null;
  return {
    key: match[1].trim().toLowerCase(),
    value: match[2].trim(),
  };
}

function toImportedResult(block: string): ImportedPlatformResult | null {
  const record = new Map<string, string>();
  for (const line of block.split(/\r?\n/)) {
    const parsed = parseLine(line);
    if (parsed) {
      record.set(parsed.key, parsed.value);
    }
  }

  const platform = record.get('平台') || record.get('platform');
  const query = record.get('关键词') || record.get('keyword') || record.get('query');
  const snippet = record.get('摘要') || record.get('snippet') || record.get('answer');
  if (!platform || !query || !snippet) {
    return null;
  }

  const verdict = record.get('结论') || record.get('verdict') || 'weak';
  const mentionedBrand = parseBoolean(record.get('品牌提及') || record.get('brand mentioned') || record.get('mention') || 'no');
  const citedOwnedDomain = parseBoolean(record.get('官网引用') || record.get('owned domain cited') || record.get('citation') || 'no');
  const source = record.get('来源') || record.get('source') || 'unknown source';

  return {
    platform: normalizePlatform(platform),
    query,
    verdict,
    mentionedBrand,
    citedOwnedDomain,
    source,
    snippet,
  };
}

function toPercent(numerator: number, denominator: number) {
  if (!denominator) return 0;
  return Math.round((numerator / denominator) * 100);
}

function getRecommended(verdict: string, mentionedBrand: boolean) {
  const normalized = verdict.trim().toLowerCase();
  if (['推荐', 'recommended', 'positive', 'strong', 'yes'].includes(normalized)) return true;
  return mentionedBrand && !['弱', 'weak', 'absent', 'no'].includes(normalized);
}

function getSentiment(recommended: boolean, mentionedBrand: boolean): 'Positive' | 'Neutral' | 'Absent' {
  if (recommended) return 'Positive';
  if (mentionedBrand) return 'Neutral';
  return 'Absent';
}

export function hasChinaPlatformImport(raw?: string) {
  return Boolean(raw && raw.trim());
}

export function generateChinaPlatformSnapshot(params: CitationFormData): CitationSnapshotData {
  const blocks = parseBlocks(params.chinaPlatformResults || '');
  const imported = blocks.map(toImportedResult).filter((item): item is ImportedPlatformResult => Boolean(item));
  const cleanDomain = normalizeDomain(params.website);

  if (imported.length === 0) {
    throw new Error('China AI result import is empty or could not be parsed.');
  }

  const entries = imported.map((item, index) => {
    const recommended = getRecommended(item.verdict, item.mentionedBrand);
    return {
      id: `china-ai-${index + 1}`,
      query: item.query,
      platform: item.platform,
      aiAnswerSnippet: item.snippet,
      mentionedBrand: item.mentionedBrand,
      citedOwnedDomain: item.citedOwnedDomain,
      topCitedSource: item.source,
      citedSourcesCount: 1,
      citationUrl: item.citedOwnedDomain ? `https://${cleanDomain}` : undefined,
      sentiment: getSentiment(recommended, item.mentionedBrand),
    } as const;
  });

  const keywordPlatformStats = entries.map((entry) => ({
    id: entry.id,
    query: entry.query,
    platform: entry.platform || 'China AI',
    mentionedBrand: entry.mentionedBrand,
    citedOwnedDomain: entry.citedOwnedDomain,
    recommended: entry.sentiment === 'Positive',
    sentiment: entry.sentiment,
    citedSourcesCount: entry.citedSourcesCount || 1,
    topCitedSource: entry.topCitedSource,
  }));

  const grouped = new Map<string, typeof keywordPlatformStats>();
  for (const stat of keywordPlatformStats) {
    const list = grouped.get(stat.platform) || [];
    list.push(stat);
    grouped.set(stat.platform, list);
  }

  const platformRecommendationStats = Array.from(grouped.entries()).map(([platform, stats]) => ({
    platform,
    queriesEvaluated: stats.length,
    mentionRate: toPercent(stats.filter((item) => item.mentionedBrand).length, stats.length),
    citationRate: toPercent(stats.filter((item) => item.citedOwnedDomain).length, stats.length),
    recommendationRate: toPercent(stats.filter((item) => item.recommended).length, stats.length),
  }));

  const mentionRate = toPercent(entries.filter((entry) => entry.mentionedBrand).length, entries.length);
  const ownedCitationRate = toPercent(entries.filter((entry) => entry.citedOwnedDomain).length, entries.length);
  const recommendationRate = toPercent(entries.filter((entry) => entry.sentiment === 'Positive').length, entries.length);
  const uniqueSources = new Set(entries.map((entry) => entry.topCitedSource));

  const brandSearchIndicators: CitationSnapshotData['brand_search_indicators'] = [
    {
      key: 'mention-rate',
      label: 'AI品牌提及率',
      value: mentionRate,
      unit: '%',
      tone: mentionRate >= 70 ? 'good' : mentionRate >= 40 ? 'warn' : 'neutral',
      description: '中国 AI 平台测试中，品牌被明确提到的比例。',
    },
    {
      key: 'recommendation-rate',
      label: 'AI推荐率',
      value: recommendationRate,
      unit: '%',
      tone: recommendationRate >= 70 ? 'good' : recommendationRate >= 40 ? 'warn' : 'neutral',
      description: '豆包、元宝等平台结果里，品牌被正向推荐的占比。',
    },
    {
      key: 'owned-citation-rate',
      label: '官网引用率',
      value: ownedCitationRate,
      unit: '%',
      tone: ownedCitationRate >= 50 ? 'good' : ownedCitationRate >= 25 ? 'warn' : 'neutral',
      description: '中国 AI 平台是否把解释和流量导回官网。',
    },
    {
      key: 'source-diversity',
      label: '来源多样性',
      value: uniqueSources.size,
      unit: 'sources',
      tone: uniqueSources.size >= 8 ? 'good' : uniqueSources.size >= 4 ? 'warn' : 'neutral',
      description: '支撑品牌判断的中文来源站点数量。',
    },
  ];

  return {
    brand: params.brandName,
    website: cleanDomain,
    industry: params.industry || 'Technology, SaaS & Digital Services',
    targetMarket: params.targetMarket || 'Greater China (China, HK, TW)',
    runTimestamp: new Date().toISOString(),
    status: 'completed',
    language: params.targetLanguage,
    metrics: {
      mention_rate: mentionRate,
      owned_domain_citation_rate: ownedCitationRate,
      queries_run: entries.length,
      competitor_mention_rate: 0,
      recommendation_rate: recommendationRate,
    },
    entries,
    keyword_platform_stats: keywordPlatformStats,
    platform_recommendation_stats: platformRecommendationStats,
    brand_search_indicators: brandSearchIndicators,
    top_external_domains: Array.from(uniqueSources).map((domain) => {
      const citationsCount = entries.filter((entry) => entry.topCitedSource === domain).length;
      return {
        domain,
        citationShare: entries.length ? Math.round((citationsCount / entries.length) * 100) : 0,
        citationsCount,
        isOwned: domain === cleanDomain,
        type: (domain === cleanDomain ? 'Owned' : 'Industry Media') as ExternalDomainEntry['type'],
      };
    }),
    site_notes: [
      {
        category: 'Content Citation Friendliness',
        status: entries.some((entry) => entry.citedOwnedDomain) ? 'Pass' : 'Warning',
        note: 'This report is generated from imported China AI test results and is intended for rapid ranking diagnostics.',
      },
    ],
    actions: [
      {
        priority: 'High',
        title: 'Expand China AI test coverage',
        description: 'Add more keywords and include Doubao, Yuanbao, Kimi, and Tongyi on the same prompt set to stabilize recommendation-rate comparisons.',
      },
      {
        priority: 'High',
        title: 'Increase official-site citation likelihood',
        description: `Strengthen quote-friendly Chinese landing page content and entity consistency so more answers point back to ${cleanDomain}.`,
      },
    ],
    methodology: {
      sampleQueries: entries.map((entry) => entry.query),
      evaluatedPlatforms: Array.from(new Set(entries.map((entry) => entry.platform || 'China AI'))),
      disclaimer: 'Built from manually imported China AI platform answers for rapid ranking diagnostics.',
    },
    cta: {
      reviewText: 'Book a strategy review',
      auditText: 'Request a full audit',
      contactEmail: 'enquiry@sghollyglobe.com',
    },
  };
}
