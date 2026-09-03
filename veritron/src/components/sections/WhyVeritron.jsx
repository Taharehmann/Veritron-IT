import React from "react";
import { useTheme } from "../../context/ThemeContext";
import useScreen from "../../hooks/useScreen";
import { WHY } from "../../constants/data";
import { DISPLAY } from "../../constants/typography";
import Reveal from "../ui/Reveal";
import HealthCheck from "./HealthCheck";

export default function WhyVeritron() {
  const C = useTheme();
  const { isMobile, isMd } = useScreen();
  const px = isMobile ? 16 : 24;

  const eyebrow = { fontSize: ".72rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: C.honeyDk };
  const h2s = { fontFamily: DISPLAY, fontWeight: 600, fontSize: "clamp(1.7rem,4vw,2.9rem)", color: C.pineDk, lineHeight: 1.1, letterSpacing: "-.01em" };

  return (
    <section id="why" style={{ padding: isMobile ? "40px 0 60px" : "40px 0 90px" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: `0 ${px}px`, display: "grid", gridTemplateColumns: isMd ? "1fr 1fr" : "1fr", gap: isMobile ? 32 : 48, alignItems: "center" }}>
        <Reveal>
          <span style={eyebrow}>Why Veritron</span>
          <h2 style={{ ...h2s, marginTop: 12, marginBottom: 28 }}>Big-company reliability,<br />small-business warmth.</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {WHY.map((w) => (
              <div key={w.t} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <span style={{ flexShrink: 0, width: 46, height: 46, borderRadius: 12, background: C.surfaceAlt, display: "grid", placeItems: "center" }}><w.icon size={22} color={C.honeyDk} /></span>
                <div>
                  <h3 style={{ fontFamily: DISPLAY, fontWeight: 600, fontSize: isMobile ? "1.05rem" : "1.2rem", color: C.pineDk }}>{w.t}</h3>
                  <p style={{ color: C.muted, fontSize: isMobile ? ".88rem" : ".97rem", marginTop: 3 }}>{w.p}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120}><HealthCheck /></Reveal>
      </div>
    </section>
  );
}
