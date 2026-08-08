import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const CoreTech: React.FC = () => {
  const { language } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  const STEPS = [
    {
      num: '01',
      title: language === 'zh' ? '网信办算法备案合规接入' : language === 'ms' ? 'Integrasi Perundangan CAC' : language === 'vi' ? 'Tích hợp quy định CAC' : 'CAC Filing Integration',
      summary: language === 'zh' ? '跨境数据驻留与深度合成算法合规标准' : language === 'ms' ? 'Piawaian kawal selia kediaman data rentas sempadan.' : language === 'vi' ? 'Tiêu chuẩn lưu trữ dữ liệu xuyên biên giới.' : 'Regulatory standards for cross-border data residency.',
      details: language === 'zh' ? '确保在公开向量索引前，全面符合国家网信办 (CAC) 深度合成监管规定及数据出境安全评估标准。' : language === 'ms' ? 'Memastikan pematuhan penuh dengan peraturan sintesis mendalam Pentadbiran Siber China (CAC).' : language === 'vi' ? 'Đảm bảo tuân thủ đầy đủ các quy định về tổng hợp dữ liệu sâu của CAC Trung Quốc.' : 'Ensures full compliance with the Cyberspace Administration of China (CAC) deep synthesis regulations and data export security assessments before public indexation.'
    },
    {
      num: '02',
      title: language === 'zh' ? '向量空间权威算法优化' : language === 'ms' ? 'Algoritma Ditingkatkan' : language === 'vi' ? 'Thuật toán tối ưu hóa' : 'Optimized Algorithms',
      summary: language === 'zh' ? '向量高维嵌入与品牌权威权重映射' : language === 'ms' ? 'Pemberatan autoriti jenama ruang vektor.' : language === 'vi' ? 'Trọng số uy tín thương hiệu trong không gian vector.' : 'Vector space brand authority weighting.',
      details: language === 'zh' ? '定制高维向量 Embedding，直接映射至百度文心一言、阿里通义千问与 Moonshot Kimi 向量集群，大幅提升品牌推荐概率。' : language === 'ms' ? 'Penyematan berdimensi tinggi tersuai yang dipetakan terus ke kluster vektor Baidu Ernie, Tongyi, dan Kimi.' : language === 'vi' ? 'Nhúng vector nhiều chiều tùy chỉnh được ánh xạ trực tiếp vào các cụm vector Baidu Ernie, Tongyi và Kimi.' : 'Custom high-dimensional embeddings mapped directly to Baidu Ernie, Tongyi, and Kimi vector clusters to maximize brand recommendation probability.'
    },
    {
      num: '03',
      title: language === 'zh' ? '自适应大模型知识图谱' : language === 'ms' ? 'Model Adaptif' : language === 'vi' ? 'Mô hình thích ứng' : 'Adaptive Models',
      summary: language === 'zh' ? '将新加坡企业价值提炼转译为中文权威引用' : language === 'ms' ? 'Menterjemah nilai SG kepada isyarat China.' : language === 'vi' ? 'Chuyển đổi giá trị SG thành tín hiệu Trung Quốc.' : 'Translating SG value props to China signals.',
      details: language === 'zh' ? '动态 Prompt 提示词工程与知识图谱转译，将新加坡企业的专业凭证转化为中国主流 LLM 训练集认可的权威引用。' : language === 'ms' ? 'Petunjuk dinamik dan terjemahan graf pengetahuan yang menukar kelayakan Singapura kepada petikan LLM.' : language === 'vi' ? 'Chuyển đổi chứng nhận doanh nghiệp Singapore thành trích dẫn LLM uy tín tại Trung Quốc.' : 'Dynamic prompt and knowledge graph translation converting Singapore business credentials into authoritative Chinese LLM training citations.'
    }
  ];

  return (
    <section className="py-20 px-6 max-w-[1280px] mx-auto border-t border-[#c2c6d7]">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-mono-code font-bold text-[#0056c5] uppercase tracking-wider bg-[#eff4ff] px-3 py-1 rounded border border-[#d9e2ff]">
          {language === 'zh' ? '独家 GEO 引擎管线' : language === 'ms' ? 'SALURAN GEO EKSKLUSIF' : language === 'vi' ? 'QUY TRÌNH GEO ĐỘC QUYỀN' : 'PROPRIETARY GEO PIPELINE'}
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1c30] mt-4">
          {language === 'zh' ? '核心 GEO 引擎架构' : language === 'ms' ? 'Arkitektur Enjin Teras' : language === 'vi' ? 'Kiến trúc bộ máy cốt lõi' : 'Core Engine Architecture'}
        </h2>
        <p className="text-[#424654] text-base mt-2">
          {language === 'zh' ? '结构化三层方法论，架起新加坡企业数据与中国生成式大模型层之间的无缝通道。' : language === 'ms' ? 'Metodologi 3 lapisan terstruktur yang menghubungkan data Singapura dengan lapisan model generatif China.' : language === 'vi' ? 'Phương pháp 3 lớp cấu trúc kết nối dữ liệu doanh nghiệp Singapore với các lớp mô hình AI Trung Quốc.' : 'Structured 3-layer methodology bridging Singapore enterprise data with mainland Chinese generative model layers.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column (6 cols): Stepper List */}
        <div className="lg:col-span-6 space-y-4">
          {STEPS.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white border-[#0056c5] shadow-md'
                    : 'bg-[#f8f9ff] border-[#c2c6d7] hover:border-[#0056c5]'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`font-mono-code font-extrabold text-xl px-2.5 py-1 rounded ${
                      isSelected
                        ? 'bg-[#0056c5] text-white'
                        : 'bg-[#eff4ff] text-[#0056c5]'
                    }`}
                  >
                    {step.num}
                  </div>

                  <div className="flex-1 space-y-1">
                    <h3 className="font-bold text-[#0b1c30] text-lg">
                      {step.title}
                    </h3>
                    <p className="text-xs font-medium text-[#0056c5]">
                      {step.summary}
                    </p>
                    {isSelected && (
                      <p className="text-xs text-[#424654] leading-relaxed pt-2 border-t border-[#e2e8f0] animate-fade-in">
                        {step.details}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column (6 cols): Interactive Architecture Display Panel */}
        <div className="lg:col-span-6">
          <div className="rounded-2xl border border-[#0056c5] bg-[#0b1c30] p-6 text-white shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-700 pb-3">
              <div className="flex items-center gap-2 text-xs font-mono-code font-bold text-[#166ef1]">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>PIPELINE LAYER {STEPS[activeStep].num}: {STEPS[activeStep].title.toUpperCase()}</span>
              </div>
              <span className="text-[11px] font-mono-code bg-white/10 text-slate-300 px-2 py-0.5 rounded border border-white/20">
                100% CAC COMPLIANT
              </span>
            </div>

            <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 font-mono-code text-xs space-y-3">
              <div className="flex justify-between text-slate-400">
                <span>{language === 'zh' ? '目标大模型生态:' : 'Active Model Target:'}</span>
                <span className="text-emerald-400 font-bold">Baidu Ernie + Tongyi + Kimi</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>{language === 'zh' ? '向量空间维度:' : 'Vector Dimension:'}</span>
                <span className="text-sky-300 font-bold">1536-dim High-Dense Embeddings</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>{language === 'zh' ? '数据传输通道:' : 'Signal Propagation:'}</span>
                <span className="text-amber-300 font-bold">Cross-Border SG Edge CDN</span>
              </div>
            </div>

            <div className="p-4 bg-[#0056c5]/20 border border-[#0056c5]/40 rounded-xl space-y-2">
              <div className="text-xs font-bold text-white uppercase font-mono-code flex items-center justify-between">
                <span>{language === 'zh' ? '图层执行详情' : 'Layer Execution Details'}</span>
                <span className="text-emerald-400 text-[10px]">{language === 'zh' ? '引擎实时同步' : 'REALTIME ENGINE SYNC'}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {STEPS[activeStep].details}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono-code pt-1">
              <div className="p-2 bg-white/5 rounded border border-white/10">
                <div className="text-[10px] text-slate-400">{language === 'zh' ? '召回率' : 'Recall Rate'}</div>
                <div className="font-bold text-emerald-400 text-sm">99.4%</div>
              </div>
              <div className="p-2 bg-white/5 rounded border border-white/10">
                <div className="text-[10px] text-slate-400">{language === 'zh' ? '响应延时' : 'Latency'}</div>
                <div className="font-bold text-sky-400 text-sm">&lt;85ms</div>
              </div>
              <div className="p-2 bg-white/5 rounded border border-white/10">
                <div className="text-[10px] text-slate-400">{language === 'zh' ? '防护状态' : 'Guard Status'}</div>
                <div className="font-bold text-indigo-300 text-sm">{language === 'zh' ? '受保护' : 'PROTECTED'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
