# Swift Sail Homepage Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Full rewrite of `index.html` to the Editorial Prestige aesthetic — cream/navy/gold, Playfair Display headlines, DM Sans body, split hero, asymmetric services grid, and inline quote form.

**Architecture:** All new styling uses custom CSS classes prefixed `ep-` appended to `css/style.css`. `index.html` is fully rewritten; no other page is touched. `js/script.js` is unchanged — new HTML preserves all existing JS hooks (`#mobile-menu-btn`, `#mobile-menu`, `animate-on-scroll`, `data-counter`, `data-stagger`, `data-copyright-year`).

**Tech Stack:** Vanilla HTML5, custom CSS (CSS Grid, custom properties), Tailwind CSS (`hidden` utility used by mobile menu toggle in script.js), Playfair Display + DM Sans (Google Fonts), existing `js/script.js` (no changes).

---

## File Map

| File | Action | Responsibility |
|------|--------|---------------|
| `index.html` | Full rewrite | All 7 sections, SEO tags, JS hooks |
| `css/style.css` | Append | All `ep-*` custom classes |
| `js/script.js` | No change | Existing animation/counter/menu logic |
| `css/tailwind.css` | No change | Provides `hidden` utility for mobile menu |

---

## Task 1: CSS Variables + nav-scrolled Fix

**Files:**
- Modify: `css/style.css`

- [ ] **Step 1: Insert CSS variables block into `style.css` after the `img` rule (after line 15)**

```css
/* ===== EDITORIAL PRESTIGE — CSS VARIABLES ===== */
:root {
    --ep-cream: #f5f0e8;
    --ep-cream-dark: #ede6d9;
    --ep-navy: #0f1623;
    --ep-navy-mid: #1a2236;
    --ep-gold: #C5A47E;
    --ep-gold-light: #d9bc99;
    --ep-charcoal: #2c2c3a;
    --ep-gray: #7a7a8a;
    --ep-border: #ddd6c8;
}
```

- [ ] **Step 2: Update `nav.nav-scrolled` rule (around line 204) for the new cream nav**

Find:
```css
nav.nav-scrolled {
    background-color: rgba(17, 24, 39, 0.97) !important;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
}
```

Replace with:
```css
nav.nav-scrolled {
    background-color: rgba(245, 240, 232, 0.97) !important;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 2px 20px rgba(15, 22, 35, 0.08);
}
```

