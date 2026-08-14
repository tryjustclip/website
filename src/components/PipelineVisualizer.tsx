"use client";

import { useState } from "react";
import { processStages } from "@/data/process";
import { CheckCircle, ArrowRight, CornerDownRight } from "lucide-react";

export function PipelineVisualizer() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const currentStage = processStages[activeStep];

  return (
    <div className="w-full flex flex-col gap-8">
      {/* Desktop Connected Stage Switcher (Hidden on Mobile) */}
      <div className="hidden lg:grid grid-cols-8 gap-2 bg-[#0D1117] p-2 rounded-xl border border-white/10">
        {processStages.map((stage, idx) => {
          const isActive = idx === activeStep;
          return (
            <button
              key={stage.step}
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-lg text-left transition-all duration-200 cursor-pointer flex flex-col gap-1 relative ${
                isActive
                  ? "bg-[#2563EB] text-white shadow-lg shadow-[#2563EB]/30 border border-[#3B82F6]/50"
                  : "bg-transparent text-[#8D96A5] hover:text-[#F5F4EF] hover:bg-white/5"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-mono-tech ${isActive ? "text-white/80" : "text-[#2B7FFF]"}`}>
                  [{stage.step}]
                </span>
                {idx < activeStep && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                )}
              </div>
              <span className="text-xs font-bold font-mono-tech uppercase tracking-wider truncate">
                {stage.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Mobile Stage Selector Scroll (Visible on Mobile) */}
      <div className="flex lg:hidden overflow-x-auto gap-2 pb-2 scrollbar-none">
        {processStages.map((stage, idx) => {
          const isActive = idx === activeStep;
          return (
            <button
              key={stage.step}
              onClick={() => setActiveStep(idx)}
              className={`px-3.5 py-2 rounded-lg text-left transition-all shrink-0 text-xs font-mono-tech uppercase tracking-wider flex items-center gap-2 ${
                isActive
                  ? "bg-[#2563EB] text-white font-semibold"
                  : "bg-[#0D1117] text-[#8D96A5] border border-white/10"
              }`}
            >
              <span className="text-[#2B7FFF]">[{stage.step}]</span>
              <span>{stage.name}</span>
            </button>
          );
        })}
      </div>

      {/* Active Stage Detailed Card */}
      <div className="bg-[#0D1117] border border-white/10 rounded-xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2B7FFF] uppercase tracking-wider mb-1">
              <span>PHASE {currentStage.step} / 08</span>
              <span>·</span>
              <span className="text-[#10B981]">SYSTEM DISCIPLINE</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#F5F4EF] tracking-tight">
              {currentStage.name} — {currentStage.headline}
            </h3>
            <p className="mt-3 text-sm text-[#8D96A5] leading-relaxed max-w-3xl">
              {currentStage.summary}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              disabled={activeStep === 0}
              onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              className="px-3 py-1.5 rounded bg-[#131923] border border-white/10 text-xs font-mono-tech text-[#8D96A5] hover:text-[#F5F4EF] disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ← PREV
            </button>
            <button
              disabled={activeStep === processStages.length - 1}
              onClick={() => setActiveStep((prev) => Math.min(processStages.length - 1, prev + 1))}
              className="px-3 py-1.5 rounded bg-[#2563EB] border border-[#3B82F6]/40 text-xs font-mono-tech text-white hover:bg-[#1D4ED8] disabled:opacity-30 disabled:cursor-not-allowed"
            >
              NEXT →
            </button>
          </div>
        </div>

        {/* 3-Column Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="p-4 rounded-lg bg-[#070A0E] border border-white/5 flex flex-col gap-2.5">
            <span className="text-[11px] font-mono-tech text-[#2B7FFF] uppercase tracking-wider">
              01 WHAT HAPPENS
            </span>
            <ul className="flex flex-col gap-2 text-xs text-[#8D96A5]">
              {currentStage.whatHappens.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#2B7FFF] mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-lg bg-[#070A0E] border border-white/5 flex flex-col gap-2.5">
            <span className="text-[11px] font-mono-tech text-[#10B981] uppercase tracking-wider">
              02 WHAT STICKBYTE DOES
            </span>
            <ul className="flex flex-col gap-2 text-xs text-[#8D96A5]">
              {currentStage.whatStickbyteDoes.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#10B981] mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-lg bg-[#070A0E] border border-white/5 flex flex-col gap-2.5">
            <span className="text-[11px] font-mono-tech text-[#F59E0B] uppercase tracking-wider">
              03 CLIENT RECEIVES
            </span>
            <ul className="flex flex-col gap-2 text-xs text-[#8D96A5]">
              {currentStage.whatClientReceives.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#F59E0B] mt-0.5">•</span>
                  <span className="text-[#F5F4EF] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Next Decision Line */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono-tech text-[#8D96A5]">
          <CornerDownRight className="w-3.5 h-3.5 text-[#2B7FFF] shrink-0" />
          <span>
            <strong className="text-[#F5F4EF]">Next Decision:</strong> {currentStage.nextDecision}
          </span>
        </div>
      </div>
    </div>
  );
}
