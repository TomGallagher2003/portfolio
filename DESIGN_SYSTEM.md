# Portfolio Design System 2026

A modern design system based on 2026 web design trends, featuring dark glassmorphism, expressive typography, and an 8px spacing grid.

---

## Color Palette

### Primary Colors

| Name | Hex | HSL | Usage |
|------|-----|-----|-------|
| Deep Charcoal | `#0A0A0F` | hsl(240, 20%, 5%) | Primary background |
| Elevated Surface | `#14141A` | hsl(240, 15%, 9%) | Card backgrounds, elevated surfaces |
| Surface Tertiary | `#1E1E26` | hsl(240, 12%, 13%) | Hover states, tertiary surfaces |
| Electric Blue | `#0066FF` | hsl(216, 100%, 50%) | Primary accent, CTAs, links |
| Vivid Purple | `#6B3FA0` | hsl(270, 43%, 44%) | Secondary accent, gradients |

### Neutral Colors

| Name | Hex | HSL | Usage |
|------|-----|-----|-------|
| Text Primary | `#F5F5F7` | hsl(240, 10%, 97%) | Headings, primary text |
| Text Secondary | `#A1A1AA` | hsl(240, 5%, 65%) | Body text, descriptions |
| Text Muted | `#71717A` | hsl(240, 4%, 46%) | Captions, placeholders |
| Border Subtle | `#27272A` | hsl(240, 4%, 16%) | Dividers, subtle borders |
| Border Accent | `#3F3F46` | hsl(240, 4%, 26%) | Active borders, focus rings |

### Semantic Colors

| Name | Hex | Usage |
|------|-----|-------|
| Success | `#22C55E` | Success states, confirmations |
| Warning | `#F59E0B` | Warning messages, caution states |
| Error | `#EF4444` | Error states, destructive actions |
| Info | `#3B82F6` | Informational messages |

### Gradient Definitions

```css
/* Primary Gradient - Hero sections, CTAs */
--gradient-primary: linear-gradient(135deg, #0066FF 0%, #6B3FA0 100%);

/* Ambient Gradient - Background orbs for glassmorphism */
--gradient-ambient-blue: radial-gradient(circle at 20% 80%, rgba(0, 102, 255, 0.15) 0%, transparent 50%);
--gradient-ambient-purple: radial-gradient(circle at 80% 20%, rgba(107, 63, 160, 0.15) 0%, transparent 50%);

/* Surface Gradient - Subtle card backgrounds */
--gradient-surface: linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);

/* Text Gradient - Accent headings */
--gradient-text: linear-gradient(90deg, #0066FF 0%, #6B3FA0 50%, #0066FF 100%);
```

---

## Typography

### Font Stack

```css
/* Primary - Headings & UI */
--font-primary: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Secondary - Body Text */
--font-secondary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Mono - Code Snippets */
--font-mono: 'JetBrains Mono', 'Fira Code', 'SF Mono', monospace;
```

### Type Scale (Based on 1.25 Major Third)

| Level | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| Display | 72px / 4.5rem | 700 | 1.0 | -0.02em | Hero headlines |
| H1 | 48px / 3rem | 700 | 1.1 | -0.015em | Page titles |
| H2 | 36px / 2.25rem | 600 | 1.2 | -0.01em | Section headings |
| H3 | 28px / 1.75rem | 600 | 1.3 | -0.005em | Card titles |
| H4 | 22px / 1.375rem | 600 | 1.4 | 0 | Subsection titles |
| Body Large | 18px / 1.125rem | 400 | 1.6 | 0 | Lead paragraphs |
| Body | 16px / 1rem | 400 | 1.6 | 0 | Default body text |
| Body Small | 14px / 0.875rem | 400 | 1.5 | 0 | Secondary text |
| Caption | 12px / 0.75rem | 500 | 1.4 | 0.02em | Labels, metadata |
| Overline | 11px / 0.6875rem | 600 | 1.2 | 0.1em | Category labels |

