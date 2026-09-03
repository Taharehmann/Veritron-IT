import React, { useState, useEffect } from "react";
import useReveal from "../../hooks/useReveal";

export default function Counter({ to, dur = 1400, prefix = "", suffix = "", decimals = 0 }) {
  const [ref, seen] = useReveal({ threshold: 0.5 });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!seen) return;
    let raf, start;
    const step = (t) => {
      if (!start) start = t;
      const p = Math.min((t - start) / dur, 1);
      setV(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [seen, to]);
  return (
    <span ref={ref}>
      {prefix}
      {v.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
}
