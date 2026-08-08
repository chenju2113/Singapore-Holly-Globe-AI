import React, { useEffect, useState } from 'react';
import { CitationLanguage } from '../../types/citation';
import { CITATION_TRANSLATIONS } from '../../data/citationTranslations';

interface LoadingStateProps {
  language: CitationLanguage;
  brandName: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({ language, brandName }) => {
  const t = CITATION_TRANSLATIONS[language];
  const steps = t.loadingSteps;

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 700);

    return () => clearInterval(interval);
  }, [steps.length]);

  const progressPercent = Math.min(100, Math.round(((currentStep + 1) / steps.length) * 100));

  return (
    <div className="max-w-2xl mx-auto bg-[#0b172a] text-white rounded-2xl border border-[#1e293b] shadow-2xl p-8 sm:p-12 text-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#00f2fe]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Radar Icon Animation */}
      <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-2 border-[#00f2fe]/30 animate-ping" />
        <div className="w-16 h-16 rounded-full bg-[#0f172a] border border-[#00f2fe]/50 p-2.5 flex items-center justify-center shadow-lg shadow-[#00f2fe]/30">
          <img
            src="/hollyglobe_logo.svg"
            alt="HollyGlobe Scanning"
            className="w-full h-full object-contain animate-pulse"
          />
        </div>
      </div>

      <h3 className="text-2xl font-bold text-white mb-2">{t.loadingTitle}</h3>
      <p className="text-sm text-[#94a3b8] mb-8">
        Scanning AI search model citations for <span className="text-[#00f2fe] font-semibold">{brandName}</span>
      </p>

      {/* Progress Bar */}
      <div className="w-full bg-[#0f172a] h-3 rounded-full border border-[#334155] overflow-hidden mb-8 p-0.5">
        <div
          className="bg-gradient-to-r from-[#00f2fe] to-[#0d9488] h-full rounded-full transition-all duration-500 shadow-md shadow-[#00f2fe]/50"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Steps List */}
      <div className="space-y-3 text-left max-w-lg mx-auto">
        {steps.map((stepText, idx) => {
          const isDone = idx < currentStep;
          const isCurrent = idx === currentStep;

          return (
            <div
              key={idx}
              className={`flex items-start gap-3 p-3 rounded-xl border transition-all text-xs sm:text-sm ${
                isDone
                  ? 'bg-[#0f172a]/80 border-[#1e293b] text-[#cbd5e1]'
                  : isCurrent
                  ? 'bg-[#00f2fe]/10 border-[#00f2fe]/40 text-[#00f2fe] font-semibold'
                  : 'bg-[#0f172a]/30 border-[#1e293b]/40 text-[#475569]'
              }`}
            >
              <div className="mt-0.5">
                {isDone ? (
                  <span className="material-symbols-outlined text-[#10b981] text-base">
                    check_circle
                  </span>
                ) : isCurrent ? (
                  <span className="material-symbols-outlined text-[#00f2fe] text-base animate-spin">
                    sync
                  </span>
                ) : (
                  <span className="material-symbols-outlined text-[#475569] text-base">
                    radio_button_unchecked
                  </span>
                )}
              </div>
              <span className="flex-1">{stepText}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
