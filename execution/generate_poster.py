#!/usr/bin/env python3
"""
Swift Sail Shipping — Poster Generator
Base script. Copy and customise for each poster.

Usage:
  python3 execution/generate_poster.py --type maritime --week 1
  python3 execution/generate_poster.py --type celestial --output _campaign/week1/eid-poster.png

Philosophies:
  maritime  → _campaign/week1/poster-philosophy.md   (campaign posters, Monday posts)
  celestial → _campaign/week1/eid-poster-philosophy.md (Eid / cultural posters)
"""

import sys
import math
import argparse
from pathlib import Path

try:
    from PIL import Image, ImageDraw, ImageFont, ImageFilter
except ImportError:
    sys.exit("PIL not installed. Run: pip install pillow --break-system-packages")

try:
    import arabic_reshaper
    from bidi.algorithm import get_display
    ARABIC_SUPPORT = True
except ImportError:
    print("WARNING: arabic_reshaper / python-bidi not installed. Arabic text will be garbled.")
    print("Fix: pip install arabic-reshaper python-bidi --break-system-packages")
    ARABIC_SUPPORT = False

# ─────────────────────────────────────────────────────────────────
# CANVAS
# ─────────────────────────────────────────────────────────────────
W, H = 1080, 1080

# ─────────────────────────────────────────────────────────────────
# PALETTES
# ─────────────────────────────────────────────────────────────────
MARITIME = {
    "bg":       (10, 22, 40),       # #0A1628 deep navy
    "gold":     (201, 168, 76),     # #C9A84C primary accent
    "amber":    (180, 120, 40),     # secondary thread
    "crimson":  (180, 30, 30),      # punctuation only
    "text":     (230, 220, 200),    # off-white
    "grid":     (20, 40, 70),       # faint grid lines
}

CELESTIAL = {
    "bg":       (13, 11, 30),       # #0D0B1E midnight
    "indigo":   (26, 22, 80),       # #1A1650 mid layer
    "amber":    (201, 128, 58),     # #C9803A warm glow
    "gold":     (212, 168, 75),     # #D4A84B focal accent
    "silver":   (180, 185, 200),    # star points
    "text":     (230, 220, 200),    # off-white
}

# ─────────────────────────────────────────────────────────────────
# FONT HELPERS
# ─────────────────────────────────────────────────────────────────
FONT_PATHS = [
    "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
]

def get_font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    for path in FONT_PATHS:
        try:
            return ImageFont.truetype(path, size)
        except (IOError, OSError):
            continue
    print(f"WARNING: No font found at known paths. Using default.")
    return ImageFont.load_default()

def render_arabic(text: str) -> str:
    """Reshape and apply BiDi algorithm for correct Arabic rendering."""
    if not ARABIC_SUPPORT:
        return text
    reshaped = arabic_reshaper.reshape(text)
    return get_display(reshaped)

def draw_centered_text(draw, y: int, text: str, font, color, img_width: int = W):
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    x = (img_width - text_width) // 2
    draw.text((x, y), text, font=font, fill=color)

