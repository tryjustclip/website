import { Metadata } from "next";
import { servicesData } from "@/data/services";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "AI Chatbots + Assistants — Grounded RAG & API-Connected Copilots",
  description:
    "Grounded conversational interfaces, vector search RAG systems, customer support assistants, and internal copilots connected directly to your business data.",
};

export default function AiChatbotsPage() {
  const service = servicesData["ai-chatbots"];
  return (
    <ServicePageTemplate
      service={service}
      nextServiceSlug="automation"
      nextServiceTitle="Automation + Integrations"
    />
  );
}
