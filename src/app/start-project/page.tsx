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
    <div className="py-12 sm:py-16 pb-24 flex flex-col gap-12 select-none">
      <Container size="lg">
        {/* Page Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#131A24] border border-white/10 text-xs font-mono-tech text-[#2B7FFF] uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
            <span>INITIATE SPRINT</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#F6F7F9] tracking-tight leading-[1.05]">
            Tell us what you want to build.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#929CAA] leading-relaxed">
            Fill out the structured brief below. We review every submission within 24 business hours to evaluate technical feasibility and draft an execution roadmap.
          </p>
        </div>

        {/* 2-Column Layout: Form (8 cols) + Direct Contact Rail (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-8">
            <Suspense fallback={<div className="p-8 text-center text-xs font-mono-tech text-[#929CAA]">Loading Brief Configurator...</div>}>
              <MultiStepBriefForm />
            </Suspense>
          </div>

          {/* Direct Contact & Assurance Rail */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Quick Actions Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0D121A] border border-white/10 flex flex-col gap-4 shadow-xl">
              <h3 className="text-xs font-mono-tech uppercase tracking-wider text-[#F6F7F9] font-bold pb-2 border-b border-white/10">
                DIRECT CONTACT CHANNELS
              </h3>

              <a
                href={siteConfig.contact.emailLink}
                className="p-4 rounded-xl bg-[#070A0F] border border-white/5 hover:border-[#2563EB]/40 flex items-center gap-3 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#2563EB]/15 flex items-center justify-center text-[#2B7FFF] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] font-mono-tech text-[#929CAA] block uppercase font-bold">Direct Email</span>
                  <span className="text-xs font-mono-tech text-[#F6F7F9] group-hover:text-[#2B7FFF] truncate block">
                    {siteConfig.contact.email}
                  </span>
                </div>
              </a>

              <a
                href={siteConfig.contact.phoneLink}
                className="p-4 rounded-xl bg-[#070A0F] border border-white/5 hover:border-[#2563EB]/40 flex items-center gap-3 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#2563EB]/15 flex items-center justify-center text-[#2B7FFF] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono-tech text-[#929CAA] block uppercase font-bold">Direct Call</span>
                  <span className="text-xs font-mono-tech text-[#F6F7F9] group-hover:text-[#2B7FFF] block">
                    {siteConfig.contact.phoneDisplay}
                  </span>
                </div>
              </a>

              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#070A0F] border border-white/5 hover:border-[#10B981]/40 flex items-center gap-3 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#10B981]/15 flex items-center justify-center text-[#10B981] shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono-tech text-[#929CAA] block uppercase font-bold">WhatsApp Direct</span>
                  <span className="text-xs font-mono-tech text-[#10B981] block font-semibold">
                    Message Stickbyte
                  </span>
                </div>
              </a>

              <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs font-mono-tech text-[#929CAA]">
                <MapPin className="w-4 h-4 text-[#2B7FFF] shrink-0" />
                <span>{siteConfig.contact.locationFull}</span>
              </div>
            </div>

            {/* Engagement Guarantees */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0D121A] border border-white/10 flex flex-col gap-4 text-xs text-[#929CAA] shadow-xl">
              <h4 className="font-mono-tech uppercase tracking-wider text-[#F6F7F9] font-bold text-xs">
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
