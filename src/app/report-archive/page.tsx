import type { Metadata } from "next";
import {
  generateMetadata as generateSEOMetadata,
  generateBreadcrumbSchema,
  generateItemListSchema,
} from "@/lib/seo";
import StructuredData from "@/components/seo/StructuredData";
import { reportArchive } from "@/content/resources";
import Link from "next/link";

export const metadata: Metadata = generateSEOMetadata({
  title: "Report Archive - NORVEGE MINERALS AS",
  description:
    "Access our comprehensive library of annual reports, quarterly reports, ESG reports, and technical documents. Stay informed about our financial performance, exploration progress, and sustainability initiatives.",
  path: "/report-archive",
  keywords: [
    "annual reports",
    "quarterly reports",
    "ESG reports",
    "mining company reports",
    "financial reports",
    "exploration reports",
  ],
});

export default function ReportArchivePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://norvegeminerals.no";

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteUrl },
    { name: "Report Archive", url: `${siteUrl}/report-archive` },
  ]);

  const reportsSchema = generateItemListSchema({
    name: "Report Archive",
    description: "Annual reports, quarterly reports, ESG reports, and technical documents",
    items: reportArchive.map((report) => ({
      name: report.title,
      description: report.description || "",
      url: report.href.startsWith("http") ? report.href : `${siteUrl}${report.href}`,
    })),
  });

  return (
    <>
      <StructuredData data={[breadcrumbSchema, reportsSchema]} />
      <div className="min-h-screen">
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
                  Resources
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
                Report Archive
              </h1>

              {/* Description */}
              <p
                className="text-xl md:text-2xl lg:text-3xl mb-8 leading-relaxed max-w-3xl mx-auto lg:mx-0"
                style={{
                  color: "var(--color-gray-200)",
                  fontFamily: "var(--font-family-body)",
                }}
              >
                Access our comprehensive collection of annual reports, quarterly updates, ESG
                documentation, and technical reports
              </p>
            </div>
          </div>
        </section>

        {/* Reports List */}
        <section className="section bg-white py-12 lg:py-16">
          <div className="container max-w-6xl">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-3 mb-8 pb-4 border-b border-gray-200">
              <button className="px-4 py-2 rounded-lg font-medium transition-colors bg-[var(--color-accent-main)] text-[var(--color-accent-contrast)]">
                All Reports
              </button>
              <button className="px-4 py-2 rounded-lg font-medium transition-colors text-gray-600 hover:bg-gray-100">
                Annual Reports
              </button>
              <button className="px-4 py-2 rounded-lg font-medium transition-colors text-gray-600 hover:bg-gray-100">
                Quarterly Reports
              </button>
              <button className="px-4 py-2 rounded-lg font-medium transition-colors text-gray-600 hover:bg-gray-100">
                ESG Reports
              </button>
              <button className="px-4 py-2 rounded-lg font-medium transition-colors text-gray-600 hover:bg-gray-100">
                Technical Reports
              </button>
            </div>

            {/* Reports Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reportArchive.map((report, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <span
                          className="px-3 py-1 rounded-full text-xs font-semibold"
                          style={{
                            background:
                              "color-mix(in srgb, var(--color-accent-main) 15%, transparent)",
                            color: "var(--color-accent-main)",
                          }}
                        >
                          {report.title.includes("Annual")
                            ? "Annual"
                            : report.title.includes("Quarterly")
                              ? "Quarterly"
                              : report.title.includes("ESG")
                                ? "ESG"
                                : "Technical"}
                        </span>
                        {report.date && (
                          <span className="text-xs text-gray-500">
                            {new Date(report.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                            })}
                          </span>
                        )}
                      </div>
                      <h3
                        className="text-xl font-bold mb-2"
                        style={{ color: "var(--color-primary-main)" }}
                      >
                        {report.title}
                      </h3>
                      {report.description && (
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                          {report.description}
                        </p>
                      )}
                      {report.date && (
                        <p className="text-xs text-gray-500 mb-4">
                          Published:{" "}
                          {new Date(report.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      )}
                    </div>
                    <div className="mt-auto">
                      {report.type === "pdf" ? (
                        <a
                          href={report.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors hover:opacity-90"
                          style={{
                            background: "var(--color-accent-main)",
                            color: "var(--color-accent-contrast)",
                          }}
                          aria-label={`Download ${report.title} (PDF)`}
                        >
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
                              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          Download PDF
                        </a>
                      ) : (
                        <Link
                          href={report.href}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors"
                          style={{
                            background: "var(--color-accent-main)",
                            color: "var(--color-accent-contrast)",
                          }}
                        >
                          View Report
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Info Section */}
            <div className="mt-12 p-6 rounded-lg" style={{ background: "var(--color-bg-subtle)" }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: "var(--color-primary-main)" }}>
                About Our Reports
              </h3>
              <p className="text-gray-600 mb-4">
                All reports are prepared in accordance with Norwegian accounting standards and
                international best practices. For questions about our reports or to request
                additional information, please contact our investor relations team.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium"
                style={{ color: "var(--color-accent-main)" }}
              >
                Contact Investor Relations
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
