import Link from "next/link";
import { CaseStudy } from "@/data/projects";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

interface ProjectCardProps {
  project: CaseStudy;
  layout?: "standard" | "featured" | "compact";
}

export function ProjectCard({ project, layout = "standard" }: ProjectCardProps) {
  const isFeatured = layout === "featured";

  return (
    <Link
      href={`/work/${project.slug}`}
      className={`group rounded-2xl bg-[#0D1117] border border-white/10 hover:border-[#2563EB]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between relative hover:shadow-[0_8px_30px_rgba(37,99,235,0.2)] ${
        isFeatured ? "md:col-span-2 lg:flex-row min-h-[380px]" : "min-h-[320px]"
      }`}
    >
      {/* Background Byte Grid Accent */}
      <div className="absolute inset-0 byte-grid-bg opacity-30 pointer-events-none" />

      {/* Main Content Area */}
      <div className="p-6 sm:p-8 flex flex-col justify-between gap-6 relative z-10 flex-1">
        {/* Top Meta */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-mono-tech tracking-wider font-semibold uppercase bg-[#2563EB]/15 text-[#2B7FFF] border border-[#2563EB]/30">
              {project.badge}
            </span>
            <span className="text-[10px] font-mono-tech text-[#8D96A5] uppercase">
              [{project.category}]
            </span>
          </div>

          <span className="text-xs font-mono-tech text-[#8D96A5]">
            {project.year}
          </span>
        </div>

        {/* Title & Summary */}
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-xl sm:text-2xl font-bold text-[#F5F4EF] group-hover:text-[#2B7FFF] transition-colors">
              {project.title}
            </h3>
            <ArrowUpRight className="w-5 h-5 text-[#8D96A5] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#2B7FFF] shrink-0" />
          </div>
          <p className="text-xs font-mono-tech text-[#2B7FFF]/80 mt-1 uppercase">
            {project.subtitle}
          </p>
          <p className="mt-3 text-xs sm:text-sm text-[#8D96A5] leading-relaxed line-clamp-3">
            {project.summary}
          </p>
        </div>

        {/* Bottom Tech Stack Badges */}
        <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-1.5">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded bg-[#131923] border border-white/10 text-[10px] font-mono-tech text-[#8D96A5]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Decorative Technical Blueprint Visual Area */}
      <div
        className={`bg-[#070A0E] border-t lg:border-t-0 lg:border-l border-white/10 p-6 flex flex-col justify-center relative ${
          isFeatured ? "lg:w-2/5" : "h-40"
        }`}
      >
        <div className="p-4 rounded-lg bg-[#131923]/60 border border-white/5 font-mono-tech text-[10px] text-[#8D96A5] flex flex-col gap-2">
          <div className="flex items-center justify-between text-[#2B7FFF]">
            <span>SYSTEM_NODE</span>
            <span>VERIFIED_OK</span>
          </div>
          <div className="h-1 bg-white/10 rounded overflow-hidden">
            <div className="h-full bg-[#2563EB] w-4/5" />
          </div>
          <div className="flex justify-between text-[9px] text-[#8D96A5]">
            <span>LATENCY: &lt;45ms</span>
            <span>TYPE: PROD_SPEC</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
