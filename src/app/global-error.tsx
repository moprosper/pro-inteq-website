"use client"; // Replaces the root layout when it fails, so it renders its own <html>.

import { COMPANY } from "@/lib/company";

export default function GlobalError({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", margin: 0, color: "#162f57" }}>
        <main style={{ maxWidth: 560, margin: "0 auto", padding: "96px 16px", textAlign: "center" }}>
          <h1 style={{ fontSize: 28 }}>Something went wrong</h1>
          <p style={{ color: "#4b5563", lineHeight: 1.6 }}>
            The PRO-INTEQ website could not be displayed. Please try again, or email {COMPANY.contact.email}.
          </p>
          <button
            type="button"
            onClick={() => retry()}
            style={{
              marginTop: 24,
              padding: "12px 28px",
              border: 0,
              borderRadius: 8,
              background: "#2456a8",
              color: "#fff",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