- [ ] **Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat(styles): add EP CSS variables and update nav-scrolled for cream nav"
```

---

## Task 2: Write the Complete New `index.html`

**Files:**
- Modify: `index.html` (full rewrite)

- [ ] **Step 1: Replace entire contents of `index.html` with the following**

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Swift Sail Shipping - Premium Logistics &amp; Cargo Solutions UAE</title>
<meta content="Swift Sail Shipping LLC offers premium freight forwarding, customs clearance, and logistics services in the UAE. Your trusted partner for global shipping solutions." name="description"/>
<link rel="canonical" href="https://swiftsailship.com/"/>
<meta property="og:title" content="Swift Sail Shipping - Premium Logistics &amp; Cargo Solutions UAE"/>
<meta property="og:description" content="Swift Sail Shipping LLC offers premium freight forwarding, customs clearance, and logistics services in the UAE. Your trusted partner for global shipping solutions."/>
<meta property="og:type" content="website"/>
<meta property="og:url" content="https://swiftsailship.com/"/>
<meta property="og:site_name" content="Swift Sail Shipping"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="Swift Sail Shipping - Premium Logistics &amp; Cargo Solutions UAE"/>
<meta name="twitter:description" content="Swift Sail Shipping LLC offers premium freight forwarding, customs clearance, and logistics services in the UAE."/>
<link rel="icon" href="assets/favicon.ico" type="image/x-icon"/>
<link rel="apple-touch-icon" href="assets/apple-touch-icon.png"/>
<link rel="stylesheet" href="css/style.css"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet"/>
<link rel="stylesheet" href="css/tailwind.css"/>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Swift Sail Shipping L.L.C.",
  "description": "Premium freight forwarding, customs clearance, and logistics services in the UAE.",
  "url": "https://swiftsailship.com",
  "telephone": "+971553424700",
  "email": "info@swiftsailship.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Tanvi Business Centre, M - 101, Abu Hail",
    "addressLocality": "Dubai",
    "addressCountry": "AE"
  },
  "openingHours": ["Mo-Fr 08:00-18:00", "Sa 09:00-14:00"],
  "sameAs": ["https://www.linkedin.com/company/swift-sail-shipping"]
}
</script>
</head>
<body class="ep-body">

<a href="#main" class="skip-link">Skip to main content</a>

<!-- NAV -->
<nav class="ep-nav">
  <div class="ep-nav-stripe"></div>
  <div class="ep-nav-inner">
    <a href="index.html" class="ep-nav-brand">
      <img src="assets/img/Untitled design.png" alt="Swift Sail Shipping Logo" class="ep-nav-logo"/>
      <div class="ep-nav-brand-text">
        <span class="ep-nav-brand-name">Swift Sail</span>
        <span class="ep-nav-brand-sub">Shipping L.L.C.</span>
      </div>
    </a>
    <div class="ep-nav-links">
      <a href="services.html" class="ep-nav-link">Services</a>
      <a href="how-it-works.html" class="ep-nav-link">How It Works</a>
      <a href="about.html" class="ep-nav-link">About</a>
      <a href="blog.html" class="ep-nav-link">Blog</a>
      <a href="get-quote.html" class="ep-nav-cta">Get Quote</a>
    </div>
    <button id="mobile-menu-btn" class="ep-nav-hamburger" aria-label="Toggle navigation menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <!-- "hidden" class toggled by js/script.js -->
  <div id="mobile-menu" class="ep-mobile-menu hidden">
    <a href="services.html" class="ep-mobile-link">Services</a>
    <a href="how-it-works.html" class="ep-mobile-link">How It Works</a>
    <a href="about.html" class="ep-mobile-link">About</a>
    <a href="blog.html" class="ep-mobile-link">Blog</a>
    <a href="get-quote.html" class="ep-mobile-cta">Get Quote</a>
  </div>
</nav>

<main id="main">

  <!-- HERO -->
  <section class="ep-hero">
    <div class="ep-hero-left">
      <div class="ep-hero-eyebrow animate-on-scroll">
        <span class="ep-eyebrow-line"></span>
        <span>Premium Freight Forwarding · UAE</span>
      </div>
      <h1 class="ep-hero-h1 animate-on-scroll">
        The Art of<br/>Moving Cargo<br/>Across <em>the World</em>
      </h1>
      <p class="ep-hero-sub animate-on-scroll">
        Swift Sail Shipping delivers end-to-end freight solutions from Dubai to every corner of the globe — with the precision and care your cargo deserves.
      </p>
      <div class="ep-hero-actions animate-on-scroll">
        <a href="#quote" class="ep-btn-primary">Get a Quote</a>
        <a href="services.html" class="ep-btn-ghost">Our Services</a>
      </div>
    </div>
    <div class="ep-hero-right">
      <div class="ep-hero-stat">
        <span class="ep-hero-stat-num" data-counter="15" data-suffix="+">0+</span>
        <span class="ep-hero-stat-label">Years of Experience</span>
      </div>
      <div class="ep-hero-divider"></div>
      <div class="ep-hero-stat">
        <span class="ep-hero-stat-num" data-counter="50" data-suffix="+">0+</span>
        <span class="ep-hero-stat-label">Countries Served</span>
      </div>
      <div class="ep-hero-divider"></div>
      <div class="ep-hero-stat">
        <span class="ep-hero-stat-num" data-counter="10000" data-suffix="+">0+</span>
        <span class="ep-hero-stat-label">Shipments Delivered</span>
      </div>
    </div>
  </section>

  <!-- TRUST BAR -->
  <section class="ep-trust">
    <div class="ep-trust-item animate-on-scroll">
      <div class="ep-trust-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      </div>
      <div>
        <span class="ep-trust-num" data-counter="15" data-suffix="+ Yrs">0</span>
        <span class="ep-trust-label">UAE Market Experience</span>
      </div>
    </div>
    <div class="ep-trust-item animate-on-scroll">
      <div class="ep-trust-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>
      </div>
      <div>
        <span class="ep-trust-num" data-counter="50" data-suffix="+ Dest.">0</span>
        <span class="ep-trust-label">Global Destinations</span>
      </div>
    </div>
    <div class="ep-trust-item animate-on-scroll">
      <div class="ep-trust-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      </div>
      <div>
        <span class="ep-trust-num" data-counter="10000" data-suffix="+">0</span>
        <span class="ep-trust-label">Shipments Delivered</span>
      </div>
    </div>
    <div class="ep-trust-item animate-on-scroll">
      <div class="ep-trust-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      </div>
      <div>
        <span class="ep-trust-num">24/7</span>
        <span class="ep-trust-label">Customer Support</span>
      </div>
    </div>
  </section>

  <!-- SERVICES -->
  <section class="ep-services">
    <div class="ep-services-inner">
      <div class="ep-services-header animate-on-scroll">
        <div>
          <p class="ep-eyebrow">Our Services</p>
          <h2 class="ep-services-h2">Comprehensive<br/>Shipping Solutions</h2>
        </div>
        <a href="services.html" class="ep-services-viewall">View all services &rarr;</a>
      </div>
      <div class="ep-services-grid">
        <!-- Featured card: spans 2 rows -->
        <div class="ep-svc-featured animate-slide-left">
          <div class="ep-svc-featured-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
          </div>
          <p class="ep-svc-tag">Featured Service</p>
          <h3 class="ep-svc-featured-h">Sea Freight<br/>Forwarding</h3>
          <p class="ep-svc-featured-p">Full container loads, LCL consolidation, and project cargo — delivered reliably across every major shipping lane.</p>
          <a href="services.html" class="ep-svc-featured-link">Learn more &rarr;</a>
        </div>
        <!-- Secondary cards -->
        <div class="ep-svc-card animate-on-scroll">
          <div class="ep-svc-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>
          </div>
          <h3 class="ep-svc-h">Air Freight</h3>
          <p class="ep-svc-p">Express and standard air cargo with door-to-door delivery anywhere in the world.</p>
        </div>
        <div class="ep-svc-card animate-on-scroll">
          <div class="ep-svc-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
          </div>
          <h3 class="ep-svc-h">Customs Brokerage</h3>
          <p class="ep-svc-p">Expert UAE customs clearance, documentation, and full regulatory compliance.</p>
        </div>
        <div class="ep-svc-card animate-on-scroll">
          <div class="ep-svc-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>
          </div>
          <h3 class="ep-svc-h">Warehousing</h3>
          <p class="ep-svc-p">Secure, climate-controlled storage in Dubai with flexible short and long-term options.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- INLINE QUOTE FORM -->
  <section class="ep-quote" id="quote">
    <div class="ep-quote-inner">
      <div class="ep-quote-header animate-on-scroll">
        <div>
          <p class="ep-eyebrow ep-eyebrow--light">Request a Quote</p>
          <h2 class="ep-quote-h2">Tell us about<br/>your shipment</h2>
        </div>
        <div class="ep-quote-promise">
          <span class="ep-quote-promise-num">24h</span>
          <span class="ep-quote-promise-label">Response guarantee</span>
        </div>
      </div>
      <form class="ep-quote-form animate-on-scroll" id="homepage-quote-form" novalidate>
        <div class="ep-quote-field">
          <label for="q-origin">Origin</label>
          <input type="text" id="q-origin" name="origin" placeholder="e.g. Dubai, UAE" required/>
        </div>
        <div class="ep-quote-field">
          <label for="q-destination">Destination</label>
          <input type="text" id="q-destination" name="destination" placeholder="e.g. London, UK" required/>
        </div>
        <div class="ep-quote-field">
          <label for="q-cargo">Cargo Type</label>
          <select id="q-cargo" name="cargo_type" required>
            <option value="">Select type&hellip;</option>
            <option value="general">General Cargo</option>
            <option value="dangerous">Dangerous Goods</option>
            <option value="perishables">Perishables</option>
            <option value="project">Project Cargo</option>
            <option value="vehicles">Vehicles</option>
          </select>
        </div>
        <div class="ep-quote-field">
          <label for="q-contact">Your Contact</label>
          <input type="text" id="q-contact" name="contact" placeholder="Phone or email" required/>
        </div>
        <button type="submit" class="ep-quote-submit">Get Quote &rarr;</button>
      </form>
      <p class="ep-quote-disclaimer">We respond within 24 hours &middot; No commitment required &middot; All enquiries are confidential</p>
    </div>
  </section>

  <!-- ABOUT TEASER -->
  <section class="ep-about">
    <div class="ep-about-text animate-slide-left">
      <p class="ep-eyebrow">About Swift Sail</p>
      <h2 class="ep-about-h2">Your Trusted Gateway<br/>Between East &amp; West</h2>
      <p class="ep-about-p">With over 15 years in the UAE logistics landscape, Swift Sail Shipping LLC combines deep local expertise with a global network — bridging continents for businesses across the GCC and beyond.</p>
      <ul class="ep-about-features">
        <li>UAE Licensed &amp; Bonded</li>
        <li>24/7 Live Support</li>
        <li>Dubai Maritime City</li>
        <li>Real-time Tracking</li>
      </ul>
      <a href="about.html" class="ep-btn-outline">Our Story &rarr;</a>
    </div>
    <div class="ep-about-image animate-slide-right">
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuChpVPVjlp78-edT5vj490mtD7wbbhNqMAOAU27IYlwOCbZqdq3xM7EdTiOZYMedyrioAboaTQCmyAmnvI_aMXz3hI1I5yG53atbC1kXq8IYDXwtDnfyaVXLAqPYZtrQqYoGfgbNFzQGHL6HmX9Ici7fUogj5yKoHb3QRUPe0_f1MIIDJ-keqNz-1FfiS4gozr3GgAgDAO_IkHiWGXwO5spgYPgzxgGAwOp9F73_pLdyNjvO1tGpjO7AIFKTCWMl0RVktn9DXacr3o"
        alt="Swift Sail Shipping office in Dubai"
        class="ep-about-img"
      />
      <div class="ep-about-overlay">
        <span class="ep-about-tag">Established &middot; Dubai, UAE &middot; 2009</span>
      </div>
    </div>
  </section>

</main>

<!-- FOOTER -->
<footer class="ep-footer">
  <div class="ep-footer-inner">
    <div class="ep-footer-grid">
      <div class="ep-footer-brand">
        <div class="ep-footer-brand-logo">
          <img src="assets/img/Untitled design.png" alt="Swift Sail Shipping" class="ep-footer-logo"/>
          <div>
            <span class="ep-footer-brand-name">Swift Sail</span>
            <span class="ep-footer-brand-sub">Shipping L.L.C.</span>
          </div>
        </div>
        <p class="ep-footer-brand-p">Premium freight forwarding, customs clearance, and logistics services from Dubai to the world.</p>
      </div>
      <div class="ep-footer-col">
        <span class="ep-footer-col-h">Services</span>
        <ul>
          <li><a href="services.html">Sea Freight</a></li>
          <li><a href="services.html">Air Freight</a></li>
          <li><a href="services.html">Customs Brokerage</a></li>
          <li><a href="services.html">Warehousing</a></li>
        </ul>
      </div>
      <div class="ep-footer-col">
        <span class="ep-footer-col-h">Company</span>
        <ul>
          <li><a href="how-it-works.html">How It Works</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="blog.html">Blog &amp; Insights</a></li>
          <li><a href="get-quote.html">Get a Quote</a></li>
        </ul>
      </div>
      <div class="ep-footer-col">
        <span class="ep-footer-col-h">Contact</span>
        <div class="ep-footer-contact">
          <span class="ep-footer-dot"></span>
          <a href="tel:+971553424700">+971 55 342 4700</a>
        </div>
        <div class="ep-footer-contact">
          <span class="ep-footer-dot"></span>
          <a href="mailto:info@swiftsailship.com">info@swiftsailship.com</a>
        </div>
        <div class="ep-footer-contact">
          <span class="ep-footer-dot"></span>
          <span>Abu Hail, Tanvi Business Centre, M-101, Dubai</span>
        </div>
      </div>
    </div>
    <div class="ep-footer-bottom">
      <p class="ep-footer-copy" data-copyright-year>&copy; 2026 Swift Sail Shipping L.L.C. All rights reserved.</p>
      <a href="https://www.linkedin.com/company/swift-sail-shipping" class="ep-footer-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn &nearr;</a>
    </div>
  </div>
</footer>

<!-- Quote form: validate then redirect to get-quote.html -->
<script>
(function () {
  var form = document.getElementById('homepage-quote-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var valid = true;
    form.querySelectorAll('[required]').forEach(function (f) {
      f.style.borderBottomColor = '';
      if (!f.value.trim()) {
        valid = false;
        f.style.borderBottomColor = '#c0392b';
        f.addEventListener('input', function () { f.style.borderBottomColor = ''; }, { once: true });
      }
    });
    if (valid) window.location.href = 'get-quote.html';
  });
}());
</script>
<script src="js/script.js"></script>
</body>
</html>
```

