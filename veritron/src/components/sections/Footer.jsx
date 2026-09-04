import React from "react";
import { useTheme } from "../../context/ThemeContext";
import useScreen from "../../hooks/useScreen";
import { DISPLAY } from "../../constants/typography";
import Logo from "../ui/Logo";

export default function Footer() {
  const C = useTheme();
  const { isMobile, isMd } = useScreen();
  const isDark = C.isDark;
  const px = isMobile ? 16 : 24;

  return (
    <footer
      style={{
        background: isDark ? "#0a0f1d" : "#0f172a",
        color: "#94a3b8",
        padding: isMobile ? "44px 0 24px" : "64px 0 32px",
        borderTop: `1px solid ${isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.1)"}`,
      }}
    >
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: `0 ${px}px` }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMd ? "repeat(4, 1fr)" : isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: isMobile ? 28 : 40,
            paddingBottom: 36,
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Logo badge="#2563eb" stroke="#ffffff" spark="#00f0ff" size={38} />
              <div style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "1.35rem", color: "#f8fafc" }}>
                Veritron
              </div>
            </div>
            <p style={{ marginTop: 14, fontSize: ".92rem", color: "#94a3b8", maxWidth: "30ch", lineHeight: 1.5 }}>
              Intelligent technology & 24/7 cybersecurity quietly looking after your business.
            </p>
          </div>
          {[
            ["Services", ["Managed IT", "Cloud & Email", "Networks", "Hardware & Procurement"]],
            ["Company", ["Why Veritron", "Industries", "Pricing", "Contact"]],
            ["Get in touch", ["hello@veritron.com.au", "[phone number]", "Melbourne & surrounds"]],
          ].map(([h, items]) => (
            <div key={h}>
              <h4
                style={{
                  color: "#f8fafc",
                  fontSize: ".76rem",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  marginBottom: 14,
                  fontWeight: 700,
                }}
              >
                {h}
              </h4>
              {items.map((x) => (
                <a
                  key={x}
                  href="#top"
                  style={{
                    display: "block",
                    padding: "6px 0",
                    fontSize: ".92rem",
                    color: "#94a3b8",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#38bdf8")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                >
                  {x}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justify: "space-between",
            flexWrap: "wrap",
            gap: 12,
            paddingTop: 24,
            fontSize: ".83rem",
            color: "#64748b",
            flexDirection: isMobile ? "column" : "row",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <span>© 2026 Veritron IT Solutions · ABN [00 000 000 000]</span>
          <span>Next-gen IT &amp; cybersecurity for growing businesses</span>
        </div>
      </div>
    </footer>
  );
}
