import { IMAGES } from "@/lib/assets";

/**
 * Single source of truth for PRO-INTEQ website content.
 *
 * Only verified company information belongs here. Leave a list empty rather
 * than adding placeholder clients, projects, certifications or statistics —
 * the pages are written to handle empty lists honestly.
 */

export interface Leader {
  name: string;
  role: string;
}

export interface Project {
  title: string;
  sector: string;
  description: string;
  /** Work visible in the project photographs; no unverified scope claims. */
  scope: readonly string[];
  /** Only add once the client has approved publication. */
  location?: string;
  images: readonly { src: string; alt: string }[];
}

export const COMPANY = {
  name: "PRO-INTEQ Engineering and Consulting Company Limited",
  shortName: "PRO-INTEQ",
  tagline: "Precision in every project.",
  principle: "Engineering with honesty, ensuring reliability.",
  positioning: "Engineering | Technical Services | Industrial Supply",
  positioningStatement: "Engineering and industrial solutions for demanding projects across Tanzania.",

  description:
    "PRO-INTEQ Engineering and Consulting Company Limited is a Tanzanian multidisciplinary engineering, technical services and industrial supply company based in Dar es Salaam.",

  coverage: "Tanzania, including Zanzibar, and projects where the company is engaged elsewhere.",

  // Official statements, quoted from the company profile (public/documents).
  vision: "To be a benchmark engineering firm in Africa, recognized for delivering sustainable, innovative and high-impact infrastructure solutions that shape the future of industries and communities." as string | null,
  mission: "To deliver integrated engineering and consulting services with excellence, safety, integrity, and technical precision while creating long-term value for clients, partners, and society." as string | null,

  // Registration details as stated in the company profile. The TIN is kept in
  // the PDF only, by company request.
  registration: {
    legalForm: "Private limited company, limited by shares, registered under the Companies Act (Cap 212)",
    incorporationNumber: "188222757",
  },

  leadership: [
    { name: "Eng. Moses Prosper Odindo", role: "Managing Director" },
  ] satisfies Leader[],

  // Excerpt from the Managing Director's message in the company profile.
  managingDirectorMessage: [
    "At PRO-INTEQ, we are dedicated to providing engineering solutions that are durable, secure, and reliable for our customers. We recognize that in today's environment, systems must operate accurately and consistently. Electricity must stay available, networks must remain linked, and structures must remain stable.",
    "We are committed to the delivery of the highest standard of professional service within Tanzania, together with the development of business partnerships which are built on trust, quality, and mutual benefit.",
    "We are customer-focused, customer-driven, and committed to providing a professional level of personalized engineering service to every client.",
  ],

  contact: {
    email: "prointeq.engineering@gmail.com",
    phones: ["+255 719 303 529"],
    location: "Jamhuri / Morogoro Road,\nDar es Salaam, Tanzania",
    postal: "P.O. Box 10839, Dar es Salaam",
    address: {
      street: "Jamhuri / Morogoro Road",
      postOfficeBox: "10839",
      city: "Dar es Salaam",
      country: "Tanzania",
      countryCode: "TZ",
    },
  },

  values: [
    {
      title: "Quality workmanship",
      description: "Engineering work delivered to specification and to a standard we are prepared to stand behind.",
    },
    {
      title: "Integrity and accountability",
      description: "Honest technical advice, transparent communication and ownership of our commitments.",
    },
    {
      title: "Professionalism",
      description: "Disciplined, competent and ethical conduct on every site and in every engagement.",
    },
    {
      title: "Safety and environmental care",
      description: "Protecting people, property and the environment through safe working practices.",
    },
    {
      title: "Customer satisfaction",
      description: "Responsive service and reliable delivery that build long-term working relationships.",
    },
    {
      title: "Cost efficiency through proper planning",
      description: "Careful planning that controls cost without compromising quality or safety.",
    },
  ],

  lifecycle: [
    { title: "Design", description: "Engineering design, specifications and technical planning." },
    { title: "Supply", description: "Sourcing of equipment, materials and consumables to specification." },
    { title: "Installation", description: "Installation and construction by supervised technical teams." },
    { title: "Testing & Commissioning", description: "Testing, commissioning and handover of installed systems." },
    { title: "Maintenance", description: "Preventive and corrective maintenance and technical support." },
  ],

  procurementProcess: [
    { title: "Requirement", description: "We receive your requirement, drawings or material list." },
    { title: "Specification", description: "Technical review to confirm specifications and compatibility." },
    { title: "Sourcing", description: "Products sourced from suitable manufacturers and suppliers." },
    { title: "Quotation", description: "A clear quotation for review and approval." },
    { title: "Supply", description: "Order placement and coordination of the supply." },
    { title: "Delivery", description: "Delivery to site or store as agreed with the client." },
  ],

  whyChoose: [
    {
      title: "Multidisciplinary engineering",
      description: "Mechanical, electrical, HVAC, ICT, civil and security disciplines under one company.",
    },
    {
      title: "Integrated project support",
      description: "One partner from design and supply through installation, commissioning and maintenance.",
    },
    {
      title: "Technical supply capability",
      description: "Sourcing of equipment and materials reviewed against engineering requirements.",
    },
    {
      title: "Project-focused execution",
      description: "Work planned around your programme, site conditions and specifications.",
    },
    {
      title: "Safety & quality",
      description: "Safe working practices, inspection and testing built into how we deliver.",
    },
    {
      title: "Responsive technical support",
      description: "Clear communication and practical support during and after the project.",
    },
  ],

  // Aligned with the HSE policy and quality approach in the company profile.
  hse: [
    {
      title: "Health & Safety",
      description:
        "Safe working conditions during installation, construction and engineering activities, with proper tools, equipment and personal protective equipment for every team.",
    },
    {
      title: "Quality Assurance",
      description:
        "High-quality materials, clean and organised work sites, and construction in accordance with approved drawings and contract specifications.",
    },
    {
      title: "Compliance",
      description:
        "Compliance with building regulations, statutory requirements and planning conditions, and adherence to industry best practice.",
    },
    {
      title: "Inspection & Testing",
      description:
        "Regular testing of safety systems, tools and procedures, and testing and commissioning of installed systems before handover.",
    },
    {
      title: "Continuous Improvement",
      description:
        "Measurable HSE performance indicators monitored through internal audits, periodic reviews and third-party audits to identify areas for improvement.",
    },
  ],

  hseCommitments: [
    "Monitoring the health and wellbeing of employees so they are not adversely affected by their work environment",
    "Effective emergency response procedures and resources to minimise the impact of accidents at work sites",
    "Telecommunications engineering kits, installation tools and work procedures that meet engineering safety standards",
    "A culture where safety, environmental responsibility and respect for human life are part of every project",
  ],

  // Projects documented with PRO-INTEQ's own site photographs. Client names,
  // locations and dates are added only once approved for publication.
  projects: [
    {
      title: "Structured Cabling & Network Infrastructure",
      sector: "Telecommunications & ICT",
      description:
        "Data cabling and network infrastructure installation in a multi-floor building, carried out and supervised by PRO-INTEQ technicians.",
      scope: [
        "Routing of bundled, labelled data cabling",
        "Network cabinet installation and cable management",
        "Rack-mounted switches labelled by floor, Wi-Fi and CCTV",
        "On-site testing and verification",
        "Supervision of installation works on site",
      ],
      images: [
        IMAGES.teamCabling,
        IMAGES.cabinetTesting,
        IMAGES.siteSupervision,
        IMAGES.cableInstallation,
        IMAGES.networkCabinet,
        IMAGES.securityElv,
        IMAGES.cablingCoordination,
      ],
    },
  ] as readonly Project[],
} as const;
