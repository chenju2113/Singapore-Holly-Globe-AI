export type Language = 'en' | 'zh' | 'ms' | 'vi' | 'ja';

export interface LanguageOption {
  code: Language;
  label: string;
  flag: string;
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'ms', label: 'Bahasa Melayu', flag: '🇲🇾' },
  { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
];

export const translations = {
  en: {
    // Header
    nav_geo_engine: 'GEO Engine',
    nav_command_center: 'Command Center',
    nav_product_matrix: 'Product Matrix',
    nav_case_studies: 'Case Studies',
    nav_methodology: 'Methodology',
    nav_faq: 'FAQ',
    nav_request_consultation: 'Request Consultation',
    nav_free_audit: 'Free GEO Audit',
    nav_select_language: 'Language',

    // Hero Section
    hero_badge: 'SINGAPORE · CHINA AI VISIBILITY ADVISORY',
    hero_title: "Make Your Brand Discoverable in China's AI Search Ecosystem",
    hero_subtitle: 'Online-first advisory helping Singapore & Southeast Asian enterprises optimize visibility across Baidu AI, DeepSeek, Douyin, Xiaohongshu, and WeChat AI engines.',
    hero_cta_consultation: 'Request Consultation',
    hero_cta_citation: 'Live AI Citation Engine',

    // Value Strip
    value_1_title: 'Remote-First B2B Advisory',
    value_1_desc: 'Online consultation & strategic reporting',
    value_2_title: 'Singapore Hub',
    value_2_desc: 'Bridge regional brands to China market',
    value_3_title: 'Dual-Engine GEO',
    value_3_desc: 'Baidu AI & DeepSeek citation optimization',
    value_4_title: 'Cross-Border Positioning',
    value_4_desc: 'China AI search ecosystem readiness',
    value_5_title: 'Full Compliance Support',
    value_5_desc: 'ICP & AI algorithm filing guidance',
    value_6_title: 'Data-Driven AI Audits',
    value_6_desc: 'Real-time brand visibility tracking',

    // Partners / Ecosystem Coverage
    partners_title: 'Supported China AI Platforms',
    partners_subtitle: 'Optimizing your brand presence across leading LLMs and conversational engines',
    platform_baidu_desc: 'Leading Chinese AI search engine with massive daily conversational query traffic.',
    platform_deepseek_desc: 'Next-gen reasoning AI engine widely adopted for complex knowledge synthesis.',
    platform_douyin_desc: 'Short-video AI recommendation & social search discovery engine in China.',
    platform_xiaohongshu_desc: 'Lifestyle & product recommendation search engine driven by authentic user notes.',
    platform_wechat_desc: 'WeChat ecosystem search powered by comprehensive article index and AI responses.',
    platform_tencent_desc: 'Enterprise & consumer LLM powering intelligent search across Tencent products.',

    // Command Center
    command_title: 'Real-Time GEO Command Center',
    command_subtitle: 'Simulated LLM index monitor and citation tracking dashboard for Singapore-to-China brands',
    command_live_status: 'Live Monitoring Active',
    command_run_audit: 'Run Free GEO Audit',
    command_platform_status: 'Platform Status',
    command_recent_activity: 'Live Audit Log',

    // Why GEO Section
    why_geo_badge: 'WHY GEO MATTERS',
    why_geo_title: 'Traditional SEO Is Evolving Into Generative Engine Optimization',
    why_geo_subtitle: 'Search engines are no longer returning just links—AI tools directly synthesize answers. If your brand is not indexed in training data and retrieval pipelines, you do not exist to China-bound users.',
    why_seo_title: 'Traditional SEO',
    why_seo_desc: 'Optimizes for keyword rankings and click-through rates on search engine result pages (SERPs).',
    why_geo_card_title: 'Generative Engine Optimization (GEO)',
    why_geo_card_desc: 'Optimizes brand entity recognition, structured citations, and inclusion in AI-generated answers.',
    step_1_title: '1. Brand Entity Mapping',
    step_1_desc: 'Establish clear Chinese brand entities across authoritative registries.',
    step_2_title: '2. Citation & RAG Seeding',
    step_2_desc: 'Inject high-authority reference content into target platform knowledge bases.',
    step_3_title: '3. LLM Monitoring & Tuning',
    step_3_desc: 'Continuously track LLM answer generation and optimize response accuracy.',
    learn_methodology: 'Learn Our GEO Methodology',

    // Mission & Values
    mission_badge: 'OUR MISSION',
    mission_title: 'Empowering Southeast Asian Brands with China AI Search Visibility',
    mission_desc: 'HollyGlobe Singapore bridges regional enterprises with China’s rapidly growing AI search landscape through remote advisory, technical optimization, and strategic content positioning.',
    value_trust_title: 'High-Trust Advisory',
    value_trust_desc: 'Singapore-anchored consulting standards with deep understanding of Chinese digital ecosystems.',
    value_tech_title: 'Deep Tech & GEO Expertise',
    value_tech_desc: 'Proprietary AI index monitoring algorithms tailored specifically for Baidu AI and DeepSeek.',
    value_remote_title: 'Online-First Efficiency',
    value_remote_desc: 'Seamless remote engagement model allowing fast turnaround and global collaboration.',

    // Who We Are
    who_badge: 'WHO WE ARE',
    who_title: 'Online-First B2B Advisory Based in Singapore',
    who_desc_1: 'HollyGlobe Singapore is a modern, remote-first consulting firm specializing in Generative Engine Optimization (GEO) for Southeast Asian brands entering or expanding in China.',
    who_desc_2: 'We combine Singapore international business standards with deep technical knowledge of Chinese AI search engines, helping regional enterprises win visibility in the new era of conversational search.',
    who_stat_1_val: '100%',
    who_stat_1_lbl: 'Remote Advisory',
    who_stat_2_val: '6+',
    who_stat_2_lbl: 'Major China AI Engines',
    who_stat_3_val: 'Dual',
    who_stat_3_lbl: 'Singapore-China Focus',
    who_btn_contact: 'Connect with an Advisor',

    // Industry Stats
    industry_badge: 'TARGET INDUSTRIES',
    industry_title: 'Tailored GEO Solutions for High-Trust Sectors',
    industry_subtitle: 'Sectors where China consumer trust and AI search recommendation accuracy matter most',
    ind_edu: 'Higher Education & Study Abroad',
    ind_fin: 'Financial & Advisory Services',
    ind_health: 'Healthcare & Medical Tourism',
    ind_luxury: 'Luxury & Hospitality',
    ind_tech: 'B2B SaaS & Enterprise Tech',
    ind_cross: 'Cross-Border E-Commerce',
    case_studies_btn: 'View Case Studies',

    // Core Tech
    tech_badge: 'CORE TECHNOLOGY',
    tech_title: 'Proprietary GEO & LLM Monitoring Architecture',
    tech_1_title: 'Multi-LLM Citation Scraper',
    tech_1_desc: 'Real-time query simulation across Baidu AI, DeepSeek, Yuanbao, and Douyin AI search.',
    tech_2_title: 'Entity Knowledge Graph Builder',
    tech_2_desc: 'Structuring Chinese brand assets for optimal retrieval by Retrieval-Augmented Generation (RAG) models.',
    tech_3_title: 'Sentiment & Share of Model (SoM) Analytics',
    tech_3_desc: 'Quantifying brand recommendation frequency compared to regional competitors.',

    // Patent & Product Matrix
    matrix_badge: 'SOLUTIONS MATRIX',
    matrix_title: 'Comprehensive AI Search Visibility Services',
    service_audit_title: 'GEO Visibility Audit',
    service_audit_desc: 'Comprehensive diagnostic of your current brand presence across 6 China AI search engines.',
    service_seeding_title: 'RAG Content Seeding',
    service_seeding_desc: 'Strategic injection of authoritative brand knowledge into Chinese digital indexes.',
    service_filing_title: 'Algorithm & ICP Compliance',
    service_filing_desc: 'Guidance on regulatory requirements and content compliance for China digital footprint.',
    service_retainer_title: 'Ongoing LLM Monitoring',
    service_retainer_desc: 'Monthly tracking, sentiment tuning, and proactive citation optimization.',

    // Compliance Support
    comp_badge: 'REGULATORY & COMPLIANCE',
    comp_title: 'Navigating China Digital Regulations with Confidence',
    comp_desc: 'We assist Singapore and international businesses in understanding mandatory compliance frameworks, including CAC AI algorithm filings, ICP requirements, and cross-border data protection standard contracts.',
    comp_item_1: 'CAC Generative AI Algorithm Filing Advisory',
    comp_item_2: 'ICP License & Domain Registration Support',
    comp_item_3: 'China Cross-Border Data Transfer Frameworks',
    comp_item_4: 'Brand IP & Trademark Safeguarding in China AI Indexes',

    // Global R&D
    rd_badge: 'GLOBAL NETWORK',
    rd_title: 'Singapore Hub with Regional Capabilities',
    rd_desc: 'Headquartered in Singapore, HollyGlobe delivers remote advisory services across Southeast Asia and China markets with high operational standards.',

    // FAQ Section
    faq_sec_badge: 'FAQ',
    faq_sec_title: 'Frequently Asked Questions',
    faq_sec_q1: 'What does HollyGlobe Singapore do?',
    faq_sec_a1: 'We help Singapore and regional brands improve AI visibility, GEO readiness, and cross-border discoverability for China-market growth.',
    faq_sec_q2: 'Do you work with clients remotely?',
    faq_sec_a2: 'Yes. HollyGlobe Singapore operates as an online-first business and supports clients remotely.',
    faq_sec_q3: 'Which markets do you focus on?',
    faq_sec_a3: 'Our core focus is Singapore-to-China visibility, with support for regional and cross-border brands as needed.',
    faq_view_all: 'View All FAQs',

    // CTA Section
    cta_title: 'Ready to Dominate China’s AI Search Engine Results?',
    cta_subtitle: 'Schedule a consultation with our Singapore advisory team or request a complimentary GEO Audit today.',
    cta_btn_consultation: 'Request Consultation',
    cta_btn_methodology: 'Explore Methodology',
    cta_btn_audit: 'Get Free Audit',

    // Footer
    footer_desc: 'HollyGlobe Singapore is an online-first advisory firm helping Singapore and regional brands build AI search visibility and GEO readiness for China-market discovery.',
    footer_quick_links: 'Quick Links',
    footer_services: 'Services',
    footer_legal: 'Legal & Info',
    footer_privacy: 'Privacy Policy',
    footer_terms: 'Terms of Service',
    footer_contact_us: 'Contact Us',
    footer_rights: 'All rights reserved.'
  },

  zh: {
    // Header
    nav_geo_engine: 'GEO 引擎',
    nav_command_center: '控制中心',
    nav_product_matrix: '产品矩阵',
    nav_case_studies: '客户案例',
    nav_methodology: '方法论',
    nav_faq: '常见问题',
    nav_request_consultation: '预约咨询',
    nav_free_audit: '免费 GEO 评估',
    nav_select_language: '选择语言',

    // Hero Section
    hero_badge: '新加坡 · 中国 AI 可视化咨询顾问',
    hero_title: '让您的品牌在中国 AI 搜索引擎生态中触手可及',
    hero_subtitle: '线上优先的专业咨询机构，助力新加坡及东南亚企业在百度 AI、DeepSeek、抖音、小红书和微信 AI 中提升品牌能见度与引用率。',
    hero_cta_consultation: '预约咨询',
    hero_cta_citation: '实时 AI 引用引擎',

    // Value Strip
    value_1_title: '远程 B2B 咨询模式',
    value_1_desc: '在线高效沟通与战略方案交付',
    value_2_title: '新加坡顾问枢纽',
    value_2_desc: '连接东南亚本土品牌与中国市场',
    value_3_title: '双引擎 GEO 优化',
    value_3_desc: '百度 AI 与 DeepSeek 引用深度优化',
    value_4_title: '跨国 AI 品牌定位',
    value_4_desc: '全面迎合中国 AI 搜索引用机制',
    value_5_title: '合规与备案支持',
    value_5_desc: 'ICP 备案与大模型算法合规指导',
    value_6_title: '数据驱动 AI 审计',
    value_6_desc: '实时监测品牌在各大 AI 中的能见度',

    // Partners / Ecosystem Coverage
    partners_title: '支持的中国主流 AI 平台',
    partners_subtitle: '全面优化您的品牌在大语言模型与对话式 AI 引擎中的推荐权重',
    platform_baidu_desc: '中国领先的 AI 搜索引擎，拥有海量每日对话式搜索流量。',
    platform_deepseek_desc: '新一代深度推理 AI 引擎，广泛应用于复杂知识检索与合成。',
    platform_douyin_desc: '基于短视频与社交引用的中国领先智能推荐与搜索生态。',
    platform_xiaohongshu_desc: '以真实用户笔记和产品推荐为主的生活方式 AI 搜推引擎。',
    platform_wechat_desc: '基于微信生态海量公众号文章索引与 AI 智能回答的搜索系统。',
    platform_tencent_desc: '腾讯企业级与消费级大模型，为多款产品提供智能搜索支持。',

    // Command Center
    command_title: '实时 GEO 指挥控制中心',
    command_subtitle: '面向新加坡及跨国品牌的模拟 LLM 索引监测与引用追踪看板',
    command_live_status: '实时监测运行中',
    command_run_audit: '运行免费 GEO 评估',
    command_platform_status: '平台运行状态',
    command_recent_activity: '实时审计日志',

    // Why GEO Section
    why_geo_badge: '为什么选择 GEO',
    why_geo_title: '传统 SEO 正在全面演变为生成式引擎优化 (GEO)',
    why_geo_subtitle: '搜索引擎不再只是返回链接，AI 正在直接生成答案。如果您的品牌未被纳入 AI 训练数据与检索增强 (RAG) 知识库，在中国目标用户面前您将不复存在。',
    why_seo_title: '传统 SEO',
    why_seo_desc: '侧重于搜索引擎结果页 (SERP) 的关键词排名与点击率优化。',
    why_geo_card_title: '生成式引擎优化 (GEO)',
    why_geo_card_desc: '侧重于品牌实体识别、结构化引用注入以及在 AI 生成回答中的推荐权重。',
    step_1_title: '1. 品牌实体构建',
    step_1_desc: '在权威数据源中建立清晰的中文品牌实体映射。',
    step_2_title: '2. 引用与 RAG 植入',
    step_2_desc: '向目标平台知识库注入高权威性的品牌参考内容。',
    step_3_title: '3. LLM 监测与调优',
    step_3_desc: '持续追踪各大 AI 模型的回答生成效果并优化响应准确度。',
    learn_methodology: '了解我们的 GEO 方法论',

    // Mission & Values
    mission_badge: '我们的使命',
    mission_title: '赋能东南亚企业，构建中国 AI 搜索高能见度',
    mission_desc: 'HollyGlobe 新加坡通过远程咨询、技术优化与战略内容定位，搭建东南亚企业与中国快速发展的 AI 搜索生态之间的桥梁。',
    value_trust_title: '高信赖咨询标准',
    value_trust_desc: '依托新加坡国际商业标准，深入理解中国数字生态运行逻辑。',
    value_tech_title: '深厚技术与 GEO 专长',
    value_tech_desc: '针对百度 AI 和 DeepSeek 专研的自研 AI 索引监测与优化算法。',
    value_remote_title: '线上优先的高效沟通',
    value_remote_desc: '全远程服务模式，确保快速响应与高效的全球跨区域协作。',

    // Who We Are
    who_badge: '关于我们',
    who_title: '立足新加坡的线上优先 B2B 咨询机构',
    who_desc_1: 'HollyGlobe 新加坡是一家现代化的线上优先咨询公司，专注于为进军中国或在华扩展的东南亚品牌提供生成式引擎优化 (GEO) 服务。',
    who_desc_2: '我们将新加坡国际商业规范与中国 AI 搜索引擎的技术深度相结合，帮助区域企业在对话式搜索新时代赢取品牌曝光。',
    who_stat_1_val: '100%',
    who_stat_1_lbl: '远程在线咨询',
    who_stat_2_val: '6+',
    who_stat_2_lbl: '中国主流 AI 引擎',
    who_stat_3_val: '双向',
    who_stat_3_lbl: '新加坡-中国市场焦点',
    who_btn_contact: '联系我们的资深顾问',

    // Industry Stats
    industry_badge: '目标行业',
    industry_title: '针对高信赖度行业的定制化 GEO 方案',
    industry_subtitle: '聚焦中国消费者信任度与 AI 搜索推荐准确度至关重要的核心领域',
    ind_edu: '高等教育与留学咨询',
    ind_fin: '金融与专业咨询服务',
    ind_health: '医疗健康与跨境医疗',
    ind_luxury: '高端奢品与酒店文旅',
    ind_tech: 'B2B SaaS 与企业级科技',
    ind_cross: '跨境电商与出海品牌',
    case_studies_btn: '查看客户案例',

    // Core Tech
    tech_badge: '核心技术',
    tech_title: '自研 GEO 与 LLM 监测技术架构',
    tech_1_title: '多 LLM 引用抓取引擎',
    tech_1_desc: '跨百度 AI、DeepSeek、元宝与抖音 AI 搜索进行实时查询模拟。',
    tech_2_title: '实体知识图谱构建器',
    tech_2_desc: '对中文品牌资产进行结构化处理，使其更易被 RAG 检索模型采纳。',
    tech_3_title: '品牌情绪与模型份额 (SoM) 分析',
    tech_3_desc: '量化品牌在 AI 中的推荐频次并与区域竞品进行对比分析。',

    // Patent & Product Matrix
    matrix_badge: '服务矩阵',
    matrix_title: '全方位 AI 搜索能见度提升服务',
    service_audit_title: 'GEO 品牌能见度审计',
    service_audit_desc: '全面诊断您的品牌在中国 6 大主流 AI 搜索引擎中的现状。',
    service_seeding_title: 'RAG 权威内容植入',
    service_seeding_desc: '战略性地将高权威品牌知识注入中国数字索引与知识库中。',
    service_filing_title: '算法备案与 ICP 合规支持',
    service_filing_desc: '针对中国数字生态监管要求与内容合规提供全面指导。',
    service_retainer_title: '常年 LLM 能见度监测',
    service_retainer_desc: '按月追踪、品牌情绪调优与主动式引用优化服务。',

    // Compliance Support
    comp_badge: '监管与合规',
    comp_title: '从容应对中国数字生态监管要求',
    comp_desc: '我们协助新加坡及国际企业理解必要的合规框架，包括网信办 AI 算法备案、ICP 备案以及数据出境标准合同要求。',
    comp_item_1: '网信办生成式 AI 算法备案咨询',
    comp_item_2: 'ICP 许可证与域名备案辅助',
    comp_item_3: '中国跨境数据传输合规框架指导',
    comp_item_4: '中国 AI 索引中的品牌知识产权保护',

    // Global R&D
    rd_badge: '全球网络',
    rd_title: '新加坡枢纽与区域服务能力',
    rd_desc: '总部位于新加坡，HollyGlobe 以严谨的高标准为东南亚及中国市场客户提供优质的远程咨询服务。',

    // FAQ Section
    faq_sec_badge: '常见问题',
    faq_sec_title: '常见问题解答',
    faq_sec_q1: 'HollyGlobe 新加坡提供哪些业务？',
    faq_sec_a1: '我们帮助新加坡及区域品牌提升 AI 能见度、GEO 准备度以及面向中国市场的跨国可搜索性。',
    faq_sec_q2: '你们是否支持远程合作？',
    faq_sec_a2: '是的。HollyGlobe 新加坡采用线上优先模式，完全支持远程为客户提供咨询。',
    faq_sec_q3: '你们核心关注哪些市场？',
    faq_sec_a3: '我们的核心焦点是新加坡至中国的能见度，同时也为区域与跨国品牌提供针对性支持。',
    faq_view_all: '查看所有常见问题',

    // CTA Section
    cta_title: '准备好占据中国 AI 搜索引擎前排了吗？',
    cta_subtitle: '立即与我们位于新加坡的咨询团队预约沟通，或申请一份免费的 GEO 能见度评估报告。',
    cta_btn_consultation: '预约咨询',
    cta_btn_methodology: '探索方法论',
    cta_btn_audit: '获取免费评估',

    // Footer
    footer_desc: 'HollyGlobe 新加坡是一家线上优先的咨询机构，致力于帮助新加坡及区域品牌建立 AI 搜索能见度与 GEO 准备度。',
    footer_quick_links: '快速链接',
    footer_services: '服务项目',
    footer_legal: '法律与信息',
    footer_privacy: '隐私政策',
    footer_terms: '服务条款',
    footer_contact_us: '联系我们',
    footer_rights: '保留所有权利。'
  },

  ms: {
    // Header
    nav_geo_engine: 'Enjin GEO',
    nav_command_center: 'Pusat Kawalan',
    nav_product_matrix: 'Matriks Produk',
    nav_case_studies: 'Kajian Kes',
    nav_methodology: 'Metodologi',
    nav_faq: 'Soalan Lazim',
    nav_request_consultation: 'Minta Konsultasi',
    nav_free_audit: 'Audit GEO Percuma',
    nav_select_language: 'Pilih Bahasa',

    // Hero Section
    hero_badge: 'PENASIHAT KETERLIHATAN AI SINGAPURA · CHINA',
    hero_title: 'Jadikan Jenama Anda Mudah Ditemui Dalam Ekosistem Carian AI China',
    hero_subtitle: 'Firma penasihat utamakan dalam talian membantu perusahaan Singapura & Asia Tenggara mengoptimumkan keterlihatan di Baidu AI, DeepSeek, Douyin, Xiaohongshu, dan WeChat AI.',
    hero_cta_consultation: 'Minta Konsultasi',
    hero_cta_citation: 'Enjin Petikan AI Langsung',

    // Value Strip
    value_1_title: 'Penasihat B2B Dalam Talian',
    value_1_desc: 'Konsultasi dalam talian & pelaporan strategik',
    value_2_title: 'Hub Singapura',
    value_2_desc: 'Jembatan jenama serantau ke pasaran China',
    value_3_title: 'GEO Enjin Berganda',
    value_3_desc: 'Pengoptimuman petikan Baidu AI & DeepSeek',
    value_4_title: 'Kedudukan AI Rentas Sempadan',
    value_4_desc: 'Kesediaan ekosistem carian AI China',
    value_5_title: 'Sokongan Pematuhan Penuh',
    value_5_desc: 'Panduan pendaftaran ICP & algoritma AI',
    value_6_title: 'Audit AI Berpacukan Data',
    value_6_desc: 'Penjejakan keterlihatan jenama masa nyata',

    // Partners / Ecosystem Coverage
    partners_title: 'Platform AI China Yang Disokong',
    partners_subtitle: 'Mengoptimumkan kehadiran jenama anda di seluruh enjin LLM utama',
    platform_baidu_desc: 'Enjin carian AI utama China dengan trafik carian berbual harian yang besar.',
    platform_deepseek_desc: 'Enjin AI penaakulan generasi baru yang digunakan secara meluas untuk sintesis pengetahuan.',
    platform_douyin_desc: 'Carian pengesyoran AI video pendek & penemuan sosial di China.',
    platform_xiaohongshu_desc: 'Enjin carian gaya hidup & cadangan produk berpandukan nota pengguna.',
    platform_wechat_desc: 'Carian ekosistem WeChat dikuasakan oleh indeks artikel dan jawapan AI.',
    platform_tencent_desc: 'LLM perusahaan & pengguna Tencent yang menguasai carian pintar.',

    // Command Center
    command_title: 'Pusat Kawalan GEO Masa Nyata',
    command_subtitle: 'Penjejak indeks LLM dan papan pemuka petikan untuk jenama Singapura ke China',
    command_live_status: 'Pemantauan Langsung Aktif',
    command_run_audit: 'Jalankan Audit GEO Percuma',
    command_platform_status: 'Status Platform',
    command_recent_activity: 'Log Audit Langsung',

    // Why GEO Section
    why_geo_badge: 'KENAPA GEO PENTING',
    why_geo_title: 'SEO Tradisional Kini Berubah Menjadi Generative Engine Optimization',
    why_geo_subtitle: 'Enjin carian tidak lagi sekadar memulangkan pautan—alat AI menghasilkan jawapan secara langsung. Jika jenama anda tidak diindeks dalam data latihan, anda tidak wujud bagi pengguna sasaran.',
    why_seo_title: 'SEO Tradisional',
    why_seo_desc: 'Mengoptimumkan kedudukan kata kunci dan kadar klik di halaman carian (SERP).',
    why_geo_card_title: 'Generative Engine Optimization (GEO)',
    why_geo_card_desc: 'Mengoptimumkan pengenalan entiti jenama, petikan terstruktur, dan kemasukan dalam jawapan AI.',
    step_1_title: '1. Pemetaan Entiti Jenama',
    step_1_desc: 'Membina entiti jenama Bahasa Cina yang jelas di pendaftar berautoriti.',
    step_2_title: '2. Pembenihan Petikan & RAG',
    step_2_desc: 'Memasukkan kandungan rujukan berautoriti tinggi ke dalam pangkalan pengetahuan.',
    step_3_title: '3. Pemantauan & Penyelarasan LLM',
    step_3_desc: 'Jejak secara berterusan jawapan AI dan optimalkan ketepatan maklum balas.',
    learn_methodology: 'Ketahui Metodologi GEO Kami',

    // Mission & Values
    mission_badge: 'MISI KAMI',
    mission_title: 'Memperkasakan Jenama Asia Tenggara Dengan Keterlihatan Carian AI China',
    mission_desc: 'HollyGlobe Singapore menghubungkan perusahaan serantau dengan landskap carian AI China melalui penasihat dalam talian, pengoptimuman teknikal, dan kedudukan kandungan.',
    value_trust_title: 'Penasihat Kepercayaan Tinggi',
    value_trust_desc: 'Piawaian konsultasi berpusat di Singapura dengan pemahaman mendalam tentang ekosistem digital China.',
    value_tech_title: 'Kepakaran Teknologi & GEO',
    value_tech_desc: 'Algoritma pemantauan indeks AI khusus untuk Baidu AI dan DeepSeek.',
    value_remote_title: 'Kecekapan Utamakan Dalam Talian',
    value_remote_desc: 'Model hubungan dalam talian yang lancar membolehkan tindakan pantas dan kolaborasi global.',

    // Who We Are
    who_badge: 'SIAPA KAMI',
    who_title: 'Firma Penasihat B2B Utamakan Dalam Talian Di Singapura',
    who_desc_1: 'HollyGlobe Singapore ialah firma penasihat moden dalam talian yang pakar dalam Generative Engine Optimization (GEO) untuk jenama Asia Tenggara yang berkembang ke China.',
    who_desc_2: 'Kami menggabungkan piawaian perniagaan antarabangsa Singapura dengan pengetahuan teknikal mendalam tentang enjin carian AI China.',
    who_stat_1_val: '100%',
    who_stat_1_lbl: 'Penasihat Dalam Talian',
    who_stat_2_val: '6+',
    who_stat_2_lbl: 'Enjin AI Utama China',
    who_stat_3_val: 'Dwi',
    who_stat_3_lbl: 'Fokus Singapura-China',
    who_btn_contact: 'Hubungi Penasihat Kami',

    // Industry Stats
    industry_badge: 'INDUSTRI SASARAN',
    industry_title: 'Penyelesaian GEO Khusus Untuk Sektor Kepercayaan Tinggi',
    industry_subtitle: 'Sektor di mana kepercayaan pengguna China dan ketepatan cadangan carian AI amat penting',
    ind_edu: 'Pendidikan Tinggi & Pengajian Luar Negara',
    ind_fin: 'Perkhidmatan Kewangan & Penasihat',
    ind_health: 'Penjagaan Kesihatan & Pelancongan Perubatan',
    ind_luxury: 'Barangan Mewah & Perhotelan',
    ind_tech: 'B2B SaaS & Teknologi Perusahaan',
    ind_cross: 'E-Dagang Rentas Sempadan',
    case_studies_btn: 'Lihat Kajian Kes',

    // Core Tech
    tech_badge: 'TEKNOLOGI TERAS',
    tech_title: 'Seni Bina Pemantauan GEO & LLM Hak Cipta',
    tech_1_title: 'Pengikis Petikan Multi-LLM',
    tech_1_desc: 'Simulasi pertanyaan masa nyata di Baidu AI, DeepSeek, Yuanbao, dan Douyin AI.',
    tech_2_title: 'Pembina Graf Pengetahuan Entiti',
    tech_2_desc: 'Struktur aset jenama untuk pengambilan optimum oleh model RAG.',
    tech_3_title: 'Analitik Sentimen & Bahagian Model (SoM)',
    tech_3_desc: 'Mengukur kekerapan cadangan jenama berbanding pesaing serantau.',

    // Patent & Product Matrix
    matrix_badge: 'MATRIKS PERKHIDMATAN',
    matrix_title: 'Perkhidmatan Keterlihatan Carian AI Komprehensif',
    service_audit_title: 'Audit Keterlihatan GEO',
    service_audit_desc: 'Diagnostik komprehensif kehadiran jenama anda di 6 enjin carian AI China.',
    service_seeding_title: 'Pembenihan Kandungan RAG',
    service_seeding_desc: 'Suntikan strategik pengetahuan jenama ke dalam indeks digital China.',
    service_filing_title: 'Pematuhan Algoritma & ICP',
    service_filing_desc: 'Panduan syarat kawal selia dan pematuhan kandungan di China.',
    service_retainer_title: 'Pemantauan LLM Berterusan',
    service_retainer_desc: 'Penjejakan bulanan, penyelarasan sentimen, dan pengoptimuman petikan proaktif.',

    // Compliance Support
    comp_badge: 'KAWAL SELIA & PEMATUHAN',
    comp_title: 'Menghadapi Peraturan Digital China Dengan Yakin',
    comp_desc: 'Kami membantu perniagaan Singapura dan antarabangsa memahami rangka kerja pematuhan termasuk pendaftaran algoritma AI CAC, syarat ICP, dan pemindahan data rentas sempadan.',
    comp_item_1: 'Penasihat Pendaftaran Algoritma AI Generatif CAC',
    comp_item_2: 'Sokongan Lesen ICP & Pendaftaran Domain',
    comp_item_3: 'Rangka Kerja Pemindahan Data Rentas Sempadan China',
    comp_item_4: 'Perlindungan Hak Cipta & Cap Dagangan Jenama Dalam AI China',

    // Global R&D
    rd_badge: 'RANGKAIAN GLOBAL',
    rd_title: 'Hub Singapura Dengan Keupayaan Serantau',
    rd_desc: 'Beribu pejabat di Singapura, HollyGlobe menyampaikan perkhidmatan penasihat dalam talian ke seluruh Asia Tenggara dan China dengan piawaian tinggi.',

    // FAQ Section
    faq_sec_badge: 'SOALAN LAZIM',
    faq_sec_title: 'Soalan Yang Sering Ditanya',
    faq_sec_q1: 'Apakah yang dilakukan oleh HollyGlobe Singapore?',
    faq_sec_a1: 'Kami membantu jenama Singapura dan serantau meningkatkan keterlihatan AI, kesediaan GEO, dan kebolehpenemuan rentas sempadan untuk pertumbuhan pasaran China.',
    faq_sec_q2: 'Adakah anda bekerja dengan klien secara dalam talian?',
    faq_sec_a2: 'Ya. HollyGlobe Singapore beroperasi secara utamakan dalam talian dan menyokong klien secara jarak jauh.',
    faq_sec_q3: 'Pasaran manakah yang anda fokuskan?',
    faq_sec_a3: 'Fokus teras kami ialah keterlihatan Singapura-ke-China, dengan sokongan untuk jenama serantau dan rentas sempadan mengikut keperluan.',
    faq_view_all: 'Lihat Semua Soalan Lazim',

    // CTA Section
    cta_title: 'Bersedia Mendominasi Keputusan Carian AI China?',
    cta_subtitle: 'Jadualkan konsultasi dengan pasukan penasihat Singapura kami atau minta Audit GEO percuma hari ini.',
    cta_btn_consultation: 'Minta Konsultasi',
    cta_btn_methodology: 'Terokai Metodologi',
    cta_btn_audit: 'Dapatkan Audit Percuma',

    // Footer
    footer_desc: 'HollyGlobe Singapore ialah firma penasihat utamakan dalam talian yang membantu jenama Singapura dan serantau membina keterlihatan carian AI.',
    footer_quick_links: 'Pautan Pantas',
    footer_services: 'Perkhidmatan',
    footer_legal: 'Undang-undang & Info',
    footer_privacy: 'Dasar Privasi',
    footer_terms: 'Syarat Perkhidmatan',
    footer_contact_us: 'Hubungi Kami',
    footer_rights: 'Hak cipta terpelihara.'
  },

  vi: {
    // Header
    nav_geo_engine: 'Động cơ GEO',
    nav_command_center: 'Trung tâm điều khiển',
    nav_product_matrix: 'Ma trận sản phẩm',
    nav_case_studies: 'Nghiên cứu điển hình',
    nav_methodology: 'Phương pháp luận',
    nav_faq: 'Câu hỏi thường gặp',
    nav_request_consultation: 'Yêu cầu tư vấn',
    nav_free_audit: 'Đánh giá GEO miễn phí',
    nav_select_language: 'Chọn ngôn ngữ',

    // Hero Section
    hero_badge: 'TƯ VẤN HIỂN THỊ AI SINGAPORE · TRUNG QUỐC',
    hero_title: 'Giúp thương hiệu của bạn xuất hiện nổi bật trong hệ sinh thái AI Trung Quốc',
    hero_subtitle: 'Đơn vị tư vấn trực tuyến hàng đầu giúp doanh nghiệp Singapore & Đông Nam Á tối ưu hóa độ hiển thị trên Baidu AI, DeepSeek, Douyin, Xiaohongshu và WeChat AI.',
    hero_cta_consultation: 'Yêu cầu tư vấn',
    hero_cta_citation: 'Trích dẫn AI trực tiếp',

    // Value Strip
    value_1_title: 'Tư vấn B2B trực tuyến',
    value_1_desc: 'Tư vấn trực tuyến & báo cáo chiến lược',
    value_2_title: 'Trung tâm Singapore',
    value_2_desc: 'Cầu nối thương hiệu khu vực vào Trung Quốc',
    value_3_title: 'GEO động cơ kép',
    value_3_desc: 'Tối ưu hóa trích dẫn Baidu AI & DeepSeek',
    value_4_title: 'Định vị AI xuyên biên giới',
    value_4_desc: 'Sẵn sàng cho hệ sinh thái tìm kiếm AI Trung Quốc',
    value_5_title: 'Hỗ trợ tuân thủ đầy đủ',
    value_5_desc: 'Hướng dẫn đăng ký ICP & thuật toán AI',
    value_6_title: 'Kiểm toán AI theo dữ liệu',
    value_6_desc: 'Theo dõi độ hiển thị thương hiệu thời gian thực',

    // Partners / Ecosystem Coverage
    partners_title: 'Nền tảng AI Trung Quốc được hỗ trợ',
    partners_subtitle: 'Tối ưu hóa sự hiện diện thương hiệu của bạn trên các công cụ LLM hàng đầu',
    platform_baidu_desc: 'Công cụ tìm kiếm AI hàng đầu Trung Quốc với lượng truy vấn trò chuyện hàng ngày khổng lồ.',
    platform_deepseek_desc: 'Công cụ AI thế hệ mới được ứng dụng rộng rãi để tổng hợp kiến thức phức tạp.',
    platform_douyin_desc: 'Công cụ tìm kiếm khám phá xã hội & đề xuất AI video ngắn tại Trung Quốc.',
    platform_xiaohongshu_desc: 'Công cụ tìm kiếm đề xuất sản phẩm & lối sống dựa trên ghi chú người dùng.',
    platform_wechat_desc: 'Tìm kiếm hệ sinh thái WeChat được hỗ trợ bởi chỉ mục bài viết và phản hồi AI.',
    platform_tencent_desc: 'LLM doanh nghiệp & người dùng của Tencent cung cấp tìm kiếm thông minh.',

    // Command Center
    command_title: 'Trung tâm điều khiển GEO thời gian thực',
    command_subtitle: 'Bảng theo dõi chỉ mục LLM và trích dẫn dành cho doanh nghiệp Singapore sang Trung Quốc',
    command_live_status: 'Theo dõi trực tiếp đang hoạt động',
    command_run_audit: 'Chạy đánh giá GEO miễn phí',
    command_platform_status: 'Trạng thái nền tảng',
    command_recent_activity: 'Nhật ký đánh giá trực tiếp',

    // Why GEO Section
    why_geo_badge: 'TẠI SAO CHỌN GEO',
    why_geo_title: 'SEO truyền thống đang chuyển mình thành Tối ưu hóa động cơ tạo (GEO)',
    why_geo_subtitle: 'Công cụ tìm kiếm không còn chỉ trả về liên kết—AI trực tiếp tổng hợp câu trả lời. Nếu thương hiệu của bạn không được lập chỉ mục, bạn sẽ không tồn tại trong mắt khách hàng.',
    why_seo_title: 'SEO truyền thống',
    why_seo_desc: 'Tối ưu hóa thứ hạng từ khóa và tỷ lệ nhấp trên trang kết quả tìm kiếm (SERP).',
    why_geo_card_title: 'Tối ưu hóa động cơ tạo (GEO)',
    why_geo_card_desc: 'Tối ưu hóa nhận diện thực thể thương hiệu, trích dẫn có cấu trúc và đề xuất trong câu trả lời AI.',
    step_1_title: '1. Sơ đồ thực thể thương hiệu',
    step_1_desc: 'Xây dựng thực thể thương hiệu tiếng Trung rõ ràng trên các cơ sở dữ liệu uy tín.',
    step_2_title: '2. Trích dẫn & Gieo mầm RAG',
    step_2_desc: 'Đưa nội dung tham chiếu uy tín cao vào cơ sở kiến thức của nền tảng mục tiêu.',
    step_3_title: '3. Theo dõi & Tối ưu LLM',
    step_3_desc: 'Liên tục theo dõi câu trả lời của AI và tối ưu hóa độ chính xác phản hồi.',
    learn_methodology: 'Tìm hiểu phương pháp GEO',

    // Mission & Values
    mission_badge: 'SỨ MỆNH CỦA CHÚNG TÔI',
    mission_title: 'Nâng tầm thương hiệu Đông Nam Á với độ hiển thị AI Trung Quốc',
    mission_desc: 'HollyGlobe Singapore kết nối doanh nghiệp khu vực với thị trường tìm kiếm AI Trung Quốc thông qua tư vấn trực tuyến, tối ưu hóa kỹ thuật và định vị nội dung chiến lược.',
    value_trust_title: 'Tư vấn độ tin cậy cao',
    value_trust_desc: 'Tiêu chuẩn tư vấn đặt tại Singapore với hiểu biết sâu sắc về hệ sinh thái kỹ thuật số Trung Quốc.',
    value_tech_title: 'Chuyên môn Công nghệ & GEO',
    value_tech_desc: 'Thuật toán theo dõi chỉ mục AI độc quyền dành riêng cho Baidu AI và DeepSeek.',
    value_remote_title: 'Hiệu quả ưu tiên trực tuyến',
    value_remote_desc: 'Mô hình tư vấn trực tuyến mượt mà cho phép xử lý nhanh chóng và hợp tác toàn cầu.',

    // Who We Are
    who_badge: 'VỀ CHÚNG TÔI',
    who_title: 'Đơn vị tư vấn B2B ưu tiên trực tuyến tại Singapore',
    who_desc_1: 'HollyGlobe Singapore là công ty tư vấn trực tuyến hiện đại chuyên về Tối ưu hóa động cơ tạo (GEO) cho các thương hiệu Đông Nam Á tiến vào thị trường Trung Quốc.',
    who_desc_2: 'Chúng tôi kết hợp tiêu chuẩn kinh doanh quốc tế của Singapore với kiến thức kỹ thuật sâu sắc về các công cụ tìm kiếm AI Trung Quốc.',
    who_stat_1_val: '100%',
    who_stat_1_lbl: 'Tư vấn trực tuyến',
    who_stat_2_val: '6+',
    who_stat_2_lbl: 'Công cụ AI Trung Quốc chính',
    who_stat_3_val: 'Kép',
    who_stat_3_lbl: 'Trọng tâm Singapore-Trung Quốc',
    who_btn_contact: 'Kết nối với chuyên gia',

    // Industry Stats
    industry_badge: 'NGÀNH HÀNG MỤC TIÊU',
    industry_title: 'Giải pháp GEO tùy chỉnh cho các ngành cần độ tin cậy cao',
    industry_subtitle: 'Các lĩnh vực mà niềm tin của người tiêu dùng Trung Quốc và độ chính xác của AI rất quan trọng',
    ind_edu: 'Giáo dục đại học & Du học',
    ind_fin: 'Dịch vụ Tài chính & Tư vấn',
    ind_health: 'Chăm sóc sức khỏe & Du lịch y tế',
    ind_luxury: 'Hàng cao cấp & Khách sạn',
    ind_tech: 'B2B SaaS & Công nghệ doanh nghiệp',
    ind_cross: 'Thương mại điện tử xuyên biên giới',
    case_studies_btn: 'Xem nghiên cứu điển hình',

    // Core Tech
    tech_badge: 'CÔNG NGHỆ CỐT LÕI',
    tech_title: 'Kiến trúc theo dõi GEO & LLM độc quyền',
    tech_1_title: 'Bộ thu thập trích dẫn Đa-LLM',
    tech_1_desc: 'Mô phỏng truy vấn thời gian thực trên Baidu AI, DeepSeek, Yuanbao và Douyin AI.',
    tech_2_title: 'Xây dựng đồ thị kiến thức thực thể',
    tech_2_desc: 'Cấu trúc tài sản thương hiệu để mô hình RAG dễ dàng trích xuất thông tin.',
    tech_3_title: 'Phân tích cảm xúc & Thị phần mô hình (SoM)',
    tech_3_desc: 'Định lượng tần suất đề xuất thương hiệu so với đối thủ cạnh tranh.',

    // Patent & Product Matrix
    matrix_badge: 'MA TRẬN DỊCH VỤ',
    matrix_title: 'Dịch vụ nâng cao độ hiển thị tìm kiếm AI toàn diện',
    service_audit_title: 'Đánh giá độ hiển thị GEO',
    service_audit_desc: 'Chẩn đoán toàn diện sự hiện diện của thương hiệu trên 6 công cụ tìm kiếm AI Trung Quốc.',
    service_seeding_title: 'Gieo mầm nội dung RAG',
    service_seeding_desc: 'Đưa thông tin thương hiệu uy tín vào các chỉ mục kỹ thuật số Trung Quốc.',
    service_filing_title: 'Tuân thủ thuật toán & ICP',
    service_filing_desc: 'Hướng dẫn các quy định pháp lý và tuân thủ nội dung tại Trung Quốc.',
    service_retainer_title: 'Theo dõi LLM liên tục',
    service_retainer_desc: 'Theo dõi hàng tháng, điều chỉnh cảm xúc và tối ưu hóa trích dẫn chủ động.',

    // Compliance Support
    comp_badge: 'QUY ĐỊNH & TUÂN THỦ',
    comp_title: 'Tự tin tự điều chỉnh theo quy định kỹ thuật số Trung Quốc',
    comp_desc: 'Chúng tôi hỗ trợ các doanh nghiệp Singapore và quốc tế hiểu rõ các khuôn khổ tuân thủ bao gồm đăng ký thuật toán AI CAC, giấy phép ICP và chuyển dữ liệu xuyên biên giới.',
    comp_item_1: 'Tư vấn đăng ký thuật toán AI tạo CAC',
    comp_item_2: 'Hỗ trợ giấy phép ICP & đăng ký tên miền',
    comp_item_3: 'Khuôn khổ chuyển dữ liệu xuyên biên giới Trung Quốc',
    comp_item_4: 'Bảo vệ quyền sở hữu trí tuệ thương hiệu trong AI Trung Quốc',

    // Global R&D
    rd_badge: 'MẠNG LƯỚI TOÀN CẦU',
    rd_title: 'Trung tâm Singapore với năng lực khu vực',
    rd_desc: 'Có trụ sở chính tại Singapore, HollyGlobe cung cấp dịch vụ tư vấn trực tuyến chất lượng cao khắp Đông Nam Á và Trung Quốc.',

    // FAQ Section
    faq_sec_badge: 'CÂU HỎI THƯỜNG GẶP',
    faq_sec_title: 'Câu hỏi thường gặp',
    faq_sec_q1: 'HollyGlobe Singapore làm gì?',
    faq_sec_a1: 'Chúng tôi giúp các thương hiệu Singapore và khu vực nâng cao độ hiển thị AI, sự sẵn sàng GEO và khả năng tìm kiếm xuyên biên giới vào Trung Quốc.',
    faq_sec_q2: 'Bạn có làm việc với khách hàng trực tuyến không?',
    faq_sec_a2: 'Có. HollyGlobe Singapore hoạt động trực tuyến và hỗ trợ khách hàng từ xa.',
    faq_sec_q3: 'Bạn tập trung vào thị trường nào?',
    faq_sec_a3: 'Trọng tâm của chúng tôi là độ hiển thị Singapore-Trung Quốc, cùng hỗ trợ thương hiệu khu vực khi có nhu cầu.',
    faq_view_all: 'Xem tất cả câu hỏi thường gặp',

    // CTA Section
    cta_title: 'Sẵn sàng dẫn đầu kết quả tìm kiếm AI Trung Quốc?',
    cta_subtitle: 'Đặt lịch tư vấn với đội ngũ tư vấn Singapore của chúng tôi hoặc yêu cầu Đánh giá GEO miễn phí ngay hôm nay.',
    cta_btn_consultation: 'Yêu cầu tư vấn',
    cta_btn_methodology: 'Khám phá phương pháp',
    cta_btn_audit: 'Nhận đánh giá miễn phí',

    // Footer
    footer_desc: 'HollyGlobe Singapore là đơn vị tư vấn trực tuyến giúp các thương hiệu Singapore và khu vực xây dựng độ hiển thị tìm kiếm AI.',
    footer_quick_links: 'Liên kết nhanh',
    footer_services: 'Dịch vụ',
    footer_legal: 'Pháp lý & Thông tin',
    footer_privacy: 'Chính sách bảo mật',
    footer_terms: 'Điều khoản dịch vụ',
    footer_contact_us: 'Liên hệ',
    footer_rights: 'Đã đăng ký bản quyền.'
  },

  ja: {
    // Header
    nav_geo_engine: 'GEO エンジン',
    nav_command_center: 'コマンドセンター',
    nav_product_matrix: '製品マトリクス',
    nav_case_studies: '導入事例',
    nav_methodology: '方法論とフレームワーク',
    nav_faq: 'よくある質問',
    nav_request_consultation: '個別相談を予約',
    nav_free_audit: '無料GEO診断',
    nav_select_language: '言語を選択',

    // Hero Section
    hero_badge: 'シンガポール · 中国 AI検索可視性アドバイザリー',
    hero_title: '中国のAIエコシステムにおけるブランドの引用・露出を最適化',
    hero_subtitle: 'シンガポールおよび東南アジアの企業が、Baidu AI、DeepSeek、Douyin、小紅書（RED）、WeChat AIなどの主要AI検索エンジンで確実に発見・推奨されるためのオンライン特化型B2Bアドバイザリー。',
    hero_cta_consultation: '戦略相談を予約',
    hero_cta_citation: 'AI引用診断スナップショット',

    // Value Strip
    value_1_title: 'オンライン完結型B2B相談',
    value_1_desc: 'リモート戦略セッションと個別レポート',
    value_2_title: 'シンガポール拠点ハブ',
    value_2_desc: '東南アジアから中国市場への進出を支援',
    value_3_title: 'デュアルエンジンGEO',
    value_3_desc: 'Baidu AIとDeepSeekの引用を最適化',
    value_4_title: '越境AIポジショニング',
    value_4_desc: '中国のAI検索インデックスに完全適合',
    value_5_title: '法令遵守・規制対応',
    value_5_desc: 'CAC生成AIアルゴリズム届出・ICP対応',
    value_6_title: 'データ主導型AI監査',
    value_6_desc: 'リアルタイムでモデル引用シェアを可視化',

    // Partners / Ecosystem Coverage
    partners_title: '対応している中国主要AIプラットフォーム',
    partners_subtitle: '中国の主要LLMおよびAI検索インデックスにおけるブランド引用を最大化',
    platform_baidu_desc: '中国最大のAI検索エンジン。毎日膨大な対話型検索と要約回答を生成。',
    platform_deepseek_desc: '高度な推論と知識統合で急速に普及する次世代AI検索エンジン。',
    platform_douyin_desc: 'ショート動画とソーシャル検索を融合したAIレコメンドエンジン。',
    platform_xiaohongshu_desc: 'ユーザーのリアルな体験談に基づくライフスタイル・商品探索AIエンジン。',
    platform_wechat_desc: '膨大な公衆号記事やコンテンツインデックスを元にしたWeChat AI検索。',
    platform_tencent_desc: 'テンセントのエンタープライズ＆コンシューマー向けスマート検索LLM。',

    // Command Center
    command_title: 'リアルタイム GEO コマンドセンター',
    command_subtitle: 'シンガポール・東南アジア企業の中国市場進出向け リアルタイムLLMインデックス＆引用追跡ダッシュボード',
    command_live_status: 'リアルタイム監視稼働中',
    command_run_audit: '無料GEO診断を実行',
    command_platform_status: 'プラットフォーム稼働状況',
    command_recent_activity: '最新の診断ログ',

    // Why GEO Section
    why_geo_badge: 'なぜ今GEOなのか',
    why_geo_title: '従来のSEOから、生成AI最適化（GEO）への地殻変動',
    why_geo_subtitle: '検索エンジンはリンクを並べる時代から、AIが直接回答を生成する時代へ移行しました。AIのナレッジベースに正しくインデックスされていなければ、貴社ブランドは認知されません。',
    why_seo_title: '従来のSEO',
    why_seo_desc: '検索結果一覧（SERP）における特定キーワードの掲載順位とクリック率の最適化。',
    why_geo_card_title: '生成AIエンジン最適化 (GEO)',
    why_geo_card_desc: 'AI回答内でのブランド実体認識、構造化データ引用、および推奨頻度の最適化。',
    step_1_title: '1. ブランドエンティティ・マッピング',
    step_1_desc: '中国語圏の高権威ナレッジベース上で明確なブランド実体を確立。',
    step_2_title: '2. 権威引用＆RAGシーディング',
    step_2_desc: '対象プラットフォームが信頼する情報ソースにブランドのナレッジを戦略的に投入。',
    step_3_title: '3. LLMモニタリング＆継続最適化',
    step_3_desc: '各AIモデルの回答内容と推奨率を追跡し、継続的に引用精度を改善。',
    learn_methodology: 'GEO方法論を詳しく見る',

    // Mission & Values
    mission_badge: '私たちのミッション',
    mission_title: '中国AI検索における東南アジア企業の存在感を確立',
    mission_desc: 'HollyGlobe シンガポールは、オンラインアドバイザリー、技術的最適化、および戦略的ナレッジ設計を通じて、東南アジア企業と中国のAI検索市場をシームレスに結びます。',
    value_trust_title: '高信頼のアドバイザリー基準',
    value_trust_desc: 'シンガポールのガバナンス基準と中国デジタルエコシステムへの深い知見を融合。',
    value_tech_title: '独自GEO技術と専門ノウハウ',
    value_tech_desc: 'Baidu AIやDeepSeekに特化した独自のLLM引用追跡アルゴリズム。',
    value_remote_title: '迅速なオンライン完結型モデル',
    value_remote_desc: 'スムーズなリモート相談により、スピーディな意思決定とグローバル連携を実現。',

    // Who We Are
    who_badge: '会社概要',
    who_title: 'シンガポール拠点のオンライン特化型 B2B アドバイザリー',
    who_desc_1: 'HollyGlobe シンガポールは、中国市場への展開を目指すシンガポールおよび東南アジア企業向けに生成AI最適化（GEO）を提供するモダンなアドバイザリーファームです。',
    who_desc_2: 'シンガポールの国際的なビジネス水準と、中国AI検索エコシステムに関する深い技術的理解を兼ね備えています。',
    who_stat_1_val: '100%',
    who_stat_1_lbl: 'オンライン・リモート対応',
    who_stat_2_val: '6+',
    who_stat_2_lbl: '中国主要AIエンジン網羅',
    who_stat_3_val: '二重',
    who_stat_3_lbl: 'シンガポール・中国連携フォーカス',
    who_btn_contact: '専門アドバイザーに相談',

    // Industry Stats
    industry_badge: '対象業界分野',
    industry_title: '高信頼性が求められる業界に特化したカスタムGEOソリューション',
    industry_subtitle: '中国の顧客・企業の信頼獲得とAI回答の正確性がビジネスを左右する重要分野',
    ind_edu: '高等教育・海外留学',
    ind_fin: '金融サービス・プロフェッショナルアドバイザリー',
    ind_health: 'ヘルスケア・医療ツーリズム',
    ind_luxury: '高級ブランド・ホスピタリティ',
    ind_tech: 'B2B SaaS・エンタープライズテクノロジー',
    ind_cross: '越境Eコマース・グローバル貿易',
    case_studies_btn: '導入事例を見る',

    // Core Tech
    tech_badge: 'コアテクノロジー',
    tech_title: '独自のGEO＆LLM引用モニタリング・アーキテクチャ',
    tech_1_title: 'マルチLLM引用スクレイピング',
    tech_1_desc: 'Baidu AI、DeepSeek、Yuanbao、Douyin AIなどの検索クエリをリアルタイムでシミュレーション。',
    tech_2_title: 'エンティティ・ナレッジグラフ構築',
    tech_2_desc: 'RAG（検索拡張生成）モデルがスムーズに取得・引用できるようブランド資産を構造化。',
    tech_3_title: '感情分析＆モデルシェア（SoM）計測',
    tech_3_desc: '競合他社と比較したブランドの推奨頻度とレコメンド強度を定量的に評価。',

    // Patent & Product Matrix
    matrix_badge: 'サービスマトリクス',
    matrix_title: '総合AI検索可視性向上サービス',
    service_audit_title: 'GEO可視性診断・監査',
    service_audit_desc: '中国の主要6大AI検索エンジンにおける貴社ブランドの現状を包括的に診断。',
    service_seeding_title: 'RAGコンテンツ・シーディング',
    service_seeding_desc: '中国のデジタルインデックスに対し、高権威なブランド情報を戦略的に投入。',
    service_filing_title: 'アルゴリズム届出＆ICP適合支援',
    service_filing_desc: '中国のAI規制要件やコンテンツコンプライアンスの適合プロセスをガイダンス。',
    service_retainer_title: '継続的LLMモニタリング',
    service_retainer_desc: '月次の引用追跡、感情調整、およびプロアクティブな引用最適化。',

    // Compliance Support
    comp_badge: '規制対応・コンプライアンス',
    comp_title: '中国のデジタル規制に自信を持って適応',
    comp_desc: '中国国家インターネット情報弁公室（CAC）の生成AIアルゴリズム届出、ICPライセンス要件、越境データ移転など、シンガポールおよび国際企業に必要なコンプライアンスを支援します。',
    comp_item_1: 'CAC 生成AIアルゴリズム届出アドバイザリー',
    comp_item_2: 'ICPライセンス＆ドメイン登録支援',
    comp_item_3: '中国越境データ移転コンプライアンス対応',
    comp_item_4: '中国AIエコシステムにおける商標・ブランド著作権保護',

    // Global R&D
    rd_badge: 'グローバルネットワーク',
    rd_title: 'シンガポールハブとアジア全域の展開力',
    rd_desc: 'シンガポールに拠点を置くHollyGlobeは、東南アジアおよび中国全域のクライアントに対し、高品質なオンラインアドバイザリーを提供しています。',

    // FAQ Section
    faq_sec_badge: 'よくある質問',
    faq_sec_title: 'FAQ',
    faq_sec_q1: 'HollyGlobe Singapore はどのような事業を行っていますか？',
    faq_sec_a1: 'シンガポールおよび東南アジアのブランドが、中国市場におけるAI検索での可視性、GEO適合度、越境での発見性を高めるための支援を行っています。',
    faq_sec_q2: 'オンラインでの相談・依頼は可能ですか？',
    faq_sec_a2: 'はい。HollyGlobe Singapore は完全オンライン対応で、リモートにてお客様をサポートしています。',
    faq_sec_q3: 'どの市場に特化していますか？',
    faq_sec_a3: 'シンガポールから中国への展開が主力ですが、東南アジア全域の越境ブランドにも対応しています。',
    faq_view_all: 'すべての質問を見る',

    // CTA Section
    cta_title: '中国AI検索での圧倒的な存在感を確立しませんか？',
    cta_subtitle: 'シンガポールの専門アドバイザーとの個別相談をご予約いただくか、今すぐ無料のGEO診断をお申し込みください。',
    cta_btn_consultation: '個別相談を予約',
    cta_btn_methodology: '方法論を見る',
    cta_btn_audit: '無料診断を受ける',

    // Footer
    footer_desc: 'HollyGlobe Singapore は、シンガポールおよび東南アジアのブランドが中国AI検索での存在感を構築するためのオンライン特化型アドバイザリーファームです。',
    footer_quick_links: 'クイックリンク',
    footer_services: 'サービス',
    footer_legal: '法的情報',
    footer_privacy: 'プライバシーポリシー',
    footer_terms: '利用規約',
    footer_contact_us: 'お問い合わせ',
    footer_rights: '無断転載を禁じます。'
  }
};
