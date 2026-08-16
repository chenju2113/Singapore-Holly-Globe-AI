import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface XiaoxiandunYanwoCasePageProps {
  onNavigateHome: () => void;
  onOpenConsultation: () => void;
}

type CopyLocale = 'zh' | 'en';

interface HeroPoint {
  label: string;
  value: string;
  note: string;
}

interface StoryCard {
  eyebrow: string;
  title: string;
  body: string;
}

interface FactItem {
  label: string;
  value: string;
  note: string;
}

interface SearchScenario {
  query: string;
  headline: string;
  answer: string;
  bullets: string[];
  tags: string[];
}

interface KpiCard {
  label: string;
  value: string;
  badge: string;
  detail: string;
}

interface PitchCard {
  angle: string;
  title: string;
  body: string;
}

interface RankingItem {
  brand: string;
  score: string;
  note: string;
}

interface PlatformItem {
  platform: string;
  score: string;
  note: string;
}

interface MemoryTag {
  tag: string;
  detail: string;
}

interface PageCopy {
  heroBadge: string;
  heroEyebrow: string;
  heroDate: string;
  heroTitle: string;
  heroDescription: string;
  heroMetricLabel: string;
  heroMetricValue: string;
  heroMetricNote: string;
  heroTags: string[];
  primaryCta: string;
  secondaryCta: string;
  heroPoints: HeroPoint[];
  introTitle: string;
  introBody: string;
  storyCards: StoryCard[];
  factsTitle: string;
  factsBody: string;
  facts: FactItem[];
  demoTitle: string;
  demoBody: string;
  demoLabel: string;
  demoPlaceholder: string;
  demoButton: string;
  demoBadge: string;
  demoBulletsTitle: string;
  demoTagsTitle: string;
  scenarios: SearchScenario[];
  metricsTitle: string;
  metricsBody: string;
  kpis: KpiCard[];
  metricDefinitions: string[];
  pitchTitle: string;
  pitchBody: string;
  pitchCards: PitchCard[];
  rankingTitle: string;
  rankingBody: string;
  ranking: RankingItem[];
  platformsTitle: string;
  platformsBody: string;
  platforms: PlatformItem[];
  sentimentTitle: string;
  sentimentBody: string;
  sentimentLabels: [string, string, string];
  positiveTagsTitle: string;
  positiveTags: string[];
  memoryTitle: string;
  memoryBody: string;
  memoryTags: MemoryTag[];
  closeTitle: string;
  closeBody: string;
  closeCardLabel: string;
  closeCardTitle: string;
  closeCardBody: string;
  closeCardButton: string;
}

