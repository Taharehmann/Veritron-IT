import React, { useRef } from "react";
import { DISPLAY } from "../../constants/typography";
import { CASE_STUDIES } from "../../constants/contourData";
import { ContourBadge } from "../ui/ContourShape";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function ContourCaseStudyList({ onSelectCaseStudy }) {
  const scrollRef = useRef(null);

  const scrollByAmount = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section
      id="work"
      style={{
        background: "#eef1ea",
        padding: "clamp(60px, 10vh, 120px) 0 clamp(80px, 12vh, 140px)",
        position: "relative",
      }}
    >
      {/* Header with Title and Scroll Arrows */}
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto 36px",
          padding: "0 clamp(20px, 4vw, 64px)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        <div>
          <span
            style={{
              fontSize: "0.74rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#5f6b58",
              fontWeight: 700,
              display: "block",
              marginBottom: 10,
            }}
          >
            SELECTED CLIENT WORK
          </span>
          <h2
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(2rem, 3.8vw, 3.8rem)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              color: "#1e261a",
              margin: 0,
              lineHeight: 1.12,
            }}
          >
            Engineered for resilience. Proven in practice.
          </h2>
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          <button
            onClick={() => scrollByAmount(-500)}
            aria-label="Scroll left"
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "#ffffff",
              border: "1.5px solid rgba(0, 0, 0, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              transition: "transform 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <ChevronLeft size={20} color="#1e261a" />
          </button>
          <button
            onClick={() => scrollByAmount(500)}
            aria-label="Scroll right"
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "#ffffff",
              border: "1.5px solid rgba(0, 0, 0, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              transition: "transform 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <ChevronRight size={20} color="#1e261a" />
          </button>
        </div>
      </div>

      {/* Horizontal Stack of Contour Case Study Rows */}
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "clamp(24px, 3.5vw, 36px)",
          padding: "0 clamp(20px, 4vw, 64px)",
          overflowX: "auto",
          scrollbarWidth: "none",
        }}
      >
        {CASE_STUDIES.map((cs) => (
          <div
            key={cs.id}
            onClick={() => onSelectCaseStudy && onSelectCaseStudy(cs.id)}
            style={{
              display: "grid",
              gridTemplateColumns: "clamp(320px, 32vw, 440px) 1.4fr 1fr",
              gap: "clamp(16px, 2vw, 24px)",
              minHeight: "clamp(300px, 34vh, 380px)",
              cursor: "pointer",
              transition: "transform 0.35s ease",
            }}
            className="contour-case-row"
          >
            {/* 1. Left Info Card */}
            <div
              style={{
                background: cs.themeColor,
                borderRadius: 28,
                padding: "clamp(24px, 3vw, 40px)",
                color: "#ffffff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 14px 34px -10px rgba(0,0,0,0.18)",
                position: "relative",
                overflow: "hidden",
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "rgba(255, 255, 255, 0.75)",
                      fontWeight: 700,
                    }}
                  >
                    CASE STUDY
                  </span>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: "rgba(255, 255, 255, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "transform 0.25s",
                    }}
                  >
                    <ArrowUpRight size={17} color="#ffffff" />
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: "clamp(1.6rem, 2.4vw, 2.3rem)",
                    fontWeight: 600,
                    letterSpacing: "-0.03em",
                    margin: "0 0 10px",
                    lineHeight: 1.15,
                  }}
                >
                  {cs.title}
                </h3>
              </div>

              {/* Bottom Info + Contour Flowgram Icon */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  gap: 16,
                  paddingTop: 24,
                }}
              >
                <p
                  style={{
                    fontSize: "clamp(0.85rem, 1.1vw, 0.96rem)",
                    color: "rgba(255, 255, 255, 0.9)",
                    lineHeight: 1.45,
                    margin: 0,
                    maxWidth: 240,
                  }}
                >
                  {cs.subtitle}
                </p>

                {/* Contour Abstract Flowgram SVG */}
                <div style={{ flexShrink: 0, opacity: 0.85 }}>
                  <ContourBadge color="#ffffff" size={44} />
                </div>
              </div>
            </div>

            {/* 2. Middle Photography Preview Card */}
            <div
              style={{
                borderRadius: 28,
                overflow: "hidden",
                boxShadow: "0 14px 34px -10px rgba(0,0,0,0.12)",
                position: "relative",
              }}
            >
              <img
                src={cs.heroImage}
                alt={`${cs.title} Primary View`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
                className="contour-img-hover"
              />
            </div>

            {/* 3. Right Photography Detail Card */}
            <div
              style={{
                borderRadius: 28,
                overflow: "hidden",
                boxShadow: "0 14px 34px -10px rgba(0,0,0,0.12)",
                position: "relative",
              }}
            >
              <img
                src={cs.detailImage}
                alt={`${cs.title} Detail View`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
                className="contour-img-hover"
              />
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .contour-case-row:hover .contour-img-hover {
          transform: scale(1.04);
        }
        @media (max-width: 900px) {
          .contour-case-row {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
