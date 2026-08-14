import { Metadata } from "next";
import { servicesData } from "@/data/services";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Automation + Integrations — Event-Driven Business Workflows",
  description:
    "Eliminate manual bottlenecks with resilient automated workflows, lead routing, webhook pipelines, CRM sync, and payment event handlers.",
};

export default function AutomationPage() {
  const service = servicesData["automation"];
  return (
    <ServicePageTemplate
      service={service}
      nextServiceSlug="support-scaling"
      nextServiceTitle="Support + Scaling"
    />
  );
}
