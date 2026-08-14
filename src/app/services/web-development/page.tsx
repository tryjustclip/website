import { Metadata } from "next";
import { servicesData } from "@/data/services";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Web Development — High-Performance Websites & SaaS Web Apps",
  description:
    "Stickbyte engineers high-performance marketing websites, web applications, SaaS dashboards and custom portals with Next.js, TypeScript and clean architecture.",
};

export default function WebDevelopmentPage() {
  const service = servicesData["web-development"];
  return (
    <ServicePageTemplate
      service={service}
      nextServiceSlug="ui-ux-design"
      nextServiceTitle="UI/UX + Product Design"
    />
  );
}
