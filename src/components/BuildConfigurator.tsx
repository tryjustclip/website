"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Globe, 
  Layers, 
  LayoutDashboard, 
  Terminal, 
  Bot, 
  Zap, 
  Cpu, 
  Check, 
  ArrowRight,
  Sparkles
} from "lucide-react";

interface BuildOption {
  id: string;
  name: string;
  icon: typeof Globe;
  scope: string;
  possibleDeliverables: string[];
  relevantCapabilities: string[];
  suggestedNextStep: string;
}

const buildOptions: BuildOption[] = [
  {
    id: "website",
    name: "Website",
    icon: Globe,
    scope: "High-performance marketing, startup launch platform, or corporate website engineered with Next.js and headless CMS.",
    possibleDeliverables: [
      "Custom responsive UI with strict typography scale",
      "Headless CMS integration (Sanity / Strapi / Payload)",
      "Core Web Vitals 95+ performance optimization",
      "Complete SEO architecture, OpenGraph & XML sitemaps",
    ],
    relevantCapabilities: [
      "Next.js App Router",
      "Tailwind CSS Tokens",
      "WCAG AA Accessibility",
      "SSR / Static Generation",
    ],
    suggestedNextStep: "Define brand assets, page inventory, and content structure during Discovery.",
  },
  {
    id: "saas-product",
    name: "SaaS Product",
    icon: Layers,
    scope: "Fullstack digital product or subscription web application with authentication, billing, and database architecture.",
    possibleDeliverables: [
      "Modular React / TypeScript frontend application",
      "Authentication & Role-Based Access Control (RBAC)",
      "Stripe / Razorpay subscription billing & webhooks",
      "PostgreSQL relational database schema & migrations",
    ],
    relevantCapabilities: [
      "Fullstack Next.js / Node.js",
      "PostgreSQL & Prisma",
      "Payment Webhooks",
      "State Isolation",
    ],
    suggestedNextStep: "Map user roles, core user journeys, and database entities.",
  },
  {
    id: "dashboard",
    name: "Dashboard",
    icon: LayoutDashboard,
    scope: "Data-heavy client portal, operations analytics console, or internal management tool with real-time graphs.",
    possibleDeliverables: [
      "Interactive data visualization charts & sparklines",
      "High-density responsive grid layouts",
      "Granular filtering, search & export to CSV/PDF",
      "Fast cached queries and WebSocket live updates",
    ],
    relevantCapabilities: [
      "Dashboard UX Architecture",
      "Time-Series Visualization",
      "Sub-50ms State Response",
      "Secure Auth Layers",
    ],
    suggestedNextStep: "Audit metric data sources and wireframe primary dashboard layouts.",
  },
  {
    id: "api",
    name: "Backend / API",
    icon: Terminal,
    scope: "Scalable REST or GraphQL API gateway, microservice backend, and database layer for multi-platform products.",
    possibleDeliverables: [
      "Standardized REST / GraphQL API endpoints",
      "Secure JWT / OAuth2 authentication middleware",
      "Asynchronous worker queues & background jobs",
      "Interactive OpenAPI / Swagger developer documentation",
    ],
    relevantCapabilities: [
      "API Architecture",
      "PostgreSQL & Redis",
      "Rate Limiting & Security",
      "Idempotent Webhooks",
    ],
    suggestedNextStep: "Review API endpoints, third-party dependencies, and authentication flow.",
  },
  {
    id: "ai-assistant",
    name: "AI Assistant",
    icon: Bot,
    scope: "Grounded conversational copilot or customer support assistant connected directly to company documentation and backend APIs.",
    possibleDeliverables: [
      "Vector search (RAG) pipeline over verified documents",
      "Function-calling API integration for real-time lookups",
      "Hallucination guardrails and deterministic fallbacks",
      "Responsive streaming chat interface with citation links",
    ],
    relevantCapabilities: [
      "RAG Vector Embeddings",
      "LLM Function Calling",
      "Conversation Analytics",
      "Safety Guardrails",
    ],
    suggestedNextStep: "Curate verified documentation and define permitted assistant action boundaries.",
  },
  {
    id: "automation",
    name: "Automation",
    icon: Zap,
    scope: "Event-driven workflow automations connecting CRM, payment systems, forms, databases, and team alerts.",
    possibleDeliverables: [
      "Lead routing & automatic CRM enrichment",
      "Multi-step transactional & notification workflows",
      "Webhook listeners with retry queues & HMAC validation",
      "Failure alert bots dispatched to Slack/Discord",
    ],
    relevantCapabilities: [
      "Event-Driven Pipelines",
      "CRM & Webhook Sync",
      "Exponential Backoff",
      "Operational Dashboards",
    ],
    suggestedNextStep: "Map manual operational touchpoints and data handoff requirements.",
  },
  {
    id: "custom",
    name: "Something Custom",
    icon: Cpu,
    scope: "Unique multi-disciplinary technical builds combining custom hardware integrations, mobile views, or proprietary engines.",
    possibleDeliverables: [
      "Tailored system architecture and feasibility audit",
      "Iterative sprint-based build milestones",
      "Complete custom frontend and backend engineering",
      "Comprehensive handoff and deployment guide",
    ],
    relevantCapabilities: [
      "Full Product Engineering",
      "Custom Architecture",
      "Cross-Platform Sync",
      "Technical Advisory",
    ],
    suggestedNextStep: "Schedule a technical consultation to review your custom requirements.",
  },
];

