import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const ValueStrip: React.FC = () => {
  const { language } = useLanguage();

  const HIGHLIGHTS = [
    {
      tag: 'TARGET',
      label: language === 'zh' ? '服务新加坡企业' : language === 'ms' ? 'Dibina untuk Syarikat SG' : language === 'vi' ? 'Dành cho công ty SG' : 'Built for SG Companies',
      icon: 'location_city'
    },
    {
      tag: 'COVERAGE',
      label: language === 'zh' ? '覆盖中国主流 AI 平台' : language === 'ms' ? 'Semua Platform AI China' : language === 'vi' ? 'Tất cả nền tảng AI TQ' : 'All China AI Platforms',
      icon: 'hub'
    },
    {
      tag: 'LEGAL',
      label: language === 'zh' ? '中国算法法规合规' : language === 'ms' ? 'Pematuhan Perundangan' : language === 'vi' ? 'Tuân thủ pháp lý AI' : 'Compliance-aware',
      icon: 'gavel'
    },
    {
      tag: 'MARKET',
      label: language === 'zh' ? '深耕 B2B 与专业服务' : language === 'ms' ? 'B2B & Perkhidmatan Pro' : language === 'vi' ? 'B2B & Dịch vụ chuyên nghiệp' : 'B2B & Pro Services',
      icon: 'business_center'
    },
    {
      tag: 'SUPPORT',
      label: language === 'zh' ? '新加坡团队远程顾问服务' : language === 'ms' ? 'Konsultasi Tempatan SG' : language === 'vi' ? 'Tư vấn trực tiếp SG' : 'Local SG Consultation',
      icon: 'support_agent'
    },
    {
      tag: 'EXECUTION',
      label: language === 'zh' ? '无缝直通中国市场' : language === 'ms' ? 'Kemasukan Terus China' : language === 'vi' ? 'Tiếp cận trực tiếp Trung Quốc' : 'Direct China Entry',
      icon: 'rocket_launch'
    }
  ];

  return (
    <section className="py-8 bg-[#f0f4fd] border-y border-[#c2c6d7]">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {HIGHLIGHTS.map((item, idx) => (
          <div
            key={idx}
            className="p-3 bg-white/80 border border-[#d9e2ff] rounded flex flex-col justify-between hover:border-[#0056c5] transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono-code font-bold text-[#0056c5] bg-[#eff4ff] px-1.5 py-0.5 rounded uppercase">
                {item.tag}
              </span>
              <span className="material-symbols-outlined text-lg text-[#0056c5]">
                {item.icon}
              </span>
            </div>
            <span className="text-xs font-bold text-[#0b1c30] leading-snug">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
