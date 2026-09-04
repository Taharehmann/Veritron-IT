import { createContext, useContext } from "react";

export const LIGHT = {
  isDark: false,
  bg: "#f8fafc",
  surface: "#ffffff",
  surfaceAlt: "#f1f5f9",
  ink: "#0f172a",
  muted: "#475569",
  pine: "#2563eb",
  pineDk: "#1d4ed8",
  pineDeep: "#0f172a",
  honey: "#2563eb",
  honeyDk: "#1d4ed8",
  sage: "#38bdf8",
  line: "#e2e8f0",
  heroInk: "#0f172a",
  heroMuted: "#475569",
  cyan: "#00f0ff",
  accent: "#2563eb",
};

export const DARK = {
  isDark: true,
  bg: "#0f172a",
  surface: "#1e293b",
  surfaceAlt: "rgba(30, 41, 59, 0.7)",
  ink: "#f8fafc",
  muted: "#94a3b8",
  pine: "#38bdf8",
  pineDk: "#00f0ff",
  pineDeep: "#0a0f1d",
  honey: "#38bdf8",
  honeyDk: "#00f0ff",
  sage: "#60a5fa",
  line: "rgba(255, 255, 255, 0.12)",
  heroInk: "#f8fafc",
  heroMuted: "#94a3b8",
  cyan: "#00f0ff",
  accent: "#00f0ff",
};

export const ThemeCtx = createContext(LIGHT);

export function useTheme() {
  return useContext(ThemeCtx);
}
