import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ValueStrip } from './components/ValueStrip';
import { PartnersCoverage } from './components/PartnersCoverage';
import { CommandCenter } from './components/CommandCenter';
import { WhyGeoSection } from './components/WhyGeoSection';
import { MissionValues } from './components/MissionValues';
import { WhoWeAre } from './components/WhoWeAre';
import { IndustryStats } from './components/IndustryStats';
import { CoreTech } from './components/CoreTech';
import { PatentProductMatrix } from './components/PatentProductMatrix';
import { ComplianceSupport } from './components/ComplianceSupport';
import { GlobalRD } from './components/GlobalRD';
import { FaqSection } from './components/FaqSection';
import { FaqPage } from './components/FaqPage';
import { BlogPage } from './components/BlogPage';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { EducationSuccessCasePage } from './components/case-studies/EducationSuccessCasePage';
import { LuoXinyueCasePage } from './components/case-studies/LuoXinyueCasePage';
import { XiaoxiandunYanwoCasePage } from './components/case-studies/XiaoxiandunYanwoCasePage';

import { CitationSnapshotView } from './components/citation/CitationSnapshotView';

import { GeoAuditModal } from './components/modals/GeoAuditModal';
import { ConsultationModal } from './components/modals/ConsultationModal';
import { MethodologyModal } from './components/modals/MethodologyModal';

import { INITIAL_PLATFORMS, INITIAL_LOGS } from './data/mockData';
import { useSeoMetadata } from './utils/seo';
import { useLanguage } from './context/LanguageContext';

type View = 'home' | 'citation' | 'faq' | 'blog' | 'caseStudy';
type CaseStudySlug = 'yangjiang-longyuan' | 'luo-xinyue' | 'xiaoxiandun-yanwo';

interface RouteState {
  view: View;
  caseStudySlug: CaseStudySlug;
}

function getInitialRouteState(): RouteState {
  if (typeof window !== 'undefined') {
    const path = window.location.pathname.toLowerCase();
    if (path === '/faq' || path === '/faq/') return { view: 'faq', caseStudySlug: 'yangjiang-longyuan' };
    if (path === '/citation' || path === '/citation/') return { view: 'citation', caseStudySlug: 'yangjiang-longyuan' };
    if (path === '/blog' || path === '/blog/') return { view: 'blog', caseStudySlug: 'yangjiang-longyuan' };
    if (path === '/case-study/luo-xinyue' || path === '/case-study/luo-xinyue/') {
      return { view: 'caseStudy', caseStudySlug: 'luo-xinyue' };
    }
    if (path === '/case-study/xiaoxiandun-yanwo' || path === '/case-study/xiaoxiandun-yanwo/') {
      return { view: 'caseStudy', caseStudySlug: 'xiaoxiandun-yanwo' };
    }
    if (path === '/case-study/yangjiang-longyuan' || path === '/case-study/yangjiang-longyuan/') {
      return { view: 'caseStudy', caseStudySlug: 'yangjiang-longyuan' };
    }
  }
  return { view: 'home', caseStudySlug: 'yangjiang-longyuan' };
}