const COPY: Record<CopyLocale, PageCopy> = {
  zh: {
    heroBadge: '品牌案例',
    heroEyebrow: '鲜炖燕窝 / 品类定义 / AI 推荐优势',
    heroDate: '统计周期 2024-12-15 - 2025-01-15',
    heroTitle: '小仙炖如何把鲜炖燕窝的品类定义，做成 AI 更愿意推荐的品牌答案',
    heroDescription:
      '当“鲜炖、科学、纯粹、高端礼赠”这些认知被反复验证后，小仙炖已经不只是一个燕窝品牌，而是一个更容易被 AI 直接推荐的高端滋补品牌。',
    heroMetricLabel: '品牌推荐率',
    heroMetricValue: '97.84%',
    heroMetricNote: '鲜炖燕窝推荐场景第 1，领先第二名 3.6pt',
    heroTags: ['2014 开创鲜炖燕窝品类', '连续 9 年全国销量第一', '主流 AI 平台覆盖 95%+'],
    primaryCta: '预约品牌咨询',
    secondaryCta: '返回首页',
    heroPoints: [
      { label: '品类起点', value: '2014', note: '品牌公开信息显示，小仙炖开创鲜炖燕窝这一全新品类。' },
      { label: '工艺验证', value: '3300 次', note: '旗舰工艺经过 3300 次测试与 218 种时温组合验证。' },
      { label: '品牌背书', value: '9 年', note: '公开信息显示已连续 9 年成为全国鲜炖燕窝销量第一品牌。' },
    ],
    introTitle: '品牌故事的起点',
    introBody:
      '小仙炖真正建立起来的，不只是产品认知，而是一个同时能被用户、媒体和 AI 快速复述的品牌结构。',
    storyCards: [
      {
        eyebrow: 'Category Narrative',
        title: '从“卖燕窝”变成“定义鲜炖燕窝”',
        body: '小仙炖最强的叙事不是补品功效，而是率先开创鲜炖燕窝品类。对 AI 来说，品类开创者比普通品牌更容易被优先推荐。',
      },
      {
        eyebrow: 'Scientific Proof',
        title: '把“科学滋补”讲成可验证的事实',
        body: '3300 次测试、218 种时温组合和专利工艺，让“科学滋补”从概念变成证据，也让品牌更容易被理解为有标准、有方法。',
      },
      {
        eyebrow: 'Premium Lifestyle',
        title: '把高端礼赠做成现代中式养生表达',
        body: '旗舰店空间、纯粹配方、明星长期用户与创始人背景，共同让小仙炖更容易被理解成一个兼具体面感、品质感和长期主义的品牌。',
      },
    ],
    factsTitle: '品牌事实与权威资产',
    factsBody:
      '这些事实资产共同构成了品牌的权威基础，也让小仙炖在媒体、用户和 AI 这里更容易形成一致印象。',
    facts: [
      { label: '品类事实', value: '2014 年开创新品类', note: '品牌于 2014 年开创鲜炖燕窝这一全新品类。' },
      { label: '配方表达', value: '燕窝 / 冰糖 / 纯净水', note: '原料表达极简，强化了“纯粹配方”的高端心智。' },
      { label: '供应模式', value: '客户下单后新鲜炖煮', note: 'C2M 模式让“鲜炖”不只是品牌名，而是交付逻辑。' },
      { label: '工艺资产', value: '95 度恒温水雾炖煮', note: '结合 360 度旋转 180 次的专利工艺，强化科学与标准。' },
      { label: '销售背书', value: '连续 9 年全国销量第一', note: '这是 AI 与媒体最容易调用的权威证明之一。' },
      { label: '空间资产', value: '上海南京西路旗舰店', note: '把品牌从滋补品进一步拉高为高端生活方式表达。' },
    ],
    demoTitle: '把抽象数据翻译成真实搜索场景',
    demoBody:
      '在高意向搜索场景里，小仙炖之所以容易被优先想起，不只是因为被看见，更因为品牌认知已经足够清晰和稳定。',
    demoLabel: '搜索词',
    demoPlaceholder: '输入搜索词，例如：鲜炖燕窝推荐',
    demoButton: '查看模拟回答',
    demoBadge: '豆包推荐视角',
    demoBulletsTitle: '为什么这类问题会优先想到小仙炖',
    demoTagsTitle: '推荐依据标签',
    scenarios: [
      {
        query: '鲜炖燕窝推荐',
        headline: '如果用户在找鲜炖燕窝，小仙炖通常会是 AI 更优先推荐的品牌之一。',
        answer:
          '对 AI 来说，小仙炖最清晰的优势不是单一产品卖点，而是它已经把“鲜炖燕窝开创者”“纯粹配方”“科学工艺”“高端滋补”连成了一个完整品牌答案。这样的品牌更容易被直接点名，而不是只被放进备选名单。',
        bullets: [
          '鲜炖品类认知非常清楚，AI 更容易直接推荐。',
          '销量第一、专利工艺和明星长期用户一起构成高强度背书。',
          '品牌不只回答“好不好”，还回答“为什么值得推荐”。',
        ],
        tags: ['鲜炖燕窝', '品类开创者', '科学滋补', '高端滋补'],
      },
      {
        query: '适合送长辈的燕窝',
        headline: '当搜索意图进入送礼场景，小仙炖会更容易被理解成体面、稳妥且有品牌感的选择。',
        answer:
          '礼赠场景里，AI 更偏好那些不需要额外解释就能成立的品牌。小仙炖同时拥有品牌感、工艺感和礼赠感，所以在“送长辈”“送客户”“高端滋补礼品”这类问题里更容易进入前排推荐。',
        bullets: [
          '旗舰店与品牌空间强化了礼赠场景可信度。',
          '纯粹配方与冷鲜配送，让“送得出手”更有依据。',
          '长期滋养与品质生活的叙事，比功能型补品更容易成立。',
        ],
        tags: ['高端礼赠', '体面感', '品牌感强', '长期滋养'],
      },
      {
        query: '高端滋补礼品推荐',
        headline: '在高端滋补礼品语境里，小仙炖更容易被归类为一个有身份感的品牌，而不是单一补品。',
        answer:
          '相比只强调“补”的品牌，小仙炖已经把工艺、门店、品牌故事和现代中式养生结合起来。这会让 AI 更容易把它理解成兼具面子、品质和品牌权威的礼赠选择。',
        bullets: [
          '品牌故事、工艺故事和礼赠场景之间连接完整。',
          '“现代中式养生”让高端表达更自然，不会只落在价格上。',
          '这样的表达更容易兼顾品类教育与品牌溢价。',
        ],
        tags: ['高端礼品', '品牌权威', '现代中式养生', '礼赠场景'],
      },
      {
        query: '小仙炖怎么样',
        headline: '当用户直接搜索“小仙炖怎么样”时，AI 更容易给出成熟、稳定且偏正面的品牌判断。',
        answer:
          '因为公开信息里已经有足够多的品牌资产被反复验证，AI 对小仙炖的描述往往会集中在鲜炖、纯粹、科学、高端、销量领先这些关键词上。这会显著降低用户的理解成本与决策压力。',
        bullets: [
          '品牌标签已经很集中，不容易被讲成模糊的“燕窝品牌”。',
          '销量、工艺、创始人背景和旗舰店共同构成多层可信资产。',
          '正向口碑占比高，能帮助 AI 形成更一致的推荐表达。',
        ],
        tags: ['销量第一', '专利工艺', '品牌成熟', '正向口碑'],
      },
    ],
    metricsTitle: '核心指标',
    metricsBody:
      '这些数字共同说明，小仙炖已经在鲜炖燕窝、高端滋补与礼赠场景中建立起稳定而清晰的品牌优势。',
    kpis: [
      { label: '平均搜索率', value: '94.86%', badge: '高可见度', detail: '大多数相关问题里，AI 都能看到并提到小仙炖。' },
      { label: '首名搜索率', value: '71.24%', badge: '核心词首推', detail: '在直接给建议的场景里，小仙炖有较高概率排在第 1 位。' },
      { label: '前五名搜索率', value: '96.73%', badge: '稳定进前 5', detail: '这说明品牌不只是出现，而且长期保持靠前。' },
      { label: '品牌推荐率', value: '97.84%', badge: '行业第 1', detail: 'AI 更愿意主动推荐小仙炖，领先第二名 3.6pt。' },
    ],
    metricDefinitions: [
      '平均搜索率 94.86%：表示用户搜索鲜炖燕窝、滋补礼品、科学养生等问题时，AI 大多数情况下都会提到小仙炖。',
      '首名搜索率 71.24%：表示在 AI 直接给出品牌建议时，小仙炖有较高概率排在第 1 位。',
      '前五名搜索率 96.73%：表示大多数相关搜索里，小仙炖都能稳定进入前 5。',
      '品牌推荐率 97.84%：表示 AI 不只是提到小仙炖，而是更愿意主动把它推荐给需要滋补的人群。',
    ],
    pitchTitle: '三条品牌传播主线',
    pitchBody:
      '围绕品类定义、科学工艺和高端礼赠这三条主线，小仙炖已经形成了更完整、更具识别度的品牌表达。',
    pitchCards: [
      {
        angle: 'Angle 01',
        title: '它不是卖燕窝的品牌，而是定义鲜炖燕窝的品牌',
        body: '最强信息点不是只有销量，而是品类开创。小仙炖从 2014 年开始建立“鲜炖燕窝”这一新品类叙事，这让它在 AI 和媒体里更像行业定义者，而不是单一产品品牌。',
      },
      {
        angle: 'Angle 02',
        title: '把科学滋补讲成工艺资产，而不是抽象概念',
        body: '3300 次测试、218 种时温组合、95 度恒温水雾炖煮与专利工艺，让品牌可以被更自然地写成“有标准、有研究、有工艺系统”的现代中式滋补代表。',
      },
      {
        angle: 'Angle 03',
        title: '高端礼赠不只靠价格，而靠完整的品牌呈现',
        body: '旗舰店空间、极简配方、创始人背景与明星长期用户，共同让小仙炖具备“送得体面、讲得清楚、记得住”的品牌条件。',
      },
    ],
    rankingTitle: '排名表现',
    rankingBody: '领先不是一句口号，而是 AI 是否真的更愿意在关键问题里先提到你。',
    ranking: [
      { brand: '小仙炖鲜炖燕窝', score: '97.84%', note: '鲜炖燕窝推荐场景第 1' },
      { brand: '竞品 A', score: '94.24%', note: '与第一名存在 3.6pt 差距' },
      { brand: '竞品 B', score: '92.61%', note: '第二梯队头部品牌' },
      { brand: '竞品 C', score: '90.33%', note: '主流备选品牌' },
    ],
    platformsTitle: '平台覆盖',
    platformsBody: '真正有说服力的不是某个平台单点爆发，而是多个主流平台都给出相似判断。',
    platforms: [
      { platform: '豆包', score: '100%', note: '对礼赠与品牌心智表达最稳定' },
      { platform: 'DeepSeek', score: '98%', note: '对工艺、销量和品牌定位识别强' },
      { platform: '通义千问', score: '97%', note: '对高端滋补与品牌故事识别较好' },
      { platform: 'Kimi', score: '96%', note: '更偏总结型表达，但推荐稳定' },
      { platform: '文心一言', score: '95%', note: '对品牌权威与名人背书较敏感' },
    ],
    sentimentTitle: '口碑与品牌心智',
    sentimentBody:
      '当不同 AI 平台开始重复相似的描述时，说明品牌已经从“被看到”进入“被理解”。',
    sentimentLabels: ['正向口碑', '负面 / 风险', '中性描述'],
    positiveTagsTitle: '高频正向标签',
    positiveTags: ['新鲜', '纯粹', '高端', '适合送礼', '科学滋补', '长期主义'],
    memoryTitle: '已经开始稳定的品牌标签',
    memoryBody: '这些标签的价值，不在于好听，而在于它们足够稳定，能被用户、媒体和 AI 同时复述。',
    memoryTags: [
      { tag: '鲜炖燕窝开创者', detail: '这是最强的行业定义型标签，会直接影响 AI 如何归类品牌。' },
      { tag: '科学滋补', detail: '测试与工艺资产让“科学”有了更容易被引用的事实基础。' },
      { tag: '高端礼赠', detail: '礼赠心智已经不再依赖价格，而是依赖品牌整体呈现。' },
      { tag: '现代中式养生', detail: '品牌不只卖滋补产品，也在输出更现代的养生生活方式。' },
    ],
    closeTitle: '品牌结论',
    closeBody:
      '小仙炖已经把品类定义、科学工艺和高端礼赠，沉淀成了一个会被 AI 主动优先调用的品牌答案。',
    closeCardLabel: 'Brand Positioning',
    closeCardTitle: '小仙炖如何把鲜炖燕窝做成 AI 更愿意推荐的高端滋补品牌',
    closeCardBody:
      '从品类教育到权威背书，再到高端心智的稳定建立，小仙炖已经形成了一套可以被持续复述的品牌表达。',
    closeCardButton: '预约品牌咨询',
  },
  en: {
    heroBadge: 'Brand Narrative Case',
    heroEyebrow: 'Fresh-Stewed Bird Nest / Category Definition / AI Recommendation',
    heroDate: 'Reporting period 2024-12-15 - 2025-01-15',
    heroTitle: 'How Xiaoxiandun turned category definition into a brand answer AI is more willing to recommend',
    heroDescription:
      'Once freshness, scientific proof, purity, and premium gifting become repeatable brand signals, Xiaoxiandun stops being just a bird nest brand and becomes a high-end nourishment narrative AI can actively retrieve.',
    heroMetricLabel: 'Brand Recommendation Rate',
    heroMetricValue: '97.84%',
    heroMetricNote: 'No.1 in fresh-stewed bird nest recommendation scenarios, leading the runner-up by 3.6 points',
    heroTags: ['Created the category in 2014', 'Nine consecutive years of category sales leadership', '95%+ coverage across mainstream AI platforms'],
    primaryCta: 'Book a Brand Consultation',
    secondaryCta: 'Back to home',
    heroPoints: [
      { label: 'Category start', value: '2014', note: 'Public brand information positions Xiaoxiandun as the creator of the fresh-stewed bird nest category.' },
      { label: 'Process validation', value: '3300 tests', note: 'The flagship process was validated through 3300 tests and 218 temperature-time combinations.' },
      { label: 'Market proof', value: '9 years', note: 'Public information states nine consecutive years as the No.1 fresh-stewed bird nest sales brand nationwide.' },
    ],
    introTitle: 'Where the brand story begins',
    introBody:
      'Xiaoxiandun has not only built product awareness, but a brand structure that users, media, and AI can all retell quickly.',
    storyCards: [
      {
        eyebrow: 'Category Narrative',
        title: 'From selling bird nest to defining fresh-stewed bird nest',
        body: 'The strongest story is not product function but category creation. For AI, category creators naturally gain a clearer recommendation hierarchy than ordinary brands.',
      },
      {
        eyebrow: 'Scientific Proof',
        title: 'Turning scientific nourishment into verifiable evidence',
        body: '3300 tests, 218 process combinations, and patented production logic turn “scientific nourishment” from positioning into proof.',
      },
      {
        eyebrow: 'Premium Lifestyle',
        title: 'Making premium gifting feel like modern Chinese wellness',
        body: 'The flagship-store image, pure formula, celebrity usage, and founder background make the brand feel premium, presentable, and long-term.',
      },
    ],
    factsTitle: 'Brand facts and authority assets',
    factsBody:
      'These factual assets create the brand’s authority base and make it easier for media, users, and AI to arrive at the same understanding of Xiaoxiandun.',
    facts: [
      { label: 'Category fact', value: 'Created a new category in 2014', note: 'The brand positions itself as the creator of fresh-stewed bird nest.' },
      { label: 'Formula expression', value: 'Bird nest / rock sugar / purified water', note: 'Minimal ingredients reinforce the idea of purity.' },
      { label: 'Delivery logic', value: 'Freshly stewed after ordering', note: 'The C2M model makes freshness part of the delivery system.' },
      { label: 'Process asset', value: '95°C constant-temperature mist stewing', note: 'Together with patented rotation logic, this strengthens scientific credibility.' },
      { label: 'Sales proof', value: 'No.1 nationwide for 9 consecutive years', note: 'One of the easiest authority signals for AI and media to use.' },
      { label: 'Brand space', value: 'Flagship store on West Nanjing Road, Shanghai', note: 'This elevates the brand from supplement to lifestyle expression.' },
    ],
    demoTitle: 'Translate abstract metrics into real search intent',
    demoBody:
      'In high-intent search scenarios, Xiaoxiandun is easier to recall first not only because it appears, but because its brand meaning is already clear and stable.',
    demoLabel: 'Search query',
    demoPlaceholder: 'Enter a query, for example: fresh-stewed bird nest recommendation',
    demoButton: 'View simulated answer',
    demoBadge: 'AI Search Snapshot',
    demoBulletsTitle: 'Why Xiaoxiandun comes to mind first',
    demoTagsTitle: 'Recommendation tags',
    scenarios: [
      {
        query: 'fresh-stewed bird nest recommendation',
        headline: 'If a user is looking for fresh-stewed bird nest, Xiaoxiandun is often one of the first brands AI recommends.',
        answer:
          'Its strength is not a single product claim, but a complete brand answer that already combines category creation, purity, scientific process, and premium nourishment.',
        bullets: [
          'The fresh-stewed category story is unusually clear.',
          'Sales leadership, patented process, and celebrity usage provide strong proof.',
          'The brand answers not only whether it is good, but why it deserves recommendation.',
        ],
        tags: ['Fresh-stewed bird nest', 'Category creator', 'Scientific nourishment', 'Premium nourishment'],
      },
      {
        query: 'bird nest gift for elders',
        headline: 'When gifting becomes the intent, Xiaoxiandun is easier to understand as a polished and premium choice.',
        answer:
          'In gifting scenarios, AI prefers brands that feel valid without extra explanation. Xiaoxiandun combines brand image, process credibility, and gifting fit in one coherent expression.',
        bullets: [
          'The flagship-store image strengthens gifting credibility.',
          'The pure formula and cold-fresh logic make it feel more presentable.',
          'The long-term nourishment narrative feels more complete than a purely functional supplement brand.',
        ],
        tags: ['Premium gifting', 'Presentable', 'Strong brand image', 'Long-term nourishment'],
      },
      {
        query: 'premium nourishment gift recommendation',
        headline: 'In premium nourishment gifting, Xiaoxiandun is more likely to be classified as a status brand rather than a single supplement.',
        answer:
          'Compared with brands that focus only on function, Xiaoxiandun connects craftsmanship, retail space, brand story, and modern Chinese wellness into one stronger recommendation frame.',
        bullets: [
          'Its brand story, process story, and gifting story are tightly connected.',
          'Modern Chinese wellness keeps the premium expression from relying on price alone.',
          'The story balances category education with brand premiumization.',
        ],
        tags: ['Premium gifting', 'Brand authority', 'Modern Chinese wellness', 'Lifestyle signal'],
      },
      {
        query: 'is Xiaoxiandun good',
        headline: 'When users search directly for Xiaoxiandun, AI is more likely to return a mature and clearly positive overall judgment.',
        answer:
          'Because so many brand assets have already been publicly reinforced, AI descriptions tend to converge on fresh, pure, scientific, premium, and leading sales position.',
        bullets: [
          'The brand is no longer described as a vague bird nest label.',
          'Sales proof, process proof, founder background, and flagship store create layered credibility.',
          'High positive sentiment helps AI keep recommendation language consistent.',
        ],
        tags: ['Sales leader', 'Patented process', 'Mature brand', 'Positive sentiment'],
      },
    ],
    metricsTitle: 'Core metrics',
    metricsBody:
      'Together, these numbers show that Xiaoxiandun has built a stable and recognizable advantage across fresh-stewed bird nest, premium nourishment, and gifting scenarios.',
    kpis: [
      { label: 'Average Visibility', value: '94.86%', badge: 'High visibility', detail: 'AI mentions Xiaoxiandun in most relevant questions.' },
      { label: 'Top Position Rate', value: '71.24%', badge: 'Top-ranked core queries', detail: 'In direct recommendation scenarios, Xiaoxiandun often ranks first.' },
      { label: 'Top 5 Presence', value: '96.73%', badge: 'Stable top five', detail: 'The brand appears and stays near the front over time.' },
      { label: 'Brand Recommendation Rate', value: '97.84%', badge: 'Category No.1', detail: 'AI is more willing to actively recommend Xiaoxiandun.' },
    ],
    metricDefinitions: [
      'Average visibility 94.86%: AI mentions Xiaoxiandun in most relevant fresh bird nest, gifting, and scientific nourishment searches.',
      'Top position rate 71.24%: when AI gives a direct brand answer, Xiaoxiandun has a strong chance to rank first.',
      'Top five presence 96.73%: Xiaoxiandun remains within the top five in most relevant searches.',
      'Brand recommendation rate 97.84%: AI does not just mention Xiaoxiandun, it actively recommends the brand.',
    ],
    pitchTitle: 'Three brand narrative angles',
    pitchBody:
      'Across category definition, scientific process, and premium gifting, Xiaoxiandun has built a fuller and more recognizable brand expression.',
    pitchCards: [
      {
        angle: 'Angle 01',
        title: 'Not a bird nest seller, but a brand that defined fresh-stewed bird nest',
        body: 'The strongest hook is not sales alone, but category creation. That makes Xiaoxiandun feel closer to a category-defining brand than a single-product player.',
      },
      {
        angle: 'Angle 02',
        title: 'Scientific nourishment framed as process proof, not abstract positioning',
        body: 'The testing depth, temperature-time validation, and patented process make the brand easier to frame as systematic and evidence-backed.',
      },
      {
        angle: 'Angle 03',
        title: 'Premium gifting built through complete brand presentation, not price alone',
        body: 'The flagship-store environment, simple formula, founder story, and celebrity usage help the brand feel giftable, clear, and memorable.',
      },
    ],
    rankingTitle: 'Ranking performance',
    rankingBody: 'Leadership is real only when AI actually mentions you first in the moments that matter.',
    ranking: [
      { brand: 'Xiaoxiandun Fresh-Stewed Bird Nest', score: '97.84%', note: 'No.1 in fresh-stewed recommendation scenarios' },
      { brand: 'Competitor A', score: '94.24%', note: '3.6-point gap behind Xiaoxiandun' },
      { brand: 'Competitor B', score: '92.61%', note: 'Upper second-tier brand' },
      { brand: 'Competitor C', score: '90.33%', note: 'Mainstream alternative brand' },
    ],
    platformsTitle: 'Platform coverage',
    platformsBody: 'The real strength is not one isolated platform win, but similar conclusions across mainstream AI systems.',
    platforms: [
      { platform: 'Doubao', score: '100%', note: 'Most stable on gifting and brand-memory expression' },
      { platform: 'DeepSeek', score: '98%', note: 'Strong on process, sales proof, and positioning' },
      { platform: 'Tongyi Qianwen', score: '97%', note: 'Strong on premium nourishment and brand story' },
      { platform: 'Kimi', score: '96%', note: 'More summary-led, still stable in recommendation' },
      { platform: 'ERNIE Bot', score: '95%', note: 'Sensitive to authority and celebrity endorsement' },
    ],
    sentimentTitle: 'Sentiment and brand memory',
    sentimentBody:
      'Once multiple AI platforms begin repeating similar descriptions, the brand is moving from being merely visible to being clearly understood.',
    sentimentLabels: ['Positive', 'Risk / negative', 'Neutral'],
    positiveTagsTitle: 'High-frequency positive tags',
    positiveTags: ['Fresh', 'Pure', 'Premium', 'Giftable', 'Scientific nourishment', 'Long-term mindset'],
    memoryTitle: 'Brand tags that are already stabilizing',
    memoryBody: 'These tags matter because they are easy for users, media, and AI to repeat in the same way.',
    memoryTags: [
      { tag: 'Fresh-stewed category creator', detail: 'This is the strongest category-defining label shaping AI classification.' },
      { tag: 'Scientific nourishment', detail: 'Testing and process assets make the scientific claim easier to cite.' },
      { tag: 'Premium gifting', detail: 'The gifting memory now depends on total brand presentation, not price alone.' },
      { tag: 'Modern Chinese wellness', detail: 'The brand expresses a modern nourishment lifestyle, not just a product type.' },
    ],
    closeTitle: 'Brand conclusion',
    closeBody:
      'Xiaoxiandun has turned category definition, scientific process, and premium gifting into a brand answer AI is now willing to retrieve first.',
    closeCardLabel: 'Brand Positioning',
    closeCardTitle: 'How Xiaoxiandun became a premium nourishment brand AI is more willing to recommend',
    closeCardBody:
      'From category education to authority proof and premium positioning, Xiaoxiandun now holds a brand narrative that can be repeated consistently across channels.',
    closeCardButton: 'Book a Brand Consultation',
  },
};

