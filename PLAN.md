# Portfolio Redesign Implementation Plan

Based on `DESIGN_SYSTEM.md` specifications for a modern 2026 dark glassmorphism portfolio.

---

## Pre-Implementation Risk Analysis

### Current CSS Framework Assessment

**Framework**: Material-UI (MUI) v6 with @emotion/styled
**Not using**: Tailwind CSS

#### Advantages of Current Setup
- MUI's `sx` prop provides type-safe inline styling
- Theme system already configured in `src/theme/theme.js`
- Component-based styling keeps styles co-located with components
- Built-in responsive utilities via `useMediaQuery` and breakpoint syntax
- Existing glassmorphism CSS classes in `index.css` can be updated

#### Identified Risks

| Risk | Severity | Mitigation |
|------|----------|------------|
| **Light-to-Dark Theme Transition** | HIGH | Current glassmorphism uses white backgrounds (`rgba(255,255,255,0.1)`). DESIGN_SYSTEM.md specifies dark backgrounds (`rgba(20,20,26,0.7)`). Must update all components simultaneously to avoid visual inconsistency. |
| **CSS Variable Conflicts** | MEDIUM | Existing `index.css` defines `--glass-bg` with light values. Need to update these without breaking existing usage. |
| **MUI Theme Override Complexity** | MEDIUM | MUI's theme structure differs from CSS custom properties. Must map DESIGN_SYSTEM.md tokens to MUI's `createTheme` API correctly. |
| **Font Loading Performance** | LOW | Adding Space Grotesk, Inter, and JetBrains Mono from Google Fonts will add ~150KB. Use `font-display: swap` to prevent FOIT. |
| **Browser Backdrop-Filter Support** | LOW | Already have `@supports` fallbacks in place. Just need to update fallback colors for dark theme. |
| **Existing Component Breakage** | MEDIUM | 7 components use `glass-effect` class. All must be tested after CSS variable updates. |

#### Missing Dependencies
- **`new_bio.txt`** file does not exist - **ACTION REQUIRED**: Create this file with updated bio content before Phase 3

---

## Implementation Phases

### Phase 1: Foundation Updates
**Estimated Files Changed**: 3
**Risk Level**: Medium

#### 1.1 Update CSS Custom Properties
**File**: `react_portfolio_app/src/index.css`

**Tasks**:
- [ ] 1.1.1 Replace light glassmorphism variables with dark theme values from DESIGN_SYSTEM.md
- [ ] 1.1.2 Add new CSS custom properties for colors, spacing, and typography
- [ ] 1.1.3 Update `--glass-bg` to `rgba(20, 20, 26, 0.7)`
- [ ] 1.1.4 Update `--glass-border` to `rgba(255, 255, 255, 0.08)`
- [ ] 1.1.5 Update fallback backgrounds for unsupported browsers
- [ ] 1.1.6 Add ambient gradient backgrounds for depth

**CSS Changes**:
```css
/* Before */
--glass-bg: rgba(255, 255, 255, 0.1);
--glass-border: rgba(255, 255, 255, 0.2);

/* After */
--glass-bg: rgba(20, 20, 26, 0.7);
--glass-border: rgba(255, 255, 255, 0.08);
```

#### 1.2 Update MUI Theme
**File**: `react_portfolio_app/src/theme/theme.js`

**Tasks**:
- [ ] 1.2.1 Update `palette.background.default` to `#0A0A0F` (Deep Charcoal)
- [ ] 1.2.2 Update `palette.background.paper` to `#14141A` (Elevated Surface)
- [ ] 1.2.3 Update `palette.text.primary` to `#F5F5F7`
- [ ] 1.2.4 Update `palette.text.secondary` to `#A1A1AA`
- [ ] 1.2.5 Add Space Grotesk and Inter to typography fontFamily
- [ ] 1.2.6 Update semantic colors (success, warning, error) to match DESIGN_SYSTEM.md

#### 1.3 Add Google Fonts
**File**: `react_portfolio_app/public/index.html`

