import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, MessageSquare, ArrowUpRight } from "lucide-react";

import { siteConfig } from "@/data/siteConfig";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#070A0F] border-t border-white/10 relative overflow-hidden select-none">
      {/* Background Forge Grid */}
      <div className="absolute inset-0 forge-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#2563EB]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top CTA Banner */}
      <div className="border-b border-white/10 relative z-10">
        <Container size="lg" className="py-16 sm:py-20">
          <div className="bg-gradient-to-r from-[#0D121A] to-[#131A24] border border-white/15 rounded-3xl p-8 sm:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#070A0F] border border-white/10 text-xs font-mono-tech text-[#2B7FFF] uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span>START A DIGITAL SPRINT</span>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F6F7F9] tracking-tight">
                Have something worth building?
              </h3>
              <p className="mt-4 text-base text-[#929CAA] leading-relaxed">
                Tell us what you are working on. We will help turn your requirements into a clear technical architecture and polished production build.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 relative z-10 w-full md:w-auto shrink-0">
              <Button href="/start-project" variant="primary" size="lg" icon="arrow">
                Start a Project
              </Button>
              <a
                href={siteConfig.contact.emailLink}
                className="px-6 py-3.5 bg-[#070A0F] hover:bg-[#131A24] text-[#F6F7F9] border border-white/10 hover:border-white/20 font-mono-tech uppercase font-bold text-xs tracking-wider rounded-lg transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#2B7FFF]" />
                <span>{siteConfig.contact.email}</span>
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Main 5-Column Navigation Grid */}
      <Container size="lg" className="py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Logo size="lg" />
            <p className="text-sm text-[#929CAA] leading-relaxed max-w-sm mt-3">
              Stickbyte is a product engineering and automation studio. We take raw ideas and engineer them into fast websites, digital products, APIs, AI assistants and automated systems.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#929CAA] mt-2">
              <MapPin className="w-4 h-4 text-[#2B7FFF] shrink-0" />
              <span>{siteConfig.contact.locationFull}</span>
            </div>
          </div>

          {/* Column 2: Services (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs font-mono-tech uppercase tracking-wider text-[#F6F7F9] font-bold mb-2">
              Services
            </h4>
            {siteConfig.servicesList.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="text-xs text-[#929CAA] hover:text-[#2B7FFF] transition-colors leading-relaxed"
              >
                {s.label}
              </Link>
            ))}
          </div>

          {/* Column 3: Company (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs font-mono-tech uppercase tracking-wider text-[#F6F7F9] font-bold mb-2">
              Company
            </h4>
            <Link href="/work" className="text-xs text-[#929CAA] hover:text-[#2B7FFF] transition-colors">
              Work & Builds
            </Link>
            <Link href="/services" className="text-xs text-[#929CAA] hover:text-[#2B7FFF] transition-colors">
              Services Hub
            </Link>
            <Link href="/process" className="text-xs text-[#929CAA] hover:text-[#2B7FFF] transition-colors">
              Development Process
            </Link>
            <Link href="/about" className="text-xs text-[#929CAA] hover:text-[#2B7FFF] transition-colors">
              About Studio
            </Link>
            <Link href="/insights" className="text-xs text-[#929CAA] hover:text-[#2B7FFF] transition-colors">
              Technical Insights
            </Link>
            <Link href="/careers" className="text-xs text-[#929CAA] hover:text-[#2B7FFF] transition-colors">
              Careers
            </Link>
          </div>

          {/* Column 4: Contact (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs font-mono-tech uppercase tracking-wider text-[#F6F7F9] font-bold mb-2">
              Direct Contact
            </h4>
            <a
              href={siteConfig.contact.emailLink}
              className="text-xs text-[#929CAA] hover:text-[#2B7FFF] transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-[#2B7FFF] shrink-0" />
              <span className="truncate">{siteConfig.contact.email}</span>
            </a>
            <a
              href={siteConfig.contact.phoneLink}
              className="text-xs text-[#929CAA] hover:text-[#2B7FFF] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#2B7FFF] shrink-0" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#929CAA] hover:text-[#10B981] transition-colors flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

          {/* Column 5: Network / Systems (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs font-mono-tech uppercase tracking-wider text-[#F6F7F9] font-bold mb-2">
              Network
            </h4>
            {siteConfig.socials.map((soc) => (
              <a
                key={soc.name}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#929CAA] hover:text-[#2B7FFF] transition-colors flex items-center gap-1 group"
              >
                <span>{soc.name}</span>
                <ArrowUpRight className="w-3 h-3 text-[#929CAA] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#2B7FFF]" />
              </a>
            ))}
            <div className="mt-3 p-3 rounded-xl bg-[#0D121A] border border-white/10 text-[11px] font-mono-tech">
              <span className="text-[#10B981] font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                SYSTEMS ONLINE
              </span>
              <p className="text-[10px] text-[#929CAA] mt-0.5">SLA 99.9% Production Uptime</p>
            </div>
          </div>
        </div>

        {/* Large Decorative Wordmark Watermark */}
        <div className="mt-16 pt-8 border-t border-white/10 flex justify-center overflow-hidden pointer-events-none opacity-10">
          <span className="text-6xl sm:text-8xl md:text-9xl font-black font-mono-tech tracking-widest text-[#F6F7F9]">
            STICKBYTE
          </span>
        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-[#929CAA]">
          <div className="flex items-center gap-4">
            <span>© {currentYear} STICKBYTE. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-[#2B7FFF]">
            <span>DESIGN</span>
            <span>·</span>
            <span>BUILD</span>
            <span>·</span>
            <span>AUTOMATE</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#F6F7F9] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#F6F7F9] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
