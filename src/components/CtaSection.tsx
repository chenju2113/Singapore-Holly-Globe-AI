import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface CtaSectionProps {
  onOpenConsultation: () => void;
  onOpenMethodology: () => void;
  onOpenGeoAudit: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  onOpenConsultation,
  onOpenMethodology,
  onOpenGeoAudit,
}) => {
  const { language } = useLanguage();

  return (
    <section className="py-24 px-6 max-w-[1280px] mx-auto border-t border-[#c2c6d7] bg-[#0b1c30] text-white rounded-3xl my-12 shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient opacity-20 pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
        <span className="text-xs font-mono-code font-bold text-[#166ef1] bg-white/10 px-3.5 py-1.5 rounded-full uppercase tracking-widest border border-white/20">
          {language === 'zh' ? '开启您的中国 AI 能见度之旅' : language === 'ja' ? '中国AI検索可視化の第一歩を踏み出す' : language === 'ms' ? 'MULAKAN PERJALANAN AI CHINA ANDA' : language === 'vi' ? 'BẮT ĐẦU HÀNH TRÌNH AI TRUNG QUỐC' : 'START YOUR CHINA AI JOURNEY'}
        </span>

        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          {language === 'zh' ? '准备好布局中国市场了吗？' : language === 'ja' ? '中国市場でのAIプレゼンスを確立しませんか？' : language === 'ms' ? 'Bersedia untuk China?' : language === 'vi' ? 'Sẵn sàng tiến vào Trung Quốc?' : 'Ready for China?'}
        </h2>

        <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
          {language === 'zh' ? '与 HollyGlobe 新加坡团队合作，在百度文心一言、阿里通义千问、Kimi、讯飞星火与腾讯混元中确立您的品牌权威推荐。' : language === 'ja' ? 'HollyGlobe シンガポールと連携し、Baidu文心一言、Alibaba通義千問、Kimi、iFLYTEK星火、Tencent混元等において、確固たるブランド権威と推奨引用を獲得。' : language === 'ms' ? 'Bekerjasama dengan HollyGlobe Singapore untuk mengamankan kehadiran jenama anda merentasi platform AI China.' : language === 'vi' ? 'Hợp tác cùng HollyGlobe Singapore để xây dựng sự hiện diện uy tín của thương hiệu trên các AI Trung Quốc.' : "Partner with HollyGlobe Singapore to secure your brand's authoritative presence across Baidu Ernie, Tongyi, Kimi, Spark, and Hunyuan."}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenConsultation}
            className="primary-btn px-8 py-4 rounded-lg font-semibold text-base flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg hover:scale-105 transition-all whitespace-nowrap"
          >
            <span>{language === 'zh' ? '预约专业咨询' : language === 'ja' ? '個別相談を予約する' : language === 'ms' ? 'Minta Konsultasi' : language === 'vi' ? 'Yêu cầu tư vấn' : 'Request Consultation'}</span>
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>

          <button
            onClick={onOpenGeoAudit}
            className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg font-semibold text-base flex items-center justify-center gap-2 w-full sm:w-auto transition-all"
          >
            <span className="material-symbols-outlined text-lg text-emerald-400">auto_awesome</span>
            <span>{language === 'zh' ? '免费获取中国 AI 能见度评估' : language === 'ja' ? '無料・中国AI可視性診断を申し込む' : language === 'ms' ? 'Ujian Keterlihatan AI' : language === 'vi' ? 'Kiểm tra hiển thị AI' : 'Request Your China AI Visibility Test'}</span>
          </button>

          <button
            onClick={onOpenMethodology}
            className="text-slate-300 hover:text-white underline text-sm font-semibold px-4 py-2"
          >
            {language === 'zh' ? '查看 GEO 方法论' : language === 'ja' ? 'GEO手法・アーキテクチャを見る' : language === 'ms' ? 'Lihat Metodologi' : language === 'vi' ? 'Xem phương pháp luận' : 'View Methodology'}
          </button>
        </div>

        <div className="pt-8 text-xs text-slate-400 font-mono-code flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <span>🌐 {language === 'zh' ? '新加坡 · 线上 B2B 咨询' : language === 'ja' ? 'シンガポール · オンラインB2B戦略アドバイザリー' : language === 'ms' ? 'Singapore · Penasihat B2B Dalam Talian' : language === 'vi' ? 'Singapore · Tư vấn B2B trực tuyến' : 'Singapore · Online-First B2B Advisory'}</span>
          <span>•</span>
          <span>⚡ 100% {language === 'zh' ? '网信办算法合规' : language === 'ja' ? 'CACアルゴリズム届出適合' : language === 'ms' ? 'Patuh CAC China' : language === 'vi' ? 'Tuân thủ CAC' : 'CAC Compliant'}</span>
        </div>
      </div>
    </section>
  );
};