export const XiaoxiandunYanwoCasePage: React.FC<XiaoxiandunYanwoCasePageProps> = ({
  onNavigateHome,
  onOpenConsultation,
}) => {
  const { language } = useLanguage();
  const locale: CopyLocale = language === 'zh' ? 'zh' : 'en';
  const copy = COPY[locale];
  const [activeScenario, setActiveScenario] = useState(0);
  const [inputValue, setInputValue] = useState(copy.scenarios[0].query);

  useEffect(() => {
    setActiveScenario(0);
    setInputValue(copy.scenarios[0].query);
  }, [copy]);

  const applyScenario = (index: number) => {
    setActiveScenario(index);
    setInputValue(copy.scenarios[index].query);
  };

  const handleSearch = () => {
    const normalized = inputValue.trim().toLowerCase();
    const index = copy.scenarios.findIndex((scenario) => {
      const query = scenario.query.toLowerCase();
      return normalized.includes(query) || query.includes(normalized);
    });
    applyScenario(index >= 0 ? index : 0);
  };

  const currentScenario = copy.scenarios[activeScenario];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f6efe8] pt-24 pb-20 text-[#2b1b15]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-[36px] border border-[#e4d5c6] bg-gradient-to-br from-[#fffaf4] via-[#f8ecde] to-[#f1ddc7] shadow-[0_36px_120px_rgba(67,35,16,0.10)]">
          <div className="absolute -top-28 right-[-5%] h-72 w-72 rounded-full bg-[#d8ab72]/25 blur-3xl" />
          <div className="absolute bottom-[-8rem] left-[-4rem] h-72 w-72 rounded-full bg-[#fff5e8] blur-3xl" />

          <div className="relative grid gap-8 px-6 py-8 sm:px-10 sm:py-10 lg:grid-cols-[1.2fr_0.9fr] lg:px-12 lg:py-12">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-[#d7bc9c] bg-white/85 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.26em] text-[#97551b]">
                  {copy.heroBadge}
                </span>
                <span className="text-sm font-medium text-[#7f5d46]">{copy.heroDate}</span>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.34em] text-[#ae6a2d]">
                  {copy.heroEyebrow}
                </p>
                <h1 className="max-w-4xl text-4xl font-black tracking-tight text-[#2b1b15] sm:text-5xl lg:text-[3.4rem] lg:leading-[1.04]">
                  {copy.heroTitle}
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-[#5d4437]">
                  {copy.heroDescription}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {copy.heroTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#eadccf] bg-white/80 px-3 py-1.5 text-sm font-medium text-[#654738]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {copy.heroPoints.map((point) => (
                  <div
                    key={point.label}
                    className="rounded-[24px] border border-white/70 bg-white/70 px-4 py-4 shadow-[0_12px_30px_rgba(67,35,16,0.05)]"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9b602c]">{point.label}</p>
                    <p className="mt-2 text-3xl font-black text-[#2b1b15]">{point.value}</p>
                    <p className="mt-2 text-sm leading-6 text-[#6b4e3d]">{point.note}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={onOpenConsultation}
                  className="rounded-full bg-[#8c4b17] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#744010]"
                >
                  {copy.primaryCta}
                </button>
                <button
                  onClick={onNavigateHome}
                  className="rounded-full border border-[#d6b896] bg-white/80 px-5 py-3 text-sm font-bold text-[#654738] transition hover:bg-white"
                >
                  {copy.secondaryCta}
                </button>
              </div>
            </div>

            <div className="rounded-[30px] border border-[#ead0b1] bg-[#2f1d14] p-6 text-white shadow-[0_24px_80px_rgba(47,29,20,0.26)] sm:p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-[#d7af86]">{copy.heroMetricLabel}</p>
              <div className="mt-4 text-6xl font-black leading-none text-[#ffe5c1]">
                {copy.heroMetricValue}
              </div>
              <p className="mt-4 text-base leading-7 text-[#f2ddc6]">{copy.heroMetricNote}</p>

              <div className="mt-8 rounded-[28px] border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d7af86]">
                  {locale === 'zh' ? '核心结论' : 'Core Conclusion'}
                </p>
                <p className="mt-3 text-sm leading-7 text-[#f6eadc]">
                  {copy.closeBody}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[30px] border border-[#e5d7ca] bg-white p-6 shadow-[0_18px_60px_rgba(67,35,16,0.06)] sm:p-8">
            <h2 className="text-2xl font-black text-[#2b1b15]">{copy.introTitle}</h2>
            <p className="mt-4 text-base leading-8 text-[#61493b]">{copy.introBody}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {copy.storyCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[30px] border border-[#e5d7ca] bg-gradient-to-b from-white to-[#fcf7f1] p-6 shadow-[0_18px_60px_rgba(67,35,16,0.05)]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#a0632f]">{card.eyebrow}</p>
                <h3 className="mt-4 text-xl font-black leading-8 text-[#2b1b15]">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#634a3c]">{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[34px] border border-[#e5d7ca] bg-gradient-to-r from-[#fffaf4] to-[#fbf1e4] p-6 shadow-[0_22px_70px_rgba(67,35,16,0.06)] sm:p-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-black text-[#2b1b15]">{copy.factsTitle}</h2>
            <p className="mt-4 text-base leading-8 text-[#61493b]">{copy.factsBody}</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {copy.facts.map((fact) => (
              <article
                key={fact.label}
                className="rounded-[26px] border border-[#eadccc] bg-white/85 p-5 shadow-[0_14px_30px_rgba(67,35,16,0.04)]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#9e602c]">{fact.label}</p>
                <h3 className="mt-3 text-xl font-black text-[#2b1b15]">{fact.value}</h3>
                <p className="mt-3 text-sm leading-7 text-[#62493b]">{fact.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[30px] border border-[#e5d7ca] bg-white p-6 shadow-[0_18px_60px_rgba(67,35,16,0.06)] sm:p-8">
            <h2 className="text-2xl font-black text-[#2b1b15]">{copy.demoTitle}</h2>
            <p className="mt-4 text-base leading-8 text-[#61493b]">{copy.demoBody}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {copy.scenarios.map((scenario, index) => (
                <button
                  key={scenario.query}
                  onClick={() => applyScenario(index)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    activeScenario === index
                      ? 'bg-[#8c4b17] text-white'
                      : 'border border-[#e5d5c2] bg-[#fbf6ef] text-[#654738] hover:bg-[#f4eadc]'
                  }`}
                >
                  {scenario.query}
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-[26px] border border-[#eadccc] bg-[#fffaf4] p-5">
              <label className="text-sm font-semibold text-[#654738]">{copy.demoLabel}</label>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <input
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                  placeholder={copy.demoPlaceholder}
                  className="min-w-0 flex-1 rounded-2xl border border-[#dcc4aa] bg-white px-4 py-3 text-sm text-[#2b1b15] outline-none transition focus:border-[#9e602c]"
                />
                <button
                  onClick={handleSearch}
                  className="rounded-2xl bg-[#2f1d14] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#20130d]"
                >
                  {copy.demoButton}
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-[30px] border border-[#d8c1ab] bg-[#2f1d14] p-6 text-white shadow-[0_24px_80px_rgba(47,29,20,0.22)] sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#efc28c] px-3 py-1 text-xs font-black uppercase tracking-[0.22em] text-[#5c2f0f]">
                {copy.demoBadge}
              </span>
              <span className="text-sm text-[#dcbca0]">{currentScenario.query}</span>
            </div>

            <h3 className="mt-5 text-2xl font-black leading-9 text-[#ffe8ca]">{currentScenario.headline}</h3>
            <p className="mt-4 text-base leading-8 text-[#f3e2d0]">{currentScenario.answer}</p>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-[0.24em] text-[#d7af86]">
                  {copy.demoBulletsTitle}
                </h4>
                <div className="mt-4 space-y-3">
                  {currentScenario.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-[#f7ebde]"
                    >
                      {bullet}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-[0.24em] text-[#d7af86]">
                  {copy.demoTagsTitle}
                </h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {currentScenario.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-sm text-[#fff1df]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-[30px] border border-[#e5d7ca] bg-white p-6 shadow-[0_18px_60px_rgba(67,35,16,0.06)] sm:p-8">
            <h2 className="text-2xl font-black text-[#2b1b15]">{copy.metricsTitle}</h2>
            <p className="mt-4 text-base leading-8 text-[#61493b]">{copy.metricsBody}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {copy.kpis.map((card) => (
                <article
                  key={card.label}
                  className="rounded-[24px] border border-[#eadccc] bg-[#fffaf4] p-5"
                >
                  <p className="text-sm font-semibold text-[#8f5b2b]">{card.label}</p>
                  <div className="mt-3 flex items-end justify-between gap-3">
                    <p className="text-4xl font-black text-[#2b1b15]">{card.value}</p>
                    <span className="rounded-full bg-[#f3e6d7] px-3 py-1 text-xs font-bold text-[#9d602d]">
                      {card.badge}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-[#62493b]">{card.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-[#e5d7ca] bg-gradient-to-br from-[#fffaf4] to-[#f8ede1] p-6 shadow-[0_18px_60px_rgba(67,35,16,0.06)] sm:p-8">
            <div className="space-y-3">
              {copy.metricDefinitions.map((definition) => (
                <div
                  key={definition}
                  className="rounded-2xl border border-[#eadccc] bg-white/85 px-4 py-4 text-sm leading-7 text-[#62493b]"
                >
                  {definition}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[34px] border border-[#dcc9b4] bg-gradient-to-r from-[#2f1d14] via-[#583316] to-[#8b4f1a] p-6 text-white shadow-[0_28px_100px_rgba(47,29,20,0.22)] sm:p-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-black text-[#ffe8cb]">{copy.pitchTitle}</h2>
            <p className="mt-4 text-base leading-8 text-[#f4e2cf]">{copy.pitchBody}</p>
          </div>
          <div className="mt-8 grid gap-4 xl:grid-cols-3">
            {copy.pitchCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[28px] border border-white/10 bg-white/8 p-5 backdrop-blur-sm"
              >
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#efc28c]">{card.angle}</p>
                <h3 className="mt-4 text-xl font-black leading-8 text-[#fff2df]">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#f4e4d4]">{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-2">
          <div className="rounded-[30px] border border-[#e5d7ca] bg-white p-6 shadow-[0_18px_60px_rgba(67,35,16,0.06)] sm:p-8">
            <h2 className="text-2xl font-black text-[#2b1b15]">{copy.rankingTitle}</h2>
            <p className="mt-4 text-base leading-8 text-[#61493b]">{copy.rankingBody}</p>
            <div className="mt-6 grid gap-3">
              {copy.ranking.map((item, index) => (
                <div
                  key={item.brand}
                  className="grid gap-3 rounded-2xl border border-[#eadccc] bg-[#fffaf4] px-4 py-4 sm:grid-cols-[56px_1fr_auto]"
                >
                  <div className="text-sm font-black text-[#9d602d]">#{index + 1}</div>
                  <div>
                    <p className="text-base font-bold text-[#2b1b15]">{item.brand}</p>
                    <p className="mt-1 text-sm text-[#62493b]">{item.note}</p>
                  </div>
                  <div className="text-2xl font-black text-[#2b1b15]">{item.score}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-[#e5d7ca] bg-white p-6 shadow-[0_18px_60px_rgba(67,35,16,0.06)] sm:p-8">
            <h2 className="text-2xl font-black text-[#2b1b15]">{copy.platformsTitle}</h2>
            <p className="mt-4 text-base leading-8 text-[#61493b]">{copy.platformsBody}</p>
            <div className="mt-6 grid gap-3">
              {copy.platforms.map((platform) => (
                <div
                  key={platform.platform}
                  className="rounded-2xl border border-[#eadccc] bg-[#fffaf4] px-4 py-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-base font-bold text-[#2b1b15]">{platform.platform}</p>
                    <p className="text-xl font-black text-[#8f4b17]">{platform.score}</p>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[#62493b]">{platform.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[30px] border border-[#d9c3ad] bg-[#2f1d14] p-6 text-white shadow-[0_24px_80px_rgba(47,29,20,0.22)] sm:p-8">
            <h2 className="text-2xl font-black text-[#ffe8cb]">{copy.sentimentTitle}</h2>
            <p className="mt-4 text-base leading-8 text-[#eddac5]">{copy.sentimentBody}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {(['87.9%', '4.9%', '7.2%'] as const).map((value, index) => (
                <div
                  key={value}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                >
                  <p className="text-sm text-[#d8b18a]">{copy.sentimentLabels[index]}</p>
                  <p className="mt-2 text-3xl font-black text-[#ffe8cb]">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#d8b18a]">
                {copy.positiveTagsTitle}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {copy.positiveTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-sm text-[#fff0df]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[30px] border border-[#e5d7ca] bg-white p-6 shadow-[0_18px_60px_rgba(67,35,16,0.06)] sm:p-8">
            <h2 className="text-2xl font-black text-[#2b1b15]">{copy.memoryTitle}</h2>
            <p className="mt-4 text-base leading-8 text-[#61493b]">{copy.memoryBody}</p>
            <div className="mt-6 grid gap-3">
              {copy.memoryTags.map((tag) => (
                <div
                  key={tag.tag}
                  className="rounded-2xl border border-[#eadccc] bg-[#fffaf4] px-4 py-4"
                >
                  <p className="text-base font-bold text-[#2b1b15]">{tag.tag}</p>
                  <p className="mt-2 text-sm leading-7 text-[#62493b]">{tag.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[34px] border border-[#d8c2ab] bg-gradient-to-r from-[#fffaf4] via-[#f7ecdf] to-[#f0dcc6] p-6 shadow-[0_22px_70px_rgba(67,35,16,0.06)] sm:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <h2 className="text-3xl font-black leading-tight text-[#2b1b15]">{copy.closeTitle}</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[#5f4739]">{copy.closeBody}</p>
            </div>
            <div className="rounded-[30px] border border-[#e0d0c1] bg-white/90 p-5 shadow-[0_16px_40px_rgba(67,35,16,0.05)]">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#9d602d]">{copy.closeCardLabel}</p>
              <h3 className="mt-3 text-2xl font-black leading-9 text-[#2b1b15]">{copy.closeCardTitle}</h3>
              <p className="mt-3 text-sm leading-7 text-[#62493b]">{copy.closeCardBody}</p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={onOpenConsultation}
                  className="rounded-full bg-[#8c4b17] px-5 py-3 text-sm font-black text-white transition hover:bg-[#744010]"
                >
                  {copy.closeCardButton}
                </button>
                <button
                  onClick={onNavigateHome}
                  className="rounded-full border border-[#d6b896] bg-[#fffaf4] px-5 py-3 text-sm font-bold text-[#654738] transition hover:bg-white"
                >
                  {copy.secondaryCta}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
