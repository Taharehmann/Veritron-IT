import React from "react";
import useScreen from "../../hooks/useScreen";

export default function WhatsAppButton() {
  const { isMobile } = useScreen();

  return (
    <>
      <a
        href="https://wa.me/61450513399"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          position: "fixed",
          bottom: isMobile ? 20 : 28,
          right: isMobile ? 20 : 28,
          zIndex: 999,
          width: isMobile ? 54 : 62,
          height: isMobile ? 54 : 62,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #25D366, #128C7E)",
          display: "grid",
          placeItems: "center",
          boxShadow: "0 6px 24px rgba(37,211,102,.45), 0 2px 8px rgba(0,0,0,.15)",
          cursor: "pointer",
          transition: "transform .25s ease, box-shadow .25s ease",
          textDecoration: "none",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(37,211,102,.55), 0 4px 12px rgba(0,0,0,.2)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(37,211,102,.45), 0 2px 8px rgba(0,0,0,.15)"; }}
      >
        {/* Pulse ring */}
        <span style={{
          position: "absolute",
          inset: -4,
          borderRadius: "50%",
          border: "2px solid rgba(37,211,102,.4)",
          animation: "waPulse 2.2s ease-out infinite",
        }} />
        {/* WhatsApp icon */}
        <svg width={isMobile ? 28 : 32} height={isMobile ? 28 : 32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.004 2.667A13.28 13.28 0 0 0 2.72 15.95a13.18 13.18 0 0 0 1.78 6.62L2.667 29.333l6.96-1.82A13.28 13.28 0 0 0 16.004 29.3 13.28 13.28 0 0 0 29.333 16 13.28 13.28 0 0 0 16.004 2.667Zm0 24.266a10.88 10.88 0 0 1-5.56-1.52l-.4-.24-4.12 1.08 1.1-4.02-.26-.42a10.87 10.87 0 0 1-1.67-5.8 10.92 10.92 0 0 1 10.92-10.92A10.92 10.92 0 0 1 26.933 16a10.92 10.92 0 0 1-10.93 10.933Zm5.98-8.18c-.33-.16-1.94-.96-2.24-1.07-.3-.1-.52-.16-.74.17s-.85 1.07-1.04 1.28c-.19.22-.38.24-.71.08a8.94 8.94 0 0 1-2.64-1.63 9.9 9.9 0 0 1-1.83-2.27c-.19-.33 0-.5.14-.67.14-.15.33-.38.49-.57.16-.19.22-.33.33-.55.1-.22.05-.41-.03-.57-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41s-1.14 1.12-1.14 2.72 1.17 3.16 1.33 3.38c.16.22 2.3 3.52 5.58 4.93.78.34 1.39.54 1.86.69.78.25 1.49.21 2.06.13.63-.1 1.94-.79 2.21-1.56.27-.77.27-1.43.19-1.56-.08-.14-.3-.22-.63-.38Z" fill="#fff"/>
        </svg>
      </a>
      <style>{`@keyframes waPulse{0%{transform:scale(1);opacity:.6}70%{transform:scale(1.35);opacity:0}100%{transform:scale(1.35);opacity:0}}`}</style>
    </>
  );
}