### CSS Custom Properties

```css
:root {
  /* Font Families */
  --font-primary: 'Space Grotesk', sans-serif;
  --font-secondary: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Font Sizes */
  --text-display: 4.5rem;
  --text-h1: 3rem;
  --text-h2: 2.25rem;
  --text-h3: 1.75rem;
  --text-h4: 1.375rem;
  --text-body-lg: 1.125rem;
  --text-body: 1rem;
  --text-body-sm: 0.875rem;
  --text-caption: 0.75rem;
  --text-overline: 0.6875rem;

  /* Font Weights */
  --weight-regular: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;

  /* Line Heights */
  --leading-none: 1;
  --leading-tight: 1.1;
  --leading-snug: 1.2;
  --leading-normal: 1.4;
  --leading-relaxed: 1.6;
}
```

### Responsive Typography

```css
/* Mobile (< 768px) */
--text-display: 2.5rem;
--text-h1: 2rem;
--text-h2: 1.75rem;
--text-h3: 1.5rem;

/* Tablet (768px - 1024px) */
--text-display: 3.5rem;
--text-h1: 2.5rem;
--text-h2: 2rem;
--text-h3: 1.625rem;

/* Desktop (> 1024px) */
/* Use default scale */
```

---

## Spacing System

### 8px Grid Foundation

All spacing values are multiples of 8px for visual consistency.

| Token | Value | Pixels | Usage |
|-------|-------|--------|-------|
| `--space-0` | 0 | 0px | Reset |
| `--space-1` | 0.25rem | 4px | Minimal gaps, icon spacing |
| `--space-2` | 0.5rem | 8px | Tight spacing, inline elements |
| `--space-3` | 0.75rem | 12px | Compact padding |
| `--space-4` | 1rem | 16px | Default padding, card content |
| `--space-5` | 1.5rem | 24px | Section padding (mobile) |
| `--space-6` | 2rem | 32px | Component gaps |
| `--space-8` | 3rem | 48px | Section spacing |
| `--space-10` | 4rem | 64px | Large section gaps |
| `--space-12` | 5rem | 80px | Page section spacing |
| `--space-16` | 8rem | 128px | Hero/footer spacing |

### Semantic Spacing

```css
:root {
  /* Component Internal Spacing */
  --padding-button: var(--space-3) var(--space-5);
  --padding-card: var(--space-5);
  --padding-input: var(--space-3) var(--space-4);

  /* Layout Spacing */
  --gap-grid: var(--space-6);
  --gap-stack: var(--space-4);
  --gap-inline: var(--space-2);

  /* Section Spacing */
  --section-padding-y: var(--space-12);
  --section-padding-x: var(--space-6);

  /* Container Max Widths */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-2xl: 1536px;
}
```

### Spacing Best Practices

1. **Internal < External**: Padding within elements should be less than or equal to margin between elements
2. **Consistent Rhythm**: Use the 8px grid consistently across all components
3. **Responsive Scaling**: Reduce spacing proportionally on smaller screens

---

## Component Styles

### Glassmorphism Cards

```css
.glass-card {
  /* Background */
  background: rgba(20, 20, 26, 0.7);

  /* Blur Effect */
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);

  /* Border */
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;

  /* Shadow */
  box-shadow:
    0 4px 24px -1px rgba(0, 0, 0, 0.2),
    0 0 1px 0 rgba(255, 255, 255, 0.05) inset;

  /* Padding */
  padding: var(--space-5);
}

.glass-card:hover {
  background: rgba(20, 20, 26, 0.8);
  border-color: rgba(255, 255, 255, 0.12);
  transform: translateY(-4px);
  box-shadow:
    0 12px 40px -4px rgba(0, 0, 0, 0.3),
    0 0 1px 0 rgba(255, 255, 255, 0.1) inset;
}

/* Fallback for browsers without backdrop-filter */
@supports not (backdrop-filter: blur(16px)) {
  .glass-card {
    background: rgba(20, 20, 26, 0.95);
  }
}
```

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: var(--gradient-primary);
  color: var(--text-primary);
  font-family: var(--font-primary);
  font-size: var(--text-body);
  font-weight: var(--weight-semibold);
  padding: var(--space-3) var(--space-6);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px -4px rgba(0, 102, 255, 0.4);
}

