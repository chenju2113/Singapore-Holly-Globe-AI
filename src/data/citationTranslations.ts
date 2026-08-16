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
  recommendationRateTitle: string;
  recommendationRateTooltip: string;

  // Sections
  brandIndicatorsTitle: string;
  brandIndicatorsSubtitle: string;
  keywordPlatformStatsTitle: string;
  keywordPlatformStatsSubtitle: string;
  platformRecommendationTitle: string;
  platformRecommendationSubtitle: string;
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
  auditErrorTitle: string;
  auditErrorBody: string;
  auditRetryBtn: string;
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
      'Technology, SaaS & Digital Services': '科技、SaaS 与数字服务',
      'Finance, Fintech & Professional Services': '金融、金融科技与专业服务',
      'Healthcare, Medical Devices & Wellness': '医疗健康、医疗器械与大健康',
      'FMCG, Food & Beverage & Consumer Brands': '快消品、餐饮食品与消费品牌',
      'Retail, E-commerce, Beauty & Lifestyle': '零售、跨境电商、美妆与生活方式',
      'Travel, Hospitality & Tourism': '旅游、酒店与文旅出海',
      'Logistics, Manufacturing, Automotive & Industrial': '物流供应链、先进制造、汽车与工业',
      'Education, Real Estate, Media & Entertainment': '教育培训、房地产、媒体与娱乐',
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
    recommendationRateTitle: 'AI 推荐正向率',
    recommendationRateTooltip: '在本次采样平台中，AI 结果呈现为正向推荐或明确背书的比例。',

    brandIndicatorsTitle: 'AI搜索品牌指标',
    brandIndicatorsSubtitle: '把分散的引用结果压缩成更适合决策的品牌信号指标。',
    keywordPlatformStatsTitle: '按关键词各平台数据统计',
    keywordPlatformStatsSubtitle: '按查询词拆开看每个平台是否提及品牌、是否引用官网，以及推荐倾向。',
    platformRecommendationTitle: 'AI全平台推荐率',
    platformRecommendationSubtitle: '基于本次实际采样到的平台集合统计；后续接入更多 AI provider 时会自动扩展。',
    previewSectionTitle: '预览摘要：AI 回答引用片段示例',
    previewSectionSubtitle: '下方展示部分已解锁的 AI 回答片段，完整 8 项深度分析与改进建议需解锁后查看',
    fullSnippetsTitle: '全量 AI 回答引用切片明细',
    topDomainsTitle: '主要被 AI 采信引用的第三方权威域名',
    siteReadinessTitle: '网站 AI 检索抓取与结构化就绪度评估',
    recommendedActionsTitle: '优先执行的 GEO 优化建议',
    methodologyTitle: '诊断方法论与声明',

    gateTitle: '解锁完整版 China AI 机会报告',
    gateSubtitle: '提交您的业务联系方式，立即解锁完整引用片段、权威域名拆解，以及 China AI review 的下一步入口。',
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

    bookReviewBtn: '预约 China AI Citation Review',
    requestFullAuditBtn: '获取 China AI 深度报告',
    emailStrategistBtn: '邮件联系首席策略师 (John)',
    backToInputBtn: '重新输入检测其他品牌',
    downloadPdfBtn: '导出摘要文本',
    copiedLinkNotice: '已复制报告链接',
    unlockedBadge: '完整版已解锁',
    lockedBadge: '受限预览中',
    auditErrorTitle: '报告生成失败',
    auditErrorBody: '后端没有返回真实 workflow 结果，请检查脚本配置后重试。',
    auditRetryBtn: '重试',
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
      'Technology, SaaS & Digital Services': 'Technology, SaaS & Digital Services',
      'Finance, Fintech & Professional Services': 'Finance, Fintech & Professional Services',
      'Healthcare, Medical Devices & Wellness': 'Healthcare, Medical Devices & Wellness',
      'FMCG, Food & Beverage & Consumer Brands': 'FMCG, Food & Beverage & Consumer Brands',
      'Retail, E-commerce, Beauty & Lifestyle': 'Retail, E-commerce, Beauty & Lifestyle',
      'Travel, Hospitality & Tourism': 'Travel, Hospitality & Tourism',
      'Logistics, Manufacturing, Automotive & Industrial': 'Logistics, Manufacturing, Automotive & Industrial',
      'Education, Real Estate, Media & Entertainment': 'Education, Real Estate, Media & Entertainment',
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
    recommendationRateTitle: 'AI Recommendation Rate',
    recommendationRateTooltip: 'Share of sampled AI results that recommend or positively endorse the brand.',

    brandIndicatorsTitle: 'AI Search Brand Indicators',
    brandIndicatorsSubtitle: 'Compress raw citation output into decision-ready signals for the brand.',
    keywordPlatformStatsTitle: 'Keyword-by-Platform Statistics',
    keywordPlatformStatsSubtitle: 'Break each query down by platform to show mention, owned-domain citation, and recommendation tendency.',
    platformRecommendationTitle: 'Cross-Platform AI Recommendation Rate',
    platformRecommendationSubtitle: 'Calculated from the currently sampled platform set; this expands automatically when more providers are connected.',
    previewSectionTitle: 'Preview Findings: AI Answer Snippets',
    previewSectionSubtitle: 'Previewing initial findings. Unlock the full report to access all 8 AI query breakdowns and site readiness notes.',
    fullSnippetsTitle: 'All Evaluated AI Answer Citation Snippets',
    topDomainsTitle: 'Top Citing External Authority Domains',
    siteReadinessTitle: 'Site AI Readiness & Crawler Technical Notes',
    recommendedActionsTitle: 'Top Recommended GEO Action Items',
    methodologyTitle: 'Methodology & Disclaimers',

    gateTitle: 'Unlock the Full China AI Opportunity Report',
    gateSubtitle: 'Enter your business email to unlock the full snippet set, authority-domain breakdowns, and the next-step China AI review offer.',
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

    bookReviewBtn: 'Book China AI Citation Review',
    requestFullAuditBtn: 'Get the China AI Deep-Dive',
    emailStrategistBtn: 'Email Lead Strategist (John)',
    backToInputBtn: 'Scan Another Brand',
    downloadPdfBtn: 'Export Summary Text',
    copiedLinkNotice: 'Report link copied to clipboard',
    unlockedBadge: 'Full Report Unlocked',
    lockedBadge: 'Preview Mode',
    auditErrorTitle: 'Report could not be generated',
    auditErrorBody: 'The backend did not return a real workflow result. Please try again after fixing the workflow configuration.',
    auditRetryBtn: 'Try again',
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
      'Technology, SaaS & Digital Services': 'Teknologi, SaaS & Perkhidmatan Digital',
      'Finance, Fintech & Professional Services': 'Kewangan, Fintech & Perkhidmatan Profesional',
      'Healthcare, Medical Devices & Wellness': 'Penjagaan Kesihatan, Peranti Perubatan & Kesejahteraan',
      'FMCG, Food & Beverage & Consumer Brands': 'FMCG, Makanan & Minuman & Jenama Pengguna',
      'Retail, E-commerce, Beauty & Lifestyle': 'Runcit, E-dagang, Kecantikan & Gaya Hidup',
      'Travel, Hospitality & Tourism': 'Pelancongan, Penginapan & Hospitality',
      'Logistics, Manufacturing, Automotive & Industrial': 'Logistik, Pembuatan, Automotif & Industri',
      'Education, Real Estate, Media & Entertainment': 'Pendidikan, Hartanah, Media & Hiburan',
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
    recommendationRateTitle: 'Kadar Syor AI',
    recommendationRateTooltip: 'Peratusan hasil AI yang memberi cadangan atau nada sokongan positif kepada jenama.',

    brandIndicatorsTitle: 'Penunjuk Jenama Dalam Carian AI',
    brandIndicatorsSubtitle: 'Menukarkan hasil sitasi mentah kepada isyarat jenama yang lebih mudah dibuat keputusan.',
    keywordPlatformStatsTitle: 'Statistik Mengikut Kata Kunci Dan Platform',
    keywordPlatformStatsSubtitle: 'Pecahkan setiap soalan mengikut platform untuk melihat sebutan jenama, petikan domain rasmi, dan kecenderungan syor.',
    platformRecommendationTitle: 'Kadar Syor AI Merentas Platform',
    platformRecommendationSubtitle: 'Dikira berdasarkan set platform yang benar-benar disampel dalam larian ini; akan berkembang sendiri apabila lebih banyak provider disambungkan.',
    previewSectionTitle: 'Penemuan Pratonton: Cuplikan Jawapan AI',
    previewSectionSubtitle: 'Pratonton penemuan awal. Buka laporan penuh untuk mengakses kesemua 8 analisis soalan AI.',
    fullSnippetsTitle: 'Semua Cuplikan Petikan Jawapan AI Dinilai',
    topDomainsTitle: 'Domain Autoriti Luar Teratas Yang Dipetik',
    siteReadinessTitle: 'Nota Kesediaan AI & Akses Crawler Teknikal Laman Web',
    recommendedActionsTitle: 'Tindakan GEO Syor Teratas',
    methodologyTitle: 'Metodologi & Penafian',

    gateTitle: 'Buka Laporan Peluang China AI Penuh',
    gateSubtitle: 'Masukkan e-mel perniagaan anda untuk membuka kunci set petikan penuh, pecahan domain autoriti, dan tawaran semakan China AI seterusnya.',
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

    bookReviewBtn: 'Tempah China AI Citation Review',
    requestFullAuditBtn: 'Dapatkan Laporan Mendalam China AI',
    emailStrategistBtn: 'E-mel Ketua Ahli Strategi (John)',
    backToInputBtn: 'Imbas Jenama Lain',
    downloadPdfBtn: 'Eksport Teks Ringkasan',
    copiedLinkNotice: 'Pautan laporan disalin ke papan keratan',
    unlockedBadge: 'Laporan Penuh Dibuka',
    lockedBadge: 'Mod Pratonton',
    auditErrorTitle: 'Laporan tidak dapat dijana',
    auditErrorBody: 'Bahagian belakang tidak mengembalikan hasil workflow yang sebenar. Sila cuba lagi selepas membetulkan konfigurasi.',
    auditRetryBtn: 'Cuba lagi',
  },

  ja: {
    appTitle: 'AI Citation Snapshot',
    appSubtitle: 'HollyGlobe シンガポールによるAI検索引用可視性 診断スナップショット',
    demoBadge: '無料診断デモ',
    disclaimerBanner: 'ご注意：本診断はPerplexity等のAI検索モデルにおける引用状況をサンプリング評価するデモであり、完全なGEO監査や順位保証を行うものではありません。',

    formTitle: 'AI検索の回答内におけるブランドの引用・言及状況を即時診断',
    formDesc: 'ブランド情報を入力すると、主要AI検索エンジンにおける業界コア検索をリアルタイムでサンプリングし、ブランド言及率および公式サイト引用率を分析します。',
    brandNameLabel: 'ブランド / 企業名',
    brandNamePlaceholder: '例：HollyGlobe Singapore',
    websiteLabel: '公式ウェブサイト URL',
    websitePlaceholder: '例：sghollyglobe.com',
    industryLabel: '業界分野',
    targetMarketLabel: 'ターゲット展開市場',
    competitorsLabel: '主な競合企業（任意）',
    competitorsPlaceholder: 'カンマ区切りで入力（例：Competitor A, Competitor B）',
    targetLanguageLabel: 'レポート言語',
    queryFocusLabel: 'コア製品 / サービスキーワード（任意）',
    queryFocusPlaceholder: '例：Singapore AI Marketing Agency',
    submitButton: 'AI引用スナップショットレポートを生成',
    submittingText: 'AI検索インデックスを解析中...',

    industries: {
      'Technology, SaaS & Digital Services': 'テクノロジー・SaaS・デジタルサービス',
      'Finance, Fintech & Professional Services': '金融・フィンテック・専門サービス',
      'Healthcare, Medical Devices & Wellness': 'ヘルスケア・医療機器・ウェルネス',
      'FMCG, Food & Beverage & Consumer Brands': '日用品・飲食・消費者ブランド',
      'Retail, E-commerce, Beauty & Lifestyle': '小売・越境EC・コスメ・ライフスタイル',
      'Travel, Hospitality & Tourism': '旅行・ホテル・インバウンド観光',
      'Logistics, Manufacturing, Automotive & Industrial': '物流サプライチェーン・先端製造・自動車・工業',
      'Education, Real Estate, Media & Entertainment': '教育・不動産・メディア・エンターテインメント',
    },
    markets: {
      'Singapore & Southeast Asia': 'シンガポールおよび東南アジア市場',
      'Greater China (China, HK, TW)': '中華圏市場（中国本土 / 香港 / 台湾）',
      'Global / North America': 'グローバル / 北米・欧州市場',
    },

    loadingTitle: 'AI検索モデルの引用診断を実行中...',
    loadingSubtitle: 'Perplexityおよび主要AIインデックスに対してターゲットクエリを発行し解析しています',
    loadingSteps: [
      '主要業界プロンプトをAI検索エンジンに送信中...',
      'ブランド言及（Mention）頻度およびコンテキスト感情を抽出中...',
      '参考リンク内の公式ドメイン直接引用率を検証中...',
      'AIモデルが参照している外部高権威ドメインを分析中...',
      'WebサイトのAIクローラーアクセスおよびSchema構造化データの準備状況を評価中...',
      'エグゼクティブ向け AI Citation Snapshot レポートを生成中...',
    ],

    snapshotTitle: 'AI引用可視性 スナップショット診断レポート',
    snapshotSubtitle: 'AI検索エンジンの生成回答における「ブランド言及率」および「公式ドメイン引用率」の段階的評価',
    generatedAt: '生成日時',
    statusCompleted: '診断分析完了',

    mentionRateTitle: 'AI検索ブランド言及率',
    mentionRateTooltip: '業界主要クエリにおいて、生成されたAI回答内に貴社ブランド名が直接出現した割合。',
    ownedCitationRateTitle: '公式ドメイン直接引用率',
    ownedCitationTooltip: 'AI回答の参考リンク（Citations）が貴社公式WebサイトのURLを直接参照している割合。',
    queriesEvaluatedTitle: '評価対象クエリサンプル数',
    competitorAvgTitle: '同業界競合他社の言及参照値',
    recommendationRateTitle: 'AI推奨・肯定率',
    recommendationRateTooltip: '今回サンプリングしたプラットフォームにおいて、AI回答が好意的または明確に推奨した割合。',

    brandIndicatorsTitle: 'AI検索ブランド指標',
    brandIndicatorsSubtitle: '分散した引用結果を、意思決定に直結するブランドシグナル指標として集約。',
    keywordPlatformStatsTitle: 'キーワード別・各プラットフォームデータ統計',
    keywordPlatformStatsSubtitle: 'クエリごとに各プラットフォームでのブランド言及・ドメイン引用・推奨傾向を詳細表示。',
    platformRecommendationTitle: 'AI全プラットフォーム推奨率',
    platformRecommendationSubtitle: '今回のサンプリング対象プラットフォーム群に基づく統計（新規プロバイダー接続時に自動拡張）。',
    previewSectionTitle: 'プレビュー概要：AI回答引用スニペット事例',
    previewSectionSubtitle: '一部のAI回答スニペットを表示中。全8項目の詳細分析と改善提案は完全版のロック解除後にご覧いただけます。',
    fullSnippetsTitle: '全AI回答引用スライス明細',
    topDomainsTitle: 'AIに高頻度で参照された外部権威ドメイン',
    siteReadinessTitle: 'WebサイトのAIクローラー巡回・構造化データ適合性評価',
    recommendedActionsTitle: '優先推奨GEO最適化アクション',
    methodologyTitle: '診断方法論および免責事項',

    gateTitle: '完全版 China AI 機会レポートをロック解除',
    gateSubtitle: 'ビジネス連絡先をご入力いただくことで、全引用スニペット、権威ドメイン分析、およびChina AI レビューの専用窓口を即座にアンロックできます。',
    gateFormEmail: '会社用メールアドレス',
    gateFormName: 'お名前',
    gateFormTitle: '役職 / 部署',
    gateFormPhone: '電話番号 / WeChat',
    gateButton: '完全版レポートをアンロック',
    gateBenefits: [
      '全8パターンのAI検索回答引用ソース詳細をアンロック',
      '業界トップの外部権威メディア・ディレクトリ一覧を取得',
      'Robots.txtおよびSchema構造化マークアップ改善ガイドを取得',
      'シンガポール専門アドバイザリーチームによる1on1戦略セッション（無料特典）',
    ],

    bookReviewBtn: 'China AI Citation Review を予約',
    requestFullAuditBtn: 'China AI 詳細監査レポートを請求',
    emailStrategistBtn: 'リードストラテジスト (John) にメール連絡',
    backToInputBtn: '他のブランドを診断する',
    downloadPdfBtn: '要約テキストを書き出す',
    copiedLinkNotice: 'レポートのリンクをクリップボードにコピーしました',
    unlockedBadge: '完全版アンロック済み',
    lockedBadge: 'プレビュー制限中',
    auditErrorTitle: 'レポートの生成に失敗しました',
    auditErrorBody: 'バックエンドから有効なワークフロー結果が返されませんでした。設定をご確認の上、再度お試しください。',
    auditRetryBtn: '再試行',
  },
};
