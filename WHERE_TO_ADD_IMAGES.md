# 📸 Quick Image Setup Guide

## 🎯 Where to Add Your Pictures - Step by Step

### 1️⃣ CREATE FOLDERS FIRST

Open your terminal in the Portfolio folder and run:

```bash
mkdir -p public\assets\projects
mkdir -p public\assets\companies
```

Or manually create this structure:
```
d:\Portfolio\
└── public\
    └── assets\
        ├── profile.jpg          ← YOUR MAIN PHOTO HERE
        ├── projects\
        │   ├── deepfake.jpg
        │   ├── pos-system.jpg
        │   └── wordpress-plugin.jpg
        └── companies\
            ├── soft-height.png
            └── avenzaland.png
```

---

### 2️⃣ YOUR PROFILE PHOTO

**Location**: `d:\Portfolio\public\assets\profile.jpg`

**Requirements**:
- ✅ Square photo (400x400px or larger)
- ✅ Professional headshot
- ✅ Good lighting
- ✅ Clean background

**File to Edit**: `d:\Portfolio\src\components\Hero.jsx` (Line 18-19)

**Change this**:
```javascript
src="https://ui-avatars.com/api/?name=Roman+Ahmad&size=200&background=3B82F6&color=fff&bold=true&font-size=0.4"
```

**To this**:
```javascript
src="/assets/profile.jpg"
```

---

### 3️⃣ PROJECT SCREENSHOTS

**Location**: `d:\Portfolio\public\assets\projects\`

Add these files:
- `deepfake.jpg` - Screenshot of your Deep Fake Detection project
- `pos-system.jpg` - Screenshot of Laravel POS system
- `wordpress-plugin.jpg` - Screenshot of any WordPress plugin

**File to Edit**: `d:\Portfolio\src\components\Projects.jsx`

Currently projects don't have images. I can help you add them!

---

### 4️⃣ COMPANY LOGOS

**Location**: `d:\Portfolio\public\assets\companies\`

Add these files:
- `soft-height.png` - Soft Height Multan logo
- `avenzaland.png` - Avenzaland logo

**File to Edit**: `d:\Portfolio\src\components\Experience.jsx`

Currently showing emoji icons (🚀, 💼). Replace with actual logos!

---

## 🚀 QUICK START - Add Your Profile Photo Now!

### Option 1: Use Your Own Photo (RECOMMENDED)

1. **Find a good photo** of yourself
2. **Save it** to `d:\Portfolio\public\assets\profile.jpg`
3. **Edit** `Hero.jsx` line 18-19 (see above)
4. **Refresh** your browser - Done! ✨

### Option 2: Use a Better Avatar Generator

Keep using online avatars but with a better service:

**Change line 18-19 in Hero.jsx to**:
```javascript
src="https://api.dicebear.com/7.x/avataaars/svg?seed=Roman&backgroundColor=3B82F6"
```

or

```javascript
src="https://robohash.org/roman-ahmad?set=set5&size=200x200"
```

---

## 📝 FREE IMAGE RESOURCES

### Professional Photos (if you don't have one):
- **LinkedIn**: Export your profile photo
- **Take New Photo**: Use phone with good lighting + plain background
- **PhotoRoom**: Free app to remove background (iOS/Android)

### Optimize Your Images:
1. **TinyPNG** (https://tinypng.com/) - Compress without quality loss
2. **Squoosh** (https://squoosh.app/) - Google's image optimizer
3. **Canva** (https://canva.com/) - Create project mockups

### Company Logos:
1. Google: "Company Name logo PNG transparent"
2. Check company's website footer or "Press Kit"
3. LinkedIn company page

---

## 🎨 ADDING PROJECT IMAGES (Example)

If you want to add images to your projects section:

**Edit**: `d:\Portfolio\src\components\Projects.jsx`

**Find the FYP object** (around line 4-16) and **add** an `image` property:

```javascript
const fyp = {
  title: 'Deep Fake Detection Of Multimedia using Digital Forensics',
  description: 'Developed a Web Based application...',
  image: '/assets/projects/deepfake.jpg',  // ← ADD THIS LINE
  technologies: ['Django', 'MySQL', ...],
  // ... rest of code
};
```

**Then in the JSX** (around line 74), add an image tag:

```javascript
<div className="card bg-gradient-to-br from-blue-50 to-purple-50 mb-12">
  {/* ADD THIS IMAGE */}
  {fyp.image && (
    <img 
      src={fyp.image} 
      alt={fyp.title}
      className="w-full h-64 object-cover rounded-lg mb-6"
    />
  )}
  
  <div className="flex items-center gap-2 mb-4">
    <span className="text-3xl">🏆</span>
    {/* ... rest of code */}
  </div>
</div>
```

---

## 🆘 NEED HELP?

After adding your images, if they don't show up:

1. ✅ Check file path: `d:\Portfolio\public\assets\profile.jpg`
2. ✅ File name must be exactly: `profile.jpg` (lowercase)
3. ✅ Restart dev server (Ctrl+C then `npm run dev`)
4. ✅ Hard refresh browser (Ctrl + Shift + R)
5. ✅ Check browser console (F12) for errors

---

## ✅ CHECKLIST

- [ ] Create `public/assets` folder
- [ ] Add your profile photo as `profile.jpg`
- [ ] Update Hero.jsx line 18-19
- [ ] Test in browser
- [ ] (Optional) Add project screenshots
- [ ] (Optional) Add company logos

---

**Need me to help update the code? Just ask!** 🚀
