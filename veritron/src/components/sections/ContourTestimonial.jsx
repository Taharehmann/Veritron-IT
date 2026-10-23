import React from "react";
import { DISPLAY } from "../../constants/typography";
import { TESTIMONIAL } from "../../constants/contourData";

export default function ContourTestimonial() {
  return (
    <section
      style={{
        background: "#eef1ea",
        color: "#1e261a",
        padding: "clamp(60px, 12vh, 130px) clamp(24px, 6vw, 80px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
      }}
    >
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        <blockquote
          style={{
            margin: 0,
            padding: 0,
            fontFamily: DISPLAY,
            fontSize: "clamp(1.5rem, 3.2vw, 2.75rem)",
            fontWeight: 500,
            lineHeight: 1.28,
            letterSpacing: "-0.025em",
            color: "#1e261a",
          }}
        >
          "{TESTIMONIAL.quote}"
        </blockquote>

        <div style={{ marginTop: "clamp(28px, 4vh, 44px)" }}>
          <div
            style={{
              fontFamily: DISPLAY,
              fontWeight: 700,
              fontSize: "clamp(1.05rem, 1.4vw, 1.25rem)",
              color: "#1e261a",
              letterSpacing: "-0.01em",
            }}
          >
            {TESTIMONIAL.author}
          </div>
          <div
            style={{
              fontSize: "clamp(0.85rem, 1.1vw, 0.98rem)",
              color: "#5f6b58",
              marginTop: 4,
              fontWeight: 500,
            }}
          >
            {TESTIMONIAL.role} · {TESTIMONIAL.company}
          </div>
        </div>
      </div>
    </section>
  );
}
