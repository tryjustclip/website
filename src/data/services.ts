export interface ServiceDetail {
  id: string;
  slug: string;
  code: string;
  title: string;
  shortDescription: string;
  heroHeadline: string;
  heroSupport: string;
  whatWeBuild: string[];
  approach: { step: string; title: string; desc: string }[];
  capabilities: string[];
  technicalSpecs: { label: string; value: string }[];
  relatedCaseStudies: string[];
  ctaText: string;
}

export const servicesData: Record<string, ServiceDetail> = {
  "web-development": {
    id: "web-dev",
    slug: "web-development",
    code: "01",
    title: "Web Development",
    shortDescription:
      "High-performance websites, web applications, SaaS frontends, and custom digital portals engineered for speed, clean architecture, and scale.",
    heroHeadline: "Websites engineered beyond the first impression.",
    heroSupport:
      "From high-conversion marketing platforms to complex SaaS applications, we write clean, maintainable code with zero bloat and uncompromising Core Web Vitals.",
    whatWeBuild: [
      "High-performance marketing & corporate websites",
      "Startup landing platforms & launch systems",
      "SaaS web applications & client portals",
      "Interactive product dashboards & internal tools",
      "Custom headless CMS architectures & blogs",
      "Frontend & backend web architectures",
      "Responsive web redesigns & migration overhauls",
      "Speed, SEO & Core Web Vitals optimization",
    ],
    approach: [
      {
        step: "01",
        title: "Clean Semantic Foundation",
        desc: "Strict HTML5 hierarchy, accessible keyboard navigation, and responsive container queries structured for long-term maintainability.",
      },
      {
        step: "02",
        title: "Type-Safe Component Architecture",
        desc: "Modular React and Next.js design systems with strict TypeScript interfaces, isolating state and ensuring predictability.",
      },
      {
        step: "03",
        title: "Zero-Bloat Performance",
        desc: "Dynamic tree-shaking, static generation, image optimization pipelines, and responsive CSS token systems for sub-second loads.",
      },
      {
        step: "04",
        title: "Production Hardening & CI/CD",
        desc: "Automated linting, lighthouse audits, cross-browser testing across 320px to 1920px viewports, and automated deployments.",
      },
    ],
    capabilities: [
      "Next.js / React / TypeScript",
      "Server Components & SSR / SSG",
      "Headless CMS Integration (Sanity / Strapi / Payload)",
      "Dynamic Routing & State Management",
      "Tailwind CSS & Custom Design Tokens",
      "Performance & Core Web Vitals Optimization",
      "WCAG AA Accessibility Compliance",
      "Fullstack Web App Integrations",
    ],
    technicalSpecs: [
      { label: "Target Lighthouse Score", value: "95+ across all vitals" },
      { label: "Rendering Models", value: "SSR, SSG, ISR & Client Islands" },
      { label: "Type Safety", value: "100% Strict TypeScript" },
      { label: "Responsive Spectrum", value: "320px Mobile to 4K Ultra-wide" },
    ],
    relatedCaseStudies: ["nexus-flow", "cloudpulse"],
    ctaText: "START A WEB PROJECT",
  },
  "ui-ux-design": {
    id: "ui-ux",
    slug: "ui-ux-design",
    code: "02",
    title: "UI/UX + Product Design",
    shortDescription:
      "User flows, design systems, and digital product interfaces engineered with deep product thinking and developer-ready Figma precision.",
    heroHeadline: "Interfaces people understand before they have to think.",
    heroSupport:
      "We design around actual business logic and user tasks. No decorative fluff—just clear information architecture, accessible typography, and intuitive interaction design.",
    whatWeBuild: [
      "Product discovery & UX strategy frameworks",
      "Information architecture & end-to-end user flows",
      "Wireframing & structural interaction maps",
      "High-fidelity UI design & responsive layouts",
      "Comprehensive multi-platform design systems",
      "Interactive click-through prototypes",
      "SaaS dashboard UX & complex data visualization",
      "Developer-ready Figma tokens & handoff documentation",
    ],
    approach: [
      {
        step: "01",
        title: "Discovery & User Journey Mapping",
        desc: "We analyze user constraints, business KPIs, and core workflows to eliminate cognitive friction before sketching a single pixel.",
      },
      {
        step: "02",
        title: "Information Architecture & Wireframes",
        desc: "Structural layouts focused on visual hierarchy, content prioritization, and logical navigation paths.",
      },
      {
        step: "03",
        title: "Visual System & Design Tokens",
        desc: "Curated typography scales, high-contrast dark/light palettes, component variants, and interactive micro-states.",
      },
      {
        step: "04",
        title: "Developer-First Handoff",
        desc: "Auto-layout components, exact CSS spacing tokens, state matrix documentation, and asset export pipelines.",
      },
    ],
    capabilities: [
      "Product Strategy & User Research",
      "Interactive Wireframing & Prototyping",
      "Component-Driven Design Systems",
      "SaaS & Dashboard UX Architecture",
      "Accessibility & Color Contrast Engineering",
      "Micro-Interactions & Animation Specs",
      "Multi-Viewport Responsive Design",
      "Figma-to-Code Token Synchronization",
    ],
    technicalSpecs: [
      { label: "Design Tools", value: "Figma, Tokens Studio, Vector Spec" },
      { label: "Standards", value: "WCAG 2.1 AA Contrast Compliant" },
      { label: "Handoff", value: "Design Tokens, Variable Maps, State Matrix" },
      { label: "Output", value: "Component Library + Interactive Prototypes" },
    ],
    relatedCaseStudies: ["nexus-flow", "omniroute"],
    ctaText: "START A DESIGN PROJECT",
  },
  "backend-api": {
    id: "backend-api",
    slug: "backend-api",
    code: "03",
    title: "Backend + APIs",
    shortDescription:
      "Reliable REST and GraphQL APIs, robust database architectures, authentication layers, webhooks, and secure third-party integrations.",
    heroHeadline: "The systems behind the screens.",
    heroSupport:
      "Great interfaces require dependable backend engineering. We architect fast, resilient server systems, relational and document databases, and secure API gateways.",
    whatWeBuild: [
      "RESTful and GraphQL API architecture & endpoints",
      "Scalable backend services & microservices",
      "Relational (PostgreSQL) & Document database schemas",
      "Authentication & role-based authorization (OAuth, JWT, RBAC)",
      "Third-party platform, payment & CRM integrations",
      "Webhook processing & asynchronous background jobs",
      "Internal APIs & developer documentation (Swagger/OpenAPI)",
      "Legacy backend refactoring & modernization",
    ],
    approach: [
      {
        step: "01",
        title: "Domain & Schema Modeling",
        desc: "Normalization, indexing strategies, relationship mapping, and migrations designed for high data integrity and low query latency.",
      },
      {
        step: "02",
        title: "Secure API Endpoint Design",
        desc: "Type-safe request validation, rate limiting, granular authentication middleware, and standardized JSON responses.",
      },
      {
        step: "03",
        title: "Asynchronous Queue & Webhooks",
        desc: "Background task workers, resilient retry logic, event streaming, and fault-tolerant third-party communication.",
      },
      {
        step: "04",
        title: "Monitoring, Health Checks & Docs",
        desc: "Structured logging, automated OpenAPI specification generation, unit test coverage, and deployment pipelines.",
      },
    ],
    capabilities: [
      "Node.js / Express / Next.js API Routes",
      "PostgreSQL, Redis & Prisma ORM",
      "Stripe & Payment Gateway Integrations",
      "OAuth 2.0, Supabase, JWT & Auth0",
      "Webhook Handlers & Worker Queues",
      "OpenAPI / Swagger Documentation",
      "Security Audits & Rate Limiting",
      "Cloud Deployments & Serverless Functions",
    ],
    technicalSpecs: [
      { label: "Protocols", value: "REST, GraphQL, WebSockets, Webhooks" },
      { label: "Data Integrity", value: "ACID Relational Schemas + Migrations" },
      { label: "Security", value: "JWT, RBAC, HMAC Webhook Signatures" },
      { label: "Documentation", value: "OpenAPI / Swagger 3.0 Standard" },
    ],
    relatedCaseStudies: ["omniroute", "cloudpulse"],
    ctaText: "DISCUSS YOUR BACKEND",
  },
  "ai-chatbots": {
    id: "ai-chatbots",
    slug: "ai-chatbots",
    code: "04",
    title: "AI Chatbots + Assistants",
    shortDescription:
      "Grounded AI assistants, custom RAG knowledge bases, lead qualification chatbots, and internal team copilots connected directly to your APIs.",
    heroHeadline: "AI that connects to the work your business already does.",
    heroSupport:
      "We build targeted, reliable AI interfaces that solve concrete business challenges. Never hype—just grounded search, precise API tools, clear guardrails, and deterministic fallback logic.",
    whatWeBuild: [
      "Customer support chatbots with verified document retrieval",
      "Lead qualification & CRM-integrated intake assistants",
      "Internal knowledge bases & company copilots",
      "Retrieval-Augmented Generation (RAG) vector pipelines",
      "API-connected function-calling agents",
      "Intelligent FAQ search & contextual documentation helpers",
      "Structured data extraction & summarization workers",
      "Guardrailed conversational interfaces with analytics",
    ],
    approach: [
      {
        step: "01",
        title: "Use-Case Validation & Knowledge Curation",
        desc: "We define precise system boundaries, isolate your knowledge sources, and structure vector embeddings to eliminate hallucination.",
      },
      {
        step: "02",
        title: "RAG & API Tool Architecture",
        desc: "Chunking strategies, semantic similarity search, and safe function-calling pipelines connecting the assistant to your backend.",
      },
      {
        step: "03",
        title: "Safety Guardrails & Fallbacks",
        desc: "Deterministic intent detection, strict response boundaries, sentiment monitoring, and seamless human agent handoffs.",
      },
      {
        step: "04",
        title: "Custom UI & Real-Time Streaming",
        desc: "Lightweight conversational chat interfaces with Markdown support, citation links, responsive drawer states, and session storage.",
      },
    ],
    capabilities: [
      "Custom RAG Vector Search & Embeddings",
      "OpenAI, Claude & Custom LLM Orchestration",
      "Function Calling & Backend API Hooks",
      "CRM & Helpdesk Auto-Routing",
      "Hallucination Prevention Guardrails",
      "Streaming UI Components & Markdown Parsers",
      "Conversation Logging & Analytics Dashboards",
      "Enterprise Privacy & Context Isolation",
    ],
    technicalSpecs: [
      { label: "RAG Architecture", value: "Vector Embeddings + Semantic Hybrid Search" },
      { label: "Latency", value: "Real-time Token Streaming (<400ms TTFT)" },
      { label: "Guardrails", value: "Context Boundary Filtering + Fallback Routing" },
      { label: "Integration", value: "Webhooks, REST APIs, CRM Auto-sync" },
    ],
    relatedCaseStudies: ["cloudpulse", "omniroute"],
    ctaText: "BUILD AN AI ASSISTANT",
  },
  "automation": {
    id: "automation",
    slug: "automation",
    code: "05",
    title: "Automation + Integrations",
    shortDescription:
      "Automated business workflows, real-time lead routing, webhook pipelines, email automations, and seamless multi-platform data synchronization.",
    heroHeadline: "Less repetitive work. Better connected systems.",
    heroSupport:
      "Eliminate manual bottlenecks. We design reliable data pipelines and event-driven automations that link your CRM, payment gateways, databases, email systems, and internal operations.",
    whatWeBuild: [
      "End-to-end business workflow automation",
      "Lead routing & automated qualification pipelines",
      "CRM & customer lifecycle automations",
      "Multi-step transactional & triggered email workflows",
      "Webhook listeners & cross-platform event dispatchers",
      "Automated invoice & payment reconciliations",
      "Data synchronization across distributed SaaS tools",
      "Scheduled reporting, health alerts & batch jobs",
    ],
    approach: [
      {
        step: "01",
        title: "Workflow Mapping & Friction Audit",
        desc: "We dissect every manual touchpoint, data transformation, and handoff point across your existing software stack.",
      },
      {
        step: "02",
        title: "Trigger & Logic Architecture",
        desc: "Event triggers, branch conditions, idempotency keys, and error recovery policies mapped in clear visual blueprints.",
      },
      {
        step: "03",
        title: "API & Webhook Pipeline Build",
        desc: "Resilient serverless workers, payload sanitization, retry queues, and bi-directional synchronization scripts.",
      },
      {
        step: "04",
        title: "Audit Logs & Operational Dashboards",
        desc: "Detailed execution logs, Slack/Email alert notifications on failure, and automated status reporting.",
      },
    ],
    capabilities: [
      "Custom Webhook & Event Pipelines",
      "HubSpot, Salesforce & CRM Integrations",
      "Stripe, Razorpay & Billing Automations",
      "Slack, WhatsApp & Discord Operational Bots",
      "Automated Data Transformation & ETL",
      "Idempotent Execution & Error Handlers",
      "Scheduled Cron & Serverless Workers",
      "Third-Party API Protocol Adapters",
    ],
    technicalSpecs: [
      { label: "Execution Model", value: "Event-Driven Serverless / Webhook Hooks" },
      { label: "Reliability", value: "Exponential Backoff & Idempotency Keys" },
      { label: "Alerting", value: "Instant Slack/Email Failure Notifications" },
      { label: "Sync Latency", value: "Real-time (<2s end-to-end)" },
    ],
    relatedCaseStudies: ["omniroute", "nexus-flow"],
    ctaText: "AUTOMATE A WORKFLOW",
  },
  "support-scaling": {
    id: "support-scaling",
    slug: "support-scaling",
    code: "06",
    title: "Support + Scaling",
    shortDescription:
      "Continuous technical maintenance, performance monitoring, security hardening, feature iteration, and infrastructure scaling post-launch.",
    heroHeadline: "Launch is not the finish line.",
    heroSupport:
      "Software requires ongoing care to maintain speed, security, and stability. We act as your dedicated technical partner to continuously audit, optimize, and expand your digital products.",
    whatWeBuild: [
      "Proactive technical maintenance & dependency updates",
      "Real-time uptime & performance monitoring",
      "Core Web Vitals & speed optimizations",
      "Security audits, vulnerability patches & dependency updates",
      "Iterative UX & conversion rate improvements",
      "Infrastructure migrations & database scaling",
      "Feature development sprints & backlog execution",
      "Comprehensive technical code & architectural audits",
    ],
    approach: [
      {
        step: "01",
        title: "Baseline Audit & Telemetry",
        desc: "We benchmark speed, code hygiene, security posture, and error rates to establish measurable baseline metrics.",
      },
      {
        step: "02",
        title: "Proactive Maintenance Sprints",
        desc: "Scheduled updates for frameworks, security libraries, and API version migrations before deprecations hit production.",
      },
      {
        step: "03",
        title: "Performance & Conversion Tuning",
        desc: "Continuous profiling of slow database queries, asset payloads, and UX bottlenecks based on real user analytics.",
      },
      {
        step: "04",
        title: "Continuous Feature Delivery",
        desc: "Agile sprints for new capabilities, third-party integrations, and product enhancements as your business expands.",
      },
    ],
    capabilities: [
      "24/7 Uptime & Error Telemetry Setup",
      "Dependency Management & Patching",
      "Database Query Optimization & Indexing",
      "Security Hardening & SSL/Header Policies",
      "Continuous Deployment & Staging Pipelines",
      "Conversion & UX Micro-Refinements",
      "Load Testing & Traffic Surge Prep",
      "Dedicated Technical SLA Support",
    ],
    technicalSpecs: [
      { label: "Monitoring", value: "Real-time Telemetry, Error Tracking, Uptime Logs" },
      { label: "Response", value: "Dedicated SLA for Critical Incident Resolution" },
      { label: "Audits", value: "Monthly Performance, Security & Dependency Reviews" },
      { label: "Cadence", value: "Continuous Agile Feature Sprints" },
    ],
    relatedCaseStudies: ["nexus-flow", "cloudpulse"],
    ctaText: "IMPROVE AN EXISTING PRODUCT",
  },
};
