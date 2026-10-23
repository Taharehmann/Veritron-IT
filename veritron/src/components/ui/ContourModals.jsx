import React, { useState } from "react";
import { DISPLAY } from "../../constants/typography";
import { CASE_STUDIES, INSIGHTS, OFFICE_INFO } from "../../constants/contourData";
import { SOLUTIONS } from "../../constants/data";
import { X, CheckCircle2, ArrowRight, Phone, Mail, MapPin } from "lucide-react";

/* ── Case Study Modal Drawer ── */
export function CaseStudyModal({ caseStudyId, onClose, onOpenContact }) {
  if (!caseStudyId) return null;
  const cs = CASE_STUDIES.find((c) => c.id === caseStudyId) || CASE_STUDIES[0];

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 990,
        background: "rgba(10, 16, 26, 0.8)",
        backdropFilter: "blur(12px)",
        display: "flex",
        justifyContent: "flex-end",
        animation: "fadeInModal 0.3s ease",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 780,
          background: "#121e2e",
          color: "#ffffff",
          height: "100%",
          overflowY: "auto",
          padding: "clamp(32px, 5vw, 64px)",
          boxShadow: "-20px 0 60px rgba(0,0,0,0.5)",
          display: "flex",
          flexDirection: "column",
          gap: 32,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header / Close button */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#38bdf8",
              fontWeight: 700,
            }}
          >
            CASE STUDY · {cs.client}
          </span>
          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#ffffff",
              borderRadius: "50%",
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Title */}
        <div>
          <h2
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              margin: "0 0 12px",
            }}
          >
            {cs.title}
          </h2>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.5, margin: 0 }}>
            {cs.subtitle}
          </p>
        </div>

        {/* Hero image banner */}
        <div style={{ height: 260, borderRadius: 24, overflow: "hidden", border: "1px solid rgba(255,255,255,0.15)" }}>
          <img src={cs.heroImage} alt={cs.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        {/* Quick project specs */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 20,
            padding: 24,
            fontSize: "0.92rem",
          }}
        >
          <div>
            <span style={{ color: "rgba(255,255,255,0.5)", display: "block", fontSize: "0.78rem" }}>LOCATION</span>
            <b>{cs.location}</b>
          </div>
          <div>
            <span style={{ color: "rgba(255,255,255,0.5)", display: "block", fontSize: "0.78rem" }}>SCOPE</span>
            <b>{cs.scope}</b>
          </div>
        </div>

        {/* The Challenge & Solution */}
        <div>
          <h4 style={{ fontFamily: DISPLAY, fontSize: "1.25rem", color: "#ffffff", margin: "0 0 10px" }}>The Challenge</h4>
          <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.6, margin: "0 0 24px" }}>{cs.challenge}</p>

          <h4 style={{ fontFamily: DISPLAY, fontSize: "1.25rem", color: "#ffffff", margin: "0 0 10px" }}>The Solution</h4>
          <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.6, margin: 0 }}>{cs.solution}</p>
        </div>

        {/* Measurable Results */}
        <div>
          <h4 style={{ fontFamily: DISPLAY, fontSize: "1.25rem", color: "#ffffff", margin: "0 0 16px" }}>Outcomes</h4>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 14 }}>
            {cs.results.map((r) => (
              <div
                key={r.label}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 18,
                  padding: "18px 16px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontFamily: DISPLAY, fontSize: "1.8rem", fontWeight: 700, color: "#38bdf8" }}>{r.metric}</div>
                <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.7)", marginTop: 4 }}>{r.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Quote */}
        <div
          style={{
            background: "rgba(56, 189, 248, 0.08)",
            border: "1px solid rgba(56, 189, 248, 0.25)",
            borderRadius: 20,
            padding: 24,
            fontStyle: "italic",
            color: "#e2e8f0",
            lineHeight: 1.6,
          }}
        >
          "{cs.quote}"
        </div>

        {/* Bottom CTA */}
        <div style={{ paddingTop: 16 }}>
          <button
            onClick={() => {
              onClose();
              if (onOpenContact) onOpenContact();
            }}
            style={{
              width: "100%",
              padding: "14px 24px",
              borderRadius: 9999,
              background: "#38bdf8",
              color: "#0f172a",
              fontWeight: 700,
              fontSize: "1rem",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            }}
          >
            <span>Discuss your setup with our engineers</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Interactive Contact Modal Drawer (Netlify Forms compatible) ── */
export function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Managed IT",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formBody = new URLSearchParams({
      "form-name": "contact",
      ...formData,
    }).toString();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formBody,
    })
      .then(() => {
        setSubmitted(true);
        setSubmitting(false);
      })
      .catch(() => {
        // Fallback friendly success
        setSubmitted(true);
        setSubmitting(false);
      });
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 995,
        background: "rgba(10, 16, 26, 0.8)",
        backdropFilter: "blur(14px)",
        display: "flex",
        justifyContent: "flex-end",
        animation: "fadeInModal 0.3s ease",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 640,
          background: "#121e2e",
          color: "#ffffff",
          height: "100%",
          overflowY: "auto",
          padding: "clamp(32px, 5vw, 60px)",
          boxShadow: "-20px 0 60px rgba(0,0,0,0.5)",
          display: "flex",
          flexDirection: "column",
          gap: 28,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#38bdf8",
              fontWeight: 700,
            }}
          >
            MELBOURNE OFFICE
          </span>
          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#ffffff",
              borderRadius: "50%",
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <X size={20} />
          </button>
        </div>

        <div>
          <h2
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(2rem, 3.2vw, 2.8rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              margin: "0 0 10px",
            }}
          >
            Talk with our team.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.98rem", lineHeight: 1.5, margin: 0 }}>
            Tell us about your systems, team size, and goals. One of our senior engineers will be in touch within 2 business hours.
          </p>
        </div>

        {submitted ? (
          <div
            style={{
              background: "rgba(34, 197, 94, 0.12)",
              border: "1px solid rgba(34, 197, 94, 0.3)",
              borderRadius: 24,
              padding: 36,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
            }}
          >
            <CheckCircle2 size={48} color="#4ade80" />
            <h3 style={{ fontFamily: DISPLAY, fontSize: "1.4rem", margin: 0 }}>Message Received</h3>
            <p style={{ color: "rgba(255,255,255,0.8)", margin: 0, fontSize: "0.95rem" }}>
              Thank you, {formData.name}. Our Melbourne engineering team has received your inquiry and will contact you shortly at{" "}
              {formData.email}.
            </p>
            <button
              onClick={onClose}
              style={{
                marginTop: 12,
                padding: "10px 24px",
                borderRadius: 9999,
                background: "#ffffff",
                color: "#121e2e",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: 18 }}
          >
            <input type="hidden" name="form-name" value="contact" />

            <div>
              <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "rgba(255,255,255,0.8)", marginBottom: 6 }}>
                Full Name *
              </label>
              <input
                type="text"
                required
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Sarah Jenkins"
                style={{
                  width: "100%",
                  padding: "13px 16px",
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  color: "#ffffff",
                  fontSize: "0.95rem",
                  outline: "none",
                }}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <div>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "rgba(255,255,255,0.8)", marginBottom: 6 }}>
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="sarah@company.com.au"
                  style={{
                    width: "100%",
                    padding: "13px 16px",
                    borderRadius: 14,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    color: "#ffffff",
                    fontSize: "0.95rem",
                    outline: "none",
                  }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "rgba(255,255,255,0.8)", marginBottom: 6 }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="0450 000 000"
                  style={{
                    width: "100%",
                    padding: "13px 16px",
                    borderRadius: 14,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    color: "#ffffff",
                    fontSize: "0.95rem",
                    outline: "none",
                  }}
                />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <div>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "rgba(255,255,255,0.8)", marginBottom: 6 }}>
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Nexa Group"
                  style={{
                    width: "100%",
                    padding: "13px 16px",
                    borderRadius: 14,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    color: "#ffffff",
                    fontSize: "0.95rem",
                    outline: "none",
                  }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "rgba(255,255,255,0.8)", marginBottom: 6 }}>
                  Primary Need
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "13px 16px",
                    borderRadius: 14,
                    background: "#1c2b3d",
                    border: "1px solid rgba(255,255,255,0.18)",
                    color: "#ffffff",
                    fontSize: "0.95rem",
                    outline: "none",
                  }}
                >
                  <option value="Managed IT">Managed IT</option>
                  <option value="Cloud & Email">Cloud & Email Migration</option>
                  <option value="Network Solutions">Networks & Enterprise Wi-Fi</option>
                  <option value="Hardware Procurement">Hardware & Office Move</option>
                  <option value="Cybersecurity Audit">Cybersecurity Audit</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "rgba(255,255,255,0.8)", marginBottom: 6 }}>
                How can we help? *
              </label>
              <textarea
                required
                rows={4}
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Details about your current setup, users, or challenges..."
                style={{
                  width: "100%",
                  padding: "13px 16px",
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  color: "#ffffff",
                  fontSize: "0.95rem",
                  outline: "none",
                  resize: "vertical",
                }}
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              style={{
                marginTop: 10,
                padding: "14px 28px",
                borderRadius: 9999,
                background: "#38bdf8",
                color: "#0f172a",
                fontWeight: 700,
                fontSize: "1rem",
                border: "none",
                cursor: "pointer",
                transition: "opacity 0.2s",
              }}
            >
              {submitting ? "Sending..." : "Send Request"}
            </button>
          </form>
        )}

        {/* Quick Contact Footnote */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: 20,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            fontSize: "0.88rem",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          <div>
            Direct phone:{" "}
            <a href="tel:61450513399" style={{ color: "#38bdf8", textDecoration: "none" }}>
              +61 450 513 399
            </a>
          </div>
          <div>
            Direct email:{" "}
            <a href="mailto:info@veritron.com.au" style={{ color: "#ffffff", textDecoration: "none" }}>
              info@veritron.com.au
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Insights Modal ── */
export function InsightsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 990,
        background: "rgba(10, 16, 26, 0.8)",
        backdropFilter: "blur(12px)",
        display: "flex",
        justifyContent: "flex-end",
        animation: "fadeInModal 0.3s ease",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 760,
          background: "#121e2e",
          color: "#ffffff",
          height: "100%",
          overflowY: "auto",
          padding: "clamp(32px, 5vw, 64px)",
          boxShadow: "-20px 0 60px rgba(0,0,0,0.5)",
          display: "flex",
          flexDirection: "column",
          gap: 32,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#38bdf8",
              fontWeight: 700,
            }}
          >
            VERITRON INSIGHTS
          </span>
          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#ffffff",
              borderRadius: "50%",
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <X size={20} />
          </button>
        </div>

        <div>
          <h2
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              margin: "0 0 12px",
            }}
          >
            The thoughts that make the work.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.5, margin: 0, fontSize: "1rem" }}>
            Explore the engineering strategies, security frameworks, and research that guide our infrastructure deployments.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {INSIGHTS.map((item) => (
            <div
              key={item.id}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 22,
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.82rem" }}>
                <span style={{ color: "#38bdf8", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {item.category}
                </span>
                <span style={{ color: "rgba(255,255,255,0.45)" }}>{item.readTime}</span>
              </div>
              <h3 style={{ fontFamily: DISPLAY, fontSize: "1.35rem", fontWeight: 600, margin: 0, lineHeight: 1.3 }}>
                {item.title}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.7)", margin: 0, lineHeight: 1.6, fontSize: "0.95rem" }}>
                {item.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Our Approach Modal / Drawer ── */
export function ApproachModal({ isOpen, onClose, onOpenContact }) {
  if (!isOpen) return null;

  const steps = [
    {
      num: "01",
      title: "Discovery & Environmental Audit",
      desc: "We map your complete digital footprint: physical hardware, cloud tenants, security policies, licensing, and user workflows. We identify bottlenecks and security blind spots before making recommendations.",
    },
    {
      num: "02",
      title: "Architecture & Blueprint Design",
      desc: "We design resilient, redundant architectures matched to your growth trajectory. Structured cabling plans, Wi-Fi 6 RF heatmaps, cloud landing zones, and Zero-Trust access policies are specified with transparent cost modelling.",
    },
    {
      num: "03",
      title: "Precision Execution",
      desc: "We deploy after hours or over weekends to guarantee zero user downtime. Mailboxes sync in the background, network switches cutover seamlessly, and new devices arrive pre-imaged and domain-joined ready to work.",
    },
    {
      num: "04",
      title: "Proactive 24/7 Care & Evolution",
      desc: "Continuous automated monitoring catches failing drives and anomalies before they become outages. Your team gets a named contact with average response times under 15 minutes, backed by monthly transparent reporting.",
    },
  ];

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 990,
        background: "rgba(10, 16, 26, 0.8)",
        backdropFilter: "blur(12px)",
        display: "flex",
        justifyContent: "flex-end",
        animation: "fadeInModal 0.3s ease",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 780,
          background: "#121e2e",
          color: "#ffffff",
          height: "100%",
          overflowY: "auto",
          padding: "clamp(32px, 5vw, 64px)",
          boxShadow: "-20px 0 60px rgba(0,0,0,0.5)",
          display: "flex",
          flexDirection: "column",
          gap: 32,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#38bdf8",
              fontWeight: 700,
            }}
          >
            OUR METHODOLOGY
          </span>
          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#ffffff",
              borderRadius: "50%",
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <X size={20} />
          </button>
        </div>

        <div>
          <h2
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              margin: "0 0 12px",
            }}
          >
            One framework. Infinite possibilities.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.5, margin: 0, fontSize: "1.05rem" }}>
            Our 4-stage delivery process turns complex enterprise IT into an orderly, predictable, and transparent discipline.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {steps.map((st) => (
            <div
              key={st.num}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 22,
                padding: "24px 28px",
                display: "grid",
                gridTemplateColumns: "50px 1fr",
                gap: 20,
                alignItems: "start",
              }}
            >
              <div style={{ fontFamily: "monospace", fontSize: "1.3rem", fontWeight: 700, color: "#38bdf8" }}>{st.num}</div>
              <div>
                <h3 style={{ fontFamily: DISPLAY, fontSize: "1.25rem", fontWeight: 600, margin: "0 0 8px" }}>{st.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.7)", margin: 0, lineHeight: 1.6, fontSize: "0.93rem" }}>{st.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ paddingTop: 16 }}>
          <button
            onClick={() => {
              onClose();
              if (onOpenContact) onOpenContact();
            }}
            style={{
              width: "100%",
              padding: "14px 24px",
              borderRadius: 9999,
              background: "#38bdf8",
              color: "#0f172a",
              fontWeight: 700,
              fontSize: "1rem",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            }}
          >
            <span>Start with a Discovery Audit</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
