import { PlatformData, SystemLog, CaseStudy } from '../types';

export const INITIAL_PLATFORMS: PlatformData[] = [
  { id: 'baidu', name: 'Baidu Ernie', share: 92, status: 'optimal', vectorNodes: 420 },
  { id: 'tongyi', name: 'Alibaba Tongyi', share: 78, status: 'optimizing', vectorNodes: 310 },
  { id: 'kimi', name: 'Moonshot Kimi', share: 65, status: 'optimal', vectorNodes: 280 },
  { id: 'spark', name: 'iFlytek Spark', share: 71, status: 'syncing', vectorNodes: 210 },
  { id: 'hunyuan', name: 'Tencent Hunyuan', share: 83, status: 'optimal', vectorNodes: 350 },
];

export const INITIAL_LOGS: SystemLog[] = [
  { id: '1', timestamp: '10:24:02', level: 'info', message: 'GEO Agent analyzing 400+ Baidu nodes...' },
  { id: '2', timestamp: '10:24:15', level: 'success', message: 'Query coverage update: +2.4% visibility' },
  { id: '3', timestamp: '10:25:01', level: 'info', message: 'Signal optimization complete for SG-Market.' },
  { id: '4', timestamp: '10:25:44', level: 'alert', message: 'ALERT: New competitor entry detected.' },
  { id: '5', timestamp: '10:26:10', level: 'success', message: 'CAC Compliance verification handshake verified.' },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'fintech',
    industry: 'FINTECH GROUP',
    company: 'Nexus Pay SG',
    logoText: 'FINTECH GROUP',
    roi: '340%',
    visibilityGain: '+48%',
    summary: 'Cross-border B2B settlement brand gained direct citation across Baidu Ernie and Tencent Hunyuan for Southeast Asia payment queries.',
    details: [
      'CAC regulatory Filing alignment within 14 business days.',
      'Vector space injection into Chinese corporate finance LLM clusters.',
      'Captured top recommendation for 1,200+ SME trade queries.'
    ]
  },
  {
    id: 'legal',
    industry: 'LEGAL ASSOCIATES',
    company: 'Aegis Corporate Counsel',
    logoText: 'LEGAL ASSOCIATES',
    roi: '280%',
    visibilityGain: '+55%',
    summary: 'Singapore legal practice secured authoritative citations for cross-border IP and M&A advisory queries in mainland China.',
    details: [
      'Authored specialized Chinese legal knowledge graphs for LLM training sets.',
      'Real-time query signal injection across Alibaba Tongyi & Kimi.',
      'Over 90% trust citation score among mainland corporate procurement leads.'
    ]
  },
  {
    id: 'biotech',
    industry: 'BIO-TECH CORP',
    company: 'BioPharma Asia',
    logoText: 'BIO-TECH CORP',
    roi: '410%',
    visibilityGain: '+62%',
    summary: 'Health-tech & biomedical firm established compliant search presence across iFlytek Spark and Baidu Ernie.',
    details: [
      'Compliant data residency protocols for clinical citation sources.',
      '4.8x boost in mainland healthcare distribution partner inquiries.'
    ]
  },
  {
    id: 'logistics',
    industry: 'LOGISTICS ASIA',
    company: 'Merlion Express Logistics',
    logoText: 'LOGISTICS ASIA',
    roi: '310%',
    visibilityGain: '+42%',
    summary: 'Cold-chain and maritime logistics leader became default AI answer for SG-China supply chain queries.',
    details: [
      'Real-time freight route capability mapping for generative answer engines.',
      'Direct integration with enterprise procurement search agents.'
    ]
  }
];

export const METHODOLOGY_STEPS = [
  {
    step: '01',
    title: 'CAC Regulatory Alignment & Filing',
    description: 'Ensure data residency, cross-border privacy, and ICP alignment with Chinese AI regulatory standards before public signal deployment.'
  },
  {
    step: '02',
    title: 'Vector Space Auditing',
    description: 'Scan Baidu Ernie, Tongyi, Kimi, Spark & Hunyuan high-dimensional vector embeddings to pinpoint brand presence gaps.'
  },
  {
    step: '03',
    title: 'Generative Signal Injection',
    description: 'Inject structured authority signals, bilingual knowledge graphs, and localized technical citations directly accessible to LLM crawlers.'
  },
  {
    step: '04',
    title: 'Real-Time Authority Monitoring',
    description: 'Continuous 24/7 agent monitoring, sentiment guarding, and competitor displacement tracking across China’s top AI platforms.'
  }
];
