import { PROJECT_TYPE_IMAGES as P, type SiteImageAsset } from "@/lib/assets";

export interface ProjectType {
  title: string;
  /** Matches a service id on /services. */
  serviceId: string;
  description: string;
  images: readonly SiteImageAsset[];
}

// Types of project PRO-INTEQ delivers, drawn from the company profile's service
// areas. Photographs here are licensed illustrations, not records of specific
// PRO-INTEQ projects — no clients, locations or dates are implied.
export const PROJECT_TYPES: readonly ProjectType[] = [
  {
    title: "HVAC Installation & Technical Services",
    serviceId: "hvac",
    description:
      "Chillers, VRF/VRV systems, ventilation and ductwork — installation, testing, commissioning and maintenance for commercial and industrial buildings.",
    images: [P.chillerPlant, P.insulatedDuctwork, P.airCooledChiller, P.ductInstallation],
  },
  {
    title: "Pump & Mechanical Installation",
    serviceId: "mechanical",
    description:
      "Installation, alignment, commissioning and maintenance of pumps, valves, pipework and mechanical equipment, including fabrication and preventive maintenance.",
    images: [P.pumps],
  },
  {
    title: "Power Generation & Backup Systems",
    serviceId: "electrical",
    description:
      "Generator installation, commissioning and maintenance, with switchgear, cabling and changeover systems for reliable standby power.",
    images: [P.generatorRoom, P.standbyGenerator],
  },
  {
    title: "Telecommunications Infrastructure",
    serviceId: "telecom-ict",
    description:
      "Tower erection and telecom site works, antenna and microwave installations, and integrated site maintenance for operators and tower companies.",
    images: [P.telecomTowerDishes, P.telecomTower, P.telecomTowerSky, P.telecomTowerTall],
  },
  {
    title: "Civil Works & Construction",
    serviceId: "civil",
    description:
      "Earthworks, site preparation, foundations, civil works and building construction, delivered with supervised teams and safe working practices.",
    images: [P.excavatorEarthworks, P.civilSiteWorks],
  },
];
