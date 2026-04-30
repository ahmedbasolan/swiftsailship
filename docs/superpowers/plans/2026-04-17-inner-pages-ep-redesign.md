# Inner Pages EP Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Adapt all 10 inner pages to match the Editorial Prestige design system used on the homepage (`index.html`).

**Architecture:** Add inner-page EP CSS classes to `css/style.css`, then rewrite each page's HTML to use the EP nav, EP fonts, and EP section components. Service detail pages currently use an inline Tailwind CDN and must be fully rewritten to use `css/style.css` + `css/tailwind.css`.

**Tech Stack:** Static HTML, CSS custom properties (`--ep-*`), Playfair Display + DM Sans (Google Fonts), compiled Tailwind CSS (`css/tailwind.css`), vanilla JS (`js/script.js`)

---

## File Map

| File | Action |
|------|--------|
| `css/style.css` | Add inner-page EP component classes |
| `about.html` | Rewrite with EP nav/fonts/sections |
| `services.html` | Rewrite with EP nav/fonts/sections |
| `get-quote.html` | Rewrite with EP nav/fonts/sections |
| `how-it-works.html` | Rewrite with EP nav/fonts/sections |
| `blog.html` | Rewrite with EP nav/fonts/sections |
| `blog/navigating-global-shipping-challenges-2026.html` | Rewrite with EP nav/fonts/article layout |
| `cargo-loading-unloading.html` | Full rewrite (remove inline Tailwind CDN) |
| `customs-broker.html` | Full rewrite (remove inline Tailwind CDN) |
| `freight-broker.html` | Full rewrite (remove inline Tailwind CDN) |
| `sea-shipping-lines-agent.html` | Full rewrite (remove inline Tailwind CDN) |

---

## Shared Reference

### Head block (root-level pages)
```html
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<link rel="icon" type="image/x-icon" href="assets/favicon.ico"/>
<link rel="apple-touch-icon" href="assets/apple-touch-icon.png"/>
<link rel="stylesheet" href="css/style.css"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet"/>
<link rel="stylesheet" href="css/tailwind.css"/>
```

### Head block (blog subdirectory — all paths need `../`)
```html
<link rel="icon" type="image/x-icon" href="../assets/favicon.ico"/>
<link rel="apple-touch-icon" href="../assets/apple-touch-icon.png"/>
<link rel="stylesheet" href="../css/style.css"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet"/>
<link rel="stylesheet" href="../css/tailwind.css"/>
```

### Nav HTML (root-level pages)
```html
<a href="#main" class="skip-link">Skip to main content</a>
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
  <div id="mobile-menu" class="ep-mobile-menu hidden">
    <a href="services.html" class="ep-mobile-link">Services</a>
    <a href="how-it-works.html" class="ep-mobile-link">How It Works</a>
    <a href="about.html" class="ep-mobile-link">About</a>
    <a href="blog.html" class="ep-mobile-link">Blog</a>
    <a href="get-quote.html" class="ep-mobile-cta">Get Quote</a>
  </div>
</nav>
```

### Nav HTML (blog subdirectory — `../` on all hrefs and src)
Same as above but: `href="../index.html"`, `src="../assets/img/Untitled design.png"`, `href="../services.html"`, etc.

### Footer HTML (root-level pages)
```html
<footer class="ep-footer">
  <div class="ep-footer-inner">
    <div class="ep-footer-grid">
      <div class="ep-footer-brand">
        <a href="index.html" class="ep-nav-brand" style="margin-bottom:12px;display:inline-flex;">
          <img src="assets/img/Untitled design.png" alt="Swift Sail Logo" class="ep-nav-logo"/>
          <div class="ep-nav-brand-text">
            <span class="ep-nav-brand-name">Swift Sail</span>
            <span class="ep-nav-brand-sub">Shipping L.L.C.</span>
          </div>
        </a>
        <p class="ep-footer-brand-p">Licensed freight forwarding and customs brokerage headquartered in Dubai, UAE.</p>
      </div>
      <div class="ep-footer-col">
        <h4 class="ep-footer-heading">Services</h4>
        <ul class="ep-footer-list">
          <li><a href="cargo-loading-unloading.html" class="ep-footer-link">Cargo Loading & Unloading</a></li>
          <li><a href="freight-broker.html" class="ep-footer-link">Freight Brokerage</a></li>
          <li><a href="customs-broker.html" class="ep-footer-link">Customs Brokerage</a></li>
          <li><a href="sea-shipping-lines-agent.html" class="ep-footer-link">Sea Shipping Agent</a></li>
        </ul>
      </div>
      <div class="ep-footer-col">
        <h4 class="ep-footer-heading">Company</h4>
        <ul class="ep-footer-list">
          <li><a href="about.html" class="ep-footer-link">About Us</a></li>
          <li><a href="how-it-works.html" class="ep-footer-link">How It Works</a></li>
          <li><a href="blog.html" class="ep-footer-link">Blog</a></li>
          <li><a href="get-quote.html" class="ep-footer-link">Get a Quote</a></li>
        </ul>
      </div>
      <div class="ep-footer-col">
        <h4 class="ep-footer-heading">Contact</h4>
        <ul class="ep-footer-list">
          <li class="ep-footer-link">Dubai, United Arab Emirates</li>
          <li><a href="tel:+971XXXXXXXX" class="ep-footer-link">+971 XX XXX XXXX</a></li>
          <li><a href="mailto:info@swiftsailshipping.com" class="ep-footer-link">info@swiftsailshipping.com</a></li>
        </ul>
      </div>
    </div>
    <div class="ep-footer-bottom">
      <span class="ep-footer-copy">&copy; <span id="footer-year"></span> Swift Sail Shipping L.L.C. All rights reserved.</span>
    </div>
  </div>
</footer>
<script src="js/script.js"></script>
```

### Script tag (blog subdirectory)
```html
<script src="../js/script.js"></script>
```

---

## Task 1: Add Inner-Page EP CSS Classes to `css/style.css`

**Files:**
- Modify: `css/style.css` (append after line 1371)

- [ ] **Step 1: Append inner-page component classes**

Open `css/style.css` and append the following after the last line:

