export type CitationLanguage = 'zh' | 'en' | 'ms';

export interface CitationFormData {
  brandName: string;
  website: string;
  industry: string;
  targetMarket: string;
  competitors: string;
  targetLanguage: CitationLanguage;
  queryFocus?: string;
  chinaPlatformResults?: string;
}

export interface CitationMetric {
  mention_rate: number;
  owned_domain_citation_rate: number;
  queries_run: number;
  competitor_mention_rate: number;
  recommendation_rate?: number;
}

export interface ExternalDomainEntry {
  domain: string;
  /** Share of all observed citations that went to this domain, 0-100. Derived from citationsCount. */
  citationShare: number;
  citationsCount: number;
  isOwned: boolean;
  type: 'Owned' | 'Industry Media' | 'Directory' | 'PR/News' | 'Wikipedia/Wiki';
}

export interface CitationEntry {
  id: string;
  query: string;
  platform?: string;
  aiAnswerSnippet: string;
  mentionedBrand: boolean;
  citedOwnedDomain: boolean;
  topCitedSource: string;
  citedSourcesCount?: number;
  citationUrl?: string;
  sentiment: 'Positive' | 'Neutral' | 'Absent';
}

export interface KeywordPlatformStat {
  id: string;
  query: string;
  platform: string;
  mentionedBrand: boolean;
  citedOwnedDomain: boolean;
  recommended: boolean;
  sentiment: 'Positive' | 'Neutral' | 'Absent';
  citedSourcesCount: number;
  topCitedSource: string;
}

export interface PlatformRecommendationStat {
  platform: string;
  queriesEvaluated: number;
  mentionRate: number;
  citationRate: number;
  recommendationRate: number;
}

export interface BrandSearchIndicator {
  key: 'mention-rate' | 'recommendation-rate' | 'owned-citation-rate' | 'source-diversity';
  label: string;
  value: number;
  unit: '%' | 'sources';
  tone: 'good' | 'warn' | 'neutral';
  description: string;
}

export interface SiteReadinessNote {
  category: 'Technical Robots.txt & Crawling' | 'Brand Entity Markup' | 'Content Citation Friendliness' | 'Authority Backlinks';
  status: 'Pass' | 'Warning' | 'Needs Attention';
  note: string;
}

export interface RecommendedAction {
  priority: 'High' | 'Medium';
  title: string;
  description: string;
}

export interface CitationSnapshotData {
  brand: string;
  website: string;
  industry: string;
  targetMarket: string;
  runTimestamp: string;
  status: 'completed' | 'partial';
  language: CitationLanguage;
  metrics: CitationMetric;
  entries: CitationEntry[];
  keyword_platform_stats: KeywordPlatformStat[];
  platform_recommendation_stats: PlatformRecommendationStat[];
  brand_search_indicators: BrandSearchIndicator[];
  top_external_domains: ExternalDomainEntry[];
  site_notes: SiteReadinessNote[];
  actions: RecommendedAction[];
  methodology: {
    sampleQueries: string[];
    evaluatedPlatforms: string[];
    detectionDate?: string;
    disclaimer: string;
  };
  cta: {
    reviewText: string;
    auditText: string;
    contactEmail: string;
  };
}

export interface UnlockLeadData {
  email: string;
  fullName: string;
  jobTitle?: string;
  phone?: string;
  companyName: string;
}
