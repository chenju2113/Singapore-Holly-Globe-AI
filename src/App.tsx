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
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';

import { CitationSnapshotView } from './components/citation/CitationSnapshotView';

import { GeoAuditModal } from './components/modals/GeoAuditModal';
import { ConsultationModal } from './components/modals/ConsultationModal';
import { CaseStudiesModal } from './components/modals/CaseStudiesModal';
import { MethodologyModal } from './components/modals/MethodologyModal';

import { INITIAL_PLATFORMS, INITIAL_LOGS } from './data/mockData';
import { useSeoMetadata } from './utils/seo';

function getInitialView(): 'home' | 'citation' | 'faq' {
  if (typeof window !== 'undefined') {
    const path = window.location.pathname.toLowerCase();
    if (path === '/faq' || path === '/faq/') return 'faq';
    if (path === '/citation' || path === '/citation/') return 'citation';
  }
  return 'home';
}

export function App() {
  const [currentView, setCurrentView] = useState<'home' | 'citation' | 'faq'>(getInitialView);
  const [geoAuditOpen, setGeoAuditOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [caseStudiesOpen, setCaseStudiesOpen] = useState(false);
  const [methodologyOpen, setMethodologyOpen] = useState(false);

  // Sync route path on view change
  const navigateTo = (view: 'home' | 'citation' | 'faq') => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const targetPath = view === 'faq' ? '/faq' : view === 'citation' ? '/citation' : '/';
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ view }, '', targetPath);
    }
  };

  // Sync popstate (browser back/forward)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentView(getInitialView());
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
    }
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
        onOpenCaseStudies={() => setCaseStudiesOpen(true)}
        onOpenMethodology={() => setMethodologyOpen(true)}
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
            onOpenCaseStudies={() => setCaseStudiesOpen(true)}
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
        onOpenConsultation={() => setConsultationOpen(true)}
        onOpenGeoAudit={() => setGeoAuditOpen(true)}
        onOpenCaseStudies={() => setCaseStudiesOpen(true)}
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

      <CaseStudiesModal
        isOpen={caseStudiesOpen}
        onClose={() => setCaseStudiesOpen(false)}
        onOpenConsultation={() => setConsultationOpen(true)}
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

