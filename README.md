# Vivify Signage — Architectural Signage & Precision LED Craft

> Premier manufacturer of Architectural LED Glow Sign Boards, 3D Acrylic Letters, and Commercial ACP Exterior Elevation in Coimbatore, Tamil Nadu.

![Astro](https://img.shields.io/badge/Astro-5.4-ff5d01?logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38bdf8?logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-Proprietary-amber)

---

## 🏬 Overview

**Vivify Signage** is an award-winning web platform engineered for a leading signage fabrication workshop based in Ganapathy, Coimbatore. Built from the ground up with **Astro 5** and **Tailwind CSS v4**, the site embodies a **Dark Architectural Gallery** design language, delivering high-contrast technical elegance and 100% authentic local fabrication credentials.

### ✨ Key Features

- **🏬 Interactive Commercial Shopfront Simulator ("One Live Thing")**:
  - Live preview of custom signage mounted directly onto the architectural fascia canopy of a luxury commercial boutique storefront.
  - **Daylight & Nighttime Environmental Crossfade**: Smooth transition between sunlit inspection (physical 3D acrylic letters with bevels and shadows) and dusk illumination (interior showroom glow with radiant LED letter bloom).
  - **3 Fabrication Presets**: Front-Lit 3D Acrylic, Halo-Lit Reverse Metal, and Stencil Cut ACP Glow Box.
  - **7 Acrylic Color Temperatures**: Pure White (6500K default), Warm Amber (3000K), Electric Cyan (8000K), Ruby Red (625nm), Neon Emerald Green (525nm), Royal Cobalt Blue (470nm), and Vivid Hot Magenta (630nm).
  - **Dynamic Text Autoscaling**: Live font fitting engine preventing text overflow across viewports.
  - **Instant WhatsApp Quote Generator**: Directly pre-formats customized sign parameters into a direct inquiry for the Coimbatore workshop.

- **🏛️ High-Impact 12-Column Hero & Metrics Strip**:
  - Confident two-line typography: *"Architectural Signage & Precision LED Craft"*.
  - Authentic installation photography showcasing multi-tier commercial facades (*The Chennai Mobiles*, *Digitalhub*).
  - 4-card proof metric strip highlighting decade-long expertise, in-house fabrication, all-weather durability, and 500+ completed installations.

- **📋 8 Comprehensive Signage Services**:
  - Detailed technical specifications, substrate thickness, LED lumen ratings, and turnaround schedules for:
    1. Liquid Letters (Seamless 3D liquid resin)
    2. Lighting Board (High-lumen commercial glow boxes)
    3. ACP Elevation (Marine-grade composite cladding)
    4. LED Name Board (Front-lit and halo-lit letters)
    5. Stickering (Architectural vinyl and frosted glass)
    6. Lollipop Name Board (Double-sided projecting signs)
    7. Wayfinding Signs (Campus and hospital navigation totems)
    8. CNC Router Cutting (Laser cutouts & jali fretwork)

- **🖼️ Interactive Portfolio & Category Lightbox**:
  - Filterable project gallery across Retail, Corporate, Hospitality, Healthcare, and ACP Elevation categories with high-resolution lightbox modal.

---

## 🛠️ Tech Stack

- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation / Islands Architecture)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Icons**: [Lucide Astro](https://lucide.dev/)
- **Typography**: `Outfit` (Display) & `Plus Jakarta Sans` (Body)
- **Quality Standard**: Zero violations on `design-taste-frontend` anti-slop linter

---

## 🚀 Getting Started

### Prerequisites

- Node.js `18.17.0` or higher
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Santheepkumar/vivify.git
cd vivify

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:4321` in your browser.

### Building for Production

```bash
# Type check and build static output
npm run build

# Preview the static build
npm run preview
```

---

## 📁 Project Structure

```
vivify/
├── public/
│   ├── images/
│   │   ├── logo.png               # Official Vivify Signage brandmark
│   │   ├── shopfront-day.jpg      # Commercial boutique facade in daylight
│   │   ├── shopfront-night.jpg    # Commercial boutique facade at night
│   │   ├── signage/               # Authentic Coimbatore workshop photos
│   │   └── gallery/               # Harvested client installation portfolio
├── src/
│   ├── components/
│   │   ├── Navbar.astro           # Sticky navigation with phone survey anchor
│   │   ├── Footer.astro           # Workshop address, operating hours, and links
│   │   ├── GlowSimulator.astro    # Commercial Shopfront Signboard Simulator
│   │   ├── ServiceCard.astro      # Service capability presentation card
│   │   ├── GalleryGrid.astro      # Filterable portfolio grid with lightbox
│   │   └── QuoteForm.astro        # Instant RFQ form with WhatsApp dispatch
│   ├── data/
│   │   ├── company.ts             # Authentic business credentials & FAQs
│   │   ├── services.ts            # Detailed specifications for all 8 services
│   │   └── gallery.ts             # Categorized installation records
│   ├── layouts/
│   │   └── Layout.astro           # Master layout with SEO metadata
│   ├── pages/
│   │   ├── index.astro            # Homepage
│   │   ├── about.astro            # Workshop heritage & machinery
│   │   ├── services.astro         # Services directory
│   │   ├── gallery.astro          # Full portfolio showcase
│   │   ├── contact.astro          # Site survey booking & location map
│   │   ├── privacy.astro          # Privacy policy
│   │   └── terms.astro            # Terms of service
│   └── styles/
│       └── global.css             # Design tokens & glow utilities
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## 📍 Workshop Location & Contact

- **Workshop**: No.32/5, Anniyappan Gounder St, Nallampalayam, PO, Ganapathy, Coimbatore - 641006
- **Phone / WhatsApp**: [+91 79045 40645](https://wa.me/917904540645)
- **Email**: [vivifysignage@gmail.com](mailto:vivifysignage@gmail.com)
- **Hours**: Mon–Fri 9:30 AM – 6:00 PM | Sat 9:30 AM – 2:00 PM
