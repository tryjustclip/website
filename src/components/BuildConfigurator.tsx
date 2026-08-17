"use client";

import React, { useState } from "react";
import { 
  Globe, 
  Layers, 
  LayoutDashboard, 
  Terminal, 
  Bot, 
  Zap, 
  Check 
} from "lucide-react";
import { Button } from "@/components/Button";


interface BuildOption {
  id: string;
  name: string;
  icon: typeof Globe;
  scope: string;
  possibleDeliverables: string[];
  relevantCapabilities: string[];
  suggestedNextStep: string;
  ctaText: string;
  visualSnippet: {
    type: "website" | "webapp" | "uiux" | "api" | "ai" | "automation";
    title: string;
    metrics: string[];
  };
}

const buildOptions: BuildOption[] = [
  {
    id: "website",
    name: "WEBSITE",
    icon: Globe,
    scope: "High-performance marketing, startup launch platform, or corporate website engineered with Next.js, TypeScript, and headless CMS.",
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
      "Sub-20ms TTFB",
    ],
    suggestedNextStep: "Define brand assets, page inventory, and content structure during Discovery.",
    ctaText: "Discuss a Website",
    visualSnippet: {
      type: "website",
      title: "SSR Marketing Platform",
      metrics: ["Speed Score: 99", "TTFB: 14ms", "100% SEO Ready"],
    },
  },
  {
    id: "web-app",
    name: "WEB APP",
    icon: Layers,
    scope: "Fullstack digital product or subscription SaaS web application with authentication, billing, state isolation, and database architecture.",
    possibleDeliverables: [
      "Modular React / TypeScript frontend application",
      "Authentication & Role-Based Access Control (RBAC)",
      "Stripe / Razorpay subscription billing & webhooks",
      "PostgreSQL relational database schema & migrations",
    ],
    relevantCapabilities: [
      "Fullstack Next.js 15",
      "PostgreSQL & Prisma",
      "Idempotent Webhooks",
      "Sub-50ms State Isolation",
    ],
    suggestedNextStep: "Map user roles, core user journeys, and database entities.",
    ctaText: "Discuss a Web App",
    visualSnippet: {
      type: "webapp",
      title: "SaaS Product Dashboard",
      metrics: ["Multi-Tenant DB", "RBAC Security", "Stripe Subscriptions"],
    },
  },
  {
    id: "ui-ux",
    name: "UI/UX DESIGN",
    icon: LayoutDashboard,
    scope: "Product design system, wireframing, UX journeys, interactive Figma prototypes, and complete token-to-code synchronizations.",
    possibleDeliverables: [
      "Comprehensive Figma design system & variable tokens",
      "Interactive high-fidelity prototypes & micro-states",
      "Accessible dark/light color palettes & typography clamp",
      "Direct translation into Tailwind CSS theme variables",
    ],
    relevantCapabilities: [
      "Design Systems",
      "Token Synchronization",
      "WCAG 2.1 AA Compliance",
      "Micro-Interactions",
    ],
    suggestedNextStep: "Audit existing user pain points and wireframe primary task flows.",
    ctaText: "Discuss UI/UX Design",
    visualSnippet: {
      type: "uiux",
      title: "Token-Driven Design System",
      metrics: ["100% Token Sync", "Zero Hand-off Loss", "WCAG AA"],
    },
  },
  {
    id: "api",
    name: "API & BACKEND",
    icon: Terminal,
    scope: "Scalable REST or GraphQL API gateway, microservice backend, and database layer for multi-platform products.",
    possibleDeliverables: [
      "Standardized REST & GraphQL API endpoints",
      "Secure JWT / OAuth2 authentication middleware",
      "Asynchronous worker queues & background jobs",
      "Interactive OpenAPI / Swagger developer documentation",
    ],
    relevantCapabilities: [
      "REST & GraphQL Gateways",
      "PostgreSQL & Redis",
      "Rate Limiting & Security",
      "Zero-Data-Drop Queues",
    ],
    suggestedNextStep: "Review API endpoints, third-party dependencies, and authentication flow.",
    ctaText: "Discuss Backend / API",
    visualSnippet: {
      type: "api",
      title: "Type-Safe API Gateway",
      metrics: ["Edge Runtime", "1.2ms Latency", "HMAC Signatures"],
    },
  },
  {
    id: "ai-assistant",
    name: "AI ASSISTANT",
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
      "0% Hallucination Boundary",
    ],
    suggestedNextStep: "Curate verified documentation and define permitted assistant action boundaries.",
    ctaText: "Discuss an AI Assistant",
    visualSnippet: {
      type: "ai",
      title: "Grounded Enterprise Copilot",
      metrics: ["0% Hallucination", "Clickable Citations", "Streaming SSE"],
    },
  },
  {
    id: "automation",
    name: "AUTOMATION",
    icon: Zap,
    scope: "Connect your repetitive workflows into one automated system across Stripe, CRM, Slack, email, and internal databases.",
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
    ctaText: "Discuss an Automation",
    visualSnippet: {
      type: "automation",
      title: "Trigger → Logic → CRM → Slack",
      metrics: ["Idempotent Events", "Self-Healing Retries", "Zero Busywork"],
    },
  },
];

