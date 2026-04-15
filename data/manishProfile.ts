export const owner = {
  name: "Manish Patodiya",
  role: "AI Engineer & Full Stack Developer",
  location: "Bengaluru, India",
  tagline:
    "Building enterprise-grade AI systems with LLMs, RAG, and intelligent automation",
  summary:
    "AI Engineer with a strong full stack background, specializing in Generative AI, RAG systems, and enterprise AI platforms. Experienced in building production-grade AI solutions using LangGraph, hybrid retrieval (vector + BM25 + knowledge graphs), and SAP AI infrastructure for real-world business applications.",
  experienceSummary:
    "Full Stack Developer turned AI Engineer with hands-on experience in production systems, cloud, and enterprise AI automation.",
};

export const personality = {
  tone: "confident, practical, and clear",
  style:
    "Explains complex AI systems in simple terms using real-world examples",
  traits: ["problem-solver", "system thinker", "focused on real-world impact"],
  speakingStyleExamples: [
    "Think of RAG as giving LLMs access to your company’s internal knowledge base.",
    "I focus more on systems that actually get used in production rather than just demos.",
  ],
};

export const highlights = [
  "Built LangGraph-based RAG agents with multi-step reasoning and tool execution",
  "Designed hybrid retrieval systems (vector + BM25 + knowledge graphs)",
  "Developed AI evaluation pipelines for LLM validation",
  "Implemented stateful AI systems with memory on SAP HANA",
  "Built enterprise AI platforms used by 150+ stakeholders",
  "Handled real-world production systems, debugging, and client-facing deployments",
];

export const journey = [
  {
    title: "Early Curiosity",
    period: "Schooling (Rajasthan)",
    description:
      "Developed analytical thinking and curiosity about computers, leading to interest in software and intelligent systems.",
  },
  {
    title: "Programming Foundations",
    period: "BCA (2018–2021)",
    description:
      "Built strong foundations in C, C++, Java, DBMS, and DSA. Developed problem-solving mindset and core computer science understanding.",
  },
  {
    title: "Industry Entry",
    period: "GeeksIT Data Solutions (2021–2022)",
    description:
      "Worked as a Full Stack Developer on production systems including healthcare SaaS platforms like Evaidyak. Gained experience in APIs, AWS services, multi-tenant systems, and real client handling.",
  },
  {
    title: "Engineering Growth",
    period: "MCA (2022–2024)",
    description:
      "Strengthened DSA, system design, and communication skills. Won hackathons and secured placement at MSG Global.",
  },
  {
    title: "Enterprise Development",
    period: "MSG Global Solutions - Internship (2024)",
    description:
      "Built MSG Sports platform, reducing manual effort by 80%. Worked within SAP ecosystem and mentored interns.",
  },
  {
    title: "AI Engineering",
    period: "MSG Global Solutions - Full Time (2024–Present)",
    description:
      "Built Snow-Vision and transitioned into AI Engineering. Focused on RAG systems, AI agents, and SAP-integrated enterprise AI platforms.",
  },
];

export const skillCategories = [
  {
    name: "Generative AI",
    items: [
      "LLMs",
      "RAG",
      "LangChain",
      "LangGraph",
      "AI Agents",
      "GraphRAG",
      "Hybrid Retrieval",
      "Vector Search",
      "BM25",
      "Knowledge Graphs",
    ],
  },
  {
    name: "AI Systems Engineering",
    items: [
      "RAG Pipelines",
      "Evaluation Frameworks",
      "Prompt Engineering",
      "Agent Orchestration",
      "Tool Integration",
    ],
  },
  {
    name: "Full Stack Development",
    items: ["React", "Next.js", "Node.js", "TypeScript", "PHP"],
  },
  {
    name: "Enterprise & SAP",
    items: [
      "SAP BTP",
      "SAP AI Core",
      "SAP AI Launchpad",
      "SAP UI5",
      "CAP",
      "HANA",
    ],
  },
  {
    name: "Backend & Databases",
    items: [
      "REST APIs",
      "System Design",
      "MySQL",
      "SAP HANA",
      "Vector Databases",
      "Multi-tenant Systems",
    ],
  },
  {
    name: "Cloud & DevOps",
    items: ["AWS (S3, SES, SNS)", "Docker", "Deployments"],
  },
];

