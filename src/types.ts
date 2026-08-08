export interface PlatformData {
  id: string;
  name: string;
  share: number; // percentage
  status: 'optimal' | 'syncing' | 'optimizing';
  vectorNodes: number;
}

export interface SystemLog {
  id: string;
  timestamp: string;
  level: 'info' | 'success' | 'alert';
  message: string;
}

export interface CaseStudy {
  id: string;
  industry: string;
  company: string;
  logoText: string;
  roi: string;
  visibilityGain: string;
  summary: string;
  details: string[];
}

export interface GeoAuditRequest {
  brandName: string;
  industry: string;
  websiteUrl: string;
  targetChinaRegions?: string[];
}

export interface GeoAuditResult {
  brandName: string;
  overallScore: number;
  queryCoverage: number;
  platforms: {
    name: string;
    visibilityScore: number;
    status: 'High' | 'Moderate' | 'Needs Optimization';
    aiCitation: string;
  }[];
  cacCompliance: {
    dataResidency: boolean;
    icpStatus: string;
    aiFilingReady: boolean;
  };
  keyRecommendations: string[];
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  companyName: string;
  industry: string;
  phone: string;
  preferredDate: string;
  notes?: string;
}
