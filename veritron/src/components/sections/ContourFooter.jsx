import React from "react";
import { DISPLAY } from "../../constants/typography";
import { OFFICE_INFO } from "../../constants/contourData";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

export default function ContourFooter({ onOpenContact, onOpenApproach }) {
  const navLinks = [
    { label: "Home", href: "#top" },
    { label: "Work & Case Studies", href: "#work" },
    { label: "Our Approach", href: "#approach", action: onOpenApproach },
    { label: "Solutions & Services", href: "#solutions" },
    { label: "Insights & Perspectives", href: "#insights" },
    { label: "Contact Us", href: "#contact", action: onOpenContact },
  ];

  const socialLinks = [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/veritron-it" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "GitHub", href: "https://github.com" },
  ];

  const handleLinkClick = (link, e) => {
    if (link.action) {
      e.preventDefault();
      link.action();
      return;
    }
    if (link.href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(link.href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      id="contact"
      style={{
        background: "#eef1ea",
        padding: "0 clamp(20px, 4vw, 64px) clamp(40px, 6vh, 60px)",
      }}
    >
      {/* Contour Signature Rounded Dark Container Footer Card */}
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          background: "#162537",
          border: "1.5px solid rgba(255, 255, 255, 0.35)",
          borderRadius: "clamp(28px, 4vw, 44px)",
          padding: "clamp(40px, 6vw, 76px)",
          color: "#ffffff",
          boxShadow: "0 30px 80px -20px rgba(10, 20, 35, 0.4)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "clamp(40px, 6vw, 90px)",
            paddingBottom: "clamp(40px, 6vh, 60px)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          {/* Left Column: Heading, Subtitle & Action Buttons */}
          <div style={{ maxWidth: 680 }}>
            <h2
              style={{
                fontFamily: DISPLAY,
                fontSize: "clamp(2.1rem, 4vw, 4.2rem)",
                fontWeight: 600,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#ffffff",
                margin: "0 0 20px",
              }}
            >
              Ready to make the right technology decision?
            </h2>
            <p
              style={{
                fontSize: "clamp(0.98rem, 1.3vw, 1.15rem)",
                color: "rgba(255, 255, 255, 0.72)",
                lineHeight: 1.6,
                margin: "0 0 36px",
              }}
            >
              Whether you're approaching an office relocation, planning for cloud scale, or rethinking your security architecture, let's have a conversation grounded in insight.
            </p>

            {/* Pill Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "12px 28px",
                  borderRadius: 9999,
                  background: "rgba(255, 255, 255, 0.12)",
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                  color: "#ffffff",
                  fontSize: "0.92rem",
                  fontWeight: 500,
                  fontFamily: DISPLAY,
                  textDecoration: "none",
                  cursor: "pointer",
                  backdropFilter: "blur(8px)",
                  transition: "background 0.25s, border-color 0.25s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.25)";
                  e.currentTarget.style.borderColor = "#ffffff";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.4)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <span>View our recent projects</span>
              </a>

              <button
                onClick={onOpenContact}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "12px 28px",
                  borderRadius: 9999,
                  background: "#ffffff",
                  border: "1px solid #ffffff",
                  color: "#162537",
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  fontFamily: DISPLAY,
                  cursor: "pointer",
                  transition: "transform 0.2s, box-shadow 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#e2e8f0";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#ffffff";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <span>Contact us</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Column: Navigation & Social Links */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 36,
              alignContent: "start",
            }}
          >
            {/* Nav list */}
            <div>
              <span
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255, 255, 255, 0.45)",
                  fontWeight: 700,
                  display: "block",
                  marginBottom: 18,
                }}
              >
                Menu
              </span>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(link, e)}
                      style={{
                        color: "#ffffff",
                        textDecoration: "none",
                        fontSize: "0.98rem",
                        fontWeight: 500,
                        transition: "color 0.2s, transform 0.2s",
                        display: "inline-block",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#7dd3fc";
                        e.currentTarget.style.transform = "translateX(4px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#ffffff";
                        e.currentTarget.style.transform = "translateX(0)";
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & Contact Direct Links */}
            <div>
              <span
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255, 255, 255, 0.45)",
                  fontWeight: 700,
                  display: "block",
                  marginBottom: 18,
                }}
              >
                Connect
              </span>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 14 }}>
                {socialLinks.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: "rgba(255, 255, 255, 0.8)",
                        textDecoration: "none",
                        fontSize: "0.98rem",
                        fontWeight: 500,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)")}
                    >
                      <span>{s.label}</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </li>
                ))}
              </ul>

              {/* Direct Phone & Email */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: "0.9rem" }}>
                <a
                  href={`tel:${OFFICE_INFO.phone.replace(/[^0-9+]/g, "")}`}
                  style={{ color: "#7dd3fc", textDecoration: "none", fontWeight: 600 }}
                >
                  {OFFICE_INFO.phone}
                </a>
                <a
                  href={`mailto:${OFFICE_INFO.email}`}
                  style={{ color: "rgba(255, 255, 255, 0.75)", textDecoration: "none" }}
                >
                  {OFFICE_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar within the footer container */}
        <div
          style={{
            paddingTop: 32,
            paddingBottom: "clamp(24px, 4vh, 40px)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
            fontSize: "0.82rem",
            color: "rgba(255, 255, 255, 0.5)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div>
            © {new Date().getFullYear()} Veritron IT Solutions Pty Ltd. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            <span>Melbourne & Surrounds, Victoria</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>

        {/* ── Iconic Gigantic Contour Brand Logo at Bottom (Matching Video 00:33) ── */}
        <div
          style={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
            paddingTop: "clamp(24px, 4vw, 48px)",
            userSelect: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Background subtle SVG contour flow */}
          <svg
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              opacity: 0.25,
            }}
            viewBox="0 0 1200 240"
            fill="none"
          >
            <path
              d="M -50 120 C 300 20 600 220 1250 120"
              stroke="rgba(255, 255, 255, 0.35)"
              strokeWidth="1.5"
            />
          </svg>

          <span
            style={{
              fontFamily: DISPLAY,
              fontWeight: 800,
              fontSize: "clamp(4.2rem, 15vw, 15rem)",
              lineHeight: 0.85,
              letterSpacing: "-0.045em",
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.3)",
              background: "linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.05) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              display: "block",
              width: "100%",
              textAlign: "center",
              transform: "translateY(12%)",
            }}
          >
            Veritron
          </span>
        </div>
      </div>
    </footer>
  );
}
