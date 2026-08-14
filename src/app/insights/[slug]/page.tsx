import { notFound } from "next/navigation";
import Link from "next/link";
import { insightsData } from "@/data/insights";
import { servicesData } from "@/data/services";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { ArrowLeft, ArrowRight, Clock, Calendar, CheckCircle2 } from "lucide-react";

export function generateStaticParams() {
  return insightsData.map((a) => ({
    slug: a.slug,
  }));
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const article = insightsData.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const relatedService = servicesData[article.relatedServiceSlug];

  return (
    <div className="py-12 sm:py-16 pb-24 flex flex-col gap-16">
      <Container size="md">
        {/* Back Link */}
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-xs font-mono-tech text-[#8D96A5] hover:text-[#2B7FFF] transition-colors mb-8 uppercase"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to all essays</span>
        </Link>

        {/* Article Meta & Header */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-[#2563EB]/15 border border-[#2563EB]/30 text-xs font-mono-tech font-semibold text-[#2B7FFF] uppercase">
              {article.category}
            </span>
            <div className="flex items-center gap-3 text-xs font-mono-tech text-[#8D96A5]">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
              <span>·</span>
              <span>{article.date}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F4EF] tracking-tight leading-[1.15]">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-[#8D96A5] leading-relaxed border-l-2 border-[#2563EB] pl-4 italic">
            {article.excerpt}
          </p>
        </div>

        {/* Key Takeaways Callout */}
        <div className="my-10 p-6 sm:p-8 rounded-2xl bg-[#0D1117] border border-white/10 flex flex-col gap-4">
          <span className="text-xs font-mono-tech text-[#10B981] uppercase tracking-wider font-semibold">
            KEY ARCHITECTURAL TAKEAWAYS
          </span>
          <div className="flex flex-col gap-2.5">
            {article.keyPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F5F4EF]">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Article Body */}
        <div className="flex flex-col gap-6 text-sm sm:text-base text-[#8D96A5] leading-relaxed">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Related Discipline Box */}
        {relatedService && (
          <div className="mt-16 p-8 rounded-2xl bg-[#0D1117] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[11px] font-mono-tech text-[#2B7FFF] uppercase">
                RELATED SERVICE SPEC
              </span>
              <h3 className="text-lg font-bold text-[#F5F4EF] mt-1">
                {relatedService.title}
              </h3>
              <p className="text-xs text-[#8D96A5] mt-1 max-w-md">
                {relatedService.shortDescription}
              </p>
            </div>
            <Button
              href={`/services/${relatedService.slug}`}
              variant="outline"
              size="sm"
              icon="arrow"
            >
              Explore Discipline
            </Button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/insights"
            className="text-xs font-mono-tech text-[#8D96A5] hover:text-[#2B7FFF]"
          >
            ← View all insights
          </Link>
          <Button href="/start-project" variant="primary" size="md" icon="arrow">
            Start a Project
          </Button>
        </div>
      </Container>
    </div>
  );
}
