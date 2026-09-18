import React, { useState, useEffect, useRef, useCallback } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft, ArrowRight, ChevronDown, ChevronUp,
  Check, Phone, ClipboardList,
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import useScreen from "../../hooks/useScreen";
import { SOLUTIONS } from "../../constants/data";
import { DISPLAY } from "../../constants/typography";
import Reveal from "../ui/Reveal";

/* ── Preload all service hero images once on app load ── */
const _preloadedImages = new Set();
function preloadAllServiceImages() {
  SOLUTIONS.forEach((s) => {
    if (s.heroImage && !_preloadedImages.has(s.heroImage)) {
      _preloadedImages.add(s.heroImage);
      const img = new Image();
      img.src = s.heroImage;
    }
  });
}
// Kick off preloading immediately when this module is first imported
preloadAllServiceImages();

/* ── Check if an image is already cached by the browser ── */
function isImageCached(src) {
  if (!src) return false;
  const img = new Image();
  img.src = src;
  return img.complete && img.naturalWidth > 0;
}

/* ── FAQ Accordion Item ── */
function FaqItem({ q, a, isOpen, onClick, C, isMobile }) {
  return (
    <div
      style={{
        background: C.surface,
        border: `1px solid ${C.line}`,
        borderRadius: 16,
        overflow: "hidden",
        transition: "all .3s ease",
        boxShadow: isOpen ? `0 8px 30px -12px ${C.isDark ? "rgba(0,0,0,.5)" : "rgba(37,99,235,.15)"}` : "none",
      }}
    >
      <button
        onClick={onClick}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: isMobile ? "18px 16px" : "22px 24px",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          font: "inherit",
          color: C.ink,
          fontWeight: 600,
          fontSize: isMobile ? ".95rem" : "1.05rem",
          gap: 16,
        }}
      >
        <span>{q}</span>
        <span
          style={{
            flexShrink: 0,
            width: 32,
            height: 32,
            borderRadius: 10,
            background: isOpen ? C.pine : C.surfaceAlt,
            display: "grid",
            placeItems: "center",
            transition: "all .3s ease",
          }}
        >
          {isOpen
            ? <ChevronUp size={16} color={C.isDark ? "#0f172a" : "#ffffff"} />
            : <ChevronDown size={16} color={C.pine} />}
        </span>
      </button>
      <div
        style={{
          maxHeight: isOpen ? 300 : 0,
          opacity: isOpen ? 1 : 0,
          overflow: "hidden",
          transition: "max-height .4s cubic-bezier(.2,.7,.2,1), opacity .3s ease",
        }}
      >
        <div
          style={{
            padding: isMobile ? "0 16px 18px" : "0 24px 22px",
            color: C.muted,
            fontSize: isMobile ? ".9rem" : ".98rem",
            lineHeight: 1.7,
          }}
        >
          {a}
        </div>
      </div>
    </div>
  );
}

