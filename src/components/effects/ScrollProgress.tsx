"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const max = doc.scrollHeight - doc.clientHeight;
      setP(max > 0 ? scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-[110] h-[3px] w-full bg-slate-900/40"
      role="progressbar"
      aria-valuenow={Math.round(p * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full w-full origin-left bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-[transform] duration-150 ease-out"
        style={{ transform: `scaleX(${p})` }}
      />
    </div>
  );
}
