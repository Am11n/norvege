import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/ui/CookieConsent";
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateLocalBusinessSchema,
} from "@/lib/seo";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
  variable: "--font-source-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Norvege Minerals - Science-Driven Discovery",
    template: "%s | Norvege Minerals",
  },
  description:
    "Norwegian exploration company focused on sustainable mineral development and critical minerals for the energy transition. 72 exploration licenses across 2,400 km² in Norway.",
  keywords: [
    "mining",
    "minerals",
    "Norway",
    "critical minerals",
    "rare earth elements",
    "zinc",
    "copper",
    "exploration",
    "sustainable mining",
    "Norwegian mining",
    "mineral exploration",
    "REE",
    "beryllium",
    "rubidium",
    "niobium",
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://norvegeminerals.no"),
  authors: [{ name: "Norvege Minerals AS" }],
  creator: "Norvege Minerals AS",
  publisher: "Norvege Minerals AS",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["no_NO"],
    siteName: "Norvege Minerals",
    title: "Norvege Minerals - Science-Driven Discovery",
    description:
      "Norwegian exploration company focused on sustainable mineral development and critical minerals for the energy transition.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://norvegeminerals.no"}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Norvege Minerals - Science-Driven Discovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Norvege Minerals - Science-Driven Discovery",
    description:
      "Norwegian exploration company focused on sustainable mineral development and critical minerals for the energy transition.",
    creator: "@norvegeminerals",
    site: "@norvegeminerals",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  category: "Mining & Exploration",
  other: {
    "geo.region": "NO",
    "geo.placename": "Norway",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html lang="en">
      <head>
        {/* Resource hints for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Schema markup - Core schemas for all pages */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`antialiased ${sourceSans.className}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
