# NORVEGE MINERALS AS - Design System

## Color System

### Primary Colors

Inspired by Norwegian geology and minerals:

```css
:root {
  /* Deep Navy - Primary dark background */
  --color-navy-900: #0a1628;
  --color-navy-800: #0f1f3a;
  --color-navy-700: #1a2f4d;

  /* Warm Sand - Light neutral background */
  --color-sand-50: #faf8f5;
  --color-sand-100: #f5f1ea;
  --color-sand-200: #e8e0d5;

  /* Copper/Gold - Mineral accent */
  --color-copper-400: #d4a574;
  --color-copper-500: #c8935a;
  --color-copper-600: #b67d42;

  /* Slate Blue - Secondary accent */
  --color-slate-400: #7c9ab5;
  --color-slate-500: #5a7a9a;
  --color-slate-600: #3d5a7a;

  /* Semantic Colors */
  --color-success: #4a7c59;
  --color-info: #5a7a9a;
  --color-warning: #c8935a;

  /* Neutral Grays */
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-300: #d1d5db;
  --color-gray-400: #9ca3af;
  --color-gray-500: #6b7280;
  --color-gray-600: #4b5563;
  --color-gray-700: #374151;
  --color-gray-800: #1f2937;
  --color-gray-900: #111827;
}
```

### Tailwind Theme Extension

```javascript
// tailwind.config.ts
colors: {
  navy: {
    900: '#0a1628',
    800: '#0f1f3a',
    700: '#1a2f4d',
  },
  sand: {
    50: '#faf8f5',
    100: '#f5f1ea',
    200: '#e8e0d5',
  },
  copper: {
    400: '#d4a574',
    500: '#c8935a',
    600: '#b67d42',
  },
  slate: {
    400: '#7c9ab5',
    500: '#5a7a9a',
    600: '#3d5a7a',
  },
}
```

## Typography

### Font Families

- **Headings**: Inter (sans-serif) - modern, strong, professional
- **Body**: Inter (sans-serif) - high readability

### Font Scale

```css
/* Headings */
.h1 {
  font-size: 3.5rem; /* 56px */
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.h2 {
  font-size: 2.5rem; /* 40px */
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.h3 {
  font-size: 2rem; /* 32px */
  line-height: 1.25;
  font-weight: 600;
}

.h4 {
  font-size: 1.5rem; /* 24px */
  line-height: 1.3;
  font-weight: 600;
}

.h5 {
  font-size: 1.25rem; /* 20px */
  line-height: 1.4;
  font-weight: 600;
}

.h6 {
  font-size: 1rem; /* 16px */
  line-height: 1.5;
  font-weight: 600;
}

/* Body Text */
.body-large {
  font-size: 1.125rem; /* 18px */
  line-height: 1.7;
}

.body {
  font-size: 1rem; /* 16px */
  line-height: 1.6;
}

.body-small {
  font-size: 0.875rem; /* 14px */
  line-height: 1.5;
}
```

### Mobile Typography Scale

```css
@media (max-width: 768px) {
  .h1 {
    font-size: 2.5rem;
  } /* 40px */
  .h2 {
    font-size: 2rem;
  } /* 32px */
  .h3 {
    font-size: 1.5rem;
  } /* 24px */
  .h4 {
    font-size: 1.25rem;
  } /* 20px */
}
```

## Spacing & Layout

### Section Padding

```css
/* Desktop */
--section-padding-y: 6rem; /* 96px */
--section-padding-x: 2rem; /* 32px */

/* Mobile */
@media (max-width: 768px) {
  --section-padding-y: 3rem; /* 48px */
  --section-padding-x: 1rem; /* 16px */
}
```

### Content Width

```css
--content-max-width: 1280px; /* max-w-6xl */
--content-narrow: 896px; /* max-w-4xl */
--content-wide: 1536px; /* max-w-7xl */
```

### Grid System

- Standard grid: 12 columns
- Gap: 1.5rem (24px) on desktop, 1rem (16px) on mobile
- Card grids: 3 columns on desktop, 2 on tablet, 1 on mobile

## Component Tokens

### Border Radius

```css
--radius-sm: 0.375rem; /* 6px */
--radius-md: 0.5rem; /* 8px */
--radius-lg: 0.75rem; /* 12px */
--radius-xl: 1rem; /* 16px */
--radius-pill: 9999px;
```

### Shadows

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
```

### Focus Styles

```css
--focus-ring: 2px solid var(--color-copper-500);
--focus-offset: 2px;
```

### Animation Tokens

```css
--duration-fast: 150ms;
--duration-normal: 250ms;
--duration-slow: 350ms;

--easing-standard: cubic-bezier(0.4, 0, 0.2, 1);
--easing-decelerate: cubic-bezier(0, 0, 0.2, 1);
--easing-accelerate: cubic-bezier(0.4, 0, 1, 1);
```

## Usage Guidelines

### Background Patterns

- **Hero sections**: Deep navy (--color-navy-900) with subtle texture
- **Content sections**: Alternating sand (--color-sand-50) and white
- **Footer**: Navy (--color-navy-800)

### Text Colors

- **On dark backgrounds**: White or sand-50
- **On light backgrounds**: Navy-900 or gray-800
- **Accent text**: Copper-600 for links and highlights

### Interactive Elements

- **Primary buttons**: Copper-600 background, white text
- **Secondary buttons**: Transparent with copper-600 border
- **Hover states**: Slight scale (1.02) + shadow increase
- **Active states**: Scale (0.98)

### Cards

- Background: White
- Border: 1px solid gray-200
- Radius: --radius-lg
- Shadow: --shadow-md
- Hover: --shadow-lg + slight lift

## Accessibility

### Contrast Ratios

All text must meet WCAG AA standards:

- Normal text: 4.5:1 minimum
- Large text (18px+): 3:1 minimum
- Interactive elements: 3:1 minimum

### Motion

Respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```
