-# Blog Module - EuiVota 

This is a self-contained blog module for EuiVota - a blockchain-based e-voting platform designed for university Student Representative Council (SRC) elections.

## 📂 Structure

```
src/components/blog/
├── README.md              # This file
├── index.ts              # Module exports
├── types.ts              # TypeScript interfaces
├── data.ts               # Blog posts and categories data
├── BlogPage.tsx          # Main blog page component
├── BlogHeader.tsx        # Navigation header
├── BlogHero.tsx         # Hero section with call-to-action
├── BlogSection.tsx      # Blog posts grid
├── BlogCard.tsx         # Individual blog post card
├── BlogCategories.tsx   # Categories section
├── BlogAbout.tsx        # About EuiVota section
└── BlogFooter.tsx       # Footer component
```

## 🚀 Integration Guide

### 1. Copy Files
Copy the entire `src/components/blog/` folder to your EuiVota project's `src/components/` directory.

### 2. Copy Assets
Copy `src/assets/hero-democracy.jpg` to your EuiVota project's assets folder.

### 3. Design System Integration

**Add these CSS variables to your `src/index.css`:**

```css
:root {
  /* EuiVota brand colors */
  --primary: 145 100% 26%;           /* Blockchain green */
  --primary-glow: 145 85% 35%;       /* Lighter green */
  
  /* Gold accent for highlights */
  --accent: 45 100% 60%;
  
  /* Design system enhancements */
  --hero-bg: linear-gradient(135deg, 145 100% 26%, 145 85% 35%);
  --card-shadow: 0 4px 20px -2px hsl(145 100% 26% / 0.1);
  --card-shadow-hover: 0 8px 30px -4px hsl(145 100% 26% / 0.2);
}
```

**Add these utilities to your `tailwind.config.ts`:**

```typescript
extend: {
  colors: {
    primary: {
      glow: 'hsl(var(--primary-glow))'
    }
  },
  backgroundImage: {
    'hero-gradient': 'var(--hero-bg)'
  },
  boxShadow: {
    'card': 'var(--card-shadow)',
    'card-hover': 'var(--card-shadow-hover)'
  }
}
```

### 4. Usage

**As a standalone page:**
```typescript
import { BlogPage } from '@/components/blog';

// In your routing
<Route path="/blog" element={<BlogPage />} />
```

**As individual components:**
```typescript
import { 
  BlogHero, 
  BlogSection, 
  BlogCategories,
  BlogAbout
} from '@/components/blog';

// Use anywhere in your EuiVota app
<BlogHero />
<BlogCategories />
<BlogSection />
<BlogAbout />
```

### 5. Customization

**Content:** Edit `data.ts` to modify blog posts and categories  
**Styling:** All colors use the design system - modify CSS variables  
**CTAs:** Update button links to point to your EuiVota platform URLs  
**Branding:** All content is already EuiVota-branded

## 🎨 Design Features

- EuiVota brand colors (blockchain green & gold)
- Responsive design optimized for university audiences
- Smooth hover animations and transitions
- Professional typography for technical content
- SEO-friendly structure for blockchain voting keywords

## 📱 Dependencies

This module uses these shadcn/ui components:
- Button, Card, Badge

Lucide React icons:
- Vote, Users, GraduationCap, Shield, Calendar, User, ArrowRight, Clock, BookOpen, Mail, MessageCircle, ExternalLink

## 🎯 Content Categories

1. **Blockchain**: Technical architecture and smart contract explanations
2. **Platform Guides**: Step-by-step tutorials for administrators  
3. **Security**: Privacy protection and cryptographic security features
4. **Case Studies**: Real university implementations and success stories

## 🔧 EuiVota Integration Points

- Hero CTA: "Try EuiVota Platform"
- Header: "Access EuiVota Platform" 
- About CTAs: "Launch EuiVota Platform" & "Schedule Demo"
- Footer: Links to Admin Dashboard, API Docs, Integration Guide

This blog serves as the educational arm of your EuiVota platform, helping universities understand blockchain voting benefits and building trust through technical expertise.