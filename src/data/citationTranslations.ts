import { CitationLanguage } from '../types/citation';

export interface CitationTranslation {
  appTitle: string;
  appSubtitle: string;
  demoBadge: string;
  disclaimerBanner: string;
  
  // Intake Form
  formTitle: string;
  formDesc: string;
  brandNameLabel: string;
  brandNamePlaceholder: string;
  websiteLabel: string;
  websitePlaceholder: string;
  industryLabel: string;
  targetMarketLabel: string;
  competitorsLabel: string;
  competitorsPlaceholder: string;
  targetLanguageLabel: string;
  queryFocusLabel: string;
  queryFocusPlaceholder: string;
  submitButton: string;
  submittingText: string;

  // Industry options
  industries: { [key: string]: string };
  markets: { [key: string]: string };

  // Loading Steps
  loadingTitle: string;
  loadingSubtitle: string;
  loadingSteps: string[];

  // Report UI
  snapshotTitle: string;
  snapshotSubtitle: string;
  generatedAt: string;
  statusCompleted: string;
  
  // Metrics
  mentionRateTitle: string;
  mentionRateTooltip: string;
  ownedCitationRateTitle: string;
  ownedCitationTooltip: string;
  queriesEvaluatedTitle: string;
  competitorAvgTitle: string;

  // Sections
  previewSectionTitle: string;
  previewSectionSubtitle: string;
  fullSnippetsTitle: string;
  topDomainsTitle: string;
  siteReadinessTitle: string;
  recommendedActionsTitle: string;
  methodologyTitle: string;

  // Gate Modal
  gateTitle: string;
  gateSubtitle: string;
  gateFormEmail: string;
  gateFormName: string;
  gateFormTitle: string;
  gateFormPhone: string;
  gateButton: string;
  gateBenefits: string[];

  // CTAs & Actions
  bookReviewBtn: string;
  requestFullAuditBtn: string;
  emailStrategistBtn: string;
  backToInputBtn: string;
  downloadPdfBtn: string;
  copiedLinkNotice: string;
  unlockedBadge: string;
  lockedBadge: string;
}

