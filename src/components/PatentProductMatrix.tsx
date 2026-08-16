import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface ProductItem {
  id: string;
  tag: string;
  badgeBg: string;
  badgeTextColor?: string;
  topAccent: string;
  aiColor: string;
  iconSymbol: string;
  desc1En: string;
  desc2En: string;
  desc1Zh: string;
  desc2Zh: string;
  desc1Ja: string;
  desc2Ja: string;
  desc1Ms: string;
  desc2Ms: string;
  desc1Vi: string;
  desc2Vi: string;
  url: string;
}

const PRODUCTS: ProductItem[] = [
  {
    id: 'reels',
    tag: 'Reels',
    badgeBg: 'bg-[#f59e0b]',
    topAccent: 'bg-[#f59e0b]',
    aiColor: 'text-[#f59e0b]',
    iconSymbol: 'movie',
    desc1En: 'Content AI',
    desc2En: 'Brand asset translator',
    desc1Zh: 'AI 营销短视频内容生成',
    desc2Zh: '品牌资产多语种智能化输出',
    desc1Ja: 'AIマーケティング動画生成',
    desc2Ja: 'ブランド資産の多言語自動展開',
    desc1Ms: 'Kandungan AI',
    desc2Ms: 'Penterjemah aset jenama',
    desc1Vi: 'Nội dung AI',
    desc2Vi: 'Chuyển đổi tài sản thương hiệu',
    url: 'reelsagent.com',
  },
  {
    id: 'geo',
    tag: 'GEO',
    badgeBg: 'bg-[#166ef1]',
    topAccent: 'bg-[#166ef1]',
    aiColor: 'text-[#166ef1]',
    iconSymbol: 'search',
    desc1En: 'AI platform search traffic',
    desc2En: 'and sales growth',
    desc1Zh: '中国 AI 搜索平台精准流量',
    desc2Zh: '与商业询盘转化增长',
    desc1Ja: '中国AI検索のターゲット流入',
    desc2Ja: 'および高確度商談リード獲得',
    desc1Ms: 'Trafik carian platform AI',
    desc2Ms: 'dan pertumbuhan jualan',
    desc1Vi: 'Lưu lượng tìm kiếm AI',
    desc2Vi: 'và tăng trưởng doanh số',
    url: 'geoagent.com.cn',
  },
  {
    id: 'seo',
    tag: 'SEO',
    badgeBg: 'bg-[#dc2626]',
    topAccent: 'bg-[#dc2626]',
    aiColor: 'text-[#dc2626]',
    iconSymbol: 'security',
    desc1En: 'AI semantic brand monitoring',
    desc2En: 'and AI anti-pollution',
    desc1Zh: 'AI 语义级品牌声誉监测',
    desc2Zh: '及防污染声誉护航',
    desc1Ja: 'AIセマンティック評判監視',
    desc2Ja: 'ブランド汚染防止・防衛ガード',
    desc1Ms: 'Pemantauan jenama semantik AI',
    desc2Ms: 'dan perlindungan anti-pencemaran AI',
    desc1Vi: 'Giám sát thương hiệu AI',
    desc2Vi: 'và bảo vệ chống ô nhiễm AI',
    url: 'seoagent.com.cn',
  },
  {
    id: 'gem',
    tag: 'GEM',
    badgeBg: 'bg-[#f97316]',
    topAccent: 'bg-[#f97316]',
    aiColor: 'text-[#f97316]',
    iconSymbol: 'rocket_launch',
    desc1En: 'Advertising for',
    desc2En: 'the AI era',
    desc1Zh: '面向 AI 时代的',
    desc2Zh: '智能广告引流解决方案',
    desc1Ja: '次世代AI時代に向けた',
    desc2Ja: 'インテリジェント広告ソリューション',
    desc1Ms: 'Pengiklanan untuk',
    desc2Ms: 'era AI',
    desc1Vi: 'Quảng cáo dành cho',
    desc2Vi: 'kỷ nguyên AI',
    url: 'ec.hlgtech.com',
  },
  {
    id: 'dragon',
    tag: 'Dragon',
    badgeBg: 'bg-[#ea580c]',
    topAccent: 'bg-[#ea580c]',
    aiColor: 'text-[#ea580c]',
    iconSymbol: 'smart_toy',
    desc1En: 'An intelligent marketing agent',
    desc2En: 'powered by Hermes/Openclaw',
    desc1Zh: '基于 Hermes/Openclaw 引擎的',
    desc2Zh: '智能自动化营销 Agent',
    desc1Ja: 'Hermes/Openclaw搭載の',
    desc2Ja: 'インテリジェント自動マーケティングAgent',
    desc1Ms: 'Ejen pemasaran pintar',
    desc2Ms: 'dikuasai Hermes/Openclaw',
    desc1Vi: 'Agent tiếp thị thông minh',
    desc2Vi: 'phát triển bởi Hermes/Openclaw',
    url: 'lm.hlgtech.com',
  },
];

interface PatentProductMatrixProps {
  onOpenConsultation?: () => void;
}

