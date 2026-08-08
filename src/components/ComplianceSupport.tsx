import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface ComplianceSupportProps {
  onOpenConsultation: () => void;
}

export const ComplianceSupport: React.FC<ComplianceSupportProps> = ({ onOpenConsultation }) => {
  const { language } = useLanguage();

  return (
    <section className="py-20 px-6 max-w-[1280px] mx-auto border-t border-[#c2c6d7]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Market Entry Discipline Card */}
        <div className="p-8 bg-white border border-[#c2c6d7] rounded-2xl shadow-xs hover:border-[#0056c5] transition-all space-y-6">
          <div className="w-12 h-12 rounded-lg bg-[#eff4ff] text-[#0056c5] flex items-center justify-center font-bold">
            <span className="material-symbols-outlined text-2xl">gavel</span>
          </div>

          <div>
            <span className="text-xs font-mono-code font-bold text-[#0056c5] uppercase tracking-wider">
              {language === 'zh' ? '监管合规框架' : language === 'ms' ? 'KERANGKA KAWAL SELIA' : language === 'vi' ? 'KHUNG PHÁP LÝ' : 'REGULATORY FRAMEWORK'}
            </span>
            <h3 className="text-2xl font-extrabold text-[#0b1c30] mt-1">
              {language === 'zh' ? '严格的中国市场准入纪律' : language === 'ms' ? 'Disiplin Kemasukan Pasaran' : language === 'vi' ? 'Kỷ luật gia nhập thị trường' : 'Market Entry Discipline'}
            </h3>
            <p className="text-sm text-[#424654] mt-2 leading-relaxed">
              {language === 'zh' ? '进入中国生成式 AI 搜索生态，必须严格遵循国家法律法规、算法备案流程与数据出境安全评估。' : language === 'ms' ? 'Menavigasi landskap AI China memerlukan pematuhan ketat terhadap undang-undang dan pendaftaran.' : language === 'vi' ? 'Hiểu rõ môi trường pháp lý AI Trung Quốc yêu cầu tuân thủ nghiêm ngặt các quy định.' : 'Navigating mainland China’s AI regulatory landscape requires strict adherence to legal standards, filing procedures, and data security mandates.'}
            </p>
          </div>

          <ul className="space-y-3 text-xs sm:text-sm text-[#0b1c30] font-medium">
            <li className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-base text-emerald-600">check_circle</span>
              <span>{language === 'zh' ? '国家网信办 (CAC) 深度合成与生成式 AI 算法备案' : language === 'ms' ? 'Pendaftaran Algoritma Sintesis Mendalam CAC' : language === 'vi' ? 'Đăng ký thuật toán AI & tổng hợp sâu của CAC' : 'CAC Deep Synthesis & Generative AI Algorithm Filings'}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-base text-emerald-600">check_circle</span>
              <span>{language === 'zh' ? '跨境数据安全评估与 ICP 经营许可证适配' : language === 'ms' ? 'Penilaian Keselamatan Data Rentas Sempadan & Lesen ICP' : language === 'vi' ? 'Đánh giá an toàn dữ liệu xuyên biên giới & Giấy phép ICP' : 'Cross-Border Data Security Assessments & ICP License Alignment'}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-base text-emerald-600">check_circle</span>
              <span>{language === 'zh' ? '新加坡-中国合规数据安全传输与驻留机制' : language === 'ms' ? 'Kediaman Data & Penghantaran Selamat SG-China' : language === 'vi' ? 'Lưu trữ dữ liệu & truyền an toàn SG-TQ' : 'Data Residency & Secure Singapore-China Transmission'}</span>
            </li>
          </ul>
        </div>

        {/* Singapore Local Support Card */}
        <div className="p-8 bg-white border border-[#c2c6d7] rounded-2xl shadow-xs hover:border-[#0056c5] transition-all space-y-6 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="w-12 h-12 rounded-lg bg-[#eff4ff] text-[#0056c5] flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-2xl">support_agent</span>
            </div>

            <div>
              <span className="text-xs font-mono-code font-bold text-[#0056c5] uppercase tracking-wider">
                {language === 'zh' ? '线上优先顾问服务' : language === 'ms' ? 'PENASIHAT DALAM TALIAN' : language === 'vi' ? 'TƯ VẤN TRỰC TUYẾN' : 'ONLINE-FIRST ADVISORY'}
              </span>
              <h3 className="text-2xl font-extrabold text-[#0b1c30] mt-1">
                {language === 'zh' ? '新加坡专业顾问团队' : language === 'ms' ? 'Pasukan Penasihat Singapura' : language === 'vi' ? 'Đội ngũ tư vấn Singapore' : 'Singapore Advisory Team'}
              </h3>
              <p className="text-sm text-[#424654] mt-2 leading-relaxed">
                {language === 'zh' ? '直接与我们驻新加坡的专家团队沟通。我们采用专注线上的沟通机制，无缝对接东南亚管理者，确保高效沟通零时差。' : language === 'ms' ? 'Bekerja terus dengan pasukan penasihat kami di Singapura secara dalam talian tanpa halangan komunikasi.' : language === 'vi' ? 'Làm việc trực tiếp với đội ngũ tư vấn tại Singapore trực tuyến không có rào cản giao tiếp.' : 'Work directly with our Singapore-based advisory team. We operate as an online-first business, supporting regional clients remotely without offshore friction or communication delays.'}
              </p>
            </div>

            <div className="p-4 bg-[#f8f9ff] border border-[#d9e2ff] rounded-lg space-y-2 text-xs">
              <div className="flex justify-between items-center text-[#0b1c30]">
                <span className="font-bold">{language === 'zh' ? '线上顾问咨询台' : 'Online Advisory Desk'}</span>
                <span className="text-emerald-700 font-mono-code font-bold">{language === 'zh' ? '新加坡时间远程支持' : 'Remote SGT Support'}</span>
              </div>
              <div className="text-[#727685]">
                {language === 'zh' ? '为新加坡及区域管理层量身定制远程战略咨询、合规审查与高管能见度报告。' : language === 'ms' ? 'Konsultasi strategi maya, pemeriksaan pematuhan, dan laporan eksekutif.' : language === 'vi' ? 'Tư vấn chiến lược từ xa, kiểm tra tuân thủ và báo cáo điều hành.' : 'Remote strategy consultations, compliance checkups, and executive reporting tailored for Singapore and regional leadership.'}
              </div>
            </div>
          </div>

          <button
            onClick={onOpenConsultation}
            className="primary-btn w-full py-3.5 rounded font-semibold text-sm flex items-center justify-center gap-2 shadow-xs"
          >
            <span>{language === 'zh' ? '预约新加坡线上咨询' : language === 'ms' ? 'Minta Konsultasi SG' : language === 'vi' ? 'Yêu cầu tư vấn SG' : 'Request a Remote Consultation'}</span>
            <span className="material-symbols-outlined text-base">calendar_month</span>
          </button>
        </div>
      </div>
    </section>
  );
};