/* ── Main Service Page ── */
export default function ServicePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const C = useTheme();
  const { isMobile, isMd } = useScreen();
  const isDark = C.isDark;
  const px = isMobile ? 16 : 24;

  const sol = SOLUTIONS.find((s) => s.slug === slug);
  const [openFaq, setOpenFaq] = useState(null);

  // Check if image is already cached — if so, show it instantly (no fade)
  const [imgLoaded, setImgLoaded] = useState(() =>
    sol ? isImageCached(sol.heroImage) : false
  );

  /* Scroll to top on mount / slug change */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    // If the image is already cached, show it instantly; otherwise wait for onLoad
    const cached = sol ? isImageCached(sol.heroImage) : false;
    setImgLoaded(cached);
    setOpenFaq(null);

    // Add a preload link hint to the document head for the current service image
    if (sol?.heroImage) {
      let link = document.querySelector(`link[data-hero-preload="${sol.heroImage}"]`);
      if (!link) {
        link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = sol.heroImage;
        link.setAttribute("data-hero-preload", sol.heroImage);
        link.setAttribute("fetchpriority", "high");
        document.head.appendChild(link);
      }
    }
  }, [slug, sol]);

  /* 404 — service not found */
  if (!sol) {
    return (
      <div style={{ minHeight: "60vh", display: "grid", placeItems: "center", padding: 40 }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontFamily: DISPLAY, fontSize: "2.4rem", color: C.ink, marginBottom: 12 }}>Service not found</h1>
          <p style={{ color: C.muted, marginBottom: 24 }}>We couldn't find the service you're looking for.</p>
          <Link to="/" style={{ color: C.pine, fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
            <ArrowLeft size={18} /> Back to home
          </Link>
        </div>
      </div>
    );
  }

  /* ── Shared Styles ── */
  const eyebrow = {
    fontSize: ".72rem",
    fontWeight: 700,
    letterSpacing: ".18em",
    textTransform: "uppercase",
    color: C.honeyDk,
  };
  const h2s = {
    fontFamily: DISPLAY,
    fontWeight: 600,
    fontSize: "clamp(1.6rem,3.5vw,2.6rem)",
    color: C.pineDk,
    lineHeight: 1.15,
    letterSpacing: "-.01em",
  };
  const sectionPad = { padding: isMobile ? "50px 0" : "80px 0" };

  const otherServices = SOLUTIONS.filter((s) => s.slug !== slug);

  return (
    <div>
      {/* ─────────── HERO BANNER ─────────── */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background: isDark
            ? "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)"
            : "linear-gradient(135deg, #1d4ed8 0%, #2563eb 40%, #3b82f6 100%)",
          padding: isMobile ? "100px 0 50px" : "120px 0 70px",
          color: "#ffffff",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: isDark ? "rgba(0,240,255,.12)" : "rgba(255,255,255,.12)",
            filter: "blur(120px)",
            top: "-30%",
            right: "-10%",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: isDark ? "rgba(37,99,235,.2)" : "rgba(56,189,248,.2)",
            filter: "blur(100px)",
            bottom: "-20%",
            left: "-5%",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 1152, margin: "0 auto", padding: `0 ${px}px`, position: "relative", zIndex: 2 }}>
          {/* Breadcrumb */}
          <Reveal>
            <Link
              to="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: "rgba(255,255,255,.7)",
                fontSize: ".88rem",
                fontWeight: 500,
                textDecoration: "none",
                marginBottom: 28,
                transition: "color .2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.7)")}
            >
              <ArrowLeft size={16} /> Back to home
            </Link>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMd ? "1fr 1fr" : "1fr",
              gap: isMobile ? 32 : 48,
              alignItems: "center",
            }}
          >
            {/* Text */}
            <Reveal>
              <div>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    background: "rgba(255,255,255,.12)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,.18)",
                    borderRadius: 999,
                    padding: "8px 18px",
                    fontSize: ".82rem",
                    fontWeight: 600,
                    color: isDark ? "#00f0ff" : "#ffffff",
                    marginBottom: 20,
                  }}
                >
                  <sol.icon size={16} /> {sol.label}
                </span>
                <h1
                  style={{
                    fontFamily: DISPLAY,
                    fontWeight: 700,
                    fontSize: "clamp(2rem,5vw,3.4rem)",
                    lineHeight: 1.08,
                    color: "#ffffff",
                    marginBottom: 18,
                  }}
                >
                  {sol.h}
                </h1>
                <p
                  style={{
                    color: "rgba(255,255,255,.78)",
                    fontSize: isMobile ? "1rem" : "1.15rem",
                    lineHeight: 1.65,
                    maxWidth: "52ch",
                    marginBottom: 28,
                  }}
                >
                  {sol.p}
                </p>
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                  <Link
                    to="/#contact"
                    className="btn-interactive"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      background: isDark ? "#00f0ff" : "#ffffff",
                      color: isDark ? "#0f172a" : "#1d4ed8",
                      padding: isMobile ? ".85rem 1.6rem" : "1rem 2rem",
                      borderRadius: 999,
                      fontWeight: 700,
                      textDecoration: "none",
                      boxShadow: "0 8px 25px rgba(0,0,0,.2)",
                      fontSize: isMobile ? ".92rem" : "1.02rem",
                    }}
                  >
                    Get started <ArrowRight size={18} />
                  </Link>
                  <a
                    href="tel:61450513399"
                    className="btn-interactive"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      background: "rgba(255,255,255,.1)",
                      color: "#ffffff",
                      padding: isMobile ? ".85rem 1.6rem" : "1rem 2rem",
                      borderRadius: 999,
                      fontWeight: 600,
                      textDecoration: "none",
                      border: "1.5px solid rgba(255,255,255,.25)",
                      backdropFilter: "blur(10px)",
                      fontSize: isMobile ? ".92rem" : "1.02rem",
                    }}
                  >
                    <Phone size={18} /> Call us
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Hero Image */}
            <Reveal delay={200}>
              <div
                style={{
                  position: "relative",
                  borderRadius: isMobile ? 18 : 24,
                  overflow: "hidden",
                  boxShadow: "0 25px 60px -15px rgba(0,0,0,.5)",
                  border: "1px solid rgba(255,255,255,.12)",
                  aspectRatio: "16/10",
                  background: isDark ? "#1e293b" : "#1d4ed8",
                }}
              >
                <img
                  src={sol.heroImage}
                  alt={sol.label}
                  loading="eager"
                  fetchPriority="high"
                  decoding="sync"
                  onLoad={() => setImgLoaded(true)}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    opacity: imgLoaded ? 1 : 0,
                    transition: imgLoaded ? "none" : "opacity .2s ease",
                  }}
                />
                {/* Gradient overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,.4) 100%)",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────── OVERVIEW ─────────── */}
      <section style={sectionPad}>
        <div style={{ maxWidth: 1152, margin: "0 auto", padding: `0 ${px}px` }}>
          <Reveal>
            <div style={{ maxWidth: "72ch", margin: "0 auto" }}>
              <span style={eyebrow}>Overview</span>
              <h2 style={{ ...h2s, marginTop: 12, marginBottom: 20 }}>
                What we deliver
              </h2>
              {sol.longDescription.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  style={{
                    color: C.muted,
                    fontSize: isMobile ? ".98rem" : "1.08rem",
                    lineHeight: 1.75,
                    marginBottom: 16,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────── KEY FEATURES GRID ─────────── */}
      <section
        style={{
          ...sectionPad,
          background: isDark ? "rgba(30,41,59,.35)" : C.surfaceAlt,
        }}
      >
        <div style={{ maxWidth: 1152, margin: "0 auto", padding: `0 ${px}px` }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: isMobile ? 32 : 48 }}>
              <span style={eyebrow}>Capabilities</span>
              <h2 style={{ ...h2s, marginTop: 12 }}>
                Everything included
              </h2>
            </div>
          </Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMd ? "repeat(3, 1fr)" : isMobile ? "1fr" : "repeat(2, 1fr)",
              gap: isMobile ? 16 : 24,
            }}
          >
            {sol.features.map((feat, idx) => (
              <Reveal key={feat.title} delay={idx * 80}>
                <div
                  className="card-interactive"
                  style={{
                    background: C.surface,
                    border: `1px solid ${C.line}`,
                    borderRadius: isMobile ? 16 : 20,
                    padding: isMobile ? 20 : 28,
                    transition: "all .3s ease",
                    height: "100%",
                  }}
                >
                  <span
                    style={{
                      width: isMobile ? 44 : 52,
                      height: isMobile ? 44 : 52,
                      borderRadius: 14,
                      background: isDark
                        ? "rgba(0,240,255,.1)"
                        : "rgba(37,99,235,.08)",
                      display: "grid",
                      placeItems: "center",
                      marginBottom: 16,
                    }}
                  >
                    <feat.icon size={isMobile ? 22 : 24} color={C.pine} />
                  </span>
                  <h3
                    style={{
                      fontFamily: DISPLAY,
                      fontWeight: 600,
                      fontSize: isMobile ? "1.05rem" : "1.18rem",
                      color: C.ink,
                      marginBottom: 8,
                    }}
                  >
                    {feat.title}
                  </h3>
                  <p
                    style={{
                      color: C.muted,
                      fontSize: isMobile ? ".88rem" : ".95rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {feat.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── HOW IT WORKS ─────────── */}
      <section style={sectionPad}>
        <div style={{ maxWidth: 1152, margin: "0 auto", padding: `0 ${px}px` }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: isMobile ? 32 : 48 }}>
              <span style={eyebrow}>Process</span>
              <h2 style={{ ...h2s, marginTop: 12 }}>
                How it works
              </h2>
            </div>
          </Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMd ? "repeat(4, 1fr)" : isMobile ? "1fr" : "repeat(2, 1fr)",
              gap: isMobile ? 20 : 28,
              position: "relative",
            }}
          >
            {sol.howItWorks.map((step, idx) => (
              <Reveal key={step.step} delay={idx * 120}>
                <div style={{ position: "relative", textAlign: "center" }}>
                  {/* Step number */}
                  <div
                    style={{
                      width: isMobile ? 56 : 68,
                      height: isMobile ? 56 : 68,
                      borderRadius: "50%",
                      background: isDark
                        ? "linear-gradient(135deg, rgba(0,240,255,.2), rgba(37,99,235,.3))"
                        : "linear-gradient(135deg, rgba(37,99,235,.1), rgba(56,189,248,.15))",
                      border: `2px solid ${C.pine}`,
                      display: "grid",
                      placeItems: "center",
                      margin: "0 auto 18px",
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: DISPLAY,
                        fontWeight: 700,
                        fontSize: isMobile ? "1.2rem" : "1.5rem",
                        color: C.pine,
                      }}
                    >
                      {step.step}
                    </span>
                  </div>
                  {/* Connecting line (desktop only) */}
                  {isMd && idx < sol.howItWorks.length - 1 && (
                    <div
                      style={{
                        position: "absolute",
                        top: 34,
                        left: "calc(50% + 40px)",
                        right: "calc(-50% + 40px)",
                        height: 2,
                        background: `linear-gradient(90deg, ${C.pine}, transparent)`,
                        opacity: .3,
                        zIndex: 1,
                      }}
                    />
                  )}
                  <h3
                    style={{
                      fontFamily: DISPLAY,
                      fontWeight: 600,
                      fontSize: isMobile ? "1.05rem" : "1.15rem",
                      color: C.ink,
                      marginBottom: 8,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      color: C.muted,
                      fontSize: isMobile ? ".88rem" : ".92rem",
                      lineHeight: 1.6,
                      maxWidth: "28ch",
                      margin: "0 auto",
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── VISUAL SHOWCASE ─────────── */}
      <section
        style={{
          ...sectionPad,
          background: isDark ? "rgba(30,41,59,.35)" : C.surfaceAlt,
        }}
      >
        <div style={{ maxWidth: 1152, margin: "0 auto", padding: `0 ${px}px` }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMd ? "1fr 1fr" : "1fr",
              gap: isMobile ? 32 : 48,
              alignItems: "center",
            }}
          >
            {/* Image */}
            <Reveal>
              <div
                style={{
                  borderRadius: isMobile ? 18 : 24,
                  overflow: "hidden",
                  boxShadow: isDark
                    ? "0 25px 50px -12px rgba(0,0,0,.6)"
                    : "0 25px 50px -12px rgba(37,99,235,.2)",
                  border: `1px solid ${C.line}`,
                  aspectRatio: "16/10",
                }}
              >
                <img
                  src={sol.heroImage}
                  alt={`${sol.label} in action`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </Reveal>

            {/* Benefits */}
            <Reveal delay={150}>
              <div>
                <span style={eyebrow}>Why choose this</span>
                <h2 style={{ ...h2s, marginTop: 12, marginBottom: 24 }}>
                  Key benefits
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  {sol.benefits.map((b, idx) => (
                    <div
                      key={b.title}
                      className="card-interactive"
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 16,
                        background: C.surface,
                        border: `1px solid ${C.line}`,
                        borderRadius: 16,
                        padding: isMobile ? "16px" : "20px 22px",
                        transition: "all .3s ease",
                      }}
                    >
                      <span
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 10,
                          background: C.pine,
                          display: "grid",
                          placeItems: "center",
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      >
                        <Check size={18} color={isDark ? "#0f172a" : "#ffffff"} strokeWidth={3} />
                      </span>
                      <div>
                        <h4
                          style={{
                            fontWeight: 600,
                            fontSize: isMobile ? ".98rem" : "1.05rem",
                            color: C.ink,
                            marginBottom: 4,
                          }}
                        >
                          {b.title}
                        </h4>
                        <p
                          style={{
                            color: C.muted,
                            fontSize: isMobile ? ".88rem" : ".93rem",
                            lineHeight: 1.55,
                          }}
                        >
                          {b.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────── FAQ SECTION ─────────── */}
      <section style={sectionPad}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: `0 ${px}px` }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: isMobile ? 28 : 40 }}>
              <span style={eyebrow}>FAQ</span>
              <h2 style={{ ...h2s, marginTop: 12 }}>
                Common questions
              </h2>
            </div>
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {sol.faqs.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 60}>
                <FaqItem
                  q={faq.q}
                  a={faq.a}
                  isOpen={openFaq === idx}
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  C={C}
                  isMobile={isMobile}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── OTHER SERVICES ─────────── */}
      <section
        style={{
          ...sectionPad,
          background: isDark ? "rgba(30,41,59,.35)" : C.surfaceAlt,
        }}
      >
        <div style={{ maxWidth: 1152, margin: "0 auto", padding: `0 ${px}px` }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: isMobile ? 28 : 40 }}>
              <span style={eyebrow}>Explore more</span>
              <h2 style={{ ...h2s, marginTop: 12 }}>Other services</h2>
            </div>
          </Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMd ? "repeat(3, 1fr)" : "1fr",
              gap: isMobile ? 16 : 24,
            }}
          >
            {otherServices.map((s, idx) => (
              <Reveal key={s.slug} delay={idx * 100}>
                <Link
                  to={`/services/${s.slug}`}
                  className="card-interactive"
                  style={{
                    display: "block",
                    background: C.surface,
                    border: `1px solid ${C.line}`,
                    borderRadius: isMobile ? 16 : 20,
                    padding: isMobile ? 20 : 28,
                    textDecoration: "none",
                    color: C.ink,
                    transition: "all .3s ease",
                    height: "100%",
                  }}
                >
                  <span
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 14,
                      background: isDark ? "rgba(0,240,255,.1)" : "rgba(37,99,235,.08)",
                      display: "grid",
                      placeItems: "center",
                      marginBottom: 16,
                    }}
                  >
                    <s.icon size={24} color={C.pine} />
                  </span>
                  <h3
                    style={{
                      fontFamily: DISPLAY,
                      fontWeight: 600,
                      fontSize: isMobile ? "1.1rem" : "1.22rem",
                      color: C.ink,
                      marginBottom: 8,
                    }}
                  >
                    {s.label}
                  </h3>
                  <p
                    style={{
                      color: C.muted,
                      fontSize: isMobile ? ".88rem" : ".93rem",
                      lineHeight: 1.55,
                      marginBottom: 14,
                    }}
                  >
                    {s.p}
                  </p>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      color: C.pine,
                      fontWeight: 600,
                      fontSize: ".9rem",
                    }}
                  >
                    Learn more <ArrowRight size={15} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── CONTACT CTA ─────────── */}
      <section style={{ padding: isMobile ? "60px 0" : "90px 0" }}>
        <div style={{ maxWidth: 1152, margin: "0 auto", padding: `0 ${px}px` }}>
          <div
            style={{
              background: isDark
                ? `radial-gradient(800px 400px at 50% 0%, rgba(0,240,255,.15), transparent), linear-gradient(135deg, #1e293b 0%, #0f172a 100%)`
                : `radial-gradient(800px 400px at 50% 0%, rgba(37,99,235,.2), transparent), linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)`,
              color: "#ffffff",
              borderRadius: isMobile ? 20 : 30,
              padding: isMobile ? "40px 20px" : "64px 40px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              border: `1px solid ${isDark ? "rgba(0,240,255,.25)" : "rgba(255,255,255,.2)"}`,
              boxShadow: isDark
                ? "0 25px 50px -12px rgba(0,0,0,.6)"
                : "0 25px 50px -12px rgba(37,99,235,.35)",
            }}
          >
            {/* Glow */}
            <div
              style={{
                position: "absolute",
                width: 400,
                height: 400,
                borderRadius: "50%",
                background: isDark ? "rgba(0,240,255,.2)" : "rgba(56,189,248,.25)",
                filter: "blur(90px)",
                top: -120,
                left: "50%",
                transform: "translateX(-50%)",
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative", zIndex: 2 }}>
              <h2
                style={{
                  fontFamily: DISPLAY,
                  fontWeight: 700,
                  fontSize: "clamp(1.6rem,4vw,2.8rem)",
                  color: "#ffffff",
                  lineHeight: 1.1,
                }}
              >
                Ready to get started?
              </h2>
              <p
                style={{
                  color: isDark ? "#cbd5e1" : "#e2e8f0",
                  margin: "16px auto 32px",
                  maxWidth: "48ch",
                  fontSize: isMobile ? ".95rem" : "1.1rem",
                }}
              >
                Book a free, no-obligation IT health check. We'll review your {sol.label.toLowerCase()} setup and show you exactly where Veritron fits.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  to="/#contact"
                  className="btn-interactive"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    background: isDark ? "#00f0ff" : "#ffffff",
                    color: isDark ? "#0f172a" : "#1d4ed8",
                    padding: isMobile ? ".85rem 1.6rem" : "1rem 2.2rem",
                    borderRadius: 999,
                    fontWeight: 700,
                    textDecoration: "none",
                    boxShadow: "0 8px 25px rgba(0,0,0,.2)",
                    fontSize: isMobile ? ".92rem" : "1.05rem",
                    width: isMobile ? "100%" : "auto",
                    justifyContent: "center",
                  }}
                >
                  <ClipboardList size={18} /> Book a free IT check
                </Link>
                <a
                  href="tel:61450513399"
                  className="btn-interactive"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    background: "rgba(255,255,255,.1)",
                    color: "#ffffff",
                    padding: isMobile ? ".85rem 1.6rem" : "1rem 2rem",
                    borderRadius: 999,
                    fontWeight: 600,
                    textDecoration: "none",
                    border: "1.5px solid rgba(255,255,255,.3)",
                    backdropFilter: "blur(10px)",
                    fontSize: isMobile ? ".92rem" : "1.05rem",
                    width: isMobile ? "100%" : "auto",
                    justifyContent: "center",
                  }}
                >
                  <Phone size={18} /> +61 450 513 399
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
