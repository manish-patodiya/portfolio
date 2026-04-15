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
      "Enterprise platform for SAP PAPM: unifies ServiceNow and JIRA, automates RCA, and delivers rich analytics with interactive charts—plus a RAG-based AI Agent layer that helps developers, support, product owners, and stakeholders get answers about the app, tickets, and operations in one place.",
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
    ],
    impact:
      "Used by 150+ people across roles (developers, support, product owners, and other stakeholders). Cut manual RCA effort by ~80%, added proactive SLA alerts, unified ticket tracking across ServiceNow and JIRA, automated JIRA creation, and improved operations with shift schedules, handovers, and workload visibility. Recognized with Innovation of the Year.",
    kind: "enterprise",
    links: {
      caseStudy: "snow-vision",
      demo: "https://snow-vision-approuter-prod.cfapps.ap10.hana.ondemand.com/",
    },
    caseStudyContent: `## Problem

Anyone working on **SAP PAPM**—developers digging into issues, support handling customer tickets, product owners tracking delivery, or stakeholders reviewing health of the estate—was stuck with a fragmented toolchain: ServiceNow here, JIRA there, RCA in spreadsheets, and no shared picture. That meant context switching, SLA risk without proactive signals, heavy manual RCA (~80% repetitive work), limited insight into time and delays, and weak visibility into who was on call and how workload landed across day and night.

## Solution

I designed and built **Snow-Vision** end-to-end: one platform where **every role** can work from the same source of truth—tickets, RCA, analytics, AI assistance, and operational tooling (shifts, notifications, workload)—without jumping between disconnected systems.

## Core platform

- **Unified tickets** — ServiceNow and JIRA integrated into SAP HANA with a single dashboard for the full lifecycle.
- **RCA automation** — Pre-fills most RCA fields to remove manual copy-paste.
- **SLA monitoring** — Real-time tracking and Microsoft Teams alerts at 4h / 2h / 1h / 30m before breach, plus post-breach alerts.
- **Analytics & charts** — Multiple interactive visualizations to explore ticket age, time distribution, trends, and operational metrics—so product owners and stakeholders can reason about the data, not only tabular exports.

## AI layer

A **RAG-based assistant** trained on SAP PAPM–relevant context: RCA history, ServiceNow and JIRA records, and PAPM documentation. It helps **anyone**—engineering, support, product, or leadership—ask questions about the application, past incidents, behavior, and processes, and get grounded answers. Resolution suggestions draw on real history; retrieval uses **hybrid search (vector + BM25)**, a **knowledge graph** to reduce hallucination, and **LangGraph** for multi-step reasoning.

## Automation and operations

One-click structured JIRA creation, centralized logs, and a **shift management** layer: daily ownership, handover notifications, and hours-worked views for continuity, fair load, and payroll-related visibility.`,
    architecture: `### Data layer

- ServiceNow data ingested on a schedule (e.g. ~30 minutes) via APIs; JIRA via token-based APIs; persisted in **SAP HANA**.

### Authentication

- Where direct API auth was limited, **Playwright** was used to obtain a session token (e.g. x-user-token) for authenticated downstream requests.

### AI layer

- RAG: semantic chunking, embeddings + vector search, **BM25** keyword retrieval, knowledge graph for structured context, **LangGraph** for agent workflows.

### Application layer

- **Node.js** and **Python** services; **Next.js** dashboard with chart-driven analytics; notifications via **Microsoft Teams**.`,
    challenges: `- No direct API authentication for every integration — required a robust session-token workaround.
- Tuning **hybrid retrieval** (vector + BM25 + knowledge graph) for accuracy and latency.
- Keeping ServiceNow and JIRA data **consistent** in one model.
- Correct, timely **SLA rules** and real-time alerts.
- Reducing **hallucinations** in production AI responses.
- **Shift logic** that matched how teams actually work at night.`,
    learnings: `- End-to-end ownership of enterprise systems: product sense, not only features.
- Designing **AI + workflow** platforms that survive real operations.
- Production **RAG**: evaluation, logging, and iteration matter as much as model choice.
- Multi-source **enterprise integrations** (ServiceNow, JIRA, HANA, Teams) under real constraints.
- Balancing **performance** with near–real-time sync and alerting.`,
  },
  {
    title: "MSG Sports",
    description:
      "Full-stack internal platform to run company sports tournaments—structured workflows for admins, captains, and players instead of spreadsheets and ad-hoc messaging.",
    stack: [
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "Tailwind CSS",
      "Material UI",
    ],
    impact:
      "Used by 200+ employees. Reduced manual tournament work by ~80% and improved coordination and transparency across teams.",
    kind: "enterprise",
    links: {
      github: "https://github.com/manish-patodiya/msg-sports",
      caseStudy: "msg-sports",
    },
    caseStudyContent: `## Overview

**MSG Sports** digitizes how we run internal sports events: registrations, teams, brackets, and schedules live in one system instead of scattered sheets and chats.

## What it does

- Clear roles: **admin**, **captain**, and **player** with permissions that match real tournament operations.
- **REST APIs** behind a **React** client for dynamic, responsive screens.
- **MySQL** as the source of truth for events, rosters, and schedules.`,
    architecture: `- **Role-based access** (Admin, Captain, Player) enforced in the API.
- **REST** backend on **Node.js / Express**.
- **Relational schema** in **MySQL** for events and registrations.
- **React** SPA with **Tailwind** and **Material UI** for a consistent, responsive UI.`,
    challenges: `- Modeling **flexible team structures** and schedule edge cases without overwhelming users.
- **Dynamic data** (scores, brackets, roster changes) staying fast and understandable.
- Keeping the experience **smooth** for both power users and occasional players.`,
    learnings: `- Building **scalable full-stack** systems with clear domain boundaries.
- Designing **role-based workflows** that match how organizations actually run events.
- **Progressive disclosure** in the UI—surface complexity only when the task needs it—helped adoption in a team environment.`,
  },
  {
    title: "Evaidyak",
    description:
      "Multi-clinic healthcare platform for patient records, clinic operations, and communication—production SaaS with multi-tenant data and cloud integrations.",
    stack: [
      "PHP",
      "CodeIgniter",
      "MySQL",
      "AWS S3",
      "AWS SNS",
      "AWS SES",
      "Razorpay",
    ],
    impact:
      "Live production system used by multiple clinics, with real users and payment flows—early experience shipping and supporting client-facing software end to end.",
    kind: "enterprise",
    links: {
      caseStudy: "evaidyak",
      demo: "https://www.cliniqtec.in/",
    },
    caseStudyContent: `## Overview

**Evaidyak** was one of my first **production-grade** products: working directly with clients, live traffic, and real money moving through the system.

## Product

The platform lets clinics manage patient data and day-to-day operations efficiently. Each clinic can operate with **isolated data** so the product stays scalable and safe as more organizations onboard.`,
    architecture: `- **Multi-tenant** model: separate database **schemas per clinic** for isolation.
- **MVC** with **CodeIgniter** on **PHP**.
- **AWS**: **S3** for storage, **SNS** for notifications, **SES** for email.
- **Razorpay** for payments, wired through secure server-side flows.`,
    challenges: `- Operating **many databases** (per tenant) without sacrificing operability.
- **Data isolation and security** suitable for healthcare expectations.
- **Production incidents** under pressure with real users.
- **Payment reliability** end to end (webhooks, failures, reconciliation).`,
    learnings: `- Shipping and **debugging live** systems—not just local demos.
- Working **with clients** directly on requirements and expectations.
- Designing **multi-tenant** architectures that stay maintainable.
- Balancing speed with **correctness** when money and health-adjacent data are involved.`,
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
