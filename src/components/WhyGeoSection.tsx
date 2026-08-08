import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface WhyGeoSectionProps {
  onOpenMethodology: () => void;
}

export const WhyGeoSection: React.FC<WhyGeoSectionProps> = ({ onOpenMethodology }) => {
  const { language } = useLanguage();

  return (
    <section className="py-20 px-6 max-w-[1280px] mx-auto border-t border-[#c2c6d7]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column (6 cols): Text content */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#eff4ff] border border-[#d9e2ff] text-[#0056c5] text-xs font-semibold rounded uppercase font-mono-code">
            <span>{language === 'zh' ? '搜索行为变革' : language === 'ms' ? 'PERUBAHAN TINGKAH LAKU CARIAN' : language === 'vi' ? 'THAY ĐỔI HÀNH VI TÌM KIẾM' : 'SHIFT IN SEARCH BEHAVIOR'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1c30] leading-tight">
            {language === 'zh' ? '中国用户的搜索习惯正在向 AI 优先全面转型。' : language === 'ms' ? 'Perjalanan carian China menjadi berasaskan AI.' : language === 'vi' ? 'Hành vi tìm kiếm tại Trung Quốc đang dịch chuyển sang AI.' : "China's search journey is becoming AI-first."}
          </h2>

          <p className="text-[#424654] text-base sm:text-lg leading-relaxed">
            {language === 'zh' ? '传统的“搜索引擎”时代正在快速演变。中国买家和决策者越来越多地直接通过大语言模型询问品牌推荐、B2B 采购建议以及专业服务评估。' : language === 'ms' ? 'Era "Enjin Carian" tradisional kini berkembang. Pengguna di China semakin banyak mendraf soalan terus kepada LLM untuk syor jenama dan perolehan B2B.' : language === 'vi' ? 'Kỷ nguyên tìm kiếm truyền thống đang tiến hóa. Người dùng tại Trung Quốc ngày càng nhiều hỏi trực tiếp các mô hình LLM để tìm kiếm thương hiệu và đối tác B2B.' : 'The traditional "Search Engine" era is evolving. Users in China are increasingly querying LLMs directly for brand recommendations, B2B procurement advice, and professional service vetting.'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-white border border-[#c2c6d7] rounded-lg space-y-2 hover:border-[#0056c5] transition-colors">
              <div className="flex items-center gap-2 text-[#0056c5] font-bold text-sm">
                <span className="material-symbols-outlined text-xl">forum</span>
                <span>{language === 'zh' ? '问答合成引擎' : language === 'ms' ? 'Enjin Jawapan AI' : language === 'vi' ? 'Bộ máy trả lời AI' : 'Answer Engines'}</span>
              </div>
              <p className="text-xs text-[#424654] leading-normal">
                {language === 'zh' ? '从传统的网页链接列表，演变为大模型层实时生成的权威品牌解答。' : language === 'ms' ? 'Daripada senarai pautan kepada jawapan generatif berautoriti yang disintesis oleh lapisan model LLM.' : language === 'vi' ? 'Từ danh sách liên kết thành câu trả lời tổng hợp có thẩm quyền do LLM tạo ra.' : 'From lists of links to direct, authoritative generative answers synthesized by LLM model layers.'}
              </p>
            </div>

            <div className="p-4 bg-white border border-[#c2c6d7] rounded-lg space-y-2 hover:border-[#0056c5] transition-colors">
              <div className="flex items-center gap-2 text-[#0056c5] font-bold text-sm">
                <span className="material-symbols-outlined text-xl">account_tree</span>
                <span>{language === 'zh' ? '权威信任图谱' : language === 'ms' ? 'Pemetaan Kepercayaan' : language === 'vi' ? 'Sơ đồ độ tin cậy' : 'Trust Mapping'}</span>
              </div>
              <p className="text-xs text-[#424654] leading-normal">
                {language === 'zh' ? 'AI 大模型会根据可信的区域 Vector 向量与监管合规数据来评估您的品牌权威度。' : language === 'ms' ? 'Model AI memetakan autoriti jenama anda merentasi vektor serantau yang dipercayai dan pendaftaran kawal selia.' : language === 'vi' ? 'Các mô hình AI định vị uy tín thương hiệu của bạn dựa trên dữ liệu vector và tuân thủ pháp lý.' : "AI models map your brand's authority across trusted regional vectors and regulatory registries."}
              </p>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onOpenMethodology}
              className="secondary-btn px-6 py-3 rounded text-sm font-semibold flex items-center gap-2"
            >
              <span>{language === 'zh' ? '了解 GEO 方法论框架' : language === 'ms' ? 'Terokai Kerangka GEO' : language === 'vi' ? 'Khám phá khung GEO' : 'Explore GEO Framework'}</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Right Column (6 cols): Image + Stat Overlay */}
        <div className="lg:col-span-6">
          <div className="relative rounded-2xl overflow-hidden border border-[#c2c6d7] shadow-lg group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiPY2ZAMRgmowVqC-Bfjn8CJdkLqxZC49SZCNcTGymyvJd0jwFvNpFtKPd7y_I79oqz5p5Vn_Ua6L-kA0Osz17q4AiPSZoGTh3s7O0lQB4hw7f91vHYyvfyNPrBYvQsR6gjHytQSKbubcju0ckNW8yKO_Rgkj0x3eMrqH_f31gH48lhEh4OGbeMD7Mh8si7mQjTjn12nNwWPcTt07V8J_fh1X-Wibq416YAgw__Z5RW0iwhZuFy3_QTQ"
              alt="China AI Search Journey"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Floating Stat Card Overlay */}
            <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/95 backdrop-blur-md border border-[#d9e2ff] rounded-xl shadow-xl space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0056c5] font-mono-code">
                70%
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#0b1c30]">
                {language === 'zh' ? '中国 B2B 采购决策者已习惯使用 AI 辅助搜索' : language === 'ms' ? 'Pembuat keputusan B2B di China kini menggunakan carian dibantu AI.' : language === 'vi' ? 'Người quyết định B2B tại TQ hiện sử dụng tìm kiếm hỗ trợ bởi AI.' : 'of B2B decision makers in China now utilize AI-assisted search.'}
              </div>
              <div className="text-[11px] text-[#727685] font-medium">
                {language === 'zh' ? '数据来源：中国企业级生成式 AI 搜索调研报告' : language === 'ms' ? 'Sumber: Tinjauan Carian Generatif Perusahaan China' : language === 'vi' ? 'Nguồn: Khảo sát tìm kiếm AI doanh nghiệp Trung Quốc' : 'Source: China Enterprise Generative Search Intelligence Survey'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
