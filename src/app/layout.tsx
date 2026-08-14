import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/data/siteConfig";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Product Engineering, Web Development & Automation`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Product Engineering",
    "Web Development",
    "Digital Automation Studio",
    "Next.js Developer",
    "Custom APIs",
    "AI Chatbots",
    "UI/UX Design Systems",
    "New Delhi Software Studio",
  ],
  authors: [{ name: "Stickbyte Studio" }],
  creator: "Stickbyte",
  icons: {
    icon: "/stickbyte-logo.jpg",
    apple: "/stickbyte-logo.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} — Product Engineering, Web Development & Automation`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/stickbyte-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Stickbyte Product Engineering Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Product Engineering + Automation`,
    description: siteConfig.description,
    images: ["/stickbyte-logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${mono.variable} dark scroll-smooth`}>
      <body className="bg-[#070A0E] text-[#F5F4EF] min-h-screen flex flex-col selection:bg-[#2563EB]/40 selection:text-white">
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
