import { SERVICES } from "@/lib/services";

/** Options for the "Service / Requirement" field on the quotation form. */
export const REQUIREMENT_OPTIONS: readonly string[] = [
  ...SERVICES.map((service) => service.title),
  "Supply & Procurement",
  "Other / not sure",
];
