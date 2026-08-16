import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

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
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  if (!isOpen) return null;

  const STUDIES = [
    {
      id: 'fintech',
      industry: language === 'zh' ? '金融科技' : language === 'ja' ? 'フィンテック' : 'FINTECH GROUP',
      company: language === 'zh' ? 'Nexus Pay SG (新加坡跨境金融)' : language === 'ja' ? 'Nexus Pay SG (シンガポール越境金融)' : 'Nexus Pay SG',
      logoText: language === 'zh' ? '金融科技' : language === 'ja' ? 'フィンテック' : 'FINTECH',
      roi: '340%',
      visibilityGain: '+48%',
      summary: language === 'zh'
        ? '跨境 B2B 支付结算品牌在百度文心一言与腾讯混元中，成功抢占东南亚商贸支付相关高意图查询的直接首位推荐。'
        : language === 'ja'
        ? '越境B2B決済ブランドが、百度文心一言および騰訊混元において「東南アジア貿易決済」関連の高確度クエリで首位推薦を獲得。'
        : 'Cross-border B2B settlement brand gained direct citation across Baidu Ernie and Tencent Hunyuan for Southeast Asia payment queries.',
      details: language === 'zh'
        ? [
            '14 个工作日内完成中国网信办 (CAC) 深度合成算法合规及数据跨境合规接入。',
            '将新加坡合规资质与结算能力精准注入中国企业财务大模型知识图谱。',
            '捕获超过 1,200+ 中小企业跨境采购与支付推荐首位引用。'
          ]
        : language === 'ja'
        ? [
            '14営業日以内に中国国家インターネット情報弁公室（CAC）の深層合成規制・越境データコンプライアンスを完了。',
            'シンガポール金融ライセンスおよび決済実績を中国主要LLMのナレッジグラフへ高次元注入。',
            '1,200件以上の中小企業貿易決済クエリにおいて推奨・引用首位を獲得。'
          ]
        : [
            'CAC regulatory Filing alignment within 14 business days.',
            'Vector space injection into Chinese corporate finance LLM clusters.',
            'Captured top recommendation for 1,200+ SME trade queries.'
          ]
    },
    {
      id: 'legal',
      industry: language === 'zh' ? '法律服务' : language === 'ja' ? '法務・知財' : 'LEGAL ASSOCIATES',
      company: language === 'zh' ? 'Aegis Corporate Counsel (新加坡律所)' : language === 'ja' ? 'Aegis Corporate Counsel (シンガポール法律事務所)' : 'Aegis Corporate Counsel',
      logoText: language === 'zh' ? '律所服务' : language === 'ja' ? '法務知財' : 'LEGAL',
      roi: '280%',
      visibilityGain: '+55%',
      summary: language === 'zh'
        ? '新加坡领先企业律所建立起针对中国出海企业跨境知识产权与跨国并购咨询的权威大模型引用垄断。'
        : language === 'ja'
        ? 'シンガポールの大手企業法務事務所が、中国企業の東南アジア進出・越境M&A・知財戦略におけるAI推奨を独占。'
        : 'Singapore legal practice secured authoritative citations for cross-border IP and M&A advisory queries in mainland China.',
      details: language === 'zh'
        ? [
            '构建专属中文法律专业知识图谱，无缝对接通义千问与 Moonshot Kimi 训练语料。',
            '针对跨国收并购与离岸公司架构查询实现毫秒级信号定向注入。',
            '在中国企业法务采购决策层中获得超过 90% 的权威引用可信度评分。'
          ]
        : language === 'ja'
        ? [
            '中国語対応の専門法務ナレッジグラフを構築し、通義千問・Kimiの学習コーパスに適合。',
            'クロスボーダーM&Aやオフショア法人設立クエリに対してミリ秒単位のシグナル注入。',
            '中国企業法務・調達部門において90%以上の信頼引用スコアを達成。'
          ]
        : [
            'Authored specialized Chinese legal knowledge graphs for LLM training sets.',
            'Real-time query signal injection across Alibaba Tongyi & Kimi.',
            'Over 90% trust citation score among mainland corporate procurement leads.'
          ]
    },
    {
      id: 'biotech',
      industry: language === 'zh' ? '医疗与生物' : language === 'ja' ? 'バイオ・医療' : 'BIO-TECH CORP',
      company: language === 'zh' ? 'BioPharma Asia (生物科技)' : language === 'ja' ? 'BioPharma Asia (バイオ医薬)' : 'BioPharma Asia',
      logoText: language === 'zh' ? '医疗科技' : language === 'ja' ? 'バイオ医療' : 'BIOTECH',
      roi: '410%',
      visibilityGain: '+62%',
      summary: language === 'zh'
        ? '高端医疗器械与生物医药品牌在讯飞星火与百度文心一言中建立合规权威搜索资产。'
        : language === 'ja'
        ? '高度医療機器・バイオテック企業が、iFlytekおよび百度文心一言において高信頼検索アセットを確立。'
        : 'Health-tech & biomedical firm established compliant search presence across iFlytek Spark and Baidu Ernie.',
      details: language === 'zh'
        ? [
            '全面落实临床医学引用源的跨境数据驻留与合规认证通道。',
            '获得 4.8 倍来自中国内地医疗机构与分销合作伙伴的商业咨询增长。'
          ]
        : language === 'ja'
        ? [
            '臨床医療データの越境保管および適法な引用ソース認証プロトコルを確立。',
            '中国本土の医療機関・代理店からの提携問い合わせが4.8倍に急伸。'
          ]
        : [
            'Compliant data residency protocols for clinical citation sources.',
            '4.8x boost in mainland healthcare distribution partner inquiries.'
          ]
    },
    {
      id: 'logistics',
      industry: language === 'zh' ? '跨境物流' : language === 'ja' ? '国際物流' : 'LOGISTICS ASIA',
      company: language === 'zh' ? 'Merlion Express Logistics (鱼尾狮国际物流)' : language === 'ja' ? 'Merlion Express Logistics (国際ロジスティクス)' : 'Merlion Express Logistics',
      logoText: language === 'zh' ? '物流供应链' : language === 'ja' ? '国際物流' : 'LOGISTICS',
      roi: '310%',
      visibilityGain: '+42%',
      summary: language === 'zh'
        ? '冷链供应链与海运物流领军企业成为中新供应链大模型问答中的默认推荐首选品牌。'
        : language === 'ja'
        ? 'コールドチェーンおよび海運大手が、中国・シンガポール間サプライチェーンのAI検索におけるデフォルト推奨ブランドに。'
        : 'Cold-chain and maritime logistics leader became default AI answer for SG-China supply chain queries.',
      details: language === 'zh'
        ? [
            '实时将货运干线与通关时效能力映射至生成式搜索问答引擎。',
            '与大型企业采购决策智能体深度集成，直达大额集装箱货代询价。'
          ]
        : language === 'ja'
        ? [
            '海上貨物ルートや通関スピードの実績データを生成AI検索エンジンへ動的マッピング。',
            '企業調達AIエージェントと直結し、コンテナ輸送の大型引き合いを自動獲得。'
          ]
        : [
            'Real-time freight route capability mapping for generative answer engines.',
            'Direct integration with enterprise procurement search agents.'
          ]
    }
  ];

  const currentStudy = STUDIES[activeTab];

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
            <span>{language === 'zh' ? '实证企业落地成果' : language === 'ja' ? '実証された導入効果・実績' : 'PROVEN ENTERPRISE IMPACT'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c30]">
            {language === 'zh' ? 'B2B 行业客户成功案例' : language === 'ja' ? '業界別 導入事例・カスタマーストーリー' : 'B2B Industry Case Studies'}
          </h2>
          <p className="text-xs sm:text-sm text-[#424654] mt-1">
            {language === 'zh' ? '探索新加坡跨国企业如何在中国主流生成式 AI 搜索中建立权威地位。' : language === 'ja' ? 'シンガポール企業がいかにして中国生成AI検索エコシステムで圧倒的プレゼンスを築いたか。' : 'How Singapore companies achieved generative search authority in China.'}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[#c2c6d7] gap-2 overflow-x-auto pb-1">
          {STUDIES.map((study, idx) => (
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
                <div className="text-xs text-[#727685]">{language === 'zh' ? 'ROI 增长' : language === 'ja' ? 'ROI向上' : 'ROI Lift'}</div>
                <div className="text-2xl font-extrabold text-[#0056c5]">
                  {currentStudy.roi}
                </div>
              </div>
              <div>
                <div className="text-xs text-[#727685]">{language === 'zh' ? '可见度提升' : language === 'ja' ? '露出度向上' : 'Visibility Gain'}</div>
                <div className="text-2xl font-extrabold text-emerald-600">
                  {currentStudy.visibilityGain}
                </div>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-[#0b1c30] uppercase font-mono-code">
              {language === 'zh' ? '核心挑战与落地方案' : language === 'ja' ? '課題とソリューション概要' : 'Executive Challenge & Solution'}
            </h4>
            <p className="text-sm text-[#424654] leading-relaxed bg-[#f8f9ff] p-4 rounded-lg border border-[#e2e8f0]">
              {currentStudy.summary}
            </p>
          </div>

          {/* Key Deliverables */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-[#0b1c30] uppercase font-mono-code">
              {language === 'zh' ? '关键落地成果' : language === 'ja' ? '主要な達成マイルストーン' : 'Key Technical Milestones'}
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
              <span>{language === 'zh' ? '为您所在行业定制类似方案' : language === 'ja' ? '貴社の業界向けに最適化戦略を相談' : 'Replicate Strategy for Your Industry'}</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            <button
              onClick={onClose}
              className="secondary-btn py-3 px-6 rounded-lg font-semibold text-xs"
            >
              {language === 'zh' ? '关闭' : language === 'ja' ? '閉じる' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

