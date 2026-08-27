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
  const [feedIdx, setFeedIdx] = useState(0);
  useEffect(() => { const id = setInterval(() => setFeedIdx((i) => (i + 1) % FEED.length), 2200); return () => clearInterval(id); }, []);
  const bars = [62, 78, 55, 88, 70, 95, 82, 90, 74, 98, 86, 92];
  const shown = [0, 1, 2, 3].map((k) => FEED[(feedIdx + k) % FEED.length]);
  return (
    <div style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 22, padding: 20, backdropFilter: "blur(10px)", boxShadow: "0 40px 90px -40px rgba(0,0,0,.7)" }}>
      <div className="flex items-center justify-between" style={{ paddingBottom: 14, borderBottom: "1px solid rgba(255,255,255,.1)" }}>
        <div className="flex items-center gap-2" style={{ color: C.heroInk, fontWeight: 600, fontSize: ".95rem" }}>
          <Logo size={22} badge={C.honey} stroke={C.pineDeep} spark={C.pineDeep} /> Veritron Care
        </div>
        <span className="flex items-center gap-2" style={{ fontSize: ".72rem", fontWeight: 700, color: "#8FE0B0", letterSpacing: ".08em" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ADE80", animation: "vpulse 2s infinite" }} /> LIVE
        </span>
      </div>
      <div className="grid grid-cols-3 gap-3" style={{ margin: "16px 0" }}>
        {[{ v: 247, l: "Devices healthy", I: HeartPulse }, { v: 1482, l: "Threats blocked", I: ShieldCheck }, { v: 12, l: "Avg resolve (min)", I: Zap }].map((m) => (
          <div key={m.l} style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 14, padding: "12px" }}>
            <m.I size={16} color={C.honey} />
            <div style={{ fontFamily: DISPLAY, fontWeight: 600, fontSize: "1.5rem", color: C.heroInk, marginTop: 6, lineHeight: 1 }}><Counter to={m.v} /></div>
            <div style={{ fontSize: ".68rem", color: C.heroMuted, marginTop: 3 }}>{m.l}</div>
          </div>
        ))}
      </div>
      <div style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 14, padding: "12px 14px", marginBottom: 12 }}>
        <div className="flex items-center justify-between" style={{ marginBottom: 8 }}>
          <span style={{ fontSize: ".72rem", color: C.heroMuted }}>Uptime · last 12 months</span>
          <span style={{ fontSize: ".82rem", fontWeight: 700, color: "#8FE0B0" }}>99.98%</span>
        </div>
        <div className="flex items-end gap-1" style={{ height: 42 }}>
          {bars.map((b, i) => <div key={i} style={{ flex: 1, height: `${b}%`, background: `linear-gradient(180deg, ${C.honey}, ${C.sage})`, borderRadius: 3, opacity: .55 + b / 250 }} />)}
        </div>
      </div>
      <div style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 14, padding: "10px 12px", overflow: "hidden" }}>
        {shown.map((f, i) => (
          <div key={f + i} className="flex items-center gap-2" style={{ padding: "5px 0", opacity: i === 0 ? 1 : 0.55 - i * 0.12, transition: "opacity .5s" }}>
            <Check size={14} color="#4ADE80" strokeWidth={3} /><span style={{ fontSize: ".78rem", color: C.heroInk }}>{f}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HealthCheck() {
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
    <div style={{ background: C.surface, border: `1px solid ${C.line}`, borderRadius: 22, padding: 30, boxShadow: "0 24px 60px -30px rgba(30,60,50,.25)" }}>
      <div className="flex items-center gap-2" style={{ marginBottom: 6 }}>
        <Sparkles size={18} color={C.honeyDk} />
        <span style={{ fontSize: ".72rem", fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: C.honeyDk }}>Free IT health check</span>
      </div>
      {!done ? (
        <>
          <h3 style={{ fontFamily: DISPLAY, fontWeight: 600, fontSize: "1.6rem", color: C.pineDk, marginBottom: 20 }}>{Q[step].q}</h3>
          <div className="flex flex-col gap-3">
            {Q[step].opts.map((o) => (
              <button key={o} onClick={() => pick(Q[step].k, o)} style={{ textAlign: "left", padding: "14px 18px", borderRadius: 12, border: `1.5px solid ${C.line}`, background: C.surfaceAlt, color: C.ink, fontWeight: 500, fontSize: "1rem", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", transition: "border-color .15s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.pine; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = C.line; }}>
                {o} <ChevronRight size={18} color={C.muted} />
              </button>
            ))}
          </div>
          <div className="flex gap-1.5" style={{ marginTop: 22 }}>{Q.map((_, i) => <div key={i} style={{ height: 5, flex: 1, borderRadius: 3, background: i <= step ? C.honey : C.line }} />)}</div>
        </>
      ) : (
        <>
          <h3 style={{ fontFamily: DISPLAY, fontWeight: 600, fontSize: "1.5rem", color: C.pineDk, marginBottom: 6 }}>Our recommendation</h3>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.pine, color: C.bg, padding: ".5rem 1rem", borderRadius: 999, fontWeight: 600, margin: "8px 0 14px" }}><ShieldCheck size={16} /> {rec().plan} plan</div>
          <p style={{ color: C.muted, marginBottom: 22, lineHeight: 1.6 }}>{rec().why}</p>
          <div className="flex gap-3 flex-wrap">
            <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.pine, color: C.bg, padding: ".8rem 1.4rem", borderRadius: 999, fontWeight: 600, textDecoration: "none" }}>Book my free check <ArrowRight size={16} /></a>
            <button onClick={() => { setAns({}); setStep(0); }} style={{ background: "transparent", border: `1.5px solid ${C.line}`, color: C.ink, padding: ".8rem 1.4rem", borderRadius: 999, fontWeight: 600, cursor: "pointer" }}>Start over</button>
          </div>
        </>
      )}
    </div>
  );
}

