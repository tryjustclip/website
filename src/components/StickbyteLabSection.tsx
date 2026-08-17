"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  FlaskConical, 
  ArrowUpRight 
} from "lucide-react";


interface LabExperiment {
  id: string;
  title: string;
  badge: "INTERNAL BUILD" | "LAB CONCEPT";
  category: string;
  description: string;
  specs: string[];
  status: string;
  latency: string;
}

const experiments: LabExperiment[] = [
  {
    id: "exp-01",
    title: "AI Incident Copilot & Log Triage",
    badge: "LAB CONCEPT",
    category: "Grounded RAG / Ops",
    description: "Vector search engine querying streaming server logs in real-time to detect anomalous spikes and suggest remediation runbooks with verified citations.",
    specs: ["OpenTelemetry Ingestion", "pgvector Embeddings", "Streaming SSE Tokens", "0% Hallucination Guardrails"],
    status: "ACTIVE EXPERIMENT",
    latency: "&lt;350ms RAG",
  },
  {
    id: "exp-02",
    title: "Event-Driven CRM Webhook Dispatcher",
    badge: "INTERNAL BUILD",
    category: "Workflow Automation",
    description: "Asynchronous multi-destination webhook buffer with HMAC verification, automatic deduplication, and exponential backoff retry queues.",
    specs: ["Redis Queue Buffer", "Idempotency Keys", "Stripe → HubSpot → Slack", "Dead-Letter Isolation"],
    status: "PROD DEPLOYED",
    latency: "0 Webhook Loss",
  },
  {
    id: "exp-03",
    title: "Sub-50ms Developer Console",
    badge: "INTERNAL BUILD",
    category: "SaaS Dashboard",
    description: "High-density multi-panel workspace exploring virtualized data grids and AST-level JSON schema validation without main-thread UI stutter.",
    specs: ["React 19 Islands", "Zustand State Isolation", "Virtual List 10k Rows", "Command+K Palette"],
    status: "VERIFIED V2",
    latency: "18ms State Switch",
  },
  {
    id: "exp-04",
    title: "API Gateway Health & Telemetry Radar",
    badge: "LAB CONCEPT",
    category: "Backend Observability",
    description: "Lightweight edge telemetry scraper capturing live p95 and p99 endpoint latency distributions across global serverless regions.",
    specs: ["Edge Middleware", "Prometheus Adapter", "Global Geo Distribution", "Sub-1kb Overhead"],
    status: "PROTOTYPED",
    latency: "0.4ms Ingest Overhead",
  },
];

export function StickbyteLabSection() {
  const [activeExpId, setActiveExpId] = useState<string>("exp-01");

  return (
    <section className="relative rounded-3xl bg-[#070A0F] border border-white/10 p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl select-none">
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 forge-grid-dense opacity-25 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131A24] border border-white/10 text-xs font-mono-tech text-[#00D2FF] uppercase tracking-wider mb-4">
              <FlaskConical className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>EXPERIMENTAL ENGINE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F6F7F9] tracking-tight">
              Stickbyte Lab.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#929CAA] max-w-xl">
              Internal technical prototypes, open exploration builds, and production architecture experiments engineered in our New Delhi digital lab.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono-tech text-[#929CAA]">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span>LAB STATUS: 4 ACTIVE PROTOTYPES</span>
          </div>
        </div>

        {/* 4 Experimental Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiments.map((exp) => {
            const isSelected = exp.id === activeExpId;
            return (
              <div
                key={exp.id}
                onClick={() => setActiveExpId(exp.id)}
                className={`p-6 sm:p-8 rounded-2xl bg-[#0D121A] border transition-all duration-300 flex flex-col justify-between gap-6 cursor-pointer relative overflow-hidden group ${
                  isSelected
                    ? "border-[#00D2FF]/60 shadow-[0_0_30px_rgba(0,210,255,0.15)] bg-[#131A24]"
                    : "border-white/10 hover:border-white/25"
                }`}
              >
                {/* Card Top Meta */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2.5 py-0.5 rounded text-[10px] font-mono-tech font-bold uppercase tracking-wider border ${
                        exp.badge === "INTERNAL BUILD"
                          ? "bg-[#2563EB]/15 text-[#2B7FFF] border-[#2563EB]/40"
                          : "bg-[#00D2FF]/15 text-[#00D2FF] border-[#00D2FF]/40"
                      }`}
                    >
                      {exp.badge}
                    </span>
                    <span className="text-[10px] font-mono-tech text-[#929CAA] uppercase">
                      [{exp.category}]
                    </span>
                  </div>

                  <span className="text-[10px] font-mono-tech text-[#10B981] font-bold">
                    {exp.latency}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-xl font-bold text-[#F6F7F9] group-hover:text-[#00D2FF] transition-colors">
                    {exp.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-[#929CAA] leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                {/* Tech Specs Badges */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5 font-mono-tech text-[10px]">
                  {exp.specs.map((spec, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-[#070A0F] border border-white/10 text-[#929CAA]"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Lab Note */}
        <div className="mt-8 p-4 rounded-xl bg-[#131A24] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-[#929CAA]">
          <div className="flex items-center gap-2">
            <span className="text-[#00D2FF] font-bold">PROTOTYPE TO PRODUCTION:</span>
            <span>All lab concepts can be customized and integrated into your client build.</span>
          </div>

          <Link
            href="/start-project?type=custom"
            className="text-[#2B7FFF] hover:text-white uppercase font-bold flex items-center gap-1 shrink-0"
          >
            <span>Request a Lab Demo</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
