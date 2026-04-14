"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <Section id="skills" className="bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.08),_transparent_55%)]">
      <Container>
        <SectionHeading
          eyebrow="Stack"
          title="Skills & tools"
          subtitle="A cross-functional toolkit spanning AI, enterprise SAP, and full-stack delivery."
        />

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05, duration: 0.45 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/90 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
            >
              <div
                className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${cat.accent} opacity-40 blur-3xl transition-opacity group-hover:opacity-70`}
              />
              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-slate-50">
                {cat.name}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300 transition-colors group-hover:border-cyan-400/25 group-hover:text-cyan-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-slate-800/80">
                <motion.div
                  className="h-full origin-left rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.85,
                    delay: 0.12 + i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