- [ ] **Step 2: Open `index.html` in browser — confirm unstyled but structurally complete**

The page should show all sections as plain text, no layout. Logo should load. If any section is missing, check for unclosed tags.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat(homepage): write complete index.html markup for Editorial Prestige redesign"
```

---

## Task 3: Append EP Base + Nav CSS to `style.css`

**Files:**
- Modify: `css/style.css` (append at end of file)

- [ ] **Step 1: Append the following block to the end of `css/style.css`**

```css
/* ========================================================
   EDITORIAL PRESTIGE HOMEPAGE — ep-* component styles
   Prefixed ep- to avoid conflicts with existing classes.
   ======================================================== */

/* ----- BASE ----- */
.ep-body {
    font-family: 'DM Sans', 'Inter', sans-serif;
    background-color: var(--ep-cream);
    color: var(--ep-charcoal);
    margin: 0;
}

/* ----- SHARED ----- */
.ep-eyebrow {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: var(--ep-gold);
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 0 10px;
}
.ep-eyebrow::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 1px;
    background: var(--ep-gold);
    flex-shrink: 0;
}
.ep-eyebrow--light { color: var(--ep-gold); }
.ep-eyebrow-line {
    display: inline-block;
    width: 24px;
    height: 1px;
    background: var(--ep-gold);
    flex-shrink: 0;
}

