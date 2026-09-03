import React from "react";
import { Check } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import useScreen from "../../hooks/useScreen";
import { PLANS } from "../../constants/data";
import { DISPLAY } from "../../constants/typography";
import Reveal from "../ui/Reveal";

export default function Pricing() {
  const C = useTheme();
  const { isMobile, isMd } = useScreen();
  const px = isMobile ? 16 : 24;

  const eyebrow = { fontSize: ".72rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: C.honeyDk };
  const h2s = { fontFamily: DISPLAY, fontWeight: 600, fontSize: "clamp(1.7rem,4vw,2.9rem)", color: C.pineDk, lineHeight: 1.1, letterSpacing: "-.01em" };
  const btnP = { display: "inline-flex", alignItems: "center", gap: 8, background: C.pine, color: C.bg, padding: isMobile ? ".75rem 1.2rem" : ".85rem 1.5rem", borderRadius: 999, fontWeight: 600, textDecoration: "none", cursor: "pointer", border: "none", fontSize: isMobile ? ".88rem" : ".97rem" };

  return (
    <section id="pricing" style={{ padding: isMobile ? "56px 0" : "84px 0", background: C.surfaceAlt }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: `0 ${px}px` }}>
        <Reveal><div style={{ textAlign: "center", maxWidth: "60ch", margin: "0 auto 44px" }}>
          <span style={eyebrow}>Simple plans</span>
          <h2 style={{ ...h2s, marginTop: 12 }}>Fixed monthly pricing. No surprises.</h2>
          <p style={{ color: C.muted, fontSize: isMobile ? ".95rem" : "1.08rem", marginTop: 12 }}>Per user, per month. Scale up or down as your team changes.</p>
        </div></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: isMd ? "repeat(3, 1fr)" : "1fr", gap: isMobile ? 20 : 24 }}>
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div className="lift" style={{ background: p.popular ? C.pine : C.surface, color: p.popular ? C.heroInk : C.ink, border: `1px solid ${p.popular ? C.pine : C.line}`, borderRadius: 22, padding: isMobile ? 24 : 32, position: "relative", height: "100%" }}>
                {p.popular && <span style={{ position: "absolute", top: isMobile ? 16 : 20, right: isMobile ? 16 : 20, background: C.honey, color: C.pineDeep, fontSize: ".7rem", fontWeight: 700, padding: ".3rem .7rem", borderRadius: 999, letterSpacing: ".05em" }}>MOST POPULAR</span>}
                <div style={{ fontWeight: 600, fontSize: ".82rem", letterSpacing: ".08em", textTransform: "uppercase", color: p.popular ? C.honey : C.honeyDk }}>{p.name}</div>
                <div style={{ margin: "12px 0 4px", display: "flex", alignItems: "baseline", gap: 4 }}>
                  <span style={{ fontFamily: DISPLAY, fontWeight: 600, fontSize: isMobile ? "2.2rem" : "2.6rem" }}>{p.price === "—" ? "Custom" : `$${p.price}`}</span>
                  {p.price !== "—" && <span style={{ opacity: .7, fontSize: ".9rem" }}>/user/mo</span>}
                </div>
                <div style={{ fontSize: ".92rem", color: p.popular ? C.heroMuted : C.muted, marginBottom: 20 }}>{p.tag}</div>
                <a href="#contact" style={{ ...btnP, width: "100%", justifyContent: "center", background: p.popular ? C.honey : C.pine, color: p.popular ? C.pineDeep : C.bg, marginBottom: 22 }}>Get started</a>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>{p.feats.map((f) => <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: ".93rem" }}><Check size={16} color={p.popular ? C.honey : C.pine} strokeWidth={3} style={{ flexShrink: 0 }} /> {f}</div>)}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <p style={{ textAlign: "center", color: C.muted, fontSize: ".85rem", marginTop: 20 }}>Prices shown are examples — final pricing tailored to your setup.</p>
      </div>
    </section>
  );
}
