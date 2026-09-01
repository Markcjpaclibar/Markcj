import {
  Puzzle,
  Globe,
  Smartphone,
  GraduationCap,
  Sparkles,
  Building2,
} from "lucide-react";

export interface ServiceItem {
  icon: any;
  title: string;
  description: string;
  isCoreOffer?: boolean;
  features: string[];
}

export const servicesData: ServiceItem[] = [
  {
    icon: Globe,
    title: "Websites",
    description:
      "The core offer: sites that introduce your work clearly, convert visitors, and give them a seamless next step.",
    isCoreOffer: true,
    features: [
      "Business & company websites",
      "E-commerce stores",
      "Booking & reservation systems",
      "Landing pages for marketing",
    ],
  },
  {
    icon: Puzzle,
    title: "Custom Systems / Software",
    description:
      "Software built around how your business actually runs, not a generic template.",
    features: [
      "CRM (customer management)",
      "Inventory & sales tracking",
      "POS & transaction tracking",
      "Admin dashboards with analytics",
    ],
  },
  {
    icon: Smartphone,
    title: "Applications",
    description:
      "Apps for the devices people already use, with shared dashboards when the work spans more than one screen.",
    features: [
      "Mobile apps (Android/iOS)",
      "Desktop apps (Windows/Mac)",
      "Cross-platform apps",
      "Multi-device system dashboards",
    ],
  },
  {
    icon: GraduationCap,
    title: "Capstone Projects",
    description:
      "Thesis and capstone systems scoped to defend well: working software, clear architecture, and a solid demo.",
    features: [
      "Thesis and capstone builds",
      "Documentation-ready architecture",
      "Adviser-friendly scope",
      "Defense-ready walkthroughs",
    ],
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    description:
      "Practical AI inside the tools a team already uses — assistants, automation, and agent-style workflows.",
    features: [
      "AI assistants in existing systems",
      "Document and workflow automation",
      "Chat and image tools",
      "Agent-style task support",
    ],
  },
  {
    icon: Building2,
    title: "Industry-Specific Software",
    description:
      "Tailored systems built for how a specific industry works, with the right rules baked in.",
    features: [
      "Restaurant & food ordering systems",
      "Real estate & property management",
      "Clinic, pharmacy & healthcare tools",
      "Learning management systems (LMS)",
    ],
  },
];