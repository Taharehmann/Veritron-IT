import { useRef, useState, useEffect } from "react";

export default function useReveal(opts = {}) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } },
      { threshold: opts.threshold ?? 0.18 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, seen];
}