.btn-primary:active {
  transform: translateY(0);
}

/* Ghost Button */
.btn-ghost {
  background: transparent;
  color: var(--text-primary);
  font-family: var(--font-primary);
  font-size: var(--text-body);
  font-weight: var(--weight-medium);
  padding: var(--space-3) var(--space-5);
  border: 1px solid var(--border-accent);
  border-radius: 8px;
  cursor: pointer;
  transition: all 200ms ease;
}

.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--color-electric-blue);
}
```

### Navigation

```css
/* Desktop Sidebar */
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  width: 80px;
  height: 100vh;
  background: rgba(10, 10, 15, 0.8);
  backdrop-filter: blur(20px);
  border-right: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space-6) 0;
}

/* Mobile Hamburger */
.hamburger-menu {
  display: none;
  position: fixed;
  top: var(--space-4);
  right: var(--space-4);
  z-index: 1000;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(20, 20, 26, 0.9);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

@media (max-width: 768px) {
  .sidebar { display: none; }
  .hamburger-menu { display: flex; }
}
```

### Bento Grid Layout

```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-4);
}

/* Featured item spans 2 columns */
.bento-item--featured {
  grid-column: span 2;
  grid-row: span 2;
}

/* Responsive grid */
@media (max-width: 1024px) {
  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .bento-grid {
    grid-template-columns: 1fr;
  }
  .bento-item--featured {
    grid-column: span 1;
    grid-row: span 1;
  }
}
```

---

## Shadows & Elevation

| Level | Shadow | Usage |
|-------|--------|-------|
| Flat | none | Default state |
| Raised | `0 2px 8px -2px rgba(0,0,0,0.2)` | Cards at rest |
| Elevated | `0 4px 24px -4px rgba(0,0,0,0.25)` | Dropdowns, tooltips |
| Floating | `0 12px 40px -8px rgba(0,0,0,0.3)` | Modals, dialogs |
| Hover | `0 8px 32px -4px rgba(0,0,0,0.25)` | Card hover states |

### Glow Effects

```css
/* Blue Glow - Primary actions */
--glow-blue: 0 0 20px rgba(0, 102, 255, 0.3);

/* Purple Glow - Secondary elements */
--glow-purple: 0 0 20px rgba(107, 63, 160, 0.3);

/* Combined Glow - Featured elements */
--glow-accent:
  0 0 20px rgba(0, 102, 255, 0.2),
  0 0 40px rgba(107, 63, 160, 0.15);
```

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-none` | 0 | Sharp corners |
| `--radius-sm` | 4px | Small elements, tags |
| `--radius-md` | 8px | Buttons, inputs |
| `--radius-lg` | 12px | Cards (mobile) |
| `--radius-xl` | 16px | Cards (desktop) |
| `--radius-2xl` | 24px | Large containers, modals |
| `--radius-full` | 9999px | Pills, avatars |

---

## Animation & Motion

### Timing Functions

```css
:root {
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

### Duration Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--duration-instant` | 50ms | Micro-feedback |
| `--duration-fast` | 150ms | Button states |
| `--duration-normal` | 250ms | Card hovers, transitions |
| `--duration-slow` | 400ms | Page transitions |
| `--duration-slower` | 600ms | Complex animations |

### Standard Transitions

