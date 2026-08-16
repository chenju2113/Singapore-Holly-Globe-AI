import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export interface DashboardImageItem {
  id: string;
  titleEn: string;
  titleZh: string;
  titleJa: string;
  titleMs: string;
  titleVi: string;
  tagEn: string;
  tagZh: string;
  tagJa: string;
  tagMs: string;
  tagVi: string;
  src: string;
  fallbackSrc?: string;
  captionEn: string;
  captionZh: string;
  captionJa: string;
  captionMs: string;
  captionVi: string;
  detailEn: string;
  detailZh: string;
  detailJa: string;
  detailMs: string;
  detailVi: string;
}

const DASHBOARD_IMAGES: DashboardImageItem[] = [
  {
    id: 'industrial-supplier-audit',
    titleEn: 'Singapore Industrial Supplier – China AI Visibility Test Report',
    titleZh: '新加坡工业及医疗供应商——中国 AI 能见度评估报告',
    titleJa: 'シンガポール工業・医療サプライヤー – 中国AI検索可視性テストレポート',
    titleMs: 'Pembekal Industri Singapura – Laporan Ujian Keterlihatan AI China',
    titleVi: 'Nhà cung cấp công nghiệp Singapore – Báo cáo hiển thị AI Trung Quốc',
    tagEn: 'SUPPLIER VISIBILITY AUDIT',
    tagZh: '供应商 AI 能见度评估报告',
    tagJa: 'サプライヤーAI可視性監査',
    tagMs: 'AUDIT KETERLIHATAN PEMBEKAL',
    tagVi: 'ĐÁNH GIÁ HIỂN THỊ NHÀ CUNG CẤP',
    src: 'image.png',
    fallbackSrc: 'image.svg',
    captionEn: 'Supplier Visibility | Procurement-Intent Queries | China Market-Entry Readiness',
    captionZh: '供应商能见度 | 采购意向查询 | 中国市场进入准备度',
    captionJa: 'サプライヤー可視性 | 購買意向クエリ | 中国市場参入適合度',
    captionMs: 'Keterlihatan Pembekal | Carian Niat Perolehan | Kesediaan Kemasukan Pasaran China',
    captionVi: 'Hiển thị nhà cung cấp | Truy vấn mua hàng | Độ sẵn sàng tiến vào Trung Quốc',
    detailEn: 'A sample GEO visibility report showing how a Singapore-based industrial or medical supplier appears across major Chinese AI platforms, including brand mention coverage, competitor comparison, recommendation visibility, and content gaps before market entry.',
    detailZh: '评估报告样例展示了新加坡工业及医疗设备供应商在中国主流 AI 平台的综合能见度表现，包含品牌提及覆盖率、竞品对比排名、大模型推荐位次及内容补全建议。',
    detailJa: 'シンガポールの工業・医療機器サプライヤーが中国の主要AIプラットフォームでどのように認識されているかを示すGEO可視性監査サンプル。ブランド言及率、競合比較、推奨順位、ナレッジ補全推奨を網羅。',
    detailMs: 'Laporan sampel menunjukkan bagaimana pembekal industri Singapura muncul di merentasi platform AI China utama.',
    detailVi: 'Báo cáo mẫu thể hiện khả năng xuất hiện của nhà cung cấp Singapore trên các nền tảng AI chính tại Trung Quốc.',
  },
  {
    id: 'live-vector',
    titleEn: 'Command Center Real-time LLM Vector Topology',
    titleZh: 'Command Center 实时 LLM 向量拓扑',
    titleJa: 'コマンドセンター リアルタイムLLMベクトル網トポロジー',
    titleMs: 'Topologi Vektor LLM Masa-Nyata Pusat Kawalan',
    titleVi: 'Sơ đồ Vector LLM thời gian thực của Trung tâm điều hành',
    tagEn: 'LIVE VECTOR MAPPING',
    tagZh: '实时向量拓扑映射',
    tagJa: 'リアルタイムベクトルマッピング',
    tagMs: 'PEMETAAN VEKTOR MASA-NYATA',
    tagVi: 'SƠ ĐỒ VECTOR THỜI GIAN THỰC',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoNFSk-vJF96t4hV1Dm8nbhxWve9wf5bko0PPKq12dLQJhuUTt50cU61LvsbRGF28sV6EkIz0xvtv97J84PZGlodxzoHbFQDTbr9ufCNtHAcp6gZ8aF1lbz229TgC02DTVokqqtTturCYSuML6DUniWmZhxW4G_rrwY_zL85yorInF7Y4mFZANsLPq9c5pRO7Jnj4ZGAQt34H9XUyRLc1NiVJaxCt2hqzKLHUXVvGONAqojY8dKhWbfw',
    captionEn: 'Node Recall Rate: 84.2% | SG-CN Vector Clusters Syncing',
    captionZh: '节点召回率: 84.2% | SG-CN 向量集群同步中',
    captionJa: 'ノード想起率: 84.2% | SG-CN ベクトルクラスタ同期中',
    captionMs: 'Kadar Panggilan Semula Ditegaskan: 84.2% | Kluster Vektor SG-CN Diselaraskan',
    captionVi: 'Tỷ lệ gọi lại nút: 84.2% | Cụm Vector SG-CN đang đồng bộ',
    detailEn: 'Real-time monitoring of Chinese AI platform vector retrieval distribution, knowledge graph recall rate, and node activity metrics.',
    detailZh: '实时监控中国 AI 平台向量检索分布、知识图谱召回率与节点热度。',
    detailJa: '中国AIプラットフォームのベクトル検索分布、ナレッジグラフ想起率、ノードアクティビティをリアルタイム監視。',
    detailMs: 'Pemantauan masa-nyata taburan carian vektor platform AI China dan kadar panggilan semula graf pengetahuan.',
    detailVi: 'Giám sát thời gian thực phân bổ tìm kiếm vector trên các nền tảng AI Trung Quốc.',
  },
  {
    id: 'platform-share',
    titleEn: 'Top 5 Chinese AI Platforms Brand Visibility & Competitor Audit',
    titleZh: '5 大中国 AI 平台品牌能见度与竞品对比',
    titleJa: '中国5大AIプラットフォーム ブランド可視性・競合比較監査',
    titleMs: 'Keterlihatan Jenama 5 Platform AI China Utama & Audit Pesaing',
    titleVi: 'Khả năng hiển thị thương hiệu & Đánh giá đối thủ trên 5 AI TQ',
    tagEn: 'B2B DISTRIBUTOR DISCOVERY',
    tagZh: 'B2B 分销商与采购能见度',
    tagJa: 'B2Bサプライチェーン・代理店探索',
    tagMs: 'PENEMUAN PENGEDAR B2B',
    tagVi: 'TÌM KIẾM NHÀ PHÂN PHỐI B2B',
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    captionEn: 'Baidu | Tongyi | Kimi | Spark | Hunyuan',
    captionZh: '百度文心一言 | 阿里通义千问 | Kimi | 讯飞星火 | 腾讯混元',
    captionJa: 'Baidu 文心一言 | 通義千問 | Kimi | 訊飛星火 | 騰訊混元',
    captionMs: 'Baidu | Tongyi | Kimi | Spark | Hunyuan',
    captionVi: 'Baidu | Tongyi | Kimi | Spark | Hunyuan',
    detailEn: 'Technical product comparison and distributor discovery analytics across China AI search platforms.',
    detailZh: '技术产品对比分析与中国 AI 搜索平台的分销商发现能见度数据。',
    detailJa: '中国AI検索プラットフォームにおける技術製品の競合比較分析と代理店発見データ。',
    detailMs: 'Analisis perbandingan produk teknikal dan penemuan pengedar merentasi platform carian AI China.',
    detailVi: 'Phân tích so sánh sản phẩm kỹ thuật và khả năng tìm kiếm nhà phân phối trên các nền tảng AI TQ.',
  },
  {
    id: 'cac-compliance',
    titleEn: 'CAC Regulatory Compliance & Cross-Border Data Control',
    titleZh: 'CAC 备案合规与跨境数据控制',
    titleJa: 'CAC 規制届出適合・越境データガバナンス',
    titleMs: 'Pematuhan Perundangan CAC & Kawalan Data Rentas Sempadan',
    titleVi: 'Tuân thủ pháp lý CAC & Kiểm soát dữ liệu xuyên biên giới',
    tagEn: 'CAC REGULATORY HANDSHAKE',
    tagZh: '网信办算法合规握手',
    tagJa: 'CACアルゴリズム適合ハンドシェイク',
    tagMs: 'AKURAT PERUNDANGAN CAC',
    tagVi: 'TUÂN THỦ PHÁP LÝ CAC',
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    captionEn: 'Data Residency: SG-Central-1 | ICP Status: Verified',
    captionZh: '数据驻留地: 新加坡 | ICP 备案状态: 已验证',
    captionJa: 'データ保管地: シンガポール | ICPステータス: 認証済',
    captionMs: 'Kediaman Data: SG-Central-1 | Status ICP: Disahkan',
    captionVi: 'Nơi lưu trữ dữ liệu: SG-Central-1 | Trạng thái ICP: Đã xác minh',
    detailEn: 'Singapore-China cross-border AI data security compliance transmission controls and authoritative brand node protections.',
    detailZh: '新加坡-中国跨境 AI 数据安全合规传输控制与权威品牌节点防护。',
    detailJa: 'シンガポール-中国間の越境AIデータセキュリティ適合通信制御と公式ブランドノード保護。',
    detailMs: 'Kawalan penghantaran data AI rentas sempadan Singapura-China dan perlindungan node jenama berautoriti.',
    detailVi: 'Kiểm soát truyền dữ liệu AI xuyên biên giới Singapore-Trung Quốc và bảo vệ nút thương hiệu uy tín.',
  },
];

