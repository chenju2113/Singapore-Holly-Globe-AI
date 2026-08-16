import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onOpenGeoAudit: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultation,
  onOpenGeoAudit,
}) => {
  const { t, language } = useLanguage();

  return (
    <section className="pt-32 pb-16 px-6 max-w-[1280px] mx-auto grid-signal">
      <div className="max-w-4xl">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#eff4ff] border border-[#d9e2ff] text-[#0056c5] text-xs font-semibold rounded uppercase tracking-wider mb-6 font-mono-code">
          <span className="w-2 h-2 rounded-full bg-[#0056c5] animate-pulse"></span>
          <span>{t.hero_badge}</span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0b1c30] tracking-tight leading-[1.1] mb-6">
          {language === 'zh' ? (
            <>让您的品牌在中国 <span className="text-[#0056c5]">AI 搜索引擎生态中触手可及。</span></>
          ) : language === 'ja' ? (
            <>中国の <span className="text-[#0056c5]">AI検索エコシステム</span> で、確固たるブランド存在感を。</>
          ) : language === 'ms' ? (
            <>Jadikan Jenama Anda Mudah Ditemui Dalam <span className="text-[#0056c5]">Ekosistem Carian AI China.</span></>
          ) : language === 'vi' ? (
            <>Giúp thương hiệu của bạn xuất hiện nổi bật trong <span className="text-[#0056c5]">hệ sinh thái AI Trung Quốc.</span></>
          ) : (
            <>Enter China with authoritative <br className="hidden sm:inline" /><span className="text-[#0056c5]">AI search visibility.</span></>
          )}
        </h1>

        {/* Hero Paragraph */}
        <p className="text-lg sm:text-xl text-[#424654] leading-relaxed mb-8 max-w-3xl">
          {t.hero_subtitle}
        </p>

        {/* Hero CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="primary-btn px-8 py-4 rounded font-semibold text-base flex items-center justify-center gap-3 shadow-md hover:scale-[1.01] transition-all whitespace-nowrap"
          >
            <span>{t.hero_cta_consultation}</span>
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>

          <button
            onClick={onOpenGeoAudit}
            className="secondary-btn px-8 py-4 rounded font-semibold text-base flex items-center justify-center gap-2 hover:bg-[#eff4ff] transition-all"
          >
            <span className="material-symbols-outlined text-lg text-[#0056c5]">auto_awesome</span>
            <span>{language === 'zh' ? '免费获取中国 AI 能见度评估' : language === 'ja' ? '中国AI可視性無料診断をリクエスト' : language === 'ms' ? 'Minta Ujian Keterlihatan AI China' : language === 'vi' ? 'Yêu cầu kiểm tra hiển thị AI Trung Quốc' : 'Request Your China AI Visibility Test'}</span>
          </button>
        </div>

        {/* Who this is for Qualifier */}
        <div className="mt-8 pt-6 border-t border-[#d9e2ff]/80 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#eff4ff] border border-[#d9e2ff] text-[#0056c5] text-[11px] font-mono-code font-bold uppercase rounded mb-2">
            <span className="material-symbols-outlined text-xs">target</span>
            <span>{language === 'zh' ? '服务适用对象' : language === 'ja' ? '対象企業・適合性' : language === 'ms' ? 'UNTUK SIAPA PERKHIDMATAN INI' : language === 'vi' ? 'DÀNH CHO AI' : 'WHO THIS IS FOR'}</span>
          </div>
          <p className="text-sm sm:text-base font-bold text-[#0b1c30] leading-snug">
            {language === 'zh' ? '专为准备开拓中国市场的新加坡和马来西亚制造商、医疗供应商、工业出口商以及 B2B 企业量身打造。' : language === 'ja' ? '中国市場への進出・事業拡大を目指すシンガポールおよび東南アジアの製造業、医療サプライヤー、工業輸出企業、B2B企業のために設計されています。' : language === 'ms' ? 'Dibina untuk pengilang, pembekal perubatan, dan syarikat B2B Singapura & Malaysia yang bersedia memasuki China.' : language === 'vi' ? 'Dành cho các nhà sản xuất, nhà cung cấp y tế và doanh nghiệp B2B Singapore & Malaysia đang chuẩn bị tiến vào Trung Quốc.' : 'Built for Singapore and Malaysia manufacturers, medical suppliers, industrial exporters, and B2B firms preparing to enter China.'}
          </p>
          <p className="text-xs sm:text-sm text-[#727685] mt-1.5">
            {language === 'zh' ? '特别适合在客户发起业务询盘前需要进行深入技术产品或专业服务对比研究的企业。' : language === 'ja' ? '購入・商談の前に、技術仕様や専門サービスの詳細な比較検討が行われる商材・業界に特に最適です。' : language === 'ms' ? 'Sangat relevan untuk syarikat yang menjual produk teknikal atau perkhidmatan profesional.' : language === 'vi' ? 'Đặc biệt phù hợp cho các công ty cung cấp sản phẩm kỹ thuật hoặc dịch vụ chuyên môn cao.' : 'Especially relevant for companies selling technical products or professional services that buyers research before inquiry.'}
          </p>
        </div>

        {/* Trust Note */}
        <div className="mt-8 flex items-center gap-6 text-xs text-[#727685] font-medium">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-base text-[#0056c5]">verified</span>
            <span>{language === 'zh' ? '新加坡线上咨询' : language === 'ja' ? 'シンガポールオンライン相談' : language === 'ms' ? 'Penasihat Dalam Talian SG' : language === 'vi' ? 'Tư vấn trực tuyến SG' : 'Singapore Online Advisory'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-base text-[#0056c5]">gavel</span>
            <span>{language === 'zh' ? '网信办 AI 算法备案合规' : language === 'ja' ? 'CAC AIアルゴリズム届出適合' : language === 'ms' ? 'Pematuhan AI CAC China' : language === 'vi' ? 'Tuân thủ AI CAC Trung Quốc' : 'CAC AI Regulatory Compliance'}</span>
          </div>
          <div className="flex items-center gap-1.5 hidden md:flex">
            <span className="material-symbols-outlined text-base text-[#0056c5]">hub</span>
            <span>{language === 'zh' ? '跨境 Vector & RAG 准备度' : language === 'ja' ? '越境 Vector & RAG 適合性' : language === 'ms' ? 'Kesediaan Vector Rentas Sempadan' : language === 'vi' ? 'Sẵn sàng Vector xuyên biên giới' : 'Cross-Border Vector Readiness'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
