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
            <span className="px-2.5 py-0.5 rounded-md bg-[#2563EB]/15 border border-[#2563EB]/40 font-bold">
              [{code}]
            </span>
          )}
          {eyebrow && <span className="font-bold">{eyebrow}</span>}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#F6F7F9] leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-[#929CAA] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
