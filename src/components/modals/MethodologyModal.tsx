import React from 'react';
import { METHODOLOGY_STEPS } from '../../data/mockData';

interface MethodologyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const MethodologyModal: React.FC<MethodologyModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white border border-[#c2c6d7] rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#727685] hover:text-[#0b1c30] p-1.5 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Header */}
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-mono-code font-bold text-[#0056c5] uppercase bg-[#eff4ff] px-2.5 py-1 rounded border border-[#d9e2ff] mb-2">
            <span className="material-symbols-outlined text-sm">hub</span>
            <span>FRAMEWORK ARCHITECTURE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c30]">
            The HollyGlobe GEO Methodology
          </h2>
          <p className="text-xs sm:text-sm text-[#424654] mt-1">
            End-to-end framework for establishing generative AI search authority in mainland China.
          </p>
        </div>

        {/* Steps List */}
        <div className="space-y-4 pt-2">
          {METHODOLOGY_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="p-5 bg-[#f8f9ff] border border-[#d9e2ff] rounded-xl flex items-start gap-4 hover:border-[#0056c5] transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[#0056c5] text-white flex items-center justify-center font-mono-code font-bold text-base shrink-0">
                {step.step}
              </div>

              <div className="space-y-1">
                <h3 className="font-bold text-[#0b1c30] text-base sm:text-lg">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#424654] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Footer */}
        <div className="pt-4 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="primary-btn flex-1 py-3 rounded-lg font-semibold text-xs flex items-center justify-center gap-2"
          >
            <span>Consult on Implementation</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
          <button
            onClick={onClose}
            className="secondary-btn py-3 px-6 rounded-lg font-semibold text-xs"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
