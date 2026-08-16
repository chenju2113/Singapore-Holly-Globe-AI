import React, { useState } from 'react';
import { GeoAuditResult } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface GeoAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation?: () => void;
}

export const GeoAuditModal: React.FC<GeoAuditModalProps> = ({ isOpen, onClose, onOpenConsultation }) => {
  const { language } = useLanguage();
  const [brandName, setBrandName] = useState('');
  const [industry, setIndustry] = useState('Technology, SaaS & Digital Services');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GeoAuditResult | null>(null);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandName.trim()) {
      setError(
        language === 'zh'
          ? '请输入您的品牌或企业名称。'
          : language === 'ja'
          ? '企業名またはブランド名を入力してください。'
          : 'Please enter your brand or company name.'
      );
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const res = await fetch('/api/geo-audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ brandName, industry, websiteUrl }),
      });

      if (!res.ok) {
        throw new Error('Failed to fetch audit results from server.');
      }

      const data = await res.json();
      setResult(data);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'An error occurred while generating the audit.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white border border-[#c2c6d7] rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#727685] hover:text-[#0b1c30] p-1.5 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Modal Header */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img
              src="/hollyglobe_logo.svg"
              alt="HollyGlobe Logo"
              className="w-7 h-7 object-contain"
            />
            <div className="inline-flex items-center gap-1.5 text-xs font-mono-code font-bold text-[#0056c5] uppercase bg-[#eff4ff] px-2.5 py-1 rounded border border-[#d9e2ff]">
              <span className="material-symbols-outlined text-sm">auto_awesome</span>
              <span>{language === 'zh' ? '实时 AI GEO 诊断引擎' : language === 'ja' ? 'リアルタイム AI GEO 診断エンジン' : 'REAL-TIME AI GEO AUDIT ENGINE'}</span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c30]">
            {language === 'zh' ? '生成式 AI 搜索可见度免费诊断' : language === 'ja' ? '生成AI検索におけるブランド認知度・露出診断' : 'Generative Search Visibility Audit'}
          </h2>
          <p className="text-xs sm:text-sm text-[#424654] mt-1">
            {language === 'zh'
              ? '即刻分析您的品牌在百度文心一言、阿里通义千问、Kimi、讯飞星火与腾讯混元中的曝光表现。'
              : language === 'ja'
              ? '百度文心一言、通義千問 (Qwen)、Kimi、iFlytek、騰訊混元における貴社ブランドの引用可能性を即時分析。'
              : "Analyze your brand's projected visibility across Baidu Ernie, Tongyi, Kimi, Spark, and Hunyuan."}
          </p>
        </div>

        {!result ? (
          /* Audit Input Form */
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded font-medium">
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-[#0b1c30] mb-1">
                {language === 'zh' ? '企业 / 品牌名称' : language === 'ja' ? '企業名 / ブランド名' : 'Company / Brand Name'} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={brandName}
                onChange={e => setBrandName(e.target.value)}
                placeholder={language === 'zh' ? '例如：DBS Bank, Razer, Secretlab, Singtel' : language === 'ja' ? '例：DBS Bank, Razer, Secretlab, Singtel' : 'e.g. DBS Bank, Razer, Secretlab, Singtel'}
                className="w-full px-3.5 py-2.5 text-sm bg-[#f8f9ff] border border-[#c2c6d7] rounded focus:outline-none focus:border-[#0056c5]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#0b1c30] mb-1">
                  {language === 'zh' ? '所属行业 / 领域' : language === 'ja' ? '業種 / ドメイン' : 'Industry / Domain'}
                </label>
                <select
                  value={industry}
                  onChange={e => setIndustry(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-[#f8f9ff] border border-[#c2c6d7] rounded focus:outline-none focus:border-[#0056c5]"
                >
                  <option value="Technology, SaaS & Digital Services">{language === 'zh' ? '科技、SaaS 与数字化服务' : language === 'ja' ? 'テクノロジー・SaaS・ITサービス' : 'Technology, SaaS & Digital Services'}</option>
                  <option value="Finance, Fintech & Professional Services">{language === 'zh' ? '金融、金融科技与专业服务' : language === 'ja' ? '金融・フィンテック・専門サービス' : 'Finance, Fintech & Professional Services'}</option>
                  <option value="Healthcare, Medical Devices & Wellness">{language === 'zh' ? '医疗健康、医疗器械与大健康' : language === 'ja' ? 'ヘルスケア・医療機器・バイオ' : 'Healthcare, Medical Devices & Wellness'}</option>
                  <option value="FMCG, Food & Beverage & Consumer Brands">{language === 'zh' ? '快消品、餐饮食品与消费品牌' : language === 'ja' ? '食品飲料・消費財・FMCG' : 'FMCG, Food & Beverage & Consumer Brands'}</option>
                  <option value="Retail, E-commerce, Beauty & Lifestyle">{language === 'zh' ? '零售、跨境电商、美妆与生活方式' : language === 'ja' ? '小売・EC・コスメ・ライフスタイル' : 'Retail, E-commerce, Beauty & Lifestyle'}</option>
                  <option value="Travel, Hospitality & Tourism">{language === 'zh' ? '文旅、酒店、航空与旅游出境' : language === 'ja' ? '旅行・ホテル・観光・インバウンド' : 'Travel, Hospitality & Tourism'}</option>
                  <option value="Logistics, Manufacturing, Automotive & Industrial">{language === 'zh' ? '物流供应链、先进制造与工业制造' : language === 'ja' ? '物流・サプライチェーン・製造業' : 'Logistics, Manufacturing, Automotive & Industrial'}</option>
                  <option value="Education, Real Estate, Media & Entertainment">{language === 'zh' ? '教育留学、地产咨询与文化传媒' : language === 'ja' ? '教育・不動産・メディア・エンタメ' : 'Education, Real Estate, Media & Entertainment'}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0b1c30] mb-1">
                  {language === 'zh' ? '官方网站网址（可选）' : language === 'ja' ? 'WebサイトURL（任意）' : 'Website URL (Optional)'}
                </label>
                <input
                  type="url"
                  value={websiteUrl}
                  onChange={e => setWebsiteUrl(e.target.value)}
                  placeholder="https://example.com.sg"
                  className="w-full px-3.5 py-2.5 text-sm bg-[#f8f9ff] border border-[#c2c6d7] rounded focus:outline-none focus:border-[#0056c5]"
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="primary-btn w-full py-3.5 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 shadow-sm"
              >
                {loading ? (
                  <>
                    <span className="material-symbols-outlined text-base animate-spin">refresh</span>
                    <span>{language === 'zh' ? '正在检索中国大模型向量空间...' : language === 'ja' ? '中国LLMベクトル空間を分析中...' : 'Analyzing Chinese Vector Repositories...'}</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-base">auto_awesome</span>
                    <span>{language === 'zh' ? '生成免费 GEO 诊断报告' : language === 'ja' ? '無料 GEO 診断レポートを生成' : 'Generate Free GEO Audit Report'}</span>
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          /* Audit Results View */
          <div className="space-y-6 pt-2 animate-fade-in">
            {/* Overall Score Badge */}
            <div className="p-5 bg-[#eff4ff] border border-[#d9e2ff] rounded-xl flex items-center justify-between">
              <div>
                <span className="text-xs font-mono-code font-bold text-[#0056c5] uppercase">
                  {language === 'zh' ? `诊断结果：${result.brandName.toUpperCase()}` : language === 'ja' ? `診断結果: ${result.brandName.toUpperCase()}` : `AUDIT RESULTS FOR ${result.brandName.toUpperCase()}`}
                </span>
                <div className="text-2xl font-extrabold text-[#0b1c30] mt-1">
                  {language === 'zh' ? '综合 GEO 得分: ' : language === 'ja' ? '総合 GEO スコア: ' : 'Overall GEO Score: '}<span className="text-[#0056c5] font-mono-code">{result.overallScore}/100</span>
                </div>
              </div>
              <div className="text-right font-mono-code text-xs">
                <div className="text-emerald-700 font-bold text-sm">{result.queryCoverage}%</div>
                <div className="text-[#727685]">{language === 'zh' ? '意图查询覆盖率' : language === 'ja' ? 'クエリ網羅率' : 'Query Coverage'}</div>
              </div>
            </div>

            {/* Platform Breakdown */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-[#0b1c30] uppercase font-mono-code">
                {language === 'zh' ? '中国主流大模型平台可见度分布' : language === 'ja' ? '中国主要AIプラットフォーム別 露出スコア' : 'Chinese AI Platform Visibility Breakdown'}
              </div>
              <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                {result.platforms.map((plat, idx) => (
                  <div key={idx} className="p-3 bg-[#f8f9ff] border border-[#e2e8f0] rounded space-y-1">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-[#0b1c30]">{plat.name}</span>
                      <span className="font-mono-code font-bold text-[#0056c5]">
                        {plat.visibilityScore}% ({plat.status})
                      </span>
                    </div>
                    <p className="text-[11px] text-[#424654] italic">
                      "{plat.aiCitation}"
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CAC Compliance Indicators */}
            <div className="p-4 bg-white border border-[#c2c6d7] rounded-lg text-xs space-y-2">
              <div className="font-bold text-[#0b1c30] font-mono-code uppercase">
                {language === 'zh' ? 'CAC 算法合规与合规就绪状态' : language === 'ja' ? 'CACアルゴリズム届出＆法規制適合状況' : 'CAC Regulatory & Compliance Readiness'}
              </div>
              <div className="grid grid-cols-3 gap-2 text-center pt-1">
                <div className="p-2 bg-[#f8f9ff] rounded">
                  <div className="text-[10px] text-[#727685]">{language === 'zh' ? '数据跨境存储' : language === 'ja' ? '越境データ保管' : 'Data Residency'}</div>
                  <div className="font-bold text-emerald-600">
                    {result.cacCompliance.dataResidency ? (language === 'zh' ? '已核验' : language === 'ja' ? '適合' : 'Verified') : (language === 'zh' ? '待处理' : language === 'ja' ? '未対応' : 'Pending')}
                  </div>
                </div>
                <div className="p-2 bg-[#f8f9ff] rounded">
                  <div className="text-[10px] text-[#727685]">{language === 'zh' ? 'ICP 状态' : language === 'ja' ? 'ICPライセンス' : 'ICP Status'}</div>
                  <div className="font-bold text-[#0056c5]">{result.cacCompliance.icpStatus}</div>
                </div>
                <div className="p-2 bg-[#f8f9ff] rounded">
                  <div className="text-[10px] text-[#727685]">{language === 'zh' ? '算法备案就绪度' : language === 'ja' ? 'アルゴリズム届出' : 'AI Filing'}</div>
                  <div className="font-bold text-emerald-600">
                    {result.cacCompliance.aiFilingReady ? (language === 'zh' ? '已具备' : language === 'ja' ? '準備完了' : 'Ready') : (language === 'zh' ? '需采取行动' : language === 'ja' ? '対応推奨' : 'Requires Action')}
                  </div>
                </div>
              </div>
            </div>

            {/* Key Recommendations */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-[#0b1c30] uppercase font-mono-code">
                {language === 'zh' ? '核心优化实施建议' : language === 'ja' ? '推奨される最適化アクション' : 'Recommended Execution Steps'}
              </div>
              <ul className="space-y-1.5 text-xs text-[#424654]">
                {result.keyRecommendations.map((rec, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-sm text-[#0056c5] shrink-0 mt-0.5">
                      arrow_right
                    </span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setResult(null)}
                className="secondary-btn flex-1 py-2.5 rounded font-semibold text-xs"
              >
                {language === 'zh' ? '诊断其他品牌' : language === 'ja' ? '別のブランドを診断' : 'Audit Another Brand'}
              </button>
              {onOpenConsultation ? (
                <button
                  onClick={() => {
                    onClose();
                    onOpenConsultation();
                  }}
                  className="primary-btn flex-1 py-2.5 rounded font-semibold text-xs flex items-center justify-center gap-1.5"
                >
                  <span>{language === 'zh' ? '与顾问探讨落地策略' : language === 'ja' ? '専門チームに相談する' : 'Discuss Report with Team'}</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              ) : (
                <a
                  href={`mailto:enquiry@sghollyglobe.com?subject=GEO Audit Inquiry for ${result.brandName}&body=Hi John,%0A%0AI ran a GEO Audit for ${result.brandName} (Score: ${result.overallScore}/100) and would like to discuss next steps...`}
                  className="primary-btn flex-1 py-2.5 rounded font-semibold text-xs flex items-center justify-center gap-1.5"
                >
                  <span>{language === 'zh' ? '联系顾问邮箱' : language === 'ja' ? 'メールで相談する' : 'Email enquiry@sghollyglobe.com'}</span>
                  <span className="material-symbols-outlined text-sm">mail</span>
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
