import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects - NORVEGE MINERALS AS",
  description: "Explore our portfolio of critical mineral exploration projects across Norway.",
};

const projects = [
  {
    slug: "nordfjord-project",
    name: "Nordfjord Project",
    region: "Sogn og Fjordane",
    country: "Norway",
    stage: "Advanced Exploration",
    licenses: 8,
    area: "150 km²",
    minerals: "Copper, Zinc",
    priority: "High",
    description:
      "Our flagship project in western Norway, targeting high-grade copper and zinc mineralization in a historic mining district.",
  },
  {
    slug: "telemark-minerals",
    name: "Telemark Minerals",
    region: "Telemark",
    country: "Norway",
    stage: "Early Exploration",
    licenses: 5,
    area: "120 km²",
    minerals: "Nickel, Cobalt",
    priority: "Medium",
    description:
      "Exploring nickel and cobalt potential in southern Norway, critical minerals for battery production.",
  },
  {
    slug: "trondelag-resources",
    name: "Trøndelag Resources",
    region: "Trøndelag",
    country: "Norway",
    stage: "Advanced Exploration",
    licenses: 6,
    area: "180 km²",
    minerals: "Rare Earth Elements",
    priority: "High",
    description:
      "Targeting rare earth elements essential for wind turbines, electric motors, and high-tech applications.",
  },
  {
    slug: "finnmark-exploration",
    name: "Finnmark Exploration",
    region: "Finnmark",
    country: "Norway",
    stage: "Early Exploration",
    licenses: 4,
    area: "95 km²",
    minerals: "Copper, Gold",
    priority: "Medium",
    description: "Early-stage exploration in northern Norway's underexplored mineral belt.",
  },
];

export default function ProjectsPage() {
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
              Our Projects
            </h1>
            <p className="text-xl" style={{ color: "var(--color-sand-100)" }}>
              Exploring critical mineral resources across Norway&apos;s most promising regions
            </p>
          </div>
        </div>
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
                          ? "var(--color-copper-500)"
                          : "var(--color-slate-500)",
                      color: "white",
                    }}
                  >
                    {project.stage}
                  </span>
                </div>

                <h2 className="text-3xl font-bold mb-2" style={{ color: "var(--color-navy-900)" }}>
                  {project.name}
                </h2>

                <p className="text-lg text-gray-600 mb-4">
                  {project.region}, {project.country}
                </p>

                <p className="text-gray-600 mb-6">{project.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Licenses</p>
                    <p className="text-lg font-semibold" style={{ color: "var(--color-navy-900)" }}>
                      {project.licenses}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Area</p>
                    <p className="text-lg font-semibold" style={{ color: "var(--color-navy-900)" }}>
                      {project.area}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-gray-500">Target Minerals</p>
                    <p
                      className="text-lg font-semibold"
                      style={{ color: "var(--color-copper-600)" }}
                    >
                      {project.minerals}
                    </p>
                  </div>
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center text-sm font-semibold group-hover:translate-x-1 transition-transform"
                  style={{ color: "var(--color-copper-600)" }}
                >
                  View Project Details
                  <svg
                    className="w-4 h-4 ml-1"
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
