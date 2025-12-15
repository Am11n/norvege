"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "15+",
    label: "Active Licenses",
    description: "Exploration licenses across Norway",
  },
  {
    number: "500+",
    label: "km² Area",
    description: "Total exploration area",
  },
  {
    number: "100+",
    label: "Historic Sites",
    description: "Mines and prospects identified",
  },
  {
    number: "4",
    label: "Key Projects",
    description: "Priority exploration areas",
  },
];

export default function StatsSection() {
  return (
    <section className="section" style={{ background: "var(--color-sand-50)" }}>
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
            Exploration at Scale
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building a comprehensive portfolio of critical mineral resources across Norway
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="card text-center"
            >
              <div className="text-5xl font-bold mb-2" style={{ color: "var(--color-copper-600)" }}>
                {stat.number}
              </div>
              <div
                className="text-xl font-semibold mb-2"
                style={{ color: "var(--color-navy-900)" }}
              >
                {stat.label}
              </div>
              <p className="text-sm text-gray-600">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
