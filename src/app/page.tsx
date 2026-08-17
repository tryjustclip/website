import Link from "next/link";
import { 
  ArrowRight, 
  ArrowUpRight, 
  MapPin, 
  Sparkles,
  CheckCircle2,
  Terminal,
  Layers,
  Zap,
  Globe,
  Cpu
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { projectsData } from "@/data/projects";
import { faqList } from "@/data/faq";
import { Container, SectionHeader } from "@/components/Container";
import { Button } from "@/components/Button";
import { HeroForgeScene } from "@/components/HeroForgeScene";
import { CapabilityMarquee } from "@/components/CapabilityMarquee";
import { WhatWeBuildSection } from "@/components/WhatWeBuildSection";
import { BuildConfigurator } from "@/components/BuildConfigurator";
import { PipelineVisualizer } from "@/components/PipelineVisualizer";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { StickbyteLabSection } from "@/components/StickbyteLabSection";
import { WhyStickbyteSection } from "@/components/WhyStickbyteSection";
import { ClientJourneySection } from "@/components/ClientJourneySection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ProjectCard } from "@/components/ProjectCard";

export default function HomePage() {
  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <div className="flex flex-col gap-20 sm:gap-28 lg:gap-32 pb-24 overflow-hidden">
      {/* SECTION 01 — HERO */}
      <section className="relative pt-8 sm:pt-14 pb-4 sm:pb-8 overflow-hidden">
        {/* Background Forge Grid & Atmospheric Lighting */}
        <div className="absolute inset-0 forge-grid opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[300px] bg-[#2563EB]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[250px] bg-[#00D2FF]/10 rounded-full blur-[120px] pointer-events-none" />

        <Container size="lg" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left: Headline, Eyebrow & CTAs (6 cols) */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#131A24] border border-white/10 text-xs font-mono-tech text-[#2B7FFF] uppercase tracking-wider mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span>PRODUCT ENGINEERING + AUTOMATION</span>
              </div>

              {/* Primary Headline */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#F6F7F9] leading-[1.05]">
                DESIGN. <br />
                BUILD. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#2B7FFF] to-[#00D2FF]">
                  AUTOMATE.
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="mt-6 text-base sm:text-lg md:text-xl text-[#929CAA] max-w-xl leading-relaxed">
                Stickbyte designs and engineers websites, web applications, APIs, AI assistants and automated systems for businesses ready to move faster.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
                <Button href="/start-project" variant="primary" size="lg" icon="arrow">
                  Start a Project
                </Button>
                <Button href="/work" variant="secondary" size="lg" icon="external">
                  View Our Work
                </Button>
              </div>

              {/* Microcopy / Location line */}
              <div className="mt-6 flex items-center gap-2 text-xs font-mono-tech text-[#929CAA]">
                <MapPin className="w-3.5 h-3.5 text-[#2B7FFF]" />
                <span>NEW DELHI · WORKING WORLDWIDE</span>
              </div>
            </div>

            {/* Right: Layered 3D Stickbyte System Canvas (6 cols) */}
            <div className="lg:col-span-6">
              <HeroForgeScene />
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 02 — CAPABILITY STRIP */}
      <CapabilityMarquee />

      {/* SECTION 03 — STUDIO STATEMENT / EDITORIAL */}
      <section className="relative py-12 sm:py-16 border-y border-white/10 bg-[#0D121A]/80">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-3 flex flex-col gap-1">
              <span className="text-xs font-mono-tech text-[#2B7FFF] uppercase tracking-wider font-bold">
                [02 / PHILOSOPHY]
              </span>
              <span className="text-xs font-mono-tech text-[#929CAA]">
                UNIFIED BUILD PROCESS
              </span>
            </div>

            <div className="lg:col-span-9">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#F6F7F9] leading-snug">
                From first wireframe to production deployment, Stickbyte connects design, engineering and automation into one unified build process.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 04 — WHAT WE BUILD (High Visual Presentations) */}
      <Container size="lg">
        <WhatWeBuildSection />
      </Container>

      {/* SECTION 05 — INTERACTIVE BUILD CONFIGURATOR */}
      <Container size="lg">
        <BuildConfigurator />
      </Container>

      {/* SECTION 06 — BUILD PIPELINE (FROM IDEA TO PRODUCTION) */}
      <section className="relative">
        <Container size="lg">
          <SectionHeader
            code="06"
            eyebrow="SIGNAL PIPELINE"
            title="From Idea To Production."
            description="One connected process across strategy, architecture, design, engineering and continuous deployment. Zero ambiguity."
          />

          <PipelineVisualizer />
        </Container>
      </section>

      {/* SECTION 07 — WE CONNECT THE WHOLE STACK */}
      <Container size="lg">
        <ArchitectureDiagram />
      </Container>

      {/* SECTION 08 — SELECTED WORK / CASE STUDIES */}
      <section className="relative">
        <Container size="lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2B7FFF] uppercase tracking-wider mb-2">
                <span className="px-2 py-0.5 rounded bg-[#2563EB]/15 border border-[#2563EB]/30 font-semibold">
                  [08 / BUILDS]
                </span>
                <span>SELECTED WORK & CONCEPTS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-[#F6F7F9] tracking-tight">
                Work made to work.
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#929CAA] max-w-xl">
                Digital products, websites and technical systems engineered around real business problems. Transparently verified.
              </p>
            </div>

            <Button href="/work" variant="outline" size="sm" icon="external">
              View All Builds
            </Button>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project, idx) => (
              <ProjectCard
                key={project.slug}
                project={project}
                layout={idx === 0 ? "featured" : "standard"}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 09 — STICKBYTE LAB */}
      <Container size="lg">
        <StickbyteLabSection />
      </Container>

      {/* SECTION 10 — WHY STICKBYTE */}
      <Container size="lg">
        <WhyStickbyteSection />
      </Container>

      {/* SECTION 11 — CLIENT JOURNEY */}
      <Container size="lg">
        <ClientJourneySection />
      </Container>

      {/* SECTION 12 — FAQ */}
      <section className="relative">
        <Container size="md">
          <SectionHeader
            code="12"
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            title="Clear answers upfront."
            description="Everything you need to know about partnering with Stickbyte on digital products, web development, APIs, and automation."
            align="center"
          />

          <FAQAccordion items={faqList} />
        </Container>
      </section>

      {/* SECTION 13 — FINAL HIGH-IMPACT CTA */}
      <section className="relative">
        <Container size="lg">
          <div className="rounded-3xl bg-gradient-to-b from-[#0D121A] to-[#070A0F] border border-white/15 p-8 sm:p-14 text-center flex flex-col items-center gap-6 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 forge-grid-dense opacity-20 pointer-events-none" />
            <div className="w-80 h-80 bg-[#2563EB]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-mono-tech text-[#2B7FFF] uppercase tracking-wider block mb-2 font-bold">
                [READY TO BUILD]
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F6F7F9] tracking-tight">
                Have something worth building?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#929CAA] leading-relaxed">
                Tell us what you are working on. We will help turn your requirement into a clear product architecture and technical execution plan.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button href="/start-project" variant="primary" size="lg" icon="arrow" className="w-full sm:w-auto">
                Start a Project
              </Button>
              <a
                href={siteConfig.contact.emailLink}
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#131A24] hover:bg-[#182131] text-[#F6F7F9] border border-white/10 text-xs font-mono-tech uppercase font-bold tracking-wider flex items-center justify-center gap-2"
              >
                <span>{siteConfig.contact.email}</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
