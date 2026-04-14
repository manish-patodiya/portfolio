"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="mb-12 max-w-2xl md:mb-16">
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/90"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-slate-50 md:text-4xl lg:text-5xl"
      >
        <span className="text-gradient">{title}</span>
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-3 text-base text-slate-400 md:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
