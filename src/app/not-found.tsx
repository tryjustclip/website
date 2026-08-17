import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { AlertTriangle, ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-24 sm:py-32 flex flex-col items-center justify-center text-center select-none">
      <Container size="sm">
        <div className="p-8 sm:p-14 rounded-3xl bg-[#0D121A] border border-white/10 flex flex-col items-center gap-6 shadow-2xl relative overflow-hidden">
          <div className="p-4 rounded-2xl bg-[#EF4444]/10 border border-[#EF4444]/30 text-[#EF4444]">
            <AlertTriangle className="w-8 h-8" />
          </div>

          <div>
            <span className="text-xs font-mono-tech text-[#EF4444] uppercase tracking-wider block mb-1 font-bold">
              [ERROR 404: NULL_POINTER_EXCEPTION]
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-[#F6F7F9] tracking-tight">
              This route didn&apos;t compile.
            </h1>
            <p className="mt-3 text-sm text-[#929CAA] leading-relaxed max-w-md">
              The page or resource you are looking for either moved, changed, or never shipped to production.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 w-full sm:w-auto">
            <Button href="/" variant="primary" size="md" icon="arrow" className="w-full sm:w-auto">
              Back Home
            </Button>
            <Button href="/work" variant="outline" size="md" icon="external" className="w-full sm:w-auto">
              View Our Work
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
