import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import useScreen from "../../hooks/useScreen";
import { QUOTES } from "../../constants/data";
import { DISPLAY } from "../../constants/typography";

export default function Carousel() {
  const C = useTheme();
  const { isMobile } = useScreen();
  const [i, setI] = useState(0);
  useEffect(() => { const id = setInterval(() => setI((x) => (x + 1) % QUOTES.length), 5000); return () => clearInterval(id); }, []);
  const t = QUOTES[i];

  return (
    <div style={{ background: C.pine, borderRadius: isMobile ? 18 : 26, padding: isMobile ? "30px 20px" : "48px 40px", color: C.heroInk, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: "rgba(224,164,88,.16)", filter: "blur(70px)", top: -60, right: -40 }} />
      <div style={{ position: "relative" }}>
        <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>{Array.from({ length: t.s }).map((_, k) => <Star key={k} size={isMobile ? 15 : 18} fill={C.honey} color={C.honey} />)}</div>
        <p style={{ fontFamily: DISPLAY, fontWeight: 500, fontSize: "clamp(1.15rem,2.6vw,2rem)", lineHeight: 1.35, minHeight: isMobile ? 72 : 96 }}>"{t.q}"</p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 24, flexWrap: "wrap", gap: 12 }}>
          <div><div style={{ fontWeight: 700 }}>{t.n}</div><div style={{ fontSize: ".88rem", color: C.heroMuted }}>{t.r}</div></div>
          <div style={{ display: "flex", gap: 8 }}>{QUOTES.map((_, k) => <button key={k} onClick={() => setI(k)} aria-label={`Testimonial ${k + 1}`} style={{ width: k === i ? 26 : 9, height: 9, borderRadius: 999, border: "none", cursor: "pointer", background: k === i ? C.honey : "rgba(255,255,255,.3)", transition: "width .3s" }} />)}</div>
        </div>
      </div>
    </div>
  );
}
