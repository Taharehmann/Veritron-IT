import React from "react";
import { Sparkles, ArrowRight, X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import useScreen from "../../hooks/useScreen";

export default function AnnouncementBar({ onDismiss }) {
  const C = useTheme();
  const { isMobile } = useScreen();
  const isDark = C.isDark;

  return (
    <div
      style={{
        background: isDark
          ? "linear-gradient(90deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)"
          : "linear-gradient(90deg, #1e40af 0%, #2563eb 50%, #1e40af 100%)",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: isMobile ? 8 : 12,
        padding: isMobile ? "9px 40px 9px 14px" : "10px 18px",
        fontSize: isMobile ? ".8rem" : ".88rem",
        fontWeight: 500,
        position: "relative",
        flexWrap: "wrap",
        textAlign: "center",
        borderBottom: `1px solid ${isDark ? "rgba(0, 240, 255, 0.15)" : "rgba(255, 255, 255, 0.15)"}`,
      }}
    >
      <Sparkles size={16} color={isDark ? "#00f0ff" : "#93c5fd"} style={{ flexShrink: 0 }} />
      <span style={{ color: "#ffffff", fontWeight: 500 }}>
        New: 24/7 monitoring now included on every Managed plan
      </span>
      <a
        href="#pricing"
        style={{
          color: isDark ? "#00f0ff" : "#ffffff",
          fontWeight: 700,
          display: "inline-flex",
          alignItems: "center",
          gap: 4,
          whiteSpace: "nowrap",
          textDecoration: "underline",
          textUnderlineOffset: "3px",
        }}
      >
        See plans <ArrowRight size={14} />
      </a>
      <button
        onClick={onDismiss}
        aria-label="Dismiss announcement"
        style={{
          position: "absolute",
          right: 12,
          top: "50%",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          color: "rgba(255, 255, 255, 0.8)",
          cursor: "pointer",
          padding: 4,
          display: "grid",
          placeItems: "center",
        }}
      >
        <X size={16} />
      </button>
    </div>
  );
}