**Tasks**:
- [ ] 1.3.1 Add preconnect links for Google Fonts
- [ ] 1.3.2 Add Space Grotesk (400, 500, 600, 700)
- [ ] 1.3.3 Add Inter (400, 500, 600)
- [ ] 1.3.4 Add JetBrains Mono (400, 500) for code snippets

**HTML to add**:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
```

#### 1.4 Build Verification
- [ ] 1.4.1 Run `npm run build` and verify no errors
- [ ] 1.4.2 Test in browser - verify dark background renders

---

### Phase 2: Glassmorphism Card Components
**Estimated Files Changed**: 3
**Risk Level**: Medium

#### 2.1 Update Project Card
**File**: `react_portfolio_app/src/components/Project.jsx`

**Tasks**:
- [ ] 2.1.1 Update card background to dark glassmorphism (`rgba(20, 20, 26, 0.7)`)
- [ ] 2.1.2 Update `backdrop-filter: blur(16px)` per DESIGN_SYSTEM.md
- [ ] 2.1.3 Update border to `rgba(255, 255, 255, 0.08)`
- [ ] 2.1.4 Update hover state with increased opacity and border brightness
- [ ] 2.1.5 Update text colors to light palette (`#F5F5F7` primary, `#A1A1AA` secondary)
- [ ] 2.1.6 Remove white `.MuiCardContent-root` background override
- [ ] 2.1.7 Add inset box-shadow for glass depth effect
- [ ] 2.1.8 Verify WCAG AA contrast (4.5:1 minimum)

**Key Style Changes**:
```jsx
sx={{
  background: 'rgba(20, 20, 26, 0.7)',
  backdropFilter: 'blur(16px)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  boxShadow: '0 4px 24px -1px rgba(0, 0, 0, 0.2), 0 0 1px 0 rgba(255, 255, 255, 0.05) inset',
  '&:hover': {
    background: 'rgba(20, 20, 26, 0.8)',
    borderColor: 'rgba(255, 255, 255, 0.12)',
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 40px -4px rgba(0, 0, 0, 0.3), 0 0 1px 0 rgba(255, 255, 255, 0.1) inset',
  },
}}
```

#### 2.2 Update SkillCategory Card
**File**: `react_portfolio_app/src/components/SkillCategory.js`

**Tasks**:
- [ ] 2.2.1 Apply same dark glassmorphism styles as Project card
- [ ] 2.2.2 Update typography colors for dark background
- [ ] 2.2.3 Update CheckCircleIcon color for visibility on dark
- [ ] 2.2.4 Remove `backgroundColor: 'rgba(255, 255, 255, 0.9)'` override

#### 2.3 Update ProjectDetailsPage
**File**: `react_portfolio_app/src/components/ProjectDetailsPage.jsx`

**Tasks**:
- [ ] 2.3.1 Apply dark glassmorphism to detail cards if present
- [ ] 2.3.2 Update text colors for dark theme
- [ ] 2.3.3 Ensure image contrast works on dark background

#### 2.4 Build Verification
- [ ] 2.4.1 Run `npm run build` and verify no errors
- [ ] 2.4.2 Visual test all card components
- [ ] 2.4.3 Test hover animations

---

### Phase 3: Bio Content Update
**Estimated Files Changed**: 2
**Risk Level**: Low

#### 3.0 Prerequisites
- [ ] **BLOCKER**: Create `new_bio.txt` in repository root with updated bio content

**Suggested content for `new_bio.txt`**:
```
Hi! I'm Tom Gallagher, a [year] Software Engineering student at the University of Canterbury.

[Your interests, skills, and what you're passionate about]

[Current focus or projects you're working on]

[What you're looking for - internships, collaborations, etc.]
```

#### 3.1 Update AboutMe Component
**File**: `react_portfolio_app/src/components/AboutMe.jsx`

**Tasks**:
- [ ] 3.1.1 Read content from `new_bio.txt` (or hardcode if preferred)
- [ ] 3.1.2 Replace placeholder text: "Hi! I'm Tom Gallagher, a third-year Software Engineering student at UC. Finish the description."
- [ ] 3.1.3 Update typography colors for dark theme (`#F5F5F7` heading, `#A1A1AA` body)
- [ ] 3.1.4 Update Avatar border color to match new accent colors
- [ ] 3.1.5 Consider adding glassmorphism card wrapper around bio section

