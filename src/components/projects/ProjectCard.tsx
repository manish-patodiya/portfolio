"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Github } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/portfolio";
type Props = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: Props) {
  const { links } = project;
  const hasGithub = Boolean(links.github);
  const hasDemo = Boolean(links.demo);
  const hasCaseStudy = Boolean(links.caseStudy);
  const hasActions = hasGithub || hasDemo || hasCaseStudy;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-slate-950/95 p-6 shadow-[0_0_80px_rgba(34,211,238,0.06)] transition-[box-shadow,transform] duration-300 hover:shadow-[0_0_60px_rgba(139,92,246,0.18)] md:p-8"
    >
      <div className="mb-4 inline-flex w-fit rounded-full bg-fuchsia-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-fuchsia-200 ring-1 ring-fuchsia-500/30">
        Project {index + 1}
      </div>
      <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-50">
        {project.title}
      </h3>
      <p className="mt-3 flex-1 text-slate-400 leading-relaxed">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((t) => (
          <span
            key={t}
            className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-cyan-200/90"
          >
            {t}
          </span>
        ))}
      </div>

      <p className="mt-5 rounded-xl border border-white/5 bg-white/[0.03] p-4 text-sm text-slate-300 leading-relaxed">
        <span className="font-semibold text-violet-300">Impact: </span>
        {project.impact}
      </p>

      {hasActions && (
        <div className="mt-6 flex gap-3">
          {hasGithub && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-100 shadow-[0_0_16px_rgba(34,211,238,0.06)] transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-100 hover:shadow-[0_0_24px_rgba(34,211,238,0.15)] min-[380px]:flex-none"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          )}
          {hasDemo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-[transform,box-shadow] duration-300 hover:scale-[1.02] hover:shadow-[0_0_32px_rgba(139,92,246,0.35)] min-[380px]:flex-none"
            >
              Live demo
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {hasCaseStudy && links.caseStudy && (
            <Link
              href={`/portfolio/${links.caseStudy}`}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-violet-500/35 bg-violet-500/10 px-4 py-2.5 text-sm font-semibold text-violet-100 shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all duration-300 hover:border-violet-400/55 hover:bg-violet-500/20 hover:shadow-[0_0_28px_rgba(139,92,246,0.28)] min-[380px]:flex-none"
            >
              <BookOpen className="h-4 w-4" />
              View Case Study
            </Link>
          )}
        </div>
      )}
    </motion.article>
  );
}
