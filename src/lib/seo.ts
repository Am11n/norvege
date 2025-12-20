import type { Metadata } from "next";
import { companyInfo } from "@/content/company";

export interface SEOConfig {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  keywords?: string[];
  noindex?: boolean;
  nofollow?: boolean;
  alternateLanguages?: Record<string, string>;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://norvegeminerals.no";
const defaultImage = `${siteUrl}/images/logo.png`;
const defaultOgImage = `${siteUrl}/og-image.jpg`;

/**
 * Generate comprehensive SEO metadata for pages
 */
export function generateMetadata(config: SEOConfig): Metadata {
  const fullUrl = config.path ? `${siteUrl}${config.path}` : siteUrl;
  const imageUrl = config.image ? `${siteUrl}${config.image}` : defaultOgImage;
  const keywords = config.keywords || [
    "mining",
    "minerals",
    "Norway",
    "critical minerals",
    "rare earth elements",
    "exploration",
    "sustainable mining",
    "Norwegian mining",
  ];

  return {
    title: config.title,
    description: config.description,
    keywords: keywords,
    authors: config.authors ? config.authors.map((name) => ({ name })) : undefined,
    creator: companyInfo.legalName,
    publisher: companyInfo.legalName,
    robots: {
      index: !config.noindex,
      follow: !config.nofollow,
      googleBot: {
        index: !config.noindex,
        follow: !config.nofollow,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: config.type || "website",
      locale: "en_US",
      url: fullUrl,
      siteName: "Norvege Minerals",
      title: config.title,
      description: config.description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: config.title,
          type: "image/jpeg",
        },
      ],
      ...(config.publishedTime && { publishedTime: config.publishedTime }),
      ...(config.modifiedTime && { modifiedTime: config.modifiedTime }),
      ...(config.authors && { authors: config.authors }),
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
      images: [imageUrl],
      creator: "@norvegeminerals",
      site: "@norvegeminerals",
    },
    alternates: {
      canonical: fullUrl,
      ...(config.alternateLanguages && {
        languages: config.alternateLanguages,
      }),
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
      yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
    },
    category: "Mining & Exploration",
    classification: "Business",
    other: {
      "geo.region": "NO",
      "geo.placename": "Norway",
      "geo.position": "59.9139;10.7522",
      ICBM: "59.9139, 10.7522",
    },
  };
}

/**
 * Generate comprehensive Organization schema
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: companyInfo.legalName,
    legalName: companyInfo.legalName,
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/images/logo.png`,
      width: 512,
      height: 512,
    },
    image: `${siteUrl}/images/logo.png`,
    description: companyInfo.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyInfo.address.street,
      addressLocality: companyInfo.address.city,
      postalCode: companyInfo.address.postalCode,
      addressCountry: companyInfo.address.country,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        email: companyInfo.contact.email,
        availableLanguage: ["en", "no"],
      },
      {
        "@type": "ContactPoint",
        contactType: "Investor Relations",
        email: companyInfo.contact.email,
        availableLanguage: ["en", "no"],
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/norvege-minerals",
      "https://twitter.com/norvegeminerals",
    ],
    foundingDate: "2020",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "10-50",
    },
    areaServed: {
      "@type": "Country",
      name: "Norway",
    },
    knowsAbout: [
      "Mineral Exploration",
      "Mining",
      "Rare Earth Elements",
      "Critical Minerals",
      "Sustainable Mining",
    ],
  };
}

/**
 * Generate WebSite schema with search functionality
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Norvege Minerals",
    description: companyInfo.description,
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
    inLanguage: ["en", "no"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate Article schema
 */
export function generateArticleSchema(config: {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  publisher?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: config.headline,
    description: config.description,
    image: config.image || defaultOgImage,
    datePublished: config.datePublished,
    dateModified: config.dateModified || config.datePublished,
    author: {
      "@type": "Person",
      name: config.author || companyInfo.legalName,
    },
    publisher: {
      "@type": "Organization",
      name: config.publisher || companyInfo.legalName,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": config.url,
    },
  };
}

/**
 * Generate Project schema (for mining projects)
 */
export function generateProjectSchema(config: {
  name: string;
  description: string;
  image?: string;
  url: string;
  location?: {
    name: string;
    address?: string;
    geo?: {
      latitude: number;
      longitude: number;
    };
  };
  minerals?: string[];
  stage?: string;
  area?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Project",
    name: config.name,
    description: config.description,
    image: config.image || defaultOgImage,
    url: config.url,
    ...(config.location && {
      location: {
        "@type": "Place",
        name: config.location.name,
        ...(config.location.address && { address: config.location.address }),
        ...(config.location.geo && {
          geo: {
            "@type": "GeoCoordinates",
            latitude: config.location.geo.latitude,
            longitude: config.location.geo.longitude,
          },
        }),
      },
    }),
    ...(config.minerals && {
      about: config.minerals.map((mineral) => ({
        "@type": "Thing",
        name: mineral,
      })),
    }),
    ...(config.stage && { projectStatus: config.stage }),
    ...(config.area && { areaServed: config.area }),
  };
}

/**
 * Generate VideoObject schema
 */
export function generateVideoSchema(config: {
  name: string;
  description: string;
  thumbnailUrl: string;
  contentUrl: string;
  embedUrl?: string;
  uploadDate: string;
  duration?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: config.name,
    description: config.description,
    thumbnailUrl: config.thumbnailUrl,
    contentUrl: config.contentUrl,
    ...(config.embedUrl && { embedUrl: config.embedUrl }),
    uploadDate: config.uploadDate,
    ...(config.duration && { duration: config.duration }),
    publisher: {
      "@type": "Organization",
      name: companyInfo.legalName,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo.png`,
      },
    },
  };
}

/**
 * Generate FAQPage schema
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate LocalBusiness schema (for company location)
 */
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    name: companyInfo.legalName,
    image: `${siteUrl}/images/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyInfo.address.street,
      addressLocality: companyInfo.address.city,
      postalCode: companyInfo.address.postalCode,
      addressCountry: companyInfo.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 59.1282, // Sandefjord coordinates
      longitude: 10.2197,
    },
    url: siteUrl,
    telephone: companyInfo.contact.phone,
    email: companyInfo.contact.email,
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  };
}

/**
 * Generate ItemList schema (for projects, reports, etc.)
 */
export function generateItemListSchema(config: {
  name: string;
  description?: string;
  items: Array<{
    name: string;
    description?: string;
    url: string;
    image?: string;
  }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: config.name,
    ...(config.description && { description: config.description }),
    itemListElement: config.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.description && { description: item.description }),
      url: item.url,
      ...(item.image && { image: item.image }),
    })),
  };
}

/**
 * Generate HowTo schema (for processes, procedures)
 */
export function generateHowToSchema(config: {
  name: string;
  description: string;
  image?: string;
  totalTime?: string;
  steps: Array<{
    name: string;
    text: string;
    image?: string;
  }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: config.name,
    description: config.description,
    ...(config.image && { image: config.image }),
    ...(config.totalTime && { totalTime: config.totalTime }),
    step: config.steps.map((step) => ({
      "@type": "HowToStep",
      name: step.name,
      text: step.text,
      ...(step.image && { image: step.image }),
    })),
  };
}
