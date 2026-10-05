import type { Metadata, Viewport } from "next";
import { Archivo, Geist } from "next/font/google";
import "./globals.css";
import { LOGO } from "@/lib/assets";
import { COMPANY } from "@/lib/company";
import { SERVICES } from "@/lib/services";
import { SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const homeTitle = `${COMPANY.name} | Engineering, Technical Services & Industrial Supply in Tanzania`;
const homeDescription =
  "PRO-INTEQ delivers multidisciplinary engineering, technical services and industrial supply for mining, infrastructure, energy, telecommunications, manufacturing and commercial projects across Tanzania.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: homeTitle,
    template: "%s | PRO-INTEQ Engineering and Consulting",
  },
  description: homeDescription,
  applicationName: COMPANY.shortName,
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
  themeColor: "#071b33",
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
    postOfficeBoxNumber: COMPANY.contact.address.postOfficeBox,
    addressLocality: COMPANY.contact.address.city,
    addressCountry: COMPANY.contact.address.countryCode,
  },
  areaServed: [
    { "@type": "Country", name: "Tanzania" },
    { "@type": "AdministrativeArea", name: "Zanzibar" },
  ],
  knowsAbout: SERVICES.map((service) => service.title),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${archivo.variable}`} data-scroll-behavior="smooth">
      <body className="min-h-full bg-white font-sans text-ink antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-navy focus:shadow-lg"
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