```css
/* ===== INNER PAGE COMPONENTS ===== */

/* Page hero banner */
.ep-page-hero {
    background: var(--ep-cream);
    margin-top: 68px;
    padding: 80px 64px 56px;
    border-bottom: 2px solid var(--ep-border);
}
.ep-page-hero-inner {
    max-width: 1280px;
    margin: 0 auto;
}
.ep-page-h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(36px, 4vw, 52px);
    font-weight: 700;
    color: var(--ep-navy);
    line-height: 1.15;
    margin-bottom: 16px;
}
.ep-page-sub {
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    font-weight: 300;
    color: var(--ep-gray);
    max-width: 580px;
    line-height: 1.7;
}

/* Section wrappers */
.ep-section-wrap {
    max-width: 1280px;
    margin: 0 auto;
    padding: 72px 64px;
}
.ep-section-cream {
    background: var(--ep-cream);
}
.ep-section-navy {
    background: var(--ep-navy);
}
.ep-section-white {
    background: #fff;
}

/* Section heading */
.ep-section-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--ep-gold);
    margin-bottom: 12px;
    display: block;
}
.ep-section-h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(28px, 3vw, 40px);
    font-weight: 700;
    color: var(--ep-navy);
    line-height: 1.2;
    margin-bottom: 16px;
}
.ep-section-h2--light {
    color: var(--ep-cream);
}
.ep-section-p {
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    font-weight: 300;
    color: var(--ep-gray);
    line-height: 1.75;
    max-width: 600px;
}
.ep-section-p--light {
    color: var(--ep-cream-dark);
}

/* Stats row */
.ep-stats-row {
    display: flex;
    gap: 48px;
    flex-wrap: wrap;
    margin-top: 40px;
}
.ep-stat-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.ep-stat-num {
    font-family: 'Playfair Display', serif;
    font-size: 36px;
    font-weight: 700;
    color: var(--ep-gold);
    line-height: 1;
}
.ep-stat-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 500;
    color: var(--ep-gray);
    letter-spacing: 0.5px;
}

/* Cards grid */
.ep-cards-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-top: 40px;
}
.ep-cards-grid--2col {
    grid-template-columns: repeat(2, 1fr);
}
.ep-cards-grid--4col {
    grid-template-columns: repeat(4, 1fr);
}
.ep-card {
    background: #fff;
    border: 1px solid var(--ep-border);
    padding: 32px 28px;
    transition: box-shadow 0.25s, transform 0.25s;
}
.ep-card:hover {
    box-shadow: 0 8px 32px rgba(15,22,35,0.08);
    transform: translateY(-3px);
}
.ep-card--cream {
    background: var(--ep-cream);
}
.ep-card--navy {
    background: var(--ep-navy-mid);
    border-color: rgba(197,164,126,0.15);
}
.ep-card-icon {
    width: 44px;
    height: 44px;
    margin-bottom: 20px;
    color: var(--ep-gold);
}
.ep-card-h {
    font-family: 'Playfair Display', serif;
    font-size: 18px;
    font-weight: 600;
    color: var(--ep-navy);
    margin-bottom: 10px;
}
.ep-card-h--light {
    color: var(--ep-cream);
}
.ep-card-p {
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 300;
    color: var(--ep-gray);
    line-height: 1.7;
}
.ep-card-p--light {
    color: var(--ep-cream-dark);
}

/* Process steps */
.ep-steps-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-top: 40px;
}
.ep-step {
    background: var(--ep-cream-dark);
    border: 1px solid var(--ep-border);
    padding: 40px 28px 28px;
    position: relative;
}
.ep-step-num {
    position: absolute;
    top: -1px;
    left: -1px;
    width: 36px;
    height: 36px;
    background: var(--ep-gold);
    color: var(--ep-navy);
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
}
.ep-step-h {
    font-family: 'Playfair Display', serif;
    font-size: 17px;
    font-weight: 600;
    color: var(--ep-navy);
    margin-bottom: 10px;
}
.ep-step-p {
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 300;
    color: var(--ep-gray);
    line-height: 1.7;
}

/* FAQ accordion */
.ep-faq-list {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 2px;
}
.ep-faq-item {
    border: 1px solid var(--ep-border);
    background: #fff;
}
.ep-faq-item summary {
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    font-weight: 500;
    color: var(--ep-navy);
    padding: 20px 24px;
    cursor: pointer;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
}
.ep-faq-item summary::-webkit-details-marker { display: none; }
.ep-faq-item summary::after {
    content: '+';
    font-size: 20px;
    color: var(--ep-gold);
    flex-shrink: 0;
    margin-left: 16px;
    transition: transform 0.2s;
}
.ep-faq-item[open] summary::after {
    transform: rotate(45deg);
}
.ep-faq-body {
    padding: 0 24px 20px;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 300;
    color: var(--ep-gray);
    line-height: 1.75;
}

/* Contact / Quote page */
.ep-contact-grid {
    display: grid;
    grid-template-columns: 1fr 400px;
    gap: 0;
    border: 1px solid var(--ep-border);
}
.ep-contact-form-panel {
    padding: 48px 40px;
    background: #fff;
}
.ep-contact-info {
    background: var(--ep-navy);
    padding: 48px 36px;
    display: flex;
    flex-direction: column;
    gap: 28px;
}
.ep-contact-info-h {
    font-family: 'Playfair Display', serif;
    font-size: 22px;
    font-weight: 600;
    color: var(--ep-cream);
    margin-bottom: 4px;
}
.ep-contact-info-p {
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 300;
    color: var(--ep-cream-dark);
    line-height: 1.7;
}
.ep-contact-item {
    display: flex;
    gap: 14px;
    align-items: flex-start;
}
.ep-contact-item-icon {
    width: 20px;
    height: 20px;
    color: var(--ep-gold);
    flex-shrink: 0;
    margin-top: 2px;
}
.ep-contact-item-text {
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 300;
    color: var(--ep-cream-dark);
    line-height: 1.6;
}
.ep-contact-item-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--ep-gold);
    display: block;
    margin-bottom: 3px;
}

/* Form fields */
.ep-form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}
.ep-form-full {
    grid-column: 1 / -1;
}
.ep-form-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
}
.ep-form-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 600;
    color: var(--ep-navy);
    letter-spacing: 0.5px;
    text-transform: uppercase;
}
.ep-form-input,
.ep-form-select,
.ep-form-textarea {
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 300;
    color: var(--ep-navy);
    background: var(--ep-cream);
    border: 1px solid var(--ep-border);
    padding: 12px 16px;
    outline: none;
    transition: border-color 0.2s;
    width: 100%;
    box-sizing: border-box;
}
.ep-form-input:focus,
.ep-form-select:focus,
.ep-form-textarea:focus {
    border-color: var(--ep-gold);
}
.ep-form-textarea {
    resize: vertical;
    min-height: 120px;
}
.ep-form-submit {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--ep-navy);
    background: var(--ep-gold);
    border: none;
    padding: 16px 40px;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s;
    margin-top: 8px;
}
.ep-form-submit:hover {
    background: var(--ep-gold-light);
    transform: translateY(-1px);
}

/* Blog */
.ep-blog-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    margin-top: 40px;
}
.ep-blog-card {
    background: #fff;
    border: 1px solid var(--ep-border);
    display: flex;
    flex-direction: column;
    transition: box-shadow 0.25s, transform 0.25s;
    text-decoration: none;
}
.ep-blog-card:hover {
    box-shadow: 0 8px 32px rgba(15,22,35,0.08);
    transform: translateY(-3px);
}
.ep-blog-card-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
}
.ep-blog-card-body {
    padding: 28px;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.ep-blog-card-tag {
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--ep-gold);
}
.ep-blog-card-h {
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    font-weight: 600;
    color: var(--ep-navy);
    line-height: 1.3;
}
.ep-blog-card-p {
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 300;
    color: var(--ep-gray);
    line-height: 1.7;
    flex: 1;
}
.ep-blog-card-meta {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    color: var(--ep-gray);
    margin-top: 8px;
}

/* Blog article page */
.ep-article-wrap {
    max-width: 780px;
    margin: 0 auto;
    padding: 64px 32px;
}
.ep-article-tag {
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--ep-gold);
    display: block;
    margin-bottom: 16px;
}
.ep-article-h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(28px, 3.5vw, 44px);
    font-weight: 700;
    color: var(--ep-navy);
    line-height: 1.2;
    margin-bottom: 20px;
}
.ep-article-meta {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    color: var(--ep-gray);
    margin-bottom: 40px;
    padding-bottom: 24px;
    border-bottom: 1px solid var(--ep-border);
}
.ep-article-body {
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
    font-weight: 300;
    color: var(--ep-charcoal);
    line-height: 1.85;
}
.ep-article-body h2 {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    font-weight: 600;
    color: var(--ep-navy);
    margin: 48px 0 16px;
}
.ep-article-body h3 {
    font-family: 'Playfair Display', serif;
    font-size: 19px;
    font-weight: 600;
    color: var(--ep-navy);
    margin: 32px 0 12px;
}
.ep-article-body p { margin-bottom: 20px; }
.ep-article-body ul, .ep-article-body ol {
    margin: 0 0 20px 24px;
}
.ep-article-body li { margin-bottom: 8px; }
.ep-article-body strong { font-weight: 600; color: var(--ep-navy); }
.ep-article-back {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--ep-gold);
    text-decoration: none;
    margin-bottom: 40px;
}
.ep-article-back:hover { color: var(--ep-navy); }

/* CTA banner */
.ep-cta-band {
    background: var(--ep-navy);
    padding: 80px 64px;
    text-align: center;
}
.ep-cta-band-inner {
    max-width: 640px;
    margin: 0 auto;
}
.ep-cta-band-h {
    font-family: 'Playfair Display', serif;
    font-size: clamp(26px, 3vw, 38px);
    font-weight: 700;
    color: var(--ep-cream);
    margin-bottom: 16px;
}
.ep-cta-band-p {
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    font-weight: 300;
    color: var(--ep-cream-dark);
    line-height: 1.7;
    margin-bottom: 32px;
}

/* Divider rule */
.ep-rule {
    border: none;
    border-top: 1px solid var(--ep-border);
    margin: 0;
}
.ep-rule--gold {
    border-color: var(--ep-gold);
    width: 48px;
    margin: 16px 0 24px;
}

/* ===== INNER PAGE RESPONSIVE ===== */
@media (max-width: 1024px) {
    .ep-page-hero { padding: 64px 40px 40px; }
    .ep-section-wrap { padding: 56px 40px; }
    .ep-cards-grid { grid-template-columns: repeat(2, 1fr); }
    .ep-cards-grid--4col { grid-template-columns: repeat(2, 1fr); }
    .ep-steps-grid { grid-template-columns: repeat(2, 1fr); }
    .ep-contact-grid { grid-template-columns: 1fr; }
    .ep-contact-info { padding: 36px 28px; }
    .ep-blog-grid { grid-template-columns: 1fr; }
    .ep-cta-band { padding: 60px 40px; }
}
@media (max-width: 768px) {
    .ep-page-hero { padding: 48px 24px 32px; }
    .ep-section-wrap { padding: 48px 24px; }
    .ep-cards-grid { grid-template-columns: 1fr; }
    .ep-cards-grid--2col { grid-template-columns: 1fr; }
    .ep-steps-grid { grid-template-columns: 1fr; }
    .ep-form-grid { grid-template-columns: 1fr; }
    .ep-stats-row { gap: 28px; }
    .ep-cta-band { padding: 48px 24px; }
    .ep-article-wrap { padding: 40px 20px; }
}
```

- [ ] **Step 2: Verify no CSS syntax errors**

Run:
```bash
node -e "const fs = require('fs'); const css = fs.readFileSync('css/style.css','utf8'); console.log('Lines:', css.split('\n').length, '| Braces balanced:', (css.match(/\{/g)||[]).length === (css.match(/\}/g)||[]).length);"
```
Expected: `Lines: ~1700 | Braces balanced: true`

