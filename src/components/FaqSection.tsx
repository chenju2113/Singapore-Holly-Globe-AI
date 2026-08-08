import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { language } = useLanguage();

  const FAQS = [
    {
      question: language === 'zh' ? 'HollyGlobe 新加坡提供哪些业务？' : language === 'ms' ? 'Apakah yang dilakukan oleh HollyGlobe Singapore?' : language === 'vi' ? 'HollyGlobe Singapore làm gì?' : 'What does HollyGlobe Singapore do?',
      answer: language === 'zh' ? 'HollyGlobe 新加坡致力于帮助新加坡及东南亚企业在百度文心一言、阿里通义千问、Kimi、讯飞星火及腾讯混元等中国主流 AI 平台中建立权威的 AI 搜索能见度与 GEO 准备度。' : language === 'ms' ? 'HollyGlobe Singapore membantu jenama Singapura dan serantau membina keterlihatan carian AI dan kesediaan GEO di merentasi platform AI utama China.' : language === 'vi' ? 'HollyGlobe Singapore giúp các thương hiệu Singapore và khu vực xây dựng khả năng hiển thị tìm kiếm AI và độ sẵn sàng GEO trên các nền tảng AI hàng đầu Trung Quốc.' : 'HollyGlobe Singapore helps Singapore and regional brands build AI search visibility and GEO readiness across China’s primary AI platforms—such as Baidu Ernie, Tongyi, Kimi, Spark, and Hunyuan.'
    },
    {
      question: language === 'zh' ? '你们是否提供远程咨询与服务？' : language === 'ms' ? 'Adakah anda bekerja secara dalam talian?' : language === 'vi' ? 'Bạn có làm việc từ xa không?' : 'Do you work remotely?',
      answer: language === 'zh' ? '是的。HollyGlobe 新加坡采用线上优先的 B2B 咨询模式，通过标准化的线上会议、远程战略研讨与数字审计，高效响应客户需求。' : language === 'ms' ? 'Ya. HollyGlobe Singapore beroperasi sebagai penasihat B2B utamakan atas talian.' : language === 'vi' ? 'Có. HollyGlobe Singapore hoạt động như một đơn vị tư vấn B2B ưu tiên trực tuyến.' : 'Yes. HollyGlobe Singapore operates as an online-first B2B advisory. We serve clients fully remotely through structured online consultations, video strategy sessions, and digital audits.'
    },
    {
      question: language === 'zh' ? '你们主要服务哪些市场与行业？' : language === 'ms' ? 'Pasaran manakah yang anda layani?' : language === 'vi' ? 'Bạn phục vụ các thị trường nào?' : 'Which markets do you serve?',
      answer: language === 'zh' ? '我们主要服务总部位于新加坡的企业、东南亚跨国公司、工业制造出口商、医疗设备供应商以及正在拓展中国大陆市场的 B2B 服务商。' : language === 'ms' ? 'Kami terutamanya menyokong jenama berasaskan Singapura, syarikat B2B serantau, pengilang industri, dan pembekal perubatan yang memasuki pasaran China.' : language === 'vi' ? 'Chúng tôi chủ yếu hỗ trợ các thương hiệu có trụ sở tại Singapore, doanh nghiệp B2B khu vực, nhà sản xuất công nghiệp và nhà cung cấp y tế tiến vào Trung Quốc.' : 'We primarily support Singapore-based brands, regional B2B companies, industrial manufacturers, medical suppliers, and cross-border enterprises entering or expanding their presence in mainland China.'
    },
    {
      question: language === 'zh' ? '生成式引擎优化 (GEO) 与传统 SEO 有何区别？' : language === 'ms' ? 'Bagaimanakah Optimasi Enjin Generatif (GEO) berbeza daripada SEO tradisional?' : language === 'vi' ? 'GEO khác với SEO truyền thống như thế nào?' : 'How does Generative Engine Optimization (GEO) differ from traditional SEO?',
      answer: language === 'zh' ? '传统 SEO 侧重于搜索引擎的关键词排名列表。GEO 则侧重于大语言模型 (LLM) 向量空间中的品牌语义表现、实体引用及合规度，确保 AI 引擎主动推荐您的品牌。' : language === 'ms' ? 'SEO tradisional mengoptimumkan senarai kedudukan kata kunci. GEO mengoptimumkan kehadiran semantik, petikan entiti, dan pematuhan perundangan jenama anda dalam ruang vektor LLM.' : language === 'vi' ? 'SEO truyền thống tối ưu hóa danh sách từ khóa. GEO tối ưu hóa sự hiện diện ngữ nghĩa, trích dẫn thực thể và tuân thủ pháp lý trong không gian vector LLM.' : 'Traditional SEO optimizes for keyword rank lists in web search engines. GEO optimizes your brand’s semantic presence, entity citations, and regulatory compliance within LLM vector spaces.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 max-w-[1280px] mx-auto border-t border-[#c2c6d7]" id="faq">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono-code font-bold text-[#0056c5] uppercase tracking-wider bg-[#eff4ff] px-3.5 py-1 rounded border border-[#d9e2ff]">
            {language === 'zh' ? '常见问题解答' : language === 'ms' ? 'SOALAN LAZIM' : language === 'vi' ? 'CÂU HỎI THƯỜNG GẶP' : 'FREQUENTLY ASKED QUESTIONS'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1c30]">
            {language === 'zh' ? '为跨境决策者解惑' : language === 'ms' ? 'Jawapan Clear untuk Pembuat Keputusan' : language === 'vi' ? 'Giải đáp rõ ràng cho nhà quản lý' : 'Clear Answers for Cross-Border Decision Makers'}
          </h2>
          <p className="text-[#424654] text-sm sm:text-base">
            {language === 'zh' ? '了解我们线上咨询模式、服务范围及 AI 能见度优化方案的核心解答。' : language === 'ms' ? 'Semua yang anda perlu tahu mengenai penasihat dalam talian dan pendekatan keterlihatan AI kami.' : language === 'vi' ? 'Tất cả thông tin cần biết về dịch vụ tư vấn trực tuyến và giải pháp hiển thị AI.' : 'Everything you need to know about our online-first advisory, market scope, and AI visibility approach.'}
          </p>
        </div>

        <div className="space-y-4 pt-2">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-[#c2c6d7] rounded-xl overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex justify-between items-center gap-4 hover:bg-[#f8f9ff] transition-colors"
                >
                  <span className="font-bold text-[#0b1c30] text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <span className="material-symbols-outlined text-[#0056c5] shrink-0 transition-transform duration-200">
                    {isOpen ? 'remove' : 'add'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-[#424654] text-sm sm:text-base leading-relaxed border-t border-[#eff4ff]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
