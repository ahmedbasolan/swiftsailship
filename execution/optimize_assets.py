import os
from PIL import Image

def optimize_favicons():
    print("--- Optimizing Favicons ---")
    base_dir = "assets"
    
    # Original template logo file to use for favicons (since the original favicons are duplicate of it)
    logo_path = os.path.join("assets", "img", "swift-sail-logo.png")
    if not os.path.exists(logo_path):
        print(f"Error: Logo file not found at {logo_path}")
        return
    
    # Load the template logo
    with Image.open(logo_path) as img:
        # 1. favicon-16x16.png
        f16_path = os.path.join(base_dir, "favicon-16x16.png")
        print(f"Creating optimized {f16_path} (16x16)...")
        img.resize((16, 16), Image.Resampling.LANCZOS).save(f16_path, "PNG", optimize=True)
        print(f"Size: {os.path.getsize(f16_path)} bytes")

        # 2. favicon-32x32.png
        f32_path = os.path.join(base_dir, "favicon-32x32.png")
        print(f"Creating optimized {f32_path} (32x32)...")
        img.resize((32, 32), Image.Resampling.LANCZOS).save(f32_path, "PNG", optimize=True)
        print(f"Size: {os.path.getsize(f32_path)} bytes")

        # 3. apple-touch-icon.png
        apple_path = os.path.join(base_dir, "apple-touch-icon.png")
        print(f"Creating optimized {apple_path} (180x180)...")
        img.resize((180, 180), Image.Resampling.LANCZOS).save(apple_path, "PNG", optimize=True)
        print(f"Size: {os.path.getsize(apple_path)} bytes")

        # 4. assets/favicon.ico and root favicon.ico
        ico_sizes = [(16, 16), (32, 32)]
        ico_imgs = [img.resize(size, Image.Resampling.LANCZOS) for size in ico_sizes]
        
        ico_assets_path = os.path.join(base_dir, "favicon.ico")
        print(f"Creating optimized {ico_assets_path}...")
        ico_imgs[0].save(ico_assets_path, format="ICO", sizes=ico_sizes)
        print(f"Size: {os.path.getsize(ico_assets_path)} bytes")
        
        ico_root_path = "favicon.ico"
        print(f"Copying optimized favicon.ico to root {ico_root_path}...")
        ico_imgs[0].save(ico_root_path, format="ICO", sizes=ico_sizes)
        print(f"Size: {os.path.getsize(ico_root_path)} bytes")

def optimize_images():
    print("\n--- Optimizing Images ---")
    img_dir = os.path.join("assets", "img")
    
    # Define files and targets
    # (filename, max_width, format, quality)
    targets = [
        ("global-reach-background.jpg", 1920, "JPEG", 80),
        ("hero-background.jpg", 1920, "JPEG", 80),
        ("services-background.png", 1920, "PNG", None),
        ("services-hero.png", 1200, "PNG", None),
        ("about-team.png", 1200, "PNG", None),
        ("blog-hero.png", 1200, "PNG", None),
        ("how-it-works-flow.png", 1200, "PNG", None),
        ("og-share.png", 1200, "PNG", None),
        ("swift-sail-logo.png", 400, "PNG", None)
    ]
    
    for filename, max_width, fmt, q in targets:
        filepath = os.path.join(img_dir, filename)
        if not os.path.exists(filepath):
            print(f"Warning: Image {filepath} not found. Skipping.")
            continue
            
        orig_size = os.path.getsize(filepath)
        print(f"Optimizing {filename} (Original size: {orig_size / 1024:.1f} KB)...")
        
        with Image.open(filepath) as img:
            # Resize if wider than max_width
            w, h = img.size
            if w > max_width:
                ratio = max_width / float(w)
                new_h = int(float(h) * ratio)
                print(f"  Resizing from {w}x{h} to {max_width}x{new_h}")
                img = img.resize((max_width, new_h), Image.Resampling.LANCZOS)
            
            # Save and compress
            if fmt == "JPEG":
                img = img.convert("RGB")
                img.save(filepath, "JPEG", quality=q, optimize=True)
            elif fmt == "PNG":
                # Convert to palette mode to significantly reduce size for web if it's large
                if orig_size > 200 * 1024: # > 200KB
                    print("  Quantizing image to 8-bit adaptive palette to reduce size...")
                    # Preserving transparency during quantization
                    if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                        # Keep alpha mask
                        alpha = img.convert('RGBA').split()[-1]
                        # Quantize RGB part
                        img_rgb = img.convert('RGB')
                        img_quant = img_rgb.quantize(colors=256)
                        # Re-attach transparency if needed
                        img = img_quant.convert('RGBA')
                        img.putalpha(alpha)
                    else:
                        img = img.quantize(colors=256)
                        
                img.save(filepath, "PNG", optimize=True)
                
        new_size = os.path.getsize(filepath)
        print(f"  Optimized size: {new_size / 1024:.1f} KB (Reduced by {(1 - new_size/orig_size)*100:.1f}%)")

if __name__ == "__main__":
    optimize_favicons()
    optimize_images()
    print("\nOptimization completed successfully!")
