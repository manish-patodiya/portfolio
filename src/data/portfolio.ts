export const owner = {
  name: "Manish Patodiya",
  role: "AI Engineer",
  tagline: "Building intelligent systems for real-world impact",
};

export const social = {
  github: "https://github.com/manish-patodiya/",
  linkedin: "https://linkedin.com/in/manish-patodiya",
};

export type ProjectKind = "case-study" | "enterprise";

export type ProjectLinks = {
  github?: string;
  demo?: string;
  /** URL slug for `/portfolio/[slug]`; if omitted, title is slugified. */
  caseStudy?: string;
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  impact: string;
  links: ProjectLinks;
  /** Shown as “Case Study” or “Enterprise Project” on the case page. */
  kind: ProjectKind;
  /** Markdown body for the case study detail page. */
  caseStudyContent?: string;
  architecture?: string;
  challenges?: string;
  learnings?: string;
};

export const journey = [
  {
    title: "The spark",
    period: "After 12th",
    description:
      "Early curiosity about how software works became a turning point—choosing to build a career around technology instead of staying on the default path.",
  },
  {
    title: "Programming Foundation",
    period: "BCA",
    description:
      "Built strong fundamentals in C, C++, Java, DBMS, and computer science concepts. First exposure to real-world programming through Java-based banking system and desktop applications.",
  },
  {
    title: "First Industry Exposure",
    period: "GeeksIT Data Solutions",
    description:
      "Started as a Full Stack Developer intern and quickly transitioned into production development using PHP, JavaScript, MySQL, and AWS. Delivered multiple client applications and gained end-to-end system ownership.",
  },
  {
    title: "Engineering Growth",
    period: "MCA",
    description:
      "Strengthened DSA, software engineering, and communication skills. Won multiple hackathons and achieved strong academic performance (CGPA 9.5), building confidence in system design and problem solving.",
  },
  {
    title: "Enterprise Engineering",
    period: "MSG Global Solutions (Internship)",
    description:
      "Developed MSG Sports, a full-stack enterprise platform using React, Node.js, and MySQL that reduced manual effort in tournament management by ~80% and was recognized by leadership.",
  },
  {
    title: "AI Transformation",
    period: "MSG Global Solutions (Full-Time)",
    description:
      "Evolved from L2 support engineer to AI Engineer by building Snow-Vision, an enterprise AI platform integrating LLMs, RAG pipelines, RAG Agent, vector search, and knowledge graphs for intelligent workflow automation.",
  },
];

export const skillCategories = [
  {
    name: "AI Engineering",
    items: [
      "Python",
      "Playwright Automation",
      "Typescript",
      "LLMs",
      "RAG",
      "LangChain",
      "LangGraph",
      "GraphRAGs",
      "AI Agents",
      "RAG Agents",
      "Vector Databases",
      "Knowledge Graphs",
      "BM25 Search",
    ],
    accent: "from-cyan-500/30 to-violet-500/30",
  },
  {
    name: "Full Stack Development",
    items: ["React", "Next.js", "Node.js", "TypeScript", "Express"],
    accent: "from-violet-500/30 to-fuchsia-500/30",
  },
  {
    name: "Programming Languages",
    items: ["Python", "Java", "Javascript", "Data Structures", "OOPs"],
    accent: "from-violet-500/30 to-cyan-500/30",
  },
  {
    name: "Enterprise & SAP",
    items: ["SAP BTP", "SAP UI5", "Fiori", "CAP", "HANA DB"],
    accent: "from-fuchsia-500/30 to-cyan-500/30",
  },
  {
    name: "Backend & Databases",
    items: ["REST APIs", "MySQL", "SQL", "HANA", "System Design"],
    accent: "from-cyan-500/30 to-blue-500/30",
  },
  {
    name: "Cloud & DevOps",
    items: ["Docker", "AWS (S3, SES, SNS)", "SAP BTP Deployments"],
    accent: "from-blue-500/30 to-violet-500/30",
  },
];

