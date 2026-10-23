import React, { useEffect, useRef, useState } from "react";
import { DISPLAY } from "../../constants/typography";
import { ROTATING_LINES, HERO_SLIDES } from "../../constants/contourData";
import { ContourPuzzleLines, ContourBadge } from "../ui/ContourShape";
import { ArrowRight, ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContourHeroPinned({ onSelectCaseStudy, onOpenApproach }) {
  const containerRef = useRef(null);
  const pinnedRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const splitLineRef = useRef(null);
  const [rotatingIndex, setRotatingIndex] = useState(0);
  const [activeStage, setActiveStage] = useState(0);

  // Rotating text cycler (3.2s interval)
  useEffect(() => {
    const timer = setInterval(() => {
      setRotatingIndex((prev) => (prev + 1) % ROTATING_LINES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  // GSAP 3D ScrollTrigger Pinning and Scrub Timeline
  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const pinned = pinnedRef.current;
      const card1 = card1Ref.current;
      const card2 = card2Ref.current;
      const card3 = card3Ref.current;
      const splitLine = splitLineRef.current;

      if (!container || !pinned || !card1 || !card2 || !card3) return;

      // Initial states
      gsap.set(card1, { opacity: 1, scale: 1, y: 0, rotateX: 0, pointerEvents: "auto" });
      gsap.set(card2, { opacity: 0, scale: 0.92, y: 40, rotateX: 4, pointerEvents: "none" });
      gsap.set(card3, { opacity: 0, scale: 0.92, y: 40, rotateX: 4, pointerEvents: "none" });
      if (splitLine) {
        gsap.set(splitLine, { scaleY: 0, opacity: 0 });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=260%",
          pin: pinned,
          scrub: 1.1,
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = self.progress;
            if (p < 0.35) {
              setActiveStage(0);
            } else if (p < 0.7) {
              setActiveStage(1);
            } else {
              setActiveStage(2);
            }
          },
        },
      });

      // ── STEP 1: Split-line reveal and transition from Stage 1 -> Stage 2 (Olive) ──
      if (splitLine) {
        tl.to(
          splitLine,
          {
            scaleY: 1,
            opacity: 1,
            duration: 0.5,
            ease: "power2.inOut",
          },
          0.3
        ).to(
          splitLine,
          {
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          1.1
        );
      }

      tl.to(
        card1,
        {
          opacity: 0,
          scale: 0.9,
          y: -40,
          rotateX: -4,
          duration: 1.2,
          ease: "power2.inOut",
          pointerEvents: "none",
        },
        0.2
      )
        .to(
          pinned,
          {
            backgroundColor: "#3e4732", // Contour signature Warm Olive
            duration: 1.2,
            ease: "power2.inOut",
          },
          0.2
        )
        .to(
          card2,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotateX: 0,
            duration: 1.2,
            ease: "power2.out",
            pointerEvents: "auto",
          },
          0.9
        )

        // ── STEP 2: Transition from Stage 2 -> Stage 3 (Navy) ──
        .to(
          card2,
          {
            opacity: 0,
            scale: 0.9,
            y: -40,
            rotateX: -4,
            duration: 1.2,
            ease: "power2.inOut",
            pointerEvents: "none",
          },
          2.1
        )
        .to(
          pinned,
          {
            backgroundColor: "#132338", // Deep Midnight Navy
            duration: 1.2,
            ease: "power2.inOut",
          },
          2.1
        )
        .to(
          card3,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotateX: 0,
            duration: 1.2,
            ease: "power2.out",
            pointerEvents: "auto",
          },
          2.8
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const jumpToStage = (index) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top;
    const scrollDistance = window.innerHeight * 2.6;
    const targetScroll = scrollTop + (index / 2) * scrollDistance;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  return (
    <div
      ref={containerRef}
      id="top"
      style={{
        position: "relative",
        height: "360vh", // Generous scroll space for buttery smooth scrubbing
        background: "#0c1524",
      }}
    >
      {/* Pinned 100vh Viewport Screen */}
      <div
        ref={pinnedRef}
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0c1524",
          color: "#ffffff",
          overflow: "hidden",
          perspective: 1400,
          padding: "clamp(80px, 10.5vh, 96px) clamp(24px, 4vw, 64px) clamp(36px, 6vh, 68px)",
          boxSizing: "border-box",
          transition: "background-color 0.8s ease",
        }}
      >
        {/* Full-Bleed Architectural Image for Hero Stage */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            backgroundImage: "url(/images/contour/hero-workplace.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: activeStage === 0 ? 0.38 : 0.04,
            transition: "opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
            pointerEvents: "none",
          }}
        />

        {/* Ambient Radial Gradient Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background:
              "radial-gradient(ellipse at 75% 25%, rgba(255,255,255,0.06) 0%, rgba(10,18,30,0.7) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Signature Vertical Split Divider (Appears at 00:14 scroll wipe) */}
        <div
          ref={splitLineRef}
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "50%",
            width: "2px",
            background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.85), transparent)",
            zIndex: 25,
            transformOrigin: "top center",
            pointerEvents: "none",
          }}
        />

        {/* SVG Contour Animated Organic Path weaving across the Hero */}
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            zIndex: 3,
            pointerEvents: "none",
            opacity: 0.65,
          }}
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Continuous contour flowing stroke */}
          <path
            d="M 60 180 H 780 A 40 40 0 0 1 820 220 V 440 A 40 40 0 0 0 860 480 H 1380"
            stroke="rgba(255, 255, 255, 0.35)"
            strokeWidth="1.6"
            strokeDasharray="6 6"
          />
          <path
            d="M 720 540 H 1340 A 36 36 0 0 1 1376 576 V 760 A 36 36 0 0 1 1340 796 H 920"
            stroke="rgba(255, 255, 255, 0.28)"
            strokeWidth="1.4"
          />
        </svg>

        {/* ── CENTRAL STAGE CONTAINER: Grid stack holds all 3 stages without overlap ── */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            width: "100%",
            maxWidth: 1440,
            margin: "auto 0",
            display: "grid",
            gridTemplateColumns: "1fr",
            alignItems: "center",
            justifyItems: "center",
            flex: 1,
          }}
        >
          {/* ══════════════════════════════════════════════
              STAGE 1: Strategically Led IT Architecture
          ══════════════════════════════════════════════ */}
          <div
            ref={card1Ref}
            style={{
              gridArea: "1 / 1",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "clamp(340px, 50vh, 520px)",
              transformStyle: "preserve-3d",
              willChange: "transform, opacity",
            }}
          >
            {/* Top Right Headline Placement matching Contour Hero */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              <div
                style={{
                  maxWidth: 820,
                  textAlign: "left",
                }}
              >
                <h1
                  style={{
                    fontFamily: DISPLAY,
                    fontWeight: 600,
                    fontSize: "clamp(2.3rem, 5vw, 5rem)",
                    lineHeight: 1.08,
                    letterSpacing: "-0.035em",
                    color: "#ffffff",
                    margin: 0,
                    textShadow: "0 4px 20px rgba(0,0,0,0.4)",
                  }}
                >
                  Strategically led IT architecture and managed delivery.
                </h1>
              </div>
            </div>

            {/* Bottom Right Floating Featured Case Study Pill Card */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                marginTop: "clamp(24px, 4vh, 48px)",
              }}
            >
              <div
                onClick={() => onSelectCaseStudy && onSelectCaseStudy("summit-logistics")}
                style={{
                  background: "rgba(18, 30, 48, 0.72)",
                  backdropFilter: "blur(20px)",
                  border: "1.5px solid rgba(255, 255, 255, 0.4)",
                  borderRadius: "clamp(24px, 3.5vw, 36px)",
                  padding: "16px 24px 16px 28px",
                  display: "flex",
                  alignItems: "center",
                  gap: "clamp(20px, 3vw, 36px)",
                  cursor: "pointer",
                  boxShadow: "0 24px 60px -15px rgba(0, 0, 0, 0.5)",
                  transition: "transform 0.3s ease, border-color 0.3s ease, background 0.3s ease",
                }}
                className="contour-hero-pill"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.borderColor = "#ffffff";
                  e.currentTarget.style.background = "rgba(22, 38, 62, 0.88)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.4)";
                  e.currentTarget.style.background = "rgba(18, 30, 48, 0.72)";
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: "clamp(1.15rem, 1.8vw, 1.55rem)",
                      fontWeight: 600,
                      color: "#ffffff",
                      display: "block",
                      marginBottom: 8,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Summit Logistics Hub
                  </span>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      color: "rgba(255, 255, 255, 0.8)",
                      fontSize: "0.88rem",
                      fontWeight: 500,
                    }}
                  >
                    <span>Read the case study</span>
                    <ArrowRight size={14} />
                  </div>
                </div>

                {/* Rounded Architectural Thumbnail */}
                <div
                  style={{
                    width: "clamp(110px, 14vw, 160px)",
                    height: "clamp(74px, 9vw, 100px)",
                    borderRadius: 20,
                    overflow: "hidden",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src="/images/contour/hero-workplace.jpg"
                    alt="Summit Logistics Sydney & Melbourne"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════════
              STAGE 2: Warm Olive Stage & Puzzle Outlines
          ══════════════════════════════════════════════ */}
          <div
            ref={card2Ref}
            style={{
              gridArea: "1 / 1",
              width: "100%",
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: "clamp(24px, 5vw, 64px)",
              alignItems: "center",
              transformStyle: "preserve-3d",
              willChange: "transform, opacity",
            }}
          >
            {/* Left Headline & Action Pill */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "clamp(24px, 4vh, 40px)",
              }}
            >
              <h2
                style={{
                  fontFamily: DISPLAY,
                  fontWeight: 600,
                  fontSize: "clamp(2.1rem, 4.4vw, 4.6rem)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.035em",
                  color: "#ffffff",
                  margin: 0,
                  maxWidth: 680,
                }}
              >
                IT systems are strategic tools. We make them work harder.
              </h2>

              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 20 }}>
                <button
                  onClick={() => onSelectCaseStudy && onSelectCaseStudy("finedge-capital")}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "13px 30px",
                    borderRadius: 9999,
                    background: "#ffffff",
                    border: "1px solid #ffffff",
                    color: "#283220",
                    fontSize: "0.94rem",
                    fontWeight: 600,
                    fontFamily: DISPLAY,
                    cursor: "pointer",
                    boxShadow: "0 10px 25px -5px rgba(0,0,0,0.25)",
                    transition: "transform 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.background = "#eef1ea";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.background = "#ffffff";
                  }}
                >
                  <span>See how we've done it</span>
                  <ArrowRight size={15} />
                </button>

                {/* Case preview pill */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    background: "rgba(255, 255, 255, 0.12)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    borderRadius: 9999,
                    padding: "6px 18px 6px 6px",
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src="/images/contour/server-datacenter.jpg"
                      alt="Datacenter preview"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <span style={{ fontSize: "0.85rem", fontWeight: 500, color: "#ffffff" }}>
                    FinEdge Financial Group
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side: Organic Contour Circuit Puzzle Animation */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <ContourPuzzleLines stroke="rgba(255, 255, 255, 0.55)" />
            </div>
          </div>

          {/* ══════════════════════════════════════════════
              STAGE 3: Deep Navy Stage & Framework
          ══════════════════════════════════════════════ */}
          <div
            ref={card3Ref}
            style={{
              gridArea: "1 / 1",
              width: "100%",
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: "clamp(24px, 5vw, 64px)",
              alignItems: "center",
              transformStyle: "preserve-3d",
              willChange: "transform, opacity",
            }}
          >
            {/* Left Headline & Action Pill */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "clamp(24px, 4vh, 40px)",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#7dd3fc",
                    fontWeight: 700,
                    display: "block",
                    marginBottom: 14,
                  }}
                >
                  OUR APPROACH · ARCHITECTURAL IT
                </span>
                <h2
                  style={{
                    fontFamily: DISPLAY,
                    fontWeight: 600,
                    fontSize: "clamp(2.1rem, 4.4vw, 4.6rem)",
                    lineHeight: 1.08,
                    letterSpacing: "-0.035em",
                    color: "#ffffff",
                    margin: 0,
                    maxWidth: 680,
                  }}
                >
                  One framework. Infinite possibilities.
                </h2>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 20 }}>
                <button
                  onClick={onOpenApproach}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "13px 30px",
                    borderRadius: 9999,
                    background: "#ffffff",
                    border: "1px solid #ffffff",
                    color: "#132338",
                    fontSize: "0.94rem",
                    fontWeight: 600,
                    fontFamily: DISPLAY,
                    cursor: "pointer",
                    boxShadow: "0 10px 25px -5px rgba(0,0,0,0.3)",
                    transition: "transform 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.background = "#e2e8f0";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.background = "#ffffff";
                  }}
                >
                  <span>Explore our framework</span>
                  <ArrowRight size={15} />
                </button>

                <button
                  onClick={() => onSelectCaseStudy && onSelectCaseStudy("healthbridge-clinical")}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "12px 24px",
                    borderRadius: 9999,
                    background: "rgba(255, 255, 255, 0.12)",
                    border: "1px solid rgba(255, 255, 255, 0.35)",
                    color: "#ffffff",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    fontFamily: DISPLAY,
                    cursor: "pointer",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <span>HealthBridge Case Study</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>

            {/* Right Side: Architectural Studio Window & Contour Glyph */}
            <div
              style={{
                position: "relative",
                borderRadius: "clamp(24px, 4vw, 40px)",
                overflow: "hidden",
                border: "1.5px solid rgba(255, 255, 255, 0.35)",
                boxShadow: "0 24px 60px -15px rgba(0,0,0,0.45)",
                aspectRatio: "16 / 10",
              }}
            >
              <img
                src="/images/contour/studio-lounge.jpg"
                alt="Veritron IT Architecture Studio"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 20,
                  right: 20,
                  background: "rgba(12, 21, 36, 0.8)",
                  backdropFilter: "blur(12px)",
                  padding: "10px 18px",
                  borderRadius: 9999,
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <ContourBadge size={20} color="#38bdf8" />
                <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#ffffff", letterSpacing: "0.05em" }}>
                  VERITRON COMPASS FRAMEWORK
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR: Cycling Tagline & Interactive Stage Indicators ── */}
        <div
          style={{
            position: "relative",
            zIndex: 15,
            width: "100%",
            maxWidth: 1440,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 20,
          }}
        >
          {/* Bottom Left: Tagline & Smooth Rolling Word Cycler */}
          <div style={{ maxWidth: 460 }}>
            <span
              style={{
                fontFamily: DISPLAY,
                fontWeight: 600,
                fontSize: "clamp(1.15rem, 1.8vw, 1.45rem)",
                color: "#ffffff",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                display: "block",
              }}
            >
              Architecting what's possible
            </span>
            <span
              key={rotatingIndex}
              style={{
                fontFamily: DISPLAY,
                fontWeight: 400,
                fontSize: "clamp(1rem, 1.6vw, 1.35rem)",
                color: "rgba(255, 255, 255, 0.68)",
                letterSpacing: "-0.015em",
                display: "block",
                marginTop: 4,
                animation: "contourFadeUp 0.45s ease-out",
              }}
            >
              {ROTATING_LINES[rotatingIndex]}
            </span>
          </div>

          {/* Bottom Right: Scroll Cue & Interactive Stage Indicators */}
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                color: "rgba(255, 255, 255, 0.55)",
                fontSize: "0.82rem",
                fontWeight: 500,
              }}
            >
              <span>Scroll to explore</span>
              <ChevronDown size={14} style={{ animation: "contourBounce 1.8s infinite" }} />
            </div>

            {/* Stage Progress Pills */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  onClick={() => jumpToStage(idx)}
                  aria-label={`Jump to stage ${idx + 1}`}
                  style={{
                    width: activeStage === idx ? 38 : 12,
                    height: 8,
                    borderRadius: 4,
                    background: activeStage === idx ? "#ffffff" : "rgba(255, 255, 255, 0.28)",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes contourBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }
        @keyframes contourFadeUp {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 860px) {
          #top h1, #top h2 {
            font-size: 2.2rem !important;
          }
        }
      `}</style>
    </div>
  );
}