export function App() {
  const { language } = useLanguage();
  const [routeState, setRouteState] = useState<RouteState>(getInitialRouteState);
  const [geoAuditOpen, setGeoAuditOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [methodologyOpen, setMethodologyOpen] = useState(false);
  const { currentView, currentCaseStudy } = {
    currentView: routeState.view,
    currentCaseStudy: routeState.caseStudySlug,
  };
  const handleCaseStudies = () => {};

  // Sync route path on view change
  const navigateTo = (view: View, caseStudySlug: CaseStudySlug = 'yangjiang-longyuan') => {
    setRouteState({ view, caseStudySlug });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const targetPath =
      view === 'faq'
        ? '/faq'
        : view === 'citation'
          ? '/citation'
          : view === 'blog'
            ? '/blog'
            : view === 'caseStudy'
              ? `/case-study/${caseStudySlug}`
              : '/';
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ view }, '', targetPath);
    }
  };

  // Sync popstate (browser back/forward)
  useEffect(() => {
    const handlePopState = () => {
      setRouteState(getInitialRouteState());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // SEO metadata configuration per view
  const seoProps = {
    home: {
      title: 'HollyGlobe Singapore | Singapore · China AI Visibility Partner',
      description: 'HollyGlobe Singapore is an online-first B2B advisory helping Singapore and regional brands build AI search visibility and GEO readiness for China-market discovery.',
      canonical: 'https://sghollyglobe.com/'
    },
    faq: {
      title: 'FAQ | HollyGlobe Singapore',
      description: 'Frequently asked questions about HollyGlobe Singapore, our remote consulting model, and our Singapore-to-China AI visibility focus.',
      canonical: 'https://sghollyglobe.com/faq'
    },
    citation: {
      title: 'AI Citation Engine | HollyGlobe Singapore',
      description: 'Real-time visibility monitoring and LLM citation engine for Singapore brands targeting China search platforms.',
      canonical: 'https://sghollyglobe.com/citation'
    },
    blog: {
      title: 'Insights | HollyGlobe Singapore',
      description: 'Perspectives on GEO, AI search visibility, and content strategy from HollyGlobe Singapore.',
      canonical: 'https://sghollyglobe.com/blog'
    },
    caseStudy:
      currentCaseStudy === 'luo-xinyue'
        ? (
            {
              zh: {
                title: '罗心悦抖音流量增长客户案例 | HollyGlobe Singapore',
                description:
                  '真实客户案例：罗心悦减脂塑形有氧运动在抖音端实现自然流量明显放大，账号基础盘、内容规模与直播节奏同步形成增长势能。',
                canonical: 'https://sghollyglobe.com/case-study/luo-xinyue'
              },
              en: {
                title: 'Luo Xinyue Douyin Growth Client Case | HollyGlobe Singapore',
                description:
                  'Real client case: Luo Xinyue achieved clear organic traffic amplification on Douyin, supported by a strong account base, scalable content volume, and a stable live-stream cadence.',
                canonical: 'https://sghollyglobe.com/case-study/luo-xinyue'
              },
              ja: {
                title: '羅心悦 抖音流量成長顧客事例 | HollyGlobe Singapore',
                description:
                  '実際の顧客事例：羅心悦は抖音上で自然流量を明確に拡大し、強いアカウント基盤・継続的なコンテンツ供給・安定したライブ配信リズムを形成しました。',
                canonical: 'https://sghollyglobe.com/case-study/luo-xinyue'
              },
              ms: {
                title: 'Kajian Kes Klien Pertumbuhan Douyin Luo Xinyue | HollyGlobe Singapore',
                description:
                  'Kes klien sebenar: Luo Xinyue mencapai pembesaran trafik organik Douyin yang jelas, disokong oleh asas akaun yang kuat, skala kandungan yang matang, dan ritma siaran langsung yang stabil.',
                canonical: 'https://sghollyglobe.com/case-study/luo-xinyue'
              },
              vi: {
                title: 'Case Khach Hang Tang Truong Douyin Luo Xinyue | HollyGlobe Singapore',
                description:
                  'Case khach hang thuc te: Luo Xinyue dat duoc su khuech dai ro rang cua traffic tu nhien tren Douyin, duoc ho tro boi nen tai khoan manh, quy mo noi dung lon, va nhip live on dinh.',
                canonical: 'https://sghollyglobe.com/case-study/luo-xinyue'
              }
            }[language] || {
              title: 'Luo Xinyue Douyin Growth Client Case | HollyGlobe Singapore',
              description:
                'Real client case: Luo Xinyue achieved clear organic traffic amplification on Douyin, supported by a strong account base, scalable content volume, and a stable live-stream cadence.',
              canonical: 'https://sghollyglobe.com/case-study/luo-xinyue'
            }
          )
        : currentCaseStudy === 'xiaoxiandun-yanwo'
          ? (
              {
                zh: {
                  title: '小仙炖鲜炖燕窝 AI 搜索成功案例 | HollyGlobe Singapore',
                  description:
                    '成功案例页面：小仙炖鲜炖燕窝在 2024 年 12 月 15 日至 2025 年 1 月 15 日的数据周期内，实现 97.84% 品牌推荐率，并在鲜炖燕窝推荐场景中位列第一。',
                  canonical: 'https://sghollyglobe.com/case-study/xiaoxiandun-yanwo'
                },
                en: {
                  title: 'Xiaoxiandun AI Search Success Case | HollyGlobe Singapore',
                  description:
                    'Case study page: Xiaoxiandun achieved a 97.84% brand recommendation rate during the December 15, 2024 to January 15, 2025 reporting period and ranked first in fresh-stewed bird nest recommendation scenarios.',
                  canonical: 'https://sghollyglobe.com/case-study/xiaoxiandun-yanwo'
                },
                ja: {
                  title: '小仙炖 鮮炖燕窝 AI検索成功事例 | HollyGlobe Singapore',
                  description:
                    '事例ページ：小仙炖鮮炖燕窝は 2024年12月15日から2025年1月15日 の期間に、ブランド推薦率 97.84% を達成し、鮮炖燕窝推薦シーンで 1 位となりました。',
                  canonical: 'https://sghollyglobe.com/case-study/xiaoxiandun-yanwo'
                },
                ms: {
                  title: 'Kajian Kes Kejayaan Carian AI Xiaoxiandun | HollyGlobe Singapore',
                  description:
                    'Halaman kajian kes: Xiaoxiandun mencapai kadar cadangan jenama 97.84% dalam tempoh 15 Disember 2024 hingga 15 Januari 2025 dan menduduki tempat pertama dalam senario cadangan sarang burung stew segar.',
                  canonical: 'https://sghollyglobe.com/case-study/xiaoxiandun-yanwo'
                },
                vi: {
                  title: 'Case Thanh Cong Tim Kiem AI Xiaoxiandun | HollyGlobe Singapore',
                  description:
                    'Trang case study: Xiaoxiandun dat ty le de xuat thuong hieu 97.84% trong giai doan 15 thang 12 nam 2024 den 15 thang 1 nam 2025 va xep hang so 1 trong nhom goi y yen chung tuoi.',
                  canonical: 'https://sghollyglobe.com/case-study/xiaoxiandun-yanwo'
                }
              }[language] || {
                title: 'Xiaoxiandun AI Search Success Case | HollyGlobe Singapore',
                description:
                  'Case study page: Xiaoxiandun achieved a 97.84% brand recommendation rate during the December 15, 2024 to January 15, 2025 reporting period and ranked first in fresh-stewed bird nest recommendation scenarios.',
                canonical: 'https://sghollyglobe.com/case-study/xiaoxiandun-yanwo'
              }
            )
        : (
            {
              zh: {
                title: '阳江市龙源实验中学 AI 搜索成功案例 | HollyGlobe Singapore',
                description:
                  '成功案例页面：阳江市龙源实验中学在 2026 年 8 月 8 日至 2026 年 8 月 14 日的数据周期内，实现 97.62% 品牌推荐率与 97.22% 平均搜索率。',
                canonical: 'https://sghollyglobe.com/case-study/yangjiang-longyuan'
              },
              en: {
                title: 'Yangjiang Longyuan Experimental School AI Search Case | HollyGlobe Singapore',
                description:
                  'Case study page: Yangjiang Longyuan Experimental School achieved a 97.62% brand recommendation rate and 97.22% average search visibility during the August 8, 2026 to August 14, 2026 reporting period.',
                canonical: 'https://sghollyglobe.com/case-study/yangjiang-longyuan'
              },
              ja: {
                title: '陽江市龍源実験中学 AI検索成功事例 | HollyGlobe Singapore',
                description:
                  '事例ページ：陽江市龍源実験中学は 2026年8月8日から2026年8月14日 の期間に、ブランド推薦率 97.62% と平均検索率 97.22% を達成しました。',
                canonical: 'https://sghollyglobe.com/case-study/yangjiang-longyuan'
              },
              ms: {
                title: 'Kajian Kes Carian AI Sekolah Longyuan Yangjiang | HollyGlobe Singapore',
                description:
                  'Halaman kajian kes: Sekolah Longyuan Yangjiang mencapai kadar cadangan jenama 97.62% dan kadar carian purata 97.22% dalam tempoh 8 Ogos 2026 hingga 14 Ogos 2026.',
                canonical: 'https://sghollyglobe.com/case-study/yangjiang-longyuan'
              },
              vi: {
                title: 'Case Tim Kiem AI Truong Longyuan Yangjiang | HollyGlobe Singapore',
                description:
                  'Trang case study: Truong Longyuan Yangjiang dat ty le de xuat thuong hieu 97.62% va ty le tim kiem trung binh 97.22% trong giai doan 8 thang 8 nam 2026 den 14 thang 8 nam 2026.',
                canonical: 'https://sghollyglobe.com/case-study/yangjiang-longyuan'
              }
            }[language] || {
              title: 'Yangjiang Longyuan Experimental School AI Search Case | HollyGlobe Singapore',
              description:
                'Case study page: Yangjiang Longyuan Experimental School achieved a 97.62% brand recommendation rate and 97.22% average search visibility during the August 8, 2026 to August 14, 2026 reporting period.',
              canonical: 'https://sghollyglobe.com/case-study/yangjiang-longyuan'
            }
          )
  }[currentView];

  useSeoMetadata(seoProps);

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30] selection:bg-[#0056c5] selection:text-white">
      {/* Header */}
      <Header
        currentView={currentView}
        onNavigate={navigateTo}
        onOpenConsultation={() => setConsultationOpen(true)}
        onOpenGeoAudit={() => setGeoAuditOpen(true)}
        onOpenCaseStudies={handleCaseStudies}
        onOpenMethodology={() => setMethodologyOpen(true)}
        onNavigateCaseStudy={() => navigateTo('caseStudy')}
        onNavigateFitnessCaseStudy={() => navigateTo('caseStudy', 'luo-xinyue')}
        onNavigateYanwoCaseStudy={() => navigateTo('caseStudy', 'xiaoxiandun-yanwo')}
      />

      {/* Main Content */}
      {currentView === 'citation' ? (
        <CitationSnapshotView
          onOpenConsultation={() => setConsultationOpen(true)}
          onOpenGeoAudit={() => setGeoAuditOpen(true)}
        />
      ) : currentView === 'faq' ? (
        <FaqPage
          onOpenConsultation={() => setConsultationOpen(true)}
          onOpenGeoAudit={() => setGeoAuditOpen(true)}
        />
      ) : currentView === 'blog' ? (
        <BlogPage />
      ) : currentView === 'caseStudy' ? (
        currentCaseStudy === 'luo-xinyue' ? (
          <LuoXinyueCasePage
            onNavigateHome={() => navigateTo('home')}
            onOpenConsultation={() => setConsultationOpen(true)}
          />
        ) : currentCaseStudy === 'xiaoxiandun-yanwo' ? (
          <XiaoxiandunYanwoCasePage
            onNavigateHome={() => navigateTo('home')}
            onOpenConsultation={() => setConsultationOpen(true)}
          />
        ) : (
          <EducationSuccessCasePage
            onNavigateHome={() => navigateTo('home')}
            onOpenConsultation={() => setConsultationOpen(true)}
          />
        )
      ) : (
        <main className="space-y-4 pt-4">
          <HeroSection
            onOpenConsultation={() => setConsultationOpen(true)}
            onOpenGeoAudit={() => setGeoAuditOpen(true)}
          />

          {/* 6 Value Highlights Strip */}
          <ValueStrip />

          {/* China AI Platforms Coverage */}
          <PartnersCoverage />

          {/* Command Center */}
          <CommandCenter
            platforms={INITIAL_PLATFORMS}
            logs={INITIAL_LOGS}
            onOpenAudit={() => setGeoAuditOpen(true)}
          />

          {/* Why GEO / AI Search Journey */}
          <WhyGeoSection
            onOpenMethodology={() => setMethodologyOpen(true)}
          />

          {/* Mission & Values */}
          <MissionValues />

          {/* Who We Are */}
          <WhoWeAre
            onOpenConsultation={() => setConsultationOpen(true)}
          />

          {/* High-Trust Industries & Stats */}
          <IndustryStats
            onOpenCaseStudies={handleCaseStudies}
            onOpenFeaturedCase={() => navigateTo('caseStudy')}
            onOpenFitnessCase={() => navigateTo('caseStudy', 'luo-xinyue')}
          />

          {/* Core Technology */}
          <CoreTech />

          {/* Algorithm Filing & AI Marketing Product Matrix */}
          <PatentProductMatrix
            onOpenConsultation={() => setConsultationOpen(true)}
          />

          {/* Compliance & Local SG Support */}
          <ComplianceSupport
            onOpenConsultation={() => setConsultationOpen(true)}
          />

          {/* Global R&D Hubs */}
          <GlobalRD />

          {/* Frequently Asked Questions */}
          <FaqSection />

          {/* Call to Action Section */}
          <CtaSection
            onOpenConsultation={() => setConsultationOpen(true)}
            onOpenMethodology={() => setMethodologyOpen(true)}
            onOpenGeoAudit={() => setGeoAuditOpen(true)}
          />
        </main>
      )}

      {/* Footer */}
      <Footer
        onNavigateCitation={() => navigateTo('citation')}
        onNavigateFaq={() => navigateTo('faq')}
        onNavigateCaseStudy={() => navigateTo('caseStudy')}
        onNavigateFitnessCaseStudy={() => navigateTo('caseStudy', 'luo-xinyue')}
        onOpenConsultation={() => setConsultationOpen(true)}
        onOpenGeoAudit={() => setGeoAuditOpen(true)}
        onOpenCaseStudies={handleCaseStudies}
        onOpenMethodology={() => setMethodologyOpen(true)}
      />

      {/* Interactive Modals */}
      <GeoAuditModal
        isOpen={geoAuditOpen}
        onClose={() => setGeoAuditOpen(false)}
        onOpenConsultation={() => setConsultationOpen(true)}
      />

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />

      <MethodologyModal
        isOpen={methodologyOpen}
        onClose={() => setMethodologyOpen(false)}
        onOpenConsultation={() => setConsultationOpen(true)}
      />
    </div>
  );
}

export default App;
