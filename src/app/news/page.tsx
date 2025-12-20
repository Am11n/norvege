import type { Metadata } from "next";
import {
  generateMetadata as generateSEOMetadata,
  generateBreadcrumbSchema,
  generateItemListSchema,
} from "@/lib/seo";
import StructuredData from "@/components/seo/StructuredData";
import Link from "next/link";

export const metadata: Metadata = generateSEOMetadata({
  title: "News & Updates - NORVEGE MINERALS AS",
  description:
    "Latest news, updates, and announcements from NORVEGE MINERALS AS. Stay informed about our exploration activities, project developments, and company milestones.",
  path: "/news",
  keywords: [
    "mining news",
    "mineral exploration news",
    "Norway mining updates",
    "mining company news",
    "exploration announcements",
  ],
  type: "website",
});

interface NewsItem {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  href?: string;
}

const newsItems: NewsItem[] = [
  {
    title: "Major Rare Earth Element Discovery at Snøfjell Project",
    date: "2025-04-15",
    category: "Exploration",
    excerpt:
      "NORVEGE MINERALS AS announces significant rare earth element discovery at the Snøfjell project, with 350,000 tonnes of ore documented. This represents one of the largest REE discoveries in Norway.",
    href: "/projects/snoefjell",
  },
  {
    title: "Q1 2025 Quarterly Report Published",
    date: "2025-04-20",
    category: "Financial",
    excerpt:
      "The company has published its first quarter 2025 report, highlighting strong exploration progress and continued expansion of the license portfolio across Norway.",
  },
  {
    title: "Malm Mine Water Resource Project Launch",
    date: "2025-03-10",
    category: "Innovation",
    excerpt:
      "NORVEGE MINERALS AS launches innovative mine water resource project utilizing 7-10 million m³ of ion-rich mine water, demonstrating commitment to sustainable resource utilization.",
  },
  {
    title: "Partnership Agreement with NTNU",
    date: "2025-02-28",
    category: "Partnerships",
    excerpt:
      "New research collaboration agreement signed with Norwegian University of Science and Technology (NTNU) to advance exploration technologies and sustainable mining practices.",
  },
  {
    title: "ESG Report 2024 Released",
    date: "2025-02-10",
    category: "ESG",
    excerpt:
      "Comprehensive ESG report for 2024 published, detailing environmental performance, community engagement initiatives, and governance practices. The report highlights our commitment to responsible mining.",
  },
  {
    title: "Expansion of Exploration Portfolio",
    date: "2025-01-15",
    category: "Exploration",
    excerpt:
      "Company expands exploration portfolio to 72 active licenses covering 2,400 km² across Norway, focusing on critical minerals essential for the energy transition.",
  },
  {
    title: "Technical Report: Snøfjell Deposit",
    date: "2024-12-20",
    category: "Technical",
    excerpt:
      "Detailed technical report on the Snøfjell rare earth element deposit published, providing comprehensive geological and resource information for investors and stakeholders.",
  },
  {
    title: "Community Engagement Initiative",
    date: "2024-11-18",
    category: "Community",
    excerpt:
      "Launch of enhanced community engagement program in project areas, including regular stakeholder meetings, environmental monitoring updates, and local employment opportunities.",
  },
];

