"use server";

import { headers } from "next/headers";
import { isRateLimited } from "@/lib/rate-limit";
import { REQUIREMENT_OPTIONS } from "@/lib/requirements";
import {
  ATTACHMENT_EXTENSIONS,
  ATTACHMENT_MAX_BYTES,
  type ContactField,
  type ContactFormState,
} from "./form-state";

type TextField = Exclude<ContactField, "attachment">;

const LIMITS: Record<TextField, { required: boolean; min: number; max: number }> = {
  name: { required: true, min: 2, max: 100 },
  company: { required: false, min: 0, max: 150 },
  email: { required: true, min: 5, max: 254 },
  phone: { required: false, min: 0, max: 40 },
  requirement: { required: true, min: 1, max: 100 },
  location: { required: false, min: 0, max: 150 },
  message: { required: true, min: 10, max: 5000 },
};

const LABELS: Record<TextField, string> = {
  name: "Name",
  company: "Company",
  email: "Email address",
  phone: "Phone number",
  requirement: "Service / requirement",
  location: "Project location",
  message: "Message",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+\d\s().-]*$/;

// Leading bytes of each allowed file type, checked so a renamed executable or
// script is rejected even if its extension looks harmless.
const SIGNATURES: Record<string, number[][]> = {
  pdf: [[0x25, 0x50, 0x44, 0x46]],
  png: [[0x89, 0x50, 0x4e, 0x47]],
  jpg: [[0xff, 0xd8, 0xff]],
  jpeg: [[0xff, 0xd8, 0xff]],
  docx: [[0x50, 0x4b, 0x03, 0x04]],
  xlsx: [[0x50, 0x4b, 0x03, 0x04]],
  doc: [[0xd0, 0xcf, 0x11, 0xe0]],
  xls: [[0xd0, 0xcf, 0x11, 0xe0]],
};

function readField(formData: FormData, field: string): string {
  const value = formData.get(field);
  return typeof value === "string" ? value.trim() : "";
}

function safeFilename(name: string): string {
  const cleaned = name.replace(/[^\w.\- ]+/g, "_").replace(/\s+/g, " ").trim();
  return cleaned.slice(-120) || "attachment";
}

async function readAttachment(
  formData: FormData,
): Promise<{ error?: string; file?: { filename: string; content: string } }> {
  const file = formData.get("attachment");
  if (!(file instanceof File) || file.size === 0) return {};

  const extension = file.name.split(".").pop()?.toLowerCase() ?? "";
  if (!(ATTACHMENT_EXTENSIONS as readonly string[]).includes(extension)) {
    return { error: `Attachment must be one of: ${ATTACHMENT_EXTENSIONS.join(", ").toUpperCase()}.` };
  }
  if (file.size > ATTACHMENT_MAX_BYTES) {
    return { error: "Attachment must be 5 MB or smaller." };
  }

  const bytes = new Uint8Array(await file.arrayBuffer());
  const matches = SIGNATURES[extension].some((signature) => signature.every((byte, i) => bytes[i] === byte));
  if (!matches) {
    return { error: "The attachment does not appear to be a valid file of that type." };
  }

  return { file: { filename: safeFilename(file.name), content: Buffer.from(bytes).toString("base64") } };
}

/**
 * Handles the quotation / contact form.
 *
 * Messages are delivered through the Resend email API when RESEND_API_KEY,
 * CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL are configured. Without them the
 * action reports "unavailable" so the page never claims a message was sent.
 * Delivery is isolated here so it can later be swapped for a CRM or API call.
 */
export async function submitContactForm(
  _previous: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Honeypot: real visitors never see or fill this field.
  if (readField(formData, "website")) {
    return { status: "success" };
  }

  const requestHeaders = await headers();
  const clientIp =
    requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() || requestHeaders.get("x-real-ip") || "unknown";
  if (isRateLimited(clientIp)) {
    return { status: "rate-limited" };
  }

  const values = Object.fromEntries(
    (Object.keys(LIMITS) as TextField[]).map((field) => [
      field,
      // Collapse line breaks in single-line fields; they end up in email headers and subjects.
      field === "message" ? readField(formData, field) : readField(formData, field).replace(/[\r\n]+/g, " "),
    ]),
  ) as Record<TextField, string>;

  const errors: Partial<Record<ContactField, string>> = {};
  for (const field of Object.keys(LIMITS) as TextField[]) {
    const { required, min, max } = LIMITS[field];
    const length = values[field].length;
    if (required && length === 0) errors[field] = `${LABELS[field]} is required.`;
    else if (length > 0 && length < min) errors[field] = `${LABELS[field]} must be at least ${min} characters.`;
    else if (length > max) errors[field] = `${LABELS[field]} must be ${max} characters or fewer.`;
  }
  if (!errors.email && !EMAIL_PATTERN.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!errors.phone && !PHONE_PATTERN.test(values.phone)) {
    errors.phone = "Phone number can contain digits, spaces and + ( ) - only.";
  }
  if (!errors.requirement && !REQUIREMENT_OPTIONS.includes(values.requirement)) {
    errors.requirement = "Choose a service or requirement from the list.";
  }

  const attachment = await readAttachment(formData);
  if (attachment.error) errors.attachment = attachment.error;

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
    `Company: ${values.company || "Not provided"}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone || "Not provided"}`,
    `Requirement: ${values.requirement}`,
    `Project location: ${values.location || "Not provided"}`,
    `Attachment: ${attachment.file ? attachment.file.filename : "None"}`,
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
        subject: `Quote request: ${values.requirement} — ${values.company || values.name}`,
        text,
        attachments: attachment.file ? [attachment.file] : undefined,
      }),
      signal: AbortSignal.timeout(15_000),
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
