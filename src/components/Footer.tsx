import Link from "next/link";
import { Mail, Phone, MapPin, MessageSquare, ArrowUpRight, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#070A0E] border-t border-white/10 relative overflow-hidden">
      {/* Subtle Background Byte Grid */}
      <div className="absolute inset-0 byte-grid-bg opacity-40 pointer-events-none" />

      {/* Top CTA Banner */}
      <div className="border-b border-white/10 relative z-10">
        <Container size="lg" className="py-14 sm:py-16">
          <div className="bg-[#0D1117] border border-white/10 rounded-xl p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="max-w-xl relative z-10">
              <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2B7FFF] uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span>Ready to engineer your product?</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F5F4EF] tracking-tight">
                Have something worth building?
              </h3>
              <p className="mt-2 text-sm text-[#8D96A5]">
                Tell us what you are working on. We will help turn your requirements into a clear technical architecture and polished product.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 relative z-10 w-full md:w-auto">
              <Link
                href="/start-project"
                className="px-6 py-3.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-mono-tech uppercase font-semibold text-xs tracking-wider rounded-md transition-all shadow-[0_4px_15px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2 group"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href={siteConfig.contact.emailLink}
                className="px-5 py-3.5 bg-[#131923] hover:bg-[#1C2432] text-[#F5F4EF] border border-white/10 font-mono-tech uppercase font-semibold text-xs tracking-wider rounded-md transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-3.5 h-3.5 text-[#2B7FFF]" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Main 5-Column Grid */}
      <Container size="lg" className="py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Logo size="md" />
            <p className="text-sm text-[#8D96A5] leading-relaxed max-w-sm mt-2">
              Stickbyte designs, engineers and automates digital products for businesses ready to build something better.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#8D96A5] mt-2">
              <MapPin className="w-3.5 h-3.5 text-[#2B7FFF] shrink-0" />
              <span>{siteConfig.contact.locationFull}</span>
            </div>
          </div>

          {/* Column 2: Services (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs font-mono-tech uppercase tracking-wider text-[#F5F4EF] font-semibold mb-2">
              Services
            </h4>
            {siteConfig.servicesList.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="text-xs text-[#8D96A5] hover:text-[#2B7FFF] transition-colors leading-relaxed"
              >
                {s.label}
              </Link>
            ))}
          </div>

          {/* Column 3: Company (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs font-mono-tech uppercase tracking-wider text-[#F5F4EF] font-semibold mb-2">
              Company
            </h4>
            <Link href="/work" className="text-xs text-[#8D96A5] hover:text-[#2B7FFF] transition-colors">
              Work & Builds
            </Link>
            <Link href="/services" className="text-xs text-[#8D96A5] hover:text-[#2B7FFF] transition-colors">
              Services Hub
            </Link>
            <Link href="/process" className="text-xs text-[#8D96A5] hover:text-[#2B7FFF] transition-colors">
              Development Process
            </Link>
            <Link href="/about" className="text-xs text-[#8D96A5] hover:text-[#2B7FFF] transition-colors">
              About Studio
            </Link>
            <Link href="/insights" className="text-xs text-[#8D96A5] hover:text-[#2B7FFF] transition-colors">
              Technical Insights
            </Link>
            <Link href="/careers" className="text-xs text-[#8D96A5] hover:text-[#2B7FFF] transition-colors">
              Careers
            </Link>
          </div>

          {/* Column 4: Contact (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs font-mono-tech uppercase tracking-wider text-[#F5F4EF] font-semibold mb-2">
              Direct Contact
            </h4>
            <a
              href={siteConfig.contact.emailLink}
              className="text-xs text-[#8D96A5] hover:text-[#2B7FFF] transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3 h-3 text-[#2B7FFF]" />
              <span className="truncate">{siteConfig.contact.email}</span>
            </a>
            <a
              href={siteConfig.contact.phoneLink}
              className="text-xs text-[#8D96A5] hover:text-[#2B7FFF] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-[#2B7FFF]" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#8D96A5] hover:text-[#10B981] transition-colors flex items-center gap-1.5"
            >
              <MessageSquare className="w-3 h-3 text-[#10B981]" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

          {/* Column 5: Connect / Social (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs font-mono-tech uppercase tracking-wider text-[#F5F4EF] font-semibold mb-2">
              Network
            </h4>
            {siteConfig.socials.map((soc) => (
              <a
                key={soc.name}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#8D96A5] hover:text-[#2B7FFF] transition-colors flex items-center gap-1 group"
              >
                <span>{soc.name}</span>
                <ArrowUpRight className="w-3 h-3 text-[#8D96A5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#2B7FFF]" />
              </a>
            ))}
            <div className="mt-2 p-2.5 rounded bg-[#0D1117] border border-white/10 text-[11px] font-mono-tech text-[#8D96A5]">
              <span className="text-[#10B981] font-semibold">● SYSTEMS ONLINE</span>
              <p className="text-[10px] text-[#8D96A5]/80 mt-0.5">SLA 99.9% Uptime</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-[#8D96A5]">
          <div className="flex items-center gap-4">
            <span>© {currentYear} Stickbyte. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-[#2B7FFF]/80">
            <span>DESIGN</span>
            <span>·</span>
            <span>ENGINEERING</span>
            <span>·</span>
            <span>AUTOMATION</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#F5F4EF] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#F5F4EF] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
