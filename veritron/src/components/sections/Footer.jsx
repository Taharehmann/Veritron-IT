import React from "react";
import { useTheme } from "../../context/ThemeContext";
import useScreen from "../../hooks/useScreen";
import { DISPLAY } from "../../constants/typography";
import Logo from "../ui/Logo";

export default function Footer() {
  const C = useTheme();
  const { isMobile, isMd } = useScreen();
  const px = isMobile ? 16 : 24;

  return (
    <footer style={{ background: C.pineDeep, color: "rgba(234,242,236,.75)", padding: isMobile ? "40px 0 24px" : "60px 0 32px" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: `0 ${px}px` }}>
        <div style={{ display: "grid", gridTemplateColumns: isMd ? "repeat(4, 1fr)" : isMobile ? "1fr" : "repeat(2, 1fr)", gap: isMobile ? 28 : 40, paddingBottom: 36, borderBottom: "1px solid rgba(255,255,255,.12)" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Logo badge={C.honey} stroke={C.pineDeep} spark={C.heroInk} size={38} />
              <div style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "1.3rem", color: C.heroInk }}>Veritron</div>
            </div>
            <p style={{ marginTop: 14, fontSize: ".92rem", opacity: .8, maxWidth: "30ch" }}>The technology behind your business — quietly looked after.</p>
          </div>
          {[["Services", ["Managed IT", "Cloud & Email", "Networks", "Hardware & Procurement"]], ["Company", ["Why Veritron", "Industries", "Pricing", "Contact"]], ["Get in touch", ["hello@veritron.com.au", "[phone number]", "Melbourne & surrounds"]]].map(([h, items]) => (
            <div key={h}>
              <h4 style={{ color: C.heroInk, fontSize: ".76rem", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 14, fontWeight: 600 }}>{h}</h4>
              {items.map((x) => <a key={x} href="#top" style={{ display: "block", padding: "6px 0", fontSize: ".92rem", opacity: .82, color: "inherit" }}>{x}</a>)}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, paddingTop: 24, fontSize: ".83rem", opacity: .65, flexDirection: isMobile ? "column" : "row", textAlign: isMobile ? "center" : "left" }}>
          <span>© 2026 Veritron IT Solutions · ABN [00 000 000 000]</span>
          <span>Managed IT &amp; support for growing businesses</span>
        </div>
      </div>
    </footer>
  );
}
