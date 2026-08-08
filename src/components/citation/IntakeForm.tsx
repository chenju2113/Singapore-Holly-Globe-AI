import React, { useState } from 'react';
import { CitationFormData, CitationLanguage } from '../../types/citation';
import { CITATION_TRANSLATIONS } from '../../data/citationTranslations';

interface IntakeFormProps {
  onSubmit: (data: CitationFormData) => void;
  language: CitationLanguage;
  onLanguageChange: (lang: CitationLanguage) => void;
}

export const IntakeForm: React.FC<IntakeFormProps> = ({
  onSubmit,
  language,
  onLanguageChange,
}) => {
  const t = CITATION_TRANSLATIONS[language];

  const [formData, setFormData] = useState<CitationFormData>({
    brandName: '',
    website: '',
    industry: 'B2B Tech & SaaS',
    targetMarket: 'Singapore & Southeast Asia',
    competitors: '',
    targetLanguage: language,
    queryFocus: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.brandName.trim() || !formData.website.trim()) {
      alert('Please provide both Brand Name and Website URL.');
      return;
    }
    onSubmit({
      ...formData,
      targetLanguage: language,
    });
  };

  const fillDemoData = () => {
    setFormData({
      brandName: 'HollyGlobe Singapore',
      website: 'sghollyglobe.com',
      industry: 'B2B Tech & SaaS',
      targetMarket: 'Singapore & Southeast Asia',
      competitors: 'Salesforce, Hubspot, Regional Partner A',
      targetLanguage: language,
      queryFocus: 'AI Search Visibility & GEO Optimization',
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-[#0b172a] text-white rounded-2xl border border-[#1e293b] shadow-2xl p-6 sm:p-10 relative overflow-hidden">
      {/* Background radial ambient lighting */}
      <div className="absolute -top-28 -right-28 w-96 h-96 bg-[#00f2fe]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-28 -left-28 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Bar Header & Language Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-[#1e293b]">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#0f172a] border border-[#00f2fe]/30 p-1 flex items-center justify-center text-[#00f2fe] shadow-sm">
            <img
              src="/hollyglobe_logo.svg"
              alt="HollyGlobe Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className="text-xs font-bold text-white tracking-wide uppercase block">
              Diagnostic Intake Form
            </span>
            <span className="text-[10px] text-[#00f2fe] font-medium">
              3-Minute Perplexity AI Model Scan
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={fillDemoData}
            className="text-xs font-bold text-[#00f2fe] hover:text-white transition-all flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#00f2fe]/10 hover:bg-[#00f2fe]/20 border border-[#00f2fe]/30 shadow-sm"
          >
            <span className="material-symbols-outlined text-sm">auto_fix_high</span>
            <span>Autofill Sample Brand</span>
          </button>

          {/* Language Selector */}
          <div className="flex items-center bg-[#0f172a] p-1 rounded-xl border border-[#334155]">
            <button
              type="button"
              onClick={() => onLanguageChange('zh')}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                language === 'zh'
                  ? 'bg-gradient-to-r from-[#00f2fe] to-[#0d9488] text-[#0b172a] font-extrabold shadow-sm'
                  : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              中文
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange('en')}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                language === 'en'
                  ? 'bg-gradient-to-r from-[#00f2fe] to-[#0d9488] text-[#0b172a] font-extrabold shadow-sm'
                  : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange('ms')}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                language === 'ms'
                  ? 'bg-gradient-to-r from-[#00f2fe] to-[#0d9488] text-[#0b172a] font-extrabold shadow-sm'
                  : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              Malay
            </button>
          </div>
        </div>
      </div>

      {/* Header Info */}
      <div className="text-center sm:text-left mb-8 space-y-3">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white flex items-center gap-2">
          <span>{t.formTitle}</span>
        </h2>
        <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed max-w-3xl">
          {t.formDesc}
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Brand Name */}
          <div>
            <label className="block text-xs font-semibold text-[#cbd5e1] uppercase tracking-wider mb-2">
              {t.brandNameLabel} <span className="text-[#00f2fe]">*</span>
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#64748b] text-lg">
                domain
              </span>
              <input
                type="text"
                required
                value={formData.brandName}
                onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                placeholder={t.brandNamePlaceholder}
                className="w-full bg-[#0f172a] border border-[#334155] rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-[#64748b] focus:outline-none focus:border-[#00f2fe] focus:ring-1 focus:ring-[#00f2fe] transition-all"
              />
            </div>
          </div>

          {/* Website URL */}
          <div>
            <label className="block text-xs font-semibold text-[#cbd5e1] uppercase tracking-wider mb-2">
              {t.websiteLabel} <span className="text-[#00f2fe]">*</span>
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#64748b] text-lg">
                language
              </span>
              <input
                type="text"
                required
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                placeholder={t.websitePlaceholder}
                className="w-full bg-[#0f172a] border border-[#334155] rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-[#64748b] focus:outline-none focus:border-[#00f2fe] focus:ring-1 focus:ring-[#00f2fe] transition-all"
              />
            </div>
          </div>

          {/* Industry */}
          <div>
            <label className="block text-xs font-semibold text-[#cbd5e1] uppercase tracking-wider mb-2">
              {t.industryLabel}
            </label>
            <select
              value={formData.industry}
              onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
              className="w-full bg-[#0f172a] border border-[#334155] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00f2fe] transition-all"
            >
              {Object.entries(t.industries).map(([key, label]) => (
                <option key={key} value={key} className="bg-[#0f172a] text-white">
                  {label}
                </option>
              ))}
            </select>
          </div>

          {/* Target Market */}
          <div>
            <label className="block text-xs font-semibold text-[#cbd5e1] uppercase tracking-wider mb-2">
              {t.targetMarketLabel}
            </label>
            <select
              value={formData.targetMarket}
              onChange={(e) => setFormData({ ...formData, targetMarket: e.target.value })}
              className="w-full bg-[#0f172a] border border-[#334155] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00f2fe] transition-all"
            >
              {Object.entries(t.markets).map(([key, label]) => (
                <option key={key} value={key} className="bg-[#0f172a] text-white">
                  {label}
                </option>
              ))}
            </select>
          </div>

          {/* Competitors */}
          <div>
            <label className="block text-xs font-semibold text-[#cbd5e1] uppercase tracking-wider mb-2">
              {t.competitorsLabel}
            </label>
            <input
              type="text"
              value={formData.competitors}
              onChange={(e) => setFormData({ ...formData, competitors: e.target.value })}
              placeholder={t.competitorsPlaceholder}
              className="w-full bg-[#0f172a] border border-[#334155] rounded-xl px-4 py-3 text-sm text-white placeholder-[#64748b] focus:outline-none focus:border-[#00f2fe] transition-all"
            />
          </div>

          {/* Query Focus */}
          <div>
            <label className="block text-xs font-semibold text-[#cbd5e1] uppercase tracking-wider mb-2">
              {t.queryFocusLabel}
            </label>
            <input
              type="text"
              value={formData.queryFocus}
              onChange={(e) => setFormData({ ...formData, queryFocus: e.target.value })}
              placeholder={t.queryFocusPlaceholder}
              className="w-full bg-[#0f172a] border border-[#334155] rounded-xl px-4 py-3 text-sm text-white placeholder-[#64748b] focus:outline-none focus:border-[#00f2fe] transition-all"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#1e293b]">
          <p className="text-xs text-[#64748b] flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm text-[#00f2fe]">verified_user</span>
            <span>Free diagnostic demo. Server-side Perplexity AI search scan.</span>
          </p>

          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#00f2fe] to-[#0d9488] text-[#0b172a] font-extrabold text-sm hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-[#00f2fe]/20 flex items-center justify-center gap-2"
          >
            <span>{t.submitButton}</span>
            <span className="material-symbols-outlined text-base font-bold">arrow_forward</span>
          </button>
        </div>
      </form>
    </div>
  );
};
