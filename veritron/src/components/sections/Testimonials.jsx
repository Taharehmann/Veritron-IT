import React from "react";
import { useTheme } from "../../context/ThemeContext";
import useScreen from "../../hooks/useScreen";
import { DISPLAY } from "../../constants/typography";
import Reveal from "../ui/Reveal";
import Carousel from "./Carousel";

export default function Testimonials() {
  const C = useTheme();
  const { isMobile } = useScreen();
  const px = isMobile ? 16 : 24;

  const eyebrow = { fontSize: ".72rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: C.honeyDk };
  const h2s = { fontFamily: DISPLAY, fontWeight: 600, fontSize: "clamp(1.7rem,4vw,2.9rem)", color: C.pineDk, lineHeight: 1.1, letterSpacing: "-.01em" };

  return (
    <section style={{ padding: isMobile ? "60px 0" : "90px 0" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: `0 ${px}px` }}>
        <Reveal><div style={{ marginBottom: 30 }}>
          <span style={eyebrow}>Client stories</span>
          <h2 style={{ ...h2s, marginTop: 12 }}>Businesses that stopped worrying about IT.</h2>
        </div></Reveal>
        <Reveal delay={100}><Carousel /></Reveal>
      </div>
    </section>
  );
}
