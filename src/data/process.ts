export interface ProcessPhase {
  step: string;
  name: string;
  headline: string;
  summary: string;
  whatHappens: string[];
  whatStickbyteDoes: string[];
  whatClientReceives: string[];
  nextDecision: string;
}

export const processStages: ProcessPhase[] = [
  {
    step: "01",
    name: "DISCOVER",
    headline: "Understand the business, users, constraints and true requirements.",
    summary:
      "We unpack your business objectives, target audience, competitive landscape, and technical constraints before designing or writing a single line of code.",
    whatHappens: [
      "Deep-dive technical consultation and requirement gathering",
      "Analysis of current workflows, tools, bottlenecks, and user friction",
      "Assessment of integration endpoints, security requirements, and data models",
    ],
    whatStickbyteDoes: [
      "Conduct stakeholder interviews and user workflow audits",
      "Define project scope, non-functional requirements, and core constraints",
      "Map out technical feasibility and third-party dependency analysis",
    ],
    whatClientReceives: [
      "Project Discovery Summary",
      "Technical Feasibility Matrix",
      "Defined Scope & Architecture Roadmap",
    ],
    nextDecision: "Approval of scope boundaries and architectural direction to proceed to system modeling.",
  },
  {
    step: "02",
    name: "ARCHITECT",
    headline: "Define user flows, technology stack, integrations and data schemas.",
    summary:
      "We design the complete structural blueprint of the digital product: database models, API contracts, security layers, and user navigation paths.",
    whatHappens: [
      "Information architecture mapping and entity-relationship modeling",
      "Selection of the optimal tech stack (frameworks, databases, hosting, APIs)",
      "Definition of data schemas, API contracts, and authentication protocols",
    ],
    whatStickbyteDoes: [
      "Produce detailed system architecture and data flow diagrams",
      "Draft API endpoints and payload specifications",
      "Select performance, security, and scalability benchmarks",
    ],
    whatClientReceives: [
      "System Architecture Diagram",
      "Database Schema & Entity Maps",
      "API Specification & Endpoint Contract",
    ],
    nextDecision: "Validation of data models and workflow logic prior to interface design.",
  },
  {
    step: "03",
    name: "DESIGN",
    headline: "Create UX wireframes, polished UI, design systems and prototypes.",
    summary:
      "We translate architectural flows into intuitive, high-contrast digital interfaces with meticulous attention to typography, hierarchy, and developer handoff.",
    whatHappens: [
      "Wireframe iteration and low-fidelity structural validation",
      "High-fidelity UI design in Figma with complete responsive states",
      "Creation of component design systems, tokens, and clickable prototypes",
    ],
    whatStickbyteDoes: [
      "Design clean, accessible interfaces following WCAG 2.1 AA contrast rules",
      "Build interactive prototypes to test usability and flow logic",
      "Prepare developer-ready Figma tokens and asset specifications",
    ],
    whatClientReceives: [
      "Figma UI Design System & Component Library",
      "Interactive Click-Through Prototype",
      "Design Token & Spacing Matrix",
    ],
    nextDecision: "Design sign-off and prototype approval to initiate frontend and backend engineering.",
  },
  {
    step: "04",
    name: "BUILD",
    headline: "Develop frontend, backend services and core application logic.",
    summary:
      "We write clean, strictly-typed code with modular architecture, zero runtime bloat, and fast response times across all devices.",
    whatHappens: [
      "Implementation of modular frontend components with React/Next.js & TypeScript",
      "Engineering of backend services, REST/GraphQL APIs, and database migrations",
      "State management, client-side validation, and server-side data fetching",
    ],
    whatStickbyteDoes: [
      "Develop type-safe frontend and backend modules adhering to the design system",
      "Structure database indexes, caching layers, and asynchronous queues",
      "Maintain clean Git branching with descriptive commit history",
    ],
    whatClientReceives: [
      "Working Staging Environment Build",
      "Clean TypeScript & Database Codebase",
      "Sprint Progress Reports & Code Demos",
    ],
    nextDecision: "Review of functional staging build to begin integrations and automated flows.",
  },
  {
    step: "05",
    name: "INTEGRATE",
    headline: "Connect APIs, platforms, AI assistants and automated workflows.",
    summary:
      "We bridge your product with external systems: payment gateways, CRM routing, webhook queues, transactional emails, and AI vector pipelines.",
    whatHappens: [
      "Configuration of third-party API keys, webhook handlers, and idempotency logic",
      "Implementation of AI assistants, RAG search vectors, and business logic tools",
      "Integration of automated email, notifications, and analytics pipelines",
    ],
    whatStickbyteDoes: [
      "Connect and secure all third-party services and webhook endpoints",
      "Build custom automation workers and error recovery queues",
      "Implement real-time streaming interfaces for conversational tools",
    ],
    whatClientReceives: [
      "Integrated Live Service Connections",
      "Webhook & Automation Route Documentation",
      "AI Pipeline Configuration & Guardrail Rules",
    ],
    nextDecision: "Verification of integrated data flows and readiness for end-to-end testing.",
  },
  {
    step: "06",
    name: "TEST",
    headline: "Responsive QA, accessibility, performance and functionality testing.",
    summary:
      "We stress-test the entire application across real devices, network throttling, screen readers, and automated security scans.",
    whatHappens: [
      "Cross-browser testing across mobile (320px–430px), tablet, and desktop viewports",
      "Core Web Vitals profiling, bundle analysis, and image optimization validation",
      "Axe accessibility testing, form sanitization, and security vulnerability checks",
    ],
    whatStickbyteDoes: [
      "Perform automated unit tests and manual end-to-end user flow audits",
      "Audit Core Web Vitals to guarantee 90+ Lighthouse performance scores",
      "Test edge cases: network drops, malformed payloads, rate limits, and 404s",
    ],
    whatClientReceives: [
      "Comprehensive QA & Performance Audit Report",
      "Accessibility & Security Checklist",
      "Staging Final Sign-Off Document",
    ],
    nextDecision: "Final deployment authorization to push product into production.",
  },
  {
    step: "07",
    name: "LAUNCH",
    headline: "Deploy the finished product into production environment.",
    summary:
      "We orchestrate smooth, zero-downtime production deployment with automated CI/CD, SSL configuration, DNS routing, and real-time monitoring.",
    whatHappens: [
      "Production domain DNS setup, SSL certification, and CDN caching rules",
      "Database schema migration to production instance and environmental verification",
      "Submission of XML sitemaps, robots.txt, and OpenGraph metadata to search engines",
    ],
    whatStickbyteDoes: [
      "Execute automated production build and health check verification",
      "Configure error monitoring, telemetry tracking, and automated backups",
      "Hand over repository access, environment variable configs, and documentation",
    ],
    whatClientReceives: [
      "Live Production Website & Application",
      "Complete Source Code Repository & Ownership",
      "Production Deployment Guide & Credential Handoff",
    ],
    nextDecision: "Transition into post-launch monitoring and continuous improvement cycle.",
  },
  {
    step: "08",
    name: "IMPROVE",
    headline: "Measure, maintain, secure and iterate after release.",
    summary:
      "We partner with you post-launch to monitor performance, patch dependencies, refine conversion paths, and engineer new product features.",
    whatHappens: [
      "Continuous real-time error tracking, uptime monitoring, and latency profiling",
      "Scheduled security updates, framework upgrades, and API deprecation checks",
      "Iterative UX enhancements based on real customer interaction telemetry",
    ],
    whatStickbyteDoes: [
      "Deliver proactive maintenance sprints and monthly health audits",
      "Implement rapid bug fixes and emergency SLA incident resolution",
      "Build roadmap feature enhancements and secondary automation flows",
    ],
    whatClientReceives: [
      "Monthly Performance & Telemetry Reports",
      "Continuous Code & Security Patches",
      "Ongoing Feature Sprint Releases",
    ],
    nextDecision: "Roadmap prioritization for next product iteration or automation expansion.",
  },
];
