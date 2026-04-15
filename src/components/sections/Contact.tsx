"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Github, Linkedin, Send } from "lucide-react";
import { social } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setError(
        "Contact form is not configured. Set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY."
      );
      return;
    }

    setError(null);
    setSubmitting(true);
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          title: "Contacted through portfolio",
          name,
          time: Date.now(),
          message,
          email,
        },
        publicKey
      );
      setSent(true);
      form.reset();
      window.setTimeout(() => setSent(false), 3200);
    } catch {
      setError("Could not send your message. Please try again or reach out on LinkedIn.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Section
      id="contact"
      className="pb-28 md:pb-36 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.06),_transparent_50%)]"
    >
      <Container>
        <SectionHeading
          eyebrow="Hello"
          title="Let's build something intelligent"
          subtitle="Reach out for collaborations, opportunities, or a conversation about AI systems."
        />

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-2"
          >
            <p className="text-slate-400 leading-relaxed">
              Messages are sent securely via EmailJS. I typically reply within a few days.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all hover:scale-105 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-200 hover:shadow-[0_0_28px_rgba(34,211,238,0.35)]"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all hover:scale-105 hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-violet-200 hover:shadow-[0_0_28px_rgba(139,92,246,0.35)]"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            onSubmit={onSubmit}
            className="glass-panel lg:col-span-3 rounded-2xl p-6 md:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-slate-400">
                Name
                <input
                  name="name"
                  required
                  className="rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none ring-cyan-500/40 transition-all placeholder:text-slate-600 focus:border-cyan-400/50 focus:ring-2"
                  placeholder="Your name"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-400">
                Email
                <input
                  name="email"
                  type="email"
                  required
                  className="rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none ring-cyan-500/40 transition-all placeholder:text-slate-600 focus:border-cyan-400/50 focus:ring-2"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="mt-5 flex flex-col gap-2 text-sm text-slate-400">
              Message
              <textarea
                name="message"
                required
                rows={5}
                className="resize-y rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none ring-cyan-500/40 transition-all placeholder:text-slate-600 focus:border-cyan-400/50 focus:ring-2"
                placeholder="Tell me about your project or idea…"
              />
            </label>
            <div className="mt-6 flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-4">
                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={submitting ? undefined : { scale: 1.02 }}
                  whileTap={submitting ? undefined : { scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_32px_rgba(139,92,246,0.35)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Send className="h-4 w-4" />
                  {submitting ? "Sending…" : "Send message"}
                </motion.button>
                {sent && (
                  <motion.span
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-sm text-cyan-300"
                  >
                    Thanks—your message was sent.
                  </motion.span>
                )}
              </div>
              {error && (
                <p className="text-sm text-red-400" role="alert">
                  {error}
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </Container>
    </Section>
  );
}
