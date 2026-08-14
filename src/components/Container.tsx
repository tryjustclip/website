import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "full";
}

export function Container({ children, className = "", size = "lg" }: ContainerProps) {
  const maxSizes = {
    sm: "max-w-4xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
    full: "max-w-[1440px]",
  };

  return (
    <div className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${maxSizes[size]} ${className}`}>
      {children}
    </div>
  );
}

interface SectionHeaderProps {
  code?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  code,
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"
      } ${className}`}
    >
      {(code || eyebrow) && (
        <div
          className={`flex items-center gap-2 mb-3 text-xs font-mono-tech uppercase tracking-wider text-[#2B7FFF] ${
            align === "center" ? "justify-center" : "justify-start"
          }`}
        >
          {code && (
            <span className="px-2 py-0.5 rounded bg-[#2563EB]/10 border border-[#2563EB]/30 font-semibold">
              [{code}]
            </span>
          )}
          {eyebrow && <span>{eyebrow}</span>}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F4EF] leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm sm:text-base md:text-lg text-[#8D96A5] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
