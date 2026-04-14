"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { owner } from "@/data/portfolio";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#journey", label: "Journey" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Awards" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-[90] border-b border-white/5 bg-[var(--bg-deep)]/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a
          href="#hero"
          className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-slate-100"
        >
          {owner.name.split(" ")[0]}
          <span className="text-gradient">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm text-slate-400 transition-colors hover:text-cyan-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex rounded-lg border border-white/10 p-2 text-slate-200 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-white/5 bg-[var(--bg-deep)]/95 md:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-lg px-3 py-2 text-slate-300 hover:bg-white/5 hover:text-cyan-300"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
