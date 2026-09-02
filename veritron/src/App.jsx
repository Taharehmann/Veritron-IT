import React, { useState, useEffect, useRef } from "react";
import {
  Server, Cloud, Mail, Wifi, HardDrive, Package, MousePointerClick, Truck,
  ShieldCheck, Phone, Check, ArrowRight, ArrowUpRight, ChevronRight,
  Handshake, Clock, Maximize2, Zap, Star, Menu, X, Sparkles, HeartPulse,
} from "lucide-react";

const C = {
  bg: "#F6F1E8", surface: "#FFFFFF", surfaceAlt: "#FBF8F2", ink: "#221E19", muted: "#6E6A5F",
  pine: "#1E4D3F", pineDk: "#143A2E", pineDeep: "#0C271F", honey: "#E0A458", honeyDk: "#CE8A38",
  sage: "#8FA890", line: "#E4DBCB", heroInk: "#EAF2EC", heroMuted: "#9DB4A6",
};
const DISPLAY = "'Fraunces', Georgia, serif";
const BODY = "'Inter', system-ui, sans-serif";

/* ───── Responsive hook ───── */
function useScreen() {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const h = () => setW(window.innerWidth);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return { isMobile: w < 640, isTablet: w >= 640 && w < 768, isMd: w >= 768, isLg: w >= 1024, w };
}

function useReveal(opts = {}) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: opts.threshold ?? 0.18 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return [ref, seen];
}
function Reveal({ children, delay = 0, y = 22, style = {} }) {
  const [ref, seen] = useReveal();
  return <div ref={ref} style={{ opacity: seen ? 1 : 0, transform: seen ? "none" : `translateY(${y}px)`, transition: `opacity .7s cubic-bezier(.2,.7,.2,1) ${delay}ms, transform .7s cubic-bezier(.2,.7,.2,1) ${delay}ms`, ...style }}>{children}</div>;
}
function Counter({ to, dur = 1400, prefix = "", suffix = "", decimals = 0 }) {
  const [ref, seen] = useReveal({ threshold: 0.5 });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!seen) return;
    let raf, start;
    const step = (t) => { if (!start) start = t; const p = Math.min((t - start) / dur, 1); setV(to * (1 - Math.pow(1 - p, 3))); if (p < 1) raf = requestAnimationFrame(step); };
    raf = requestAnimationFrame(step); return () => cancelAnimationFrame(raf);
  }, [seen, to]);
  return <span ref={ref}>{prefix}{v.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}</span>;
}

