import React from "react";
import { DISPLAY } from "../../constants/typography";
import { ArrowRight } from "lucide-react";

export default function ContourMediaText({ onOpenInsights }) {
  return (
    <section
      id="insights"
      style={{
        background: "#eef1ea",
        padding: "clamp(60px, 10vh, 110px) clamp(20px, 4vw, 64px)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1380,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "clamp(24px, 4vw, 48px)",
          alignItems: "center",
        }}
      >
        {/* Left Side: Deep Navy Container Card with White Border */}
        <div
          style={{
            background: "#152438",
            border: "1.5px solid rgba(255, 255, 255, 0.35)",
            borderRadius: "clamp(28px, 4vw, 44px)",
            padding: "clamp(36px, 6vw, 68px)",
            color: "#ffffff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "clamp(380px, 45vh, 520px)",
            boxShadow: "0 24px 60px -20px rgba(10, 20, 35, 0.3)",
          }}
        >
          <div>
            <span
              style={{
                fontSize: "0.74rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#7dd3fc",
                fontWeight: 700,
                display: "block",
                marginBottom: 24,
              }}
            >
              THE THOUGHTS THAT MAKE THE WORK.
            </span>
            <h2
              style={{
                fontFamily: DISPLAY,
                fontSize: "clamp(1.9rem, 3.6vw, 3.6rem)",
                fontWeight: 600,
                lineHeight: 1.14,
                letterSpacing: "-0.03em",
                color: "#ffffff",
                margin: 0,
                maxWidth: 620,
              }}
            >
              Explore the ideas, security blueprints and perspectives that shape how we engineer every IT system.
            </h2>
          </div>

          <div style={{ marginTop: 36 }}>
            <button
              onClick={onOpenInsights}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 30px",
                borderRadius: 9999,
                background: "rgba(255, 255, 255, 0.12)",
                border: "1px solid rgba(255, 255, 255, 0.4)",
                color: "#ffffff",
                fontSize: "0.94rem",
                fontWeight: 500,
                fontFamily: DISPLAY,
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
              <span>See our Insights</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

        {/* Right Side: Circular / Oval Architectural Window */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "clamp(360px, 45vh, 520px)",
            borderRadius: "clamp(28px, 4vw, 44px)",
            overflow: "hidden",
            boxShadow: "0 20px 50px -15px rgba(0, 0, 0, 0.15)",
          }}
        >
          <img
            src="/images/contour/hardware-lab.jpg"
            alt="Veritron IT Hardware & Engineering Lab"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.6s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.04)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          />
        </div>
      </div>
    </section>
  );
}
