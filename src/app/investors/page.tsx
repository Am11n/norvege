import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investor Relations - NORVEGE MINERALS AS",
  description: "Information for investors including company overview, projects, and key documents.",
};

export default function InvestorsPage() {
  const documents = [
    { title: "Company Presentation 2024", type: "PDF", date: "2024-01-15" },
    { title: "Q4 2023 Exploration Update", type: "PDF", date: "2024-01-10" },
    { title: "Annual Report 2023", type: "PDF", date: "2024-03-01" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section relative" style={{ background: "var(--color-navy-900)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ color: "var(--color-sand-50)" }}
            >
              Investor Relations
            </h1>
            <p className="text-xl" style={{ color: "var(--color-sand-100)" }}>
              Building value through strategic exploration of critical minerals
            </p>
          </div>
        </div>
      </section>

      {/* Investment Summary */}
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--color-navy-900)" }}>
            Investment Opportunity
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            NORVEGE MINERALS AS offers investors exposure to Norway&apos;s critical mineral
            potential at a time when Europe is seeking to secure domestic sources of battery metals,
            rare earth elements, and other minerals essential for the energy transition.
          </p>
          <p className="text-lg text-gray-600">
            Our diversified portfolio of exploration licenses, experienced management team, and
            commitment to responsible mining position us for long-term value creation.
          </p>
        </div>
      </section>

      {/* Key Facts */}
      <section className="section" style={{ background: "var(--color-sand-50)" }}>
        <div className="container">
          <h2
            className="text-4xl font-bold mb-12 text-center"
            style={{ color: "var(--color-navy-900)" }}
          >
            Key Facts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { label: "Exploration Licenses", value: "15+" },
              { label: "Total Area", value: "500+ km²" },
              { label: "Key Projects", value: "4" },
              { label: "Stage", value: "Exploration" },
            ].map((fact, index) => (
              <div key={index} className="card text-center">
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: "var(--color-copper-600)" }}
                >
                  {fact.value}
                </div>
                <div className="text-lg font-semibold" style={{ color: "var(--color-navy-900)" }}>
                  {fact.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8" style={{ color: "var(--color-navy-900)" }}>
            Reports & Presentations
          </h2>
          <div className="space-y-4">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-6 border border-gray-200 rounded-lg hover:border-[var(--color-copper-600)] transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded flex items-center justify-center text-sm font-bold"
                    style={{
                      background: "var(--color-sand-100)",
                      color: "var(--color-copper-600)",
                    }}
                  >
                    {doc.type}
                  </div>
                  <div>
                    <h3
                      className="text-lg font-semibold"
                      style={{ color: "var(--color-navy-900)" }}
                    >
                      {doc.title}
                    </h3>
                    <p className="text-sm text-gray-500">{doc.date}</p>
                  </div>
                </div>
                <button
                  className="btn btn-secondary text-sm"
                  style={{
                    borderColor: "var(--color-copper-600)",
                    color: "var(--color-copper-600)",
                  }}
                >
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section" style={{ background: "var(--color-sand-50)" }}>
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "var(--color-navy-900)" }}>
            Investor Inquiries
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            For more information about investment opportunities, please contact our investor
            relations team.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
