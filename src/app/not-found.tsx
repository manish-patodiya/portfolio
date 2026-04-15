import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center gap-6 px-4 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400/90">
        404
      </p>
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-slate-50 md:text-4xl">
        Page not found
      </h1>
      <p className="max-w-md text-slate-400">
        That project or route doesn&apos;t exist. Head back to the portfolio home.
      </p>
      <Link
        href="/"
        className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-100"
      >
        Back home
      </Link>
    </div>
  );
}
