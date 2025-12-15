# NORVEGE MINERALS AS - Development Guide

## Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm installed (`npm install -g pnpm`)
- Git

### Initial Setup

1. **Clone the repository**

```bash
git clone [repository-url]
cd norvege
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Run development server**

```bash
pnpm run dev
```

The site will be available at `http://localhost:3000`

## Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run start` - Start production server
- `pnpm run lint` - Run ESLint
- `pnpm run format` - Format code with Prettier

## Project Structure

```
src/
├── app/              # Next.js pages (App Router)
├── components/       # Reusable components
│   ├── layout/       # Header, Footer
│   └── ui/           # UI components
├── sections/         # Page sections
├── lib/              # Utilities
├── content/          # Content data
└── styles/           # Global styles
```

## Development Workflow

### Branch Strategy

- `main` - Production-ready code
- `develop` - Development branch
- Feature branches: `feature/[feature-name]`

### Commit Guidelines

We use Husky to run linting and formatting on commit. Commits will fail if there are linting errors.

**Commit message format:**

```
type: description

Examples:
feat: add project detail page
fix: correct header navigation on mobile
docs: update content editing guide
style: improve card hover effects
```

### Code Style

#### TypeScript

- Use TypeScript for all new files
- Enable strict mode
- Define proper types/interfaces

#### Components

- Use functional components with hooks
- Keep components small and focused
- Extract reusable logic into custom hooks

#### Styling

- Use Tailwind utility classes when possible
- Use CSS variables for colors (from design system)
- Avoid inline styles except for dynamic values

Example:

```typescript
// Good
<div className="card" style={{ color: "var(--color-copper-600)" }}>

// Avoid
<div style={{ padding: "1.5rem", borderRadius: "0.75rem" }}>
```

## Adding New Features

### Creating a New Page

1. Create directory in `src/app/[page-name]/`
2. Add `page.tsx`:

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title - NORVEGE MINERALS AS",
  description: "Page description",
};

export default function PageName() {
  return (
    <div className="min-h-screen">
      {/* Content */}
    </div>
  );
}
```

3. Add to navigation in `Header.tsx`

### Creating a New Component

1. Create file in appropriate directory
2. Use TypeScript and proper typing:

```typescript
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

export default function Button({ label, onClick, variant = "primary" }: ButtonProps) {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {label}
    </button>
  );
}
```

### Adding Animations

Use Framer Motion for animations:

```typescript
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>
```

## Testing

### Manual Testing Checklist

- [ ] Test on desktop (Chrome, Firefox, Safari)
- [ ] Test on mobile (iOS Safari, Chrome)
- [ ] Test all navigation links
- [ ] Test contact form
- [ ] Check responsive design at different breakpoints
- [ ] Verify animations work smoothly
- [ ] Check accessibility (keyboard navigation, screen reader)

### Build Testing

Before deploying, always test the production build:

```bash
pnpm run build
pnpm run start
```

## Deployment

### Environment Variables

Create `.env.local` for local development:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# Add other environment variables as needed
```

### Deploying to Vercel

1. Push to `main` branch
2. Vercel will automatically deploy
3. Check deployment logs for errors

### Manual Deployment

```bash
pnpm run build
# Upload .next folder and other necessary files to server
```

## Troubleshooting

### Common Issues

**Build fails with TypeScript errors:**

```bash
pnpm run lint
# Fix reported errors
```

**Styles not updating:**

- Clear `.next` folder: `rm -rf .next`
- Restart dev server

**Images not loading:**

- Ensure images are in `public/` directory
- Use absolute paths: `/images/...`

## Performance Optimization

- Use Next.js Image component for all images
- Lazy load components when possible
- Minimize client-side JavaScript
- Use server components by default

## Accessibility

- Maintain WCAG AA contrast ratios
- Add alt text to all images
- Ensure keyboard navigation works
- Test with screen readers
- Respect `prefers-reduced-motion`

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## Getting Help

For questions or issues:

1. Check this documentation
2. Review existing code for examples
3. Consult the architecture documentation
4. Contact the development team
