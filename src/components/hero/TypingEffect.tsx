"use client";

import { useEffect, useState } from "react";

const PHRASES = ["AI Engineer", "Full Stack Developer", "Problem Solver"];

export function TypingEffect() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = PHRASES[phraseIndex];
    let delay = 70;

    if (!deleting && display === full) {
      delay = 1800;
      const t = setTimeout(() => setDeleting(true), delay);
      return () => clearTimeout(t);
    }

    if (deleting && display === "") {
      delay = 400;
      const t = setTimeout(() => {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % PHRASES.length);
      }, delay);
      return () => clearTimeout(t);
    }

    delay = deleting ? 35 : 75;
    const t = setTimeout(() => {
      if (!deleting) {
        setDisplay(full.slice(0, display.length + 1));
      } else {
        setDisplay(full.slice(0, Math.max(0, display.length - 1)));
      }
    }, delay);

    return () => clearTimeout(t);
  }, [display, deleting, phraseIndex]);

  return (
    <span className="inline-block min-h-[1.2em]">
      <span className="text-gradient">{display}</span>
      <span className="ml-0.5 inline-block h-[1em] w-0.5 animate-pulse bg-cyan-400 align-[-0.15em] shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
    </span>
  );
}
