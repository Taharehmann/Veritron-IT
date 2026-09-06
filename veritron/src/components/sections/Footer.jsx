import React from "react";
import { useTheme } from "../../context/ThemeContext";
import useScreen from "../../hooks/useScreen";
import { DISPLAY } from "../../constants/typography";
import Logo from "../ui/Logo";

function MailIcon({ size = 22, color = "#00a8ff", strokeWidth = 2.2, style }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <rect x="2.5" y="4.5" width="19" height="15" rx="3.5" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

function PhoneIcon({ size = 22, color = "#00a8ff", strokeWidth = 2.2, style }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MapPinIcon({ size = 22, color = "#00a8ff", strokeWidth = 2.2, style }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <path d="M12 21.5C16.5 16 19.5 12.3 19.5 8.5A7.5 7.5 0 0 0 4.5 8.5C4.5 12.3 7.5 16 12 21.5Z" />
      <circle cx="12" cy="8.5" r="2.6" />
    </svg>
  );
}

export default function Footer() {
  const C = useTheme();
  const { isMobile, isMd } = useScreen();
  const isDark = C.isDark;
  const px = isMobile ? 16 : 24;

  const contactItems = [
    {
      icon: MailIcon,
      text: "hello@veritron.com.au",
      href: "mailto:hello@veritron.com.au",
    },
    {
      icon: PhoneIcon,
      text: "+61 450 513 399",
      href: "tel:61450513399",
    },
    {
      icon: MapPinIcon,
      text: "Melbourne & Surrounds, AU",
      href: "#top",
    },
  ];

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
          {/* Brand Column */}
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

          {/* Services Column */}
          <div>
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
              Services
            </h4>
            {["Managed IT", "Cloud & Email", "Networks", "Hardware & Procurement"].map((x) => (
              <a
                key={x}
                href="#solutions"
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

          {/* Company Column */}
          <div>
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
              Company
            </h4>
            {["Why Veritron", "Industries", "Pricing", "Contact"].map((x) => (
              <a
                key={x}
                href={"#" + x.split(" ")[0].toLowerCase()}
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

          {/* Get In Touch Column with Icons */}
          <div>
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
              Get In Touch
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {contactItems.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontSize: ".92rem",
                      color: "#94a3b8",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#38bdf8")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                  >
                    <IconComponent
                      size={20}
                      color="#00a8ff"
                      strokeWidth={2.2}
                      style={{ flexShrink: 0 }}
                    />
                    <span>{item.text}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            paddingTop: 24,
            fontSize: ".83rem",
            color: "#64748b",
            flexDirection: isMobile ? "column" : "row",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <span>© 2026 Veritron IT Solutions · All rights reserved</span>
          <span>Next-gen IT &amp; cybersecurity for growing businesses</span>
        </div>
      </div>
    </footer>
  );
}
