import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { BODY } from "./constants/typography";

/* ── Smooth Scroll & 3D WebGL Canvas ── */
import useLenisScroll from "./hooks/useLenisScroll";
import ThreeCanvas from "./components/ui/ThreeCanvas";

/* ── Scroll to hash section after navigation ── */
function ScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash]);
  return null;
}

/* ── Contour UI Sections ── */
import Header from "./components/sections/Header";
import ContourHeroPinned from "./components/sections/ContourHeroPinned";
import ContourLogoMarquee from "./components/sections/ContourLogoMarquee";
import ContourTestimonial from "./components/sections/ContourTestimonial";
import ContourMediaText from "./components/sections/ContourMediaText";
import ContourCaseStudies3D from "./components/sections/ContourCaseStudies3D";
import ContourSolutions from "./components/sections/ContourSolutions";
import ContourFooter from "./components/sections/ContourFooter";
import WhatsAppButton from "./components/sections/WhatsAppButton";
import Preloader from "./components/ui/Preloader";

/* ── Interactive Modals / Drawers ── */
import { CaseStudyModal, ContactModal, InsightsModal, ApproachModal } from "./components/ui/ContourModals";

/* ── Pages ── */
import ServicePage from "./components/pages/ServicePage";

export default function VeritronApp() {
  // Initialize Lenis Smooth Scroll linked to GSAP ScrollTrigger
  useLenisScroll();

  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [insightsOpen, setInsightsOpen] = useState(false);
  const [approachOpen, setApproachOpen] = useState(false);

  return (
    <div
      style={{
        fontFamily: BODY,
        background: "#0c1524",
        color: "#1e261a",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {/* Three.js 3D WebGL Background Canvas */}
      <ThreeCanvas />

      {/* Luxury Preloader */}
      <Preloader />
      <ScrollToHash />

      {/* Fixed Header & Fullscreen Menu */}
      <Header
        onOpenContact={() => setContactOpen(true)}
        onOpenApproach={() => setApproachOpen(true)}
      />

      <div style={{ position: "relative", zIndex: 10 }}>
        <Routes>
          <Route
            path="/"
            element={
              <main>
                {/* 1. GSAP ScrollTrigger Pinned 3D Hero Sequence */}
                <ContourHeroPinned
                  onSelectCaseStudy={(id) => setSelectedCaseStudy(id)}
                  onOpenApproach={() => setApproachOpen(true)}
                />

                {/* 2. Partner Logo Marquee */}
                <ContourLogoMarquee />

                {/* 3. Centered Editorial Testimonial */}
                <ContourTestimonial />

                {/* 4. Asymmetric Media + Text Insights */}
                <ContourMediaText onOpenInsights={() => setInsightsOpen(true)} />

                {/* 5. GSAP ScrollTrigger 3D Horizontal Parallax Case Studies */}
                <ContourCaseStudies3D
                  onSelectCaseStudy={(id) => setSelectedCaseStudy(id)}
                />

                {/* 6. Core Capabilities & Solutions */}
                <ContourSolutions onOpenContact={() => setContactOpen(true)} />

                {/* 7. Rounded Container Pre-Footer & Footer */}
                <ContourFooter
                  onOpenContact={() => setContactOpen(true)}
                  onOpenApproach={() => setApproachOpen(true)}
                />
              </main>
            }
          />

          {/* Detailed Service Deep-Link Route */}
          <Route path="/services/:slug" element={<ServicePage />} />
        </Routes>
      </div>

      {/* Floating WhatsApp Contact Widget */}
      <WhatsAppButton />

      {/* Interactive Drawers & Modals */}
      <CaseStudyModal
        caseStudyId={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onOpenContact={() => setContactOpen(true)}
      />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

      <InsightsModal
        isOpen={insightsOpen}
        onClose={() => setInsightsOpen(false)}
      />

      <ApproachModal
        isOpen={approachOpen}
        onClose={() => setApproachOpen(false)}
        onOpenContact={() => setContactOpen(true)}
      />
    </div>
  );
}
