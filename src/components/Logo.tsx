import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Logo({ showWordmark = true, size = "md", className = "" }: LogoProps) {
  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-11 h-11",
  };

  const textSizes = {
    sm: "text-base tracking-wider",
    md: "text-lg tracking-wider",
    lg: "text-xl tracking-widest",
  };

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 transition-opacity hover:opacity-90 focus:outline-none ${className}`}
      aria-label="Stickbyte Home"
    >
      <div
        className={`relative ${iconSizes[size]} rounded-lg overflow-hidden border border-white/15 bg-[#0D1117] flex items-center justify-center transition-all duration-300 group-hover:border-[#2563EB]/60 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.35)] shrink-0`}
      >
        <Image
          src="/stickbyte-logo.jpg"
          alt="Stickbyte Official Logo"
          width={48}
          height={48}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {showWordmark && (
        <div className="flex flex-col">
          <span className={`font-bold font-mono-tech uppercase text-[#F5F4EF] ${textSizes[size]} leading-none flex items-center gap-1`}>
            STICK<span className="text-[#2B7FFF]">BYTE</span>
          </span>
          <span className="text-[10px] font-mono-tech tracking-widest text-[#8D96A5] uppercase mt-1">
            STUDIO
          </span>
        </div>
      )}
    </Link>
  );
}
