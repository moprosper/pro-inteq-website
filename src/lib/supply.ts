import {
  Cctv,
  Cog,
  Construction,
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
  icon: LucideIcon;
}

// Descriptions are deliberately broad: they indicate the type of requirement
// PRO-INTEQ can source, not a fixed product catalogue.
export const SUPPLY_CATEGORIES: readonly SupplyCategory[] = [
  {
    id: "electrical-power",
    title: "Electrical & Power",
    description:
      "Cables, distribution boards, switchgear, protection devices, lighting, earthing materials and power equipment.",
    icon: Plug,
  },
  {
    id: "mechanical-industrial",
    title: "Mechanical & Industrial",
    description:
      "Pumps, motors, bearings, transmission components, fasteners and spare parts for plant and equipment.",
    icon: Cog,
  },
  {
    id: "pipes-valves-fittings",
    title: "Pipes, Valves & Fittings",
    description:
      "Pipes, valves, flanges, fittings and gauges for water, process and building services installations.",
    icon: Gauge,
  },
  {
    id: "mining-workshop",
    title: "Mining & Workshop Consumables",
    description:
      "Workshop tools, wear parts and consumables for maintenance teams supporting mining and industrial operations.",
    icon: Pickaxe,
  },
  {
    id: "chemicals-water",
    title: "Chemicals & Water Treatment",
    description:
      "Water treatment and general industrial chemicals, supplied in line with applicable handling and regulatory requirements.",
    icon: FlaskConical,
  },
  {
    id: "ppe-hse",
    title: "PPE & HSE Supplies",
    description:
      "Personal protective equipment, safety signage and site safety supplies for workforce protection.",
    icon: HardHat,
  },
  {
    id: "ict-telecom",
    title: "ICT & Telecom",
    description:
      "Network equipment, fibre optic and structured cabling materials, cabinets and accessories.",
    icon: Network,
  },
  {
    id: "security-elv",
    title: "Security & ELV",
    description:
      "CCTV, access control, alarm, intercom and barrier equipment with installation accessories.",
    icon: Cctv,
  },
  {
    id: "construction-site",
    title: "Construction & Site Materials",
    description:
      "Building and civil materials, site consumables and equipment to support construction activities.",
    icon: Construction,
  },
];
