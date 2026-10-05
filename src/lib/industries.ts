import { Building2, Construction, Factory, Pickaxe, RadioTower, Zap, type LucideIcon } from "lucide-react";

export interface Industry {
  id: string;
  title: string;
  summary: string;
  engineering: string;
  technical: string;
  supply: string;
  icon: LucideIcon;
}

// Industries PRO-INTEQ serves or targets. These describe the environments we
// support — not facilities the company owns or operates.
export const INDUSTRIES: readonly Industry[] = [
  {
    id: "mining",
    title: "Mining & Minerals",
    summary:
      "Supporting mining and mineral-sector projects through engineering, technical services and industrial supply.",
    engineering: "Mechanical, electrical and civil works for processing plant, workshops and site infrastructure.",
    technical: "Equipment installation, maintenance support and troubleshooting for operational teams.",
    supply: "Workshop consumables, PPE, mechanical spares, electrical materials and site supplies.",
    icon: Pickaxe,
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Industrial",
    summary: "Engineering and maintenance support that keeps production facilities running safely and efficiently.",
    engineering: "Plant installations, piping, industrial electrical works and HVAC systems.",
    technical: "Preventive and corrective maintenance for mechanical, electrical and HVAC equipment.",
    supply: "Mechanical and electrical spares, pipes, valves, fittings and plant consumables.",
    icon: Factory,
  },
  {
    id: "energy",
    title: "Energy & Utilities",
    summary: "Electrical and mechanical works for power distribution, backup power and utility infrastructure.",
    engineering: "Electrical distribution, earthing, lightning protection and LV/MV works where applicable.",
    technical: "Testing, commissioning and maintenance of electrical and mechanical systems.",
    supply: "Cables, switchgear, protection devices, power equipment and water treatment supplies.",
    icon: Zap,
  },
  {
    id: "telecommunications",
    title: "Telecommunications",
    summary: "Fibre, network and site infrastructure works for operators and enterprise networks.",
    engineering: "Fibre optic routes, structured cabling, telecom site civil and electrical works.",
    technical: "Fibre testing, network installation and ongoing technical support.",
    supply: "Fibre and cabling materials, network equipment, cabinets and accessories.",
    icon: RadioTower,
  },
  {
    id: "infrastructure",
    title: "Infrastructure & Construction",
    summary: "Engineering services and building systems for contractors and infrastructure developers.",
    engineering: "Civil works, duct routes, building services, electrical and mechanical installations.",
    technical: "Site supervision, inspection, testing and commissioning.",
    supply: "Construction and site materials, electrical and plumbing materials, PPE.",
    icon: Construction,
  },
  {
    id: "commercial",
    title: "Commercial & Institutional",
    summary: "Building services, security and ICT systems for offices, hotels, institutions and public buildings.",
    engineering: "HVAC, electrical, ELV and security systems for occupied buildings.",
    technical: "Planned maintenance and responsive support for building systems.",
    supply: "HVAC, electrical, ICT and security equipment and spares.",
    icon: Building2,
  },
];
