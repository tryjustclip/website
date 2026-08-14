import { Metadata } from "next";
import { processStages } from "@/data/process";
import { Container, SectionHeader } from "@/components/Container";
import { Button } from "@/components/Button";
import { PipelineVisualizer } from "@/components/PipelineVisualizer";
import { CheckCircle2, CornerDownRight, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Process — The 8-Stage Product Engineering Pipeline",
  description:
    "A clear, transparent process from initial discovery and system architecture to design, fullstack engineering, integrations, testing and continuous scaling.",
};

export default function ProcessPage() {
  return (
    <div className="py-12 sm:py-16 pb-24 flex flex-col gap-16 sm:gap-24">
      <Container size="lg">
        {/* Hero Section */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2B7FFF] uppercase tracking-wider mb-2">
            <span className="px-2 py-0.5 rounded bg-[#2563EB]/10 border border-[#2563EB]/30 font-semibold">
              [METHODOLOGY]
            </span>
            <span>NO BLACK BOX</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F5F4EF] tracking-tight leading-[1.1]">
            A clear process. No black box.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#8D96A5] leading-relaxed">
            Every product we build moves through eight deliberate, testable stages. You always know what is being architected, what deliverables are produced, and what decision triggers the next phase.
          </p>
        </div>

        {/* Interactive Visualizer */}
        <div className="mt-12">
          <PipelineVisualizer />
        </div>

        {/* Detailed 8-Phase Architectural Breakdown */}
        <div className="mt-16 pt-12 border-t border-white/10 flex flex-col gap-12">
          <SectionHeader
            code="ROADMAP"
            eyebrow="PHASE BY PHASE"
            title="Complete Engineering Lifecycle"
            description="A detailed breakdown of actions, responsibilities, and client handoffs across all eight phases."
          />

          <div className="flex flex-col gap-6">
            {processStages.map((stage) => (
              <div
                key={stage.step}
                id={`stage-${stage.step}`}
                className="p-6 sm:p-8 rounded-2xl bg-[#0D1117] border border-white/10 flex flex-col gap-6 scroll-mt-28"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="text-xl sm:text-2xl font-mono-tech font-bold text-[#2B7FFF]">
                      [{stage.step}]
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#F5F4EF]">
                        {stage.name}
                      </h3>
                      <p className="text-xs text-[#8D96A5] font-mono-tech">
                        {stage.headline}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 rounded-lg bg-[#070A0E] border border-white/5 flex flex-col gap-2">
                    <span className="text-[11px] font-mono-tech text-[#2B7FFF] uppercase">
                      What Happens
                    </span>
                    <ul className="flex flex-col gap-2 text-xs text-[#8D96A5]">
                      {stage.whatHappens.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#2B7FFF]">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg bg-[#070A0E] border border-white/5 flex flex-col gap-2">
                    <span className="text-[11px] font-mono-tech text-[#10B981] uppercase">
                      What Stickbyte Does
                    </span>
                    <ul className="flex flex-col gap-2 text-xs text-[#8D96A5]">
                      {stage.whatStickbyteDoes.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#10B981]">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg bg-[#070A0E] border border-white/5 flex flex-col gap-2">
                    <span className="text-[11px] font-mono-tech text-[#F59E0B] uppercase">
                      What You Receive
                    </span>
                    <ul className="flex flex-col gap-2 text-xs text-[#8D96A5]">
                      {stage.whatClientReceives.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#F59E0B]">•</span>
                          <span className="text-[#F5F4EF] font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center gap-2 text-xs font-mono-tech text-[#8D96A5]">
                  <CornerDownRight className="w-3.5 h-3.5 text-[#2B7FFF] shrink-0" />
                  <span>
                    <strong className="text-white">Next Stage Trigger:</strong> {stage.nextDecision}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 sm:p-12 rounded-2xl bg-[#0D1117] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-xs font-mono-tech text-[#2B7FFF] uppercase tracking-wider block mb-1">
              [START STAGE 01]
            </span>
            <h3 className="text-2xl font-bold text-[#F5F4EF]">
              Ready to begin with Discovery?
            </h3>
            <p className="mt-1 text-sm text-[#8D96A5]">
              Let&apos;s evaluate your requirements and architect a solid plan.
            </p>
          </div>
          <Button href="/start-project" variant="primary" size="lg" icon="arrow">
            Start With Discovery
          </Button>
        </div>
      </Container>
    </div>
  );
}
