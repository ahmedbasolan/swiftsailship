# SwiftSail Poster Generation Skill

## Purpose
Generate campaign posters for Swift Sail Shipping. Two poster types exist, each with its own design philosophy. This skill enforces the Python pipeline, mandatory visual self-review, and zero-tolerance rules around presenting substandard work.

**CRITICAL RULE: Never present a poster without first viewing it yourself and confirming it looks premium. No exceptions.**

---

## Poster Types

### Type A: Campaign Poster (Maritime Cartography)
Used on Monday blog launch posts. Philosophy: `_campaign/week1/poster-philosophy.md`

### Type B: Eid / Cultural Poster (Celestial Harbor)
Used for Islamic occasions. Philosophy: `_campaign/week1/eid-poster-philosophy.md`

---

## Step 0 — Read the Philosophy

Before writing a single line of code:
1. `Read` the relevant philosophy file in full.
2. Extract: palette, dominant form, typography rules, what to NEVER include.
3. If you haven't read it, stop. Read it first.

---

## Step 1 — Install Dependencies

```bash
pip install pillow arabic-reshaper python-bidi --break-system-packages
```

Verify fonts are available:
```bash
python3 -c "from PIL import ImageFont; ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 40); print('DejaVu OK')"
```

If fonts missing:
```bash
apt-get install -y fonts-dejavu-core 2>/dev/null || fc-cache -f -v
```

---

## Step 2 — Canvas Specification

| Property | Value |
|---|---|
| Size | 1080 × 1080 px |
| Format | PNG |
| Color mode | RGB |
| DPI | 96 (screen) |

---

## Step 3 — Palette Rules

### Maritime Cartography (Campaign Poster)
```python
NAVY      = (10, 22, 40)      # #0A1628 — background
GOLD      = (201, 168, 76)    # #C9A84C — primary accent
AMBER     = (180, 120, 40)    # — secondary thread
CRIMSON   = (180, 30, 30)     # — punctuation only, use sparingly
OFFWHITE  = (230, 220, 200)   # — text
```

### Celestial Harbor (Eid/Cultural Poster)
```python
MIDNIGHT  = (13, 11, 30)      # #0D0B1E — base
INDIGO    = (26, 22, 80)      # #1A1650 — mid layer
AMBER     = (201, 128, 58)    # #C9803A — warm glow
GOLD      = (212, 168, 75)    # #D4A84B — focal accent
SILVER    = (180, 185, 200)   # — star points only
```

**Forbidden in both types:** White backgrounds. Flat gradients. Any palette not listed above.

---

## Step 4 — Typography Rules

### Maritime Cartography
- Headlines: DejaVu Sans Bold or similar sans-serif, clean
- Body/tagline: DejaVu Sans regular
- Text is functional — it declares position, states coordinates. Never decorative.

### Celestial Harbor
- Title: Italiana (if unavailable: Cormorant Garamond, IM Fell English) — thin weight
- Subtitle: same family, smaller
- MAX two text elements total
- Place text last, after the visual composition is locked
- Text placement must feel like a calligrapher chose it, not an auto-layout

### Arabic Text (Mandatory Protocol)
```python
import arabic_reshaper
from bidi.algorithm import get_display

def render_arabic(text):
    reshaped = arabic_reshaper.reshape(text)
    return get_display(reshaped)

# Then render with DejaVu Sans — the only font that handles Arabic correctly
font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', size)
draw.text(position, render_arabic(arabic_text), font=font, fill=color)
```

**Never render Arabic without `arabic_reshaper` + `python-bidi`. Garbled Arabic = immediate rejection.**

---

## Step 5 — Composition Rules

### Maritime Cartography
- Route line: single clean arc from left to right, gold, 2–3px weight
- Nautical grid: very faint, navy-on-navy ghost grid beneath everything
- Ship: geometric suggestion (lines, not illustration)
- Logo / brand mark: lower right, small
- URL: lower right or bottom center, small, offwhite
- Negative space: generous — let the navy breathe

### Celestial Harbor
- Crescent moon: dominant form, takes 30–40% of canvas height. Luminous — inner edge has warm amber glow suggesting hidden light source.
- Stars: sparse, 6–12 total, varying sizes. Placed with astronomical precision, not scattered randomly.
- Islamic geometric lattice: subtle background texture, not foreground decoration. Near-invisible at first glance.
- Composition energy: concentrated at the moon. Everything else recedes.
- One luminous focal point only.

