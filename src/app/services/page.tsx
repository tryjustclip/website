import Link from "next/link";
import { servicesData } from "@/data/services";
import { Container, SectionHeader } from "@/components/Container";
import { Button } from "@/components/Button";
import { ArrowRight, CheckCircle2, Cpu, Layers, Terminal, Bot, Zap, ShieldCheck } from "lucide-react";

export default function ServicesPage() {
  const serviceIcons = {
    "web-development": Layers,
    "ui-ux-design": Layers,
    "backend-api": Terminal,
    "ai-chatbots": Bot,
    "automation": Zap,
    "support-scaling": ShieldCheck,
  };

  return (
    <div className="py-12 sm:py-16 pb-24 flex flex-col gap-16">
      <Container size="lg">
        {/* Hero Section */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2B7FFF] uppercase tracking-wider mb-2">
            <span className="px-2 py-0.5 rounded bg-[#2563EB]/10 border border-[#2563EB]/30 font-semibold">
              [CAPABILITIES]
            </span>
            <span>END-TO-END PRODUCT ARCHITECTURE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F5F4EF] tracking-tight leading-[1.1]">
            One team across design, engineering and automation.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#8D96A5] leading-relaxed">
            We operate as a unified studio. No disjointed agency handoffs—just tightly integrated product design, frontend speed, reliable backend APIs, grounded AI copilots, and resilient workflow automation.
          </p>
        </div>

        {/* Connected Visual Architecture Ribbon */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0D1117] border border-white/10 flex flex-col gap-4">
          <span className="text-[11px] font-mono-tech text-[#8D96A5] uppercase tracking-wider">
            UNIFIED STUDIO SYSTEM
          </span>
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono-tech text-[#F5F4EF]">
            <span className="px-3 py-1.5 rounded bg-[#131923] border border-white/10 text-[#2B7FFF] font-bold">
              DESIGN
            </span>
            <span className="text-[#8D96A5]">↔</span>
            <span className="px-3 py-1.5 rounded bg-[#131923] border border-white/10 text-[#2B7FFF] font-bold">
              WEB
            </span>
            <span className="text-[#8D96A5]">↔</span>
            <span className="px-3 py-1.5 rounded bg-[#131923] border border-white/10 text-[#2B7FFF] font-bold">
              BACKEND
            </span>
            <span className="text-[#8D96A5]">↔</span>
            <span className="px-3 py-1.5 rounded bg-[#131923] border border-white/10 text-[#2B7FFF] font-bold">
              API
            </span>
            <span className="text-[#8D96A5]">↔</span>
            <span className="px-3 py-1.5 rounded bg-[#131923] border border-white/10 text-[#2B7FFF] font-bold">
              AI
            </span>
            <span className="text-[#8D96A5]">↔</span>
            <span className="px-3 py-1.5 rounded bg-[#131923] border border-white/10 text-[#10B981] font-bold">
              AUTOMATION
            </span>
          </div>
        </div>

        {/* 6 Core Service Blocks */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.values(servicesData).map((s) => (
            <div
              key={s.slug}
              className="p-6 sm:p-8 rounded-2xl bg-[#0D1117] border border-white/10 flex flex-col justify-between gap-6 hover:border-[#2563EB]/40 transition-all duration-300 group"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-tech font-bold text-[#2B7FFF]">
                    [{s.code}]
                  </span>
                  <span className="text-[10px] font-mono-tech text-[#8D96A5] uppercase">
                    SERVICE SPEC
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#F5F4EF] group-hover:text-[#2B7FFF] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs text-[#2B7FFF] font-mono-tech mt-1">
                    {s.heroHeadline}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-[#8D96A5] leading-relaxed">
                    {s.shortDescription}
                  </p>
                </div>

                {/* Capability tags */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {s.capabilities.slice(0, 4).map((cap, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-[#131923] border border-white/5 text-[11px] font-mono-tech text-[#8D96A5]"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href={`/services/${s.slug}`}
                className="w-full py-2.5 px-4 rounded bg-[#131923] hover:bg-[#2563EB] text-[#F5F4EF] text-xs font-mono-tech uppercase tracking-wider flex items-center justify-center gap-2 transition-all border border-white/10 hover:border-transparent"
              >
                <span>View Full Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#0D1117] to-[#131923] border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="max-w-xl">
            <span className="text-xs font-mono-tech text-[#2B7FFF] uppercase tracking-wider block mb-1">
              [LET&apos;S COLLABORATE]
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F4EF]">
              Tell us what you want to build.
            </h3>
            <p className="mt-2 text-sm text-[#8D96A5]">
              We evaluate your scope, identify operational bottlenecks, and recommend a clear technical architecture.
            </p>
          </div>
          <Button href="/start-project" variant="primary" size="lg" icon="arrow">
            Start a Project
          </Button>
        </div>
      </Container>
    </div>
  );
}
