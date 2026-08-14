import Link from "next/link";
import { 
  ArrowRight, 
  ArrowUpRight, 
  Code2, 
  Layers, 
  Terminal, 
  Bot, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  Globe, 
  Cpu, 
  Compass, 
  Sparkles,
  MapPin,
  Check
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { projectsData } from "@/data/projects";
import { servicesData } from "@/data/services";
import { faqList } from "@/data/faq";
import { Container, SectionHeader } from "@/components/Container";
import { Button } from "@/components/Button";
import { HeroBuildCanvas } from "@/components/HeroBuildCanvas";
import { BuildConfigurator } from "@/components/BuildConfigurator";
import { PipelineVisualizer } from "@/components/PipelineVisualizer";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ProjectCard } from "@/components/ProjectCard";

export default function HomePage() {
  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <div className="flex flex-col gap-24 sm:gap-32 pb-24 overflow-hidden">
      {/* SECTION 01 — HERO */}
      <section className="relative pt-6 sm:pt-12 pb-8 sm:pb-16 overflow-hidden">
        {/* Background Grid & Blue Signal Glow */}
        <div className="absolute inset-0 byte-grid-bg opacity-40 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#2563EB]/15 rounded-full blur-[140px] pointer-events-none" />

        <Container size="lg" className="relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131923] border border-white/10 text-xs font-mono-tech text-[#2B7FFF] uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>PRODUCT ENGINEERING + AUTOMATION</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#F5F4EF] leading-[1.05]">
              Design. <br className="hidden sm:inline" />
              Build. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#60A5FA]">
                Automate.
              </span>
            </h1>

            {/* Support Copy */}
            <p className="mt-6 text-base sm:text-lg md:text-xl text-[#8D96A5] max-w-2xl leading-relaxed">
              Stickbyte turns ideas and inefficient workflows into fast websites, digital products, APIs, AI assistants and automated systems.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
              <Button href="/start-project" variant="primary" size="lg" icon="arrow" className="w-full sm:w-auto">
                Start a Project
              </Button>
              <Button href="/work" variant="secondary" size="lg" icon="external" className="w-full sm:w-auto">
                View Our Work
              </Button>
            </div>

            {/* Microcopy */}
            <div className="mt-6 flex items-center gap-2 text-xs font-mono-tech text-[#8D96A5]">
              <MapPin className="w-3.5 h-3.5 text-[#2B7FFF]" />
              <span>{siteConfig.contact.locationFull}</span>
            </div>
          </div>

          {/* Interactive Hero Canvas */}
          <div className="max-w-5xl mx-auto">
            <HeroBuildCanvas />
          </div>
        </Container>
      </section>

      {/* SECTION 02 — STUDIO STATEMENT */}
      <section className="relative py-12 border-y border-white/10 bg-[#0D1117]/60">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-3 flex flex-col gap-1">
              <span className="text-xs font-mono-tech text-[#2B7FFF] uppercase tracking-wider">
                [02 / PHILOSOPHY]
              </span>
              <span className="text-xs font-mono-tech text-[#8D96A5]">
                UNIFIED BUILD PROCESS
              </span>
            </div>

            <div className="lg:col-span-9">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#F5F4EF] leading-snug">
                From first wireframe to production deployment, Stickbyte connects design, engineering and automation into one build process.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 03 — SELECTED WORK */}
      <section className="relative">
        <Container size="lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2B7FFF] uppercase tracking-wider mb-2">
                <span className="px-2 py-0.5 rounded bg-[#2563EB]/10 border border-[#2563EB]/30 font-semibold">
                  [03 / BUILDS]
                </span>
                <span>SELECTED WORK & CONCEPTS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F4EF] tracking-tight">
                Work made to work.
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#8D96A5] max-w-xl">
                Digital products, websites and technical systems built around real business problems. Transparently verified.
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

      {/* SECTION 04 — CAPABILITIES */}
      <section className="relative">
        <Container size="lg">
          <SectionHeader
            code="04"
            eyebrow="ENGINEERING CAPABILITIES"
            title="One studio. Six core disciplines."
            description="We eliminate handoff friction by bringing UI/UX design, modern fullstack web development, robust API architecture, grounded AI, and workflow automations under one engineering roof."
          />

          <div className="flex flex-col gap-4">
            {Object.values(servicesData).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group p-6 sm:p-8 rounded-2xl bg-[#0D1117] border border-white/10 hover:border-[#2563EB]/50 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start lg:items-center relative overflow-hidden hover:shadow-[0_8px_30px_rgba(37,99,235,0.2)]"
              >
                {/* Left: Code + Title */}
                <div className="lg:col-span-4 flex items-center gap-4">
                  <span className="text-xl sm:text-2xl font-mono-tech font-bold text-[#2B7FFF]">
                    {service.code}
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#F5F4EF] group-hover:text-[#2B7FFF] transition-colors">
                      {service.title}
                    </h3>
                    <span className="text-[11px] font-mono-tech text-[#8D96A5] uppercase tracking-wider">
                      DISCIPLINE SPEC
                    </span>
                  </div>
                </div>

                {/* Center: Short Description */}
                <div className="lg:col-span-5 text-xs sm:text-sm text-[#8D96A5] leading-relaxed">
                  <p>{service.shortDescription}</p>
                </div>

                {/* Right: Action link & arrow */}
                <div className="lg:col-span-3 flex items-center justify-start lg:justify-end gap-2 text-xs font-mono-tech text-[#2B7FFF] group-hover:text-white uppercase">
                  <span>Explore Specs</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 05 — INTERACTIVE BUILD CONFIGURATOR */}
      <section className="relative">
        <Container size="lg">
          <BuildConfigurator />
        </Container>
      </section>

      {/* SECTION 06 — DEVELOPMENT PIPELINE */}
      <section className="relative">
        <Container size="lg">
          <SectionHeader
            code="06"
            eyebrow="SIGNAL PIPELINE"
            title="From Idea to Production."
            description="Our 8-stage lifecycle ensures zero ambiguity. Every sprint produces tangible architecture, verified deliverables, and measurable outcomes."
          />

          <PipelineVisualizer />
        </Container>
      </section>

      {/* SECTION 07 — FEATURED TECHNICAL SECTION (Beyond the Interface) */}
      <section className="relative">
        <Container size="lg">
          <ArchitectureDiagram />
        </Container>
      </section>

      {/* SECTION 08 — WHY STICKBYTE (Principles) */}
      <section className="relative">
        <Container size="lg">
          <SectionHeader
            code="08"
            eyebrow="STUDIO PRINCIPLES"
            title="Engineered for real-world reliability."
            description="We avoid agency buzzwords. Our work is driven by concrete engineering standards and product thinking."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Product thinking",
                desc: "We design around the business problem and operational bottlenecks, not around superfluous visual decoration.",
                code: "P-01",
              },
              {
                title: "Design + Engineering together",
                desc: "Interfaces are designed with implementation in mind, ensuring 100% token fidelity from Figma to production code.",
                code: "P-02",
              },
              {
                title: "Built for real devices",
                desc: "Responsive behavior across 320px to 4K viewports is considered during architecture, not patched after desktop is done.",
                code: "P-03",
              },
              {
                title: "Clean architecture",
                desc: "Systems are structured with modular state, strict typing, and separation of concerns so future development remains smooth.",
                code: "P-04",
              },
              {
                title: "Clear communication",
                desc: "Clients know exactly what is being designed, developed, tested, and shipped at every phase of the sprint.",
                code: "P-05",
              },
              {
                title: "Performance matters",
                desc: "Visual ambition should never make a web app sluggish. We target sub-second loads and 95+ Core Web Vitals.",
                code: "P-06",
              },
            ].map((principle) => (
              <div
                key={principle.code}
                className="p-6 sm:p-8 rounded-xl bg-[#0D1117] border border-white/10 flex flex-col justify-between gap-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono-tech text-[#2B7FFF]">
                    [{principle.code}]
                  </span>
                  <Check className="w-4 h-4 text-[#10B981]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#F5F4EF]">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#8D96A5] leading-relaxed">
                    {principle.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 09 — FAQ */}
      <section className="relative">
        <Container size="md">
          <SectionHeader
            code="09"
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            title="Clear answers upfront."
            description="Everything you need to know about working with Stickbyte on digital products, web development, APIs, and automation."
            align="center"
          />

          <FAQAccordion items={faqList} />
        </Container>
      </section>

      {/* SECTION 10 — FINAL CTA */}
      <section className="relative">
        <Container size="lg">
          <div className="rounded-2xl bg-gradient-to-b from-[#0D1117] to-[#070A0E] border border-white/15 p-8 sm:p-14 text-center flex flex-col items-center gap-6 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 byte-grid-dense opacity-20 pointer-events-none" />
            <div className="w-64 h-64 bg-[#2563EB]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-mono-tech text-[#2B7FFF] uppercase tracking-wider block mb-2">
                [READY TO BUILD]
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F5F4EF] tracking-tight">
                Have something worth building?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#8D96A5] leading-relaxed">
                Tell us what you are working on. We will help turn your requirement into a clear product architecture and technical execution plan.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button href="/start-project" variant="primary" size="lg" icon="arrow" className="w-full sm:w-auto">
                Start a Project
              </Button>
              <a
                href={siteConfig.contact.emailLink}
                className="w-full sm:w-auto px-6 py-3.5 rounded-md bg-[#131923] hover:bg-[#1C2432] text-[#F5F4EF] border border-white/10 text-xs font-mono-tech uppercase font-semibold tracking-wider flex items-center justify-center gap-2"
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