export const CITATION_TRANSLATIONS: Record<CitationLanguage, CitationTranslation> = {
  zh: {
    appTitle: 'AI Citation Snapshot',
    appSubtitle: 'HollyGlobe 新加坡 AI 搜索引用可见度定向诊断切片',
    demoBadge: '免费诊断 DEMO',
    disclaimerBanner: '提示：本诊断为针对 AI 搜索（如 Perplexity / 百度 / ChatGPT）的定向引用切片示例，非完整 GEO 审计与排名保证。',

    formTitle: '即时检测品牌在 AI 搜索中的引用与提及',
    formDesc: '输入品牌信息，系统将基于 Perplexity 等主流 AI 搜索引擎对核心行业查询进行实时切片采样，评估品牌提及率与官网链接引用率。',
    brandNameLabel: '品牌 / 企业名称',
    brandNamePlaceholder: '例如：HollyGlobe Singapore',
    websiteLabel: '官方网站 URL',
    websitePlaceholder: '例如：sghollyglobe.com',
    industryLabel: '所属行业领域',
    targetMarketLabel: '目标扩展市场',
    competitorsLabel: '主要竞争对手（可选）',
    competitorsPlaceholder: '多个用逗号隔开，例如：Competitor A, Competitor B',
    targetLanguageLabel: '诊断报告语言',
    queryFocusLabel: '核心产品 / 服务关键词（可选）',
    queryFocusPlaceholder: '例如：Singapore AI Marketing Agency',
    submitButton: '生成 AI 引用切片报告',
    submittingText: '正在分析 AI 检索数据...',

    industries: {
      'B2B Tech & SaaS': 'B2B 科技与 SaaS 软件',
      'Cross-border Logistics & Supply Chain': '跨境物流与供应链',
      'Fintech & Financial Services': '金融科技与企业服务',
      'Healthcare & Medical Devices': '医疗健康与生物科技',
      'Luxury, Retail & E-commerce': '奢品零售与跨境电商',
      'Professional Services & Consulting': '专业咨询与出海服务',
      'Education & EdTech': '教育培训与出海留学',
    },
    markets: {
      'Singapore & Southeast Asia': '新加坡及东南亚市场',
      'Greater China (China, HK, TW)': '大中华区市场（中国大陆/香港/台湾）',
      'Global / North America': '全球 / 北美欧洲市场',
    },

    loadingTitle: '正在执行 AI 搜索引用诊断...',
    loadingSubtitle: '正在向 Perplexity 与主流 AI 检索引擎发起多维查询分析',
    loadingSteps: [
      '正在向 AI 搜索引擎索引库提交核心行业查询...',
      '提取品牌提及（Mention）与上下文语义情感...',
      '校验品牌官网（Owned Domain）直接外链引用率...',
      '分析行业权威第三方域名（Top External Domains）引用分布...',
      '整理网站 AI 爬虫抓取与实体结构化就绪度评估...',
      '生成出海高管版 AI Citation Snapshot 诊断切片报告...',
    ],

    snapshotTitle: 'AI 引用可见度切片诊断报告',
    snapshotSubtitle: '针对 AI 搜索引擎回答中“品牌提及率”与“官网链接引用率”的阶段性评估',
    generatedAt: '生成时间',
    statusCompleted: '诊断分析已完成',

    mentionRateTitle: 'AI 搜索品牌提及率',
    mentionRateTooltip: '在核心行业查询中，AI 回答直接出现您品牌名称的比例。',
    ownedCitationRateTitle: '官网直接外链引用率',
    ownedCitationTooltip: 'AI 回答中的参考来源（Citations）直接指向您官方网站域名的比例。',
    queriesEvaluatedTitle: '评估查询采样数',
    competitorAvgTitle: '同行业竞品提及参考',

    previewSectionTitle: '预览摘要：AI 回答引用片段示例',
    previewSectionSubtitle: '下方展示部分已解锁的 AI 回答片段，完整 8 项深度分析与改进建议需解锁后查看',
    fullSnippetsTitle: '全量 AI 回答引用切片明细',
    topDomainsTitle: '主要被 AI 采信引用的第三方权威域名',
    siteReadinessTitle: '网站 AI 检索抓取与结构化就绪度评估',
    recommendedActionsTitle: '优先执行的 GEO 优化建议',
    methodologyTitle: '诊断方法论与声明',

    gateTitle: '解锁完整版 AI 引用切片诊断报告',
    gateSubtitle: '提交您的业务联系方式，立即解锁全部 8 项 AI 答案引文源、权威域名列表及 AI 抓取优化建议。',
    gateFormEmail: '工作邮箱',
    gateFormName: '您的姓名',
    gateFormTitle: '职位 / 部门',
    gateFormPhone: '联系电话 / 微信',
    gateButton: '立即解锁完整报告',
    gateBenefits: [
      '解锁完整 8 组 AI 搜索回答引用溯源明细',
      '获取行业 Top 外部权威引用媒体与目录清单',
      '获取 Robots.txt 与 Schema 实体结构化修改指南',
      '赠送 1 次新加坡顾问团队 1-on-1 战略解读服务',
    ],

    bookReviewBtn: '预约新加坡团队 1-on-1 战略复盘',
    requestFullAuditBtn: '申请完整版 China & Global GEO 审计',
    emailStrategistBtn: '邮件联系首席策略师 (John)',
    backToInputBtn: '重新输入检测其他品牌',
    downloadPdfBtn: '导出摘要文本',
    copiedLinkNotice: '已复制报告链接',
    unlockedBadge: '完整版已解锁',
    lockedBadge: '受限预览中',
  },

  en: {
    appTitle: 'AI Citation Snapshot',
    appSubtitle: 'Directional AI Search Visibility Diagnostic by HollyGlobe Singapore',
    demoBadge: 'FREE DIAGNOSTIC DEMO',
    disclaimerBanner: 'Notice: This snapshot evaluates real-time AI search model citations (e.g., Perplexity/ChatGPT) as a narrow directional demo, not a full China GEO audit or guaranteed rank.',

    formTitle: 'Check Your Brand Visibility in AI-Generated Search Answers',
    formDesc: 'Enter your brand information to run a live snapshot evaluation across core industry queries. Measure brand mention rate and owned-domain direct citation rate.',
    brandNameLabel: 'Brand / Company Name',
    brandNamePlaceholder: 'e.g., HollyGlobe Singapore',
    websiteLabel: 'Official Website URL',
    websitePlaceholder: 'e.g., sghollyglobe.com',
    industryLabel: 'Industry Sector',
    targetMarketLabel: 'Target Expansion Market',
    competitorsLabel: 'Key Competitors (Optional)',
    competitorsPlaceholder: 'Comma separated, e.g. Competitor A, Competitor B',
    targetLanguageLabel: 'Report Language',
    queryFocusLabel: 'Core Product / Service Keyword (Optional)',
    queryFocusPlaceholder: 'e.g. Singapore AI Marketing Agency',
    submitButton: 'Generate AI Citation Snapshot',
    submittingText: 'Scanning AI Search Index...',

    industries: {
      'B2B Tech & SaaS': 'B2B Tech & SaaS',
      'Cross-border Logistics & Supply Chain': 'Cross-border Logistics & Supply Chain',
      'Fintech & Financial Services': 'Fintech & Financial Services',
      'Healthcare & Medical Devices': 'Healthcare & Medical Devices',
      'Luxury, Retail & E-commerce': 'Luxury, Retail & E-commerce',
      'Professional Services & Consulting': 'Professional Services & Consulting',
      'Education & EdTech': 'Education & EdTech',
    },
    markets: {
      'Singapore & Southeast Asia': 'Singapore & Southeast Asia',
      'Greater China (China, HK, TW)': 'Greater China (China, HK, TW)',
      'Global / North America': 'Global / North America',
    },

    loadingTitle: 'Analyzing AI Search Model Citations...',
    loadingSubtitle: 'Querying Perplexity & AI Search Index with targeted industry prompts',
    loadingSteps: [
      'Submitting core industry prompts to AI Search Engines...',
      'Extracting brand mention frequency & sentiment context...',
      'Verifying direct owned-domain URL citations in references...',
      'Analyzing top external authority domains cited by AI models...',
      'Evaluating technical AI crawler access & Schema markup readiness...',
      'Structuring executive-ready AI Citation Snapshot Report...',
    ],

    snapshotTitle: 'AI Citation Snapshot Diagnostic Report',
    snapshotSubtitle: 'Directional visibility audit measuring Brand Mention Rate and Direct Domain Citation Rate in AI Answers',
    generatedAt: 'Generated At',
    statusCompleted: 'Diagnostic Complete',

    mentionRateTitle: 'AI Brand Mention Rate',
    mentionRateTooltip: 'Percentage of evaluated AI queries where your brand name explicitly appears in the generated answer.',
    ownedCitationRateTitle: 'Owned Domain Citation Rate',
    ownedCitationTooltip: 'Percentage of AI answers where reference footnotes directly link to your official domain URL.',
    queriesEvaluatedTitle: 'Queries Sampled',
    competitorAvgTitle: 'Industry Competitor Average',

    previewSectionTitle: 'Preview Findings: AI Answer Snippets',
    previewSectionSubtitle: 'Previewing initial findings. Unlock the full report to access all 8 AI query breakdowns and site readiness notes.',
    fullSnippetsTitle: 'All Evaluated AI Answer Citation Snippets',
    topDomainsTitle: 'Top Citing External Authority Domains',
    siteReadinessTitle: 'Site AI Readiness & Crawler Technical Notes',
    recommendedActionsTitle: 'Top Recommended GEO Action Items',
    methodologyTitle: 'Methodology & Disclaimers',

    gateTitle: 'Unlock Full Executive Citation Report',
    gateSubtitle: 'Enter your business email to instantly unlock all 8 query snippets, external domain breakdowns, and actionable GEO technical steps.',
    gateFormEmail: 'Work Email Address',
    gateFormName: 'Your Full Name',
    gateFormTitle: 'Job Title / Role',
    gateFormPhone: 'Phone / WeChat',
    gateButton: 'Unlock Full Executive Report',
    gateBenefits: [
      'Access full breakdown of all 8 AI query answer snippets & citations',
      'View top external authority media & industry directory sources',
      'Receive technical Robots.txt & Schema entity markup recommendations',
      'Includes complimentary 1-on-1 strategy consultation with SG team',
    ],

    bookReviewBtn: 'Book 1-on-1 Strategy Review with SG Team',
    requestFullAuditBtn: 'Request Fuller China & Global GEO Audit',
    emailStrategistBtn: 'Email Lead Strategist (John)',
    backToInputBtn: 'Scan Another Brand',
    downloadPdfBtn: 'Export Summary Text',
    copiedLinkNotice: 'Report link copied to clipboard',
    unlockedBadge: 'Full Report Unlocked',
    lockedBadge: 'Preview Mode',
  },

  ms: {
    appTitle: 'AI Citation Snapshot',
    appSubtitle: 'Diagnostik Kebolehlihatan Carian AI HollyGlobe Singapore',
    demoBadge: 'DEMO DIAGNOSTIK PERCUMA',
    disclaimerBanner: 'Notis: Laporan ini menilai petikan model carian AI secara langsung sebagai sampel diagnostik, bukannya jaminan kedudukan GEO penuh.',

    formTitle: 'Semak Kebolehlihatan Jenama Anda dalam Jawapan AI',
    formDesc: 'Masukkan maklumat jenama anda untuk menjalankan penilaian langsung merentasi soalan utama industri. Ukur kadar sebutan jenama dan kadar petikan domain rasmi.',
    brandNameLabel: 'Nama Jenama / Syarikat',
    brandNamePlaceholder: 'Cth: HollyGlobe Singapore',
    websiteLabel: 'URL Laman Web Rasmi',
    websitePlaceholder: 'Cth: sghollyglobe.com',
    industryLabel: 'Sektor Industri',
    targetMarketLabel: 'Pasaran Sasaran',
    competitorsLabel: 'Pesaing Utama (Pilihan)',
    competitorsPlaceholder: 'Pisahkan dengan koma, Cth: Competitor A, Competitor B',
    targetLanguageLabel: 'Bahasa Laporan',
    queryFocusLabel: 'Kata Kunci Produk / Perkhidmatan (Pilihan)',
    queryFocusPlaceholder: 'Cth: Agensi Pemasaran AI Singapore',
    submitButton: 'Jana AI Citation Snapshot',
    submittingText: 'Memeriksa Indeks Carian AI...',

    industries: {
      'B2B Tech & SaaS': 'B2B Teknologi & SaaS',
      'Cross-border Logistics & Supply Chain': 'Logistik Merentas Sempadan & Rantai Bekalan',
      'Fintech & Financial Services': 'Fintech & Perkhidmatan Kewangan',
      'Healthcare & Medical Devices': 'Kesihatan & Peranti Perubatan',
      'Luxury, Retail & E-commerce': 'Mewah, Runcit & E-dagang',
      'Professional Services & Consulting': 'Perkhidmatan Profesional & Perundingan',
      'Education & EdTech': 'Pendidikan & EdTech',
    },
    markets: {
      'Singapore & Southeast Asia': 'Singapura & Asia Tenggara',
      'Greater China (China, HK, TW)': 'Greater China (China, HK, TW)',
      'Global / North America': 'Global / Amerika Utara',
    },

    loadingTitle: 'Menganalisis Petikan Model Carian AI...',
    loadingSubtitle: 'Memeriksa Perplexity & Indeks Carian AI dengan soalan industri sasaran',
    loadingSteps: [
      'Menghantar soalan industri utama ke Enjin Carian AI...',
      'Mengekstrak frekuensi sebutan jenama & konteks sentimen...',
      'Mengesahkan petikan pautan terus ke domain rasmi...',
      'Menganalisis domain luar berautoriti yang dipetik oleh AI...',
      'Menilai akses crawler AI teknikal & kesediaan penandaan Schema...',
      'Menyusun Laporan AI Citation Snapshot eksekutif...',
    ],

    snapshotTitle: 'Laporan Diagnostik AI Citation Snapshot',
    snapshotSubtitle: 'Penilaian keterlihatan mengukur Kadar Sebutan Jenama dan Kadar Petikan Domain Rasmi dalam Jawapan AI',
    generatedAt: 'Dijana Pada',
    statusCompleted: 'Diagnostik Selesai',

    mentionRateTitle: 'Kadar Sebutan Jenama AI',
    mentionRateTooltip: 'Peratusan carian AI yang dinilai di mana nama jenama anda muncul secara eksplisit dalam jawapan.',
    ownedCitationRateTitle: 'Kadar Petikan Domain Rasmi',
    ownedCitationTooltip: 'Peratusan jawapan AI di mana nota kaki rujukan memaut terus ke URL domain rasmi anda.',
    queriesEvaluatedTitle: 'Sampel Soalan Dinilai',
    competitorAvgTitle: 'Purata Pesaing Industri',

    previewSectionTitle: 'Penemuan Pratonton: Cuplikan Jawapan AI',
    previewSectionSubtitle: 'Pratonton penemuan awal. Buka laporan penuh untuk mengakses kesemua 8 analisis soalan AI.',
    fullSnippetsTitle: 'Semua Cuplikan Petikan Jawapan AI Dinilai',
    topDomainsTitle: 'Domain Autoriti Luar Teratas Yang Dipetik',
    siteReadinessTitle: 'Nota Kesediaan AI & Akses Crawler Teknikal Laman Web',
    recommendedActionsTitle: 'Tindakan GEO Syor Teratas',
    methodologyTitle: 'Metodologi & Penafian',

    gateTitle: 'Buka Laporan Petikan Eksekutif Penuh',
    gateSubtitle: 'Masukkan e-mel perniagaan anda untuk membuka kunci kesemua 8 soalan, senarai domain luar, dan langkah teknikal GEO.',
    gateFormEmail: 'E-mel Perniagaan',
    gateFormName: 'Nama Penuh Anda',
    gateFormTitle: 'Jawatan / Peranan',
    gateFormPhone: 'Telefon / WeChat',
    gateButton: 'Buka Laporan Eksekutif Penuh',
    gateBenefits: [
      'Akses pecahan penuh kesemua 8 cuplikan jawapan & petikan carian AI',
      'Lihat media autoriti luar teratas & sumber direktori industri',
      'Terima syorkan pengubahsuaian teknikal Robots.txt & Schema entity',
      'Termasuk sesi perundingan strategi 1-on-1 percuma dengan pasukan SG',
    ],

    bookReviewBtn: 'Tempah Semakan Strategi 1-on-1 Pasukan SG',
    requestFullAuditBtn: 'Minta Audit GEO Penuh China & Global',
    emailStrategistBtn: 'E-mel Ketua Ahli Strategi (John)',
    backToInputBtn: 'Imbas Jenama Lain',
    downloadPdfBtn: 'Eksport Teks Ringkasan',
    copiedLinkNotice: 'Pautan laporan disalin ke papan keratan',
    unlockedBadge: 'Laporan Penuh Dibuka',
    lockedBadge: 'Mod Pratonton',
  },
};
