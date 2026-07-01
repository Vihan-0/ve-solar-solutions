# VE Solar Solutions — Complete Project Handoff

> **Business**: VE Solar Solutions (VN Enterprise) — Solar panel installer in Lucknow, India since 2003.
> **Website URL**: https://vesolar.in
> **Framework**: Next.js 16.2.9 (App Router) + React 19 + Tailwind CSS 4 + Framer Motion + TypeScript
> **Status**: Production-ready, builds successfully with zero errors.

---

## TABLE OF CONTENTS

1. [Project Structure](#1-project-structure)
2. [Tech Stack & Dependencies](#2-tech-stack--dependencies)
3. [Configuration Files](#3-configuration-files)
4. [Source Code — layout.tsx](#4-source-code--layouttsx)
5. [Source Code — page.tsx (Main Page)](#5-source-code--pagetsx-main-page)
6. [Source Code — globals.css](#6-source-code--globalscss)
7. [Public Assets — Images](#7-public-assets--images)
8. [SEO & Sitemap](#8-seo--sitemap)
9. [Design System & Color Palette](#9-design-system--color-palette)
10. [Key Features & Sections](#10-key-features--sections)
11. [Hosting Guide](#11-hosting-guide)
12. [Important Technical Notes](#12-important-technical-notes)

---

## 1. PROJECT STRUCTURE

```
VN-Enterprise-Website/
├── solar-vn/                          # Next.js app root
│   ├── app/
│   │   ├── layout.tsx                 # Root layout (metadata, SEO, JSON-LD, fonts)
│   │   ├── page.tsx                   # Main single-page website (~1500 lines)
│   │   ├── globals.css                # Global styles, animations, utility classes
│   │   └── favicon.ico
│   ├── public/
│   │   ├── imageshero/                # Hero section background image
│   │   ├── imageslogo/                # Company logo (PNG)
│   │   ├── imagesproject/             # 11 project/installation photos
│   │   ├── imagesfounder/             # 3 founder photos
│   │   ├── imagesteam/                # 5 team photos
│   │   ├── images-award/              # 3 award/certification photos
│   │   ├── images-review/             # 1 customer review photo
│   │   ├── robots.txt
│   │   └── sitemap.xml
│   ├── package.json
│   ├── next.config.ts                 # Image optimization config
│   ├── tsconfig.json
│   ├── postcss.config.mjs
│   ├── eslint.config.mjs
│   └── .gitignore
├── HOSTING.md                         # Step-by-step hosting guide
├── business_info.md
├── website_goal.md
└── notes.md
```

---

## 2. TECH STACK & DEPENDENCIES

### package.json

```json
{
  "name": "solar-vn",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "framer-motion": "^11.18.2",
    "lucide-react": "^1.20.0",
    "next": "16.2.9",
    "react": "19.2.4",
    "react-dom": "19.2.4"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.2.9",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

**Key points:**
- Next.js 16.2.9 with App Router (NOT Pages Router)
- React 19 (latest)
- Tailwind CSS v4 (uses `@import "tailwindcss"` syntax, NOT `@tailwind base/components/utilities`)
- Tailwind v4 uses `@theme inline {}` block instead of `tailwind.config.js`
- Framer Motion for animations
- Lucide React for icons
- TypeScript

---

## 3. CONFIGURATION FILES

### next.config.ts

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve optimized images in modern formats (WebP/AVIF)
    formats: ["image/avif", "image/webp"],
    // Define responsive breakpoints for srcset generation
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Reduce default quality slightly for faster loads (still looks great)
    qualities: [75, 80, 85],
    // Increase the cache TTL for optimized images (1 year)
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": [
    "next-env.d.ts", "**/*.ts", "**/*.tsx",
    ".next/types/**/*.ts", ".next/dev/types/**/*.ts", "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
```

### postcss.config.mjs

```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

### eslint.config.mjs

```javascript
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
```

---

## 4. SOURCE CODE — layout.tsx

**Path**: `solar-vn/app/layout.tsx`

This file handles:
- Root HTML layout
- Google Font (Plus Jakarta Sans)
- Full SEO metadata (title, description, keywords, OpenGraph, Twitter cards)
- JSON-LD structured data (LocalBusiness, WebSite, FAQPage schemas)
- Geo meta tags for local SEO

```tsx
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const SITE_URL = "https://vesolar.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "VE Solar Solutions | Best Solar Company in Lucknow | Since 2003",
    template: "%s | VE Solar Solutions Lucknow",
  },
  description:
    "VE Solar Solutions — Lucknow's most trusted solar panel installer since 2003. UPNEDA registered, government subsidy assistance, EMI options, premium brands (Adani, Tata, Waaree, Microtek, V-Guard). Serving Aliganj, Gomti Nagar, Indira Nagar & all of Lucknow.",
  keywords: [
    "solar panel Lucknow", "solar installation Lucknow", "best solar company Lucknow",
    "solar panel installer Lucknow", "rooftop solar Lucknow", "solar subsidy Lucknow",
    "solar panel price Lucknow", "UPNEDA solar installer", "solar system Lucknow",
    "solar panel installer near me", "Aliganj solar installer", "Gomti Nagar solar",
    "Indira Nagar solar", "solar energy Lucknow", "VE Solar Solutions",
    "VN Enterprise solar", "residential solar Lucknow", "solar rooftop installation UP",
    "PM Surya Ghar subsidy Lucknow", "net metering Lucknow", "solar panel company UP",
    "Adani solar dealer Lucknow", "Tata solar dealer Lucknow", "Waaree solar Lucknow",
    "Microtek solar Lucknow", "solar panel installation cost Lucknow",
  ],
  authors: [{ name: "VE Solar Solutions" }],
  creator: "VE Solar Solutions",
  publisher: "VE Solar Solutions",
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website", locale: "en_IN", url: SITE_URL, siteName: "VE Solar Solutions",
    title: "VE Solar Solutions | Best Solar Company in Lucknow | Since 2003",
    description: "Lucknow's most trusted solar installer since 2003. UPNEDA registered. Premium brands, subsidy assistance, EMI options. Free consultation on WhatsApp.",
    images: [{ url: "/imageshero/20260118_52243PMByGPSMapCamera.jpg", width: 1200, height: 630, alt: "VE Solar Solutions — Solar Installation in Lucknow" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VE Solar Solutions | Best Solar Company in Lucknow",
    description: "Trusted solar installer in Lucknow since 2003. UPNEDA registered, subsidy assistance, EMI options.",
    images: ["/imageshero/20260118_52243PMByGPSMapCamera.jpg"],
  },
  alternates: { canonical: SITE_URL },
  category: "Solar Energy",
  icons: { icon: "/favicon.ico" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "VE Solar Solutions",
      alternateName: "VN Enterprise Solar",
      description: "Lucknow's most trusted solar panel installer since 2003. UPNEDA registered company offering residential and commercial solar rooftop installations with government subsidy assistance.",
      url: SITE_URL,
      telephone: "+916390718627",
      email: "contact@vesolar.in",
      foundingDate: "2003",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/imageslogo/SOLAR (1) (1).png` },
      image: `${SITE_URL}/imageshero/20260118_52243PMByGPSMapCamera.jpg`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "24, UGF, Shreenath Complex, Near Engineering College Chauraha, Sector E",
        addressLocality: "Aliganj", addressRegion: "Uttar Pradesh",
        postalCode: "226020", addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: "26.8767", longitude: "80.9462" },
      areaServed: [
        { "@type": "City", name: "Lucknow", "@id": "https://www.wikidata.org/wiki/Q200199" },
        { "@type": "Neighborhood", name: "Aliganj" },
        { "@type": "Neighborhood", name: "Gomti Nagar" },
        { "@type": "Neighborhood", name: "Indira Nagar" },
        { "@type": "Neighborhood", name: "Hazratganj" },
        { "@type": "Neighborhood", name: "Rajajipuram" },
        { "@type": "Neighborhood", name: "Vikas Nagar" },
      ],
      hasMap: "https://maps.google.com/?q=Aliganj+Lucknow",
      openingHoursSpecification: [{
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00", closes: "19:00",
      }],
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", reviewCount: "100", bestRating: "5" },
      priceRange: "₹₹", currenciesAccepted: "INR", paymentAccepted: "Cash, Bank Transfer, EMI",
      sameAs: [],
      knowsAbout: ["Solar Panel Installation", "Rooftop Solar Systems", "Government Solar Subsidy", "PM Surya Ghar Yojana", "UPNEDA Registration", "Net Metering", "Solar EMI Financing"],
      brand: [
        { "@type": "Brand", name: "Adani Solar" },
        { "@type": "Brand", name: "Tata Power Solar" },
        { "@type": "Brand", name: "Waaree Energies" },
        { "@type": "Brand", name: "Microtek Solar" },
        { "@type": "Brand", name: "V-Guard Solar" },
      ],
    },
    {
      "@type": "WebSite", "@id": `${SITE_URL}/#website`,
      url: SITE_URL, name: "VE Solar Solutions",
      description: "Best solar panel installer in Lucknow", inLanguage: "en-IN",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "How much government subsidy do I get for solar panels in Lucknow?", acceptedAnswer: { "@type": "Answer", text: "Under PM Surya Ghar Muft Bijli Yojana, you can get ₹30,000 subsidy for 1 kW, ₹60,000 for 2 kW, and ₹78,000 for 3 kW+ systems. VE Solar handles all documentation and subsidy paperwork on your behalf." } },
        { "@type": "Question", name: "How long does solar installation take in Lucknow?", acceptedAnswer: { "@type": "Answer", text: "Typically 1–3 days for installation. Net metering registration with the electricity board takes 2–4 weeks. VE Solar manages the entire process end to end." } },
        { "@type": "Question", name: "What is the cost of solar panel installation in Lucknow?", acceptedAnswer: { "@type": "Answer", text: "A 3 kW system typically costs ₹1.5–2 lakh before subsidy. After PM Surya Ghar subsidy, your effective cost can be under ₹1 lakh. VE Solar offers EMI options to make it even more affordable. Contact us for a free customized quote." } },
        { "@type": "Question", name: "Is VE Solar UPNEDA registered?", acceptedAnswer: { "@type": "Answer", text: "Yes, VE Solar Solutions is UPNEDA (Uttar Pradesh New and Renewable Energy Development Agency) registered, making us an authorized and government-recognized solar installer in Lucknow." } },
      ],
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${jakarta.variable} h-full antialiased`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Lucknow" />
        <meta name="geo.position" content="26.8767;80.9462" />
        <meta name="ICBM" content="26.8767, 80.9462" />
        <meta name="theme-color" content="#0a1628" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
```

---

## 5. SOURCE CODE — page.tsx (Main Page)

**Path**: `solar-vn/app/page.tsx`
**Size**: ~1503 lines, ~75KB
**Type**: Client component (`'use client'`)

This is a single-page website with all sections in one file. Due to extreme length, here is the structure and the complete code:

### Architecture Overview

- **Imports**: framer-motion, react hooks, next/image, lucide-react icons
- **Constants** (lines 28-159): Phone/WhatsApp URLs, navigation items, brand list, "Why Us" features, process steps, project images array, founder images, team images, award images, testimonials, stats, FAQs
- **AnimatedCounter component** (lines 161-188): Counts up numbers when scrolled into view
- **FAQItem component** (lines 191-232): Accordion FAQ with animation
- **Home component** (lines 235-1503): Main page with all sections

### All Page Sections (in order):
1. **Lightbox** — Full-screen image viewer overlay with Next.js Image
2. **Header** — Sticky navbar with scroll effect, logo, navigation, WhatsApp CTA, mobile menu
3. **Hero** — Full-screen hero with background image, headline, CTAs, trust badges, stats card
4. **Savings Banner** — Green gradient strip with savings figures
5. **Brands Marquee** — Infinite horizontal scroll of brand logos
6. **About** — Company story with founder photo collage, text, badges
7. **Why Choose Us** — 6 feature cards on dark background with animated borders
8. **How It Works** — 5-step process with connector lines
9. **Team** — Horizontal scrollable team photos
10. **Projects Gallery** — Masonry-style grid with 11 project photos, featured image
11. **Awards** — 3 award/certification images
12. **Comparison Table** — VE Solar vs. competitors comparison
13. **Testimonials** — Auto-rotating reviews with photo, dot indicators
14. **FAQ** — 6 expandable questions
15. **Contact** — Contact info cards + WhatsApp quote form
16. **Floating WhatsApp** — Fixed bottom-right CTA button with pulse
17. **Footer** — 4-column footer with links, services, contact, brands

### Key Business Constants:
```
Phone: +91 63907 18627
WhatsApp: https://wa.me/916390718627?text=Hello%20VE%20Solar%20Solutions...
Address: 24, UGF, Shreenath Complex, Near Engineering College Chauraha, Sector E, Aliganj, Lucknow — 226020
```

### Complete page.tsx Code:

**NOTE: This file is 1503 lines long. The full source is in `solar-vn/app/page.tsx`. Below is a summary of the data arrays and the component structure. The full code is preserved in the actual file.**

Key data arrays in page.tsx:

```typescript
// Navigation
const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Projects', href: '#projects' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

// Brands
const BRANDS = [
  { name: 'Microtek', tagline: 'Solar Panels & Inverters' },
  { name: 'Adani', tagline: 'Solar Modules' },
  { name: 'Tata', tagline: 'Power Solar Systems' },
  { name: 'Waaree', tagline: 'Solar Panels' },
  { name: 'V-Guard', tagline: 'Solar Inverters' },
];

// Project photos (11 images)
const PROJECT_IMAGES = [
  { name: 'Recent installation', path: '/imagesproject/IMG_20260109_184606.jpg', featured: true },
  { name: 'Rooftop solar array', path: '/imagesproject/IMG_20260104_152716.jpg' },
  { name: 'GPS documented install', path: '/imagesproject/20260103_11954PMByGPSMapCamera.jpg' },
  { name: 'March 2025 project', path: '/imagesproject/IMG_20250302_175632.jpg' },
  { name: 'Completed installation', path: '/imagesproject/IMG_20250302_173919 - Copy.jpg' },
  { name: 'Solar panel setup', path: '/imagesproject/IMG_20250302_170950.jpg' },
  { name: 'Residential rooftop', path: '/imagesproject/IMG_20250223_143330.jpg' },
  { name: 'WhatsApp project photo', path: '/imagesproject/IMG-20250227-WA0001 (1).jpg' },
  { name: 'Nov 2024 install', path: '/imagesproject/IMG_20241122_151920 (1).jpg' },
  { name: 'Customer project', path: '/imagesproject/Photo from Vivek (1).jpg' },
  { name: 'Installation detail', path: '/imagesproject/Screenshot_2024-10-18-19-27-06-87_6012fa4d4ddec268fc5c7112cbb265e7.jpg' },
];

// Founder photos (3)
const FOUNDER_IMAGES = [
  '/imagesfounder/20251004_212347.jpg',
  '/imagesfounder/IMG-20260531-WA0008.jpg',
  '/imagesfounder/Screenshot_2024-10-18-19-26-34-64_6012fa4d4ddec268fc5c7112cbb265e7.jpg',
];

// Team photos (5)
const TEAM_IMAGES = [
  '/imagesteam/IMG_20260109_184916.jpg',
  '/imagesteam/IMG_20260104_152716.jpg',
  '/imagesteam/IMG_20260104_152048.jpg',
  '/imagesteam/IMG_20260104_151651.jpg',
  '/imagesteam/IMG_20240627_172000.jpg',
];

// Award photos (3)
const AWARD_IMAGES = [
  '/images-award/IMG-20260531-WA0009.jpg',
  '/images-award/IMG-20260531-WA0011.jpg',
  '/images-award/IMG_20240309_174043.jpg',
];

// Stats
const STATS = [
  { value: 20, suffix: '+', label: 'Years of Trust', icon: Clock },
  { value: 100, suffix: '+', label: 'Happy Families', icon: Users },
  { value: 4.7, suffix: '★', label: 'Google Rating', icon: Star },
  { value: 100, suffix: '%', label: 'Subsidy Success', icon: CheckCircle },
];

// Testimonials (4)
const TESTIMONIALS = [
  { name: 'Rajesh Kumar', location: 'Aliganj', text: '...', rating: 5 },
  { name: 'Priya Sharma', location: 'Gomti Nagar', text: '...', rating: 5 },
  { name: 'Vikram Singh', location: 'Indira Nagar', text: '...', rating: 5 },
  { name: 'Sunita Agarwal', location: 'Hazratganj', text: '...', rating: 5 },
];

// FAQs (6)
const FAQS = [
  { q: 'How much government subsidy...?', a: '...' },
  { q: 'How long does solar installation take?', a: '...' },
  { q: 'What is the cost of a solar system in Lucknow?', a: '...' },
  { q: 'Is VE Solar UPNEDA registered?', a: '...' },
  { q: 'What brands of solar panels do you install?', a: '...' },
  { q: 'Do you provide after-sales support and maintenance?', a: '...' },
];
```

### Key Technical Patterns in page.tsx:

- All images use Next.js `<Image>` component (NOT raw `<img>`)
- Hero image + logo have `priority` flag for instant loading
- All other images lazy-load with responsive `sizes` attribute
- Lightbox uses `fill` mode with `aspect-[4/3]` container
- Handlers wrapped in `useCallback` for performance
- Framer Motion `whileInView` with `viewport={{ once: true }}` for scroll animations
- Testimonials auto-rotate every 5 seconds with `setInterval`
- Navbar has scroll-aware state that changes colors on scroll

---

## 6. SOURCE CODE — globals.css

**Path**: `solar-vn/app/globals.css`

```css
@import "tailwindcss";

/* ═══════════════════════════════════════════
   DESIGN TOKENS
═══════════════════════════════════════════ */
:root {
  --background: #f8f9fc;
  --foreground: #0a1628;
  --navy: #0a1628;
  --navy-light: #132744;
  --navy-deep: #060e1a;
  --gold: #c9970a;
  --gold-light: #f5d061;
  --gold-dim: rgba(201, 151, 10, 0.15);
  --solar-green: #059669;
  --solar-green-light: #10b981;
  --surface: #ffffff;
  --surface-2: #f1f4f9;
  --border: rgba(10, 22, 40, 0.1);
  --border-light: rgba(255, 255, 255, 0.12);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-jakarta);
}

/* ═══════════════════════════════════════════
   BASE
═══════════════════════════════════════════ */
html { scroll-behavior: smooth; }

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-jakarta), system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::selection {
  background: rgba(201, 151, 10, 0.28);
  color: var(--navy);
}

/* Premium scrollbar */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--surface-2); }
::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, var(--gold), var(--navy));
  border-radius: 3px;
}

/* ═══════════════════════════════════════════
   KEYFRAME ANIMATIONS
═══════════════════════════════════════════ */

@keyframes shimmer {
  0% { transform: translateX(-100%) skewX(-12deg); }
  100% { transform: translateX(200%) skewX(-12deg); }
}

@keyframes pulse-ring {
  0%   { transform: scale(0.95); opacity: 0.7; }
  50%  { transform: scale(1.08); opacity: 0.35; }
  100% { transform: scale(0.95); opacity: 0.7; }
}

@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-10px); }
}

@keyframes countup-pop {
  0%   { transform: scale(0.8); opacity: 0; }
  60%  { transform: scale(1.08); }
  100% { transform: scale(1); opacity: 1; }
}

@keyframes border-rotate {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes slide-up {
  0%   { transform: translateY(30px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes wa-bounce {
  0%, 100% { transform: scale(1); }
  15%       { transform: scale(1.12); }
  30%       { transform: scale(1); }
  45%       { transform: scale(1.06); }
  60%       { transform: scale(1); }
}

@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(5, 150, 105, 0.4); }
  50%       { box-shadow: 0 0 0 12px rgba(5, 150, 105, 0); }
}

@keyframes hero-pan {
  0%   { transform: scale(1.08) translate(0, 0); }
  50%  { transform: scale(1.12) translate(-1%, -0.5%); }
  100% { transform: scale(1.08) translate(0, 0); }
}

@keyframes fade-in-up {
  0%   { opacity: 0; transform: translateY(24px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes spin-slow {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* ═══════════════════════════════════════════
   UTILITY CLASSES
═══════════════════════════════════════════ */

.section-label {
  display: inline-flex; align-items: center; gap: 0.75rem;
  font-size: 0.72rem; font-weight: 700; letter-spacing: 0.16em;
  text-transform: uppercase; color: var(--gold);
}
.section-label::before {
  content: ""; width: 2rem; height: 2px;
  background: linear-gradient(90deg, var(--gold), transparent); flex-shrink: 0;
}

.text-gradient-gold {
  background: linear-gradient(135deg, #f5d061 0%, #e8ab1a 50%, #c9970a 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}

.text-gradient-navy {
  background: linear-gradient(135deg, #1e3a5f 0%, #0a1628 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}

.glass-card {
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.65);
}

.glass-card-dark {
  background: rgba(10, 22, 40, 0.7);
  backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.hero-gradient {
  background: linear-gradient(135deg,
    rgba(6, 14, 26, 0.96) 0%, rgba(10, 22, 40, 0.88) 40%,
    rgba(19, 39, 68, 0.72) 75%, rgba(10, 22, 40, 0.5) 100%);
}

.hero-bg { animation: hero-pan 20s ease-in-out infinite; }

.btn-shimmer { position: relative; overflow: hidden; }
.btn-shimmer::after {
  content: ""; position: absolute; top: 0; left: 0;
  width: 40%; height: 100%;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.22) 50%, transparent 100%);
  animation: shimmer 2.8s ease-in-out infinite; pointer-events: none;
}

.wa-float { animation: wa-bounce 4s ease-in-out infinite; }
.wa-glow { animation: glow-pulse 2s ease-in-out infinite; }

.marquee-track {
  display: flex; gap: 1.5rem;
  animation: marquee 20s linear infinite; width: max-content;
}
.marquee-track:hover { animation-play-state: paused; }

.animate-float { animation: float 4s ease-in-out infinite; }

.card-glow-border { position: relative; border-radius: 1rem; background: transparent; }
.card-glow-border::before {
  content: ""; position: absolute; inset: -1px; border-radius: inherit;
  background: linear-gradient(135deg, rgba(201, 151, 10, 0), rgba(201, 151, 10, 0.6), rgba(10, 22, 40, 0));
  background-size: 300% 300%; opacity: 0; transition: opacity 0.4s ease; z-index: 0;
}
.card-glow-border:hover::before { opacity: 1; animation: border-rotate 3s ease infinite; }
.card-glow-border > * { position: relative; z-index: 1; }

.step-line::after {
  content: ""; position: absolute; top: 2rem; left: calc(100% + 0.5rem);
  width: calc(100% - 1rem); height: 2px;
  background: linear-gradient(90deg, var(--gold), transparent);
}

.animate-slide-up { animation: slide-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }
.animate-fade-in-up { animation: fade-in-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }

/* ═══════════════════════════════════════════
   COMPONENT OVERRIDES
═══════════════════════════════════════════ */

input:focus, textarea:focus, select:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(201, 151, 10, 0.2), 0 0 0 1px var(--gold);
}

.comparison-row:hover td { background: rgba(201, 151, 10, 0.06); }
```

---

## 7. PUBLIC ASSETS — IMAGES

All images are in `solar-vn/public/`. Image paths are referenced from root `/`.

| Directory | Files | Purpose |
|---|---|---|
| `/imageshero/` | 1 file (3.1 MB) | Hero background — `20260118_52243PMByGPSMapCamera.jpg` |
| `/imageslogo/` | 1 file (256 KB) | Company logo — `SOLAR (1) (1).png` |
| `/imagesproject/` | 11 files (1.3–5.2 MB each) | Customer installation photos |
| `/imagesfounder/` | 3 files (428 KB–9.3 MB) | Founder/owner photos |
| `/imagesteam/` | 5 files (1.1–1.9 MB each) | Installation team photos |
| `/images-award/` | 3 files (67–4,859 KB) | Award/certification photos |
| `/images-review/` | 1 file (129 KB) | Customer review photo |

**IMPORTANT**: Original photos are very large (camera originals, 1-9 MB each). Next.js `<Image>` component auto-optimizes them to WebP/AVIF at serving time. If deploying to a static host without Next.js optimization, images MUST be manually compressed first.

---

## 8. SEO & SITEMAP

### robots.txt
```
User-agent: *
Allow: /

# Sitemap location
Sitemap: https://vesolar.in/sitemap.xml

# Block unnecessary paths
Disallow: /_next/
Disallow: /api/
```

### sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://vesolar.in/</loc>
    <lastmod>2026-06-17</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

## 9. DESIGN SYSTEM & COLOR PALETTE

| Token | Hex | Usage |
|---|---|---|
| Navy (primary dark) | `#0a1628` | Headers, backgrounds, text |
| Navy Light | `#132744` | Hover states |
| Navy Deep | `#060e1a` | Footer background |
| Gold (accent) | `#c9970a` | Section labels, badges, highlights |
| Gold Light | `#f5d061` | Star ratings, accent text |
| Solar Green | `#059669` | WhatsApp buttons, CTA |
| Solar Green Light | `#10b981` | WhatsApp link text |
| Background | `#f8f9fc` | Page background |
| Surface | `#ffffff` | Cards, sections |

**Font**: Plus Jakarta Sans (Google Fonts) — weights 400, 500, 600, 700, 800

---

## 10. KEY FEATURES & SECTIONS

- **Single-page app** — all content in one route (`/`)
- **Fully responsive** — mobile-first with breakpoints at sm, md, lg, xl
- **Image lightbox** — click any photo to view full-screen with spring animation
- **Animated counters** — numbers count up when scrolled into view
- **Brand marquee** — infinite horizontal scroll, pauses on hover
- **Auto-rotating testimonials** — cycles every 5 seconds
- **Scroll-aware navbar** — transparent on top, white with blur on scroll
- **Mobile menu** — hamburger with animated dropdown
- **WhatsApp integration** — pre-filled message, floating CTA button
- **FAQ accordion** — animated expand/collapse with Framer Motion
- **Contact form** — redirects to WhatsApp on submit (no backend needed)
- **JSON-LD structured data** — LocalBusiness + FAQPage schemas

---

## 11. HOSTING GUIDE

The site is designed for **Vercel** (free) deployment:

1. Push code to GitHub
2. Connect GitHub repo to Vercel
3. Deploy (auto-detects Next.js)
4. Optionally connect custom domain (`vesolar.in`)
5. Submit sitemap to Google Search Console
6. Set up Google My Business for local SEO

See `HOSTING.md` for detailed step-by-step instructions.

---

## 12. IMPORTANT TECHNICAL NOTES

1. **Tailwind CSS v4** — Uses `@import "tailwindcss"` (NOT `@tailwind base`). Config is via `@theme inline {}` block in CSS (NOT `tailwind.config.js`).
2. **Next.js App Router** — Uses `app/` directory structure, NOT `pages/`.
3. **All images use `next/image`** — NOT raw `<img>` tags. Images auto-convert to WebP/AVIF.
4. **No backend/database** — Everything is static. Form just opens WhatsApp.
5. **No API routes** — Pure static site.
6. **Build command**: `npm run build` (generates static output)
7. **Dev command**: `npm run dev` (runs on http://localhost:3000)
8. **The page.tsx file is ~1503 lines** — It's one large file. All sections are in the same component.
9. **The `'use client'` directive** at the top of page.tsx makes it a client component (needed for useState, useEffect, framer-motion).
10. **Images in public/ are NOT optimized at rest** — they're 1-9 MB camera originals. Next.js Image component optimizes them at serve time.
