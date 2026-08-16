import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface IndustryStatsProps {
  onOpenCaseStudies: () => void;
}

export const IndustryStats: React.FC<IndustryStatsProps> = ({ onOpenCaseStudies }) => {
  const { language } = useLanguage();

  const STATS = [
    {
      value: '100+',
      label: language === 'zh' ? '服务品牌企业' : language === 'ja' ? '支援実績ブランド' : language === 'ms' ? 'Jenama Global' : language === 'vi' ? 'Thương hiệu toàn cầu' : 'Global Brands',
      detail: language === 'zh' ? '跨境 B2B 与专业服务领域' : language === 'ja' ? '越境B2Bおよび専門サービス領域' : language === 'ms' ? 'B2B Rentas Sempadan' : language === 'vi' ? 'B2B xuyên biên giới' : 'Cross-border B2B & Pro Services'
    },
    {
      value: '300%+',
      label: language === 'zh' ? '平均 ROI 提升' : language === 'ja' ? '平均ROI向上率' : language === 'ms' ? 'Peningkatan ROI Purata' : language === 'vi' ? 'Tăng ROI trung bình' : 'Avg. ROI Lift',
      detail: language === 'zh' ? '生成式 AI 搜索引用频次' : language === 'ja' ? '生成AI検索における引用頻度' : language === 'ms' ? 'Petikan carian generatif' : language === 'vi' ? 'Trích dẫn tìm kiếm AI' : 'In generative search citations'
    },
    {
      value: '24/7',
      label: language === 'zh' ? '智能 Agent 监控' : language === 'ja' ? 'AI Agent 常時監視' : language === 'ms' ? 'Pemantauan Ejen 24/7' : language === 'vi' ? 'Giám sát 24/7' : 'Agent Monitoring',
      detail: language === 'zh' ? '向量数据库节点实时防御' : language === 'ja' ? 'ベクトルノード＆信頼性リアルタイム保護' : language === 'ms' ? 'Kawalan vektor masa-nyata' : language === 'vi' ? 'Bảo vệ vector thời gian thực' : 'Real-time vector guarding'
    },
    {
      value: '5.0',
      label: language === 'zh' ? '合规评级标准' : language === 'ja' ? '法令適合レーティング' : language === 'ms' ? 'Penarafan Pematuhan' : language === 'vi' ? 'Đánh giá tuân thủ' : 'Compliance Rating',
      detail: language === 'zh' ? '全面符合网信办算法备案' : language === 'ja' ? 'CACアルゴリズム届出基準に完全準拠' : language === 'ms' ? 'Pematuhan akurat CAC' : language === 'vi' ? 'Tuân thủ đầy đủ CAC' : 'Full CAC filing alignment'
    },
  ];

  const INDUSTRIES = [
    {
      tag: language === 'zh' ? '金融科技' : language === 'ja' ? 'フィンテック' : 'FINTECH GROUP',
      name: language === 'zh' ? 'Nexus Pay SG (新加坡金融)' : language === 'ja' ? 'Nexus Pay SG (シンガポール金融)' : 'Nexus Pay SG',
      focus: language === 'zh' ? '跨境支付与结算架构' : language === 'ja' ? '越境決済・送金アーキテクチャ' : language === 'ms' ? 'Penyelesaian Rentas Sempadan' : language === 'vi' ? 'Thanh toán xuyên biên giới' : 'Cross-border Settlement'
    },
    {
      tag: language === 'zh' ? '法律服务' : language === 'ja' ? '法務・コンサル' : 'LEGAL ASSOCIATES',
      name: language === 'zh' ? 'Aegis Counsel (新加坡律所)' : language === 'ja' ? 'Aegis Counsel (シンガポール法律事務所)' : 'Aegis Counsel',
      focus: language === 'zh' ? '跨国收并购与知识产权咨询' : language === 'ja' ? '越境M&Aおよび知的財産アドバイザリー' : language === 'ms' ? 'Penasihat M&A & IP' : language === 'vi' ? 'Tư vấn M&A & Sỡ hữu trí tuệ' : 'M&A & IP Advisory'
    },
    {
      tag: language === 'zh' ? '医疗与生物' : language === 'ja' ? 'バイオ・医療' : 'BIO-TECH CORP',
      name: language === 'zh' ? 'BioPharma Asia (生物医药)' : language === 'ja' ? 'BioPharma Asia (バイオ医薬)' : 'BioPharma Asia',
      focus: language === 'zh' ? '临床医疗科技与设备出口' : language === 'ja' ? '臨床医療機器およびヘルスケア輸出' : language === 'ms' ? 'Kesihatan-Tek Klinikal' : language === 'vi' ? 'Công nghệ y tế lâm sàng' : 'Clinical Health-Tech'
    },
    {
      tag: language === 'zh' ? '跨境物流' : language === 'ja' ? '国際物流' : 'LOGISTICS ASIA',
      name: language === 'zh' ? 'Merlion Express (鱼尾狮物流)' : language === 'ja' ? 'Merlion Express (国際ロジスティクス)' : 'Merlion Express',
      focus: language === 'zh' ? '冷链供应链与中新贸易专线' : language === 'ja' ? 'コールドチェーンおよび中星貿易ルート' : language === 'ms' ? 'Rantaian Bekalan Sejuk' : language === 'vi' ? 'Chuỗi cung ứng lạnh' : 'Cold-Chain Supply'
    },
  ];

  return (
    <section className="py-20 px-6 max-w-[1280px] mx-auto border-t border-[#c2c6d7]">
      {/* Stats Counter Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {STATS.map((stat, idx) => (
          <div
            key={idx}
            className="p-6 bg-white border border-[#c2c6d7] rounded-xl text-center shadow-xs hover:border-[#0056c5] transition-all"
          >
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0056c5] font-mono-code">
              {stat.value}
            </div>
            <div className="text-sm font-bold text-[#0b1c30] mt-1">{stat.label}</div>
            <div className="text-[11px] text-[#727685] mt-0.5">{stat.detail}</div>
          </div>
        ))}
      </div>

      {/* High-Trust B2B Industries Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-mono-code font-bold text-[#0056c5] uppercase tracking-wider bg-[#eff4ff] px-2.5 py-1 rounded border border-[#d9e2ff]">
            {language === 'zh' ? '定制解决方案' : language === 'ja' ? '業界別カスタムソリューション' : language === 'ms' ? 'PENYELESAIAN KHUSUS' : language === 'vi' ? 'GIẢI PHÁP TÙY CHỈNH' : 'TAILORED SOLUTIONS'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c30] mt-2">
            {language === 'zh' ? '高信任度 B2B 行业部署案例' : language === 'ja' ? '高信頼B2B業界向け 導入実績・事例' : language === 'ms' ? 'Penyebaran Industri B2B Berautoriti Tinggi' : language === 'vi' ? 'Triển khai ngành B2B độ tin cậy cao' : 'High-Trust B2B Industry Deployment'}
          </h2>
        </div>

        <button
          onClick={onOpenCaseStudies}
          className="secondary-btn px-4 py-2.5 rounded text-xs font-semibold flex items-center gap-1.5 self-start sm:self-auto"
        >
          <span>{language === 'zh' ? '查看所有客户案例' : language === 'ja' ? 'すべての導入事例を見る' : language === 'ms' ? 'Lihat Semua Kes' : language === 'vi' ? 'Xem tất cả nghiên cứu tình huống' : 'View All Case Studies'}</span>
          <span className="material-symbols-outlined text-sm">open_in_new</span>
        </button>
      </div>

      {/* Industry Badges Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {INDUSTRIES.map((ind, idx) => (
          <div
            key={idx}
            onClick={onOpenCaseStudies}
            className="p-5 bg-white border border-[#c2c6d7] rounded-xl shadow-xs hover:border-[#0056c5] hover:shadow-md transition-all cursor-pointer group space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono-code font-bold text-[#0056c5] bg-[#eff4ff] px-2 py-0.5 rounded uppercase">
                {ind.tag}
              </span>
              <span className="material-symbols-outlined text-base text-[#727685] group-hover:text-[#0056c5] group-hover:translate-x-1 transition-all">
                arrow_forward
              </span>
            </div>
            <div className="font-bold text-[#0b1c30] text-base group-hover:text-[#0056c5] transition-colors">
              {ind.name}
            </div>
            <div className="text-xs text-[#727685] font-medium">
              {language === 'zh' ? '业务焦点' : language === 'ja' ? '重点領域' : 'Focus'}: {ind.focus}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
