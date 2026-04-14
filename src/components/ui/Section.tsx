import type { ReactNode } from "react";

type Props = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, children, className = "" }: Props) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 px-4 py-20 md:scroll-mt-28 md:px-6 md:py-28 ${className}`}
    >
      {children}
    </section>
  );
}
