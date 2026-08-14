export interface FAQItem {
  question: string;
  answer: string;
}

export const faqList: FAQItem[] = [
  {
    question: "How does a Stickbyte project begin?",
    answer:
      "Every engagement starts with a technical discovery conversation. You submit a brief or schedule a call, and we review your requirements, technical constraints, and goals. We then provide a clear scope, architecture recommendation, and timeline before any agreement is signed.",
  },
  {
    question: "What types of projects do you take on?",
    answer:
      "We design and engineer high-performance marketing websites, SaaS web applications, developer tools, custom client portals, REST/GraphQL APIs, RAG-grounded AI chatbots, and multi-platform business workflow automations.",
  },
  {
    question: "Can you handle both design and development?",
    answer:
      "Yes. Stickbyte operates as a unified product engineering studio. We handle everything from discovery, UX strategy, and high-fidelity Figma UI design systems to fullstack frontend, backend, database architecture, and production deployment.",
  },
  {
    question: "Can you work with an existing website or product?",
    answer:
      "Absolutely. We frequently take on legacy refactors, codebase modernizations, speed/Core Web Vitals optimizations, new feature additions, API integrations, and UI redesigns for existing digital products.",
  },
  {
    question: "Can you build APIs and backend systems?",
    answer:
      "Yes. Backend engineering is a core capability. We architect resilient REST and GraphQL APIs, relational (PostgreSQL) and document database schemas, authentication layers (OAuth, JWT, RBAC), payment gateways, and asynchronous webhook queues.",
  },
  {
    question: "Do you develop AI chatbots?",
    answer:
      "Yes, we build grounded AI assistants and copilots. We connect conversational interfaces to your actual documentation, databases, and APIs using Retrieval-Augmented Generation (RAG) and function calling, backed by strict guardrails to eliminate hallucinations.",
  },
  {
    question: "Can you automate our current business workflow?",
    answer:
      "Yes. We analyze repetitive manual touchpoints in your business and build resilient event-driven automations connecting CRMs, payment gateways, email marketing, messaging bots (Slack/WhatsApp), and internal databases.",
  },
  {
    question: "Can you integrate our existing tools?",
    answer:
      "Yes. We work with standard industry platforms including Stripe, Razorpay, HubSpot, Salesforce, Supabase, PostgreSQL, OpenAI, Claude, Slack, Zapier, Make, and custom proprietary internal APIs.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "Our core stack includes Next.js, React, TypeScript, Node.js, Tailwind CSS, PostgreSQL, Redis, Prisma, Docker, and modern cloud deployment platforms like Vercel, AWS, and Cloudflare.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Timelines depend strictly on project scope and complexity. A focused marketing website typically takes 2 to 4 weeks, while a fullstack SaaS product, complex API suite, or multi-step automation workflow generally spans 6 to 12 weeks. We provide realistic milestone breakdowns during discovery.",
  },
  {
    question: "Who owns the code and design after completion?",
    answer:
      "You do. 100% of all intellectual property, Figma design files, source code repositories, and deployment configurations are fully transferred to you upon project sign-off.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes. We offer dedicated support and scaling partnerships post-launch to monitor uptime, patch security dependencies, optimize performance, and continuously build new features as your product expands.",
  },
  {
    question: "Can you work with companies outside India?",
    answer:
      "Yes. While we are proudly headquartered in New Delhi, India, our team operates worldwide across North America, Europe, the UK, the Middle East, Singapore, and Australia with asynchronous communication, shared staging environments, and scheduled video alignments.",
  },
];
