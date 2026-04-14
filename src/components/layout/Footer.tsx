import { owner } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-500">
      <p>
        © {new Date().getFullYear()} {owner.name}. Crafted with Next.js & Framer Motion.
      </p>
    </footer>
  );
}
