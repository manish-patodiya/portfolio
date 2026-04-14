"use client";

import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] hidden mix-blend-screen md:block"
      aria-hidden
    >
      <div
        className="absolute h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-300"
        style={{
          left: pos.x,
          top: pos.y,
          opacity: visible ? 0.55 : 0,
          background:
            "radial-gradient(circle, rgba(34,211,238,0.14) 0%, rgba(139,92,246,0.12) 35%, transparent 70%)",
        }}
      />
    </div>
  );
}
