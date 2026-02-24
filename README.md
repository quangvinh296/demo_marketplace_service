# Viet18 Marketplace Demo - Loan Factory

Demo UI đầy đủ cho hệ thống Viet18 Marketplace - nền tảng B2B cho ngành Mortgage Lending.

**Version:** 3.46.0 | **Framework:** Next.js 16 + React 19 + Shadcn/ui + **Glassmorphism Design** + **Vercel Optimized**

---

## 🚀 Cách chạy Demo

```bash
cd demo-v2
npm run dev
# → http://localhost:3000 (redirects to /marketplace/lenders)

# Production build
npm run build
npm start
```

---

## 📦 Tech Stack

| Công nghệ | Version | Purpose |
|-----------|---------|---------|
| Next.js | 16.1.6 | Full-stack framework |
| React | 19.2.3 | UI library |
| Tailwind CSS | 4.x | Styling |
| Shadcn/ui | 3.8.x | Component library |
| Lucide Icons | 0.575.0 | Icons |
| Recharts | 3.7.0 | Charts |

---

## ⚡ Performance Optimizations (Vercel Best Practices)

### Bundle Size Optimization:

| Optimization | Impact | Location |
|-------------|--------|----------|
| `optimizePackageImports` | Reduces barrel imports | `next.config.ts` |
| Dynamic Recharts | Lazy load ~300KB | `src/components/shared/charts.tsx` |
| `React.cache()` | Deduplicates requests | `src/lib/data.ts` |
| Server Components | Zero client JS | All 12 pages |

### next.config.ts:
```ts
experimental: {
  optimizePackageImports: ['lucide-react', 'recharts'],
}
```

### Dynamic Chart Loading:
```tsx
// Before: Full Recharts bundle
import { BarChart, LineChart } from 'recharts';

// After: Lazy loaded
const BarChart = dynamic(() => import('recharts').then(mod => ({ default: mod.BarChart })));
```

### React.cache() Data Layer:
```tsx
// src/lib/data.ts
export const getLenders = cache(async () => mockLenders);
export const getLenderStats = cache(async () => mockLenderStats);
```

### Server/Client Component Split:
```
Page (Server Component - async)
├── Hero (Server Component)
├── FilterBar (Client Component - "use client")
├── CardGrid (Client Component - "use client")
└── Testimonials (Server Component)
```

---

## 🎨 Glassmorphism Design System

### Core Classes:
| Class | Effect | Usage |
|-------|--------|-------|
| `.glass` | Frosted glass (blur + transparency) | Generic glass effect |
| `.glass-card` | Premium card with gradient + shadow | Cards, containers |
| `.glass-dark` | Dark glass variant | Dark sections |
| `.glass-primary` | Orange-tinted glass | Highlight elements |
| `.glass-success` | Green-tinted glass | Success states |

### Premium Shadows:
| Class | Effect |
|-------|--------|
| `.shadow-premium` | Multi-layer soft shadow |
| `.shadow-premium-lg` | Large premium shadow |
| `.shadow-glow` | Orange glow effect |
| `.shadow-glow-success` | Green glow effect |

### Gradient Backgrounds:
| Class | Colors | Usage |
|-------|--------|-------|
| `.bg-premium-gradient` | Purple gradient | Hero sections |
| `.bg-warm-gradient` | Warm oranges | Welcome areas |
| `.bg-mesh-gradient` | Multi-colored mesh | Page backgrounds |
| `.bg-trust-gradient` | Light grays | Trust sections |

### Trust Badges:
| Class | Effect |
|-------|--------|
| `.badge-verified` | Green verified badge |
| `.badge-featured` | Orange featured badge |
| `.badge-trust` | Glass-style trust badge |

### Animations:
| Class | Effect |
|-------|--------|
| `.animate-float` | Floating animation (6s) |
| `.animate-shimmer` | Shimmer effect |
| `.animate-glow-pulse` | Pulsing glow |

### Performance CSS:
| Class | Effect |
|-------|--------|
| `.card-list-item` | `content-visibility: auto` - virtual scroll optimization |

---

## 🏗️ Architecture

### Layout System (3-Panel):
```
┌─────────────────────────────────────────────────────────────┐
│                    Top Navigation Bar                        │
│  Logo | Dashboard | Pricing | Leads | Marketplace | GO LIVE  │
├─────────┬───────────────────────────────────────────────────┤
│  Left   │                                                    │
│ Sidebar │              Content Area                          │
│ (dark)  │              (Marketplace Tabs)                    │
│         │                                                    │
├─────────┴───────────────────────────────────────────────────┤
│                      Footer                                  │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    Floating Panel (Right)
```

### Server/Client Architecture:
```
┌─────────────────────────────────────────────────────────────┐
│                    Server Components                         │
│  - Page (async) - fetch data                                │
│  - Hero - static content                                    │
│  - Testimonials - static content                            │
│  - ContactForm - static content                             │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Client Components                         │
│  - FilterBar - state, events                                │
│  - CardGrid - state, hover effects                          │
│  - Card - memo(), interactions                              │
│  - Charts - dynamic import, interactivity                   │
└─────────────────────────────────────────────────────────────┘
```

---

## 📑 12 Marketplace Tabs

