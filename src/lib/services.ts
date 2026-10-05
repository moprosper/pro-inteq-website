import {
  Building2,
  ClipboardList,
  Cog,
  Fan,
  RadioTower,
  ShieldCheck,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { IMAGES, type SiteImageAsset } from "@/lib/assets";

export interface Service {
  id: string;
  title: string;
  summary: string;
  items: readonly string[];
  icon: LucideIcon;
  image: SiteImageAsset;
}

export const SERVICES: readonly Service[] = [
  {
    id: "mechanical",
    title: "Mechanical Engineering",
    summary:
      "Installation, fabrication and maintenance of mechanical systems, plant and equipment for industrial and commercial facilities.",
    items: [
      "Mechanical installation",
      "Equipment installation",
      "Pumps",
      "Valves",
      "Piping",
      "Machinery maintenance",
      "Mechanical fabrication",
      "Plant and equipment maintenance",
    ],
    icon: Cog,
    image: IMAGES.mechanical,
  },
  {
    id: "electrical",
    title: "Electrical Engineering",
    summary:
      "Electrical installation, distribution and industrial electrical works, tested and commissioned before handover.",
    items: [
      "Electrical installation",
      "LV/MV works where applicable",
      "Electrical distribution",
      "Industrial electrical works",
      "Lighting",
      "Earthing",
      "Lightning protection",
      "Testing and commissioning",
    ],
    icon: Zap,
    image: IMAGES.electrical,
  },
  {
    id: "hvac",
    title: "HVAC & Building Services",
    summary:
      "Air conditioning, ventilation and building services systems, from installation through testing, commissioning and maintenance.",
    items: [
      "Chillers",
      "VRF/VRV systems",
      "Air handling units (AHU)",
      "Fan coil units (FCU)",
      "Ventilation",
      "Ductwork",
      "Air conditioning",
      "Air curtains",
      "HVAC maintenance",
      "Testing and commissioning",
    ],
    icon: Fan,
    image: IMAGES.hvac,
  },
  {
    id: "telecom-ict",
    title: "Telecommunications & ICT",
    summary:
      "Fibre optic, structured cabling and network infrastructure for telecom operators, enterprises and institutions.",
    items: [
      "Fibre optic installation",
      "Fibre testing",
      "Structured cabling",
      "Network infrastructure",
      "Telecom infrastructure",
      "Data and communication systems",
    ],
    icon: RadioTower,
    image: IMAGES.telecom,
  },
  {
    id: "civil",
    title: "Civil Construction & Infrastructure",
    summary:
      "Civil and building works that support engineering installations, utilities and infrastructure projects.",
    items: [
      "Civil works",
      "Building works",
      "Site preparation",
      "Concrete works",
      "Trenches",
      "Duct routes",
      "Infrastructure support",
    ],
    icon: Building2,
    image: IMAGES.civil,
  },
  {
    id: "security-elv",
    title: "Security & ELV Systems",
    summary:
      "Electronic security and extra-low-voltage systems, installed and integrated to protect people, assets and facilities.",
    items: [
      "CCTV",
      "Access control",
      "Intrusion and alarm systems",
      "Intercom",
      "Barriers",
      "Security system integration",
    ],
    icon: ShieldCheck,
    image: IMAGES.securityElv,
  },
  {
    id: "consultancy",
    title: "Project Management & Consultancy",
    summary:
      "Engineering design, technical consultancy and supervision that help clients plan and deliver projects with confidence.",
    items: [
      "Engineering design",
      "Technical consultancy",
      "Project supervision",
      "Project management",
      "Site inspection",
      "Technical assessments",
      "BOQ and specification support",
    ],
    icon: ClipboardList,
    image: IMAGES.projectManagement,
  },
  {
    id: "maintenance",
    title: "Maintenance & Technical Support",
    summary:
      "Planned and responsive maintenance that keeps mechanical, electrical and HVAC systems running reliably.",
    items: [
      "Preventive maintenance",
      "Corrective maintenance",
      "Troubleshooting",
      "HVAC maintenance",
      "Electrical maintenance",
      "Mechanical maintenance",
      "Technical support",
    ],
    icon: Wrench,
    image: IMAGES.maintenance,
  },
];
