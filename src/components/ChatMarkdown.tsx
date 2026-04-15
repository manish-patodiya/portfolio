"use client";

import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import { normalizeChatMarkdownLinks } from "@/lib/normalizeChatMarkdownLinks";

type ChatMarkdownProps = {
  children?: React.ReactNode;
  /** `article` uses larger typography for case study pages. */
  variant?: "chat" | "article";
};

/** Drop react-markdown's AST `node` so it is not spread onto DOM elements. */
function omitNode<T extends { node?: unknown }>(props: T): Omit<T, "node"> {
  const { node, ...rest } = props;
  void node;
  return rest;
}

function buildMarkdownComponents(variant: "chat" | "article"): Components {
  const isArticle = variant === "article";
  const pText = isArticle ? "text-base text-slate-300/95" : "text-slate-200/95";
  const h2 = isArticle
    ? "mb-3 mt-10 text-xl font-bold text-cyan-200/95 first:mt-0 md:text-2xl"
    : "mb-1.5 mt-3 text-[15px] font-semibold text-cyan-200/95 first:mt-0";
  const h3 = isArticle
    ? "mb-2 mt-6 text-lg font-semibold text-violet-200/95"
    : "mb-1 mt-2 text-sm font-semibold text-violet-200/95";
  const h4 = isArticle
    ? "mb-2 mt-4 text-base font-medium text-slate-200"
    : "mb-1 mt-2 text-sm font-medium text-slate-200";
  const h1 = isArticle
    ? "chat-md-h1 mb-4 mt-6 border-b border-white/10 pb-2 text-2xl font-bold text-slate-50 first:mt-0 md:text-3xl"
    : "chat-md-h1 mb-2 mt-3 border-b border-white/10 pb-1 text-base font-semibold text-slate-50 first:mt-0";
  const ul = isArticle
    ? "mb-4 ml-0.5 list-disc space-y-2 pl-5 text-base text-slate-300/95 marker:text-cyan-400/90 last:mb-0"
    : "mb-2 ml-0.5 list-disc space-y-1.5 pl-4 text-slate-200/95 marker:text-cyan-400/90 last:mb-0";
  const ol = isArticle
    ? "mb-4 ml-0.5 list-decimal space-y-2 pl-5 text-base text-slate-300/95 marker:text-cyan-500/75 last:mb-0"
    : "mb-2 ml-0.5 list-decimal space-y-1.5 pl-4 text-slate-200/95 marker:text-cyan-500/75 last:mb-0";
  const p = isArticle ? `chat-md-p mb-4 ${pText} last:mb-0` : `chat-md-p mb-2 ${pText} last:mb-0`;
  const codeInline = isArticle ? "text-[0.9em]" : "text-[12px]";
  const pre = isArticle
    ? "my-4 overflow-x-auto rounded-lg border border-white/10 bg-black/40 p-4 font-mono text-sm text-slate-200"
    : "my-2 overflow-x-auto rounded-lg border border-white/10 bg-black/40 p-3 font-mono text-[12px] text-slate-200";
  const tableWrap = isArticle ? "my-4" : "my-2";
  const tableText = isArticle ? "text-sm" : "text-[12px]";

  return {
    h1: (props) => <h1 className={h1} {...omitNode(props)} />,
    h2: (props) => <h2 className={h2} {...omitNode(props)} />,
    h3: (props) => <h3 className={h3} {...omitNode(props)} />,
    h4: (props) => <h4 className={h4} {...omitNode(props)} />,
    p: (props) => <p className={p} {...omitNode(props)} />,
    ul: (props) => <ul className={ul} {...omitNode(props)} />,
    ol: (props) => <ol className={ol} {...omitNode(props)} />,
    li: (props) => (
      <li
        className="pl-0.5 [&_p]:my-1 [&_p:first-child]:mt-0 [&_p:last-child]:mb-0"
        {...omitNode(props)}
      />
    ),
    strong: (props) => (
      <strong className="font-semibold text-cyan-100" {...omitNode(props)} />
    ),
    em: (props) => <em className="italic text-slate-100/95" {...omitNode(props)} />,
    blockquote: (props) => (
      <blockquote
        className={`border-l-2 border-violet-500/50 bg-white/[0.04] py-1.5 pl-3 text-slate-300/95 ${isArticle ? "my-4 text-base" : "my-2"}`}
        {...omitNode(props)}
      />
    ),
    code: (props) => {
      const { className, children, ...rest } = omitNode(props);
      const isBlock = Boolean(className?.includes("language-"));
      if (isBlock) {
        return (
          <code className={className} {...rest}>
            {children}
          </code>
        );
      }
      return (
        <code
          className={`rounded bg-black/35 px-1.5 py-0.5 font-mono ${codeInline} text-cyan-200/90`}
          {...rest}
        >
          {children}
        </code>
      );
    },
    pre: (props) => <pre className={pre} {...omitNode(props)} />,
    a: (props) => {
      const rest = omitNode(props);
      const href = typeof rest.href === "string" ? rest.href : "";
      const internal = href.startsWith("/") && !href.startsWith("//");
      return (
        <a
          className="font-medium text-cyan-400 underline decoration-cyan-500/40 underline-offset-2 transition-colors hover:text-cyan-300"
          {...rest}
          {...(internal
            ? {}
            : { target: "_blank", rel: "noopener noreferrer" })}
        />
      );
    },
    hr: () => <hr className={isArticle ? "my-10 border-white/10" : "my-3 border-white/10"} />,
    table: (props) => (
      <div className={`${tableWrap} overflow-x-auto rounded-lg border border-white/10`}>
        <table
          className={`w-full min-w-[240px] border-collapse text-left ${tableText}`}
          {...omitNode(props)}
        />
      </div>
    ),
    thead: (props) => <thead className="bg-white/5" {...omitNode(props)} />,
    th: (props) => (
      <th
        className="border-b border-white/10 px-2 py-1.5 font-semibold text-slate-100"
        {...omitNode(props)}
      />
    ),
    td: (props) => (
      <td
        className="border-b border-white/5 px-2 py-1.5 text-slate-300"
        {...omitNode(props)}
      />
    ),
  };
}

const chatComponents = buildMarkdownComponents("chat");
const articleComponents = buildMarkdownComponents("article");

/**
 * Renders assistant chat or case study content as sanitized Markdown (GFM).
 */
export function ChatMarkdown({ children, variant = "chat" }: ChatMarkdownProps) {
  const raw = typeof children === "string" ? children : "";
  const text = normalizeChatMarkdownLinks(raw);
  const components = variant === "article" ? articleComponents : chatComponents;
  const wrapper =
    variant === "article"
      ? "chat-markdown text-slate-100 [&_.chat-md-p:first-child]:mt-0"
      : "chat-markdown text-[13px] leading-relaxed text-slate-100 [&_.chat-md-p:first-child]:mt-0";

  return (
    <div className={wrapper}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSanitize]}
        components={components}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
}
