import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Exploration Specialists - NORVEGE MINERALS AS",
  description: "Our team of experienced exploration geologists and specialists.",
  path: "/exploration-specialists",
});

export default function ExplorationSpecialistsPage() {
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
                Our Team
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
              Exploration Specialists
            </h1>

            {/* Description */}
            <p
              className="text-xl md:text-2xl lg:text-3xl mb-8 leading-relaxed max-w-3xl mx-auto lg:mx-0"
              style={{
                color: "var(--color-gray-200)",
                fontFamily: "var(--font-family-body)",
              }}
            >
              Experienced geologists and exploration professionals with deep knowledge of Norwegian
              geology and modern exploration techniques
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white py-12 lg:py-16">
        <div className="container max-w-6xl">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our exploration team consists of experienced geologists and specialists with deep
              knowledge of Norwegian geology and mineral deposits. We combine traditional field
              geology with modern exploration techniques to identify and evaluate mineral prospects
              across our extensive license portfolio.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our team works closely with academic institutions, research organizations, and
              industry partners to stay at the forefront of exploration technology and best
              practices, ensuring we maintain the highest standards in mineral exploration.
            </p>
          </div>

          {/* Expertise Areas Grid */}
          <div className="mb-12">
            <h2
              className="text-3xl font-bold mb-8 text-center"
              style={{ color: "var(--color-primary-main)" }}
            >
              Expertise Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "VMS Deposits",
                  description:
                    "Volcanogenic massive sulfide deposits - expertise in base metal exploration in volcanic settings",
                  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                },
                {
                  title: "Magmatic Ni-Cu",
                  description: "Magmatic nickel-copper deposits in mafic-ultramafic complexes",
                  icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
                },
                {
                  title: "Rare Earth Elements",
                  description:
                    "Specialized knowledge in REE mineralization, including carbonatites and alkaline complexes",
                  icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
                },
                {
                  title: "Structural Geology",
                  description:
                    "Advanced structural analysis and prospectivity mapping for target generation",
                  icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
                },
                {
                  title: "Geophysical Interpretation",
                  description:
                    "Integration of magnetic, gravity, EM, and seismic data for exploration targeting",
                  icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                },
                {
                  title: "Resource Estimation",
                  description:
                    "3D geological modeling and resource estimation following JORC and NI 43-101 standards",
                  icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
                },
              ].map((expertise, index) => (
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
                      d={expertise.icon}
                    />
                  </svg>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: "var(--color-primary-main)" }}
                  >
                    {expertise.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{expertise.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Qualifications */}
          <div className="mb-12">
            <h2
              className="text-3xl font-bold mb-6 text-center"
              style={{ color: "var(--color-primary-main)" }}
            >
              Team Qualifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3
                  className="text-xl font-semibold mb-4"
                  style={{ color: "var(--color-primary-main)" }}
                >
                  Education & Certifications
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--color-accent-main)" }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 01.787 1.838l-7 3a1 1 0 000 1.84l7 3a1 1 0 00.788 0l7-3a1 1 0 000-1.838l-1.94-.831a1 1 0 01.787-1.838l4 1.714a1 1 0 11-.788 1.838l-4-1.714a.999.999 0 01-.356-.257l-7-3z" />
                    </svg>
                    <span>Advanced degrees in Geology, Geochemistry, and Earth Sciences</span>
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
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Professional Geologist (P.Geo) and European Geologist (EurGeol) certifications
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--color-accent-main)" }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 01.787 1.838l-7 3a1 1 0 000 1.84l7 3a1 1 0 00.788 0l7-3a1 1 0 000-1.838l-1.94-.831a1 1 0 01.787-1.838l4 1.714a1 1 0 11-.788 1.838l-4-1.714a.999.999 0 01-.356-.257l-7-3z" />
                    </svg>
                    <span>Specialized training in resource estimation and reporting standards</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <h3
                  className="text-xl font-semibold mb-4"
                  style={{ color: "var(--color-primary-main)" }}
                >
                  Experience
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
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Combined 100+ years of exploration experience</span>
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
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Extensive field experience across Norway and internationally</span>
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
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Track record of successful discoveries and project development</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Collaboration Section */}
          <div className="p-8 rounded-lg" style={{ background: "var(--color-bg-subtle)" }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--color-primary-main)" }}>
              Academic & Research Collaborations
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our team maintains active collaborations with leading institutions including:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
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
                <span>Norwegian Geological Survey (NGU)</span>
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
                <span>University of Oslo - Department of Geosciences</span>
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
                <span>NTNU - Norwegian University of Science and Technology</span>
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
                <span>Geological Survey of Finland (GTK)</span>
              </li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:opacity-90 hover:shadow-lg"
              style={{
                background: "var(--color-accent-main)",
                color: "var(--color-accent-contrast)",
              }}
            >
              Contact Our Team
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
