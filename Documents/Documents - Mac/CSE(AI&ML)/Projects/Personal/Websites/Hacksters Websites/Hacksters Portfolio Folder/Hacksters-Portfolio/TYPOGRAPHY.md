# 🎨 Hacksters Typography System

## 🔥 **The FUNKY Font Stack**

### **Our Bold Design Language:**

We're using a combination of **free premium fonts** and **placeholders for custom fonts** to create a striking, modern, and championship-worthy aesthetic.

---

## 📚 **Font Hierarchy**

### 1. **Righteous** → Display/Hero Font
- **Usage:** Main headlines, hero sections, major statements
- **Vibe:** Bold, rounded, futuristic, geometric
- **Weight:** 400 (single weight)
- **Source:** Google Fonts (FREE)
- **CSS Class:** `.font-display`

**When to use:**
```tsx
// Main page title
<h1 className="font-display text-7xl">HACKSTERS</h1>

// Section heroes
<h1 className="font-display text-6xl">CHAMPIONSHIPS</h1>
```

---

### 2. **Chillax** → Heading/Accent Font
- **Usage:** Section headings, subheadings, special moments
- **Vibe:** Funky, modern, versatile, geometric
- **Weights:** 400, 500, 600, 700
- **Source:** Fontshare (FREE)
- **CSS Classes:** `.font-heading`, `.font-accent`

**When to use:**
```tsx
// Section headings
<h2 className="font-heading text-4xl">Our Journey</h2>

// Taglines
<p className="font-heading text-2xl">Where ideas become reality</p>

// CTAs and special text
<button className="font-accent">Get Started</button>
```

---

### 3. **Inter** → Body Font
- **Usage:** Body text, descriptions, readable content
- **Vibe:** Clean, professional, highly readable
- **Weights:** Variable (100-900)
- **Source:** Google Fonts (FREE)
- **CSS Class:** `.font-body`

**When to use:**
```tsx
// Paragraphs
<p className="font-body text-base">Lorem ipsum dolor sit amet...</p>

// Navigation
<nav className="font-body">...</nav>

// Cards, descriptions
<div className="font-body">...</div>
```

---

## 🎯 **Premium Fonts (Your Original Picks)**

### **Ready to Add:**

1. **Dala Floda** → Bold Serif Display
   - **Vibe:** Swedish, chunky, editorial
   - **Purchase:** [Commercial License Required]
   - **Usage:** Special headlines, poster-style moments

2. **Grafier** → Industrial Sans
   - **Vibe:** Technical, geometric, modern
   - **Purchase:** [Commercial License Required]
   - **Usage:** Tech-heavy sections, data displays

3. **Quair Triangle** → Experimental Display
   - **Vibe:** Sharp, angular, avant-garde
   - **Purchase:** [Commercial License Required]
   - **Usage:** Accent headers, special effects

4. **Weird Serif** → Quirky Display
   - **Vibe:** Unconventional, playful, unique
   - **Purchase:** [Commercial License Required]
   - **Usage:** Creative sections, personality moments

---

## 🛠 **How to Add Premium Fonts**

### **Step 1: Purchase & Download**
1. Buy licenses from the foundry
2. Download font files (.woff2, .woff, .ttf)

### **Step 2: Add to Project**
```bash
# Create fonts directory
mkdir -p public/fonts/dala-floda
mkdir -p public/fonts/grafier
mkdir -p public/fonts/quair-triangle
mkdir -p public/fonts/weird-serif

# Add your font files to respective folders
```

### **Step 3: Create Font CSS Files**

Create `public/fonts/dala-floda.css`:
```css
@font-face {
  font-family: 'Dala Floda';
  src: url('/fonts/dala-floda/DalaFloda-Bold.woff2') format('woff2'),
       url('/fonts/dala-floda/DalaFloda-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

### **Step 4: Import in Layout**
Uncomment these lines in `src/app/layout.tsx`:
```tsx
<link rel="stylesheet" href="/fonts/dala-floda.css" />
<link rel="stylesheet" href="/fonts/grafier.css" />
<link rel="stylesheet" href="/fonts/quair-triangle.css" />
<link rel="stylesheet" href="/fonts/weird-serif.css" />
```

### **Step 5: Add to CSS Variables**
Update `globals.css`:
```css
:root {
  --font-dala: "Dala Floda", serif;
  --font-grafier: "Grafier", sans-serif;
  --font-quair: "Quair Triangle", display;
  --font-weird: "Weird Serif", serif;
}
```

---

## 🎨 **Typography Usage Guide**

### **Current Implementation:**

| Element | Font | Weight | Size Range | Class |
|---------|------|--------|------------|-------|
| Hero Title | Righteous | 400 | 7xl-9xl | `.font-display` |
| Section Headers | Chillax | 600 | 4xl-6xl | `.font-heading` |
| Taglines | Chillax | 500 | 2xl-4xl | `.font-heading` |
| Morphing Text | Chillax | 700 | 3xl-5xl | `.font-accent` |
| Body Text | Inter | 400 | base-lg | `.font-body` |
| Navigation | Inter | 500 | sm-base | `.font-body` |
| Buttons | Chillax | 600-700 | base-lg | `.font-accent` |

---

## 🚀 **Quick Reference**

### **CSS Custom Classes:**

```css
/* Use these in your components */
.font-display  /* Righteous - Big, bold headlines */
.font-heading  /* Chillax - Section headings */
.font-body     /* Inter - Readable content */
.font-accent   /* Chillax Bold - CTAs, special text */
```

### **Tailwind Classes:**

```tsx
// Display (Righteous)
className="font-display text-8xl font-bold tracking-tight"

// Heading (Chillax)
className="font-heading text-4xl font-semibold tracking-wide"

// Body (Inter)
className="font-body text-base font-normal leading-relaxed"

// Accent (Chillax Bold)
className="font-accent text-xl font-bold uppercase tracking-wider"
```

---

## 💡 **Best Practices**

1. **Hierarchy is King:** Use display → heading → body in order of importance
2. **Contrast Creates Interest:** Mix rounded (Righteous) with geometric (Chillax)
3. **Readability First:** Always use Inter for long-form content
4. **Size Matters:** Go BIG with display fonts, moderate with headings
5. **Letter Spacing:** Tight for displays (-0.02em), normal for body
6. **Responsive Sizing:** Scale down gracefully on mobile

---

## 🎯 **Recommended Combinations**

### **Championship Energy:**
```tsx
<h1 className="font-display text-9xl">FIVE TIME CHAMPIONS</h1>
<p className="font-heading text-3xl">Dominating since 2020</p>
```

### **Modern Tech Vibe:**
```tsx
<h2 className="font-heading text-5xl font-semibold">Innovation Lab</h2>
<p className="font-body text-lg">Building tomorrow's solutions today</p>
```

### **Call to Action:**
```tsx
<button className="font-accent text-lg uppercase tracking-widest">
  Join the Team
</button>
```

---

## 📱 **Responsive Scale**

```tsx
// Mobile → Desktop progression
"font-display text-5xl md:text-7xl lg:text-9xl"
"font-heading text-2xl md:text-4xl lg:text-5xl"
"font-body text-sm md:text-base lg:text-lg"
```

---

## 🔮 **Future Additions**

When you get the premium fonts, we can:
- Use **Dala Floda** for trophy/championship sections
- Use **Grafier** for tech stack displays
- Use **Quair Triangle** for timeline markers
- Use **Weird Serif** for team member quotes

---

**Last Updated:** October 28, 2025  
**Status:** ✅ Righteous & Chillax Active | ⏳ Premium fonts pending
