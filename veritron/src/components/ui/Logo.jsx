import React from "react";
import { useTheme } from "../../context/ThemeContext";

export default function Logo({ badge, stroke, spark, size = 40 }) {
  const C = useTheme();
  badge = badge ?? C.pine;
  stroke = stroke ?? C.bg;
  spark = spark ?? C.honey;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <rect x="6" y="6" width="88" height="88" rx="24" fill={badge} />
      <path d="M 30 30 L 50 74 L 70 30" fill="none" stroke={stroke} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="70" cy="30" r="8" fill={spark} stroke={stroke} strokeWidth="2" />
    </svg>
  );
}
