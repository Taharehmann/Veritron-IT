import React from "react";
import { Phone, ArrowRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import useScreen from "../../hooks/useScreen";
import { DISPLAY } from "../../constants/typography";

export default function ContactCTA() {
  const C = useTheme();
  const { isMobile } = useScreen();
  const isDark = C.isDark;
  const px = isMobile ? 16 : 24;

  return (
    <section id="contact" style={{ padding: isMobile ? "60px 0" : "90px 0" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: `0 ${px}px` }}>
        <div
          style={{
            background: isDark
              ? `radial-gradient(800px 400px at 50% 0%, rgba(0, 240, 255, 0.15), transparent), linear-gradient(135deg, #1e293b 0%, #0f172a 100%)`
              : `radial-gradient(800px 400px at 50% 0%, rgba(37, 99, 235, 0.2), transparent), linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)`,
            color: "#ffffff",
            borderRadius: isMobile ? 20 : 30,
            padding: isMobile ? "40px 20px" : "64px 32px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            border: `1px solid ${isDark ? "rgba(0, 240, 255, 0.25)" : "rgba(255, 255, 255, 0.2)"}`,
            boxShadow: isDark
              ? "0 25px 50px -12px rgba(0, 0, 0, 0.6)"
              : "0 25px 50px -12px rgba(37, 99, 235, 0.35)",
          }}
        >
          <div
            className="float-glow-slow"
            style={{
              position: "absolute",
              width: 400,
              height: 400,
              borderRadius: "50%",
              background: isDark ? "rgba(0, 240, 255, 0.2)" : "rgba(56, 189, 248, 0.25)",
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
                fontSize: "clamp(1.8rem, 4.4vw, 3.2rem)",
                color: "#ffffff",
                lineHeight: 1.1,
              }}
            >
              Let's look after your systems.
            </h2>
            <p
              style={{
                color: isDark ? "#cbd5e1" : "#e2e8f0",
                margin: "16px auto 32px",
                maxWidth: "48ch",
                fontSize: isMobile ? ".95rem" : "1.12rem",
              }}
            >
              Book a free, no-obligation IT health check. We'll review your setup and show you exactly where Veritron fits.
            </p>
            <div
              style={{
                display: "flex",
                gap: 16,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href="mailto:hello@veritron.com.au"
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
                  boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)",
                  fontSize: isMobile ? ".92rem" : "1.05rem",
                  width: isMobile ? "100%" : "auto",
                  justifyContent: "center",
                }}
              >
                Book a free IT check <ArrowRight size={18} />
              </a>
              <a
                href="tel:0000000000"
                className="btn-interactive"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "#ffffff",
                  padding: isMobile ? ".85rem 1.6rem" : "1rem 2rem",
                  borderRadius: 999,
                  fontWeight: 600,
                  textDecoration: "none",
                  border: "1.5px solid rgba(255, 255, 255, 0.3)",
                  backdropFilter: "blur(10px)",
                  fontSize: isMobile ? ".92rem" : "1.05rem",
                  width: isMobile ? "100%" : "auto",
                  justifyContent: "center",
                }}
              >
                <Phone size={18} /> Call [phone]
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
