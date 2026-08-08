import React, { useState } from 'react';
import { CitationFormData, CitationLanguage, CitationSnapshotData, UnlockLeadData } from '../../types/citation';
import { IntakeForm } from './IntakeForm';
import { LoadingState } from './LoadingState';
import { ReportDashboard } from './ReportDashboard';
import { UnlockGateModal } from './UnlockGateModal';
import { generateFallbackCitationSnapshot } from '../../server/citationGenerator';

interface CitationSnapshotViewProps {
  onOpenConsultation: () => void;
  onOpenGeoAudit: () => void;
}

export const CitationSnapshotView: React.FC<CitationSnapshotViewProps> = ({
  onOpenConsultation,
  onOpenGeoAudit,
}) => {
  const [viewState, setViewState] = useState<'input' | 'loading' | 'report'>('input');
  const [language, setLanguage] = useState<CitationLanguage>('zh');
  const [formData, setFormData] = useState<CitationFormData | null>(null);
  const [snapshotData, setSnapshotData] = useState<CitationSnapshotData | null>(null);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isUnlockModalOpen, setIsUnlockModalOpen] = useState(false);

  const handleFormSubmit = async (data: CitationFormData) => {
    setFormData(data);
    setViewState('loading');

    try {
      // Call server-side Perplexity citation API endpoint
      const response = await fetch('/api/perplexity-citation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result: CitationSnapshotData = await response.json();
        setSnapshotData(result);
      } else {
        console.warn('API returned non-200, generating client fallback');
        const fallback = generateFallbackCitationSnapshot({
          brandName: data.brandName,
          website: data.website,
          industry: data.industry,
          targetMarket: data.targetMarket,
          competitors: data.competitors,
          targetLanguage: data.targetLanguage,
          queryFocus: data.queryFocus,
        });
        setSnapshotData(fallback);
      }
    } catch (err) {
      console.error('Error fetching citation snapshot:', err);
      const fallback = generateFallbackCitationSnapshot({
        brandName: data.brandName,
        website: data.website,
        industry: data.industry,
        targetMarket: data.targetMarket,
        competitors: data.competitors,
        targetLanguage: data.targetLanguage,
        queryFocus: data.queryFocus,
      });
      setSnapshotData(fallback);
    } finally {
      // Wait for loading animation to finish gracefully
      setTimeout(() => {
        setViewState('report');
      }, 3500);
    }
  };

  const handleUnlockLead = (lead: UnlockLeadData) => {
    setIsUnlocked(true);
    setIsUnlockModalOpen(false);
  };

  const handleReset = () => {
    setViewState('input');
    setSnapshotData(null);
    setIsUnlocked(false);
  };

  return (
    <div className="min-h-screen bg-[#070d18] text-white pt-24 pb-16 px-4 sm:px-6">
      {/* View 1: Executive Hero & Intake Form */}
      {viewState === 'input' && (
        <div className="animate-fadeIn max-w-5xl mx-auto space-y-8">
          {/* Executive Hero Banner */}
          <div className="text-center space-y-4 max-w-3xl mx-auto pt-2">
            <div className="flex justify-center mb-2">
              <img
                src="/hollyglobe_white_logo.svg"
                alt="HollyGlobe Singapore Logo"
                className="h-12 max-w-[280px] object-contain drop-shadow-lg"
              />
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00f2fe]/10 border border-[#00f2fe]/30 text-[#00f2fe] text-xs font-extrabold uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#00f2fe] animate-pulse" />
              <span>HollyGlobe Singapore • AI Search Diagnostic</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              AI Citation Snapshot <span className="bg-gradient-to-r from-[#00f2fe] via-[#38bdf8] to-[#0d9488] bg-clip-text text-transparent">&amp; GEO Visibility</span>
            </h1>

            <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
              Diagnostic scan of how AI search models (Perplexity, ChatGPT, Baidu Ernie) cite your brand, quote your website domain, and mention key competitors across Singapore and global markets.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-1 text-xs text-[#cbd5e1]">
              <span className="flex items-center gap-1 bg-[#0f172a] px-3 py-1 rounded-lg border border-[#1e293b]">
                <span className="material-symbols-outlined text-[#00f2fe] text-sm">radar</span>
                Perplexity Sonar Model
              </span>
              <span className="flex items-center gap-1 bg-[#0f172a] px-3 py-1 rounded-lg border border-[#1e293b]">
                <span className="material-symbols-outlined text-[#d4af37] text-sm">translate</span>
                Multi-Language (ZH / EN / MS)
              </span>
              <span className="flex items-center gap-1 bg-[#0f172a] px-3 py-1 rounded-lg border border-[#1e293b]">
                <span className="material-symbols-outlined text-[#10b981] text-sm">shield</span>
                Zero Public Key Exposure
              </span>
            </div>
          </div>

          <IntakeForm
            onSubmit={handleFormSubmit}
            language={language}
            onLanguageChange={setLanguage}
          />
        </div>
      )}

      {/* View 2: Loading State */}
      {viewState === 'loading' && formData && (
        <div className="animate-fadeIn">
          <LoadingState language={language} brandName={formData.brandName} />
        </div>
      )}

      {/* View 3: Report Dashboard */}
      {viewState === 'report' && snapshotData && (
        <div className="animate-fadeIn">
          <ReportDashboard
            data={snapshotData}
            language={language}
            isUnlocked={isUnlocked}
            onOpenUnlockGate={() => setIsUnlockModalOpen(true)}
            onOpenConsultation={onOpenConsultation}
            onOpenGeoAudit={onOpenGeoAudit}
            onReset={handleReset}
          />
        </div>
      )}

      {/* Unlock Gate Modal */}
      <UnlockGateModal
        isOpen={isUnlockModalOpen}
        onClose={() => setIsUnlockModalOpen(false)}
        onUnlock={handleUnlockLead}
        language={language}
        brandName={formData?.brandName || snapshotData?.brand || ''}
      />
    </div>
  );
};
