import React from "react";
import { Phone, ArrowRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import useScreen from "../../hooks/useScreen";
import { DISPLAY } from "../../constants/typography";

export default function ContactCTA() {
  const C = useTheme();
  const { isMobile } = useScreen();
  const px = isMobile ? 16 : 24;

  const btnP = { display: "inline-flex", alignItems: "center", gap: 8, background: C.pine, color: C.bg, padding: isMobile ? ".75rem 1.2rem" : ".85rem 1.5rem", borderRadius: 999, fontWeight: 600, textDecoration: "none", cursor: "pointer", border: "none", fontSize: isMobile ? ".88rem" : ".97rem" };
  const btnG = { display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: C.ink, padding: isMobile ? ".75rem 1.2rem" : ".85rem 1.5rem", borderRadius: 999, fontWeight: 600, textDecoration: "none", border: `1.5px solid ${C.line}`, cursor: "pointer", fontSize: isMobile ? ".88rem" : ".97rem" };

  return (
    <section id="contact" style={{ padding: isMobile ? "60px 0" : "90px 0" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: `0 ${px}px` }}>
        <div style={{ background: `radial-gradient(700px 300px at 50% 0%, #24543f, transparent), linear-gradient(180deg, ${C.pine}, ${C.pineDeep})`, color: C.heroInk, borderRadius: isMobile ? 20 : 30, padding: isMobile ? "40px 20px" : "64px 32px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div className="float-glow-slow" style={{ position: "absolute", width: 360, height: 360, borderRadius: "50%", background: "rgba(224,164,88,.2)", filter: "blur(80px)", top: -100, left: "50%", pointerEvents: "none" }} />
          <div style={{ position: "relative" }}>
            <h2 style={{ fontFamily: DISPLAY, fontWeight: 600, fontSize: "clamp(1.7rem,4.4vw,3.2rem)", color: C.heroInk }}>Let's look after your systems.</h2>
            <p style={{ color: C.heroMuted, margin: "16px auto 30px", maxWidth: "46ch", fontSize: isMobile ? ".95rem" : "1.12rem" }}>Book a free, no-obligation IT health check. We'll review your setup and show you exactly where Veritron fits.</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="mailto:hello@veritron.com.au" className="btn-interactive" style={{ ...btnP, background: C.honey, color: C.pineDeep, width: isMobile ? "100%" : "auto", justifyContent: "center" }}>Book a free IT check <ArrowRight size={16} /></a>
              <a href="tel:0000000000" className="btn-interactive" style={{ ...btnG, color: C.heroInk, borderColor: "rgba(255,255,255,.3)", width: isMobile ? "100%" : "auto", justifyContent: "center" }}><Phone size={16} /> Call [phone]</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