```css
/* Hover lift effect */
.hover-lift {
  transition: transform var(--duration-normal) var(--ease-default),
              box-shadow var(--duration-normal) var(--ease-default);
}
.hover-lift:hover {
  transform: translateY(-4px);
}

/* Scale on press */
.press-scale:active {
  transform: scale(0.98);
}

/* Fade in */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Breakpoints

| Name | Range | Target |
|------|-------|--------|
| Mobile S | 320px - 374px | Small phones |
| Mobile | 375px - 639px | Standard phones |
| Tablet | 640px - 1023px | Tablets, small laptops |
| Desktop | 1024px - 1439px | Laptops, desktops |
| Wide | 1440px+ | Large monitors |

### Media Query Tokens

```css
/* Mobile first approach */
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

---

## Accessibility

### Focus States

```css
/* Focus ring for keyboard navigation */
:focus-visible {
  outline: 2px solid var(--color-electric-blue);
  outline-offset: 2px;
}

/* Remove default outline for mouse users */
:focus:not(:focus-visible) {
  outline: none;
}
```

### Color Contrast Requirements

- **Normal Text**: Minimum 4.5:1 contrast ratio (WCAG AA)
- **Large Text (18px+)**: Minimum 3:1 contrast ratio
- **UI Components**: Minimum 3:1 contrast ratio

### Touch Targets

- Minimum touch target size: **48px x 48px**
- Minimum spacing between targets: **8px**

---

## CSS Custom Properties Summary

```css
:root {
  /* Colors - Background */
  --color-bg-primary: #0A0A0F;
  --color-bg-elevated: #14141A;
  --color-bg-tertiary: #1E1E26;

  /* Colors - Text */
  --color-text-primary: #F5F5F7;
  --color-text-secondary: #A1A1AA;
  --color-text-muted: #71717A;

  /* Colors - Accent */
  --color-electric-blue: #0066FF;
  --color-vivid-purple: #6B3FA0;

  /* Colors - Border */
  --color-border-subtle: #27272A;
  --color-border-accent: #3F3F46;

  /* Colors - Semantic */
  --color-success: #22C55E;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  --color-info: #3B82F6;

  /* Typography */
  --font-primary: 'Space Grotesk', sans-serif;
  --font-secondary: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-8: 3rem;
  --space-10: 4rem;
  --space-12: 5rem;
  --space-16: 8rem;

  /* Radii */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-raised: 0 2px 8px -2px rgba(0,0,0,0.2);
  --shadow-elevated: 0 4px 24px -4px rgba(0,0,0,0.25);
  --shadow-floating: 0 12px 40px -8px rgba(0,0,0,0.3);

  /* Motion */
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 400ms;
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## Sources & References

This design system was compiled from 2026 web design research:

- [Lounge Lizard - 2026 Web Design Color Trends](https://www.loungelizard.com/blog/web-design-color-trends/)
- [Wix - Website Color Trends 2026](https://www.wix.com/blog/website-color-trends)
- [Hostinger - Web Design Trends 2026](https://www.hostinger.com/tutorials/web-design-trends)
- [Cieden - Spacing Best Practices](https://cieden.com/book/sub-atomic/spacing/spacing-best-practices)
- [USWDS - Spacing Units](https://designsystem.digital.gov/design-tokens/spacing-units/)
- [Atlassian Design - Spacing](https://atlassian.design/foundations/spacing/)
- [Medium - Glassmorphism Effects 2026](https://medium.com/@Kinetools/how-to-create-modern-ui-with-glassmorphism-effects-a-complete-2026-guide-2b1d71856542)
- [Medium - Dark Glassmorphism 2026](https://medium.com/@developer_89726/dark-glassmorphism-the-aesthetic-that-will-define-ui-in-2026-93aa4153088f)
- [Todaymade - Modern Font Pairings](https://www.todaymade.com/blog/modern-font-pairings)
- [Awwwards - Portfolio Websites](https://www.awwwards.com/websites/portfolio/)
- [Tech-RZ - Dark Mode Best Practices 2026](https://www.tech-rz.com/blog/dark-mode-design-best-practices-in-2026/)

---

*Last Updated: 2026-01-27*
