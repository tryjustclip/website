import { Metadata } from "next";
import { servicesData } from "@/data/services";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "UI/UX + Product Design — Intuitive Interfaces & Design Systems",
  description:
    "Product discovery, user flows, wireframes, high-fidelity UI design, and developer-ready Figma design systems crafted for clarity and scale.",
};

export default function UiUxDesignPage() {
  const service = servicesData["ui-ux-design"];
  return (
    <ServicePageTemplate
      service={service}
      nextServiceSlug="backend-api"
      nextServiceTitle="Backend + APIs"
    />
  );
}
