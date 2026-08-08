import React, { useState } from 'react';
import { CASE_STUDIES } from '../../data/mockData';

interface CaseStudiesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const CaseStudiesModal: React.FC<CaseStudiesModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!isOpen) return null;

  const currentStudy = CASE_STUDIES[activeTab];

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
            <span className="material-symbols-outlined text-sm">verified</span>
            <span>PROVEN ENTERPRISE IMPACT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c30]">
            B2B Industry Case Studies
          </h2>
          <p className="text-xs sm:text-sm text-[#424654] mt-1">
            How Singapore companies achieved generative search authority in China.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[#c2c6d7] gap-2 overflow-x-auto pb-1">
          {CASE_STUDIES.map((study, idx) => (
            <button
              key={study.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 font-mono-code text-xs font-bold rounded-t whitespace-nowrap transition-colors ${
                activeTab === idx
                  ? 'bg-[#0056c5] text-white'
                  : 'bg-[#f8f9ff] text-[#727685] hover:text-[#0b1c30]'
              }`}
            >
              {study.logoText}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-6 animate-fade-in">
          {/* Main Stats Header */}
          <div className="p-6 bg-[#eff4ff] border border-[#d9e2ff] rounded-xl flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono-code font-bold text-[#0056c5] bg-white px-2 py-0.5 rounded border border-[#d9e2ff] uppercase">
                {currentStudy.industry}
              </span>
              <h3 className="text-2xl font-extrabold text-[#0b1c30] mt-1">
                {currentStudy.company}
              </h3>
            </div>

            <div className="flex gap-6 font-mono-code">
              <div>
                <div className="text-xs text-[#727685]">ROI Lift</div>
                <div className="text-2xl font-extrabold text-[#0056c5]">
                  {currentStudy.roi}
                </div>
              </div>
              <div>
                <div className="text-xs text-[#727685]">Visibility Gain</div>
                <div className="text-2xl font-extrabold text-emerald-600">
                  {currentStudy.visibilityGain}
                </div>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-[#0b1c30] uppercase font-mono-code">
              Executive Challenge & Solution
            </h4>
            <p className="text-sm text-[#424654] leading-relaxed bg-[#f8f9ff] p-4 rounded-lg border border-[#e2e8f0]">
              {currentStudy.summary}
            </p>
          </div>

          {/* Key Deliverables */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-[#0b1c30] uppercase font-mono-code">
              Key Technical Milestones
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#0b1c30]">
              {currentStudy.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-2 bg-white border border-[#e2e8f0] rounded">
                  <span className="material-symbols-outlined text-base text-emerald-600 shrink-0">
                    check_circle
                  </span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Modal Actions */}
          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="primary-btn flex-1 py-3 rounded-lg font-semibold text-xs flex items-center justify-center gap-2"
            >
              <span>Replicate Strategy for Your Industry</span>
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
    </div>
  );
};
