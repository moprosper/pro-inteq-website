// Server-only: imported by the contact Server Action. Never import from a
// Client Component — it reads RESEND_API_KEY.

export interface QuoteRequest {
  name: string;
  company: string;
  email: string;
  phone: string;
  requirement: string;
  location: string;
  message: string;
}

export interface EmailAttachment {
  filename: string;
  /** Base64-encoded file content. */
  content: string;
}

export type DeliveryResult = { ok: true; id?: string } | { ok: false; reason: "not-configured" | "provider-error" };

const RESEND_ENDPOINT = process.env.RESEND_API_URL || "https://api.resend.com/emails";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function rows(request: QuoteRequest, attachment?: EmailAttachment): [string, string][] {
  return [
    ["Name", request.name],
    ["Company", request.company || "Not provided"],
    ["Email", request.email],
    ["Phone", request.phone || "Not provided"],
    ["Service / requirement", request.requirement],
    ["Project location", request.location || "Not provided"],
    ["Attachment", attachment ? attachment.filename : "None"],
  ];
}

function buildText(request: QuoteRequest, attachment?: EmailAttachment): string {
  return [
    "New quotation request from the PRO-INTEQ website",
    "",
    ...rows(request, attachment).map(([label, value]) => `${label}: ${value}`),
    "",
    "Project details:",
    request.message,
    "",
    "Reply to this email to respond directly to the requester.",
  ].join("\n");
}

function buildHtml(request: QuoteRequest, attachment?: EmailAttachment): string {
  const tableRows = rows(request, attachment)
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;border-bottom:1px solid #dbe3ea;color:#4a5866;font-size:13px;width:180px;vertical-align:top">${escapeHtml(label)}</td>` +
        `<td style="padding:8px 12px;border-bottom:1px solid #dbe3ea;color:#17212b;font-size:14px">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return `<!doctype html>
<html><body style="margin:0;padding:24px;background:#f3f6f8;font-family:Arial,Helvetica,sans-serif">
  <table role="presentation" width="100%" style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #dbe3ea;border-radius:8px;border-collapse:separate">
    <tr><td style="background:#071b33;padding:20px 24px;border-radius:8px 8px 0 0">
      <p style="margin:0;color:#8ebde9;font-size:12px;letter-spacing:2px;text-transform:uppercase">PRO-INTEQ Website</p>
      <h1 style="margin:6px 0 0;color:#ffffff;font-size:20px">New quotation request</h1>
    </td></tr>
    <tr><td style="padding:20px 12px 4px">
      <table role="presentation" width="100%" style="border-collapse:collapse">${tableRows}</table>
    </td></tr>
    <tr><td style="padding:16px 24px">
      <p style="margin:0 0 8px;color:#0b5cad;font-size:12px;letter-spacing:1px;text-transform:uppercase;font-weight:bold">Project details</p>
      <p style="margin:0;color:#17212b;font-size:14px;line-height:1.6;white-space:pre-wrap">${escapeHtml(request.message)}</p>
    </td></tr>
    <tr><td style="padding:16px 24px 24px;color:#4a5866;font-size:12px;border-top:1px solid #dbe3ea">
      Reply to this email to respond directly to ${escapeHtml(request.name)} (${escapeHtml(request.email)}).
    </td></tr>
  </table>
</body></html>`;
}

/**
 * Sends a quotation request through Resend to CONTACT_TO_EMAIL.
 * Returns ok only when Resend accepts the message.
 */
export async function sendQuoteEmail(request: QuoteRequest, attachment?: EmailAttachment): Promise<DeliveryResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim();
  const from = process.env.CONTACT_FROM_EMAIL?.trim();

  const missing = [!apiKey && "RESEND_API_KEY", !to && "CONTACT_TO_EMAIL", !from && "CONTACT_FROM_EMAIL"].filter(Boolean);
  if (missing.length > 0) {
    console.error(`Quote form email is not configured. Missing environment variables: ${missing.join(", ")}`);
    return { ok: false, reason: "not-configured" };
  }

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: to!.split(",").map((address) => address.trim()).filter(Boolean),
        reply_to: request.email,
        subject: `Quote request: ${request.requirement} — ${request.company || request.name}`,
        text: buildText(request, attachment),
        html: buildHtml(request, attachment),
        attachments: attachment ? [attachment] : undefined,
      }),
      signal: AbortSignal.timeout(20_000),
    });

    if (!response.ok) {
      // Resend explains failures such as an unverified sender domain; log the
      // message (never the API key) so the cause is visible in server logs.
      const detail = await response.text().catch(() => "");
      console.error(`Quote form email rejected by Resend (HTTP ${response.status}): ${detail.slice(0, 500)}`);
      return { ok: false, reason: "provider-error" };
    }

    const body = (await response.json().catch(() => ({}))) as { id?: string };
    return { ok: true, id: body.id };
  } catch (error) {
    console.error("Quote form email could not reach Resend:", error instanceof Error ? error.message : "unknown error");
    return { ok: false, reason: "provider-error" };
  }
}