export const projects = [
  {
    title: "Snow-Vision",
    description:
      "End-to-end enterprise platform for SAP PAPM: centralizes ServiceNow and JIRA into SAP HANA, automates RCA, and surfaces SLA monitoring with Microsoft Teams alerts. It delivers rich analytics with interactive charts (ticket age, time distribution, trends, operational metrics) for product owners and stakeholders, and a RAG-based assistant—grounded in RCA history, tickets, JIRA, and PAPM documentation—that helps developers, support, product, and leadership ask questions about the app, incidents, and processes. Includes one-click JIRA creation, shift management, handovers, and workload visibility for operations and payroll-related insight.",
    stack: [
      "Python",
      "LangChain",
      "LangGraph",
      "Node.js",
      "Next.js",
      "TypeScript",
      "Playwright",
      "SAP BTP",
      "SAP AI Core",
      "SAP HANA",
      "ShadCN",
      "Material Tailwind",
      "Vector databases",
      "BM25",
      "Knowledge graphs",
      "Microsoft Teams",
    ],
    impact: [
      "Used by 150+ people across roles: developers, support, product owners, and other stakeholders",
      "Reduced manual RCA effort by ~80% with pre-filled RCA workflows",
      "Proactive SLA tracking and Teams alerts (e.g. 4h / 2h / 1h / 30m before breach, plus post-breach)",
      "Unified ServiceNow and JIRA lifecycle in one dashboard backed by SAP HANA",
      "Interactive charts and analytics for data-driven decisions beyond raw exports",
      "RAG assistant for SAP PAPM–related queries using hybrid retrieval (vector + BM25), knowledge graph context, and LangGraph multi-step reasoning",
      "AI-driven resolution suggestions grounded in historical tickets and documentation",
      "Automated structured JIRA creation and centralized logging",
      "Shift scheduling, handover notifications, and workload tracking for day/night operations and payroll visibility",
      "Recognized with Innovation of the Year",
    ],
    kind: "enterprise" as const,
    links: {
      caseStudy: "snow-vision",
      caseStudyUrl: "/portfolio/snow-vision",
      demo: "https://snow-vision-approuter-prod.cfapps.ap10.hana.ondemand.com/",
    },
    caseStudyContent: `## Problem

Anyone working on **SAP PAPM **—developers digging into issues, support handling customer tickets, product owners tracking delivery, or stakeholders reviewing health of the estate—was stuck with a fragmented toolchain: ServiceNow here, JIRA there, RCA in spreadsheets, and no shared picture. That meant context switching, SLA risk without proactive signals, heavy manual RCA (~80% repetitive work), limited insight into time and delays, and weak visibility into who was on call and how workload landed across day and night.

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
      "Full-stack internal platform for company sports tournaments: structured workflows for admins, captains, and players—registrations, teams, brackets, and schedules in one system instead of spreadsheets and ad-hoc messaging. REST APIs behind a React client; MySQL as the source of truth with role-based access at the API layer.",
    stack: [
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "Tailwind CSS",
      "Material UI",
    ],
    impact: [
      "Used by 200+ employees",
      "Reduced manual tournament coordination work by ~80%",
      "Improved transparency and coordination across teams",
      "Role-based access (admin, captain, player) with progressive, adoption-friendly UX",
    ],
    kind: "enterprise" as const,
    links: {
      github: "https://github.com/manish-patodiya/msg-sports",
      caseStudy: "msg-sports",
      caseStudyUrl: "/portfolio/msg-sports",
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
      "Multi-clinic healthcare SaaS for patient records, clinic operations, and communication. Multi-tenant architecture with isolated database schemas per clinic; MVC stack on CodeIgniter/PHP; AWS (S3 storage, SNS notifications, SES email); Razorpay for payments. Production system with real users, live traffic, and client-facing delivery experience.",
    stack: [
      "PHP",
      "CodeIgniter",
      "MySQL",
      "AWS S3",
      "AWS SNS",
      "AWS SES",
      "Razorpay",
    ],
    impact: [
      "Live production platform used by multiple clinics",
      "Real users and end-to-end payment flows",
      "Early ownership of production debugging, client communication, and multi-tenant data isolation for healthcare-adjacent data",
    ],
    kind: "enterprise" as const,
    links: {
      caseStudy: "evaidyak",
      caseStudyUrl: "/portfolio/evaidyak",
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

export const useCases = [
  "Enterprise knowledge retrieval using RAG systems",
  "AI assistants for SAP and banking workflows",
  "Automation of internal support queries using LLMs",
  "Hybrid search systems for accurate information retrieval",
];

export const differentiators = [
  "Focus on production-grade AI systems, not prototypes",
  "Strong combination of full stack + AI engineering",
  "Hands-on SAP AI ecosystem experience",
  "Experience with real-world clients and production debugging",
];

export const achievements = [
  {
    label: "Innovation of the Year",
    value: "2026",
    detail: "Awarded for Snow-Vision AI platform",
  },
  {
    label: "TechInterrupt Hackathon",
    value: "Top 4",
    detail: "Finalist among 80+ teams",
  },
  {
    label: "Hackathon Wins",
    value: "5×",
    detail: "Multiple wins in competitive coding events",
  },
];

export const experiences = [
  {
    company: "MSG Global Solutions",
    role: "AI Engineer",
    period: "2024 – Present",
    highlights: [
      "Built Snow-Vision, an enterprise AI platform integrating LLMs, RAG, and SAP systems.",
      "Developed LangGraph-based AI agents with multi-step reasoning and tool usage.",
      "Designed hybrid retrieval systems combining vector search, BM25, and knowledge graphs.",
      "Built evaluation pipelines for LLM performance testing and validation.",
      "Worked with SAP AI Core, BTP, and HANA for deploying enterprise AI solutions.",
    ],
    tech: ["LLMs", "LangGraph", "RAG", "SAP BTP", "HANA", "Next.js", "Node.js"],
  },
  {
    company: "GeeksIT Data Solutions",
    role: "Full Stack Developer",
    period: "2021 – 2022",
    highlights: [
      "Built 3+ full-stack applications and 100+ APIs.",
      "Improved system performance by 30–40%.",
      "Resolved 120+ production issues improving stability.",
    ],
    tech: ["JavaScript", "PHP", "MySQL", "AWS"],
  },
];

export const concepts = [
  {
    name: "RAG",
    explanation:
      "Retrieval-Augmented Generation is a technique where LLMs fetch relevant data before generating responses, improving accuracy and grounding.",
  },
  {
    name: "LangGraph",
    explanation:
      "Framework for building stateful AI agents with multi-step reasoning, memory, and tool execution.",
  },
  {
    name: "Hybrid Retrieval",
    explanation:
      "Combines vector search, keyword search (BM25), and knowledge graphs to improve retrieval accuracy.",
  },
];

export const goals = {
  shortTerm:
    "Deepen expertise in agentic AI systems and large-scale AI architectures",
  longTerm:
    "Build impactful enterprise AI platforms that transform business workflows globally",
};

export const core_journey = `
My name is Manish Patodiya, and my journey has been full of twists, realizations, struggles, and growth.
Chapter 1: Schooling
I was a good student in school and one of the toppers. In 10th grade, I scored 85% in the Rajasthan State Board. I completed my schooling in my hometown.
After 10th, things started changing. Instead of focusing on studies, I got more involved in exploring the outside world, enjoying life, and honestly, a lot of “bakchodi.” Because of that, my performance dropped, and I scored 72.40% in 12th (PCM), and that too with cheating.
That phase made me question myself—what do I actually want in life?
I started exploring my interests and realized I was deeply fascinated by computers, coding, and building applications. I loved the idea of creating something like JARVIS from Iron Man. That curiosity pushed me toward programming.
I was confused between BCA and BTech. After discussions, someone suggested BCA since it focuses more on software and programming rather than broader engineering subjects. At that time, it felt like the right choice (though later I realized it might not have been the best career decision).

Chapter 2: Bachelor’s (BCA)
I was advised that for BCA, college reputation doesn’t matter much, and I could focus on doing my master’s from a good institute later.
So, I joined Seth GB Podar College in Nawalgarh (my hometown).
1st Year:I started coding with C language using Turbo C++. That was my first exposure to programming, and I loved it. Along with that, I studied OS, Computer Organization, and fundamentals.
2nd Year:We moved to C++. I learned it but didn’t enjoy it as much as C. I focused more on understanding concepts rather than mastering it. We also had DBMS, Accounts, English, etc. Then COVID happened, and exams got canceled.
During this time, a major turning point came.
An alumnus (a Java developer) started visiting on weekends to train students for a startup idea. Initially, he assumed we knew Java—we didn’t—and he was disappointed. Still, he gave us tasks, including DSA problems.
I completed all tasks within a week.
He was impressed and asked us to learn Java in 7 days. I gave it my best and learned core Java with some practical implementations. Then we built a banking system project (savings, current, FD accounts). Though the code quality wasn’t great, that experience inspired me deeply.
From that point, I decided—I want to become a Java developer.
3rd Year:We had Java, web development basics (HTML, CSS, JS), and DSA. This was the time I worked extremely hard. There was no ChatGPT back then, so I relied on Stack Overflow and GeeksforGeeks.
I learned advanced Java concepts like Swing and AWT and built a fully functional calculator app.
One major weakness during this time:We studied in Hindi, understood concepts in Hindi, and memorized answers in English. My spoken English was very poor.
After graduation, I got an opportunity:A professional offered training (₹15,000) with a promise of work afterward.
At the same time, some friends were preparing for NIMCET (for MCA in NITs), but I knew competitive exams weren’t my strength. After discussing with my parents, I chose practical exposure over entrance exams.

Chapter 3: First Experience (Oct 2021 – GeeksIT Data Solutions)
I paid half the training fee and started.
Problem: I hated web development and only wanted Java.
But I decided not to look back.
We learned HTML, CSS, JavaScript, Bootstrap, PHP, and CodeIgniter. I’m a quick learner when interested—and I picked things up fast.
Within 2 months, we started working on real projects. I performed well, and they waived my remaining training fee.
I completed a 6-month internship and then continued full-time.
I worked on 5–6 real-world projects (clinic systems, doctor consultation apps, SaaS tools). I learned:
* HTML, CSS, JS, PHP, jQuery
* CodeIgniter, Bootstrap
* APIs, AWS (SNS, SES, S3)
* SQL, MySQL, cPanel
* Basics of React and Node
I became very strong in these technologies and eventually started enjoying web development.
I even led a team—assigning tasks and reviewing PRs.
After a year, I decided to pursue a master’s degree in Bangalore.

Chapter 4: MCA in Bangalore (CMRIT)
I joined with the goal of getting a good placement and becoming a full-stack developer (React + Node) along with Java.
The biggest challenge: English.
I came from a Hindi-speaking environment. In Bangalore, English was essential. I struggled a lot—used fillers like “aa”, “umm”, etc.
Still, I pushed myself:
* Gave presentations in front of 120 people
* Performed well academically (topper in class)
2nd Semester:Advanced subjects, DSA, and deeper IT concepts.
My mentor selected me for a hackathon, even though I had no experience with platforms like LeetCode.
We went just for experience.
I ended up:
* Winning 2 hackathons
* Winning the overall championship
That was a huge confidence boost.
Placements started—I cleared rounds in my first interview but got rejected due to a resume mistake.
I was using ChatGPT by then but didn’t like AI. I believed it made people lazy and avoided Python and AI completely.
3rd Semester:
* Participated in coding events (secured top ranks)
* Faced multiple rejections
* Improved English gradually
I got several job offers but rejected them because they didn’t match my goal (full stack/Java).
Finally, I got selected at MSG Global Solutions for a Node.js + React role.
March 2024: Internship started.I completed MCA with 9.5 CGPA and secured a full-time offer.

Chapter 5: Internship at MSG (March 2024)
Still not fluent in English, but improving.
After initial training, I was asked to build a real project.
I built “MSG Sports”, a full-fledged web app for managing company sports tournaments—without using ChatGPT.
The result:
* Huge appreciation from leadership
* VP considered making it live
* Audience loved it
Tech used: React, Node, Express, MySQL, OAuth, Tailwind, Material UI.
Then came a setback.
I wanted JavaScript work (SM model), but I was assigned to SAP UM support instead.
I was disappointed.
I was even offered AI work—but I refused because I hated AI and Python.
I continued while searching for other jobs—but couldn’t find any.
Eventually, I accepted the full-time offer, even though I was told clearly:“No JavaScript work in the future.”

Chapter 6: Full-Time Role (Oct 2024 – Present)
Initially worked in L2 support—got bored quickly.
Started building internal tools in my free time.
Got negative feedback initially. In a 1:1, my BU head told me:
* Either adapt or leave
* Don’t chase only interests
* Focus on what you have
That advice changed my mindset.
Then came a big opportunity:Build a full tool in 2 months.
I created “Snow-Vision”—a powerful internal tool.It was a success. Teams started depending on it heavily.
Then another shift happened.
I was asked to build an AI chatbot.
Despite disliking AI earlier, I gave it a try.
And surprisingly—I started loving it.
I learned:
* LLMs, RAG, Vector DB, Knowledge Graphs
* LangChain, LangGraph
* Agentic AI
I upgraded the chatbot into a RAG Agent with tool access.
Snow-Vision became addictive for teams.
Achievements:
* Top 4 in TechInterrupt (80 teams, 200+ participants)
* Innovation of the Year award (Feb 2026)
* Recognition in front of global clients
I also:
* Learned Docker and deployment (DevOps exposure)
* Contributed to SAP PAPM UM development
* Improved communication significantly
Now, I work as an AI Engineer on a European banking project—building AI-powered solutions for financial reporting.

Final Reflection
From:
* A topper → distracted student
* Weak English speaker → confident presenter
* Java-only mindset → full-stack → AI engineer
* AI hater → AI builder
This journey has been full of ups and downs, wrong decisions, realizations, and growth.
Today, I’m not just a developer—I’m someone who adapts, learns, and evolves continuously.
`;