- [ ] **Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat(styles): add inner-page EP component classes"
```

---

## Task 2: Rewrite `about.html`

**Files:**
- Modify: `about.html`

**Current content to preserve:** company story, 3 stats (15+ years / 12 countries / 500K+ shipments), Mission / Vision / Values cards, Why Choose Us (4 cards), CTA.

- [ ] **Step 1: Replace `about.html` with EP version**

Write the complete file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>About Us — Swift Sail Shipping L.L.C.</title>
  <meta name="description" content="Learn about Swift Sail Shipping — Dubai-licensed freight forwarder and customs broker with 15+ years of logistics expertise."/>
  <link rel="icon" type="image/x-icon" href="assets/favicon.ico"/>
  <link rel="apple-touch-icon" href="assets/apple-touch-icon.png"/>
  <link rel="stylesheet" href="css/style.css"/>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="css/tailwind.css"/>
</head>
<body style="font-family:'DM Sans',sans-serif;background:#fff;margin:0;">

<a href="#main" class="skip-link">Skip to main content</a>
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
      <a href="about.html" class="ep-nav-link" aria-current="page">About</a>
      <a href="blog.html" class="ep-nav-link">Blog</a>
      <a href="get-quote.html" class="ep-nav-cta">Get Quote</a>
    </div>
    <button id="mobile-menu-btn" class="ep-nav-hamburger" aria-label="Toggle navigation menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div id="mobile-menu" class="ep-mobile-menu hidden">
    <a href="services.html" class="ep-mobile-link">Services</a>
    <a href="how-it-works.html" class="ep-mobile-link">How It Works</a>
    <a href="about.html" class="ep-mobile-link">About</a>
    <a href="blog.html" class="ep-mobile-link">Blog</a>
    <a href="get-quote.html" class="ep-mobile-cta">Get Quote</a>
  </div>
</nav>

<main id="main">
  <!-- Page Hero -->
  <section class="ep-page-hero">
    <div class="ep-page-hero-inner">
      <span class="ep-section-label">Our Story</span>
      <h1 class="ep-page-h1">Trusted Logistics,<br/>Built in Dubai</h1>
      <p class="ep-page-sub">Swift Sail Shipping is a UAE-licensed freight forwarder and customs broker serving global trade routes from our Dubai headquarters.</p>
      <div class="ep-stats-row">
        <div class="ep-stat-item">
          <span class="ep-stat-num" data-counter="15" data-suffix="+">0+</span>
          <span class="ep-stat-label">Years Experience</span>
        </div>
        <div class="ep-stat-item">
          <span class="ep-stat-num" data-counter="12" data-suffix="+">0+</span>
          <span class="ep-stat-label">Countries Served</span>
        </div>
        <div class="ep-stat-item">
          <span class="ep-stat-num" data-counter="500" data-suffix="K+">0K+</span>
          <span class="ep-stat-label">Shipments Handled</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Who We Are -->
  <section class="ep-section-white">
    <div class="ep-section-wrap" style="display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;">
      <div>
        <span class="ep-section-label">Who We Are</span>
        <h2 class="ep-section-h2">A Partner in Every Port</h2>
        <hr class="ep-rule ep-rule--gold"/>
        <p class="ep-section-p" style="margin-bottom:16px;">Founded in Dubai, Swift Sail Shipping has grown from a regional freight forwarder into a full-service logistics partner connecting businesses across the Middle East, Asia, Europe, and Africa.</p>
        <p class="ep-section-p">Our team of licensed brokers and logistics specialists brings deep knowledge of UAE trade regulations, port procedures, and international freight markets — so your cargo moves without surprises.</p>
      </div>
      <div>
        <img src="assets/img/global-reach-background.jpg" alt="Swift Sail global logistics operations" style="width:100%;height:360px;object-fit:cover;display:block;"/>
      </div>
    </div>
  </section>

  <!-- Mission / Vision / Values -->
  <section class="ep-section-cream">
    <div class="ep-section-wrap">
      <span class="ep-section-label">Our Foundation</span>
      <h2 class="ep-section-h2">What Drives Us</h2>
      <hr class="ep-rule ep-rule--gold"/>
      <div class="ep-cards-grid" style="margin-top:32px;">
        <div class="ep-card ep-card--cream">
          <svg class="ep-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
          <h3 class="ep-card-h">Mission</h3>
          <p class="ep-card-p">To deliver reliable, transparent freight and customs solutions that empower businesses to trade confidently across borders.</p>
        </div>
        <div class="ep-card ep-card--cream">
          <svg class="ep-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>
          <h3 class="ep-card-h">Vision</h3>
          <p class="ep-card-p">To be the most trusted logistics partner in the UAE and a gateway brand for companies entering Middle Eastern markets.</p>
        </div>
        <div class="ep-card ep-card--cream">
          <svg class="ep-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          <h3 class="ep-card-h">Values</h3>
          <p class="ep-card-p">Integrity in every transaction. Precision in every shipment. Accountability at every stage of the supply chain.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Choose Us -->
  <section class="ep-section-white">
    <div class="ep-section-wrap">
      <span class="ep-section-label">Why Swift Sail</span>
      <h2 class="ep-section-h2">Four Reasons Companies Choose Us</h2>
      <hr class="ep-rule ep-rule--gold"/>
      <div class="ep-cards-grid ep-cards-grid--4col" style="margin-top:32px;">
        <div class="ep-card">
          <svg class="ep-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="1"/><path d="M16 7V5a2 2 0 0 0-4 0v2M8 7V5a2 2 0 0 0-4 0v2"/></svg>
          <h3 class="ep-card-h">UAE Licensed</h3>
          <p class="ep-card-p">Fully licensed by UAE authorities — customs, freight, and trade compliance handled in-house.</p>
        </div>
        <div class="ep-card">
          <svg class="ep-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          <h3 class="ep-card-h">End-to-End Coverage</h3>
          <p class="ep-card-p">From port pickup to door delivery, we manage every link — no handoffs, no gaps, no surprises.</p>
        </div>
        <div class="ep-card">
          <svg class="ep-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <h3 class="ep-card-h">24/7 Support</h3>
          <p class="ep-card-p">Our operations team is reachable around the clock — because cargo doesn't keep office hours.</p>
        </div>
        <div class="ep-card">
          <svg class="ep-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <h3 class="ep-card-h">Live Tracking</h3>
          <p class="ep-card-p">Real-time shipment visibility so you always know exactly where your cargo is and when it arrives.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <div class="ep-cta-band">
    <div class="ep-cta-band-inner">
      <h2 class="ep-cta-band-h">Ready to Ship with Confidence?</h2>
      <p class="ep-cta-band-p">Get a tailored freight quote from our Dubai team — no commitment, no delays.</p>
      <a href="get-quote.html" class="ep-btn ep-btn--gold">Request a Quote</a>
    </div>
  </div>
</main>

<footer class="ep-footer">
  <div class="ep-footer-inner">
    <div class="ep-footer-grid">
      <div class="ep-footer-brand">
        <a href="index.html" class="ep-nav-brand" style="margin-bottom:12px;display:inline-flex;">
          <img src="assets/img/Untitled design.png" alt="Swift Sail Logo" class="ep-nav-logo"/>
          <div class="ep-nav-brand-text">
            <span class="ep-nav-brand-name">Swift Sail</span>
            <span class="ep-nav-brand-sub">Shipping L.L.C.</span>
          </div>
        </a>
        <p class="ep-footer-brand-p">Licensed freight forwarding and customs brokerage headquartered in Dubai, UAE.</p>
      </div>
      <div class="ep-footer-col">
        <h4 class="ep-footer-heading">Services</h4>
        <ul class="ep-footer-list">
          <li><a href="cargo-loading-unloading.html" class="ep-footer-link">Cargo Loading & Unloading</a></li>
          <li><a href="freight-broker.html" class="ep-footer-link">Freight Brokerage</a></li>
          <li><a href="customs-broker.html" class="ep-footer-link">Customs Brokerage</a></li>
          <li><a href="sea-shipping-lines-agent.html" class="ep-footer-link">Sea Shipping Agent</a></li>
        </ul>
      </div>
      <div class="ep-footer-col">
        <h4 class="ep-footer-heading">Company</h4>
        <ul class="ep-footer-list">
          <li><a href="about.html" class="ep-footer-link">About Us</a></li>
          <li><a href="how-it-works.html" class="ep-footer-link">How It Works</a></li>
          <li><a href="blog.html" class="ep-footer-link">Blog</a></li>
          <li><a href="get-quote.html" class="ep-footer-link">Get a Quote</a></li>
        </ul>
      </div>
      <div class="ep-footer-col">
        <h4 class="ep-footer-heading">Contact</h4>
        <ul class="ep-footer-list">
          <li class="ep-footer-link">Dubai, United Arab Emirates</li>
          <li><a href="tel:+971XXXXXXXX" class="ep-footer-link">+971 XX XXX XXXX</a></li>
          <li><a href="mailto:info@swiftsailshipping.com" class="ep-footer-link">info@swiftsailshipping.com</a></li>
        </ul>
      </div>
    </div>
    <div class="ep-footer-bottom">
      <span class="ep-footer-copy">&copy; <span id="footer-year"></span> Swift Sail Shipping L.L.C. All rights reserved.</span>
    </div>
  </div>
</footer>
<script src="js/script.js"></script>
</body>
</html>
```

- [ ] **Step 2: Commit**

```bash
git add about.html
git commit -m "feat(about): apply EP design system"
```

---

## Task 3: Rewrite `services.html`

**Files:**
- Modify: `services.html`

**Current content to preserve:** 4 services (cargo loading/unloading, freight brokerage, customs brokerage, sea shipping agent), global reach section, CTA.

- [ ] **Step 1: Replace `services.html` with EP version**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Services — Swift Sail Shipping L.L.C.</title>
  <meta name="description" content="Cargo loading, freight brokerage, customs clearance and sea shipping agent services in Dubai, UAE."/>
  <link rel="icon" type="image/x-icon" href="assets/favicon.ico"/>
  <link rel="apple-touch-icon" href="assets/apple-touch-icon.png"/>
  <link rel="stylesheet" href="css/style.css"/>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="css/tailwind.css"/>
