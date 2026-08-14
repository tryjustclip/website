"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { Logo } from "@/components/Logo";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const menuLinks = [
    { code: "01", label: "Work", href: "/work" },
    { code: "02", label: "Services", href: "/services" },
    { code: "03", label: "Process", href: "/process" },
    { code: "04", label: "About", href: "/about" },
    { code: "05", label: "Insights", href: "/insights" },
    { code: "06", label: "Careers", href: "/careers" },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-[#070A0E]/95 backdrop-blur-xl transition-all duration-300 md:hidden overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
    >
      {/* Header inside mobile menu */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 shrink-0">
        <Logo size="sm" />
        <button
          onClick={onClose}
          className="p-2 rounded-md border border-white/15 text-[#F5F4EF] hover:bg-white/5 focus:outline-none"
          aria-label="Close navigation menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main navigation list */}
      <div className="flex-1 px-6 py-8 flex flex-col justify-between gap-8">
        <nav className="flex flex-col gap-2">
          {menuLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="flex items-center justify-between py-3.5 border-b border-white/5 text-lg font-medium text-[#F5F4EF] hover:text-[#2B7FFF] transition-colors group"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono-tech text-[#8D96A5] group-hover:text-[#2B7FFF]">
                  [{item.code}]
                </span>
                <span>{item.label}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#8D96A5] transition-transform group-hover:translate-x-1 group-hover:text-[#2B7FFF]" />
            </Link>
          ))}
        </nav>

        {/* Start a project CTA in mobile menu */}
        <div className="flex flex-col gap-4">
          <Link
            href="/start-project"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-mono-tech uppercase font-semibold text-xs tracking-wider rounded-md transition-all shadow-[0_4px_15px_rgba(37,99,235,0.4)]"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* Contact Details at bottom */}
          <div className="p-4 rounded-lg bg-[#0D1117] border border-white/10 flex flex-col gap-2.5 text-xs text-[#8D96A5] font-mono-tech">
            <a
              href={siteConfig.contact.emailLink}
              className="flex items-center gap-2 hover:text-[#2B7FFF] transition-colors truncate"
            >
              <Mail className="w-3.5 h-3.5 shrink-0 text-[#2B7FFF]" />
              <span>{siteConfig.contact.email}</span>
            </a>
            <a
              href={siteConfig.contact.phoneLink}
              className="flex items-center gap-2 hover:text-[#2B7FFF] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 shrink-0 text-[#2B7FFF]" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>
            <div className="flex items-center gap-2 text-white/50">
              <MapPin className="w-3.5 h-3.5 shrink-0 text-[#8D96A5]" />
              <span>{siteConfig.contact.locationFull}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
