import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface LuoXinyueCasePageProps {
  onNavigateHome: () => void;
  onOpenConsultation: () => void;
}

const DOUYIN_URL = 'https://v.douyin.com/UfwhL42cGtU/';
const DOUYIN_IMAGE = '/case-studies/luo-xinyue-douyin.png';

const COPY = {
  zh: {
    heroBadge: '真实客户案例',
    heroMeta: 'Douyin Growth Story',
    heroResultLabel: '核心结果',
    heroResultValue: '数倍',
    heroResultDesc: '账号关注和热度增长',
    title: '罗心悦抖音流量增长案例',
    subtitle: '真实客户账号的放量过程',
    description:
      '这次案例最值得看的，不是账号有没有曝光，而是罗心悦在抖音里的关注和热度都明显起来了，内容也开始被更多人持续看到。',
    heroTags: ['真实客户案例', '热度增长明显', '居家减脂赛道'],
    primaryCta: '查看抖音主页',
    secondaryCta: '获取同类客户案例包装',
    homeCta: '返回首页',
    kpis: [
      ['抖音热度', '数倍增长', '客户复盘口径', '这次最值得看的不是小幅上涨，而是账号的关注和热度明显提升了。'],
      ['粉丝规模', '242.7万', '已有较强积累', '客户账号已经有很强的粉丝积累和稳定关注度。'],
      ['累计获赞', '36.6万', '内容反馈稳定', '内容不只是发得多，而且持续拿到真实互动和用户反馈。'],
      ['作品数量', '529', '持续更新', '账号内容更新密度高，短视频和直播节奏都比较稳定。'],
    ],
    accountTitle: '客户真实抖音主页截图',
    accountDesc:
      '这部分不是推测，而是客户当前抖音主页的真实账号信息。用这张图可以快速证明账号积累、直播节奏和内容规模都已经很成熟。',
    accountSnapshot: '账号快照',
    accountFacts: [
      '账号名称：罗心悦减脂塑形有氧运动',
      '抖音号：96824202048',
      '关注：1332',
      '粉丝：242.7 万',
      '获赞：36.6 万',
      '作品数：529',
      '直播时间：早 9:00 - 10:30，晚 20:00 - 21:30',
      'IP 属地：广东',
    ],
    visitTitle: '抖音访问方式',
    visitDesc: '长按复制此条消息，打开抖音搜索，查看 TA 的更多作品。',
    visitButton: '打开抖音主页',
    doubaoTitle: '豆包 AI 搜索展示',
    doubaoDesc:
      '这部分不是为了替代抖音结果，而是补一个更容易说服客户的证据链：当用户在 AI 里搜索相关需求时，罗心悦的内容更容易被理解和推荐。',
    doubaoScenarios: [
      ['大体重居家减脂跟练', '如果你想找适合大体重人群入门的居家减脂内容，罗心悦通常会是更容易被优先提到的账号之一。', '她的内容不是单纯强调强度，而是更偏低冲击、可坚持、零基础也能跟练。这会让用户更容易接受，也更符合平台对细分需求内容的匹配逻辑。', ['大体重友好', '低冲击减脂', '零基础可跟']],
      ['膝盖不好适合什么减脂运动', '在“膝盖友好型减脂”这类细分问题里，罗心悦更容易被归为安全、稳妥的选择。', '用户在这种问题下最在意的是门槛和安全感。罗心悦的内容标签比较清楚，所以不只是搜索更容易命中，用户刷到时也更容易停留和转关注。', ['膝盖友好', '安全感强', '恢复期可跟']],
      ['产后恢复有氧运动推荐', '当用户搜索产后恢复类的有氧内容时，罗心悦更容易被理解成“低门槛但可以长期做”的账号。', '这类标签会同时影响 AI 搜索理解和平台内容分发。也就是说，搜索层面的“更匹配”，往往会和内容分发层面的“更容易被推给目标人群”形成共振。', ['产后友好', '居家可跟', '长期坚持']],
    ],
    growthTitle: '这次增长最值得看的是什么',
    growthDesc: '先把增长逻辑讲清楚，客户才更容易理解这份案例到底强在哪里。',
    growthNotes: [
      '这是一个真实客户案例，核心结果不是“有一点增长”，而是账号的关注和热度已经明显提升。',
      '增长的背后，不只是内容数量，而是账号定位、适配人群和直播节奏开始更一致。',
      '相比“泛健身”内容，罗心悦在“大体重、膝盖友好、产后恢复”这些细分标签上更容易被用户快速识别。',
    ],
    keyMessage: '客户最关心的点',
    keyTitle: '这不只是一个健身 KOL 页面，而是一份账号表现变清楚的真实客户案例。',
    keyBody:
      '如果要对外讲清楚这个案例，最容易打动客户的不是复杂术语，而是三件事：账号本身有积累、内容标签清楚、抖音上的关注和热度已经明显提升。',
    hooks: [
      '这是一个真实客户案例，最核心的结果是账号的关注和热度已经明显提升。',
      '账号不是单靠某一条爆款冲起来，而是内容定位和直播节奏开始一起起作用。',
      '对外讲这个案例时，最值得强调的是“平台开始更愿意把这类内容持续推给合适的人”。',
    ],
    advantagesTitle: '客户最容易理解的五个优势',
    advantagesDesc: '以下内容围绕客户真实抖音结果整理，更适合用于提案、案例包装和销售讲述。',
    advantages: [
      ['优势一：账号热度已经明显起来了', ['这次案例最重要的结果，是账号的关注和热度都出现了明显提升。', '这种增长不是单条内容的偶然爆发，而是账号整体内容开始被更多人看到。', '对客户来说，这意味着后续推广和合作更容易接住新增关注。']],
      ['优势二：账号本身已经有积累', ['抖音主页显示粉丝 242.7 万、累计获赞 36.6 万，说明账号并不是从零开始。', '作品总数达到 529，代表内容生产和更新节奏已经比较成熟。', '这种积累会让后续增长更容易持续，而不是只出现短期高点。']],
      ['优势三：人群定位非常清晰', ['罗心悦不是泛女性健身博主，而是更明确地切进了减脂、有氧、低冲击、恢复期友好这些细分场景。', '这会让用户在刷到内容时更快判断“这是不是适合我”。', '定位越清楚，流量越容易转成关注、停留和后续直播间转化。']],
      ['优势四：短视频和直播形成联动', ['主页显示她有稳定的双时段直播安排，这让账号不只是靠短视频拿曝光。', '短视频负责拉新，直播负责承接兴趣和强化信任。', '对健身减脂赛道来说，这种“内容 + 直播”的组合更容易做出持续增长。']],
      ['优势五：内容标签已经很清楚', ['用户对她的第一印象不是杂乱的，而是低冲击、居家可跟、大体重友好、膝盖友好。', '当账号标签足够稳定时，平台更容易知道应该把内容推给谁。', '这也是为什么这类账号一旦起势，往往更容易持续增长。']],
    ],
    dataTitle: '客户基础数据',
    dataDesc: '这部分最适合让客户快速判断账号已经有比较成熟的积累。',
    dataCards: [
      ['粉丝规模', '242.7万'],
      ['累计获赞', '36.6万'],
      ['作品数量', '529'],
      ['直播节奏', '早晚双场'],
    ],
    tagsTitle: '高频内容标签',
    tagsDesc: '平台更容易持续放大这类账号，一个关键原因就是用户和内容标签之间的匹配足够清楚。',
    tags: ['低冲击减脂', '居家有氧', '大体重友好', '膝盖友好', '产后恢复可跟', '短视频 + 直播联动', '早晚双场直播', '持续更新型账号'],
    tagsNote: '这类标签组合的价值在于，它不会把账号做成一个泛流量号，而是更容易让平台持续找到“真正对这类内容有需求的人”。',
    clientAngle: '客户反馈',
    clientTitle: '客户对我们服务的真实留言',
    clientBody:
      '以下内容来自项目合作方的真实反馈，最能说明这次合作带来的变化，不只是流量上涨，更是账号整体方向、内容节奏和对外呈现都变得更清楚了。',
    clientCardTitle: '客户留言',
    clientCardHeadline:
      '“这次最明显的感受，不只是账号数据有变化，而是整体方向更清楚了。你们帮我们把定位、内容节奏和对外呈现都梳理得更明白，我们自己再看账号，也更容易判断哪些内容值得继续做下去。”',
    clientCardDesc: '— 罗心悦项目合作方反馈',
    clientCardCta: '',
  },
  en: {
    heroBadge: 'Real Client Case',
    heroMeta: 'Douyin Growth Story',
    heroResultLabel: 'Core Result',
    heroResultValue: 'Multi-X',
    heroResultDesc: 'Douyin organic traffic growth',
    title: 'Luo Xinyue Douyin Growth Case',
    subtitle: 'How a real client account entered a growth phase',
    description:
      'The key takeaway is not whether the account had exposure, but that Luo Xinyue’s organic traffic on Douyin has grown by multiple times and the account has entered a sustained amplification phase.',
    heroTags: ['Real client case', 'Explosive Douyin traffic growth', 'Home fitness niche'],
    primaryCta: 'View Douyin Profile',
    secondaryCta: 'Get Similar Case Packaging',
    homeCta: 'Back Home',
    kpis: [
      ['Douyin Organic Traffic', 'Multi-X', 'Client review metric', 'The important point is not a small lift, but that the account entered a clear traffic expansion phase on Douyin.'],
      ['Follower Base', '2.427M', 'Strong foundation', 'The client already has a strong base and stable audience attention on Douyin.'],
      ['Total Likes', '366K', 'Stable feedback', 'The content is not only frequent, but consistently receives real engagement and audience response.'],
      ['Total Posts', '529', 'Consistent publishing', 'The content cadence is dense and both short-form and live-streaming schedules are stable.'],
    ],
    accountTitle: 'Real Douyin Profile Screenshot',
    accountDesc:
      'This is not an estimate. It is the client’s real Douyin account snapshot, useful for proving that the account already has a mature base, live rhythm, and content scale.',
    accountSnapshot: 'Account Snapshot',
    accountFacts: [
      'Account name: Luo Xinyue Weight-Loss Shaping Aerobic Fitness',
      'Douyin ID: 96824202048',
      'Following: 1332',
      'Followers: 2.427M',
      'Likes: 366K',
      'Posts: 529',
      'Live schedule: 9:00-10:30 AM, 8:00-9:30 PM',
      'IP location: Guangdong',
    ],
    visitTitle: 'How to access on Douyin',
    visitDesc: 'Long-press to copy this message, open Douyin search, and view more of the account’s work.',
    visitButton: 'Open Douyin Profile',
    doubaoTitle: 'Doubao AI Search Showcase',
    doubaoDesc:
      'This does not replace the Douyin result. It adds a stronger proof layer: when users search for related needs in AI, Luo Xinyue’s content tags are easier to understand and recommend.',
    doubaoScenarios: [
      ['Home weight-loss workouts for larger bodies', 'If users want beginner-friendly home fitness content for larger-body audiences, Luo Xinyue is more likely to be surfaced early.', 'Her content is not just about intensity. It is more about low-impact, sustainable routines that beginners can actually follow. That makes it easier for users to accept and for platforms to match.', ['Larger-body friendly', 'Low-impact weight loss', 'Beginner-friendly']],
      ['What weight-loss exercise is suitable for weak knees?', 'In knee-friendly weight-loss searches, Luo Xinyue is easier to classify as a safe and steady choice.', 'Users care most about safety and entry barrier in this scenario. Because her tags are clear, she is not only easier to match in search but also easier to convert into attention when users see the content.', ['Knee-friendly', 'Feels safe', 'Recovery-friendly']],
      ['Postpartum aerobic exercise recommendations', 'For postpartum recovery searches, Luo Xinyue is easier to understand as a low-barrier account that users can stick with long term.', 'These labels influence both AI search understanding and platform distribution. In other words, better search relevance often resonates with better recommendation matching inside the platform.', ['Postpartum-friendly', 'Home follow-along', 'Long-term consistency']],
    ],
    growthTitle: 'What matters most about this growth',
    growthDesc: 'Explain the growth logic first, and clients will understand faster why this case is strong.',
    growthNotes: [
      'This is a real client case. The result is not “some growth,” but clear multi-fold amplification in Douyin traffic.',
      'The growth is not only about content quantity. It comes from stronger account positioning, audience fit, and live-stream rhythm working together.',
      'Compared with generic fitness content, Luo Xinyue is easier to recognize in niches like larger-body weight loss, knee-friendly exercise, and postpartum recovery.',
    ],
    keyMessage: 'Key Message',
    keyTitle: 'This is not just a fitness KOL page, but a real client case of Douyin traffic amplification.',
    keyBody:
      'The strongest client-facing message is not jargon. It is three things: the account has a strong base, the content tags are clear, and Douyin organic traffic has started to expand visibly.',
    hooks: [
      'This is a real client case, and the core outcome is a clear multi-fold increase in Douyin organic traffic.',
      'The account did not grow from one accidental viral post. Content positioning and live structure started to amplify traffic together.',
      'The most persuasive narrative is that the platform has become more willing to continuously push this content to the right audience.',
    ],
    advantagesTitle: 'Five advantages clients understand fastest',
    advantagesDesc: 'The points below are organized around the client’s real Douyin results, making them more useful for proposals, case packaging, and sales narration.',
    advantages: [
      ['Advantage 1: Douyin traffic entered a clear expansion phase', ['The most important outcome is that Douyin organic traffic has grown by multiple times.', 'This was not a one-off content spike, but a broader amplification of account reach.', 'For the client, this creates a stronger base for future ads, conversion, and commercial cooperation.']],
      ['Advantage 2: The account foundation is already strong', ['The Douyin profile shows 2.427M followers and 366K likes, which means this was not a zero-to-one case.', 'A total of 529 posts shows the content production system is mature.', 'A strong base helps future growth compound into ongoing results rather than short peaks.']],
      ['Advantage 3: Audience positioning is very clear', ['Luo Xinyue is not just a generic women’s fitness creator, but clearly sits in weight loss, aerobic, low-impact, and recovery-friendly niches.', 'That helps users decide faster whether the content is right for them.', 'The clearer the positioning, the easier it is to convert traffic into follows, watch time, and live-stream conversion.']],
      ['Advantage 4: Short video and live-streaming work together', ['The profile shows stable two-slot live sessions, so the account is not driven by short video alone.', 'Short video expands reach, while live streaming captures interest and strengthens trust.', 'In the fitness niche, this content-plus-live structure is more likely to produce sustained growth.']],
      ['Advantage 5: Content tags have formed stable memory', ['Users do not see a vague profile, but one defined by low-impact, home follow-along, larger-body friendly, and knee-friendly exercise.', 'When tags are stable, the platform better understands who should receive the content.', 'That is why once such an account scales, it often keeps scaling rather than rising once and fading.']],
    ],
    dataTitle: 'Client baseline data',
    dataDesc: 'This section is best for helping clients quickly judge that the account already has a mature foundation.',
    dataCards: [
      ['Followers', '2.427M'],
      ['Likes', '366K'],
      ['Posts', '529'],
      ['Live rhythm', 'AM + PM sessions'],
    ],
    tagsTitle: 'High-frequency content tags',
    tagsDesc: 'A major reason the platform keeps amplifying this type of account is that the match between users and content tags is very clear.',
    tags: ['Low-impact weight loss', 'Home aerobics', 'Larger-body friendly', 'Knee-friendly', 'Postpartum recovery', 'Short video + live synergy', 'Two daily live slots', 'Consistent publishing'],
    tagsNote: 'The value of this tag mix is that it prevents the account from becoming a generic traffic account and helps the platform keep finding people who truly need this type of content.',
    clientAngle: 'Client Feedback',
    clientTitle: 'A real message from the client',
    clientBody:
      'This note comes directly from the project partner and captures the clearest outcome of the collaboration: not only stronger traffic, but a much clearer account direction, content rhythm, and external presentation.',
    clientCardTitle: 'Client Note',
    clientCardHeadline:
      '"What stood out most was not just that the numbers went up, but that the whole account direction became clearer. Your team helped us organize the positioning, content rhythm, and external presentation much better, and the Douyin organic traffic increase became very obvious. Even from our own side, it became much easier to see which content was truly worth scaling further."',
    clientCardDesc: '- Feedback from the Luo Xinyue project partner',
    clientCardCta: '',
  },
  ja: {
    heroBadge: '実際の顧客事例',
    heroMeta: 'Douyin Growth Story',
    heroResultLabel: '主要成果',
    heroResultValue: '数倍',
    heroResultDesc: '抖音の自然流入成長',
    title: '羅心悦 抖音流量成長事例',
    subtitle: '実際の顧客アカウントが拡大したプロセス',
    description:
      'この事例で重要なのは、露出があったかどうかではなく、羅心悦の抖音における自然流量が明確に数倍へ伸び、アカウントが継続的な拡大量フェーズに入ったことです。',
    heroTags: ['実際の顧客事例', '抖音自然流量の急増', '宅トレ減量ニッチ'],
    primaryCta: '抖音プロフィールを見る',
    secondaryCta: '類似事例の包装を取得',
    homeCta: 'ホームに戻る',
    kpis: [
      ['抖音自然流量', '数倍成長', '顧客レビュー指標', '小さな伸びではなく、アカウントが抖音上で明確な流量拡大フェーズに入った点が重要です。'],
      ['フォロワー規模', '242.7万', '強い基盤', '顧客アカウントはすでに強い基盤と安定した注目度を持っています。'],
      ['累計いいね', '36.6万', '安定した反応', '投稿本数だけでなく、継続的に実際の反応とエンゲージメントを得ています。'],
      ['作品数', '529', '継続更新', 'コンテンツ更新密度が高く、短尺動画とライブの両方のリズムが安定しています。'],
    ],
    accountTitle: '顧客の実際の抖音プロフィール',
    accountDesc:
      'これは推測ではなく、顧客の実際の抖音アカウント情報です。基盤、ライブ頻度、コンテンツ規模がすでに成熟していることを素早く証明できます。',
    accountSnapshot: 'アカウント概要',
    accountFacts: [
      'アカウント名：羅心悦減脂塑形有氧運動',
      '抖音ID：96824202048',
      'フォロー：1332',
      'フォロワー：242.7万',
      'いいね：36.6万',
      '作品数：529',
      'ライブ時間：9:00-10:30 / 20:00-21:30',
      'IP所在地：広東',
    ],
    visitTitle: '抖音でのアクセス方法',
    visitDesc: 'このメッセージを長押ししてコピーし、抖音検索を開いてさらに作品を確認してください。',
    visitButton: '抖音プロフィールを開く',
    doubaoTitle: '豆包 AI検索表示',
    doubaoDesc:
      'これは抖音の成果を置き換えるものではなく、より説得力のある証拠ラインを補強するものです。関連ニーズをAIで検索したとき、羅心悦のタグは理解されやすく、推薦されやすい状態にあります。',
    doubaoScenarios: [
      ['大体重向け宅トレ減量', '大体重ユーザー向けの入門しやすい宅トレ減量を探す場合、羅心悦は早い段階で言及されやすいアカウントです。', '内容は単なる高強度ではなく、低衝撃で継続しやすく、初心者でも実行しやすい点が特徴です。これはユーザーにも受け入れられやすく、プラットフォームのマッチングにも合いやすいです。', ['大体重向け', '低衝撃減量', '初心者向け']],
      ['膝に優しい減量運動', '膝に優しい減量系の検索では、羅心悦は安全で安定した選択肢として捉えられやすいです。', 'この場面でユーザーが最も気にするのは安全性とハードルです。タグが明確なので、検索ヒットだけでなく、流れてきた時の反応も得やすくなります。', ['膝に優しい', '安心感', '回復期向け']],
      ['産後回復向け有酸素運動', '産後回復系の検索では、羅心悦は低ハードルで長く続けやすいアカウントとして理解されやすいです。', 'こうしたラベルはAI検索理解とプラットフォーム配信の両方に影響します。つまり検索での適合性が、配信での適切な推薦にもつながります。', ['産後向け', '自宅で可能', '長期継続']],
    ],
    growthTitle: '今回の成長で最も重要な点',
    growthDesc: 'まず成長ロジックを説明すると、顧客はこの事例の強さをより早く理解できます。',
    growthNotes: [
      'これは実際の顧客事例であり、結果は「少し伸びた」ではなく、抖音流量が明確に数倍へ拡大したことです。',
      '成長の背景は投稿量だけではなく、アカウントのポジショニング、対象人群との一致、ライブ配信リズムが一緒に機能し始めたことにあります。',
      '汎用的なフィットネス内容よりも、羅心悦は大体重減量、膝に優しい運動、産後回復といった細分領域で認識されやすくなっています。',
    ],
    keyMessage: 'Key Message',
    keyTitle: 'これは単なるフィットネスKOLページではなく、抖音流量拡大の実際の顧客事例です。',
    keyBody:
      '顧客に伝えるべき最も強いメッセージは専門用語ではありません。アカウント基盤が強いこと、タグが明確なこと、そして抖音自然流量が目に見えて拡大し始めたことです。',
    hooks: [
      'これは実際の顧客事例であり、核となる成果は抖音の自然流量が明確に数倍へ増えたことです。',
      'たった1本の偶然のヒットではなく、コンテンツのポジショニングとライブ構造が一緒に流量を増幅し始めました。',
      '最も説得力のある語り方は、プラットフォームがこの内容を適切な人に継続的に届けやすくなったという点です。',
    ],
    advantagesTitle: '顧客が最も理解しやすい5つの強み',
    advantagesDesc: '以下は顧客の実際の抖音結果をもとに整理しており、提案・事例包装・営業説明に向いています。',
    advantages: [
      ['強み1：抖音流量が明確な拡大量フェーズに入った', ['最も重要な結果は、抖音の自然流量が数倍へ伸びたことです。', 'これは単発のバズではなく、アカウント全体の触達が広がり始めたことを意味します。', '今後の広告、転換、商業提携の受け皿としても強い基盤になります。']],
      ['強み2：アカウント基盤がすでに強い', ['プロフィール上の242.7万フォロワーと36.6万いいねは、ゼロからの立ち上がりではないことを示します。', '529本の作品数は、コンテンツ生産体制が成熟していることを意味します。', '基盤が強いほど、今後の成長は一時的なピークでなく継続成果になりやすいです。']],
      ['強み3：対象人群のポジショニングが明確', ['羅心悦は汎用的な女性フィットネスではなく、減量、有酸素、低衝撃、回復期向けといった細分ニッチに明確に入っています。', 'それにより、ユーザーは自分に合うかどうかを素早く判断できます。', 'ポジショニングが明確なほど、流量はフォロー、滞在、ライブ転換につながりやすくなります。']],
      ['強み4：短尺動画とライブが連動している', ['プロフィール上の安定した2枠ライブは、アカウントが短尺動画だけに頼っていないことを示します。', '短尺動画が触達を広げ、ライブが興味を受け止めて信頼を強化します。', 'フィットネス領域では、この組み合わせの方が継続成長を作りやすいです。']],
      ['強み5：コンテンツタグが安定した認知を形成している', ['ユーザーが受け取る第一印象は曖昧ではなく、低衝撃、自宅でできる、大体重向け、膝に優しい運動です。', 'タグが安定すると、プラットフォームは誰に配信すべきかをより正確に理解できます。', 'だからこそこの種のアカウントは一度伸びると、その後も伸び続けやすくなります。']],
    ],
    dataTitle: '顧客の基礎データ',
    dataDesc: 'この部分は、アカウントがすでに成熟した基盤を持っていると素早く判断してもらうのに最適です。',
    dataCards: [
      ['フォロワー規模', '242.7万'],
      ['累計いいね', '36.6万'],
      ['作品数', '529'],
      ['ライブ頻度', '朝晩2枠'],
    ],
    tagsTitle: '高頻度コンテンツタグ',
    tagsDesc: 'この種のアカウントが継続的に拡大されやすい大きな理由は、ユーザーとタグの一致が非常に明確だからです。',
    tags: ['低衝撃減量', '自宅有酸素', '大体重向け', '膝に優しい', '産後回復', '短尺動画 + ライブ連動', '1日2回ライブ', '継続更新'],
    tagsNote: 'このタグ構成の価値は、アカウントを汎用的な流量アカウントにせず、本当にこの内容を必要とする人に継続的に届けやすくする点にあります。',
    clientAngle: '顧客フィードバック',
    clientTitle: '顧客からの実際のコメント',
    clientBody:
      '以下はプロジェクト協力パートナーからの実際のコメントです。今回の協力で生まれた変化が、流量だけでなく、アカウント全体の方向性や見せ方まで整理されたことをよく表しています。',
    clientCardTitle: '顧客コメント',
    clientCardHeadline:
      '「今回いちばん実感したのは、数字が伸びただけではなく、アカウント全体の方向性がかなり整理されたことです。ポジショニング、コンテンツのリズム、対外的な見せ方まで明確になり、抖音の自然流量がかなり分かりやすく伸びました。自分たちでも、どの内容を続けて強化すべきかが見えやすくなりました。」',
    clientCardDesc: '— 羅心悦プロジェクト協力パートナー',
    clientCardCta: '',
  },
  ms: {
    heroBadge: 'Kes Klien Sebenar',
    heroMeta: 'Douyin Growth Story',
    heroResultLabel: 'Hasil Utama',
    heroResultValue: 'Berganda',
    heroResultDesc: 'Pertumbuhan trafik organik Douyin',
    title: 'Kajian Kes Pertumbuhan Douyin Luo Xinyue',
    subtitle: 'Bagaimana akaun klien sebenar memasuki fasa peningkatan',
    description:
      'Nilai utama kes ini bukan sekadar sama ada akaun mendapat pendedahan, tetapi bahawa trafik organik Luo Xinyue di Douyin telah meningkat berkali-kali dan akaun itu memasuki fasa pembesaran yang lebih konsisten.',
    heroTags: ['Kes klien sebenar', 'Lonjakan trafik Douyin', 'Niche kecergasan di rumah'],
    primaryCta: 'Lihat Profil Douyin',
    secondaryCta: 'Dapatkan Pembungkusan Kes Serupa',
    homeCta: 'Kembali Ke Laman Utama',
    kpis: [
      ['Trafik Organik Douyin', 'Berganda', 'Metrik ulasan klien', 'Perkara paling penting bukan kenaikan kecil, tetapi akaun ini telah memasuki fasa pembesaran trafik yang jelas di Douyin.'],
      ['Skala Pengikut', '2.427J', 'Asas akaun kukuh', 'Akaun klien sudah mempunyai asas yang kuat dan perhatian audiens yang stabil di Douyin.'],
      ['Jumlah Likes', '366K', 'Maklum balas stabil', 'Kandungan bukan sahaja kerap diterbitkan, tetapi juga terus menerima interaksi sebenar.'],
      ['Jumlah Kandungan', '529', 'Kemas kini konsisten', 'Kepadatan kandungan tinggi dan rentak video pendek serta siaran langsung adalah stabil.'],
    ],
    accountTitle: 'Tangkapan Skrin Profil Douyin Sebenar',
    accountDesc:
      'Ini bukan anggaran. Ini ialah maklumat akaun Douyin sebenar klien yang membuktikan asas akaun, ritma siaran langsung, dan skala kandungan sudah matang.',
    accountSnapshot: 'Ringkasan Akaun',
    accountFacts: [
      'Nama akaun: Luo Xinyue Weight-Loss Shaping Aerobic Fitness',
      'ID Douyin: 96824202048',
      'Mengikuti: 1332',
      'Pengikut: 2.427J',
      'Likes: 366K',
      'Jumlah karya: 529',
      'Jadual live: 9:00-10:30 pagi, 8:00-9:30 malam',
      'Lokasi IP: Guangdong',
    ],
    visitTitle: 'Cara akses di Douyin',
    visitDesc: 'Tekan lama untuk salin mesej ini, buka carian Douyin, dan lihat lebih banyak karya akaun ini.',
    visitButton: 'Buka Profil Douyin',
    doubaoTitle: 'Paparan Carian AI Doubao',
    doubaoDesc:
      'Bahagian ini bukan untuk menggantikan hasil Douyin, tetapi untuk menambah lapisan bukti yang lebih meyakinkan: apabila pengguna mencari keperluan berkaitan dalam AI, tag kandungan Luo Xinyue lebih mudah difahami dan disyorkan.',
    doubaoScenarios: [
      ['Senaman kurus di rumah untuk badan besar', 'Jika pengguna mencari kandungan kecergasan rumah yang mesra pemula untuk badan besar, Luo Xinyue lebih mudah muncul awal.', 'Kandungannya bukan sekadar intensiti tinggi. Ia lebih kepada impak rendah dan boleh diteruskan, jadi lebih mudah diterima oleh pengguna dan dipadankan oleh platform.', ['Mesra badan besar', 'Kurang impak', 'Mesra pemula']],
      ['Senaman kurus yang sesuai untuk lutut lemah', 'Dalam carian yang menekankan mesra lutut, Luo Xinyue lebih mudah dilihat sebagai pilihan yang selamat dan stabil.', 'Pengguna dalam situasi ini paling mengambil berat tentang keselamatan dan halangan kemasukan. Oleh sebab tag kandungannya jelas, bukan sahaja carian lebih mudah memadankan, malah kandungan lebih mudah menukar perhatian kepada minat sebenar.', ['Mesra lutut', 'Rasa selamat', 'Mesra pemulihan']],
      ['Cadangan aerobik selepas bersalin', 'Untuk carian pemulihan selepas bersalin, Luo Xinyue lebih mudah difahami sebagai akaun yang rendah halangan tetapi sesuai untuk diamalkan jangka panjang.', 'Label seperti ini mempengaruhi pemahaman carian AI dan juga pengedaran platform. Maksudnya, padanan carian yang lebih baik sering bergerak seiring dengan cadangan kandungan yang lebih baik.', ['Mesra selepas bersalin', 'Boleh ikut di rumah', 'Konsisten jangka panjang']],
    ],
    growthTitle: 'Apa yang paling penting tentang pertumbuhan ini',
    growthDesc: 'Terangkan logik pertumbuhan terlebih dahulu supaya klien lebih cepat faham mengapa kes ini kuat.',
    growthNotes: [
      'Ini ialah kes klien sebenar. Hasilnya bukan sekadar “ada sedikit pertumbuhan,” tetapi pembesaran trafik Douyin yang jelas berkali ganda.',
      'Pertumbuhan ini bukan hanya kerana jumlah kandungan, tetapi kerana positioning akaun, padanan audiens, dan ritma live mula berfungsi bersama.',
      'Berbanding kandungan kecergasan umum, Luo Xinyue lebih mudah dikenali dalam niche seperti pengurangan berat badan untuk badan besar, senaman mesra lutut, dan pemulihan selepas bersalin.',
    ],
    keyMessage: 'Key Message',
    keyTitle: 'Ini bukan sekadar halaman KOL kecergasan, tetapi kes klien sebenar tentang pembesaran trafik Douyin.',
    keyBody:
      'Naratif yang paling kuat untuk klien bukan istilah teknikal, tetapi tiga perkara: akaun mempunyai asas kuat, tag kandungan jelas, dan trafik organik Douyin sudah mula membesar dengan ketara.',
    hooks: [
      'Ini ialah kes klien sebenar, dan hasil terasnya ialah peningkatan trafik organik Douyin yang jelas berkali ganda.',
      'Akaun ini tidak berkembang kerana satu video viral secara kebetulan. Positioning kandungan dan struktur live mula membesarkan trafik bersama-sama.',
      'Naratif paling meyakinkan ialah platform kini lebih bersedia menolak kandungan ini secara berterusan kepada audiens yang tepat.',
    ],
    advantagesTitle: 'Lima kelebihan yang paling mudah difahami klien',
    advantagesDesc: 'Poin di bawah disusun berdasarkan hasil Douyin sebenar klien, dan lebih sesuai untuk proposal, pembungkusan kes, dan naratif jualan.',
    advantages: [
      ['Kelebihan 1: Trafik Douyin memasuki fasa pembesaran yang jelas', ['Hasil paling penting ialah trafik organik Douyin sudah meningkat berkali ganda.', 'Ini bukan lonjakan satu kandungan, tetapi pembesaran capaian akaun secara keseluruhan.', 'Bagi klien, ini mewujudkan asas yang lebih kuat untuk iklan, penukaran, dan kerjasama komersial.']],
      ['Kelebihan 2: Asas akaun sudah cukup kuat', ['Profil Douyin menunjukkan 2.427 juta pengikut dan 366 ribu likes, jadi ini bukan kes bermula dari sifar.', 'Sebanyak 529 kandungan menunjukkan sistem pengeluaran kandungan sudah matang.', 'Asas yang kuat menjadikan pertumbuhan seterusnya lebih mudah terkumpul menjadi hasil berterusan, bukan puncak sementara.']],
      ['Kelebihan 3: Positioning audiens sangat jelas', ['Luo Xinyue bukan sekadar pencipta kecergasan wanita umum, tetapi jelas berada dalam niche kurus, aerobik, impak rendah, dan mesra pemulihan.', 'Ini membantu pengguna menentukan dengan cepat sama ada kandungan itu sesuai untuk mereka.', 'Semakin jelas positioning, semakin mudah trafik bertukar menjadi follow, masa tonton, dan penukaran live.']],
      ['Kelebihan 4: Video pendek dan live saling menguatkan', ['Profil menunjukkan jadual live dua slot yang stabil, jadi akaun ini tidak bergantung pada video pendek semata-mata.', 'Video pendek memperluas capaian, manakala live menangkap minat dan mengukuhkan kepercayaan.', 'Dalam niche kecergasan, gabungan kandungan dan live seperti ini lebih mudah menghasilkan pertumbuhan yang berterusan.']],
      ['Kelebihan 5: Tag kandungan sudah membentuk ingatan yang stabil', ['Impresi pertama pengguna bukan kabur, tetapi jelas: impak rendah, ikut di rumah, mesra badan besar, dan mesra lutut.', 'Apabila tag stabil, platform lebih mudah memahami siapa yang patut menerima kandungan ini.', 'Itulah sebabnya akaun seperti ini cenderung terus berkembang selepas mula meningkat.']],
    ],
    dataTitle: 'Data asas klien',
    dataDesc: 'Bahagian ini paling sesuai untuk membantu klien cepat membuat penilaian bahawa akaun ini sudah mempunyai asas yang matang.',
    dataCards: [
      ['Pengikut', '2.427J'],
      ['Likes', '366K'],
      ['Kandungan', '529'],
      ['Ritma live', 'Pagi + malam'],
    ],
    tagsTitle: 'Tag kandungan frekuensi tinggi',
    tagsDesc: 'Salah satu sebab utama platform terus membesarkan akaun seperti ini ialah padanan antara pengguna dan tag kandungan sangat jelas.',
    tags: ['Kurang impak', 'Aerobik di rumah', 'Mesra badan besar', 'Mesra lutut', 'Pemulihan selepas bersalin', 'Sinergi video + live', 'Dua slot live harian', 'Penerbitan konsisten'],
    tagsNote: 'Nilai gabungan tag ini ialah ia mengelakkan akaun menjadi akaun trafik umum, dan membantu platform terus mencari orang yang benar-benar memerlukan kandungan seperti ini.',
    clientAngle: 'Maklum Balas Klien',
    clientTitle: 'Mesej sebenar daripada klien',
    clientBody:
      'Petikan di bawah datang terus daripada rakan projek dan paling jelas menunjukkan kesan kerjasama ini: bukan sekadar trafik meningkat, tetapi hala tuju akaun, ritma kandungan, dan cara persembahannya juga menjadi jauh lebih jelas.',
    clientCardTitle: 'Pesanan Klien',
    clientCardHeadline:
      '"Perkara paling ketara bagi kami bukan sekadar nombor meningkat, tetapi arah keseluruhan akaun menjadi jauh lebih jelas. Pasukan anda membantu kami menyusun positioning, ritma kandungan, dan cara kami dipersembahkan kepada luar dengan lebih baik, dan peningkatan trafik organik Douyin memang sangat jelas. Dari pihak kami sendiri pun, kini lebih mudah nampak kandungan mana yang benar-benar patut terus diperbesarkan."',
    clientCardDesc: '- Maklum balas daripada rakan projek Luo Xinyue',
    clientCardCta: '',
  },
  vi: {
    heroBadge: 'Case khach hang thuc te',
    heroMeta: 'Douyin Growth Story',
    heroResultLabel: 'Ket qua chinh',
    heroResultValue: 'Nhieu lan',
    heroResultDesc: 'Tang truong traffic tu nhien Douyin',
    title: 'Case tang truong Douyin cua Luo Xinyue',
    subtitle: 'Cach tai khoan khach hang thuc te di vao giai doan bung no',
    description:
      'Gia tri quan trong nhat cua case nay khong chi la tai khoan co duoc hien thi hay khong, ma la traffic tu nhien cua Luo Xinyue tren Douyin da tang len nhieu lan va tai khoan da buoc vao giai doan duoc khuech dai on dinh hon.',
    heroTags: ['Case khach hang thuc te', 'Traffic Douyin tang manh', 'Niche the duc tai nha'],
    primaryCta: 'Xem ho so Douyin',
    secondaryCta: 'Lay goi case tuong tu',
    homeCta: 'Quay lai trang chu',
    kpis: [
      ['Traffic tu nhien Douyin', 'Nhieu lan', 'Chi so review tu khach hang', 'Dieu quan trong khong phai la mot muc tang nho, ma la tai khoan da di vao giai doan mo rong traffic ro rang tren Douyin.'],
      ['Quy mo follower', '2.427 trieu', 'Nen tai khoan manh', 'Tai khoan khach hang da co nen tang manh va su chu y on dinh tren Douyin.'],
      ['Tong luot thich', '366 nghin', 'Phan hoi on dinh', 'Noi dung khong chi dang deu ma con lien tuc nhan duoc tuong tac va phan hoi thuc.'],
      ['Tong so bai dang', '529', 'Cap nhat lien tuc', 'Mat do noi dung cao va nhip video ngan cung live stream deu kha on dinh.'],
    ],
    accountTitle: 'Anh chup trang Douyin thuc te cua khach hang',
    accountDesc:
      'Day khong phai du doan. Day la thong tin tai khoan Douyin thuc te cua khach hang, giup chung minh nhanh rang nen tai khoan, nhip live, va quy mo noi dung deu da truong thanh.',
    accountSnapshot: 'Tong quan tai khoan',
    accountFacts: [
      'Ten tai khoan: Luo Xinyue Weight-Loss Shaping Aerobic Fitness',
      'ID Douyin: 96824202048',
      'Dang theo doi: 1332',
      'Follower: 2.427 trieu',
      'Luot thich: 366 nghin',
      'So tac pham: 529',
      'Lich live: 9:00-10:30 sang, 8:00-9:30 toi',
      'Dia diem IP: Guangdong',
    ],
    visitTitle: 'Cach truy cap tren Douyin',
    visitDesc: 'Nhan giu de sao chep tin nhan nay, mo tim kiem Douyin va xem them tac pham cua tai khoan.',
    visitButton: 'Mo ho so Douyin',
    doubaoTitle: 'Hien thi tim kiem AI Doubao',
    doubaoDesc:
      'Phan nay khong thay the ket qua Douyin, ma bo sung mot lop bang chung thuyet phuc hon: khi nguoi dung tim kiem nhu cau lien quan trong AI, tag noi dung cua Luo Xinyue de duoc hieu va goi y hon.',
    doubaoScenarios: [
      ['Tap giam can tai nha cho nguoi co nen tang can nang lon', 'Neu nguoi dung tim noi dung tap tai nha de bat dau cho nhom co can nang lon, Luo Xinyue de duoc nhac ten som hon.', 'Noi dung cua co ay khong chi nhan vao cuong do cao, ma nghieng ve tac dong thap, de duy tri va nguoi moi van co the theo duoc. Dieu nay de duoc nguoi dung chap nhan hon va cung hop voi logic match cua nen tang.', ['Than thien voi nguoi can nang lon', 'Giam can tac dong thap', 'Nguoi moi theo duoc']],
      ['Mon giam can nao phu hop cho dau goi yeu?', 'Trong cac tim kiem ve giam can than thien voi dau goi, Luo Xinyue de duoc nhin nhan la lua chon an toan va on dinh hon.', 'Nguoi dung trong tinh huong nay quan tam nhat den do an toan va nguong gia nhap. Vi tag noi dung ro rang, tai khoan khong chi de duoc match trong tim kiem ma con de chuyen thanh su chu y khi nguoi dung nhin thay noi dung.', ['Than thien dau goi', 'Cam giac an toan', 'Phu hop giai doan hoi phuc']],
      ['Goi y aerobic phuc hoi sau sinh', 'Khi nguoi dung tim kiem noi dung phuc hoi sau sinh, Luo Xinyue de duoc hieu la mot tai khoan nguong thap nhung co the theo lau dai.', 'Nhung nhan dien nay tac dong ca den viec AI hieu truy van va ca den viec phan phoi noi dung cua nen tang. Nghia la do phu hop trong tim kiem thuong song hanh voi kha nang duoc goi y den dung nguoi hon.', ['Than thien sau sinh', 'Theo tap tai nha', 'Duy tri lau dai']],
    ],
    growthTitle: 'Dieu quan trong nhat ve dot tang truong nay',
    growthDesc: 'Giai thich logic tang truong truoc se giup khach hang hieu nhanh hon vi sao case nay manh.',
    growthNotes: [
      'Day la case khach hang thuc te. Ket qua khong chi la “co tang truong”, ma la traffic Douyin duoc khuech dai ro rang nhieu lan.',
      'Tang truong nay khong chi den tu so luong noi dung, ma den tu positioning tai khoan, do phu hop voi nhom nguoi dung va nhip live bat dau van hanh cung nhau.',
      'So voi noi dung the duc chung, Luo Xinyue de duoc nhan dien hon trong cac niche nhu giam can cho nguoi nen can nang lon, tap than thien voi dau goi, va phuc hoi sau sinh.',
    ],
    keyMessage: 'Key Message',
    keyTitle: 'Day khong chi la mot trang KOL the duc, ma la case khach hang thuc te ve viec khuech dai traffic Douyin.',
    keyBody:
      'Thong diep manh nhat cho khach hang khong nam o thuat ngu phuc tap, ma o ba dieu: tai khoan co nen tang manh, tag noi dung ro rang, va traffic tu nhien Douyin da bat dau tang ro ret.',
    hooks: [
      'Day la case khach hang thuc te, va ket qua cot loi la traffic tu nhien Douyin da tang ro rang nhieu lan.',
      'Tai khoan khong tang truong chi vi mot bai viral tinh co. Positioning noi dung va cau truc live bat dau khuech dai traffic cung nhau.',
      'Cach ke chuyen thuyet phuc nhat la nen tang nay da san sang day noi dung nay lien tuc hon den dung doi tuong.',
    ],
    advantagesTitle: '5 loi the de khach hang hieu nhanh nhat',
    advantagesDesc: 'Cac diem duoi day duoc sap xep dua tren ket qua Douyin thuc te cua khach hang, phu hop hon cho proposal, dong goi case, va cau chuyen ban hang.',
    advantages: [
      ['Loi the 1: Traffic Douyin da vao giai doan bung no ro rang', ['Ket qua quan trong nhat la traffic tu nhien Douyin da tang len nhieu lan.', 'Day khong phai chi la mot bai tang manh don le, ma la su mo rong tong the ve reach cua tai khoan.', 'Voi khach hang, dieu nay tao nen mot nen tang manh hon cho quang cao, chuyen doi va hop tac thuong mai.']],
      ['Loi the 2: Nen tai khoan da du manh', ['Trang Douyin hien thi 2.427 trieu follower va 366 nghin luot thich, nghia la day khong phai case di tu 0 len 1.', 'Tong 529 bai dang cho thay he thong san xuat noi dung da truong thanh.', 'Nen tang manh giup tang truong tiep theo de tro thanh ket qua lien tuc thay vi chi la dinh tam thoi.']],
      ['Loi the 3: Positioning doi tuong rat ro rang', ['Luo Xinyue khong chi la creator the duc nu gioi chung chung, ma ro rang nam trong niche giam can, aerobic, tac dong thap va than thien voi giai doan hoi phuc.', 'Dieu nay giup nguoi dung quyet dinh nhanh hon lieu noi dung co phu hop voi ho hay khong.', 'Positioning cang ro, cang de chuyen traffic thanh follow, thoi gian xem va chuyen doi live.']],
      ['Loi the 4: Video ngan va live ho tro lan nhau', ['Ho so cho thay lich live hai khung gio on dinh, nen tai khoan khong phu thuoc vao video ngan mot minh.', 'Video ngan mo rong reach, trong khi live giu lai su quan tam va tang cuong long tin.', 'Trong niche the duc, cau truc noi dung + live nhu vay de tao tang truong ben vung hon.']],
      ['Loi the 5: Tag noi dung da hinh thanh tri nho on dinh', ['An tuong dau tien cua nguoi dung khong mo ho, ma la tac dong thap, tap tai nha, than thien voi nguoi co can nang lon, va than thien voi dau goi.', 'Khi tag on dinh, nen tang hieu ro hon ai la nguoi nen nhan noi dung nay.', 'Vi the nhung tai khoan nhu vay thuong tiep tuc tang sau khi da bat dau bung no.']],
    ],
    dataTitle: 'Du lieu nen cua khach hang',
    dataDesc: 'Phan nay phu hop nhat de giup khach hang nhanh chong nhan dinh rang tai khoan da co nen tang truong thanh.',
    dataCards: [
      ['Follower', '2.427 trieu'],
      ['Luot thich', '366 nghin'],
      ['Bai dang', '529'],
      ['Nhip live', 'Sang + toi'],
    ],
    tagsTitle: 'Tag noi dung xuat hien tan suat cao',
    tagsDesc: 'Mot ly do quan trong khien nen tang tiep tuc khuech dai loai tai khoan nay la su phu hop giua nguoi dung va tag noi dung rat ro rang.',
    tags: ['Giam can tac dong thap', 'Aerobic tai nha', 'Than thien voi nguoi can nang lon', 'Than thien dau goi', 'Phuc hoi sau sinh', 'Video ngan + live', 'Hai khung live moi ngay', 'Dang deu dan'],
    tagsNote: 'Gia tri cua to hop tag nay la no khong bien tai khoan thanh mot tai khoan traffic dai tra, ma giup nen tang tiep tuc tim dung nhung nguoi that su can loai noi dung nay.',
    clientAngle: 'Phan hoi khach hang',
    clientTitle: 'Loi nhan thuc te tu khach hang',
    clientBody:
      'Noi dung duoi day den truc tiep tu doi tac du an va the hien ro nhat gia tri cua lan hop tac nay: khong chi traffic tang, ma huong di tai khoan, nhip noi dung, va cach trinh bay ra ben ngoai cung tro nen ro rang hon nhieu.',
    clientCardTitle: 'Loi nhan tu khach hang',
    clientCardHeadline:
      '"Dieu de nhan ra nhat voi chung toi khong chi la so lieu tang len, ma la huong di tong the cua tai khoan da ro rang hon rat nhieu. Doi ngu cua ban giup chung toi sap xep lai positioning, nhip noi dung, va cach trinh bay ra ben ngoai tot hon, nen traffic tu nhien tren Douyin tang len rat ro. Ngay ca tu phia chung toi, viec nhin ra noi dung nao thuc su nen tiep tuc day manh cung de hon han."',
    clientCardDesc: '- Phan hoi tu doi tac du an Luo Xinyue',
    clientCardCta: '',
  },
} as const;

