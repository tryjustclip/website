import { Metadata } from "next";
import { servicesData } from "@/data/services";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Support + Scaling — Continuous Maintenance, Security & Growth",
  description:
    "Post-launch technical maintenance, uptime monitoring, security patching, performance optimization, and continuous feature sprints.",
};

export default function SupportScalingPage() {
  const service = servicesData["support-scaling"];
  return (
    <ServicePageTemplate
      service={service}
      nextServiceSlug="web-development"
      nextServiceTitle="Web Development"
    />
  );
}