export default function NewsPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://norvegeminerals.no";

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteUrl },
    { name: "News & Updates", url: `${siteUrl}/news` },
  ]);

  const newsSchema = generateItemListSchema({
    name: "News & Updates",
    description: "Latest news and announcements from Norvege Minerals AS",
    items: newsItems.map((item) => ({
      name: item.title,
      description: item.excerpt,
      url: item.href
        ? `${siteUrl}${item.href}`
        : `${siteUrl}/news#${item.title.toLowerCase().replace(/\s+/g, "-")}`,
    })),
  });

  return (
    <>
      <StructuredData data={[breadcrumbSchema, newsSchema]} />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-[500px] lg:min-h-[600px] flex items-center">
          {/* Gradient Background */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(28, 53, 94, 0.95) 0%, rgba(26, 47, 77, 0.9) 50%, rgba(20, 35, 60, 0.95) 100%)",
            }}
          />

          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl"
              style={{ background: "var(--color-accent-main)" }}
            />
            <div
              className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl"
              style={{ background: "var(--color-primary-main)" }}
            />
          </div>

          {/* Subtle Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Content */}
          <div className="container relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
            <div className="max-w-4xl mx-auto text-center lg:text-left">
              {/* Badge */}
              <div className="inline-block mb-6 lg:mb-8">
                <span
                  className="text-sm px-5 py-2.5 rounded-full backdrop-blur-sm font-semibold uppercase tracking-wider"
                  style={{
                    background: "color-mix(in srgb, var(--color-accent-main) 20%, transparent)",
                    color: "var(--color-accent-main)",
                    border: `1px solid color-mix(in srgb, var(--color-accent-main) 40%, transparent)`,
                  }}
                >
                  Latest News
                </span>
              </div>

              {/* Main Heading */}
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 lg:mb-8 leading-tight"
                style={{
                  color: "var(--color-gray-50)",
                  fontFamily: "var(--font-family-heading)",
                }}
              >
                News & Updates
              </h1>

              {/* Description */}
              <p
                className="text-xl md:text-2xl lg:text-3xl mb-8 leading-relaxed max-w-3xl mx-auto lg:mx-0"
                style={{
                  color: "var(--color-gray-200)",
                  fontFamily: "var(--font-family-body)",
                }}
              >
                Stay informed about our latest developments, discoveries, partnerships, and company
                announcements
              </p>
            </div>
          </div>
        </section>

        {/* News List */}
        <section className="section bg-white py-12 lg:py-16">
          <div className="container max-w-6xl">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-3 mb-8 pb-4 border-b border-gray-200">
              <button className="px-4 py-2 rounded-lg font-medium transition-colors bg-[var(--color-accent-main)] text-[var(--color-accent-contrast)]">
                All News
              </button>
              <button className="px-4 py-2 rounded-lg font-medium transition-colors text-gray-600 hover:bg-gray-100">
                Exploration
              </button>
              <button className="px-4 py-2 rounded-lg font-medium transition-colors text-gray-600 hover:bg-gray-100">
                Financial
              </button>
              <button className="px-4 py-2 rounded-lg font-medium transition-colors text-gray-600 hover:bg-gray-100">
                ESG
              </button>
              <button className="px-4 py-2 rounded-lg font-medium transition-colors text-gray-600 hover:bg-gray-100">
                Partnerships
              </button>
            </div>

            {/* News Grid */}
            <div className="space-y-6">
              {newsItems.map((item, index) => (
                <article
                  key={index}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="px-3 py-1 rounded-full text-xs font-semibold"
                          style={{
                            background:
                              "color-mix(in srgb, var(--color-accent-main) 15%, transparent)",
                            color: "var(--color-accent-main)",
                          }}
                        >
                          {item.category}
                        </span>
                        <time className="text-sm text-gray-500" dateTime={item.date}>
                          {new Date(item.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                      </div>
                      <h2
                        className="text-2xl font-bold mb-3"
                        style={{ color: "var(--color-primary-main)" }}
                      >
                        {item.href ? (
                          <Link
                            href={item.href}
                            className="hover:underline"
                            style={{ color: "var(--color-primary-main)" }}
                          >
                            {item.title}
                          </Link>
                        ) : (
                          item.title
                        )}
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-4">{item.excerpt}</p>
                      {item.href && (
                        <Link
                          href={item.href}
                          className="inline-flex items-center gap-2 text-sm font-medium"
                          style={{ color: "var(--color-accent-main)" }}
                        >
                          Read more
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-12 p-8 rounded-lg" style={{ background: "var(--color-bg-subtle)" }}>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--color-primary-main)" }}
              >
                Stay Updated
              </h3>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter to receive the latest news and updates directly to your
                inbox.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:opacity-90 hover:shadow-lg"
                style={{
                  background: "var(--color-accent-main)",
                  color: "var(--color-accent-contrast)",
                }}
              >
                Subscribe to Newsletter
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
