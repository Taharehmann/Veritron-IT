import React from "react";
import { DISPLAY } from "../../constants/typography";
import { SOLUTIONS } from "../../constants/data";
import { ArrowRight, Server, Cloud, Wifi, HardDrive } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContourSolutions({ onOpenContact }) {
  const iconMap = {
    managed: Server,
    cloud: Cloud,
    network: Wifi,
    hardware: HardDrive,
  };

  return (
    <section
      id="solutions"
      style={{
        background: "#eef1ea",
        padding: "clamp(60px, 10vh, 120px) clamp(20px, 4vw, 64px)",
        borderTop: "1px solid rgba(0, 0, 0, 0.06)",
      }}
    >
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ maxWidth: 760, marginBottom: "clamp(40px, 6vh, 64px)" }}>
          <span
            style={{
              fontSize: "0.74rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#5f6b58",
              fontWeight: 700,
              display: "block",
              marginBottom: 12,
            }}
          >
            OUR CORE CAPABILITIES
          </span>
          <h2
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(2.1rem, 4vw, 4rem)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              color: "#1e261a",
              lineHeight: 1.12,
              margin: "0 0 16px",
            }}
          >
            Complete IT management under a single predictable framework.
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 1.3vw, 1.15rem)",
              color: "#525e4c",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            From the cabling in your walls to Microsoft 365 cloud governance, our Melbourne team monitors, secures, and supports your entire digital footprint.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "clamp(24px, 3vw, 36px)",
          }}
        >
          {SOLUTIONS.map((sol) => {
            const Icon = iconMap[sol.key] || Server;
            return (
              <div
                key={sol.slug}
                style={{
                  background: "#ffffff",
                  border: "1.5px solid rgba(0, 0, 0, 0.08)",
                  borderRadius: 28,
                  padding: "clamp(28px, 4vw, 44px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 10px 30px -10px rgba(30, 45, 25, 0.06)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                className="contour-sol-card"
              >
                <div>
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 16,
                      background: "#162537",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 24,
                    }}
                  >
                    <Icon size={24} color="#7dd3fc" />
                  </div>

                  <span
                    style={{
                      fontSize: "0.74rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#6b7764",
                      fontWeight: 700,
                      display: "block",
                      marginBottom: 8,
                    }}
                  >
                    {sol.label}
                  </span>

                  <h3
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: "clamp(1.4rem, 2vw, 1.8rem)",
                      fontWeight: 600,
                      letterSpacing: "-0.025em",
                      color: "#1e261a",
                      margin: "0 0 12px",
                      lineHeight: 1.25,
                    }}
                  >
                    {sol.h}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "#54604e",
                      lineHeight: 1.55,
                      margin: "0 0 24px",
                    }}
                  >
                    {sol.p}
                  </p>

                  {/* Bullet points */}
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                      fontSize: "0.88rem",
                      color: "#3a4435",
                    }}
                  >
                    {sol.pts.map((pt) => (
                      <li key={pt} style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                        <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#162537", flexShrink: 0 }} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  style={{
                    paddingTop: 32,
                    marginTop: 24,
                    borderTop: "1px solid rgba(0, 0, 0, 0.06)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Link
                    to={`/services/${sol.slug}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      color: "#162537",
                      fontWeight: 600,
                      fontSize: "0.92rem",
                      textDecoration: "none",
                    }}
                  >
                    <span>View full specs</span>
                    <ArrowRight size={15} />
                  </Link>

                  <button
                    onClick={onOpenContact}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#5f6b58",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      cursor: "pointer",
                      textDecoration: "underline",
                      padding: 0,
                    }}
                  >
                    Inquire
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .contour-sol-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 50px -15px rgba(30, 45, 25, 0.15) !important;
        }
      `}</style>
    </section>
  );
}
