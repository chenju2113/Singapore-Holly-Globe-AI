import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const GlobalRD: React.FC = () => {
  const { language } = useLanguage();

  const HUBS = [
    {
      city: language === 'zh' ? '新加坡' : 'Singapore',
      tag: language === 'zh' ? '战略总部中心' : 'STRATEGIC HUB',
      role: language === 'zh' ? '企业级咨询与网信办合规' : language === 'ms' ? 'Penasihat Perusahaan & CAC' : language === 'vi' ? 'Tư vấn doanh nghiệp & CAC' : 'Enterprise Advisory & CAC Compliance',
      detail: language === 'zh' ? '驻新加坡线上顾问中心，主导跨境 AI 能见度战略规划、合规备案及区域客户服务。' : language === 'ms' ? 'Pusat penasihat dalam talian Singapura memimpin strategi keterlihatan AI rentas sempadan.' : language === 'vi' ? 'Trung tâm tư vấn trực tuyến Singapore dẫn dắt chiến lược hiển thị AI xuyên biên giới.' : 'Singapore-based online advisory leading cross-border AI visibility strategy, regulatory filings, and regional client engagement.'
    },
    {
      city: language === 'zh' ? '深圳' : 'Shenzhen',
      tag: language === 'zh' ? '核心算法实验室' : 'CORE ALGORITHM',
      role: language === 'zh' ? '向量引擎与中文 NLP 实验室' : language === 'ms' ? 'Enjin Vektor & Makmal NLP' : language === 'vi' ? 'Bộ máy vector & Phòng lab NLP' : 'Vector Engine & Chinese NLP Lab',
      detail: language === 'zh' ? '位于南山科技园。专注于百度文心、阿里通义、Kimi 及腾讯混元大模型向量注入与爬虫优化。' : language === 'ms' ? 'Taman Teknologi Nanshan. Berfokus pada saluran suntikan vektor LLM Baidu, Tongyi, Kimi, dan Tencent.' : language === 'vi' ? 'Khu công nghệ Nam Sơn. Tập trung vào quy trình nhúng vector LLM Baidu, Tongyi, Kimi, Tencent.' : 'Nanshan Tech Park. Focuses on Baidu, Tongyi, Kimi, and Tencent LLM vector injection pipelines and crawler optimization.'
    },
    {
      city: language === 'zh' ? '硅谷' : 'Silicon Valley',
      tag: language === 'zh' ? '大模型架构研发' : 'LLM ARCHITECTURE',
      role: language === 'zh' ? '生成式大模型研发' : language === 'ms' ? 'R&D Model Generatif' : language === 'vi' ? 'R&D mô hình tạo sinh' : 'Generative Model R&D',
      detail: language === 'zh' ? '位于帕罗奥图。前沿研究生成式搜索引擎优化算法与多大模型评测基准工程。' : language === 'ms' ? 'Palo Alto. Mengkaji algoritma pengoptimuman enjin generatif berasaskan tandatangan dan penanda aras.' : language === 'vi' ? 'Palo Alto. Nghiên cứu thuật toán tối ưu hóa bộ máy tìm kiếm tạo sinh và chuẩn thử nghiệm đa LLM.' : 'Palo Alto. Researches fundamental generative engine optimization algorithms and multi-LLM benchmark dynamics.'
    }
  ];

  return (
    <section className="py-20 px-6 max-w-[1280px] mx-auto border-t border-[#c2c6d7] bg-[#f0f4fd]/50">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-mono-code font-bold text-[#0056c5] uppercase tracking-wider bg-[#eff4ff] px-3 py-1 rounded border border-[#d9e2ff]">
          {language === 'zh' ? '全球创新研发网络' : language === 'ms' ? 'RANGKAIAN INOVASI GLOBAL' : language === 'vi' ? 'MẠNG LƯỚI SÁNG TẠO TOÀN CẦU' : 'GLOBAL INNOVATION NETWORK'}
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1c30] mt-4">
          {language === 'zh' ? '全球研发与咨询中心' : language === 'ms' ? 'Pusat R&D Global' : language === 'vi' ? 'Trung tâm R&D toàn cầu' : 'Global R&D Hubs'}
        </h2>
        <p className="text-[#424654] text-base mt-2">
          {language === 'zh' ? '三大中心工程协同，赋能全球企业在中国 AI 搜索生态中的品牌能见度。' : language === 'ms' ? 'Sinergi kejuruteraan tiga pusat yang menawari keterlihatan carian AI perusahaan.' : language === 'vi' ? 'Hiệp lực kỹ thuật 3 trung tâm nâng tầm hiển thị tìm kiếm AI doanh nghiệp.' : 'Tri-center engineering synergy powering enterprise AI search visibility worldwide.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {HUBS.map((hub, idx) => (
          <div
            key={idx}
            className="p-6 bg-white border border-[#c2c6d7] rounded-xl shadow-xs hover:border-[#0056c5] transition-all space-y-3"
          >
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-mono-code font-bold text-[#0056c5] bg-[#eff4ff] px-2 py-0.5 rounded uppercase">
                {hub.tag}
              </span>
              <span className="material-symbols-outlined text-lg text-[#0056c5]">
                public
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-[#0b1c30]">
              {hub.city}
            </h3>

            <div className="text-xs font-bold text-[#0056c5]">
              {hub.role}
            </div>

            <p className="text-xs text-[#424654] leading-relaxed pt-2 border-t border-[#e2e8f0]">
              {hub.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