# ─────────────────────────────────────────────────────────────────
# MARITIME CARTOGRAPHY — Campaign Poster
# ─────────────────────────────────────────────────────────────────
def make_maritime_poster(headline: str, tagline: str, output_path: str, week: int = 1):
    """
    Maritime Cartography design.
    Deep navy base, gold route arc, nautical grid ghost, geometric ship suggestion.
    """
    C = MARITIME
    img = Image.new("RGB", (W, H), C["bg"])
    draw = ImageDraw.Draw(img)

    # ── 1. Background gradient (subtle — navy stays dominant) ──
    for y in range(H):
        t = y / H
        r = int(C["bg"][0] + (C["grid"][0] - C["bg"][0]) * t * 0.3)
        g = int(C["bg"][1] + (C["grid"][1] - C["bg"][1]) * t * 0.3)
        b = int(C["bg"][2] + (C["grid"][2] - C["bg"][2]) * t * 0.3)
        draw.line([(0, y), (W, y)], fill=(r, g, b))

    # ── 2. Nautical grid (faint ghost beneath everything) ──
    grid_color = (*C["grid"], 60)
    grid_img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    grid_draw = ImageDraw.Draw(grid_img)
    for x in range(0, W, 90):
        grid_draw.line([(x, 0), (x, H)], fill=C["grid"], width=1)
    for y in range(0, H, 90):
        grid_draw.line([(0, y), (W, y)], fill=C["grid"], width=1)
    img = Image.alpha_composite(img.convert("RGBA"), grid_img).convert("RGB")
    draw = ImageDraw.Draw(img)

    # ── 3. Route arc (soul of the piece — Dubai to London) ──
    # Arc sweeps from lower-left to upper-right, gold
    arc_points = []
    for t in range(101):
        t_norm = t / 100
        # Bezier curve: start lower-left, control point upper-center, end upper-right
        start = (80, 820)
        ctrl  = (540, 200)
        end   = (1000, 380)
        x = (1-t_norm)**2 * start[0] + 2*(1-t_norm)*t_norm * ctrl[0] + t_norm**2 * end[0]
        y = (1-t_norm)**2 * start[1] + 2*(1-t_norm)*t_norm * ctrl[1] + t_norm**2 * end[1]
        arc_points.append((x, y))

    # Draw route with slight glow
    for offset in [4, 2, 1]:
        glow_alpha = 60 // offset
        glow_color = (C["gold"][0], C["gold"][1], C["gold"][2])
        for i in range(len(arc_points) - 1):
            draw.line([arc_points[i], arc_points[i+1]], fill=glow_color, width=offset*2)

    # Main route line
    for i in range(len(arc_points) - 1):
        draw.line([arc_points[i], arc_points[i+1]], fill=C["gold"], width=2)

    # Endpoint dots
    draw.ellipse([arc_points[0][0]-6, arc_points[0][1]-6,
                  arc_points[0][0]+6, arc_points[0][1]+6], fill=C["gold"])
    draw.ellipse([arc_points[-1][0]-6, arc_points[-1][1]-6,
                  arc_points[-1][0]+6, arc_points[-1][1]+6], fill=C["gold"])

    # ── 4. Geometric ship (lines, not illustration) ──
    # Simple hull + mast at midpoint of arc
    mid_idx = 50
    mx, my = int(arc_points[mid_idx][0]), int(arc_points[mid_idx][1])
    ship_color = C["text"]
    # Hull
    draw.polygon([(mx-30, my+15), (mx+30, my+15), (mx+20, my+30), (mx-20, my+30)],
                 outline=ship_color, fill=None)
    # Mast
    draw.line([(mx, my+15), (mx, my-30)], fill=ship_color, width=2)
    # Sail (triangle)
    draw.polygon([(mx, my-28), (mx+20, my+10), (mx, my+10)],
                 outline=C["gold"], fill=None)

    # ── 5. Origin/destination labels ──
    small_font = get_font(22)
    draw.text((60, 840), "DUBAI", font=small_font, fill=C["gold"])
    draw.text((960, 355), "LONDON", font=small_font, fill=C["gold"])

    # ── 6. Crimson compass marker (punctuation) ──
    draw.ellipse([525, 485, 555, 515], fill=C["crimson"])

    # ── 7. Headline (auto-scale font so no line overflows) ──
    lines = headline.upper().split("\n")
    title_size = 58
    while title_size > 20:
        title_font = get_font(title_size, bold=True)
        max_w = max(draw.textbbox((0,0), ln, font=title_font)[2] for ln in lines)
        if max_w < W - 80:
            break
        title_size -= 4
    y_pos = 80
    for line in lines:
        draw_centered_text(draw, y_pos, line, title_font, C["text"])
        y_pos += title_size + 12

    # ── 8. Tagline ──
    tag_font = get_font(28)
    draw_centered_text(draw, y_pos + 20, tagline, tag_font, C["amber"])

    # ── 9. Brand name + URL ──
    brand_font = get_font(30, bold=True)
    url_font = get_font(22)
    draw.text((40, H - 90), "SWIFT SAIL SHIPPING", font=brand_font, fill=C["gold"])
    draw.text((40, H - 50), "swiftsailship.com", font=url_font, fill=C["text"])

    # ── Save ──
    img.save(output_path, "PNG", dpi=(96, 96))
    print(f"✓ Saved maritime poster: {output_path}")
    return output_path


