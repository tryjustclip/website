"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { siteConfig } from "@/data/siteConfig";
import { Logo } from "@/components/Logo";
import { MobileMenu } from "@/components/MobileMenu";
import { Button } from "@/components/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#070A0F]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-xl shadow-black/50"
            : "bg-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo on Left */}
          <Logo size="md" />

          {/* Center / Right Links on Desktop */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {siteConfig.navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono-tech uppercase font-bold tracking-wider transition-all duration-200 ${
                    isActive
                      ? "text-[#2B7FFF] bg-[#2563EB]/15 border border-[#2563EB]/40 shadow-sm"
                      : "text-[#929CAA] hover:text-[#F6F7F9] hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Primary CTA on Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Button href="/start-project" variant="primary" size="sm" icon="arrow">
              Start a Project
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2.5">
            <Link
              href="/start-project"
              className="px-3 py-1.5 bg-[#2563EB] text-white text-[11px] font-mono-tech uppercase font-bold rounded-lg shadow-sm"
            >
              Start
            </Link>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-lg border border-white/15 text-[#F6F7F9] hover:bg-white/5 focus:outline-none"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}

