import React from "react";

const capabilities = [
  "WEB DEVELOPMENT",
  "UI/UX DESIGN",
  "BACKEND + APIs",
  "AI ASSISTANTS",
  "WORKFLOW AUTOMATION",
  "SYSTEM INTEGRATIONS",
  "SAAS PRODUCTS",
  "CLOUD ARCHITECTURE",
  "HEADLESS CMS",
  "PERFORMANCE SCALING",
];

export function CapabilityMarquee() {
  return (
    <div className="w-full bg-[#0D121A] border-y border-white/10 py-4 sm:py-5 overflow-hidden relative select-none">
      {/* Side Fade Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#070A0F] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#070A0F] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-6 sm:gap-8">
        {/* Render twice for seamless infinite loop */}
        {[...capabilities, ...capabilities].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-6 sm:gap-8 shrink-0 text-xs sm:text-sm font-mono-tech tracking-widest uppercase text-[#929CAA] hover:text-[#F6F7F9] transition-colors"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span className="font-semibold text-[#F6F7F9]">{item}</span>
            </span>
            <span className="text-[#2B7FFF]/40 text-base font-light">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
