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

  // Copy shareable link
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // Download summary text file
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
- Competitor Mention Benchmark: ${data.metrics.competitor_mention_rate}%

TOP RECOMMENDED ACTIONS:
${data.actions.map((a, i) => `${i + 1}. [${a.priority}] ${a.title}: ${a.description}`).join('\n')}

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

  // Preview entries (show first 2-3 entries if locked, all if unlocked)
  const visibleEntries = isUnlocked ? data.entries : data.entries.slice(0, 2);

  return (
    <div className="max-w-6xl mx-auto space-y-8 text-white">
      {/* Top Banner Disclaimer */}
      <div className="bg-[#0f172a] border border-[#1e293b] rounded-xl p-3.5 px-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#94a3b8]">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#00f2fe] text-sm">info</span>
          <span>{t.disclaimerBanner}</span>
        </div>
        <button
          onClick={onReset}
          className="text-[#00f2fe] hover:underline flex items-center gap-1 font-semibold whitespace-nowrap"
        >
          <span className="material-symbols-outlined text-xs">restart_alt</span>
          <span>{t.backToInputBtn}</span>
        </button>
      </div>

      {/* Main Report Header Card */}
      <div className="bg-[#0b172a] border border-[#1e293b] rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#00f2fe]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#1e293b]">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <img
                src="/hollyglobe_white_logo.svg"
                alt="HollyGlobe Singapore"
                className="h-7 object-contain mr-2"
              />
              <span className="bg-[#00f2fe]/10 text-[#00f2fe] border border-[#00f2fe]/30 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                {data.brand}
              </span>
              <span className="text-xs text-[#94a3b8] flex items-center gap-1 bg-[#0f172a] px-2.5 py-1 rounded-lg border border-[#1e293b]">
                <span className="material-symbols-outlined text-sm text-[#00f2fe]">link</span>
                <span>{data.website}</span>
              </span>
              <span className="text-xs text-[#10b981] bg-[#10b981]/10 border border-[#10b981]/30 px-2.5 py-1 rounded-lg font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                {t.statusCompleted}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.snapshotTitle}
            </h1>
            <p className="text-xs sm:text-sm text-[#94a3b8] mt-1">
              {t.snapshotSubtitle} • {t.generatedAt}: {new Date(data.runTimestamp).toLocaleString()}
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyLink}
              className="px-3.5 py-2 rounded-xl bg-[#0f172a] border border-[#334155] hover:border-[#00f2fe] text-xs font-semibold text-[#cbd5e1] hover:text-white transition-all flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-sm">share</span>
              <span>{copied ? t.copiedLinkNotice : 'Share'}</span>
            </button>

            <button
              onClick={handleDownloadText}
              className="px-3.5 py-2 rounded-xl bg-[#0f172a] border border-[#334155] hover:border-[#00f2fe] text-xs font-semibold text-[#cbd5e1] hover:text-white transition-all flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-sm">download</span>
              <span>{t.downloadPdfBtn}</span>
            </button>
          </div>
        </div>

        {/* Metric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
          {/* Metric 1: Mention Rate */}
          <div className="bg-[#0f172a] border border-[#1e293b] rounded-xl p-5 relative group hover:border-[#00f2fe]/40 transition-all">
            <div className="flex items-center justify-between text-xs text-[#94a3b8] mb-2">
              <span className="font-semibold uppercase tracking-wider">{t.mentionRateTitle}</span>
              <span className="material-symbols-outlined text-[#00f2fe] text-base">psychology</span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#00f2fe] tracking-tight">
              {data.metrics.mention_rate}%
            </div>
            <p className="text-[11px] text-[#64748b] mt-2 leading-snug">
              {t.mentionRateTooltip}
            </p>
          </div>

          {/* Metric 2: Owned Domain Citation Rate */}
          <div className="bg-[#0f172a] border border-[#1e293b] rounded-xl p-5 relative group hover:border-[#00f2fe]/40 transition-all">
            <div className="flex items-center justify-between text-xs text-[#94a3b8] mb-2">
              <span className="font-semibold uppercase tracking-wider">{t.ownedCitationRateTitle}</span>
              <span className="material-symbols-outlined text-[#d4af37] text-base">verified</span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#d4af37] tracking-tight">
              {data.metrics.owned_domain_citation_rate}%
            </div>
            <p className="text-[11px] text-[#64748b] mt-2 leading-snug">
              {t.ownedCitationTooltip}
            </p>
          </div>

          {/* Metric 3: Queries Sampled */}
          <div className="bg-[#0f172a] border border-[#1e293b] rounded-xl p-5 relative group hover:border-[#00f2fe]/40 transition-all">
            <div className="flex items-center justify-between text-xs text-[#94a3b8] mb-2">
              <span className="font-semibold uppercase tracking-wider">{t.queriesEvaluatedTitle}</span>
              <span className="material-symbols-outlined text-[#0d9488] text-base">saved_search</span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {data.metrics.queries_run}
            </div>
            <p className="text-[11px] text-[#64748b] mt-2 leading-snug">
              Industry prompts sampled across AI search indexes
            </p>
          </div>

          {/* Metric 4: Competitor Benchmark */}
          <div className="bg-[#0f172a] border border-[#1e293b] rounded-xl p-5 relative group hover:border-[#00f2fe]/40 transition-all">
            <div className="flex items-center justify-between text-xs text-[#94a3b8] mb-2">
              <span className="font-semibold uppercase tracking-wider">{t.competitorAvgTitle}</span>
              <span className="material-symbols-outlined text-[#f59e0b] text-base">leaderboard</span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#f59e0b] tracking-tight">
              {data.metrics.competitor_mention_rate}%
            </div>
            <p className="text-[11px] text-[#64748b] mt-2 leading-snug">
              Estimated mention rate for top incumbent competitors
            </p>
          </div>
        </div>
      </div>

      {/* AI Answer Snippets Section */}
      <div className="bg-[#0b172a] border border-[#1e293b] rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1e293b] pb-4">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-[#00f2fe]">short_text</span>
              <span>{isUnlocked ? t.fullSnippetsTitle : t.previewSectionTitle}</span>
            </h3>
            <p className="text-xs text-[#94a3b8] mt-1">{t.previewSectionSubtitle}</p>
          </div>

          <div className="flex items-center gap-2">
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                isUnlocked
                  ? 'bg-[#10b981]/10 text-[#10b981] border-[#10b981]/30'
                  : 'bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30'
              }`}
            >
              {isUnlocked ? t.unlockedBadge : t.lockedBadge}
            </span>
          </div>
        </div>

        {/* Query Snippets Grid */}
        <div className="space-y-4">
          {visibleEntries.map((item, idx) => (
            <div
              key={item.id || idx}
              className="bg-[#0f172a] border border-[#1e293b] hover:border-[#334155] rounded-xl p-5 space-y-3 transition-all"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[#1e293b]/60">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#00f2fe]/10 text-[#00f2fe] text-xs font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#f1f5f9]">
                    "{item.query}"
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Mentioned Badge */}
                  {item.mentionedBrand ? (
                    <span className="bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/30 text-[11px] font-semibold px-2.5 py-0.5 rounded-md flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">check</span>
                      Brand Mentioned
                    </span>
                  ) : (
                    <span className="bg-[#ef4444]/10 text-[#ef4444] border border-[#ef4444]/30 text-[11px] font-semibold px-2.5 py-0.5 rounded-md flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">close</span>
                      Not Mentioned
                    </span>
                  )}

                  {/* Cited Owned Domain Badge */}
                  {item.citedOwnedDomain && (
                    <span className="bg-[#00f2fe]/10 text-[#00f2fe] border border-[#00f2fe]/30 text-[11px] font-semibold px-2.5 py-0.5 rounded-md flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">link</span>
                      Owned Domain Cited
                    </span>
                  )}
                </div>
              </div>

              {/* AI Answer Content */}
              <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed bg-[#0b172a]/60 p-3.5 rounded-lg border border-[#1e293b]/40 italic">
                "{item.aiAnswerSnippet}"
              </p>

              {/* Footnote Citation Source */}
              <div className="flex items-center justify-between text-[11px] text-[#64748b]">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs text-[#00f2fe]">menu_book</span>
                  <span>Primary Cited Source: <strong className="text-[#cbd5e1]">{item.topCitedSource}</strong></span>
                </span>

                {item.citationUrl && (
                  <a
                    href={item.citationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#00f2fe] hover:underline flex items-center gap-0.5"
                  >
                    <span>Visit Domain</span>
                    <span className="material-symbols-outlined text-xs">open_in_new</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* MID-REPORT GATE (Unlock Banner Overlay if Locked) */}
        {!isUnlocked && (
          <div className="relative rounded-xl border border-[#00f2fe]/30 bg-gradient-to-br from-[#0f172a] via-[#0b172a] to-[#1e1b4b] p-6 sm:p-8 text-center space-y-4 shadow-2xl overflow-hidden mt-6">
            <div className="absolute inset-0 bg-[#00f2fe]/5 backdrop-blur-xs pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#00f2fe]/10 text-[#00f2fe] border border-[#00f2fe]/30 flex items-center justify-center mx-auto shadow-lg shadow-[#00f2fe]/20">
                <span className="material-symbols-outlined text-2xl">lock</span>
              </div>

              <h4 className="text-xl sm:text-2xl font-extrabold text-white">
                {t.gateTitle}
              </h4>

              <p className="text-xs sm:text-sm text-[#94a3b8]">
                {t.gateSubtitle}
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenUnlockGate}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#00f2fe] to-[#0d9488] text-[#0b172a] font-extrabold text-sm hover:brightness-110 transition-all shadow-xl shadow-[#00f2fe]/20 flex items-center justify-center gap-2 mx-auto"
                >
                  <span className="material-symbols-outlined text-base">lock_open</span>
                  <span>{t.gateButton}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* UNLOCKED FULL SECTIONS (Only shown if isUnlocked === true) */}
      {isUnlocked && (
        <>
          {/* Top External Domains */}
          <div className="bg-[#0b172a] border border-[#1e293b] rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-[#00f2fe]">language</span>
                <span>{t.topDomainsTitle}</span>
              </h3>
              <p className="text-xs text-[#94a3b8] mt-1">
                Authority domains most frequently cited by AI models when answering queries in your industry sector.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-[#cbd5e1]">
                <thead className="bg-[#0f172a] text-[#94a3b8] uppercase tracking-wider text-[10px] border-b border-[#1e293b]">
                  <tr>
                    <th className="py-3 px-4">Domain Name</th>
                    <th className="py-3 px-4">Source Category</th>
                    <th className="py-3 px-4 text-center">Authority Score</th>
                    <th className="py-3 px-4 text-center">AI Citation Count</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1e293b]">
                  {data.top_external_domains.map((dom, i) => (
                    <tr key={i} className="hover:bg-[#0f172a]/50 transition-colors">
                      <td className="py-3 px-4 font-semibold text-white flex items-center gap-2">
                        <span>{dom.domain}</span>
                        {dom.isOwned && (
                          <span className="bg-[#00f2fe]/10 text-[#00f2fe] border border-[#00f2fe]/30 text-[10px] px-2 py-0.5 rounded font-bold">
                            YOUR DOMAIN
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-[#94a3b8]">{dom.type}</td>
                      <td className="py-3 px-4 text-center font-semibold text-[#00f2fe]">
                        {dom.authorityScore} / 100
                      </td>
                      <td className="py-3 px-4 text-center font-bold text-white">
                        {dom.citationsCount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Website AI Technical Readiness Notes */}
          <div className="bg-[#0b172a] border border-[#1e293b] rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-[#d4af37]">settings_suggest</span>
                <span>{t.siteReadinessTitle}</span>
              </h3>
              <p className="text-xs text-[#94a3b8] mt-1">
                Technical evaluation of <strong className="text-white">{data.website}</strong> regarding AI crawler accessibility, Schema markup, and Q&A density.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.site_notes.map((note, i) => (
                <div
                  key={i}
                  className="bg-[#0f172a] border border-[#1e293b] rounded-xl p-4 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{note.category}</span>
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded uppercase border ${
                        note.status === 'Pass'
                          ? 'bg-[#10b981]/10 text-[#10b981] border-[#10b981]/30'
                          : note.status === 'Warning'
                          ? 'bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30'
                          : 'bg-[#ef4444]/10 text-[#ef4444] border-[#ef4444]/30'
                      }`}
                    >
                      {note.status}
                    </span>
                  </div>
                  <p className="text-xs text-[#94a3b8] leading-relaxed">{note.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended GEO Actions */}
          <div className="bg-[#0b172a] border border-[#1e293b] rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-[#10b981]">checklist</span>
                <span>{t.recommendedActionsTitle}</span>
              </h3>
              <p className="text-xs text-[#94a3b8] mt-1">
                Strategic roadmap to increase brand mention rate and direct owned-domain citation rate.
              </p>
            </div>

            <div className="space-y-4">
              {data.actions.map((act, i) => (
                <div
                  key={i}
                  className="bg-[#0f172a] border border-[#1e293b] hover:border-[#00f2fe]/40 rounded-xl p-5 space-y-2 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <span className="w-5 h-5 rounded bg-[#00f2fe]/10 text-[#00f2fe] text-xs flex items-center justify-center">
                        {i + 1}
                      </span>
                      <span>{act.title}</span>
                    </h4>

                    <span
                      className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded border uppercase ${
                        act.priority === 'High'
                          ? 'bg-[#ef4444]/10 text-[#ef4444] border-[#ef4444]/30'
                          : 'bg-[#00f2fe]/10 text-[#00f2fe] border-[#00f2fe]/30'
                      }`}
                    >
                      {act.priority} Priority
                    </span>
                  </div>

                  <p className="text-xs text-[#cbd5e1] leading-relaxed pl-7">
                    {act.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* STRATEGIC CONVERSION CTAs */}
      {(() => {
        const recipientEmail = data.cta?.contactEmail || 'enquiry@sghollyglobe.com';
        const mailBody = `Brand Name: ${data.brand}\nWebsite: ${data.website}\nIndustry: ${data.industry}\nTarget Market: ${data.targetMarket}\nSelected Language: ${language}\n\nNote: This lead came from the AI Citation Snapshot demo on HollyGlobe Singapore.`;

        const strategyReviewMailto = `mailto:${recipientEmail}?subject=${encodeURIComponent('AI Citation Snapshot - Strategy Review Request')}&body=${encodeURIComponent(mailBody)}`;
        const fullAuditMailto = `mailto:${recipientEmail}?subject=${encodeURIComponent('Request for Full GEO Audit')}&body=${encodeURIComponent(mailBody)}`;

        return (
          <div className="bg-gradient-to-r from-[#0b172a] via-[#0f172a] to-[#0b172a] border border-[#00f2fe]/40 rounded-2xl p-8 text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-extrabold text-[#00f2fe] bg-[#00f2fe]/10 border border-[#00f2fe]/30 px-3 py-1 rounded-full uppercase tracking-wider">
                HollyGlobe Singapore Executive Advisory
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Ready to Dominate AI Search Citations in Your Sector?
              </h3>
              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                Connect with our Singapore-based AI Marketing & GEO specialists to execute multi-engine knowledge graph injection and citation displacement.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              {/* Strategy Review CTA Mailto */}
              <a
                href={strategyReviewMailto}
                onClick={(e) => {
                  // Optionally open modal while mailto triggers
                  if (onOpenConsultation) {
                    // Let mailto trigger natively
                  }
                }}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#00f2fe] to-[#0d9488] text-[#0b172a] font-extrabold text-xs sm:text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#00f2fe]/20"
              >
                <span>{t.bookReviewBtn}</span>
                <span className="material-symbols-outlined text-base">mail</span>
              </a>

              {/* Full GEO Audit CTA Mailto */}
              <a
                href={fullAuditMailto}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0f172a] border border-[#00f2fe]/40 hover:border-[#00f2fe] text-xs sm:text-sm font-extrabold text-white transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-base text-[#00f2fe]">auto_awesome</span>
                <span>{t.requestFullAuditBtn}</span>
              </a>

              {/* Direct Strategist Email */}
              <a
                href={strategyReviewMailto}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#0f172a] border border-[#334155] hover:border-white text-xs sm:text-sm font-semibold text-[#cbd5e1] hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-base">send</span>
                <span>{t.emailStrategistBtn}</span>
              </a>
            </div>
          </div>
        );
      })()}

      {/* Methodology Footer */}
      <div className="bg-[#0f172a] border border-[#1e293b] rounded-xl p-6 text-xs text-[#94a3b8] space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1e293b] pb-3">
          <h5 className="font-bold text-[#cbd5e1] uppercase tracking-wider flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#00f2fe] text-base">verified_user</span>
            <span>{t.methodologyTitle}</span>
          </h5>
          {data.methodology.detectionDate && (
            <span className="text-[11px] text-[#64748b]">
              Detection Date: <strong className="text-[#cbd5e1]">{data.methodology.detectionDate}</strong>
            </span>
          )}
        </div>

        <p className="leading-relaxed text-[#94a3b8]">{data.methodology.disclaimer}</p>

        <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] text-[#64748b] pt-1">
          <span>
            Evaluated Platforms: <strong className="text-[#cbd5e1]">{data.methodology.evaluatedPlatforms.join(' • ')}</strong>
          </span>
          <span>
            Queries Sampled: <strong className="text-[#00f2fe]">4 Standardized Prompts</strong>
          </span>
        </div>
      </div>
    </div>
  );
};