# ─────────────────────────────────────────────────────────────────
# CELESTIAL HARBOR — Eid / Cultural Poster
# ─────────────────────────────────────────────────────────────────
def make_celestial_poster(
    occasion_text: str,
    arabic_text: str = "",
    subtitle: str = "Swift Sail Shipping",
    output_path: str = "_campaign/week1/eid-poster.png"
):
    """
    Celestial Harbor design.
    Midnight indigo, luminous crescent moon, sparse stars, Islamic geometric lattice ghost.
    Museum-quality. Every element earns its place.
    """
    C = CELESTIAL
    img = Image.new("RGB", (W, H), C["bg"])
    draw = ImageDraw.Draw(img)

    # ── 1. Background gradient (midnight → deep indigo, vertical) ──
    for y in range(H):
        t = y / H
        r = int(C["bg"][0] * (1-t) + C["indigo"][0] * t * 0.6)
        g = int(C["bg"][1] * (1-t) + C["indigo"][1] * t * 0.6)
        b = int(C["bg"][2] * (1-t) + C["indigo"][2] * t * 0.6)
        draw.line([(0, y), (W, y)], fill=(r, g, b))

    # ── 2. Islamic geometric lattice (faint ghost texture) ──
    lattice = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ldraw = ImageDraw.Draw(lattice)
    # 8-point star grid
    cell = 120
    for gx in range(-cell, W + cell, cell):
        for gy in range(-cell, H + cell, cell):
            pts = []
            for i in range(8):
                angle = math.pi / 4 * i
                r_outer = cell * 0.45
                r_inner = cell * 0.18
                if i % 2 == 0:
                    pts.append((gx + r_outer * math.cos(angle),
                                gy + r_outer * math.sin(angle)))
                else:
                    pts.append((gx + r_inner * math.cos(angle),
                                gy + r_inner * math.sin(angle)))
            ldraw.polygon(pts, outline=(60, 60, 120, 30), fill=None)

    img = Image.alpha_composite(img.convert("RGBA"), lattice).convert("RGB")
    draw = ImageDraw.Draw(img)

    # ── 3. Moon glow (atmospheric halo behind crescent) ──
    glow_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow_layer)
    moon_cx, moon_cy = 520, 420
    moon_r = 220

    for radius_offset in range(80, 0, -10):
        alpha = int(12 * (1 - radius_offset / 80))
        glow_draw.ellipse([
            moon_cx - moon_r - radius_offset,
            moon_cy - moon_r - radius_offset,
            moon_cx + moon_r + radius_offset,
            moon_cy + moon_r + radius_offset,
        ], fill=(C["amber"][0], C["amber"][1], C["amber"][2], alpha))

    img = Image.alpha_composite(img.convert("RGBA"), glow_layer).convert("RGB")
    draw = ImageDraw.Draw(img)

    # ── 4. Crescent moon (dominant form) ──
    # Full circle in gold, then overlay an offset circle in background color
    moon_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    moon_draw = ImageDraw.Draw(moon_layer)

    # Outer circle (gold)
    moon_draw.ellipse([
        moon_cx - moon_r, moon_cy - moon_r,
        moon_cx + moon_r, moon_cy + moon_r
    ], fill=(*C["gold"], 255))

    # Inner circle (dark — creates crescent)
    offset_x, offset_y = 80, -40
    inner_r = int(moon_r * 0.82)
    moon_draw.ellipse([
        moon_cx + offset_x - inner_r, moon_cy + offset_y - inner_r,
        moon_cx + offset_x + inner_r, moon_cy + offset_y + inner_r
    ], fill=(*C["bg"], 255))

    img = Image.alpha_composite(img.convert("RGBA"), moon_layer).convert("RGB")
    draw = ImageDraw.Draw(img)

    # ── 5. Inner crescent edge warm glow ──
    glow2 = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    glow2_draw = ImageDraw.Draw(glow2)
    for i in range(15):
        alpha = int(40 * (1 - i/15))
        glow2_draw.ellipse([
            moon_cx - moon_r + i, moon_cy - moon_r + i,
            moon_cx + moon_r - i, moon_cy + moon_r - i
        ], outline=(C["amber"][0], C["amber"][1], C["amber"][2], alpha), width=2)

    img = Image.alpha_composite(img.convert("RGBA"), glow2).convert("RGB")
    draw = ImageDraw.Draw(img)

    # ── 6. Stars (sparse, precise, not random) ──
    # Fibonacci-inspired placement
    phi = (1 + math.sqrt(5)) / 2
    star_positions = []
    n_stars = 11
    golden_angle = 2 * math.pi / (phi ** 2)

    for i in range(n_stars):
        angle = i * golden_angle
        r_pos = 380 + (i * 35) % 250  # vary distance from center
        sx = int(W/2 + r_pos * math.cos(angle))
        sy = int(H/2 + r_pos * math.sin(angle) * 0.7)
        # Skip if inside moon
        dist_to_moon = math.sqrt((sx - moon_cx)**2 + (sy - moon_cy)**2)
        if dist_to_moon < moon_r + 20:
            continue
        # Clip to canvas
        if 30 < sx < W - 30 and 30 < sy < H - 30:
            star_positions.append((sx, sy, 3 - (i % 3)))

    star_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    sdraw = ImageDraw.Draw(star_layer)
    for sx, sy, sr in star_positions:
        sdraw.ellipse([sx-sr, sy-sr, sx+sr, sy+sr], fill=(*C["silver"], 200))
        # Subtle twinkle cross
        sdraw.line([(sx-sr*2, sy), (sx+sr*2, sy)], fill=(*C["silver"], 80), width=1)
        sdraw.line([(sx, sy-sr*2), (sx, sy+sr*2)], fill=(*C["silver"], 80), width=1)

    img = Image.alpha_composite(img.convert("RGBA"), star_layer).convert("RGB")
    draw = ImageDraw.Draw(img)

    # ── 7. Typography ──
    title_font  = get_font(68, bold=True)
    sub_font    = get_font(32)
    arabic_font = get_font(52)  # DejaVu for Arabic

    # Occasion text (e.g., "Eid Mubarak" or hook line)
    draw_centered_text(draw, 760, occasion_text.upper(), title_font, C["gold"])

    # Arabic text (if provided)
    if arabic_text:
        reshaped_arabic = render_arabic(arabic_text)
        draw_centered_text(draw, 840, reshaped_arabic, arabic_font, C["amber"])

    # Subtitle / brand
    draw_centered_text(draw, 920, subtitle, sub_font, C["silver"])

    # URL
    url_font = get_font(24)
    draw_centered_text(draw, 970, "swiftsailship.com", url_font, C["silver"])

    # ── Save ──
    img.save(output_path, "PNG", dpi=(96, 96))
    print(f"✓ Saved celestial poster: {output_path}")
    return output_path


