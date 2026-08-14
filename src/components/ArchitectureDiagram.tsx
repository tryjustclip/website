"use client";

import { useState } from "react";
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
  CheckCircle2,
  Info
} from "lucide-react";

interface ArchNode {
  id: string;
  name: string;
  category: "core" | "branch";
  icon: typeof User;
  protocol: string;
  description: string;
  techExample: string;
}

const nodes: ArchNode[] = [
  {
    id: "user",
    name: "User / Client",
    category: "core",
    icon: User,
    protocol: "HTTPS / WSS",
    description: "Multi-viewport client device sending encrypted requests via global Edge CDN.",
    techExample: "Browser, Mobile App, Edge TLS",
  },
  {
    id: "webapp",
    name: "Web Application",
    category: "core",
    icon: Globe,
    protocol: "Next.js 15 SSR",
    description: "Server-side rendered frontend executing interactive UI components and state logic.",
    techExample: "React 19, Tailwind Tokens, Hydration Islands",
  },
  {
    id: "api",
    name: "API Gateway",
    category: "core",
    icon: Terminal,
    protocol: "REST & GraphQL",
    description: "Type-safe routing layer managing JWT auth, rate limiting, and business validation.",
    techExample: "Node.js, OpenAPI, HMAC Webhooks, OAuth 2.0",
  },
  {
    id: "db",
    name: "Database Layer",
    category: "core",
    icon: Database,
    protocol: "ACID Relational",
    description: "High-integrity persistent storage with optimized indexing and Redis cache tier.",
    techExample: "PostgreSQL, Prisma ORM, Redis Cache",
  },
  {
    id: "crm",
    name: "CRM Routing",
    category: "branch",
    icon: Users,
    protocol: "Bi-directional Webhook",
    description: "Real-time synchronization of customer lifecycle states and lead enrichment.",
    techExample: "HubSpot / Salesforce API Sync",
  },
  {
    id: "payment",
    name: "Payment Gateway",
    category: "branch",
    icon: CreditCard,
    protocol: "Idempotent Webhook",
    description: "Secure transaction processing, subscription billing, and automated invoice events.",
    techExample: "Stripe / Razorpay API with HMAC Verification",
  },
  {
    id: "ai",
    name: "AI Copilot Service",
    category: "branch",
    icon: Bot,
    protocol: "Vector Search & Stream",
    description: "RAG knowledge base querying vector embeddings with strict boundary guardrails.",
    techExample: "Qdrant / pgvector, OpenAI / Claude Function Calling",
  },
  {
    id: "automation",
    name: "Automation Worker",
    category: "branch",
    icon: Zap,
    protocol: "Asynchronous Queue",
    description: "Background execution workers handling multi-step cross-platform job pipelines.",
    techExample: "Serverless Event Queue, Exponential Backoff",
  },
  {
    id: "notification",
    name: "Alert Dispatcher",
    category: "branch",
    icon: Bell,
    protocol: "Instant Webhook",
    description: "Automated event alerts and transactional messages dispatched to Slack/Email.",
    techExample: "Slack Webhooks, SendGrid, WhatsApp API",
  },
];

export function ArchitectureDiagram() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>("api");

  const activeNode = nodes.find((n) => n.id === selectedNodeId) || nodes[2];

  return (
    <div className="w-full bg-[#0D1117] border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2B7FFF] uppercase tracking-wider mb-2">
            <span className="px-2 py-0.5 rounded bg-[#2563EB]/10 border border-[#2563EB]/30 font-semibold">
              [SYSTEM TOPOLOGY]
            </span>
            <span>END-TO-END DATA ARCHITECTURE</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F4EF] tracking-tight">
            Beyond the interface.
          </h3>
          <p className="mt-2 text-sm text-[#8D96A5] max-w-xl">
            A look at how we connect user requests to resilient backend systems, databases, payment gateways, AI copilots, and automation workers. Tap any node to inspect.
          </p>
        </div>

        {/* Selected Node Mini Inspector */}
        <div className="p-4 rounded-xl bg-[#070A0E] border border-white/10 max-w-md w-full shrink-0">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono-tech text-[#2B7FFF] uppercase">
              NODE INSPECTION: {activeNode.name}
            </span>
            <span className="text-[10px] font-mono-tech text-[#10B981]">
              ● {activeNode.protocol}
            </span>
          </div>
          <p className="text-xs text-[#F5F4EF] mt-2 leading-relaxed">
            {activeNode.description}
          </p>
          <div className="mt-2 text-[10px] font-mono-tech text-[#8D96A5]">
            <strong className="text-white/80">Stack:</strong> {activeNode.techExample}
          </div>
        </div>
      </div>

      {/* Main Interactive Diagram Canvas */}
      <div className="mt-8 flex flex-col gap-8">
        {/* Core Primary Backbone */}
        <div>
          <span className="text-[10px] font-mono-tech text-[#8D96A5] uppercase tracking-wider block mb-3">
            01 PRIMARY DATA PIPELINE
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {nodes.filter((n) => n.category === "core").map((n) => {
              const Icon = n.icon;
              const isSelected = n.id === selectedNodeId;
              return (
                <button
                  key={n.id}
                  onClick={() => setSelectedNodeId(n.id)}
                  className={`p-4 rounded-xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between gap-3 relative ${
                    isSelected
                      ? "bg-[#2563EB] text-white border border-[#3B82F6]/60 shadow-lg shadow-[#2563EB]/30"
                      : "bg-[#131923] text-[#8D96A5] hover:text-[#F5F4EF] hover:bg-[#1C2432] border border-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Icon className={`w-5 h-5 ${isSelected ? "text-white" : "text-[#2B7FFF]"}`} />
                    <span className={`text-[10px] font-mono-tech ${isSelected ? "text-white/80" : "text-[#8D96A5]"}`}>
                      CORE
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold font-mono-tech uppercase tracking-wider text-[#F5F4EF]">
                      {n.name}
                    </h4>
                    <span className={`text-[10px] font-mono-tech block mt-0.5 ${isSelected ? "text-white/80" : "text-[#8D96A5]"}`}>
                      {n.protocol}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Secondary Branches */}
        <div>
          <span className="text-[10px] font-mono-tech text-[#8D96A5] uppercase tracking-wider block mb-3">
            02 CONNECTED INTEGRATION & AUTOMATION BRANCHES
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {nodes.filter((n) => n.category === "branch").map((n) => {
              const Icon = n.icon;
              const isSelected = n.id === selectedNodeId;
              return (
                <button
                  key={n.id}
                  onClick={() => setSelectedNodeId(n.id)}
                  className={`p-3.5 rounded-xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between gap-2.5 ${
                    isSelected
                      ? "bg-[#2563EB] text-white border border-[#3B82F6]/60 shadow-lg shadow-[#2563EB]/30"
                      : "bg-[#070A0E] text-[#8D96A5] hover:text-[#F5F4EF] hover:bg-[#131923] border border-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Icon className={`w-4 h-4 ${isSelected ? "text-white" : "text-[#2B7FFF]"}`} />
                    <span className="text-[9px] font-mono-tech text-[#10B981]">
                      ● BRANCH
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold font-mono-tech uppercase tracking-wider text-[#F5F4EF]">
                      {n.name}
                    </h4>
                    <span className={`text-[10px] font-mono-tech block mt-0.5 ${isSelected ? "text-white/80" : "text-[#8D96A5]"}`}>
                      {n.protocol}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