export const projects: Project[] = [
  {
    title: "Snow-Vision",
    description:
      "Enterprise AI platform evolved from a productivity tool into an intelligent assistant using LLMs, RAG pipelines, RAG Agents and knowledge graphs.",
    stack: [
      "Python",
      "Playwright",
      "Next.js",
      "Node.js",
      "TypeScript",
      "ShadCN",
      "Material Tailwind",
      "LangGraph",
      "S/4 HANA DB",
      "SAP BTP",
    ],
    impact:
      "Reduced manual workflows, enabled AI-powered decision support, and significantly improved internal operational efficiency. Overtime track on the service now and jira tickets",
    kind: "enterprise",
    links: {
      caseStudy: "snow-vision",
      demo: "https://snow-vision-approuter-prod.cfapps.ap10.hana.ondemand.com/",
    },
    caseStudyContent: `## Overview

Snow-Vision started as an internal productivity surface and grew into a full **enterprise AI platform** on SAP BTP. The product combines conversational UX, retrieval-augmented generation, and workflow-aware agents so teams can move from search to action without leaving their operational context.

## What I built

- **LLM-backed assistant** with guardrails and enterprise authentication patterns.
- **RAG pipelines** over operational and domain knowledge, tuned for accuracy and latency.
- **LangGraph-style agent flows** for multi-step tasks (clarify → retrieve → act).
- **Knowledge graph–friendly** data modeling to connect entities across services.

## Outcomes

Shipped features that reduced repetitive manual work, improved response quality for internal queries, and gave leadership a credible path to scale AI-assisted operations across teams.`,
    architecture: `The platform follows a **BTP-hosted** topology: a Next.js-style front end (Material Tailwind / shadcn patterns) talks to Node services that orchestrate LLM calls, retrieval, and integrations. Vector and relational data live in **S/4 HANA–aligned** stores, with retrieval blending structured queries and semantic search. Agents are composed as graphs so steps remain inspectable and auditable—important in regulated enterprise settings.`,
    challenges: `Balancing **latency vs. depth** in RAG (more context is not always better), hardening prompts and tools for production misuse, and aligning UX expectations (“chat”) with operational reality (permissions, data freshness, and traceability).`,
    learnings: `**Evaluation loops** matter as much as model choice—golden sets, human review, and logging close the gap between demo and dependable assistant. Treating the assistant as a **workflow participant** (not just Q&A) unlocked the most durable wins.`,
  },
  {
    title: "MSG Sports",
    description:
      "Enterprise sports management platform designed to automate tournament operations and reduce manual coordination overhead.",
    stack: ["React", "Node.js", "Express", "MySQL", "Tailwind", "Material UI"],
    impact:
      "Reduced manual effort by ~80% and improved event coordination efficiency across teams.",
    kind: "enterprise",
    links: {
      github: "https://github.com/manish-patodiya/msg-sports",
      caseStudy: "msg-sports",
    },
    caseStudyContent: `## Summary

MSG Sports is a **full-stack enterprise application** for managing tournaments, teams, and schedules—replacing spreadsheets and ad-hoc communication with a single system of record.

## Highlights

- **React + Material UI** for responsive, role-aware screens.
- **Node.js / Express** APIs with clear domain boundaries.
- **MySQL** for relational integrity across events and registrations.

## Impact

Operational teams spend less time on coordination and more time delivering successful events—measured by reduced manual steps and faster issue resolution.`,
    architecture: `Classic **three-tier** layout: SPA client, REST API layer, and normalized relational schema. Auth and role checks live at the API to keep the client thin and predictable.`,
    challenges: `Modeling **edge cases** in scheduling and brackets without making the UX feel heavy.`,
    learnings: `**Progressive disclosure** in the UI—show complexity only when the user’s task requires it—kept adoption high.`,
  },
];

export const achievements = [
  {
    label: "Innovation of the Year",
    value: "2026",
    detail:
      "Recognized for standout technical contribution at MSG Global Solutions",
  },
  {
    label: "TechInterrupt Hackathon",
    value: "Top 4",
    detail: "Placed among the best teams nationally",
  },
  {
    label: "Hackathon wins",
    value: "5X",
    detail: "Back-to-back wins across competitive events.",
  },
];

export const experiences = [
  {
    company: "MSG Global Solutions",
    role: "AI Engineer / Full Stack Developer",
    period: "2024 – Present",
    highlights: [
      "Built Snow-Vision, an enterprise AI platform integrating LLMs, RAG, Ai Agents and knowledge graphs.",
      "Designed scalable AI pipelines using LangChain, LangGraph, and vector databases.",
      "Worked on SAP BTP, HANA, and enterprise-grade application architecture.",
      "Delivering AI-powered automation systems for banking domain workflows.",
    ],
    tech: [
      "LLMs",
      "RAG",
      "Ai Agents",
      "Knowledge Graphs",
      "LangGraph",
      "LangChain",
      "Vector Databases",
      "SAP BTP",
      "SAP S/4 HANA",
      "Next.js",
      "Node.js",
      "Docker",
      "shadcn",
      "material tailwind",
    ],
  },
  {
    company: "GeeksIT Data Solutions",
    role: "Full Stack Developer",
    period: "2021 – 2023",
    highlights: [
      "Built and delivered multiple production-grade web applications for clients.",
      "Worked on full-stack systems using PHP, JavaScript, MySQL, and AWS.",
      "Handled deployment, integration, and backend architecture.",
      "Contributed to end-to-end feature development and maintenance.",
    ],
    tech: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "PHP",
      "CodeIgniter",
      "AWS",
      "MySQL",
      "SQL",
      "React.js",
      "Node.js",
    ],
  },
];
