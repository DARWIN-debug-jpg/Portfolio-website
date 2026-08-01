from PIL import Image, ImageFilter, ExifTags
import os

src = os.path.join('images', 'Profile-image-edit2.jpg')
dst = os.path.join('images', 'Profile-image-edit2.jpg')

print('src exists:', os.path.exists(src))
img = Image.open(src)
# auto-orient
try:
    ex = img._getexif() or {}
    orient_k = None
    for k, v in ExifTags.TAGS.items():
        if v == 'Orientation':
            orient_k = k
            break
    orient = ex.get(orient_k, 1)
    if orient == 3:
        img = img.rotate(180, expand=True)
    elif orient == 6:
        img = img.rotate(270, expand=True)
    elif orient == 8:
        img = img.rotate(90, expand=True)
except Exception as e:
    print('orient error', e)

# center-crop to square
w, h = img.size
minside = min(w, h)
left = (w - minside)//2
top = (h - minside)//2
img = img.crop((left, top, left+minside, top+minside))
# resize to 1000px for quality
img = img.resize((1000, 1000), Image.LANCZOS)
# sharpen
img = img.filter(ImageFilter.UnsharpMask(radius=1, percent=150, threshold=3))
# save
img.save(dst, format='JPEG', quality=88, optimize=True, progressive=True)
orig_size = os.path.getsize(src)
new_size = os.path.getsize(dst)
print(f'saved: {dst} ({orig_size} -> {new_size} bytes)')
print('Done')
