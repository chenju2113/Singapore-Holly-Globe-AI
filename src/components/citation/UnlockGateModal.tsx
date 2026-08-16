import React, { useState } from 'react';
import { CitationLanguage, UnlockLeadData } from '../../types/citation';
import { CITATION_TRANSLATIONS } from '../../data/citationTranslations';
import { trackQualifiedLeadCapture } from '../../utils/adTracking';
import { trackMicrosoftLeadConversion } from '../../utils/tracking';

interface UnlockGateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUnlock: (data: UnlockLeadData) => void;
  language: CitationLanguage;
  brandName: string;
}

export const UnlockGateModal: React.FC<UnlockGateModalProps> = ({
  isOpen,
  onClose,
  onUnlock,
  language,
  brandName,
}) => {
  if (!isOpen) return null;

  const t = CITATION_TRANSLATIONS[language];

  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState(brandName || '');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !fullName.trim()) return;

    setIsSubmitting(true);

    try {
      // Dispatch lead consultation API call
      const res = await fetch('/api/lead-consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          companyName: companyName || brandName,
          phone,
          industry: 'AI Citation Snapshot Lead',
          notes: `Unlocked full AI Citation Snapshot report for brand "${brandName}". Job Title: ${jobTitle}`,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to submit lead consultation');
      }

      // Fire unified lead conversion tracking (Google Ads + LinkedIn Ads)
      trackQualifiedLeadCapture();
      trackMicrosoftLeadConversion('citation_unlock_modal');
    } catch (err) {
      console.warn('Lead dispatch warning:', err);
    } finally {
      setIsSubmitting(false);
      onUnlock({
        email,
        fullName,
        jobTitle,
        phone,
        companyName: companyName || brandName,
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-xl max-h-[90vh] flex flex-col bg-[#0b172a] border border-[#00f2fe]/40 rounded-2xl text-white shadow-2xl shadow-[#00f2fe]/20 overflow-hidden my-auto">
        {/* Glow background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00f2fe]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[#94a3b8] hover:text-white p-1.5 rounded-lg hover:bg-[#1e293b] z-20"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Scrollable Modal Body */}
        <div className="overflow-y-auto p-4 sm:p-8 space-y-4 max-h-[90vh]">
          {/* Modal Header */}
          <div className="flex items-center justify-between pr-8">
            <img
              src="/hollyglobe_white_logo.svg"
              alt="HollyGlobe Singapore"
              className="h-6 sm:h-7 object-contain"
            />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-[#00f2fe]/10 text-[#00f2fe] px-2 sm:px-2.5 py-1 rounded border border-[#00f2fe]/30 flex items-center gap-1 shrink-0">
              <span className="material-symbols-outlined text-xs sm:text-sm">lock_open</span>
              <span>{t.lockedBadge}</span>
            </span>
          </div>

          <div>
            <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">{t.gateTitle}</h3>
            <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">{t.gateSubtitle}</p>
          </div>

          {/* Benefits List */}
          <div className="p-3 sm:p-4 rounded-xl bg-[#0f172a] border border-[#1e293b] space-y-1.5 sm:space-y-2">
            {t.gateBenefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-[#cbd5e1]">
                <span className="material-symbols-outlined text-[#00f2fe] text-base mt-0.5 shrink-0">
                  check_circle
                </span>
                <span className="leading-tight">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3.5 pt-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                  {t.gateFormEmail} <span className="text-[#00f2fe]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@company.com"
                  className="w-full bg-[#0f172a] border border-[#334155] rounded-xl px-3 py-2 sm:px-3.5 sm:py-2.5 text-xs text-white placeholder-[#64748b] focus:outline-none focus:border-[#00f2fe]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                  {t.gateFormName} <span className="text-[#00f2fe]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="John"
                  className="w-full bg-[#0f172a] border border-[#334155] rounded-xl px-3 py-2 sm:px-3.5 sm:py-2.5 text-xs text-white placeholder-[#64748b] focus:outline-none focus:border-[#00f2fe]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                  {t.gateFormTitle}
                </label>
                <input
                  type="text"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  placeholder="CMO / VP Marketing"
                  className="w-full bg-[#0f172a] border border-[#334155] rounded-xl px-3 py-2 sm:px-3.5 sm:py-2.5 text-xs text-white placeholder-[#64748b] focus:outline-none focus:border-[#00f2fe]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                  {t.gateFormPhone}
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+65 8123 4567"
                  className="w-full bg-[#0f172a] border border-[#334155] rounded-xl px-3 py-2 sm:px-3.5 sm:py-2.5 text-xs text-white placeholder-[#64748b] focus:outline-none focus:border-[#00f2fe]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00f2fe] to-[#0d9488] text-[#0b172a] font-extrabold text-sm hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#00f2fe]/20 cursor-pointer mt-3"
            >
              {isSubmitting ? (
                <span>Unlocking...</span>
              ) : (
                <>
                  <span>{t.gateButton}</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
