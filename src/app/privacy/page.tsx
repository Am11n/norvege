import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { getLegalPageBySlug } from "@/content/legal";
import LegalContent from "@/components/ui/LegalContent";

export const metadata: Metadata = generateSEOMetadata({
  title: "Privacy Policy - NORVEGE MINERALS AS",
  description: "Our privacy policy and data protection practices.",
  path: "/privacy",
});

export default function PrivacyPage() {
  const page = getLegalPageBySlug("privacy");

  if (!page) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="section relative overflow-hidden"
        style={{ background: "var(--color-navy-900)" }}
      >
        <div className="container">
          <div className="max-w-4xl mx-auto text-center lg:text-left">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6"
              style={{
                color: "var(--color-gray-50)",
                fontFamily: "var(--font-family-heading)",
                lineHeight: "1.1",
              }}
            >
              {page.title}
            </h1>
            {page.lastUpdated && (
              <p
                className="text-lg md:text-xl"
                style={{
                  color: "var(--color-gray-200)",
                  fontFamily: "var(--font-family-body)",
                }}
              >
                Last updated:{" "}
                {new Date(page.lastUpdated).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section bg-white py-12 lg:py-16">
        <div className="container max-w-7xl">
          <LegalContent content={page.content} />
        </div>
      </section>
    </div>
  );
}
