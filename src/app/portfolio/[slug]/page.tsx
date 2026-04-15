import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ChatMarkdown } from "@/components/ChatMarkdown";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import type { ProjectKind } from "@/data/portfolio";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";

function kindLabel(kind: ProjectKind): string {
  return kind === "case-study" ? "Case Study" : "Enterprise Project";
}

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: "Not found" };
  }
  return {
    title: `${project.title} — Case Study | Manish Patodiya`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.description,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const body =
    project.caseStudyContent?.trim() || `## Summary\n\n${project.description}`;

  return (
    <div className="min-h-[100dvh] px-4 pb-28 pt-28 md:px-6 md:pt-32">
      <Container>
        <Link
          href="/#projects"
          className="group mb-10 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-cyan-300"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
          Back to projects
        </Link>

        <header className="max-w-3xl space-y-4">
          <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-200">
            {kindLabel(project.kind)}
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-slate-50 md:text-5xl">
            {project.title}
          </h1>
          <p className="text-lg text-slate-400 md:text-xl">{project.description}</p>
        </header>

        <div className="mt-12 max-w-3xl border-t border-white/10 pt-12">
          <ChatMarkdown variant="article">{body}</ChatMarkdown>
        </div>

        <div className="mt-14 space-y-14 max-w-3xl">
          <SectionWrapper title="Tech stack" eyebrow="Stack">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-cyan-200/90"
                >
                  {t}
                </span>
              ))}
            </div>
          </SectionWrapper>

          <SectionWrapper title="Impact" eyebrow="Outcomes">
            <p className="text-base leading-relaxed text-slate-300">{project.impact}</p>
          </SectionWrapper>

          {project.architecture?.trim() && (
            <SectionWrapper title="Architecture" eyebrow="Deep dive">
              <ChatMarkdown variant="article">{project.architecture.trim()}</ChatMarkdown>
            </SectionWrapper>
          )}

          {project.challenges?.trim() && (
            <SectionWrapper title="Challenges" eyebrow="What was hard">
              <ChatMarkdown variant="article">{project.challenges.trim()}</ChatMarkdown>
            </SectionWrapper>
          )}

          {project.learnings?.trim() && (
            <SectionWrapper title="Learnings" eyebrow="Takeaways">
              <ChatMarkdown variant="article">{project.learnings.trim()}</ChatMarkdown>
            </SectionWrapper>
          )}
        </div>
      </Container>
    </div>
  );
}
