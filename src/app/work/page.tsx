"use client";

import React, { useState } from "react";
import { projectsData } from "@/data/projects";

import { Container } from "@/components/Container";
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
    <div className="py-12 sm:py-16 flex flex-col gap-12 sm:gap-16 select-none">
      <Container size="lg">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#131A24] border border-white/10 text-xs font-mono-tech text-[#2B7FFF] uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
            <span>PORTFOLIO SPECIFICATIONS</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#F6F7F9] tracking-tight">
            Work made to work.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#929CAA] leading-relaxed">
            Selected interfaces, products and technical systems designed and engineered by Stickbyte. Every project is built around measurable technical requirements and verified deliverables.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center gap-2 border-y border-white/10 py-4">
          <span className="text-[11px] font-mono-tech text-[#929CAA] uppercase tracking-wider mr-2 hidden sm:inline font-bold">
            FILTER:
          </span>
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono-tech uppercase font-bold tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#2563EB] text-white shadow-md shadow-[#2563EB]/40 border border-[#3B82F6]/50"
                    : "bg-[#0D121A] text-[#929CAA] hover:text-[#F6F7F9] border border-white/10"
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
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#0D121A] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="text-xl font-bold text-[#F6F7F9]">
              Need a custom build tailored to your business?
            </h3>
            <p className="text-sm text-[#929CAA] mt-1">
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
