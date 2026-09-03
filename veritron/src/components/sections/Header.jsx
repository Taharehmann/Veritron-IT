import React, { useState, useEffect } from "react";
import { ChevronRight, ArrowRight, Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import useScreen from "../../hooks/useScreen";
import { MEGA } from "../../constants/data";
import { DISPLAY } from "../../constants/typography";
import Logo from "../ui/Logo";

export default function Header({ dark, setDark }) {
  const C = useTheme();
  const { isMobile, isMd, w } = useScreen();
  const [mega, setMega] = useState(false);
  const [mobile, setMobile] = useState(false);

  // Close mobile nav on resize to desktop
  useEffect(() => {
    if (isMd && mobile) setMobile(false);
  }, [isMd]);

  const px = isMobile ? 16 : 24;
  const btnP = { display: "inline-flex", alignItems: "center", gap: 8, background: C.pine, color: C.bg, padding: isMobile ? ".75rem 1.2rem" : ".85rem 1.5rem", borderRadius: 999, fontWeight: 600, textDecoration: "none", cursor: "pointer", border: "none", fontSize: isMobile ? ".88rem" : ".97rem" };

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 60, background: dark ? "rgba(30,30,34,.92)" : "rgba(246,241,232,.85)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${C.line}`, transition: "background .4s ease" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: `0 ${px}px`, display: "flex", alignItems: "center", justifyContent: "space-between", height: isMobile ? 60 : 72 }}>
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: isMobile ? 8 : 12, textDecoration: "none" }}>
          <Logo size={isMobile ? 32 : 40} />
          <div style={{ lineHeight: 1 }}>
            <div style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: isMobile ? "1.1rem" : "1.35rem", color: C.ink }}>Veritron</div>
            <div style={{ fontSize: ".52rem", letterSpacing: ".3em", color: C.pine, fontWeight: 600, marginTop: 2 }}>IT SOLUTIONS</div>
          </div>
        </a>
        {/* Desktop nav */}
        {isMd && (
          <nav style={{ display: "flex", alignItems: "center", gap: w < 900 ? 16 : 28, fontSize: ".95rem", fontWeight: 500 }}>
            <div onMouseEnter={() => setMega(true)} onMouseLeave={() => setMega(false)} style={{ position: "relative" }}>
              <button style={{ background: "none", border: "none", font: "inherit", color: C.ink, cursor: "pointer", display: "flex", alignItems: "center", gap: 4, padding: "8px 0" }}>Services <ChevronRight size={15} style={{ transform: mega ? "rotate(90deg)" : "none", transition: ".2s" }} /></button>
              {mega && (
                <div style={{ position: "absolute", top: 44, left: -20, width: Math.min(640, w - 40), background: C.surface, border: `1px solid ${C.line}`, borderRadius: 18, boxShadow: "0 30px 70px -30px rgba(30,60,50,.4)", padding: 18, zIndex: 100 }}>
                  <div style={{ display: "grid", gridTemplateColumns: w < 900 ? "1fr" : "1fr 1fr", gap: 4 }}>
                    {MEGA.map((m) => (
                      <a key={m.t} href="#solutions" style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: 12, borderRadius: 12, color: C.ink, textDecoration: "none" }}
                        onMouseEnter={(e) => e.currentTarget.style.background = C.surfaceAlt} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                        <span style={{ width: 38, height: 38, borderRadius: 10, background: C.surfaceAlt, display: "grid", placeItems: "center", flexShrink: 0 }}><m.icon size={18} color={C.pine} /></span>
                        <span><b style={{ display: "block", fontSize: ".92rem" }}>{m.t}</b><small style={{ color: C.muted, fontSize: ".8rem" }}>{m.d}</small></span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {["Industries", "Why Veritron", "Pricing"].map((x) => <a key={x} href={"#" + x.split(" ")[0].toLowerCase()} className="nav-link" style={{ color: C.ink, opacity: .82 }}>{x}</a>)}
          </nav>
        )}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* Dark mode toggle */}
          <button
            onClick={() => setDark((d) => !d)}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            style={{
              background: dark ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.06)",
              border: "none",
              cursor: "pointer",
              padding: 8,
              borderRadius: 12,
              display: "grid",
              placeItems: "center",
              color: C.ink,
              transition: "background .3s ease, transform .25s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "rotate(25deg) scale(1.12)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; }}
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          {w >= 640 && <a href="#contact" className="btn-interactive" style={btnP}>Book a free IT check</a>}
          {!isMd && (
            <button onClick={() => setMobile(!mobile)} style={{ background: "none", border: "none", cursor: "pointer", padding: 4, color: C.ink }}>
              {mobile ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </div>
      {/* Mobile nav drawer */}
      {mobile && !isMd && (
        <div style={{ borderTop: `1px solid ${C.line}`, padding: "12px 16px 20px", background: C.surface }}>
          {["Services", "Industries", "Why Veritron", "Pricing", "Contact"].map((x) => (
            <a key={x} href={"#" + x.split(" ")[0].toLowerCase()} onClick={() => setMobile(false)} style={{ display: "block", padding: "12px 0", color: C.ink, fontWeight: 500, fontSize: "1.05rem", borderBottom: `1px solid ${C.line}` }}>{x}</a>
          ))}
          <a href="#contact" style={{ ...btnP, width: "100%", justifyContent: "center", marginTop: 16 }}>Book a free IT check <ArrowRight size={16} /></a>
        </div>
      )}
    </header>
  );
}
