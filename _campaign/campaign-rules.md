# Swift Sail Shipping — Campaign Master Rules
**Load this file at the start of every session involving the Trade Without Borders campaign.**  
**Last updated: May 2026**

---

## 1. WHO & WHAT

**Client:** Swift Sail Shipping LLC  
**Owner / Voice:** Zubair Basolan  
**Website:** https://swiftsailship.com  
**Campaign:** "Trade Without Borders" — 4-week LinkedIn campaign  
**Run dates:** June 2 – June 29, 2026  
**Schedule:** Monday, Wednesday, Sunday at 08:00 AM Dubai time (UTC+4)

---

## 2. POSTING PROFILES

| Profile | URL | Voice |
|---|---|---|
| Zubair Basolan (personal) | linkedin.com/in/zubair-basolan-a0007576/ | First-person. 15 years freight experience. "I've seen..." "We had a client..." Never corporate. |
| Swift Sail Shipping LLC (company) | linkedin.com/company/122024764/admin/ | "We" / third-person. Business-first. More formal but still conversational. |

**Every post goes to BOTH profiles simultaneously, with distinct copy for each.**

---

## 3. CONTENT RULES — NON-NEGOTIABLE

### 3.1 Hook-First Mandate
- **Line 1 of every post must stop the scroll.** Provocative fact, surprising stat, or bold claim.
- Line 2: Why it matters to this audience specifically.
- Lines 3+: Deliver the value.
- Final lines: Soft CTA — "DM me", "Read more", "We handle this".

### 3.2 What NEVER Gets Posted
- Generic seasonal greetings with no brand angle.
- Posts that bury the hook after any preamble.
- Anything a competitor could copy-paste word-for-word.
- Press-release style updates with no human angle.
- Posts that open with "We are pleased to announce..."

### 3.3 Post Structure by Day

**Monday (Blog Launch):**  
Hook naming the news event → contrarian or non-obvious angle → 2-line tease of blog's key insight → blog URL in comments (personal) / in caption (company)

**Wednesday (Insight — NO link):**  
Specific operational detail most people get wrong → explain clearly in 3–5 short paragraphs → end with question or "DM me". No external link — algorithm penalises links.

**Sunday (Engagement):**  
One sentence that takes a real position or asks a genuine question → 3–4 lines of context → "Drop your answer below". Respond to every comment within 2 hours to build momentum for Monday.

### 3.4 Hashtags

**Personal posts:** #logistics #freightforwarding #UAE #Dubai #GCCUKtrade #supplychain #customs #shipping  
**Company posts:** #SwiftSailShipping #DubaiLogistics #FreightForwarding #GCCKUFTA #SupplyChain #UAEtrade #CustomsBrokerage #Dubai

### 3.5 Show Before Posting
**NEVER post anything to LinkedIn without showing the exact copy to Ahmed first for approval.** No exceptions.

---

## 4. POSTER / VISUAL RULES

### 4.1 Campaign Poster (Maritime Cartography)
Used on Monday posts. Philosophy: `_campaign/week1/poster-philosophy.md`

