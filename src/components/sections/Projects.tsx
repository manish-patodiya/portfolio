"use client";

import { projects } from "@/data/portfolio";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  return (
    <Section id="projects">
      <Container>
        <SectionHeading
          eyebrow="Work"
          title="Featured projects"
          subtitle="High-impact builds across AI platforms and enterprise sports technology."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
