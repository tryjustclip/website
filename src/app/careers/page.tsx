import { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Mail, Terminal, Layers, Zap, Bot, Code2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers — Engineering, Product & Automation",
  description:
    "Join the Stickbyte product engineering studio. We build digital products, high-speed web apps, APIs and automations for ambitious companies.",
};

export default function CareersPage() {
  const disciplines = [
    {
      title: "Fullstack Web Engineering",
      icon: Terminal,
      skills: "Next.js, TypeScript, React Server Components, Tailwind CSS, PostgreSQL",
    },
    {
      title: "UI/UX & Product Design",
      icon: Layers,
      skills: "Figma Variables, Token Systems, Interaction Design, WCAG AA Accessibility",
    },
    {
      title: "Backend & API Architecture",
      icon: Code2,
      skills: "Node.js, GraphQL, REST, Redis, Prisma, Idempotency & Webhooks",
    },
    {
      title: "AI & Automation Engineering",
      icon: Bot,
      skills: "RAG Systems, Vector Search, LLM Tool Calling, Workflow Orchestration",
    },
  ];

  return (
    <div className="py-12 sm:py-16 pb-24 flex flex-col gap-16">
      <Container size="lg">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2B7FFF] uppercase tracking-wider mb-2">
            <span className="px-2 py-0.5 rounded bg-[#2563EB]/10 border border-[#2563EB]/30 font-semibold">
              [TALENT]
            </span>
            <span>BUILD WITH STICKBYTE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F5F4EF] tracking-tight">
            Careers at Stickbyte
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#8D96A5] leading-relaxed">
            We are a small, focused team of engineers and product designers. We value craft, clean code, autonomy, and direct client impact over corporate bureaucracy.
          </p>
        </div>

        {/* Studio Disciplines */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {disciplines.map((d, i) => {
            const Icon = d.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#0D1117] border border-white/10 flex flex-col justify-between gap-6"
              >
                <Icon className="w-5 h-5 text-[#2B7FFF]" />
                <div>
                  <h3 className="text-base font-bold text-[#F5F4EF]">{d.title}</h3>
                  <p className="mt-2 text-xs text-[#8D96A5] font-mono-tech">
                    {d.skills}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Current Openings Status Banner */}
        <div className="mt-16 p-8 sm:p-12 rounded-2xl bg-[#0D1117] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#8D96A5] uppercase tracking-wider mb-2 justify-center md:justify-start">
              <span className="w-2 h-2 rounded-full bg-[#8D96A5]" />
              <span>CURRENT STATUS: NO ACTIVE PUBLIC OPENINGS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F4EF]">
              Think you would be a strong fit?
            </h2>
            <p className="mt-2 text-sm text-[#8D96A5] leading-relaxed">
              We are always excited to connect with exceptional product engineers, design system architects, and automation specialists. Introduce yourself and share your GitHub or portfolio.
            </p>
          </div>

          <a
            href={`mailto:${siteConfig.contact.email}?subject=General%20Application%20-%20Stickbyte`}
            className="px-6 py-3.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-mono-tech uppercase font-semibold text-xs tracking-wider rounded-md transition-all shadow-[0_4px_15px_rgba(37,99,235,0.4)] flex items-center gap-2 shrink-0"
          >
            <Mail className="w-4 h-4" />
            <span>Introduce Yourself</span>
          </a>
        </div>
      </Container>
    </div>
  );
}