export function BuildConfigurator() {
  const [selectedId, setSelectedId] = useState<string>("website");

  const currentOption =
    buildOptions.find((opt) => opt.id === selectedId) || buildOptions[0];

  return (
    <div className="w-full bg-[#0D1117] border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2B7FFF] uppercase tracking-wider mb-2">
          <span className="px-2 py-0.5 rounded bg-[#2563EB]/10 border border-[#2563EB]/30 font-semibold">
            [CONFIGURATOR]
          </span>
          <span>INTERACTIVE BUILD SCOPE</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F4EF] tracking-tight">
          What are you trying to build?
        </h3>
        <p className="mt-2 text-sm text-[#8D96A5] max-w-2xl">
          Select a project category to view typical engineering scope, potential deliverables, and recommended capabilities.
        </p>

        {/* Selection Buttons */}
        <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
          {buildOptions.map((opt) => {
            const Icon = opt.icon;
            const isSelected = opt.id === selectedId;
            return (
              <button
                key={opt.id}
                onClick={() => setSelectedId(opt.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono-tech uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#2563EB] text-white font-semibold shadow-lg shadow-[#2563EB]/30 border border-[#3B82F6]/50"
                    : "bg-[#131923] text-[#8D96A5] hover:text-[#F5F4EF] hover:bg-[#1C2432] border border-white/10"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{opt.name}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Panel */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#070A0E] border border-white/10 rounded-xl p-6 sm:p-8">
          {/* Left Column: Scope & Deliverables */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <span className="text-[11px] font-mono-tech text-[#2B7FFF] uppercase tracking-wider">
                TYPICAL SCOPE
              </span>
              <p className="text-base text-[#F5F4EF] font-medium mt-1 leading-relaxed">
                {currentOption.scope}
              </p>
            </div>

            <div>
              <span className="text-[11px] font-mono-tech text-[#8D96A5] uppercase tracking-wider">
                POSSIBLE DELIVERABLES
              </span>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentOption.possibleDeliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-xs text-[#F5F4EF]/90 bg-[#131923] p-3 rounded border border-white/5"
                  >
                    <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Capabilities & Action */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-6">
            <div>
              <span className="text-[11px] font-mono-tech text-[#8D96A5] uppercase tracking-wider">
                RELEVANT CAPABILITIES
              </span>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {currentOption.relevantCapabilities.map((cap, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-[#131923] border border-white/10 text-xs font-mono-tech text-[#2B7FFF]"
                  >
                    {cap}
                  </span>
                ))}
              </div>

              <div className="mt-6 p-3.5 rounded bg-[#131923]/60 border border-white/5">
                <span className="text-[10px] font-mono-tech text-[#8D96A5] uppercase tracking-wider block">
                  SUGGESTED NEXT STEP
                </span>
                <p className="text-xs text-[#F5F4EF] mt-1">
                  {currentOption.suggestedNextStep}
                </p>
              </div>
            </div>

            <Link
              href={`/start-project?type=${currentOption.id}`}
              className="w-full py-3.5 px-5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-mono-tech uppercase font-semibold text-xs tracking-wider rounded-md transition-all shadow-[0_4px_15px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2 group"
            >
              <span>Discuss This Build</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