</head>
<body style="font-family:'DM Sans',sans-serif;background:#fff;margin:0;">

<a href="#main" class="skip-link">Skip to main content</a>
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
      <a href="services.html" class="ep-nav-link" aria-current="page">Services</a>
      <a href="how-it-works.html" class="ep-nav-link">How It Works</a>
      <a href="about.html" class="ep-nav-link">About</a>
      <a href="blog.html" class="ep-nav-link">Blog</a>
      <a href="get-quote.html" class="ep-nav-cta">Get Quote</a>
    </div>
    <button id="mobile-menu-btn" class="ep-nav-hamburger" aria-label="Toggle navigation menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div id="mobile-menu" class="ep-mobile-menu hidden">
    <a href="services.html" class="ep-mobile-link">Services</a>
    <a href="how-it-works.html" class="ep-mobile-link">How It Works</a>
    <a href="about.html" class="ep-mobile-link">About</a>
    <a href="blog.html" class="ep-mobile-link">Blog</a>
    <a href="get-quote.html" class="ep-mobile-cta">Get Quote</a>
  </div>
</nav>

<main id="main">
  <!-- Page Hero -->
  <section class="ep-page-hero">
    <div class="ep-page-hero-inner">
      <span class="ep-section-label">What We Do</span>
      <h1 class="ep-page-h1">Complete Freight &amp;<br/>Logistics Services</h1>
      <p class="ep-page-sub">From port to warehouse, we handle every stage of your cargo's journey — licensed, insured, and on time.</p>
    </div>
  </section>

  <!-- Services Grid -->
  <section class="ep-section-white">
    <div class="ep-section-wrap">
      <div class="ep-cards-grid ep-cards-grid--2col">

        <a href="cargo-loading-unloading.html" class="ep-card" style="text-decoration:none;">
          <svg class="ep-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
          <h3 class="ep-card-h">Cargo Loading &amp; Unloading</h3>
          <p class="ep-card-p">Professional handling of all cargo types — breakbulk, containerised, and project freight — with strict adherence to port and safety regulations.</p>
          <span style="display:inline-block;margin-top:16px;font-size:12px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--ep-gold);">Learn More →</span>
        </a>

        <a href="freight-broker.html" class="ep-card" style="text-decoration:none;">
          <svg class="ep-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
          <h3 class="ep-card-h">Freight Brokerage</h3>
          <p class="ep-card-p">Access to a global network of vetted carriers for sea, air, and overland freight. We negotiate rates and manage bookings on your behalf.</p>
          <span style="display:inline-block;margin-top:16px;font-size:12px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--ep-gold);">Learn More →</span>
        </a>

        <a href="customs-broker.html" class="ep-card" style="text-decoration:none;">
          <svg class="ep-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          <h3 class="ep-card-h">Customs Brokerage</h3>
          <p class="ep-card-p">UAE-licensed customs clearance for imports and exports. We handle documentation, HS classification, duty calculations, and regulatory compliance.</p>
          <span style="display:inline-block;margin-top:16px;font-size:12px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--ep-gold);">Learn More →</span>
        </a>

        <a href="sea-shipping-lines-agent.html" class="ep-card" style="text-decoration:none;">
          <svg class="ep-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 20h20M5 20V8l7-5 7 5v12"/><path d="M9 20v-5h6v5"/></svg>
          <h3 class="ep-card-h">Sea Shipping Lines Agent</h3>
          <p class="ep-card-p">As an authorised shipping line agent in UAE ports, we coordinate vessel calls, container movements, and documentation for shipping lines.</p>
          <span style="display:inline-block;margin-top:16px;font-size:12px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--ep-gold);">Learn More →</span>
        </a>

      </div>
    </div>
  </section>

  <!-- Global Reach -->
  <section class="ep-section-navy">
    <div class="ep-section-wrap" style="display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;">
      <div>
        <span class="ep-section-label">Our Reach</span>
        <h2 class="ep-section-h2 ep-section-h2--light">Connecting Dubai<br/>to the World</h2>
        <hr class="ep-rule ep-rule--gold"/>
        <p class="ep-section-p ep-section-p--light" style="margin-bottom:24px;">From Jebel Ali to Rotterdam, Shanghai to Mombasa — our partner network spans major trade corridors across six continents.</p>
        <a href="get-quote.html" class="ep-btn ep-btn--gold">Get a Freight Quote</a>
      </div>
      <div>
        <img src="assets/img/global-reach-background.jpg" alt="Global shipping network" style="width:100%;height:340px;object-fit:cover;display:block;"/>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <div class="ep-cta-band">
    <div class="ep-cta-band-inner">
      <h2 class="ep-cta-band-h">Not Sure Which Service You Need?</h2>
      <p class="ep-cta-band-p">Talk to our team — we'll assess your cargo requirements and recommend the right solution.</p>
      <a href="get-quote.html" class="ep-btn ep-btn--gold">Request a Consultation</a>
    </div>
  </div>
</main>

<footer class="ep-footer">
  <div class="ep-footer-inner">
    <div class="ep-footer-grid">
      <div class="ep-footer-brand">
        <a href="index.html" class="ep-nav-brand" style="margin-bottom:12px;display:inline-flex;">
          <img src="assets/img/Untitled design.png" alt="Swift Sail Logo" class="ep-nav-logo"/>
          <div class="ep-nav-brand-text">
            <span class="ep-nav-brand-name">Swift Sail</span>
            <span class="ep-nav-brand-sub">Shipping L.L.C.</span>
          </div>
        </a>
        <p class="ep-footer-brand-p">Licensed freight forwarding and customs brokerage headquartered in Dubai, UAE.</p>
      </div>
      <div class="ep-footer-col">
        <h4 class="ep-footer-heading">Services</h4>
        <ul class="ep-footer-list">
          <li><a href="cargo-loading-unloading.html" class="ep-footer-link">Cargo Loading & Unloading</a></li>
          <li><a href="freight-broker.html" class="ep-footer-link">Freight Brokerage</a></li>
          <li><a href="customs-broker.html" class="ep-footer-link">Customs Brokerage</a></li>
          <li><a href="sea-shipping-lines-agent.html" class="ep-footer-link">Sea Shipping Agent</a></li>
        </ul>
      </div>
      <div class="ep-footer-col">
        <h4 class="ep-footer-heading">Company</h4>
        <ul class="ep-footer-list">
          <li><a href="about.html" class="ep-footer-link">About Us</a></li>
          <li><a href="how-it-works.html" class="ep-footer-link">How It Works</a></li>
          <li><a href="blog.html" class="ep-footer-link">Blog</a></li>
          <li><a href="get-quote.html" class="ep-footer-link">Get a Quote</a></li>
        </ul>
      </div>
      <div class="ep-footer-col">
        <h4 class="ep-footer-heading">Contact</h4>
        <ul class="ep-footer-list">
          <li class="ep-footer-link">Dubai, United Arab Emirates</li>
          <li><a href="tel:+971XXXXXXXX" class="ep-footer-link">+971 XX XXX XXXX</a></li>
          <li><a href="mailto:info@swiftsailshipping.com" class="ep-footer-link">info@swiftsailshipping.com</a></li>
        </ul>
      </div>
    </div>
    <div class="ep-footer-bottom">
      <span class="ep-footer-copy">&copy; <span id="footer-year"></span> Swift Sail Shipping L.L.C. All rights reserved.</span>
    </div>
  </div>
