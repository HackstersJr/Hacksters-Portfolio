# 📦 Upload Weird Serif Font Files

## 🎯 **Instructions for Adding Your Local Font:**

### **Step 1: Prepare Your Font Files**

You should have files like:
- `WeirdSerif-Regular.ttf` (or .otf, .woff, .woff2)
- `WeirdSerif-Bold.ttf` (if you have bold)
- Any other weights/styles

### **Step 2: Convert to Web Formats (Optional but Recommended)**

For best performance, convert to `.woff2` and `.woff`:
- Use: https://transfonter.org/
- Upload your TTF/OTF files
- Check "WOFF2" and "WOFF"
- Download the converted files

### **Step 3: Upload to Project**

**Copy your font files to:**
```
public/fonts/weird-serif/
```

**Example structure:**
```
public/fonts/weird-serif/
├── weird-serif.css (already created ✓)
├── WeirdSerif-Regular.woff2
├── WeirdSerif-Regular.woff
├── WeirdSerif-Regular.ttf
├── WeirdSerif-Bold.woff2
├── WeirdSerif-Bold.woff
└── WeirdSerif-Bold.ttf
```

### **Step 4: Update CSS if Needed**

If your font files have different names, edit:
`public/fonts/weird-serif/weird-serif.css`

Change the filenames to match yours:
```css
src: url('/fonts/weird-serif/YourActualFileName.woff2') format('woff2'),
```

### **Step 5: Test**

1. Refresh http://localhost:3001/font-test.html
2. The "Weird Serif" section should now show the correct font!

---

## 🚀 **Quick Upload Method:**

### **Option 1: Via VS Code**
1. Open the project in VS Code
2. Navigate to `public/fonts/weird-serif/`
3. Drag and drop your font files into that folder

### **Option 2: Via Terminal**
```bash
# From your downloads folder (or wherever the fonts are)
cp WeirdSerif*.* "/Users/vishnu/Documents/Documents - Mac/CSE(AI&ML)/Projects/Personal/Websites/Hacksters Websites/Hacksters Portfolio OKComputer/hacksters-portfolio-okcomputer/hacksters-next/public/fonts/weird-serif/"
```

### **Option 3: Via Finder**
1. Open Finder
2. Navigate to: `hacksters-next/public/fonts/weird-serif/`
3. Copy your font files there

---

## ✅ **What's Already Done:**

- ✅ Created `/public/fonts/weird-serif/` folder
- ✅ Created `weird-serif.css` with @font-face declarations
- ✅ Added link to layout.tsx
- ✅ Created `.font-weird` CSS class

**All you need to do:** Copy the font files! 🎨
