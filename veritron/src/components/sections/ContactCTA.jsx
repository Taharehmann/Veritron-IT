import React, { useState } from "react";
import {
  Phone, ArrowRight, Mail, User, Building2,
  MessageSquare, CheckCircle2, Sparkles, Send, Briefcase,
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import useScreen from "../../hooks/useScreen";
import { DISPLAY } from "../../constants/typography";
import Reveal from "../ui/Reveal";

const SERVICES = [
  "Managed IT",
  "Cloud & Email Solutions",
  "Network Solutions",
  "Hardware & Procurement",
  "Not sure — help me decide",
];

function FormInput({ icon: Icon, label, name, type = "text", required, value, onChange, placeholder, C, isMobile, isDark }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <label
        htmlFor={name}
        style={{
          display: "block",
          fontSize: ".78rem",
          fontWeight: 600,
          letterSpacing: ".06em",
          color: focused ? C.pine : C.muted,
          marginBottom: 6,
          transition: "color .2s ease",
        }}
      >
        {label} {required && <span style={{ color: isDark ? "#f87171" : "#ef4444" }}>*</span>}
      </label>
      <div style={{ position: "relative" }}>
        <Icon
          size={17}
          style={{
            position: "absolute",
            left: 14,
            top: "50%",
            transform: "translateY(-50%)",
            color: focused ? C.pine : C.muted,
            transition: "color .2s ease",
            pointerEvents: "none",
          }}
        />
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: "100%",
            padding: isMobile ? "13px 14px 13px 42px" : "15px 16px 15px 44px",
            background: isDark ? "rgba(30, 41, 59, 0.6)" : "rgba(255, 255, 255, 0.8)",
            border: `1.5px solid ${focused ? C.pine : C.line}`,
            borderRadius: 14,
            color: C.ink,
            fontSize: isMobile ? ".92rem" : ".98rem",
            fontFamily: "inherit",
            outline: "none",
            transition: "border-color .2s ease, box-shadow .2s ease, background .2s ease",
            boxShadow: focused
              ? isDark
                ? "0 0 0 3px rgba(56, 189, 248, 0.15)"
                : "0 0 0 3px rgba(37, 99, 235, 0.1)"
              : "none",
            boxSizing: "border-box",
          }}
        />
      </div>
    </div>
  );
}

function FormSelect({ icon: Icon, label, name, required, value, onChange, options, placeholder, C, isMobile, isDark }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <label
        htmlFor={name}
        style={{
          display: "block",
          fontSize: ".78rem",
          fontWeight: 600,
          letterSpacing: ".06em",
          color: focused ? C.pine : C.muted,
          marginBottom: 6,
          transition: "color .2s ease",
        }}
      >
        {label} {required && <span style={{ color: isDark ? "#f87171" : "#ef4444" }}>*</span>}
      </label>
      <div style={{ position: "relative" }}>
        <Icon
          size={17}
          style={{
            position: "absolute",
            left: 14,
            top: "50%",
            transform: "translateY(-50%)",
            color: focused ? C.pine : C.muted,
            transition: "color .2s ease",
            pointerEvents: "none",
          }}
        />
        <select
          id={name}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: "100%",
            padding: isMobile ? "13px 14px 13px 42px" : "15px 16px 15px 44px",
            background: isDark ? "rgba(30, 41, 59, 0.6)" : "rgba(255, 255, 255, 0.8)",
            border: `1.5px solid ${focused ? C.pine : C.line}`,
            borderRadius: 14,
            color: value ? C.ink : C.muted,
            fontSize: isMobile ? ".92rem" : ".98rem",
            fontFamily: "inherit",
            outline: "none",
            cursor: "pointer",
            appearance: "none",
            WebkitAppearance: "none",
            transition: "border-color .2s ease, box-shadow .2s ease",
            boxShadow: focused
              ? isDark
                ? "0 0 0 3px rgba(56, 189, 248, 0.15)"
                : "0 0 0 3px rgba(37, 99, 235, 0.1)"
              : "none",
            boxSizing: "border-box",
          }}
        >
          <option value="" disabled>{placeholder}</option>
          {options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
        {/* Custom dropdown arrow */}
        <div
          style={{
            position: "absolute",
            right: 14,
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
            color: C.muted,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FormTextarea({ icon: Icon, label, name, required, value, onChange, placeholder, C, isMobile, isDark }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <label
        htmlFor={name}
        style={{
          display: "block",
          fontSize: ".78rem",
          fontWeight: 600,
          letterSpacing: ".06em",
          color: focused ? C.pine : C.muted,
          marginBottom: 6,
          transition: "color .2s ease",
        }}
      >
        {label}
      </label>
      <div style={{ position: "relative" }}>
        <Icon
          size={17}
          style={{
            position: "absolute",
            left: 14,
            top: 16,
            color: focused ? C.pine : C.muted,
            transition: "color .2s ease",
            pointerEvents: "none",
          }}
        />
        <textarea
          id={name}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={4}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: "100%",
            padding: isMobile ? "13px 14px 13px 42px" : "15px 16px 15px 44px",
            background: isDark ? "rgba(30, 41, 59, 0.6)" : "rgba(255, 255, 255, 0.8)",
            border: `1.5px solid ${focused ? C.pine : C.line}`,
            borderRadius: 14,
            color: C.ink,
            fontSize: isMobile ? ".92rem" : ".98rem",
            fontFamily: "inherit",
            outline: "none",
            resize: "vertical",
            minHeight: 110,
            transition: "border-color .2s ease, box-shadow .2s ease",
            boxShadow: focused
              ? isDark
                ? "0 0 0 3px rgba(56, 189, 248, 0.15)"
                : "0 0 0 3px rgba(37, 99, 235, 0.1)"
              : "none",
            boxSizing: "border-box",
          }}
        />
      </div>
    </div>
  );
}