#### 3.2 Build Verification
- [ ] 3.2.1 Run `npm run build` and verify no errors
- [ ] 3.2.2 Visual verification of bio section

---

### Phase 4: Responsive Navigation Enhancement
**Estimated Files Changed**: 2
**Risk Level**: Low

> **Note**: Responsive navigation is already implemented (`HamburgerMenu.jsx` + `Navbar.jsx`). This phase focuses on aligning styles with DESIGN_SYSTEM.md dark theme.

#### 4.1 Update Desktop Sidebar
**File**: `react_portfolio_app/src/components/Navbar.jsx`

**Tasks**:
- [ ] 4.1.1 Update AppBar background to dark glassmorphism (`rgba(10, 10, 15, 0.8)`)
- [ ] 4.1.2 Update `backdrop-filter: blur(20px)` per DESIGN_SYSTEM.md
- [ ] 4.1.3 Update border to `rgba(255, 255, 255, 0.06)`
- [ ] 4.1.4 Update button styles for dark theme (text color `#F5F5F7`)
- [ ] 4.1.5 Update hover states with subtle background highlight
- [ ] 4.1.6 Remove `backgroundColor: 'rgba(0, 102, 255, 0.15)'` - use darker tone
- [ ] 4.1.7 Update IconButton backgrounds for dark theme

**Key Style Changes**:
```jsx
sx={{
  backgroundColor: 'rgba(10, 10, 15, 0.8)',
  backdropFilter: 'blur(20px)',
  borderRight: '1px solid rgba(255, 255, 255, 0.06)',
}}
```

#### 4.2 Update Mobile Hamburger Menu
**File**: `react_portfolio_app/src/components/HamburgerMenu.jsx`

**Tasks**:
- [ ] 4.2.1 Update Drawer PaperProps to dark glassmorphism
- [ ] 4.2.2 Change `backgroundColor: 'rgba(255, 255, 255, 0.95)'` to `'rgba(20, 20, 26, 0.95)'`
- [ ] 4.2.3 Update ListItemButton hover styles for dark theme
- [ ] 4.2.4 Update Divider color for visibility on dark
- [ ] 4.2.5 Ensure Download CV button uses gradient background per DESIGN_SYSTEM.md

#### 4.3 Build Verification
- [ ] 4.3.1 Run `npm run build` and verify no errors
- [ ] 4.3.2 Test responsive breakpoint (< 600px shows hamburger, >= 600px shows sidebar)
- [ ] 4.3.3 Test drawer open/close animations
- [ ] 4.3.4 Test keyboard navigation (Escape to close)

---

### Phase 5: Global Page Updates
**Estimated Files Changed**: 4
**Risk Level**: Low

#### 5.1 Update Home Page
**File**: `react_portfolio_app/src/components/Home.jsx`

**Tasks**:
- [ ] 5.1.1 Update page background color if not inherited from theme
- [ ] 5.1.2 Add ambient gradient orbs for visual depth (optional enhancement)
- [ ] 5.1.3 Verify all text colors work on dark background

#### 5.2 Update Contact Page
**File**: `react_portfolio_app/src/components/ContactPage.jsx`

**Tasks**:
- [ ] 5.2.1 Apply dark theme colors
- [ ] 5.2.2 Update any form inputs for dark theme (if present)

#### 5.3 Update Skills Page
**File**: `react_portfolio_app/src/components/Skills.jsx`

**Tasks**:
- [ ] 5.3.1 Verify section headings use correct dark theme colors
- [ ] 5.3.2 Check grid layout on dark background

#### 5.4 Update ProjectList Page
**File**: `react_portfolio_app/src/components/ProjectList.jsx`

**Tasks**:
- [ ] 5.4.1 Verify section works with updated Project cards
- [ ] 5.4.2 Update any standalone text colors

#### 5.5 Build Verification
- [ ] 5.5.1 Run `npm run build` and verify no errors
- [ ] 5.5.2 Full visual walkthrough of all pages

