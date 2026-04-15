import type { ReactNode } from "react";

type Props = {
  id?: string;
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Content block for case study / long-form sections: optional heading + consistent spacing.
 */
export function SectionWrapper({
  id,
  title,
  eyebrow,
  children,
  className = "",
}: Props) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 space-y-4 ${className}`.trim()}
    >
      {(eyebrow || title) && (
        <header className="space-y-1">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/90">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-slate-50 md:text-2xl">
              {title}
            </h2>
          )}
        </header>
      )}
      {children}
    </section>
  );
}