const MEGA = [
  { icon: Server, t: "Managed IT", d: "Your whole IT department, on call" },
  { icon: Cloud, t: "Cloud Solutions", d: "Microsoft 365 & Google Workspace" },
  { icon: Mail, t: "Business Email", d: "Secure, professional, spam-free" },
  { icon: Wifi, t: "Network Solutions", d: "Wi-Fi, firewalls, VPN & remote access" },
  { icon: HardDrive, t: "Hardware Services", d: "Setup, upgrades & relocations" },
  { icon: Package, t: "IT Procurement", d: "The right kit at the right price" },
  { icon: MousePointerClick, t: "Remote Support", d: "Help without the wait" },
  { icon: Truck, t: "On-Site Support", d: "Hands on deck when it counts" },
];
const TOOLS = ["Microsoft 365", "Google Workspace", "Windows", "macOS", "Azure", "SharePoint", "Fortinet", "Ubiquiti", "Cisco", "Datto", "SentinelOne", "Autotask"];
const SOLUTIONS = [
  { key: "managed", label: "Managed IT", icon: Server, h: "One team watching over everything.", p: "We monitor, patch and maintain your systems around the clock — so problems get fixed before they reach your desk.", pts: ["24/7 monitoring & preventive maintenance", "Help desk with a named contact", "On-site & remote support", "Monthly reporting you can actually read"] },
  { key: "cloud", label: "Cloud & Email", icon: Cloud, h: "Microsoft 365 & Google, done properly.", p: "Migrations without the downtime, mailboxes without the spam, and files that sync everywhere they should.", pts: ["Microsoft 365 & Google Workspace setup", "Zero-downtime email & data migration", "SharePoint, OneDrive & cloud backup", "Email security & spam protection"] },
  { key: "network", label: "Networks", icon: Wifi, h: "Fast, secure, always connected.", p: "From the cabling in the wall to the firewall at the edge, your network stays quick and locked down.", pts: ["Office network & Wi-Fi deployment", "Router, firewall & VPN configuration", "Secure remote access", "Network optimisation & troubleshooting"] },
  { key: "hardware", label: "Hardware & Procurement", icon: HardDrive, h: "The right kit, set up right.", p: "We source, build, upgrade and relocate the gear your team runs on — and handle the licensing too.", pts: ["Computers, laptops, servers & peripherals", "SSD/RAM upgrades & device replacement", "Microsoft & software licensing", "Office relocations & equipment moves"] },
];
const STATS = [
  { to: 24, suffix: "/7", label: "Eyes on your systems", sub: "Round-the-clock monitoring" },
  { to: 15, prefix: "<", suffix: " min", label: "Average response", sub: "From a real human, not a queue" },
  { to: 99.9, suffix: "%", decimals: 1, label: "Uptime we aim for", sub: "Issues caught before you notice" },
  { to: 1, suffix: " team", label: "For everything", sub: "No vendor finger-pointing" },
];
const WHY = [
  { icon: Handshake, t: "One team for everything", p: "Cloud, hardware, networks, email and procurement — handled by people who already know your setup." },
  { icon: Phone, t: "Real humans, plain English", p: "A named contact who explains things clearly and answers fast. No ticket number black holes." },
  { icon: Clock, t: "Problems caught early", p: "24/7 monitoring means we often fix things before you even notice. Fewer surprises, less downtime." },
  { icon: Maximize2, t: "Scales with you", p: "Two people or two hundred across multiple sites — the care grows with you, never a rebuild." },
];
const PLANS = [
  { name: "Essentials", price: "49", tag: "Small teams getting set up", feats: ["Help desk & remote support", "Managed antivirus & updates", "Email & account support", "Business-hours coverage"], popular: false },
  { name: "Managed", price: "89", tag: "Growing businesses", feats: ["Everything in Essentials", "24/7 monitoring & patching", "Cloud backup & security", "Named account contact", "Monthly reporting"], popular: true },
  { name: "Complete", price: "—", tag: "Multi-site & compliance", feats: ["Everything in Managed", "On-site support included", "Procurement & licensing", "vCIO & IT roadmap", "Priority response SLA"], popular: false },
];
const QUOTES = [
  { q: "They moved our whole office to Microsoft 365 over a weekend and nobody lost a minute on Monday.", n: "[Client name]", r: "Practice Manager · Dental", s: 5 },
  { q: "First IT company that actually explains things. We finally feel on top of our systems.", n: "[Client name]", r: "Director · Accounting Firm", s: 5 },
  { q: "Something breaks, one message and it's handled. That peace of mind is worth every cent.", n: "[Client name]", r: "Operations · Construction", s: 5 },
];
const FEED = ["Backup completed — main office", "Patch applied — 14 devices", "Phishing email quarantined", "Ticket resolved in 8 min", "Firewall rules updated", "New laptop provisioned & shipped", "Disk space alert cleared", "M365 licence optimised — saved $240/mo"];

function Logo({ badge = C.pine, stroke = C.bg, spark = C.honey, size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <rect x="6" y="6" width="88" height="88" rx="24" fill={badge} />
      <path d="M 30 30 L 50 74 L 70 30" fill="none" stroke={stroke} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="70" cy="30" r="8" fill={spark} stroke={stroke} strokeWidth="2" />
    </svg>
  );
}

