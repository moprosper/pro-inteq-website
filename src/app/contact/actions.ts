"use server";

import type { ContactField, ContactFormState } from "./form-state";

const LIMITS: Record<ContactField, { min: number; max: number }> = {
  name: { min: 2, max: 100 },
  email: { min: 5, max: 254 },
  phone: { min: 0, max: 40 },
  subject: { min: 3, max: 150 },
  message: { min: 10, max: 5000 },
};

const LABELS: Record<ContactField, string> = {
  name: "Full name",
  email: "Email address",
  phone: "Phone number",
  subject: "Subject",
  message: "Message",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+\d\s().-]*$/;

function readField(formData: FormData, field: string): string {
  const value = formData.get(field);
  return typeof value === "string" ? value.trim() : "";
}

/**
 * Handles the website contact form.
 *
 * Messages are delivered through the Resend email API when RESEND_API_KEY,
 * CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL are configured. Without them the
 * action reports "unavailable" so the page never claims a message was sent.
 */
export async function submitContactForm(
  _previous: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Honeypot: real visitors never see or fill this field.
  if (readField(formData, "website")) {
    return { status: "success" };
  }

  const values = {
    name: readField(formData, "name"),
    email: readField(formData, "email"),
    phone: readField(formData, "phone"),
    subject: readField(formData, "subject").replace(/[\r\n]+/g, " "),
    message: readField(formData, "message"),
  } satisfies Record<ContactField, string>;

  const errors: Partial<Record<ContactField, string>> = {};
  for (const field of Object.keys(LIMITS) as ContactField[]) {
    const { min, max } = LIMITS[field];
    const length = values[field].length;
    if (field !== "phone" && length === 0) errors[field] = `${LABELS[field]} is required.`;
    else if (length > 0 && length < min) errors[field] = `${LABELS[field]} must be at least ${min} characters.`;
    else if (length > max) errors[field] = `${LABELS[field]} must be ${max} characters or fewer.`;
  }
  if (!errors.email && !EMAIL_PATTERN.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!errors.phone && !PHONE_PATTERN.test(values.phone)) {
    errors.phone = "Phone number can contain digits, spaces and + ( ) - only.";
  }

  if (Object.keys(errors).length > 0) {
    return { status: "invalid", errors, values };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    return { status: "unavailable", values };
  }

  const text = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone || "Not provided"}`,
    `Subject: ${values.subject}`,
    "",
    values.message,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: values.email,
        subject: `Website enquiry: ${values.subject}`,
        text,
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      console.error(`Contact form delivery failed with HTTP ${response.status}`);
      return { status: "error", values };
    }
  } catch (error) {
    console.error("Contact form delivery failed:", error instanceof Error ? error.name : "unknown error");
    return { status: "error", values };
  }

  return { status: "success" };
}
