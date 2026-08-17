"use client";

import React from "react";
import { 
  Layers, 
  Zap, 
  Smartphone, 
  MessageSquare, 
  Cpu, 
  Terminal 
} from "lucide-react";


interface Pillar {
  code: string;
  title: string;
  headline: string;
  desc: string;
  icon: typeof Layers;
  metric: string;
}

const pillars: Pillar[] = [
  {
    code: "P-01",
    title: "DESIGN + ENGINEERING TOGETHER",
    headline: "Zero translation loss from Figma to code.",
    desc: "Interfaces are architected with implementation in mind, ensuring strict typography scale, responsive breakpoints, and 1:1 token sync.",
    icon: Layers,
    metric: "100% Token Sync",
  },
  {
    code: "P-02",
    title: "PERFORMANCE FROM DAY ONE",
    headline: "Sub-second load times on real 4G/5G connections.",
    desc: "We target sub-20ms TTFB, 95+ Core Web Vitals, and minimal JavaScript bundle overhead across all devices.",
    icon: Zap,
    metric: "95+ Lighthouse Score",
  },
  {
    code: "P-03",
    title: "RESPONSIVE BY DESIGN",
    headline: "Tested continuously across 320px to 4K viewports.",
    desc: "Mobile is not an afterthought patched after desktop is done. Every user flow is designed and verified across all viewports.",
    icon: Smartphone,
    metric: "320px to 4K Verified",
  },
  {
    code: "P-04",
    title: "CLEAN ARCHITECTURE",
    headline: "Strict TypeScript, modular state, zero spaghetti.",
    desc: "Well-documented APIs, isolated component state, and structured database models so internal teams can scale easily.",
    icon: Terminal,
    metric: "100% Strict Types",
  },
  {
    code: "P-05",
    title: "REAL BUSINESS AUTOMATION",
    headline: "Event-driven pipelines that eliminate busywork.",
    desc: "We connect Stripe, CRM, email systems, and databases with idempotent webhooks and self-healing retry queues.",
    icon: Cpu,
    metric: "Zero Dropped Events",
  },
  {
    code: "P-06",
    title: "DIRECT COMMUNICATION",
    headline: "Speak directly with designers and engineers.",
    desc: "No non-technical account manager intermediaries. You get direct access to the product engineers building your system.",
    icon: MessageSquare,
    metric: "Direct Slack / Discord",
  },
];

export function WhyStickbyteSection() {
  return (
    <section className="relative rounded-3xl bg-[#0D121A] border border-white/10 p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl select-none">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131A24] border border-white/10 text-xs font-mono-tech text-[#2B7FFF] uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span>STUDIO PRINCIPLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F6F7F9] tracking-tight">
            Why Stickbyte.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#929CAA] leading-relaxed">
            We avoid agency buzzwords. Our work is driven by concrete engineering standards and product thinking.
          </p>
        </div>

        {/* Monolithic 6-Section Composition */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.code}
                className="p-6 sm:p-8 rounded-2xl bg-[#070A0F] border border-white/10 hover:border-[#2563EB]/40 transition-all duration-300 flex flex-col justify-between gap-6 group hover:shadow-[0_0_25px_rgba(37,99,235,0.2)]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-tech font-bold text-[#2B7FFF]">
                    [{p.code}]
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#10B981]/15 text-[10px] font-mono-tech text-[#10B981]">
                    {p.metric}
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <Icon className="w-4 h-4 text-[#2B7FFF]" />
                    <h3 className="text-sm font-bold font-mono-tech text-[#F6F7F9] uppercase tracking-wider">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-sm font-semibold text-[#F6F7F9] mt-2">
                    {p.headline}
                  </p>
                  <p className="text-xs text-[#929CAA] leading-relaxed mt-2">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono-tech text-[#929CAA]">
                  <span>STICKBYTE BENCHMARK</span>
                  <span className="text-[#10B981] font-bold">✓ VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
