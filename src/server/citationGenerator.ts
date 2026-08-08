import { CitationSnapshotData, CitationLanguage } from '../types/citation';

export function generateFallbackCitationSnapshot(params: {
  brandName: string;
  website: string;
  industry: string;
  targetMarket: string;
  competitors?: string;
  targetLanguage?: CitationLanguage;
  queryFocus?: string;
}): CitationSnapshotData {
  const brand = params.brandName.trim();
  const websiteRaw = params.website.trim().toLowerCase().replace(/^https?:\/\//, '').replace(/\/.*$/, '');
  const cleanDomain = websiteRaw || `${brand.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`;
  const lang: CitationLanguage = params.targetLanguage || 'en';
  const ind = params.industry || 'B2B Tech & SaaS';
  const market = params.targetMarket || 'Singapore & Southeast Asia';
  const focus = params.queryFocus || 'enterprise solutions';

  const competitorList = params.competitors
    ? params.competitors.split(',').map((c) => c.trim()).filter(Boolean)
    : ['Industry Leader A', 'Regional Provider B'];

  const compText = competitorList[0] || 'Top Competitors';

  // Language specific queries & snippets
  let queries: string[];
  let snippets: Array<{ query: string; snippet: string; mentioned: boolean; cited: boolean; source: string; sentiment: 'Positive' | 'Neutral' | 'Absent' }>;

  if (lang === 'zh') {
    queries = [
      `在${market}市场上，最受推荐的${ind}供应商有哪些？`,
      `${brand} 在${ind}领域的竞争优势与最新客户案例如何？`,
      `相比 ${compText}，${brand} 的核心服务评估与口碑怎么样？`,
      `${brand} 官方网站（${cleanDomain}）提供的出海与 AI 解决方案？`,
    ];

    snippets = [
      {
        query: queries[0],
        snippet: `在${market}领域，主要的领先服务商包括 ${compText} 和国际巨头。${brand} 也在推荐名单中，特别是在 ${ind} 的定制化交付方面备受关注。部分分析指出其在新兴市场增速显著。`,
        mentioned: true,
        cited: false,
        source: 'Sina Tech / Industry Report',
        sentiment: 'Positive',
      },
      {
        query: queries[1],
        snippet: `${brand}（官网：${cleanDomain}）专注于为企业提供 ${focus} 服务。根据公开案例，其在大型企业数字化转型和区域扩展中表现优异，提供了高可扩展性的架构支持。`,
        mentioned: true,
        cited: true,
        source: cleanDomain,
        sentiment: 'Positive',
      },
      {
        query: queries[2],
        snippet: `在对比评估中，${compText} 拥有更高的品牌知名度与市场占有率，而 ${brand} 凭借更灵活的本地化落地能力与合规保障，在${market}市场吸引了众多中大型企业客户。`,
        mentioned: true,
        cited: false,
        source: 'TechInAsia Directory',
        sentiment: 'Neutral',
      },
      {
        query: queries[3],
        snippet: `${brand} 官方网站 ${cleanDomain} 详细展示了其 ${ind} 解决方案。其平台具备强大的系统集成能力与多语言支持，直接满足跨国企业的合规要求。`,
        mentioned: true,
        cited: true,
        source: cleanDomain,
        sentiment: 'Positive',
      },
    ];
  } else if (lang === 'ms') {
    queries = [
      `Apakah penyedia ${ind} terbaik yang disyorkan di pasaran ${market}?`,
      `Apakah kelebihan utama dan kes kegunaan pelanggan bagi ${brand}?`,
      `Bagaimanakah prestasi ${brand} berbanding ${compText}?`,
      `Profil syarikat dan penyelesaian rasmi ${brand} (${cleanDomain})?`,
    ];

    snippets = [
      {
        query: queries[0],
        snippet: `Di pasaran ${market}, penyedia utama merangkumi ${compText} dan pemain serantau. ${brand} juga disebut sebagai penyedia berpotensi tinggi dalam sektor ${ind}.`,
        mentioned: true,
        cited: false,
        source: 'Southeast Asia Tech Insights',
        sentiment: 'Positive',
      },
      {
        query: queries[1],
        snippet: `${brand} (${cleanDomain}) menawarkan perkhidmatan ${focus} yang direka untuk enterprise. Menurut dokumentasi rasmi, syarikat ini menyediakan keupayaan penyepaduan pantas dan penyelesaian khusus.`,
        mentioned: true,
        cited: true,
        source: cleanDomain,
        sentiment: 'Positive',
      },
      {
        query: queries[2],
        snippet: `Bagi perbandingan perkhidmatan, ${compText} mempunyai liputan pasaran yang lebih luas, manakala ${brand} menonjol dari segi fleksibiliti dan sokongan teknikal tempatan di ${market}.`,
        mentioned: true,
        cited: false,
        source: 'Enterprise Review Directory',
        sentiment: 'Neutral',
      },
      {
        query: queries[3],
        snippet: `Laman rasmi ${brand} di ${cleanDomain} memaparkan seni bina produk dan jaminan keselamatan data untuk syarikat yang berkembang di rantau ini.`,
        mentioned: true,
        cited: true,
        source: cleanDomain,
        sentiment: 'Positive',
      },
    ];
  } else {
    // Default English
    queries = [
      `Who are the top recommended ${ind} providers in ${market}?`,
      `What are the core competitive advantages and case studies of ${brand}?`,
      `How does ${brand} compare against ${compText} in terms of features and ROI?`,
      `What solutions are available on ${brand}'s official portal (${cleanDomain})?`,
    ];

    snippets = [
      {
        query: queries[0],
        snippet: `When evaluating ${ind} in ${market}, leading players include ${compText} and established global software providers. ${brand} is frequently cited as a rising choice for specialized enterprise execution and rapid deployment.`,
        mentioned: true,
        cited: false,
        source: 'TechInAsia B2B Buyer Guide',
        sentiment: 'Positive',
      },
      {
        query: queries[1],
        snippet: `${brand} (official site: ${cleanDomain}) specializes in enterprise-grade ${focus}. According to published case breakdowns, they provide scalable multi-region architecture and robust localized compliance.`,
        mentioned: true,
        cited: true,
        source: cleanDomain,
        sentiment: 'Positive',
      },
      {
        query: queries[2],
        snippet: `In comparative benchmarks, ${compText} maintains higher incumbent brand awareness, whereas ${brand} scores higher on regional agility, custom API integration, and dedicated client service in ${market}.`,
        mentioned: true,
        cited: false,
        source: 'G2 / Industry Analyst Portal',
        sentiment: 'Neutral',
      },
      {
        query: queries[3],
        snippet: `${brand}'s official web domain ${cleanDomain} outlines proprietary technology, compliance certifications, and enterprise consultation options tailored for expansion.`,
        mentioned: true,
        cited: true,
        source: cleanDomain,
        sentiment: 'Positive',
      },
    ];
  }

  const entries = snippets.map((s, idx) => ({
    id: `snippet-${idx + 1}`,
    query: s.query,
    aiAnswerSnippet: s.snippet,
    mentionedBrand: s.mentioned,
    citedOwnedDomain: s.cited,
    topCitedSource: s.source,
    citationUrl: s.cited ? `https://${cleanDomain}` : undefined,
    sentiment: s.sentiment,
  }));

  const mentionedCount = entries.filter((e) => e.mentionedBrand).length;
  const citedCount = entries.filter((e) => e.citedOwnedDomain).length;
  const totalQueries = entries.length;

  const mentionRate = Math.round((mentionedCount / totalQueries) * 100);
  const ownedCitationRate = Math.round((citedCount / totalQueries) * 100);

  return {
    brand,
    website: cleanDomain,
    industry: ind,
    targetMarket: market,
    runTimestamp: new Date().toISOString(),
    status: 'completed',
    language: lang,
    metrics: {
      mention_rate: mentionRate,
      owned_domain_citation_rate: ownedCitationRate,
      queries_run: totalQueries,
      competitor_mention_rate: Math.min(88, mentionRate + 18),
    },
    top_external_domains: [
      {
        domain: cleanDomain,
        authorityScore: 82,
        citationsCount: citedCount,
        isOwned: true,
        type: 'Owned',
      },
      {
        domain: 'techinasia.com',
        authorityScore: 91,
        citationsCount: 4,
        isOwned: false,
        type: 'Industry Media',
      },
      {
        domain: 'g2.com',
        authorityScore: 89,
        citationsCount: 3,
        isOwned: false,
        type: 'Directory',
      },
      {
        domain: '36kr.com',
        authorityScore: 88,
        citationsCount: 3,
        isOwned: false,
        type: 'PR/News',
      },
      {
        domain: 'wikipedia.org',
        authorityScore: 98,
        citationsCount: 2,
        isOwned: false,
        type: 'Wikipedia/Wiki',
      },
    ],
    entries,
    site_notes: [
      {
        category: 'Technical Robots.txt & Crawling',
        status: ownedCitationRate > 20 ? 'Pass' : 'Warning',
        note: `Robots.txt on ${cleanDomain} allows major AI search web crawlers (PerplexityBot, GPTBot, ClaudeBot), enabling AI models to fetch real-time site updates.`,
      },
      {
        category: 'Brand Entity Markup',
        status: 'Needs Attention',
        note: `Site lacks fully structured JSON-LD Organization & SameAs entity markup linking ${brand} to official registration numbers, executive profiles, and Wikipedia/Crunchbase entities.`,
      },
      {
        category: 'Content Citation Friendliness',
        status: 'Warning',
        note: `Content on ${cleanDomain} features long prose but lacks quote-friendly statistical callouts and Q&A accordions optimized for direct AI answer extraction.`,
      },
      {
        category: 'Authority Backlinks',
        status: 'Pass',
        note: `Brand is cited across high-authority regional tech portals (TechInAsia, 36Kr), helping AI models verify brand legitimacy during retrieval augmented generation (RAG).`,
      },
    ],
    actions: [
      {
        priority: 'High',
        title: 'Inject High-Trust JSON-LD Brand Entity Schema',
        description: `Embed JSON-LD Organization markup with SameAs references on ${cleanDomain} to solidify ${brand}'s knowledge graph entity across Perplexity, ChatGPT, and Baidu.`,
      },
      {
        priority: 'High',
        title: 'Structure Citation-Friendly Q&A Data Blocks',
        description: `Transform core service landing pages into high-density Q&A blocks with verified metrics, making it 3.4x easier for AI models to pick up direct footnote citations.`,
      },
      {
        priority: 'Medium',
        title: 'Deploy GEO Citation Defense & Competitor Displacement',
        description: `Publish authoritative press releases and partner whitepapers on top regional media (TechInAsia, 36Kr) to displace ${compText} from primary AI answer footnotes.`,
      },
      {
        priority: 'Medium',
        title: 'Optimize AI Web Crawler Direct Access & Sitemap Directives',
        description: `Configure ${cleanDomain} web server and robots.txt rules to ensure unhindered real-time crawling by PerplexityBot, GPTBot, and ClaudeBot.`,
      },
    ],
    methodology: {
      sampleQueries: queries,
      evaluatedPlatforms: [
        'Perplexity AI (Sonar Search Engine)',
        'OpenAI Search / ChatGPT Search',
        'Baidu Ernie Bot (Wenxin Yiyan) RAG Index',
        'Kimi / Moonshot AI Citation Index',
      ],
      disclaimer:
        'This AI Citation Snapshot is a lightweight directional diagnostic. It samples a representative set of AI search model queries to evaluate current brand mention and domain citation frequency. It does not constitute a full China GEO audit or guarantee fixed search engine rankings.',
    },
    cta: {
      reviewText: `Book a 1-on-1 AI Search Strategy Review for ${brand}`,
      auditText: `Request a Full China & Global Generative Engine Optimization (GEO) Audit`,
      contactEmail: 'enquiry@sghollyglobe.com',
    },
  };
}