- Canvas: 1080×1080px
- Palette: Deep navy (#0A1628) base, gold (#C9A84C) accents, amber thread, crimson punctuation only
- Typography: Clean, manifest-style lettering. Text declares — never decorates.
- Must include: Swift Sail logo or name, week's headline, swiftsailship.com
- Route line: single clean arc suggesting trade movement
- **Self-review required before presenting:** Take screenshot or render preview, view it, confirm it looks premium. Never describe what it "should" look like.

### 4.2 Eid / Cultural Posters (Celestial Harbor)
Philosophy: `_campaign/week1/eid-poster-philosophy.md`

- Canvas: 1080×1080px
- Palette: Midnight indigo (#0D0B1E) base, deep indigo (#1A1650), amber/gold (#C9803A, #D4A84B). NO white backgrounds. NO generic stock gradients.
- Key elements: crescent moon (dominant, luminous), Islamic geometric lattice (subtle, structural), star field (sparse, precise)
- Typography: Italiana font, thin weight, placed like a calligrapher's signature. MAX two text elements.
- Arabic text: ALWAYS use `arabic_reshaper` + `python-bidi` + DejaVu Sans. Test output before presenting.
- Hook-first even on cultural posts — no generic "Eid Mubarak from all of us" framing.
- **Mandatory self-check:** Render → view the image → confirm it looks museum-quality before presenting to Ahmed.

### 4.3 Python Poster Pipeline
```
execution/generate_poster.py   ← main script
execution/poster_assets/       ← fonts, logo files
```
Dependencies: `pillow`, `arabic_reshaper`, `python-bidi`  
Install: `pip install pillow arabic-reshaper python-bidi --break-system-packages`  
Fonts: DejaVu Sans (Arabic), Italiana (Latin titles) — verify font paths before running.  
Output: save to `_campaign/weekN/poster-name.png` (1080×1080px, PNG)

**After generating:** Read the file back as an image to visually confirm quality before presenting.

---

## 5. 4-WEEK CONTENT CALENDAR

| Week | Dates | Theme | Blog URL |
|---|---|---|---|
| 1 | Jun 2, 4, 7 | GCC-UK FTA | /blog/gcc-uk-fta-dubai-shipping-2026.html |
| 2 | Jun 9, 11, 14 | UAE-India CEPA Corridor | TBD |
| 3 | Jun 16, 18, 21 | China Sourcing & Dubai Re-Export | TBD |
| 4 | Jun 23, 25, 28 | E-commerce Cross-Border Fulfilment | TBD |

Full weekly details, post copy, and SEO targets: `_campaign/campaign-brief.md`  
Week 1 post copy: `_campaign/week1/linkedin-posts.md`

---

## 6. GIT / DEPLOYMENT RULES

- **Never claim git push succeeded from the sandbox.** GitKraken holds `.git/index.lock` — sandbox git is blocked.
- Blog posts are saved to `blog/` in the workspace. Ahmed must push manually from his PC (GitKraken or terminal).
- Always confirm: "File saved. You'll need to push manually from GitKraken."
- Vercel auto-deploys on push to main.

---

## 7. LINKEDIN POSTING WORKFLOW (Chrome — manual, NOT Postiz)

**We do NOT use Postiz. All LinkedIn posts are done manually via Claude in Chrome.**

1. Write copy → show Ahmed for approval → get explicit "go ahead"
2. Load the Claude in Chrome MCP tools (`mcp__Claude_in_Chrome__*`)
3. Navigate to personal profile first: linkedin.com/in/zubair-basolan-a0007576/
   - Click "Start a post", paste copy, attach poster image, post
   - Add blog URL as first comment on Monday posts (NOT in caption)
4. Then navigate to company page: linkedin.com/company/122024764/admin/
   - Click "Create a post", paste copy (include blog URL in caption on Monday), attach poster, post
5. Confirm both posts are live before reporting done
6. Poster image Windows path format: `C:\\Users\\ahmed\\OneDrive\\Desktop\\My Projects\\business-website\\_campaign\\weekN\\poster.png`

---

## 8. AUDIENCE & CTA

| Segment | Pain Point | CTA Angle |
|---|---|---|
| UAE SME importers/exporters | Navigating trade agreements without expertise | "Your freight forwarder should have told you this" |
| Enterprise supply chain managers | Route optimisation, cost, compliance | Data-backed, operational specifics |
| E-commerce businesses | Cross-border delays, cost spikes | Speed and hands-on support |
| UK/Europe companies entering UAE | Don't know how UAE logistics works | Local expertise and trust |

**Contact on CTAs:** +971 55 342 4700 | info@swiftsailship.com | swiftsailship.com

---

## 9. SESSION START CHECKLIST

When starting any campaign work session:
- [ ] Read this file (`_campaign/campaign-rules.md`)
- [ ] Read the relevant week's post copy (`_campaign/weekN/linkedin-posts.md`)
- [ ] Check what's already been posted (ask Ahmed)
- [ ] Never assume git push worked
- [ ] Never post without Ahmed's approval

---

## 10. ERRORS TO NEVER REPEAT

| Error | Rule |
|---|---|
| Posting without approval | Always show copy first. Always. |
| Presenting poster without viewing it | Render → view → confirm → present |
| Eid poster v1–v4 | All rejected. Remake from Celestial Harbor philosophy from scratch. |
| Arabic text garbled | Use `arabic_reshaper` + `python-bidi` + DejaVu Sans. No exceptions. |
| Git push from sandbox | Impossible. Tell Ahmed to push manually. |
| Generic greeting post | Rejected on sight. Hook-first or don't post. |
| Monday blog URL in post caption (personal profile) | Put URL in comments, not caption — better reach algorithm |
