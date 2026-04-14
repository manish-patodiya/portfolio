"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Building2 } from "lucide-react";

export function Experience() {
  return (
    <Section id="experience">
      <Container>
        <SectionHeading
          eyebrow="Career"
          title="Experience"
          subtitle="Roles focused on delivery, ownership, and measurable outcomes."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {experiences.map((exp, i) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/85 to-slate-950 p-8 shadow-[0_0_70px_rgba(139,92,246,0.1)]"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-violet-600/25 to-cyan-500/10 blur-3xl transition-opacity group-hover:opacity-90" />
              <div className="relative flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-400/30 bg-violet-500/10 text-violet-200">
                  <Building2 className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400/90">
                    {exp.period}
                  </p>
                  <h3 className="mt-1 font-[family-name:var(--font-display)] text-xl font-bold text-slate-50 md:text-2xl">
                    {exp.company}
                  </h3>
                  <p className="mt-1 text-slate-300">{exp.role}</p>
                </div>
              </div>
              <ul className="relative mt-6 space-y-3 border-t border-white/10 pt-6">
                {exp.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-slate-400 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="relative mt-6 flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
