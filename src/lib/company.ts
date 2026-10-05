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
  scope: readonly string[];
  location?: string;
  image?: { src: string; alt: string };
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

  // Official Mission and Vision statements. Left empty until the company's
  // approved wording is confirmed; pages show them only when set.
  vision: null as string | null,
  mission: null as string | null,

  leadership: [
    { name: "Eng. Moses Prosper Odindo", role: "Managing Director" },
  ] satisfies Leader[],

  contact: {
    email: "prointeq.engineering@gmail.com",
    phones: ["+255 719 303 529"],
    location: "Jamhuri / Morogoro Road,\nDar es Salaam, Tanzania",
    address: {
      street: "Jamhuri / Morogoro Road",
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

  hse: [
    {
      title: "Health & Safety",
      description:
        "Work is planned to protect our people, client staff and the public. Teams use appropriate personal protective equipment, follow site safety rules and stop work where conditions are unsafe.",
    },
    {
      title: "Quality Assurance",
      description:
        "Work is checked against drawings, specifications and manufacturer requirements, with issues recorded and corrected before handover.",
    },
    {
      title: "Compliance",
      description:
        "We work to the client's site requirements and the applicable Tanzanian regulations, standards and permits for each scope of work.",
    },
    {
      title: "Inspection & Testing",
      description:
        "Installed systems are inspected, tested and commissioned before handover, and results are shared with the client.",
    },
    {
      title: "Continuous Improvement",
      description:
        "Lessons from each project are reviewed to improve planning, safety practices and the quality of future work.",
    },
  ],

  // Confirmed project case studies only. The Projects page shows a neutral
  // notice while this list is empty.
  projects: [] as readonly Project[],
} as const;
