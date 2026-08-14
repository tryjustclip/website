"use client";

import { useState } from "react";
import Link from "next/link";
import { insightsData, InsightArticle } from "@/data/insights";
import { Container, SectionHeader } from "@/components/Container";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = [
    "ALL",
    "Performance",
    "AI",
    "Automation",
    "UI/UX",
    "Development",
  ];

  const filteredArticles =
    selectedCategory === "ALL"
      ? insightsData
      : insightsData.filter((art) => art.category === selectedCategory);

  return (
    <div className="py-12 sm:py-16 pb-24 flex flex-col gap-12 sm:gap-16">
      <Container size="lg">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2B7FFF] uppercase tracking-wider mb-2">
            <span className="px-2 py-0.5 rounded bg-[#2563EB]/10 border border-[#2563EB]/30 font-semibold">
              [INSIGHTS]
            </span>
            <span>ENGINEERING & PRODUCT ESSAYS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F5F4EF] tracking-tight">
            Technical Insights
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#8D96A5] leading-relaxed">
            Essays on high-performance web engineering, design systems, reliable backend architecture, grounded AI models, and workflow automation.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-10 flex flex-wrap items-center gap-2 border-y border-white/10 py-4">
          <span className="text-[11px] font-mono-tech text-[#8D96A5] uppercase mr-2 hidden sm:inline">
            CATEGORY:
          </span>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-mono-tech uppercase tracking-wider transition-all cursor-pointer ${
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

        {/* Articles List */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="p-6 sm:p-8 rounded-2xl bg-[#0D1117] border border-white/10 hover:border-[#2563EB]/40 transition-all duration-300 flex flex-col justify-between gap-6 group hover:shadow-[0_8px_30px_rgba(37,99,235,0.2)]"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded bg-[#131923] border border-white/10 text-[10px] font-mono-tech text-[#2B7FFF] uppercase font-semibold">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-3 text-xs font-mono-tech text-[#8D96A5]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                    <span>{article.date}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#F5F4EF] group-hover:text-[#2B7FFF] transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-[#8D96A5] leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono-tech text-[#2B7FFF] group-hover:text-white uppercase">
                <span>Read Full Essay</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
