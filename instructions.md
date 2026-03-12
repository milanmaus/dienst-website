# INSTRUCTIONS.md – Dienst Landing Page

## Project Overview

Build a lean, professional landing page for **Dienst** – an AI platform for the security and law enforcement sector. The page should feel serious, technically competent, and trustworthy. Target audience: decision-makers at private security service providers and public authorities.

**Style reference:** [palantir.com](https://www.palantir.com/) – minimalist, dark, institutional, generous whitespace, clear typographic hierarchy, no decorative flourishes.

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Component Library:** [shadcn/ui](https://ui.shadcn.com/) – verwende ausschließlich shadcn/ui Komponenten für alle UI-Elemente
- **Styling:** Tailwind CSS (wird von shadcn/ui vorausgesetzt)
- **Sprache:** Deutsch
- **Responsive:** Mobile-first

### shadcn/ui Setup

If not yet initialized:
```bash
npx shadcn@latest init
```

Install required components:
```bash
npx shadcn@latest add button card separator badge
```

### shadcn/ui Component Mapping

| UI Element | shadcn/ui Component |
|---|---|
| CTA Buttons | `<Button>` (variant: default / outline) |
| Feature Cards | `<Card>`, `<CardHeader>`, `<CardContent>` |
| Dividers | `<Separator>` |

---

## Design Guidelines

- **Mode:** Full dark mode – no light mode variant
- **Color Palette:**
  - Background: `#000000` or `#0A0A0A` (deep black, Palantir-style)
  - Primary text: `#FFFFFF`
  - Secondary / muted text: `#A0A0A0`
  - Accent (CTAs): `#FFFFFF` or light grey – no colored blue
  - Cards / Sections: slightly elevated surfaces via `#111111` or `#141414`
  - Borders: `#222222` or `#2A2A2A`
- **Typography:**
  - **Headlines & Body:** `Helvetica Neue`, fallback: `Arial, sans-serif`
  - **Monospace / technical elements:** `Space Mono` (Google Fonts)
  - Load Space Mono via: `@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');`
  - Headlines: large, thin (font-weight 300–400), generous letter-spacing
  - No rounded branding – sharp, precise
- **Tone:** Professional, precise, institutional – no startup buzzwords
- **No images or illustrations** – text-based and structured only
- **No custom CSS classes** – use only Tailwind utilities and shadcn/ui components
- **No logo** – brand name "DIENST" as wordmark

---

## Page Structure

### 0. Navbar
- Left: wordmark **"DIENST"** (uppercase, Space Mono)
- Right: CTA Button "Contact" → `#contact`
- Sticky, minimalist, thin border-bottom `#222222`

---

### 1. Hero
- Fullscreen (`min-height: 100vh`)
- Text left-aligned, generous whitespace, pure black – no image, no gradient

**Headline (H1, Helvetica Neue light):**
> Documentation. Automated. Sovereign.

**Subheadline:**
> Dienst reduces manual documentation time by up to 50% – no data migration, no US vendor, no IT overhead.

**CTA Button:** "Get in touch" → `#contact`

---

### 2. Solution: Dienst Platform

**Section label** (Space Mono, small, muted): `01 — PLATFORM`

**Heading:** The AI Partner for Field Personnel

**Intro:** A mobile application layer that transforms speech, text, and images into structured documentation – in real time, in the field.

**Three feature cards (`<Card>`):**
1. **Voice Input** – Forms are filled automatically as the user speaks
2. **Multilingual & robust** – Works even with radio interruptions
3. **User approval** – Reports and transfers to backend systems only after explicit confirmation

---

### 3. Solution: Dienst Pipeline

**Section label** (Space Mono, small, muted): `02 — PIPELINE`

**Heading:** Sovereign Data Layer

**Intro:** The technical foundation of Dienst: a distributed query layer that connects existing specialist systems – without centralizing data.

**Three feature cards (`<Card>`):**
1. **Distributed queries** – Access across multiple systems without data migration
2. **Governance & control** – Role-based access management, full auditability
3. **Resource-aware optimization** – Automatic routing to the appropriate systems

**Technical note** (Space Mono, muted, small):
> Based on research from TU Berlin & BIFOLD.

---

### 4. Benefits

**Section label** (Space Mono, small, muted): `03 — BENEFITS`

**Heading:** Why Dienst

**Four cards** (2×2 grid on desktop, 1 column on mobile):
1. **No data migration** – Existing systems remain untouched
2. **Data sovereignty** – No US vendor, GDPR-compliant
3. **Fast to deploy** – Low IT effort, no infrastructure changes
4. **Audit-ready** – Transactional execution, full audit trails

---

### 5. Contact (`id="contact"`)

**Section label** (Space Mono, small, muted): `04 — CONTACT`

**Heading:** Request a conversation

**Subtext:** We are happy to speak with decision-makers in the security and public sector.

**No form** – single prominent button only:
- Button text: `Send us an email`
- `href="mailto:hello@dienst.ai"` (placeholder)
- Variant: `outline` or large default `<Button>`

---

### 6. Footer
- Wordmark **"DIENST"** (Space Mono)
- `© 2026 Dienst. All rights reserved.`
- Placeholder links: Imprint | Privacy Policy (`href="#"`)
- Thin border-top `#222222`

---

## Content Rules

- Use only the content defined in this document – do not invent anything
- No Lorem Ipsum placeholder text
- No emojis
- No animations except subtle CSS hover effects on buttons and cards
- All copy in **English**

---

## File Structure

```
/
├── app/
│   ├── layout.tsx
│   ├── page.tsx          ← Haupt-Landing Page
│   └── globals.css
├── components/
│   ├── ui/               ← shadcn/ui auto-generated
│   └── sections/         ← eigene Sections (Navbar, Hero, etc.)
├── INSTRUCTIONS.md
└── tailwind.config.ts
```

---

## Open Items (non-blocking)

- Website domain not yet determined → no link needed
- No logo available → wordmark is sufficient
- Email address is a placeholder → replace before launch