import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PRO-INTEQ Engineering and Consulting Company Limited",
  description:
    "PRO-INTEQ is a Tanzanian private limited engineering company providing multidisciplinary engineering, contracting, consulting, and supply services across Mechanical, Electrical, Telecommunication, Civil Construction, ICT, and General Supply sectors.",
  keywords: [
    "PRO-INTEQ",
    "engineering company Tanzania",
    "engineering consultancy",
    "electrical engineering",
    "telecommunication",
    "fiber optic",
    "civil construction",
    "mechanical works",
    "ICT and security",
    "general supply",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-full bg-white font-sans text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
