import React from "react";
import { ArrowRight, ShieldCheck, Zap, Clock, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import useScreen from "../../hooks/useScreen";
import { TOOLS } from "../../constants/data";
import { DISPLAY } from "../../constants/typography";
import Hero3DMesh from "../ui/Hero3DMesh";

export default function Hero() {
  const C = useTheme();
  const { isMobile } = useScreen();
  const isDark = C.isDark;

  return (
    <section
      id="top"
      style={{
        position: "relative",
        minHeight: isMobile ? "auto" : "88vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: isDark
          ? `radial-gradient(1200px 600px at 50% -10%, rgba(0, 240, 255, 0.08) 0%, rgba(14, 165, 233, 0.03) 50%, #0f172a 100%)`
          : `radial-gradient(1200px 600px at 50% -10%, rgba(37, 99, 235, 0.08) 0%, rgba(56, 189, 248, 0.04) 50%, #f8fafc 100%)`,
        color: C.ink,
        overflow: "hidden",
        paddingTop: isMobile ? 40 : 64,
        paddingBottom: 24,
        transition: "background 0.3s ease, color 0.3s ease",
      }}
    >
      {/* Dynamic 3D Moving Globe Mesh Background */}
      <Hero3DMesh />

      {/* Cybernetic Subtle Tech Grid Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: isDark
            ? `radial-gradient(rgba(56, 189, 248, 0.12) 1px, transparent 0)`
            : `radial-gradient(rgba(37, 99, 235, 0.08) 1px, transparent 0)`,
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(circle at 50% 40%, #000 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 40%, #000 30%, transparent 80%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Main Hero Content Area */}
      <div
        style={{
          maxWidth: 1150,
          width: "100%",
          margin: "0 auto",
          padding: isMobile ? "0 16px" : "0 24px",
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
        }}
      >
        {/* Futuristic Cyber Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "6px 18px",
            borderRadius: 999,
            background: isDark ? "rgba(0, 240, 255, 0.08)" : "rgba(37, 99, 235, 0.07)",
            border: `1.5px solid ${isDark ? "rgba(0, 240, 255, 0.28)" : "rgba(37, 99, 235, 0.2)"}`,
            color: isDark ? "#00f0ff" : "#2563eb",
            fontSize: isMobile ? ".76rem" : ".84rem",
            fontWeight: 700,
            letterSpacing: ".14em",
            textTransform: "uppercase",
            marginBottom: 24,
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            boxShadow: isDark
              ? "0 0 20px rgba(0, 240, 255, 0.15)"
              : "0 0 20px rgba(37, 99, 235, 0.08)",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: isDark ? "#00f0ff" : "#2563eb",
              boxShadow: isDark
                ? "0 0 10px #00f0ff, 0 0 20px #00f0ff"
                : "0 0 10px #2563eb",
            }}
          />
          <span>NEXT-GEN MANAGED IT & CYBERSECURITY</span>
        </motion.div>

        {/* Centered Futuristic Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          style={{
            fontFamily: DISPLAY,
            fontWeight: 800,
            fontSize: "clamp(2.4rem, 6vw, 4.6rem)",
            lineHeight: 1.08,
            letterSpacing: "-.03em",
            maxWidth: "22ch",
            margin: "0 0 22px 0",
            color: isDark ? "#f8fafc" : "#0f172a",
          }}
        >
          Bridging Innovation and{" "}
          <span
            style={{
              color: isDark ? "#00f0ff" : "#2563eb",
              textShadow: isDark
                ? "0 0 30px rgba(0, 240, 255, 0.5), 0 0 60px rgba(0, 240, 255, 0.25)"
                : "0 0 20px rgba(37, 99, 235, 0.2)",
              display: "inline-block",
            }}
          >
            Connectivity
          </span>
        </motion.h1>

        {/* Subtitle Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          style={{
            fontSize: isMobile ? "1rem" : "1.2rem",
            lineHeight: 1.65,
            color: isDark ? "#94a3b8" : "#475569",
            maxWidth: "54ch",
            margin: "0 0 36px 0",
            fontWeight: 400,
          }}
        >
          Empowering businesses with intelligent technology solutions, proactive 24/7 system monitoring,
          cloud infrastructure, and zero-trust cybersecurity.
        </motion.p>

        {/* Futuristic Primary & Secondary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            marginBottom: 44,
          }}
        >
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              boxShadow: isDark
                ? "0 12px 35px -6px rgba(0, 240, 255, 0.55)"
                : "0 12px 35px -6px rgba(37, 99, 235, 0.45)",
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: isDark
                ? "linear-gradient(135deg, #0284c7 0%, #2563eb 100%)"
                : "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
              color: "#ffffff",
              padding: isMobile ? ".9rem 1.8rem" : "1.05rem 2.4rem",
              borderRadius: 999,
              fontWeight: 700,
              fontSize: isMobile ? ".96rem" : "1.08rem",
              textDecoration: "none",
              boxShadow: isDark
                ? "0 8px 30px -6px rgba(2, 132, 199, 0.45)"
                : "0 8px 30px -6px rgba(37, 99, 235, 0.4)",
              letterSpacing: ".01em",
              border: isDark ? "1px solid rgba(0, 240, 255, 0.4)" : "none",
              transition: "all 0.25s ease",
            }}
          >
            Get Started <ArrowRight size={19} />
          </motion.a>

          <motion.a
            href="#solutions"
            whileHover={{
              scale: 1.04,
              borderColor: isDark ? "#00f0ff" : "#2563eb",
              background: isDark ? "rgba(0, 240, 255, 0.08)" : "rgba(37, 99, 235, 0.05)",
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: isDark ? "rgba(15, 23, 42, 0.6)" : "rgba(255, 255, 255, 0.8)",
              color: isDark ? "#e2e8f0" : "#1e293b",
              padding: isMobile ? ".9rem 1.6rem" : "1.05rem 2rem",
              borderRadius: 999,
              fontWeight: 600,
              fontSize: isMobile ? ".96rem" : "1.08rem",
              textDecoration: "none",
              border: `1.5px solid ${isDark ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.14)"}`,
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              transition: "all 0.25s ease",
            }}
          >
            Explore Tech Solutions
          </motion.a>
        </motion.div>

        {/* Futuristic Floating Glassmorphic Stat Badges */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: isMobile ? 12 : 20,
            width: "100%",
            maxWidth: 880,
            marginBottom: 20,
          }}
        >
          {[
            {
              icon: <Zap size={20} color={isDark ? "#00f0ff" : "#2563eb"} />,
              title: "99.99% Uptime SLA",
              desc: "Proactive monitoring & zero downtime",
            },
            {
              icon: <ShieldCheck size={20} color={isDark ? "#38bdf8" : "#0284c7"} />,
              title: "Zero-Trust Security",
              desc: "24/7 threat prevention & isolation",
            },
            {
              icon: <Clock size={20} color={isDark ? "#60a5fa" : "#3b82f6"} />,
              title: "< 15 Min SLA Response",
              desc: "Instant local Melbourne tech support",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4, borderColor: isDark ? "rgba(0, 240, 255, 0.4)" : "rgba(37, 99, 235, 0.3)" }}
              style={{
                background: isDark
                  ? "rgba(30, 41, 59, 0.55)"
                  : "rgba(255, 255, 255, 0.75)",
                border: `1.5px solid ${
                  isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.08)"
                }`,
                borderRadius: 16,
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                gap: 14,
                textAlign: "left",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                boxShadow: isDark
                  ? "0 10px 30px -10px rgba(0, 0, 0, 0.5)"
                  : "0 10px 30px -10px rgba(0, 0, 0, 0.05)",
                transition: "all 0.25s ease",
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 12,
                  background: isDark ? "rgba(0, 240, 255, 0.1)" : "rgba(37, 99, 235, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <div>
                <div
                  style={{
                    fontSize: ".95rem",
                    fontWeight: 700,
                    color: isDark ? "#f8fafc" : "#0f172a",
                    lineHeight: 1.2,
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontSize: ".8rem",
                    color: isDark ? "#94a3b8" : "#64748b",
                    marginTop: 3,
                  }}
                >
                  {item.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Trusted By & Certified Partners Marquee Bar */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}`,
          paddingTop: 18,
          background: isDark ? "rgba(15, 23, 42, 0.4)" : "rgba(248, 250, 252, 0.4)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontSize: ".74rem",
            letterSpacing: ".2em",
            fontWeight: 800,
            textTransform: "uppercase",
            color: isDark ? "#64748b" : "#94a3b8",
            marginBottom: 14,
          }}
        >
          TRUSTED & CERTIFIED ACROSS ENTERPRISE ECOSYSTEMS
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
                  color: isDark ? "#cbd5e1" : "#334155",
                  opacity: 0.75,
                  fontWeight: 700,
                  fontSize: isMobile ? ".9rem" : "1.05rem",
                  whiteSpace: "nowrap",
                  letterSpacing: ".02em",
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
