import React, { useState, useMemo, useEffect } from 'react';
import { FAQ_DATA, FAQ_CATEGORIES, Language, generateFaqSchemaJson } from '../data/faqData';
import { useLanguage } from '../context/LanguageContext';

interface FaqPageProps {
  onOpenConsultation: () => void;
  onOpenGeoAudit: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({
  onOpenConsultation,
  onOpenGeoAudit,
}) => {
  const { language: globalLang, setLanguage: setGlobalLanguage } = useLanguage();
  const [lang, setLang] = useState<Language>(globalLang as Language);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  // Sync with global language if changed externally
  useEffect(() => {
    setLang(globalLang as Language);
  }, [globalLang]);

  const handleLangChange = (newLang: Language) => {
    setLang(newLang);
    setGlobalLanguage(newLang);
    setOpenIndices([0]);
  };

  const items = FAQ_DATA[lang] || FAQ_DATA.zh;

  // Filter items by category and search query
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.categoryKey === selectedCategory;
      const queryLower = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !queryLower ||
        item.question.toLowerCase().includes(queryLower) ||
        item.answer.toLowerCase().includes(queryLower);
      return matchesCategory && matchesSearch;
    });
  }, [items, selectedCategory, searchQuery]);

  const toggleAccordion = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  const expandAll = () => {
    setOpenIndices(filteredItems.map((_, idx) => idx));
  };

  const collapseAll = () => {
    setOpenIndices([]);
  };

  const currentSchema = generateFaqSchemaJson(lang);

  const langLabels: Record<Language, { title: string; subtitle: string; searchPlaceholder: string; expandAll: string; collapseAll: string; schemaTitle: string; downloadJson: string }> = {
    en: {
      title: 'Frequently Asked Questions',
      subtitle: 'Comprehensive 30-question guide on Generative Engine Optimization (GEO), China AI search visibility, and HollyGlobe advisory.',
      searchPlaceholder: 'Search questions or keywords...',
      expandAll: 'Expand All',
      collapseAll: 'Collapse All',
      schemaTitle: 'SEO & AI Search Structured Data (FAQPage JSON-LD)',
      downloadJson: 'Download'
    },
    zh: {
      title: 'HollyGlobe 常见问题与解答 (FAQ)',
      subtitle: '围绕 GEO 优化、中国 AI 搜索可见度、生成式引擎排名与跨国出海顾问服务的 30 个核心问答。',
      searchPlaceholder: '搜索问题关键词...',
      expandAll: '展开全部',
      collapseAll: '折叠全部',
      schemaTitle: 'SEO & AI 搜索结构化数据 (FAQPage JSON-LD)',
      downloadJson: '下载 Schema JSON'
    },
    ms: {
      title: 'Soalan Lazim (FAQ)',
      subtitle: 'Panduan lengkap 30 soalan tentang Generative Engine Optimization (GEO), keterlihatan AI carian China, dan penasihat HollyGlobe.',
      searchPlaceholder: 'Cari soalan atau kata kunci...',
      expandAll: 'Buka Semua',
      collapseAll: 'Tutup Semua',
      schemaTitle: 'Data Terstruktur SEO & Carian AI (FAQPage JSON-LD)',
      downloadJson: 'Muat Turun Schema'
    },
    vi: {
      title: 'Câu hỏi thường gặp (FAQ)',
      subtitle: 'Hướng dẫn 30 câu hỏi toàn diện về Tối ưu hóa Động cơ Tạo (GEO), độ hiển thị tìm kiếm AI Trung Quốc và dịch vụ tư vấn HollyGlobe.',
      searchPlaceholder: 'Tìm kiếm câu hỏi hoặc từ khóa...',
      expandAll: 'Mở rộng tất cả',
      collapseAll: 'Thu gọn tất cả',
      schemaTitle: 'Dữ liệu có cấu trúc SEO & AI Search (FAQPage JSON-LD)',
      downloadJson: 'Tải về Schema'
    }
  };

  const currentLabels = langLabels[lang] || langLabels.en;

  return (
    <div className="pt-24 sm:pt-28 pb-20 px-4 sm:px-6 max-w-[1280px] mx-auto min-h-[80vh]">
      {/* Active Language Dynamic FAQ JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(currentSchema) }}
      />

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header & Language Selector */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#eff4ff] border border-[#d9e2ff] text-[#0056c5] text-xs font-mono-code font-bold uppercase rounded-full">
            <span className="material-symbols-outlined text-sm">language</span>
            <span>HOLLYGLOBE GEO KNOWLEDGE BASE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0b1c30] tracking-tight">
            {currentLabels.title}
          </h1>

          <p className="text-[#424654] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            {currentLabels.subtitle}
          </p>

          {/* Language Switcher Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-semibold text-[#424654] mr-1 hidden sm:inline-block">Language / 语言 / Bahasa / Ngôn ngữ:</span>
            <button
              onClick={() => handleLangChange('en')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center gap-1.5 ${
                lang === 'en'
                  ? 'bg-[#0056c5] text-white shadow-xs'
                  : 'bg-white border border-[#c2c6d7] text-[#0b1c30] hover:bg-[#f0f4ff]'
              }`}
            >
              <span>🇬🇧 English</span>
            </button>
            <button
              onClick={() => handleLangChange('zh')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center gap-1.5 ${
                lang === 'zh'
                  ? 'bg-[#0056c5] text-white shadow-xs'
                  : 'bg-white border border-[#c2c6d7] text-[#0b1c30] hover:bg-[#f0f4ff]'
              }`}
            >
              <span>🇨🇳 中文 (简体)</span>
            </button>
            <button
              onClick={() => handleLangChange('ms')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center gap-1.5 ${
                lang === 'ms'
                  ? 'bg-[#0056c5] text-white shadow-xs'
                  : 'bg-white border border-[#c2c6d7] text-[#0b1c30] hover:bg-[#f0f4ff]'
              }`}
            >
              <span>🇸🇬 🇲🇾 Bahasa Melayu</span>
            </button>
            <button
              onClick={() => handleLangChange('vi')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center gap-1.5 ${
                lang === 'vi'
                  ? 'bg-[#0056c5] text-white shadow-xs'
                  : 'bg-white border border-[#c2c6d7] text-[#0b1c30] hover:bg-[#f0f4ff]'
              }`}
            >
              <span>🇻🇳 Tiếng Việt</span>
            </button>
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="bg-white border border-[#c2c6d7] p-4 sm:p-6 rounded-2xl shadow-xs space-y-4">
          {/* Search Input */}
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#424654] text-xl">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={currentLabels.searchPlaceholder}
              className="w-full pl-11 pr-10 py-3 bg-[#f8f9ff] border border-[#c2c6d7] rounded-xl text-sm text-[#0b1c30] placeholder-[#737785] focus:outline-none focus:ring-2 focus:ring-[#0056c5] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737785] hover:text-[#0b1c30]"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            )}
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-2 pt-1">
            {FAQ_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-[#0b1c30] text-white shadow-xs'
                      : 'bg-[#f8f9ff] border border-[#d9e2ff] text-[#424654] hover:bg-[#eaf1ff] hover:text-[#0056c5]'
                  }`}
                >
                  {cat.label[lang]}
                </button>
              );
            })}
          </div>

          {/* Expand/Collapse Header Bar */}
          <div className="flex items-center justify-between pt-2 text-xs text-[#424654] border-t border-[#e2e8f0]">
            <div>
              <span>Showing <strong>{filteredItems.length}</strong> of {items.length} questions</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={expandAll}
                className="text-[#0056c5] hover:underline font-semibold flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-sm">unfold_more</span>
                <span>{currentLabels.expandAll}</span>
              </button>
              <span className="text-[#c2c6d7]">|</span>
              <button
                onClick={collapseAll}
                className="text-[#424654] hover:underline font-semibold flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-sm">unfold_less</span>
                <span>{currentLabels.collapseAll}</span>
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredItems.length === 0 ? (
            <div className="bg-white border border-[#c2c6d7] p-8 rounded-xl text-center space-y-2">
              <span className="material-symbols-outlined text-4xl text-[#737785]">search_off</span>
              <p className="text-base font-bold text-[#0b1c30]">No questions matched your search query.</p>
              <p className="text-xs text-[#424654]">Try searching for different terms like "GEO", "SEO", "China", "pricing", or reset filters.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="mt-2 px-4 py-2 bg-[#eff4ff] text-[#0056c5] text-xs font-bold rounded-lg hover:bg-[#d9e2ff]"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const isOpen = openIndices.includes(index);
              return (
                <div
                  key={item.id}
                  className={`bg-white border rounded-xl overflow-hidden transition-all duration-200 shadow-xs ${
                    isOpen ? 'border-[#0056c5] ring-1 ring-[#0056c5]/20' : 'border-[#c2c6d7] hover:border-[#0056c5]/50'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-4 sm:p-5 text-left flex justify-between items-start gap-4 hover:bg-[#f8f9ff] transition-colors focus:outline-none"
                  >
                    <span className="font-bold text-[#0b1c30] text-base sm:text-lg leading-snug">
                      {item.question}
                    </span>
                    <span className="material-symbols-outlined text-[#0056c5] text-2xl shrink-0 mt-0.5">
                      {isOpen ? 'expand_less' : 'expand_more'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 text-sm sm:text-base text-[#424654] leading-relaxed border-t border-[#f0f4ff] bg-[#fafbff]">
                      <p className="pt-4 whitespace-pre-line">{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Structured Data / JSON-LD Export Cards for SEO */}
        <div className="p-6 bg-gradient-to-br from-[#0b1c30] to-[#122844] rounded-2xl text-white shadow-md space-y-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#28a745] text-2xl">code</span>
            <h3 className="text-lg font-bold">
              {currentLabels.schemaTitle}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#c2c6d7] leading-relaxed">
            4 standalone Schema.org <code className="text-[#8bb4f6] font-mono">FAQPage</code> JSON-LD files generated for search engine indexing and LLM web crawlers:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
            <a
              href="/faq-schema-en.json"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl flex items-center justify-between text-xs font-mono font-medium transition-all group"
            >
              <div className="flex items-center gap-2">
                <span>🇬🇧 faq-schema-en.json</span>
              </div>
              <span className="material-symbols-outlined text-sm text-[#8bb4f6] group-hover:translate-x-0.5 transition-transform">open_in_new</span>
            </a>

            <a
              href="/faq-schema-zh.json"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl flex items-center justify-between text-xs font-mono font-medium transition-all group"
            >
              <div className="flex items-center gap-2">
                <span>🇨🇳 faq-schema-zh.json</span>
              </div>
              <span className="material-symbols-outlined text-sm text-[#8bb4f6] group-hover:translate-x-0.5 transition-transform">open_in_new</span>
            </a>

            <a
              href="/faq-schema-ms.json"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl flex items-center justify-between text-xs font-mono font-medium transition-all group"
            >
              <div className="flex items-center gap-2">
                <span>🇲🇾 faq-schema-ms.json</span>
              </div>
              <span className="material-symbols-outlined text-sm text-[#8bb4f6] group-hover:translate-x-0.5 transition-transform">open_in_new</span>
            </a>

            <a
              href="/faq-schema-vi.json"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl flex items-center justify-between text-xs font-mono font-medium transition-all group"
            >
              <div className="flex items-center gap-2">
                <span>🇻🇳 faq-schema-vi.json</span>
              </div>
              <span className="material-symbols-outlined text-sm text-[#8bb4f6] group-hover:translate-x-0.5 transition-transform">open_in_new</span>
            </a>
          </div>
        </div>

        {/* Advisory Commitment Callout */}
        <div className="p-6 bg-white border border-[#c2c6d7] rounded-2xl shadow-xs text-center space-y-4">
          <div className="w-12 h-12 mx-auto rounded-full bg-[#eff4ff] text-[#0056c5] flex items-center justify-center font-bold">
            <span className="material-symbols-outlined text-2xl">support_agent</span>
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-[#0b1c30]">
              Need Further Strategic Guidance?
            </h3>
            <p className="text-xs sm:text-sm text-[#424654] mt-1 max-w-md mx-auto">
              Our Singapore advisory team operates remotely to help your brand establish AI search visibility in China.
            </p>
          </div>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="primary-btn px-6 py-3 rounded-lg font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-xs"
            >
              <span>Request a Singapore Consultation</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
            <button
              onClick={onOpenGeoAudit}
              className="secondary-btn px-6 py-3 rounded-lg font-semibold text-xs sm:text-sm flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-base text-[#0056c5]">auto_awesome</span>
              <span>Request AI Visibility Test</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
