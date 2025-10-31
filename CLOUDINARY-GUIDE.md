# Cloudinary Image Organization Guide

## 🎯 Current Setup

Your Cloudinary images are now integrated! Here's how everything is organized:

### 📁 Folder Structure
```
Home/
├── BTS/                    (Behind-the-scenes photos)
│   ├── [8 subfolders]
│   └── All BTS images from all subfolders
│
└── Official(win)/          (Official/winning photos)
    ├── [5 subfolders]
    └── All official images from all subfolders
```

### 🔄 How Images Are Used

**Currently in Hero Section (Dome Gallery):**
- ✅ **ALL images** from both BTS and Official folders
- ✅ **Randomized** on every page load
- ✅ **Organized in code** - kept separate by category for future use

---

## 🛠️ Usage Examples

### Get All Images (Randomized)
```typescript
const { data } = useCloudinaryImages({
  category: 'all',
  shuffle: true
});
// Returns: ALL BTS + Official images, randomly shuffled
```

### Get Only BTS Images
```typescript
const { data } = useCloudinaryImages({
  category: 'bts',
  shuffle: false
});
// Returns: Only BTS images, in order
```

### Get Only Official Images
```typescript
const { data } = useCloudinaryImages({
  category: 'official',
  shuffle: true,
  limit: 10
});
// Returns: Only Official images, random, max 10
```

---

## 📊 API Endpoints

### Fetch Images
```
GET /api/images
GET /api/images?category=bts
GET /api/images?category=official
GET /api/images?shuffle=true
GET /api/images?limit=20
GET /api/images?category=bts&shuffle=true&limit=10
```

### Response Format
```json
{
  "success": true,
  "count": 45,
  "data": {
    "images": [
      {
        "publicId": "Home/BTS/folder/image",
        "url": "http://...",
        "secureUrl": "https://...",
        "width": 1920,
        "height": 1080,
        "format": "jpg",
        "folder": "Home/BTS/folder",
        "category": "BTS"
      }
    ],
    "stats": {
      "total": 45,
      "bts": 30,
      "official": 15
    }
  }
}
```

---

## 🎨 Future Customization

When you're ready to organize images for specific sections, you can:

### Option 1: Use Categories
```typescript
// In a component
const { data } = useCloudinaryImages({ category: 'bts' });
```

### Option 2: Use Subfolders (Coming Soon)
I can add a feature to fetch images from specific subfolders:
```typescript
// Example (not yet implemented)
const { data } = useCloudinaryImages({ 
  folder: 'Home/BTS/Dizzy Hackers BTS' 
});
```

### Option 3: Use Tags
If you add tags to images in Cloudinary, I can fetch by tags:
```typescript
// Example (not yet implemented)
const { data } = useCloudinaryImages({ 
  tags: ['hero', 'featured'] 
});
```

---

## 🔧 Configuration Files

### Environment Variables (.env.local)
```env
CLOUDINARY_CLOUD_NAME=dswllszlj
CLOUDINARY_API_KEY=231584784231429
CLOUDINARY_API_SECRET=gxkHARpY9M1q06z9lSYI6JRxBK4
```
⚠️ **This file is git-ignored** - your credentials are safe!

### Utility Functions
- `src/lib/cloudinary.ts` - Core Cloudinary configuration
- `src/hooks/useCloudinaryImages.ts` - React hook for fetching images
- `src/app/api/images/route.ts` - API endpoint

---

## 📈 Next Steps

1. ✅ **Test the website** - Check if images load in the dome gallery
2. 🎯 **Organize later** - When you want specific images in specific sections
3. 🏷️ **Add tags** (optional) - Tag images in Cloudinary for easier filtering
4. 📁 **More folders** (optional) - Add more folders for different sections

---

## 🆘 Troubleshooting

### Images not loading?
1. Check browser console for errors
2. Visit `/api/images` to see if API is working
3. Verify `.env.local` credentials are correct

### Want to add more folders?
1. Upload to Cloudinary under `Home/` prefix
2. Images will automatically appear (no code changes needed!)

### Want specific organization?
Tell me which images should go where, and I'll update the code!

---

**Current Status:** ✅ All images integrated, randomized in Hero dome gallery, organized by category in code for future use.
