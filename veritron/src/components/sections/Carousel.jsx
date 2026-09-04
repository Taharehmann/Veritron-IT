import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import useScreen from "../../hooks/useScreen";
import { QUOTES } from "../../constants/data";
import { DISPLAY } from "../../constants/typography";

export default function Carousel() {
  const C = useTheme();
  const { isMobile } = useScreen();
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % QUOTES.length), 5000);
    return () => clearInterval(id);
  }, []);
  const t = QUOTES[i];

  return (
    <div
      style={{
        background: C.isDark
          ? "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)"
          : "linear-gradient(135deg, #1e40af 0%, #1d4ed8 100%)",
        borderRadius: isMobile ? 18 : 26,
        padding: isMobile ? "30px 20px" : "48px 40px",
        color: "#ffffff",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 20px 40px -15px rgba(37, 99, 235, 0.3)",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(0, 240, 255, 0.18)",
          filter: "blur(70px)",
          top: -60,
          right: -40,
        }}
      />
      <div style={{ position: "relative" }}>
        <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
          {Array.from({ length: t.s }).map((_, k) => (
            <Star key={k} size={isMobile ? 15 : 18} fill="#38bdf8" color="#38bdf8" />
          ))}
        </div>
        <p
          style={{
            fontFamily: DISPLAY,
            fontWeight: 500,
            fontSize: "clamp(1.15rem,2.6vw,2rem)",
            lineHeight: 1.35,
            minHeight: isMobile ? 72 : 96,
            color: "#ffffff",
          }}
        >
          "{t.q}"
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 24,
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div>
            <div style={{ fontWeight: 700, color: "#ffffff" }}>{t.n}</div>
            <div style={{ fontSize: ".88rem", color: "#93c5fd" }}>{t.r}</div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {QUOTES.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Testimonial ${k + 1}`}
                style={{
                  width: k === i ? 26 : 9,
                  height: 9,
                  borderRadius: 999,
                  border: "none",
                  cursor: "pointer",
                  background: k === i ? "#38bdf8" : "rgba(255,255,255,.3)",
                  transition: "width .3s",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
