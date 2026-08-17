import React from "react";
import Link from "next/link";
import { CaseStudy } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";


interface ProjectCardProps {
  project: CaseStudy;
  layout?: "standard" | "featured" | "compact";
}

export function ProjectCard({ project, layout = "standard" }: ProjectCardProps) {
  const isFeatured = layout === "featured";

  return (
    <Link
      href={`/work/${project.slug}`}
      className={`group rounded-3xl bg-[#0D121A] border border-white/10 hover:border-[#2563EB]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between relative hover:shadow-[0_0_35px_rgba(37,99,235,0.25)] ${
        isFeatured ? "md:col-span-2 lg:flex-row min-h-[380px]" : "min-h-[340px]"
      }`}
    >
      {/* Background Forge Grid Accent */}
      <div className="absolute inset-0 forge-grid opacity-25 pointer-events-none" />

      {/* Main Content Area */}
      <div className="p-6 sm:p-8 flex flex-col justify-between gap-6 relative z-10 flex-1">
        {/* Top Meta */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono-tech tracking-wider font-bold uppercase bg-[#2563EB]/15 text-[#2B7FFF] border border-[#2563EB]/40">
              {project.badge}
            </span>
            <span className="text-[10px] font-mono-tech text-[#929CAA] uppercase font-semibold">
              [{project.category}]
            </span>
          </div>

          <span className="text-xs font-mono-tech text-[#929CAA]">
            {project.year}
          </span>
        </div>

        {/* Title & Summary */}
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-xl sm:text-2xl font-black text-[#F6F7F9] group-hover:text-[#2B7FFF] transition-colors">
              {project.title}
            </h3>
            <ArrowUpRight className="w-5 h-5 text-[#929CAA] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#2B7FFF] shrink-0" />
          </div>
          <p className="text-xs font-mono-tech text-[#2B7FFF] mt-1 uppercase font-semibold">
            {project.subtitle}
          </p>
          <p className="mt-3 text-xs sm:text-sm text-[#929CAA] leading-relaxed line-clamp-3">
            {project.summary}
          </p>
        </div>

        {/* Bottom Tech Stack Badges */}
        <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-1.5 font-mono-tech">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md bg-[#131A24] border border-white/10 text-[10px] text-[#929CAA]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Decorative Technical Blueprint Visual Area */}
      <div
        className={`bg-[#070A0F] border-t lg:border-t-0 lg:border-l border-white/10 p-6 flex flex-col justify-center relative ${
          isFeatured ? "lg:w-2/5" : "h-40"
        }`}
      >
        <div className="p-4 rounded-xl bg-[#131A24] border border-white/5 font-mono-tech text-[10px] text-[#929CAA] flex flex-col gap-2.5">
          <div className="flex items-center justify-between text-[#2B7FFF]">
            <span className="font-bold">SYSTEM_NODE</span>
            <span className="text-[#10B981]">● VERIFIED_OK</span>
          </div>
          <div className="h-1.5 bg-[#070A0F] rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#2563EB] to-[#00D2FF] w-4/5" />
          </div>
          <div className="flex justify-between text-[9px] text-[#929CAA]">
            <span>LATENCY: &lt;25ms</span>
            <span className="text-[#F6F7F9]">PROD_SPEC</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
