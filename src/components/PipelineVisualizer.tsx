"use client";

import React, { useState } from "react";
import { 
  CornerDownRight, 
  Search, 
  Cpu, 
  Layers, 
  Code2, 
  Share2, 
  CheckCircle2, 
  Rocket, 
  TrendingUp 
} from "lucide-react";
import { processStages } from "@/data/process";


export function PipelineVisualizer() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const stageIcons = [
    Search,
    Cpu,
    Layers,
    Code2,
    Share2,
    CheckCircle2,
    Rocket,
    TrendingUp,
  ];

  const currentStage = processStages[activeStep] || processStages[0];
  const StageIcon = stageIcons[activeStep] || Search;

  return (
    <div className="w-full flex flex-col gap-8 select-none">
      {/* Desktop Horizontal Interactive Step Bar */}
      <div className="hidden lg:grid grid-cols-8 gap-2 bg-[#0D121A] p-2 rounded-2xl border border-white/10 shadow-xl">
        {processStages.map((stage, idx) => {
          const isActive = idx === activeStep;
          const isPassed = idx < activeStep;
          const Icon = stageIcons[idx];
          return (
            <button
              key={stage.step}
              onClick={() => setActiveStep(idx)}
              className={`p-3.5 rounded-xl text-left transition-all duration-200 cursor-pointer flex flex-col gap-2 relative ${
                isActive
                  ? "bg-[#2563EB] text-white shadow-lg shadow-[#2563EB]/40 border border-[#3B82F6]/50"
                  : "bg-transparent text-[#929CAA] hover:text-[#F6F7F9] hover:bg-white/5"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-[10px] font-mono-tech font-bold ${
                    isActive ? "text-white/90" : "text-[#2B7FFF]"
                  }`}
                >
                  [{stage.step}]
                </span>
                {isPassed ? (
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                ) : (
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-[#929CAA]"}`} />
                )}
              </div>
              <span className="text-xs font-bold font-mono-tech uppercase tracking-wider truncate">
                {stage.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Mobile Horizontal Scrollable Stage Pills */}
      <div className="flex lg:hidden overflow-x-auto gap-2 pb-2 scrollbar-none">
        {processStages.map((stage, idx) => {
          const isActive = idx === activeStep;
          return (
            <button
              key={stage.step}
              onClick={() => setActiveStep(idx)}
              className={`px-4 py-2.5 rounded-xl text-left transition-all shrink-0 text-xs font-mono-tech uppercase tracking-wider flex items-center gap-2 cursor-pointer ${
                isActive
                  ? "bg-[#2563EB] text-white font-bold shadow-md shadow-[#2563EB]/30"
                  : "bg-[#0D121A] text-[#929CAA] border border-white/10"
              }`}
            >
              <span className="text-[#2B7FFF]">[{stage.step}]</span>
              <span>{stage.name}</span>
            </button>
          );
        })}
      </div>

      {/* Active Stage Detailed Presentation Panel */}
      <div className="bg-[#0D121A] border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Stage Info & 3-Part Breakdown (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex flex-col gap-2 border-b border-white/10 pb-6">
              <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2B7FFF] uppercase tracking-wider">
                <span>PHASE {currentStage.step} OF 08</span>
                <span>·</span>
                <span className="text-[#10B981]">MILESTONE DRIVEN</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#F6F7F9] tracking-tight">
                {currentStage.name} — {currentStage.headline}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#929CAA] leading-relaxed">
                {currentStage.summary}
              </p>
            </div>

            {/* 3 Pillars for the Stage */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[#070A0F] border border-white/5 flex flex-col gap-2">
                <span className="text-[10px] font-mono-tech text-[#2B7FFF] uppercase font-bold">
                  01 WHAT HAPPENS
                </span>
                <ul className="flex flex-col gap-2 text-xs text-[#929CAA]">
                  {currentStage.whatHappens.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5 leading-snug">
                      <span className="text-[#2B7FFF] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#070A0F] border border-white/5 flex flex-col gap-2">
                <span className="text-[10px] font-mono-tech text-[#10B981] uppercase font-bold">
                  02 STICKBYTE DOES
                </span>
                <ul className="flex flex-col gap-2 text-xs text-[#929CAA]">
                  {currentStage.whatStickbyteDoes.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5 leading-snug">
                      <span className="text-[#10B981] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#070A0F] border border-white/5 flex flex-col gap-2">
                <span className="text-[10px] font-mono-tech text-[#F59E0B] uppercase font-bold">
                  03 YOU RECEIVE
                </span>
                <ul className="flex flex-col gap-2 text-xs text-[#929CAA]">
                  {currentStage.whatClientReceives.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5 leading-snug">
                      <span className="text-[#F59E0B] font-bold">•</span>
                      <span className="text-[#F6F7F9] font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Next Stage Trigger */}
            <div className="pt-2 flex items-center gap-2 text-xs font-mono-tech text-[#929CAA]">
              <CornerDownRight className="w-3.5 h-3.5 text-[#2B7FFF] shrink-0" />
              <span>
                <strong className="text-[#F6F7F9]">Next Stage Trigger:</strong> {currentStage.nextDecision}
              </span>
            </div>
          </div>

          {/* Right Column: Dynamic Stage Artifact Demonstration Mockup (5 cols) */}
          <div className="lg:col-span-5 bg-[#070A0F] border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2B7FFF]">
                <StageIcon className="w-4 h-4 text-[#2B7FFF]" />
                <span className="font-bold uppercase">{currentStage.name} ARTIFACT</span>
              </div>
              <span className="text-[10px] font-mono-tech text-[#10B981]">VERIFIED SPEC</span>
            </div>

            {/* Dynamic Stage Visual State */}
            {activeStep === 0 && (
              /* DISCOVER: Brief / Wireframe visual */
              <div className="p-4 rounded-xl bg-[#131A24] border border-white/5 flex flex-col gap-3 font-mono-tech text-xs">
                <div className="flex items-center justify-between text-[#929CAA]">
                  <span>DISCOVERY_BRIEF.md</span>
                  <span className="text-[#2B7FFF]">SCOPE ALIGNED</span>
                </div>
                <div className="space-y-2 text-[#929CAA]">
                  <div className="p-2.5 rounded bg-[#070A0F] border border-white/5">
                    <span className="text-[#10B981] font-bold">1. Target Objective:</span>
                    <p className="text-[#F6F7F9] mt-0.5">Automate manual user onboarding and speed up portal loads to under 500ms.</p>
                  </div>
                  <div className="p-2.5 rounded bg-[#070A0F] border border-white/5">
                    <span className="text-[#2B7FFF] font-bold">2. Architecture Constraints:</span>
                    <p className="text-[#F6F7F9] mt-0.5">PostgreSQL strict typing, Next.js 15 SSR, Stripe webhooks with zero retry drops.</p>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 1 && (
              /* ARCHITECT: System diagram */
              <div className="p-4 rounded-xl bg-[#131A24] border border-white/5 flex flex-col gap-3 font-mono-tech text-xs">
                <div className="flex items-center justify-between text-[#929CAA]">
                  <span>SYSTEM_TOPOLOGY_V1</span>
                  <span className="text-[#10B981]">TYPE SAFE</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="p-2.5 rounded bg-[#070A0F] border border-white/5 text-[#2B7FFF]">
                    <span>FRONTEND (Next.js)</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#070A0F] border border-white/5 text-[#2B7FFF]">
                    <span>API (Edge Node)</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#070A0F] border border-white/5 text-[#10B981]">
                    <span>DATABASE (Postgres)</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#070A0F] border border-white/5 text-[#00D2FF]">
                    <span>WORKFLOW (Queues)</span>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 2 && (
              /* DESIGN: Figma-like interface & tokens */
              <div className="p-4 rounded-xl bg-[#131A24] border border-white/5 flex flex-col gap-3 font-mono-tech text-xs">
                <div className="flex items-center justify-between text-[#929CAA]">
                  <span>DESIGN_TOKENS_STUDIO</span>
                  <span className="text-[#2B7FFF]">FIGMA SYNC 100%</span>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 p-2 rounded bg-[#070A0F] border border-white/5 flex flex-col gap-1 text-center">
                    <span className="w-4 h-4 rounded-full bg-[#2563EB] mx-auto" />
                    <span className="text-[10px] text-[#929CAA]">--sb-blue</span>
                  </div>
                  <div className="flex-1 p-2 rounded bg-[#070A0F] border border-white/5 flex flex-col gap-1 text-center">
                    <span className="w-4 h-4 rounded-full bg-[#0D121A] border border-white/30 mx-auto" />
                    <span className="text-[10px] text-[#929CAA]">--bg-dark</span>
                  </div>
                  <div className="flex-1 p-2 rounded bg-[#070A0F] border border-white/5 flex flex-col gap-1 text-center">
                    <span className="w-4 h-4 rounded-full bg-[#10B981] mx-auto" />
                    <span className="text-[10px] text-[#929CAA]">--success</span>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 3 && (
              /* BUILD: code/interface view */
              <div className="p-4 rounded-xl bg-[#131A24] border border-white/5 flex flex-col gap-2 font-mono-tech text-xs text-[#929CAA]">
                <div className="flex items-center justify-between text-[#2B7FFF]">
                  <span>src/app/page.tsx</span>
                  <span className="text-[#10B981]">TSX STRICT</span>
                </div>
                <div className="p-3 rounded bg-[#070A0F] text-[11px] text-[#F6F7F9] flex flex-col gap-1">
                  <p><span className="text-[#2B7FFF]">export default async function</span> <span className="text-[#F59E0B]">Dashboard</span>() &#123;</p>
                  <p className="pl-4"><span className="text-[#2B7FFF]">const</span> telemetry = <span className="text-[#2B7FFF]">await</span> getTelemetryData();</p>
                  <p className="pl-4"><span className="text-[#2B7FFF]">return</span> &lt;<span className="text-[#F59E0B]">PortalView</span> data=&#123;telemetry&#125; /&gt;;</p>
                  <p>&#125;</p>
                </div>
              </div>
            )}

            {activeStep === 4 && (
              /* INTEGRATE: API & webhook graph */
              <div className="p-4 rounded-xl bg-[#131A24] border border-white/5 flex flex-col gap-3 font-mono-tech text-xs">
                <div className="flex items-center justify-between text-[#929CAA]">
                  <span>INTEGRATION_MAP</span>
                  <span className="text-[#10B981]">ACTIVE CONNECTORS</span>
                </div>
                <div className="space-y-1.5 text-[11px]">
                  <div className="flex items-center justify-between p-2 rounded bg-[#070A0F]">
                    <span>Stripe Billing Webhooks</span>
                    <span className="text-[#10B981]">● Connected</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-[#070A0F]">
                    <span>CRM Lead Dispatcher</span>
                    <span className="text-[#10B981]">● Connected</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-[#070A0F]">
                    <span>Slack Alerts Bot</span>
                    <span className="text-[#10B981]">● Connected</span>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 5 && (
              /* TEST: device QA matrix */
              <div className="p-4 rounded-xl bg-[#131A24] border border-white/5 flex flex-col gap-3 font-mono-tech text-xs">
                <div className="flex items-center justify-between text-[#929CAA]">
                  <span>QA_AUDIT_MATRIX</span>
                  <span className="text-[#10B981]">100% PASSED</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-[#070A0F] text-[#10B981]">
                    ✓ Mobile 320px - 430px
                  </div>
                  <div className="p-2 rounded bg-[#070A0F] text-[#10B981]">
                    ✓ Tablet 768px - 1024px
                  </div>
                  <div className="p-2 rounded bg-[#070A0F] text-[#10B981]">
                    ✓ Desktop 1440px - 4K
                  </div>
                  <div className="p-2 rounded bg-[#070A0F] text-[#10B981]">
                    ✓ WCAG AA Compliant
                  </div>
                </div>
              </div>
            )}

            {activeStep === 6 && (
              /* LAUNCH: deployment state */
              <div className="p-4 rounded-xl bg-[#131A24] border border-white/5 flex flex-col gap-3 font-mono-tech text-xs">
                <div className="flex items-center justify-between text-[#929CAA]">
                  <span>PRODUCTION_DEPLOY</span>
                  <span className="text-[#10B981]">LIVE NOW</span>
                </div>
                <div className="p-3 rounded bg-[#070A0F] flex flex-col gap-1 text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-[#929CAA]">Global Edge CDN:</span>
                    <span className="text-[#10B981]">100% Healthy</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#929CAA]">SSL / TLS Certificate:</span>
                    <span className="text-[#10B981]">Auto-Renewing A+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#929CAA]">Core Web Vitals:</span>
                    <span className="text-[#2B7FFF]">Score: 99</span>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 7 && (
              /* IMPROVE: analytics/iteration */
              <div className="p-4 rounded-xl bg-[#131A24] border border-white/5 flex flex-col gap-3 font-mono-tech text-xs">
                <div className="flex items-center justify-between text-[#929CAA]">
                  <span>TELEMETRY_CYCLE</span>
                  <span className="text-[#2B7FFF]">CONTINUOUS SCALING</span>
                </div>
                <div className="p-3 rounded bg-[#070A0F] flex flex-col gap-1 text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-[#929CAA]">Conversion Uplift:</span>
                    <span className="text-[#10B981] font-bold">+34.8%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#929CAA]">Error Rate:</span>
                    <span className="text-[#10B981]">&lt;0.01%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#929CAA]">Next Sprint:</span>
                    <span className="text-[#2B7FFF]">Feature Expansion</span>
                  </div>
                </div>
              </div>
            )}

            {/* Step Selector Controls */}
            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <button
                disabled={activeStep === 0}
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                className="px-3.5 py-1.5 rounded-lg bg-[#131A24] text-xs font-mono-tech text-[#929CAA] hover:text-[#F6F7F9] disabled:opacity-30 disabled:cursor-not-allowed border border-white/10 cursor-pointer"
              >
                ← Prev Phase
              </button>
              <button
                disabled={activeStep === processStages.length - 1}
                onClick={() => setActiveStep((prev) => Math.min(processStages.length - 1, prev + 1))}
                className="px-3.5 py-1.5 rounded-lg bg-[#2563EB] text-xs font-mono-tech font-bold text-white hover:bg-[#1D4ED8] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer shadow-md"
              >
                Next Phase →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
