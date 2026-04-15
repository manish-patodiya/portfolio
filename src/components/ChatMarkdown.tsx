"use client";

import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";

type ChatMarkdownProps = {
  children?: React.ReactNode;
};

/** Drop react-markdown's AST `node` so it is not spread onto DOM elements. */
function omitNode<T extends { node?: unknown }>(props: T): Omit<T, "node"> {
  const { node, ...rest } = props;
  void node;
  return rest;
}

const markdownComponents: Components = {
  h1: (props) => (
    <h1
      className="chat-md-h1 mb-2 mt-3 border-b border-white/10 pb-1 text-base font-semibold text-slate-50 first:mt-0"
      {...omitNode(props)}
    />
  ),
  h2: (props) => (
    <h2
      className="mb-1.5 mt-3 text-[15px] font-semibold text-cyan-200/95 first:mt-0"
      {...omitNode(props)}
    />
  ),
  h3: (props) => (
    <h3
      className="mb-1 mt-2 text-sm font-semibold text-violet-200/95"
      {...omitNode(props)}
    />
  ),
  h4: (props) => (
    <h4
      className="mb-1 mt-2 text-sm font-medium text-slate-200"
      {...omitNode(props)}
    />
  ),
  p: (props) => (
    <p
      className="chat-md-p mb-2 text-slate-200/95 last:mb-0"
      {...omitNode(props)}
    />
  ),
  ul: (props) => (
    <ul
      className="mb-2 ml-0.5 list-disc space-y-1.5 pl-4 text-slate-200/95 marker:text-cyan-400/90 last:mb-0"
      {...omitNode(props)}
    />
  ),
  ol: (props) => (
    <ol
      className="mb-2 ml-0.5 list-decimal space-y-1.5 pl-4 text-slate-200/95 marker:text-cyan-500/75 last:mb-0"
      {...omitNode(props)}
    />
  ),
  li: (props) => (
    <li
      className="pl-0.5 [&_p]:my-1 [&_p:first-child]:mt-0 [&_p:last-child]:mb-0"
      {...omitNode(props)}
    />
  ),
  strong: (props) => (
    <strong className="font-semibold text-cyan-100" {...omitNode(props)} />
  ),
  em: (props) => (
    <em className="italic text-slate-100/95" {...omitNode(props)} />
  ),
  blockquote: (props) => (
    <blockquote
      className="my-2 border-l-2 border-violet-500/50 bg-white/[0.04] py-1.5 pl-3 text-slate-300/95"
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
        className="rounded bg-black/35 px-1.5 py-0.5 font-mono text-[12px] text-cyan-200/90"
        {...rest}
      >
        {children}
      </code>
    );
  },
  pre: (props) => (
    <pre
      className="my-2 overflow-x-auto rounded-lg border border-white/10 bg-black/40 p-3 font-mono text-[12px] text-slate-200"
      {...omitNode(props)}
    />
  ),
  a: (props) => (
    <a
      className="font-medium text-cyan-400 underline decoration-cyan-500/40 underline-offset-2 transition-colors hover:text-cyan-300"
      target="_blank"
      rel="noopener noreferrer"
      {...omitNode(props)}
    />
  ),
  hr: () => <hr className="my-3 border-white/10" />,
  table: (props) => (
    <div className="my-2 overflow-x-auto rounded-lg border border-white/10">
      <table
        className="w-full min-w-[240px] border-collapse text-left text-[12px]"
        {...omitNode(props)}
      />
    </div>
  ),
  thead: (props) => (
    <thead className="bg-white/5" {...omitNode(props)} />
  ),
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

/**
 * Renders assistant chat content as sanitized Markdown (GFM: lists, bold, tables).
 */
export function ChatMarkdown({ children }: ChatMarkdownProps) {
  const text = typeof children === "string" ? children : "";

  return (
    <div className="chat-markdown text-[13px] leading-relaxed text-slate-100 [&_.chat-md-p:first-child]:mt-0">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSanitize]}
        components={markdownComponents}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
}
