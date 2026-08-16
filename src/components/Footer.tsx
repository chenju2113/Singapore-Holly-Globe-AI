import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigateCitation?: () => void;
  onNavigateFaq?: () => void;
  onNavigateCaseStudy?: () => void;
  onNavigateFitnessCaseStudy?: () => void;
  onOpenConsultation: () => void;
  onOpenGeoAudit: () => void;
  onOpenCaseStudies: () => void;
  onOpenMethodology: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateCitation,
  onNavigateFaq,
  onNavigateCaseStudy,
  onNavigateFitnessCaseStudy,
  onOpenConsultation,
  onOpenGeoAudit,
  onOpenCaseStudies,
  onOpenMethodology,
}) => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-[#0b1c30] text-slate-300 pt-16 pb-12 border-t border-[#c2c6d7]/30">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
        {/* Col 1 & 2: Brand Info */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#0f172a] border border-[#00f2fe]/30 p-1 flex items-center justify-center shadow-md">
              <img
                src="/hollyglobe_logo.svg"
                alt="HollyGlobe Singapore Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              HollyGlobe <span className="text-[#00f2fe] font-semibold text-xs bg-[#00f2fe]/10 px-2 py-0.5 rounded border border-[#00f2fe]/30">Singapore</span>
            </span>
          </div>

          <p className="text-xs font-mono-code font-bold text-[#00f2fe] uppercase tracking-wider">
            {language === 'zh' ? '新加坡 · 中国 AI 能见度伙伴' : language === 'ms' ? 'Singapura · Rakan Keterlihatan AI China' : language === 'vi' ? 'Singapore · Đối tác hiển thị AI Trung Quốc' : language === 'ja' ? 'シンガポール · 中国 AI検索可視性パートナー' : 'Singapore · China AI Visibility Partner'}
          </p>

          <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
            {language === 'zh' ? 'HollyGlobe 新加坡是一家线上优先的 B2B 咨询机构，帮助新加坡与东南亚品牌提升在目标中国市场中的 AI 能见度与 GEO 准备度。' : language === 'ms' ? 'HollyGlobe Singapore ialah penasihat B2B atas talian yang membantu jenama Singapura dan serantau meningkatkan keterlihatan AI.' : language === 'vi' ? 'HollyGlobe Singapore là đơn vị tư vấn B2B ưu tiên trực tuyến giúp các thương hiệu khu vực tăng cường hiển thị AI.' : language === 'ja' ? 'HollyGlobe シンガポールは、シンガポールおよび東南アジアのブランドが中国市場におけるAI検索での可視性とGEO適合度を高めるためのオンライン特化型B2Bアドバイザリーです。' : 'HollyGlobe Singapore is an online-first B2B advisory helping Singapore and regional brands improve AI visibility and GEO readiness for China-market discovery.'}
          </p>

          <div className="text-xs text-slate-400 font-mono-code space-y-1">
            <p>{language === 'zh' ? '立足新加坡 · 线上优先远程咨询服务' : language === 'ms' ? 'Berpusat di Singapura · Penasihat Dalam Talian' : language === 'vi' ? 'Trụ sở tại Singapore · Tư vấn trực tuyến' : language === 'ja' ? 'シンガポール拠点 · 完全オンライン・リモート相談' : 'Based in Singapore · Online-First Remote Advisory'}</p>
            <p>
              Email:{' '}
              <a href="mailto:enquiry@sghollyglobe.com" className="text-[#00f2fe] hover:underline font-bold">
                enquiry@sghollyglobe.com
              </a>
            </p>
          </div>
        </div>

        {/* Col 3: Solutions */}
        <div className="space-y-3 text-sm">
          <div className="font-bold text-white uppercase text-xs font-mono-code tracking-wider text-[#166ef1]">
            {language === 'zh' ? '解决方案' : language === 'ms' ? 'Penyelesaian' : language === 'vi' ? 'Giải pháp' : language === 'ja' ? 'ソリューション' : 'Solutions'}
          </div>
          <ul className="space-y-2">
            {onNavigateCitation && (
              <li>
                <button
                  onClick={onNavigateCitation}
                  className="hover:text-white transition-colors text-[#00f2fe] font-semibold flex items-center gap-1 whitespace-nowrap"
                >
                  <span className="material-symbols-outlined text-xs">radar</span>
                  <span className="whitespace-nowrap">{t.nav_geo_engine}</span>
                </button>
              </li>
            )}
            <li>
              <button onClick={onOpenGeoAudit} className="hover:text-white transition-colors">
                {language === 'zh' ? 'GEO 智能 Agent 审计' : language === 'ja' ? 'GEO AI Agent 監査' : 'GEO Agent Audit'}
              </button>
            </li>
            <li>
              <a href="#command-center" className="hover:text-white transition-colors">
                {language === 'zh' ? '指挥中心平台' : language === 'ja' ? 'コマンドセンター' : 'Command Center'}
              </a>
            </li>
            <li>
              <a href="#product-matrix" className="hover:text-white transition-colors">
                {language === 'zh' ? 'HollyLink 底层基础设施' : language === 'ja' ? 'HollyLink インフラ' : 'HollyLink Infrastructure'}
              </a>
            </li>
            <li>
              <button onClick={onOpenCaseStudies} className="hover:text-white transition-colors">
                {language === 'zh' ? 'B2B 行业落地案例' : language === 'ja' ? 'B2B 業界導入事例' : 'B2B Industry Deployment'}
              </button>
            </li>
            {onNavigateCaseStudy && (
              <li>
                <button onClick={onNavigateCaseStudy} className="hover:text-white transition-colors text-[#00f2fe] font-semibold">
                  {language === 'zh' ? '教育行业成功案例' : 'Featured EDU Case'}
                </button>
              </li>
            )}
            {onNavigateFitnessCaseStudy && (
              <li>
                <button onClick={onNavigateFitnessCaseStudy} className="hover:text-white transition-colors text-[#00f2fe] font-semibold">
                  {language === 'zh' ? '健身 KOL 成功案例' : 'Fitness KOL Case'}
                </button>
              </li>
            )}
          </ul>
        </div>

        {/* Col 4: Framework */}
        <div className="space-y-3 text-sm">
          <div className="font-bold text-white uppercase text-xs font-mono-code tracking-wider text-[#166ef1]">
            {language === 'zh' ? '方法论与框架' : language === 'ms' ? 'Kerangka & Metodologi' : language === 'vi' ? 'Phương pháp luận' : language === 'ja' ? '方法論・フレームワーク' : 'Methodology'}
          </div>
          <ul className="space-y-2">
            <li>
              <button onClick={onOpenMethodology} className="hover:text-white transition-colors">
                {language === 'zh' ? '网信办算法对齐与备案' : language === 'ja' ? 'CAC アルゴリズム届出適合' : 'CAC Filing Alignment'}
              </button>
            </li>
            <li>
              <button onClick={onOpenMethodology} className="hover:text-white transition-colors">
                {language === 'zh' ? '向量空间语义审计' : language === 'ja' ? 'ベクトル空間セマンティック監査' : 'Vector Space Auditing'}
              </button>
            </li>
            <li>
              <button onClick={onOpenMethodology} className="hover:text-white transition-colors">
                {language === 'zh' ? '权威信号向量注入' : language === 'ja' ? '権威シグナル注入' : 'Signal Injection'}
              </button>
            </li>
            <li>
              <button onClick={onOpenMethodology} className="hover:text-white transition-colors">
                {language === 'zh' ? '品牌权威度防护' : language === 'ja' ? 'ブランド権威保護' : 'Authority Guarding'}
              </button>
            </li>
            {onNavigateFaq && (
              <li>
                <button onClick={onNavigateFaq} className="hover:text-white transition-colors text-[#00f2fe] font-semibold whitespace-nowrap">
                  {t.nav_faq}
                </button>
              </li>
            )}
          </ul>
        </div>

        {/* Col 5: Contact CTA */}
        <div className="space-y-3 text-sm">
          <div className="font-bold text-white uppercase text-xs font-mono-code tracking-wider text-[#00f2fe]">
            {language === 'zh' ? '新加坡团队咨询' : language === 'ms' ? 'Penasihat Singapore' : language === 'vi' ? 'Tư vấn Singapore' : language === 'ja' ? 'シンガポール個別相談' : 'Singapore Advisory'}
          </div>
          <p className="text-xs text-slate-400">
            {language === 'zh' ? '与我们的新加坡专家顾问团队预约远程战略研讨。' : language === 'ms' ? 'Minta konsultasi atas talian bersama pasukan penasihat SG kami.' : language === 'vi' ? 'Yêu cầu tư vấn trực tuyến với đội ngũ chuyên gia Singapore.' : language === 'ja' ? 'シンガポールの専門アドバイザーチームとのオンライン戦略セッションをご予約ください。' : 'Request a remote consultation with our Singapore advisory team.'}
          </p>
          <button
            onClick={onOpenConsultation}
            className="primary-btn w-full py-2.5 rounded font-semibold text-xs flex items-center justify-center gap-1.5"
          >
            <span>{t.nav_request_consultation}</span>
            <span className="material-symbols-outlined text-sm">calendar_month</span>
          </button>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="max-w-[1280px] mx-auto px-6 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <div>
          © {new Date().getFullYear()} HollyGlobe Singapore. All rights reserved.
        </div>
        <div className="flex flex-wrap gap-6">
          <button onClick={onOpenMethodology} className="hover:text-white transition-colors">
            {language === 'zh' ? '算法合规政策' : language === 'ja' ? 'CAC コンプライアンス方針' : 'CAC Compliance Policy'}
          </button>
          <a href="mailto:enquiry@sghollyglobe.com?subject=Privacy Policy Query" className="hover:text-white transition-colors">
            {language === 'zh' ? '隐私政策' : language === 'ja' ? 'プライバシーポリシー' : 'Privacy Policy'}
          </a>
          <a href="mailto:enquiry@sghollyglobe.com?subject=Terms of Service Query" className="hover:text-white transition-colors">
            {language === 'zh' ? '服务条款' : language === 'ja' ? '利用規約' : 'Terms of Service'}
          </a>
        </div>
      </div>
    </footer>
  );
};
