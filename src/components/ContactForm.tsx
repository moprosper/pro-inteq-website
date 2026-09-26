"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/app/contact/actions";
import { initialContactFormState, type ContactField } from "@/app/contact/form-state";
import { CheckIcon } from "@/components/icons";
import { COMPANY } from "@/lib/company";

const inputClass =
  "w-full rounded-lg border bg-white px-4 py-3 text-base text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20 sm:text-sm";

function mailtoHref(values: Partial<Record<ContactField, string>> = {}): string {
  const body = [
    values.message ?? "",
    "",
    values.name ? `Name: ${values.name}` : "",
    values.phone ? `Phone: ${values.phone}` : "",
  ]
    .filter((line, index) => index < 2 || line)
    .join("\n");
  const params = new URLSearchParams({ subject: values.subject ?? "Project enquiry", body });
  // mailto expects %20 rather than "+" for spaces.
  return `mailto:${COMPANY.contact.email}?${params.toString().replace(/\+/g, "%20")}`;
}

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialContactFormState);

  if (state.status === "success") {
    return (
      <div role="status" className="flex h-full flex-col items-center justify-center py-12 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
          <CheckIcon className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-bold text-navy-900">Message sent</h3>
        <p className="mt-2 max-w-md text-gray-600">
          Thank you for contacting {COMPANY.shortName}. Your message has been delivered to our
          team and we will reply by email.
        </p>
      </div>
    );
  }

  const errors = state.errors ?? {};
  const values = state.values ?? {};

  const fieldProps = (field: ContactField) => ({
    id: field,
    name: field,
    defaultValue: values[field],
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
    className: `${inputClass} ${errors[field] ? "border-red-500" : "border-gray-300"}`,
  });

  const fieldError = (field: ContactField) =>
    errors[field] ? (
      <p id={`${field}-error`} className="mt-1.5 text-sm text-red-700">
        {errors[field]}
      </p>
    ) : null;

  const labelClass = "mb-2 block text-sm font-medium text-gray-800";

  return (
    <form action={formAction} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full name <span aria-hidden="true">*</span>
          </label>
          <input type="text" required minLength={2} maxLength={100} autoComplete="name" {...fieldProps("name")} />
          {fieldError("name")}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email address <span aria-hidden="true">*</span>
          </label>
          <input type="email" required maxLength={254} autoComplete="email" {...fieldProps("email")} />
          {fieldError("email")}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone number <span className="font-normal text-gray-500">(optional)</span>
          </label>
          <input type="tel" maxLength={40} autoComplete="tel" {...fieldProps("phone")} />
          {fieldError("phone")}
        </div>
        <div>
          <label htmlFor="subject" className={labelClass}>
            Subject <span aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            required
            minLength={3}
            maxLength={150}
            placeholder="e.g. Electrical installation enquiry"
            {...fieldProps("subject")}
          />
          {fieldError("subject")}
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          rows={6}
          required
          minLength={10}
          maxLength={5000}
          placeholder="Describe the project scope, location and timeline."
          {...fieldProps("message")}
        />
        {fieldError("message")}
      </div>

      {/* Honeypot field for spam bots; hidden from people and assistive technology. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Next to the submit button so the result is seen where the visitor is looking. */}
      <div aria-live="polite" role="status">
        {state.status === "unavailable" && (
          <div className="rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
            <p className="font-semibold">Your message has not been sent.</p>
            <p className="mt-1">
              Online enquiries are not connected yet. Please{" "}
              <a href={mailtoHref(values)} className="font-semibold underline">
                send your message by email
              </a>{" "}
              (it opens with the details you entered) or call{" "}
              <a href={`tel:${COMPANY.contact.phones[0].replace(/\s/g, "")}`} className="font-semibold underline">
                {COMPANY.contact.phones[0]}
              </a>
              .
            </p>
          </div>
        )}
        {state.status === "error" && (
          <div className="rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-900">
            <p className="font-semibold">Your message could not be sent.</p>
            <p className="mt-1">
              Please try again, or{" "}
              <a href={mailtoHref(values)} className="font-semibold underline">
                send it by email
              </a>{" "}
              instead.
            </p>
          </div>
        )}
        {state.status === "invalid" && (
          <p className="rounded-lg border border-red-300 bg-red-50 p-4 text-sm font-semibold text-red-900">
            Please correct the highlighted fields.
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-gray-500">
          <span aria-hidden="true">*</span> Required fields
        </p>
        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-lg bg-brand-600 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
        >
          {pending ? "Sending…" : "Send Message"}
        </button>
      </div>
    </form>
  );
}
