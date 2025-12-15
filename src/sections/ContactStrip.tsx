"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactStrip() {
  return (
    <section className="section" style={{ background: "var(--color-sand-50)" }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "var(--color-navy-900)" }}
            >
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Have questions about our projects or interested in partnering with us? We&apos;d love
              to hear from you.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 mt-1 flex-shrink-0"
                  style={{ color: "var(--color-copper-600)" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <p className="font-semibold" style={{ color: "var(--color-navy-900)" }}>
                    Email
                  </p>
                  <a
                    href="mailto:contact@norvegeminerals.no"
                    className="text-gray-600 hover:text-[var(--color-copper-600)]"
                  >
                    contact@norvegeminerals.no
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 mt-1 flex-shrink-0"
                  style={{ color: "var(--color-copper-600)" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <p className="font-semibold" style={{ color: "var(--color-navy-900)" }}>
                    Location
                  </p>
                  <p className="text-gray-600">Oslo, Norway</p>
                </div>
              </div>
            </div>

            <Link href="/contact" className="btn btn-primary">
              Contact Form
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg p-8 shadow-lg"
          >
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <svg
                  className="w-16 h-16 mx-auto mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                <p className="text-sm">Map of Norway</p>
                <p className="text-xs">Exploration regions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
