export type Language = 'en' | 'zh' | 'ms' | 'vi';

export interface FaqItem {
  id: number;
  categoryKey: 'basics' | 'fit' | 'scope' | 'results' | 'execution' | 'risk';
  question: string;
  answer: string;
}

export interface CategoryInfo {
  key: 'all' | 'basics' | 'fit' | 'scope' | 'results' | 'execution' | 'risk';
  label: Record<Language, string>;
}

export const FAQ_CATEGORIES: CategoryInfo[] = [
  {
    key: 'all',
    label: {
      en: 'All Questions',
      zh: '全部问题',
      ms: 'Semua Soalan',
      vi: 'Tất cả câu hỏi'
    }
  },
  {
    key: 'basics',
    label: {
      en: '1. Basics',
      zh: '1. 基础认知类',
      ms: '1. Asas',
      vi: '1. Cơ bản'
    }
  },
  {
    key: 'fit',
    label: {
      en: '2. Fit & Audience',
      zh: '2. 适用对象类',
      ms: '2. Kesesuaian Dan Sasaran',
      vi: '2. Đối tượng phù hợp'
    }
  },
  {
    key: 'scope',
    label: {
      en: '3. Service Scope',
      zh: '3. 服务内容类',
      ms: '3. Skop Perkhidmatan',
      vi: '3. Phạm vi dịch vụ'
    }
  },
  {
    key: 'results',
    label: {
      en: '4. Results & Measurement',
      zh: '4. 效果与结果类',
      ms: '4. Hasil Dan Pengukuran',
      vi: '4. Kết quả & Đo lường'
    }
  },
  {
    key: 'execution',
    label: {
      en: '5. Execution & Investment',
      zh: '5. 执行与投入类',
      ms: '5. Pelaksanaan Dan Pelaburan',
      vi: '5. Triển khai & Đầu tư'
    }
  },
  {
    key: 'risk',
    label: {
      en: '6. Risk & Vendor Selection',
      zh: '6. 风险与选择类',
      ms: '6. Risiko Dan Pemilihan Vendor',
      vi: '6. Rủi ro & Lựa chọn đơn vị'
    }
  }
];

