import type { Metadata } from "next";
import Link from "next/link";
import {
  generateMetadata as generateSEOMetadata,
  generateBreadcrumbSchema,
  generateItemListSchema,
} from "@/lib/seo";
import StructuredData from "@/components/seo/StructuredData";
import { projects } from "@/content/projects";
import ProjectsHeroImage from "@/components/ui/ProjectsHeroImage";

export const metadata: Metadata = generateSEOMetadata({
  title: "Projects - NORVEGE MINERALS AS",
  description:
    "Explore our portfolio of critical mineral exploration projects across Norway. Discover rare earth elements, zinc, copper, and other strategic minerals in our 72 exploration licenses covering 2,400 km².",
  path: "/projects",
  keywords: [
    "mining projects",
    "mineral exploration projects",
    "rare earth elements projects",
    "Norway mining",
    "exploration licenses",
    "critical minerals projects",
  ],
});

export default function ProjectsPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://norvegeminerals.no";

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteUrl },
    { name: "Projects", url: `${siteUrl}/projects` },
  ]);

  const projectsSchema = generateItemListSchema({
    name: "Mining Projects",
    description: "Portfolio of critical mineral exploration projects in Norway",
    items: projects.map((project) => ({
      name: project.name,
      description: project.description,
      url: `${siteUrl}/projects/${project.slug}`,
    })),
  });

  return (
    <>
      <StructuredData data={[breadcrumbSchema, projectsSchema]} />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center">
          {/* Background Image */}
          <ProjectsHeroImage />

          {/* Subtle grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none z-10"
            style={{
              backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Content */}
          <div className="container relative z-20 pt-32 pb-20 lg:pt-36 lg:pb-28">
            <div className="max-w-4xl mx-auto text-center">
              {/* Main Heading */}
              <h1
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 lg:mb-8 leading-tight"
                style={{
                  color: "var(--color-text-on-dark)",
                  fontFamily: "var(--font-family-heading)",
                  fontWeight: "var(--font-weight-black)",
                  letterSpacing: "-0.03em",
                }}
              >
                Our{" "}
                <span
                  style={{
                    color: "var(--color-accent-main)",
                  }}
                >
                  Projects
                </span>
              </h1>

              {/* Description */}
              <p
                className="text-xl md:text-2xl lg:text-3xl mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed"
                style={{
                  color: "color-mix(in srgb, var(--color-text-on-dark) 90%, transparent)",
                  fontFamily: "var(--font-family-body)",
                  lineHeight: "var(--line-height-loose)",
                  fontWeight: "var(--font-weight-medium)",
                }}
              >
                Exploring critical mineral resources across Norway&apos;s most promising regions
              </p>

              {/* Stats Row */}
              <div className="flex flex-wrap justify-center gap-6 lg:gap-12 mt-12">
                <div className="text-center">
                  <div
                    className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2"
                    style={{ color: "var(--color-accent-main)" }}
                  >
                    {projects.length}
                  </div>
                  <div
                    className="text-sm md:text-base uppercase tracking-wider"
                    style={{
                      color: "color-mix(in srgb, var(--color-text-on-dark) 70%, transparent)",
                    }}
                  >
                    Active Projects
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2"
                    style={{ color: "var(--color-accent-main)" }}
                  >
                    {projects.reduce((sum, p) => sum + p.licenses, 0)}
                  </div>
                  <div
                    className="text-sm md:text-base uppercase tracking-wider"
                    style={{
                      color: "color-mix(in srgb, var(--color-text-on-dark) 70%, transparent)",
                    }}
                  >
                    Total Licenses
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2"
                    style={{ color: "var(--color-accent-main)" }}
                  >
                    {projects.reduce((sum, p) => {
                      const area = parseInt(p.area.replace(/[^\d]/g, "")) || 0;
                      return sum + area;
                    }, 0)}
                  </div>
                  <div
                    className="text-sm md:text-base uppercase tracking-wider"
                    style={{
                      color: "color-mix(in srgb, var(--color-text-on-dark) 70%, transparent)",
                    }}
                  >
                    km² Area
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom decorative line */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, var(--color-accent-main) 50%, transparent 100%)",
            }}
          />
        </section>

        {/* Projects Grid */}
        <section className="section bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div key={project.slug} className="card group">
                  <div className="mb-4">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        background:
                          project.priority === "High"
                            ? "var(--color-accent-main)"
                            : "var(--color-slate-500)",
                        color: "white",
                      }}
                    >
                      {project.stage}
                    </span>
                  </div>

                  <h2
                    className="text-3xl font-bold mb-2"
                    style={{ color: "var(--color-navy-900)" }}
                  >
                    {project.name}
                  </h2>

                  <p className="text-lg text-gray-600 mb-4">
                    {project.region}, {project.country}
                  </p>

                  <p className="text-gray-600 mb-4">{project.description}</p>

                  {/* Overview preview if available */}
                  {project.overview && (
                    <p className="text-sm text-gray-500 mb-6 line-clamp-3">{project.overview}</p>
                  )}

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-500">Licenses</p>
                      <p
                        className="text-lg font-semibold"
                        style={{ color: "var(--color-navy-900)" }}
                      >
                        {project.licenses}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Area</p>
                      <p
                        className="text-lg font-semibold"
                        style={{ color: "var(--color-navy-900)" }}
                      >
                        {project.area}
                      </p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-sm text-gray-500">Target Minerals</p>
                      <p
                        className="text-lg font-semibold"
                        style={{ color: "var(--color-accent-main)" }}
                      >
                        {project.minerals.join(", ")}
                      </p>
                    </div>
                    {project.coverage && (
                      <div className="col-span-2">
                        <p className="text-sm text-gray-500">Coverage</p>
                        <p className="text-base font-medium text-gray-700">{project.coverage}</p>
                      </div>
                    )}
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center text-sm font-semibold group-hover:translate-x-1 transition-transform focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-main)] focus:ring-offset-2 rounded"
                    style={{ color: "var(--color-copper-600)" }}
                  >
                    View Project Details
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
