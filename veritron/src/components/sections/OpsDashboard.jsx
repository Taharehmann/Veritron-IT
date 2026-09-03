import React, { useState, useEffect } from "react";
import { Check, ShieldCheck, HeartPulse, Zap } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import useScreen from "../../hooks/useScreen";
import { FEED } from "../../constants/data";
import { DISPLAY } from "../../constants/typography";
import Logo from "../ui/Logo";
import Counter from "../ui/Counter";

export default function OpsDashboard() {
  const C = useTheme();
  const { isMobile } = useScreen();
  const [feedIdx, setFeedIdx] = useState(0);
  useEffect(() => { const id = setInterval(() => setFeedIdx((i) => (i + 1) % FEED.length), 2200); return () => clearInterval(id); }, []);
  const bars = [62, 78, 55, 88, 70, 95, 82, 90, 74, 98, 86, 92];
  const shown = [0, 1, 2, 3].map((k) => FEED[(feedIdx + k) % FEED.length]);

  return (
    <div style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 22, padding: isMobile ? 14 : 20, backdropFilter: "blur(10px)", boxShadow: "0 40px 90px -40px rgba(0,0,0,.7)", width: "100%", minWidth: 0, overflow: "hidden" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: 14, borderBottom: "1px solid rgba(255,255,255,.1)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, color: C.heroInk, fontWeight: 600, fontSize: isMobile ? ".82rem" : ".95rem", minWidth: 0 }}>
          <Logo size={22} badge={C.honey} stroke={C.pineDeep} spark={C.pineDeep} /> <span>Veritron Care</span>
        </div>
        <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: ".72rem", fontWeight: 700, color: "#8FE0B0", letterSpacing: ".08em", flexShrink: 0 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ADE80", animation: "vpulse 2s infinite" }} /> LIVE
        </span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: isMobile ? 8 : 12, margin: "16px 0" }}>
        {[{ v: 247, l: "Devices healthy", I: HeartPulse }, { v: 1482, l: "Threats blocked", I: ShieldCheck }, { v: 12, l: "Avg resolve (min)", I: Zap }].map((m) => (
          <div key={m.l} style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)", borderRadius: isMobile ? 10 : 14, padding: isMobile ? "8px 6px" : "12px", minWidth: 0, overflow: "hidden" }}>
            <m.I size={isMobile ? 14 : 16} color={C.honey} />
            <div style={{ fontFamily: DISPLAY, fontWeight: 600, fontSize: isMobile ? "1.1rem" : "1.5rem", color: C.heroInk, marginTop: 6, lineHeight: 1 }}><Counter to={m.v} /></div>
            <div style={{ fontSize: isMobile ? ".6rem" : ".68rem", color: C.heroMuted, marginTop: 3 }}>{m.l}</div>
          </div>
        ))}
      </div>
      <div style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 14, padding: isMobile ? "10px 10px" : "12px 14px", marginBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ fontSize: ".72rem", color: C.heroMuted }}>Uptime · last 12 months</span>
          <span style={{ fontSize: ".82rem", fontWeight: 700, color: "#8FE0B0" }}>99.98%</span>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: isMobile ? 2 : 4, height: 42 }}>
          {bars.map((b, i) => <div key={i} style={{ flex: 1, height: `${b}%`, background: `linear-gradient(180deg, ${C.honey}, ${C.sage})`, borderRadius: 3, opacity: .55 + b / 250 }} />)}
        </div>
      </div>
      <div style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 14, padding: isMobile ? "8px 10px" : "10px 12px", overflow: "hidden" }}>
        {shown.map((f, i) => (
          <div key={f + i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "5px 0", opacity: i === 0 ? 1 : 0.55 - i * 0.12, transition: "opacity .5s" }}>
            <Check size={14} color="#4ADE80" strokeWidth={3} style={{ flexShrink: 0 }} /><span style={{ fontSize: isMobile ? ".72rem" : ".78rem", color: C.heroInk, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{f}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
