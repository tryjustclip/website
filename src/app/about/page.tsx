import { Metadata } from "next";
import { Container, SectionHeader } from "@/components/Container";
import { Button } from "@/components/Button";
import { siteConfig } from "@/data/siteConfig";
import { 
  MapPin, 
  Check, 
  Terminal, 
  Layers, 
  Zap, 
  ShieldCheck,
  Code2,
  Cpu,
  Sparkles,
  ArrowRight,
  Globe
} from "lucide-react";

export const metadata: Metadata = {
  title: "About — Small Team. Serious Builds.",
  description:
    "Stickbyte is a product engineering and digital automation studio based in New Delhi, India working with startups and businesses worldwide.",
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16 pb-24 flex flex-col gap-16 sm:gap-24 select-none">
      <Container size="lg">
        {/* Hero Section */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#131A24] border border-white/10 text-xs font-mono-tech text-[#2B7FFF] uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
            <span>ABOUT STICKBYTE STUDIO</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#F6F7F9] tracking-tight leading-[1.05]">
            Small team. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#2B7FFF] to-[#00D2FF]">
              Serious builds.
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-xl text-[#929CAA] leading-relaxed max-w-2xl">
            Stickbyte is a product engineering studio based in New Delhi working with businesses that need thoughtful digital design, dependable engineering, and better connected systems.
          </p>
        </div>

        {/* Studio Philosophy 4-Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Design should clarify",
              desc: "Interfaces exist to solve user friction and convey information hierarchy, not to provide aimless visual decoration.",
              icon: Layers,
              code: "01",
            },
            {
              title: "Code should be maintainable",
              desc: "We write clean, strictly-typed code with clear module boundaries so your internal developers can scale it with ease.",
              icon: Terminal,
              code: "02",
            },
            {
              title: "Automation removes waste",
              desc: "Manual copy-pasting between software tools is an operational failure. Event-driven pipelines automate repetitive tasks.",
              icon: Zap,
              code: "03",
            },
            {
              title: "Technology serves business",
              desc: "We never choose frameworks or AI tools for hype. Every architectural decision is driven by real business ROI.",
              icon: ShieldCheck,
              code: "04",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.code}
                className="p-6 rounded-2xl bg-[#0D121A] border border-white/10 hover:border-[#2563EB]/40 transition-all duration-300 flex flex-col justify-between gap-6 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-tech font-bold text-[#2B7FFF]">
                    [{item.code}]
                  </span>
                  <Icon className="w-5 h-5 text-[#2B7FFF]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#F6F7F9]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#929CAA] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section: Who We Are & How We Think */}
        <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <span className="text-xs font-mono-tech text-[#2B7FFF] uppercase font-bold">
                [WHO WE ARE]
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#F6F7F9] mt-1">
                A technical studio built for execution.
              </h2>
            </div>
            <div className="text-sm text-[#929CAA] leading-relaxed flex flex-col gap-4">
              <p>
                Unlike traditional creative agencies layered with non-technical account managers, Stickbyte is run directly by product designers, software engineers, and automation architects.
              </p>
              <p>
                When you collaborate with us, you speak directly with the people designing your user flows, writing your TypeScript code, architecting your database schema, and configuring your webhooks.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <span className="text-xs font-mono-tech text-[#10B981] uppercase font-bold">
                [HOW WE THINK]
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#F6F7F9] mt-1">
                Engineering standards we never compromise.
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {[
                "100% Type safety with strict TypeScript across frontend and backend.",
                "Sub-second page transitions and WCAG AA accessibility compliance.",
                "Idempotent webhook pipelines with zero event drop guarantees.",
                "Transparent weekly staging builds and complete code ownership.",
              ].map((std, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-[#0D121A] border border-white/10 flex items-start gap-3 text-xs text-[#F6F7F9]"
                >
                  <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span>{std}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section: Where We Work */}
        <div className="mt-16 pt-12 border-t border-white/10 p-8 sm:p-12 rounded-3xl bg-[#0D121A] border border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-xl relative z-10">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2B7FFF] uppercase tracking-wider mb-2">
              <MapPin className="w-4 h-4 text-[#2B7FFF]" />
              <span className="font-bold">HQ & GLOBAL DELIVERY</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#F6F7F9]">
              New Delhi, India · Working Worldwide
            </h3>
            <p className="mt-3 text-sm text-[#929CAA] leading-relaxed">
              We are based in New Delhi and work seamlessly with clients across North America, Europe, the UK, the Middle East, Singapore, and Australia via asynchronous documentation and scheduled milestone reviews.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
            <Button href="/start-project" variant="primary" size="lg" icon="arrow">
              Work With Stickbyte
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
