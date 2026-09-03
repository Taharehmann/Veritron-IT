import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import useScreen from "../../hooks/useScreen";
import { TOOLS } from "../../constants/data";
import { DISPLAY } from "../../constants/typography";
import OpsDashboard from "./OpsDashboard";

export default function Hero() {
  const C = useTheme();
  const { isMobile, isMd } = useScreen();

  const px = isMobile ? 16 : 24;
  const eyebrow = { fontSize: ".72rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: C.honeyDk };
  const btnP = { display: "inline-flex", alignItems: "center", gap: 8, background: C.pine, color: C.bg, padding: isMobile ? ".75rem 1.2rem" : ".85rem 1.5rem", borderRadius: 999, fontWeight: 600, textDecoration: "none", cursor: "pointer", border: "none", fontSize: isMobile ? ".88rem" : ".97rem" };
  const btnG = { display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: C.ink, padding: isMobile ? ".75rem 1.2rem" : ".85rem 1.5rem", borderRadius: 999, fontWeight: 600, textDecoration: "none", border: `1.5px solid ${C.line}`, cursor: "pointer", fontSize: isMobile ? ".88rem" : ".97rem" };

  return (
    <section id="top" style={{ background: `radial-gradient(1100px 500px at 15% -10%, #1b4a3b 0%, transparent 60%), radial-gradient(900px 500px at 100% 0%, #24543f 0%, transparent 55%), linear-gradient(180deg, ${C.pineDeep}, #0a201a)`, color: C.heroInk, position: "relative", overflow: "hidden" }}>
      <div className="float-glow" style={{ position: "absolute", width: isMobile ? 200 : 420, height: isMobile ? 200 : 420, borderRadius: "50%", background: "rgba(224,164,88,.18)", filter: "blur(90px)", top: 40, right: -60, pointerEvents: "none" }} />
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: isMobile ? "48px 16px 60px" : "72px 24px 84px", position: "relative", display: "grid", gridTemplateColumns: isMd ? "1fr 1fr" : "1fr", gap: isMobile ? 32 : 56, alignItems: "center" }}>
        <div>
          <span className="hero-animate-1" style={{ ...eyebrow, color: C.honey, display: "inline-block" }}>Managed IT · Cloud · Networks · Support</span>
          <h1 className="hero-animate-2" style={{ fontFamily: DISPLAY, fontWeight: 600, fontSize: "clamp(2.2rem,5.6vw,4.3rem)", lineHeight: 1.05, letterSpacing: "-.02em", margin: "18px 0 0" }}>
            Your systems,<br />quietly <em style={{ fontStyle: "italic", color: C.honey }}>looked after.</em>
          </h1>
          <p className="hero-animate-3" style={{ fontSize: isMobile ? "1rem" : "1.18rem", color: C.heroMuted, maxWidth: "36ch", margin: "22px 0 30px" }}>Veritron monitors, secures and supports the technology behind your business — 24/7, in plain English, from one local team.</p>
          <div className="hero-animate-4" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#contact" className="btn-interactive" style={{ ...btnP, background: C.honey, color: C.pineDeep, width: isMobile ? "100%" : "auto", justifyContent: "center" }}>Book a free IT check <ArrowRight size={16} /></a>
            <a href="#solutions" className="btn-interactive" style={{ ...btnG, color: C.heroInk, borderColor: "rgba(255,255,255,.25)", width: isMobile ? "100%" : "auto", justifyContent: "center" }}>See what we do</a>
          </div>
          <div className="hero-animate-5" style={{ display: "flex", alignItems: "center", gap: isMobile ? 10 : 24, marginTop: 32, flexWrap: "wrap" }}>
            {["No lock-in contracts", "Local Melbourne team", "Fixed monthly pricing"].map((x) => <span key={x} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: isMobile ? ".78rem" : ".86rem", color: C.heroMuted }}><Check size={15} color="#8FE0B0" strokeWidth={3} />{x}</span>)}
          </div>
        </div>
        <div className="hero-dashboard-animate">
          <OpsDashboard />
        </div>
      </div>
      {/* Tool marquee */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,.1)", padding: "18px 0", position: "relative" }}>
        <p style={{ textAlign: "center", fontSize: ".76rem", letterSpacing: ".14em", textTransform: "uppercase", color: C.heroMuted, marginBottom: 14 }}>Certified across the tools you already run</p>
        <div style={{ overflow: "hidden", maskImage: "linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)", WebkitMaskImage: "linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)" }}>
          <div className="mq">{[...TOOLS, ...TOOLS].map((t, i) => <span key={i} style={{ color: C.heroInk, opacity: .6, fontWeight: 600, fontSize: isMobile ? ".88rem" : "1.05rem", whiteSpace: "nowrap" }}>{t}</span>)}</div>
        </div>
      </div>
    </section>
  );
}