function Carousel() {
  const [i, setI] = useState(0);
  useEffect(() => { const id = setInterval(() => setI((x) => (x + 1) % QUOTES.length), 5000); return () => clearInterval(id); }, []);
  const t = QUOTES[i];
  return (
    <div style={{ background: C.pine, borderRadius: 26, padding: "48px 40px", color: C.heroInk, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: "rgba(224,164,88,.16)", filter: "blur(70px)", top: -60, right: -40 }} />
      <div style={{ position: "relative" }}>
        <div className="flex gap-1" style={{ marginBottom: 16 }}>{Array.from({ length: t.s }).map((_, k) => <Star key={k} size={18} fill={C.honey} color={C.honey} />)}</div>
        <p style={{ fontFamily: DISPLAY, fontWeight: 500, fontSize: "clamp(1.4rem,2.6vw,2rem)", lineHeight: 1.35, minHeight: 96 }}>“{t.q}”</p>
        <div className="flex items-center justify-between" style={{ marginTop: 24, flexWrap: "wrap", gap: 12 }}>
          <div><div style={{ fontWeight: 700 }}>{t.n}</div><div style={{ fontSize: ".88rem", color: C.heroMuted }}>{t.r}</div></div>
          <div className="flex gap-2">{QUOTES.map((_, k) => <button key={k} onClick={() => setI(k)} aria-label={`Testimonial ${k + 1}`} style={{ width: k === i ? 26 : 9, height: 9, borderRadius: 999, border: "none", cursor: "pointer", background: k === i ? C.honey : "rgba(255,255,255,.3)", transition: "width .3s" }} />)}</div>
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

  useEffect(() => {
    const id = "veritron-fonts";
    if (!document.getElementById(id)) {
      const l = document.createElement("link"); l.id = id; l.rel = "stylesheet";
      l.href = "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap";
      document.head.appendChild(l);
    }
  }, []);

  const sol = SOLUTIONS.find((s) => s.key === tab);
  const btnP = { display: "inline-flex", alignItems: "center", gap: 8, background: C.pine, color: C.bg, padding: ".85rem 1.5rem", borderRadius: 999, fontWeight: 600, textDecoration: "none", cursor: "pointer", border: "none", fontSize: ".97rem" };
  const btnG = { display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: C.ink, padding: ".85rem 1.5rem", borderRadius: 999, fontWeight: 600, textDecoration: "none", border: `1.5px solid ${C.line}`, cursor: "pointer", fontSize: ".97rem" };
  const eyebrow = { fontSize: ".72rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: C.honeyDk };
  const h2 = { fontFamily: DISPLAY, fontWeight: 600, fontSize: "clamp(2rem,4vw,2.9rem)", color: C.pineDk, lineHeight: 1.1, letterSpacing: "-.01em" };

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
      `}</style>

      {bar && (
        <div style={{ background: C.pineDeep, color: C.heroInk }} className="flex items-center justify-center gap-3 px-4 py-2 text-sm relative">
          <Sparkles size={15} color={C.honey} />
          <span style={{ opacity: .92 }}>New: 24/7 monitoring now included on every Managed plan</span>
          <a href="#pricing" style={{ color: C.honey, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 4 }}>See plans <ArrowRight size={14} /></a>
          <button onClick={() => setBar(false)} aria-label="Dismiss" style={{ position: "absolute", right: 12, background: "none", border: "none", color: C.heroMuted, cursor: "pointer" }}><X size={16} /></button>
        </div>
      )}

      <header style={{ position: "sticky", top: 0, zIndex: 60, background: "rgba(246,241,232,.85)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${C.line}` }}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between" style={{ height: 72 }}>
          <a href="#top" className="flex items-center gap-3">
            <Logo />
            <div style={{ lineHeight: 1 }}>
              <div style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "1.35rem", color: C.ink }}>Veritron</div>
              <div style={{ fontSize: ".52rem", letterSpacing: ".3em", color: C.pine, fontWeight: 600, marginTop: 2 }}>IT SOLUTIONS</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-7" style={{ fontSize: ".95rem", fontWeight: 500 }}>
            <div onMouseEnter={() => setMega(true)} onMouseLeave={() => setMega(false)} style={{ position: "relative" }}>
              <button style={{ background: "none", border: "none", font: "inherit", color: C.ink, cursor: "pointer", display: "flex", alignItems: "center", gap: 4, padding: "8px 0" }}>Services <ChevronRight size={15} style={{ transform: mega ? "rotate(90deg)" : "none", transition: ".2s" }} /></button>
              {mega && (
                <div style={{ position: "absolute", top: 44, left: -20, width: 640, background: C.surface, border: `1px solid ${C.line}`, borderRadius: 18, boxShadow: "0 30px 70px -30px rgba(30,60,50,.4)", padding: 18 }}>
                  <div className="grid grid-cols-2 gap-1">
                    {MEGA.map((m) => (
                      <a key={m.t} href="#solutions" className="flex items-start gap-3" style={{ padding: 12, borderRadius: 12, color: C.ink }}
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
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:inline-flex" style={btnP}>Book a free IT check</a>
            <button className="md:hidden" onClick={() => setMobile(!mobile)} style={{ background: "none", border: "none", cursor: "pointer" }}>{mobile ? <X /> : <Menu />}</button>
          </div>
        </div>
        {mobile && (
          <div className="md:hidden" style={{ borderTop: `1px solid ${C.line}`, padding: 16, background: C.surface }}>
            {["Services", "Industries", "Why Veritron", "Pricing", "Contact"].map((x) => <a key={x} href={"#" + x.split(" ")[0].toLowerCase()} onClick={() => setMobile(false)} style={{ display: "block", padding: "10px 0", color: C.ink, fontWeight: 500 }}>{x}</a>)}
          </div>
        )}
      </header>

      <section id="top" style={{ background: `radial-gradient(1100px 500px at 15% -10%, #1b4a3b 0%, transparent 60%), radial-gradient(900px 500px at 100% 0%, #24543f 0%, transparent 55%), linear-gradient(180deg, ${C.pineDeep}, #0a201a)`, color: C.heroInk, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: 420, height: 420, borderRadius: "50%", background: "rgba(224,164,88,.18)", filter: "blur(90px)", top: 40, right: -60 }} />
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center" style={{ padding: "72px 24px 84px", position: "relative" }}>
          <div>
            <span style={{ ...eyebrow, color: C.honey }}>Managed IT · Cloud · Networks · Support</span>
            <h1 style={{ fontFamily: DISPLAY, fontWeight: 600, fontSize: "clamp(2.7rem,5.6vw,4.3rem)", lineHeight: 1.05, letterSpacing: "-.02em", margin: "18px 0 0" }}>
              Your systems,<br />quietly <em style={{ fontStyle: "italic", color: C.honey }}>looked after.</em>
            </h1>
            <p style={{ fontSize: "1.18rem", color: C.heroMuted, maxWidth: "36ch", margin: "22px 0 30px" }}>Veritron monitors, secures and supports the technology behind your business — 24/7, in plain English, from one local team.</p>
            <div className="flex gap-3 flex-wrap">
              <a href="#contact" style={{ ...btnP, background: C.honey, color: C.pineDeep }}>Book a free IT check <ArrowRight size={16} /></a>
              <a href="#solutions" style={{ ...btnG, color: C.heroInk, borderColor: "rgba(255,255,255,.25)" }}>See what we do</a>
            </div>
            <div className="flex items-center gap-6" style={{ marginTop: 32, flexWrap: "wrap" }}>
              {["No lock-in contracts", "Local Melbourne team", "Fixed monthly pricing"].map((x) => <span key={x} className="flex items-center gap-2" style={{ fontSize: ".86rem", color: C.heroMuted }}><Check size={15} color="#8FE0B0" strokeWidth={3} />{x}</span>)}
            </div>
          </div>
          <OpsDashboard />
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,.1)", padding: "18px 0", position: "relative" }}>
          <p style={{ textAlign: "center", fontSize: ".76rem", letterSpacing: ".14em", textTransform: "uppercase", color: C.heroMuted, marginBottom: 14 }}>Certified across the tools you already run</p>
          <div style={{ overflow: "hidden", maskImage: "linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)", WebkitMaskImage: "linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)" }}>
            <div className="mq">{[...TOOLS, ...TOOLS].map((t, i) => <span key={i} style={{ color: C.heroInk, opacity: .6, fontWeight: 600, fontSize: "1.05rem", whiteSpace: "nowrap" }}>{t}</span>)}</div>
          </div>
        </div>
      </section>

      <section style={{ padding: "70px 0", background: C.surface, borderBottom: `1px solid ${C.line}` }}>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div style={{ fontFamily: DISPLAY, fontWeight: 600, fontSize: "clamp(2.2rem,4vw,3.1rem)", color: C.pine, lineHeight: 1 }}><Counter to={s.to} prefix={s.prefix || ""} suffix={s.suffix || ""} decimals={s.decimals || 0} /></div>
              <div style={{ fontWeight: 600, marginTop: 10, color: C.ink }}>{s.label}</div>
              <div style={{ fontSize: ".88rem", color: C.muted, marginTop: 2 }}>{s.sub}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="solutions" style={{ padding: "90px 0" }}>
        <div className="max-w-6xl mx-auto px-6">
          <Reveal><div style={{ maxWidth: "60ch", marginBottom: 36 }}>
            <span style={eyebrow}>What we do</span>
            <h2 style={{ ...h2, marginTop: 12 }}>Critical IT, handled end to end.</h2>
            <p style={{ color: C.muted, fontSize: "1.1rem", marginTop: 12 }}>No juggling five vendors. Pick a discipline to see how Veritron takes it off your plate.</p>
          </div></Reveal>
          <div className="flex gap-2 flex-wrap" style={{ marginBottom: 28 }}>
            {SOLUTIONS.map((s) => (
              <button key={s.key} onClick={() => setTab(s.key)} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: ".7rem 1.2rem", borderRadius: 999, cursor: "pointer", fontWeight: 600, fontSize: ".92rem", border: `1.5px solid ${tab === s.key ? C.pine : C.line}`, background: tab === s.key ? C.pine : C.surface, color: tab === s.key ? C.bg : C.ink, transition: ".2s" }}>
                <s.icon size={16} /> {s.label}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center" style={{ background: C.surface, border: `1px solid ${C.line}`, borderRadius: 24, padding: 36 }}>
            <div key={tab}>
              <span style={{ width: 54, height: 54, borderRadius: 15, background: C.surfaceAlt, display: "grid", placeItems: "center", marginBottom: 18 }}><sol.icon size={26} color={C.pine} /></span>
              <h3 style={{ fontFamily: DISPLAY, fontWeight: 600, fontSize: "1.7rem", color: C.pineDk }}>{sol.h}</h3>
              <p style={{ color: C.muted, fontSize: "1.05rem", margin: "12px 0 20px" }}>{sol.p}</p>
              <a href="#contact" style={{ ...btnP, background: "transparent", color: C.pine, border: `1.5px solid ${C.pine}` }}>Talk to us about this <ArrowUpRight size={16} /></a>
            </div>
            <div className="flex flex-col gap-3">
              {sol.pts.map((p) => (
                <div key={p} className="flex items-center gap-3" style={{ background: C.surfaceAlt, border: `1px solid ${C.line}`, borderRadius: 14, padding: "16px 18px" }}>
                  <span style={{ width: 28, height: 28, borderRadius: 8, background: C.pine, display: "grid", placeItems: "center", flexShrink: 0 }}><Check size={16} color={C.bg} strokeWidth={3} /></span>
                  <span style={{ fontWeight: 500 }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="why" style={{ padding: "40px 0 90px" }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span style={eyebrow}>Why Veritron</span>
            <h2 style={{ ...h2, marginTop: 12, marginBottom: 28 }}>Big-company reliability,<br />small-business warmth.</h2>
            <div className="flex flex-col gap-6">
              {WHY.map((w) => (
                <div key={w.t} className="flex gap-4 items-start">
                  <span style={{ flexShrink: 0, width: 46, height: 46, borderRadius: 12, background: C.surfaceAlt, display: "grid", placeItems: "center" }}><w.icon size={22} color={C.honeyDk} /></span>
                  <div><h3 style={{ fontFamily: DISPLAY, fontWeight: 600, fontSize: "1.2rem", color: C.pineDk }}>{w.t}</h3><p style={{ color: C.muted, fontSize: ".97rem", marginTop: 3 }}>{w.p}</p></div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}><HealthCheck /></Reveal>
        </div>
      </section>

      <section id="industries" style={{ padding: "84px 0", background: C.surfaceAlt }}>
        <div className="max-w-6xl mx-auto px-6">
          <Reveal><div style={{ maxWidth: "60ch", marginBottom: 34 }}>
            <span style={eyebrow}>Who we help</span>
            <h2 style={{ ...h2, marginTop: 12 }}>Trusted across Melbourne's businesses.</h2>
          </div></Reveal>
          <div className="flex flex-wrap gap-3">
            {["Professional Services", "Medical Clinics", "Dental Clinics", "Law Firms", "Accounting Firms", "Construction", "Real Estate", "Retail Stores", "Warehouses", "Manufacturing", "Hospitality", "Education", "Non-Profits", "Trades Businesses"].map((x) => (
              <span key={x} className="lift" style={{ background: C.surface, border: `1px solid ${C.line}`, borderRadius: 999, padding: ".65rem 1.2rem", fontSize: ".93rem", fontWeight: 500, color: C.pineDk }}>{x}</span>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "90px 0" }}>
        <div className="max-w-6xl mx-auto px-6">
          <Reveal><div style={{ marginBottom: 30 }}>
            <span style={eyebrow}>Client stories</span>
            <h2 style={{ ...h2, marginTop: 12 }}>Businesses that stopped worrying about IT.</h2>
          </div></Reveal>
          <Reveal delay={100}><Carousel /></Reveal>
        </div>
      </section>

      <section id="pricing" style={{ padding: "84px 0", background: C.surfaceAlt }}>
        <div className="max-w-6xl mx-auto px-6">
          <Reveal><div style={{ textAlign: "center", maxWidth: "60ch", margin: "0 auto 44px" }}>
            <span style={eyebrow}>Simple plans</span>
            <h2 style={{ ...h2, marginTop: 12 }}>Fixed monthly pricing. No surprises.</h2>
            <p style={{ color: C.muted, fontSize: "1.08rem", marginTop: 12 }}>Per user, per month. Scale up or down as your team changes.</p>
          </div></Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {PLANS.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <div className="lift" style={{ background: p.popular ? C.pine : C.surface, color: p.popular ? C.heroInk : C.ink, border: `1px solid ${p.popular ? C.pine : C.line}`, borderRadius: 22, padding: 32, position: "relative", height: "100%" }}>
                  {p.popular && <span style={{ position: "absolute", top: 20, right: 20, background: C.honey, color: C.pineDeep, fontSize: ".7rem", fontWeight: 700, padding: ".3rem .7rem", borderRadius: 999, letterSpacing: ".05em" }}>MOST POPULAR</span>}
                  <div style={{ fontWeight: 600, fontSize: ".82rem", letterSpacing: ".08em", textTransform: "uppercase", color: p.popular ? C.honey : C.honeyDk }}>{p.name}</div>
                  <div style={{ margin: "12px 0 4px", display: "flex", alignItems: "baseline", gap: 4 }}>
                    <span style={{ fontFamily: DISPLAY, fontWeight: 600, fontSize: "2.6rem" }}>{p.price === "—" ? "Custom" : `$${p.price}`}</span>
                    {p.price !== "—" && <span style={{ opacity: .7, fontSize: ".9rem" }}>/user/mo</span>}
                  </div>
                  <div style={{ fontSize: ".92rem", color: p.popular ? C.heroMuted : C.muted, marginBottom: 20 }}>{p.tag}</div>
                  <a href="#contact" style={{ ...btnP, width: "100%", justifyContent: "center", background: p.popular ? C.honey : C.pine, color: p.popular ? C.pineDeep : C.bg, marginBottom: 22 }}>Get started</a>
                  <div className="flex flex-col gap-3">{p.feats.map((f) => <div key={f} className="flex items-center gap-2" style={{ fontSize: ".93rem" }}><Check size={16} color={p.popular ? C.honey : C.pine} strokeWidth={3} /> {f}</div>)}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <p style={{ textAlign: "center", color: C.muted, fontSize: ".85rem", marginTop: 20 }}>Prices shown are examples — final pricing tailored to your setup.</p>
        </div>
      </section>

      <section id="contact" style={{ padding: "90px 0" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ background: `radial-gradient(700px 300px at 50% 0%, #24543f, transparent), linear-gradient(180deg, ${C.pine}, ${C.pineDeep})`, color: C.heroInk, borderRadius: 30, padding: "64px 32px", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", width: 360, height: 360, borderRadius: "50%", background: "rgba(224,164,88,.2)", filter: "blur(80px)", top: -100, left: "50%", transform: "translateX(-50%)" }} />
            <div style={{ position: "relative" }}>
              <h2 style={{ fontFamily: DISPLAY, fontWeight: 600, fontSize: "clamp(2.1rem,4.4vw,3.2rem)", color: C.heroInk }}>Let's look after your systems.</h2>
              <p style={{ color: C.heroMuted, margin: "16px auto 30px", maxWidth: "46ch", fontSize: "1.12rem" }}>Book a free, no-obligation IT health check. We'll review your setup and show you exactly where Veritron fits.</p>
              <div className="flex gap-3 justify-center flex-wrap">
                <a href="mailto:hello@veritron.com.au" style={{ ...btnP, background: C.honey, color: C.pineDeep }}>Book a free IT check <ArrowRight size={16} /></a>
                <a href="tel:0000000000" style={{ ...btnG, color: C.heroInk, borderColor: "rgba(255,255,255,.3)" }}><Phone size={16} /> Call [phone]</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ background: C.pineDeep, color: "rgba(234,242,236,.75)", padding: "60px 0 32px" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 pb-9" style={{ borderBottom: "1px solid rgba(255,255,255,.12)" }}>
            <div>
              <div className="flex items-center gap-3">
                <Logo badge={C.honey} stroke={C.pineDeep} spark={C.heroInk} size={38} />
                <div style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "1.3rem", color: C.heroInk }}>Veritron</div>
              </div>
              <p style={{ marginTop: 14, fontSize: ".92rem", opacity: .8, maxWidth: "30ch" }}>The technology behind your business — quietly looked after.</p>
            </div>
            {[["Services", ["Managed IT", "Cloud & Email", "Networks", "Hardware & Procurement"]], ["Company", ["Why Veritron", "Industries", "Pricing", "Contact"]], ["Get in touch", ["hello@veritron.com.au", "[phone number]", "Melbourne & surrounds"]]].map(([h, items]) => (
              <div key={h}>
                <h4 style={{ color: C.heroInk, fontSize: ".76rem", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 14, fontWeight: 600 }}>{h}</h4>
                {items.map((x) => <a key={x} href="#top" style={{ display: "block", padding: "5px 0", fontSize: ".92rem", opacity: .82, color: "inherit" }}>{x}</a>)}
              </div>
            ))}
          </div>
          <div className="flex justify-between flex-wrap gap-3" style={{ paddingTop: 24, fontSize: ".83rem", opacity: .65 }}>
            <span>© 2026 Veritron IT Solutions · ABN [00 000 000 000]</span>
            <span>Managed IT &amp; support for growing businesses</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
