"use client";

import { motion } from "framer-motion";
import { Download, Github, Linkedin } from "lucide-react";
import { owner, social } from "@/data/portfolio";
import { TypingEffect } from "@/components/hero/TypingEffect";

const item = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * i,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col justify-center px-4 pb-24 pt-28 md:px-6 md:pb-32 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-violet-600/10" />
      <div className="relative mx-auto w-full max-w-6xl">
        <motion.p
          custom={0}
          initial="hidden"
          animate="show"
          variants={item}
          className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-slate-400"
        >
          {owner.name}
        </motion.p>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={item}
          className="font-[family-name:var(--font-display)] text-4xl font-extrabold leading-tight tracking-tight text-slate-50 sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="block text-slate-200">I&apos;m a</span>
          <span className="mt-2 block min-h-[1.15em] md:min-h-[1.1em]">
            <TypingEffect />
          </span>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={item}
          className="mt-6 max-w-xl text-lg text-slate-400 md:text-xl"
        >
          {owner.tagline}
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="show"
          variants={item}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_40px_rgba(139,92,246,0.35)] transition-[transform,box-shadow] duration-300 hover:scale-[1.02] hover:shadow-[0_0_52px_rgba(34,211,238,0.35)] active:scale-[0.98]"
          >
            <span className="relative z-10">View Projects</span>
            <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-slate-100 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10 hover:text-cyan-200"
          >
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            download
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-cyan-500/35 bg-cyan-500/10 px-8 py-3.5 text-sm font-semibold text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.2)] transition-[transform,box-shadow] duration-300 hover:scale-[1.02] hover:border-cyan-400/50 hover:bg-cyan-500/15 hover:shadow-[0_0_40px_rgba(34,211,238,0.35)] active:scale-[0.98]"
          >
            <Download className="relative z-10 h-4 w-4" aria-hidden />
            <span className="relative z-10">Download Resume</span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>
        </motion.div>

        <motion.div
          custom={4}
          initial="hidden"
          animate="show"
          variants={item}
          className="mt-12 flex items-center gap-4"
        >
          <span className="text-sm text-slate-500">Connect</span>
          <div className="flex gap-3">
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300 transition-all hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-200 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300 transition-all hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-violet-200 hover:shadow-[0_0_24px_rgba(139,92,246,0.35)]"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
        aria-hidden
      >
        <div className="flex h-12 w-7 justify-center rounded-full border border-white/15 pt-2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="h-2 w-1 rounded-full bg-cyan-400/80"
          />
        </div>
      </motion.div>
    </section>
  );
}
