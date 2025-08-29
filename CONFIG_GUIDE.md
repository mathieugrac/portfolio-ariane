# Configuration Guide - Portfolio Ariane

## Overview

This guide explains how to update the website content using the centralized configuration file. All the main content is now stored in `src/lib/config.ts`, making it easy to update without touching the component code.

## Quick Updates

### 1. Personal Information

Edit `src/lib/config.ts` and update the `personal` section:

```typescript
personal: {
  name: "Ariane Bochi",           // Your name
  jobTitle: "Psicóloga online",   // Your job title
  credentials: "CRP 07/24244",    // Your professional credentials
  profileImage: "/images/ariane-3.png",  // Profile photo path
  profileImageAlt: "Ariane Bochi",       // Alt text for accessibility
},
```

### 2. Contact Information

Update the `contact` section:

```typescript
contact: {
  whatsapp: {
    phoneNumber: "351912384883",  // Your WhatsApp number
    message: "Olá! Estou pensando iniciar terapia...", // Pre-filled message
  },
  calendly: {
    url: "https://calendly.com/arianebochi",  // Your Calendly URL
    sessionDuration: "30min",                 // Session duration text
  },
},
```

### 3. Social Media Links

Update the `social` section:

```typescript
social: {
  instagram: "https://instagram.com/psi.arianebochi",  // Your Instagram
  linkedin: "https://linkedin.com/in/arianebochi",     // Your LinkedIn (optional)
},
```

### 4. Button Text

Customize button labels in the `content.buttons` section:

```typescript
content: {
  buttons: {
    approach: "Sobre a minha abordagem",
    whatsapp: "Fale comigo no WhatsApp",
    calendly: "Agende uma conversa inicial (30min)",
  },
},
```

### 5. Testimonials

Update client testimonials in the `testimonials` array:

```typescript
testimonials: [
  {
    id: 1,
    name: "Maria S.",
    text: "Your testimonial text here...",
    rating: 5,
  },
  // Add more testimonials...
],
```

### 6. SEO & Metadata

Update website metadata in the `seo` section:

```typescript
seo: {
  title: "Your Page Title",
  description: "Your meta description",
  keywords: ["keyword1", "keyword2"],
  canonicalUrl: "https://yourdomain.com",
  // ... other SEO settings
},
```

## Environment Variables

For sensitive information like phone numbers, you can use environment variables:

1. Create a `.env.local` file in the root directory
2. Add: `NEXT_PUBLIC_WHATSAPP_NUMBER=351912384883`
3. The config will use this value if available, otherwise fall back to the config file

## What Gets Updated Automatically

When you update the config file, these changes will automatically appear across the website:

- ✅ Header name, title, and credentials
- ✅ Profile image and alt text
- ✅ WhatsApp number and message
- ✅ Calendly URL
- ✅ Social media links
- ✅ Button text labels
- ✅ Testimonial content
- ✅ SEO metadata (title, description, keywords)
- ✅ OpenGraph and Twitter card information

## File Structure

```
src/
├── lib/
│   └── config.ts          ← Main configuration file
├── components/
│   ├── sections/
│   │   ├── Header.tsx     ← Uses personal info
│   │   ├── MainSection.tsx ← Uses contact & buttons
│   │   ├── Footer.tsx     ← Uses social links
│   │   └── Testimonials.tsx ← Uses testimonials
│   └── layout/
│       └── PageLayout.tsx
└── app/
    ├── layout.tsx         ← Uses SEO metadata
    ├── page.tsx           ← Main page
    └── abordagem/
        └── page.tsx       ← Uses contact & buttons
```

## Best Practices

1. **Backup**: Always backup your config file before making changes
2. **Test**: Test changes locally before deploying
3. **Consistency**: Keep text consistent across different sections
4. **Validation**: Ensure all required fields are filled
5. **Images**: Make sure image paths are correct and images exist

## Need Help?

If you need to make changes that aren't covered by this config system, you may need to edit the component files directly. The main components are located in `src/components/sections/`.

---

_Last updated: [Current Date]_
