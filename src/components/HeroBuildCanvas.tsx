"use client";

import { useState } from "react";
import { 
  Globe, 
  Layers, 
  Terminal, 
  Bot, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Code2, 
  Cpu, 
  Database, 
  Sparkles,
  Server,
  Play
} from "lucide-react";

type TabKey = "WEB" | "UI/UX" | "API" | "CHATBOT" | "AUTOMATION";

export function HeroBuildCanvas() {
  const [activeTab, setActiveTab] = useState<TabKey>("WEB");

  const tabs: { key: TabKey; label: string; icon: typeof Globe }[] = [
    { key: "WEB", label: "01 Web", icon: Globe },
    { key: "UI/UX", label: "02 UI/UX", icon: Layers },
    { key: "API", label: "03 API", icon: Terminal },
    { key: "CHATBOT", label: "04 AI Copilot", icon: Bot },
    { key: "AUTOMATION", label: "05 Automation", icon: Zap },
  ];

  return (
    <div className="w-full bg-[#0D1117] border border-white/15 rounded-xl overflow-hidden shadow-2xl shadow-black/80 flex flex-col">
      {/* Top OS Window Bar */}
      <div className="bg-[#131923] border-b border-white/10 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
          <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
          <div className="w-3 h-3 rounded-full bg-[#10B981]/80" />
          <span className="ml-2 text-[11px] font-mono-tech text-[#8D96A5] tracking-wider hidden sm:inline-block">
            stickbyte_signal_engine.ts
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#10B981]/10 border border-[#10B981]/30 text-[10px] font-mono-tech text-[#10B981]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            LIVE PIPELINE
          </span>
        </div>
      </div>

      {/* Interactive Tabs */}
      <div className="bg-[#070A0E] border-b border-white/10 flex items-center overflow-x-auto scrollbar-none px-2 py-1.5 gap-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded text-xs font-mono-tech uppercase tracking-wider transition-all whitespace-nowrap ${
                isActive
                  ? "bg-[#2563EB] text-white font-semibold shadow-md shadow-[#2563EB]/30"
                  : "text-[#8D96A5] hover:text-[#F5F4EF] hover:bg-white/5"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Canvas Display Area */}
      <div className="p-4 sm:p-6 bg-[#070A0E]/60 min-h-[340px] flex flex-col justify-center relative">
        <div className="absolute inset-0 byte-grid-dense opacity-30 pointer-events-none" />

        {/* TAB 1: WEB */}
        {activeTab === "WEB" && (
          <div className="relative z-10 flex flex-col gap-4 animate-in fade-in duration-300">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2B7FFF]">
                <Globe className="w-4 h-4 text-[#2B7FFF]" />
                <span className="font-semibold">RESPONSIVE SSR ENGINE</span>
              </div>
              <span className="text-[11px] font-mono-tech text-[#8D96A5]">TTFB: 24ms · 99.9% Vitals</span>
            </div>

            {/* Browser Frame Simulation */}
            <div className="bg-[#0D1117] border border-white/10 rounded-lg p-4 flex flex-col gap-3">
              <div className="flex items-center justify-between bg-[#131923] px-3 py-1.5 rounded text-[11px] font-mono-tech text-[#8D96A5]">
                <span>https://app.client-system.io</span>
                <span className="text-[#10B981]">200 OK · Next.js 15</span>
              </div>
              <div className="grid grid-cols-3 gap-2.5">
                <div className="p-3 rounded bg-[#131923] border border-white/5 flex flex-col gap-1">
                  <span className="text-[10px] font-mono-tech text-[#8D96A5]">CORE ENGINE</span>
                  <span className="text-xs font-semibold text-[#F5F4EF]">React Server Components</span>
                </div>
                <div className="p-3 rounded bg-[#131923] border border-white/5 flex flex-col gap-1">
                  <span className="text-[10px] font-mono-tech text-[#8D96A5]">BUNDLE WEIGHT</span>
                  <span className="text-xs font-semibold text-[#10B981]">14.2 kB (Gzip)</span>
                </div>
                <div className="p-3 rounded bg-[#131923] border border-white/5 flex flex-col gap-1">
                  <span className="text-[10px] font-mono-tech text-[#8D96A5]">ACCESSIBILITY</span>
                  <span className="text-xs font-semibold text-[#2B7FFF]">WCAG AA Certified</span>
                </div>
              </div>
              <div className="h-2 rounded-full bg-[#131923] overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#2563EB] to-[#2B7FFF] w-full" />
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: UI/UX */}
        {activeTab === "UI/UX" && (
          <div className="relative z-10 flex flex-col gap-4 animate-in fade-in duration-300">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2B7FFF]">
                <Layers className="w-4 h-4 text-[#2B7FFF]" />
                <span className="font-semibold">WIREFRAME → FIGMA → CODE TOKENS</span>
              </div>
              <span className="text-[11px] font-mono-tech text-[#8D96A5]">100% Token Sync</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded bg-[#0D1117] border border-dashed border-white/20 flex flex-col gap-2">
                <span className="text-[10px] font-mono-tech text-[#8D96A5]">[STAGE 01: UX MAP]</span>
                <p className="text-xs text-[#F5F4EF] font-medium">User Journey & Hierarchy</p>
                <div className="h-1.5 bg-white/10 rounded w-3/4" />
                <div className="h-1.5 bg-white/10 rounded w-1/2" />
              </div>
              <div className="p-3.5 rounded bg-[#0D1117] border border-[#2563EB]/40 flex flex-col gap-2 relative">
                <span className="text-[10px] font-mono-tech text-[#2B7FFF]">[STAGE 02: HIGH-FI UI]</span>
                <p className="text-xs text-[#F5F4EF] font-medium">Design Tokens & States</p>
                <div className="flex gap-1">
                  <span className="w-3 h-3 rounded-full bg-[#2563EB]" />
                  <span className="w-3 h-3 rounded-full bg-[#131923] border border-white/20" />
                  <span className="w-3 h-3 rounded-full bg-[#10B981]" />
                </div>
              </div>
              <div className="p-3.5 rounded bg-[#0D1117] border border-[#10B981]/40 flex flex-col gap-2">
                <span className="text-[10px] font-mono-tech text-[#10B981]">[STAGE 03: TAILWIND]</span>
                <p className="text-xs text-[#F5F4EF] font-medium">Production Components</p>
                <div className="text-[10px] font-mono-tech text-[#8D96A5] truncate">
                  export const theme = &#123;...&#125;
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: API */}
        {activeTab === "API" && (
          <div className="relative z-10 flex flex-col gap-4 animate-in fade-in duration-300">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2B7FFF]">
                <Terminal className="w-4 h-4 text-[#2B7FFF]" />
                <span className="font-semibold">REST & GRAPHQL ARCHITECTURE</span>
              </div>
              <span className="text-[11px] font-mono-tech text-[#10B981]">POST /api/v1/dispatch 201</span>
            </div>

            <div className="p-4 rounded-lg bg-[#0D1117] border border-white/10 font-mono-tech text-xs flex flex-col gap-2 text-[#8D96A5]">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#2B7FFF]">curl -X POST https://api.stickbyte.io/v1/events \</span>
                <span className="text-[#10B981]">Bearer eyJhbGci...</span>
              </div>
              <div className="bg-[#131923] p-3 rounded text-[11px] text-[#F5F4EF] border border-white/5 overflow-x-auto">
                <p className="text-[#8D96A5]">&#123;</p>
                <p className="pl-4"><span className="text-[#2B7FFF]">&quot;status&quot;</span>: <span className="text-[#10B981]">&quot;active&quot;</span>,</p>
                <p className="pl-4"><span className="text-[#2B7FFF]">&quot;idempotency_key&quot;</span>: <span className="text-[#F59E0B]">&quot;req_9f8b2c&quot;</span>,</p>
                <p className="pl-4"><span className="text-[#2B7FFF]">&quot;database_latency_ms&quot;</span>: <span className="text-[#10B981]">1.8</span></p>
                <p className="text-[#8D96A5]">&#125;</p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: CHATBOT */}
        {activeTab === "CHATBOT" && (
          <div className="relative z-10 flex flex-col gap-4 animate-in fade-in duration-300">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2B7FFF]">
                <Bot className="w-4 h-4 text-[#2B7FFF]" />
                <span className="font-semibold">RAG VECTOR SEARCH + API COPILOT</span>
              </div>
              <span className="text-[11px] font-mono-tech text-[#10B981]">Grounded 0% Hallucination</span>
            </div>

            <div className="bg-[#0D1117] border border-white/10 rounded-lg p-4 flex flex-col gap-3">
              <div className="flex items-start gap-2.5">
                <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono-tech text-[#8D96A5]">USER</span>
                <p className="text-xs text-[#F5F4EF]">What is the status of shipment #SB-8921?</p>
              </div>
              <div className="flex items-start gap-2.5 bg-[#131923] p-3 rounded border border-[#2563EB]/20">
                <span className="px-2 py-0.5 rounded bg-[#2563EB]/20 text-[10px] font-mono-tech text-[#2B7FFF]">AGENT</span>
                <div className="flex flex-col gap-1 text-xs text-[#F5F4EF]">
                  <p>Shipment #SB-8921 was cleared at Delhi Hub (01:24 AM) and is currently in transit.</p>
                  <span className="text-[10px] font-mono-tech text-[#8D96A5] mt-1">
                    ✓ Verified via Logistics DB Webhook · Citation: [Log_Row #412]
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: AUTOMATION */}
        {activeTab === "AUTOMATION" && (
          <div className="relative z-10 flex flex-col gap-4 animate-in fade-in duration-300">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2B7FFF]">
                <Zap className="w-4 h-4 text-[#2B7FFF]" />
                <span className="font-semibold">EVENT-DRIVEN WORKFLOW PIPELINE</span>
              </div>
              <span className="text-[11px] font-mono-tech text-[#10B981]">Idempotent 100% Reliable</span>
            </div>

            {/* Visual Node Flow */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 p-3 bg-[#0D1117] border border-white/10 rounded-lg text-xs font-mono-tech">
              <div className="p-2.5 rounded bg-[#131923] border border-white/10 text-center w-full sm:w-auto">
                <span className="text-[#8D96A5] text-[10px]">01 TRIGGER</span>
                <p className="text-[#F5F4EF] font-semibold mt-0.5">Stripe Payment</p>
              </div>
              <ArrowRight className="w-4 h-4 text-[#2B7FFF] shrink-0 hidden sm:block" />
              <div className="p-2.5 rounded bg-[#131923] border border-[#2563EB]/40 text-center w-full sm:w-auto">
                <span className="text-[#2B7FFF] text-[10px]">02 LOGIC</span>
                <p className="text-[#F5F4EF] font-semibold mt-0.5">Generate Access Key</p>
              </div>
              <ArrowRight className="w-4 h-4 text-[#2B7FFF] shrink-0 hidden sm:block" />
              <div className="p-2.5 rounded bg-[#131923] border border-[#10B981]/40 text-center w-full sm:w-auto">
                <span className="text-[#10B981] text-[10px]">03 ACTION</span>
                <p className="text-[#F5F4EF] font-semibold mt-0.5">Sync CRM & Slack</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Status Ticker */}
      <div className="bg-[#131923] border-t border-white/10 px-4 py-2.5 flex items-center justify-between text-[11px] font-mono-tech text-[#8D96A5]">
        <div className="flex items-center gap-3">
          <span>STACK: NEXT.JS 15</span>
          <span>·</span>
          <span>TYPESCRIPT</span>
          <span>·</span>
          <span>POSTGRESQL</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#10B981] font-semibold">ALL SYSTEMS NOMINAL</span>
        </div>
      </div>
    </div>
  );
}
