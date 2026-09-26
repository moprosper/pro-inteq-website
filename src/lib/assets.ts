export const LOGO = {
  src: "/brand/pro-inteq-logo.png",
  width: 1200,
  height: 532,
} as const;

export interface SiteImageAsset {
  src: string;
  alt: string;
}

/**
 * Photography used across the site. These are illustrative images of the
 * engineering disciplines PRO-INTEQ works in, not records of PRO-INTEQ
 * projects, so alt text describes what is shown rather than claiming a project.
 */
export const IMAGES = {
  siteEngineers: {
    src: "/images/engineering-consultancy.jpg",
    alt: "Engineers in hard hats and high-visibility vests inspecting a large construction site",
  },
  industrialHall: {
    src: "/images/industrial-engineering.jpg",
    alt: "Interior of a large industrial hall with a steel roof structure",
  },
  powerTransformers: {
    src: "/images/mechanical-engineering.jpg",
    alt: "Power transformers installed at an electrical substation",
  },
  distributionBox: {
    src: "/images/electrical-substation.jpg",
    alt: "Wall-mounted electrical distribution enclosure with switchgear",
  },
  circuitBreaker: {
    src: "/images/electrical-panel.jpg",
    alt: "Moulded-case circuit breaker installed in an electrical panel",
  },
  patchPanel: {
    src: "/images/fiber-optic-server.jpg",
    alt: "Network patch panel with colour-coded cables",
  },
  fiberSplicing: {
    src: "/images/fiber-optic-installation.jpg",
    alt: "Technician using a fusion splicer to join fiber optic cables",
  },
  highRiseConstruction: {
    src: "/images/civil-construction.jpg",
    alt: "High-rise building under construction with a tower crane",
  },
  towerCrane: {
    src: "/images/general-supply.jpg",
    alt: "Tower crane beside a multi-storey building under construction",
  },
  industrialPlant: {
    src: "/images/hvac-mechanical.jpg",
    alt: "Industrial plant with process piping, valves and mechanical equipment",
  },
  siteSafety: {
    src: "/images/hse-safety.jpg",
    alt: "Site workers wearing hard hats and high-visibility safety vests",
  },
  solarFarm: {
    src: "/images/power-infrastructure.jpg",
    alt: "Ground-mounted solar panel array",
  },
  equipmentEnclosures: {
    src: "/images/telecommunication-tower.jpg",
    alt: "Wall-mounted electrical and communications equipment enclosures",
  },
} satisfies Record<string, SiteImageAsset>;

/** Image for each service group, keyed by `serviceGroups[].id`. */
export const SERVICE_IMAGES: Record<string, SiteImageAsset> = {
  consultancy: IMAGES.siteEngineers,
  electrical: IMAGES.powerTransformers,
  "electrical-supply": IMAGES.circuitBreaker,
  telecom: IMAGES.patchPanel,
  fiber: IMAGES.fiberSplicing,
  civil: IMAGES.highRiseConstruction,
  mechanical: IMAGES.industrialPlant,
  "general-supply": IMAGES.towerCrane,
};

/** Image for each industry, keyed by `industries[].name`. */
export const INDUSTRY_IMAGES: Record<string, SiteImageAsset> = {
  Telecommunications: IMAGES.patchPanel,
  Construction: IMAGES.highRiseConstruction,
  "Government Institutions": IMAGES.siteEngineers,
  "Industrial Facilities": IMAGES.industrialPlant,
  "Commercial Facilities": IMAGES.circuitBreaker,
  "Private Organizations": IMAGES.industrialHall,
  "Infrastructure Projects": IMAGES.towerCrane,
  "Energy & Electrical Infrastructure": IMAGES.powerTransformers,
};
