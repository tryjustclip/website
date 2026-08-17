"use client";

import React, { useState } from "react";
import { 
  Layers, 
  Terminal,
  Bot,
  Zap,
  Check 
} from "lucide-react";
import { Button } from "@/components/Button";

export function WhatWeBuildSection() {
  const [activeApiTab, setActiveApiTab] = useState<"req" | "res">("res");


  return (
    <section className="relative flex flex-col gap-16 sm:gap-24">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131A24] border border-white/10 text-xs font-mono-tech text-[#2B7FFF] uppercase tracking-wider mb-4">
          <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
          <span>ENGINEERING DISCIPLINES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#F6F7F9] tracking-tight">
          What We Build.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#929CAA] leading-relaxed">
          We engineer fullstack web experiences, software products, robust backend APIs, grounded AI copilots, and resilient workflow automations.
        </p>
      </div>

      {/* FEATURE 01: WEB EXPERIENCES (Text Left, Visual Right) */}
      <div className="rounded-3xl bg-[#0D121A] border border-white/10 p-6 sm:p-10 lg:p-12 overflow-hidden relative group hover:border-[#2563EB]/40 transition-all duration-300">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
          {/* Left: Text & Specs */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl sm:text-4xl font-mono-tech font-black text-[#2B7FFF]">
                01
              </span>
              <div>
                <span className="text-[11px] font-mono-tech uppercase tracking-widest text-[#929CAA]">
                  DISCIPLINE / SPECIFICATION
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#F6F7F9] tracking-tight">
                  WEB EXPERIENCES
                </h3>
              </div>
            </div>

            <p className="text-base sm:text-lg text-[#F6F7F9]/90 font-medium leading-relaxed">
              High-performance websites built around your brand, business and users. Sub-second load times with headless CMS architecture and zero fluff.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {[
                "Corporate Websites",
                "SaaS Marketing Sites",
                "Landing Pages & Funnels",
                "E-commerce Experiences",
                "Headless CMS Portals",
                "Custom Frontend Systems",
              ].map((cap, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-mono-tech text-[#929CAA]">
                  <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                  <span className="text-[#F6F7F9]">{cap}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button href="/services/web-development" variant="primary" size="md" icon="arrow">
                Explore Web Development
              </Button>
            </div>
          </div>

          {/* Right: Live Interactive Desktop Web Interface Preview */}
          <div className="lg:col-span-6 bg-[#070A0F] border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                <span className="text-[11px] font-mono-tech text-[#929CAA] ml-2">
                  client-portal.stickbyte.io
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-[#10B981]/15 text-[10px] font-mono-tech text-[#10B981]">
                99/100 SPEED
              </span>
            </div>

            {/* Simulated Marketing Page Banner */}
            <div className="rounded-xl bg-gradient-to-r from-[#131A24] to-[#182131] border border-white/10 p-5 flex flex-col gap-3">
              <div className="w-20 h-4 bg-[#2563EB]/40 rounded" />
              <div className="w-3/4 h-6 bg-white/20 rounded" />
              <div className="w-1/2 h-3 bg-white/10 rounded" />
              <div className="flex gap-2 pt-2">
                <div className="w-24 h-7 rounded bg-[#2563EB] text-white text-[10px] font-mono-tech flex items-center justify-center font-bold">
                  LAUNCH →
                </div>
                <div className="w-24 h-7 rounded bg-white/10 text-white text-[10px] font-mono-tech flex items-center justify-center">
                  SPECS
                </div>
              </div>
            </div>

            {/* Real-time telemetry badges */}
            <div className="grid grid-cols-3 gap-2 text-center font-mono-tech">
              <div className="p-2.5 rounded-lg bg-[#131A24] border border-white/5">
                <span className="text-[9px] text-[#929CAA] block">TTFB</span>
                <span className="text-xs font-bold text-[#10B981]">14ms</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#131A24] border border-white/5">
                <span className="text-[9px] text-[#929CAA] block">LCP</span>
                <span className="text-xs font-bold text-[#2B7FFF]">0.6s</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#131A24] border border-white/5">
                <span className="text-[9px] text-[#929CAA] block">BUNDLE</span>
                <span className="text-xs font-bold text-[#F6F7F9]">18.4 kB</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURE 02: DIGITAL PRODUCTS & SAAS (Visual Left, Text Right) */}
      <div className="rounded-3xl bg-[#0D121A] border border-white/10 p-6 sm:p-10 lg:p-12 overflow-hidden relative group hover:border-[#2563EB]/40 transition-all duration-300">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#2B7FFF]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
          {/* Left: Interactive SaaS Dashboard UI Preview */}
          <div className="lg:col-span-6 order-2 lg:order-1 bg-[#070A0F] border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2 text-xs font-mono-tech text-[#F6F7F9]">
                <Layers className="w-4 h-4 text-[#2B7FFF]" />
                <span className="font-bold">NEXUS OPERATIONAL CONSOLE</span>
              </div>
              <span className="text-[10px] font-mono-tech text-[#10B981]">LIVE WEBSOCKET</span>
            </div>

            {/* Dashboard 3-Column Metrics View */}
            <div className="grid grid-cols-3 gap-2">
              <div className="p-3 rounded-lg bg-[#131A24] border border-white/5">
                <span className="text-[9px] font-mono-tech text-[#929CAA]">ACTIVE USERS</span>
                <p className="text-base font-bold text-[#F6F7F9] mt-0.5">14,892</p>
                <span className="text-[9px] font-mono-tech text-[#10B981]">+18.4% WoW</span>
              </div>
              <div className="p-3 rounded-lg bg-[#131A24] border border-white/5">
                <span className="text-[9px] font-mono-tech text-[#929CAA]">MRR PROJECTION</span>
                <p className="text-base font-bold text-[#2B7FFF] mt-0.5">$84.2K</p>
                <span className="text-[9px] font-mono-tech text-[#10B981]">ARR On Track</span>
              </div>
              <div className="p-3 rounded-lg bg-[#131A24] border border-white/5">
                <span className="text-[9px] font-mono-tech text-[#929CAA]">API LATENCY</span>
                <p className="text-base font-bold text-[#10B981] mt-0.5">2.1ms</p>
                <span className="text-[9px] font-mono-tech text-[#929CAA]">99.99% Uptime</span>
              </div>
            </div>

            {/* Mini Activity Feed */}
            <div className="rounded-lg bg-[#131A24] border border-white/5 p-3 flex flex-col gap-2 font-mono-tech text-[11px]">
              <div className="flex items-center justify-between text-[#929CAA] border-b border-white/5 pb-1.5">
                <span>EVENT STREAM</span>
                <span className="text-[#2B7FFF]">POSTGRES DB SYNC</span>
              </div>
              <div className="flex items-center justify-between text-[#F6F7F9]">
                <span className="truncate">Stripe Invoice #INV-9281 Settled</span>
                <span className="text-[#10B981]">+$240.00</span>
              </div>
              <div className="flex items-center justify-between text-[#929CAA]">
                <span className="truncate">RBAC Permission Assigned: Team Lead</span>
                <span>Just now</span>
              </div>
            </div>
          </div>

          {/* Right: Text & Specs */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl sm:text-4xl font-mono-tech font-black text-[#2B7FFF]">
                02
              </span>
              <div>
                <span className="text-[11px] font-mono-tech uppercase tracking-widest text-[#929CAA]">
                  DISCIPLINE / SPECIFICATION
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#F6F7F9] tracking-tight">
                  DIGITAL PRODUCTS & SAAS
                </h3>
              </div>
            </div>

            <p className="text-base sm:text-lg text-[#F6F7F9]/90 font-medium leading-relaxed">
              Fullstack web applications, subscription SaaS portals, internal operations tooling, and high-density dashboards designed for rapid user adoption.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {[
                "SaaS Web Applications",
                "Client & Vendor Portals",
                "Operations Dashboards",
                "Role-Based Access Control",
                "Multi-Tenant Databases",
                "Sub-50ms State Isolation",
              ].map((cap, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-mono-tech text-[#929CAA]">
                  <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                  <span className="text-[#F6F7F9]">{cap}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button href="/services/ui-ux-design" variant="primary" size="md" icon="arrow">
                Explore Digital Products
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURE 03: BACKEND + APIS (Text Left, Visual Right) */}
      <div className="rounded-3xl bg-[#0D121A] border border-white/10 p-6 sm:p-10 lg:p-12 overflow-hidden relative group hover:border-[#2563EB]/40 transition-all duration-300">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
          {/* Left: Text & Specs */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl sm:text-4xl font-mono-tech font-black text-[#2B7FFF]">
                03
              </span>
              <div>
                <span className="text-[11px] font-mono-tech uppercase tracking-widest text-[#929CAA]">
                  DISCIPLINE / SPECIFICATION
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#F6F7F9] tracking-tight">
                  BACKEND + APIS
                </h3>
              </div>
            </div>

            <p className="text-base sm:text-lg text-[#F6F7F9]/90 font-medium leading-relaxed">
              Type-safe REST & GraphQL APIs, resilient microservices, authentication gateways, and optimized PostgreSQL databases capable of scaling smoothly.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {[
                "REST & GraphQL Gateways",
                "PostgreSQL & Redis Caching",
                "Idempotent Webhook Queues",
                "JWT & OAuth2 Security",
                "OpenAPI & Swagger Docs",
                "Zero Data Loss Architecture",
              ].map((cap, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-mono-tech text-[#929CAA]">
                  <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                  <span className="text-[#F6F7F9]">{cap}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button href="/services/backend-api" variant="primary" size="md" icon="arrow">
                Explore Backend & APIs
              </Button>
            </div>
          </div>

          {/* Right: Interactive Terminal / API Runner Preview */}
          <div className="lg:col-span-6 bg-[#070A0F] border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col gap-3 font-mono-tech">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#2B7FFF]" />
                <span className="text-xs text-[#F6F7F9]">POST /api/v1/deploy</span>
              </div>
              <div className="flex gap-1">
                <button
                  onClick={() => setActiveApiTab("req")}
                  className={`px-2.5 py-1 rounded text-[10px] ${
                    activeApiTab === "req" ? "bg-[#2563EB] text-white" : "text-[#929CAA] hover:text-white"
                  }`}
                >
                  REQUEST
                </button>
                <button
                  onClick={() => setActiveApiTab("res")}
                  className={`px-2.5 py-1 rounded text-[10px] ${
                    activeApiTab === "res" ? "bg-[#2563EB] text-white" : "text-[#929CAA] hover:text-white"
                  }`}
                >
                  RESPONSE (201)
                </button>
              </div>
            </div>

            {activeApiTab === "res" ? (
              <div className="p-4 rounded-xl bg-[#131A24] border border-white/5 text-xs text-[#F6F7F9] flex flex-col gap-1 overflow-x-auto">
                <p className="text-[#929CAA]">&#123;</p>
                <p className="pl-4"><span className="text-[#2B7FFF]">&quot;status&quot;</span>: <span className="text-[#10B981]">&quot;deployed&quot;</span>,</p>
                <p className="pl-4"><span className="text-[#2B7FFF]">&quot;cluster_id&quot;</span>: <span className="text-[#F59E0B]">&quot;delhi-edge-01&quot;</span>,</p>
                <p className="pl-4"><span className="text-[#2B7FFF]">&quot;execution_ms&quot;</span>: <span className="text-[#10B981]">1.4</span>,</p>
                <p className="pl-4"><span className="text-[#2B7FFF]">&quot;signatures_verified&quot;</span>: <span className="text-[#10B981]">true</span></p>
                <p className="text-[#929CAA]">&#125;</p>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-[#131A24] border border-white/5 text-xs text-[#929CAA] flex flex-col gap-1">
                <p className="text-[#2B7FFF]">curl -X POST https://api.stickbyte.com/v1/deploy \</p>
                <p className="pl-4">-H &quot;Authorization: Bearer sb_live_key&quot; \</p>
                <p className="pl-4">-H &quot;Content-Type: application/json&quot; \</p>
                <p className="pl-4">-d &#39;&#123;&quot;service&quot;: &quot;gateway&quot;&#125;&#39;</p>
              </div>
            )}

            <div className="flex items-center justify-between text-[10px] text-[#929CAA] pt-1">
              <span>RATE LIMIT: 10,000 req/min</span>
              <span className="text-[#10B981]">● EDGE RUNTIME ACTIVE</span>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURE 04: GROUNDED AI ASSISTANTS (Visual Left, Text Right) */}
      <div className="rounded-3xl bg-[#0D121A] border border-white/10 p-6 sm:p-10 lg:p-12 overflow-hidden relative group hover:border-[#2563EB]/40 transition-all duration-300">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
          {/* Left: Conversational RAG Copilot UI */}
          <div className="lg:col-span-6 order-2 lg:order-1 bg-[#070A0F] border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col gap-3 font-mono-tech">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-[#10B981]" />
                <span className="text-xs text-[#F6F7F9] font-bold">ENTERPRISE RAG COPILOT</span>
              </div>
              <span className="text-[10px] text-[#10B981] px-2 py-0.5 rounded bg-[#10B981]/15">
                0% HALLUCINATION
              </span>
            </div>

            {/* Chat bubble simulation */}
            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-2.5">
                <span className="px-2 py-0.5 rounded bg-[#131A24] text-[10px] text-[#929CAA]">USER</span>
                <p className="text-xs text-[#F6F7F9] bg-[#131A24] p-2.5 rounded-lg border border-white/5">
                  What is the SLA threshold for payment webhook retries in Europe?
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="px-2 py-0.5 rounded bg-[#2563EB]/20 text-[10px] text-[#2B7FFF]">AGENT</span>
                <div className="flex flex-col gap-2 text-xs text-[#F6F7F9] bg-[#131A24] p-3 rounded-lg border border-[#2B7FFF]/30">
                  <p>
                    All European webhook events utilize an exponential backoff retry ceiling of <strong>5 retries across 72 hours</strong> with automatic dead-letter queue isolation.
                  </p>
                  <div className="flex items-center gap-2 text-[10px] text-[#929CAA] pt-1 border-t border-white/5">
                    <span className="text-[#10B981]">✓ Verified Source:</span>
                    <span className="text-[#2B7FFF] underline">SLA_Policy_Doc_v4.2.pdf #Page_14</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text & Specs */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl sm:text-4xl font-mono-tech font-black text-[#2B7FFF]">
                04
              </span>
              <div>
                <span className="text-[11px] font-mono-tech uppercase tracking-widest text-[#929CAA]">
                  DISCIPLINE / SPECIFICATION
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#F6F7F9] tracking-tight">
                  AI ASSISTANTS & COPILOTS
                </h3>
              </div>
            </div>

            <p className="text-base sm:text-lg text-[#F6F7F9]/90 font-medium leading-relaxed">
              Domain-specific conversational assistants, vector search engines, and custom AI chatbots grounded strictly in your company data with verified citations.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {[
                "RAG Vector Database Search",
                "Internal Knowledge Copilots",
                "Customer Support Chatbots",
                "Deterministic Guardrails",
                "LLM Function-Calling APIs",
                "Real-Time Log Ingestion",
              ].map((cap, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-mono-tech text-[#929CAA]">
                  <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                  <span className="text-[#F6F7F9]">{cap}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button href="/services/ai-chatbots" variant="primary" size="md" icon="arrow">
                Explore AI Assistants
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURE 05: AUTOMATION (Text Left, Visual Right) */}
      <div className="rounded-3xl bg-[#0D121A] border border-white/10 p-6 sm:p-10 lg:p-12 overflow-hidden relative group hover:border-[#2563EB]/40 transition-all duration-300">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D2FF]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
          {/* Left: Text & Specs */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl sm:text-4xl font-mono-tech font-black text-[#2B7FFF]">
                05
              </span>
              <div>
                <span className="text-[11px] font-mono-tech uppercase tracking-widest text-[#929CAA]">
                  DISCIPLINE / SPECIFICATION
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#F6F7F9] tracking-tight">
                  WORKFLOW AUTOMATION
                </h3>
              </div>
            </div>

            <p className="text-base sm:text-lg text-[#F6F7F9]/90 font-medium leading-relaxed">
              Connect your repetitive business workflows into one automated, reliable system. Eliminate manual copy-pasting across Stripe, CRM, Slack, and internal databases.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {[
                "Event-Driven Pipelines",
                "CRM Lead Routing & Sync",
                "Automated Billing & Invoices",
                "Multi-App Webhook Dispatchers",
                "Operational Failure Alerts",
                "Self-Healing Error Queues",
              ].map((cap, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-mono-tech text-[#929CAA]">
                  <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                  <span className="text-[#F6F7F9]">{cap}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button href="/services/automation" variant="primary" size="md" icon="arrow">
                Explore Automation
              </Button>
            </div>
          </div>

          {/* Right: Live Visual Workflow Node Graph */}
          <div className="lg:col-span-6 bg-[#070A0F] border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono-tech">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#00D2FF]" />
                <span className="text-xs text-[#F6F7F9] font-bold">TRIGGER → ACTION PIPELINE</span>
              </div>
              <span className="text-[10px] text-[#00D2FF]">0 ERRORS</span>
            </div>

            {/* 3 Step Interactive Workflow Nodes */}
            <div className="flex flex-col gap-2.5 font-mono-tech">
              <div className="p-3.5 rounded-xl bg-[#131A24] border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#2563EB]/20 text-[#2B7FFF] flex items-center justify-center text-xs font-bold">
                    01
                  </span>
                  <div>
                    <span className="text-xs font-bold text-[#F6F7F9] block">Trigger: Stripe Webhook</span>
                    <span className="text-[10px] text-[#929CAA]">Payment Succeeded ($499/mo)</span>
                  </div>
                </div>
                <span className="text-[10px] text-[#10B981]">✓ Ingested</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#131A24] border border-[#2B7FFF]/40 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#2B7FFF] text-white flex items-center justify-center text-xs font-bold">
                    02
                  </span>
                  <div>
                    <span className="text-xs font-bold text-[#F6F7F9] block">Logic: Provision API Keys & RBAC</span>
                    <span className="text-[10px] text-[#929CAA]">Generate SHA-256 Auth Token</span>
                  </div>
                </div>
                <span className="text-[10px] text-[#2B7FFF]">● Processed</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#131A24] border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#10B981]/20 text-[#10B981] flex items-center justify-center text-xs font-bold">
                    03
                  </span>
                  <div>
                    <span className="text-xs font-bold text-[#F6F7F9] block">Action: Sync CRM & Dispatch Slack</span>
                    <span className="text-[10px] text-[#929CAA]">HubSpot Deal Closed + Slack Alert</span>
                  </div>
                </div>
                <span className="text-[10px] text-[#10B981]">✓ Dispatched</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
