import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import useScreen from "../../hooks/useScreen";
import { TOOLS } from "../../constants/data";
import { DISPLAY } from "../../constants/typography";
import Hero3DMesh from "../ui/Hero3DMesh";

export default function Hero() {
  const C = useTheme();
  const { isMobile } = useScreen();
  const isDark = C.bg === "#1E1E22";

  return (
    <section
      id="top"
      style={{
        position: "relative",
        background: isDark
          ? `radial-gradient(1000px 500px at 50% -10%, rgba(56, 189, 248, 0.12) 0%, transparent 70%), linear-gradient(180deg, #0f172a 0%, #1e293b 100%)`
          : `radial-gradient(1000px 500px at 50% -10%, rgba(37, 99, 235, 0.08) 0%, transparent 70%), linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)`,
        color: C.ink,
        overflow: "hidden",
        paddingTop: isMobile ? 36 : 56,
        paddingBottom: 40,
        transition: "background 0.3s ease, color 0.3s ease",
      }}
    >
      {/* Background radial glow */}
      <div
        style={{
          position: "absolute",
          top: "-5%",
          left: "50%",
          transform: "translateX(-50%)",
          width: isMobile ? 300 : 700,
          height: isMobile ? 300 : 450,
          borderRadius: "50%",
          background: isDark
            ? "radial-gradient(circle, rgba(56,189,248,0.15) 0%, rgba(37,99,235,0.05) 50%, transparent 80%)"
            : "radial-gradient(circle, rgba(37,99,235,0.12) 0%, rgba(96,165,250,0.04) 50%, transparent 80%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: isMobile ? "0 16px" : "0 24px",
          position: "relative",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 16px",
            borderRadius: 999,
            background: isDark ? "rgba(56, 189, 248, 0.1)" : "rgba(37, 99, 235, 0.08)",
            border: `1.5px solid ${isDark ? "rgba(56, 189, 248, 0.25)" : "rgba(37, 99, 235, 0.18)"}`,
            color: isDark ? "#38bdf8" : "#2563eb",
            fontSize: isMobile ? ".76rem" : ".84rem",
            fontWeight: 700,
            letterSpacing: ".12em",
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          <span>Veritron IT Solutions</span>
          <span style={{ opacity: 0.4 }}>•</span>
          <span>24/7 Managed Services</span>
        </motion.div>

        {/* Centered Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          style={{
            fontFamily: DISPLAY,
            fontWeight: 700,
            fontSize: "clamp(2.3rem, 5.8vw, 4.4rem)",
            lineHeight: 1.1,
            letterSpacing: "-.03em",
            maxWidth: "20ch",
            margin: "0 0 20px 0",
            color: isDark ? "#f8fafc" : "#0f172a",
          }}
        >
          Bridging Innovation and{" "}
          <span
            style={{
              background: isDark
                ? "linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)"
                : "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            Connectivity
          </span>
        </motion.h1>

        {/* Subtitle Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          style={{
            fontSize: isMobile ? "1rem" : "1.18rem",
            lineHeight: 1.6,
            color: isDark ? "#94a3b8" : "#475569",
            maxWidth: "52ch",
            margin: "0 0 32px 0",
          }}
        >
          Empowering businesses and individuals with cutting-edge technology solutions,
          Veritron connects you to the latest innovations, seamless integrations, and expert support.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            marginBottom: 10,
            zIndex: 10,
          }}
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 12px 30px -8px rgba(37, 99, 235, 0.5)" }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: isDark
                ? "linear-gradient(135deg, #0284c7 0%, #2563eb 100%)"
                : "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
              color: "#ffffff",
              padding: isMobile ? ".85rem 1.6rem" : "1rem 2.2rem",
              borderRadius: 999,
              fontWeight: 600,
              fontSize: isMobile ? ".95rem" : "1.05rem",
              textDecoration: "none",
              boxShadow: isDark
                ? "0 8px 25px -6px rgba(2, 132, 199, 0.4)"
                : "0 8px 25px -6px rgba(37, 99, 235, 0.4)",
              transition: "all 0.2s ease",
            }}
          >
            Get Started <ArrowRight size={18} />
          </motion.a>

          <motion.a
            href="#solutions"
            whileHover={{ scale: 1.04, background: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.04)" }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "transparent",
              color: isDark ? "#e2e8f0" : "#1e293b",
              padding: isMobile ? ".85rem 1.4rem" : "1rem 1.8rem",
              borderRadius: 999,
              fontWeight: 600,
              fontSize: isMobile ? ".95rem" : "1.05rem",
              textDecoration: "none",
              border: `1.5px solid ${isDark ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.15)"}`,
              transition: "all 0.2s ease",
            }}
          >
            See Our Solutions
          </motion.a>
        </motion.div>

        {/* Feature Pill Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: isMobile ? 12 : 24,
            marginTop: 16,
            marginBottom: 20,
            flexWrap: "wrap",
          }}
        >
          {["No Lock-In Contracts", "Local Expert Team", "Fixed Monthly Pricing"].map((x) => (
            <span
              key={x}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: isMobile ? ".8rem" : ".88rem",
                fontWeight: 500,
                color: isDark ? "#94a3b8" : "#64748b",
              }}
            >
              <Check size={16} color={isDark ? "#38bdf8" : "#2563eb"} strokeWidth={2.8} />
              {x}
            </span>
          ))}
        </motion.div>

        {/* 3D Moving Animated Network Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          style={{ width: "100%", maxWidth: 950, margin: "-10px 0 10px 0" }}
        >
          <Hero3DMesh />
        </motion.div>
      </div>

      {/* Trusted By / Tool marquee section matching reference layout */}
      <div
        style={{
          borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}`,
          paddingTop: 24,
          marginTop: 10,
          position: "relative",
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontSize: ".75rem",
            letterSpacing: ".18em",
            fontWeight: 700,
            textTransform: "uppercase",
            color: isDark ? "#64748b" : "#94a3b8",
            marginBottom: 16,
          }}
        >
          TRUSTED BY & CERTIFIED ACROSS
        </p>

        <div
          style={{
            overflow: "hidden",
            maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
            WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
          }}
        >
          <div className="mq">
            {[...TOOLS, ...TOOLS].map((t, i) => (
              <span
                key={i}
                style={{
                  color: isDark ? "#cbd5e1" : "#475569",
                  opacity: 0.7,
                  fontWeight: 600,
                  fontSize: isMobile ? ".9rem" : "1.05rem",
                  whiteSpace: "nowrap",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
