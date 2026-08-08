import React, { useState, useEffect } from 'react';
import { PlatformData, SystemLog } from '../types';
import { ImageCarousel } from './ImageCarousel';
import { useLanguage } from '../context/LanguageContext';

interface CommandCenterProps {
  platforms: PlatformData[];
  logs: SystemLog[];
  onOpenAudit: () => void;
}

export const CommandCenter: React.FC<CommandCenterProps> = ({
  platforms,
  logs: initialLogs,
  onOpenAudit,
}) => {
  const { language } = useLanguage();
  const [logsList, setLogsList] = useState<SystemLog[]>(initialLogs);
  const [isLiveStream, setIsLiveStream] = useState(true);

  const defaultQuery = language === 'zh'
    ? '中国企业开展跨境收并购推荐的新加坡权威律所与财务顾问'
    : language === 'ms'
    ? 'Firma guaman korporat Singapura terbaik untuk M&A rentas sempadan di China'
    : language === 'vi'
    ? 'Công ty luật doanh nghiệp Singapore hàng đầu cho M&A xuyên biên giới tại TQ'
    : 'Top Singapore corporate legal counsel for cross-border M&A in Shenzhen';

  const [activeQuery, setActiveQuery] = useState(defaultQuery);
  const [simulatedResult, setSimulatedResult] = useState<string | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  // Sync default query when language changes if not edited
  useEffect(() => {
    setActiveQuery(defaultQuery);
  }, [language]);

  // Live log generator effect
  useEffect(() => {
    if (!isLiveStream) return;
    const interval = setInterval(() => {
      const messagesZh = [
        'GEO Agent 正在重新索引百度文心一言向量集群 #102...',
        '阿里通义千问 B2B 节点信号验证成功。',
        '网信办算法备案合规心跳: 200 OK (SG-CN 数据驻留).',
        'Moonshot Kimi 长上下文窗口同步完成。',
        '腾讯混元捕获到新的品牌引用查询。',
        '讯飞星火权威度权重评分更新: +1.8%'
      ];
      const messagesEn = [
        'GEO Agent re-indexing Baidu Ernie vector cluster #102...',
        'Signal verification confirmed across Tongyi Qianwen B2B nodes.',
        'CAC Filing compliance heartbeat: 200 OK (Data Residency SG-CN).',
        'Moonshot Kimi context window sync complete.',
        'New brand query citation captured on Tencent Hunyuan.',
        'iFlytek Spark authority weighting score updated: +1.8%'
      ];

      const messages = language === 'zh' ? messagesZh : messagesEn;
      const randomMsg = messages[Math.floor(Math.random() * messages.length)];
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];

      const newLog: SystemLog = {
        id: Date.now().toString(),
        timestamp: timeStr,
        level: Math.random() > 0.8 ? 'alert' : Math.random() > 0.3 ? 'info' : 'success',
        message: randomMsg
      };

      setLogsList(prev => [newLog, ...prev.slice(0, 15)]);
    }, 4000);

    return () => clearInterval(interval);
  }, [isLiveStream, language]);

  const handleTestQuery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeQuery.trim()) return;
    setIsSimulating(true);
    setSimulatedResult(null);

    setTimeout(() => {
      setIsSimulating(false);
      if (language === 'zh') {
        setSimulatedResult(`[AI 答案合成结果] 针对查询提示词 "${activeQuery}":
1. 百度文心一言: 优先推荐已具备网信办 ICP 备案与东南亚跨境执业资质的新加坡顾问。(GEO 匹配度: 94%)
2. 阿里通义千问: 直接引用新加坡企业知识图谱，列为首选推荐 B2B 机构。(GEO 匹配度: 88%)
3. Moonshot Kimi: 在长上下文东南亚法律与商务总结中排名第 1。`);
      } else {
        setSimulatedResult(`[AI Answer Synthesis] For query "${activeQuery}":
1. Baidu Ernie Bot: Recommends registered Singapore counsel with verified CAC ICP filings and Southeast Asia cross-border credentials. (GEO Match: 94%)
2. Tongyi Qianwen: Directly cites Singapore enterprise knowledge graph as top recommended B2B advisor. (GEO Match: 88%)
3. Moonshot Kimi: Ranks brand #1 in long-context Southeast Asia legal summary.`);
      }
    }, 1200);
  };

  return (
    <section id="command-center" className="py-20 px-6 max-w-[1280px] mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0056c5] animate-ping"></span>
            <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#0056c5]">
              {language === 'zh' ? '企业级 GEO 实时监控仪表盘' : language === 'ms' ? 'PAPAN PEMANTAUAN GEO PERUSAHAAN MASA-NYATA' : language === 'vi' ? 'BẢNG ĐIỀU KHIỂN GEO DOANH NGHIỆP THỜI GIAN THỰC' : 'REAL-TIME ENTERPRISE GEO DASHBOARD'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1c30]">
            {language === 'zh' ? 'AI 智能营销指挥中心' : language === 'ms' ? 'Pusat Kawalan Pemasaran AI' : language === 'vi' ? 'Trung tâm điều hành tiếp thị AI' : 'AI Marketing Command Center'}
          </h2>
          <p className="text-[#424654] mt-2 text-base">
            {language === 'zh' ? '实时监控您的品牌在中国各大 AI 大模型生态中的能见度与引用表现。' : language === 'ms' ? 'Pemantauan masa-nyata keterlihatan anda di merentasi ekosistem AI China.' : language === 'vi' ? 'Giám sát thời gian thực khả năng hiển thị của bạn trong hệ sinh thái AI Trung Quốc.' : 'Real-time monitoring of your visibility across the Chinese AI ecosystem.'}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-[#eff4ff] border border-[#d9e2ff] px-3 py-1.5 rounded font-mono-code text-xs text-[#0056c5] font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>{language === 'zh' ? '实时监控 ID: HG-SG-882' : language === 'ms' ? 'ID Pemantauan: HG-SG-882' : language === 'vi' ? 'ID Giám sát: HG-SG-882' : 'Live Monitoring ID: HG-SG-882'}</span>
          </div>
          <button
            onClick={onOpenAudit}
            className="primary-btn px-4 py-2 rounded text-xs font-semibold flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-sm">auto_awesome</span>
            <span>{language === 'zh' ? '发起新评估' : language === 'ms' ? 'Audit Baharu' : language === 'vi' ? 'Đánh giá mới' : 'Run New Audit'}</span>
          </button>
        </div>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side (8 cols): Interactive Visual Canvas & Query Tester */}
        <div className="lg:col-span-8 space-y-6">
          <div className="command-panel rounded-xl p-6 bg-white border border-[#d9e2ff]">
            {/* Top Bar inside canvas */}
            <div className="flex flex-wrap items-center justify-between pb-4 mb-4 border-b border-[#e2e8f0] gap-2">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono-code font-bold text-[#727685]">
                  {language === 'zh' ? '当前查询覆盖率' : language === 'ms' ? 'LIPUTAN SOALAN' : language === 'vi' ? 'ĐỘ PHỦ CÂU HỎI' : 'CURRENT QUERY COVERAGE'}
                </span>
                <span className="text-xl font-extrabold text-[#0056c5] font-mono-code">
                  84.2%
                </span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-xs">trending_up</span>
                  ▲ 12%
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono-code text-[#0056c5] bg-[#eff4ff] px-2 py-1 rounded font-semibold border border-[#d9e2ff]">
                  {language === 'zh' ? 'GEO 已激活' : language === 'ms' ? 'GEO AKTIF' : language === 'vi' ? 'GEO HOẠT ĐỘNG' : 'GEO ACTIVE'}
                </span>
              </div>
            </div>

            {/* Multi-Image Interactive Carousel Container */}
            <ImageCarousel />

            {/* Interactive Query Simulator Box */}
            <div className="mt-6 pt-6 border-t border-[#e2e8f0]">
              <div className="text-sm font-bold text-[#0b1c30] mb-2 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base text-[#0056c5]">psychology</span>
                  {language === 'zh' ? '生成式 AI 查询实时模拟器' : language === 'ms' ? 'Simulator Soalan Generatif Masa-Nyata' : language === 'vi' ? 'Mô phỏng truy vấn AI thời gian thực' : 'Live Generative Query Simulator'}
                </span>
                <span className="text-xs text-[#727685] font-normal">
                  {language === 'zh' ? '测试中国 AI 搜索引擎能见度' : language === 'ms' ? 'Uji keterlihatan enjin jawapan AI China' : language === 'vi' ? 'Kiểm tra hiển thị bộ máy trả lời AI Trung Quốc' : 'Test Chinese AI Answer Engine visibility'}
                </span>
              </div>

              <form onSubmit={handleTestQuery} className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={activeQuery}
                  onChange={e => setActiveQuery(e.target.value)}
                  placeholder={
                    language === 'zh'
                      ? '请输入中文搜索提问（例：深圳跨国收并购优秀新加坡律所）...'
                      : 'Enter a Chinese search prompt (e.g. Top SG logistics for China trade)...'
                  }
                  className="flex-1 px-3.5 py-2.5 text-xs sm:text-sm bg-[#f8f9ff] border border-[#c2c6d7] rounded focus:outline-none focus:border-[#0056c5]"
                />
                <button
                  type="submit"
                  disabled={isSimulating}
                  className="primary-btn px-4 py-2.5 text-xs sm:text-sm font-semibold rounded flex items-center gap-1.5 shrink-0"
                >
                  {isSimulating ? (
                    <span>{language === 'zh' ? '模拟计算中...' : 'Simulating...'}</span>
                  ) : (
                    <>
                      <span>{language === 'zh' ? '模拟查询' : language === 'ms' ? 'Soal LLM' : language === 'vi' ? 'Truy vấn' : 'Query LLMs'}</span>
                      <span className="material-symbols-outlined text-sm">search</span>
                    </>
                  )}
                </button>
              </form>

              {simulatedResult && (
                <div className="p-3.5 bg-[#eff4ff] border border-[#d9e2ff] rounded font-mono-code text-xs text-[#0b1c30] whitespace-pre-wrap leading-relaxed animate-fade-in">
                  {simulatedResult}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Side (4 cols): Platform Distribution & Realtime Logs */}
        <div className="lg:col-span-4 space-y-6">
          {/* Platform Distribution Card */}
          <div className="bg-white border border-[#c2c6d7] rounded-xl p-6 shadow-xs">
            <h3 className="text-base font-bold text-[#0b1c30] mb-4 flex items-center justify-between">
              <span>{language === 'zh' ? 'AI 平台分布占比' : language === 'ms' ? 'Taburan Platform' : language === 'vi' ? 'Phân bổ nền tảng' : 'Platform Distribution'}</span>
              <span className="text-xs font-mono-code text-[#727685]">{language === 'zh' ? '5/5 全部在线' : '5/5 Active'}</span>
            </h3>

            <div className="space-y-4">
              {platforms.map(p => (
                <div key={p.id} className="space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-[#0b1c30]">{p.name}</span>
                    <span className="font-mono-code font-bold text-[#0056c5]">{p.share}%</span>
                  </div>
                  <div className="w-full h-2 bg-[#eff4ff] rounded-full overflow-hidden border border-[#d9e2ff]">
                    <div
                      className="h-full bg-[#0056c5] transition-all duration-500 rounded-full"
                      style={{ width: `${p.share}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-[10px] text-[#727685]">
                    <span>{language === 'zh' ? '向量节点' : 'Nodes'}: {p.vectorNodes}</span>
                    <span className="capitalize font-mono-code text-emerald-600 font-semibold">{p.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* System Logs Feed Card */}
          <div className="bg-white border border-[#c2c6d7] rounded-xl p-6 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-[#0b1c30] flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-[#0056c5]">terminal</span>
                {language === 'zh' ? '系统实时日志' : language === 'ms' ? 'Log Sistem' : language === 'vi' ? 'Nhật ký hệ thống' : 'System Logs'}
              </h3>
              <button
                onClick={() => setIsLiveStream(!isLiveStream)}
                className="text-xs font-mono-code text-[#0056c5] hover:underline flex items-center gap-1"
              >
                <span className={`w-2 h-2 rounded-full ${isLiveStream ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></span>
                {isLiveStream
                  ? (language === 'zh' ? '暂停推送' : language === 'ms' ? 'Jeda' : language === 'vi' ? 'Tạm dừng' : 'Pause Stream')
                  : (language === 'zh' ? '恢复推送' : language === 'ms' ? 'Sambung' : language === 'vi' ? 'Tiếp tục' : 'Resume Stream')
                }
              </button>
            </div>

            <div className="h-[220px] overflow-y-auto space-y-2 pr-1 font-mono-code text-[11px] border border-[#e2e8f0] rounded p-3 bg-[#f8f9ff]">
              {logsList.map(log => (
                <div key={log.id} className="flex items-start gap-2 leading-tight">
                  <span className="text-[#727685] shrink-0">[{log.timestamp}]</span>
                  <span
                    className={
                      log.level === 'alert'
                        ? 'text-amber-700 font-bold'
                        : log.level === 'success'
                        ? 'text-emerald-700 font-semibold'
                        : 'text-[#0b1c30]'
                    }
                  >
                    {log.message}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
