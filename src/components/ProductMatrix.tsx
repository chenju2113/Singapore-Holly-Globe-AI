import React from 'react';

interface ProductMatrixProps {
  onOpenGeoAudit: () => void;
  onOpenConsultation: () => void;
}

export const ProductMatrix: React.FC<ProductMatrixProps> = ({
  onOpenGeoAudit,
  onOpenConsultation,
}) => {
  return (
    <section id="product-matrix" className="py-20 px-6 max-w-[1280px] mx-auto border-t border-[#c2c6d7]">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-mono-code font-bold text-[#0056c5] uppercase tracking-wider bg-[#eff4ff] px-3 py-1 rounded border border-[#d9e2ff]">
          SUITE OF CAPABILITIES
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1c30] mt-4">
          Product Matrix
        </h2>
        <p className="text-[#424654] text-base mt-2">
          Enterprise tools purpose-built for generative search visibility and cross-border digital authority.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* GEO Agent Featured Card */}
        <div className="p-8 bg-white border border-[#0056c5] rounded-2xl shadow-md relative overflow-hidden flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#0056c5] animate-ping"></span>
                <span className="text-xs font-mono-code font-bold text-[#0056c5] uppercase">
                  FLAGSHIP PRODUCT
                </span>
              </div>
              <span className="text-xs font-mono-code bg-[#eff4ff] text-[#0056c5] font-bold px-3 py-1 rounded border border-[#d9e2ff]">
                v3.2 Active
              </span>
            </div>

            <div>
              <h3 className="text-3xl font-extrabold text-[#0b1c30]">
                GEO Agent
              </h3>
              <p className="text-base text-[#424654] mt-2 leading-relaxed max-w-3xl">
                Autonomous generative engine optimization platform that Continuously audits, injects, and guards brand vectors across Baidu Ernie, Alibaba Tongyi, Moonshot Kimi, iFlytek Spark, and Tencent Hunyuan.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              <div className="p-3.5 bg-[#f8f9ff] border border-[#d9e2ff] rounded-lg flex items-center gap-3">
                <span className="material-symbols-outlined text-xl text-[#0056c5]">analytics</span>
                <span className="text-xs font-bold text-[#0b1c30]">Vector-Space Auditing</span>
              </div>
              <div className="p-3.5 bg-[#f8f9ff] border border-[#d9e2ff] rounded-lg flex items-center gap-3">
                <span className="material-symbols-outlined text-xl text-[#0056c5]">auto_awesome</span>
                <span className="text-xs font-bold text-[#0b1c30]">Content Adaptive Generation</span>
              </div>
              <div className="p-3.5 bg-[#f8f9ff] border border-[#d9e2ff] rounded-lg flex items-center gap-3">
                <span className="material-symbols-outlined text-xl text-[#0056c5]">cell_tower</span>
                <span className="text-xs font-bold text-[#0b1c30]">Real-time Signal Injection</span>
              </div>
              <div className="p-3.5 bg-[#f8f9ff] border border-[#d9e2ff] rounded-lg flex items-center gap-3">
                <span className="material-symbols-outlined text-xl text-[#0056c5]">verified</span>
                <span className="text-xs font-bold text-[#0b1c30]">Authority Verification</span>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={onOpenGeoAudit}
              className="primary-btn px-6 py-3.5 rounded font-semibold text-sm flex items-center justify-center gap-2 shadow-sm"
            >
              <span className="material-symbols-outlined text-base">auto_awesome</span>
              <span>Activate GEO Agent</span>
            </button>
            <button
              onClick={onOpenConsultation}
              className="secondary-btn px-6 py-3.5 rounded font-semibold text-sm flex items-center justify-center gap-2"
            >
              <span>Consult with SG Team</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