export function BuildConfigurator() {
  const [selectedId, setSelectedId] = useState<string>("website");

  const currentOption =
    buildOptions.find((opt) => opt.id === selectedId) || buildOptions[0];

  return (
    <section className="w-full bg-[#0D121A] border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl select-none">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2B7FFF] uppercase tracking-wider mb-3">
          <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
          <span>INTERACTIVE SCOPE CONFIGURATOR</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F6F7F9] tracking-tight">
          What Do You Need To Build?
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#929CAA] max-w-2xl leading-relaxed">
          Select a project requirement to view typical engineering scope, potential deliverables, recommended capabilities, and recommended execution path.
        </p>

        {/* Selection Buttons */}
        <div className="mt-8 flex flex-wrap gap-2.5 sm:gap-3">
          {buildOptions.map((opt) => {
            const Icon = opt.icon;
            const isSelected = opt.id === selectedId;
            return (
              <button
                key={opt.id}
                onClick={() => setSelectedId(opt.id)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-3 rounded-xl text-xs font-mono-tech uppercase font-bold tracking-wider transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#2563EB] text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] border border-[#3B82F6]/60 scale-105"
                    : "bg-[#131A24] text-[#929CAA] hover:text-[#F6F7F9] hover:bg-[#182131] border border-white/10"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{opt.name}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Panel */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#070A0F] border border-white/10 rounded-2xl p-6 sm:p-8">
          {/* Left Column: Scope & Deliverables (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <span className="text-[11px] font-mono-tech text-[#2B7FFF] uppercase tracking-wider font-bold">
                TYPICAL SCOPE & ARCHITECTURE
              </span>
              <p className="text-base sm:text-lg text-[#F6F7F9] font-medium mt-2 leading-relaxed">
                {currentOption.scope}
              </p>
            </div>

            <div>
              <span className="text-[11px] font-mono-tech text-[#929CAA] uppercase tracking-wider font-bold">
                POSSIBLE DELIVERABLES
              </span>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentOption.possibleDeliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-[#F6F7F9] bg-[#131A24] p-3.5 rounded-xl border border-white/5"
                  >
                    <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Capabilities, Visual & Action (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
            <div className="flex flex-col gap-4">
              {/* Visual Snippet Box */}
              <div className="p-4 rounded-xl bg-[#131A24] border border-white/10 flex flex-col gap-2 font-mono-tech">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#2B7FFF] font-bold">{currentOption.visualSnippet.title}</span>
                  <span className="text-[#10B981]">● ACTIVE</span>
                </div>
                <div className="grid grid-cols-1 gap-1 text-[11px] text-[#929CAA] pt-1">
                  {currentOption.visualSnippet.metrics.map((m, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-[#10B981]">✓</span>
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[11px] font-mono-tech text-[#929CAA] uppercase tracking-wider font-bold">
                  RELEVANT CAPABILITIES
                </span>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {currentOption.relevantCapabilities.map((cap, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-[#131A24] border border-white/10 text-xs font-mono-tech text-[#2B7FFF]"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#131A24]/60 border border-white/5">
                <span className="text-[10px] font-mono-tech text-[#929CAA] uppercase tracking-wider block font-bold">
                  RECOMMENDED NEXT STEP
                </span>
                <p className="text-xs text-[#F6F7F9] mt-1">
                  {currentOption.suggestedNextStep}
                </p>
              </div>
            </div>

            <Button
              href={`/start-project?type=${currentOption.id}`}
              variant="primary"
              size="md"
              icon="arrow"
              className="w-full"
            >
              {currentOption.ctaText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
