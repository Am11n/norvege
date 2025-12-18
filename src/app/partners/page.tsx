import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Partners - NORVEGE MINERALS AS",
  description: "Our strategic partners and collaborations.",
  path: "/partners",
});

export default function PartnersPage() {
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
                Collaboration
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
              Partners
            </h1>

            {/* Description */}
            <p
              className="text-xl md:text-2xl lg:text-3xl mb-8 leading-relaxed max-w-3xl mx-auto lg:mx-0"
              style={{
                color: "var(--color-gray-200)",
                fontFamily: "var(--font-family-body)",
              }}
            >
              Strategic partnerships with research institutions, technology providers, and
              communities for sustainable mineral development
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white py-12 lg:py-16">
        <div className="container max-w-6xl">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              NORVEGE MINERALS AS collaborates with a range of partners including research
              institutions, technology providers, service companies, and local communities to
              advance our exploration and development activities. We believe that strategic
              partnerships are essential for sustainable and responsible mineral development.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our partnerships are built on shared values, mutual respect, and a commitment to
              excellence in environmental stewardship, community engagement, and technological
              innovation.
            </p>
          </div>

          {/* Partnership Categories */}
          <div className="mb-12">
            <h2
              className="text-3xl font-bold mb-8 text-center"
              style={{ color: "var(--color-primary-main)" }}
            >
              Partnership Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Research & Development",
                  description:
                    "Collaborations with universities and research institutions on exploration techniques, mineral processing, and environmental solutions",
                  partners: ["NTNU", "University of Oslo", "NGU"],
                  icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
                },
                {
                  title: "Technology & Innovation",
                  description:
                    "Partnerships with technology providers for advanced exploration tools, data analytics, and digital solutions",
                  partners: ["Geosoft", "Leapfrog", "Maptek"],
                  icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
                },
                {
                  title: "Community Engagement",
                  description:
                    "Local partnerships with municipalities, community organizations, and stakeholders for sustainable development",
                  partners: [
                    "Local Municipalities",
                    "Community Groups",
                    "Indigenous Organizations",
                  ],
                  icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                },
                {
                  title: "Supply Chain",
                  description:
                    "Strategic partnerships with processing facilities, logistics providers, and equipment suppliers",
                  partners: ["Processing Facilities", "Equipment Suppliers", "Logistics Partners"],
                  icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
                },
                {
                  title: "Environmental & Sustainability",
                  description:
                    "Collaborations focused on environmental protection, rehabilitation, and sustainable mining practices",
                  partners: [
                    "Environmental Consultants",
                    "Rehabilitation Specialists",
                    "ESG Organizations",
                  ],
                  icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2h2.945M11 3.055V5a2 2 0 002 2h1a2 2 0 002 2 2 2 0 002 2v2.945M21 13v-2a2 2 0 00-2-2h-1a2 2 0 00-2-2 2 2 0 00-2-2H8.945M3 13h2.945M13 21v-2.945M21 13a9 9 0 11-18 0 9 9 0 0118 0z",
                },
                {
                  title: "Financial & Investment",
                  description:
                    "Partnerships with financial institutions, investors, and capital providers for project development",
                  partners: ["Investment Banks", "Private Equity", "Development Funds"],
                  icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                },
              ].map((category, index) => (
                <div
                  key={index}
                  className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <svg
                    className="w-10 h-10 mb-4"
                    style={{ color: "var(--color-accent-main)" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={category.icon}
                    />
                  </svg>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: "var(--color-primary-main)" }}
                  >
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-xs font-semibold text-gray-500 mb-2">Example Partners:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {category.partners.map((partner, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 rounded text-xs"
                          style={{
                            background:
                              "color-mix(in srgb, var(--color-accent-main) 10%, transparent)",
                            color: "var(--color-accent-main)",
                          }}
                        >
                          {partner}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partnership Benefits */}
          <div className="mb-12 p-8 rounded-lg" style={{ background: "var(--color-bg-subtle)" }}>
            <h3 className="text-2xl font-bold mb-6" style={{ color: "var(--color-primary-main)" }}>
              Benefits of Partnership
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-gray-800">For Partners</h4>
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
                    <span>Access to innovative projects and technologies</span>
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
                    <span>Opportunities for research and development</span>
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
                    <span>Long-term business relationships</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-gray-800">For NORVEGE MINERALS</h4>
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
                    <span>Access to specialized expertise and resources</span>
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
                    <span>Enhanced innovation and problem-solving capabilities</span>
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
                    <span>Stronger community and stakeholder relationships</span>
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
              Interested in Partnering?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We are always interested in exploring new partnership opportunities that align with
              our values and strategic objectives. If you are interested in partnering with us,
              please contact us through our contact form.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:opacity-90 hover:shadow-lg"
              style={{
                background: "var(--color-accent-main)",
                color: "var(--color-accent-contrast)",
              }}
            >
              Become a Partner
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
