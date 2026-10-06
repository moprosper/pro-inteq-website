"use client";

import { startTransition, useActionState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { submitContactForm } from "@/app/contact/actions";
import {
  ATTACHMENT_EXTENSIONS,
  initialContactFormState,
  type ContactField,
  type ContactFormState,
} from "@/app/contact/form-state";
import { buttonBase } from "@/components/ui";
import { COMPANY } from "@/lib/company";

type Values = NonNullable<ContactFormState["values"]>;

const inputClass =
  "w-full rounded-md border bg-white px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-primary focus:ring-2 focus:ring-primary/20 sm:text-sm";

function mailtoHref(values: Values = {}): string {
  const details = (
    [
      ["Name", values.name],
      ["Company", values.company],
      ["Phone", values.phone],
      ["Requirement", values.requirement],
      ["Project location", values.location],
    ] as const
  )
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`);
  const body = [values.message ?? "", "", ...details].join("\n");
  const subject = `Quote request: ${values.requirement ?? "Project enquiry"}`;
  const params = new URLSearchParams({ subject, body });
  // mailto expects %20 rather than "+" for spaces.
  return `mailto:${COMPANY.contact.email}?${params.toString().replace(/\+/g, "%20")}`;
}

export default function ContactForm({ requirementOptions }: { requirementOptions: readonly string[] }) {
  const [state, formAction, pending] = useActionState(submitContactForm, initialContactFormState);

  if (state.status === "success") {
    return (
      <div role="status" className="py-10 text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-primary" aria-hidden="true" />
        <h3 className="mt-4 font-display text-2xl font-bold text-navy">Request sent</h3>
        <p className="mx-auto mt-2 max-w-md text-muted">
          Thank you for contacting {COMPANY.shortName}. Your request has been delivered to our team and we will reply
          by email.
        </p>
      </div>
    );
  }

  const errors = state.errors ?? {};
  const values = state.values ?? {};

  const describedBy = (field: ContactField, hint?: string) =>
    [errors[field] ? `${field}-error` : null, hint].filter(Boolean).join(" ") || undefined;

  const fieldProps = (field: keyof Values) => ({
    id: field,
    name: field,
    defaultValue: values[field],
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": describedBy(field),
    className: `${inputClass} ${errors[field] ? "border-red-600" : "border-line"}`,
  });

  const fieldError = (field: ContactField) =>
    errors[field] ? (
      <p id={`${field}-error`} className="mt-1.5 text-sm text-red-700">
        {errors[field]}
      </p>
    ) : null;

  const label = (field: ContactField, text: string, required = false) => (
    <label htmlFor={field} className="mb-2 block text-sm font-semibold text-navy">
      {text}{" "}
      {required ? (
        <span aria-hidden="true" className="text-primary">
          *
        </span>
      ) : (
        <span className="font-normal text-muted">(optional)</span>
      )}
    </label>
  );

  // Submitting through a transition skips React's automatic form reset, so the
  // visitor's entries (including a selected attachment) survive a validation
  // error. Without JavaScript the form still posts through 'action'.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    startTransition(() => formAction(formData));
  };

  return (
    <form action={formAction} onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          {label("name", "Name", true)}
          <input type="text" required minLength={2} maxLength={100} autoComplete="name" {...fieldProps("name")} />
          {fieldError("name")}
        </div>
        <div>
          {label("company", "Company")}
          <input type="text" maxLength={150} autoComplete="organization" {...fieldProps("company")} />
          {fieldError("company")}
        </div>
        <div>
          {label("email", "Email", true)}
          <input type="email" required maxLength={254} autoComplete="email" {...fieldProps("email")} />
          {fieldError("email")}
        </div>
        <div>
          {label("phone", "Phone")}
          <input type="tel" maxLength={40} autoComplete="tel" {...fieldProps("phone")} />
          {fieldError("phone")}
        </div>
        <div>
          {label("requirement", "Service / requirement", true)}
          <select required {...fieldProps("requirement")} defaultValue={values.requirement ?? ""}>
            <option value="" disabled>
              Select…
            </option>
            {requirementOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {fieldError("requirement")}
        </div>
        <div>
          {label("location", "Project location")}
          <input type="text" maxLength={150} placeholder="e.g. Dar es Salaam" {...fieldProps("location")} />
          {fieldError("location")}
        </div>
      </div>

      <div>
        {label("message", "Message", true)}
        <textarea
          rows={6}
          required
          minLength={10}
          maxLength={5000}
          placeholder="Describe the scope, quantities, specifications and timeline."
          {...fieldProps("message")}
        />
        {fieldError("message")}
      </div>

      <div>
        {label("attachment", "Attachment")}
        <input
          type="file"
          id="attachment"
          name="attachment"
          accept={ATTACHMENT_EXTENSIONS.map((ext) => `.${ext}`).join(",")}
          aria-invalid={errors.attachment ? true : undefined}
          aria-describedby={describedBy("attachment", "attachment-hint")}
          className="block w-full text-sm text-muted file:mr-4 file:rounded-md file:border-0 file:bg-navy file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-white hover:file:bg-navy-soft"
        />
        <p id="attachment-hint" className="mt-1.5 text-xs text-muted">
          PDF, Word, Excel, JPG or PNG, up to 5 MB — for example a BOQ, drawing or specification.
        </p>
        {fieldError("attachment")}
      </div>

      {/* Honeypot field for spam bots; hidden from people and assistive technology. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Next to the submit button so the result is seen where the visitor is looking. */}
      <div aria-live="polite" role="status">
        {state.status === "unavailable" && (
          <div className="rounded-md border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
            <p className="font-semibold">Your request has not been sent.</p>
            <p className="mt-1">
              Online submissions are not connected yet. Please{" "}
              <a href={mailtoHref(values)} className="font-semibold underline">
                send your request by email
              </a>{" "}
              (it opens with the details you entered — attach any files there) or call{" "}
              <a href={`tel:${COMPANY.contact.phones[0].replace(/\s/g, "")}`} className="font-semibold underline">
                {COMPANY.contact.phones[0]}
              </a>
              .
            </p>
          </div>
        )}
        {state.status === "error" && (
          <div className="rounded-md border border-red-300 bg-red-50 p-4 text-sm text-red-900">
            <p className="font-semibold">Your request could not be sent.</p>
            <p className="mt-1">
              Please try again, or{" "}
              <a href={mailtoHref(values)} className="font-semibold underline">
                send it by email
              </a>{" "}
              or call{" "}
              <a href={`tel:${COMPANY.contact.phones[0].replace(/\s/g, "")}`} className="font-semibold underline">
                {COMPANY.contact.phones[0]}
              </a>{" "}
              instead.
            </p>
          </div>
        )}
        {state.status === "rate-limited" && (
          <p className="rounded-md border border-red-300 bg-red-50 p-4 text-sm text-red-900">
            <span className="font-semibold">Too many requests.</span> Please wait a few minutes and try again, or email{" "}
            <a href={`mailto:${COMPANY.contact.email}`} className="font-semibold underline">
              {COMPANY.contact.email}
            </a>
            .
          </p>
        )}
        {state.status === "invalid" && (
          <p className="rounded-md border border-red-300 bg-red-50 p-4 text-sm font-semibold text-red-900">
            Please correct the highlighted fields.
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className={`${buttonBase} w-full bg-primary text-white hover:bg-primary-hover disabled:cursor-wait disabled:opacity-70 sm:w-auto`}
      >
        {pending ? "Sending…" : "Request a Quote"}
      </button>
    </form>
  );
}
