import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Laboratories - NORVEGE MINERALS AS",
  description: "Information about our laboratory partnerships and analytical capabilities.",
  path: "/laboratories",
});

export default function LaboratoriesPage() {
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
                Quality Assurance
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
              Laboratories
            </h1>

            {/* Description */}
            <p
              className="text-xl md:text-2xl lg:text-3xl mb-8 leading-relaxed max-w-3xl mx-auto lg:mx-0"
              style={{
                color: "var(--color-gray-200)",
                fontFamily: "var(--font-family-body)",
              }}
            >
              ISO-certified analytical laboratories delivering precise, reliable geochemical and
              mineralogical analysis for our exploration programs
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white py-12 lg:py-16">
        <div className="container max-w-6xl">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              NORVEGE MINERALS AS works with leading analytical laboratories to ensure accurate and
              reliable geochemical and mineralogical analysis of our exploration samples. Quality
              assurance and quality control (QA/QC) are fundamental to our exploration programs, and
              we maintain rigorous standards throughout our analytical workflow.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our laboratory partners are ISO-certified and utilize state-of-the-art analytical
              equipment and methodologies to deliver precise, reproducible results that meet
              international standards for mineral exploration and resource estimation.
            </p>
          </div>

          {/* Analytical Capabilities Grid */}
          <div className="mb-12">
            <h2
              className="text-3xl font-bold mb-8 text-center"
              style={{ color: "var(--color-primary-main)" }}
            >
              Analytical Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Multi-Element Geochemical Analysis",
                  description:
                    "Comprehensive analysis of major, minor, and trace elements using ICP-MS, ICP-OES, and XRF techniques",
                  icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                },
                {
                  title: "Mineralogical Characterization",
                  description:
                    "XRD, SEM-EDS, and petrographic analysis for mineral identification and quantification",
                  icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                },
                {
                  title: "Base & Precious Metals Assay",
                  description:
                    "Fire assay, atomic absorption, and gravimetric methods for accurate metal content determination",
                  icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                },
                {
                  title: "Rare Earth Element Analysis",
                  description:
                    "Specialized REE analysis including light, heavy, and critical rare earth elements using advanced ICP-MS",
                  icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
                },
                {
                  title: "Quality Control & Standards",
                  description:
                    "Rigorous QA/QC protocols including certified reference materials, blanks, duplicates, and standards",
                  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                },
                {
                  title: "Sample Preparation",
                  description:
                    "Crushing, grinding, pulverizing, and splitting services following industry best practices",
                  icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
                },
              ].map((capability, index) => (
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
                      d={capability.icon}
                    />
                  </svg>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: "var(--color-primary-main)" }}
                  >
                    {capability.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Laboratory Partners */}
          <div className="mb-12">
            <h2
              className="text-3xl font-bold mb-8 text-center"
              style={{ color: "var(--color-primary-main)" }}
            >
              Laboratory Partners
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: "ALS Global",
                  location: "Multiple locations worldwide",
                  specialties: ["Geochemistry", "Mineralogy", "Metallurgy"],
                  certification: "ISO 17025, ISO 9001",
                },
                {
                  name: "Bureau Veritas",
                  location: "Norway & International",
                  specialties: ["Geochemical Analysis", "Environmental Testing", "QA/QC Services"],
                  certification: "ISO 17025, NORSOK",
                },
                {
                  name: "SGS Minerals",
                  location: "Global network",
                  specialties: ["Fire Assay", "ICP Analysis", "Mineral Processing"],
                  certification: "ISO 17025, ISO 9001",
                },
                {
                  name: "Actlabs",
                  location: "Canada & International",
                  specialties: ["Rare Earth Elements", "Lithium Analysis", "Specialty Metals"],
                  certification: "ISO 17025",
                },
              ].map((lab, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-lg">
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: "var(--color-primary-main)" }}
                  >
                    {lab.name}
                  </h3>
                  <p className="text-gray-600 mb-3 text-sm">{lab.location}</p>
                  <div className="mb-3">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-2">
                      {lab.specialties.map((spec, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{
                            background:
                              "color-mix(in srgb, var(--color-accent-main) 15%, transparent)",
                            color: "var(--color-accent-main)",
                          }}
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">
                    <strong>Certifications:</strong> {lab.certification}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* QA/QC Section */}
          <div className="p-8 rounded-lg" style={{ background: "var(--color-bg-subtle)" }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--color-primary-main)" }}>
              Quality Assurance & Quality Control
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our QA/QC program ensures data integrity and reliability through:
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
                <span>Insertion of certified reference materials (CRMs) at regular intervals</span>
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
                <span>Field duplicates and laboratory duplicates for precision assessment</span>
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
                <span>Blank samples to monitor contamination</span>
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
                <span>Regular external check assays with secondary laboratories</span>
              </li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              For more information about our laboratory partnerships and analytical procedures,
              please contact us.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:opacity-90 hover:shadow-lg"
              style={{
                background: "var(--color-accent-main)",
                color: "var(--color-accent-contrast)",
              }}
            >
              Contact Us
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
