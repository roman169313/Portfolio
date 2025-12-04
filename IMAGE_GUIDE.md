# 🖼️ Image Integration Guide

This guide will help you add your own professional images to your portfolio website.

## 📸 Profile Photo Setup

### Step 1: Prepare Your Photo
- **Size**: 400x400px (square)
- **Format**: JPG or PNG
- **Quality**: High resolution, professional headshot
- **Background**: Clean, neutral background
- **Lighting**: Well-lit, no shadows on face

### Step 2: Add to Project
1. Create folder structure:
   ```
   Portfolio/
   └── public/
       └── assets/
           ├── profile.jpg          (your photo)
           ├── projects/            (project screenshots)
           └── companies/           (company logos)
   ```

2. Save your profile photo as `public/assets/profile.jpg`

### Step 3: Update Hero Component
In `src/components/Hero.jsx`, replace line 12:

**Current (placeholder):**
```javascript
src="https://ui-avatars.com/api/?name=Roman+Ahmad&size=200&background=3B82F6&color=fff&bold=true&font-size=0.4"
```

**Replace with:**
```javascript
src="/assets/profile.jpg"
```

---

## 🏢 Company Logos

### Where to Find Logos
1. **Official Company Websites**: Usually in press/media sections
2. **LinkedIn**: Company pages often have downloadable logos
3. **Your Work Email**: Request from HR or marketing team

### Add Company Logos
1. Save logos in `public/assets/companies/`:
   - `softheight.png`
   - `avenzaland.png`
   - `bzu.png`

2. Update `src/components/Experience.jsx`:

**Current:**
```javascript
logo: '🚀',
```

**Replace with:**
```javascript
logo: '/assets/companies/softheight.png',
```

3. Update the rendering (around line 84):

**Current:**
```javascript
<div className={`... flex items-center justify-center text-3xl ...`}>
  {exp.logo}
</div>
```

**Replace with:**
```javascript
<div className={`... p-2 ...`}>
  <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
</div>
```

---

## 💼 Project Screenshots

### Capture Project Images
- **Resolution**: 1920x1080 or higher
- **Format**: PNG or JPG
- **Content**: Show key features of your project
- **Clean**: Hide any sensitive data

### Add Project Images

1. Save screenshots in `public/assets/projects/`:
   - `deepfake-detection.png`
   - `attendance-system.png`
   - `ecommerce.png`

2. Update `src/components/Projects.jsx`:

Add an `image` property to your projects:

```javascript
const fyp = {
  title: 'Deep Fake Detection...',
  image: '/assets/projects/deepfake-detection.png',  // ADD THIS
  description: '...',
  // ... rest of properties
};
```

3. Display the image in the component:

```javascript
<div className="card ...">
  {fyp.image && (
    <img 
      src={fyp.image} 
      alt={fyp.title}
      className="w-full h-64 object-cover rounded-lg mb-6"
    />
  )}
  <h4 className="text-2xl ...">{fyp.title}</h4>
  {/* ... rest of content */}
</div>
```

---

## 🎨 Free Image Resources

### Profile Photos
- **Remove.bg**: Remove background from your photo
- **Canva**: Create professional headshots with templates
- **PhotoRoom**: AI-powered background removal

### Placeholder Images
- **UI Avatars**: https://ui-avatars.com/ (currently used)
- **Dicebear**: https://dicebear.com/ (avatar generator)
- **Boring Avatars**: https://boringavatars.com/

### Stock Photos (if needed)
- **Unsplash**: https://unsplash.com/
- **Pexels**: https://pexels.com/
- **Pixabay**: https://pixabay.com/

### Icon Resources
- **Heroicons**: https://heroicons.com/ (already integrated)
- **Font Awesome**: https://fontawesome.com/
- **Flaticon**: https://flaticon.com/

---

## 🚀 Quick Start Example

### Complete Example: Adding Your Profile Photo

1. **Take or select a professional photo**
2. **Crop it to square** (1:1 aspect ratio)
3. **Save as** `profile.jpg`
4. **Move to** `public/assets/profile.jpg`
5. **Edit** `src/components/Hero.jsx`:

```javascript
// Find this line (around line 12):
src="https://ui-avatars.com/api/?name=Roman+Ahmad..."

// Replace with:
src="/assets/profile.jpg"
```

6. **Save** and the image will update automatically!

---

## 📝 Image Optimization Tips

### Before Adding Images:
1. **Compress images**: Use TinyPNG or Squoosh
2. **Resize appropriately**:
   - Profile: 400x400px
   - Projects: 1200x800px max
   - Logos: 200x200px
3. **Use WebP format** for better performance (optional)
4. **Keep file sizes under**:
   - Profile photo: < 200KB
   - Project images: < 500KB
   - Logos: < 50KB

### Tools for Optimization:
- **TinyPNG**: https://tinypng.com/
- **Squoosh**: https://squoosh.app/
- **ImageOptim**: (Mac app)
- **RIOT**: (Windows app)

---

## 🎯 Hosting Images Externally (Alternative)

If you prefer not to bundle images with your code:

### Option 1: Use Imgur
1. Upload to https://imgur.com/
2. Copy the direct link
3. Use in your components:
```javascript
src="https://i.imgur.com/YOUR_IMAGE_ID.jpg"
```

### Option 2: Use Cloudinary
1. Sign up at https://cloudinary.com/
2. Upload images
3. Get URL and use in components

### Option 3: GitHub
1. Upload to your GitHub repo
2. Use raw GitHub URL:
```javascript
src="https://raw.githubusercontent.com/yourusername/repo/main/assets/profile.jpg"
```

---

## ✅ Checklist

Before deploying your portfolio:

- [ ] Added professional profile photo
- [ ] Compressed all images
- [ ] Updated company logos (if available)
- [ ] Added project screenshots
- [ ] Tested image loading
- [ ] Checked mobile responsiveness
- [ ] Verified alt text for accessibility
- [ ] Optimized file sizes

---

## 💡 Pro Tips

1. **Use consistent image sizes** across similar elements
2. **Add loading="lazy"** for better performance
3. **Always include alt text** for accessibility
4. **Test on slow connections** to ensure fast loading
5. **Use WebP with JPG fallback** for best compatibility
6. **Keep backup copies** of original high-res images

---

## 🆘 Troubleshooting

### Image not showing?
- Check file path is correct (case-sensitive!)
- Ensure image is in `public/` folder
- Clear browser cache (Ctrl+F5)
- Check browser console for errors

### Image too large?
- Compress using TinyPNG
- Resize to recommended dimensions
- Convert to WebP format

### Poor quality on retina displays?
- Use 2x the display size (e.g., 800x800 for 400x400)
- Use higher quality JPEG (90-95%)

---

Need help? Check the main README.md or contact me!