.ep-btn-primary {
    display: inline-block;
    background: var(--ep-navy);
    color: var(--ep-gold);
    padding: 13px 28px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-decoration: none;
    transition: background 0.25s, transform 0.2s;
}
.ep-btn-primary:hover { background: var(--ep-navy-mid); transform: translateY(-1px); }

.ep-btn-ghost {
    display: inline-block;
    color: var(--ep-navy);
    padding: 13px 28px;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-decoration: none;
    border: 1px solid var(--ep-border);
    background: transparent;
    transition: border-color 0.25s, background 0.25s;
}
.ep-btn-ghost:hover { border-color: var(--ep-navy); background: rgba(15,22,35,0.04); }

.ep-btn-outline {
    display: inline-block;
    color: var(--ep-navy);
    padding: 11px 24px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-decoration: none;
    border: 1px solid var(--ep-navy);
    background: transparent;
    transition: background 0.25s, color 0.25s;
}
.ep-btn-outline:hover { background: var(--ep-navy); color: var(--ep-gold); }

/* ----- NAV ----- */
.ep-nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 50;
    background: var(--ep-cream);
    border-bottom: 1px solid var(--ep-border);
    transition: box-shadow 0.3s;
}
.ep-nav-stripe {
    height: 2px;
    background: linear-gradient(90deg, var(--ep-navy) 0%, var(--ep-gold) 50%, var(--ep-navy) 100%);
}
.ep-nav-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 32px;
    height: 66px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
}
.ep-nav-brand {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    flex-shrink: 0;
}
.ep-nav-logo {
    height: 48px;
    width: auto;
    mix-blend-mode: multiply;
}
.ep-nav-brand-text { line-height: 1.1; }
.ep-nav-brand-name {
    display: block;
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 14px;
    font-weight: 700;
    color: var(--ep-navy);
    letter-spacing: 2px;
    text-transform: uppercase;
}
.ep-nav-brand-sub {
    display: block;
    font-size: 7.5px;
    color: var(--ep-gold);
    letter-spacing: 3px;
    text-transform: uppercase;
}
.ep-nav-links {
    display: flex;
    align-items: center;
    gap: 28px;
}
.ep-nav-link {
    font-size: 11px;
    font-weight: 500;
    color: var(--ep-charcoal);
    text-decoration: none;
    letter-spacing: 0.5px;
    opacity: 0.75;
    transition: opacity 0.2s, color 0.2s;
    position: relative;
}
.ep-nav-link::after {
    content: '';
    position: absolute;
    bottom: -2px; left: 0;
    width: 0; height: 1px;
    background: var(--ep-gold);
    transition: width 0.3s;
}
.ep-nav-link:hover { opacity: 1; color: var(--ep-navy); }
.ep-nav-link:hover::after { width: 100%; }

.ep-nav-cta {
    background: var(--ep-navy);
    color: var(--ep-gold);
    padding: 9px 20px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-decoration: none;
    transition: background 0.2s;
    white-space: nowrap;
}
.ep-nav-cta:hover { background: var(--ep-navy-mid); }

