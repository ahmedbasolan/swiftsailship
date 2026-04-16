# Swift Sail Shipping — Homepage Redesign Spec

**Date:** 2026-04-16  
**Status:** Approved  
**Stack:** HTML + Tailwind CSS + vanilla JS (existing stack, no framework change)

---

## Goals

1. **Premium feel** — the current homepage looks generic; the redesign must feel luxury and established
2. **Better conversion** — visitors should reach the quote form without navigating away
3. **Stronger brand identity** — the design must reflect the actual Swift Sail brand (gold yacht logo, UAE premium positioning)

---

## Aesthetic Direction: Editorial Prestige

| Token | Value |
|-------|-------|
| Background (primary) | `#f5f0e8` (warm cream/ivory) |
| Background (secondary) | `#ede6d9` (deeper cream, trust bar / about) |
| Navy (primary dark) | `#0f1623` |
| Navy (mid) | `#1a2236` |
| Gold (brand accent) | `#C5A47E` (existing brand color, unchanged) |
| Gold (light) | `#d9bc99` |
| Charcoal (body text) | `#2c2c3a` |
| Gray (secondary text) | `#7a7a8a` |
| Border | `#ddd6c8` |
| Display font | Playfair Display (400, 600, 700, italic) — already loaded |
| Body font | DM Sans (300, 400, 500, 600) — replace Inter (add to Google Fonts `<link>` in `index.html`) |

**Signature detail:** A 2px gradient stripe across the very top of the nav (`navy → gold → navy`) acts as the brand signature and page-entry moment.

**Logo:** Use `assets/img/Untitled design.png` (gold yacht SVG-style mark). The PNG has a white background — apply `mix-blend-mode: multiply` on cream sections so the white becomes transparent. In the footer (navy background), apply a CSS filter to render it in gold/white.

---

## Page Structure

The full homepage is a **full rewrite of `index.html`**. All other pages (`services.html`, `about.html`, etc.) are untouched in this task. The shared `script.js` and `style.css` are preserved; only `index.html` and additions to `style.css` are changed.

### Section 01 — Navigation

- **Background:** cream (`#f5f0e8`)
- **Top accent:** 2px gradient stripe `navy → gold → navy`
- **Left:** Logo image + "SWIFT SAIL" (Playfair Display, navy) + "SHIPPING L.L.C." (gold, tiny, tracked)
- **Center:** nav links — Services, How It Works, About, Blog (DM Sans, 11px, charcoal, 0.8 opacity)
- **Right:** "GET QUOTE" button — navy background, gold text, uppercase, tracked
- **Sticky:** yes, same as current
- **Mobile:** hamburger menu preserved (same JS behavior as current `script.js`)
- **Logo fix:** `mix-blend-mode: multiply` so white PNG background disappears on cream nav

### Section 02 — Hero

- **Layout:** CSS Grid, 2 columns — `1.2fr 0.8fr`
- **Left panel** (cream background):
  - Eyebrow line: gold 24px rule + "PREMIUM FREIGHT FORWARDING · UAE" (gold, 10px, tracked)
  - Headline: `"The Art of / Moving Cargo / Across the World"` — Playfair Display 42px, navy; "the World" in italic gold
  - Subtext: 14px, DM Sans 300 weight, gray, max-width 360px
  - CTAs: "Get a Quote" (navy bg, gold text) + "Our Services" (cream bg, navy border)
- **Right panel** (navy `#0f1623` background):
  - 3 stats stacked vertically with thin gold dividers between them
  - Stats: `15+` Years of Experience / `50+` Countries Served / `10K+` Shipments Delivered
  - Numbers: Playfair Display 52px, gold
  - Labels: 9px, DM Sans, white 40% opacity, letter-spaced

### Section 03 — Trust Bar

- **Background:** `#ede6d9` (deeper cream)
- **Border:** `border-bottom: 2px solid #0f1623` — structural rhythm marker
- **Layout:** 4-column grid, each item: navy icon square (32×32, gold SVG icon) + number (Playfair 20px, navy) + label (9px gray uppercase)
- **Items:** 15+ Yrs Experience · 50+ Destinations · 10,000+ Shipments · 24/7 Support
- **Dividers:** 1px cream-dark borders between columns

### Section 04 — Services

- **Background:** cream
- **Header:** left — eyebrow + "Comprehensive Shipping Solutions" (Playfair 30px); right — "View all services →" text link (navy, gold underline) pointing to `services.html`
- **Grid:** asymmetric — `1.6fr 1fr 1fr`, 2 rows
  - **Featured card** (spans both rows): Sea Freight — navy background, gold icon badge top-left, "Featured Service" eyebrow tag, Playfair headline, white body text, "Learn more →" gold link
  - **3 secondary cards**: Air Freight, Customs Brokerage, Warehousing — cream-dark background, `border-left: 3px solid #C5A47E`, navy icon square, Playfair card title, gray body text
