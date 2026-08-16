import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface MethodologyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const MethodologyModal: React.FC<MethodologyModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation,
}) => {
  const { language } = useLanguage();
  if (!isOpen) return null;

  const STEPS = [
    {
      step: '01',
      title: language === 'zh' ? 'CAC 网信办合规审查与算法备案' : language === 'ja' ? 'CACコンプライアンス審査・アルゴリズム届出' : 'CAC Regulatory Alignment & Filing',
      description: language === 'zh' ? '在公开部署前，确保数据跨境驻留、隐私合规及 ICP 全面符合中国 AI 监管准则。' : language === 'ja' ? 'データ越境保管、プライバシー保護、ICP等の中国生成AI関連規制への完全準拠を先行検証します。' : 'Ensure data residency, cross-border privacy, and ICP alignment with Chinese AI regulatory standards before public signal deployment.'
    },
    {
      step: '02',
      title: language === 'zh' ? '多模型向量空间诊断审计' : language === 'ja' ? 'マルチLLMベクトル空間の監査・診断' : 'Vector Space Auditing',
      description: language === 'zh' ? '全向扫描百度文心一言、通义千问、Kimi、星火及混元的高维 Embedding 空间，锁定品牌可见度盲区。' : language === 'ja' ? '百度文心一言、通義千問、Kimi、星火、騰訊混元の高次元ベクトル空間をスキャンし、認知ギャップを特定。' : 'Scan Baidu Ernie, Tongyi, Kimi, Spark & Hunyuan high-dimensional vector embeddings to pinpoint brand presence gaps.'
    },
    {
      step: '03',
      title: language === 'zh' ? '权威生成式信号注入' : language === 'ja' ? '高信頼シグナル・ナレッジのインジェクション' : 'Generative Signal Injection',
      description: language === 'zh' ? '注入结构化权威凭证、中英文双语知识图谱与本土化技术背书，直通各大 LLM 抓取与训练层。' : language === 'ja' ? '構造化されたオーソリティ情報、日英中ナレッジグラフ、技術的引用をLLMクローラーへダイレクト注入。' : 'Inject structured authority signals, bilingual knowledge graphs, and localized technical citations directly accessible to LLM crawlers.'
    },
    {
      step: '04',
      title: language === 'zh' ? '实时权威度监控与防御' : language === 'ja' ? 'リアルタイム・オーソリティ監視＆競合防御' : 'Real-Time Authority Monitoring',
      description: language === 'zh' ? '24/7 全天候 AI Agent 实时追踪品牌情绪、竞品替代态势及权威引用变化。' : language === 'ja' ? '24時間365日のAIエージェント監視により、レピュテーション保護と競合による引用リプレイスを即時検知。' : 'Continuous 24/7 agent monitoring, sentiment guarding, and competitor displacement tracking across China’s top AI platforms.'
    }
  ];

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
            <span className="material-symbols-outlined text-sm">hub</span>
            <span>{language === 'zh' ? '方法论架构' : language === 'ja' ? 'アーキテクチャフレームワーク' : 'FRAMEWORK ARCHITECTURE'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c30]">
            {language === 'zh' ? 'HollyGlobe 独家 GEO 方法论体系' : language === 'ja' ? 'HollyGlobe GEO メソドロジー体系' : 'The HollyGlobe GEO Methodology'}
          </h2>
          <p className="text-xs sm:text-sm text-[#424654] mt-1">
            {language === 'zh' ? '建立中国主流生成式 AI 搜索中品牌权威引用的端到端落地框架。' : language === 'ja' ? '中国の生成AI検索エコシステムにおいてブランド権威性を確立するための包括的フレームワーク。' : 'End-to-end framework for establishing generative AI search authority in mainland China.'}
          </p>
        </div>

        {/* Steps List */}
        <div className="space-y-4 pt-2">
          {STEPS.map((step, idx) => (
            <div
              key={idx}
              className="p-5 bg-[#f8f9ff] border border-[#d9e2ff] rounded-xl flex items-start gap-4 hover:border-[#0056c5] transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[#0056c5] text-white flex items-center justify-center font-mono-code font-bold text-base shrink-0">
                {step.step}
              </div>

              <div className="space-y-1">
                <h3 className="font-bold text-[#0b1c30] text-base sm:text-lg">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#424654] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Footer */}
        <div className="pt-4 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="primary-btn flex-1 py-3 rounded-lg font-semibold text-xs flex items-center justify-center gap-2"
          >
            <span>{language === 'zh' ? '预约方法论落地咨询' : language === 'ja' ? '導入相談・コンサルティングを予約' : 'Consult on Implementation'}</span>
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
  );
};

