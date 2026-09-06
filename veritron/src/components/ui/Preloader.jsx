import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { DISPLAY } from "../../constants/typography";

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Fast, crisp progress animation (~1.0s)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const diff = 100 - prev;
        const step = Math.max(3, Math.ceil(diff * 0.22));
        return Math.min(100, prev + step);
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Signal immediately that preloader is complete so entrance animations start right as fadeOut begins!
      window.__VERITRON_LOADED = true;
      window.dispatchEvent(new Event("veritron:loaded"));

      const timer = setTimeout(() => {
        setFadeOut(true);
      }, 100);

      const hideTimer = setTimeout(() => {
        setHidden(true);
        if (onComplete) onComplete();
      }, 500);

      return () => {
        clearTimeout(timer);
        clearTimeout(hideTimer);
      };
    }
  }, [progress, onComplete]);

  if (hidden) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999999,
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: fadeOut ? 0 : 1,
        visibility: fadeOut ? "hidden" : "visible",
        transition: "opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.45s linear",
        pointerEvents: fadeOut ? "none" : "all",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
          animation: "preloaderPulse 1.8s ease-in-out infinite alternate",
        }}
      >
        {/* Veritron Logo */}
        <div style={{ filter: "drop-shadow(0 10px 24px rgba(37, 99, 235, 0.2))" }}>
          <Logo badge="#2563eb" stroke="#ffffff" spark="#00f0ff" size={68} />
        </div>

        {/* Brand Text */}
        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              fontFamily: DISPLAY,
              fontWeight: 700,
              fontSize: "1.75rem",
              color: "#0f172a",
              letterSpacing: "-0.02em",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Veritron
          </h1>
          <span
            style={{
              fontSize: ".75rem",
              fontWeight: 600,
              letterSpacing: ".22em",
              textTransform: "uppercase",
              color: "#00a8ff",
              display: "block",
              marginTop: 4,
            }}
          >
            IT Solutions
          </span>
        </div>

        {/* Loading Progress Section */}
        <div
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
          }}
        >
          {/* Progress Bar Container */}
          <div
            style={{
              width: 180,
              height: 4,
              borderRadius: 4,
              background: "#e2e8f0",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                background: "linear-gradient(90deg, #2563eb, #00f0ff)",
                borderRadius: 4,
                transition: "width 0.05s ease-out",
                boxShadow: "0 0 12px rgba(0, 240, 255, 0.6)",
              }}
            />
          </div>

          {/* Loading Label */}
          <span
            style={{
              fontSize: ".82rem",
              fontWeight: 500,
              color: "#64748b",
              letterSpacing: ".04em",
            }}
          >
            Loading... {progress}%
          </span>
        </div>
      </div>

      <style>{`
        @keyframes preloaderPulse {
          0% { transform: scale(0.97); }
          100% { transform: scale(1.03); }
        }
      `}</style>
    </div>
  );
}
