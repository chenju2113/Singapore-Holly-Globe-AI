import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface WhoWeAreProps {
  onOpenConsultation: () => void;
}

export const WhoWeAre: React.FC<WhoWeAreProps> = ({ onOpenConsultation }) => {
  const { language } = useLanguage();

  return (
    <section className="py-20 px-6 max-w-[1280px] mx-auto border-t border-[#c2c6d7]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-mono-code font-bold text-[#0056c5] uppercase tracking-wider bg-[#eff4ff] px-3 py-1 rounded border border-[#d9e2ff]">
            {language === 'zh' ? '关于我们' : language === 'ms' ? 'TENTANG KAMI' : language === 'vi' ? 'VỀ CHÚNG TÔI' : 'WHO WE ARE'}
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1c30] tracking-tight">
            {language === 'zh' ? '新加坡 · 中国 AI 能见度战略伙伴' : language === 'ms' ? 'Singapura · Rakan Keterlihatan AI China' : language === 'vi' ? 'Singapore · Đối tác hiển thị AI Trung Quốc' : 'Singapore · China AI Visibility Partner'}
          </h2>

          <p className="text-[#424654] text-base sm:text-lg leading-relaxed">
            {language === 'zh'
              ? 'HollyGlobe 新加坡是一家专注线上的 B2B 战略咨询顾问机构，致力于帮助新加坡及东南亚企业在中国核心 AI 搜索生态中构建权威能见度、信任图谱与大模型推荐引用。'
              : language === 'ms'
              ? 'HollyGlobe Singapura ialah penasihat B2B dalam talian yang membantu jenama Singapura dan serantau membina keterlihatan, kepercayaan dan syor carian AI di China.'
              : language === 'vi'
              ? 'HollyGlobe Singapore là đơn vị tư vấn B2B trực tuyến giúp các thương hiệu Singapore & khu vực xây dựng hiển thị, niềm tin và gợi ý tìm kiếm AI tại TQ.'
              : 'HollyGlobe Singapore is an online-first B2B advisory helping Singapore and regional brands establish discoverability, trust, and AI search recommendations across China’s primary AI-first search environments.'}
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-white border border-[#c2c6d7] rounded-lg">
              <div className="text-3xl font-extrabold text-[#0056c5] font-mono-code">100%</div>
              <div className="text-xs font-bold text-[#0b1c30] mt-1">
                {language === 'zh' ? '线上咨询顾问' : language === 'ms' ? 'Konsultasi Dalam Talian' : language === 'vi' ? 'Tư vấn trực tuyến' : 'Online-First'}
              </div>
              <div className="text-[11px] text-[#727685]">
                {language === 'zh' ? '远程战略咨询与数字化服务' : language === 'ms' ? 'Konsultasi Maya & Penasihat Digital' : language === 'vi' ? 'Tư vấn từ xa & cố vấn kỹ thuật số' : 'Remote Consultation & Digital Advisory'}
              </div>
            </div>

            <div className="p-4 bg-white border border-[#c2c6d7] rounded-lg">
              <div className="text-3xl font-extrabold text-[#0056c5] font-mono-code">SG</div>
              <div className="text-xs font-bold text-[#0b1c30] mt-1">
                {language === 'zh' ? '新加坡总部基地' : language === 'ms' ? 'Pangkalan Singapura' : language === 'vi' ? 'Trụ sở Singapore' : 'Singapore Base'}
              </div>
              <div className="text-[11px] text-[#727685]">
                {language === 'zh' ? '跨境 AI 能见度专家团队' : language === 'ms' ? 'Pakar Keterlihatan AI Rentas Sempadan' : language === 'vi' ? 'Chuyên gia hiển thị AI xuyên biên giới' : 'Cross-Border AI Visibility Specialists'}
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onOpenConsultation}
              className="primary-btn px-6 py-3 rounded text-sm font-semibold flex items-center gap-2 shadow-xs"
            >
              <span>{language === 'zh' ? '预约新加坡线上咨询' : language === 'ms' ? 'Minta Konsultasi SG' : language === 'vi' ? 'Yêu cầu tư vấn SG' : 'Request a Remote Consultation'}</span>
              <span className="material-symbols-outlined text-base">calendar_month</span>
            </button>
          </div>
        </div>

        {/* Right Column (6 cols): Online Advisory Card */}
        <div className="lg:col-span-6">
          <div className="p-8 bg-white border border-[#c2c6d7] rounded-2xl shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-[#e2e8f0] pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-[#eff4ff] text-[#0056c5] flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-xl">language</span>
                </div>
                <div>
                  <div className="font-bold text-[#0b1c30] text-base">
                    {language === 'zh' ? '新加坡 B2B 线上咨询中心' : language === 'ms' ? 'Meja Penasihat B2B Dalam Talian SG' : language === 'vi' ? 'Bàn tư vấn B2B trực tuyến SG' : 'Online-First B2B Advisory Desk'}
                  </div>
                  <div className="text-xs text-[#727685]">
                    {language === 'zh' ? '新加坡 · 远程战略顾问对接' : language === 'ms' ? 'Singapura · Penglibatan Strategik Maya' : language === 'vi' ? 'Singapore · Kết nối chiến lược từ xa' : 'Singapore · Remote Strategic Engagement'}
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono-code bg-emerald-50 text-emerald-700 font-bold px-2.5 py-1 rounded border border-emerald-200">
                {language === 'zh' ? '实时在线' : 'ACTIVE'}
              </span>
            </div>

            <div className="space-y-3 text-sm text-[#424654]">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-base text-[#0056c5] mt-0.5">verified</span>
                <span>
                  {language === 'zh' ? '总部位于新加坡 · 全程远程支持东南亚区域企业' : language === 'ms' ? 'Berpusat di Singapura · Menyokong syarikat serantau secara maya' : language === 'vi' ? 'Trụ sở tại Singapore · Hỗ trợ doanh nghiệp khu vực từ xa' : 'Based in Singapore · Supporting regional enterprises remotely'}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-base text-[#0056c5]">mail</span>
                <a href="mailto:enquiry@sghollyglobe.com" className="hover:text-[#0056c5] underline font-medium">
                  enquiry@sghollyglobe.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-base text-[#0056c5]">schedule</span>
                <span>
                  {language === 'zh' ? '周一至周五: 09:00 - 18:00 (新加坡时间 / UTC+8)' : 'Mon - Fri: 09:00 - 18:00 (SGT / UTC+8)'}
                </span>
              </div>
            </div>

            <div className="p-4 bg-[#f8f9ff] border border-[#d9e2ff] rounded-lg flex items-center justify-between text-xs">
              <span className="font-semibold text-[#0b1c30]">
                {language === 'zh' ? '跨境服务专线' : language === 'ms' ? 'Talian Penasihat Rentas Sempadan' : language === 'vi' ? 'Đường dây tư vấn xuyên biên giới' : 'Cross-Border Advisory Line'}
              </span>
              <span className="font-mono-code text-[#0056c5] font-bold">
                {language === 'zh' ? '新加坡时间同步' : 'UTC+8 Synchronized'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
