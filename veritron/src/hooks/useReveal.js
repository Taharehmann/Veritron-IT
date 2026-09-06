import { useRef, useState, useEffect } from "react";

export default function useReveal(opts = {}) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let io = null;
    const startObserving = () => {
      if (io) return;
      io = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            setSeen(true);
            io.disconnect();
          }
        },
        { threshold: opts.threshold ?? 0.15 }
      );
      io.observe(el);
    };

    if (window.__VERITRON_LOADED) {
      startObserving();
    } else {
      const handler = () => {
        startObserving();
      };
      window.addEventListener("veritron:loaded", handler);
      return () => {
        window.removeEventListener("veritron:loaded", handler);
        if (io) io.disconnect();
      };
    }

    return () => {
      if (io) io.disconnect();
    };
  }, [opts.threshold]);

  return [ref, seen];
}
