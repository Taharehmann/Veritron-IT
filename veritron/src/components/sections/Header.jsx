import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { DISPLAY } from "../../constants/typography";
import { ArrowRight, X } from "lucide-react";

export default function Header({ onOpenContact, onOpenApproach }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navItems = [
    { num: "01", label: "Home", href: "#top" },
    { num: "02", label: "Work & Case Studies", href: "#work" },
    { num: "03", label: "Our Approach", href: "#approach", action: onOpenApproach },
    { num: "04", label: "Solutions & Services", href: "#solutions" },
    { num: "05", label: "Insights & Perspectives", href: "#insights" },
    { num: "06", label: "Contact Us", href: "#contact", action: onOpenContact },
  ];

  const handleNavClick = (item, e) => {
    setMenuOpen(false);
    if (item.action) {
      e.preventDefault();
      item.action();
      return;
    }
    if (item.href.startsWith("#")) {
      const el = document.querySelector(item.href);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          padding: "clamp(16px, 2.5vw, 28px) clamp(20px, 4vw, 56px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "background 0.35s ease, backdrop-filter 0.35s ease, padding 0.3s ease",
          background: scrolled
            ? "rgba(12, 21, 36, 0.88)"
            : "linear-gradient(to bottom, rgba(12, 21, 36, 0.75), rgba(12, 21, 36, 0))",
          backdropFilter: scrolled ? "blur(14px)" : "none",
        }}
      >
        {/* Brand Logo - Contour typography */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "baseline",
            gap: 8,
          }}
        >
          <span
            style={{
              fontFamily: DISPLAY,
              fontWeight: 700,
              fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)",
              color: "#ffffff",
              letterSpacing: "-0.035em",
              lineHeight: 1,
            }}
          >
            Veritron
          </span>
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#38bdf8",
              display: "inline-block",
            }}
          />
        </a>

        {/* Right Actions: Contact pill & Hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button
            onClick={onOpenContact}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "9px 20px",
              borderRadius: 9999,
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              color: "#ffffff",
              fontSize: "0.86rem",
              fontWeight: 500,
              fontFamily: DISPLAY,
              cursor: "pointer",
              backdropFilter: "blur(8px)",
              transition: "background 0.25s, border-color 0.25s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.22)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.6)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <span>Talk with our team</span>
          </button>

          {/* Minimal 3-Line Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            style={{
              width: 44,
              height: 44,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              borderRadius: 9999,
              cursor: "pointer",
              padding: 0,
              transition: "background 0.25s, border-color 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
            }}
          >
            <span
              style={{
                width: 20,
                height: 2,
                background: "#ffffff",
                borderRadius: 2,
                transition: "transform 0.3s, opacity 0.3s",
                transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              }}
            />
            <span
              style={{
                width: 20,
                height: 2,
                background: "#ffffff",
                borderRadius: 2,
                transition: "opacity 0.2s",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                width: 20,
                height: 2,
                background: "#ffffff",
                borderRadius: 2,
                transition: "transform 0.3s, opacity 0.3s",
                transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
              }}
            />
          </button>
        </div>
      </header>

      {/* Fullscreen Overlay Menu - Exactly matching Contour Interiors */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 850,
          background: "#0c1524",
          color: "#ffffff",
          display: "flex",
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? "visible" : "hidden",
          transition: "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.4s linear",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 1400,
            margin: "0 auto",
            padding: "clamp(100px, 14vh, 140px) clamp(24px, 6vw, 80px) 60px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "clamp(40px, 6vw, 100px)",
            alignItems: "center",
          }}
        >
          {/* Left Column: Big Navigation Links */}
          <div>
            <span
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(255, 255, 255, 0.45)",
                fontWeight: 600,
                display: "block",
                marginBottom: 28,
              }}
            >
              Navigation
            </span>
            <nav style={{ display: "flex", flexDirection: "column", gap: "clamp(12px, 2.2vh, 22px)" }}>
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(item, e)}
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 20,
                    textDecoration: "none",
                    color: "#ffffff",
                    fontFamily: DISPLAY,
                    fontSize: "clamp(1.8rem, 3.8vw, 3.2rem)",
                    fontWeight: 600,
                    letterSpacing: "-0.03em",
                    transition: "transform 0.25s ease, color 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(12px)";
                    e.currentTarget.style.color = "#38bdf8";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.color = "#ffffff";
                  }}
                >
                  <span
                    style={{
                      fontSize: "clamp(0.85rem, 1.2vw, 1.1rem)",
                      color: "rgba(255, 255, 255, 0.35)",
                      fontFamily: "monospace",
                      fontWeight: 400,
                    }}
                  >
                    {item.num}
                  </span>
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Right Column: Featured Project & Melbourne Office */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 32,
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              borderRadius: 28,
              padding: "clamp(24px, 4vw, 36px)",
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#38bdf8",
                  fontWeight: 600,
                  display: "block",
                  marginBottom: 12,
                }}
              >
                Featured Case Study
              </span>
              <h3
                style={{
                  fontFamily: DISPLAY,
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  margin: "0 0 8px",
                  color: "#ffffff",
                }}
              >
                Summit Logistics Australia
              </h3>
              <p
                style={{
                  fontSize: "0.92rem",
                  color: "rgba(255, 255, 255, 0.7)",
                  lineHeight: 1.5,
                  margin: "0 0 16px",
                }}
              >
                Zero-downtime national Microsoft 365 cloud cutover & redundant SD-WAN architecture.
              </p>
              <div
                style={{
                  height: 180,
                  borderRadius: 18,
                  overflow: "hidden",
                  position: "relative",
                  marginBottom: 16,
                }}
              >
                <img
                  src="/images/contour/hero-workplace.jpg"
                  alt="Summit Logistics Melbourne"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <a
                href="#work"
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  color: "#ffffff",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                <span>Read the case study</span>
                <ArrowRight size={15} color="#38bdf8" />
              </a>
            </div>

            {/* Direct Contact Info */}
            <div
              style={{
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                paddingTop: 24,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                fontSize: "0.9rem",
                color: "rgba(255, 255, 255, 0.75)",
              }}
            >
              <div>
                <b style={{ color: "#ffffff", display: "block" }}>Melbourne Office</b>
                Melbourne & Surrounds, Victoria, AU
              </div>
              <div>
                <a href="tel:61450513399" style={{ color: "#38bdf8", textDecoration: "none" }}>
                  +61 450 513 399
                </a>
                <span style={{ margin: "0 8px" }}>·</span>
                <a href="mailto:info@veritron.com.au" style={{ color: "rgba(255, 255, 255, 0.85)", textDecoration: "none" }}>
                  info@veritron.com.au
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
