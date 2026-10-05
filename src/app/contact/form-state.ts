export type ContactField = "name" | "company" | "email" | "phone" | "requirement" | "location" | "message" | "attachment";

export interface ContactFormState {
  status: "idle" | "success" | "invalid" | "unavailable" | "error" | "rate-limited";
  errors?: Partial<Record<ContactField, string>>;
  values?: Partial<Record<Exclude<ContactField, "attachment">, string>>;
}

export const initialContactFormState: ContactFormState = { status: "idle" };

export const ATTACHMENT_MAX_BYTES = 5 * 1024 * 1024;
export const ATTACHMENT_EXTENSIONS = ["pdf", "doc", "docx", "xls", "xlsx", "jpg", "jpeg", "png"] as const;
