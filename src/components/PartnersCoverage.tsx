import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const PLATFORMS = [
  { name: 'Ernie Bot', fullName: 'Baidu Ernie Bot', nodeCount: '420+ Nodes' },
  { name: 'Tongyi', fullName: 'Alibaba Tongyi Qianwen', nodeCount: '310+ Nodes' },
  { name: 'Kimi', fullName: 'Moonshot Kimi', nodeCount: '280+ Nodes' },
  { name: 'Spark', fullName: 'iFlytek Spark', nodeCount: '210+ Nodes' },
  { name: 'Hunyuan', fullName: 'Tencent Hunyuan', nodeCount: '350+ Nodes' },
];

export const PartnersCoverage: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="py-12 px-6 max-w-[1280px] mx-auto border-b border-[#c2c6d7]">
      <div className="text-center mb-8">
        <span className="text-xs font-mono-code font-bold uppercase tracking-widest text-[#727685]">
          {language === 'zh' ? '中国核心 AI 大模型能见度覆盖' : language === 'ja' ? '中国主要AIモデル可視性カバレッジ' : language === 'ms' ? 'LIPUTAN PLATFORM AI CHINA' : language === 'vi' ? 'PHỦ SÓNG NỀN TẢNG AI TRUNG QUỐC' : 'CHINA AI PLATFORM COVERAGE'}
        </span>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
        {PLATFORMS.map((plat, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-5 py-3 bg-white border border-[#c2c6d7] rounded-lg shadow-xs hover:border-[#0056c5] hover:shadow-md transition-all group"
          >
            <div className="w-3 h-3 rounded-full bg-[#0056c5] group-hover:scale-125 transition-transform"></div>
            <div>
              <div className="font-extrabold text-[#0b1c30] text-base tracking-tight font-mono-code">
                {plat.name}
              </div>
              <div className="text-[11px] text-[#727685] font-medium">
                {plat.nodeCount}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
