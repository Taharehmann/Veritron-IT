import { createContext, useContext } from "react";

export const LIGHT = {
  bg: "#F6F1E8", surface: "#FFFFFF", surfaceAlt: "#FBF8F2", ink: "#221E19", muted: "#6E6A5F",
  pine: "#1E4D3F", pineDk: "#143A2E", pineDeep: "#0C271F", honey: "#E0A458", honeyDk: "#CE8A38",
  sage: "#8FA890", line: "#E4DBCB", heroInk: "#EAF2EC", heroMuted: "#9DB4A6",
};

export const DARK = {
  bg: "#1E1E22", surface: "#27272B", surfaceAlt: "#2F2F34", ink: "#E8E4DF", muted: "#9B978E",
  pine: "#3B9B7A", pineDk: "#5EC9A0", pineDeep: "#16161A", honey: "#E0A458", honeyDk: "#CE8A38",
  sage: "#8FA890", line: "#3A3A3F", heroInk: "#EAF2EC", heroMuted: "#9DB4A6",
};

export const ThemeCtx = createContext(LIGHT);

export function useTheme() {
  return useContext(ThemeCtx);
}
