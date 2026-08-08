import React, { useState } from 'react';
import { CitationSnapshotData, CitationLanguage } from '../../types/citation';
import { CITATION_TRANSLATIONS } from '../../data/citationTranslations';

interface ReportDashboardProps {
  data: CitationSnapshotData;
  language: CitationLanguage;
  isUnlocked: boolean;
  onOpenUnlockGate: () => void;
  onOpenConsultation: () => void;
  onOpenGeoAudit: () => void;
  onReset: () => void;
}

export const ReportDashboard: React.FC<ReportDashboardProps> = ({
  data,
  language,
  isUnlocked,
  onOpenUnlockGate,
  onOpenConsultation,
  onOpenGeoAudit,
  onReset,
}) => {
  const t = CITATION_TRANSLATIONS[language];
  const [copied, setCopied] = useState(false);
  const recommendationRate = data.metrics.recommendation_rate
    ?? Math.round(((data.entries || []).filter((entry) => entry.sentiment === 'Positive').length / Math.max((data.entries || []).length, 1)) * 100);
  const keywordPlatformStats = data.keyword_platform_stats?.length
    ? data.keyword_platform_stats
    : (data.entries || []).map((entry) => ({
        id: entry.id,
        query: entry.query,
        platform: entry.platform || 'Perplexity',
        mentionedBrand: entry.mentionedBrand,
        citedOwnedDomain: entry.citedOwnedDomain,
        recommended: entry.sentiment === 'Positive',
        sentiment: entry.sentiment,
        citedSourcesCount: entry.citedSourcesCount || 0,
        topCitedSource: entry.topCitedSource,
      }));
  const platformRecommendationStats = data.platform_recommendation_stats?.length
    ? data.platform_recommendation_stats
    : (() => {
        const grouped = new Map<string, typeof keywordPlatformStats>();
        for (const stat of keywordPlatformStats) {
          const key = stat.platform || 'Perplexity';
          const list = grouped.get(key) || [];
          list.push(stat);
          grouped.set(key, list);
        }
        return Array.from(grouped.entries()).map(([platform, stats]) => ({
          platform,
          queriesEvaluated: stats.length,
          mentionRate: Math.round((stats.filter((item) => item.mentionedBrand).length / Math.max(stats.length, 1)) * 100),
          citationRate: Math.round((stats.filter((item) => item.citedOwnedDomain).length / Math.max(stats.length, 1)) * 100),
          recommendationRate: Math.round((stats.filter((item) => item.recommended).length / Math.max(stats.length, 1)) * 100),
        }));
      })();
  const visibleKeywordStats = isUnlocked ? keywordPlatformStats : keywordPlatformStats.slice(0, 3);
  const competitorGap = Math.max(0, (data.metrics.competitor_mention_rate || 0) - (data.metrics.mention_rate || 0));
  const bestPlatform = platformRecommendationStats
    .slice()
    .sort((a, b) => b.recommendationRate - a.recommendationRate)[0];
  const reportNarrative = {
    zh: {
      globalBadge: 'Global AI Citation Snapshot',
      heroTitle: '先看全球 AI 怎么说，再约中国平台深挖。',
      heroSubtitle: 'Perplexity + Gemini 快照，展示品牌被提及、被推荐、被引用的现状。',
      heroNote: '这不是完整审计，而是换取会议的高信号预告片。',
      verdictTitle: '快照结论',
      verdictBody: '全球可见，但中国平台的深度洞察还没补齐。',
      winTitle: '品牌开始露出的地方',
      loseTitle: '可见度正在断裂的地方',
      evidenceTitle: 'AI 现在到底怎么说你',
      chinaTitle: '为什么中国 AI 的结果会不同',
      ctaTitle: '预约 China AI Citation Review',
      ctaSubtitle: '会议里会解锁 Doubao、Yuanbao、Kimi、Tongyi 的详细引用结果。',
      ctaBullets: [
        '按关键词拆开的中国 AI 平台引用地图',
        '哪些引擎推荐你、引用你，或直接跳过你',
        '对照当前全球快照的竞品压力对比',
        '缩小差距的优先 GEO 动作清单',
      ],
      strongLabel: '已推荐且带官网引用',
      softLabel: '被提及但未引官网',
      absentLabel: '回答中缺席',
      gapLabel: '竞品差距',
      globalNote: '这只是全球 AI 检索的方向性快照，不等于中国平台的最终答案。',
      unlockHint: '想看完整引用片段和 China AI 机会层？解锁完整报告。',
      gapDescription: '竞品在高意图场景里的出现频率，目前高于品牌本身。',
      winVisibilityTitle: '品牌可见度',
      winVisibilityBody: (mentionRate: number) => `${mentionRate}% 的采样查询直接提到了品牌。`,
      winBestPlatformTitle: '表现最好的平台',
      winBestPlatformBody: (platform: string, rate: number) => `${platform} 当前以 ${rate}% 的推荐率领先。`,
      winBestPlatformEmpty: '还没有足够的平台拆分数据。',
      winCitationTitle: '官网引用强度',
      winCitationBody: (rate: number) => `${rate}% 的回答把信任和流量引回了官网。`,
      losePressureTitle: '竞品压力',
      losePressureBody: (gap: number) => `品牌可见度与竞品之间仍有 ${gap}% 的差距。`,
      loseIntentTitle: '高意图缺口',
      loseIntentBody: (comparison: number, conversion: number) => `比较型查询 ${comparison} 条，转化型查询 ${conversion} 条，仍是最容易丢失的环节。`,
      loseNextStepTitle: '下一步',
      loseNextStepBody: '中国平台层的详细拆解会保留到 review meeting 里呈现。',
      previewRowsLabel: (count: number) => `当前预览 ${count} 行`,
      tableKeyword: '关键词',
      tablePlatform: '平台',
      tableIntent: '意图',
      tableBrand: '品牌提及',
      tableOwnedDomain: '官网引用',
      tableRecommended: '推荐倾向',
      tableSources: '来源数',
      tablePrimarySource: '主要来源',
      yesLabel: '是',
      noLabel: '否',
      weakLabel: '偏弱',
      platformFallback: '平台数据待补充',
      ownedDomainCitedLabel: '已引用官网',
      primarySourceLabel: '主要引用来源',
      visitDomainLabel: '访问来源域名',
      chinaIntro: '这份快照只反映 Perplexity 和 Gemini 的全球检索行为，不代表中国 AI 平台的完整结果。',
      chinaBullets: [
        'Perplexity 和 Gemini 主要使用全球内容生态。',
        '中国 AI 引擎通常会引用不同的内容源和排序信号。',
        '真正的中国平台引用地图会在会议里解锁。',
      ],
      topDomainsSubtitle: 'AI 在回答行业问题时，最常依赖的第三方权威域名。',
      topDomainName: '域名',
      topDomainType: '来源类别',
      topDomainAuthority: '引用占比',
      topDomainCitations: 'AI 引用次数',
      yourDomainLabel: '你的域名',
      siteReadinessSubtitle: (website: string) => `针对 ${website} 的 AI 抓取可访问性、Schema 标记与内容可引用性检查。`,
      actionLabel: (index: number) => `动作 ${index}`,
      shareLabel: '分享',
    },
    en: {
      globalBadge: 'Global AI Citation Snapshot',
      heroTitle: 'See how global AI talks first, then earn the China deep-dive.',
      heroSubtitle: 'Perplexity + Gemini show how your brand is mentioned, recommended, and cited today.',
      heroNote: 'This is the high-signal preview that earns the meeting.',
      verdictTitle: 'Snapshot verdict',
      verdictBody: 'Visible globally, but the China-platform picture is still incomplete.',
      winTitle: 'Where you win',
      loseTitle: 'Where visibility breaks down',
      evidenceTitle: 'What AI is actually saying',
      chinaTitle: 'Why China AI may look different',
      ctaTitle: 'Book a China AI Citation Review',
      ctaSubtitle: 'The meeting unlocks Doubao, Yuanbao, Kimi, and Tongyi findings.',
      ctaBullets: [
        'Keyword-by-keyword China-platform citation map',
        'Which engines recommend, cite, or skip your brand',
        'Competitor pressure versus your current global snapshot',
        'Priority GEO actions to close the gap',
      ],
      strongLabel: 'Recommended with citation',
      softLabel: 'Mentioned but not cited',
      absentLabel: 'Absent from answer',
      gapLabel: 'Competitor gap',
      globalNote: 'Global AI retrieval is only directional; it is not the China-platform answer.',
      unlockHint: 'Need the full snippet set? Unlock the report.',
      gapDescription: 'Competitors still appear more often than the brand in high-intent answer paths.',
      winVisibilityTitle: 'Brand visibility',
      winVisibilityBody: (mentionRate: number) => `${mentionRate}% of sampled queries surfaced the brand.`,
      winBestPlatformTitle: 'Best platform',
      winBestPlatformBody: (platform: string, rate: number) => `${platform} currently leads at a ${rate}% recommendation rate.`,
      winBestPlatformEmpty: 'Platform-specific breakdown is not available yet.',
      winCitationTitle: 'Citation strength',
      winCitationBody: (rate: number) => `${rate}% of answers linked trust and traffic back to the owned domain.`,
      losePressureTitle: 'Competitive pressure',
      losePressureBody: (gap: number) => `There is still a ${gap}% visibility gap between the brand and competitors.`,
      loseIntentTitle: 'High-intent gap',
      loseIntentBody: (comparison: number, conversion: number) => `${comparison} comparison prompts and ${conversion} conversion prompts remain the weakest points.`,
      loseNextStepTitle: 'Next step',
      loseNextStepBody: 'The China-platform layer is intentionally reserved for the review meeting.',
      previewRowsLabel: (count: number) => `Previewing ${count} rows`,
      tableKeyword: 'Keyword',
      tablePlatform: 'Platform',
      tableIntent: 'Intent',
      tableBrand: 'Brand',
      tableOwnedDomain: 'Owned Domain',
      tableRecommended: 'Recommended',
      tableSources: 'Sources',
      tablePrimarySource: 'Primary Source',
      yesLabel: 'Yes',
      noLabel: 'No',
      weakLabel: 'Weak',
      platformFallback: 'Platform data not available yet.',
      ownedDomainCitedLabel: 'Owned domain cited',
      primarySourceLabel: 'Primary cited source',
      visitDomainLabel: 'Visit domain',
      chinaIntro: 'This snapshot reflects global retrieval behavior from Perplexity and Gemini, not the full China-platform picture.',
      chinaBullets: [
        'Perplexity and Gemini rely on global source ecosystems.',
        'China AI engines often cite different domains and ranking signals.',
        'The meeting unlocks the China-platform citation map.',
      ],
      topDomainsSubtitle: 'Authority domains most frequently cited by AI models when answering industry questions.',
      topDomainName: 'Domain Name',
      topDomainType: 'Source Category',
      topDomainAuthority: 'Citation Share',
      topDomainCitations: 'AI Citation Count',
      yourDomainLabel: 'Your domain',
      siteReadinessSubtitle: (website: string) => `Technical review of ${website} for AI crawler accessibility, Schema markup, and citation readiness.`,
      actionLabel: (index: number) => `Action ${index}`,
      shareLabel: 'Share',
    },
    ms: {
      globalBadge: 'Global AI Citation Snapshot',
      heroTitle: 'Lihat dahulu bagaimana AI global bercakap, kemudian buka semakan China.',
      heroSubtitle: 'Perplexity + Gemini menunjukkan bagaimana jenama anda disebut, disyorkan, dan dipetik hari ini.',
      heroNote: 'Ini ialah pratonton berimpak tinggi yang mendorong mesyuarat.',
      verdictTitle: 'Keputusan snapshot',
      verdictBody: 'Kelihatan di peringkat global, tetapi gambaran platform China masih belum lengkap.',
      winTitle: 'Di mana jenama mula menang',
      loseTitle: 'Di mana kebolehlihatan mula pecah',
      evidenceTitle: 'Apa yang AI benar-benar katakan',
      chinaTitle: 'Mengapa hasil AI China boleh berbeza',
      ctaTitle: 'Book a China AI Citation Review',
      ctaSubtitle: 'The meeting unlocks Doubao, Yuanbao, Kimi, and Tongyi findings.',
      ctaBullets: [
        'Peta citation platform China mengikut keyword',
        'Enjin yang mengesyorkan, memetik, atau melangkau jenama anda',
        'Tekanan pesaing berbanding snapshot global semasa',
        'Tindakan GEO keutamaan untuk menutup jurang',
      ],
      strongLabel: 'Recommended with citation',
      softLabel: 'Mentioned but not cited',
      absentLabel: 'Absent from answer',
      gapLabel: 'Competitor gap',
      globalNote: 'Global AI retrieval hanya bersifat petunjuk; ia bukan jawapan platform China.',
      unlockHint: 'Perlu set petikan penuh? Buka laporan.',
      gapDescription: 'Pesaing masih muncul lebih kerap daripada jenama dalam jawapan berintensi tinggi.',
      winVisibilityTitle: 'Kebolehlihatan jenama',
      winVisibilityBody: (mentionRate: number) => `${mentionRate}% daripada query sampel menyebut jenama secara langsung.`,
      winBestPlatformTitle: 'Platform terbaik',
      winBestPlatformBody: (platform: string, rate: number) => `${platform} kini mendahului dengan kadar syor ${rate}%.`,
      winBestPlatformEmpty: 'Pecahan data mengikut platform masih belum mencukupi.',
      winCitationTitle: 'Kekuatan citation',
      winCitationBody: (rate: number) => `${rate}% jawapan menghala balik ke domain rasmi anda.`,
      losePressureTitle: 'Tekanan pesaing',
      losePressureBody: (gap: number) => `Masih ada jurang kebolehlihatan ${gap}% antara jenama dan pesaing.`,
      loseIntentTitle: 'Jurang niat tinggi',
      loseIntentBody: (comparison: number, conversion: number) => `${comparison} query perbandingan dan ${conversion} query penukaran masih paling lemah.`,
      loseNextStepTitle: 'Langkah seterusnya',
      loseNextStepBody: 'Lapisan platform China sengaja disimpan untuk sesi review.',
      previewRowsLabel: (count: number) => `Memaparkan ${count} baris pratonton`,
      tableKeyword: 'Keyword',
      tablePlatform: 'Platform',
      tableIntent: 'Niat',
      tableBrand: 'Jenama',
      tableOwnedDomain: 'Domain rasmi',
      tableRecommended: 'Disyorkan',
      tableSources: 'Sumber',
      tablePrimarySource: 'Sumber utama',
      yesLabel: 'Ya',
      noLabel: 'Tidak',
      weakLabel: 'Lemah',
      platformFallback: 'Data platform belum tersedia.',
      ownedDomainCitedLabel: 'Domain rasmi dipetik',
      primarySourceLabel: 'Sumber petikan utama',
      visitDomainLabel: 'Lawati domain',
      chinaIntro: 'Snapshot ini hanya mencerminkan tingkah laku carian global Perplexity dan Gemini, bukan gambaran penuh platform China.',
      chinaBullets: [
        'Perplexity dan Gemini bergantung pada ekosistem sumber global.',
        'Enjin AI China sering memetik domain dan isyarat ranking yang berbeza.',
        'Mesyuarat akan membuka peta citation platform China.',
      ],
      topDomainsSubtitle: 'Domain autoriti yang paling kerap dipetik oleh model AI ketika menjawab soalan industri.',
      topDomainName: 'Nama domain',
      topDomainType: 'Kategori sumber',
      topDomainAuthority: 'Bahagian citation',
      topDomainCitations: 'Jumlah citation AI',
      yourDomainLabel: 'Domain anda',
      siteReadinessSubtitle: (website: string) => `Semakan teknikal ${website} untuk akses crawler AI, Schema markup, dan kesediaan citation.`,
      actionLabel: (index: number) => `Tindakan ${index}`,
      shareLabel: 'Kongsi',
    },
  }[language];

  const intentForQuery = (query: string) => {
    const lower = query.toLowerCase();
    const comparison = /对比|比较|替代|哪个好|推荐|排名|\b(vs|versus|compare|comparison|alternative|alternatives|best|top)\b/.test(query) || /\b(vs|versus|compare|comparison|alternative|alternatives|best|top)\b/.test(lower);
    const conversion = /价格|报价|购买|联系|预约/.test(query) || /\b(price|pricing|quote|buy|purchase|contact|demo|book)\b/.test(lower);
    const brand = Boolean(data.brand) && lower.includes(data.brand.toLowerCase());

    if (conversion) return 'Conversion';
    if (comparison) return 'Comparison';
    if (brand) return 'Brand';
    return 'Category';
  };

  const intentCounts = keywordPlatformStats.reduce(
    (acc, entry) => {
      const intent = intentForQuery(entry.query);
      acc[intent] += 1;
      return acc;
    },
    { Brand: 0, Category: 0, Comparison: 0, Conversion: 0 } as Record<'Brand' | 'Category' | 'Comparison' | 'Conversion', number>,
  );

  const orderedEntries = [...(data.entries || [])].sort((a, b) => {
    const score = (entry: CitationSnapshotData['entries'][number]) =>
      (entry.citedOwnedDomain ? 3 : 0) +
      (entry.mentionedBrand ? 2 : 0) +
      (entry.sentiment === 'Positive' ? 1 : 0);

    return score(b) - score(a);
  });
  const evidencePreview = isUnlocked ? orderedEntries.slice(0, 3) : orderedEntries.slice(0, 2);
  const insightPills = [
    { label: t.mentionRateTitle, value: `${data.metrics.mention_rate}%` },
    { label: t.recommendationRateTitle, value: `${recommendationRate}%` },
    { label: t.ownedCitationRateTitle, value: `${data.metrics.owned_domain_citation_rate}%` },
    { label: reportNarrative.gapLabel, value: `+${competitorGap}%` },
  ];

  const labelForEntry = (entry: CitationSnapshotData['entries'][number]) => {
    if (entry.mentionedBrand && entry.citedOwnedDomain) return reportNarrative.strongLabel;
    if (entry.mentionedBrand) return reportNarrative.softLabel;
    return reportNarrative.absentLabel;
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleDownloadText = () => {
    const content = `HOLLYGLOBE SINGAPORE - AI CITATION SNAPSHOT REPORT
---------------------------------------------------
Brand: ${data.brand}
Website: ${data.website}
Market: ${data.targetMarket}
Timestamp: ${data.runTimestamp}

KEY METRICS:
- Brand Mention Rate: ${data.metrics.mention_rate}%
- Owned Domain Direct Citation Rate: ${data.metrics.owned_domain_citation_rate}%
- Queries Evaluated: ${data.metrics.queries_run}
- AI Recommendation Rate: ${recommendationRate}%
- Competitor Gap: ${competitorGap}%

GLOBAL SNAPSHOT:
${data.metrics.mention_rate >= 50 ? '- The brand is visible in global AI answers.' : '- The brand is still underrepresented in global AI answers.'}
${data.metrics.owned_domain_citation_rate >= 25 ? '- Owned-domain citations are appearing in the snapshot.' : '- Owned-domain citations need stronger coverage.'}
${bestPlatform ? `- Best platform: ${bestPlatform.platform} (${bestPlatform.recommendationRate}%).` : ''}

MEETING OFFER:
- Book a China AI Citation Review to unlock Doubao, Yuanbao, Kimi, and Tongyi findings.

TOP RECOMMENDED ACTIONS:
${data.actions.map((action, index) => `${index + 1}. [${action.priority}] ${action.title}: ${action.description}`).join('\n')}

DISCLAIMER:
${data.methodology.disclaimer}
`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `AI_Citation_Snapshot_${data.brand.replace(/[^a-zA-Z0-9]/g, '_')}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-10 text-white">
      <div className="rounded-xl border border-[#1e293b] bg-[#0b172a] px-5 py-3.5 text-xs text-[#94a3b8]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-[#00f2fe]">info</span>
            <span>{t.disclaimerBanner}</span>
          </div>
          <button
            onClick={onReset}
            className="inline-flex items-center gap-1 font-semibold text-[#00f2fe] hover:underline"
          >
            <span className="material-symbols-outlined text-xs">restart_alt</span>
            <span>{t.backToInputBtn}</span>
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[28px] border border-[#1e293b] bg-[#08111f] px-6 py-7 shadow-2xl sm:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,242,254,0.12),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(212,175,55,0.12),_transparent_28%)]" />
        <div className="relative grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <img
                src="/hollyglobe_white_logo.svg"
                alt="HollyGlobe Singapore"
                className="h-7 object-contain"
              />
              <span className="rounded-full border border-[#00f2fe]/30 bg-[#00f2fe]/10 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#00f2fe]">
                {reportNarrative.globalBadge}
              </span>
              <span className="flex items-center gap-1 rounded-full border border-[#1e293b] bg-[#0f172a] px-3 py-1 text-[11px] text-[#cbd5e1]">
                <span className="material-symbols-outlined text-xs text-[#00f2fe]">link</span>
                <span>{data.website}</span>
              </span>
              <span className="flex items-center gap-1 rounded-full border border-[#10b981]/30 bg-[#10b981]/10 px-3 py-1 text-[11px] font-semibold text-[#10b981]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#10b981] animate-pulse" />
                {t.statusCompleted}
              </span>
            </div>

            <div className="max-w-3xl space-y-3">
              <h1 className="max-w-2xl text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl">
                {reportNarrative.heroTitle}
              </h1>
              <p className="max-w-2xl text-sm leading-relaxed text-[#cbd5e1] sm:text-base">
                {reportNarrative.heroSubtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#00f2fe] to-[#0d9488] px-5 py-3 text-sm font-extrabold text-[#08111f] transition-transform hover:brightness-110 active:scale-[0.98]"
              >
                <span className="material-symbols-outlined text-base">calendar_month</span>
                <span>{t.bookReviewBtn}</span>
              </button>
              <button
                onClick={onOpenGeoAudit}
                className="inline-flex items-center gap-2 rounded-xl border border-[#334155] bg-[#0f172a] px-5 py-3 text-sm font-semibold text-[#cbd5e1] transition-transform hover:border-[#00f2fe]/60 hover:text-white active:scale-[0.98]"
              >
                <span className="material-symbols-outlined text-base">strategy</span>
                <span>{t.requestFullAuditBtn}</span>
              </button>
            </div>

            <p className="max-w-2xl text-xs leading-relaxed text-[#94a3b8]">
              {reportNarrative.heroNote}
            </p>
          </div>

          <div className="rounded-[24px] border border-[#1e293b] bg-[#0b172a]/90 p-5 shadow-xl backdrop-blur">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-[11px] uppercase tracking-[0.24em] text-[#94a3b8]">
                  {reportNarrative.verdictTitle}
                </div>
                <div className="mt-2 text-lg font-bold text-white">{reportNarrative.verdictBody}</div>
              </div>
              <span className="rounded-full border border-[#10b981]/30 bg-[#10b981]/10 px-2.5 py-1 text-[10px] font-bold uppercase text-[#10b981]">
                {Math.round((data.metrics.mention_rate + recommendationRate + data.metrics.owned_domain_citation_rate) / 3)}%
              </span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {insightPills.map((pill) => (
                <div key={pill.label} className="rounded-2xl border border-[#1e293b] bg-[#08111f] p-3">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-[#94a3b8]">{pill.label}</div>
                  <div className="mt-2 text-2xl font-black text-white">{pill.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-[#1e293b] bg-[#08111f] p-4">
              <div className="text-[11px] uppercase tracking-[0.22em] text-[#94a3b8]">{reportNarrative.gapLabel}</div>
              <div className="mt-2 text-3xl font-black text-[#f59e0b]">+{competitorGap}%</div>
              <p className="mt-1 text-xs leading-relaxed text-[#94a3b8]">
                {reportNarrative.globalNote}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-12">
        <div className="rounded-2xl border border-[#1e293b] bg-gradient-to-br from-[#0b172a] to-[#07111d] p-5 shadow-xl xl:col-span-5">
          <div className="text-[11px] uppercase tracking-[0.22em] text-[#00f2fe]">{t.mentionRateTitle}</div>
          <div className="mt-3 text-4xl font-black text-[#00f2fe]">{data.metrics.mention_rate}%</div>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#cbd5e1]">{t.mentionRateTooltip}</p>
        </div>
        <div className="rounded-2xl border border-[#1e293b] bg-[#0b172a] p-5 shadow-xl xl:col-span-2">
          <div className="text-[11px] uppercase tracking-[0.2em] text-[#f59e0b]">{t.recommendationRateTitle}</div>
          <div className="mt-3 text-3xl font-black text-[#f59e0b]">{recommendationRate}%</div>
          <p className="mt-2 text-xs leading-relaxed text-[#94a3b8]">{t.recommendationRateTooltip}</p>
        </div>
        <div className="rounded-2xl border border-[#1e293b] bg-[#0b172a] p-5 shadow-xl xl:col-span-2">
          <div className="text-[11px] uppercase tracking-[0.2em] text-[#d4af37]">{t.ownedCitationRateTitle}</div>
          <div className="mt-3 text-3xl font-black text-[#d4af37]">{data.metrics.owned_domain_citation_rate}%</div>
          <p className="mt-2 text-xs leading-relaxed text-[#94a3b8]">{t.ownedCitationTooltip}</p>
        </div>
        <div className="rounded-2xl border border-[#1e293b] bg-[#0b172a] p-5 shadow-xl xl:col-span-3">
          <div className="text-[11px] uppercase tracking-[0.2em] text-[#c084fc]">{reportNarrative.gapLabel}</div>
          <div className="mt-3 text-3xl font-black text-[#c084fc]">+{competitorGap}%</div>
          <p className="mt-2 text-xs leading-relaxed text-[#94a3b8]">
            {reportNarrative.gapDescription}
          </p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-[#1e293b] bg-[#0b172a] p-6 shadow-xl">
          <h3 className="flex items-center gap-2 text-xl font-bold text-white">
            <span className="material-symbols-outlined text-[#00f2fe]">north_east</span>
            <span>{reportNarrative.winTitle}</span>
          </h3>
          <div className="mt-4 space-y-3">
            <div className="rounded-xl border border-[#1e293b] bg-[#08111f] p-4">
              <div className="text-[11px] uppercase tracking-[0.2em] text-[#94a3b8]">{reportNarrative.winVisibilityTitle}</div>
              <p className="mt-2 text-sm text-white">{reportNarrative.winVisibilityBody(data.metrics.mention_rate)}</p>
            </div>
            <div className="rounded-xl border border-[#1e293b] bg-[#08111f] p-4">
              <div className="text-[11px] uppercase tracking-[0.2em] text-[#94a3b8]">{reportNarrative.winBestPlatformTitle}</div>
              <p className="mt-2 text-sm text-white">
                {bestPlatform
                  ? reportNarrative.winBestPlatformBody(bestPlatform.platform, bestPlatform.recommendationRate)
                  : reportNarrative.winBestPlatformEmpty}
              </p>
            </div>
            <div className="rounded-xl border border-[#1e293b] bg-[#08111f] p-4">
              <div className="text-[11px] uppercase tracking-[0.2em] text-[#94a3b8]">{reportNarrative.winCitationTitle}</div>
              <p className="mt-2 text-sm text-white">{reportNarrative.winCitationBody(data.metrics.owned_domain_citation_rate)}</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-[#1e293b] bg-[#0b172a] p-6 shadow-xl">
          <h3 className="flex items-center gap-2 text-xl font-bold text-white">
            <span className="material-symbols-outlined text-[#f59e0b]">south_west</span>
            <span>{reportNarrative.loseTitle}</span>
          </h3>
          <div className="mt-4 space-y-3">
            <div className="rounded-xl border border-[#1e293b] bg-[#08111f] p-4">
              <div className="text-[11px] uppercase tracking-[0.2em] text-[#94a3b8]">{reportNarrative.losePressureTitle}</div>
              <p className="mt-2 text-sm text-white">{reportNarrative.losePressureBody(competitorGap)}</p>
            </div>
            <div className="rounded-xl border border-[#1e293b] bg-[#08111f] p-4">
              <div className="text-[11px] uppercase tracking-[0.2em] text-[#94a3b8]">{reportNarrative.loseIntentTitle}</div>
              <p className="mt-2 text-sm text-white">
                {reportNarrative.loseIntentBody(intentCounts.Comparison, intentCounts.Conversion)}
              </p>
            </div>
            <div className="rounded-xl border border-[#1e293b] bg-[#08111f] p-4">
              <div className="text-[11px] uppercase tracking-[0.2em] text-[#94a3b8]">{reportNarrative.loseNextStepTitle}</div>
              <p className="mt-2 text-sm text-white">{reportNarrative.loseNextStepBody}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-[#1e293b] bg-[#0b172a] p-6 shadow-xl">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="flex items-center gap-2 text-xl font-bold text-white">
              <span className="material-symbols-outlined text-[#00f2fe]">table_chart</span>
              <span>{t.keywordPlatformStatsTitle}</span>
            </h3>
            <p className="mt-1 text-xs text-[#94a3b8]">{t.keywordPlatformStatsSubtitle}</p>
          </div>
          {!isUnlocked && (
            <span className="rounded-full border border-[#f59e0b]/30 bg-[#f59e0b]/10 px-3 py-1 text-[11px] font-semibold text-[#f59e0b]">
              {reportNarrative.previewRowsLabel(visibleKeywordStats.length)}
            </span>
          )}
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[900px] text-left text-xs text-[#cbd5e1]">
            <thead className="border-b border-[#1e293b] bg-[#08111f] text-[10px] uppercase tracking-wider text-[#94a3b8]">
              <tr>
                <th className="px-4 py-3">{reportNarrative.tableKeyword}</th>
                <th className="px-4 py-3">{reportNarrative.tablePlatform}</th>
                <th className="px-4 py-3">{reportNarrative.tableIntent}</th>
                <th className="px-4 py-3 text-center">{reportNarrative.tableBrand}</th>
                <th className="px-4 py-3 text-center">{reportNarrative.tableOwnedDomain}</th>
                <th className="px-4 py-3 text-center">{reportNarrative.tableRecommended}</th>
                <th className="px-4 py-3 text-center">{reportNarrative.tableSources}</th>
                <th className="px-4 py-3">{reportNarrative.tablePrimarySource}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e293b]">
              {visibleKeywordStats.map((stat) => (
                <tr key={stat.id} className="transition-colors hover:bg-[#08111f]/60">
                  <td className="px-4 py-3 text-white">{stat.query}</td>
                  <td className="px-4 py-3 text-[#94a3b8]">{stat.platform}</td>
                  <td className="px-4 py-3">
                    <span className="rounded-full border border-[#334155] bg-[#0f172a] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#cbd5e1]">
                      {intentForQuery(stat.query)}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${stat.mentionedBrand ? 'bg-[#10b981]/10 text-[#10b981]' : 'bg-[#ef4444]/10 text-[#ef4444]'}`}>
                      {stat.mentionedBrand ? reportNarrative.yesLabel : reportNarrative.noLabel}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${stat.citedOwnedDomain ? 'bg-[#00f2fe]/10 text-[#00f2fe]' : 'bg-[#334155] text-[#94a3b8]'}`}>
                      {stat.citedOwnedDomain ? reportNarrative.yesLabel : reportNarrative.noLabel}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${stat.recommended ? 'bg-[#f59e0b]/10 text-[#f59e0b]' : 'bg-[#334155] text-[#94a3b8]'}`}>
                      {stat.recommended ? reportNarrative.strongLabel : reportNarrative.weakLabel}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center font-semibold text-white">{stat.citedSourcesCount}</td>
                  <td className="px-4 py-3 text-[#94a3b8]">{stat.topCitedSource}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-2xl border border-[#1e293b] bg-[#0b172a] p-6 shadow-xl">
        <div className="flex flex-col gap-3 border-b border-[#1e293b] pb-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="flex items-center gap-2 text-xl font-bold text-white">
              <span className="material-symbols-outlined text-[#00f2fe]">short_text</span>
              <span>{reportNarrative.evidenceTitle}</span>
            </h3>
            <p className="mt-1 text-xs text-[#94a3b8]">{reportNarrative.heroNote}</p>
          </div>
          <span
            className={`rounded-full border px-3 py-1 text-xs font-semibold ${
              isUnlocked
                ? 'border-[#10b981]/30 bg-[#10b981]/10 text-[#10b981]'
                : 'border-[#f59e0b]/30 bg-[#f59e0b]/10 text-[#f59e0b]'
            }`}
          >
            {isUnlocked ? t.unlockedBadge : t.lockedBadge}
          </span>
        </div>

        <div className="mt-4 space-y-4">
          {evidencePreview.map((item, index) => (
            <div key={item.id || index} className="space-y-3 rounded-xl border border-[#1e293b] bg-[#08111f] p-5">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1e293b]/60 pb-2">
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#00f2fe]/10 text-xs font-bold text-[#00f2fe]">
                    {index + 1}
                  </span>
                  <span className="text-xs font-semibold text-[#f1f5f9]">"{item.query}"</span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md border border-[#334155] bg-[#0f172a] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#cbd5e1]">
                    {item.platform || 'Perplexity'}
                  </span>
                  <span className={`rounded-md border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                    item.mentionedBrand
                      ? 'border-[#10b981]/30 bg-[#10b981]/10 text-[#10b981]'
                      : 'border-[#ef4444]/30 bg-[#ef4444]/10 text-[#ef4444]'
                  }`}>
                    {labelForEntry(item)}
                  </span>
                  {item.citedOwnedDomain && (
                    <span className="rounded-md border border-[#00f2fe]/30 bg-[#00f2fe]/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#00f2fe]">
                      {reportNarrative.ownedDomainCitedLabel}
                    </span>
                  )}
                </div>
              </div>

              <p className="rounded-lg border border-[#1e293b]/50 bg-[#0b172a]/70 p-3.5 text-xs leading-relaxed text-[#cbd5e1] italic sm:text-sm">
                "{item.aiAnswerSnippet}"
              </p>

              <div className="flex flex-col gap-2 text-[11px] text-[#64748b] sm:flex-row sm:items-center sm:justify-between">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs text-[#00f2fe]">menu_book</span>
                  <span>
                    {reportNarrative.primarySourceLabel}: <strong className="text-[#cbd5e1]">{item.topCitedSource}</strong>
                  </span>
                </span>
                {item.citationUrl && (
                  <a
                    href={item.citationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-0.5 text-[#00f2fe] hover:underline"
                  >
                    <span>{reportNarrative.visitDomainLabel}</span>
                    <span className="material-symbols-outlined text-xs">open_in_new</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {!isUnlocked && (
          <div className="mt-5 rounded-2xl border border-[#00f2fe]/30 bg-gradient-to-br from-[#0f172a] via-[#0b172a] to-[#1e1b4b] p-6 text-center shadow-2xl">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#00f2fe]/30 bg-[#00f2fe]/10 text-[#00f2fe]">
              <span className="material-symbols-outlined text-2xl">lock</span>
            </div>
            <h4 className="mt-4 text-xl font-extrabold text-white">{t.gateTitle}</h4>
            <p className="mt-2 text-sm text-[#94a3b8]">{reportNarrative.unlockHint}</p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={onOpenUnlockGate}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#00f2fe] to-[#0d9488] px-6 py-3 text-sm font-extrabold text-[#08111f] transition-transform hover:brightness-110 active:scale-[0.98]"
              >
                <span className="material-symbols-outlined text-base">lock_open</span>
                <span>{t.gateButton}</span>
              </button>
              <button
                onClick={onOpenGeoAudit}
                className="inline-flex items-center gap-2 rounded-xl border border-[#334155] bg-[#0f172a] px-5 py-3 text-sm font-semibold text-[#cbd5e1] transition-transform hover:border-[#00f2fe]/60 hover:text-white active:scale-[0.98]"
              >
                <span className="material-symbols-outlined text-base">lab_profile</span>
                <span>{t.requestFullAuditBtn}</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="rounded-2xl border border-[#1e293b] bg-[#0b172a] p-6 shadow-xl">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-xl font-bold text-white">
              <span className="material-symbols-outlined text-[#f59e0b]">language</span>
              <span>{reportNarrative.chinaTitle}</span>
            </h3>
            <p className="text-sm leading-relaxed text-[#cbd5e1]">
              {reportNarrative.chinaIntro}
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {reportNarrative.chinaBullets.map((item) => (
                <div key={item} className="rounded-xl border border-[#1e293b] bg-[#08111f] p-4 text-sm text-[#e2e8f0]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#1e293b] bg-[#08111f] p-5">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[#94a3b8]">{reportNarrative.ctaTitle}</div>
            <h4 className="mt-2 text-2xl font-black text-white">{reportNarrative.ctaSubtitle}</h4>
            <div className="mt-4 space-y-2">
              {reportNarrative.ctaBullets.map((bullet) => (
                <div key={bullet} className="flex items-start gap-2 text-sm text-[#cbd5e1]">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#00f2fe]" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#00f2fe] to-[#0d9488] px-5 py-3 text-sm font-extrabold text-[#08111f] transition-transform hover:brightness-110 active:scale-[0.98]"
              >
                <span className="material-symbols-outlined text-base">calendar_month</span>
                <span>{t.bookReviewBtn}</span>
              </button>
              <button
                onClick={onOpenUnlockGate}
                className="inline-flex items-center gap-2 rounded-xl border border-[#334155] bg-[#0f172a] px-5 py-3 text-sm font-semibold text-[#cbd5e1] transition-transform hover:border-[#00f2fe]/60 hover:text-white active:scale-[0.98]"
              >
                <span className="material-symbols-outlined text-base">lock_open</span>
                <span>{reportNarrative.unlockHint}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isUnlocked && (
        <>
          <div className="grid gap-4 xl:grid-cols-2">
            <div className="rounded-2xl border border-[#1e293b] bg-[#0b172a] p-6 shadow-xl">
              <h3 className="flex items-center gap-2 text-xl font-bold text-white">
                <span className="material-symbols-outlined text-[#00f2fe]">language</span>
                <span>{t.topDomainsTitle}</span>
              </h3>
              <p className="mt-1 text-xs text-[#94a3b8]">
                {reportNarrative.topDomainsSubtitle}
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left text-xs text-[#cbd5e1]">
                  <thead className="border-b border-[#1e293b] bg-[#08111f] text-[10px] uppercase tracking-wider text-[#94a3b8]">
                    <tr>
                      <th className="px-4 py-3">{reportNarrative.topDomainName}</th>
                      <th className="px-4 py-3">{reportNarrative.topDomainType}</th>
                      <th className="px-4 py-3 text-center">{reportNarrative.topDomainAuthority}</th>
                      <th className="px-4 py-3 text-center">{reportNarrative.topDomainCitations}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1e293b]">
                    {data.top_external_domains.map((dom, index) => (
                      <tr key={index} className="transition-colors hover:bg-[#08111f]/60">
                        <td className="flex items-center gap-2 px-4 py-3 font-semibold text-white">
                          <span>{dom.domain}</span>
                          {dom.isOwned && (
                            <span className="rounded border border-[#00f2fe]/30 bg-[#00f2fe]/10 px-2 py-0.5 text-[10px] font-bold text-[#00f2fe]">
                              {reportNarrative.yourDomainLabel}
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-[#94a3b8]">{dom.type}</td>
                        <td className="px-4 py-3 text-center font-semibold text-[#00f2fe]">
                          {dom.citationShare}%
                        </td>
                        <td className="px-4 py-3 text-center font-bold text-white">
                          {dom.citationsCount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-2xl border border-[#1e293b] bg-[#0b172a] p-6 shadow-xl">
              <h3 className="flex items-center gap-2 text-xl font-bold text-white">
                <span className="material-symbols-outlined text-[#d4af37]">settings_suggest</span>
                <span>{t.siteReadinessTitle}</span>
              </h3>
              <p className="mt-1 text-xs text-[#94a3b8]">
                {reportNarrative.siteReadinessSubtitle(data.website)}
              </p>
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                {data.site_notes.map((note, index) => (
                  <div key={index} className="space-y-2 rounded-xl border border-[#1e293b] bg-[#08111f] p-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-bold text-white">{note.category}</span>
                      <span
                        className={`rounded border px-2.5 py-0.5 text-[10px] font-bold uppercase ${
                          note.status === 'Pass'
                            ? 'border-[#10b981]/30 bg-[#10b981]/10 text-[#10b981]'
                            : note.status === 'Warning'
                              ? 'border-[#f59e0b]/30 bg-[#f59e0b]/10 text-[#f59e0b]'
                              : 'border-[#ef4444]/30 bg-[#ef4444]/10 text-[#ef4444]'
                        }`}
                      >
                        {note.status}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed text-[#94a3b8]">{note.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#1e293b] bg-[#0b172a] p-6 shadow-xl">
            <h3 className="flex items-center gap-2 text-xl font-bold text-white">
              <span className="material-symbols-outlined text-[#00f2fe]">directions</span>
              <span>{t.recommendedActionsTitle}</span>
            </h3>
            <p className="mt-1 text-xs text-[#94a3b8]">{t.methodologyTitle}</p>
            <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
              {data.actions.map((action, index) => (
                <div key={index} className="space-y-3 rounded-xl border border-[#1e293b] bg-[#08111f] p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`rounded border px-2.5 py-0.5 text-[10px] font-bold uppercase ${
                        action.priority === 'High'
                          ? 'border-[#ef4444]/30 bg-[#ef4444]/10 text-[#ef4444]'
                          : 'border-[#f59e0b]/30 bg-[#f59e0b]/10 text-[#f59e0b]'
                      }`}
                    >
                      {action.priority}
                    </span>
                    <span className="text-[11px] text-[#64748b]">{reportNarrative.actionLabel(index + 1)}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">{action.title}</h4>
                  <p className="text-xs leading-relaxed text-[#94a3b8]">{action.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#1e293b] bg-[#0b172a] p-6 shadow-xl">
            <h3 className="text-lg font-bold text-white">{t.methodologyTitle}</h3>
            <p className="mt-2 text-xs leading-relaxed text-[#94a3b8]">{data.methodology.disclaimer}</p>
          </div>
        </>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={handleCopyLink}
          className="inline-flex items-center gap-1.5 rounded-xl border border-[#334155] bg-[#0f172a] px-3.5 py-2 text-xs font-semibold text-[#cbd5e1] transition-all hover:border-[#00f2fe] hover:text-white"
        >
          <span className="material-symbols-outlined text-sm">share</span>
          <span>{copied ? t.copiedLinkNotice : reportNarrative.shareLabel}</span>
        </button>
        <button
          onClick={handleDownloadText}
          className="inline-flex items-center gap-1.5 rounded-xl border border-[#334155] bg-[#0f172a] px-3.5 py-2 text-xs font-semibold text-[#cbd5e1] transition-all hover:border-[#00f2fe] hover:text-white"
        >
          <span className="material-symbols-outlined text-sm">download</span>
          <span>{t.downloadPdfBtn}</span>
        </button>
      </div>
    </div>
  );
};
