"use client";

import React, { useState } from "react";
import { 
  User, 
  Globe, 
  Terminal, 
  Database, 
  CreditCard, 
  Bot, 
  Zap, 
  Bell, 
  Users, 
  LineChart, 
  Cpu, 
  Layers 
} from "lucide-react";


interface ArchNode {
  id: string;
  name: string;
  category: "core" | "branch";
  icon: typeof User;
  protocol: string;
  description: string;
  techExample: string;
  latency: string;
}

const primaryBackbone: ArchNode[] = [
  {
    id: "user",
    name: "USER / CLIENT",
    category: "core",
    icon: User,
    protocol: "HTTPS / WSS",
    description: "Multi-viewport client device sending encrypted requests via global Edge CDN with sub-20ms TLS handshake.",
    techExample: "Mobile & Desktop Viewports, HTTP/3, TLS 1.3",
    latency: "0ms Initial",
  },
  {
    id: "interface",
    name: "INTERFACE LAYER",
    category: "core",
    icon: Layers,
    protocol: "Figma Tokens → Code",
    description: "Accessible, high-contrast design tokens mapped 1:1 with frontend components. 100% responsive fluid scaling.",
    techExample: "Tailwind CSS Tokens, Radix Primitives, WCAG AA",
    latency: "Sub-16ms Frame Rate",
  },
  {
    id: "frontend",
    name: "FRONTEND CORE",
    category: "core",
    icon: Globe,
    protocol: "Next.js 15 SSR",
    description: "Server-side rendered application with React Server Components, hydration islands, and zero bloated client payloads.",
    techExample: "React 19, TypeScript, Turbopack, Zustand",
    latency: "14ms TTFB",
  },
  {
    id: "api",
    name: "API GATEWAY",
    category: "core",
    icon: Terminal,
    protocol: "REST & GraphQL",
    description: "Type-safe routing layer managing JWT auth, HMAC webhook validation, rate limiting, and business validation rules.",
    techExample: "Node.js Edge Runtime, OpenAPI 3.0, Zod Validation",
    latency: "1.2ms Proxy Overhead",
  },
  {
    id: "backend",
    name: "BACKEND LOGIC",
    category: "core",
    icon: Cpu,
    protocol: "Asynchronous Jobs",
    description: "Modular application microservices executing business logic, transactional rules, and data normalization.",
    techExample: "Prisma ORM, BullMQ Worker Queues, Node Services",
    latency: "Sub-5ms Execution",
  },
  {
    id: "database",
    name: "DATABASE CLUSTER",
    category: "core",
    icon: Database,
    protocol: "ACID Relational",
    description: "High-integrity persistent storage with optimized indexing, connection pooling, and multi-region Redis cache tier.",
    techExample: "PostgreSQL, Prisma, Redis In-Memory Cache",
    latency: "0.8ms Cached Read",
  },
];

const integrationBranches: ArchNode[] = [
  {
    id: "crm",
    name: "CRM PIPELINE",
    category: "branch",
    icon: Users,
    protocol: "Bi-Directional Sync",
    description: "Real-time synchronization of customer lifecycle states, deal stages, and automatic lead enrichment.",
    techExample: "HubSpot / Salesforce API Sync, Webhooks",
    latency: "Instant Event Stream",
  },
  {
    id: "payment",
    name: "PAYMENT GATEWAY",
    category: "branch",
    icon: CreditCard,
    protocol: "Idempotent Webhooks",
    description: "Secure transaction processing, subscription billing cycles, and automated invoice reconciliation.",
    techExample: "Stripe & Razorpay API with HMAC Verification",
    latency: "Zero Data Drop Guarantee",
  },
  {
    id: "email",
    name: "TRANSACTIONAL EMAIL",
    category: "branch",
    icon: Bell,
    protocol: "High-Deliverability SMTP",
    description: "Dynamic passwordless auth magic links, invoice receipts, and system alerts dispatched in &lt;1 second.",
    techExample: "Resend, SendGrid, Amazon SES",
    latency: "99.8% Inbox Placement",
  },
  {
    id: "ai",
    name: "GROUNDED AI COPILOT",
    category: "branch",
    icon: Bot,
    protocol: "Vector Search & Stream",
    description: "RAG knowledge base querying vector embeddings with strict boundary guardrails and source verification.",
    techExample: "Qdrant / pgvector, OpenAI / Claude Tool Calling",
    latency: "280ms First Token",
  },
  {
    id: "automation",
    name: "WORKFLOW WORKER",
    category: "branch",
    icon: Zap,
    protocol: "Event-Driven Engine",
    description: "Background execution workers handling multi-step cross-platform job pipelines with exponential backoff.",
    techExample: "Serverless Event Queue, Dead-Letter Recovery",
    latency: "100% Idempotent Delivery",
  },
  {
    id: "analytics",
    name: "TELEMETRY & METRICS",
    category: "branch",
    icon: LineChart,
    protocol: "Real-Time Telemetry",
    description: "Privacy-focused user telemetry, server error tracing, and performance vitals aggregation.",
    techExample: "OpenTelemetry, Prometheus, PostHog",
    latency: "Zero Overhead Ingestion",
  },
];

