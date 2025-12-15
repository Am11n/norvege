"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Nordfjord Project",
    region: "Sogn og Fjordane",
    stage: "Advanced Exploration",
    licenses: 8,
    area: "150 km²",
    priority: "High",
    minerals: "Copper, Zinc",
  },
  {
    name: "Telemark Minerals",
    region: "Telemark",
    stage: "Early Exploration",
    licenses: 5,
    area: "120 km²",
    priority: "Medium",
    minerals: "Nickel, Cobalt",
  },
  {
    name: "Trøndelag Resources",
    region: "Trøndelag",
    stage: "Advanced Exploration",
    licenses: 6,
    area: "180 km²",
    priority: "High",
    minerals: "Rare Earth Elements",
  },
];

export default function ProjectsTeaser() {
  return (
    <section className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--color-navy-900)" }}
          >
            Our Key Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Strategic exploration across Norway&apos;s most promising mineral regions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="card group cursor-pointer"
            >
              <div className="mb-4">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2"
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

              <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--color-navy-900)" }}>
                {project.name}
              </h3>

              <p className="text-gray-600 mb-4">{project.region}</p>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Licenses:</span>
                  <span className="font-semibold" style={{ color: "var(--color-navy-900)" }}>
                    {project.licenses}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Area:</span>
                  <span className="font-semibold" style={{ color: "var(--color-navy-900)" }}>
                    {project.area}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Focus:</span>
                  <span className="font-semibold" style={{ color: "var(--color-navy-900)" }}>
                    {project.minerals}
                  </span>
                </div>
              </div>

              <Link
                href={`/projects/${project.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="inline-flex items-center text-sm font-semibold group-hover:translate-x-1 transition-transform"
                style={{ color: "var(--color-copper-600)" }}
              >
                View Project
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/projects" className="btn btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
