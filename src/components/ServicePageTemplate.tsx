import Link from "next/link";
import { ServiceDetail } from "@/data/services";
import { projectsData } from "@/data/projects";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Terminal, 
  Cpu, 
  Check 
} from "lucide-react";

interface ServicePageProps {
  service: ServiceDetail;
  nextServiceSlug?: string;
  nextServiceTitle?: string;
}

export function ServicePageTemplate({
  service,
  nextServiceSlug,
  nextServiceTitle,
}: ServicePageProps) {
  const relatedProjects = projectsData.filter((p) =>
    service.relatedCaseStudies.includes(p.slug)
  );

  return (
    <div className="py-12 sm:py-16 pb-24 flex flex-col gap-16 sm:gap-24">
      <Container size="lg">
        {/* Back Link */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-mono-tech text-[#8D96A5] hover:text-[#2B7FFF] transition-colors mb-8 uppercase"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All capabilities</span>
        </Link>

        {/* Hero Section */}
        <div className="max-w-4xl flex flex-col gap-6">
          <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2B7FFF] uppercase tracking-wider">
            <span className="px-2.5 py-0.5 rounded bg-[#2563EB]/15 border border-[#2563EB]/30 font-semibold">
              [{service.code} / SPECIFICATION]
            </span>
            <span>{service.title}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F5F4EF] tracking-tight leading-[1.1]">
            {service.heroHeadline}
          </h1>

          <p className="text-base sm:text-lg text-[#8D96A5] leading-relaxed max-w-3xl">
            {service.heroSupport}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button href="/start-project" variant="primary" size="md" icon="arrow">
              {service.ctaText}
            </Button>
            <Button href="/work" variant="outline" size="md" icon="external">
              View Verified Work
            </Button>
          </div>
        </div>

        {/* Section 01: What We Build */}
        <div className="mt-16 pt-12 border-t border-white/10 flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono-tech text-[#2B7FFF] uppercase">
                [01 / DELIVERABLES]
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F4EF] mt-1">
                What We Build
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.whatWeBuild.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#0D1117] border border-white/10 flex flex-col justify-between gap-4"
              >
                <span className="text-[11px] font-mono-tech text-[#2B7FFF]">
                  SPEC_{String(idx + 1).padStart(2, "0")}
                </span>
                <p className="text-xs sm:text-sm font-medium text-[#F5F4EF] leading-relaxed">
                  {item}
                </p>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-[#2563EB]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 02: How We Approach Development / Design */}
        <div className="mt-16 pt-12 border-t border-white/10 flex flex-col gap-8">
          <div>
            <span className="text-xs font-mono-tech text-[#2B7FFF] uppercase">
              [02 / WORKFLOW]
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F4EF] mt-1">
              How We Approach Execution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.approach.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-xl bg-[#0D1117] border border-white/10 flex flex-col gap-3"
              >
                <span className="text-xs font-mono-tech font-bold text-[#10B981]">
                  STEP {step.step}
                </span>
                <h3 className="text-base font-bold text-[#F5F4EF]">
                  {step.title}
                </h3>
                <p className="text-xs text-[#8D96A5] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 03: Technical Capabilities & Specs */}
        <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <span className="text-xs font-mono-tech text-[#2B7FFF] uppercase">
                [03 / CAPABILITIES]
              </span>
              <h2 className="text-2xl font-bold text-[#F5F4EF] mt-1">
                Core Competencies
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.capabilities.map((cap, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-[#0D1117] border border-white/10 flex items-center gap-2 text-xs font-mono-tech text-[#F5F4EF]"
                >
                  <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <span className="text-xs font-mono-tech text-[#10B981] uppercase">
                [04 / SPECIFICATIONS]
              </span>
              <h2 className="text-2xl font-bold text-[#F5F4EF] mt-1">
                Quality Benchmarks
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {service.technicalSpecs.map((spec, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-[#0D1117] border border-white/10 flex items-center justify-between"
                >
                  <span className="text-xs font-mono-tech text-[#8D96A5] uppercase">
                    {spec.label}
                  </span>
                  <span className="text-xs font-mono-tech font-bold text-[#2B7FFF]">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 04: Related Work */}
        {relatedProjects.length > 0 && (
          <div className="mt-16 pt-12 border-t border-white/10 flex flex-col gap-8">
            <div>
              <span className="text-xs font-mono-tech text-[#2B7FFF] uppercase">
                [05 / RELEVANT BUILDS]
              </span>
              <h2 className="text-2xl font-bold text-[#F5F4EF] mt-1">
                Verified Work in this Discipline
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProjects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        )}

        {/* Interlinking Navigation & Next Service */}
        <div className="mt-16 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          {nextServiceSlug && nextServiceTitle ? (
            <Link
              href={`/services/${nextServiceSlug}`}
              className="flex items-center gap-2 text-xs font-mono-tech text-[#8D96A5] hover:text-[#2B7FFF] uppercase transition-colors"
            >
              <span>Next Discipline: {nextServiceTitle}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          ) : (
            <div />
          )}

          <Button href="/start-project" variant="primary" size="md" icon="arrow">
            {service.ctaText}
          </Button>
        </div>
      </Container>
    </div>
  );
}