</footer>
<script src="js/script.js"></script>
</body>
</html>
```

- [ ] **Step 2: Commit**

```bash
git add services.html
git commit -m "feat(services): apply EP design system"
```

---

## Task 4: Rewrite `get-quote.html`

**Files:**
- Modify: `get-quote.html`

**Current content to preserve:** form fields (full name, company, email, phone, service select, message), contact info (address, phone, email, hours), FAQ section.

- [ ] **Step 1: Replace `get-quote.html` with EP version**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Get a Quote — Swift Sail Shipping L.L.C.</title>
  <meta name="description" content="Request a freight quote from Swift Sail Shipping. Fast response, transparent pricing, UAE-based team."/>
  <link rel="icon" type="image/x-icon" href="assets/favicon.ico"/>
  <link rel="apple-touch-icon" href="assets/apple-touch-icon.png"/>
  <link rel="stylesheet" href="css/style.css"/>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="css/tailwind.css"/>
</head>
<body style="font-family:'DM Sans',sans-serif;background:#fff;margin:0;">

<a href="#main" class="skip-link">Skip to main content</a>
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
      <a href="get-quote.html" class="ep-nav-cta" aria-current="page">Get Quote</a>
    </div>
    <button id="mobile-menu-btn" class="ep-nav-hamburger" aria-label="Toggle navigation menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div id="mobile-menu" class="ep-mobile-menu hidden">
    <a href="services.html" class="ep-mobile-link">Services</a>
    <a href="how-it-works.html" class="ep-mobile-link">How It Works</a>
    <a href="about.html" class="ep-mobile-link">About</a>
    <a href="blog.html" class="ep-mobile-link">Blog</a>
    <a href="get-quote.html" class="ep-mobile-cta">Get Quote</a>
  </div>
</nav>

<main id="main">
  <!-- Page Hero -->
  <section class="ep-page-hero">
    <div class="ep-page-hero-inner">
      <span class="ep-section-label">Free Consultation</span>
      <h1 class="ep-page-h1">Request a Freight Quote</h1>
      <p class="ep-page-sub">Complete the form and our logistics team will respond within one business day with a tailored proposal.</p>
    </div>
  </section>

  <!-- Quote Form + Contact Info -->
  <section class="ep-section-white">
    <div class="ep-section-wrap">
      <div class="ep-contact-grid">
        <!-- Form -->
        <div class="ep-contact-form-panel">
          <h2 class="ep-section-h2" style="margin-bottom:24px;">Your Shipment Details</h2>
          <form name="quote" method="POST" data-netlify="true" novalidate>
            <div class="ep-form-grid">
              <div class="ep-form-group">
                <label for="fullname" class="ep-form-label">Full Name *</label>
                <input type="text" id="fullname" name="fullname" class="ep-form-input" placeholder="Ahmed Al Mansoori" required/>
              </div>
              <div class="ep-form-group">
                <label for="company" class="ep-form-label">Company</label>
                <input type="text" id="company" name="company" class="ep-form-input" placeholder="Your Company LLC"/>
              </div>
              <div class="ep-form-group">
                <label for="email" class="ep-form-label">Email *</label>
                <input type="email" id="email" name="email" class="ep-form-input" placeholder="you@company.com" required/>
              </div>
              <div class="ep-form-group">
                <label for="phone" class="ep-form-label">Phone</label>
                <input type="tel" id="phone" name="phone" class="ep-form-input" placeholder="+971 50 000 0000"/>
              </div>
              <div class="ep-form-group ep-form-full">
                <label for="service" class="ep-form-label">Service Required *</label>
                <select id="service" name="service" class="ep-form-select" required>
                  <option value="" disabled selected>Select a service…</option>
                  <option value="cargo">Cargo Loading &amp; Unloading</option>
                  <option value="freight">Freight Brokerage</option>
                  <option value="customs">Customs Brokerage</option>
                  <option value="sea">Sea Shipping Agent</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>
              <div class="ep-form-group ep-form-full">
                <label for="message" class="ep-form-label">Shipment Details</label>
                <textarea id="message" name="message" class="ep-form-textarea" placeholder="Origin, destination, cargo type, weight, any specific requirements…"></textarea>
              </div>
            </div>
            <button type="submit" class="ep-form-submit">Send Enquiry</button>
          </form>
        </div>
        <!-- Contact Info -->
        <div class="ep-contact-info">
          <div>
            <h3 class="ep-contact-info-h">Contact Information</h3>
            <p class="ep-contact-info-p">Prefer to speak directly? Reach our team through any of the channels below.</p>
          </div>
          <div class="ep-contact-item">
            <svg class="ep-contact-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <div>
              <span class="ep-contact-item-label">Address</span>
              <span class="ep-contact-item-text">Dubai, United Arab Emirates</span>
            </div>
          </div>
          <div class="ep-contact-item">
            <svg class="ep-contact-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.09a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <div>
              <span class="ep-contact-item-label">Phone</span>
              <a href="tel:+971XXXXXXXX" class="ep-contact-item-text" style="color:inherit;text-decoration:none;">+971 XX XXX XXXX</a>
            </div>
          </div>
          <div class="ep-contact-item">
            <svg class="ep-contact-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <div>
              <span class="ep-contact-item-label">Email</span>
              <a href="mailto:info@swiftsailshipping.com" class="ep-contact-item-text" style="color:inherit;text-decoration:none;">info@swiftsailshipping.com</a>
            </div>
          </div>
          <div class="ep-contact-item">
            <svg class="ep-contact-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <div>
              <span class="ep-contact-item-label">Office Hours</span>
              <span class="ep-contact-item-text">Sun – Thu: 8:00am – 6:00pm<br/>Operations: 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="ep-section-cream">
    <div class="ep-section-wrap">
      <span class="ep-section-label">Common Questions</span>
      <h2 class="ep-section-h2">Quote &amp; Process FAQ</h2>
      <hr class="ep-rule ep-rule--gold"/>
      <div class="ep-faq-list">
        <details class="ep-faq-item">
          <summary>How quickly will I receive a quote?</summary>
          <p class="ep-faq-body">We aim to respond within one business day. For urgent enquiries, please call us directly and we'll prioritise your request.</p>
        </details>
        <details class="ep-faq-item">
          <summary>What information do I need to provide?</summary>
          <p class="ep-faq-body">Origin and destination, cargo type, approximate weight and volume, and any special handling requirements. The more detail you provide, the more accurate our quote will be.</p>
        </details>
        <details class="ep-faq-item">
          <summary>Do you handle both imports and exports?</summary>
          <p class="ep-faq-body">Yes. We provide full import and export services including customs clearance, documentation, and freight coordination for both directions.</p>
        </details>
        <details class="ep-faq-item">
          <summary>Is there a minimum shipment size?</summary>
          <p class="ep-faq-body">No minimum. We handle everything from single pallets to full container loads and project cargo. Just describe your needs and we'll tailor a solution.</p>
        </details>
        <details class="ep-faq-item">
          <summary>Are your quotes binding?</summary>
          <p class="ep-faq-body">Initial quotes are indicative. A confirmed, binding rate is issued once we have verified all cargo details and carrier availability. No surprises.</p>
        </details>
      </div>
    </div>
  </section>
</main>

<footer class="ep-footer">
  <div class="ep-footer-inner">
    <div class="ep-footer-grid">
      <div class="ep-footer-brand">
        <a href="index.html" class="ep-nav-brand" style="margin-bottom:12px;display:inline-flex;">
          <img src="assets/img/Untitled design.png" alt="Swift Sail Logo" class="ep-nav-logo"/>
          <div class="ep-nav-brand-text">
            <span class="ep-nav-brand-name">Swift Sail</span>
            <span class="ep-nav-brand-sub">Shipping L.L.C.</span>
          </div>
        </a>
        <p class="ep-footer-brand-p">Licensed freight forwarding and customs brokerage headquartered in Dubai, UAE.</p>
      </div>
      <div class="ep-footer-col">
        <h4 class="ep-footer-heading">Services</h4>
        <ul class="ep-footer-list">
          <li><a href="cargo-loading-unloading.html" class="ep-footer-link">Cargo Loading & Unloading</a></li>
          <li><a href="freight-broker.html" class="ep-footer-link">Freight Brokerage</a></li>
          <li><a href="customs-broker.html" class="ep-footer-link">Customs Brokerage</a></li>
          <li><a href="sea-shipping-lines-agent.html" class="ep-footer-link">Sea Shipping Agent</a></li>
        </ul>
      </div>
      <div class="ep-footer-col">
        <h4 class="ep-footer-heading">Company</h4>
        <ul class="ep-footer-list">
          <li><a href="about.html" class="ep-footer-link">About Us</a></li>
          <li><a href="how-it-works.html" class="ep-footer-link">How It Works</a></li>
          <li><a href="blog.html" class="ep-footer-link">Blog</a></li>
          <li><a href="get-quote.html" class="ep-footer-link">Get a Quote</a></li>
        </ul>
      </div>
      <div class="ep-footer-col">
        <h4 class="ep-footer-heading">Contact</h4>
        <ul class="ep-footer-list">
          <li class="ep-footer-link">Dubai, United Arab Emirates</li>
          <li><a href="tel:+971XXXXXXXX" class="ep-footer-link">+971 XX XXX XXXX</a></li>
          <li><a href="mailto:info@swiftsailshipping.com" class="ep-footer-link">info@swiftsailshipping.com</a></li>
        </ul>
      </div>
    </div>
    <div class="ep-footer-bottom">
      <span class="ep-footer-copy">&copy; <span id="footer-year"></span> Swift Sail Shipping L.L.C. All rights reserved.</span>
    </div>
  </div>
</footer>
<script src="js/script.js"></script>
</body>
</html>
```

- [ ] **Step 2: Commit**

```bash
git add get-quote.html
git commit -m "feat(get-quote): apply EP design system"
```

---

## Task 5: Rewrite `how-it-works.html`

**Files:**
- Modify: `how-it-works.html`

**Current content to preserve:** 4 hero stats, 6-step process, essential documents (imports/exports), timeline (4 items), FAQ accordion (5 questions), CTA.

- [ ] **Step 1: Replace `how-it-works.html` with EP version**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>How It Works — Swift Sail Shipping L.L.C.</title>
  <meta name="description" content="Step-by-step guide to shipping with Swift Sail — from quote to delivery, customs to tracking."/>
  <link rel="icon" type="image/x-icon" href="assets/favicon.ico"/>
  <link rel="apple-touch-icon" href="assets/apple-touch-icon.png"/>
  <link rel="stylesheet" href="css/style.css"/>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="css/tailwind.css"/>
</head>
<body style="font-family:'DM Sans',sans-serif;background:#fff;margin:0;">

<a href="#main" class="skip-link">Skip to main content</a>
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
      <a href="how-it-works.html" class="ep-nav-link" aria-current="page">How It Works</a>
      <a href="about.html" class="ep-nav-link">About</a>
      <a href="blog.html" class="ep-nav-link">Blog</a>
      <a href="get-quote.html" class="ep-nav-cta">Get Quote</a>
    </div>
    <button id="mobile-menu-btn" class="ep-nav-hamburger" aria-label="Toggle navigation menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div id="mobile-menu" class="ep-mobile-menu hidden">
    <a href="services.html" class="ep-mobile-link">Services</a>
    <a href="how-it-works.html" class="ep-mobile-link">How It Works</a>
    <a href="about.html" class="ep-mobile-link">About</a>
    <a href="blog.html" class="ep-mobile-link">Blog</a>
    <a href="get-quote.html" class="ep-mobile-cta">Get Quote</a>
  </div>
