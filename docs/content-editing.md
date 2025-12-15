# NORVEGE MINERALS AS - Content Editing Guide

## Overview

This guide explains how to update content on the NORVEGE MINERALS AS website. Most content is stored in TypeScript/JSON files for easy editing.

## Updating Text Content

### Home Page Sections

#### Hero Section

**File**: `src/sections/HeroSection.tsx`

Update the main heading, subheading, and badge text:

```typescript
// Line ~47: Main heading
<h1>Critical Minerals for the Energy Transition</h1>

// Line ~62: Subheading
<p>Exploring and developing sustainable mineral resources...</p>

// Line ~41: Badge text
<span>Active exploration across Norway</span>
```

#### Stats Section

**File**: `src/sections/StatsSection.tsx`

Update statistics (lines 5-24):

```typescript
const stats = [
  {
    number: "15+",
    label: "Active Licenses",
    description: "Exploration licenses across Norway",
  },
  // ... add or modify stats
];
```

### Projects

#### Projects List

**File**: `src/app/projects/page.tsx`

Update project data (lines 11-58):

```typescript
const projects = [
  {
    slug: "nordfjord-project",
    name: "Nordfjord Project",
    region: "Sogn og Fjordane",
    // ... other fields
  },
  // Add new projects here
];
```

#### Projects Teaser (Home Page)

**File**: `src/sections/ProjectsTeaser.tsx`

Update featured projects (lines 6-32).

### About Page

**File**: `src/app/about/page.tsx`

- **Company story**: Lines 30-50
- **Timeline**: Lines 60-75
- **Team members**: Lines 120-135

### ESG Page

**File**: `src/app/esg/page.tsx`

Update ESG content sections:

- Environmental: Lines 50-85
- Social: Lines 90-125
- Governance: Lines 130-165

### Investors Page

**File**: `src/app/investors/page.tsx`

- **Investment summary**: Lines 30-45
- **Documents list**: Lines 13-17

```typescript
const documents = [
  { title: "Company Presentation 2024", type: "PDF", date: "2024-01-15" },
  // Add new documents here
];
```

### Contact Information

**File**: `src/components/layout/Footer.tsx`

Update company contact details (lines 30-35).

**File**: `src/app/contact/page.tsx`

Update contact information (lines 75-100).

## Adding New Pages

1. Create a new directory in `src/app/[page-name]/`
2. Add `page.tsx` with metadata and content
3. Add link to navigation in `src/components/layout/Header.tsx`

Example:

```typescript
// src/app/news/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News - NORVEGE MINERALS AS",
  description: "Latest news and updates",
};

export default function NewsPage() {
  return (
    <div className="min-h-screen">
      {/* Your content */}
    </div>
  );
}
```

## Updating Navigation

**File**: `src/components/layout/Header.tsx`

Add/remove navigation links (lines 17-24):

```typescript
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  // Add new links here
];
```

## Styling Guidelines

### Using Design System Colors

Always use CSS variables for colors:

```typescript
style={{ color: "var(--color-navy-900)" }}
style={{ background: "var(--color-sand-50)" }}
style={{ color: "var(--color-copper-600)" }}
```

### Common Components

- **Buttons**: Use `.btn .btn-primary` or `.btn .btn-secondary` classes
- **Cards**: Use `.card` class for consistent styling
- **Sections**: Use `.section` class for consistent padding

## Images

Place images in `public/` directory:

```
public/
├── images/
│   ├── projects/
│   ├── team/
│   └── logos/
```

Reference in code:

```typescript
<Image src="/images/projects/nordfjord.jpg" alt="..." />
```

## Metadata & SEO

Update page metadata in each `page.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Page Title - NORVEGE MINERALS AS",
  description: "Page description for SEO",
};
```

## Best Practices

1. **Keep content concise**: Users scan, they don't read every word
2. **Use headings**: Break up content with clear headings
3. **Be consistent**: Use the same terminology throughout
4. **Update dates**: Keep timeline and document dates current
5. **Test links**: Ensure all internal links work after updates
