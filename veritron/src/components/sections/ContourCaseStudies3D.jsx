import React, { useRef, useEffect } from "react";
import { DISPLAY } from "../../constants/typography";
import { CASE_STUDIES } from "../../constants/contourData";
import { ContourBadge } from "../ui/ContourShape";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContourCaseStudies3D({ onSelectCaseStudy }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      // Calculate total horizontal scroll width
      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 120);

      const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth + 400}`,
          pin: true,
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      // 3D Parallax on internal images during horizontal scroll
      const images = track.querySelectorAll(".contour-parallax-img");
      images.forEach((img) => {
        gsap.to(img, {
          x: -40,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${track.scrollWidth - window.innerWidth + 400}`,
            scrub: 1.5,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      style={{
        position: "relative",
        background: "#eef1ea",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        padding: "clamp(40px, 6vh, 60px) 0",
      }}
    >
      {/* Top Header inside pinned view */}
      <div
        style={{
          width: "100%",
          maxWidth: 1440,
          margin: "0 auto 24px",
          padding: "0 clamp(24px, 4vw, 64px)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <div>
          <span
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#5f6b58",
              fontWeight: 700,
              display: "block",
              marginBottom: 8,
            }}
          >
            SELECTED CLIENT WORK · 3D SCROLL EXPERIENCE
          </span>
          <h2
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(1.8rem, 3.2vw, 3.4rem)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              color: "#1e261a",
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            Engineered for resilience. Proven in practice.
          </h2>
        </div>

        <div style={{ color: "#5f6b58", fontSize: "0.85rem", fontWeight: 500 }}>
          Scroll down to pan projects →
        </div>
      </div>

      {/* Horizontal Parallax Track */}
      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: "clamp(24px, 3.5vw, 44px)",
          paddingLeft: "clamp(24px, 4vw, 64px)",
          paddingRight: "clamp(60px, 8vw, 120px)",
          width: "max-content",
          alignItems: "stretch",
          willChange: "transform",
        }}
      >
        {CASE_STUDIES.map((cs) => (
          <div
            key={cs.id}
            onClick={() => onSelectCaseStudy && onSelectCaseStudy(cs.id)}
            style={{
              width: "clamp(680px, 68vw, 980px)",
              display: "grid",
              gridTemplateColumns: "clamp(280px, 28vw, 380px) 1.25fr 1fr",
              gap: 18,
              minHeight: "clamp(340px, 46vh, 440px)",
              cursor: "pointer",
              perspective: 1000,
            }}
            className="contour-3d-card-group"
          >
            {/* 1. Left Color Info Card */}
            <div
              style={{
                background: cs.themeColor,
                borderRadius: 28,
                padding: "clamp(24px, 3vw, 36px)",
                color: "#ffffff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 18px 45px -12px rgba(0,0,0,0.22)",
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              className="contour-tilt-card"
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <span
                    style={{
                      fontSize: "0.68rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "rgba(255, 255, 255, 0.75)",
                      fontWeight: 700,
                    }}
                  >
                    CASE STUDY
                  </span>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: "rgba(255, 255, 255, 0.16)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ArrowUpRight size={17} color="#ffffff" />
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: "clamp(1.5rem, 2.2vw, 2.1rem)",
                    fontWeight: 600,
                    letterSpacing: "-0.03em",
                    margin: "0 0 10px",
                    lineHeight: 1.16,
                  }}
                >
                  {cs.title}
                </h3>
              </div>

              <div>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "rgba(255, 255, 255, 0.88)",
                    lineHeight: 1.45,
                    margin: "0 0 20px",
                  }}
                >
                  {cs.subtitle}
                </p>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>
                    {cs.location}
                  </span>
                  <ContourBadge color="#ffffff" size={38} />
                </div>
              </div>
            </div>

            {/* 2. Middle Main Architectural Image */}
            <div
              style={{
                borderRadius: 28,
                overflow: "hidden",
                boxShadow: "0 18px 45px -12px rgba(0,0,0,0.15)",
                position: "relative",
              }}
            >
              <img
                src={cs.heroImage}
                alt={`${cs.title} Main Photo`}
                style={{
                  width: "115%",
                  height: "100%",
                  objectFit: "cover",
                  transform: "translateX(0)",
                  willChange: "transform",
                }}
                className="contour-parallax-img"
              />
            </div>

            {/* 3. Right Detail Architectural Image */}
            <div
              style={{
                borderRadius: 28,
                overflow: "hidden",
                boxShadow: "0 18px 45px -12px rgba(0,0,0,0.15)",
                position: "relative",
              }}
            >
              <img
                src={cs.detailImage}
                alt={`${cs.title} Detail Photo`}
                style={{
                  width: "115%",
                  height: "100%",
                  objectFit: "cover",
                  transform: "translateX(0)",
                  willChange: "transform",
                }}
                className="contour-parallax-img"
              />
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .contour-3d-card-group:hover .contour-tilt-card {
          transform: translateY(-4px) scale(1.01);
          box-shadow: 0 24px 60px -15px rgba(0,0,0,0.3) !important;
        }
      `}</style>
    </section>
  );
}