---

## Step 6 — Elements to Always Include

| Element | Maritime | Celestial |
|---|---|---|
| Brand name "Swift Sail Shipping" | ✓ | ✓ |
| Website swiftsailship.com | ✓ | optional (small) |
| Week's headline / occasion text | ✓ | ✓ |
| Logo (if available in assets/) | ✓ | ✓ |

Logo path: `execution/poster_assets/logo.png` (if exists)

---

## Step 7 — Code Structure

```python
#!/usr/bin/env python3
"""
Swift Sail Shipping — Poster Generator
Type: [Maritime Cartography / Celestial Harbor]
Week: N | Purpose: [Campaign / Eid]
"""

from PIL import Image, ImageDraw, ImageFont, ImageFilter
import arabic_reshaper
from bidi.algorithm import get_display
import math

# ── CONSTANTS ────────────────────────────────────────────
W, H = 1080, 1080
OUTPUT = "_campaign/weekN/poster-name.png"

# Palette
MIDNIGHT = (13, 11, 30)
# ... (full palette)

def make_poster():
    img = Image.new("RGB", (W, H), MIDNIGHT)
    draw = ImageDraw.Draw(img)
    
    # 1. Background layer (gradients, base texture)
    # 2. Structural layer (grid, geometric lattice)
    # 3. Primary form (moon / ship / route line)
    # 4. Accent layer (stars / gold details)
    # 5. Typography (placed last)
    # 6. Brand elements (logo, URL)
    
    img.save(OUTPUT, "PNG")
    print(f"Saved: {OUTPUT}")

if __name__ == "__main__":
    make_poster()
```

---

## Step 8 — Mandatory Self-Review Before Presenting

After running the script:

1. **Read the image file back using the Read tool to view it visually.**
2. Check every item on this list:

| Check | Pass | Fail → Action |
|---|---|---|
| Background is correct dark color | Deep navy/indigo, no light areas | Recheck palette constants |
| Primary form reads clearly | Moon/ship is dominant, not muddy | Increase contrast, check layer order |
| Gold accents glow | Warm, intentional | Not enough — add glow effect (ImageFilter.GaussianBlur on accent layer) |
| Typography is readable | Clean, positioned intentionally | Reposition, check font loaded correctly |
| Arabic text renders correctly | Proper RTL, connected glyphs | Arabic reshaper not applied — fix and rerun |
| Negative space is present | Composition breathes | Too cluttered — remove elements |
| Brand name visible | Present, legible | Add it |
| URL present | Present, small | Add it |
| Overall feel | Museum-quality, premium | Remake — do not present substandard work |

**If any item fails: fix and re-render. Do not present a failing poster.**

---

## Step 9 — Present to Ahmed

Only after Step 8 passes:
1. State which philosophy was used
2. Show the image
3. List key design choices made (palette, focal element, typography)
4. Ask: "Does this work, or should I adjust X?"

---

## Common Failures and Fixes

| Problem | Cause | Fix |
|---|---|---|
| Poster looks flat/generic | Gradient too simple, no texture layer | Add Islamic lattice texture, increase contrast between layers |
| Moon looks like a circle cutout | No glow on inner edge | Add warm amber radial gradient bleeding from inner arc |
| Stars scattered randomly | No placement logic | Use fibonacci spiral or manual coordinates |
| Text too large / competing with image | Over-emphasis on type | Reduce to 60% of current size, reposition |
| Arabic garbled | Missing reshaper | Add `arabic_reshaper` + `python-bidi` pipeline |
| Colors look wrong | Wrong hex → RGB conversion | Verify: #0D0B1E = (13, 11, 30) |
| Image too dark to see anything | Underexposure | Ensure gold/amber has sufficient brightness contrast against midnight |

---

## Output Path Convention

```
_campaign/week1/poster.png         ← campaign (Maritime)
_campaign/week1/eid-poster.png     ← Eid (Celestial Harbor)
_campaign/week2/poster.png
...
```

Save to the workspace path. View before presenting.
