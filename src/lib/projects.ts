import { projects } from "@/data/portfolio";
import type { Project } from "@/data/portfolio";

export function slugifyTitle(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Resolved URL slug: explicit `links.caseStudy` or slugified title. */
export function projectSlug(project: Project): string {
  return project.links.caseStudy ?? slugifyTitle(project.title);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => projectSlug(p) === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => projectSlug(p));
}