.ep-nav-hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 6px 4px;
    flex-shrink: 0;
}
.ep-nav-hamburger span {
    display: block;
    width: 22px;
    height: 2px;
    background: var(--ep-navy);
    transition: transform 0.3s, opacity 0.3s;
}

.ep-mobile-menu {
    border-top: 1px solid var(--ep-border);
    background: var(--ep-cream);
    padding: 12px 32px 20px;
    display: flex;
    flex-direction: column;
}
/* "hidden" utility from tailwind.css sets display:none */
.ep-mobile-link {
    font-size: 14px;
    font-weight: 500;
    color: var(--ep-charcoal);
    text-decoration: none;
    padding: 12px 0;
    border-bottom: 1px solid var(--ep-border);
    transition: color 0.2s;
}
.ep-mobile-link:hover { color: var(--ep-navy); }
.ep-mobile-cta {
    margin-top: 16px;
    background: var(--ep-navy);
    color: var(--ep-gold);
    padding: 13px 24px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    display: block;
}
```

- [ ] **Step 2: Verify nav in browser**

Open `index.html`. Check:
- Cream background with 2px gold-stripe at very top
- Logo appears (white box is expected — `mix-blend-mode: multiply` blends it on cream)
- "SWIFT SAIL / SHIPPING L.L.C." in Playfair Display
- Nav links visible on desktop, "GET QUOTE" navy/gold button on right

- [ ] **Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat(styles): add EP base, shared utilities, and nav styles"
```

---

## Task 4: Hero + Trust Bar CSS

**Files:**
- Modify: `css/style.css` (append at end)

- [ ] **Step 1: Append to end of `css/style.css`**

```css
/* ----- HERO ----- */
.ep-hero {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    min-height: 540px;
    margin-top: 68px;
    border-bottom: 1px solid var(--ep-border);
}
.ep-hero-left {
    padding: 72px 56px 72px 64px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-right: 1px solid var(--ep-border);
    background: var(--ep-cream);
}
.ep-hero-eyebrow {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: var(--ep-gold);
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 24px;
}
.ep-hero-h1 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(36px, 4vw, 52px);
    font-weight: 700;
    color: var(--ep-navy);
    line-height: 1.1;
    letter-spacing: -0.5px;
    margin: 0 0 20px;
}
.ep-hero-h1 em { font-style: italic; color: var(--ep-gold); }
.ep-hero-sub {
    font-size: 15px;
    font-weight: 300;
    color: var(--ep-gray);
    line-height: 1.75;
    max-width: 400px;
    margin: 0 0 36px;
}
.ep-hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }

.ep-hero-right {
    background: var(--ep-navy);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 56px 40px;
    position: relative;
    overflow: hidden;
}
.ep-hero-right::after {
    content: '';
    position: absolute;
    bottom: -60px; right: -60px;
    width: 240px; height: 240px;
    border-radius: 50%;
    background: rgba(197,164,126,0.05);
    pointer-events: none;
}
.ep-hero-stat {
    text-align: center;
    padding: 28px 0;
    position: relative;
    z-index: 1;
    width: 100%;
}
.ep-hero-stat-num {
    display: block;
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(42px, 4vw, 56px);
    font-weight: 700;
    color: var(--ep-gold);
    line-height: 1;
}
.ep-hero-stat-label {
    display: block;
    font-size: 9px;
    font-weight: 500;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.4);
    margin-top: 8px;
}
.ep-hero-divider {
    width: 40px;
    height: 1px;
    background: rgba(197,164,126,0.2);
    flex-shrink: 0;
}

/* Hero stagger */
.ep-hero .ep-hero-eyebrow.animate-on-scroll  { transition-delay: 0.05s; }
.ep-hero .ep-hero-h1.animate-on-scroll       { transition-delay: 0.15s; }
.ep-hero .ep-hero-sub.animate-on-scroll      { transition-delay: 0.25s; }
.ep-hero .ep-hero-actions.animate-on-scroll  { transition-delay: 0.35s; }

/* ----- TRUST BAR ----- */
.ep-trust {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    background: var(--ep-cream-dark);
    border-bottom: 2px solid var(--ep-navy);
}
.ep-trust-item {
    padding: 22px 28px;
    display: flex;
    align-items: center;
    gap: 14px;
    border-right: 1px solid var(--ep-border);
}
.ep-trust-item:last-child { border-right: none; }
.ep-trust-icon {
    width: 38px; height: 38px;
    background: var(--ep-navy);
    border-radius: 3px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    color: var(--ep-gold);
}
.ep-trust-icon svg { width: 18px; height: 18px; }
.ep-trust-num {
    display: block;
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 20px;
    font-weight: 700;
    color: var(--ep-navy);
    line-height: 1.1;
}
.ep-trust-label {
    display: block;
    font-size: 9px;
    font-weight: 500;
    color: var(--ep-gray);
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-top: 2px;
}
```

- [ ] **Step 2: Verify in browser**

Refresh. Check:
- Hero: cream left panel, navy right panel with 3 gold statistics
- "the World" renders in italic gold
- Trust bar below hero: 4 items, cream-dark bg, navy bottom border, gold icon squares
- Numbers should count up (counters triggered by IntersectionObserver on scroll)

