"use client";

import { useState } from "react";
import { FAQItem } from "@/data/faq";
import { ChevronDown } from "lucide-react";

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export function FAQAccordion({ items, className = "" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const panelId = `faq-panel-${idx}`;
        const buttonId = `faq-btn-${idx}`;

        return (
          <div
            key={idx}
            className={`rounded-xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? "bg-[#0D1117] border-[#2563EB]/40 shadow-lg shadow-black/40"
                : "bg-[#070A0E] border-white/10 hover:border-white/20"
            }`}
          >
            <button
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(idx)}
              className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono-tech text-[#2B7FFF]">
                  [{String(idx + 1).padStart(2, "0")}]
                </span>
                <span className="text-sm sm:text-base font-semibold text-[#F5F4EF]">
                  {item.question}
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-[#8D96A5] shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-[#2B7FFF]" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#8D96A5] leading-relaxed border-t border-white/5 animate-in fade-in duration-200"
              >
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
