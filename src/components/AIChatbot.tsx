"use client";

import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent, SyntheticEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";
import { useChat } from "@/hooks/useChat";
import { ChatMarkdown } from "@/components/ChatMarkdown";

const SUGGESTED = [
  "Tell me about Manish",
  "What is Snow-Vision?",
  "What are his AI skills?",
  "Show his projects",
];

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-1 py-0.5" aria-hidden>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-cyan-400/90"
          animate={{ opacity: [0.35, 1, 0.35], y: [0, -3, 0] }}
          transition={{
            duration: 0.9,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, sendMessage, loading, error, clearError } = useChat();
  const bottomRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, open]);

  async function handleSubmit(e?: SyntheticEvent) {
    e?.preventDefault();
    const t = input.trim();
    if (!t || loading) return;
    setInput("");
    await sendMessage(t);
  }

  function onKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void handleSubmit(e);
    }
  }

  return (
    <>
      <AnimatePresence>
        {!open && (
          <motion.button
            type="button"
            key="chat-launcher"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => {
              setOpen(true);
              clearError();
            }}
            className="fixed z-50 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 text-white shadow-[0_0_48px_rgba(139,92,246,0.5)] ring-2 ring-cyan-400/30 [bottom:20px] [right:20px]"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            aria-label="Open career AI assistant"
          >
            <MessageCircle className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="fixed inset-0 z-[100] bg-[#0a0a0a]/70 backdrop-blur-[2px] md:bg-[#0a0a0a]/60"
              aria-label="Close chat overlay"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.96 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="fixed z-[101] flex max-h-[min(85dvh,640px)] w-[min(100vw-2.5rem,420px)] flex-col overflow-hidden rounded-2xl border border-cyan-500/25 bg-[#0a0a0a]/92 shadow-[0_0_0_1px_rgba(139,92,246,0.15),0_24px_80px_rgba(0,0,0,0.65),0_0_60px_rgba(34,211,238,0.12)] backdrop-blur-xl [bottom:20px] [right:20px]"
              role="dialog"
              aria-modal="true"
              aria-label="Career AI assistant for Manish Patodiya"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(34,211,238,0.12),transparent_50%),radial-gradient(ellipse_at_80%_100%,rgba(139,92,246,0.14),transparent_45%)]" />

              <div className="relative flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-cyan-500/10 via-transparent to-violet-600/15 px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/35 bg-cyan-500/10 shadow-[0_0_20px_rgba(34,211,238,0.25)]">
                    <Sparkles className="h-4 w-4 text-cyan-300" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-50">
                      Manish — Career AI
                    </p>
                    <p className="text-xs text-slate-500">
                      Powered by your profile + Google Gemini
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-slate-100"
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div
                ref={scrollRef}
                className="relative max-h-[min(48vh,380px)] flex-1 space-y-3 overflow-y-auto px-3 py-4 md:max-h-[min(52vh,420px)]"
              >
                {messages.map((m, i) => (
                  <motion.div
                    key={`${i}-${m.role}-${m.content.slice(0, 24)}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.22 }}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[92%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed shadow-lg ${
                        m.role === "user"
                          ? "bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-violet-900/30"
                          : "border border-white/10 bg-white/[0.06] text-slate-100 shadow-black/20"
                      }`}
                    >
                      {m.role === "assistant" ? (
                        <ChatMarkdown>{m.content}</ChatMarkdown>
                      ) : (
                        <span className="whitespace-pre-wrap">{m.content}</span>
                      )}
                    </div>
                  </motion.div>
                ))}

                {loading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="flex items-center gap-3 rounded-2xl border border-cyan-500/20 bg-white/[0.05] px-4 py-3 text-sm text-slate-300 shadow-inner shadow-cyan-500/5">
                      <TypingDots />
                      <span className="text-slate-500">AI is thinking...</span>
                    </div>
                  </motion.div>
                )}

                <div ref={bottomRef} />
              </div>

              {error && (
                <div className="relative border-t border-red-500/20 bg-red-950/40 px-3 py-2">
                  <p className="text-center text-xs text-red-200">{error}</p>
                  <button
                    type="button"
                    onClick={clearError}
                    className="mt-1 w-full text-[11px] text-red-300/80 underline-offset-2 hover:underline"
                  >
                    Dismiss
                  </button>
                </div>
              )}

              <div className="relative border-t border-white/10 bg-[#0a0a0a]/80 px-3 py-3">
                <div className="mb-3 flex flex-wrap gap-2">
                  {SUGGESTED.map((q) => (
                    <button
                      key={q}
                      type="button"
                      disabled={loading}
                      onClick={() => {
                        clearError();
                        void sendMessage(q);
                      }}
                      className="rounded-full border border-cyan-500/25 bg-cyan-500/5 px-3 py-1 text-[11px] font-medium text-cyan-200/90 transition-colors hover:border-cyan-400/50 hover:bg-cyan-500/15 disabled:opacity-40"
                    >
                      {q}
                    </button>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="flex gap-2">
                  <textarea
                    rows={1}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={onKeyDown}
                    placeholder="Ask about Manish's career..."
                    disabled={loading}
                    className="min-h-[44px] flex-1 resize-none rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-slate-100 outline-none ring-cyan-500/0 transition-[border,box-shadow] placeholder:text-slate-600 focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/25 disabled:opacity-50"
                  />
                  <motion.button
                    type="submit"
                    disabled={loading || !input.trim()}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 text-white shadow-lg shadow-violet-900/30 disabled:opacity-40"
                    aria-label="Send message"
                  >
                    <Send className="h-4 w-4" />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
