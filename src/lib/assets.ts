export const LOGO = {
  src: "/brand/pro-inteq-logo.png",
  width: 1200,
  height: 532,
} as const;

/**
 * The official company profile, served from public/documents/. Every
 * "Download Company Profile" button uses it; set to null to fall back to an
 * email request instead.
 */
export const COMPANY_PROFILE_PDF: { href: string; filename: string; sizeLabel: string } | null = {
  href: "/documents/pro-inteq-company-profile.pdf",
  filename: "PRO-INTEQ-Company-Profile.pdf",
  sizeLabel: "PDF, 18 pages, 1.6 MB",
};

export interface SiteImageAsset {
  src: string;
  alt: string;
  /** True only for photographs taken by PRO-INTEQ of its own team or work. */
  companyPhoto?: boolean;
  /** Licence/source for third-party photographs (not displayed). */
  source?: string;
}

const LICENSED = "Licensed by PRO-INTEQ";

// Alt text describes what each photograph shows. Only images marked
// companyPhoto are presented as PRO-INTEQ work; the rest are illustrative.
export const IMAGES = {
  heroPlant: {
    src: "/images/hero/chiller-plant.jpg",
    alt: "Rows of air-cooled chillers and insulated chilled-water pipework at a large plant area",
  },
  teamOnSite: {
    src: "/images/about/pro-inteq-team-on-site.jpg",
    alt: "PRO-INTEQ technician in a branded safety vest reviewing results on a laptop with two other people on site",
    companyPhoto: true,
  },
  teamCabling: {
    src: "/images/projects/structured-cabling-team.jpg",
    alt: "PRO-INTEQ technicians in high-visibility vests installing data cabling in a building corridor",
    companyPhoto: true,
  },
  cabinetTesting: {
    src: "/images/projects/network-cabinet-testing.jpg",
    alt: "PRO-INTEQ technicians working at a network cabinet while results are checked on a laptop",
    companyPhoto: true,
  },
  siteSupervision: {
    src: "/images/projects/site-supervision.jpg",
    alt: "PRO-INTEQ supervisors in branded vests overseeing ceiling installation works on site",
    companyPhoto: true,
  },
  cableInstallation: {
    src: "/images/projects/cable-installation.jpg",
    alt: "Bundled, labelled data cables being routed to a network cabinet during installation",
    companyPhoto: true,
  },
  cablingCoordination: {
    src: "/images/projects/cabling-site-coordination.jpg",
    alt: "PRO-INTEQ technician in a branded high-visibility vest coordinating with a colleague beside data cabling on site",
    companyPhoto: true,
  },
  hsePpe: {
    src: "/images/hse/ppe-hard-hat-gloves.jpg",
    alt: "Yellow safety hard hat and protective work gloves on a construction site",
    source: "Pexels License — https://www.pexels.com/photo/8488037/",
  },
  networkCabinet: {
    src: "/images/services/network-cabinet.jpg",
    alt: "Network cabinet installed by PRO-INTEQ, with rack-mounted switches, cable managers and dressed patch cords",
    companyPhoto: true,
  },
  securityElv: {
    src: "/images/services/security-elv.jpg",
    alt: "Network cabinet installed by PRO-INTEQ, with floor-labelled switches including one serving CCTV",
    companyPhoto: true,
  },
  mechanical: {
    src: "/images/services/pumps.jpg",
    alt: "Two motor-driven centrifugal pumps with valves and pipework on steel bases",
    source: LICENSED,
  },
  electrical: {
    src: "/images/services/generator-room.jpg",
    alt: "Standby diesel generator set with switchgear panels and overhead cable trays in a plant room",
    source: LICENSED,
  },
  hvac: {
    src: "/images/services/hvac.jpg",
    alt: "Rooftop VRF air-conditioning outdoor units with cable trays",
  },
  telecom: {
    src: "/images/services/telecom-tower.jpg",
    alt: "Red and white lattice telecommunication tower with mounted antennas",
    source: LICENSED,
  },
  civil: {
    src: "/images/services/civil-site-works.jpg",
    alt: "Construction site with a soil compactor, tower crane and reinforcement steel for concrete walls",
    source: LICENSED,
  },
  maintenance: {
    src: "/images/services/maintenance.jpg",
    alt: "Ceiling cassette air-conditioning unit with its cover panel removed",
  },
  industrialFacility: {
    src: "/images/industries/industrial-facility.jpg",
    alt: "Interior of a large industrial hall with a steel roof structure",
  },
  powerTransformers: {
    src: "/images/industries/power-transformers.jpg",
    alt: "Power transformers installed at an electrical substation",
  },
  supplyComponents: {
    src: "/images/supply/electrical-components.jpg",
    alt: "Moulded-case circuit breaker installed in an electrical panel",
  },
} satisfies Record<string, SiteImageAsset>;

/** Licensed illustrative photographs for the "Project types" section. */
export const PROJECT_TYPE_IMAGES = {
  chillerPlant: {
    src: "/images/project-types/chiller-plant-rooftop.jpg",
    alt: "Rooftop air-cooled chiller plant with insulated chilled-water pipework",
    source: LICENSED,
  },
  airCooledChiller: {
    src: "/images/project-types/air-cooled-chiller.jpg",
    alt: "Air-cooled chiller unit connected to insulated ducting on a rooftop",
    source: LICENSED,
  },
  insulatedDuctwork: {
    src: "/images/project-types/insulated-ductwork.jpg",
    alt: "Insulated HVAC ductwork and refrigerant piping installed above a ceiling",
    source: LICENSED,
  },
  ductInstallation: {
    src: "/images/project-types/duct-installation.jpg",
    alt: "Galvanised ventilation ducts and sprinkler pipes suspended from a concrete soffit",
    source: LICENSED,
  },
  pumps: IMAGES.mechanical,
  generatorRoom: IMAGES.electrical,
  standbyGenerator: {
    src: "/images/project-types/standby-generator.jpg",
    alt: "Diesel standby generator with control panel, batteries and exhaust ducting",
    source: LICENSED,
  },
  telecomTower: IMAGES.telecom,
  telecomTowerTall: {
    src: "/images/project-types/telecom-tower-tall.jpg",
    alt: "Tall red and white telecommunication tower beside an equipment compound",
    source: LICENSED,
  },
  telecomTowerDishes: {
    src: "/images/project-types/telecom-tower-dishes.jpg",
    alt: "Lattice telecommunication tower with microwave dishes and panel antennas against a cloudy sky",
    source: LICENSED,
  },
  telecomTowerSky: {
    src: "/images/project-types/telecom-tower-sky.jpg",
    alt: "Red and white telecom tower top with antennas and microwave dishes",
    source: LICENSED,
  },
  civilSiteWorks: IMAGES.civil,
  excavatorEarthworks: {
    src: "/images/project-types/excavator-earthworks.jpg",
    alt: "Tracked excavator on a cleared site during earthworks and foundation preparation",
    source: LICENSED,
  },
} satisfies Record<string, SiteImageAsset>;
