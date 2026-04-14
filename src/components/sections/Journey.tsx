"use client";

import { motion } from "framer-motion";
import { journey } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Journey() {
  return (
    <Section id="journey">
      <Container>
        <SectionHeading
          eyebrow="Path"
          title="The journey"
          subtitle="From curiosity to shipping AI systems—milestones that shaped how I build."
        />

        <div className="relative pl-2 md:pl-0">
          <div
            className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/85 via-violet-500/5 to-fuchsia-500/75 md:left-1/2 md:-translate-x-px"
            aria-hidden
          />

          <ul className="flex flex-col gap-14 md:gap-20">
            {journey.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <li key={step.title} className="relative list-none">
                  <div
                    className="absolute left-[15px] top-7 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-cyan-300 bg-[var(--bg-deep)] shadow-[0_0_24px_rgba(34,211,238,0.9)] md:left-1/2 md:top-8"
                    style={{ animation: "pulse-glow 2.8s ease-in-out infinite" }}
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className={`ml-10 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                      isLeft ? "md:mr-auto md:pr-4 md:text-right" : "md:ml-auto md:pl-4"
                    }`}
                  >
                    <div className="glass-panel rounded-2xl p-6 shadow-[0_0_50px_rgba(139,92,246,0.1)] md:p-8">
                      <span className="inline-block rounded-full bg-gradient-to-r from-cyan-500/20 to-violet-500/20 px-3 py-1 text-xs font-semibold text-cyan-200 ring-1 ring-white/10">
                        {step.period}
                      </span>
                      <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-bold text-slate-50 md:text-2xl">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-slate-400 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
