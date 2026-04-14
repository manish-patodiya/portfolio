"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Sparkles, X } from "lucide-react";

const MOCK = [
  { role: "assistant" as const, text: "Hi—I’m a static demo assistant for this portfolio. Ask about AI, RAG, or SAP stacks." },
  { role: "user" as const, text: "What do you specialize in?" },
  {
    role: "assistant" as const,
    text: "LLM applications, retrieval systems, LangChain-style orchestration, and enterprise UI5/CAP delivery.",
  },
];

export function AIChatbot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-[95] flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 text-white shadow-[0_0_40px_rgba(139,92,246,0.45)] ring-2 ring-white/20 md:bottom-8 md:right-8"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        aria-label="Open AI assistant demo"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-4 z-[95] flex w-[min(100vw-2rem,380px)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 shadow-[0_0_80px_rgba(34,211,238,0.15)] backdrop-blur-xl md:bottom-28 md:right-8"
            role="dialog"
            aria-modal="true"
            aria-label="AI assistant demo"
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-cyan-500/15 to-violet-600/15 px-4 py-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                <Sparkles className="h-4 w-4 text-cyan-300" />
                Portfolio AI (demo)
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/10 hover:text-slate-100"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="max-h-[min(55vh,420px)] space-y-3 overflow-y-auto px-4 py-4">
              {MOCK.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[90%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white"
                        : "border border-white/10 bg-white/5 text-slate-200"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 p-3">
              <p className="text-center text-xs text-slate-500">
                Static preview — connect to an API to enable real chat.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
