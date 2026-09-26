export type ContactField = "name" | "email" | "phone" | "subject" | "message";

export interface ContactFormState {
  status: "idle" | "success" | "invalid" | "unavailable" | "error";
  errors?: Partial<Record<ContactField, string>>;
  values?: Partial<Record<ContactField, string>>;
}

export const initialContactFormState: ContactFormState = { status: "idle" };
