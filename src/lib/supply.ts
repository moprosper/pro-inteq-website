import {
  Cctv,
  Cog,
  Construction,
  Fan,
  FlaskConical,
  Gauge,
  HardHat,
  Network,
  Pickaxe,
  Plug,
  type LucideIcon,
} from "lucide-react";

export interface SupplyCategory {
  id: string;
  title: string;
  description: string;
  /** Typical items; indicative, not a fixed catalogue. */
  items: readonly string[];
  icon: LucideIcon;
}

// Based on the supply sections of the company profile. Lists show the type of
// requirement PRO-INTEQ sources — the site is not a product catalogue or shop.
export const SUPPLY_CATEGORIES: readonly SupplyCategory[] = [
  {
    id: "electrical-power",
    title: "Electrical & Power",
    description: "Power distribution, cabling, lighting and backup power materials for installation and maintenance.",
    items: [
      "Distribution boards and panel boards",
      "Circuit breakers (MCB, MCCB, ACB)",
      "Switchgear, control panels and changeover switches",
      "LV and MV power cables, control and communication cables",
      "Cable trays, trunking, conduits and accessories",
      "Indoor, outdoor, LED and street lighting",
      "Generators, ATS, batteries and solar components",
      "Earthing and lightning protection materials",
      "Transformers and substation materials",
    ],
    icon: Plug,
  },
  {
    id: "mechanical-industrial",
    title: "Mechanical & Industrial",
    description: "Mechanical equipment and spare parts for plant, workshop and building-services maintenance.",
    items: [
      "Pumps and motors",
      "Bearings and mechanical seals",
      "Gaskets, belts and hoses",
      "Fasteners",
      "Mechanical spare parts",
    ],
    icon: Cog,
  },
  {
    id: "pipes-valves-fittings",
    title: "Pipes, Valves & Fittings",
    description: "Piping materials for water, process, firefighting and building-services installations.",
    items: ["Pipes and fittings", "Flanges", "Valves", "Flexible connections", "Related accessories"],
    icon: Gauge,
  },
  {
    id: "hvac",
    title: "HVAC",
    description: "Equipment and components for air-conditioning, ventilation and refrigeration systems.",
    items: [
      "HVAC equipment",
      "VRF/VRV components",
      "AHU and FCU components",
      "Ducting and accessories",
      "Refrigeration and HVAC components",
    ],
    icon: Fan,
  },
  {
    id: "ict-telecom",
    title: "ICT & Telecom",
    description: "Network, fibre and communication equipment for telecom sites, offices and institutions.",
    items: [
      "Fibre optic cables and equipment",
      "Network equipment",
      "Racks, patch panels and cable management",
      "Structured cabling materials",
      "IP phones, PBX and VoIP equipment",
      "Communication and two-way radio equipment",
    ],
    icon: Network,
  },
  {
    id: "security-elv",
    title: "Security & ELV",
    description: "Electronic security equipment and accessories for installation projects.",
    items: [
      "CCTV cameras",
      "NVR/DVR recorders",
      "Access control and biometric devices",
      "Alarm systems",
      "Intercom systems",
      "Gate barriers and security accessories",
    ],
    icon: Cctv,
  },
  {
    id: "ppe-hse",
    title: "PPE & HSE Supplies",
    description: "Personal protective equipment and site safety supplies for workforce protection.",
    items: [
      "Safety helmets",
      "Safety boots",
      "Coveralls and high-visibility clothing",
      "Gloves and eye protection",
      "Fall protection",
      "Safety signage and first-aid supplies",
    ],
    icon: HardHat,
  },
  {
    id: "mining-workshop",
    title: "Mining & Workshop Consumables",
    description: "Workshop tools and consumables for maintenance teams supporting mining and industrial operations.",
    items: [
      "Welding electrodes and accessories",
      "Abrasives, cutting and grinding discs",
      "Hand tools",
      "Workshop consumables",
      "Industrial minerals, according to project and market requirements",
    ],
    icon: Pickaxe,
  },
  {
    id: "chemicals-water",
    title: "Chemicals & Water Treatment",
    description:
      "Water treatment and general maintenance chemicals, supplied only in line with applicable handling and regulatory requirements.",
    items: ["Water treatment chemicals and consumables", "General maintenance and cleaning chemicals"],
    icon: FlaskConical,
  },
  {
    id: "construction-site",
    title: "Construction & Site Materials",
    description: "Building and civil materials, hardware and site consumables for construction activities.",
    items: [
      "Sand, aggregates and gravel",
      "Reinforcement bars and steel",
      "Timber and marine boards",
      "Paints, gypsum boards and tiles",
      "Drainage materials",
      "Hardware and technical site consumables",
    ],
    icon: Construction,
  },
];
