import React, { useState, useEffect } from "react";
import { DISPLAY } from "../../constants/typography";
import { ROTATING_LINES, HERO_SLIDES } from "../../constants/contourData";
import { ContourPuzzleLines } from "../ui/ContourShape";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function ContourHero({ onSelectCaseStudy, onOpenApproach }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [rotatingIndex, setRotatingIndex] = useState(0);

  // Rotating text cycler (every 3 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setRotatingIndex((prev) => (prev + 1) % ROTATING_LINES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[activeSlide];

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleButtonClick = (slideItem) => {
    if (slideItem.id === "slide-3" && onOpenApproach) {
      onOpenApproach();
    } else if (onSelectCaseStudy) {
      onSelectCaseStudy(slideItem.caseStudyId);
    }
  };

  return (
    <section
      id="top"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: slide.bgColor,
        color: "#ffffff",
        overflow: "hidden",
        transition: "background 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        padding: "clamp(100px, 14vh, 130px) clamp(20px, 4vw, 64px) clamp(40px, 6vh, 60px)",
      }}
    >
      {/* Background Image Layer (Slide 1) */}
      {slide.bgImage && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            backgroundImage: `url(${slide.bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.45,
            transition: "opacity 0.8s ease",
          }}
        />
      )}

      {/* Subtle overlay gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: "radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.5) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Main Content Area */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: 1440,
          margin: "0 auto",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* SLIDE 1: The Signature Contour Hero Card Layout */}
        {activeSlide === 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "clamp(24px, 4vw, 56px)",
              alignItems: "center",
              width: "100%",
            }}
          >
            {/* Left Column Spacer (the rotating text sits at bottom left) */}
            <div style={{ display: "none" }} />

            {/* Center-Right Large Contour Card */}
            <div
              style={{
                gridColumn: "1 / -1",
                maxWidth: 960,
                marginLeft: "auto",
                width: "100%",
                border: "1.5px solid rgba(255, 255, 255, 0.42)",
                borderRadius: "clamp(24px, 4vw, 44px)",
                background: "rgba(12, 21, 36, 0.55)",
                backdropFilter: "blur(14px)",
                padding: "clamp(28px, 5vw, 64px)",
                boxShadow: "0 30px 80px -20px rgba(0, 0, 0, 0.5)",
                display: "flex",
                flexDirection: "column",
                gap: "clamp(24px, 4vh, 48px)",
                transition: "all 0.5s ease",
              }}
            >
              <h1
                style={{
                  fontFamily: DISPLAY,
                  fontWeight: 600,
                  fontSize: "clamp(2rem, 4.5vw, 4.4rem)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.035em",
                  color: "#ffffff",
                  margin: 0,
                  maxWidth: 820,
                }}
              >
                Strategically led IT architecture and managed delivery.
              </h1>

              {/* Bottom Row inside the contour outline */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  gap: 24,
                  paddingTop: 12,
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: "clamp(1.1rem, 1.8vw, 1.45rem)",
                      fontWeight: 600,
                      color: "#ffffff",
                      display: "block",
                      marginBottom: 12,
                    }}
                  >
                    Summit Logistics Hub
                  </span>
                  <button
                    onClick={() => handleButtonClick(slide)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "11px 26px",
                      borderRadius: 9999,
                      background: "rgba(255, 255, 255, 0.12)",
                      border: "1px solid rgba(255, 255, 255, 0.38)",
                      color: "#ffffff",
                      fontSize: "0.92rem",
                      fontWeight: 500,
                      fontFamily: DISPLAY,
                      cursor: "pointer",
                      backdropFilter: "blur(8px)",
                      transition: "background 0.25s, border-color 0.25s, transform 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.25)";
                      e.currentTarget.style.borderColor = "#ffffff";
                      e.currentTarget.style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.38)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <span>Read the case study</span>
                    <ArrowRight size={15} />
                  </button>
                </div>

                {/* Rounded Media Preview Thumbnail */}
                <div
                  style={{
                    width: "clamp(160px, 22vw, 240px)",
                    height: "clamp(100px, 14vw, 145px)",
                    borderRadius: 20,
                    overflow: "hidden",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.3)",
                  }}
                >
                  <img
                    src={slide.previewImage}
                    alt="Summit Logistics Melbourne Preview"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.4s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 2: Warm Olive Green with Contour Puzzle Shapes */}
        {activeSlide === 1 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "clamp(32px, 6vw, 72px)",
              alignItems: "center",
              width: "100%",
            }}
          >
            {/* Left Card */}
            <div
              style={{
                border: "1.5px solid rgba(255, 255, 255, 0.42)",
                borderRadius: "clamp(24px, 4vw, 44px)",
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(12px)",
                padding: "clamp(28px, 5vw, 56px)",
                display: "flex",
                flexDirection: "column",
                gap: 36,
              }}
            >
              <h2
                style={{
                  fontFamily: DISPLAY,
                  fontWeight: 600,
                  fontSize: "clamp(2rem, 4.2vw, 4.2rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.035em",
                  color: "#ffffff",
                  margin: 0,
                }}
              >
                IT systems are strategic tools. We make them work harder.
              </h2>

              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: 24, justifyContent: "space-between" }}>
                <button
                  onClick={() => handleButtonClick(slide)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "12px 28px",
                    borderRadius: 9999,
                    background: "rgba(255, 255, 255, 0.14)",
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                    color: "#ffffff",
                    fontSize: "0.92rem",
                    fontWeight: 500,
                    fontFamily: DISPLAY,
                    cursor: "pointer",
                    backdropFilter: "blur(8px)",
                    transition: "background 0.25s, border-color 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.25)";
                    e.currentTarget.style.borderColor = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.14)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.4)";
                  }}
                >
                  <span>See how we've done it</span>
                  <ArrowRight size={15} />
                </button>

                <div
                  style={{
                    width: "clamp(150px, 20vw, 220px)",
                    height: "clamp(100px, 13vw, 135px)",
                    borderRadius: 18,
                    overflow: "hidden",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                  }}
                >
                  <img
                    src={slide.previewImage}
                    alt="Enterprise Datacenter"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>

            {/* Right Side: Signature Contour Puzzle Drawing */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
              }}
            >
              <ContourPuzzleLines stroke="rgba(255, 255, 255, 0.55)" />
            </div>
          </div>
        )}

        {/* SLIDE 3: Deep Navy - One framework. Infinite possibilities. */}
        {activeSlide === 2 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "clamp(32px, 6vw, 72px)",
              alignItems: "center",
              width: "100%",
            }}
          >
            {/* Left Side: Contour Puzzle Graphic */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                order: 2,
              }}
            >
              <ContourPuzzleLines stroke="rgba(255, 255, 255, 0.45)" />
            </div>

            {/* Right Side Card */}
            <div
              style={{
                border: "1.5px solid rgba(255, 255, 255, 0.42)",
                borderRadius: "clamp(24px, 4vw, 44px)",
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(12px)",
                padding: "clamp(28px, 5vw, 56px)",
                display: "flex",
                flexDirection: "column",
                gap: 36,
                order: 1,
              }}
            >
              <h2
                style={{
                  fontFamily: DISPLAY,
                  fontWeight: 600,
                  fontSize: "clamp(2rem, 4.2vw, 4.2rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.035em",
                  color: "#ffffff",
                  margin: 0,
                }}
              >
                One framework. Infinite possibilities.
              </h2>

              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: 24, justifyContent: "space-between" }}>
                <div>
                  <span
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: "1.2rem",
                      fontWeight: 600,
                      color: "#ffffff",
                      display: "block",
                      marginBottom: 10,
                    }}
                  >
                    Our Approach
                  </span>
                  <button
                    onClick={() => handleButtonClick(slide)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "12px 28px",
                      borderRadius: 9999,
                      background: "rgba(255, 255, 255, 0.14)",
                      border: "1px solid rgba(255, 255, 255, 0.4)",
                      color: "#ffffff",
                      fontSize: "0.92rem",
                      fontWeight: 500,
                      fontFamily: DISPLAY,
                      cursor: "pointer",
                      backdropFilter: "blur(8px)",
                      transition: "background 0.25s, border-color 0.25s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.25)";
                      e.currentTarget.style.borderColor = "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.14)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.4)";
                    }}
                  >
                    <span>Our Approach</span>
                    <ArrowRight size={15} />
                  </button>
                </div>

                <div
                  style={{
                    width: "clamp(150px, 20vw, 220px)",
                    height: "clamp(100px, 13vw, 135px)",
                    borderRadius: 18,
                    overflow: "hidden",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                  }}
                >
                  <img
                    src={slide.previewImage}
                    alt="Collaborative Tech Studio"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Bar: Rotating Text (Bottom-Left) + Stage Controls (Bottom-Right) */}
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
          gap: 24,
          paddingTop: 32,
        }}
      >
        {/* Bottom-Left: "Reshaping what's possible" with rotating lines */}
        <div style={{ maxWidth: 440 }}>
          <div
            style={{
              fontFamily: DISPLAY,
              fontWeight: 700,
              fontSize: "clamp(1.25rem, 2vw, 1.65rem)",
              color: "#ffffff",
              letterSpacing: "-0.025em",
              lineHeight: 1.2,
            }}
          >
            {slide.taglinePrimary}
          </div>
          <div
            key={rotatingIndex}
            style={{
              fontFamily: DISPLAY,
              fontWeight: 400,
              fontSize: "clamp(1.1rem, 1.8vw, 1.45rem)",
              color: "rgba(255, 255, 255, 0.65)",
              letterSpacing: "-0.02em",
              lineHeight: 1.3,
              marginTop: 4,
              animation: "contourFadeIn 0.5s ease",
            }}
          >
            {ROTATING_LINES[rotatingIndex]}
          </div>
        </div>

        {/* Bottom-Right: Interactive Stage Indicator & Next/Prev Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {HERO_SLIDES.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActiveSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                width: activeSlide === idx ? 36 : 10,
                height: 10,
                borderRadius: 5,
                background: activeSlide === idx ? "#ffffff" : "rgba(255, 255, 255, 0.3)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease",
              }}
            />
          ))}

          <div style={{ display: "flex", gap: 8, marginLeft: 12 }}>
            <button
              onClick={handlePrev}
              aria-label="Previous slide"
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.25)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)")}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next slide"
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.25)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)")}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes contourFadeIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
