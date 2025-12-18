import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Virtual Data Room (VDR) - NORVEGE MINERALS AS",
  description: "Access our virtual data room for investors and partners.",
  path: "/vdr",
});

export default function VDRPage() {
  return (
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
            className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl"
            style={{ background: "var(--color-accent-main)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl"
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
                Investor Resources
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
              Virtual Data Room
            </h1>

            {/* Description */}
            <p
              className="text-xl md:text-2xl lg:text-3xl mb-8 leading-relaxed max-w-3xl mx-auto lg:mx-0"
              style={{
                color: "var(--color-gray-200)",
                fontFamily: "var(--font-family-body)",
              }}
            >
              Secure, controlled access to confidential company documents, financial information,
              and comprehensive due diligence materials
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white py-12 lg:py-16">
        <div className="container max-w-6xl">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our Virtual Data Room (VDR) provides authorized investors and partners with secure,
              controlled access to confidential company documents, financial information, technical
              reports, and comprehensive due diligence materials. All documents are organized for
              efficient review and analysis.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Access is granted on a case-by-case basis to qualified investors, strategic partners,
              and potential collaborators. All VDR users are subject to confidentiality agreements
              and access controls.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="p-6 border border-gray-200 rounded-lg">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{
                  background: "color-mix(in srgb, var(--color-accent-main) 15%, transparent)",
                }}
              >
                <svg
                  className="w-6 h-6"
                  style={{ color: "var(--color-accent-main)" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "var(--color-primary-main)" }}>
                Secure Access
              </h3>
              <p className="text-gray-600 text-sm">
                Bank-level encryption and multi-factor authentication ensure your data remains
                protected at all times.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{
                  background: "color-mix(in srgb, var(--color-accent-main) 15%, transparent)",
                }}
              >
                <svg
                  className="w-6 h-6"
                  style={{ color: "var(--color-accent-main)" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "var(--color-primary-main)" }}>
                Comprehensive Documents
              </h3>
              <p className="text-gray-600 text-sm">
                Access to financial statements, technical reports, legal documents, and operational
                data in one organized location.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{
                  background: "color-mix(in srgb, var(--color-accent-main) 15%, transparent)",
                }}
              >
                <svg
                  className="w-6 h-6"
                  style={{ color: "var(--color-accent-main)" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "var(--color-primary-main)" }}>
                24/7 Availability
              </h3>
              <p className="text-gray-600 text-sm">
                Review documents at your convenience with round-the-clock access from anywhere in
                the world.
              </p>
            </div>
          </div>

          {/* Available Documents Section */}
          <div className="mb-12">
            <h2
              className="text-3xl font-bold mb-6 text-center"
              style={{ color: "var(--color-primary-main)" }}
            >
              Available Documents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3
                  className="text-xl font-semibold mb-4"
                  style={{ color: "var(--color-primary-main)" }}
                >
                  Financial Information
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--color-accent-main)" }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Annual and quarterly financial statements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--color-accent-main)" }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Audited financial reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--color-accent-main)" }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Capital structure and ownership information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--color-accent-main)" }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Financial projections and models</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <h3
                  className="text-xl font-semibold mb-4"
                  style={{ color: "var(--color-primary-main)" }}
                >
                  Technical & Operational
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--color-accent-main)" }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Geological reports and technical assessments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--color-accent-main)" }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Exploration data and drill results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--color-accent-main)" }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Resource estimates and NI 43-101 reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--color-accent-main)" }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Environmental assessments and permits</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <h3
                  className="text-xl font-semibold mb-4"
                  style={{ color: "var(--color-primary-main)" }}
                >
                  Legal & Corporate
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--color-accent-main)" }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Corporate governance documents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--color-accent-main)" }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>License agreements and contracts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--color-accent-main)" }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Regulatory filings and compliance documents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--color-accent-main)" }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Insurance and risk management documents</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div
            className="text-center p-8 rounded-lg"
            style={{ background: "var(--color-bg-subtle)" }}
          >
            <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--color-primary-main)" }}>
              Request VDR Access
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              To request access to the Virtual Data Room, please contact us through our contact form
              or email us directly at{" "}
              <a
                href="mailto:contact@norvegeminerals.no"
                className="font-medium"
                style={{ color: "var(--color-accent-main)" }}
              >
                contact@norvegeminerals.no
              </a>
              . Access is granted on a case-by-case basis to qualified investors and partners.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:opacity-90 hover:shadow-lg"
              style={{
                background: "var(--color-accent-main)",
                color: "var(--color-accent-contrast)",
              }}
            >
              Request Access
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
