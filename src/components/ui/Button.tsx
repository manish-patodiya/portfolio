import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

const variants = {
  glow:
    "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_32px_rgba(139,92,246,0.35)] transition-[transform,box-shadow] duration-300 hover:scale-[1.02] hover:shadow-[0_0_48px_rgba(34,211,238,0.35)] active:scale-[0.98]",
  outline:
    "inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 shadow-[0_0_20px_rgba(34,211,238,0.08)] backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10 hover:text-cyan-200 hover:shadow-[0_0_28px_rgba(34,211,238,0.2)]",
  subtle:
    "inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-slate-100 transition-all duration-300 hover:border-cyan-400/35 hover:bg-cyan-500/10 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)]",
} as const;

type Variant = keyof typeof variants;

type Common = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonAsButton = Common &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & { href?: undefined };
type ButtonAsAnchor = Common &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & { href: string };

export function Button(props: ButtonAsButton | ButtonAsAnchor) {
  const { children, variant = "glow", className = "", ...rest } = props;
  const classes = `${variants[variant]} ${className}`.trim();

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...a } = rest as ButtonAsAnchor;
    return (
      <a href={href} className={classes} {...a}>
        {children}
      </a>
    );
  }

  const b = rest as ButtonAsButton;
  return (
    <button type="button" className={classes} {...b}>
      {children}
    </button>
  );
}
