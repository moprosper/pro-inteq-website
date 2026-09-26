import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { LOGO } from "@/lib/assets";
import { COMPANY } from "@/lib/company";
import { SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const homeTitle = `${COMPANY.name} | Dar es Salaam, Tanzania`;
const homeDescription =
  "PRO-INTEQ is a Tanzanian private limited engineering company providing multidisciplinary engineering, contracting, consulting, and supply services across Mechanical, Electrical, Telecommunication, Civil Construction, ICT, and General Supply sectors.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: homeTitle,
    template: "%s | PRO-INTEQ Engineering and Consulting",
  },
  description: homeDescription,
  applicationName: COMPANY.shortName,
  keywords: [
    "PRO-INTEQ",
    "engineering company Tanzania",
    "engineering consultancy Dar es Salaam",
    "electrical engineering Tanzania",
    "telecommunication infrastructure",
    "fiber optic installation",
    "civil construction",
    "mechanical works",
    "ICT and security systems",
    "general supply",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: COMPANY.name,
    locale: "en_TZ",
    title: homeTitle,
    description: homeDescription,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
  },
};

export const viewport: Viewport = {
  themeColor: "#162f57",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY.name,
  alternateName: COMPANY.shortName,
  url: SITE_URL,
  logo: `${SITE_URL}${LOGO.src}`,
  slogan: COMPANY.tagline,
  description: COMPANY.description,
  email: COMPANY.contact.email,
  telephone: COMPANY.contact.phones.map((phone) => phone.replace(/\s/g, "")),
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.contact.address.street,
    addressLocality: COMPANY.contact.address.city,
    addressCountry: COMPANY.contact.address.countryCode,
  },
  areaServed: { "@type": "Country", name: COMPANY.contact.address.country },
  knowsAbout: COMPANY.serviceGroups.map((group) => group.title),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={geistSans.variable} data-scroll-behavior="smooth">
      <body className="min-h-full bg-white font-sans text-gray-900 antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-brand-900 focus:shadow-lg"
        >
          Skip to main content
        </a>
        {children}
        <script
          type="application/ld+json"
          // Static, trusted data; "<" is escaped so the payload cannot close the script tag.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
