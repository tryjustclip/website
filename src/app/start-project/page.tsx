import { Suspense } from "react";
import { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { Container } from "@/components/Container";
import { MultiStepBriefForm } from "@/components/MultiStepBriefForm";
import { Mail, Phone, MessageSquare, MapPin, Clock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Start a Project — Tell Us What You Want to Build",
  description:
    "Submit your project requirements, scope, or technical bottleneck. Stickbyte will review and provide a structured product architecture and scoping plan.",
};

export default function StartProjectPage() {
  return (
    <div className="py-12 sm:py-16 pb-24 flex flex-col gap-12">
      <Container size="lg">
        {/* Page Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2B7FFF] uppercase tracking-wider mb-2">
            <span className="px-2 py-0.5 rounded bg-[#2563EB]/10 border border-[#2563EB]/30 font-semibold">
              [INITIATE SPRINT]
            </span>
            <span>DIRECT ENGAGEMENT</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F5F4EF] tracking-tight">
            Tell us what you want to build.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#8D96A5] leading-relaxed">
            Fill out the structured brief below. We review every submission within 24 business hours to evaluate technical feasibility and draft an execution roadmap.
          </p>
        </div>

        {/* 2-Column Layout: Form (8 cols) + Direct Contact Rail (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-8">
            <Suspense fallback={<div className="p-8 text-center text-xs font-mono-tech text-[#8D96A5]">Loading Brief Configurator...</div>}>
              <MultiStepBriefForm />
            </Suspense>
          </div>

          {/* Direct Contact & Assurance Rail */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Quick Actions Card */}
            <div className="p-6 rounded-2xl bg-[#0D1117] border border-white/10 flex flex-col gap-4">
              <h3 className="text-xs font-mono-tech uppercase tracking-wider text-[#F5F4EF] font-bold pb-2 border-b border-white/10">
                DIRECT CONTACT CHANNELS
              </h3>

              <a
                href={siteConfig.contact.emailLink}
                className="p-3.5 rounded-xl bg-[#070A0E] border border-white/5 hover:border-[#2563EB]/40 flex items-center gap-3 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#2563EB]/15 flex items-center justify-center text-[#2B7FFF] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] font-mono-tech text-[#8D96A5] block uppercase">Direct Email</span>
                  <span className="text-xs font-mono-tech text-[#F5F4EF] group-hover:text-[#2B7FFF] truncate block">
                    {siteConfig.contact.email}
                  </span>
                </div>
              </a>

              <a
                href={siteConfig.contact.phoneLink}
                className="p-3.5 rounded-xl bg-[#070A0E] border border-white/5 hover:border-[#2563EB]/40 flex items-center gap-3 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#2563EB]/15 flex items-center justify-center text-[#2B7FFF] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono-tech text-[#8D96A5] block uppercase">Direct Call</span>
                  <span className="text-xs font-mono-tech text-[#F5F4EF] group-hover:text-[#2B7FFF] block">
                    {siteConfig.contact.phoneDisplay}
                  </span>
                </div>
              </a>

              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[#070A0E] border border-white/5 hover:border-[#10B981]/40 flex items-center gap-3 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#10B981]/15 flex items-center justify-center text-[#10B981] shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono-tech text-[#8D96A5] block uppercase">WhatsApp Direct</span>
                  <span className="text-xs font-mono-tech text-[#10B981] block">
                    Message Stickbyte
                  </span>
                </div>
              </a>

              <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs font-mono-tech text-[#8D96A5]">
                <MapPin className="w-3.5 h-3.5 text-[#2B7FFF] shrink-0" />
                <span>{siteConfig.contact.locationFull}</span>
              </div>
            </div>

            {/* Engagement Guarantees */}
            <div className="p-6 rounded-2xl bg-[#0D1117] border border-white/10 flex flex-col gap-3.5 text-xs text-[#8D96A5]">
              <h4 className="font-mono-tech uppercase tracking-wider text-[#F5F4EF] font-bold text-xs">
                WHAT HAPPENS NEXT
              </h4>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#2B7FFF] shrink-0 mt-0.5" />
                <p>24-hour review of your requirements and architectural dependencies.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <p>Strict Non-Disclosure (NDA) and 100% intellectual property ownership transfer.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
