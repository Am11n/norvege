# NORVEGE MINERALS AS - Architecture Documentation

## Tech Stack

### Core Framework

- **Next.js 15**: React framework with App Router for server-side rendering and routing
- **React 19**: UI library with server components support
- **TypeScript**: Type-safe development with strict mode enabled

### Styling & UI

- **Tailwind CSS v4**: Utility-first CSS framework
- **Framer Motion**: Animation library for smooth transitions and interactions
- **Custom CSS Variables**: Design system tokens defined in `globals.css`

### Internationalization

- **next-intl**: i18n library for bilingual support (EN/NO)

### Validation & Forms

- **Zod**: Schema validation for forms and data

### Development Tools

- **ESLint**: Code linting for Next.js and TypeScript
- **Prettier**: Code formatting
- **Husky**: Git hooks for pre-commit checks
- **lint-staged**: Run linters on staged files

## Project Structure

```
norvege/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout with Header/Footer
│   │   ├── page.tsx            # Home page
│   │   ├── about/              # About page
│   │   ├── projects/           # Projects pages
│   │   ├── esg/                # ESG page
│   │   ├── investors/          # Investors page
│   │   ├── contact/            # Contact page
│   │   └── privacy-policy/     # Privacy policy page
│   ├── components/
│   │   ├── layout/             # Layout components (Header, Footer)
│   │   └── ui/                 # Reusable UI components
│   ├── sections/               # Page sections (Hero, Stats, etc.)
│   ├── lib/                    # Utilities and helpers
│   ├── content/                # Content data (projects, team, etc.)
│   └── styles/                 # Global styles
├── public/                     # Static assets
├── docs/                       # Documentation
└── package.json
```

## Routing

Next.js App Router with file-based routing:

- `/` - Home page
- `/about` - About the company
- `/projects` - Projects overview
- `/projects/[slug]` - Individual project pages
- `/esg` - ESG & Sustainability
- `/investors` - Investor relations
- `/contact` - Contact form
- `/privacy-policy` - Privacy policy

## Design System

### Color Palette

Inspired by Norwegian geology:

- **Navy** (#0a1628, #0f1f3a, #1a2f4d): Primary dark backgrounds
- **Sand** (#faf8f5, #f5f1ea, #e8e0d5): Light neutral backgrounds
- **Copper** (#d4a574, #c8935a, #b67d42): Mineral accent colors
- **Slate** (#7c9ab5, #5a7a9a, #3d5a7a): Secondary accents

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold, responsive sizing with clamp()
- **Body**: 16px base, 1.6 line-height

### Spacing

- **Section padding**: 6rem (desktop), 3rem (mobile)
- **Container max-width**: 1280px
- **Grid gaps**: 1.5rem (desktop), 1rem (mobile)

## Data Flow

### Static Content

- Project data stored in TypeScript/JSON files
- Team member data in structured format
- Investor documents list

### Forms

- Contact form with client-side validation
- Form state managed with React hooks
- Success/error states for user feedback

## Performance Optimizations

- Server-side rendering for main pages
- Next.js Image component for optimized images
- Code splitting with dynamic imports
- Minimal client-side JavaScript

## SEO

- Metadata configured in each page
- Semantic HTML structure
- Open Graph tags for social sharing
- Descriptive URLs

## Accessibility

- WCAG AA contrast ratios
- Keyboard navigation support
- ARIA labels where needed
- Respect for `prefers-reduced-motion`

## Future Enhancements

- Internationalization with locale routing
- CMS integration for content management
- Analytics integration
- Blog/news section
- Project detail pages with maps
