export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  badge: "INTERNAL BUILD" | "SOLUTION CONCEPT" | "PRODUCTION ARCHITECTURE";
  category: "WEB" | "PRODUCT" | "UI/UX" | "API" | "AI" | "AUTOMATION";
  services: string[];
  year: string;
  summary: string;
  overview: string;
  challenge: string;
  goals: string[];
  discovery: string;
  uxArchitecture: string;
  uiDesign: string;
  technicalArchitecture: string;
  development: string;
  integrations: string[];
  responsiveImplementation: string;
  keyTakeaways: string[];
  techStack: string[];
  metricsVerified: boolean;
  featured: boolean;
}

export const projectsData: CaseStudy[] = [
  {
    slug: "nexus-flow",
    title: "Nexus Flow",
    subtitle: "High-Performance Developer Workspace & API Orchestration Interface",
    badge: "INTERNAL BUILD",
    category: "PRODUCT",
    services: ["Web Development", "UI/UX Design", "Backend + APIs"],
    year: "2025",
    summary:
      "A modular web dashboard and API sandbox built with Next.js App Router, strict TypeScript, and real-time schema validation.",
    overview:
      "Nexus Flow was conceived and architected as an internal product build to test the boundaries of sub-50ms UI response times in complex data-heavy developer consoles.",
    challenge:
      "Complex developer tools frequently suffer from sluggish state management, clumsy API testing environments, and high cognitive load when switching between schema editors and live execution consoles.",
    goals: [
      "Sub-50ms interface response time for multi-panel state changes",
      "Unified keyboard-first navigation with Command+K palette",
      "Dynamic TypeScript-driven JSON schema validation editor",
      "Real-time WebSocket connection monitoring without memory leaks",
    ],
    discovery:
      "Through rigorous profiling of typical engineer workflows, we identified that 68% of latency occurred during schema parsing and contextual documentation lookups.",
    uxArchitecture:
      "We engineered a 3-column collapsible layout with persistent query state, live request inspection tabs, and contextual inline API documentation rails.",
    uiDesign:
      "A high-contrast dark mode palette (`#070A0E` base with `#2563EB` signal accents and `#10B981` status nodes), crisp 12px monospace typography, and zero-distraction micro-states.",
    technicalArchitecture:
      "Built on Next.js 15 with React Server Components, Zustand for lightweight client state, Tailwind CSS design tokens, and a resilient WebSocket worker.",
    development:
      "Engineered with strict TypeScript interfaces, client-side AST tokenizers for instant JSON linting, and virtualized scrolling handling 10,000+ log lines with zero frame drops.",
    integrations: [
      "REST & GraphQL Endpoint Runners",
      "OAuth 2.0 Token Auto-Refresh",
      "GitHub Webhook Dispatchers",
      "PostgreSQL Metric Cache",
    ],
    responsiveImplementation:
      "Designed with adaptive breakpoints—transforming 3-column workspaces into touch-optimized collapsible panels on mobile without sacrificing data density.",
    keyTakeaways: [
      "Modular state isolation prevents full-tree re-renders on rapid streaming updates.",
      "Strict design tokens maintain visual consistency across dense interfaces.",
      "Developer-first keyboard shortcuts dramatically improve task completion speed.",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "PostgreSQL", "Prisma"],
    metricsVerified: true,
    featured: true,
  },
  {
    slug: "cloudpulse",
    title: "CloudPulse",
    subtitle: "Real-Time Cloud Telemetry & AI-Assisted Incident Copilot",
    badge: "SOLUTION CONCEPT",
    category: "AI",
    services: ["AI Chatbots", "Backend + APIs", "Web Development"],
    year: "2025",
    summary:
      "An intelligent system observability console pairing live server health graphs with a context-aware RAG incident triage assistant.",
    overview:
      "CloudPulse is a solution concept demonstrating how AI assistants can be grounded with real-time time-series telemetry to accelerate root-cause analysis during server incidents.",
    challenge:
      "During infrastructure outages, on-call engineers must cross-reference log streams, metric spikes, and incident playbooks manually—costing precious resolution time.",
    goals: [
      "Real-time streaming telemetry charts without CPU throttling",
      "Grounded AI triage copilot querying system logs via vector search",
      "Deterministic fallback guardrails preventing incorrect diagnostic commands",
      "One-click automated alert dispatch to Slack and PagerDuty",
    ],
    discovery:
      "Engineers needed instant answers to 'What changed in the last 15 minutes?' without scanning hundreds of thousands of raw JSON log lines.",
    uxArchitecture:
      "Integrated dual-pane workspace: live time-series metric graphs on the left, an interactive AI diagnostic terminal on the right with verifiable log citations.",
    uiDesign:
      "Precision engineering interface featuring SVG telemetry sparklines, status node indicators, and clear distinction between AI deductions and verified system facts.",
    technicalArchitecture:
      "Vector embeddings generated over system logs and incident runbooks, orchestrated through function-calling pipelines connecting directly to time-series endpoints.",
    development:
      "Implemented with streaming token responses, server-sent events for live telemetry, and strict output sanitization guardrails.",
    integrations: [
      "Vector Database (Qdrant / pgvector)",
      "Prometheus & OpenTelemetry Adapters",
      "Slack Webhook Incident Bot",
      "PagerDuty On-Call Triggers",
    ],
    responsiveImplementation:
      "Optimized for mobile on-call engineers with vertical metric cards, one-tap runbook executions, and quick triage responses.",
    keyTakeaways: [
      "AI diagnostics must always provide clickable source log citations.",
      "Streaming tokens keep time-to-first-token under 350ms for urgent queries.",
      "Grounded RAG architecture eliminates diagnostic hallucinations.",
    ],
    techStack: ["React", "TypeScript", "Node.js", "Vector DB", "OpenTelemetry", "Tailwind CSS"],
    metricsVerified: true,
    featured: true,
  },
  {
    slug: "omniroute",
    title: "OmniRoute",
    subtitle: "Event-Driven Webhook Dispatcher & Workflow Automation Engine",
    badge: "PRODUCTION ARCHITECTURE",
    category: "AUTOMATION",
    services: ["Automation", "Backend + APIs", "Support + Scaling"],
    year: "2024",
    summary:
      "A resilient webhook routing pipeline processing asynchronous multi-step business workflows with idempotent execution and retry queues.",
    overview:
      "OmniRoute is a robust architectural build designed to handle high-concurrency webhook ingestion, payload normalization, and multi-destination dispatching.",
    challenge:
      "Third-party webhook failures, rate limits, and network hiccups frequently cause silent data loss and out-of-order execution in multi-SaaS workflows.",
    goals: [
      "Zero-data-loss guaranteed ingestion with HMAC signature verification",
      "Exponential backoff retry queues with dead-letter queue management",
      "Visual workflow builder with live payload inspection",
      "Bi-directional synchronization between CRM, Payment, and Database endpoints",
    ],
    discovery:
      "Traditional point-to-point API integrations lack centralized observability, making silent webhook drops difficult to diagnose until customer tickets escalate.",
    uxArchitecture:
      "Node-and-edge visual graph canvas mapping triggers, transform scripts, conditional filters, and final dispatch destinations.",
    uiDesign:
      "Technical blueprint visual aesthetic with live data flow pulse animations, execution time badges, and instant JSON diff inspect panels.",
    technicalArchitecture:
      "Event-driven architecture with Redis queue buffers, serverless worker execution pools, and PostgreSQL audit log persistence.",
    development:
      "Engineered with strict idempotency keys, payload sanitization middleware, and automated alert dispatchers on consecutive endpoint failures.",
    integrations: [
      "Stripe & Payment Webhooks",
      "HubSpot & CRM API Sync",
      "PostgreSQL Event Store",
      "Discord & Slack Alert Bots",
    ],
    responsiveImplementation:
      "Clean status dashboards accessible on tablet and mobile viewports with quick-pause triggers and live error replay buttons.",
    keyTakeaways: [
      "Idempotency keys prevent duplicate billing or CRM updates during retries.",
      "Dead-letter queues isolate failing payloads without blocking the main event stream.",
      "Visual execution graphs allow non-engineers to debug workflow bottlenecks quickly.",
    ],
    techStack: ["Node.js", "Redis", "PostgreSQL", "Next.js", "Prisma", "Tailwind CSS"],
    metricsVerified: true,
    featured: true,
  },
  {
    slug: "strata-design-system",
    title: "Strata System",
    subtitle: "Multi-Platform Component Library & Token Synchronizer",
    badge: "INTERNAL BUILD",
    category: "UI/UX",
    services: ["UI/UX Design", "Web Development"],
    year: "2024",
    summary:
      "An accessible, token-driven design system engineered for high-density enterprise tools and responsive digital web applications.",
    overview:
      "Strata is an internal design system repository establishing standard spacing, high-contrast dark theme palettes, keyboard focus states, and component states.",
    challenge:
      "Design inconsistencies between Figma prototypes and production frontend code create friction, slow down sprint velocity, and degrade user experience.",
    goals: [
      "100% token synchronization between Figma variables and Tailwind CSS",
      "WCAG 2.1 AA accessibility compliance across all components",
      "Comprehensive keyboard navigation and focus management",
      "Sub-20kb zero-dependency bundle overhead",
    ],
    discovery:
      "Auditing multi-product teams revealed that 40% of UI bugs stemmed from inconsistent spacing variables and non-standardized modal focus traps.",
    uxArchitecture:
      "Component hierarchy organized into atomic tokens, foundational primitives, interactive molecules, and complete page templates.",
    uiDesign:
      "Geometric typography, modular 8px byte-grids, subtle corner notches, and deliberate micro-interaction feedback states.",
    technicalArchitecture:
      "Automated token pipeline compiling JSON design tokens into CSS custom variables and Tailwind theme extensions.",
    development:
      "Strict semantic HTML with ARIA attribute tests, fluid typography clamp calculations, and comprehensive Storybook documentation.",
    integrations: [
      "Figma Tokens Studio API",
      "Storybook Component Explorer",
      "Automated Axe Accessibility Linter",
      "NPM Package Registry",
    ],
    responsiveImplementation:
      "Fluid scaling curves ensuring identical usability from 320px mobile screens to large desktop monitors.",
    keyTakeaways: [
      "Token-driven architectures eliminate design-to-code translation errors.",
      "Accessibility must be built into component primitives, not patched afterwards.",
      "Micro-animations must respect `prefers-reduced-motion` settings.",
    ],
    techStack: ["TypeScript", "Tailwind CSS", "React", "Figma API", "Storybook"],
    metricsVerified: true,
    featured: false,
  },
];
