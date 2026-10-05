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

// Service scope follows the "Our Service Areas" section of the company profile.
export const SERVICES: readonly Service[] = [
  {
    id: "mechanical",
    title: "Mechanical Engineering",
    summary:
      "Installation, fabrication and maintenance of mechanical systems, lifts, pumps and plant for industrial, commercial and institutional facilities.",
    items: [
      "Mechanical and equipment installation",
      "Pumps, valves and piping systems",
      "Plumbing for water, gas, fuel and process fluids",
      "Firefighting systems (sprinklers, hydrants, pumps)",
      "Elevator, escalator and travelator installation",
      "Boiler, steam and compressed air systems",
      "Industrial fabrication and welding",
      "Machinery installation and alignment",
      "Maintenance and retrofitting of mechanical equipment",
      "PLC automation of mechanical systems",
    ],
    icon: Cog,
    image: IMAGES.mechanical,
  },
  {
    id: "electrical",
    title: "Electrical Engineering",
    summary:
      "Electrical installation, power distribution, backup power and industrial electrical works, from low-voltage installations to high-voltage power systems.",
    items: [
      "Electrical installations and building fit-outs",
      "Distribution board design and installation",
      "Power transformers and substation works (33 kV–220 kV)",
      "Power transmission and distribution",
      "Generator installation, commissioning and maintenance",
      "Solar power and energy storage systems",
      "Industrial electrical works, PLC and automation",
      "Motor and AC alternator rewinding",
      "Emergency lighting and fire alarm systems",
      "Earthing and lightning protection",
      "Electrical inspection, testing and safety compliance",
    ],
    icon: Zap,
    image: IMAGES.electrical,
  },
  {
    id: "hvac",
    title: "HVAC & Building Services",
    summary:
      "Design, installation, repair and maintenance of heating, ventilation and air-conditioning systems for residential, commercial and industrial facilities.",
    items: [
      "Chillers",
      "VRF/VRV systems",
      "Air handling units (AHU)",
      "Fan coil units (FCU)",
      "Ventilation and ductwork",
      "Air conditioning and air curtains",
      "HVAC controls and system integration",
      "HVAC electrical installations",
      "Preventive maintenance and troubleshooting",
      "Testing and commissioning",
    ],
    icon: Fan,
    image: IMAGES.hvac,
  },
  {
    id: "telecom-ict",
    title: "Telecommunications & ICT",
    summary:
      "Telecom site, fibre optic, structured cabling and network infrastructure for operators, enterprises, institutions and government facilities.",
    items: [
      "BTS installation and commissioning",
      "Antenna, feeder, RF and microwave installations",
      "RF sweep testing and site acceptance testing",
      "Telecom integrated site maintenance",
      "Fibre route survey, design and Bill of Materials",
      "Right-of-way and permit coordination",
      "Fibre trenching, duct installation and cable laying",
      "Fibre splicing, ODF termination and testing",
      "Structured cabling, LAN/WAN and wireless networks",
      "IP and hybrid PABX systems",
      "Firewall and network security",
      "Two-way radio communication systems",
    ],
    icon: RadioTower,
    image: IMAGES.telecom,
  },
  {
    id: "civil",
    title: "Civil Construction & Infrastructure",
    summary:
      "Civil works, tower erection and building construction for infrastructure, telecom, industrial and commercial projects.",
    items: [
      "Civil works and site preparation",
      "Tower erection and telecom site civil works",
      "Roads, bridges, pipelines and drainage",
      "Building construction from foundation to finishing",
      "Refurbishment, renovation and remodelling",
      "Concrete works, trenches and duct routes",
      "Industrial and power station civil structures",
      "Engineering estimation and cost analysis",
      "Skilled and unskilled manpower supply",
    ],
    icon: Building2,
    image: IMAGES.civil,
  },
  {
    id: "security-elv",
    title: "Security & ELV Systems",
    summary:
      "Electronic security and extra-low-voltage systems designed, supplied, installed and maintained to protect people, assets and facilities.",
    items: [
      "CCTV surveillance systems",
      "Access control (cards, PIN, biometric)",
      "Intruder and panic alarm systems",
      "Intercom systems",
      "Gate barrier systems",
      "Time and attendance systems",
      "Anti-theft (EAS) systems for retail",
      "Security system integration",
    ],
    icon: ShieldCheck,
    image: IMAGES.securityElv,
  },
  {
    id: "consultancy",
    title: "Project Management & Consultancy",
    summary:
      "Engineering design, feasibility studies, project management and supervision that help clients plan and deliver projects with confidence.",
    items: [
      "Electrical and power systems design",
      "Structural and electrical design coordination",
      "Design of electrical, HVAC and plumbing systems",
      "Feasibility studies and life-cycle cost analysis",
      "Project scheduling, planning and cost forecasting",
      "Project supervision and site inspection",
      "Generator systems consultancy",
      "BOQ and specification support",
    ],
    icon: ClipboardList,
    image: IMAGES.siteSupervision,
  },
  {
    id: "maintenance",
    title: "Maintenance & Technical Support",
    summary:
      "Preventive and corrective maintenance that keeps electrical, mechanical, HVAC and telecom systems running reliably.",
    items: [
      "Preventive and corrective maintenance",
      "Electrical substation maintenance",
      "Generator maintenance",
      "HVAC maintenance",
      "Lift and escalator inspections and repairs",
      "Telecom site maintenance and hybrid power",
      "Troubleshooting and technical support",
      "After-sales support",
    ],
    icon: Wrench,
    image: IMAGES.maintenance,
  },
];