- [ ] **Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat(styles): add EP hero and trust bar styles"
```

---

## Task 5: Services + Quote Form + About + Footer CSS

**Files:**
- Modify: `css/style.css` (append at end)

- [ ] **Step 1: Append services styles to end of `css/style.css`**

```css
/* ----- SERVICES ----- */
.ep-services {
    background: var(--ep-cream);
    padding: 72px 0;
    border-bottom: 1px solid var(--ep-border);
}
.ep-services-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 64px;
}
.ep-services-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 36px;
}
.ep-services-h2 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(26px, 2.5vw, 34px);
    font-weight: 700;
    color: var(--ep-navy);
    line-height: 1.15;
    margin: 0;
}
.ep-services-viewall {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--ep-navy);
    text-decoration: none;
    border-bottom: 1px solid var(--ep-gold);
    padding-bottom: 2px;
    white-space: nowrap;
    transition: color 0.2s;
}
.ep-services-viewall:hover { color: var(--ep-gold); }

.ep-services-grid {
    display: grid;
    grid-template-columns: 1.6fr 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 14px;
}
.ep-svc-featured {
    grid-row: 1 / 3;
    background: var(--ep-navy);
    padding: 40px 36px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-height: 280px;
    position: relative;
    overflow: hidden;
    transition: background 0.3s;
}
.ep-svc-featured::before {
    content: '';
    position: absolute;
    top: -40px; right: -40px;
    width: 180px; height: 180px;
    border-radius: 50%;
    background: rgba(197,164,126,0.07);
    pointer-events: none;
}
.ep-svc-featured:hover { background: var(--ep-navy-mid); }
.ep-svc-featured-icon {
    position: absolute;
    top: 32px; left: 36px;
    width: 46px; height: 46px;
    background: rgba(197,164,126,0.15);
    border-radius: 3px;
    display: flex; align-items: center; justify-content: center;
    color: var(--ep-gold);
}
.ep-svc-featured-icon svg { width: 22px; height: 22px; }
.ep-svc-tag {
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--ep-gold);
    margin-bottom: 12px;
    position: relative; z-index: 1;
}
.ep-svc-featured-h {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 28px;
    font-weight: 700;
    color: #fff;
    line-height: 1.2;
    margin: 0 0 14px;
    position: relative; z-index: 1;
}
.ep-svc-featured-p {
    font-size: 13px;
    color: rgba(255,255,255,0.5);
    line-height: 1.65;
    margin: 0 0 22px;
    position: relative; z-index: 1;
    max-width: 260px;
}
.ep-svc-featured-link {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--ep-gold);
    text-decoration: none;
    position: relative; z-index: 1;
    transition: letter-spacing 0.2s;
}
.ep-svc-featured-link:hover { letter-spacing: 2px; }

.ep-svc-card {
    background: var(--ep-cream-dark);
    border: 1px solid var(--ep-border);
    border-left: 3px solid var(--ep-gold);
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.ep-svc-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(15,22,35,0.08);
}
.ep-svc-icon {
    width: 36px; height: 36px;
    background: var(--ep-navy);
    border-radius: 3px;
    display: flex; align-items: center; justify-content: center;
    color: var(--ep-gold);
    margin-bottom: 4px;
}
.ep-svc-icon svg { width: 17px; height: 17px; }
.ep-svc-h {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 17px;
    font-weight: 600;
    color: var(--ep-navy);
    margin: 0;
    line-height: 1.2;
}
.ep-svc-p {
    font-size: 12px;
    color: var(--ep-gray);
    line-height: 1.65;
    margin: 0;
}
```

- [ ] **Step 2: Append quote form styles to end of `css/style.css`**

```css
/* ----- QUOTE FORM ----- */
.ep-quote {
    background: var(--ep-navy);
    padding: 72px 0;
    position: relative;
    overflow: hidden;
}
.ep-quote::before {
    content: '';
    position: absolute;
    top: -100px; right: -100px;
    width: 400px; height: 400px;
    border-radius: 50%;
    background: rgba(197,164,126,0.04);
    pointer-events: none;
}
.ep-quote-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 64px;
    position: relative; z-index: 1;
}
.ep-quote-header {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 24px;
    margin-bottom: 36px;
}
.ep-quote-h2 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(24px, 2.5vw, 32px);
    font-weight: 700;
    color: #fff;
    line-height: 1.2;
    margin: 0;
}
.ep-quote-promise { text-align: right; }
.ep-quote-promise-num {
    display: block;
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 42px;
    font-weight: 700;
    color: var(--ep-gold);
    line-height: 1;
}
.ep-quote-promise-label {
    display: block;
    font-size: 9px;
    font-weight: 500;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.4);
    margin-top: 4px;
}
.ep-quote-form {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    gap: 14px;
    align-items: end;
}
.ep-quote-field { display: flex; flex-direction: column; gap: 7px; }
.ep-quote-field label {
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: rgba(197,164,126,0.7);
}
.ep-quote-field input,
.ep-quote-field select {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(197,164,126,0.15);
    border-bottom: 2px solid rgba(197,164,126,0.4);
    color: #fff;
    padding: 12px 14px;
    font-size: 13px;
    font-family: 'DM Sans', sans-serif;
    outline: none;
    transition: border-bottom-color 0.2s, background 0.2s;
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    box-sizing: border-box;
}
.ep-quote-field input:focus,
.ep-quote-field select:focus {
    background: rgba(255,255,255,0.09);
    border-bottom-color: var(--ep-gold);
}
.ep-quote-field input::placeholder { color: rgba(255,255,255,0.25); }
.ep-quote-field select option { background: var(--ep-navy); color: #fff; }
.ep-quote-submit {
    background: var(--ep-gold);
    color: var(--ep-navy);
    border: none;
    padding: 14px 26px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    white-space: nowrap;
    transition: background 0.2s, transform 0.2s;
}
.ep-quote-submit:hover { background: var(--ep-gold-light); transform: translateY(-1px); }
.ep-quote-disclaimer {
    font-size: 11px;
    color: rgba(255,255,255,0.25);
    margin-top: 14px;
    line-height: 1.5;
}
```

- [ ] **Step 3: Append about + footer styles to end of `css/style.css`**

```css
/* ----- ABOUT TEASER ----- */
.ep-about {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-top: 1px solid var(--ep-border);
    border-bottom: 1px solid var(--ep-border);
    background: var(--ep-cream);
}
.ep-about-text {
    padding: 72px 64px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-right: 1px solid var(--ep-border);
}
.ep-about-h2 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(24px, 2.5vw, 32px);
    font-weight: 700;
    color: var(--ep-navy);
    line-height: 1.2;
    margin: 0 0 18px;
}
.ep-about-p {
    font-size: 14px;
    font-weight: 300;
    color: var(--ep-gray);
    line-height: 1.75;
    margin: 0 0 24px;
    max-width: 420px;
}
.ep-about-features {
    list-style: none;
    padding: 0;
    margin: 0 0 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px 24px;
}
.ep-about-features li {
    font-size: 13px;
    font-weight: 500;
    color: var(--ep-charcoal);
    padding-left: 14px;
    position: relative;
    line-height: 1.4;
}
.ep-about-features li::before {
    content: '';
    position: absolute;
    left: 0; top: 7px;
    width: 5px; height: 5px;
    border-radius: 50%;
    background: var(--ep-gold);
}
.ep-about-image {
    position: relative;
    min-height: 340px;
    overflow: hidden;
}
.ep-about-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}
.ep-about-overlay {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    background: linear-gradient(to top, rgba(15,22,35,0.75), transparent);
    padding: 24px 28px;
}
.ep-about-tag {
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--ep-gold);
}