/* ── Toast Notification ── */
function Toast({ visible, onClose, name, C, isDark }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 24,
        right: 24,
        zIndex: 9999,
        transform: visible ? "translateX(0)" : "translateX(calc(100% + 40px))",
        opacity: visible ? 1 : 0,
        transition: "transform .5s cubic-bezier(.2,.8,.2,1), opacity .4s ease",
        pointerEvents: visible ? "auto" : "none",
        maxWidth: 400,
        width: "calc(100vw - 48px)",
      }}
    >
      <div
        style={{
          background: isDark ? "#1e293b" : "#ffffff",
          border: `1px solid ${isDark ? "rgba(0, 240, 255, 0.3)" : "rgba(37, 99, 235, 0.2)"}`,
          borderRadius: 18,
          padding: "18px 20px",
          boxShadow: isDark
            ? "0 20px 50px -12px rgba(0, 0, 0, 0.7), 0 0 30px rgba(0, 240, 255, 0.1)"
            : "0 20px 50px -12px rgba(37, 99, 235, 0.25), 0 0 0 1px rgba(37, 99, 235, 0.05)",
          display: "flex",
          alignItems: "flex-start",
          gap: 14,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 3,
            background: isDark
              ? "linear-gradient(90deg, #00f0ff, #38bdf8)"
              : "linear-gradient(90deg, #2563eb, #38bdf8)",
            borderRadius: "18px 18px 0 0",
          }}
        />
        {/* Progress bar that shrinks over 5s */}
        {visible && (
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              height: 3,
              background: isDark
                ? "rgba(0, 240, 255, 0.3)"
                : "rgba(37, 99, 235, 0.2)",
              borderRadius: "0 0 18px 18px",
              animation: "toast-progress 5s linear forwards",
            }}
          />
        )}
        {/* Check icon */}
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 12,
            background: isDark
              ? "rgba(0, 240, 255, 0.1)"
              : "rgba(37, 99, 235, 0.08)",
            display: "grid",
            placeItems: "center",
            flexShrink: 0,
            marginTop: 2,
          }}
        >
          <CheckCircle2 size={22} color={isDark ? "#00f0ff" : "#2563eb"} />
        </div>
        {/* Content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontWeight: 700,
              fontSize: ".95rem",
              color: isDark ? "#f8fafc" : "#0f172a",
              marginBottom: 3,
            }}
          >
            Request submitted! ✨
          </div>
          <div
            style={{
              fontSize: ".84rem",
              color: isDark ? "#94a3b8" : "#64748b",
              lineHeight: 1.45,
            }}
          >
            Thanks{name ? `, ${name}` : ""}! We'll get back to you shortly.
          </div>
        </div>
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close notification"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: isDark ? "#64748b" : "#94a3b8",
            padding: 4,
            marginTop: -2,
            marginRight: -4,
            borderRadius: 8,
            display: "grid",
            placeItems: "center",
            transition: "color .2s ease",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = isDark ? "#f8fafc" : "#0f172a")}
          onMouseLeave={(e) => (e.currentTarget.style.color = isDark ? "#64748b" : "#94a3b8")}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <style>{`
        @keyframes toast-progress {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  );
}

export default function ContactCTA() {
  const C = useTheme();
  const { isMobile, isMd } = useScreen();
  const isDark = C.isDark;
  const px = isMobile ? 16 : 24;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastName, setToastName] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    const payload = {
      "form-name": "contact",
      "bot-field": "",
      name: form.name,
      email: form.email,
      phone: form.phone || "",
      company: form.company || "",
      service: form.service,
      message: form.message || "",
    };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(payload).toString(),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Form submission failed: " + res.status);
        setSending(false);
        setSubmitted(true);
        setToastName(form.name);
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 5000);
      })
      .catch((err) => {
        console.error(err);
        setSending(false);
        alert("Something went wrong. Please try again or email us directly at info@veritron.com.au");
      });
  };

  const formProps = { C, isMobile, isDark };

  return (
    <>
      <Toast
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
        name={toastName}
        C={C}
        isDark={isDark}
      />
    <section id="contact" style={{ padding: isMobile ? "60px 0" : "100px 0" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: `0 ${px}px` }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMd ? "1fr 1fr" : "1fr",
            gap: isMobile ? 32 : 48,
            alignItems: "start",
          }}
        >
          {/* ─── Left Column: Info ─── */}
          <Reveal>
            <div style={{ position: "sticky", top: 100 }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: isDark ? "rgba(0, 240, 255, 0.08)" : "rgba(37, 99, 235, 0.07)",
                  border: `1px solid ${isDark ? "rgba(0, 240, 255, 0.25)" : "rgba(37, 99, 235, 0.18)"}`,
                  borderRadius: 999,
                  padding: "6px 16px",
                  marginBottom: 20,
                }}
              >
                <Sparkles size={14} color={C.pine} />
                <span
                  style={{
                    fontSize: ".72rem",
                    fontWeight: 700,
                    letterSpacing: ".16em",
                    textTransform: "uppercase",
                    color: C.pine,
                  }}
                >
                  Free IT Health Check
                </span>
              </div>

              <h2
                style={{
                  fontFamily: DISPLAY,
                  fontWeight: 700,
                  fontSize: "clamp(1.8rem, 4vw, 3rem)",
                  lineHeight: 1.1,
                  color: C.ink,
                  marginBottom: 16,
                }}
              >
                Let's look after{" "}
                <span style={{ color: C.pine }}>your systems.</span>
              </h2>

              <p
                style={{
                  color: C.muted,
                  fontSize: isMobile ? ".98rem" : "1.1rem",
                  lineHeight: 1.7,
                  maxWidth: "46ch",
                  marginBottom: 36,
                }}
              >
                Fill in the form and our team will get back to you within a few hours with a tailored plan — no strings attached.
              </p>

              {/* Contact cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
                {[
                  {
                    icon: Mail,
                    label: "Email us",
                    value: "info@veritron.com.au",
                    href: "mailto:info@veritron.com.au",
                  },
                  {
                    icon: Phone,
                    label: "Call us",
                    value: "+61 450 513 399",
                    href: "tel:61450513399",
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: "14px 18px",
                      background: C.surface,
                      border: `1px solid ${C.line}`,
                      borderRadius: 16,
                      textDecoration: "none",
                      color: C.ink,
                      transition: "all .25s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = C.pine;
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = isDark
                        ? "0 8px 25px -8px rgba(0,0,0,.4)"
                        : "0 8px 25px -8px rgba(37,99,235,.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = C.line;
                      e.currentTarget.style.transform = "none";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <span
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 12,
                        background: isDark ? "rgba(0, 240, 255, 0.1)" : "rgba(37, 99, 235, 0.08)",
                        display: "grid",
                        placeItems: "center",
                        flexShrink: 0,
                      }}
                    >
                      <item.icon size={20} color={C.pine} />
                    </span>
                    <div>
                      <div style={{ fontSize: ".78rem", fontWeight: 600, color: C.muted, marginBottom: 2 }}>
                        {item.label}
                      </div>
                      <div style={{ fontWeight: 600, fontSize: ".98rem" }}>{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Trust badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {["Free assessment", "No obligations", "Same-day response"].map((badge) => (
                  <span
                    key={badge}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "6px 14px",
                      borderRadius: 999,
                      background: isDark ? "rgba(56, 189, 248, 0.08)" : "rgba(37, 99, 235, 0.06)",
                      border: `1px solid ${isDark ? "rgba(56, 189, 248, 0.15)" : "rgba(37, 99, 235, 0.12)"}`,
                      fontSize: ".78rem",
                      fontWeight: 600,
                      color: C.pine,
                    }}
                  >
                    <CheckCircle2 size={13} /> {badge}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ─── Right Column: Form ─── */}
          <Reveal delay={150}>
            <div
              style={{
                background: C.surface,
                border: `1px solid ${C.line}`,
                borderRadius: isMobile ? 20 : 24,
                padding: isMobile ? "28px 20px" : "36px 32px",
                boxShadow: isDark
                  ? "0 25px 60px -15px rgba(0, 0, 0, 0.5)"
                  : "0 25px 60px -15px rgba(37, 99, 235, 0.12)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Subtle glow */}
              <div
                style={{
                  position: "absolute",
                  width: 300,
                  height: 300,
                  borderRadius: "50%",
                  background: isDark ? "rgba(0, 240, 255, 0.06)" : "rgba(37, 99, 235, 0.04)",
                  filter: "blur(80px)",
                  top: -100,
                  right: -80,
                  pointerEvents: "none",
                }}
              />

              {!submitted ? (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  style={{ position: "relative", zIndex: 2 }}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p hidden>
                    <label>Don't fill this out: <input name="bot-field" /></label>
                  </p>
                  <h3
                    style={{
                      fontFamily: DISPLAY,
                      fontWeight: 600,
                      fontSize: isMobile ? "1.2rem" : "1.4rem",
                      color: C.ink,
                      marginBottom: 4,
                    }}
                  >
                    Book your free IT check
                  </h3>
                  <p
                    style={{
                      color: C.muted,
                      fontSize: isMobile ? ".85rem" : ".92rem",
                      marginBottom: isMobile ? 24 : 28,
                      lineHeight: 1.5,
                    }}
                  >
                    Tell us about your business and we'll prepare a tailored assessment.
                  </p>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                      gap: isMobile ? 16 : 18,
                      marginBottom: isMobile ? 16 : 18,
                    }}
                  >
                    <FormInput
                      icon={User}
                      label="Full Name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      {...formProps}
                    />
                    <FormInput
                      icon={Mail}
                      label="Email Address"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com.au"
                      {...formProps}
                    />
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                      gap: isMobile ? 16 : 18,
                      marginBottom: isMobile ? 16 : 18,
                    }}
                  >
                    <FormInput
                      icon={Phone}
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+61 400 000 000"
                      {...formProps}
                    />
                    <FormInput
                      icon={Building2}
                      label="Company Name"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company Pty Ltd"
                      {...formProps}
                    />
                  </div>

                  <div style={{ marginBottom: isMobile ? 16 : 18 }}>
                    <FormSelect
                      icon={Briefcase}
                      label="Service Interested In"
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      options={SERVICES}
                      placeholder="Select a service..."
                      {...formProps}
                    />
                  </div>

                  <div style={{ marginBottom: isMobile ? 24 : 28 }}>
                    <FormTextarea
                      icon={MessageSquare}
                      label="Tell us about your IT setup (optional)"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="e.g. We have 15 staff, use Microsoft 365, and need better backup and network monitoring..."
                      {...formProps}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-interactive"
                    style={{
                      width: "100%",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      background: sending
                        ? C.muted
                        : isDark
                          ? "linear-gradient(135deg, #0284c7 0%, #2563eb 100%)"
                          : "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                      color: "#ffffff",
                      padding: isMobile ? "15px 24px" : "17px 28px",
                      borderRadius: 16,
                      fontWeight: 700,
                      fontSize: isMobile ? "1rem" : "1.08rem",
                      border: isDark ? "1px solid rgba(0, 240, 255, 0.3)" : "none",
                      cursor: sending ? "not-allowed" : "pointer",
                      boxShadow: isDark
                        ? "0 8px 30px -6px rgba(2, 132, 199, 0.45)"
                        : "0 8px 30px -6px rgba(37, 99, 235, 0.4)",
                      transition: "all .25s ease",
                      opacity: sending ? 0.7 : 1,
                      fontFamily: "inherit",
                    }}
                  >
                    {sending ? (
                      <>
                        <span
                          style={{
                            width: 18,
                            height: 18,
                            border: "2.5px solid rgba(255,255,255,.3)",
                            borderTopColor: "#fff",
                            borderRadius: "50%",
                            animation: "contact-spin .6s linear infinite",
                          }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} /> Submit Free IT Check Request
                      </>
                    )}
                  </button>

                  <p
                    style={{
                      textAlign: "center",
                      color: C.muted,
                      fontSize: ".76rem",
                      marginTop: 14,
                      lineHeight: 1.5,
                    }}
                  >
                    🔒 Your information is secure and will never be shared with third parties.
                  </p>

                  <style>{`
                    @keyframes contact-spin {
                      to { transform: rotate(360deg); }
                    }
                  `}</style>
                </form>
              ) : (
                /* ─── Success State ─── */
                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                    textAlign: "center",
                    padding: isMobile ? "30px 10px" : "50px 20px",
                  }}
                >
                  <div
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: isDark
                        ? "linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(56, 189, 248, 0.1))"
                        : "linear-gradient(135deg, rgba(37, 99, 235, 0.12), rgba(56, 189, 248, 0.08))",
                      display: "grid",
                      placeItems: "center",
                      margin: "0 auto 20px",
                      border: `2px solid ${C.pine}`,
                    }}
                  >
                    <CheckCircle2 size={32} color={C.pine} />
                  </div>
                  <h3
                    style={{
                      fontFamily: DISPLAY,
                      fontWeight: 700,
                      fontSize: isMobile ? "1.4rem" : "1.7rem",
                      color: C.ink,
                      marginBottom: 10,
                    }}
                  >
                    Request received!
                  </h3>
                  <p
                    style={{
                      color: C.muted,
                      fontSize: isMobile ? ".95rem" : "1.05rem",
                      lineHeight: 1.65,
                      maxWidth: "40ch",
                      margin: "0 auto 28px",
                    }}
                  >
                    Thanks, <strong style={{ color: C.ink }}>{form.name}</strong>! Our team will review your details and get back to you within a few hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", phone: "", company: "", service: "", message: "" });
                    }}
                    style={{
                      background: isDark ? "rgba(56, 189, 248, 0.1)" : "rgba(37, 99, 235, 0.08)",
                      border: `1.5px solid ${C.pine}`,
                      color: C.pine,
                      padding: "12px 24px",
                      borderRadius: 999,
                      fontWeight: 600,
                      cursor: "pointer",
                      fontSize: ".95rem",
                      fontFamily: "inherit",
                      transition: "all .2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = C.pine;
                      e.currentTarget.style.color = isDark ? "#0f172a" : "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = isDark ? "rgba(56, 189, 248, 0.1)" : "rgba(37, 99, 235, 0.08)";
                      e.currentTarget.style.color = C.pine;
                    }}
                  >
                    Submit another request
                  </button>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
    </>
  );
}
