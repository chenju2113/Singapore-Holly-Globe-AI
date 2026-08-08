import React, { useState } from 'react';
import { CitationLanguage, UnlockLeadData } from '../../types/citation';
import { CITATION_TRANSLATIONS } from '../../data/citationTranslations';

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
      await fetch('/api/lead-consultation', {
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

      // Fire Google Ads conversion tracking event
      if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', 'conversion', {
          'send_to': 'AW-18372486865/EVGdCJ2MstwcENHN17hE',
          'value': 1.0,
          'currency': 'SGD'
        });
      }
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#0b172a] border border-[#00f2fe]/40 rounded-2xl p-6 sm:p-8 text-white shadow-2xl shadow-[#00f2fe]/20 overflow-hidden">
        {/* Glow background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00f2fe]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#94a3b8] hover:text-white p-1 rounded-lg hover:bg-[#1e293b]"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Modal Header */}
        <div className="flex items-center justify-between mb-4">
          <img
            src="/hollyglobe_white_logo.svg"
            alt="HollyGlobe Singapore"
            className="h-7 object-contain"
          />
          <span className="text-xs font-bold uppercase tracking-wider bg-[#00f2fe]/10 text-[#00f2fe] px-2.5 py-1 rounded border border-[#00f2fe]/30 flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">lock_open</span>
            <span>{t.lockedBadge}</span>
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold mb-2">{t.gateTitle}</h3>
        <p className="text-xs sm:text-sm text-[#94a3b8] mb-6">{t.gateSubtitle}</p>

        {/* Benefits List */}
        <div className="mb-6 p-4 rounded-xl bg-[#0f172a] border border-[#1e293b] space-y-2">
          {t.gateBenefits.map((benefit, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-[#cbd5e1]">
              <span className="material-symbols-outlined text-[#00f2fe] text-base mt-0.5">
                check_circle
              </span>
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#cbd5e1] mb-1.5">
                {t.gateFormEmail} <span className="text-[#00f2fe]">*</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@company.com"
                className="w-full bg-[#0f172a] border border-[#334155] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#64748b] focus:outline-none focus:border-[#00f2fe]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#cbd5e1] mb-1.5">
                {t.gateFormName} <span className="text-[#00f2fe]">*</span>
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="John"
                className="w-full bg-[#0f172a] border border-[#334155] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#64748b] focus:outline-none focus:border-[#00f2fe]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#cbd5e1] mb-1.5">
                {t.gateFormTitle}
              </label>
              <input
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                placeholder="CMO / VP Marketing"
                className="w-full bg-[#0f172a] border border-[#334155] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#64748b] focus:outline-none focus:border-[#00f2fe]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#cbd5e1] mb-1.5">
                {t.gateFormPhone}
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+65 8123 4567"
                className="w-full bg-[#0f172a] border border-[#334155] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#64748b] focus:outline-none focus:border-[#00f2fe]"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00f2fe] to-[#0d9488] text-[#0b172a] font-extrabold text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#00f2fe]/20"
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
  );
};
