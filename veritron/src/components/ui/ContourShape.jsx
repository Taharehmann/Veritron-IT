import React from "react";

export function ContourBadge({ color = "currentColor", size = 48, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M10 25 C10 16 16 10 25 10 L45 10 C54 10 60 16 60 25 L60 35 C60 44 66 50 75 50 L85 50 C94 50 100 56 100 65 L100 75 C100 84 94 90 85 90 L65 90 C56 90 50 84 50 75 L50 65 C50 56 44 50 35 50 L25 50 C16 50 10 44 10 35 Z" />
      <path d="M50 20 C50 14 55 10 61 10 L80 10 C89 10 95 16 95 25 L95 38 C95 44 89 50 82 50" />
      <path d="M10 65 C10 56 16 50 25 50 L35 50 C44 50 50 56 50 65 L50 85 C50 94 44 100 35 100 L20 100 C14 100 10 95 10 88 Z" />
    </svg>
  );
}

export function ContourPuzzleLines({ stroke = "rgba(255, 255, 255, 0.4)", className = "" }) {
  return (
    <svg
      viewBox="0 0 600 600"
      fill="none"
      stroke={stroke}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ width: "100%", height: "100%", maxHeight: 520 }}
    >
      {/* Organic contour compartments matching contourinteriors style */}
      <path d="M 40 40 H 260 A 40 40 0 0 1 300 80 V 160 A 40 40 0 0 1 260 200 H 140 A 40 40 0 0 0 100 240 V 360 A 40 40 0 0 1 60 400 H 40 Z" />
      <path d="M 300 40 H 520 A 40 40 0 0 1 560 80 V 220 A 40 40 0 0 1 520 260 H 420 A 40 40 0 0 0 380 300 V 340 A 40 40 0 0 1 340 380 H 300 A 40 40 0 0 1 260 340 V 80 A 40 40 0 0 1 300 40 Z" />
      <path d="M 140 240 H 340 A 40 40 0 0 1 380 280 V 380 A 40 40 0 0 1 340 420 H 220 A 40 40 0 0 0 180 460 V 520 A 40 40 0 0 1 140 560 H 60 A 40 40 0 0 1 20 520 V 420 A 40 40 0 0 1 60 380 H 100 A 40 40 0 0 0 140 340 Z" />
      <path d="M 380 320 H 500 A 40 40 0 0 1 540 360 V 520 A 40 40 0 0 1 500 560 H 380 A 40 40 0 0 1 340 520 V 420 A 40 40 0 0 1 380 380 Z" />
    </svg>
  );
}

export function ContourCardOutline({ children, borderColor = "rgba(255, 255, 255, 0.45)", background = "transparent", className = "", style = {} }) {
  return (
    <div
      className={className}
      style={{
        border: `1.5px solid ${borderColor}`,
        borderRadius: "32px",
        background: background,
        padding: "clamp(24px, 4vw, 44px)",
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
