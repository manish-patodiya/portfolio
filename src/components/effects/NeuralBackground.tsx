"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number; r: number };

export function NeuralBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasEl = ref.current;
    if (!canvasEl) return;
    const ctxRaw = canvasEl.getContext("2d");
    if (!ctxRaw) return;
    const ctx: CanvasRenderingContext2D = ctxRaw;

    let nodes: Node[] = [];
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      const c = ref.current;
      if (!c) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      c.width = w * dpr;
      c.height = h * dpr;
      c.style.width = `${w}px`;
      c.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(90, Math.floor((w * h) / 22000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.6,
      }));
    }

    resize();
    window.addEventListener("resize", resize);

    const linkDist = 140;
    let t = 0;

    function frame() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      t += 0.008;

      ctx.fillStyle = "rgba(3, 7, 18, 0.22)";
      ctx.fillRect(0, 0, w, h);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < linkDist) {
            const alpha = (1 - d / linkDist) * 0.35;
            ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        const pulse = 0.65 + Math.sin(t + n.x * 0.01) * 0.35;
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 6);
        g.addColorStop(0, `rgba(167, 139, 250, ${0.55 * pulse})`);
        g.addColorStop(0.4, `rgba(34, 211, 238, ${0.2 * pulse})`);
        g.addColorStop(1, "rgba(3, 7, 18, 0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(226, 232, 240, ${0.85 * pulse})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(frame);
    }

    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      aria-hidden
    />
  );
}