export const PatentProductMatrix: React.FC<PatentProductMatrixProps> = ({ onOpenConsultation }) => {
  const { language } = useLanguage();

  return (
    <section id="product-matrix" className="py-10 px-6 max-w-[1280px] mx-auto border-t border-[#c2c6d7] bg-[#f8f9ff]/80 space-y-8 scroll-mt-20">
      {/* Part 1: Algorithm Filing & Patent Compliance */}
      <div className="space-y-4 text-center">
        <div className="space-y-1">
          <span className="text-xs font-mono-code font-bold text-[#727685] tracking-wide uppercase">
            {language === 'zh' ? '网信办监管备案与合规认证' : language === 'ja' ? 'CAC規制届出＆アルゴリズム認証' : language === 'ms' ? 'PEMATUHAN ALGORITMA' : language === 'vi' ? 'TUÂN THỦ THUẬT TOÁN' : 'Compliance'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c30]">
            {language === 'zh' ? '中国网信办生成式 AI 算法备案' : language === 'ja' ? '中国国家インターネット情報弁公室（CAC）生成AIアルゴリズム届出済' : language === 'ms' ? 'Pendaftaran Algoritma CAC' : language === 'vi' ? 'Đăng ký thuật toán CAC' : 'Algorithm Filing'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {/* Filing Card 1 */}
          <div className="p-4 sm:p-5 bg-white border border-[#e2e8f0] rounded-xl shadow-xs hover:border-[#0056c5] transition-all flex items-center gap-3.5 text-left">
            <div className="w-10 h-10 rounded-lg bg-[#eff4ff] text-[#166ef1] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-xl">verified_user</span>
            </div>
            <div className="space-y-0.5">
              <h3 className="font-extrabold text-[#0b1c30] text-sm">
                reelsagent {language === 'zh' ? '文本生成算法' : language === 'ja' ? 'テキスト生成アルゴリズム' : 'Text Generation Algorithm'}
              </h3>
              <p className="text-xs font-mono-code text-[#727685]">
                {language === 'zh' ? '备案号' : language === 'ja' ? '届出番号' : 'Filing No.'} <span className="font-semibold text-[#0b1c30]">440105279266201250013</span>
              </p>
            </div>
          </div>

          {/* Filing Card 2 */}
          <div className="p-4 sm:p-5 bg-white border border-[#e2e8f0] rounded-xl shadow-xs hover:border-[#0056c5] transition-all flex items-center gap-3.5 text-left">
            <div className="w-10 h-10 rounded-lg bg-[#eff4ff] text-[#166ef1] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-xl">verified_user</span>
            </div>
            <div className="space-y-0.5">
              <h3 className="font-extrabold text-[#0b1c30] text-sm">
                Hollyglobe {language === 'zh' ? '文本生成算法' : language === 'ja' ? 'テキスト生成アルゴリズム' : 'Text Generation Algorithm'}
              </h3>
              <p className="text-xs font-mono-code text-[#727685]">
                {language === 'zh' ? '备案号' : language === 'ja' ? '届出番号' : 'Filing No.'} <span className="font-semibold text-[#0b1c30]">440105284740101250017</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: AI Marketing Product Matrix */}
      <div className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c30]">
          {language === 'zh' ? 'AI 智能营销矩阵与 Agent 解决方案' : language === 'ja' ? 'AIマーケティング製品マトリクス＆Agentソリューション' : language === 'ms' ? 'Matriks Produk Pemasaran AI' : language === 'vi' ? 'Ma trận sản phẩm tiếp thị AI' : 'AI Marketing Product Matrix'}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {PRODUCTS.map((prod) => {
            const desc1 = language === 'zh' ? prod.desc1Zh : language === 'ja' ? prod.desc1Ja : language === 'ms' ? prod.desc1Ms : language === 'vi' ? prod.desc1Vi : prod.desc1En;
            const desc2 = language === 'zh' ? prod.desc2Zh : language === 'ja' ? prod.desc2Ja : language === 'ms' ? prod.desc2Ms : language === 'vi' ? prod.desc2Vi : prod.desc2En;

            return (
              <div
                key={prod.id}
                className="bg-white border border-[#e2e8f0] rounded-xl shadow-xs hover:shadow-md hover:border-[#0056c5] transition-all relative overflow-hidden flex flex-col p-4 space-y-2.5"
              >
                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${prod.topAccent}`} />

                {/* Header row with Avatar & Badge */}
                <div className="flex items-center gap-2 pt-0.5">
                  <div className="w-8 h-8 rounded-full bg-[#f0f4fd] border border-[#e2e8f0] flex items-center justify-center shrink-0 text-[#0b1c30]">
                    <span className="material-symbols-outlined text-lg">{prod.iconSymbol}</span>
                  </div>

                  <span
                    className={`text-[10px] font-bold text-white px-2 py-0.5 rounded ${prod.badgeBg}`}
                  >
                    {prod.tag}
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="text-lg font-extrabold text-[#0b1c30]">
                  Agent <span className={prod.aiColor}>Ai</span>
                </h3>

                {/* Description */}
                <div className="text-xs text-[#424654] leading-snug space-y-0.5 flex-1">
                  <p>{desc1}</p>
                  <p>{desc2}</p>
                </div>

                {/* Action Link */}
                <div className="pt-2 border-t border-[#e2e8f0]">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full text-left text-xs font-semibold text-[#0056c5] hover:text-[#166ef1] flex items-center justify-between group"
                  >
                    <span>{language === 'zh' ? '咨询此方案' : language === 'ja' ? 'このAgentについて相談' : language === 'ms' ? 'Tanya Ejen Ini' : language === 'vi' ? 'Tư vấn Agent này' : 'Enquire Agent'}</span>
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-0.5 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
