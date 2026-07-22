# UI Redesign Design Spec — VanHille Math Education Platform

**Date:** 2026-07-22
**Scope:** Full visual redesign of all pages/components
**Stack:** Angular 5, Bootstrap 3.3.7, component-scoped CSS
**Audience:** Students and teachers (both)
**Style direction:** Friendly academic — warm, approachable, professional

---

## 1. Design System Foundation

### Color Palette

| Role | Name | Hex |
|------|------|-----|
| Primary | Warm royal blue | `#5B7FFF` |
| Secondary | Fresh mint green | `#38C172` |
| Accent | Warm amber | `#FF8C42` |
| Background | Soft lavender-gray | `#F7F8FD` |
| Surface | White | `#FFFFFF` |
| Border | Light gray | `#E5E7EB` |
| Text primary | Deep navy | `#1F2937` |
| Text secondary | Muted gray | `#6B7280` |
| Primary dark | Hover state | `#3D5FE0` |
| Secondary dark | Hover state | `#28A05A` |
| Danger | Red for destructive actions | `#EF4444` |

### Typography

- **Font family:** Rubik (Google Fonts), loaded with Hebrew + Latin subsets
- **Weights loaded:** 400, 500, 600, 700
- **Base size:** 16px
- **Scale:**
  - `h1`: 2rem / 700
  - `h2`: 1.6rem / 600
  - `h3`: 1.3rem / 600
  - Body: 1rem / 400
  - Labels/UI text: 1rem / 500
  - Small/meta: 0.875rem / 400

### Spacing

- Base unit: `8px`
- Common values: `8`, `12`, `16`, `24`, `32`, `48`, `64`px

### Shape & Elevation

| Name | Border Radius | Usage |
|------|---------------|-------|
| `sm` | `6px` | Inputs, badges, small buttons |
| `md` | `12px` | Buttons, form cards, table rows |
| `lg` | `20px` | Content cards, modals |
| `pill` | `999px` | Tags, status indicators |

| Name | Box Shadow | Usage |
|------|-----------|-------|
| Subtle | `0 1px 3px rgba(0,0,0,0.08)` | Hover states |
| Medium | `0 4px 16px rgba(0,0,0,0.10)` | Cards |
| Strong | `0 8px 24px rgba(0,0,0,0.14)` | Modals, dropdowns |

### CSS Implementation

All tokens are defined as CSS custom properties in `angular-src/src/styles.css` (currently empty). Bootstrap 3 global overrides are also written there. Component `.css` files reference these variables for all design decisions.

---

## 2. Global Bootstrap 3 Overrides

Applied in `styles.css`:

- `body`: Rubik font, `#F7F8FD` background, `#1F2937` text
- `.btn`: `12px` radius, Rubik 500, smooth transition
- `.btn-primary`: `#5B7FFF` background, white text, `#3D5FE0` hover
- `.btn-success`: `#38C172` background, `#28A05A` hover
- `.btn-danger`: `#EF4444` background
- `.form-control`: `6px` radius, `#E5E7EB` border, blue focus ring (`#5B7FFF`)
- `.jumbotron`: Remove default gray, reset padding (individual components override)
- `.modal-content`: `20px` radius, strong shadow
- `.dropdown-menu`: `12px` radius, medium shadow
- `.table > tbody > tr:hover`: `#F0F4FF` background

---

## 3. Component Designs

### 3.1 Navbar (`navbar/navbar.component.css`)

- Background: `#1F2937` (deep navy)
- Nav links: Rubik 500, `#D1D5DB`, white on hover
- Active link: colored left-border `4px solid #5B7FFF` (right-border for RTL)
- Brand text: `#FFFFFF`, Rubik 700
- Dropdown: `#FFFFFF` background, `12px` radius, medium shadow
- Dropdown items: `#1F2937` text, `#F0F4FF` hover background

### 3.2 Home (`home/home.component.css`)

