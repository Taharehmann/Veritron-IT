import { useState, useEffect } from "react";

export default function usePreloaderDone() {
  const [done, setDone] = useState(() => !!window.__VERITRON_LOADED);

  useEffect(() => {
    if (window.__VERITRON_LOADED) {
      setDone(true);
      return;
    }
    const handler = () => setDone(true);
    window.addEventListener("veritron:loaded", handler);
    return () => window.removeEventListener("veritron:loaded", handler);
  }, []);

  return done;
}
