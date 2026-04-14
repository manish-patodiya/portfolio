"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Award, Trophy, Zap } from "lucide-react";

const icons = [Award, Trophy, Zap];

export function Achievements() {
  return (
    <Section
      id="achievements"
      className="bg-[radial-gradient(ellipse_at_bottom,_rgba(139,92,246,0.12),_transparent_55%)]"
    >
      <Container>
        <SectionHeading
          eyebrow="Recognition"
          title="Achievements"
          subtitle="Milestones from hackathons, innovation awards, and consistent execution."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {achievements.map((a, i) => {
            const Icon = icons[i] ?? Award;
            return (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-950 p-8 text-center shadow-[0_0_60px_rgba(34,211,238,0.08)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(34,211,238,0.15),transparent_55%)]" />
                <div className="relative mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.35)]">
                  <Icon className="h-7 w-7" aria-hidden />
                </div>
                <motion.p
                  initial={{ scale: 0.92, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.15 + i * 0.08 }}
                  className="font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight md:text-5xl"
                >
                  <span className="text-gradient">{a.value}</span>
                </motion.p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-lg font-semibold text-slate-100">
                  {a.label}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{a.detail}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