</nav>

<main id="main">
  <!-- Page Hero -->
  <section class="ep-page-hero">
    <div class="ep-page-hero-inner">
      <span class="ep-section-label">The Process</span>
      <h1 class="ep-page-h1">Shipping Made Simple,<br/>Step by Step</h1>
      <p class="ep-page-sub">We handle the complexity so you don't have to. Here's exactly what happens from your first enquiry to final delivery.</p>
      <div class="ep-stats-row">
        <div class="ep-stat-item">
          <span class="ep-stat-num" data-counter="6" data-suffix="">0</span>
          <span class="ep-stat-label">Clear Steps</span>
        </div>
        <div class="ep-stat-item">
          <span class="ep-stat-num" data-counter="1" data-suffix=" day">0 day</span>
          <span class="ep-stat-label">Quote Response</span>
        </div>
        <div class="ep-stat-item">
          <span class="ep-stat-num" data-counter="24" data-suffix="/7">0/7</span>
          <span class="ep-stat-label">Support Available</span>
        </div>
        <div class="ep-stat-item">
          <span class="ep-stat-num" data-counter="100" data-suffix="%">0%</span>
          <span class="ep-stat-label">Documented & Compliant</span>
        </div>
      </div>
    </div>
  </section>

  <!-- 6-Step Process -->
  <section class="ep-section-white">
    <div class="ep-section-wrap">
      <span class="ep-section-label">Step by Step</span>
      <h2 class="ep-section-h2">From Quote to Delivery</h2>
      <hr class="ep-rule ep-rule--gold"/>
      <div class="ep-steps-grid">
        <div class="ep-step">
          <span class="ep-step-num">01</span>
          <h3 class="ep-step-h">Submit Your Enquiry</h3>
          <p class="ep-step-p">Fill in the quote form or call us directly. Tell us your origin, destination, cargo type, and timeline. No commitment required.</p>
        </div>
        <div class="ep-step">
          <span class="ep-step-num">02</span>
          <h3 class="ep-step-h">Receive Your Quote</h3>
          <p class="ep-step-p">Within one business day, our team sends a detailed proposal covering freight rates, estimated transit times, and applicable duties.</p>
        </div>
        <div class="ep-step">
          <span class="ep-step-num">03</span>
          <h3 class="ep-step-h">Confirm &amp; Book</h3>
          <p class="ep-step-p">Approve the quote and we handle carrier booking, space allocation, and scheduling — you'll receive a booking confirmation with all reference numbers.</p>
        </div>
        <div class="ep-step">
          <span class="ep-step-num">04</span>
          <h3 class="ep-step-h">Documentation &amp; Customs</h3>
          <p class="ep-step-p">We prepare and verify all export/import documentation, submit customs declarations, and manage duty payments on your behalf.</p>
        </div>
        <div class="ep-step">
          <span class="ep-step-num">05</span>
          <h3 class="ep-step-h">Cargo in Transit</h3>
          <p class="ep-step-p">Your shipment moves. We provide live tracking updates and proactively communicate any delays or exceptions as they arise.</p>
        </div>
        <div class="ep-step">
          <span class="ep-step-num">06</span>
          <h3 class="ep-step-h">Delivery &amp; Confirmation</h3>
          <p class="ep-step-p">Cargo is released and delivered to the final destination. You receive a proof of delivery and our team follows up to confirm satisfaction.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Essential Documents -->
  <section class="ep-section-cream">
    <div class="ep-section-wrap">
      <span class="ep-section-label">Compliance</span>
      <h2 class="ep-section-h2">Essential Documents</h2>
      <hr class="ep-rule ep-rule--gold"/>
      <div class="ep-cards-grid ep-cards-grid--2col" style="margin-top:32px;">
        <div class="ep-card ep-card--cream">
          <h3 class="ep-card-h" style="margin-bottom:16px;">For Imports</h3>
          <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px;">
            <li style="font-family:'DM Sans',sans-serif;font-size:14px;font-weight:300;color:var(--ep-gray);display:flex;gap:10px;align-items:flex-start;"><span style="color:var(--ep-gold);font-weight:600;">→</span> Commercial Invoice</li>
            <li style="font-family:'DM Sans',sans-serif;font-size:14px;font-weight:300;color:var(--ep-gray);display:flex;gap:10px;align-items:flex-start;"><span style="color:var(--ep-gold);font-weight:600;">→</span> Packing List</li>
            <li style="font-family:'DM Sans',sans-serif;font-size:14px;font-weight:300;color:var(--ep-gray);display:flex;gap:10px;align-items:flex-start;"><span style="color:var(--ep-gold);font-weight:600;">→</span> Bill of Lading / Airway Bill</li>
            <li style="font-family:'DM Sans',sans-serif;font-size:14px;font-weight:300;color:var(--ep-gray);display:flex;gap:10px;align-items:flex-start;"><span style="color:var(--ep-gold);font-weight:600;">→</span> Certificate of Origin</li>
            <li style="font-family:'DM Sans',sans-serif;font-size:14px;font-weight:300;color:var(--ep-gray);display:flex;gap:10px;align-items:flex-start;"><span style="color:var(--ep-gold);font-weight:600;">→</span> UAE Import Permit (if applicable)</li>
          </ul>
        </div>
        <div class="ep-card ep-card--cream">
          <h3 class="ep-card-h" style="margin-bottom:16px;">For Exports</h3>
          <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px;">
            <li style="font-family:'DM Sans',sans-serif;font-size:14px;font-weight:300;color:var(--ep-gray);display:flex;gap:10px;align-items:flex-start;"><span style="color:var(--ep-gold);font-weight:600;">→</span> Export Declaration (DP World / UAE Customs)</li>
            <li style="font-family:'DM Sans',sans-serif;font-size:14px;font-weight:300;color:var(--ep-gray);display:flex;gap:10px;align-items:flex-start;"><span style="color:var(--ep-gold);font-weight:600;">→</span> Commercial Invoice &amp; Packing List</li>
            <li style="font-family:'DM Sans',sans-serif;font-size:14px;font-weight:300;color:var(--ep-gray);display:flex;gap:10px;align-items:flex-start;"><span style="color:var(--ep-gold);font-weight:600;">→</span> Certificate of Origin</li>
            <li style="font-family:'DM Sans',sans-serif;font-size:14px;font-weight:300;color:var(--ep-gray);display:flex;gap:10px;align-items:flex-start;"><span style="color:var(--ep-gold);font-weight:600;">→</span> Shipping Instructions</li>
            <li style="font-family:'DM Sans',sans-serif;font-size:14px;font-weight:300;color:var(--ep-gray);display:flex;gap:10px;align-items:flex-start;"><span style="color:var(--ep-gold);font-weight:600;">→</span> Letter of Credit (if applicable)</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="ep-section-white">
    <div class="ep-section-wrap">
      <span class="ep-section-label">Questions</span>
      <h2 class="ep-section-h2">Frequently Asked</h2>
      <hr class="ep-rule ep-rule--gold"/>
      <div class="ep-faq-list">
        <details class="ep-faq-item">
          <summary>How long does customs clearance take?</summary>
          <p class="ep-faq-body">Standard clearance at Jebel Ali typically takes 1–2 business days when all documentation is complete and correct. We proactively check for issues before submission to avoid delays.</p>
        </details>
        <details class="ep-faq-item">
          <summary>Can I track my shipment in real time?</summary>
          <p class="ep-faq-body">Yes. Once your shipment is booked, we provide tracking references and proactive status updates at each milestone — vessel departure, arrival, customs release, and delivery.</p>
        </details>
        <details class="ep-faq-item">
          <summary>What happens if my cargo is delayed?</summary>
          <p class="ep-faq-body">We notify you immediately, provide the reason, and present options — revised routing, alternative carriers, or expedited customs processing where possible. You're never left guessing.</p>
        </details>
        <details class="ep-faq-item">
          <summary>Do you handle dangerous goods (DG)?</summary>
          <p class="ep-faq-body">Yes, for certain categories. We require MSDS/SDS documents and advance notice to confirm compliance with IMDG/IATA regulations and carrier restrictions before acceptance.</p>
        </details>
        <details class="ep-faq-item">
          <summary>Can I use my own freight forwarder but have you handle customs only?</summary>
          <p class="ep-faq-body">Absolutely. We offer standalone customs brokerage services — you can engage us just for UAE import or export clearance without using our freight services.</p>
        </details>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <div class="ep-cta-band">
    <div class="ep-cta-band-inner">
      <h2 class="ep-cta-band-h">Ready to Start Shipping?</h2>
      <p class="ep-cta-band-p">Get your quote in under 24 hours — no obligation, no hidden fees.</p>
      <a href="get-quote.html" class="ep-btn ep-btn--gold">Request a Quote</a>
    </div>
  </div>
</main>

