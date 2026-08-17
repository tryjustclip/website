import React from "react";
import Link from "next/link";
import { ServiceDetail } from "@/data/services";
import { projectsData } from "@/data/projects";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { 
  ArrowLeft, 
  ArrowRight, 
  Layers, 
  Terminal, 
  Check, 
  Globe, 
  Bot, 
  Zap, 
  ShieldCheck 
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

  // Render distinctive visual motif per service
  const renderVisualMotif = () => {
    switch (service.slug) {
      case "web-development":
        return (
          <div className="p-6 rounded-2xl bg-[#070A0F] border border-white/10 flex flex-col gap-4 font-mono-tech">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#2B7FFF]" />
                <span className="text-xs text-[#F6F7F9]">RESPONSIVE ENGINE: SSR / STATIC</span>
              </div>
              <span className="text-[10px] text-[#10B981]">TTFB: 18ms</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-3 rounded-lg bg-[#131A24] border border-white/5">
                <span className="text-[9px] text-[#929CAA] block">LIGHTHOUSE</span>
                <span className="font-bold text-[#10B981]">99/100</span>
              </div>
              <div className="p-3 rounded-lg bg-[#131A24] border border-white/5">
                <span className="text-[9px] text-[#929CAA] block">BUNDLE</span>
                <span className="font-bold text-[#2B7FFF]">14.2 kB</span>
              </div>
              <div className="p-3 rounded-lg bg-[#131A24] border border-white/5">
                <span className="text-[9px] text-[#929CAA] block">SEO COMPLIANCE</span>
                <span className="font-bold text-[#F6F7F9]">100%</span>
              </div>
            </div>
          </div>
        );

      case "ui-ux-design":
        return (
          <div className="p-6 rounded-2xl bg-[#070A0F] border border-white/10 flex flex-col gap-4 font-mono-tech">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#2B7FFF]" />
                <span className="text-xs text-[#F6F7F9]">WIREFRAME → HIGH-FI TOKENS</span>
              </div>
              <span className="text-[10px] text-[#10B981]">100% TOKEN SYNC</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="p-3 rounded-lg bg-[#131A24] border border-dashed border-white/20 text-center">
                <span className="text-[9px] text-[#929CAA] block">STAGE 01</span>
                <span className="text-xs font-bold text-[#F6F7F9]">UX Wireframe</span>
              </div>
              <div className="p-3 rounded-lg bg-[#131A24] border border-[#2B7FFF]/40 text-center">
                <span className="text-[9px] text-[#2B7FFF] block">STAGE 02</span>
                <span className="text-xs font-bold text-[#F6F7F9]">Figma Tokens</span>
              </div>
              <div className="p-3 rounded-lg bg-[#131A24] border border-[#10B981]/40 text-center">
                <span className="text-[9px] text-[#10B981] block">STAGE 03</span>
                <span className="text-xs font-bold text-[#F6F7F9]">Tailwind Code</span>
              </div>
            </div>
          </div>
        );

      case "backend-api":
        return (
          <div className="p-6 rounded-2xl bg-[#070A0F] border border-white/10 flex flex-col gap-3 font-mono-tech text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#2B7FFF]" />
                <span className="text-[#F6F7F9]">POST /api/v1/events · 201 Created</span>
              </div>
              <span className="text-[10px] text-[#10B981]">1.2ms Latency</span>
            </div>
            <div className="p-3 rounded-lg bg-[#131A24] text-[11px] text-[#F6F7F9] flex flex-col gap-0.5">
              <p><span className="text-[#2B7FFF]">&quot;status&quot;</span>: <span className="text-[#10B981]">&quot;verified&quot;</span>,</p>
              <p><span className="text-[#2B7FFF]">&quot;auth_type&quot;</span>: <span className="text-[#F59E0B]">&quot;OAuth2 / HMAC&quot;</span>,</p>
              <p><span className="text-[#2B7FFF]">&quot;database_pool&quot;</span>: <span className="text-[#10B981]">&quot;PostgreSQL + Redis&quot;</span></p>
            </div>
          </div>
        );

      case "ai-chatbots":
        return (
          <div className="p-6 rounded-2xl bg-[#070A0F] border border-white/10 flex flex-col gap-3 font-mono-tech text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-[#10B981]" />
                <span className="text-[#F6F7F9]">RAG VECTOR PIPELINE + COPILOT</span>
              </div>
              <span className="text-[10px] text-[#10B981]">0% Hallucination</span>
            </div>
            <div className="p-3 rounded-lg bg-[#131A24] text-[11px] flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-[#929CAA]">
                <span>Vector Embeddings:</span>
                <span className="text-[#10B981]">qdrant_verified_store</span>
              </div>
              <div className="flex items-center justify-between text-[#929CAA]">
                <span>Citations:</span>
                <span className="text-[#2B7FFF]">Strict Source Metadata</span>
              </div>
            </div>
          </div>
        );

      case "automation":
        return (
          <div className="p-6 rounded-2xl bg-[#070A0F] border border-white/10 flex flex-col gap-3 font-mono-tech text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#00D2FF]" />
                <span className="text-[#F6F7F9]">EVENT WORKFLOW PIPELINE</span>
              </div>
              <span className="text-[10px] text-[#00D2FF]">100% Idempotent</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
              <div className="p-2.5 rounded bg-[#131A24] border border-white/5">01 Stripe Event</div>
              <div className="p-2.5 rounded bg-[#131A24] border border-[#2B7FFF]/40 text-[#2B7FFF]">02 CRM Sync</div>
              <div className="p-2.5 rounded bg-[#131A24] border border-[#10B981]/40 text-[#10B981]">03 Slack Alert</div>
            </div>
          </div>
        );

      default:
        return (
          <div className="p-6 rounded-2xl bg-[#070A0F] border border-white/10 flex flex-col gap-3 font-mono-tech text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                <span className="text-[#F6F7F9]">SLA 99.9% AVAILABILITY & SCALING</span>
              </div>
              <span className="text-[10px] text-[#10B981]">● ACTIVE</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px] text-[#929CAA]">
              <div className="p-2.5 rounded bg-[#131A24]">Real-Time Uptime Monitoring</div>
              <div className="p-2.5 rounded bg-[#131A24]">Weekly Code & Dependency Patches</div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="py-12 sm:py-16 pb-24 flex flex-col gap-16 sm:gap-24 select-none">
      <Container size="lg">
        {/* Back Link */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-mono-tech text-[#929CAA] hover:text-[#2B7FFF] transition-colors mb-8 uppercase"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All capabilities</span>
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2B7FFF] uppercase tracking-wider">
              <span className="px-2.5 py-0.5 rounded-md bg-[#2563EB]/15 border border-[#2563EB]/40 font-bold">
                [{service.code} / SPECIFICATION]
              </span>
              <span>{service.title}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F6F7F9] tracking-tight leading-[1.05]">
              {service.heroHeadline}
            </h1>

            <p className="text-base sm:text-lg text-[#929CAA] leading-relaxed max-w-2xl">
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

          <div className="lg:col-span-5">
            {renderVisualMotif()}
          </div>
        </div>

        {/* Section 01: What We Build */}
        <div className="mt-16 pt-12 border-t border-white/10 flex flex-col gap-8">
          <div>
            <span className="text-xs font-mono-tech text-[#2B7FFF] uppercase font-bold">
              [01 / DELIVERABLES]
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#F6F7F9] mt-1">
              What We Build
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.whatWeBuild.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0D121A] border border-white/10 flex flex-col justify-between gap-4"
              >
                <span className="text-[11px] font-mono-tech text-[#2B7FFF] font-bold">
                  SPEC_{String(idx + 1).padStart(2, "0")}
                </span>
                <p className="text-xs sm:text-sm font-semibold text-[#F6F7F9] leading-relaxed">
                  {item}
                </p>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="w-1/2 h-full bg-gradient-to-r from-[#2563EB] to-[#00D2FF]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 02: How We Approach Execution */}
        <div className="mt-16 pt-12 border-t border-white/10 flex flex-col gap-8">
          <div>
            <span className="text-xs font-mono-tech text-[#2B7FFF] uppercase font-bold">
              [02 / WORKFLOW]
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#F6F7F9] mt-1">
              How We Approach Execution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.approach.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-[#0D121A] border border-white/10 flex flex-col gap-3"
              >
                <span className="text-xs font-mono-tech font-bold text-[#10B981]">
                  STEP {step.step}
                </span>
                <h3 className="text-base font-bold text-[#F6F7F9]">
                  {step.title}
                </h3>
                <p className="text-xs text-[#929CAA] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 03: Core Competencies & Specifications */}
        <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <span className="text-xs font-mono-tech text-[#2B7FFF] uppercase font-bold">
                [03 / CAPABILITIES]
              </span>
              <h2 className="text-2xl font-black text-[#F6F7F9] mt-1">
                Core Competencies
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.capabilities.map((cap, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-[#0D121A] border border-white/10 flex items-center gap-2.5 text-xs font-mono-tech text-[#F6F7F9]"
                >
                  <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <span className="text-xs font-mono-tech text-[#10B981] uppercase font-bold">
                [04 / SPECIFICATIONS]
              </span>
              <h2 className="text-2xl font-black text-[#F6F7F9] mt-1">
                Quality Benchmarks
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {service.technicalSpecs.map((spec, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-[#0D121A] border border-white/10 flex items-center justify-between"
                >
                  <span className="text-xs font-mono-tech text-[#929CAA] uppercase font-medium">
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
              <span className="text-xs font-mono-tech text-[#2B7FFF] uppercase font-bold">
                [05 / RELEVANT BUILDS]
              </span>
              <h2 className="text-2xl font-black text-[#F6F7F9] mt-1">
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
              className="flex items-center gap-2 text-xs font-mono-tech text-[#929CAA] hover:text-[#2B7FFF] uppercase font-bold transition-colors"
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
