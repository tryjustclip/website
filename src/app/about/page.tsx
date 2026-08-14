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
  Cpu
} from "lucide-react";

export const metadata: Metadata = {
  title: "About — Small Team. Serious Builds.",
  description:
    "Stickbyte is a product engineering and digital automation studio based in New Delhi, India working with startups and businesses worldwide.",
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16 pb-24 flex flex-col gap-16 sm:gap-24">
      <Container size="lg">
        {/* Hero Section */}
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2B7FFF] uppercase tracking-wider mb-2">
            <span className="px-2 py-0.5 rounded bg-[#2563EB]/10 border border-[#2563EB]/30 font-semibold">
              [ABOUT STICKBYTE]
            </span>
            <span>PRODUCT ENGINEERING STUDIO</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F5F4EF] tracking-tight leading-[1.1]">
            Small team. Serious builds.
          </h1>
          <p className="mt-6 text-base sm:text-xl text-[#8D96A5] leading-relaxed">
            Stickbyte is a product engineering studio based in New Delhi working with businesses that need thoughtful digital design, dependable engineering, and better connected systems.
          </p>
        </div>

        {/* Studio Philosophy Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Design should clarify",
              desc: "Interfaces exist to solve user friction and convey information hierarchy, not to provide aimless visual decoration.",
              icon: Layers,
            },
            {
              title: "Code should be maintainable",
              desc: "We write clean, strictly-typed code with clear module boundaries so your internal developers can scale it with ease.",
              icon: Terminal,
            },
            {
              title: "Automation removes waste",
              desc: "Manual copy-pasting between software tools is an operational failure. Event-driven pipelines automate repetitive tasks.",
              icon: Zap,
            },
            {
              title: "Technology serves business",
              desc: "We never choose frameworks or AI tools for hype. Every architectural decision is driven by real business ROI.",
              icon: ShieldCheck,
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0D1117] border border-white/10 flex flex-col justify-between gap-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-tech text-[#2B7FFF]">
                    0{idx + 1}
                  </span>
                  <Icon className="w-5 h-5 text-[#2B7FFF]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#F5F4EF]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#8D96A5] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section: Who We Are & How We Work */}
        <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <span className="text-xs font-mono-tech text-[#2B7FFF] uppercase">
                [WHO WE ARE]
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F4EF] mt-1">
                A technical studio built for execution.
              </h2>
            </div>
            <div className="text-sm text-[#8D96A5] leading-relaxed flex flex-col gap-4">
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
              <span className="text-xs font-mono-tech text-[#10B981] uppercase">
                [HOW WE THINK]
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F4EF] mt-1">
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
                  className="p-3.5 rounded-xl bg-[#0D1117] border border-white/10 flex items-start gap-3 text-xs text-[#F5F4EF]"
                >
                  <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span>{std}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section: Where We Work */}
        <div className="mt-16 pt-12 border-t border-white/10 p-8 sm:p-12 rounded-2xl bg-[#0D1117] border border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2B7FFF] uppercase tracking-wider mb-2">
              <MapPin className="w-4 h-4 text-[#2B7FFF]" />
              <span>HQ & GLOBAL DELIVERY</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F4EF]">
              New Delhi, India · Working Worldwide
            </h3>
            <p className="mt-3 text-sm text-[#8D96A5] leading-relaxed">
              We are based in New Delhi and work seamlessly with clients across North America, Europe, the UK, the Middle East, Singapore, and Australia via asynchronous documentation and scheduled milestone reviews.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button href="/start-project" variant="primary" size="lg" icon="arrow">
              Work With Stickbyte
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
