import { existsSync } from "fs";
import path from "path";
import { projects } from "@/data/portfolio";
import type { Project } from "@/data/portfolio";

const MEDIA_KEYS = ["cover", "architecture", "flow"] as const;
const MEDIA_EXTS = ["webp", "png", "jpg", "jpeg"] as const;

export type ProjectMediaKey = (typeof MEDIA_KEYS)[number];

export type ProjectMedia = Partial<Record<ProjectMediaKey, string>>;

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

/**
 * Resolves case-study images from `public/projects/<slug>/`.
 * Looks for cover|architecture|flow with webp|png|jpg|jpeg; only returns keys that exist.
 */
export function resolveProjectMedia(slug: string): ProjectMedia {
  const dir = path.join(process.cwd(), "public", "projects", slug);
  const media: ProjectMedia = {};

  for (const key of MEDIA_KEYS) {
    for (const ext of MEDIA_EXTS) {
      if (existsSync(path.join(dir, `${key}.${ext}`))) {
        media[key] = `/projects/${slug}/${key}.${ext}`;
        break;
      }
    }
  }

  return media;
}
