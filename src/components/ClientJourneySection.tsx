"use client";

import React from "react";
import { 
  MessageSquare, 
  Search, 
  FileText, 
  FileCode, 
  Cpu, 
  Rocket, 
  ShieldCheck 
} from "lucide-react";
import { Button } from "@/components/Button";


interface JourneyStep {
  step: string;
  title: string;
  desc: string;
  duration: string;
  icon: typeof MessageSquare;
}

const steps: JourneyStep[] = [
  {
    step: "01",
    title: "Tell us what you want to build",
    desc: "Submit your requirements, technical bottlenecks, or product brief through our structured onboarding form or direct email.",
    duration: "Day 0",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "We review your goals & requirements",
    desc: "Our engineers evaluate technical feasibility, database dependencies, UI scope, and integration requirements.",
    duration: "Within 24h",
    icon: Search,
  },
  {
    step: "03",
    title: "We map scope & technical approach",
    desc: "We schedule a focused discovery review to align on architecture, tech stack, milestones, and deliverable specifications.",
    duration: "Days 1–2",
    icon: FileCode,
  },
  {
    step: "04",
    title: "You receive a clear project proposal",
    desc: "You get a transparent technical roadmap with defined milestone deliverables, exact pricing, and sprint timeline.",
    duration: "Days 2–3",
    icon: FileText,
  },
  {
    step: "05",
    title: "Design and engineering begin",
    desc: "Sprint begins immediately. You receive weekly live staging builds, private GitHub repo access, and milestone reviews.",
    duration: "Sprint Kickoff",
    icon: Cpu,
  },
  {
    step: "06",
    title: "We test and launch",
    desc: "Rigorous cross-device QA, Core Web Vitals profiling, security checks, and zero-downtime DNS deployment to production.",
    duration: "Launch Day",
    icon: Rocket,
  },
  {
    step: "07",
    title: "Continuous support & scaling",
    desc: "We stay on call for SLA monitoring, analytics optimization, feature iterations, and ongoing scaling.",
    duration: "Post-Launch",
    icon: ShieldCheck,
  },
];

export function ClientJourneySection() {
  return (
    <section className="relative rounded-3xl bg-[#0D121A] border border-white/10 p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl select-none">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131A24] border border-white/10 text-xs font-mono-tech text-[#2B7FFF] uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
            <span>TRANSPARENT COLLABORATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F6F7F9] tracking-tight">
            What Happens After You Contact Us?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#929CAA] leading-relaxed">
            Zero ambiguity. Here is the step-by-step roadmap from your first message to live production launch and beyond.
          </p>
        </div>

        {/* 7-Step Interactive Visual Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-3">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="p-5 rounded-2xl bg-[#070A0F] border border-white/10 hover:border-[#2563EB]/50 transition-all duration-300 flex flex-col justify-between gap-4 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-tech font-black text-[#2B7FFF]">
                    {s.step}
                  </span>
                  <span className="text-[9px] font-mono-tech text-[#10B981] font-semibold">
                    {s.duration}
                  </span>
                </div>

                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#131A24] border border-white/5 flex items-center justify-center text-[#2B7FFF] mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-bold text-[#F6F7F9] font-mono-tech leading-snug">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[11px] text-[#929CAA] leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[9px] font-mono-tech text-[#929CAA]">
                  <span>STAGE {idx + 1}</span>
                  <span className="text-[#10B981]">● READY</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-10 p-6 rounded-2xl bg-[#131A24] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping shrink-0" />
            <p className="text-xs font-mono-tech text-[#F6F7F9]">
              Ready to begin? Tell us what you want to build. We reply within 24 hours.
            </p>
          </div>

          <Button href="/start-project" variant="primary" size="sm" icon="arrow" className="shrink-0">
            Start a Project
          </Button>
        </div>
      </div>
    </section>
  );
}
