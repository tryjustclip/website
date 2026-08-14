import Link from "next/link";
import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  icon?: "arrow" | "external" | "none";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  icon = "none",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-mono-tech uppercase font-semibold text-xs tracking-wider rounded-md transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const sizeStyles = {
    sm: "px-3.5 py-2 gap-1.5 text-[11px]",
    md: "px-5 py-2.5 gap-2 text-xs",
    lg: "px-7 py-3.5 gap-2.5 text-sm",
  };

  const variantStyles = {
    primary:
      "bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-[0_2px_12px_rgba(37,99,235,0.3)] hover:shadow-[0_4px_20px_rgba(37,99,235,0.45)] border border-[#3B82F6]/30",
    secondary:
      "bg-[#131923] hover:bg-[#1C2432] text-[#F5F4EF] border border-white/10 hover:border-white/20",
    outline:
      "bg-transparent hover:bg-white/5 text-[#F5F4EF] border border-white/15 hover:border-white/30",
    ghost:
      "bg-transparent hover:bg-white/5 text-[#8D96A5] hover:text-[#F5F4EF] border-transparent",
    link:
      "bg-transparent text-[#2B7FFF] hover:text-white p-0 h-auto border-none underline-offset-4 hover:underline",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const renderIcon = () => {
    if (icon === "arrow") {
      return <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />;
    }
    if (icon === "external") {
      return <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />;
    }
    return null;
  };

  if (href) {
    return (
      <Link href={href} className={`group ${combinedClasses}`}>
        <span>{children}</span>
        {renderIcon()}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group ${combinedClasses}`}
    >
      <span>{children}</span>
      {renderIcon()}
    </button>
  );
}