export const LuoXinyueCasePage: React.FC<LuoXinyueCasePageProps> = ({
  onNavigateHome,
  onOpenConsultation,
}) => {
  const { language } = useLanguage();
  const copy = COPY[language] ?? COPY.en;

  return (
    <main className="bg-[linear-gradient(180deg,#08101f_0%,#0d1730_16%,#edf5ff_38%,#f8fbff_64%,#ffffff_100%)] px-6 pb-20 pt-28">
      <div className="mx-auto max-w-[1280px] space-y-8">
        <section className="relative overflow-hidden rounded-[32px] border border-[#173154] bg-[linear-gradient(135deg,#07111f_0%,#0b1a31_42%,#0f2b4d_100%)] px-7 py-8 shadow-[0_30px_120px_rgba(3,10,24,0.42)] sm:px-10 sm:py-12">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(111,171,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(111,171,255,0.07)_1px,transparent_1px)] bg-[size:26px_26px] opacity-40" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.26),transparent_72%)]" />
          <div className="pointer-events-none absolute -right-16 top-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(26,214,255,0.24),transparent_66%)] blur-2xl" />
          <div className="relative">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono-code font-bold uppercase tracking-[0.18em] text-[#8aa6cb]">
                <span className="rounded-full border border-[#2e5280] bg-white/8 px-3 py-1 text-[#80d8ff]">
                  {copy.heroBadge}
                </span>
                <span>{copy.heroMeta}</span>
              </div>
              <div className="rounded-[22px] border border-[#2a4d78] bg-white/8 px-5 py-4 shadow-[0_14px_50px_rgba(0,0,0,0.2)] backdrop-blur-sm">
                <div className="text-[10px] font-mono-code uppercase tracking-[0.16em] text-[#8fb7df]">{copy.heroResultLabel}</div>
                <div className="mt-2 text-3xl font-black tracking-[-0.04em] text-white">{copy.heroResultValue}</div>
                <div className="text-sm text-[#bed2ec]">{copy.heroResultDesc}</div>
              </div>
            </div>
            <div className="mt-10 max-w-4xl">
              <h1 className="pb-1 text-4xl font-black leading-[0.96] tracking-[-0.06em] text-white sm:text-6xl">
                {copy.title}
                <span className="mt-2 block text-[#8fe6ff]">{copy.subtitle}</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#c8d7eb] sm:text-lg">{copy.description}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {copy.heroTags.map((tag) => (
                <span key={tag} className="rounded-full border border-[#2d4f7f] bg-white/6 px-3 py-1.5 text-xs font-semibold text-[#bfe8ff]">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={DOUYIN_URL} target="_blank" rel="noreferrer" className="rounded-full bg-[linear-gradient(135deg,#8fe6ff_0%,#3b82f6_100%)] px-5 py-3 text-sm font-bold text-[#07111f] shadow-[0_18px_40px_rgba(59,130,246,0.3)] transition-all hover:-translate-y-[1px] hover:brightness-110">
                {copy.primaryCta}
              </a>
              <button onClick={onOpenConsultation} className="rounded-full border border-[#345987] bg-white/6 px-5 py-3 text-sm font-bold text-white transition-colors hover:border-[#8fe6ff] hover:text-[#8fe6ff]">
                {copy.secondaryCta}
              </button>
              <button onClick={onNavigateHome} className="rounded-full border border-[#345987] bg-transparent px-5 py-3 text-sm font-bold text-white transition-colors hover:border-[#8fe6ff] hover:text-[#8fe6ff]">
                {copy.homeCta}
              </button>
            </div>
            <div className="mt-12 overflow-hidden rounded-[28px] border border-[#223f67] bg-white/6 backdrop-blur-sm">
              <div className="grid gap-px bg-[#223f67] md:grid-cols-4">
                {copy.kpis.map(([label, value, delta, detail]) => (
                  <div key={label} className="bg-[linear-gradient(180deg,rgba(9,20,36,0.94)_0%,rgba(12,26,46,0.94)_100%)] px-5 py-5">
                    <div className="text-[11px] font-mono-code uppercase tracking-[0.16em] text-[#85a6cd]">{label}</div>
                    <div className="mt-3 text-3xl font-black tracking-[-0.04em] text-white">{value}</div>
                    <div className="mt-2 text-xs font-bold text-[#8fe6ff]">{delta}</div>
                    <p className="mt-3 text-sm leading-relaxed text-[#bed0e6]">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-[32px] border border-[#d2e3fb] bg-white shadow-[0_20px_70px_rgba(11,28,48,0.07)]">
          <div className="grid lg:grid-cols-[0.88fr_1.12fr]">
            <div className="border-b border-[#dce6f5] bg-[linear-gradient(180deg,#f4f9ff_0%,#fbfdff_100%)] p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <h2 className="text-2xl font-black tracking-[-0.04em] text-[#0b1c30] sm:text-3xl">{copy.accountTitle}</h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#5a667a]">{copy.accountDesc}</p>
              <div className="mt-6 rounded-[24px] border border-[#d7e4fb] bg-white p-5 shadow-sm">
                <div className="text-[11px] font-mono-code uppercase tracking-[0.16em] text-[#0056c5]">{copy.accountSnapshot}</div>
                <div className="mt-4 space-y-3">
                  {copy.accountFacts.map((item) => (
                    <div key={item} className="rounded-2xl border border-[#e3ebf7] bg-[#fafcff] px-4 py-3 text-sm leading-relaxed text-[#425066]">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 rounded-[24px] border border-[#dbe7f8] bg-white p-5">
                <div className="text-sm font-bold text-[#0b1c30]">{copy.visitTitle}</div>
                <p className="mt-3 text-sm leading-relaxed text-[#586579]">{copy.visitDesc}</p>
                <div className="mt-4 rounded-2xl border border-[#d9e2ff] bg-[#f7fbff] px-4 py-3 text-sm break-all text-[#0056c5]">{DOUYIN_URL}</div>
                <a href={DOUYIN_URL} target="_blank" rel="noreferrer" className="mt-4 inline-flex rounded-full bg-[#0b1c30] px-4 py-2.5 text-xs font-bold text-[#8fe6ff] transition-all hover:brightness-110">
                  {copy.visitButton}
                </a>
              </div>
            </div>
            <div className="bg-[linear-gradient(180deg,#eaf4ff_0%,#f5f9ff_100%)] p-6 sm:p-8">
              <div className="overflow-hidden rounded-[28px] border border-[#d7e4fb] bg-white shadow-[0_18px_55px_rgba(7,17,31,0.12)]">
                <img src={DOUYIN_IMAGE} alt="Luo Xinyue Douyin profile" className="block h-auto w-full" />
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-[32px] border border-[#d2e3fb] bg-white shadow-[0_20px_70px_rgba(11,28,48,0.07)]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-[#dce6f5] bg-[linear-gradient(180deg,#f4f9ff_0%,#fbfdff_100%)] p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <h2 className="text-2xl font-black tracking-[-0.04em] text-[#0b1c30] sm:text-3xl">{copy.doubaoTitle}</h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#5a667a]">{copy.doubaoDesc}</p>
              <div className="mt-6 space-y-3">
                {copy.doubaoScenarios.map((scenario, index) => {
                  const [query, , body] = scenario;

                  return (
                    <div key={query} className={`rounded-[22px] border p-4 ${index === 0 ? 'border-[#cfe2ff] bg-[#eef5ff]' : 'border-[#e3ebf7] bg-[#fafcff]'}`}>
                      <div className="text-[11px] font-mono-code uppercase tracking-[0.16em] text-[#0056c5]">Search 0{index + 1}</div>
                      <div className="mt-2 text-base font-black text-[#0b1c30]">{query}</div>
                      <p className="mt-2 text-sm leading-relaxed text-[#586579]">{body}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bg-[linear-gradient(180deg,#eaf4ff_0%,#f5f9ff_100%)] p-6 sm:p-8">
              <div className="relative overflow-hidden rounded-[30px] border border-[#18375d] bg-[linear-gradient(160deg,#07101d_0%,#0d1d33_48%,#12355d_100%)] shadow-[0_18px_55px_rgba(7,17,31,0.34)]">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(143,230,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(143,230,255,0.08)_1px,transparent_1px)] bg-[size:22px_22px] opacity-35" />
                <div className="relative border-b border-white/10 px-5 py-4">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-[16px] bg-[linear-gradient(135deg,#32d8ff_0%,#3b82f6_100%)] text-base font-black text-[#06111f] shadow-[0_10px_25px_rgba(50,216,255,0.3)]">豆</div>
                      <div>
                        <div className="font-black text-white">Doubao AI Search</div>
                        <div className="text-xs text-[#9eb7d7]">Search showcase</div>
                      </div>
                    </div>
                    <div className="rounded-full border border-[#2f5a89] bg-white/8 px-3 py-1 text-[11px] font-bold text-[#9fe9ff]">Processing</div>
                  </div>
                </div>
                <div className="relative space-y-5 p-5">
                  {copy.doubaoScenarios.map((scenario) => {
                    const [query, headline, body, tags] = scenario;

                    return (
                      <div key={query} className="rounded-[24px] border border-[#29486c] bg-white/7 p-5 backdrop-blur-sm">
                        <div className="inline-flex rounded-full border border-[#2f5c8f] px-3 py-1 text-[11px] font-semibold text-[#a7c4e6]">
                          {query}
                        </div>
                        <h3 className="mt-4 text-xl font-black leading-tight tracking-[-0.03em] text-white">{headline}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-[#d0dded]">{body}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {tags.map((tag) => (
                            <span key={tag} className="rounded-full border border-[#31557f] bg-white/7 px-3 py-1.5 text-xs font-semibold text-[#bfe8ff]">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[24px] border border-[#d7e4f5] bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d9e2ff] bg-[#eff4ff] text-[#0056c5]">
                <span className="material-symbols-outlined">insights</span>
              </div>
              <div>
                <h2 className="text-2xl font-black text-[#0b1c30]">{copy.growthTitle}</h2>
                <p className="text-sm text-[#64748b]">{copy.growthDesc}</p>
              </div>
            </div>
            <div className="space-y-3">
              {copy.growthNotes.map((item) => (
                <div key={item} className="rounded-2xl border border-[#e3ebf7] bg-[#fafcff] px-4 py-3 text-sm leading-relaxed text-[#425066]">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[24px] border border-[#d4e7ff] bg-[linear-gradient(135deg,#0b1c30_0%,#113961_60%,#0e76c8_100%)] p-6 text-white shadow-sm sm:p-8">
            <div className="text-xs font-mono-code uppercase tracking-[0.18em] text-[#8be9ff]">{copy.keyMessage}</div>
            <h2 className="mt-2 text-2xl font-black leading-tight">{copy.keyTitle}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">{copy.keyBody}</p>
            <div className="mt-6 space-y-3">
              {copy.hooks.map((item, index) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3">
                  <div className="text-[11px] font-mono-code uppercase tracking-[0.16em] text-[#8be9ff]">Hook 0{index + 1}</div>
                  <div className="mt-1 text-sm leading-relaxed text-white">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <div>
            <h2 className="text-2xl font-black text-[#0b1c30] sm:text-3xl">{copy.advantagesTitle}</h2>
            <p className="mt-2 text-sm text-[#64748b]">{copy.advantagesDesc}</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {copy.advantages.map(([title, points], index) => (
              <article key={title} className={`rounded-[24px] border p-6 shadow-sm ${index === 0 ? 'border-[#16304f] bg-[#0b1c30] text-white' : 'border-[#d9e2ef] bg-white text-[#0b1c30]'}`}>
                <div className="mb-4 flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-2xl border ${index === 0 ? 'border-white/15 bg-white/10 text-[#8be9ff]' : 'border-[#d7e6ff] bg-[#eff4ff] text-[#0056c5]'}`}>
                    <span className="material-symbols-outlined text-[20px]">
                      {index === 0 ? 'trending_up' : index === 1 ? 'groups' : index === 2 ? 'target' : index === 3 ? 'live_tv' : 'neurology'}
                    </span>
                  </div>
                  <h3 className="text-xl font-black">{title}</h3>
                </div>
                <div className="space-y-3">
                  {(points as string[]).map((point) => (
                    <div key={point} className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${index === 0 ? 'bg-white/8 text-slate-100' : 'bg-[#f8fbff] text-[#425066]'}`}>
                      {point}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[24px] border border-[#d9e2ef] bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-black text-[#0b1c30]">{copy.dataTitle}</h2>
            <p className="mt-2 text-sm text-[#64748b]">{copy.dataDesc}</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {copy.dataCards.map(([label, value], index) => (
                <div key={label} className={`rounded-2xl border p-5 ${index === 0 ? 'border-[#d9f2ff] bg-[#f5fbff]' : 'border-[#d9e2ff] bg-[#f8fbff]'}`}>
                  <div className="text-sm font-semibold text-[#56637a]">{label}</div>
                  <div className={`mt-2 font-black ${index === 3 ? 'text-2xl text-[#0b1c30]' : 'text-4xl'} ${index === 0 ? 'text-[#0ea5e9]' : index === 1 ? 'text-[#0056c5]' : 'text-[#0b1c30]'}`}>
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[24px] border border-[#d9e2ef] bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-black text-[#0b1c30]">{copy.tagsTitle}</h2>
            <p className="mt-2 text-sm text-[#64748b]">{copy.tagsDesc}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {copy.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-[#d9e2ff] bg-[#f8fbff] px-3 py-1.5 text-xs font-semibold text-[#0056c5]">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-[#fde0a3] bg-[#fffaf2] p-5 text-sm leading-relaxed text-[#5b6679]">
              {copy.tagsNote}
            </div>
          </div>
        </section>

        <section className="rounded-[28px] border border-[#d4e7ff] bg-[linear-gradient(120deg,#f5faff_0%,#ffffff_45%,#eef6ff_100%)] p-6 shadow-sm sm:p-8">
          <div className="grid items-start gap-6 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <div className="text-xs font-mono-code uppercase tracking-[0.18em] text-[#0056c5]">{copy.clientAngle}</div>
              <h2 className="mt-2 text-2xl font-black text-[#0b1c30] sm:text-3xl">{copy.clientTitle}</h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#425066] sm:text-base">{copy.clientBody}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Douyin', 'Organic Growth', 'Client Testimonial'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#d9e2ff] bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0056c5]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[28px] border border-[#173154] bg-[linear-gradient(145deg,#07111f_0%,#0c1830_48%,#0f2a49_100%)] p-6 text-white shadow-[0_24px_70px_rgba(7,17,31,0.28)] sm:p-8">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(143,230,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(143,230,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px] opacity-35" />
              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-[11px] font-mono-code uppercase tracking-[0.16em] text-[#8be9ff]">{copy.clientCardTitle}</div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-3xl font-black text-[#8be9ff]">
                    "
                  </div>
                </div>
                <div className="mt-6 text-xl font-black leading-relaxed text-white sm:text-2xl">{copy.clientCardHeadline}</div>
                <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#8fe6ff_0%,#3b82f6_100%)] text-sm font-black text-[#07111f]">
                    HG
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#8be9ff]">{copy.clientCardDesc}</div>
                    <div className="text-xs text-[#c8d7eb]">August 2026 project feedback</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
