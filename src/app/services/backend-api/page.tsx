import { Metadata } from "next";
import { servicesData } from "@/data/services";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Backend + APIs — Robust Systems, Databases & Integrations",
  description:
    "We architect resilient REST and GraphQL APIs, PostgreSQL database schemas, authentication layers, webhooks and secure third-party connections.",
};

export default function BackendApiPage() {
  const service = servicesData["backend-api"];
  return (
    <ServicePageTemplate
      service={service}
      nextServiceSlug="ai-chatbots"
      nextServiceTitle="AI Chatbots + Assistants"
    />
  );
}
