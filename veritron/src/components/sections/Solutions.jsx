import React, { useState } from "react";
import { Check, ArrowUpRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import useScreen from "../../hooks/useScreen";
import { SOLUTIONS } from "../../constants/data";
import { DISPLAY } from "../../constants/typography";
import Reveal from "../ui/Reveal";

export default function Solutions() {
  const C = useTheme();
  const { isMobile, isMd } = useScreen();
  const [tab, setTab] = useState("managed");
  const sol = SOLUTIONS.find((s) => s.key === tab);
  const px = isMobile ? 16 : 24;

  const eyebrow = { fontSize: ".72rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: C.honeyDk };
  const h2s = { fontFamily: DISPLAY, fontWeight: 600, fontSize: "clamp(1.7rem,4vw,2.9rem)", color: C.pineDk, lineHeight: 1.1, letterSpacing: "-.01em" };
  const btnP = { display: "inline-flex", alignItems: "center", gap: 8, background: C.pine, color: C.bg, padding: isMobile ? ".75rem 1.2rem" : ".85rem 1.5rem", borderRadius: 999, fontWeight: 600, textDecoration: "none", cursor: "pointer", border: "none", fontSize: isMobile ? ".88rem" : ".97rem" };

  return (
    <section id="solutions" style={{ padding: isMobile ? "60px 0" : "90px 0" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: `0 ${px}px` }}>
        <Reveal><div style={{ maxWidth: "60ch", marginBottom: 36 }}>
          <span style={eyebrow}>What we do</span>
          <h2 style={{ ...h2s, marginTop: 12 }}>Critical IT, handled end to end.</h2>
          <p style={{ color: C.muted, fontSize: isMobile ? "1rem" : "1.1rem", marginTop: 12 }}>No juggling five vendors. Pick a discipline to see how Veritron takes it off your plate.</p>
        </div></Reveal>
        {/* Solution tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 28, overflowX: "auto", WebkitOverflowScrolling: "touch", paddingBottom: 4, scrollbarWidth: "none" }}>
          {SOLUTIONS.map((s) => (
            <button
              key={s.key}
              onClick={() => setTab(s.key)}
              className="btn-interactive"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: isMobile ? ".6rem .9rem" : ".7rem 1.2rem",
                borderRadius: 999,
                cursor: "pointer",
                fontWeight: 600,
                fontSize: isMobile ? ".82rem" : ".92rem",
                border: `1.5px solid ${tab === s.key ? C.pine : C.line}`,
                background: tab === s.key ? C.pine : C.surface,
                color: tab === s.key ? C.bg : C.ink,
                transition: "all .25s ease",
                whiteSpace: "nowrap",
                flexShrink: 0,
                boxShadow: tab === s.key ? "0 8px 20px -8px rgba(30,77,63,.4)" : "none"
              }}
            >
              <s.icon size={16} /> {s.label}
            </button>
          ))}
        </div>
        {/* Solution detail card */}
        <div className="card-interactive" style={{ display: "grid", gridTemplateColumns: isMd ? "1fr 1fr" : "1fr", gap: isMobile ? 24 : 32, background: C.surface, border: `1px solid ${C.line}`, borderRadius: isMobile ? 18 : 24, padding: isMobile ? 20 : 36, alignItems: "center" }}>
          <div key={tab} className="tab-animated">
            <span style={{ width: isMobile ? 44 : 54, height: isMobile ? 44 : 54, borderRadius: 15, background: C.surfaceAlt, display: "grid", placeItems: "center", marginBottom: 18 }}><sol.icon size={isMobile ? 22 : 26} color={C.pine} /></span>
            <h3 style={{ fontFamily: DISPLAY, fontWeight: 600, fontSize: isMobile ? "1.35rem" : "1.7rem", color: C.pineDk }}>{sol.h}</h3>
            <p style={{ color: C.muted, fontSize: isMobile ? ".95rem" : "1.05rem", margin: "12px 0 20px" }}>{sol.p}</p>
            <a href="#contact" className="btn-interactive" style={{ ...btnP, background: "transparent", color: C.pine, border: `1.5px solid ${C.pine}`, fontSize: isMobile ? ".85rem" : ".97rem" }}>Talk to us about this <ArrowUpRight size={16} /></a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {sol.pts.map((p, idx) => (
              <div key={p} className="card-interactive" style={{ display: "flex", alignItems: "center", gap: 12, background: C.surfaceAlt, border: `1px solid ${C.line}`, borderRadius: 14, padding: isMobile ? "12px 14px" : "16px 18px", transition: `all .25s ease ${idx * 40}ms` }}>
                <span style={{ width: 28, height: 28, borderRadius: 8, background: C.pine, display: "grid", placeItems: "center", flexShrink: 0 }}><Check size={16} color={C.bg} strokeWidth={3} /></span>
                <span style={{ fontWeight: 500, fontSize: isMobile ? ".88rem" : "1rem" }}>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
