import Link from "next/link";
import { servicesData } from "@/data/services";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { ArrowRight, Layers, Terminal, Bot, Zap, ShieldCheck } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="py-12 sm:py-16 pb-24 flex flex-col gap-16 select-none">
      <Container size="lg">
        {/* Hero Section */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#131A24] border border-white/10 text-xs font-mono-tech text-[#2B7FFF] uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
            <span>DISCIPLINES & CAPABILITIES</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#F6F7F9] tracking-tight leading-[1.05]">
            One team across design, engineering and automation.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#929CAA] leading-relaxed">
            We operate as a unified studio. No disjointed agency handoffs—just tightly integrated product design, frontend speed, reliable backend APIs, grounded AI copilots, and resilient workflow automation.
          </p>
        </div>

        {/* Connected Visual Architecture Ribbon */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#0D121A] border border-white/10 flex flex-col gap-4 shadow-xl">
          <span className="text-[11px] font-mono-tech text-[#929CAA] uppercase tracking-wider font-bold">
            UNIFIED STUDIO LIFECYCLE
          </span>
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono-tech text-[#F6F7F9]">
            <span className="px-3.5 py-2 rounded-xl bg-[#131A24] border border-white/10 text-[#2B7FFF] font-bold">
              DESIGN
            </span>
            <span className="text-[#929CAA]">↔</span>
            <span className="px-3.5 py-2 rounded-xl bg-[#131A24] border border-white/10 text-[#2B7FFF] font-bold">
              WEB
            </span>
            <span className="text-[#929CAA]">↔</span>
            <span className="px-3.5 py-2 rounded-xl bg-[#131A24] border border-white/10 text-[#2B7FFF] font-bold">
              BACKEND
            </span>
            <span className="text-[#929CAA]">↔</span>
            <span className="px-3.5 py-2 rounded-xl bg-[#131A24] border border-white/10 text-[#2B7FFF] font-bold">
              API
            </span>
            <span className="text-[#929CAA]">↔</span>
            <span className="px-3.5 py-2 rounded-xl bg-[#131A24] border border-white/10 text-[#2B7FFF] font-bold">
              AI
            </span>
            <span className="text-[#929CAA]">↔</span>
            <span className="px-3.5 py-2 rounded-xl bg-[#131A24] border border-white/10 text-[#10B981] font-bold">
              AUTOMATION
            </span>
          </div>
        </div>

        {/* 6 Core Service Blocks */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.values(servicesData).map((s) => (
            <div
              key={s.slug}
              className="p-6 sm:p-8 rounded-3xl bg-[#0D121A] border border-white/10 flex flex-col justify-between gap-6 hover:border-[#2563EB]/50 transition-all duration-300 group shadow-xl hover:shadow-[0_0_30px_rgba(37,99,235,0.2)]"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono-tech font-black text-[#2B7FFF]">
                    [{s.code}]
                  </span>
                  <span className="text-[10px] font-mono-tech text-[#929CAA] uppercase font-bold">
                    SERVICE SPEC
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#F6F7F9] group-hover:text-[#2B7FFF] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs text-[#2B7FFF] font-mono-tech mt-1 font-semibold">
                    {s.heroHeadline}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-[#929CAA] leading-relaxed">
                    {s.shortDescription}
                  </p>
                </div>

                {/* Capability tags */}
                <div className="pt-2 flex flex-wrap gap-1.5 font-mono-tech text-[10px]">
                  {s.capabilities.slice(0, 4).map((cap, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-[#131A24] border border-white/5 text-[#929CAA]"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href={`/services/${s.slug}`}
                className="w-full py-3 px-4 rounded-xl bg-[#131A24] hover:bg-[#2563EB] text-[#F6F7F9] text-xs font-mono-tech uppercase font-bold tracking-wider flex items-center justify-center gap-2 transition-all border border-white/10 hover:border-transparent cursor-pointer shadow-sm"
              >
                <span>View Full Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0D121A] to-[#131A24] border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-xl">
            <span className="text-xs font-mono-tech text-[#2B7FFF] uppercase tracking-wider block mb-1 font-bold">
              [LET&apos;S COLLABORATE]
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#F6F7F9]">
              Tell us what you want to build.
            </h3>
            <p className="mt-2 text-sm text-[#929CAA]">
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
