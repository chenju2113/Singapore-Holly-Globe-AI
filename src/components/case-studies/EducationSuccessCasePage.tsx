import React, { useEffect, useMemo, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface EducationSuccessCasePageProps {
  onNavigateHome: () => void;
  onOpenConsultation: () => void;
}

type Locale = 'zh' | 'en' | 'ja' | 'ms' | 'vi';
type BaseLocale = 'zh' | 'en';

interface DemoResult {
  query: string;
  headline: string;
  answer: string;
  tags: string[];
  bullets: string[];
  sources: string[];
}

interface Advantage {
  title: string;
  points: string[];
}

interface MemoryTag {
  tag: string;
  detail: string;
  warning?: boolean;
}

interface RankingItem {
  name: string;
  score: string;
  note: string;
}

interface KpiCard {
  label: string;
  value: string;
  delta: string;
  detail: string;
}

interface PageCopy {
  heroBadge: string;
  heroDate: string;
  heroRank: string;
  heroMetricLabel: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroTags: string[];
  primaryCta: string;
  secondaryCta: string;
  demoTitle: string;
  demoDescription: string;
  demoPlaceholder: string;
  demoButton: string;
  demoSteps: string[];
  demoHeaderTitle: string;
  demoHeaderSubtitle: string;
  demoStatus: string;
  demoSearchLabel: string;
  demoRecommendationBadge: string;
  demoScenarioBadge: string;
  demoWhyTitle: string;
  demoSourceTitle: string;
  metricTitle: string;
  metricDescription: string;
  keyMessageLabel: string;
  keyMessageTitle: string;
  keyMessageDescription: string;
  advantagesTitle: string;
  advantagesDescription: string;
  rankingTitle: string;
  rankingDescription: string;
  platformTitle: string;
  platformDescription: string;
  sentimentTitle: string;
  sentimentDescription: string;
  positiveLabel: string;
  negativeLabel: string;
  memoryTitle: string;
  memoryDescription: string;
  memoryEyebrow: string;
  clientAngleLabel: string;
  clientAngleTitle: string;
  clientAngleDescriptionStart: string;
  clientAngleDescriptionEmphasis: string;
  clientAngleDescriptionEnd: string;
  clientCardLabel: string;
  clientCardTitle: string;
  clientCardDescription: string;
  clientCardCta: string;
  kpiCards: KpiCard[];
  metricDefinitions: string[];
  advantages: Advantage[];
  platformScores: Array<{ name: string; score: number }>;
  ranking: RankingItem[];
  positiveTags: string[];
  brandMemory: MemoryTag[];
  mediaHooks: string[];
  demoResults: DemoResult[];
}

const BASE_COPY: Record<BaseLocale, PageCopy> = {
  zh: {
    heroBadge: 'Doubao AI Case',
    heroDate: '2026/08/08 - 2026/08/14',
    heroRank: '行业第一',
    heroMetricLabel: '品牌推荐率',
    heroTitle: '龙源实验中学',
    heroSubtitle: 'AI 推荐优势案例',
    heroDescription: '这份案例最核心的价值，是让客户一眼看懂龙源为什么更容易被 AI 推荐。',
    heroTags: ['豆包重点推荐', '核心词首推', '多平台稳定可见'],
    primaryCta: '获取同类行业案例包装',
    secondaryCta: '返回首页',
    demoTitle: '模拟客户在豆包里的搜索结果',
    demoDescription: '演示时可以直接输入家长常搜的问题，右侧会展示豆包风格的推荐回答，让客户更直观地看到龙源为什么会被优先推荐。',
    demoPlaceholder: '输入搜索词，例如：阳江高考复读学校',
    demoButton: '模拟搜索',
    demoSteps: [
      '1. 输入家长最常问的相关问题。',
      '2. 右侧会展示豆包可能给出的推荐结果。',
      '3. 用这个过程让客户看到龙源是怎样在 AI 搜索里建立优势的。',
    ],
    demoHeaderTitle: '豆包 AI 搜索',
    demoHeaderSubtitle: '搜索结果演示页',
    demoStatus: '深度理解中',
    demoSearchLabel: '搜索',
    demoRecommendationBadge: '豆包推荐',
    demoScenarioBadge: '教育搜索场景',
    demoWhyTitle: '豆包为什么会更倾向推荐龙源',
    demoSourceTitle: '推荐判断依据',
    metricTitle: '这些数据代表什么',
    metricDescription: '先看懂这些数字，再看优势，客户会更容易理解这份案例。',
    keyMessageLabel: 'Key Message',
    keyMessageTitle: '这不只是曝光数据，而是一份客户一看就能明白的行业领先案例。',
    keyMessageDescription: '如果要对外讲清楚这个案例，最容易打动客户的不是复杂术语，而是两件事：龙源已经在核心搜索场景里被 AI 优先推荐，而且这种优势在多个平台都很稳定。',
    advantagesTitle: '客户最容易理解的五个优势',
    advantagesDescription: '下面直接用客户能听懂的话，讲清楚这份案例的价值。',
    rankingTitle: '品牌推荐率排名',
    rankingDescription: '这部分最适合让客户快速理解，龙源为什么更值得被优先考虑。',
    platformTitle: '平台覆盖表现',
    platformDescription: '重点不是某一个平台表现好，而是主流 AI 平台里都能稳定看到龙源。',
    sentimentTitle: 'AI 搜索口碑',
    sentimentDescription: '在 2026 年 8 月 8 日到 2026 年 8 月 14 日的统计周期里，整体搜索印象以正面为主。',
    positiveLabel: '正面好评度',
    negativeLabel: '负面占比',
    memoryTitle: '品牌心智标签',
    memoryDescription: '当不同平台开始重复类似的描述时，说明品牌认知已经慢慢稳定下来了。',
    memoryEyebrow: 'Memory Tag',
    clientAngleLabel: '客户反馈',
    clientAngleTitle: '一段来自客户的满意留言',
    clientAngleDescriptionStart: '“和你们合作之后，我们最直观的感受是，',
    clientAngleDescriptionEmphasis: '原本复杂的 AI 数据被讲得非常清楚',
    clientAngleDescriptionEnd: '，案例页也更有说服力了。整个过程沟通顺畅、交付及时，文案和设计都很专业，我们对这次合作非常满意。”',
    clientCardLabel: '客户留言',
    clientCardTitle: '客户反馈',
    clientCardDescription: '整体合作体验很好。',
    clientCardCta: '继续完善客户案例',
    kpiCards: [
      { label: '平均搜索率', value: '97.22%', delta: '环比 +0.39', detail: '大多数相关搜索里，AI 都能看到并提到龙源。' },
      { label: '首名搜索率', value: '67.86%', delta: '核心词首推', detail: '在 AI 直接给建议时，龙源接近 7 成会排在第 1 位。' },
      { label: '前五名搜索率', value: '90.08%', delta: '环比 +2.38', detail: '10 次相关搜索里，大约 9 次都能稳定进入前 5。' },
      { label: '品牌推荐率', value: '97.62%', delta: '行业 NO.1', detail: 'AI 主动推荐龙源的比例位列行业第一，领先第二名 4.3pt。' },
    ],
    metricDefinitions: [
      '平均搜索率 97.22%：表示用户搜索相关问题时，AI 大多数情况下都会提到龙源。',
      '首名搜索率 67.86%：表示在 AI 给出直接答案时，龙源有接近 7 成会排在第 1 位。',
      '前五名搜索率 90.08%：表示龙源在大多数搜索里都能稳定进入前 5。',
      '整体搜索率 96.43%：表示龙源在整体 AI 搜索结果中的出现率非常高。',
      '品牌推荐率 97.62%：表示 AI 不只是提到龙源，而是更愿意主动把龙源推荐给用户。',
    ],
    advantages: [
      {
        title: '优势一：AI 搜索可见度拉满',
        points: [
          '平均搜索率 97.22%，说明家长搜索相关问题时，AI 大多数情况下都会看到龙源。',
          '前五名搜索率 90.08%，说明龙源不只是出现，而且大多数时候都排得比较靠前。',
          '整体搜索率 96.43%，四项核心指标都在上涨，代表品牌曝光越来越稳。',
        ],
      },
      {
        title: '优势二：品牌推荐率行业第一',
        points: [
          '品牌推荐率达到 97.62%，在同类学校里排名第一。',
          '对比阳江市第一中学 93.3%，龙源的领先优势已经被明确拉开。',
          '在“阳江高考复读学校”“阳江高考补习班”这类核心词里，龙源都能进入 AI 首推。',
        ],
      },
      {
        title: '优势三：核心 AI 平台满分覆盖',
        points: [
          '通义千问 100%、DeepSeek 100%、文心一言 100%。',
          '搜狗天宝 95.24%、今日头条 95.24%，整体表现同样非常稳定。',
          '这意味着家长常用的主流 AI 平台里，龙源都已经建立起很强的可见度。',
        ],
      },
      {
        title: '优势四：AI 搜索口碑高度正面',
        points: [
          '2026 年 8 月 8 日到 2026 年 8 月 14 日这段时间里，AI 给出的整体印象以正面为主。',
          '正面好评度为 78.4%，说明搜索结果里的品牌印象明显偏正向。',
          '家长最容易看到的正面评价，集中在师资、升学率、教学成果和管理效果上。',
        ],
      },
      {
        title: '优势五：品牌心智标签清晰',
        points: [
          'AI 对龙源的描述已经形成比较稳定的共识，比如“升学率高、师资雄厚、高效课堂”。',
          '这会让家长在不同平台看到的品牌印象更一致，更容易建立信任。',
          '其中“管理严格”既是优势标签，也是后续传播里需要更细致表达的一点。',
        ],
      },
    ],
    platformScores: [
      { name: '通义千问', score: 100 },
      { name: 'DeepSeek', score: 100 },
      { name: '文心一言', score: 100 },
      { name: '搜狗天宝', score: 95.24 },
      { name: '今日头条', score: 95.24 },
    ],
    ranking: [
      { name: '阳江市龙源实验中学', score: '97.62%', note: '行业第一 / 主动推荐占比最高' },
      { name: '阳江市第一中学', score: '93.3%', note: '第二名对标学校' },
      { name: '第二梯队学校区间', score: '88.7% - 93.3%', note: '第二到第九名整体区间' },
    ],
    positiveTags: ['师资力量雄厚', '升学率高', '教学成果显著', '家长满意度高', '教学环境优美', '校园文化浓厚', '高效课堂', '学生综合素质高'],
    brandMemory: [
      { tag: '升学率高', detail: '在家长搜索和 AI 生成回答中，这类标签反复出现，有助于快速形成品牌识别。' },
      { tag: '师资雄厚', detail: '在家长搜索和 AI 生成回答中，这类标签反复出现，有助于快速形成品牌识别。' },
      { tag: '管理严格', detail: '优势标签与潜在争议共存，后续传播中建议补充“严而有度、管理有方法”的叙事。', warning: true },
      { tag: '高效课堂', detail: '在家长搜索和 AI 生成回答中，这类标签反复出现，有助于快速形成品牌识别。' },
    ],
    mediaHooks: [
      'AI 更愿意主动推荐龙源，品牌推荐率达到 97.62%，位列行业第一。',
      '家长最常搜的两个核心问题里，龙源都已经进入 AI 首推位置。',
      '主流 AI 平台里都能稳定看到龙源，说明这个优势不是偶然出现，而是整体建立起来了。',
    ],
    demoResults: [
      {
        query: '阳江高考复读学校',
        headline: '如果你在阳江找高考复读学校，龙源实验中学通常会是 AI 更优先推荐的学校之一。',
        answer: '从师资、管理到口碑表现来看，龙源实验中学在 AI 搜索结果里的综合推荐表现更强，尤其适合重视提分效率和学习管理的家庭。',
        tags: ['品牌首推', '提分导向', '管理严格', '口碑稳定'],
        bullets: [
          '在相关搜索词里，龙源的主动推荐率排名第一。',
          'AI 最常提到的优势包括师资雄厚、升学率高和课堂效率高。',
          '更适合希望孩子在复读阶段得到更强管理和更明确提分支持的家长。',
        ],
        sources: ['搜索表现数据', '平台综合判断', '高频评价标签'],
      },
      {
        query: '阳江高考补习班',
        headline: '当用户搜索阳江高考补习班时，龙源实验中学通常会出现在 AI 的重点推荐里。',
        answer: 'AI 会把龙源归类为提分效果更明确、课堂管理更到位、家长认知度更高的学校，所以在补习班类需求里更容易优先推荐龙源。',
        tags: ['核心推荐', '课堂效率', '家长认可', '结果导向'],
        bullets: [
          '核心搜索词已经进入 AI 首推位置。',
          '前五名搜索率超过九成，说明大多数搜索都能稳定看到龙源。',
          'AI 给出的优势描述比较一致，有助于家长更快形成判断。',
        ],
        sources: ['搜索表现数据', '场景覆盖率', '品牌印象标签'],
      },
      {
        query: '阳江复读学校推荐',
        headline: '即使是在“阳江复读学校推荐”这种更泛的问题里，龙源实验中学依然有明显优势。',
        answer: 'AI 会综合学校的推荐率、平台可见度和口碑表现来给出答案。龙源因为覆盖高、推荐率高，所以更容易被排在前面并被主动点名。',
        tags: ['主动推荐', '高覆盖', '多平台优势', '品牌优先级'],
        bullets: [
          '整体搜索率 96.43%，意味着绝大多数相关问题里都能看到龙源。',
          '通义千问、DeepSeek、文心一言三大平台覆盖达到 100%。',
          '品牌口碑标签比较集中，所以 AI 更容易形成稳定推荐。',
        ],
        sources: ['搜索表现数据', '平台覆盖数据', '口碑标签识别'],
      },
    ],
  },
  en: {
    heroBadge: 'Doubao AI Case',
    heroDate: '2026/08/08 - 2026/08/14',
    heroRank: 'Category No.1',
    heroMetricLabel: 'Brand Recommendation Rate',
    heroTitle: 'Longyuan Experimental School',
    heroSubtitle: 'AI Recommendation Advantage Case',
    heroDescription: 'The real value of this case is helping clients understand at a glance why Longyuan is prioritized in AI search.',
    heroTags: ['Priority recommendation on Doubao', 'Top-ranked on core queries', 'Stable visibility across platforms'],
    primaryCta: 'Create a similar industry case',
    secondaryCta: 'Back to home',
    demoTitle: 'Simulate how clients would see this in Doubao search',
    demoDescription: 'During a presentation, you can input the questions parents usually search for and show a Doubao-style answer on the right. That makes Longyuan’s recommendation advantage much easier to understand.',
    demoPlaceholder: 'Enter a query, for example: Yangjiang repeat high school',
    demoButton: 'Simulate search',
    demoSteps: [
      '1. Enter a question parents search most often.',
      '2. The right panel shows the kind of answer Doubao may return.',
      '3. Use that flow to explain how Longyuan built an advantage inside AI search.',
    ],
    demoHeaderTitle: 'Doubao AI Search',
    demoHeaderSubtitle: 'Search result demo',
    demoStatus: 'Deep understanding in progress',
    demoSearchLabel: 'Search',
    demoRecommendationBadge: 'Doubao Recommendation',
    demoScenarioBadge: 'Education search scenario',
    demoWhyTitle: 'Why Doubao is more likely to recommend Longyuan',
    demoSourceTitle: 'Recommendation signals',
    metricTitle: 'What these metrics actually mean',
    metricDescription: 'Once clients understand the metrics, they understand the strength of this case much faster.',
    keyMessageLabel: 'Key Message',
    keyMessageTitle: 'This is not just exposure data. It is a category-leading case clients can understand immediately.',
    keyMessageDescription: 'When presenting this case externally, what persuades clients most is not technical language. It is the fact that Longyuan is already being prioritized by AI in core search scenarios, and that this advantage is stable across platforms.',
    advantagesTitle: 'Five advantages clients can understand quickly',
    advantagesDescription: 'Everything below is organized from the existing dataset to help clients understand the value of the case faster.',
    rankingTitle: 'Brand recommendation ranking',
    rankingDescription: 'This section is the fastest way to show why Longyuan deserves earlier consideration.',
    platformTitle: 'Platform coverage performance',
    platformDescription: 'The important point is not one platform doing well. It is that Longyuan appears consistently across mainstream AI platforms.',
    sentimentTitle: 'AI search reputation',
    sentimentDescription: 'During the August 8 to August 14, 2026 reporting period, the overall search impression remained strongly positive.',
    positiveLabel: 'Positive sentiment',
    negativeLabel: 'Negative share',
    memoryTitle: 'Brand memory tags',
    memoryDescription: 'When multiple platforms start repeating similar descriptions, it is a sign that brand perception is becoming stable.',
    memoryEyebrow: 'Memory Tag',
    clientAngleLabel: 'Customer Feedback',
    clientAngleTitle: 'A satisfied note from the client',
    clientAngleDescriptionStart: '"After working with your team, our biggest takeaway was that you',
    clientAngleDescriptionEmphasis: 'turned complex AI data into something easy to understand',
    clientAngleDescriptionEnd: ', which made the case page much more convincing. Communication was smooth, delivery was on time, and both the copy and design felt highly professional. We are very satisfied with the results."',
    clientCardLabel: 'Client Note',
    clientCardTitle: 'Client Feedback',
    clientCardDescription: 'The collaboration was smooth and clear.',
    clientCardCta: 'Refine the case study',
    kpiCards: [
      { label: 'Average Search Visibility', value: '97.22%', delta: '+0.39 vs prior period', detail: 'In most relevant searches, AI can see and mention Longyuan.' },
      { label: 'Top Position Rate', value: '67.86%', delta: 'No.1 on core queries', detail: 'When AI gives a direct answer, Longyuan ranks first in nearly 7 out of 10 cases.' },
      { label: 'Top 5 Presence Rate', value: '90.08%', delta: '+2.38 vs prior period', detail: 'In around 9 out of 10 relevant searches, Longyuan stays within the top five.' },
      { label: 'Brand Recommendation Rate', value: '97.62%', delta: 'Category No.1', detail: 'AI actively recommends Longyuan at the highest rate in the category, leading the runner-up by 4.3 points.' },
    ],
    metricDefinitions: [
      'Average Search Visibility 97.22%: in most relevant searches, AI mentions Longyuan.',
      'Top Position Rate 67.86%: when AI gives a direct recommendation, Longyuan ranks first in nearly 70% of cases.',
      'Top 5 Presence Rate 90.08%: Longyuan stays inside the top five in most search scenarios.',
      'Overall Search Visibility 96.43%: Longyuan appears across nearly all relevant AI search results.',
      'Brand Recommendation Rate 97.62%: AI is not just mentioning Longyuan. It is actively recommending the brand to users.',
    ],
    advantages: [
      {
        title: 'Advantage 1: AI search visibility is maximized',
        points: [
          'An average search visibility rate of 97.22% means AI sees Longyuan in most relevant parent searches.',
          'A top-five presence rate of 90.08% means Longyuan does not just appear. It appears near the top most of the time.',
          'An overall visibility rate of 96.43% with all major KPIs improving shows the brand’s exposure is becoming increasingly stable.',
        ],
      },
      {
        title: 'Advantage 2: Brand recommendation rate ranks first',
        points: [
          'The brand recommendation rate reaches 97.62%, placing Longyuan first among comparable schools.',
          'Compared with Yangjiang No.1 Middle School at 93.3%, the gap is already clear and measurable.',
          'On high-intent keywords such as “Yangjiang repeat high school” and “Yangjiang intensive prep class,” Longyuan reaches the top recommendation layer of AI results.',
        ],
      },
      {
        title: 'Advantage 3: Full coverage on core AI platforms',
        points: [
          'Tongyi Qianwen 100%, DeepSeek 100%, ERNIE Bot 100%.',
          'Sogou Tianbao 95.24% and Toutiao 95.24%, showing similarly stable performance.',
          'This means Longyuan has already built strong visibility across the mainstream AI platforms parents actually use.',
        ],
      },
      {
        title: 'Advantage 4: Strongly positive AI search reputation',
        points: [
          'From August 8, 2026 to August 14, 2026, the overall AI search impression remained mainly positive.',
          'A positive sentiment score of 78.4% shows that the brand impression inside search results is clearly favorable.',
          'The most visible positive signals focus on faculty strength, progression rate, academic outcomes, and management effectiveness.',
        ],
      },
      {
        title: 'Advantage 5: Brand memory is clear and consistent',
        points: [
          'AI descriptions of Longyuan have already converged around stable ideas such as high progression rate, strong faculty, and efficient classroom delivery.',
          'That consistency makes the brand easier for parents to trust across platforms.',
          'The phrase “strict management” is both a strength and a message that should be framed more carefully in future communications.',
        ],
      },
    ],
    platformScores: [
      { name: 'Tongyi Qianwen', score: 100 },
      { name: 'DeepSeek', score: 100 },
      { name: 'ERNIE Bot', score: 100 },
      { name: 'Sogou Tianbao', score: 95.24 },
      { name: 'Toutiao', score: 95.24 },
    ],
    ranking: [
      { name: 'Yangjiang Longyuan Experimental School', score: '97.62%', note: 'Category No.1 / highest active recommendation share' },
      { name: 'Yangjiang No.1 Middle School', score: '93.3%', note: 'Primary comparison school' },
      { name: 'Second-tier school range', score: '88.7% - 93.3%', note: 'Overall range from rank 2 to rank 9' },
    ],
    positiveTags: ['Strong faculty', 'High progression rate', 'Proven teaching outcomes', 'High parent satisfaction', 'Strong campus environment', 'Strong school culture', 'Efficient classes', 'Well-rounded students'],
    brandMemory: [
      { tag: 'High progression rate', detail: 'This type of language repeats across parent search journeys and AI-generated answers, helping users form brand recognition faster.' },
      { tag: 'Strong faculty', detail: 'This type of language repeats across parent search journeys and AI-generated answers, helping users form brand recognition faster.' },
      { tag: 'Strict management', detail: 'This is both a strength and a possible concern, so future messaging should frame it as disciplined but well-managed support.', warning: true },
      { tag: 'Efficient classroom', detail: 'This type of language repeats across parent search journeys and AI-generated answers, helping users form brand recognition faster.' },
    ],
    mediaHooks: [
      'AI is more willing to actively recommend Longyuan, with a 97.62% recommendation rate that ranks No.1 in the category.',
      'On the two most common parent search queries, Longyuan already appears as a top AI recommendation.',
      'Longyuan shows up consistently across mainstream AI platforms, which means the advantage is structural rather than accidental.',
    ],
    demoResults: [
      {
        query: 'Yangjiang repeat high school',
        headline: 'If you are looking for a repeat high school in Yangjiang, Longyuan Experimental School is typically one of the schools AI is most likely to recommend first.',
        answer: 'From faculty strength to management and reputation, Longyuan performs more strongly in AI search recommendations. It is especially suitable for families that care about score improvement and disciplined learning support.',
        tags: ['Top recommendation', 'Score improvement focus', 'Structured management', 'Stable reputation'],
        bullets: [
          'Longyuan ranks first in active recommendation rate for relevant search terms.',
          'AI most often highlights strengths such as strong faculty, high progression rate, and efficient classroom delivery.',
          'It is especially suitable for parents who want stronger management and clearer score-improvement support during the repeat year.',
        ],
        sources: ['Search performance data', 'Cross-platform judgment', 'High-frequency review tags'],
      },
      {
        query: 'Yangjiang intensive prep class',
        headline: 'When users search for intensive prep options in Yangjiang, Longyuan Experimental School usually appears in the main AI recommendation set.',
        answer: 'AI tends to classify Longyuan as a school with clearer score-improvement outcomes, stronger classroom management, and higher parent recognition. That makes it easier for Longyuan to earn priority placement in this scenario.',
        tags: ['Core recommendation', 'Classroom efficiency', 'Parent trust', 'Results-driven'],
        bullets: [
          'The brand already appears as a top recommendation on core search terms.',
          'Its top-five presence rate exceeds 90%, which means Longyuan shows up consistently in most searches.',
          'AI descriptions are relatively consistent, helping parents form a decision faster.',
        ],
        sources: ['Search performance data', 'Scenario coverage', 'Brand impression tags'],
      },
      {
        query: 'Yangjiang repeat school recommendation',
        headline: 'Even for broader searches such as “Yangjiang repeat school recommendation,” Longyuan Experimental School still holds a visible advantage.',
        answer: 'AI combines recommendation rate, platform visibility, and reputation signals when generating answers. Because Longyuan scores highly across all three, it is more likely to be named early and placed near the top.',
        tags: ['Active recommendation', 'High coverage', 'Multi-platform advantage', 'Brand priority'],
        bullets: [
          'Its overall search visibility rate is 96.43%, meaning Longyuan appears in almost every relevant question set.',
          'Coverage on Tongyi Qianwen, DeepSeek, and ERNIE Bot reaches 100%.',
          'Its reputation tags are concentrated and consistent, which makes stable AI recommendation easier.',
        ],
        sources: ['Search performance data', 'Platform coverage data', 'Reputation tag clustering'],
      },
    ],
  },
};

const COPY: Record<Locale, PageCopy> = {
  zh: BASE_COPY.zh,
  en: BASE_COPY.en,
  ja: {
    heroBadge: 'Doubao AI Case',
    heroDate: '2026/08/08 - 2026/08/14',
    heroRank: '業界 No.1',
    heroMetricLabel: 'ブランド推奨率',
    heroTitle: '龍源実験中学',
    heroSubtitle: 'AI 推奨優位ケース',
    heroDescription: 'この事例の価値は、なぜ龍源が AI 検索で優先的に推奨されるのかを、顧客が一目で理解できる点にあります。',
    heroTags: ['Doubao 重点推奨', '主要キーワードで最上位', '複数プラットフォームで安定露出'],
    primaryCta: '同業向けの事例パッケージを作成',
    secondaryCta: 'ホームへ戻る',
    demoTitle: 'Doubao における顧客検索結果を再現',
    demoDescription: '保護者がよく検索する質問を入力すると、右側に Doubao 風の推奨回答を表示します。龍源がなぜ優先推奨されるのかを、より直感的に示せます。',
    demoPlaceholder: '検索語を入力 例: 陽江 高考 復読 学校',
    demoButton: '検索を再現',
    demoSteps: [
      '1. 保護者がよく検索する質問を入力します。',
      '2. 右側に Doubao が返しそうな回答を表示します。',
      '3. この流れで、龍源が AI 検索内でどう優位性を築いたかを説明します。',
    ],
    demoHeaderTitle: 'Doubao AI Search',
    demoHeaderSubtitle: '検索結果デモ',
    demoStatus: '深く解析中',
    demoSearchLabel: '検索',
    demoRecommendationBadge: 'Doubao 推奨',
    demoScenarioBadge: '教育検索シーン',
    demoWhyTitle: 'Doubao が龍源を推奨しやすい理由',
    demoSourceTitle: '推奨の判断材料',
    metricTitle: 'これらの指標の意味',
    metricDescription: '数値の意味を理解すると、この事例の強さがより伝わりやすくなります。',
    keyMessageLabel: 'Key Message',
    keyMessageTitle: 'これは単なる露出データではなく、顧客がすぐ理解できる業界先行事例です。',
    keyMessageDescription: 'この事例を外部に伝えるときに重要なのは専門用語ではありません。龍源が主要な検索シーンで AI に優先推奨され、その優位性が複数プラットフォームで安定していることです。',
    advantagesTitle: '顧客が理解しやすい 5 つの優位性',
    advantagesDescription: '以下は既存データをもとに、顧客が価値を素早く理解できるよう整理した内容です。',
    rankingTitle: 'ブランド推奨率ランキング',
    rankingDescription: '龍源がなぜ優先的に検討されるべきかを、最も分かりやすく示せるパートです。',
    platformTitle: 'プラットフォーム別カバレッジ',
    platformDescription: '重要なのは一部のプラットフォームだけで強いことではなく、主要 AI 全体で安定して露出している点です。',
    sentimentTitle: 'AI 検索での評判',
    sentimentDescription: '2026 年 8 月 8 日から 2026 年 8 月 14 日までの集計期間では、全体的な検索印象は強いポジティブ傾向でした。',
    positiveLabel: 'ポジティブ比率',
    negativeLabel: 'ネガティブ比率',
    memoryTitle: 'ブランド想起タグ',
    memoryDescription: '複数のプラットフォームで似た表現が繰り返されると、ブランド認知が安定し始めていると判断できます。',
    memoryEyebrow: 'Memory Tag',
    clientAngleLabel: '顧客の声',
    clientAngleTitle: '満足度の高いお客様のメッセージ',
    clientAngleDescriptionStart: '「ご一緒してみて一番よかったのは、',
    clientAngleDescriptionEmphasis: '複雑な AI データをとてもわかりやすく整理してくれたこと',
    clientAngleDescriptionEnd: 'です。ケースページも説得力があり、やり取りもスムーズで、納品も早く、デザインもコピーも非常にプロフェッショナルでした。今回の仕上がりには大変満足しています。」',
    clientCardLabel: '顧客メッセージ',
    clientCardTitle: '顧客の声',
    clientCardDescription: '全体の進行がとてもスムーズでした。',
    clientCardCta: '事例ページをさらに磨く',
    kpiCards: [
      { label: '平均検索率', value: '97.22%', delta: '前期比 +0.39', detail: '関連検索の大半で、AI は龍源を認識し言及します。' },
      { label: '首位表示率', value: '67.86%', delta: '主要語で 1 位', detail: 'AI が直接答える場面では、約 7 割で龍源が 1 位に入ります。' },
      { label: '上位 5 位内率', value: '90.08%', delta: '前期比 +2.38', detail: '関連検索の約 9 割で、龍源は安定して上位 5 位内に入ります。' },
      { label: 'ブランド推奨率', value: '97.62%', delta: '業界 No.1', detail: 'AI が龍源を積極推奨する比率は業界最高で、2 位に 4.3pt 差をつけています。' },
    ],
    metricDefinitions: [
      '平均検索率 97.22%: 関連検索の大半で AI が龍源に言及することを意味します。',
      '首位表示率 67.86%: AI が直接推奨を出すとき、約 7 割で龍源が 1 位になることを意味します。',
      '上位 5 位内率 90.08%: ほとんどの検索シーンで龍源が上位 5 位内に入ることを意味します。',
      '全体検索率 96.43%: ほぼすべての関連 AI 検索結果に龍源が現れることを意味します。',
      'ブランド推奨率 97.62%: AI は単に龍源に触れるだけでなく、積極的に推奨していることを意味します。',
    ],
    advantages: [
      {
        title: '優位性 1: AI 検索での可視性が極めて高い',
        points: [
          '平均検索率 97.22% は、保護者関連の検索の大半で AI が龍源を認識していることを示します。',
          '上位 5 位内率 90.08% は、龍源が単に表示されるだけでなく、ほとんどの場合で上位にいることを示します。',
          '全体検索率 96.43% かつ主要 KPI がすべて改善しており、露出がより安定していることを示します。',
        ],
      },
      {
        title: '優位性 2: ブランド推奨率が業界 1 位',
        points: [
          'ブランド推奨率 97.62% で、同カテゴリの学校の中で 1 位です。',
          '陽江市第一中学の 93.3% と比較しても、差は明確です。',
          '「陽江高考復読学校」「陽江高考補習班」のような高意図キーワードで、龍源は AI の最上位推奨層に入っています。',
        ],
      },
      {
        title: '優位性 3: 主要 AI プラットフォームで満点級カバー',
        points: [
          '通義千問 100%、DeepSeek 100%、文心一言 100%。',
          '搜狗天宝 95.24%、今日頭条 95.24% で、こちらも非常に安定しています。',
          '保護者が実際に使う主要 AI プラットフォーム全体で、龍源が強い可視性を築いていることを意味します。',
        ],
      },
      {
        title: '優位性 4: AI 検索上の評判が非常にポジティブ',
        points: [
          '2026 年 8 月 8 日から 8 月 14 日の期間、AI 検索における印象は主にポジティブでした。',
          'ポジティブ比率 78.4% は、検索結果内のブランド印象が明確に好意的であることを示します。',
          '特に目立つ好意的評価は、教師陣、進学率、教育成果、管理力に集中しています。',
        ],
      },
      {
        title: '優位性 5: ブランド想起が明確で一貫している',
        points: [
          'AI による龍源の説明は「進学率が高い」「教師陣が強い」「効率的な授業」などの安定したイメージに収束しています。',
          'この一貫性により、保護者は複数プラットフォームで龍源をより信頼しやすくなります。',
          '「管理が厳しい」は強みでもあり、今後はより丁寧に伝えるべき表現でもあります。',
        ],
      },
    ],
    platformScores: [
      { name: '通義千問', score: 100 },
      { name: 'DeepSeek', score: 100 },
      { name: '文心一言', score: 100 },
      { name: '搜狗天宝', score: 95.24 },
      { name: '今日頭條', score: 95.24 },
    ],
    ranking: [
      { name: '陽江市龍源実験中学', score: '97.62%', note: '業界 1 位 / 積極推奨比率が最高' },
      { name: '陽江市第一中学', score: '93.3%', note: '主要比較対象校' },
      { name: '第 2 グループ学校帯', score: '88.7% - 93.3%', note: '2 位から 9 位までの全体レンジ' },
    ],
    positiveTags: ['教師陣が強い', '進学率が高い', '教育成果が高い', '保護者満足度が高い', '学習環境が良い', '校風が良い', '効率的な授業', '総合力の高い生徒'],
    brandMemory: [
      { tag: '進学率が高い', detail: 'この種の表現は保護者の検索導線や AI 回答内で繰り返され、ブランド認知を早く形成します。' },
      { tag: '教師陣が強い', detail: 'この種の表現は保護者の検索導線や AI 回答内で繰り返され、ブランド認知を早く形成します。' },
      { tag: '管理が厳しい', detail: '強みである一方、懸念にもなり得るため、今後は「規律がありつつ適切に支える」という文脈で伝えるのが望ましいです。', warning: true },
      { tag: '効率的な授業', detail: 'この種の表現は保護者の検索導線や AI 回答内で繰り返され、ブランド認知を早く形成します。' },
    ],
    mediaHooks: [
      'AI は龍源をより積極的に推奨しており、97.62% の推奨率で業界 1 位です。',
      '保護者が最もよく検索する 2 つの主要クエリで、龍源はすでに AI の最上位推奨に入っています。',
      '主要 AI プラットフォーム全体で龍源が安定して表示されており、この優位性が偶然ではなく構造的であることを示しています。',
    ],
    demoResults: [
      {
        query: '陽江 高考 復読 学校',
        headline: '陽江で高考復読学校を探している場合、龍源実験中学は AI が優先して推奨しやすい学校の一つです。',
        answer: '教師陣、管理、評判の総合面で、龍源は AI 検索推奨でより強いパフォーマンスを示しています。特に、点数向上や学習管理を重視する家庭に適しています。',
        tags: ['最上位推奨', '点数向上重視', '体系的な管理', '安定した評判'],
        bullets: [
          '関連検索語で、龍源の積極推奨率は 1 位です。',
          'AI は主に、強い教師陣、高い進学率、効率的な授業を強みとして挙げます。',
          '復読期間により強い管理と明確な成績向上支援を求める家庭に特に適しています。',
        ],
        sources: ['検索パフォーマンスデータ', 'クロスプラットフォーム評価', '高頻度レビュータグ'],
      },
      {
        query: '陽江 高考 補習班',
        headline: '陽江の高考補習を検索すると、龍源実験中学は AI の主要推奨群に入ることが多いです。',
        answer: 'AI は龍源を、成績向上成果が分かりやすく、授業管理が強く、保護者認知も高い学校として分類しやすく、このシーンで優先表示されやすくなります。',
        tags: ['主要推奨', '授業効率', '保護者信頼', '成果重視'],
        bullets: [
          '主要検索語ですでに最上位推奨に入っています。',
          '上位 5 位内率は 90% を超え、ほとんどの検索で安定表示されます。',
          'AI の説明が比較的一貫しており、保護者が判断を下しやすくなります。',
        ],
        sources: ['検索パフォーマンスデータ', 'シーン別カバレッジ', 'ブランド印象タグ'],
      },
      {
        query: '陽江 復読 学校 おすすめ',
        headline: '「陽江 復読学校 おすすめ」のような広めの検索でも、龍源実験中学は明確な優位性を保っています。',
        answer: 'AI は推奨率、プラットフォーム可視性、評判シグナルを組み合わせて回答を生成します。龍源はこの 3 つすべてで高スコアのため、早い段階で名前が挙がりやすく、上位に置かれやすいです。',
        tags: ['積極推奨', '高カバレッジ', '複数プラットフォーム優位', 'ブランド優先度'],
        bullets: [
          '全体検索率 96.43% により、ほぼすべての関連質問セットに龍源が現れます。',
          '通義千問、DeepSeek、文心一言でのカバレッジは 100% です。',
          '評判タグが集中して一貫しているため、安定した AI 推奨が起こりやすくなります。',
        ],
        sources: ['検索パフォーマンスデータ', 'プラットフォーム別カバレッジ', '評判タグの集約'],
      },
    ],
  },
  ms: {
    heroBadge: 'Doubao AI Case',
    heroDate: '2026/08/08 - 2026/08/14',
    heroRank: 'No.1 Industri',
    heroMetricLabel: 'Kadar Cadangan Jenama',
    heroTitle: 'Longyuan Experimental School',
    heroSubtitle: 'Kes Kelebihan Cadangan AI',
    heroDescription: 'Nilai utama kes ini ialah membantu klien memahami dengan sekali pandang mengapa Longyuan diberi keutamaan dalam carian AI.',
    heroTags: ['Cadangan utama di Doubao', 'Pilihan teratas untuk kata kunci teras', 'Keterlihatan stabil merentas platform'],
    primaryCta: 'Bina pakej kes industri serupa',
    secondaryCta: 'Kembali ke laman utama',
    demoTitle: 'Simulasikan hasil carian klien di Doubao',
    demoDescription: 'Semasa pembentangan, anda boleh masukkan soalan yang biasa dicari oleh ibu bapa dan tunjukkan jawapan gaya Doubao di sebelah kanan. Ini memudahkan klien memahami kelebihan Longyuan.',
    demoPlaceholder: 'Masukkan carian, contoh: sekolah ulang kaji gaokao Yangjiang',
    demoButton: 'Simulasikan carian',
    demoSteps: [
      '1. Masukkan soalan yang paling kerap dicari oleh ibu bapa.',
      '2. Panel kanan akan memaparkan jawapan yang mungkin diberi Doubao.',
      '3. Gunakan aliran ini untuk menerangkan bagaimana Longyuan membina kelebihan dalam carian AI.',
    ],
    demoHeaderTitle: 'Doubao AI Search',
    demoHeaderSubtitle: 'Demo hasil carian',
    demoStatus: 'Sedang menganalisis mendalam',
    demoSearchLabel: 'Carian',
    demoRecommendationBadge: 'Cadangan Doubao',
    demoScenarioBadge: 'Senario carian pendidikan',
    demoWhyTitle: 'Mengapa Doubao lebih cenderung mengesyorkan Longyuan',
    demoSourceTitle: 'Asas penilaian cadangan',
    metricTitle: 'Apa maksud metrik ini',
    metricDescription: 'Apabila klien faham maksud data, mereka lebih mudah nampak kekuatan sebenar kes ini.',
    keyMessageLabel: 'Key Message',
    keyMessageTitle: 'Ini bukan sekadar data pendedahan, tetapi kes peneraju kategori yang mudah difahami oleh klien.',
    keyMessageDescription: 'Apabila membentangkan kes ini, yang paling meyakinkan bukan bahasa teknikal. Yang penting ialah Longyuan sudah diberi keutamaan oleh AI dalam senario carian teras dan kelebihan ini stabil merentas platform.',
    advantagesTitle: 'Lima kelebihan yang paling mudah difahami klien',
    advantagesDescription: 'Semua kandungan di bawah disusun daripada data sedia ada untuk membantu klien memahami nilainya dengan lebih cepat.',
    rankingTitle: 'Ranking kadar cadangan jenama',
    rankingDescription: 'Bahagian ini paling sesuai untuk menunjukkan dengan cepat mengapa Longyuan patut dipertimbangkan lebih awal.',
    platformTitle: 'Prestasi liputan platform',
    platformDescription: 'Perkara penting bukan hanya satu platform yang bagus, tetapi Longyuan muncul secara konsisten di platform AI arus perdana.',
    sentimentTitle: 'Reputasi carian AI',
    sentimentDescription: 'Dalam tempoh laporan 8 Ogos 2026 hingga 14 Ogos 2026, tanggapan keseluruhan carian kekal sangat positif.',
    positiveLabel: 'Sentimen positif',
    negativeLabel: 'Peratus negatif',
    memoryTitle: 'Tag memori jenama',
    memoryDescription: 'Apabila banyak platform mula mengulangi gambaran yang sama, ini menandakan persepsi jenama semakin stabil.',
    memoryEyebrow: 'Memory Tag',
    clientAngleLabel: 'Maklum Balas Klien',
    clientAngleTitle: 'Nota pelanggan yang sangat puas hati',
    clientAngleDescriptionStart: '"Selepas bekerjasama dengan pasukan anda, kami paling kagum kerana anda',
    clientAngleDescriptionEmphasis: 'menjadikan data AI yang rumit sangat mudah difahami',
    clientAngleDescriptionEnd: ', dan halaman kesnya jadi jauh lebih meyakinkan. Komunikasi lancar, penghantaran tepat pada masa, serta penulisan dan reka bentuk semuanya sangat profesional. Kami sangat berpuas hati dengan hasilnya."',
    clientCardLabel: 'Nota Klien',
    clientCardTitle: 'Maklum Balas Klien',
    clientCardDescription: 'Kerjasama berjalan lancar dan teratur.',
    clientCardCta: 'Kemaskan lagi halaman kes',
    kpiCards: [
      { label: 'Kadar Carian Purata', value: '97.22%', delta: '+0.39 berbanding tempoh lalu', detail: 'Dalam kebanyakan carian berkaitan, AI dapat melihat dan menyebut Longyuan.' },
      { label: 'Kadar Kedudukan No.1', value: '67.86%', delta: 'No.1 pada kata kunci teras', detail: 'Apabila AI memberi jawapan langsung, Longyuan berada di tempat pertama dalam hampir 7 daripada 10 kes.' },
      { label: 'Kadar Muncul Top 5', value: '90.08%', delta: '+2.38 berbanding tempoh lalu', detail: 'Dalam sekitar 9 daripada 10 carian berkaitan, Longyuan kekal dalam lima teratas.' },
      { label: 'Kadar Cadangan Jenama', value: '97.62%', delta: 'No.1 Industri', detail: 'AI secara aktif mengesyorkan Longyuan pada kadar tertinggi dalam kategori, mendahului tempat kedua sebanyak 4.3 mata.' },
    ],
    metricDefinitions: [
      'Kadar Carian Purata 97.22%: dalam kebanyakan carian berkaitan, AI akan menyebut Longyuan.',
      'Kadar Kedudukan No.1 67.86%: apabila AI memberi cadangan langsung, Longyuan menduduki tempat pertama dalam hampir 70% kes.',
      'Kadar Muncul Top 5 90.08%: Longyuan berada dalam lima teratas bagi kebanyakan senario carian.',
      'Kadar Carian Keseluruhan 96.43%: Longyuan muncul dalam hampir semua hasil carian AI yang relevan.',
      'Kadar Cadangan Jenama 97.62%: AI bukan sekadar menyebut Longyuan, tetapi secara aktif mengesyorkannya kepada pengguna.',
    ],
    advantages: [
      {
        title: 'Kelebihan 1: Keterlihatan carian AI dimaksimumkan',
        points: [
          'Kadar carian purata 97.22% bermaksud AI melihat Longyuan dalam kebanyakan carian ibu bapa yang relevan.',
          'Kadar muncul lima teratas 90.08% bermaksud Longyuan bukan sekadar muncul, tetapi sering berada berhampiran bahagian atas.',
          'Kadar keterlihatan keseluruhan 96.43% dengan semua KPI utama meningkat menunjukkan pendedahan jenama semakin stabil.',
        ],
      },
      {
        title: 'Kelebihan 2: Kadar cadangan jenama berada di tempat pertama',
        points: [
          'Kadar cadangan jenama mencapai 97.62%, meletakkan Longyuan di tempat pertama dalam kalangan sekolah setara.',
          'Berbanding Yangjiang No.1 Middle School pada 93.3%, jurangnya jelas dan boleh diukur.',
          'Untuk kata kunci niat tinggi seperti “sekolah ulang kaji Yangjiang” dan “kelas intensif Yangjiang”, Longyuan masuk ke lapisan cadangan tertinggi AI.',
        ],
      },
      {
        title: 'Kelebihan 3: Liputan penuh pada platform AI teras',
        points: [
          'Tongyi Qianwen 100%, DeepSeek 100%, ERNIE Bot 100%.',
          'Sogou Tianbao 95.24% dan Toutiao 95.24%, juga menunjukkan prestasi yang sangat stabil.',
          'Ini bermaksud Longyuan telah membina keterlihatan yang kuat merentas platform AI utama yang digunakan ibu bapa.',
        ],
      },
      {
        title: 'Kelebihan 4: Reputasi carian AI yang sangat positif',
        points: [
          'Dari 8 Ogos 2026 hingga 14 Ogos 2026, tanggapan keseluruhan carian AI kebanyakannya positif.',
          'Skor sentimen positif 78.4% menunjukkan imej jenama dalam hasil carian jelas memihak kepada Longyuan.',
          'Isyarat positif yang paling kerap terlihat tertumpu pada kekuatan tenaga pengajar, kadar kemajuan, hasil akademik dan keberkesanan pengurusan.',
        ],
      },
      {
        title: 'Kelebihan 5: Memori jenama jelas dan konsisten',
        points: [
          'Penerangan AI tentang Longyuan telah tertumpu pada idea stabil seperti kadar kemajuan tinggi, tenaga pengajar kuat dan kelas yang efisien.',
          'Konsistensi ini memudahkan ibu bapa membina kepercayaan merentas platform.',
          'Frasa “pengurusan ketat” ialah kekuatan, tetapi juga perlu dibingkaikan dengan lebih teliti dalam komunikasi akan datang.',
        ],
      },
    ],
    platformScores: [
      { name: 'Tongyi Qianwen', score: 100 },
      { name: 'DeepSeek', score: 100 },
      { name: 'ERNIE Bot', score: 100 },
      { name: 'Sogou Tianbao', score: 95.24 },
      { name: 'Toutiao', score: 95.24 },
    ],
    ranking: [
      { name: 'Yangjiang Longyuan Experimental School', score: '97.62%', note: 'No.1 kategori / kadar cadangan aktif tertinggi' },
      { name: 'Yangjiang No.1 Middle School', score: '93.3%', note: 'Sekolah perbandingan utama' },
      { name: 'Julat sekolah lapisan kedua', score: '88.7% - 93.3%', note: 'Julat keseluruhan daripada tempat 2 hingga 9' },
    ],
    positiveTags: ['Tenaga pengajar kuat', 'Kadar kemajuan tinggi', 'Hasil pengajaran terbukti', 'Kepuasan ibu bapa tinggi', 'Persekitaran kampus baik', 'Budaya sekolah kukuh', 'Kelas efisien', 'Pelajar seimbang'],
    brandMemory: [
      { tag: 'Kadar kemajuan tinggi', detail: 'Jenis bahasa ini berulang dalam carian ibu bapa dan jawapan AI, membantu pengguna membina pengenalan jenama dengan lebih cepat.' },
      { tag: 'Tenaga pengajar kuat', detail: 'Jenis bahasa ini berulang dalam carian ibu bapa dan jawapan AI, membantu pengguna membina pengenalan jenama dengan lebih cepat.' },
      { tag: 'Pengurusan ketat', detail: 'Ini ialah kekuatan tetapi juga boleh menjadi kebimbangan, jadi mesej akan datang wajar membingkaikannya sebagai disiplin dengan sokongan yang terurus.', warning: true },
      { tag: 'Kelas efisien', detail: 'Jenis bahasa ini berulang dalam carian ibu bapa dan jawapan AI, membantu pengguna membina pengenalan jenama dengan lebih cepat.' },
    ],
    mediaHooks: [
      'AI lebih bersedia untuk secara aktif mengesyorkan Longyuan, dengan kadar cadangan 97.62% yang menduduki No.1 dalam kategori.',
      'Pada dua carian ibu bapa yang paling biasa, Longyuan sudah muncul sebagai cadangan AI teratas.',
      'Longyuan muncul secara konsisten di platform AI arus perdana, bermaksud kelebihan ini bersifat struktur dan bukan kebetulan.',
    ],
    demoResults: [
      {
        query: 'sekolah ulang kaji gaokao Yangjiang',
        headline: 'Jika anda mencari sekolah ulang kaji di Yangjiang, Longyuan Experimental School biasanya merupakan antara sekolah yang paling mungkin disyorkan AI terlebih dahulu.',
        answer: 'Daripada kekuatan tenaga pengajar hingga pengurusan dan reputasi, Longyuan menunjukkan prestasi yang lebih kuat dalam cadangan carian AI. Ia sangat sesuai untuk keluarga yang menitikberatkan peningkatan markah dan sokongan pembelajaran yang berdisiplin.',
        tags: ['Cadangan teratas', 'Fokus peningkatan markah', 'Pengurusan tersusun', 'Reputasi stabil'],
        bullets: [
          'Longyuan menduduki tempat pertama dalam kadar cadangan aktif bagi kata carian berkaitan.',
          'AI paling kerap menonjolkan kekuatan seperti tenaga pengajar kuat, kadar kemajuan tinggi dan kelas yang efisien.',
          'Ia sangat sesuai untuk ibu bapa yang mahukan pengurusan lebih kuat dan sokongan peningkatan markah yang lebih jelas semasa tahun ulang kaji.',
        ],
        sources: ['Data prestasi carian', 'Penilaian rentas platform', 'Tag ulasan berfrekuensi tinggi'],
      },
      {
        query: 'kelas intensif gaokao Yangjiang',
        headline: 'Apabila pengguna mencari pilihan kelas intensif di Yangjiang, Longyuan Experimental School biasanya muncul dalam set cadangan AI utama.',
        answer: 'AI cenderung mengklasifikasikan Longyuan sebagai sekolah dengan hasil peningkatan markah yang lebih jelas, pengurusan kelas yang lebih kuat, dan pengiktirafan ibu bapa yang lebih tinggi. Itu memudahkan Longyuan mendapat penempatan keutamaan.',
        tags: ['Cadangan teras', 'Kecekapan kelas', 'Kepercayaan ibu bapa', 'Berorientasi hasil'],
        bullets: [
          'Jenama ini sudah muncul sebagai cadangan teratas pada kata carian teras.',
          'Kadar muncul lima teratas melebihi 90%, bermakna Longyuan muncul secara konsisten dalam kebanyakan carian.',
          'Penerangan AI agak konsisten, membantu ibu bapa membuat keputusan dengan lebih cepat.',
        ],
        sources: ['Data prestasi carian', 'Liputan mengikut senario', 'Tag impresi jenama'],
      },
      {
        query: 'cadangan sekolah ulang kaji Yangjiang',
        headline: 'Walaupun untuk carian yang lebih umum seperti “cadangan sekolah ulang kaji Yangjiang”, Longyuan Experimental School masih mengekalkan kelebihan yang jelas.',
        answer: 'AI menggabungkan kadar cadangan, keterlihatan platform, dan isyarat reputasi apabila menjana jawapan. Oleh sebab Longyuan mendapat skor tinggi pada ketiga-tiganya, ia lebih berkemungkinan disebut awal dan diletakkan berhampiran bahagian atas.',
        tags: ['Cadangan aktif', 'Liputan tinggi', 'Kelebihan berbilang platform', 'Keutamaan jenama'],
        bullets: [
          'Kadar keterlihatan keseluruhannya ialah 96.43%, bermakna Longyuan muncul dalam hampir setiap set soalan yang relevan.',
          'Liputan pada Tongyi Qianwen, DeepSeek dan ERNIE Bot mencapai 100%.',
          'Tag reputasinya tertumpu dan konsisten, yang memudahkan cadangan AI yang stabil.',
        ],
        sources: ['Data prestasi carian', 'Data liputan platform', 'Pengelompokan tag reputasi'],
      },
    ],
  },
  vi: {
    heroBadge: 'Doubao AI Case',
    heroDate: '2026/08/08 - 2026/08/14',
    heroRank: 'Top 1 nganh',
    heroMetricLabel: 'Ty le de xuat thuong hieu',
    heroTitle: 'Longyuan Experimental School',
    heroSubtitle: 'Case loi the de xuat AI',
    heroDescription: 'Gia tri cot loi cua case nay la giup khach hang hieu ngay vi sao Longyuan duoc uu tien trong tim kiem AI.',
    heroTags: ['Doubao uu tien de xuat', 'Dung dau o tu khoa cot loi', 'Hien dien on dinh tren nhieu nen tang'],
    primaryCta: 'Tao goi case cung nganh',
    secondaryCta: 'Quay lai trang chu',
    demoTitle: 'Mo phong ket qua tim kiem cua khach hang tren Doubao',
    demoDescription: 'Trong luc thuyet trinh, ban co the nhap nhung cau hoi ma phu huynh thuong tim kiem va hien thi cau tra loi kieu Doubao o ben phai. Cach nay giup giai thich loi the cua Longyuan de hieu hon.',
    demoPlaceholder: 'Nhap truy van, vi du: truong hoc lai gaokao Yangjiang',
    demoButton: 'Mo phong tim kiem',
    demoSteps: [
      '1. Nhap cau hoi ma phu huynh tim kiem nhieu nhat.',
      '2. Khung ben phai se hien thi kieu cau tra loi ma Doubao co the dua ra.',
      '3. Dung quy trinh nay de giai thich cach Longyuan xay dung loi the trong tim kiem AI.',
    ],
    demoHeaderTitle: 'Doubao AI Search',
    demoHeaderSubtitle: 'Trang demo ket qua tim kiem',
    demoStatus: 'Dang phan tich sau',
    demoSearchLabel: 'Tim kiem',
    demoRecommendationBadge: 'Doubao de xuat',
    demoScenarioBadge: 'Tinh huong tim kiem giao duc',
    demoWhyTitle: 'Vi sao Doubao de nghi Longyuan nhieu hon',
    demoSourceTitle: 'Co so de xuat',
    metricTitle: 'Nhung chi so nay co y nghia gi',
    metricDescription: 'Khi khach hang hieu chi so, ho se nhin ra suc manh cua case nay nhanh hon.',
    keyMessageLabel: 'Key Message',
    keyMessageTitle: 'Day khong chi la du lieu hien dien, ma la mot case dan dau de khach hang co the hieu ngay.',
    keyMessageDescription: 'Khi trinh bay case nay, dieu thuyet phuc nhat khong phai la ngon ngu ky thuat. Quan trong nhat la Longyuan da duoc AI uu tien trong nhung tinh huong tim kiem cot loi va loi the nay on dinh tren nhieu nen tang.',
    advantagesTitle: '5 loi the khach hang de hieu nhat',
    advantagesDescription: 'Toan bo noi dung ben duoi duoc sap xep tu bo du lieu hien co de giup khach hang hieu gia tri nhanh hon.',
    rankingTitle: 'Xep hang ty le de xuat thuong hieu',
    rankingDescription: 'Day la phan nhanh nhat de cho thay vi sao Longyuan xung dang duoc uu tien xem xet som hon.',
    platformTitle: 'Hieu suat bao phu nen tang',
    platformDescription: 'Diem quan trong khong phai chi mot nen tang lam tot, ma la Longyuan xuat hien on dinh tren cac nen tang AI pho bien.',
    sentimentTitle: 'Danh gia tren tim kiem AI',
    sentimentDescription: 'Trong giai doan bao cao tu ngay 8 thang 8 nam 2026 den ngay 14 thang 8 nam 2026, cam nhan tong the tren tim kiem rat tich cuc.',
    positiveLabel: 'Ty le tich cuc',
    negativeLabel: 'Ty le tieu cuc',
    memoryTitle: 'Tag ghi nho thuong hieu',
    memoryDescription: 'Khi nhieu nen tang bat dau lap lai cac mo ta tuong tu, do la dau hieu nhan thuc thuong hieu dang on dinh hon.',
    memoryEyebrow: 'Memory Tag',
    clientAngleLabel: 'Phan hoi khach hang',
    clientAngleTitle: 'Mot dong nhan xet rat hai long',
    clientAngleDescriptionStart: '"Sau khi lam viec voi team cua ban, dieu chung toi an tuong nhat la',
    clientAngleDescriptionEmphasis: 'ban da bien du lieu AI phuc tap thanh noi dung cuc ky de hieu',
    clientAngleDescriptionEnd: ', khien trang case thay thuyet phuc hon han. Giao tiep rat muot, ban giao dung hen, va ca copy lan thiet ke deu rat chuyen nghiep. Chung toi rat hai long voi ket qua."',
    clientCardLabel: 'Nhan xet khach hang',
    clientCardTitle: 'Phan hoi khach hang',
    clientCardDescription: 'Qua trinh lam viec rat muot va ro rang.',
    clientCardCta: 'Hoan thien case study',
    kpiCards: [
      { label: 'Ty le tim kiem trung binh', value: '97.22%', delta: '+0.39 so voi ky truoc', detail: 'Trong phan lon truy van lien quan, AI co the nhin thay va nhac den Longyuan.' },
      { label: 'Ty le vi tri so 1', value: '67.86%', delta: 'So 1 o tu khoa cot loi', detail: 'Khi AI dua ra cau tra loi truc tiep, Longyuan dung dau trong gan 7/10 truong hop.' },
      { label: 'Ty le vao top 5', value: '90.08%', delta: '+2.38 so voi ky truoc', detail: 'Trong khoang 9/10 truy van lien quan, Longyuan giu vung trong top 5.' },
      { label: 'Ty le de xuat thuong hieu', value: '97.62%', delta: 'Top 1 nganh', detail: 'AI chu dong de xuat Longyuan voi ty le cao nhat trong nhom, vuot nguoi xep thu hai 4.3 diem.' },
    ],
    metricDefinitions: [
      'Ty le tim kiem trung binh 97.22%: trong phan lon truy van lien quan, AI se nhac den Longyuan.',
      'Ty le vi tri so 1 67.86%: khi AI dua ra de xuat truc tiep, Longyuan dung dau trong gan 70% truong hop.',
      'Ty le vao top 5 90.08%: Longyuan nam trong top 5 o phan lon tinh huong tim kiem.',
      'Ty le tim kiem tong the 96.43%: Longyuan xuat hien trong gan nhu tat ca ket qua tim kiem AI lien quan.',
      'Ty le de xuat thuong hieu 97.62%: AI khong chi nhac den Longyuan ma con chu dong de xuat thuong hieu nay cho nguoi dung.',
    ],
    advantages: [
      {
        title: 'Loi the 1: Do hien dien tren tim kiem AI duoc toi da hoa',
        points: [
          'Ty le tim kiem trung binh 97.22% cho thay AI nhin thay Longyuan trong hau het truy van lien quan cua phu huynh.',
          'Ty le vao top 5 la 90.08% cho thay Longyuan khong chi xuat hien ma con thuong xuyen o vi tri gan dau.',
          'Ty le hien dien tong the 96.43% cung viec tat ca KPI chinh deu tang cho thay muc do hien dien cua thuong hieu dang ngay cang on dinh.',
        ],
      },
      {
        title: 'Loi the 2: Ty le de xuat thuong hieu dung dau',
        points: [
          'Ty le de xuat thuong hieu dat 97.62%, dua Longyuan len vi tri so 1 trong nhom truong tuong duong.',
          'So voi Yangjiang No.1 Middle School o muc 93.3%, khoang cach da rat ro rang va co the do luong.',
          'Voi nhung tu khoa co y dinh cao nhu “truong hoc lai Yangjiang” va “lop bo tuc cuong do cao Yangjiang”, Longyuan da vao lop de xuat cao nhat cua AI.',
        ],
      },
      {
        title: 'Loi the 3: Bao phu day du tren cac nen tang AI cot loi',
        points: [
          'Tongyi Qianwen 100%, DeepSeek 100%, ERNIE Bot 100%.',
          'Sogou Tianbao 95.24% va Toutiao 95.24%, cung the hien do on dinh rat cao.',
          'Dieu nay co nghia Longyuan da xay dung do hien dien manh tren cac nen tang AI chinh ma phu huynh thuc su su dung.',
        ],
      },
      {
        title: 'Loi the 4: Hinh anh thuong hieu tren tim kiem AI rat tich cuc',
        points: [
          'Tu ngay 8 thang 8 nam 2026 den ngay 14 thang 8 nam 2026, an tuong tong the tren tim kiem AI chu yeu la tich cuc.',
          'Muc danh gia tich cuc 78.4% cho thay hinh anh thuong hieu trong ket qua tim kiem rat thuan loi.',
          'Nhung tin hieu tich cuc de nhan thay nhat tap trung vao doi ngu giao vien, ty le len lop, ket qua hoc tap va hieu qua quan ly.',
        ],
      },
      {
        title: 'Loi the 5: Ghi nho thuong hieu ro rang va dong nhat',
        points: [
          'Cach AI mo ta Longyuan da hoi tu quanh nhung y niem on dinh nhu ty le len lop cao, doi ngu giao vien manh va lop hoc hieu qua.',
          'Su dong nhat nay giup phu huynh de tin tuong thuong hieu hon tren nhieu nen tang.',
          'Cum “quan ly nghiem” vua la diem manh vua la thong diep can duoc dien dat can than hon trong truyen thong sau nay.',
        ],
      },
    ],
    platformScores: [
      { name: 'Tongyi Qianwen', score: 100 },
      { name: 'DeepSeek', score: 100 },
      { name: 'ERNIE Bot', score: 100 },
      { name: 'Sogou Tianbao', score: 95.24 },
      { name: 'Toutiao', score: 95.24 },
    ],
    ranking: [
      { name: 'Yangjiang Longyuan Experimental School', score: '97.62%', note: 'Top 1 nhom / ty le de xuat chu dong cao nhat' },
      { name: 'Yangjiang No.1 Middle School', score: '93.3%', note: 'Truong doi chieu chinh' },
      { name: 'Khoang truong nhom thu hai', score: '88.7% - 93.3%', note: 'Khoang tong the tu hang 2 den hang 9' },
    ],
    positiveTags: ['Doi ngu giao vien manh', 'Ty le len lop cao', 'Ket qua giang day tot', 'Phu huynh hai long cao', 'Moi truong hoc tap tot', 'Van hoa truong ro net', 'Lop hoc hieu qua', 'Hoc sinh phat trien toan dien'],
    brandMemory: [
      { tag: 'Ty le len lop cao', detail: 'Kieu ngong ngu nay lap lai trong hanh trinh tim kiem cua phu huynh va trong cau tra loi AI, giup nguoi dung hinh thanh nhan dien thuong hieu nhanh hon.' },
      { tag: 'Doi ngu giao vien manh', detail: 'Kieu ngong ngu nay lap lai trong hanh trinh tim kiem cua phu huynh va trong cau tra loi AI, giup nguoi dung hinh thanh nhan dien thuong hieu nhanh hon.' },
      { tag: 'Quan ly nghiem', detail: 'Day la diem manh nhung cung co the gay lo ngai, vi vay thong diep sau nay nen duoc dong khung thanh ky luat di kem ho tro hop ly.', warning: true },
      { tag: 'Lop hoc hieu qua', detail: 'Kieu ngong ngu nay lap lai trong hanh trinh tim kiem cua phu huynh va trong cau tra loi AI, giup nguoi dung hinh thanh nhan dien thuong hieu nhanh hon.' },
    ],
    mediaHooks: [
      'AI san sang chu dong de xuat Longyuan hon, voi ty le de xuat 97.62% dung so 1 trong nganh.',
      'O hai truy van ma phu huynh tim kiem nhieu nhat, Longyuan da xuat hien nhu mot de xuat AI hang dau.',
      'Longyuan xuat hien on dinh tren cac nen tang AI pho bien, cho thay loi the nay mang tinh cau truc chu khong phai ngau nhien.',
    ],
    demoResults: [
      {
        query: 'truong hoc lai gaokao Yangjiang',
        headline: 'Neu ban dang tim truong hoc lai o Yangjiang, Longyuan Experimental School thuong la mot trong nhung truong ma AI de xuat som nhat.',
        answer: 'Tu doi ngu giao vien den quan ly va danh gia, Longyuan the hien tot hon trong cac de xuat tim kiem AI. Truong dac biet phu hop voi gia dinh chu trong nang diem va ho tro hoc tap co ky luat.',
        tags: ['De xuat hang dau', 'Tap trung nang diem', 'Quan ly co cau truc', 'Danh gia on dinh'],
        bullets: [
          'Longyuan dung dau ve ty le de xuat chu dong cho cac truy van lien quan.',
          'AI thuong nhac den cac loi the nhu doi ngu giao vien manh, ty le len lop cao va lop hoc hieu qua.',
          'Rat phu hop voi phu huynh muon con duoc quan ly chat hon va co lo trinh nang diem ro rang trong nam hoc lai.',
        ],
        sources: ['Du lieu hieu suat tim kiem', 'Danh gia da nen tang', 'Tag danh gia tan suat cao'],
      },
      {
        query: 'lop bo tuc gaokao Yangjiang',
        headline: 'Khi nguoi dung tim kiem cac lua chon bo tuc cuong do cao tai Yangjiang, Longyuan Experimental School thuong xuat hien trong nhom de xuat chinh cua AI.',
        answer: 'AI co xu huong xep Longyuan vao nhom truong co ket qua nang diem ro rang hon, quan ly lop hoc chat hon va muc do duoc phu huynh cong nhan cao hon. Dieu do giup Longyuan de dang duoc uu tien hien thi.',
        tags: ['De xuat cot loi', 'Hieu qua lop hoc', 'Niem tin phu huynh', 'Huong ket qua'],
        bullets: [
          'Thuong hieu da xuat hien nhu mot de xuat hang dau o cac tu khoa cot loi.',
          'Ty le vao top 5 vuot 90%, nghia la Longyuan xuat hien on dinh trong da so truy van.',
          'Mo ta cua AI kha nhat quan, giup phu huynh ra quyet dinh nhanh hon.',
        ],
        sources: ['Du lieu hieu suat tim kiem', 'Do bao phu theo tinh huong', 'Tag an tuong thuong hieu'],
      },
      {
        query: 'goi y truong hoc lai Yangjiang',
        headline: 'Ngay ca voi truy van rong hon nhu “goi y truong hoc lai Yangjiang”, Longyuan Experimental School van giu duoc loi the ro rang.',
        answer: 'AI ket hop ty le de xuat, do hien dien tren nen tang va tin hieu danh gia khi tao cau tra loi. Vi Longyuan dat diem cao o ca ba mat nay, truong de duoc nhac ten som va xep gan dau hon.',
        tags: ['De xuat chu dong', 'Bao phu cao', 'Loi the da nen tang', 'Uu tien thuong hieu'],
        bullets: [
          'Ty le hien dien tong the dat 96.43%, nghia la Longyuan xuat hien trong gan nhu moi bo cau hoi lien quan.',
          'Do bao phu tren Tongyi Qianwen, DeepSeek va ERNIE Bot dat 100%.',
          'Cac tag danh gia tap trung va nhat quan, giup de xuat AI on dinh hon.',
        ],
        sources: ['Du lieu hieu suat tim kiem', 'Du lieu bao phu nen tang', 'Cum tag danh gia'],
      },
    ],
  },
};

const getLocale = (language: string): Locale => {
  if (language === 'zh' || language === 'en' || language === 'ja' || language === 'ms' || language === 'vi') {
    return language;
  }
  return 'en';
};

export const EducationSuccessCasePage: React.FC<EducationSuccessCasePageProps> = ({
  onNavigateHome,
  onOpenConsultation,
}) => {
  const { language } = useLanguage();
  const locale = getLocale(language);
  const copy = COPY[locale];

  const [demoQuery, setDemoQuery] = useState(copy.demoResults[0].query);
  const [activeDemoQuery, setActiveDemoQuery] = useState(copy.demoResults[0].query);

  useEffect(() => {
    setDemoQuery(copy.demoResults[0].query);
    setActiveDemoQuery(copy.demoResults[0].query);
  }, [locale, copy.demoResults]);

  const activeDemoResult = useMemo(() => {
    const normalized = activeDemoQuery.replace(/\s+/g, '').toLowerCase();
    return (
      copy.demoResults.find((item) => normalized.includes(item.query.replace(/\s+/g, '').toLowerCase())) ||
      copy.demoResults.find((item) => item.query.replace(/\s+/g, '').toLowerCase().includes(normalized)) ||
      copy.demoResults[0]
    );
  }, [activeDemoQuery, copy.demoResults]);

  const runDemoSearch = () => {
    const nextQuery = demoQuery.trim();
    if (!nextQuery) return;
    setActiveDemoQuery(nextQuery);
  };

  return (
    <main className="bg-[linear-gradient(180deg,#08101f_0%,#0d1730_16%,#edf5ff_38%,#f8fbff_64%,#ffffff_100%)] px-6 pb-20 pt-28">
      <div className="mx-auto max-w-[1280px] space-y-8">
        <section className="relative overflow-hidden rounded-[32px] border border-[#173154] bg-[linear-gradient(135deg,#07111f_0%,#0b1a31_42%,#0f2b4d_100%)] px-7 py-8 shadow-[0_30px_120px_rgba(3,10,24,0.42)] sm:px-10 sm:py-12">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(111,171,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(111,171,255,0.07)_1px,transparent_1px)] bg-[size:26px_26px] opacity-40" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.26),transparent_72%)]" />
          <div className="pointer-events-none absolute -right-16 top-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(26,214,255,0.24),transparent_66%)] blur-2xl" />
          <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[linear-gradient(120deg,transparent_0%,transparent_55%,rgba(130,194,255,0.07)_70%,transparent_100%)]" />

          <div className="relative">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono-code font-bold uppercase tracking-[0.18em] text-[#8aa6cb]">
                <span className="rounded-full border border-[#2e5280] bg-white/8 px-3 py-1 text-[#80d8ff]">
                  {copy.heroBadge}
                </span>
                <span>{copy.heroDate}</span>
              </div>

              <div className="rounded-[22px] border border-[#2a4d78] bg-white/8 px-5 py-4 shadow-[0_14px_50px_rgba(0,0,0,0.2)] backdrop-blur-sm">
                <div className="text-[10px] font-mono-code uppercase tracking-[0.16em] text-[#8fb7df]">
                  {copy.heroRank}
                </div>
                <div className="mt-2 text-3xl font-black tracking-[-0.04em] text-white">
                  97.62%
                </div>
                <div className="text-sm text-[#bed2ec]">{copy.heroMetricLabel}</div>
              </div>
            </div>

            <div className="mt-10 max-w-4xl">
              <h1 className="pb-1 text-4xl font-black leading-[0.96] tracking-[-0.06em] text-white sm:text-6xl">
                {copy.heroTitle}
                <span className="mt-2 block text-[#8fe6ff]">{copy.heroSubtitle}</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#c8d7eb] sm:text-lg">
                {copy.heroDescription}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {copy.heroTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#2d4f7f] bg-white/6 px-3 py-1.5 text-xs font-semibold text-[#bfe8ff]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={onOpenConsultation}
                className="rounded-full bg-[linear-gradient(135deg,#8fe6ff_0%,#3b82f6_100%)] px-5 py-3 text-sm font-bold text-[#07111f] shadow-[0_18px_40px_rgba(59,130,246,0.3)] transition-all hover:-translate-y-[1px] hover:brightness-110"
              >
                {copy.primaryCta}
              </button>
              <button
                onClick={onNavigateHome}
                className="rounded-full border border-[#345987] bg-white/6 px-5 py-3 text-sm font-bold text-white transition-colors hover:border-[#8fe6ff] hover:text-[#8fe6ff]"
              >
                {copy.secondaryCta}
              </button>
            </div>

            <div className="mt-12 overflow-hidden rounded-[28px] border border-[#223f67] bg-white/6 backdrop-blur-sm">
              <div className="grid gap-px bg-[#223f67] md:grid-cols-4">
                {copy.kpiCards.map((item) => (
                  <div key={item.label} className="bg-[linear-gradient(180deg,rgba(9,20,36,0.94)_0%,rgba(12,26,46,0.94)_100%)] px-5 py-5">
                    <div className="text-[11px] font-mono-code uppercase tracking-[0.16em] text-[#85a6cd]">
                      {item.label}
                    </div>
                    <div className="mt-3 text-3xl font-black tracking-[-0.04em] text-white">
                      {item.value}
                    </div>
                    <div className="mt-2 text-xs font-bold text-[#8fe6ff]">{item.delta}</div>
                    <p className="mt-3 text-sm leading-relaxed text-[#bed0e6]">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-[32px] border border-[#d2e3fb] bg-white shadow-[0_20px_70px_rgba(11,28,48,0.07)]">
          <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
            <div className="border-b border-[#dce6f5] bg-[linear-gradient(180deg,#f4f9ff_0%,#fbfdff_100%)] p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <h2 className="mt-3 text-2xl font-black tracking-[-0.04em] text-[#0b1c30] sm:text-3xl">
                {copy.demoTitle}
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#5a667a]">
                {copy.demoDescription}
              </p>

              <form
                className="mt-6 space-y-4"
                onSubmit={(event) => {
                  event.preventDefault();
                  runDemoSearch();
                }}
              >
                <div className="rounded-[24px] border border-[#d7e4fb] bg-white p-2 shadow-sm">
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <input
                      value={demoQuery}
                      onChange={(event) => setDemoQuery(event.target.value)}
                      placeholder={copy.demoPlaceholder}
                      className="flex-1 rounded-[18px] border border-transparent bg-[#f7fbff] px-4 py-3 text-sm text-[#0b1c30] outline-none transition focus:border-[#bfd5ff] focus:bg-white"
                    />
                    <button
                      type="submit"
                      className="rounded-[18px] bg-[linear-gradient(135deg,#0ea5e9_0%,#2563eb_100%)] px-5 py-3 text-sm font-bold text-white transition-all hover:-translate-y-[1px] hover:brightness-110"
                    >
                      {copy.demoButton}
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {copy.demoResults.map((item) => (
                    <button
                      key={item.query}
                      type="button"
                      onClick={() => {
                        setDemoQuery(item.query);
                        setActiveDemoQuery(item.query);
                      }}
                      className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all ${
                        activeDemoResult.query === item.query
                          ? 'border-[#0056c5] bg-[#eaf2ff] text-[#0056c5]'
                          : 'border-[#d7e4fb] bg-white text-[#5a667a] hover:border-[#a9c4f4] hover:text-[#0b1c30]'
                      }`}
                    >
                      {item.query}
                    </button>
                  ))}
                </div>
              </form>

              <div className="mt-8 rounded-[24px] border border-[#dbe7f8] bg-white p-5">
                <ul className="mt-3 space-y-3 text-sm leading-relaxed text-[#586579]">
                  {copy.demoSteps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-[linear-gradient(180deg,#eaf4ff_0%,#f5f9ff_100%)] p-6 sm:p-8">
              <div className="relative overflow-hidden rounded-[30px] border border-[#18375d] bg-[linear-gradient(160deg,#07101d_0%,#0d1d33_48%,#12355d_100%)] shadow-[0_18px_55px_rgba(7,17,31,0.34)]">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(143,230,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(143,230,255,0.08)_1px,transparent_1px)] bg-[size:22px_22px] opacity-35" />
                <div className="pointer-events-none absolute right-[-30px] top-[-40px] h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(143,230,255,0.28),transparent_68%)] blur-xl" />

                <div className="relative border-b border-white/10 px-5 py-4">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-[16px] bg-[linear-gradient(135deg,#32d8ff_0%,#3b82f6_100%)] text-base font-black text-[#06111f] shadow-[0_10px_25px_rgba(50,216,255,0.3)]">
                        豆
                      </div>
                      <div>
                        <div className="font-black text-white">{copy.demoHeaderTitle}</div>
                        <div className="text-xs text-[#9eb7d7]">{copy.demoHeaderSubtitle}</div>
                      </div>
                    </div>
                    <div className="rounded-full border border-[#2f5a89] bg-white/8 px-3 py-1 text-[11px] font-bold text-[#9fe9ff]">
                      {copy.demoStatus}
                    </div>
                  </div>

                  <div className="mt-4 rounded-[20px] border border-[#2b4f7d] bg-[#071322]/88 px-4 py-3 text-sm text-[#dce9f7] shadow-inner">
                    <span className="mr-2 text-[#7edfff]">{copy.demoSearchLabel}</span>
                    {activeDemoQuery}
                  </div>
                </div>

                <div className="relative space-y-5 p-5">
                  <div className="rounded-[24px] border border-[#29486c] bg-white/7 p-5 backdrop-blur-sm">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[#8fe6ff] px-3 py-1 text-[11px] font-bold text-[#07111f]">
                        {copy.demoRecommendationBadge}
                      </span>
                      <span className="rounded-full border border-[#2f5c8f] px-3 py-1 text-[11px] font-semibold text-[#a7c4e6]">
                        {copy.demoScenarioBadge}
                      </span>
                    </div>
                    <h3 className="mt-4 text-2xl font-black leading-tight tracking-[-0.03em] text-white">
                      {activeDemoResult.headline}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-[#d0dded]">
                      {activeDemoResult.answer}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {activeDemoResult.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#31557f] bg-white/7 px-3 py-1.5 text-xs font-semibold text-[#bfe8ff]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="rounded-[24px] border border-[#26476f] bg-[#081525]/90 p-5">
                    <div className="text-sm font-bold text-white">{copy.demoWhyTitle}</div>
                    <div className="mt-4 space-y-3">
                      {activeDemoResult.bullets.map((item, index) => (
                        <div key={item} className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#8fe6ff_0%,#3b82f6_100%)] text-xs font-black text-[#07111f]">
                            {index + 1}
                          </div>
                          <p className="text-sm leading-relaxed text-[#d0deee]">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-[#26476f] bg-white/6 p-5">
                    <div className="text-sm font-bold text-white">{copy.demoSourceTitle}</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {activeDemoResult.sources.map((source) => (
                        <span
                          key={source}
                          className="rounded-full border border-[#2f5a89] bg-[#0b1d33] px-3 py-1.5 text-xs font-semibold text-[#9fe9ff]"
                        >
                          {source}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[24px] border border-[#d7e4f5] bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d9e2ff] bg-[#eff4ff] text-[#0056c5]">
                <span className="material-symbols-outlined">rule</span>
              </div>
              <div>
                <h2 className="text-2xl font-black text-[#0b1c30]">{copy.metricTitle}</h2>
                <p className="text-sm text-[#64748b]">{copy.metricDescription}</p>
              </div>
            </div>
            <div className="space-y-3">
              {copy.metricDefinitions.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#e3ebf7] bg-[#fafcff] px-4 py-3 text-sm leading-relaxed text-[#425066]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-[#d4e7ff] bg-[linear-gradient(135deg,#0b1c30_0%,#113961_60%,#0e76c8_100%)] p-6 text-white shadow-sm sm:p-8">
            <div className="text-xs font-mono-code uppercase tracking-[0.18em] text-[#8be9ff]">
              {copy.keyMessageLabel}
            </div>
            <h2 className="mt-2 text-2xl font-black leading-tight">
              {copy.keyMessageTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">
              {copy.keyMessageDescription}
            </p>
            <div className="mt-6 space-y-3">
              {copy.mediaHooks.map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3"
                >
                  <div className="text-[11px] font-mono-code uppercase tracking-[0.16em] text-[#8be9ff]">
                    Hook 0{index + 1}
                  </div>
                  <div className="mt-1 text-sm leading-relaxed text-white">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <div>
            <h2 className="text-2xl font-black text-[#0b1c30] sm:text-3xl">{copy.advantagesTitle}</h2>
            <p className="mt-2 text-sm text-[#64748b]">{copy.advantagesDescription}</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {copy.advantages.map((advantage, index) => (
              <article
                key={advantage.title}
                className={`rounded-[24px] border p-6 shadow-sm ${
                  index === 0 ? 'border-[#16304f] bg-[#0b1c30] text-white' : 'border-[#d9e2ef] bg-white text-[#0b1c30]'
                }`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-2xl border ${
                      index === 0 ? 'border-white/15 bg-white/10 text-[#8be9ff]' : 'border-[#d7e6ff] bg-[#eff4ff] text-[#0056c5]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {index === 0 ? 'visibility' : index === 1 ? 'military_tech' : index === 2 ? 'hub' : index === 3 ? 'sentiment_satisfied' : 'neurology'}
                    </span>
                  </div>
                  <h3 className="text-xl font-black">{advantage.title}</h3>
                </div>
                <div className="space-y-3">
                  {advantage.points.map((point) => (
                    <div
                      key={point}
                      className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        index === 0 ? 'bg-white/8 text-slate-100' : 'bg-[#f8fbff] text-[#425066]'
                      }`}
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[24px] border border-[#d9e2ef] bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-black text-[#0b1c30]">{copy.rankingTitle}</h2>
            <p className="mt-2 text-sm text-[#64748b]">{copy.rankingDescription}</p>
            <div className="mt-6 space-y-4">
              {copy.ranking.map((item, index) => (
                <div key={item.name} className="rounded-2xl border border-[#e5edf8] bg-[#fbfdff] p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d9e2ff] bg-[#eff4ff] font-black text-[#0056c5]">
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-bold text-[#0b1c30]">{item.name}</div>
                        <div className="text-xs text-[#6b7280]">{item.note}</div>
                      </div>
                    </div>
                    <div className="text-2xl font-black text-[#0056c5]">{item.score}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-[#d9e2ef] bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-black text-[#0b1c30]">{copy.platformTitle}</h2>
            <p className="mt-2 text-sm text-[#64748b]">{copy.platformDescription}</p>
            <div className="mt-6 space-y-4">
              {copy.platformScores.map((item) => (
                <div key={item.name} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold text-[#0b1c30]">{item.name}</span>
                    <span className="font-black text-[#0056c5]">{item.score}%</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-[#edf2fb]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#0ea5e9] via-[#2563eb] to-[#0056c5]"
                      style={{ width: `${item.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[24px] border border-[#d9e2ef] bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-black text-[#0b1c30]">{copy.sentimentTitle}</h2>
            <p className="mt-2 text-sm text-[#64748b]">{copy.sentimentDescription}</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-[#d9f2ff] bg-[#f5fbff] p-5">
                <div className="text-sm font-semibold text-[#56637a]">{copy.positiveLabel}</div>
                <div className="mt-2 text-4xl font-black text-[#0ea5e9]">78.4%</div>
              </div>
              <div className="rounded-2xl border border-[#ffd9d9] bg-[#fff7f7] p-5">
                <div className="text-sm font-semibold text-[#56637a]">{copy.negativeLabel}</div>
                <div className="mt-2 text-4xl font-black text-[#ef4444]">21.6%</div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {copy.positiveTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#d9e2ff] bg-[#f8fbff] px-3 py-1.5 text-xs font-semibold text-[#0056c5]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-[#d9e2ef] bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-black text-[#0b1c30]">{copy.memoryTitle}</h2>
            <p className="mt-2 text-sm text-[#64748b]">{copy.memoryDescription}</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {copy.brandMemory.map((item) => (
                <div
                  key={item.tag}
                  className={`rounded-2xl border p-5 ${
                    item.warning ? 'border-[#fde0a3] bg-[#fffaf2]' : 'border-[#d9e2ff] bg-[#f7fbff]'
                  }`}
                >
                  <div className="text-[11px] font-mono-code uppercase tracking-[0.18em] text-[#6b7280]">
                    {copy.memoryEyebrow}
                  </div>
                  <div className="mt-2 text-2xl font-black text-[#0b1c30]">{item.tag}</div>
                  <p className="mt-2 text-sm leading-relaxed text-[#5b6679]">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[28px] border border-[#d4e7ff] bg-[linear-gradient(120deg,#f5faff_0%,#ffffff_45%,#eef6ff_100%)] p-6 shadow-sm sm:p-8">
          <div className="grid items-start gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="text-xs font-mono-code uppercase tracking-[0.18em] text-[#0056c5]">
                {copy.clientAngleLabel}
              </div>
              <h2 className="mt-2 text-2xl font-black text-[#0b1c30] sm:text-3xl">{copy.clientAngleTitle}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#425066] sm:text-base">
                {copy.clientAngleDescriptionStart}
                <span className="font-extrabold text-[#0056c5]"> {copy.clientAngleDescriptionEmphasis} </span>
                {copy.clientAngleDescriptionEnd}
              </p>
            </div>
            <div className="space-y-4 rounded-[24px] bg-[#0b1c30] p-6 text-white">
              <div>
                <div className="text-[11px] font-mono-code uppercase tracking-[0.16em] text-[#8be9ff]">
                  {copy.clientCardLabel}
                </div>
                <div className="mt-2 text-xl font-black">{copy.clientCardTitle}</div>
              </div>
              <div className="text-sm leading-relaxed text-slate-200">{copy.clientCardDescription}</div>
              <button
                onClick={onOpenConsultation}
                className="w-full rounded-xl bg-gradient-to-r from-[#00f2fe] to-[#0d9488] px-5 py-3 text-sm font-extrabold text-[#0b172a] transition-all hover:brightness-110"
              >
                {copy.clientCardCta}
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
