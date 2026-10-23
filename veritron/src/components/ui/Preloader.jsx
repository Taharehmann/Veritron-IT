import React, { useState, useEffect } from "react";
import { DISPLAY } from "../../constants/typography";

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isExpanding, setIsExpanding] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const startTime = performance.now();
    const duration = 1400; // 1.4s smooth load

    const frame = (now) => {
      const elapsed = now - startTime;
      const p = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(p);

      if (p < 100) {
        requestAnimationFrame(frame);
      } else {
        window.__VERITRON_LOADED = true;
        window.dispatchEvent(new Event("veritron:loaded"));
        setTimeout(() => setIsExpanding(true), 150);
        setTimeout(() => {
          setHidden(true);
          if (onComplete) onComplete();
        }, 850);
      }
    };

    const animId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(animId);
  }, [onComplete]);

  if (hidden) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999999,
        background: "#0c1524",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: isExpanding ? 0 : 1,
        transform: isExpanding ? "scale(1.08)" : "scale(1)",
        filter: isExpanding ? "blur(8px)" : "none",
        visibility: hidden ? "hidden" : "visible",
        transition: "opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1), filter 0.75s ease",
        pointerEvents: isExpanding ? "none" : "all",
        overflow: "hidden",
      }}
    >
      {/* Background Animated SVG Contour Trace Lines (Matching Contour intro) */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          opacity: 0.35,
        }}
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M -100 450 C 200 450 350 200 720 200 C 1090 200 1200 650 1540 650"
          stroke="#38bdf8"
          strokeWidth="1.5"
          strokeDasharray="2000"
          strokeDashoffset={2000 - (progress / 100) * 2000}
          style={{ transition: "stroke-dashoffset 0.1s linear" }}
        />
        <path
          d="M 1540 300 C 1200 300 1000 700 720 700 C 440 700 300 250 -100 250"
          stroke="rgba(255, 255, 255, 0.4)"
          strokeWidth="1.2"
          strokeDasharray="2200"
          strokeDashoffset={2200 - (progress / 100) * 2200}
          style={{ transition: "stroke-dashoffset 0.1s linear" }}
        />
        <rect
          x="420"
          y="280"
          width="600"
          height="340"
          rx="40"
          stroke="rgba(255, 255, 255, 0.25)"
          strokeWidth="1.5"
          strokeDasharray="1880"
          strokeDashoffset={1880 - (progress / 100) * 1880}
          style={{ transition: "stroke-dashoffset 0.1s linear" }}
        />
      </svg>

      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
          textAlign: "center",
        }}
      >
        {/* Signature Brand Wordmark */}
        <div style={{ position: "relative" }}>
          <h1
            style={{
              fontFamily: DISPLAY,
              fontWeight: 700,
              fontSize: "clamp(3.2rem, 8vw, 5.5rem)",
              color: "#ffffff",
              letterSpacing: "-0.04em",
              margin: 0,
              lineHeight: 1,
            }}
          >
            Veritron<span style={{ color: "#38bdf8" }}>.</span>
          </h1>
          <span
            style={{
              fontSize: "clamp(0.72rem, 1vw, 0.85rem)",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "rgba(255, 255, 255, 0.6)",
              display: "block",
              marginTop: 14,
              fontWeight: 600,
            }}
          >
            Architectural IT · Strategic Delivery
          </span>
        </div>

        {/* Minimal Progress Bar with Percentage */}
        <div
          style={{
            width: 220,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
            marginTop: 16,
          }}
        >
          <div
            style={{
              width: "100%",
              height: 2,
              background: "rgba(255, 255, 255, 0.12)",
              borderRadius: 2,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: `${progress}%`,
                background: "linear-gradient(90deg, #38bdf8, #ffffff)",
                transition: "width 0.05s linear",
              }}
            />
          </div>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "0.75rem",
              color: "rgba(255, 255, 255, 0.45)",
              letterSpacing: "0.1em",
            }}
          >
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
}