<footer class="ep-footer">
  <div class="ep-footer-inner">
    <div class="ep-footer-grid">
      <div class="ep-footer-brand">
        <a href="index.html" class="ep-nav-brand" style="margin-bottom:12px;display:inline-flex;">
          <img src="assets/img/Untitled design.png" alt="Swift Sail Logo" class="ep-nav-logo"/>
          <div class="ep-nav-brand-text">
            <span class="ep-nav-brand-name">Swift Sail</span>
            <span class="ep-nav-brand-sub">Shipping L.L.C.</span>
          </div>
        </a>
        <p class="ep-footer-brand-p">Licensed freight forwarding and customs brokerage headquartered in Dubai, UAE.</p>
      </div>
      <div class="ep-footer-col">
        <h4 class="ep-footer-heading">Services</h4>
        <ul class="ep-footer-list">
          <li><a href="cargo-loading-unloading.html" class="ep-footer-link">Cargo Loading & Unloading</a></li>
          <li><a href="freight-broker.html" class="ep-footer-link">Freight Brokerage</a></li>
          <li><a href="customs-broker.html" class="ep-footer-link">Customs Brokerage</a></li>
          <li><a href="sea-shipping-lines-agent.html" class="ep-footer-link">Sea Shipping Agent</a></li>
        </ul>
      </div>
      <div class="ep-footer-col">
        <h4 class="ep-footer-heading">Company</h4>
        <ul class="ep-footer-list">
          <li><a href="about.html" class="ep-footer-link">About Us</a></li>
          <li><a href="how-it-works.html" class="ep-footer-link">How It Works</a></li>
          <li><a href="blog.html" class="ep-footer-link">Blog</a></li>
          <li><a href="get-quote.html" class="ep-footer-link">Get a Quote</a></li>
        </ul>
      </div>
      <div class="ep-footer-col">
        <h4 class="ep-footer-heading">Contact</h4>
        <ul class="ep-footer-list">
          <li class="ep-footer-link">Dubai, United Arab Emirates</li>
          <li><a href="tel:+971XXXXXXXX" class="ep-footer-link">+971 XX XXX XXXX</a></li>
          <li><a href="mailto:info@swiftsailshipping.com" class="ep-footer-link">info@swiftsailshipping.com</a></li>
        </ul>
      </div>
    </div>
    <div class="ep-footer-bottom">
      <span class="ep-footer-copy">&copy; <span id="footer-year"></span> Swift Sail Shipping L.L.C. All rights reserved.</span>
    </div>
  </div>
</footer>
<script src="js/script.js"></script>
</body>
</html>
```

- [ ] **Step 2: Commit**

```bash
git add how-it-works.html
git commit -m "feat(how-it-works): apply EP design system"
```

---

## Task 6: Rewrite `blog.html`

**Files:**
- Modify: `blog.html`

**Current content to preserve:** hero, 1 featured article card linking to `blog/navigating-global-shipping-challenges-2026.html`, "coming soon" placeholder, newsletter CTA.

- [ ] **Step 1: Replace `blog.html` with EP version**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Blog — Swift Sail Shipping L.L.C.</title>
  <meta name="description" content="Insights on freight, customs, and logistics from the Swift Sail team in Dubai."/>
  <link rel="icon" type="image/x-icon" href="assets/favicon.ico"/>
  <link rel="apple-touch-icon" href="assets/apple-touch-icon.png"/>
  <link rel="stylesheet" href="css/style.css"/>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="css/tailwind.css"/>
</head>
<body style="font-family:'DM Sans',sans-serif;background:#fff;margin:0;">

<a href="#main" class="skip-link">Skip to main content</a>
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
      <a href="blog.html" class="ep-nav-link" aria-current="page">Blog</a>
      <a href="get-quote.html" class="ep-nav-cta">Get Quote</a>
    </div>
    <button id="mobile-menu-btn" class="ep-nav-hamburger" aria-label="Toggle navigation menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div id="mobile-menu" class="ep-mobile-menu hidden">
    <a href="services.html" class="ep-mobile-link">Services</a>
    <a href="how-it-works.html" class="ep-mobile-link">How It Works</a>
    <a href="about.html" class="ep-mobile-link">About</a>
    <a href="blog.html" class="ep-mobile-link">Blog</a>
    <a href="get-quote.html" class="ep-mobile-cta">Get Quote</a>
  </div>
</nav>

<main id="main">
  <!-- Page Hero -->
  <section class="ep-page-hero">
    <div class="ep-page-hero-inner">
      <span class="ep-section-label">Insights</span>
      <h1 class="ep-page-h1">Logistics Thinking<br/>from Dubai</h1>
      <p class="ep-page-sub">Practical perspectives on freight, customs, trade regulations, and global supply chains from the Swift Sail team.</p>
    </div>
  </section>

  <!-- Articles -->
  <section class="ep-section-white">
    <div class="ep-section-wrap">
      <span class="ep-section-label">Latest Articles</span>
      <h2 class="ep-section-h2">From the Blog</h2>
      <hr class="ep-rule ep-rule--gold"/>
      <div class="ep-blog-grid">
        <a href="blog/navigating-global-shipping-challenges-2026.html" class="ep-blog-card">
          <img src="assets/img/services-background.jpg" alt="Global shipping routes" class="ep-blog-card-img"/>
          <div class="ep-blog-card-body">
            <span class="ep-blog-card-tag">Industry Insight</span>
            <h3 class="ep-blog-card-h">Navigating Global Shipping Challenges in 2026</h3>
            <p class="ep-blog-card-p">Red Sea disruptions, port congestion, and rising fuel costs are reshaping trade routes. Here's how UAE importers and exporters can adapt.</p>
            <span class="ep-blog-card-meta">April 2026 &nbsp;·&nbsp; 6 min read</span>
          </div>
        </a>
        <div class="ep-blog-card" style="background:var(--ep-cream);border-style:dashed;justify-content:center;align-items:center;padding:48px 32px;text-align:center;cursor:default;">
          <div>
            <span class="ep-blog-card-tag" style="display:block;margin-bottom:12px;">Coming Soon</span>
            <h3 class="ep-blog-card-h" style="color:var(--ep-gray);">More Articles on the Way</h3>
            <p class="ep-blog-card-p" style="margin-top:8px;">We publish new guides and industry updates regularly. Check back soon.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Newsletter CTA -->
  <div class="ep-cta-band">
    <div class="ep-cta-band-inner">
      <h2 class="ep-cta-band-h">Stay Ahead of Trade Changes</h2>
      <p class="ep-cta-band-p">Get notified when we publish new guides on UAE customs, freight rates, and logistics strategy.</p>
      <a href="get-quote.html" class="ep-btn ep-btn--gold">Contact Our Team</a>
    </div>
  </div>
</main>

<footer class="ep-footer">
  <div class="ep-footer-inner">
    <div class="ep-footer-grid">
      <div class="ep-footer-brand">
        <a href="index.html" class="ep-nav-brand" style="margin-bottom:12px;display:inline-flex;">
          <img src="assets/img/Untitled design.png" alt="Swift Sail Logo" class="ep-nav-logo"/>
          <div class="ep-nav-brand-text">
            <span class="ep-nav-brand-name">Swift Sail</span>
            <span class="ep-nav-brand-sub">Shipping L.L.C.</span>
          </div>
        </a>
        <p class="ep-footer-brand-p">Licensed freight forwarding and customs brokerage headquartered in Dubai, UAE.</p>
      </div>
      <div class="ep-footer-col">
        <h4 class="ep-footer-heading">Services</h4>
        <ul class="ep-footer-list">
          <li><a href="cargo-loading-unloading.html" class="ep-footer-link">Cargo Loading & Unloading</a></li>
          <li><a href="freight-broker.html" class="ep-footer-link">Freight Brokerage</a></li>
          <li><a href="customs-broker.html" class="ep-footer-link">Customs Brokerage</a></li>
          <li><a href="sea-shipping-lines-agent.html" class="ep-footer-link">Sea Shipping Agent</a></li>
        </ul>
      </div>
      <div class="ep-footer-col">
        <h4 class="ep-footer-heading">Company</h4>
        <ul class="ep-footer-list">
          <li><a href="about.html" class="ep-footer-link">About Us</a></li>
          <li><a href="how-it-works.html" class="ep-footer-link">How It Works</a></li>
          <li><a href="blog.html" class="ep-footer-link">Blog</a></li>
          <li><a href="get-quote.html" class="ep-footer-link">Get a Quote</a></li>
        </ul>
      </div>
      <div class="ep-footer-col">
        <h4 class="ep-footer-heading">Contact</h4>
        <ul class="ep-footer-list">
          <li class="ep-footer-link">Dubai, United Arab Emirates</li>
          <li><a href="tel:+971XXXXXXXX" class="ep-footer-link">+971 XX XXX XXXX</a></li>
          <li><a href="mailto:info@swiftsailshipping.com" class="ep-footer-link">info@swiftsailshipping.com</a></li>
        </ul>
      </div>
    </div>
    <div class="ep-footer-bottom">
      <span class="ep-footer-copy">&copy; <span id="footer-year"></span> Swift Sail Shipping L.L.C. All rights reserved.</span>
    </div>
  </div>
</footer>
<script src="js/script.js"></script>
</body>
</html>
```

- [ ] **Step 2: Commit**

```bash
git add blog.html
git commit -m "feat(blog): apply EP design system"
```

---

## Task 7: Rewrite `blog/navigating-global-shipping-challenges-2026.html`

**Files:**
- Modify: `blog/navigating-global-shipping-challenges-2026.html`

**Note:** All asset, CSS, JS, and nav link paths must use `../` prefix since this file lives in the `blog/` subdirectory.

- [ ] **Step 1: Read the current file to extract existing article body content**

Run:
```bash
grep -n "" "blog/navigating-global-shipping-challenges-2026.html" | head -300
```

- [ ] **Step 2: Replace the file preserving all existing article body text**

