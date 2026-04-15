"use client";

import { useCallback, useState } from "react";

export type ChatRole = "user" | "assistant";

export type ChatMessage = {
  role: ChatRole;
  content: string;
};

const WELCOME: ChatMessage = {
  role: "assistant",
  content:
    "Hi — you're chatting with Manish's portfolio AI. I'll answer as Manish, using my public profile only. Ask about my journey, AI skills, Snow-Vision, projects, or experience.",
};

type ChatApiResponse = {
  reply?: string;
  error?: string;
};

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>(() => [WELCOME]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(
    async (rawText: string) => {
      const text = typeof rawText === "string" ? rawText.trim() : "";
      if (!text || loading) return;

      setError(null);
      const userMsg: ChatMessage = { role: "user", content: text };
      setMessages((prev) => [...prev, userMsg]);
      setLoading(true);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: text }),
        });

        const data = (await res.json().catch(() => ({}))) as ChatApiResponse;

        if (!res.ok) {
          const errMsg =
            typeof data?.error === "string"
              ? data.error
              : `Request failed (${res.status})`;
          throw new Error(errMsg);
        }

        const reply = data?.reply;
        if (typeof reply !== "string" || !reply.trim()) {
          throw new Error("Invalid response from assistant.");
        }

        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: reply.trim() },
        ]);
      } catch (e) {
        const msg = e instanceof Error ? e.message : "Something went wrong.";
        setError(msg);
      } finally {
        setLoading(false);
      }
    },
    [loading],
  );

  const clearError = useCallback(() => setError(null), []);

  return { messages, sendMessage, loading, error, clearError };
}
