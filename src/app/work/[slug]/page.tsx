import { notFound } from "next/navigation";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Terminal, 
  Database,
  ArrowUpRight,
  ShieldCheck
} from "lucide-react";

export function generateStaticParams() {
  return projectsData.map((p) => ({
    slug: p.slug,
  }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  // Find next project for CTA
  const currentIndex = projectsData.findIndex((p) => p.slug === project.slug);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <div className="py-12 sm:py-16 pb-24 flex flex-col gap-16">
      <Container size="lg">
        {/* Back Link */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono-tech text-[#8D96A5] hover:text-[#2B7FFF] transition-colors mb-8 uppercase"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to all builds</span>
        </Link>

        {/* Hero Section */}
        <div className="flex flex-col gap-6 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-[#2563EB]/15 border border-[#2563EB]/30 text-xs font-mono-tech font-semibold text-[#2B7FFF] uppercase">
              {project.badge}
            </span>
            <span className="text-xs font-mono-tech text-[#8D96A5]">
              CATEGORY: {project.category}
            </span>
            <span className="text-xs font-mono-tech text-[#8D96A5]">
              YEAR: {project.year}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F5F4EF] tracking-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-xl text-[#2B7FFF] font-mono-tech uppercase">
            {project.subtitle}
          </p>

          <p className="text-sm sm:text-base md:text-lg text-[#8D96A5] leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Blueprint Visual Showcase Box */}
        <div className="mt-12 rounded-2xl bg-[#0D1117] border border-white/10 p-6 sm:p-10 relative overflow-hidden">
          <div className="absolute inset-0 byte-grid-dense opacity-20 pointer-events-none" />
          <div className="p-6 rounded-xl bg-[#070A0E] border border-white/10 flex flex-col gap-4 font-mono-tech text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-[#2B7FFF] font-bold">SYSTEM_SPECIFICATION: {project.slug}.ts</span>
              <span className="text-[#10B981]">STATUS: DEPLOYED</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div>
                <span className="text-[10px] text-[#8D96A5] uppercase">SERVICES</span>
                <p className="text-[#F5F4EF] font-semibold mt-0.5">{project.services.join(", ")}</p>
              </div>
              <div>
                <span className="text-[10px] text-[#8D96A5] uppercase">STACK</span>
                <p className="text-[#F5F4EF] font-semibold mt-0.5">{project.techStack.slice(0, 3).join(", ")}</p>
              </div>
              <div>
                <span className="text-[10px] text-[#8D96A5] uppercase">INTEGRITY</span>
                <p className="text-[#10B981] font-semibold mt-0.5">100% Type-Safe</p>
              </div>
              <div>
                <span className="text-[10px] text-[#8D96A5] uppercase">METRICS</span>
                <p className="text-[#2B7FFF] font-semibold mt-0.5">Verified Internal</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Content Layout (Sticky Rail + Case Study Narrative) */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Narrative (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            {/* 01 Overview */}
            <section className="flex flex-col gap-3">
              <span className="text-xs font-mono-tech text-[#2B7FFF] uppercase">
                [01 / OVERVIEW]
              </span>
              <h2 className="text-2xl font-bold text-[#F5F4EF]">
                Project Overview
              </h2>
              <p className="text-sm sm:text-base text-[#8D96A5] leading-relaxed">
                {project.overview}
              </p>
            </section>

            {/* 02 Challenge */}
            <section className="flex flex-col gap-3">
              <span className="text-xs font-mono-tech text-[#2B7FFF] uppercase">
                [02 / CHALLENGE]
              </span>
              <h2 className="text-2xl font-bold text-[#F5F4EF]">
                The Engineering Challenge
              </h2>
              <p className="text-sm sm:text-base text-[#8D96A5] leading-relaxed">
                {project.challenge}
              </p>
            </section>

            {/* 03 Project Goals */}
            <section className="flex flex-col gap-4">
              <span className="text-xs font-mono-tech text-[#2B7FFF] uppercase">
                [03 / GOALS]
              </span>
              <h2 className="text-2xl font-bold text-[#F5F4EF]">
                Key Engineering Goals
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.goals.map((g, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-[#0D1117] border border-white/10 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#F5F4EF]">{g}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 04 UX & UI Architecture */}
            <section className="flex flex-col gap-4">
              <span className="text-xs font-mono-tech text-[#2B7FFF] uppercase">
                [04 / DESIGN SYSTEM]
              </span>
              <h2 className="text-2xl font-bold text-[#F5F4EF]">
                UX Strategy & Interface Design
              </h2>
              <p className="text-sm sm:text-base text-[#8D96A5] leading-relaxed">
                {project.uxArchitecture}
              </p>
              <div className="p-4 rounded-xl bg-[#0D1117] border border-[#2563EB]/30 text-xs sm:text-sm text-[#F5F4EF] leading-relaxed">
                <strong className="text-[#2B7FFF] block font-mono-tech text-xs mb-1">
                  UI TOKEN SPEC:
                </strong>
                {project.uiDesign}
              </div>
            </section>

            {/* 05 Technical Architecture & Dev */}
            <section className="flex flex-col gap-4">
              <span className="text-xs font-mono-tech text-[#2B7FFF] uppercase">
                [05 / TECHNICAL STACK]
              </span>
              <h2 className="text-2xl font-bold text-[#F5F4EF]">
                Architecture & Implementation
              </h2>
              <p className="text-sm sm:text-base text-[#8D96A5] leading-relaxed">
                {project.technicalArchitecture}
              </p>
              <p className="text-sm sm:text-base text-[#8D96A5] leading-relaxed">
                {project.development}
              </p>
            </section>

            {/* 06 Takeaways */}
            <section className="flex flex-col gap-4">
              <span className="text-xs font-mono-tech text-[#10B981] uppercase">
                [06 / ARCHITECTURAL TAKEAWAYS]
              </span>
              <h2 className="text-2xl font-bold text-[#F5F4EF]">
                Verified Engineering Takeaways
              </h2>
              <div className="flex flex-col gap-3">
                {project.keyTakeaways.map((point, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#0D1117] border border-white/10 flex items-start gap-3"
                  >
                    <span className="text-xs font-mono-tech text-[#2B7FFF] font-bold">
                      [{String(idx + 1).padStart(2, "0")}]
                    </span>
                    <p className="text-xs sm:text-sm text-[#8D96A5] leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sticky Information Rail (4 cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 flex flex-col gap-6">
              {/* Scope & Tech Rail Card */}
              <div className="p-6 rounded-2xl bg-[#0D1117] border border-white/10 flex flex-col gap-5">
                <h3 className="text-xs font-mono-tech uppercase tracking-wider text-[#F5F4EF] font-bold pb-3 border-b border-white/10">
                  BUILD SPECIFICATION
                </h3>

                <div>
                  <span className="text-[10px] font-mono-tech text-[#8D96A5] uppercase">SERVICES</span>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.services.map((s, i) => (
                      <span key={i} className="px-2 py-1 rounded bg-[#131923] border border-white/10 text-xs text-[#2B7FFF] font-mono-tech">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono-tech text-[#8D96A5] uppercase">TECHNOLOGIES</span>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-[#070A0E] border border-white/5 text-[11px] text-[#F5F4EF] font-mono-tech">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono-tech text-[#8D96A5] uppercase">INTEGRATIONS</span>
                  <ul className="flex flex-col gap-1.5 mt-2 text-xs text-[#8D96A5]">
                    {project.integrations.map((integ, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                        <span>{integ}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <Button href="/start-project" variant="primary" size="md" icon="arrow" className="w-full">
                    Discuss Similar Build
                  </Button>
                </div>
              </div>

              {/* Next Case Study Preview Card */}
              <Link
                href={`/work/${nextProject.slug}`}
                className="p-6 rounded-2xl bg-[#070A0E] border border-white/10 hover:border-[#2563EB]/40 transition-colors flex flex-col gap-3 group"
              >
                <div className="flex items-center justify-between text-xs font-mono-tech text-[#8D96A5]">
                  <span>NEXT CASE STUDY</span>
                  <ArrowRight className="w-4 h-4 text-[#2B7FFF] transition-transform group-hover:translate-x-1" />
                </div>
                <h4 className="text-lg font-bold text-[#F5F4EF] group-hover:text-[#2B7FFF] transition-colors">
                  {nextProject.title}
                </h4>
                <p className="text-xs text-[#8D96A5] line-clamp-2">
                  {nextProject.summary}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