- **Hover:** subtle lift (`translateY(-2px)`) on secondary cards; gold left-border brightens on featured card hover

### Section 05 — Inline Quote Form

- **Background:** navy `#0f1623`
- **Header:** left — eyebrow + "Tell us about your shipment" (Playfair 28px, white); right — "24h" (Playfair 36px, gold) + "Response guarantee" label
- **Form layout:** 5-column CSS grid — Origin | Destination | Cargo Type | Contact | Submit button
- **Fields:**
  - Origin: text input, placeholder "e.g. Dubai, UAE"
  - Destination: text input, placeholder "e.g. London, UK"
  - Cargo Type: `<select>` with options: General Cargo, Dangerous Goods, Perishables, Project Cargo, Vehicles
  - Contact: text input, placeholder "Phone or email"
  - Submit: "Get Quote →" button, gold background, navy text, bold
- **Field styling:** `background: rgba(255,255,255,0.06)`, full border + `border-bottom: 2px solid rgba(197,164,126,0.4)` accent
- **Disclaimer:** "We respond within 24 hours · No commitment required · All enquiries are confidential" — 10px, white 25% opacity
- **Form action:** On submit, validate all fields non-empty client-side, then redirect to `get-quote.html` (no server-side processing required; full quote form lives there)
- **Mobile:** stack fields to single column

### Section 06 — About Teaser

- **Layout:** 2-column grid — `1fr 1fr`
- **Left** (cream background, padding 56px):
  - Eyebrow + "Your Trusted Gateway Between East & West" (Playfair 28px)
  - Body copy (DM Sans 300, 13px, gray)
  - 4 bullet trust signals in 2×2 grid: UAE Licensed & Bonded · 24/7 Live Support · Dubai Maritime City · Real-time Tracking
  - "Our Story →" ghost button (navy border, navy text) → links to `about.html`
- **Right:** existing office photo (`https://lh3.googleusercontent.com/...` as currently in `index.html`) — object-cover, navy overlay, "Established · Dubai, UAE · 2009" gold tag at bottom-left

### Section 07 — Footer

- **Background:** navy `#0f1623`
- **Top border:** `2px solid #C5A47E` (gold — mirrors nav top stripe)
- **Grid:** 4 columns — Brand | Services | Company | Contact
- **Brand column:** logo (CSS filter for gold/white on navy) + "SWIFT SAIL" + "SHIPPING L.L.C." + brief description
- **Links columns:** Services (Sea Freight, Air Freight, Customs Brokerage, Warehousing) · Company (How It Works, About Us, Blog & Insights, Get a Quote)
- **Contact column:** phone, email, address — each with gold dot bullet
- **Bottom bar:** `© 2026 Swift Sail Shipping L.L.C. All rights reserved.` left · LinkedIn ↗ right
- **All text:** white at varying opacities; headings in gold (9px tracked uppercase)

---

## Animations & Interactions

Reuse existing `script.js` animation infrastructure (IntersectionObserver, `animate-on-scroll` class). New additions:

- **Staggered reveal:** hero eyebrow → headline → subtext → CTAs (CSS animation-delay, 100ms steps)
- **Trust bar counters:** reuse existing `data-counter` attribute behavior from current `script.js`
- **Service card hover:** `transform: translateY(-2px)` + `box-shadow` on secondary cards
- **Nav scroll behavior:** on scroll past 80px, add `box-shadow` and slight cream background opacity increase — same as current JS behavior

---

## Responsive Breakpoints

| Breakpoint | Change |
|---|---|
| `< 768px` | Hero becomes single column (headline above stats); Trust bar 2×2 grid; Services stacks to single column (featured card full-width, then 3 cards below); Quote form fields stack vertically; About section stacks (text above image) |
| `768px–1024px` | Hero stats panel shrinks; Services grid collapses to 2 columns |
| `> 1024px` | Full layout as designed |

---

## Files Changed

| File | Change |
|---|---|
| `index.html` | **Full rewrite** |
| `css/style.css` | Add: `mix-blend-mode` rule for logo, service card hover, hero animation keyframes |
| `js/script.js` | No changes — reuse existing animation and counter infrastructure |
| `css/tailwind.css` | No changes |

---

## Out of Scope

- Redesign of any other page (`services.html`, `about.html`, `blog.html`, `get-quote.html`, `how-it-works.html`)
- Backend form processing (quote form uses existing redirect/behavior)
- Adding a transparent PNG version of the logo (noted as a nice-to-have; CSS workaround used)
- Any new pages or routing
