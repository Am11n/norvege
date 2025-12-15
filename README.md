# NORVEGE MINERALS AS

A modern, bilingual corporate website for NORVEGE MINERALS AS - a Norwegian mining company focused on critical minerals for the energy transition.

## 🌟 Features

- **Modern Design**: Clean, professional design inspired by Norwegian geology
- **Responsive**: Fully responsive across all devices
- **Bilingual Ready**: Structure ready for EN/NO internationalization
- **Animated**: Smooth animations with Framer Motion
- **SEO Optimized**: Proper metadata and semantic HTML
- **Accessible**: WCAG AA compliant with keyboard navigation support

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone [repository-url]
cd norvege

# Install dependencies
pnpm install

# Run development server
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
norvege/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # Reusable components
│   ├── sections/         # Page sections
│   ├── lib/              # Utilities
│   └── content/          # Content data
├── public/               # Static assets
├── docs/                 # Documentation
└── package.json
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **i18n**: next-intl (ready for implementation)
- **Validation**: Zod

## 📄 Available Pages

- `/` - Home page with hero, stats, projects, ESG, and vision sections
- `/about` - Company overview, timeline, team, and strategy
- `/projects` - Exploration projects overview
- `/esg` - Environmental, Social, and Governance commitments
- `/investors` - Investor relations and key documents
- `/contact` - Contact form and information
- `/privacy-policy` - Privacy policy

## 🎨 Design System

The design system is inspired by Norwegian geology:

- **Colors**: Navy (dark backgrounds), Sand (light backgrounds), Copper (accents)
- **Typography**: Inter font family
- **Spacing**: Consistent section padding and grid system
- **Components**: Reusable buttons, cards, and sections

See `docs/design-system.md` for full details.

## 📚 Documentation

- [Architecture](docs/architecture.md) - Technical architecture and stack
- [Content Editing](docs/content-editing.md) - How to update website content
- [Development Guide](docs/development-guide.md) - Development workflow and standards
- [Design System](docs/design-system.md) - Design tokens and guidelines

## 🧪 Development

```bash
# Start development server
pnpm run dev

# Build for production
pnpm run build

# Start production server
pnpm run start

# Run linting
pnpm run lint

# Format code
pnpm run format
```

## 🌐 Deployment

The site is optimized for deployment on Vercel:

1. Push to `main` branch
2. Vercel automatically deploys
3. Check deployment logs

For manual deployment, see the [Development Guide](docs/development-guide.md).

## ♿ Accessibility

- WCAG AA contrast ratios
- Keyboard navigation support
- Screen reader friendly
- Respects `prefers-reduced-motion`

## 📝 License

[License information]

## 🤝 Contributing

[Contribution guidelines]

## 📧 Contact

For questions or support:

- Email: contact@norvegeminerals.no
- Website: [URL]

---

Built with ❤️ for sustainable mining in Norway
