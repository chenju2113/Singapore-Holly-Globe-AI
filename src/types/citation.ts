export type CitationLanguage = 'zh' | 'en' | 'ms';

export interface CitationFormData {
  brandName: string;
  website: string;
  industry: string;
  targetMarket: string;
  competitors: string;
  targetLanguage: CitationLanguage;
  queryFocus?: string;
}

export interface CitationMetric {
  mention_rate: number;
  owned_domain_citation_rate: number;
  queries_run: number;
  competitor_mention_rate: number;
}

export interface ExternalDomainEntry {
  domain: string;
  authorityScore: number;
  citationsCount: number;
  isOwned: boolean;
  type: 'Owned' | 'Industry Media' | 'Directory' | 'PR/News' | 'Wikipedia/Wiki';
}

export interface CitationEntry {
  id: string;
  query: string;
  aiAnswerSnippet: string;
  mentionedBrand: boolean;
  citedOwnedDomain: boolean;
  topCitedSource: string;
  citationUrl?: string;
  sentiment: 'Positive' | 'Neutral' | 'Absent';
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