# ─────────────────────────────────────────────────────────────────
# MAIN
# ─────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Swift Sail Poster Generator")
    parser.add_argument("--type", choices=["maritime", "celestial"], required=True)
    parser.add_argument("--week", type=int, default=1)
    parser.add_argument("--output", type=str, default=None)
    parser.add_argument("--headline", type=str, default="Your Cargo Moves|Faster Now",
                        help="Use | as line separator (will be converted to newline)")
    parser.add_argument("--tagline", type=str, default="GCC-UK FTA — What It Means for Your Shipments")
    parser.add_argument("--occasion", type=str, default="Eid Mubarak")
    parser.add_argument("--arabic", type=str, default="عيد مبارك")
    args = parser.parse_args()

    if args.type == "maritime":
        out = args.output or f"_campaign/week{args.week}/poster.png"
        Path(out).parent.mkdir(parents=True, exist_ok=True)
        make_maritime_poster(
            headline=args.headline.replace("|", "\n"),
            tagline=args.tagline,
            output_path=out,
            week=args.week
        )
    else:
        out = args.output or f"_campaign/week{args.week}/eid-poster.png"
        Path(out).parent.mkdir(parents=True, exist_ok=True)
        make_celestial_poster(
            occasion_text=args.occasion,
            arabic_text=args.arabic,
            output_path=out
        )
