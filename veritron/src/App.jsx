import React, { useState, useEffect } from "react";
import { ThemeCtx, LIGHT, DARK } from "./context/ThemeContext";
import { BODY } from "./constants/typography";

/* ── Section components ── */
import AnnouncementBar from "./components/sections/AnnouncementBar";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import Solutions from "./components/sections/Solutions";
import WhyVeritron from "./components/sections/WhyVeritron";
import Industries from "./components/sections/Industries";
import Testimonials from "./components/sections/Testimonials";
import Pricing from "./components/sections/Pricing";
import ContactCTA from "./components/sections/ContactCTA";
import Footer from "./components/sections/Footer";
import WhatsAppButton from "./components/sections/WhatsAppButton";

export default function VeritronApp() {
  const [bar, setBar] = useState(true);
  const [dark, setDark] = useState(false);
  const C = dark ? DARK : LIGHT;

  /* Load Google Fonts once */
  useEffect(() => {
    const id = "veritron-fonts";
    if (!document.getElementById(id)) {
      const l = document.createElement("link");
      l.id = id;
      l.rel = "stylesheet";
      l.href = "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap";
      document.head.appendChild(l);
    }
  }, []);

  return (
    <ThemeCtx.Provider value={C}>
      <div style={{ fontFamily: BODY, background: C.bg, color: C.ink, overflowX: "clip", transition: "background .4s ease, color .4s ease" }}>
        {/* Global keyframes & utility classes */}
        <style>{`
          @keyframes vpulse{0%{box-shadow:0 0 0 0 rgba(74,222,128,.5)}70%{box-shadow:0 0 0 9px rgba(74,222,128,0)}100%{box-shadow:0 0 0 0 rgba(74,222,128,0)}}
          @keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
          .mq{display:flex;gap:56px;width:max-content;animation:marquee 26s linear infinite}
          .lift{transition:transform .2s ease, box-shadow .2s ease}
          .lift:hover{transform:translateY(-5px);box-shadow:0 20px 44px -22px rgba(30,60,50,.30)}
          @media (prefers-reduced-motion: reduce){.mq{animation:none}}
          a{text-decoration:none}
          @media(max-width:639px){.mq{gap:32px;animation-duration:18s}}
        `}</style>

        {bar && <AnnouncementBar onDismiss={() => setBar(false)} />}
        <Header dark={dark} setDark={setDark} />
        <Hero />
        <Stats />
        <Solutions />
        <WhyVeritron />
        <Industries />
        <Testimonials />
        <Pricing />
        <ContactCTA />
        <Footer />
        <WhatsAppButton />
      </div>
    </ThemeCtx.Provider>
  );
}
