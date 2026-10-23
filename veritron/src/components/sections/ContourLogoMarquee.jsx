import React from "react";
import { DISPLAY } from "../../constants/typography";
import { PARTNER_LOGOS } from "../../constants/contourData";

export default function ContourLogoMarquee() {
  // Duplicate for infinite marquee loop
  const logos = [...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <section
      style={{
        background: "#eef1ea",
        color: "#1e261a",
        padding: "clamp(64px, 10vh, 100px) clamp(20px, 4vw, 60px)",
        borderTop: "1px solid rgba(0, 0, 0, 0.06)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto 48px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: DISPLAY,
            fontSize: "clamp(1.15rem, 2vw, 1.5rem)",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#262b21",
            margin: "0 0 12px",
          }}
        >
          TRUSTED BY LEADERS RESPONSIBLE FOR PERFORMANCE.
        </h2>
        <p
          style={{
            fontFamily: DISPLAY,
            fontSize: "clamp(0.95rem, 1.4vw, 1.15rem)",
            color: "#545e4e",
            margin: 0,
            fontWeight: 400,
          }}
        >
          Those who know reliable IT infrastructure is a direct line to the bottom line.
        </p>
      </div>

      {/* Infinite Horizontal Logo Marquee */}
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          position: "relative",
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      >
        <div
          className="contour-marquee-track"
          style={{
            display: "flex",
            gap: 28,
            width: "max-content",
            animation: "contourMarquee 38s linear infinite",
          }}
        >
          {logos.map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              style={{
                background: "#ffffff",
                border: "1.5px solid rgba(0, 0, 0, 0.08)",
                borderRadius: 20,
                padding: "18px 36px",
                minWidth: 200,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 16px -4px rgba(30, 40, 25, 0.06)",
                transition: "transform 0.25s, box-shadow 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 10px 24px -6px rgba(30, 40, 25, 0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 16px -4px rgba(30, 40, 25, 0.06)";
              }}
            >
              <span
                style={{
                  fontFamily: DISPLAY,
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "#1e261a",
                  letterSpacing: "-0.01em",
                }}
              >
                {logo.name}
              </span>
              <span
                style={{
                  fontSize: "0.72rem",
                  color: "#6b7565",
                  marginTop: 4,
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                }}
              >
                {logo.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes contourMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        @media (hover: hover) {
          .contour-marquee-track:hover {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
}