export const FAQ_DATA: Record<Language, FaqItem[]> = {
  en: [
    // Basics (1-6)
    {
      id: 1,
      categoryKey: 'basics',
      question: '1. What is GEO, and how is it different from traditional SEO?',
      answer: 'GEO stands for Generative Engine Optimization. In simple terms, it is about improving how your brand shows up in AI search and AI answer environments. Traditional SEO focuses more on rankings and clicks in search results. GEO focuses more on whether your brand can be found, understood, cited, and recommended when buyers ask AI tools which suppliers, products, or service providers they should consider.'
    },
    {
      id: 2,
      categoryKey: 'basics',
      question: '2. What does the HollyGlobe GEO product actually do?',
      answer: 'HollyGlobe GEO helps Singapore and Southeast Asia businesses improve their visibility across major Chinese AI platforms when entering the China market. We organize company information, build AI-friendly content structures, strengthen trust signals, support distribution, and monitor visibility performance so your brand has a better chance of appearing in buyer research and recommendation flows.'
    },
    {
      id: 3,
      categoryKey: 'basics',
      question: '3. Is GEO the same as AEO, or are they different?',
      answer: 'They overlap, but they are not exactly the same. AEO usually focuses more narrowly on optimizing content to become a direct answer. GEO is broader. It also covers brand mentions, citations, comparison visibility, recommendation presence, and overall discoverability across AI platforms. For most businesses, GEO is the more practical umbrella term for building AI visibility.'
    },
    {
      id: 4,
      categoryKey: 'basics',
      question: '4. Why should companies start working on GEO now?',
      answer: 'Because more buyers, especially in B2B categories, are using AI before they contact sales. They ask questions, compare options, and screen suppliers before any conversation begins. If your brand is missing from the answer layer, you may be filtered out before you ever make the shortlist.'
    },
    {
      id: 5,
      categoryKey: 'basics',
      question: '5. Does GEO replace SEO, content marketing, or Baidu optimization?',
      answer: 'No. GEO does not replace your existing marketing efforts. It adds a new layer. Your website, SEO, PR, content marketing, and channel sales still matter. GEO helps reorganize and strengthen those assets so they are more likely to be discovered and referenced inside AI-driven buyer journeys.'
    },
    {
      id: 6,
      categoryKey: 'basics',
      question: '6. Is GEO suitable for every industry?',
      answer: 'No. GEO is usually best for high-value, trust-driven, information-heavy businesses where buyers do research before making contact. That includes manufacturing, industrial supply chains, equipment, materials, OEM/ODM, enterprise services, consulting, and other professional services. It is usually less urgent for low-ticket, impulse-driven businesses.'
    },

    // Fit And Audience (7-12)
    {
      id: 7,
      categoryKey: 'fit',
      question: '7. What types of Singapore companies are the best fit for HollyGlobe GEO?',
      answer: 'The best fit is a Singapore or regional company entering China, with high-value leads, long decision cycles, and limited China AI visibility today. It is especially useful for companies that already have a website, product pages, case studies, or English sales materials, but have not yet built a structured Chinese AI visibility layer.'
    },
    {
      id: 8,
      categoryKey: 'fit',
      question: '8. Why are manufacturing and B2B companies especially well suited for GEO?',
      answer: 'Because manufacturing and B2B buying already depend on research. Buyers compare specifications, certifications, applications, supplier credibility, and commercial fit before speaking to anyone. GEO helps your brand show up earlier in those high-intent research moments, which is why it aligns so well with industrial exporters and B2B companies.'
    },
    {
      id: 9,
      categoryKey: 'fit',
      question: '9. Are professional services firms also a good fit for GEO?',
      answer: 'Yes, especially consulting, enterprise services, cross-border advisory, legal, tax, education, and selected immigration-related services. These businesses depend heavily on trust and buyer questions. GEO helps brands become more visible when prospects ask who is credible, how the process works, what to compare, and what to watch out for.'
    },
    {
      id: 10,
      categoryKey: 'fit',
      question: '10. Can we start GEO if we do not yet have a China team?',
      answer: 'Yes. That is one of the most common use cases for HollyGlobe. Many Singapore companies have strong products or services but no local China team and no China AI operations capability. GEO helps build an early visibility foundation before the company makes larger market-entry moves.'
    },
    {
      id: 11,
      categoryKey: 'fit',
      question: '11. Can we do GEO if we do not yet have Chinese content?',
      answer: 'Yes, but building foundational content is usually part of the work. AI platforms cannot understand or recommend a brand with no usable source material. You still need core assets such as product information, service pages, FAQs, case studies, trust signals, and company background to support meaningful AI visibility.'
    },
    {
      id: 12,
      categoryKey: 'fit',
      question: '12. Do companies focused only on Singapore need this GEO service?',
      answer: "Usually not as a priority. HollyGlobe's GEO offer is specifically designed for companies targeting China-facing demand. If China is not part of your growth strategy, this service may not be the right first move."
    },

    // Service Scope (13-18)
    {
      id: 13,
      categoryKey: 'scope',
      question: '13. What does a typical HollyGlobe GEO engagement include?',
      answer: 'It usually includes an AI visibility audit, current-state diagnosis, buyer-question mapping, content and knowledge-structure improvements, FAQ and comparison content development, trust-signal strengthening, platform-distribution guidance, and ongoing visibility monitoring with iteration over time.'
    },
    {
      id: 14,
      categoryKey: 'scope',
      question: '14. Do you write content for us, or do you only provide consulting?',
      answer: "We are not a strategy-only consulting service. HollyGlobe's approach is closer to diagnose + execute + monitor. We help define what needs to be said, how it should be structured, and how it should be turned into content assets that AI systems can better understand and surface."
    },
    {
      id: 15,
      categoryKey: 'scope',
      question: '15. Do we need an FAQ page for GEO?',
      answer: 'In most cases, yes. FAQ content is important because many high-intent buyer searches are already phrased as questions, such as how pricing works, whether a solution is suitable, or how one provider differs from another. A strong FAQ library helps match real search intent and improves the chances of AI citation.'
    },
    {
      id: 16,
      categoryKey: 'scope',
      question: '16. Is GEO just about adding FAQs to the website?',
      answer: 'No. FAQs are only one part of it. Effective GEO also involves brand knowledge structure, product and service pages, comparison content, case studies, category education, authority references, media signals, and performance monitoring. FAQs help, but they are not enough on their own.'
    },
    {
      id: 17,
      categoryKey: 'scope',
      question: '17. Which Chinese AI platforms do you focus on?',
      answer: 'Depending on the project, we focus on major Chinese AI discovery and answer platforms such as ERNIE, Doubao, Qianwen, Kimi, DeepSeek, and Yuanbao, along with the surrounding search, content, and trust-signal ecosystem that influences how brands appear inside those platforms.'
    },
    {
      id: 18,
      categoryKey: 'scope',
      question: '18. Does GEO also involve Baidu, content marketing, and media distribution?',
      answer: 'Yes, but as part of a wider AI visibility system. AI platforms often rely on web content, brand mentions, media references, and structured information as part of how they interpret and surface a brand. GEO does not sit outside SEO and content. It helps make those assets more useful for AI-driven discovery.'
    },

    // Results And Measurement (19-24)
    {
      id: 19,
      categoryKey: 'results',
      question: '19. How long does GEO take before we see results?',
      answer: 'It depends on your starting point, content depth, category competition, and execution speed. The early phase is often about fixing foundations by organizing information, improving content structure, and adding trust signals. Meaningful changes in mentions, citations, and recommendation presence usually require ongoing monitoring and iteration rather than a quick one-time push.'
    },
    {
      id: 20,
      categoryKey: 'results',
      question: '20. Can GEO guarantee that we rank first in AI answers?',
      answer: 'No, and no credible provider should promise that. AI outputs change by platform, prompt, context, and timing. GEO is about increasing the likelihood that your brand is found, understood, cited, and considered, not about guaranteeing a fixed top position everywhere.'
    },
    {
      id: 21,
      categoryKey: 'results',
      question: '21. How should GEO performance be measured?',
      answer: 'GEO should be measured through signals such as mention rate, citation rate, recommendation presence, visibility across key platforms, and coverage for high-intent buyer questions. For B2B companies, it also matters whether those visibility gains contribute to better conversations, stronger leads, and higher trust before the first sales call.'
    },
    {
      id: 22,
      categoryKey: 'results',
      question: '22. Can GEO directly generate customers?',
      answer: 'It is better understood as a new upstream acquisition channel rather than a complete sales system by itself. GEO helps your brand enter the buyer\'s research and shortlist stage earlier. Whether that becomes revenue still depends on your offer, pricing, sales execution, and local market readiness.'
    },
    {
      id: 23,
      categoryKey: 'results',
      question: '23. Is GEO better for brand awareness or lead generation?',
      answer: 'It can support both, but HollyGlobe focuses more on high-intent pre-sales visibility. That means helping brands show up where buyers are actively asking category and supplier questions, rather than chasing broad awareness for its own sake. For B2B and professional services, that shortlist value is often more important.'
    },
    {
      id: 24,
      categoryKey: 'results',
      question: '24. If our brand currently has almost no AI mentions, is GEO still worth doing?',
      answer: 'Yes, and often that is exactly why you should start early. For many companies entering China, the main risk is not weak optimization. It is simply being absent from the AI answer layer. The earlier you build the right content and trust foundation, the easier it is to support future PR, paid media, events, and sales efforts.'
    },

    // Execution And Investment (25-28)
    {
      id: 25,
      categoryKey: 'execution',
      question: '25. What materials should a company prepare before starting GEO?',
      answer: 'Useful starting materials usually include your website, product or service descriptions, key value propositions, use cases, FAQs, customer case studies, certifications, brand story, and contact details. If those are incomplete, we can still start with the most important pages and questions first.'
    },
    {
      id: 26,
      categoryKey: 'execution',
      question: '26. Who from our company should be involved in a GEO project?',
      answer: 'The most helpful people are usually those who understand the business, the buyers, and the sales process. That may include a founder, regional lead, marketing head, BD lead, or product expert. GEO is not just technical work. It depends heavily on real customer questions, real proof points, and real competitive positioning.'
    },
    {
      id: 27,
      categoryKey: 'execution',
      question: '27. Is GEO expensive to implement?',
      answer: 'Compared with pure advertising spend, GEO is more like building a reusable asset base. There is an upfront investment in content organization and visibility structure, but those assets can continue to support your website, sales, PR, and future SEO efforts instead of disappearing after a campaign ends.'
    },
    {
      id: 28,
      categoryKey: 'execution',
      question: '28. If we are already doing SEO and PR, do we still need GEO?',
      answer: 'In many cases, yes. If you already have SEO and PR assets, GEO can be even more effective because there is something to build from. The goal is not to restart your marketing from zero. It is to make your existing content and trust signals more usable inside AI-driven discovery environments.'
    },

    // Risk And Vendor Selection (29-30)
    {
      id: 29,
      categoryKey: 'risk',
      question: '29. Does GEO come with compliance risk?',
      answer: 'Any China-facing content and visibility work should be handled with compliance awareness, especially in sensitive categories such as finance, healthcare, education, immigration, and legal services. HollyGlobe\'s approach is to build content and trust signals in a more disciplined, reviewable, and lower-risk way rather than making exaggerated promises.'
    },
    {
      id: 30,
      categoryKey: 'risk',
      question: '30. How do we know whether a GEO service provider is credible?',
      answer: 'There are four things to look for. First, do they really understand Chinese AI platforms, not just global AI search trends. Second, do they avoid unrealistic claims like guaranteed rankings. Third, can they clearly explain what they deliver, how they measure progress, and where the service boundaries are. Fourth, do they understand how B2B, manufacturing, and trust-led professional services actually buy and sell.'
    }
  ],

  zh: [
    // 基础认知类 (1-6)
    {
      id: 1,
      categoryKey: 'basics',
      question: '1. 什么是 GEO？GEO 和传统 SEO 有什么区别？',
      answer: 'GEO 是 Generative Engine Optimization，可以理解为“面向 AI 搜索和 AI 问答的可见度优化”。传统 SEO 更关注网页在搜索结果里的排名和点击，GEO 更关注当客户直接问 AI “该选谁”“哪家更适合”时，你的品牌能不能被 AI 看见、理解、引用和推荐。'
    },
    {
      id: 2,
      categoryKey: 'basics',
      question: '2. HollyGlobe GEO 产品到底是做什么的？',
      answer: 'HollyGlobe GEO 是帮助想进入中国市场的新加坡和东南亚企业，在中国主流 AI 平台上提升品牌可见度和推荐机会的服务。我们会整理企业资料、搭建适合 AI 理解的内容结构、补充信任信号、做分发和监测，帮助品牌进入中国客户的 AI 决策入口。'
    },
    {
      id: 3,
      categoryKey: 'basics',
      question: '3. GEO 是不是就是 AEO？还是不一样？',
      answer: '两者有重叠，但不完全一样。AEO 更偏“答案引擎优化”，通常强调让内容更适合被直接回答；GEO 的范围更广，除了回答本身，还包括品牌被提及、被引用、被比较、被推荐，以及在不同 AI 平台上的整体可见度表现。对企业来说，可以把 GEO 理解成更完整的 AI 可见度方案。'
    },
    {
      id: 4,
      categoryKey: 'basics',
      question: '4. 为什么现在企业要开始做 GEO？',
      answer: '因为越来越多客户，尤其是 B2B 客户，在联系销售前会先问 AI、看总结、做比较。如果你的品牌没有出现在 AI 的答案层里，就可能在第一次接触前就被排除出候选名单。GEO 的价值，是让品牌更早进入客户的研究和筛选过程。'
    },
    {
      id: 5,
      categoryKey: 'basics',
      question: '5. GEO 会不会取代 SEO、内容营销和百度优化？',
      answer: '不会。GEO 不是替代原有营销，而是补上一层新的流量和信任入口。对大多数企业来说，官网、SEO、PR、内容营销、渠道销售仍然重要；GEO 更像是把这些资产重新组织，让它们在 AI 搜索和 AI 问答场景里更容易被看见和引用。'
    },
    {
      id: 6,
      categoryKey: 'basics',
      question: '6. GEO 适合所有行业吗？',
      answer: '不适合所有行业。GEO 更适合高客单价、长决策链、客户会先做资料搜索和比较的业务，比如制造业、工业零部件、设备、材料、OEM/ODM、企业服务、咨询和专业服务等。对低客单价、强冲动消费型产品，GEO 的优先级通常没有那么高。'
    },

    // 适用对象类 (7-12)
    {
      id: 7,
      categoryKey: 'fit',
      question: '7. 什么样的新加坡企业最适合 HollyGlobe GEO？',
      answer: '最适合的是想进入中国市场、线索价值高、客户决策周期长、并且目前缺少中国本地 AI 可见度能力的企业。尤其是已经有官网、产品页、案例、FAQ 或英文资料，但在中文和中国 AI 平台上还没有系统布局的公司。'
    },
    {
      id: 8,
      categoryKey: 'fit',
      question: '8. 制造业和 B2B 企业为什么特别适合做 GEO？',
      answer: '因为制造业和 B2B 采购本来就依赖大量前置信息检索。买家会先查参数、方案、认证、案例、供应商对比和风险信息。GEO 正好能帮助品牌在这些高意向问题里更早出现，所以它和制造业、工业出口、设备和零部件类业务的匹配度很高。'
    },
    {
      id: 9,
      categoryKey: 'fit',
      question: '9. 专业服务公司也适合做 GEO 吗？',
      answer: '适合，尤其是咨询、企业服务、跨境顾问、法律、财税、教育和部分移民留学服务。这类业务的共通点是客户会先问很多问题，再决定要不要联系你。GEO 可以帮助品牌在“哪家靠谱”“流程怎么走”“应该怎么选”这类问题里建立可见度和信任感。'
    },
    {
      id: 10,
      categoryKey: 'fit',
      question: '10. 如果我们还没有中国团队，可以先做 GEO 吗？',
      answer: '可以，这正是 HollyGlobe 的典型场景之一。很多新加坡企业有产品能力和国际官网，但没有中国本地团队或中国 AI 平台运营经验。我们会先帮助企业建立最基础的 AI 可见度和内容结构，再决定是否继续扩展到更深入的中国市场动作。'
    },
    {
      id: 11,
      categoryKey: 'fit',
      question: '11. 如果我们还没有中文内容，能做 GEO 吗？',
      answer: '可以，但通常要先补内容基础。因为 AI 平台不会凭空理解一个品牌，还是需要官网信息、产品介绍、服务说明、案例、FAQ、品牌故事、资质和信任信息做支撑。没有中文内容并不代表不能做，而是意味着前期会更偏“搭底层资产”。'
    },
    {
      id: 12,
      categoryKey: 'fit',
      question: '12. 只做新加坡本地市场的公司需要 GEO 吗？',
      answer: '如果你的客户主要在新加坡本地，中国市场不是重点，那 HollyGlobe 的这套 China GEO 服务未必是最优先的。我们的核心定位是帮助新加坡和区域企业进入中国 AI 搜索和问答环境，而不是做泛本地数字营销。'
    },

    // 服务内容类 (13-18)
    {
      id: 13,
      categoryKey: 'scope',
      question: '13. HollyGlobe GEO 服务通常包含哪些内容？',
      answer: '通常会包括 AI visibility audit、品牌现状诊断、买家问题地图、内容与知识结构优化、FAQ 和对比型内容建设、媒体与信任信号补充、平台分发建议，以及后续的可见度监测和迭代。不同企业阶段不同，交付重点也会略有差异。'
    },
    {
      id: 14,
      categoryKey: 'scope',
      question: '14. 你们会帮我们写内容吗？还是只做咨询？',
      answer: '我们不是只给建议的咨询型服务。HollyGlobe 的方法更偏“诊断 + 执行 + 监测”。也就是说，不只是告诉你应该写什么，还会帮助你整理资料、定义结构、输出适合 AI 理解的内容方向，并把它变成可以上线或分发的资产。'
    },
    {
      id: 15,
      categoryKey: 'scope',
      question: '15. GEO 需要做 FAQ 页面吗？',
      answer: '通常需要，而且 FAQ 往往是很重要的一层。因为很多高意向客户在 AI 和搜索里输入的本来就是问题句，比如“价格怎么算”“适不适合我们”“和某方案有什么区别”。把这些问题系统化整理出来，本身就更容易匹配搜索意图和 AI 引用逻辑。'
    },
    {
      id: 16,
      categoryKey: 'scope',
      question: '16. GEO 只是在官网上加 FAQ 吗？',
      answer: '不是。FAQ 只是其中一部分。真正有效的 GEO 还包括品牌知识结构、产品和服务页面、对比型内容、案例、行业解释、权威引用、媒体信号和可监测的推荐表现。只加 FAQ 有帮助，但单靠 FAQ 通常不够。'
    },
    {
      id: 17,
      categoryKey: 'scope',
      question: '17. 你们覆盖哪些中国 AI 平台？',
      answer: '根据品牌定位和项目阶段，我们重点关注中国主流 AI 搜索和问答入口，比如文心一言、豆包、通义千问、Kimi、DeepSeek、元宝等，以及与这些问答路径相关的搜索、内容和信号来源。不同平台的表现机制不同，执行时不会一刀切。'
    },
    {
      id: 18,
      categoryKey: 'scope',
      question: '18. GEO 会不会涉及百度、内容营销和媒体分发？',
      answer: '会，但这些动作是作为 AI 可见度体系的一部分来做，而不是单独拆开看。因为 AI 平台本身也会参考网页内容、媒体信号、品牌提及和结构化信息。换句话说，GEO 不是脱离 SEO 和内容，而是把它们重新组织成更适合 AI 读取和引用的形式。'
    },

    // 效果与结果类 (19-24)
    {
      id: 19,
      categoryKey: 'results',
      question: '19. GEO 多久能看到结果？',
      answer: '这取决于品牌基础、内容深度、行业竞争和执行速度。通常来说，前几周更像是在补地基，比如整理资料、修正结构、补足内容和信任信号；真正看到品牌提及、引用和推荐变化，往往需要一个持续观察和迭代的周期。它不是立刻见效的投流模式。'
    },
    {
      id: 20,
      categoryKey: 'results',
      question: '20. GEO 能保证我们在 AI 里排第一吗？',
      answer: '不能，也不应该这样承诺。AI 的回答结果会因平台、问题、上下文和时间而变化，没有任何负责任的服务商应该承诺“保证第一”或“保证被推荐”。我们能做的是提升品牌被看见、被理解、被引用和被进入候选名单的概率。'
    },
    {
      id: 21,
      categoryKey: 'results',
      question: '21. GEO 的效果应该怎么衡量？',
      answer: '比起只看排名，GEO 更应该看品牌被提及率、被引用率、推荐出现率、不同平台的可见度变化、客户高意向问题中的覆盖度，以及这些变化有没有帮助销售拿到更高质量的咨询和线索。对 B2B 来说，质量通常比纯流量更重要。'
    },
    {
      id: 22,
      categoryKey: 'results',
      question: '22. GEO 能直接带来客户吗？',
      answer: '它更像是新增的上游获客入口，而不是单独闭环的成交系统。GEO 的作用是让品牌更早进入客户的研究和候选阶段，提高被问到、被看到和被信任的机会。能不能成交，还取决于你的产品、价格、销售跟进、本地承接能力和整体市场策略。'
    },
    {
      id: 23,
      categoryKey: 'results',
      question: '23. GEO 更适合做品牌曝光，还是更适合做获客？',
      answer: '两者都有，但对 HollyGlobe 来说，我们更强调“高意向获客前置”。也就是不是单纯追求曝光数字，而是让企业在客户真正会问的问题里出现。对 B2B 和专业服务企业来说，这种“进入 shortlist”的价值，通常比泛曝光更高。'
    },
    {
      id: 24,
      categoryKey: 'results',
      question: '24. 如果品牌现在几乎没有 AI 提及，还值得做吗？',
      answer: '反而更值得尽早做。很多企业进入中国市场时，最大的风险不是“优化得不够好”，而是“根本没有进入答案层”。越早开始补齐内容和品牌信号，越容易在后面投放、展会、PR 或 BD 动作放大之前打好基础。'
    },

    // 执行与投入类 (25-28)
    {
      id: 25,
      categoryKey: 'execution',
      question: '25. 做 GEO 之前，企业需要准备什么资料？',
      answer: '最常见的基础资料包括官网、产品介绍、服务说明、核心卖点、行业应用、FAQ、客户案例、资质证书、品牌故事和联系人信息。如果这些资料不完整，也可以先从核心页面和重点问题开始，逐步补齐。'
    },
    {
      id: 26,
      categoryKey: 'execution',
      question: '26. 企业内部需要谁来配合 GEO 项目？',
      answer: '通常最需要的是了解业务的人，比如创始人、市场负责人、区域负责人、BD 负责人，或者最懂产品和客户的人。因为 GEO 不是纯技术活，它非常依赖企业真实的客户问题、销售话术、行业优势和可信信息。'
    },
    {
      id: 27,
      categoryKey: 'execution',
      question: '27. GEO 的投入会不会很大？',
      answer: '相较于大规模广告投放，GEO 更像是“先搭资产、再积累复利”。前期一定会有内容整理和结构建设的投入，但这些投入通常不是一次性浪费，而是会沉淀成官网、FAQ、案例、知识页和可重复使用的销售素材，对后续 SEO、销售和品牌也有帮助。'
    },
    {
      id: 28,
      categoryKey: 'execution',
      question: '28. 我们已经在做 SEO 和 PR，还需要 GEO 吗？',
      answer: '如果你们已经在做 SEO 和 PR，做 GEO 往往更有优势，因为你们已经有一部分可用资产。GEO 不一定是从零开始，而是帮助企业把已有内容和信号更好地组织起来，让它们不只对搜索引擎友好，也更适合被 AI 平台抓取、理解和引用。'
    },

    // 风险与选择类 (29-30)
    {
      id: 29,
      categoryKey: 'risk',
      question: '29. GEO 会不会有合规风险？',
      answer: '任何面向中国市场的内容和传播动作都需要考虑合规，特别是金融、医疗、教育、移民、法律等高敏感行业。HollyGlobe 的原则不是夸大承诺，而是采用更审慎、可解释、可审阅的方式来做内容和品牌信号建设。合规不是可选项，而是前提。'
    },
    {
      id: 30,
      categoryKey: 'risk',
      question: '30. 应该怎么判断一家 GEO 服务商靠不靠谱？',
      answer: '可以重点看四点：第一，是否真的理解中国 AI 平台，而不是只会讲欧美 AI 搜索；第二，是否清楚 GEO 不是“保证排名”的神话；第三，是否能说清楚交付物、监测方式和服务边界；第四，是否理解 B2B、制造业和专业服务这类长决策链业务的真实需求。对 HollyGlobe 来说，我们更愿意把 GEO 讲成一个新增获客入口，而不是包治百病的万能营销方案。'
    }
  ],

  ms: [
    // Asas (1-6)
    {
      id: 1,
      categoryKey: 'basics',
      question: '1. Apakah itu GEO, dan apa bezanya dengan SEO tradisional?',
      answer: 'GEO ialah singkatan untuk Generative Engine Optimization. Secara ringkas, ia merujuk kepada usaha meningkatkan cara jenama anda muncul dalam carian AI dan jawapan AI. SEO tradisional lebih menumpukan pada ranking laman web dan klik dalam enjin carian. GEO pula lebih menumpukan pada sama ada jenama anda boleh ditemui, difahami, dirujuk, dan disyorkan apabila pembeli bertanya kepada AI siapa pembekal atau penyedia perkhidmatan yang patut dipertimbangkan.'
    },
    {
      id: 2,
      categoryKey: 'basics',
      question: '2. Sebenarnya apa yang dilakukan oleh produk HollyGlobe GEO?',
      answer: 'HollyGlobe GEO membantu syarikat di Singapura dan Asia Tenggara meningkatkan keterlihatan mereka di platform AI utama China apabila memasuki pasaran China. Kami menyusun maklumat syarikat, membina struktur kandungan yang lebih mudah difahami oleh AI, menguatkan isyarat kepercayaan, menyokong pengedaran kandungan, dan memantau prestasi keterlihatan supaya jenama anda lebih mudah muncul dalam proses kajian dan saranan pembeli.'
    },
    {
      id: 3,
      categoryKey: 'basics',
      question: '3. Adakah GEO sama dengan AEO, atau ada perbezaan?',
      answer: 'Kedua-duanya berkait rapat, tetapi tidak sama sepenuhnya. AEO biasanya lebih fokus kepada mengoptimumkan kandungan supaya terus dijadikan jawapan. GEO pula lebih luas. Ia juga meliputi sebutan jenama, rujukan, keterlihatan dalam perbandingan, kebarangkalian disyorkan, dan keseluruhan kebolehlihatan di platform AI. Bagi kebanyakan syarikat, GEO ialah istilah yang lebih praktikal untuk membina keterlihatan AI.'
    },
    {
      id: 4,
      categoryKey: 'basics',
      question: '4. Mengapa syarikat perlu mula buat GEO sekarang?',
      answer: 'Kerana semakin ramai pembeli, khususnya pembeli B2B, menggunakan AI sebelum mereka menghubungi pasukan jualan. Mereka bertanya soalan, membandingkan pilihan, dan menapis pembekal terlebih dahulu. Jika jenama anda tidak muncul dalam lapisan jawapan AI, anda mungkin tersingkir sebelum sempat masuk ke dalam senarai pendek.'
    },
    {
      id: 5,
      categoryKey: 'basics',
      question: '5. Adakah GEO akan menggantikan SEO, content marketing, atau optimasi Baidu?',
      answer: 'Tidak. GEO tidak menggantikan pemasaran sedia ada anda. Ia menambah satu lapisan baharu. Laman web, SEO, PR, content marketing, dan jualan saluran masih penting. GEO membantu menyusun semula aset-aset ini supaya lebih mudah ditemui dan dirujuk dalam perjalanan pembeli yang dipacu oleh AI.'
    },
    {
      id: 6,
      categoryKey: 'basics',
      question: '6. Adakah GEO sesuai untuk semua industri?',
      answer: 'Tidak semestinya. GEO biasanya paling sesuai untuk perniagaan bernilai tinggi, berasaskan kepercayaan, dan memerlukan banyak kajian sebelum pembelian dibuat. Ini termasuk pembuatan, rantaian bekalan industri, peralatan, bahan, OEM/ODM, perkhidmatan perusahaan, konsultasi, dan perkhidmatan profesional lain. Untuk produk bernilai rendah atau pembelian impulsif, GEO biasanya bukan keutamaan utama.'
    },

    // Kesesuaian Dan Sasaran (7-12)
    {
      id: 7,
      categoryKey: 'fit',
      question: '7. Jenis syarikat Singapura yang paling sesuai untuk HollyGlobe GEO?',
      answer: 'Yang paling sesuai ialah syarikat Singapura atau serantau yang mahu memasuki pasaran China, mempunyai lead bernilai tinggi, kitaran keputusan yang panjang, dan masih lemah dari segi keterlihatan AI di China. Ia sangat sesuai untuk syarikat yang sudah ada laman web, halaman produk, kajian kes, atau bahan jualan dalam bahasa Inggeris, tetapi belum membina lapisan keterlihatan AI untuk pasaran China.'
    },
    {
      id: 8,
      categoryKey: 'fit',
      question: '8. Mengapa syarikat pembuatan dan B2B sangat sesuai untuk GEO?',
      answer: 'Kerana pembelian dalam sektor pembuatan dan B2B memang bergantung pada kajian awal. Pembeli akan membandingkan spesifikasi, pensijilan, aplikasi, kredibiliti pembekal, dan kesesuaian komersial sebelum bercakap dengan sesiapa. GEO membantu jenama anda muncul lebih awal dalam saat-saat kajian berniat tinggi ini.'
    },
    {
      id: 9,
      categoryKey: 'fit',
      question: '9. Adakah firma perkhidmatan profesional juga sesuai untuk GEO?',
      answer: 'Ya, terutamanya untuk konsultasi, perkhidmatan perusahaan, advisory rentas sempadan, undang-undang, cukai, pendidikan, dan beberapa perkhidmatan berkaitan imigresen. Perniagaan seperti ini sangat bergantung pada kepercayaan dan soalan pembeli. GEO membantu jenama lebih kelihatan apabila prospek bertanya siapa yang boleh dipercayai, bagaimana prosesnya, apa yang perlu dibandingkan, dan apa risikonya.'
    },
    {
      id: 10,
      categoryKey: 'fit',
      question: '10. Bolehkah kami mulakan GEO walaupun belum ada pasukan di China?',
      answer: 'Boleh. Ini sebenarnya antara senario paling biasa untuk HollyGlobe. Banyak syarikat Singapura mempunyai produk atau perkhidmatan yang kukuh tetapi tiada pasukan tempatan di China dan tiada keupayaan operasi AI tempatan. GEO membantu membina asas keterlihatan sebelum syarikat membuat langkah pasaran yang lebih besar.'
    },
    {
      id: 11,
      categoryKey: 'fit',
      question: '11. Bolehkah kami buat GEO jika belum ada kandungan dalam bahasa Cina?',
      answer: 'Boleh, tetapi membina kandungan asas biasanya akan menjadi sebahagian daripada kerja awal. Platform AI tidak boleh memahami atau mengesyorkan jenama tanpa bahan sumber yang mencukupi. Anda tetap memerlukan aset asas seperti maklumat produk, halaman perkhidmatan, FAQ, kajian kes, isyarat kepercayaan, dan latar belakang syarikat.'
    },
    {
      id: 12,
      categoryKey: 'fit',
      question: '12. Adakah syarikat yang hanya fokus pada pasaran Singapura memerlukan GEO ini?',
      answer: 'Biasanya tidak sebagai keutamaan utama. Tawaran GEO HollyGlobe direka khusus untuk syarikat yang menyasarkan permintaan dari pasaran China. Jika China bukan sebahagian daripada strategi pertumbuhan anda, perkhidmatan ini mungkin bukan langkah pertama yang paling sesuai.'
    },

    // Skop Perkhidmatan (13-18)
    {
      id: 13,
      categoryKey: 'scope',
      question: '13. Apa yang biasanya termasuk dalam perkhidmatan HollyGlobe GEO?',
      answer: 'Biasanya ia merangkumi AI visibility audit, diagnosis kedudukan semasa, pemetaan soalan pembeli, penambahbaikan struktur kandungan dan pengetahuan, pembangunan kandungan FAQ dan kandungan perbandingan, pengukuhan isyarat kepercayaan, panduan pengedaran platform, serta pemantauan keterlihatan dan iterasi berterusan.'
    },
    {
      id: 14,
      categoryKey: 'scope',
      question: '14. Adakah anda menulis kandungan untuk kami, atau hanya beri konsultasi?',
      answer: 'Kami bukan perkhidmatan konsultasi strategi semata-mata. Pendekatan HollyGlobe lebih kepada diagnose + execute + monitor. Maksudnya, kami bukan sekadar memberitahu apa yang perlu ditulis, tetapi juga membantu menyusun struktur, mengolah kandungan, dan menukarkannya menjadi aset yang lebih mudah difahami oleh AI.'
    },
    {
      id: 15,
      categoryKey: 'scope',
      question: '15. Adakah kami perlu ada halaman FAQ untuk GEO?',
      answer: 'Dalam kebanyakan kes, ya. Kandungan FAQ penting kerana banyak carian berniat tinggi memang berbentuk soalan, contohnya bagaimana harga dikira, sama ada sesuatu penyelesaian sesuai, atau apa beza satu penyedia dengan yang lain. Perpustakaan FAQ yang baik membantu memadankan niat carian sebenar dan meningkatkan peluang untuk dirujuk oleh AI.'
    },
    {
      id: 16,
      categoryKey: 'scope',
      question: '16. Adakah GEO hanya bermaksud menambah FAQ pada laman web?',
      answer: 'Tidak. FAQ hanyalah salah satu bahagiannya. GEO yang berkesan juga melibatkan struktur pengetahuan jenama, halaman produk dan perkhidmatan, kandungan perbandingan, kajian kes, pendidikan kategori, rujukan autoriti, isyarat media, dan pemantauan prestasi. FAQ membantu, tetapi tidak mencukupi jika berdiri sendiri.'
    },
    {
      id: 17,
      categoryKey: 'scope',
      question: '17. Platform AI China mana yang anda fokuskan?',
      answer: 'Bergantung pada projek, kami memberi tumpuan kepada platform AI utama di China seperti ERNIE, Doubao, Qianwen, Kimi, DeepSeek, dan Yuanbao, bersama ekosistem carian, kandungan, dan isyarat kepercayaan yang mempengaruhi cara jenama muncul dalam platform-platform tersebut.'
    },
    {
      id: 18,
      categoryKey: 'scope',
      question: '18. Adakah GEO juga melibatkan Baidu, content marketing, dan pengedaran media?',
      answer: 'Ya, tetapi sebagai sebahagian daripada sistem keterlihatan AI yang lebih menyeluruh. Platform AI sering bergantung pada kandungan web, sebutan jenama, rujukan media, dan maklumat berstruktur untuk mentafsir dan memaparkan sesuatu jenama. GEO bukan sesuatu yang terpisah daripada SEO dan kandungan. Ia membantu menjadikan aset-aset tersebut lebih berguna untuk penemuan yang dipacu AI.'
    },

    // Hasil Dan Pengukuran (19-24)
    {
      id: 19,
      categoryKey: 'results',
      question: '19. Berapa lama GEO mengambil masa sebelum kami nampak hasil?',
      answer: 'Ia bergantung pada titik permulaan anda, kedalaman kandungan, tahap persaingan kategori, dan kelajuan pelaksanaan. Fasa awal biasanya tertumpu pada pembetulan asas seperti menyusun maklumat, memperbaiki struktur kandungan, dan menambah isyarat kepercayaan. Perubahan yang bermakna dalam sebutan, rujukan, dan kebarangkalian disyorkan biasanya memerlukan pemantauan dan iterasi berterusan.'
    },
    {
      id: 20,
      categoryKey: 'results',
      question: '20. Bolehkah GEO menjamin kami muncul di tempat pertama dalam jawapan AI?',
      answer: 'Tidak, dan tiada penyedia yang bertanggungjawab patut menjanjikan perkara itu. Hasil AI berubah mengikut platform, soalan, konteks, dan masa. GEO bertujuan meningkatkan kebarangkalian jenama anda ditemui, difahami, dirujuk, dan dipertimbangkan, bukannya menjamin kedudukan tetap di semua tempat.'
    },
    {
      id: 21,
      categoryKey: 'results',
      question: '21. Bagaimana prestasi GEO patut diukur?',
      answer: 'Prestasi GEO patut diukur melalui petunjuk seperti kadar sebutan, kadar rujukan, kehadiran dalam cadangan, keterlihatan merentas platform penting, dan liputan untuk soalan pembeli berniat tinggi. Untuk syarikat B2B, penting juga untuk melihat sama ada peningkatan keterlihatan ini membawa kepada perbualan yang lebih baik, lead yang lebih berkualiti, dan lebih banyak kepercayaan sebelum panggilan jualan pertama.'
    },
    {
      id: 22,
      categoryKey: 'results',
      question: '22. Bolehkah GEO terus menghasilkan pelanggan?',
      answer: 'Lebih tepat jika dianggap sebagai saluran perolehan pelanggan di peringkat awal, bukan sistem jualan lengkap secara bersendirian. GEO membantu jenama anda masuk ke fasa kajian dan senarai pendek pembeli dengan lebih awal. Sama ada ia bertukar menjadi hasil jualan masih bergantung pada tawaran, harga, pelaksanaan jualan, dan kesiapsiagaan pasaran tempatan anda.'
    },
    {
      id: 23,
      categoryKey: 'results',
      question: '23. Adakah GEO lebih sesuai untuk brand awareness atau lead generation?',
      answer: 'Ia boleh menyokong kedua-duanya, tetapi HollyGlobe lebih menekankan keterlihatan pra-jualan yang berniat tinggi. Maksudnya, membantu jenama muncul apabila pembeli benar-benar bertanya soalan tentang kategori, pembekal, dan pilihan, bukannya hanya mengejar kesedaran umum yang luas.'
    },
    {
      id: 24,
      categoryKey: 'results',
      question: '24. Jika jenama kami hampir tiada sebutan dalam AI sekarang, adakah GEO masih berbaloi?',
      answer: 'Ya, malah itu selalunya sebab terbaik untuk bermula lebih awal. Bagi banyak syarikat yang mahu masuk ke pasaran China, risiko utamanya bukan optimasi yang lemah, tetapi ketiadaan langsung dalam lapisan jawapan AI. Lagi awal anda membina kandungan dan asas kepercayaan yang betul, lagi mudah untuk menyokong PR, iklan, acara, dan usaha jualan pada masa depan.'
    },

    // Pelaksanaan Dan Pelaburan (25-28)
    {
      id: 25,
      categoryKey: 'execution',
      question: '25. Apakah bahan yang perlu disediakan sebelum memulakan GEO?',
      answer: 'Bahan permulaan yang berguna biasanya termasuk laman web, penerangan produk atau perkhidmatan, nilai utama, use case, FAQ, kajian kes pelanggan, pensijilan, cerita jenama, dan maklumat hubungan. Jika bahan ini belum lengkap, kami masih boleh bermula dengan halaman dan soalan yang paling penting dahulu.'
    },
    {
      id: 26,
      categoryKey: 'execution',
      question: '26. Siapa dari pihak syarikat kami perlu terlibat dalam projek GEO?',
      answer: 'Orang yang paling membantu biasanya ialah mereka yang memahami perniagaan, pembeli, dan proses jualan. Ini mungkin pengasas, ketua serantau, ketua pemasaran, ketua BD, atau pakar produk. GEO bukan kerja teknikal semata-mata. Ia sangat bergantung pada soalan sebenar pelanggan, bukti sebenar, dan positioning sebenar.'
    },
    {
      id: 27,
      categoryKey: 'execution',
      question: '27. Adakah GEO memerlukan kos pelaksanaan yang besar?',
      answer: 'Berbanding iklan semata-mata, GEO lebih menyerupai pembinaan aset yang boleh digunakan semula. Memang ada pelaburan awal untuk menyusun kandungan dan struktur keterlihatan, tetapi aset itu boleh terus menyokong laman web, jualan, PR, dan usaha SEO masa depan anda, bukannya hilang selepas kempen tamat.'
    },
    {
      id: 28,
      categoryKey: 'execution',
      question: '28. Jika kami sudah buat SEO dan PR, adakah kami masih perlukan GEO?',
      answer: 'Dalam banyak kes, ya. Jika anda sudah mempunyai aset SEO dan PR, GEO boleh menjadi lebih berkesan kerana sudah ada asas untuk dibina. Matlamatnya bukan untuk memulakan semula pemasaran dari sifar, tetapi untuk menjadikan kandungan dan isyarat kepercayaan sedia ada lebih berguna dalam persekitaran penemuan yang dipacu AI.'
    },

    // Risiko Dan Pemilihan Vendor (29-30)
    {
      id: 29,
      categoryKey: 'risk',
      question: '29. Adakah GEO mempunyai risiko pematuhan?',
      answer: 'Sebarang kerja kandungan dan keterlihatan yang menyasarkan pasaran China perlu dibuat dengan kesedaran pematuhan, terutamanya dalam kategori sensitif seperti kewangan, kesihatan, pendidikan, imigresen, dan perkhidmatan undang-undang. Pendekatan HollyGlobe ialah membina kandungan dan isyarat kepercayaan secara lebih berdisiplin, boleh disemak, dan lebih rendah risiko, bukannya membuat janji yang berlebihan.'
    },
    {
      id: 30,
      categoryKey: 'risk',
      question: '30. Bagaimana kami tahu sama ada penyedia perkhidmatan GEO itu benar-benar boleh dipercayai?',
      answer: 'Ada empat perkara utama yang patut diperhatikan. Pertama, adakah mereka benar-benar memahami platform AI China, bukan sekadar trend carian AI global. Kedua, adakah mereka mengelakkan janji tidak realistik seperti ranking terjamin. Ketiga, bolehkah mereka menerangkan dengan jelas apa yang dihantar, bagaimana kemajuan diukur, dan di mana sempadan perkhidmatan. Keempat, adakah mereka benar-benar memahami bagaimana syarikat B2B, pembuatan, dan perkhidmatan profesional membuat pembelian dan jualan.'
    }
  ],

  vi: [
    // Cơ bản (1-6)
    {
      id: 1,
      categoryKey: 'basics',
      question: '1. GEO là gì và khác gì so với SEO truyền thống?',
      answer: 'GEO là viết tắt của Generative Engine Optimization (Tối ưu hóa động cơ tạo). Nói một cách đơn giản, đó là việc nâng cao cách thương hiệu của bạn xuất hiện trong môi trường tìm kiếm AI và trả lời tự động bằng AI. SEO truyền thống tập trung nhiều hơn vào thứ hạng và lượt nhấp trên trang kết quả tìm kiếm. GEO tập trung nhiều hơn vào việc liệu thương hiệu của bạn có được tìm thấy, thấu hiểu, trích dẫn và đề xuất hay không khi người mua hỏi các công cụ AI xem họ nên cân nhắc nhà cung cấp hay sản phẩm nào.'
    },
    {
      id: 2,
      categoryKey: 'basics',
      question: '2. Sản phẩm HollyGlobe GEO thực sự làm gì?',
      answer: 'HollyGlobe GEO giúp các doanh nghiệp Singapore và Đông Nam Á cải thiện độ hiển thị trên các nền tảng AI hàng đầu Trung Quốc khi tiến vào thị trường này. Chúng tôi sắp xếp thông tin công ty, xây dựng cấu trúc nội dung thân thiện với AI, củng cố tín hiệu tin cậy, hỗ trợ phân phối và theo dõi hiệu suất hiển thị để thương hiệu của bạn có cơ hội xuất hiện cao hơn trong luồng nghiên cứu và đề xuất của người mua.'
    },
    {
      id: 3,
      categoryKey: 'basics',
      question: '3. GEO có giống AEO không, hay có sự khác biệt?',
      answer: 'Chúng có sự chồng chéo nhưng không hoàn toàn giống nhau. AEO thường tập trung hẹp hơn vào việc tối ưu hóa nội dung để trở thành câu trả lời trực tiếp. GEO rộng hơn, bao gồm sự nhắc đến thương hiệu, trích dẫn, độ hiển thị so sánh, sự hiện diện trong đề xuất và khả năng khám phá tổng thể trên các nền tảng AI. Đối với hầu hết doanh nghiệp, GEO là thuật ngữ thực tế hơn để xây dựng độ hiển thị AI.'
    },
    {
      id: 4,
      categoryKey: 'basics',
      question: '4. Tại sao các công ty nên bắt đầu làm GEO ngay bây giờ?',
      answer: 'Bởi vì ngày càng nhiều người mua, đặc biệt là trong mảng B2B, sử dụng AI trước khi liên hệ với đội ngũ bán hàng. Họ đặt câu hỏi, so sánh tùy chọn và sàng lọc nhà cung cấp trước khi bắt đầu cuộc trò chuyện. Nếu thương hiệu của bạn vắng mặt trong lớp câu trả lời của AI, bạn có thể bị loại ngay trước khi lọt vào danh sách rút gọn.'
    },
    {
      id: 5,
      categoryKey: 'basics',
      question: '5. GEO có thay thế SEO, marketing nội dung hay tối ưu hóa Baidu không?',
      answer: 'Không. GEO không thay thế các nỗ lực marketing hiện tại của bạn. Nó bổ sung thêm một lớp mới. Trang web, SEO, PR, marketing nội dung và bán hàng qua kênh vẫn rất quan trọng. GEO giúp tái cấu trúc và củng cố các tài sản đó để chúng dễ được khám phá và trích dẫn trong hành trình mua hàng dựa trên AI.'
    },
    {
      id: 6,
      categoryKey: 'basics',
      question: '6. GEO có phù hợp với mọi ngành nghề không?',
      answer: 'Không. GEO thường phù hợp nhất với các doanh nghiệp giá trị cao, dựa trên niềm tin, giàu thông tin mà người mua phải nghiên cứu kỹ trước khi liên hệ. Điều đó bao gồm sản xuất, chuỗi cung ứng công nghiệp, thiết bị, vật liệu, OEM/ODM, dịch vụ doanh nghiệp, tư vấn và các dịch vụ chuyên môn khác. Nó ít cấp thiết hơn đối với các doanh nghiệp giá trị thấp, tiêu dùng ngẫu hứng.'
    },

    // Đối tượng & Sự phù hợp (7-12)
    {
      id: 7,
      categoryKey: 'fit',
      question: '7. Loại hình công ty Singapore nào phù hợp nhất với HollyGlobe GEO?',
      answer: 'Phù hợp nhất là các công ty Singapore hoặc khu vực đang tiến vào Trung Quốc, có khách hàng tiềm năng giá trị cao, chu kỳ quyết định dài và hiện chưa có độ hiển thị AI tốt tại Trung Quốc. Điều này đặc biệt hữu ích cho các công ty đã có trang web, trang sản phẩm, nghiên cứu điển hình hoặc tài liệu bán hàng bằng tiếng Anh nhưng chưa xây dựng lớp hiển thị AI bằng tiếng Trung.'
    },
    {
      id: 8,
      categoryKey: 'fit',
      question: '8. Tại sao các công ty sản xuất và B2B lại đặc biệt phù hợp với GEO?',
      answer: 'Bởi vì mua hàng trong mảng sản xuất và B2B phụ thuộc rất nhiều vào nghiên cứu ban đầu. Người mua so sánh thông số kỹ thuật, chứng nhận, ứng dụng, độ uy tín của nhà cung cấp và sự phù hợp thương mại trước khi nói chuyện với bất kỳ ai. GEO giúp thương hiệu của bạn xuất hiện sớm hơn trong các khoảnh khắc nghiên cứu ý định cao đó.'
    },
    {
      id: 9,
      categoryKey: 'fit',
      question: '9. Các công ty dịch vụ chuyên nghiệp có phù hợp với GEO không?',
      answer: 'Có, đặc biệt là tư vấn, dịch vụ doanh nghiệp, tư vấn xuyên biên giới, pháp lý, thuế, giáo dục và một số dịch vụ liên quan đến trú nhập cư. Các doanh nghiệp này phụ thuộc nhiều vào niềm tin và câu hỏi của người mua. GEO giúp thương hiệu nổi bật hơn khi khách hàng tiềm năng hỏi đơn vị nào uy tín, quy trình ra sao, nên so sánh điều gì và cần lưu ý những gì.'
    },
    {
      id: 10,
      categoryKey: 'fit',
      question: '10. Chúng tôi có thể bắt đầu GEO nếu chưa có đội ngũ tại Trung Quốc không?',
      answer: 'Có. Đó là một trong những trường hợp phổ biến nhất cho HollyGlobe. Nhiều công ty Singapore có sản phẩm hoặc dịch vụ tốt nhưng không có đội ngũ địa phương tại Trung Quốc và chưa có năng lực vận hành AI Trung Quốc. GEO giúp xây dựng nền tảng hiển thị ban đầu trước khi công ty thực hiện các bước tiến vào thị trường lớn hơn.'
    },
    {
      id: 11,
      categoryKey: 'fit',
      question: '11. Chúng tôi có thể làm GEO nếu chưa có nội dung tiếng Trung không?',
      answer: 'Có, nhưng việc xây dựng nội dung nền tảng thường là một phần của công việc. Các nền tảng AI không thể hiểu hoặc đề xuất một thương hiệu mà không có tài liệu nguồn sử dụng được. Bạn vẫn cần các tài sản cốt lõi như thông tin sản phẩm, trang dịch vụ, FAQ, nghiên cứu điển hình, tín hiệu tin cậy và hồ sơ công ty.'
    },
    {
      id: 12,
      categoryKey: 'fit',
      question: '12. Các công ty chỉ tập trung vào thị trường Singapore có cần dịch vụ GEO này không?',
      answer: 'Thường không phải là ưu tiên hàng đầu. Dịch vụ GEO của HollyGlobe được thiết kế đặc biệt cho các công ty hướng tới nhu cầu từ thị trường Trung Quốc. Nếu Trung Quốc không nằm trong chiến lược tăng trưởng của bạn, dịch vụ này có thể không phải là bước đi đầu tiên phù hợp.'
    },

    // Phạm vi dịch vụ (13-18)
    {
      id: 13,
      categoryKey: 'scope',
      question: '13. Một dự án HollyGlobe GEO điển hình bao gồm những gì?',
      answer: 'Thường bao gồm kiểm toán độ hiển thị AI, chẩn đoán trạng thái hiện tại, lập bản đồ câu hỏi người mua, cải thiện cấu trúc nội dung và kiến thức, phát triển nội dung FAQ và so sánh, củng cố tín hiệu tin cậy, hướng dẫn phân phối nền tảng, cũng như theo dõi độ hiển thị và điều chỉnh liên tục.'
    },
    {
      id: 14,
      categoryKey: 'scope',
      question: '14. Bạn sẽ viết nội dung cho chúng tôi hay chỉ tư vấn?',
      answer: 'Chúng tôi không phải dịch vụ tư vấn thuần chiến lược. Phương pháp của HollyGlobe là chẩn đoán + triển khai + theo dõi. Chúng tôi giúp xác định những gì cần nói, cấu trúc ra sao và biến chúng thành tài sản nội dung mà các hệ thống AI dễ hiểu và trích dẫn hơn.'
    },
    {
      id: 15,
      categoryKey: 'scope',
      question: '15. Chúng tôi có cần trang FAQ cho GEO không?',
      answer: 'Trong hầu hết các trường hợp là có. Nội dung FAQ rất quan trọng vì nhiều tìm kiếm của người mua có ý định cao được diễn đạt dưới dạng câu hỏi, chẳng hạn như tính giá thế nào, giải pháp có phù hợp không, hoặc khác biệt ra sao. Thư viện FAQ mạnh giúp đáp ứng ý định tìm kiếm thực tế và tăng cơ hội được AI trích dẫn.'
    },
    {
      id: 16,
      categoryKey: 'scope',
      question: '16. GEO có phải chỉ là thêm FAQ vào trang web không?',
      answer: 'Không. FAQ chỉ là một phần. GEO hiệu quả còn liên quan đến cấu trúc kiến thức thương hiệu, trang sản phẩm và dịch vụ, nội dung so sánh, nghiên cứu điển hình, hướng dẫn ngành, tài liệu tham khảo uy tín, tín hiệu truyền thông và theo dõi hiệu suất. FAQ có ích nhưng một mình nó là chưa đủ.'
    },
    {
      id: 17,
      categoryKey: 'scope',
      question: '17. Bạn tập trung vào những nền tảng AI Trung Quốc nào?',
      answer: 'Tùy thuộc vào dự án, chúng tôi tập trung vào các nền tảng tìm kiếm và trả lời AI chính của Trung Quốc như ERNIE (Văn Tâm Nhất Ngôn), Doubao, Qianwen (Thông Nghĩa Thiên Vấn), Kimi, DeepSeek và Yuanbao, cùng hệ sinh thái tìm kiếm và tín hiệu tin cậy xung quanh.'
    },
    {
      id: 18,
      categoryKey: 'scope',
      question: '18. GEO có liên quan đến Baidu, marketing nội dung và phân phối truyền thông không?',
      answer: 'Có, nhưng như một phần của hệ thống hiển thị AI rộng lớn hơn. Các nền tảng AI thường dựa vào nội dung web, sự nhắc đến thương hiệu, tài liệu truyền thông và thông tin có cấu trúc để giải thích và hiển thị thương hiệu. GEO giúp các tài sản đó hữu ích hơn cho việc khám phá dựa trên AI.'
    },

    // Kết quả & Đo lường (19-24)
    {
      id: 19,
      categoryKey: 'results',
      question: '19. Mất bao lâu làm GEO trước khi chúng tôi thấy kết quả?',
      answer: 'Điều đó phụ thuộc vào điểm xuất phát, độ sâu nội dung, mức độ cạnh tranh ngành và tốc độ triển khai. Giai đoạn đầu thường là củng cố nền tảng bằng cách sắp xếp thông tin, cải thiện cấu trúc nội dung và thêm tín hiệu tin cậy. Những thay đổi có ý nghĩa về sự nhắc đến, trích dẫn và đề xuất thường cần quá trình theo dõi và điều chỉnh liên tục.'
    },
    {
      id: 20,
      categoryKey: 'results',
      question: '20. GEO có đảm bảo chúng tôi đứng đầu trong câu trả lời AI không?',
      answer: 'Không, và không có nhà cung cấp uy tín nào nên hứa điều đó. Kết quả AI thay đổi theo nền tảng, câu lệnh, ngữ cảnh và thời điểm. GEO là tăng khả năng thương hiệu của bạn được tìm thấy, thấu hiểu, trích dẫn và xem xét, chứ không phải đảm bảo vị trí cố định hàng đầu ở mọi nơi.'
    },
    {
      id: 21,
      categoryKey: 'results',
      question: '21. Hiệu suất GEO nên được đo lường như thế nào?',
      answer: 'GEO nên được đo lường qua các chỉ số như tỷ lệ nhắc đến, tỷ lệ trích dẫn, sự hiện diện đề xuất, độ hiển thị trên các nền tảng chính và mức độ bao phủ các câu hỏi ý định cao. Với doanh nghiệp B2B, điều quan trọng là mức tăng hiển thị có đóng góp vào cuộc trò chuyện chất lượng hơn và niềm tin cao hơn trước cuộc gọi bán hàng đầu tiên hay không.'
    },
    {
      id: 22,
      categoryKey: 'results',
      question: '22. GEO có trực tiếp tạo ra khách hàng không?',
      answer: 'Nó được hiểu tốt nhất như một kênh thu hút nguồn đầu vào mới thay vì một hệ thống bán hàng khép kín độc lập. GEO giúp thương hiệu của bạn bước vào giai đoạn nghiên cứu và danh sách rút gọn của người mua sớm hơn. Việc biến điều đó thành doanh thu vẫn phụ thuộc vào ưu đãi, giá cả, kỹ năng bán hàng và sự sẵn sàng của bạn.'
    },
    {
      id: 23,
      categoryKey: 'results',
      question: '23. GEO tốt hơn cho nhận diện thương hiệu hay tạo khách hàng tiềm năng?',
      answer: 'Nó có thể hỗ trợ cả hai, nhưng HollyGlobe tập trung nhiều hơn vào độ hiển thị tiền bán hàng có ý định cao. Nghĩa là giúp thương hiệu xuất hiện nơi người mua đang tích cực đặt câu hỏi về ngành và nhà cung cấp, thay vì chỉ đuổi theo con số nhận diện chung chung.'
    },
    {
      id: 24,
      categoryKey: 'results',
      question: '24. Nếu thương hiệu của chúng tôi hiện chưa có lượt nhắc đến AI nào, liệu có nên làm GEO không?',
      answer: 'Có, và đó thường chính là lý do bạn nên bắt đầu sớm. Với nhiều công ty tiến vào Trung Quốc, rủi ro lớn nhất không phải là tối ưu hóa yếu, mà là hoàn toàn vắng mặt trong lớp câu trả lời AI. Bạn xây dựng nội dung và nền tảng tin cậy càng sớm thì càng dễ hỗ trợ các nỗ lực PR, quảng cáo, hội thảo và bán hàng sau này.'
    },

    // Triển khai & Đầu tư (25-28)
    {
      id: 25,
      categoryKey: 'execution',
      question: '25. Công ty cần chuẩn bị những tài liệu gì trước khi bắt đầu GEO?',
      answer: 'Tài liệu khởi đầu hữu ích thường bao gồm trang web, mô tả sản phẩm/dịch vụ, đề xuất giá trị cốt lõi, trường hợp sử dụng, FAQ, nghiên cứu điển hình, chứng nhận, câu chuyện thương hiệu và thông tin liên hệ. Nếu chưa đầy đủ, chúng tôi vẫn có thể bắt đầu với các trang và câu hỏi quan trọng nhất trước.'
    },
    {
      id: 26,
      categoryKey: 'execution',
      question: '26. Ai trong công ty chúng tôi nên tham gia vào dự án GEO?',
      answer: 'Những người phù hợp nhất thường là người hiểu rõ kinh doanh, người mua và quy trình bán hàng. Điều đó có thể bao gồm người sáng lập, trưởng đại diện khu vực, trưởng phòng marketing, trưởng phòng BD hoặc chuyên gia sản phẩm. GEO không chỉ là công việc kỹ thuật, nó phụ thuộc nhiều vào câu hỏi thực tế của khách hàng và lợi thế cạnh tranh.'
    },
    {
      id: 27,
      categoryKey: 'execution',
      question: '27. Chi phí triển khai GEO có đắt không?',
      answer: 'So với chi tiêu quảng cáo thuần túy, GEO giống như việc xây dựng một cơ sở tài sản có thể tái sử dụng. Có khoản đầu tư ban đầu vào việc sắp xếp nội dung và cấu trúc hiển thị, nhưng các tài sản đó sẽ tiếp tục hỗ trợ trang web, bán hàng, PR và nỗ lực SEO tương lai của bạn thay vì biến mất sau khi chiến dịch kết thúc.'
    },
    {
      id: 28,
      categoryKey: 'execution',
      question: '28. Nếu chúng tôi đã làm SEO và PR, liệu có còn cần GEO không?',
      answer: 'Trong nhiều trường hợp là có. Nếu bạn đã có tài sản SEO và PR, GEO thậm chí còn hiệu quả hơn vì đã có nền tảng để phát triển. Mục tiêu không phải là làm lại marketing từ con số 0, mà là giúp nội dung và tín hiệu tin cậy hiện có phù hợp hơn bên trong môi trường khám phá do AI điều khiển.'
    },

    // Rủi ro & Lựa chọn đơn vị (29-30)
    {
      id: 29,
      categoryKey: 'risk',
      question: '29. GEO có đi kèm rủi ro tuân thủ pháp lý không?',
      answer: 'Bất kỳ công việc nội dung và truyền thông nào hướng tới thị trường Trung Quốc cũng cần thực hiện với nhận thức tuân thủ, đặc biệt trong các ngành nhạy cảm như tài chính, y tế, giáo dục, trú nhập cư và pháp lý. Phương pháp của HollyGlobe là xây dựng nội dung và tín hiệu tin cậy theo cách kỷ luật, có thể rà soát và rủi ro thấp hơn thay vì đưa ra những lời hứa thổi phồng.'
    },
    {
      id: 30,
      categoryKey: 'risk',
      question: '30. Làm thế nào để biết một đơn vị cung cấp dịch vụ GEO có uy tín hay không?',
      answer: 'Có 4 điều cần xem xét. Thứ nhất, họ có thực sự hiểu các nền tảng AI Trung Quốc không, chứ không chỉ nói về xu hướng AI toàn cầu. Thứ hai, họ có tránh các tuyên bố phi thực tế như đảm bảo thứ hạng không. Thứ ba, họ có thể giải thích rõ ràng những gì sẽ bàn giao, cách đo lường tiến độ và ranh giới dịch vụ không. Thứ tư, họ có hiểu cách các doanh nghiệp B2B, sản xuất và dịch vụ chuyên nghiệp thực sự mua và bán hay không.'
    }
  ]
};

export function generateFaqSchemaJson(lang: Language) {
  const items = FAQ_DATA[lang] || FAQ_DATA.en;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'inLanguage': lang === 'zh' ? 'zh-CN' : lang === 'ms' ? 'ms-MY' : lang === 'vi' ? 'vi-VN' : 'en-US',
    'mainEntity': items.map((item) => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer
      }
    }))
  };
}
