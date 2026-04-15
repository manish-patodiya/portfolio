## Title
Snow-Vision – AI-Powered L2 Support & Operations Intelligence Platform

## Description
Snow-Vision is an end-to-end enterprise platform designed and developed to streamline L2 support workflows, unify ServiceNow and JIRA systems, automate RCA processes, and introduce AI-driven ticket intelligence along with workforce and shift management.

## Stack
Python, LangGraph, LangChain, Node.js, Next.js, SAP BTP, SAP AI Core, SAP HANA, Playwright, Vector DB, BM25, Knowledge Graphs

## Impact
- Used by 150+ stakeholders across teams
- Reduced RCA manual effort by ~80%
- Prevented SLA breaches through proactive alerts
- Improved ticket tracking across ServiceNow & JIRA
- Automated JIRA ticket creation workflow
- Streamlined night support operations via shift management
- Enabled workload visibility for payroll and resource planning
- Won “Innovation of the Year”

## Kind
Enterprise AI + Workflow + Operations Management Platform

## Links
Internal Project

---

## caseStudyContent

### Problem

As part of the L2 support team for SAP PAPM (UM), we handled customer tickets via ServiceNow with a fragmented and manual workflow:

- ServiceNow → Ticket analysis
- JIRA → Bug tracking (separate system)
- Excel → RCA reporting
- No centralized visibility across systems

Key challenges:

1. **Multi-platform inefficiency**
   - Users had to track tickets across ServiceNow and JIRA manually

2. **SLA breaches**
   - No proactive alerts → frequent escalations

3. **Manual RCA process**
   - ~80% repetitive copy-paste work

4. **Lack of analytics**
   - No insights into time spent or delays

5. **Night support coordination issues**
   - Poor visibility of shift schedules
   - Handover gaps between day/night teams
   - No tracking of actual working hours for payroll

---

### Solution

I designed and developed **Snow-Vision end-to-end** as a unified platform addressing both **technical workflows and operational inefficiencies**.

---

### Core System Features

#### 1. Unified Ticket Platform
- Integrated ServiceNow + JIRA into SAP HANA
- Single dashboard for complete ticket lifecycle

#### 2. RCA Automation
- Pre-filled ~80% of RCA fields
- Eliminated manual copy-paste effort

#### 3. SLA Monitoring System
- Real-time SLA tracking
- Automated alerts via Microsoft Teams:
  - 4h / 2h / 1h / 30min before breach
  - Post-breach alerts

#### 4. Ticket Analytics Engine
- Ticket age breakdown
- Time distribution analysis
- Manager-level insights for decision-making

---

### 🧠 AI Layer (Key Innovation)

- Built a **RAG-based AI Agent**
- Data sources:
  - RCA records
  - ServiceNow tickets
  - JIRA issues
  - PAPM documentation

Capabilities:
- Intelligent query answering
- Resolution suggestions based on historical data
- Context-aware responses

Enhancements:
- Hybrid retrieval (Vector + BM25)
- Knowledge Graph to reduce hallucination
- LangGraph for multi-step reasoning

---

### ⚙️ Automation Features

- One-click JIRA ticket creation with structured format
- Centralized logs management system

---

### 🌙 Operations & Shift Management (Unique Contribution)

To solve night support inefficiencies, I introduced:

#### Shift Management System
- Daily schedule of assigned support engineers
- Visibility of who is responsible at any time

#### Continuous Handover Notifications
- Alerts during shift transitions
- Ensures smooth knowledge transfer between teams

#### Workload & Payroll Insights
- Graphs showing hours worked per person
- Data-driven tracking for payroll and performance

#### Impact
- Eliminated confusion during night shifts
- Improved response continuity
- Enabled fair workload distribution

---

## architecture

### Data Layer
- ServiceNow data fetched every 30 minutes via APIs
- JIRA data integrated via token-based APIs
- Stored in SAP HANA

### Authentication Workaround
- Playwright used to extract session token (x-user-token)
- Used for authenticated API requests

### AI Layer
- RAG pipeline:
  - Semantic chunking
  - Embeddings + vector search
  - BM25 keyword retrieval
- Knowledge Graph for structured context
- LangGraph agent for reasoning workflows

### Application Layer
- Backend: Node.js + Python services
- Frontend: Next.js dashboard
- Notifications: Microsoft Teams integration

---

## learnings

- End-to-end ownership of enterprise systems
- Designing scalable AI + workflow platforms
- Building production-grade RAG pipelines
- Handling multi-source enterprise integrations
- Solving real operational problems beyond code
- Balancing system performance with real-time needs

---

## challenges

- Lack of direct API authentication → required workaround
- Designing hybrid retrieval system (Vector + BM25 + KG)
- Ensuring consistency across ServiceNow and JIRA
- Handling SLA logic and real-time alerts
- Preventing hallucinations in AI responses
- Designing shift management logic for real-world usage