- **Hero section** replaces jumbotron:
  - Gradient background: `linear-gradient(135deg, #5B7FFF 0%, #38C172 100%)`
  - Rounded bottom edge: `border-radius: 0 0 40px 40px`
  - White text, large heading (Rubik 700), subtitle in Rubik 400
  - Padding: `80px 24px`
- **Three-column cards** below hero:
  - White background, `20px` radius, medium shadow
  - Colored top border: card 1 = `#5B7FFF`, card 2 = `#38C172`, card 3 = `#FF8C42`
  - Padding: `32px 24px`
  - Text in `#1F2937`

### 3.3 Login & Register (`login/login.component.css`, `register/register.component.css`)

- Page background: `#F7F8FD`
- Centered card: max-width `420px`, `20px` radius, strong shadow, white surface
- Card padding: `48px 40px`
- Heading: Rubik 600, `#1F2937`
- Labels: Rubik 500, `#6B7280`, `12px` font-size
- Inputs: `6px` radius, `#E5E7EB` border, `#5B7FFF` focus ring
- Submit button: full-width, `12px` radius, primary blue, `46px` height
- Link text: `#5B7FFF`

### 3.4 Quiz — Questions (`vanhillequiz/questions/questions.component.css`)

- Outer wrapper: `#F7F8FD` background, centered max-width `720px`
- Question card: white, `20px` radius, medium shadow, `32px` padding
- Question counter: Rubik 500, `#6B7280`, small caps
- **Timer card**: `#FF8C42` background, white text, Rubik 700, `12px` radius
- **Radio options**: each option is a full-width selectable card
  - Default: white border `#E5E7EB`, `12px` radius
  - Selected: `#EEF2FF` background, `#5B7FFF` border
  - Hover: `#F7F8FD` background
- Navigation buttons:
  - Previous: outlined style (`#5B7FFF` border, transparent bg)
  - Next / Finish: filled primary blue

### 3.5 Reports (`vanhillequiz/report/`)

- Section headings: Rubik 600, colored left-border `4px solid #5B7FFF`
- Chart containers: white card, `20px` radius, medium shadow, `24px` padding
- Data value labels: Rubik 500, `#1F2937`
- Table cells: Rubik 400, `#1F2937`, subtle row hover `#F0F4FF`

### 3.6 Cloud Links (`cloudlinks/cloudlinks.component.css`)

- Page header: same gradient hero style as Home (shorter, `48px` padding)
- Table rows: `#FFFFFF`, hover `#F0F4FF`
- Edit button: small, `6px` radius, `#5B7FFF` background
- Delete button: small, `6px` radius, `#EF4444` background
- Add/Delete Table modal: `20px` radius, strong shadow, `32px` padding

### 3.7 Pythagorean Tools (`pythagorean/`, `pythagorean-cutting/`)

- Update surrounding UI chrome to match design system:
  - Button styles → design system tokens
  - Section backgrounds → `#F7F8FD`
  - Task description cards → white, `12px` radius, medium shadow
- Keep SVG interactive canvas untouched
- Color palette for SVG shapes already uses friendly pastel tones — keep as-is

---

## 4. Implementation Plan (high-level)

1. Add Rubik font import to `angular-src/src/index.html`
2. Write CSS custom properties + Bootstrap 3 overrides in `angular-src/src/styles.css`
3. Rewrite component CSS files in this order:
   - `navbar`
   - `home`
   - `login` + `register`
   - `vanhillequiz/questions`
   - `vanhillequiz/report` (student + class)
   - `cloudlinks`
   - `pythagorean` + `pythagorean-cutting`
4. Minor HTML template adjustments where CSS alone cannot achieve the design (e.g., hero section wrapper div, radio option card wrappers)

---

## 5. Constraints

- Angular 5 and Bootstrap 3.3.7 versions are not changing
- All RTL (`dir="rtl"`) behavior must be preserved
- Hebrew text rendering must remain correct with Rubik
- No new npm packages
- Interactive SVG canvases in pythagorean components are not touched
