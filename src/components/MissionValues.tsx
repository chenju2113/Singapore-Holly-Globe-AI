import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const MissionValues: React.FC = () => {
  const { language } = useLanguage();

  const VALUES = [
    {
      icon: 'verified_user',
      title: language === 'zh' ? '坚守合规与诚信' : language === 'ms' ? 'Utamakan Integriti' : language === 'vi' ? 'Liêm chính là trên hết' : 'Integrity-First',
      description: language === 'zh' ? '透明的向量管理与长期可持续的算法合规推进，杜绝任何黑帽违规手段。' : language === 'ms' ? 'Pengurusan vektor lutsinar dan pematuhan mampan tanpa teknik gergaji.' : language === 'vi' ? 'Quản lý vector minh bạch và tuân thủ bền vững mà không sử dụng các thủ thuật rủi ro.' : 'Transparent vector management and sustainable, compliant gains without deceptive black-hat techniques.'
    },
    {
      icon: 'code_blocks',
      title: language === 'zh' ? '精准工程架构' : language === 'ms' ? 'Teknologi Presisi' : language === 'vi' ? 'Công nghệ chính xác' : 'Precision Tech',
      description: language === 'zh' ? '专为中文自然语言处理 (NLP) 细微语境与多大模型共识算法架构精心打磨。' : language === 'ms' ? 'Direka khas untuk nuansa Bahasa Cina (NLP) dan arkitektur berbilang LLM.' : language === 'vi' ? 'Được thiết kế riêng cho ngữ nghĩa tiếng Trung (NLP) và kiến trúc đa mô hình LLM.' : 'Engineered specifically for Chinese Natural Language Processing (NLP) nuances and multi-LLM consensus architecture.'
    },
    {
      icon: 'public',
      title: language === 'zh' ? '全球跨境视野' : language === 'ms' ? 'Jangkauan Global' : language === 'vi' ? 'Tầm vóc toàn cầu' : 'Global Reach',
      description: language === 'zh' ? '无缝连接新加坡高端专业服务及科技品牌与中国庞大的市场规模。' : language === 'ms' ? 'Menghubungkan perkhidmatan profesional Singapura terus ke pasaran China.' : language === 'vi' ? 'Kết nối trực tiếp thương hiệu Singapore với quy mô thị trường Trung Quốc.' : 'Directly connecting Singapore professional services and technology brands to mainland China’s market scale.'
    }
  ];

  return (
    <section className="py-20 px-6 max-w-[1280px] mx-auto border-t border-[#c2c6d7] bg-[#f0f4fd]/50">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-mono-code font-bold text-[#0056c5] uppercase tracking-wider bg-[#eff4ff] px-3 py-1 rounded border border-[#d9e2ff]">
          {language === 'zh' ? '核心指导原则' : language === 'ms' ? 'PRINSIP PANDUAN KAMI' : language === 'vi' ? 'NGUYÊN TẮC CỦA CHÚNG TÔI' : 'OUR GUIDING PRINCIPLES'}
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1c30] mt-4">
          {language === 'zh' ? '简单、高效、合规。' : language === 'ms' ? 'Mudah, Efisien, Patuh.' : language === 'vi' ? 'Đơn giản, Hiệu quả, Tuân thủ.' : 'Simple, Efficient, Compliant.'}
        </h2>
        <p className="text-[#424654] text-base mt-3 leading-relaxed">
          {language === 'zh' ? '我们的使命是利用先进的 AI 智能系统，架起新加坡与中国数字生态之间的技术桥梁。' : language === 'ms' ? 'Misi kami adalah melepasi jurang teknikal antara Singapura dan ekosistem digital China melalui sistem AI berdisiplin.' : language === 'vi' ? 'Sứ mệnh của chúng tôi là cầu nối kỹ thuật giữa Singapore và hệ sinh thái kỹ thuật số Trung Quốc qua các hệ thống AI.' : 'Our mission is to bridge the technical gap between Singapore and the Chinese digital ecosystem through disciplined AI systems.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {VALUES.map((val, idx) => (
          <div
            key={idx}
            className="p-6 bg-white border border-[#c2c6d7] rounded-xl shadow-xs hover:border-[#0056c5] hover:shadow-md transition-all space-y-3"
          >
            <div className="w-12 h-12 rounded-lg bg-[#eff4ff] text-[#0056c5] flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-2xl">{val.icon}</span>
            </div>
            <h3 className="text-xl font-bold text-[#0b1c30]">{val.title}</h3>
            <p className="text-sm text-[#424654] leading-relaxed">{val.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
