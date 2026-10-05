import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  // Directives that restrict framing, <base> and form targets without
  // affecting the inline scripts Next.js emits.
  {
    key: "Content-Security-Policy",
    value: "frame-ancestors 'none'; base-uri 'self'; form-action 'self' mailto:; object-src 'none'",
  },
  // Ignored by browsers over plain HTTP, so it is safe for local development.
  { key: "Strict-Transport-Security", value: "max-age=63072000" },
];

if (process.env.NODE_ENV === "production" && !process.env.NEXT_PUBLIC_SITE_URL) {
  console.warn(
    "⚠ NEXT_PUBLIC_SITE_URL is not set: canonical URLs, sitemap and social previews will point at localhost. Set it to the public domain before deploying.",
  );
}

const nextConfig: NextConfig = {
  reactCompiler: true,
  poweredByHeader: false,
  experimental: {
    serverActions: {
      // The quotation form accepts one attachment of up to 5 MB, plus form overhead.
      bodySizeLimit: "6mb",
    },
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return [
      // The Team page was merged into About Us (Leadership).
      { source: "/team", destination: "/about#leadership", permanent: true },
      { source: "/supply", destination: "/supply-procurement", permanent: true },
      { source: "/hse", destination: "/hse-quality", permanent: true },
    ];
  },
};

export default nextConfig;