/* ----- FOOTER ----- */
.ep-footer {
    background: var(--ep-navy);
    border-top: 2px solid var(--ep-gold);
    padding: 56px 0 0;
}
.ep-footer-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 64px;
}
.ep-footer-grid {
    display: grid;
    grid-template-columns: 1.4fr 1fr 1fr 1fr;
    gap: 40px;
    padding-bottom: 40px;
}
.ep-footer-brand-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 14px;
}
.ep-footer-logo {
    height: 40px; width: auto;
    filter: brightness(0) invert(1) sepia(1) saturate(1.5) hue-rotate(10deg);
    opacity: 0.8;
}
.ep-footer-brand-name {
    display: block;
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 15px;
    font-weight: 700;
    color: #fff;
    letter-spacing: 2px;
    text-transform: uppercase;
    line-height: 1.1;
}
.ep-footer-brand-sub {
    display: block;
    font-size: 7.5px;
    color: var(--ep-gold);
    letter-spacing: 3px;
    text-transform: uppercase;
}
.ep-footer-brand-p {
    font-size: 12px;
    font-weight: 300;
    color: rgba(255,255,255,0.35);
    line-height: 1.7;
    max-width: 220px;
    margin: 0;
}
.ep-footer-col-h {
    display: block;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: var(--ep-gold);
    margin-bottom: 18px;
}
.ep-footer-col ul {
    list-style: none;
    padding: 0; margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.ep-footer-col ul li a {
    font-size: 13px;
    color: rgba(255,255,255,0.4);
    text-decoration: none;
    transition: color 0.2s;
}
.ep-footer-col ul li a:hover { color: rgba(255,255,255,0.75); }
.ep-footer-contact {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 12px;
    color: rgba(255,255,255,0.4);
    margin-bottom: 10px;
    line-height: 1.5;
}
.ep-footer-contact a {
    color: rgba(255,255,255,0.4);
    text-decoration: none;
    transition: color 0.2s;
}
.ep-footer-contact a:hover { color: rgba(255,255,255,0.75); }
.ep-footer-dot {
    width: 4px; height: 4px;
    border-radius: 50%;
    background: var(--ep-gold);
    margin-top: 5px;
    flex-shrink: 0;
}
.ep-footer-bottom {
    border-top: 1px solid rgba(255,255,255,0.08);
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.ep-footer-copy {
    font-size: 11px;
    color: rgba(255,255,255,0.25);
    margin: 0;
}
.ep-footer-linkedin {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: rgba(197,164,126,0.5);
    text-decoration: none;
    transition: color 0.2s;
}
.ep-footer-linkedin:hover { color: var(--ep-gold); }
```

- [ ] **Step 4: Verify all sections in browser**

Refresh. Check:
- Services: asymmetric grid — Sea Freight navy card spans full left column, 3 cream cards right with gold left border. Cards lift on hover.
- Quote form: navy band, 4 labeled fields in a row, gold "Get Quote →" button. Click submit with empty fields — red bottom border appears on empties.
- About: text left, office photo right, "Established · Dubai, UAE · 2009" gold tag over dark overlay.
- Footer: navy with gold top border, 4 columns, LinkedIn link bottom-right.

- [ ] **Step 5: Commit**

```bash
git add css/style.css
git commit -m "feat(styles): add EP services, quote form, about, and footer styles"
```

---

## Task 6: Responsive CSS

**Files:**
- Modify: `css/style.css` (append at end)

- [ ] **Step 1: Append responsive styles to end of `css/style.css`**

```css
/* ===== EP RESPONSIVE ===== */

@media (max-width: 1024px) {
    .ep-hero { grid-template-columns: 1fr; min-height: auto; }
    .ep-hero-left { padding: 80px 40px 40px; border-right: none; border-bottom: 1px solid var(--ep-border); }
    .ep-hero-right { flex-direction: row; justify-content: space-around; padding: 32px 40px; }
    .ep-hero-stat { padding: 0 20px; }
    .ep-hero-divider { width: 1px; height: 40px; }
    .ep-hero-stat-num { font-size: 38px; }

    .ep-trust { grid-template-columns: repeat(2, 1fr); }
    .ep-trust-item:nth-child(2) { border-right: none; }
    .ep-trust-item:nth-child(3),
    .ep-trust-item:nth-child(4) { border-top: 1px solid var(--ep-border); }
    .ep-trust-item:nth-child(4) { border-right: none; }

    .ep-services-inner { padding: 0 40px; }
    .ep-services-grid { grid-template-columns: 1fr 1fr; grid-template-rows: auto auto auto; }
    .ep-svc-featured { grid-row: 1 / 2; grid-column: 1 / 3; min-height: 200px; }

    .ep-quote-inner { padding: 0 40px; }
    .ep-quote-form { grid-template-columns: 1fr 1fr; }
    .ep-quote-submit { grid-column: 1 / 3; }

    .ep-about { grid-template-columns: 1fr; }
    .ep-about-text { padding: 56px 40px; border-right: none; border-bottom: 1px solid var(--ep-border); }
    .ep-about-image { min-height: 280px; }

    .ep-footer-inner { padding: 0 40px; }
    .ep-footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
}

@media (max-width: 768px) {
    .ep-nav-links { display: none; }
    .ep-nav-hamburger { display: flex; }
    .ep-nav-inner { padding: 0 20px; }

    .ep-hero-left { padding: 80px 24px 40px; }
    .ep-hero-h1 { font-size: 34px; }
    .ep-hero-right { flex-direction: column; padding: 32px 24px; }
    .ep-hero-stat { padding: 20px 0; }
    .ep-hero-divider { width: 40px; height: 1px; margin: 0 auto; }

    .ep-trust { grid-template-columns: 1fr 1fr; }
    .ep-trust-item { padding: 16px 18px; gap: 10px; }

    .ep-services { padding: 48px 0; }
    .ep-services-inner { padding: 0 24px; }
    .ep-services-header { flex-direction: column; align-items: flex-start; gap: 12px; }
    .ep-services-grid { grid-template-columns: 1fr; }
    .ep-svc-featured { grid-row: auto; grid-column: auto; min-height: 220px; }
    .ep-svc-featured-h { font-size: 22px; }

    .ep-quote { padding: 48px 0; }
    .ep-quote-inner { padding: 0 24px; }
    .ep-quote-header { grid-template-columns: 1fr; gap: 16px; }
    .ep-quote-promise { text-align: left; }
    .ep-quote-form { grid-template-columns: 1fr; }
    .ep-quote-submit { grid-column: auto; }

    .ep-about-text { padding: 48px 24px; }
    .ep-about-features { grid-template-columns: 1fr; }
    .ep-about-image { min-height: 240px; }

    .ep-footer-inner { padding: 0 24px; }
    .ep-footer-grid { grid-template-columns: 1fr; gap: 28px; }
    .ep-footer-brand-p { max-width: 100%; }
}
```

- [ ] **Step 2: Verify mobile in DevTools**

In Chrome, open DevTools → toggle device toolbar → set to 375px wide. Check:
- Hamburger appears; nav links hidden
- Hero stacks: headline above stats row
- Trust bar: 2×2 grid
- Services: all cards full width stacked
- Quote form: 4 fields stacked, full-width submit button
- About: text above photo
- Footer: single column
- No horizontal scrollbar at any viewport width

- [ ] **Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat(styles): add EP responsive breakpoints"
```

---

## Task 7: Final Verification + Wrap-up Commit

- [ ] **Step 1: Full desktop checklist (1280px+)**

Open `index.html` and verify each item:
- [ ] Gold gradient stripe at very top of nav
- [ ] Logo loads; white background blends into cream via `mix-blend-mode: multiply`
- [ ] "SWIFT SAIL / SHIPPING L.L.C." Playfair Display in nav
- [ ] On scroll past 60px, nav gets cream frosted box-shadow (no dark flash)
- [ ] Hero: "the World" is italic gold; stats count up from 0 on load
- [ ] Trust bar: 4 items, navy icons, counts animate on scroll
- [ ] Services: Sea Freight navy card spans 2 rows left; 3 cream cards right; cards lift on hover
- [ ] Quote form: empty submit shows red border; filled submit redirects to `get-quote.html`
- [ ] About: office photo loads with overlay tag
- [ ] Footer logo appears in gold/white (CSS filter applied)
- [ ] `data-copyright-year` updates year correctly

- [ ] **Step 2: Mobile checklist (375px in DevTools)**

- [ ] Hamburger toggles mobile menu open/close
- [ ] All nav links in mobile menu go to correct pages
- [ ] Quote form fields are full-width and tappable (no horizontal scroll)
- [ ] Footer single column, readable

- [ ] **Step 3: Final commit**

```bash
git add index.html css/style.css
git commit -m "feat(homepage): complete Editorial Prestige redesign

- Cream/navy/gold Editorial Prestige aesthetic with Playfair Display + DM Sans
- Split hero with animated stats, trust bar, asymmetric services grid
- Inline quote form with validation redirecting to get-quote.html
- About teaser with office photo, redesigned footer with gold top border
- Responsive at 768px and 1024px; all script.js hooks preserved"
```
