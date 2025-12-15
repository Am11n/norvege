"use client";

import { useState } from "react";

const subjects = [
  "General Inquiry",
  "Investment Opportunity",
  "Partnership",
  "Media Request",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: subjects[0],
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: subjects[0],
        message: "",
      });
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              Contact Us
            </h1>
            <p className="text-xl" style={{ color: "var(--color-sand-100)" }}>
              Get in touch with our team
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: "var(--color-navy-900)" }}>
                Contact Information
              </h2>

              <div className="space-y-6 mb-8">
                <div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: "var(--color-copper-600)" }}
                  >
                    Company Details
                  </h3>
                  <p className="text-gray-600">NORVEGE MINERALS AS</p>
                  <p className="text-gray-600">Org. nr: [Company Number]</p>
                </div>

                <div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: "var(--color-copper-600)" }}
                  >
                    Address
                  </h3>
                  <p className="text-gray-600">[Street Address]</p>
                  <p className="text-gray-600">[Postal Code] Oslo</p>
                  <p className="text-gray-600">Norway</p>
                </div>

                <div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: "var(--color-copper-600)" }}
                  >
                    Email
                  </h3>
                  <a
                    href="mailto:contact@norvegeminerals.no"
                    className="text-gray-600 hover:text-[var(--color-copper-600)]"
                  >
                    contact@norvegeminerals.no
                  </a>
                </div>

                <div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: "var(--color-copper-600)" }}
                  >
                    Phone
                  </h3>
                  <p className="text-gray-600">[Phone Number]</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: "var(--color-navy-900)" }}>
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--color-navy-900)" }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-copper-600)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--color-navy-900)" }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-copper-600)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--color-navy-900)" }}
                  >
                    Company (optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-copper-600)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--color-navy-900)" }}
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-copper-600)]"
                  >
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--color-navy-900)" }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-copper-600)]"
                  />
                </div>

                {status === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800">
                      Thank you! Your message has been sent successfully.
                    </p>
                  </div>
                )}

                {status === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800">
                      Sorry, there was an error sending your message. Please try again.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn btn-primary w-full"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