---

### Phase 6: Testing & Polish
**Estimated Files Changed**: 0 (testing only)
**Risk Level**: Low

#### 6.1 Cross-Browser Testing
- [ ] 6.1.1 Test Chrome (latest) - verify `backdrop-filter` works
- [ ] 6.1.2 Test Firefox (latest) - verify fallback renders correctly
- [ ] 6.1.3 Test Safari (latest) - verify `-webkit-backdrop-filter` works
- [ ] 6.1.4 Test Edge (latest)

#### 6.2 Responsive Testing
- [ ] 6.2.1 Test 320px viewport (Mobile S)
- [ ] 6.2.2 Test 375px viewport (Mobile)
- [ ] 6.2.3 Test 768px viewport (Tablet)
- [ ] 6.2.4 Test 1024px viewport (Desktop)
- [ ] 6.2.5 Test 1440px viewport (Wide)

#### 6.3 Accessibility Testing
- [ ] 6.3.1 Run Lighthouse accessibility audit
- [ ] 6.3.2 Verify all text meets WCAG AA contrast (4.5:1)
- [ ] 6.3.3 Test keyboard navigation throughout site
- [ ] 6.3.4 Verify touch targets are >= 48px

#### 6.4 Performance Testing
- [ ] 6.4.1 Run Lighthouse performance audit
- [ ] 6.4.2 Verify fonts load without blocking render
- [ ] 6.4.3 Check for layout shift during font load

#### 6.5 Final Build & Deploy
- [ ] 6.5.1 Run `npm run build` - final production build
- [ ] 6.5.2 Test production build locally
- [ ] 6.5.3 Commit all changes
- [ ] 6.5.4 Push to branch
- [ ] 6.5.5 Deploy (when ready)

---

## File Change Summary

| File | Phase | Changes |
|------|-------|---------|
| `src/index.css` | 1 | Update CSS custom properties for dark glassmorphism |
| `src/theme/theme.js` | 1 | Update MUI theme colors and typography |
| `public/index.html` | 1 | Add Google Fonts links |
| `src/components/Project.jsx` | 2 | Dark glassmorphism card styles |
| `src/components/SkillCategory.js` | 2 | Dark glassmorphism card styles |
| `src/components/ProjectDetailsPage.jsx` | 2 | Dark theme updates |
| `src/components/AboutMe.jsx` | 3 | New bio content + dark theme |
| `src/components/Navbar.jsx` | 4 | Dark glassmorphism sidebar |
| `src/components/HamburgerMenu.jsx` | 4 | Dark glassmorphism drawer |
| `src/components/Home.jsx` | 5 | Dark theme text colors |
| `src/components/ContactPage.jsx` | 5 | Dark theme updates |
| `src/components/Skills.jsx` | 5 | Dark theme text colors |
| `src/components/ProjectList.jsx` | 5 | Dark theme updates |

**Total Files**: 13

---

## Blockers & Action Items

### Immediate Action Required

1. **Create `new_bio.txt`**
   The file `new_bio.txt` does not exist in the repository. Before starting Phase 3, create this file with your updated bio content.

   ```bash
   # Create the file at repository root
   /home/user/portfolio/new_bio.txt
   ```

---

## Rollback Plan

If issues are encountered:

1. **Git Reset**: All changes will be committed incrementally. Use `git revert` or `git reset` to undo specific commits.
2. **CSS Variables**: Original light theme values are documented above for quick restoration.
3. **MUI Theme**: Original theme values preserved in commit history.

---

## Success Criteria

- [ ] All pages render with dark glassmorphism theme
- [ ] Cards have frosted glass effect with blur
- [ ] Navigation works on mobile (hamburger) and desktop (sidebar)
- [ ] Bio content is updated from `new_bio.txt`
- [ ] All text meets WCAG AA contrast requirements
- [ ] No console errors or build warnings
- [ ] Lighthouse Performance >= 85
- [ ] Lighthouse Accessibility >= 90

---

*Plan Created: 2026-01-27*
*Based on: DESIGN_SYSTEM.md*
