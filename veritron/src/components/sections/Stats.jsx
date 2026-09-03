import React from "react";
import { useTheme } from "../../context/ThemeContext";
import useScreen from "../../hooks/useScreen";
import { STATS } from "../../constants/data";
import { DISPLAY } from "../../constants/typography";
import Reveal from "../ui/Reveal";
import Counter from "../ui/Counter";

export default function Stats() {
  const C = useTheme();
  const { isMobile, isMd } = useScreen();
  const px = isMobile ? 16 : 24;

  return (
    <section style={{ padding: isMobile ? "48px 0" : "70px 0", background: C.surface, borderBottom: `1px solid ${C.line}` }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: `0 ${px}px`, display: "grid", gridTemplateColumns: isMd ? "repeat(4, 1fr)" : "repeat(2, 1fr)", gap: isMobile ? 24 : 32 }}>
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 90}>
            <div style={{ fontFamily: DISPLAY, fontWeight: 600, fontSize: "clamp(2rem,4vw,3.1rem)", color: C.pine, lineHeight: 1 }}><Counter to={s.to} prefix={s.prefix || ""} suffix={s.suffix || ""} decimals={s.decimals || 0} /></div>
            <div style={{ fontWeight: 600, marginTop: 10, color: C.ink, fontSize: isMobile ? ".9rem" : "1rem" }}>{s.label}</div>
            <div style={{ fontSize: isMobile ? ".82rem" : ".88rem", color: C.muted, marginTop: 2 }}>{s.sub}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