Write the complete file, wrapping existing article content in EP article classes. The structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Navigating Global Shipping Challenges in 2026 — Swift Sail Shipping</title>
  <meta name="description" content="How UAE importers and exporters can adapt to Red Sea disruptions, port congestion, and rising freight costs in 2026."/>
  <link rel="icon" type="image/x-icon" href="../assets/favicon.ico"/>
  <link rel="apple-touch-icon" href="../assets/apple-touch-icon.png"/>
  <link rel="stylesheet" href="../css/style.css"/>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="../css/tailwind.css"/>
</head>
<body style="font-family:'DM Sans',sans-serif;background:#fff;margin:0;">

<a href="#main" class="skip-link">Skip to main content</a>
<nav class="ep-nav">
  <div class="ep-nav-stripe"></div>
  <div class="ep-nav-inner">
    <a href="../index.html" class="ep-nav-brand">
      <img src="../assets/img/Untitled design.png" alt="Swift Sail Shipping Logo" class="ep-nav-logo"/>
      <div class="ep-nav-brand-text">
        <span class="ep-nav-brand-name">Swift Sail</span>
        <span class="ep-nav-brand-sub">Shipping L.L.C.</span>
      </div>
    </a>
    <div class="ep-nav-links">
      <a href="../services.html" class="ep-nav-link">Services</a>
      <a href="../how-it-works.html" class="ep-nav-link">How It Works</a>
      <a href="../about.html" class="ep-nav-link">About</a>
      <a href="../blog.html" class="ep-nav-link">Blog</a>
      <a href="../get-quote.html" class="ep-nav-cta">Get Quote</a>
    </div>
    <button id="mobile-menu-btn" class="ep-nav-hamburger" aria-label="Toggle navigation menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div id="mobile-menu" class="ep-mobile-menu hidden">
    <a href="../services.html" class="ep-mobile-link">Services</a>
    <a href="../how-it-works.html" class="ep-mobile-link">How It Works</a>
    <a href="../about.html" class="ep-mobile-link">About</a>
    <a href="../blog.html" class="ep-mobile-link">Blog</a>
    <a href="../get-quote.html" class="ep-mobile-cta">Get Quote</a>
  </div>
</nav>

<main id="main">
  <div class="ep-article-wrap">
    <a href="../blog.html" class="ep-article-back">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
      Back to Blog
    </a>
    <span class="ep-article-tag">Industry Insight</span>
    <h1 class="ep-article-h1">Navigating Global Shipping Challenges in 2026</h1>
    <p class="ep-article-meta">By Swift Sail Shipping Team &nbsp;·&nbsp; April 2026 &nbsp;·&nbsp; 6 min read</p>
    <div class="ep-article-body">
      <!-- PASTE EXISTING ARTICLE BODY HTML HERE — preserve all <h2>, <h3>, <p>, <ul>, <ol> tags as-is -->
    </div>
  </div>

  <div class="ep-cta-band">
    <div class="ep-cta-band-inner">
      <h2 class="ep-cta-band-h">Need Help Navigating These Changes?</h2>
      <p class="ep-cta-band-p">Our Dubai team monitors global trade disruptions daily. Get a personalised freight consultation.</p>
      <a href="../get-quote.html" class="ep-btn ep-btn--gold">Request a Quote</a>
    </div>
  </div>
</main>

<footer class="ep-footer">
  <div class="ep-footer-inner">
    <div class="ep-footer-grid">
      <div class="ep-footer-brand">
        <a href="../index.html" class="ep-nav-brand" style="margin-bottom:12px;display:inline-flex;">
          <img src="../assets/img/Untitled design.png" alt="Swift Sail Logo" class="ep-nav-logo"/>
          <div class="ep-nav-brand-text">
            <span class="ep-nav-brand-name">Swift Sail</span>
            <span class="ep-nav-brand-sub">Shipping L.L.C.</span>
          </div>
        </a>
        <p class="ep-footer-brand-p">Licensed freight forwarding and customs brokerage headquartered in Dubai, UAE.</p>
      </div>
      <div class="ep-footer-col">
        <h4 class="ep-footer-heading">Services</h4>
        <ul class="ep-footer-list">
          <li><a href="../cargo-loading-unloading.html" class="ep-footer-link">Cargo Loading & Unloading</a></li>
          <li><a href="../freight-broker.html" class="ep-footer-link">Freight Brokerage</a></li>
          <li><a href="../customs-broker.html" class="ep-footer-link">Customs Brokerage</a></li>
          <li><a href="../sea-shipping-lines-agent.html" class="ep-footer-link">Sea Shipping Agent</a></li>
        </ul>
      </div>
      <div class="ep-footer-col">
        <h4 class="ep-footer-heading">Company</h4>
        <ul class="ep-footer-list">
          <li><a href="../about.html" class="ep-footer-link">About Us</a></li>
          <li><a href="../how-it-works.html" class="ep-footer-link">How It Works</a></li>
          <li><a href="../blog.html" class="ep-footer-link">Blog</a></li>
          <li><a href="../get-quote.html" class="ep-footer-link">Get a Quote</a></li>
        </ul>
      </div>
      <div class="ep-footer-col">
        <h4 class="ep-footer-heading">Contact</h4>
        <ul class="ep-footer-list">
          <li class="ep-footer-link">Dubai, United Arab Emirates</li>
          <li><a href="tel:+971XXXXXXXX" class="ep-footer-link">+971 XX XXX XXXX</a></li>
          <li><a href="mailto:info@swiftsailshipping.com" class="ep-footer-link">info@swiftsailshipping.com</a></li>
        </ul>
      </div>
    </div>
    <div class="ep-footer-bottom">
      <span class="ep-footer-copy">&copy; <span id="footer-year"></span> Swift Sail Shipping L.L.C. All rights reserved.</span>
    </div>
  </div>
</footer>
<script src="../js/script.js"></script>
</body>
</html>
```

**Important:** In Step 2, first read the existing article body content from the current file and paste it verbatim into `<div class="ep-article-body">`. Do not rewrite or summarise the article text.

- [ ] **Step 3: Commit**

```bash
git add blog/navigating-global-shipping-challenges-2026.html
git commit -m "feat(blog-post): apply EP design system"
```

---

## Task 8: Rewrite the Four Service Detail Pages

**Files:**
- Modify: `cargo-loading-unloading.html`
- Modify: `customs-broker.html`
- Modify: `freight-broker.html`
- Modify: `sea-shipping-lines-agent.html`

**Note:** These pages currently use an inline Tailwind CDN (`<script src="https://cdn.tailwindcss.com">`). Remove it and replace with `css/style.css` + `css/tailwind.css`. Do **not** change the existing written content — only replace the design shell.

- [ ] **Step 1: Read all four files to extract body content sections**

```bash
# read each file
cat cargo-loading-unloading.html
cat customs-broker.html
cat freight-broker.html
cat sea-shipping-lines-agent.html
```

- [ ] **Step 2: Rewrite `cargo-loading-unloading.html`**

Use this EP shell, preserving all existing hero copy, feature list items, and CTA text from the original file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Cargo Loading & Unloading — Swift Sail Shipping L.L.C.</title>
  <meta name="description" content="Professional cargo loading and unloading services at UAE ports. Safe handling of all cargo types — containerised, breakbulk, and project freight."/>
  <link rel="icon" type="image/x-icon" href="assets/favicon.ico"/>
  <link rel="apple-touch-icon" href="assets/apple-touch-icon.png"/>
  <link rel="stylesheet" href="css/style.css"/>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="css/tailwind.css"/>
</head>
<body style="font-family:'DM Sans',sans-serif;background:#fff;margin:0;">
  [EP nav — same as Tasks 2–6]
  <main id="main">
    [ep-page-hero with h1 + sub from original file]
    [ep-section-white with ep-cards-grid for features/benefits from original file]
    [ep-cta-band]
  </main>
  [EP footer]
  <script src="js/script.js"></script>
</body>
</html>
```

**When writing this file:** extract the original page's h1, description paragraph, and all feature/benefit list items verbatim. Map them to `ep-card` components. Do not invent new content.

- [ ] **Step 3: Rewrite `customs-broker.html`** — same approach as Step 2, using original content.

- [ ] **Step 4: Rewrite `freight-broker.html`** — same approach as Step 2, using original content.

- [ ] **Step 5: Rewrite `sea-shipping-lines-agent.html`** — same approach as Step 2, using original content.

- [ ] **Step 6: Commit all four**

```bash
git add cargo-loading-unloading.html customs-broker.html freight-broker.html sea-shipping-lines-agent.html
git commit -m "feat(service-pages): apply EP design system, remove inline Tailwind CDN"
```

---

## Self-Review

**Spec coverage check:**
- ✅ Task 1: CSS classes for all new components
- ✅ Task 2: `about.html`
- ✅ Task 3: `services.html`
- ✅ Task 4: `get-quote.html`
- ✅ Task 5: `how-it-works.html`
- ✅ Task 6: `blog.html`
- ✅ Task 7: `blog/navigating-global-shipping-challenges-2026.html`
- ✅ Task 8: All 4 service detail pages

**Placeholder scan:** Task 7 and Task 8 intentionally defer body content extraction to the implementer reading the source files at execution time — this is correct, not a placeholder.

**Type consistency:** All class names defined in Task 1 CSS are used consistently across Tasks 2–8 (`ep-page-hero`, `ep-section-wrap`, `ep-cards-grid`, `ep-step`, `ep-faq-item`, `ep-contact-grid`, `ep-blog-grid`, `ep-article-wrap`, `ep-cta-band`).
