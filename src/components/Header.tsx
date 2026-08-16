import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LANGUAGE_OPTIONS } from '../data/translations';

interface HeaderProps {
  currentView: 'home' | 'citation' | 'faq' | 'blog' | 'caseStudy';
  onNavigate: (view: 'home' | 'citation' | 'faq' | 'blog' | 'caseStudy') => void;
  onOpenConsultation: () => void;
  onOpenGeoAudit: () => void;
  onOpenCaseStudies: () => void;
  onOpenMethodology: () => void;
  onNavigateCaseStudy: () => void;
  onNavigateFitnessCaseStudy: () => void;
  onNavigateYanwoCaseStudy: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  onOpenConsultation,
  onOpenGeoAudit,
  onOpenCaseStudies,
  onOpenMethodology,
  onNavigateCaseStudy,
  onNavigateFitnessCaseStudy,
  onNavigateYanwoCaseStudy,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const { language, setLanguage, t, currentOption } = useLanguage();

  const handleNavToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (currentView !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0b172a]/95 backdrop-blur-md border-b border-[#1e293b] text-white">
      <div className="flex justify-between items-center h-20 px-6 max-w-[1280px] mx-auto">
        {/* Logo */}
        <button
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group text-left focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-[#0f172a] border border-[#00f2fe]/30 p-1 flex items-center justify-center shadow-md group-hover:border-[#00f2fe] group-hover:scale-105 transition-all">
            <img
              src="/hollyglobe_logo.svg"
              alt="HollyGlobe Singapore Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold text-white tracking-tight flex items-center gap-1.5">
              HollyGlobe <span className="text-[#00f2fe] font-semibold text-xs sm:inline bg-[#00f2fe]/10 px-2 py-0.5 rounded border border-[#00f2fe]/30">Singapore</span>
            </span>
            <span className="text-[10px] text-[#94a3b8] font-medium tracking-wider uppercase">
              {language === 'zh' ? '新加坡 · 中国 AI 能见度战略伙伴' : language === 'ja' ? 'シンガポール · 中国AI可視化パートナー' : 'Singapore · China AI Visibility Partner'}
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-xs sm:text-sm font-semibold text-[#cbd5e1]">
          {/* Main Homepage */}
          <button
            onClick={() => onNavigate('home')}
            className={`transition-colors py-1 ${
              currentView === 'home'
                ? 'text-[#00f2fe] border-b-2 border-[#00f2fe]'
                : 'hover:text-[#00f2fe]'
            }`}
          >
            {language === 'zh' ? '首页' : language === 'ms' ? 'Utama' : language === 'vi' ? 'Trang chủ' : language === 'ja' ? 'ホーム' : 'Home'}
          </button>

          {/* AI Citation Page Link */}
          <button
            onClick={() => onNavigate('citation')}
            className={`transition-all py-1 px-3 rounded-lg flex items-center gap-1.5 whitespace-nowrap ${
              currentView === 'citation'
                ? 'bg-[#00f2fe]/15 text-[#00f2fe] border border-[#00f2fe]/40 font-bold shadow-sm'
                : 'bg-[#0f172a] text-[#00f2fe] hover:bg-[#00f2fe]/10 border border-[#00f2fe]/20'
            }`}
          >
            <span className="material-symbols-outlined text-base">radar</span>
            <span className="whitespace-nowrap">{t.nav_geo_engine}</span>
            <span className="text-[9px] bg-[#00f2fe] text-[#0b172a] font-extrabold px-1.5 py-0.2 rounded uppercase whitespace-nowrap">
              LIVE
            </span>
          </button>

          <button
            onClick={() => handleNavToSection('product-matrix')}
            className="hover:text-[#00f2fe] transition-colors"
          >
            {t.nav_product_matrix}
          </button>
          {/* Case Studies & Methodology Dropdown */}
          <div className="relative group">
            <button
              onClick={onOpenCaseStudies}
              className="hover:text-[#00f2fe] transition-colors py-1 flex items-center gap-1"
            >
              <span>{t.nav_case_studies}</span>
              <span className="material-symbols-outlined text-xs transition-transform group-hover:rotate-180">
                expand_more
              </span>
            </button>
            <div className="absolute left-0 top-full pt-1.5 hidden group-hover:block w-44 z-50">
              <div className="bg-[#0b172a] border border-[#1e293b] rounded-xl shadow-2xl py-1.5 overflow-hidden backdrop-blur-md">
                <button
                  onClick={() => {
                    onOpenMethodology();
                  }}
                  className="w-full text-left px-4 py-2 text-xs font-semibold text-[#cbd5e1] hover:text-[#00f2fe] hover:bg-[#1e293b]/70 flex items-center justify-between transition-colors"
                >
                  <span>{t.nav_methodology}</span>
                </button>
                <button
                  onClick={() => {
                    onNavigateCaseStudy();
                  }}
                  className="w-full text-left px-4 py-2 text-xs font-semibold text-[#cbd5e1] hover:text-[#00f2fe] hover:bg-[#1e293b]/70 flex items-center justify-between transition-colors border-t border-[#1e293b]/50"
                >
                  <span>{language === 'zh' ? '教育行业成功案例' : 'Featured EDU Case'}</span>
                </button>
                <button
                  onClick={() => {
                  onNavigateFitnessCaseStudy();
                }}
                className="w-full text-left px-4 py-2 text-xs font-semibold text-[#cbd5e1] hover:text-[#00f2fe] hover:bg-[#1e293b]/70 flex items-center justify-between transition-colors border-t border-[#1e293b]/50"
                >
                  <span>{language === 'zh' ? '健身 KOL 成功案例' : 'Fitness KOL Case'}</span>
                </button>
                <button
                  onClick={() => {
                    onNavigateYanwoCaseStudy();
                  }}
                  className="w-full text-left px-4 py-2 text-xs font-semibold text-[#cbd5e1] hover:text-[#00f2fe] hover:bg-[#1e293b]/70 flex items-center justify-between transition-colors border-t border-[#1e293b]/50"
                >
                  <span>{language === 'zh' ? '小仙炖燕窝成功案例' : 'Xiaoxiandun Case'}</span>
                </button>
              </div>
            </div>
          </div>
          <button
            onClick={() => onNavigate('faq')}
            className={`transition-colors py-1 ${
              currentView === 'faq'
                ? 'text-[#00f2fe] border-b-2 border-[#00f2fe]'
                : 'hover:text-[#00f2fe]'
            }`}
          >
            {t.nav_faq}
          </button>
          <button
            onClick={() => onNavigate('blog')}
            className={`transition-colors py-1 ${
              currentView === 'blog'
                ? 'text-[#00f2fe] border-b-2 border-[#00f2fe]'
                : 'hover:text-[#00f2fe]'
            }`}
          >
            Insights
          </button>
        </nav>

        {/* Actions & Language Switcher */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              onBlur={() => setTimeout(() => setLangDropdownOpen(false), 200)}
              className="px-3 py-2 rounded-lg bg-[#0f172a] border border-[#1e293b] hover:border-[#00f2fe]/50 text-xs font-semibold flex items-center gap-2 text-[#cbd5e1] hover:text-[#00f2fe] transition-all shadow-sm"
              title={t.nav_select_language}
            >
              <span className="text-sm">{currentOption.flag}</span>
              <span>{currentOption.label}</span>
              <span className="material-symbols-outlined text-xs">expand_more</span>
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-44 bg-[#0b172a] border border-[#1e293b] rounded-xl shadow-2xl py-1.5 z-50 backdrop-blur-md">
                <div className="px-3 py-1 text-[10px] font-bold text-[#64748b] uppercase tracking-wider border-b border-[#1e293b] mb-1">
                  {t.nav_select_language}
                </div>
                {LANGUAGE_OPTIONS.map((opt) => (
                  <button
                    key={opt.code}
                    onClick={() => {
                      setLanguage(opt.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-2 text-xs font-medium flex items-center justify-between transition-colors ${
                      language === opt.code
                        ? 'bg-[#00f2fe]/10 text-[#00f2fe] font-bold'
                        : 'text-[#cbd5e1] hover:bg-[#1e293b]/60 hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{opt.flag}</span>
                      <span>{opt.label}</span>
                    </span>
                    {language === opt.code && (
                      <span className="material-symbols-outlined text-xs text-[#00f2fe]">check</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={onOpenConsultation}
            className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#00f2fe] to-[#0d9488] text-[#0b172a] font-extrabold text-xs flex items-center gap-1.5 shadow-md hover:brightness-110 transition-all whitespace-nowrap"
          >
            <span>{t.nav_request_consultation}</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0b172a] border-b border-[#1e293b] px-6 py-4 space-y-3 shadow-xl text-white">
          {/* Mobile Language Selector */}
          <div className="pb-3 border-b border-[#1e293b]">
            <p className="text-[10px] font-bold text-[#64748b] uppercase tracking-wider mb-2">
              {t.nav_select_language}
            </p>
            <div className="grid grid-cols-2 gap-2">
              {LANGUAGE_OPTIONS.map((opt) => (
                <button
                  key={opt.code}
                  onClick={() => setLanguage(opt.code)}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 border transition-all ${
                    language === opt.code
                      ? 'bg-[#00f2fe]/15 border-[#00f2fe] text-[#00f2fe]'
                      : 'bg-[#0f172a] border-[#1e293b] text-[#cbd5e1]'
                  }`}
                >
                  <span>{opt.flag}</span>
                  <span>{opt.label}</span>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigate('citation');
            }}
            className="w-full text-left py-2.5 px-3 rounded-lg bg-[#00f2fe]/10 text-[#00f2fe] font-bold text-sm flex items-center justify-between border border-[#00f2fe]/30"
          >
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span className="material-symbols-outlined text-base">radar</span>
              <span className="whitespace-nowrap">{t.nav_geo_engine}</span>
            </div>
            <span className="text-[9px] bg-[#00f2fe] text-[#0b172a] font-extrabold px-2 py-0.5 rounded">
              LIVE
            </span>
          </button>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigate('home');
            }}
            className="w-full text-left py-2 text-[#cbd5e1] font-medium text-sm"
          >
            {language === 'zh' ? '首页' : language === 'ms' ? 'Utama' : language === 'vi' ? 'Trang chủ' : language === 'ja' ? 'ホーム' : 'Home'}
          </button>

          <button
            onClick={() => handleNavToSection('product-matrix')}
            className="w-full text-left py-2 text-[#cbd5e1] font-medium text-sm"
          >
            {t.nav_product_matrix}
          </button>

          <div className="space-y-1">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCaseStudies();
              }}
              className="w-full text-left py-2 text-[#cbd5e1] font-medium text-sm"
            >
              {t.nav_case_studies}
            </button>
            <div className="pl-3 border-l border-[#1e293b] ml-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMethodology();
                }}
                className="w-full text-left py-1 text-[#94a3b8] hover:text-[#00f2fe] font-medium text-xs flex items-center gap-1.5 transition-colors"
              >
                <span className="material-symbols-outlined text-xs">subdirectory_arrow_right</span>
                <span>{t.nav_methodology}</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateCaseStudy();
                }}
                className="w-full text-left py-1 text-[#94a3b8] hover:text-[#00f2fe] font-medium text-xs flex items-center gap-1.5 transition-colors"
              >
                <span className="material-symbols-outlined text-xs">subdirectory_arrow_right</span>
                <span>{language === 'zh' ? '教育行业成功案例' : 'Featured EDU Case'}</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateFitnessCaseStudy();
                }}
                className="w-full text-left py-1 text-[#94a3b8] hover:text-[#00f2fe] font-medium text-xs flex items-center gap-1.5 transition-colors"
              >
                <span className="material-symbols-outlined text-xs">subdirectory_arrow_right</span>
                <span>{language === 'zh' ? '健身 KOL 成功案例' : 'Fitness KOL Case'}</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateYanwoCaseStudy();
                }}
                className="w-full text-left py-1 text-[#94a3b8] hover:text-[#00f2fe] font-medium text-xs flex items-center gap-1.5 transition-colors"
              >
                <span className="material-symbols-outlined text-xs">subdirectory_arrow_right</span>
                <span>{language === 'zh' ? '小仙炖燕窝成功案例' : 'Xiaoxiandun Case'}</span>
              </button>
            </div>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigate('faq');
            }}
            className="w-full text-left py-2 text-[#cbd5e1] font-medium text-sm"
          >
            {t.nav_faq}
          </button>

          <div className="pt-2 border-t border-[#1e293b]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00f2fe] to-[#0d9488] text-[#0b172a] font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#00f2fe]/20"
            >
              <span>{t.nav_request_consultation}</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