| # | Tab | Route | Features |
|---|-----|-------|----------|
| 1 | **Lenders** | `/marketplace/lenders` | Glassmorphism cards, featured badges, testimonials, contact form |
| 2 | **Chau Chau Inc** | `/marketplace/chau-chau-inc` | Employee directory, org chart, reviews |
| 3 | **Lender Finder** | `/marketplace/finder` | Social feed, inquiries, comments |
| 4 | **Events** | `/marketplace/events` | Events with countdown, registration |
| 5 | **DPA Programs** | `/marketplace/dpa` | Down payment assistance programs |
| 6 | **Trade Shows** | `/marketplace/trade-shows` | Trade show listings |
| 7 | **Announcement** | `/marketplace/announcement` | Lender announcements |
| 8 | **Vendors** | `/marketplace/vendors` | Approved partner vendors |
| 9 | **3rd-party Processors** | `/marketplace/processors` | TPP partners |
| 10 | **Shout-outs** | `/marketplace/shoutouts` | Recognition board |
| 11 | **Lender Statistics** | `/marketplace/lender-stats` | Dynamic charts, tables |
| 12 | **Chau Chau Inc Statistics** | `/marketplace/company-stats` | Dynamic bar charts |

---

## 🎨 Color Palette

### Primary Colors:
| Color | Hex | Usage |
|-------|-----|-------|
| Primary Orange | #F97316 | CTAs, highlights |
| Cyan | #06B6D4 | Links, info |
| Success Green | #22C55E | LIVE badges, success |
| Error Red | #EF4444 | OFFLINE, errors |
| Dark Slate | #1E293B | Dark sections |

### Glassmorphism Colors:
- Glass white: `rgba(255, 255, 255, 0.7-0.9)`
- Glass dark: `rgba(30, 41, 59, 0.8)`
- Border light: `rgba(255, 255, 255, 0.3-0.5)`

---

## 🧩 Components

### Shadcn Components (15):
```
button, card, badge, select, input, avatar, dialog, sheet,
dropdown-menu, tabs, separator, scroll-area, progress, skeleton, table
```

### Custom Components:
| Component | Location | Purpose |
|-----------|----------|---------|
| `TopNav` | `components/layout/` | Full navigation bar |
| `LeftSidebar` | `components/layout/` | Collapsible dark sidebar |
| `FloatingPanel` | `components/layout/` | Right floating tools |
| `AlertBanner` | `components/layout/` | Orange alert banner |
| `StarRating` | `components/shared/` | 5-star rating display |
| `LikeDislikeButtons` | `components/shared/` | Thumbs up/down |
| `LenderCardSkeleton` | `components/shared/` | Loading skeleton |
| `EmptyState` | `components/shared/` | Empty state display |
| `Charts` | `components/shared/charts.tsx` | Dynamic Recharts wrapper |

---

## 📊 Mock Data

All mock data in `src/mocks/data.ts`:

| Entity | Count |
|--------|-------|
| Lenders | 8 |
| Employees | 6 |
| Vendors | 3 |
| Trade Shows | 3 |
| Inquiries | 5 |
| Events | 5 |
| DPA Programs | 6 |
| Shout-outs | 3 |
| Announcements | 3 |
| Statistics | 5+ |
| Testimonials | 3 |

---

## ✨ Features

### Phase 1-4 (Completed):
- ✅ Full layout system (TopNav, Sidebar, FloatingPanel)
- ✅ All 12 tabs with navigation
- ✅ Mock data for all entities
- ✅ Charts with Recharts
- ✅ Modals (Org Chart, Schedule)
- ✅ Responsive design

### Glassmorphism Updates:
- ✨ Glassmorphism cards with blur + transparency
- 🌟 Featured lender badges with shimmer
- 🛡️ Trust badges (Verified, Featured)
- 💬 Testimonials section
- 📝 Contact form with glass styling
- 🎭 Mesh gradient backgrounds
- ✨ Premium multi-layer shadows
- 🔄 Glow effects on LIVE badges

### Vercel Performance Optimizations:
- ⚡ `optimizePackageImports` for lucide-react + recharts
- 📦 Dynamic Recharts imports (~300KB lazy loaded)
- 🔄 React.cache() for request deduplication
- 🖥️ Server/Client component split (all 12 pages)
- ⏳ Suspense boundaries with skeleton fallbacks
- ♿ Reduced motion media query support
- 📜 `content-visibility` for virtual scroll

---

## 🔧 File Structure

```
demo-v2/
├── src/
│   ├── app/
│   │   ├── globals.css          # Glassmorphism + Performance CSS
│   │   ├── layout.tsx
│   │   ├── page.tsx (redirect)
│   │   └── marketplace/
│   │       ├── layout.tsx       # Server Component + Suspense
│   │       └── [12 tabs]/
│   │           ├── page.tsx     # Server Component (async)
│   │           └── _components/ # Client Components
│   ├── components/
│   │   ├── ui/ (15 Shadcn)
│   │   ├── layout/ (4 custom)
│   │   └── shared/
│   │       ├── star-rating.tsx
│   │       ├── like-dislike.tsx
│   │       ├── skeleton.tsx
│   │       ├── empty-state.tsx
│   │       └── charts.tsx       # Dynamic Recharts
│   ├── lib/
│   │   ├── utils.ts
│   │   └── data.ts              # React.cache() data layer
│   ├── mocks/data.ts
│   └── types/
├── next.config.ts               # optimizePackageImports
├── package.json
└── README.md
```

---

## 📝 Notes

- Demo chỉ dùng cho **presentation** (báo cáo)
- Không có actual backend
- Images từ: ui-avatars.com, unsplash.com
- Build thành công: 16 static pages
- **Glassmorphism Design System** đã được implement
- **Vercel Best Practices** đã được áp dụng

---

**Viet18 Marketplace - Loan Factory | Version 3.46.0 | Glassmorphism Edition | Vercel Optimized | 2026**
