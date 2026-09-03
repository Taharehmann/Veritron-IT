import React, { useState } from "react";
import { ChevronRight, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import useScreen from "../../hooks/useScreen";
import { DISPLAY } from "../../constants/typography";

export default function HealthCheck() {
  const C = useTheme();
  const { isMobile } = useScreen();
  const Q = [
    { k: "size", q: "How big is your team?", opts: ["1–5", "6–20", "21+"] },
    { k: "cloud", q: "Where's your email & files?", opts: ["Microsoft 365", "Google Workspace", "Not sure"] },
    { k: "backup", q: "Do you have reliable backups?", opts: ["Yes", "No", "Not sure"] },
  ];
  const [step, setStep] = useState(0);
  const [ans, setAns] = useState({});
  const pick = (k, v) => { setAns({ ...ans, [k]: v }); setStep((s) => s + 1); };
  const done = step >= Q.length;
  const rec = () => {
    if (ans.size === "21+" || ans.backup !== "Yes") return { plan: "Complete", why: "With your size and setup, you'll want full coverage — on-site support, managed backups and a proper IT roadmap." };
    if (ans.size === "6–20") return { plan: "Managed", why: "You're at the size where 24/7 monitoring, backups and a named contact pay for themselves quickly." };
    return { plan: "Essentials", why: "A lean plan covers your help desk, updates and email — with room to grow as you scale." };
  };

  return (
    <div style={{ background: C.surface, border: `1px solid ${C.line}`, borderRadius: 22, padding: isMobile ? 20 : 30, boxShadow: "0 24px 60px -30px rgba(30,60,50,.25)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
        <Sparkles size={18} color={C.honeyDk} />
        <span style={{ fontSize: ".72rem", fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: C.honeyDk }}>Free IT health check</span>
      </div>
      {!done ? (
        <>
          <h3 style={{ fontFamily: DISPLAY, fontWeight: 600, fontSize: isMobile ? "1.3rem" : "1.6rem", color: C.pineDk, marginBottom: 20 }}>{Q[step].q}</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {Q[step].opts.map((o) => (
              <button key={o} onClick={() => pick(Q[step].k, o)} style={{ textAlign: "left", padding: isMobile ? "12px 14px" : "14px 18px", borderRadius: 12, border: `1.5px solid ${C.line}`, background: C.surfaceAlt, color: C.ink, fontWeight: 500, fontSize: isMobile ? ".92rem" : "1rem", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", transition: "border-color .15s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.pine; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = C.line; }}>
                {o} <ChevronRight size={18} color={C.muted} />
              </button>
            ))}
          </div>
          <div style={{ display: "flex", gap: 6, marginTop: 22 }}>{Q.map((_, i) => <div key={i} style={{ height: 5, flex: 1, borderRadius: 3, background: i <= step ? C.honey : C.line }} />)}</div>
        </>
      ) : (
        <>
          <h3 style={{ fontFamily: DISPLAY, fontWeight: 600, fontSize: isMobile ? "1.25rem" : "1.5rem", color: C.pineDk, marginBottom: 6 }}>Our recommendation</h3>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.pine, color: C.bg, padding: ".5rem 1rem", borderRadius: 999, fontWeight: 600, margin: "8px 0 14px" }}><ShieldCheck size={16} /> {rec().plan} plan</div>
          <p style={{ color: C.muted, marginBottom: 22, lineHeight: 1.6, fontSize: isMobile ? ".9rem" : "1rem" }}>{rec().why}</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.pine, color: C.bg, padding: ".8rem 1.4rem", borderRadius: 999, fontWeight: 600, textDecoration: "none", fontSize: isMobile ? ".88rem" : "1rem" }}>Book my free check <ArrowRight size={16} /></a>
            <button onClick={() => { setAns({}); setStep(0); }} style={{ background: "transparent", border: `1.5px solid ${C.line}`, color: C.ink, padding: ".8rem 1.4rem", borderRadius: 999, fontWeight: 600, cursor: "pointer", fontSize: isMobile ? ".88rem" : "1rem" }}>Start over</button>
          </div>
        </>
      )}
    </div>
  );
}