export function ArchitectureDiagram() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>("api");

  const allNodes = [...primaryBackbone, ...integrationBranches];
  const activeNode = allNodes.find((n) => n.id === selectedNodeId) || primaryBackbone[3];

  return (
    <section className="relative rounded-3xl bg-[#0D121A] border border-white/10 p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl select-none">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header & Mini Inspector */}
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 pb-8 border-b border-white/10 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131A24] border border-white/10 text-xs font-mono-tech text-[#2B7FFF] uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
            <span>FULLSTACK SYSTEM TOPOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F6F7F9] tracking-tight">
            We Connect The Whole Stack.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#929CAA] leading-relaxed">
            From the initial user click down to persistent database schemas, payment gateways, and automated workflows. Tap any system node to inspect its engineering specifications.
          </p>
        </div>

        {/* Selected Node Live Inspector Card */}
        <div className="p-5 rounded-2xl bg-[#070A0F] border border-[#2B7FFF]/40 shadow-xl max-w-md w-full shrink-0 flex flex-col gap-3 font-mono-tech text-xs">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2B7FFF]" />
              <span className="font-bold text-[#F6F7F9] uppercase">{activeNode.name}</span>
            </div>
            <span className="text-[10px] text-[#10B981] font-semibold">{activeNode.latency}</span>
          </div>

          <p className="text-xs text-[#F6F7F9]/90 font-sans leading-relaxed">
            {activeNode.description}
          </p>

          <div className="pt-2 border-t border-white/5 flex flex-col gap-1 text-[11px]">
            <span className="text-[#929CAA]">
              <strong className="text-[#2B7FFF]">Protocol:</strong> {activeNode.protocol}
            </span>
            <span className="text-[#929CAA]">
              <strong className="text-[#F6F7F9]">Stack:</strong> {activeNode.techExample}
            </span>
          </div>
        </div>
      </div>

      {/* Main Diagram Area */}
      <div className="mt-10 flex flex-col gap-8 relative z-10">
        {/* Tier 1: Primary Data Backbone (6 Steps Flow) */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-mono-tech text-[#2B7FFF] uppercase tracking-wider font-bold">
              01 PRIMARY SYSTEM BACKBONE
            </span>
            <span className="text-[10px] font-mono-tech text-[#929CAA]">LEFT → RIGHT DATA FLOW</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {primaryBackbone.map((node, idx) => {
              const Icon = node.icon;
              const isSelected = node.id === selectedNodeId;
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`p-4 rounded-xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between gap-3 relative group ${
                    isSelected
                      ? "bg-[#2563EB] text-white border border-[#3B82F6]/60 shadow-[0_0_20px_rgba(37,99,235,0.4)] scale-105"
                      : "bg-[#131A24] text-[#929CAA] hover:text-[#F6F7F9] hover:bg-[#182131] border border-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Icon className={`w-4 h-4 ${isSelected ? "text-white" : "text-[#2B7FFF]"}`} />
                    <span className={`text-[9px] font-mono-tech ${isSelected ? "text-white/80" : "text-[#929CAA]"}`}>
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold font-mono-tech uppercase tracking-wider text-[#F6F7F9]">
                      {node.name}
                    </h4>
                    <span
                      className={`text-[9px] font-mono-tech block mt-1 truncate ${
                        isSelected ? "text-white/80" : "text-[#929CAA]"
                      }`}
                    >
                      {node.protocol}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tier 2: Connected Integration & Automation Branches */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-mono-tech text-[#10B981] uppercase tracking-wider font-bold">
              02 INTEGRATION & AUTOMATION BRANCHES
            </span>
            <span className="text-[10px] font-mono-tech text-[#929CAA]">ASYNC EVENT HOOKS</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {integrationBranches.map((node) => {
              const Icon = node.icon;
              const isSelected = node.id === selectedNodeId;
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`p-3.5 rounded-xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between gap-3 relative ${
                    isSelected
                      ? "bg-[#2563EB] text-white border border-[#3B82F6]/60 shadow-[0_0_20px_rgba(37,99,235,0.4)] scale-105"
                      : "bg-[#070A0F] text-[#929CAA] hover:text-[#F6F7F9] hover:bg-[#131A24] border border-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Icon className={`w-4 h-4 ${isSelected ? "text-white" : "text-[#10B981]"}`} />
                    <span className="text-[8px] font-mono-tech text-[#10B981] font-bold">● HOOK</span>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold font-mono-tech uppercase tracking-wider text-[#F6F7F9]">
                      {node.name}
                    </h4>
                    <span
                      className={`text-[9px] font-mono-tech block mt-0.5 truncate ${
                        isSelected ? "text-white/80" : "text-[#929CAA]"
                      }`}
                    >
                      {node.protocol}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