export const ImageCarousel: React.FC = () => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const currentItem = DASHBOARD_IMAGES[currentIndex];

  const getTitle = (img: DashboardImageItem) =>
    language === 'zh' ? img.titleZh : language === 'ja' ? img.titleJa : language === 'ms' ? img.titleMs : language === 'vi' ? img.titleVi : img.titleEn;

  const getTag = (img: DashboardImageItem) =>
    language === 'zh' ? img.tagZh : language === 'ja' ? img.tagJa : language === 'ms' ? img.tagMs : language === 'vi' ? img.tagVi : img.tagEn;

  const getCaption = (img: DashboardImageItem) =>
    language === 'zh' ? img.captionZh : language === 'ja' ? img.captionJa : language === 'ms' ? img.captionMs : language === 'vi' ? img.captionVi : img.captionEn;

  const getDetail = (img: DashboardImageItem) =>
    language === 'zh' ? img.detailZh : language === 'ja' ? img.detailJa : language === 'ms' ? img.detailMs : language === 'vi' ? img.detailVi : img.detailEn;

  const handlePrev = () => {
    setImgError(false);
    setCurrentIndex((prev) => (prev === 0 ? DASHBOARD_IMAGES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setImgError(false);
    setCurrentIndex((prev) => (prev === DASHBOARD_IMAGES.length - 1 ? 0 : prev + 1));
  };

  const handleSelect = (idx: number) => {
    setImgError(false);
    setCurrentIndex(idx);
  };

  return (
    <div className="space-y-3">
      {/* Quick Category / Image Selector Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs font-mono-code scrollbar-none">
        {DASHBOARD_IMAGES.map((img, idx) => (
          <button
            key={img.id}
            onClick={() => handleSelect(idx)}
            className={`px-3 py-1.5 rounded-lg border whitespace-nowrap transition-all flex items-center gap-1.5 ${
              currentIndex === idx
                ? 'bg-[#0056c5] text-white border-[#0056c5] font-bold shadow-xs'
                : 'bg-white text-[#424654] border-[#c2c6d7] hover:border-[#0056c5] hover:text-[#0b1c30]'
            }`}
          >
            <span className="w-4 h-4 rounded-full bg-black/10 flex items-center justify-center text-[10px]">
              {idx + 1}
            </span>
            <span>{getTitle(img).split(' – ')[0].split(' - ')[0].split('——')[0]}</span>
          </button>
        ))}
      </div>

      {/* Main Multi-Image Frame Container */}
      <div className="relative rounded-xl overflow-hidden border-2 border-[#0056c5]/30 group bg-slate-950 min-h-[320px] sm:min-h-[380px] flex items-center justify-center shadow-lg transition-all">
        {/* Main Image */}
        <img
          src={imgError && currentItem.fallbackSrc ? currentItem.fallbackSrc : currentItem.src}
          alt={getTitle(currentItem)}
          referrerPolicy="no-referrer"
          onError={() => {
            if (!imgError && currentItem.fallbackSrc) {
              setImgError(true);
            }
          }}
          className="w-full h-auto max-h-[500px] object-contain transition-all duration-300 group-hover:scale-[1.01]"
        />

        {/* Top-Left Tag Badge */}
        <div className="absolute top-3 left-3 bg-[#0b1c30]/90 backdrop-blur-md text-white px-3 py-1.5 rounded-md text-xs font-mono-code border border-white/20 shadow-md flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#166ef1] animate-pulse"></span>
          <span className="font-bold tracking-wider text-[#d9e2ff]">{getTag(currentItem)}</span>
        </div>

        {/* Top-Right Index Badge & Fullscreen Button */}
        <div className="absolute top-3 right-3 flex items-center gap-2">
          <span className="bg-[#0b1c30]/90 backdrop-blur-md text-white px-2.5 py-1.5 rounded-md text-xs font-mono-code border border-white/20 shadow-md">
            {currentIndex + 1} / {DASHBOARD_IMAGES.length}
          </span>

          <button
            onClick={() => setIsFullscreen(true)}
            title={language === 'zh' ? '查看全屏高清大图' : language === 'ja' ? 'フルスクリーンで表示' : 'View Fullscreen'}
            className="bg-[#0b1c30]/90 hover:bg-[#0056c5] text-white p-1.5 rounded-md border border-white/20 transition-colors shadow-md flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-base">fullscreen</span>
          </button>
        </div>

        {/* Left Arrow Navigation Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous Image"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0b1c30]/80 hover:bg-[#0056c5] text-white border border-white/30 flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-110 active:scale-95 group-hover:opacity-100 opacity-90"
        >
          <span className="material-symbols-outlined text-2xl">chevron_left</span>
        </button>

        {/* Right Arrow Navigation Button */}
        <button
          onClick={handleNext}
          aria-label="Next Image"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0b1c30]/80 hover:bg-[#0056c5] text-white border border-white/30 flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-110 active:scale-95 group-hover:opacity-100 opacity-90"
        >
          <span className="material-symbols-outlined text-2xl">chevron_right</span>
        </button>

        {/* Bottom Overlay Detail Bar */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0b1c30] via-[#0b1c30]/90 to-transparent p-4 text-white space-y-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h4 className="text-sm font-bold text-white tracking-wide">
              {getTitle(currentItem)}
            </h4>
            <span className="text-[11px] font-mono-code text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
              {getCaption(currentItem)}
            </span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed truncate">
            {getDetail(currentItem)}
          </p>
        </div>
      </div>

      {/* Bottom Thumbnail / Dot Indicator Pagination */}
      <div className="flex items-center justify-between pt-1 text-xs">
        <button
          onClick={handlePrev}
          className="text-[#0056c5] hover:underline font-mono-code font-bold flex items-center gap-1"
        >
          <span className="material-symbols-outlined text-sm">west</span>
          <span>{language === 'zh' ? '上一张' : language === 'ms' ? 'Sebelum' : language === 'vi' ? 'Trước' : language === 'ja' ? '前へ' : 'Previous'}</span>
        </button>

        <div className="flex items-center gap-2">
          {DASHBOARD_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                currentIndex === idx ? 'w-8 bg-[#0056c5]' : 'w-2.5 bg-[#c2c6d7] hover:bg-[#727685]'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="text-[#0056c5] hover:underline font-mono-code font-bold flex items-center gap-1"
        >
          <span>{language === 'zh' ? '下一张' : language === 'ms' ? 'Seterusnya' : language === 'vi' ? 'Tiếp' : language === 'ja' ? '次へ' : 'Next'}</span>
          <span className="material-symbols-outlined text-sm">east</span>
        </button>
      </div>

      {/* Fullscreen High-Res Image Lightbox Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8 animate-fade-in">
          {/* Close Button */}
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-6 right-6 text-white bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
            aria-label="Close fullscreen"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>

          <div className="max-w-5xl w-full space-y-4 text-white text-center">
            <h3 className="text-lg sm:text-2xl font-bold">{getTitle(currentItem)}</h3>

            <div className="relative rounded-xl overflow-hidden border border-white/20 max-h-[75vh] flex items-center justify-center bg-slate-900">
              <img
                src={imgError && currentItem.fallbackSrc ? currentItem.fallbackSrc : currentItem.src}
                alt={getTitle(currentItem)}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto object-contain"
              />

              {/* Modal Left/Right Controls */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-[#0056c5] text-white flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-3xl">chevron_left</span>
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-[#0056c5] text-white flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-3xl">chevron_right</span>
              </button>
            </div>

            <p className="text-sm text-slate-300 font-mono-code">{getDetail(currentItem)}</p>
          </div>
        </div>
      )}
    </div>
  );
};
