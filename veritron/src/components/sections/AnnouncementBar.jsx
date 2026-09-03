import React from "react";
import { Sparkles, ArrowRight, X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import useScreen from "../../hooks/useScreen";

export default function AnnouncementBar({ onDismiss }) {
  const C = useTheme();
  const { isMobile } = useScreen();

  return (
    <div style={{ background: C.pineDeep, color: C.heroInk, display: "flex", alignItems: "center", justifyContent: "center", gap: isMobile ? 8 : 12, padding: isMobile ? "8px 40px 8px 12px" : "8px 16px", fontSize: isMobile ? ".78rem" : ".875rem", position: "relative", flexWrap: "wrap", textAlign: "center" }}>
      <Sparkles size={15} color={C.honey} style={{ flexShrink: 0 }} />
      <span style={{ opacity: .92 }}>New: 24/7 monitoring now included on every Managed plan</span>
      <a href="#pricing" style={{ color: C.honey, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 4, whiteSpace: "nowrap" }}>See plans <ArrowRight size={14} /></a>
      <button onClick={onDismiss} aria-label="Dismiss" style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: C.heroMuted, cursor: "pointer", padding: 4 }}><X size={16} /></button>
    </div>
  );
}
