export const LOGO = {
  src: "/brand/pro-inteq-logo.png",
  width: 1200,
  height: 532,
} as const;

/**
 * Company profile document. Set `href` to the file's public path (for example
 * "/documents/pro-inteq-company-profile.pdf" after adding it under public/)
 * and every "Download Company Profile" button switches to a direct download.
 * While it is null, those buttons offer to request the profile by email.
 */
export const COMPANY_PROFILE_PDF: { href: string; sizeLabel: string } | null = null;

export interface SiteImageAsset {
  src: string;
  alt: string;
  /** True only for photographs supplied by PRO-INTEQ of its own team or work. */
  companyPhoto?: boolean;
}

// Alt text describes what each photograph shows. Illustrative images are not
// presented as PRO-INTEQ projects anywhere on the site.
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
  networkCabinet: {
    src: "/images/services/network-cabinet.jpg",
    alt: "Network cabinet with rack-mounted switches, cable managers and dressed patch cords",
  },
  mechanical: {
    src: "/images/services/mechanical.jpg",
    alt: "Industrial plant with process piping, valves and mechanical equipment",
  },
  electrical: {
    src: "/images/services/electrical.jpg",
    alt: "Open electrical distribution board with circuit breakers and an energy meter",
  },
  hvac: {
    src: "/images/services/hvac.jpg",
    alt: "Rooftop VRF air-conditioning outdoor units with cable trays",
  },
  telecom: {
    src: "/images/services/telecom-ict.jpg",
    alt: "Telecommunication tower with microwave dish antennas",
  },
  civil: {
    src: "/images/services/civil.jpg",
    alt: "High-rise building under construction with a tower crane",
  },
  securityElv: {
    src: "/images/services/security-elv.jpg",
    alt: "Network cabinet with floor-labelled switches, including a switch serving CCTV",
  },
  projectManagement: {
    src: "/images/services/project-management.jpg",
    alt: "Engineers in hard hats and high-visibility vests inspecting a construction site",
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
  siteSafety: {
    src: "/images/hse/site-safety.jpg",
    alt: "Site workers wearing hard hats and high-visibility safety vests",
  },
} satisfies Record<string, SiteImageAsset>;
