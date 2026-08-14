import { Metadata } from "next";
import { Container } from "@/components/Container";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy — Stickbyte Studio",
  description: "Privacy Policy for Stickbyte Product Engineering & Automation Studio.",
};

export default function PrivacyPage() {
  return (
    <div className="py-12 sm:py-16 pb-24">
      <Container size="md">
        <div className="max-w-3xl flex flex-col gap-8">
          <div>
            <span className="text-xs font-mono-tech text-[#2B7FFF] uppercase tracking-wider block mb-2">
              [LEGAL]
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#F5F4EF]">
              Privacy Policy
            </h1>
            <p className="text-xs font-mono-tech text-[#8D96A5] mt-2">
              Last updated: January 2025 · Stickbyte Studio, New Delhi
            </p>
          </div>

          <div className="flex flex-col gap-6 text-sm text-[#8D96A5] leading-relaxed border-t border-white/10 pt-6">
            <section className="flex flex-col gap-2">
              <h2 className="text-lg font-bold text-[#F5F4EF]">1. Information We Collect</h2>
              <p>
                When you interact with Stickbyte (via our website, project brief configurator, email, or direct consultation), we only collect information necessary to evaluate your product requirements and communicate with you. This includes your name, work email address, company name, project brief details, and any architectural specifications you choose to share.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="text-lg font-bold text-[#F5F4EF]">2. How We Use Your Information</h2>
              <p>
                We use the submitted information strictly to:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-1 text-[#F5F4EF]/80">
                <li>Evaluate project scope and technical feasibility</li>
                <li>Draft architecture recommendations, proposals, and milestone schedules</li>
                <li>Communicate directly regarding ongoing sprint deliverables and system deployments</li>
              </ul>
              <p>
                We never sell, rent, or trade your personal information or project data to third-party marketing brokers.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="text-lg font-bold text-[#F5F4EF]">3. Intellectual Property & Confidentiality</h2>
              <p>
                All technical specifications, business logic, codebase repositories, API keys, and internal workflows shared during Discovery or execution are governed by strict confidentiality and Non-Disclosure obligations.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="text-lg font-bold text-[#F5F4EF]">4. Contact</h2>
              <p>
                If you have any questions regarding this Privacy Policy, please contact our team directly at{" "}
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
