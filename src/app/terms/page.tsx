import { Metadata } from "next";
import { Container } from "@/components/Container";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Terms of Service — Stickbyte Studio",
  description: "Terms of Service for Stickbyte Product Engineering & Automation Studio.",
};

export default function TermsPage() {
  return (
    <div className="py-12 sm:py-16 pb-24">
      <Container size="md">
        <div className="max-w-3xl flex flex-col gap-8">
          <div>
            <span className="text-xs font-mono-tech text-[#2B7FFF] uppercase tracking-wider block mb-2">
              [LEGAL]
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#F5F4EF]">
              Terms of Service
            </h1>
            <p className="text-xs font-mono-tech text-[#8D96A5] mt-2">
              Last updated: January 2025 · Stickbyte Studio, New Delhi
            </p>
          </div>

          <div className="flex flex-col gap-6 text-sm text-[#8D96A5] leading-relaxed border-t border-white/10 pt-6">
            <section className="flex flex-col gap-2">
              <h2 className="text-lg font-bold text-[#F5F4EF]">1. Engagement & Scope</h2>
              <p>
                Stickbyte provides product design, software engineering, API development, AI integration, and workflow automation services. All client engagements are executed under explicit Statements of Work (SOW) defining sprint milestones, architecture deliverables, and acceptance criteria.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="text-lg font-bold text-[#F5F4EF]">2. Code Ownership & Intellectual Property</h2>
              <p>
                Upon receipt of full milestone payment, 100% of custom frontend code, backend services, database schemas, and Figma UI design systems created for the client are transferred unconditionally to the client. Stickbyte retains the right to display non-confidential project architecture in its portfolio unless an NDA explicitly prohibits disclosure.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="text-lg font-bold text-[#F5F4EF]">3. Production Deliverables & Warranties</h2>
              <p>
                We adhere to strict quality benchmarks including TypeScript strict compilation, WCAG AA accessibility standards, and Core Web Vitals optimizations. We provide a post-launch warranty period specified in each client contract to address unexpected edge bugs.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="text-lg font-bold text-[#F5F4EF]">4. Jurisdiction & Inquiries</h2>
              <p>
                These terms are governed by the laws applicable in New Delhi, India. For inquiries regarding our service agreements, email{" "}
                <a href={siteConfig.contact.emailLink} className="text-[#2B7FFF] underline">
                  {siteConfig.contact.email}
                </a>.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
