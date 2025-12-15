import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/esg", label: "ESG" },
    { href: "/investors", label: "Investors" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-[var(--color-navy-800)] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">NORVEGE MINERALS AS</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              A Norwegian mining company focused on critical minerals for the energy transition.
              Exploring and developing sustainable mineral resources across Norway.
            </p>
            <div className="text-sm text-gray-400">
              <p>Org. nr: [Company Number]</p>
              <p>Address: [Company Address]</p>
              <p>Email: contact@norvegeminerals.no</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[var(--color-copper-400)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & ESG */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal & ESG</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-300 hover:text-[var(--color-copper-400)] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/esg"
                  className="text-gray-300 hover:text-[var(--color-copper-400)] transition-colors"
                >
                  ESG & Sustainability
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {currentYear} NORVEGE MINERALS AS. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with care for transparency and sustainability</p>
        </div>
      </div>
    </footer>
  );
}