function OpsDashboard() {
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

function HealthCheck() {
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

function Carousel() {
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

export default function VeritronApp() {
  const [bar, setBar] = useState(true);
  const [mega, setMega] = useState(false);
  const [tab, setTab] = useState("managed");
  const [mobile, setMobile] = useState(false);
  const screen = useScreen();
  const { isMobile, isMd, w } = screen;

  useEffect(() => {
    const id = "veritron-fonts";
    if (!document.getElementById(id)) {
      const l = document.createElement("link"); l.id = id; l.rel = "stylesheet";
      l.href = "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap";
      document.head.appendChild(l);
    }
  }, []);

  // Close mobile nav on resize to desktop
  useEffect(() => {
    if (isMd && mobile) setMobile(false);
  }, [isMd]);

  const sol = SOLUTIONS.find((s) => s.key === tab);

  const btnP = { display: "inline-flex", alignItems: "center", gap: 8, background: C.pine, color: C.bg, padding: isMobile ? ".75rem 1.2rem" : ".85rem 1.5rem", borderRadius: 999, fontWeight: 600, textDecoration: "none", cursor: "pointer", border: "none", fontSize: isMobile ? ".88rem" : ".97rem" };
  const btnG = { display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: C.ink, padding: isMobile ? ".75rem 1.2rem" : ".85rem 1.5rem", borderRadius: 999, fontWeight: 600, textDecoration: "none", border: `1.5px solid ${C.line}`, cursor: "pointer", fontSize: isMobile ? ".88rem" : ".97rem" };
  const eyebrow = { fontSize: ".72rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: C.honeyDk };
  const h2s = { fontFamily: DISPLAY, fontWeight: 600, fontSize: "clamp(1.7rem,4vw,2.9rem)", color: C.pineDk, lineHeight: 1.1, letterSpacing: "-.01em" };
  const px = isMobile ? 16 : 24;

  return (
    <div style={{ fontFamily: BODY, background: C.bg, color: C.ink, overflowX: "hidden" }}>
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

      {/* ===== ANNOUNCEMENT BAR ===== */}
      {bar && (
        <div style={{ background: C.pineDeep, color: C.heroInk, display: "flex", alignItems: "center", justifyContent: "center", gap: isMobile ? 8 : 12, padding: isMobile ? "8px 40px 8px 12px" : "8px 16px", fontSize: isMobile ? ".78rem" : ".875rem", position: "relative", flexWrap: "wrap", textAlign: "center" }}>
          <Sparkles size={15} color={C.honey} style={{ flexShrink: 0 }} />
          <span style={{ opacity: .92 }}>New: 24/7 monitoring now included on every Managed plan</span>
          <a href="#pricing" style={{ color: C.honey, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 4, whiteSpace: "nowrap" }}>See plans <ArrowRight size={14} /></a>
          <button onClick={() => setBar(false)} aria-label="Dismiss" style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: C.heroMuted, cursor: "pointer", padding: 4 }}><X size={16} /></button>
        </div>
      )}

      {/* ===== HEADER ===== */}
      <header style={{ position: "sticky", top: 0, zIndex: 60, background: "rgba(246,241,232,.85)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${C.line}` }}>
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
              {["Industries", "Why Veritron", "Pricing"].map((x) => <a key={x} href={"#" + x.split(" ")[0].toLowerCase()} style={{ color: C.ink, opacity: .82 }}>{x}</a>)}
            </nav>
          )}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {w >= 640 && <a href="#contact" style={btnP}>Book a free IT check</a>}
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

      {/* ===== HERO ===== */}
      <section id="top" style={{ background: `radial-gradient(1100px 500px at 15% -10%, #1b4a3b 0%, transparent 60%), radial-gradient(900px 500px at 100% 0%, #24543f 0%, transparent 55%), linear-gradient(180deg, ${C.pineDeep}, #0a201a)`, color: C.heroInk, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: isMobile ? 200 : 420, height: isMobile ? 200 : 420, borderRadius: "50%", background: "rgba(224,164,88,.18)", filter: "blur(90px)", top: 40, right: -60 }} />
        <div style={{ maxWidth: 1152, margin: "0 auto", padding: isMobile ? "48px 16px 60px" : "72px 24px 84px", position: "relative", display: "grid", gridTemplateColumns: isMd ? "1fr 1fr" : "1fr", gap: isMobile ? 32 : 56, alignItems: "center" }}>
          <div>
            <span style={{ ...eyebrow, color: C.honey }}>Managed IT · Cloud · Networks · Support</span>
            <h1 style={{ fontFamily: DISPLAY, fontWeight: 600, fontSize: "clamp(2.2rem,5.6vw,4.3rem)", lineHeight: 1.05, letterSpacing: "-.02em", margin: "18px 0 0" }}>
              Your systems,<br />quietly <em style={{ fontStyle: "italic", color: C.honey }}>looked after.</em>
            </h1>
            <p style={{ fontSize: isMobile ? "1rem" : "1.18rem", color: C.heroMuted, maxWidth: "36ch", margin: "22px 0 30px" }}>Veritron monitors, secures and supports the technology behind your business — 24/7, in plain English, from one local team.</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#contact" style={{ ...btnP, background: C.honey, color: C.pineDeep, width: isMobile ? "100%" : "auto", justifyContent: "center" }}>Book a free IT check <ArrowRight size={16} /></a>
              <a href="#solutions" style={{ ...btnG, color: C.heroInk, borderColor: "rgba(255,255,255,.25)", width: isMobile ? "100%" : "auto", justifyContent: "center" }}>See what we do</a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 10 : 24, marginTop: 32, flexWrap: "wrap" }}>
              {["No lock-in contracts", "Local Melbourne team", "Fixed monthly pricing"].map((x) => <span key={x} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: isMobile ? ".78rem" : ".86rem", color: C.heroMuted }}><Check size={15} color="#8FE0B0" strokeWidth={3} />{x}</span>)}
            </div>
          </div>
          <OpsDashboard />
        </div>
        {/* Tool marquee */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,.1)", padding: "18px 0", position: "relative" }}>
          <p style={{ textAlign: "center", fontSize: ".76rem", letterSpacing: ".14em", textTransform: "uppercase", color: C.heroMuted, marginBottom: 14 }}>Certified across the tools you already run</p>
          <div style={{ overflow: "hidden", maskImage: "linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)", WebkitMaskImage: "linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)" }}>
            <div className="mq">{[...TOOLS, ...TOOLS].map((t, i) => <span key={i} style={{ color: C.heroInk, opacity: .6, fontWeight: 600, fontSize: isMobile ? ".88rem" : "1.05rem", whiteSpace: "nowrap" }}>{t}</span>)}</div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
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

      {/* ===== SOLUTIONS ===== */}
      <section id="solutions" style={{ padding: isMobile ? "60px 0" : "90px 0" }}>
        <div style={{ maxWidth: 1152, margin: "0 auto", padding: `0 ${px}px` }}>
          <Reveal><div style={{ maxWidth: "60ch", marginBottom: 36 }}>
            <span style={eyebrow}>What we do</span>
            <h2 style={{ ...h2s, marginTop: 12 }}>Critical IT, handled end to end.</h2>
            <p style={{ color: C.muted, fontSize: isMobile ? "1rem" : "1.1rem", marginTop: 12 }}>No juggling five vendors. Pick a discipline to see how Veritron takes it off your plate.</p>
          </div></Reveal>
          {/* Solution tabs — horizontal scroll on mobile */}
          <div style={{ display: "flex", gap: 8, marginBottom: 28, overflowX: "auto", WebkitOverflowScrolling: "touch", paddingBottom: 4, scrollbarWidth: "none" }}>
            {SOLUTIONS.map((s) => (
              <button key={s.key} onClick={() => setTab(s.key)} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: isMobile ? ".6rem .9rem" : ".7rem 1.2rem", borderRadius: 999, cursor: "pointer", fontWeight: 600, fontSize: isMobile ? ".82rem" : ".92rem", border: `1.5px solid ${tab === s.key ? C.pine : C.line}`, background: tab === s.key ? C.pine : C.surface, color: tab === s.key ? C.bg : C.ink, transition: ".2s", whiteSpace: "nowrap", flexShrink: 0 }}>
                <s.icon size={16} /> {s.label}
              </button>
            ))}
          </div>
          {/* Solution detail card */}
          <div style={{ display: "grid", gridTemplateColumns: isMd ? "1fr 1fr" : "1fr", gap: isMobile ? 24 : 32, background: C.surface, border: `1px solid ${C.line}`, borderRadius: isMobile ? 18 : 24, padding: isMobile ? 20 : 36, alignItems: "center" }}>
            <div key={tab}>
              <span style={{ width: isMobile ? 44 : 54, height: isMobile ? 44 : 54, borderRadius: 15, background: C.surfaceAlt, display: "grid", placeItems: "center", marginBottom: 18 }}><sol.icon size={isMobile ? 22 : 26} color={C.pine} /></span>
              <h3 style={{ fontFamily: DISPLAY, fontWeight: 600, fontSize: isMobile ? "1.35rem" : "1.7rem", color: C.pineDk }}>{sol.h}</h3>
              <p style={{ color: C.muted, fontSize: isMobile ? ".95rem" : "1.05rem", margin: "12px 0 20px" }}>{sol.p}</p>
              <a href="#contact" style={{ ...btnP, background: "transparent", color: C.pine, border: `1.5px solid ${C.pine}`, fontSize: isMobile ? ".85rem" : ".97rem" }}>Talk to us about this <ArrowUpRight size={16} /></a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {sol.pts.map((p) => (
                <div key={p} style={{ display: "flex", alignItems: "center", gap: 12, background: C.surfaceAlt, border: `1px solid ${C.line}`, borderRadius: 14, padding: isMobile ? "12px 14px" : "16px 18px" }}>
                  <span style={{ width: 28, height: 28, borderRadius: 8, background: C.pine, display: "grid", placeItems: "center", flexShrink: 0 }}><Check size={16} color={C.bg} strokeWidth={3} /></span>
                  <span style={{ fontWeight: 500, fontSize: isMobile ? ".88rem" : "1rem" }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY VERITRON ===== */}
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

      {/* ===== INDUSTRIES ===== */}
      <section id="industries" style={{ padding: isMobile ? "56px 0" : "84px 0", background: C.surfaceAlt }}>
        <div style={{ maxWidth: 1152, margin: "0 auto", padding: `0 ${px}px` }}>
          <Reveal><div style={{ maxWidth: "60ch", marginBottom: 34 }}>
            <span style={eyebrow}>Who we help</span>
            <h2 style={{ ...h2s, marginTop: 12 }}>Trusted across Melbourne's businesses.</h2>
          </div></Reveal>
          <div style={{ display: "flex", flexWrap: "wrap", gap: isMobile ? 8 : 12 }}>
            {["Professional Services", "Medical Clinics", "Dental Clinics", "Law Firms", "Accounting Firms", "Construction", "Real Estate", "Retail Stores", "Warehouses", "Manufacturing", "Hospitality", "Education", "Non-Profits", "Trades Businesses"].map((x) => (
              <span key={x} className="lift" style={{ background: C.surface, border: `1px solid ${C.line}`, borderRadius: 999, padding: isMobile ? ".5rem .9rem" : ".65rem 1.2rem", fontSize: isMobile ? ".82rem" : ".93rem", fontWeight: 500, color: C.pineDk }}>{x}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section style={{ padding: isMobile ? "60px 0" : "90px 0" }}>
        <div style={{ maxWidth: 1152, margin: "0 auto", padding: `0 ${px}px` }}>
          <Reveal><div style={{ marginBottom: 30 }}>
            <span style={eyebrow}>Client stories</span>
            <h2 style={{ ...h2s, marginTop: 12 }}>Businesses that stopped worrying about IT.</h2>
          </div></Reveal>
          <Reveal delay={100}><Carousel /></Reveal>
        </div>
      </section>

      {/* ===== PRICING ===== */}
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

      {/* ===== CONTACT CTA ===== */}
      <section id="contact" style={{ padding: isMobile ? "60px 0" : "90px 0" }}>
        <div style={{ maxWidth: 1152, margin: "0 auto", padding: `0 ${px}px` }}>
          <div style={{ background: `radial-gradient(700px 300px at 50% 0%, #24543f, transparent), linear-gradient(180deg, ${C.pine}, ${C.pineDeep})`, color: C.heroInk, borderRadius: isMobile ? 20 : 30, padding: isMobile ? "40px 20px" : "64px 32px", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", width: 360, height: 360, borderRadius: "50%", background: "rgba(224,164,88,.2)", filter: "blur(80px)", top: -100, left: "50%", transform: "translateX(-50%)" }} />
            <div style={{ position: "relative" }}>
              <h2 style={{ fontFamily: DISPLAY, fontWeight: 600, fontSize: "clamp(1.7rem,4.4vw,3.2rem)", color: C.heroInk }}>Let's look after your systems.</h2>
              <p style={{ color: C.heroMuted, margin: "16px auto 30px", maxWidth: "46ch", fontSize: isMobile ? ".95rem" : "1.12rem" }}>Book a free, no-obligation IT health check. We'll review your setup and show you exactly where Veritron fits.</p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <a href="mailto:hello@veritron.com.au" style={{ ...btnP, background: C.honey, color: C.pineDeep, width: isMobile ? "100%" : "auto", justifyContent: "center" }}>Book a free IT check <ArrowRight size={16} /></a>
                <a href="tel:0000000000" style={{ ...btnG, color: C.heroInk, borderColor: "rgba(255,255,255,.3)", width: isMobile ? "100%" : "auto", justifyContent: "center" }}><Phone size={16} /> Call [phone]</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={{ background: C.pineDeep, color: "rgba(234,242,236,.75)", padding: isMobile ? "40px 0 24px" : "60px 0 32px" }}>
        <div style={{ maxWidth: 1152, margin: "0 auto", padding: `0 ${px}px` }}>
          <div style={{ display: "grid", gridTemplateColumns: isMd ? "repeat(4, 1fr)" : isMobile ? "1fr" : "repeat(2, 1fr)", gap: isMobile ? 28 : 40, paddingBottom: 36, borderBottom: "1px solid rgba(255,255,255,.12)" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <Logo badge={C.honey} stroke={C.pineDeep} spark={C.heroInk} size={38} />
                <div style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "1.3rem", color: C.heroInk }}>Veritron</div>
              </div>
              <p style={{ marginTop: 14, fontSize: ".92rem", opacity: .8, maxWidth: "30ch" }}>The technology behind your business — quietly looked after.</p>
            </div>
            {[["Services", ["Managed IT", "Cloud & Email", "Networks", "Hardware & Procurement"]], ["Company", ["Why Veritron", "Industries", "Pricing", "Contact"]], ["Get in touch", ["hello@veritron.com.au", "[phone number]", "Melbourne & surrounds"]]].map(([h, items]) => (
              <div key={h}>
                <h4 style={{ color: C.heroInk, fontSize: ".76rem", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 14, fontWeight: 600 }}>{h}</h4>
                {items.map((x) => <a key={x} href="#top" style={{ display: "block", padding: "6px 0", fontSize: ".92rem", opacity: .82, color: "inherit" }}>{x}</a>)}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, paddingTop: 24, fontSize: ".83rem", opacity: .65, flexDirection: isMobile ? "column" : "row", textAlign: isMobile ? "center" : "left" }}>
            <span>© 2026 Veritron IT Solutions · ABN [00 000 000 000]</span>
            <span>Managed IT &amp; support for growing businesses</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
