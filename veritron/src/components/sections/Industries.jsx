import React from "react";
import { useTheme } from "../../context/ThemeContext";
import useScreen from "../../hooks/useScreen";
import { DISPLAY } from "../../constants/typography";
import Reveal from "../ui/Reveal";

const INDUSTRIES = [
  "Professional Services", "Medical Clinics", "Dental Clinics", "Law Firms",
  "Accounting Firms", "Construction", "Real Estate", "Retail Stores",
  "Warehouses", "Manufacturing", "Hospitality", "Education",
  "Non-Profits", "Trades Businesses",
];

export default function Industries() {
  const C = useTheme();
  const { isMobile } = useScreen();
  const px = isMobile ? 16 : 24;

  const eyebrow = { fontSize: ".72rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: C.honeyDk };
  const h2s = { fontFamily: DISPLAY, fontWeight: 600, fontSize: "clamp(1.7rem,4vw,2.9rem)", color: C.pineDk, lineHeight: 1.1, letterSpacing: "-.01em" };

  return (
    <section id="industries" style={{ padding: isMobile ? "56px 0" : "84px 0", background: C.surfaceAlt }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: `0 ${px}px` }}>
        <Reveal><div style={{ maxWidth: "60ch", marginBottom: 34 }}>
          <span style={eyebrow}>Who we help</span>
          <h2 style={{ ...h2s, marginTop: 12 }}>Trusted across Melbourne's businesses.</h2>
        </div></Reveal>
        <div style={{ display: "flex", flexWrap: "wrap", gap: isMobile ? 8 : 12 }}>
          {INDUSTRIES.map((x) => (
            <span key={x} className="lift" style={{ background: C.surface, border: `1px solid ${C.line}`, borderRadius: 999, padding: isMobile ? ".5rem .9rem" : ".65rem 1.2rem", fontSize: isMobile ? ".82rem" : ".93rem", fontWeight: 500, color: C.pineDk }}>{x}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
