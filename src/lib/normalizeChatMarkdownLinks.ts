import { projects } from "../../data/manishProfile";

/**
 * The model sometimes wraps navigable URLs in inline code (`...`), which renders
 * as non-clickable monospace. Convert known profile URLs back to Markdown links.
 */
export function normalizeChatMarkdownLinks(markdown: string): string {
  let s = markdown;

  for (const p of projects) {
    const L = p.links;
    if (!L) continue;

    const pairs: { url: string; label: string }[] = [];
    if (L.caseStudyUrl) {
      pairs.push({
        url: L.caseStudyUrl,
        label: `${p.title} — case study`,
      });
    }
    if (typeof L.demo === "string") {
      pairs.push({
        url: L.demo,
        label: `${p.title} — live demo`,
      });
    }
    if (typeof L.github === "string") {
      pairs.push({
        url: L.github,
        label: `${p.title} — GitHub`,
      });
    }

    for (const { url, label } of pairs) {
      const esc = url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      s = s.replace(
        new RegExp("`" + esc + "`", "g"),
        `[${label}](${url})`,
      );
    }
  }

  return s;
}
