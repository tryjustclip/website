"use client";

import { useState } from "react";
import { projectsData, CaseStudy } from "@/data/projects";
import { Container, SectionHeader } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/Button";

type FilterCategory = "ALL" | "WEB" | "PRODUCT" | "UI/UX" | "API" | "AI" | "AUTOMATION";

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("ALL");

  const categories: FilterCategory[] = [
    "ALL",
    "WEB",
    "PRODUCT",
    "UI/UX",
    "API",
    "AI",
    "AUTOMATION",
  ];

  const filteredProjects =
    activeFilter === "ALL"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <div className="py-12 sm:py-16 flex flex-col gap-12 sm:gap-16">
      <Container size="lg">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2B7FFF] uppercase tracking-wider mb-2">
            <span className="px-2 py-0.5 rounded bg-[#2563EB]/10 border border-[#2563EB]/30 font-semibold">
              [PORTFOLIO]
            </span>
            <span>PROVEN DIGITAL BUILDS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F5F4EF] tracking-tight">
            Work made to work.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#8D96A5] leading-relaxed">
            Selected interfaces, products and technical systems designed and engineered by Stickbyte. Every project is built around measurable technical requirements.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center gap-2 border-y border-white/10 py-4">
          <span className="text-[11px] font-mono-tech text-[#8D96A5] uppercase tracking-wider mr-2 hidden sm:inline">
            FILTER:
          </span>
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-mono-tech uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#2563EB] text-white font-semibold shadow-md shadow-[#2563EB]/30"
                    : "bg-[#0D1117] text-[#8D96A5] hover:text-[#F5F4EF] border border-white/10"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.slug}
              project={project}
              layout={idx % 3 === 0 ? "featured" : "standard"}
            />
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-16 p-8 rounded-2xl bg-[#0D1117] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-[#F5F4EF]">
              Need a custom build tailored to your business?
            </h3>
            <p className="text-xs sm:text-sm text-[#8D96A5] mt-1">
              We engineer custom SaaS, web portals, APIs and automated workflows.
            </p>
          </div>
          <Button href="/start-project" variant="primary" size="md" icon="arrow">
            Start a Project
          </Button>
        </div>
      </Container>
    </div>
  );
}
