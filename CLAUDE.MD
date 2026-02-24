# Mortgage Marketplace Platform - Frontend (demo-v2)

## Project Overview
Frontend cho nền tảng B2B Marketplace chuyên biệt cho ngành Mortgage Lending tại Hoa Kỳ.
Kết nối Loan Officers (LO) với 139+ Wholesale Lenders, Vendors, và các đối tác.

**Status:** Planning Phase → Phase 1 Implementation
**Progress tracking:** `PROGRESS.md`

## Technology Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js | 16.1.6 |
| UI Library | React | 19.2.3 |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x |
| UI Components | Shadcn/ui (new-york style) | Radix UI |
| Icons | Lucide React | 0.575.0 |
| Charts | Recharts | 3.7.0 |
| Animation | tw-animate-css | 1.4.0 |
| Utility | clsx + tailwind-merge | cn() helper |

## Project Structure

```
demo-v2/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout (Geist font, bg-gray-100)
│   │   ├── page.tsx             # Redirect → /marketplace/lenders
│   │   ├── globals.css          # Tailwind + Shadcn CSS vars + custom animations
│   │   └── marketplace/         # (TBD) Marketplace pages
│   │       ├── layout.tsx       # (TBD) Header + Tabs
│   │       ├── lenders/         # (TBD) Tab 1
│   │       ├── lender-finder/   # (TBD) Tab 3
│   │       ├── events/          # (TBD) Tab 4
│   │       ├── dpa-programs/    # (TBD) Tab 5
│   │       ├── trade-shows/     # (TBD) Tab 6
│   │       └── vendors/         # (TBD) Tab 8
│   ├── components/
│   │   ├── ui/                  # Shadcn/ui components
│   │   ├── layout/              # (TBD) Header, Tabs, Footer
│   │   └── shared/              # (TBD) FilterBar, CardGrid, etc.
│   ├── hooks/                   # (TBD) Custom hooks
│   ├── stores/                  # (TBD) Zustand stores
│   ├── lib/
│   │   └── utils.ts             # cn() helper (clsx + twMerge)
│   ├── mocks/
│   │   └── data.ts              # Mock data + TypeScript interfaces
│   └── types/                   # (TBD) Shared types
├── public/                      # SVG assets
├── components.json              # Shadcn config (new-york, zinc, cssVariables)
├── next.config.ts               # Image domains: ui-avatars.com, unsplash
├── tsconfig.json                # Path alias: @/* → ./src/*
└── PROGRESS.md                  # Full project planning docs
```

## Path Aliases
- `@/*` → `./src/*` (configured in tsconfig.json)

## Shadcn/ui Configuration
- **Style:** new-york
- **Base color:** zinc
- **CSS variables:** enabled
- **Icon library:** lucide
- **RSC:** enabled (React Server Components)

## Available Mock Data (`src/mocks/data.ts`)

| Interface | Mock Array | Count | Key Fields |
|-----------|-----------|-------|------------|
| `Lender` | `mockLenders` | 8 | name, status, rating, products, likes |
| `Employee` | `mockEmployees` | 6 | name, department, role, status |
| `Vendor` | `mockVendors` | 3 | name, isApproved, products |
| `TradeShow` | `mockTradeShows` | 3 | title, date, location, state |
| `ShoutOut` | `mockShoutOuts` | 3 | author, recipient, content |
| `Announcement` | `mockAnnouncements` | 3 | author, type, content |
| `LoginHistory` | `mockLoginHistory` | 5 | user, type, activeTime |
| `LenderStats` | `mockLenderStats` | 5 | scenariosReceived/Responded/Skipped |
| `Inquiry` | `mockInquiries` | 5 | lender, content, product, status |
| `Event` | `mockEvents` | 5 | title, type, status, registrations |
| `DPAProgram` | `mockDPAPrograms` | 6 | eligibleStates, creditScoreMin, features |
| - | `mockGoLiveStats` | 5 | name, hours (dec/jan/feb) |
| - | `mockDepartments` | 8 | name, lead |
| - | `mockLiveSchedule` | 3 | department, monFri/saturday/sunday |

## Marketplace 12-Tab System

### Public Tabs (6)
| # | Tab | Route | Layout | Status |
|---|-----|-------|--------|--------|
| 1 | Lenders | `/marketplace/lenders` | 4-col card grid | TBD |
| 3 | Lender Finder | `/marketplace/lender-finder` | Social feed | TBD |
| 4 | Events | `/marketplace/events` | Event cards | TBD |
| 5 | DPA Programs | `/marketplace/dpa-programs` | 3-col card grid | TBD |
| 6 | Trade Shows | `/marketplace/trade-shows` | Event cards | TBD |
| 8 | Vendors | `/marketplace/vendors` | 3-col card grid | TBD |

### Logged-in Only Tabs (6)
| # | Tab | Route | Layout | Status |
|---|-----|-------|--------|--------|
| 2 | Loan Factory Inc | `/marketplace/loan-factory` | 4-col + modals | TBD |
| 7 | Announcement | `/marketplace/announcements` | Social feed | TBD |
| 9 | 3rd-party Processors | `/marketplace/processors` | 3-col card grid | TBD |
| 10 | Shout-outs | `/marketplace/shout-outs` | Social feed | TBD |
| 11 | Lender Statistics | `/marketplace/lender-stats` | Charts + Tables | TBD |
| 12 | LF Statistics | `/marketplace/lf-stats` | Charts + Tables | TBD |

## Custom CSS Classes (globals.css)
- `.bg-gradient-hero` — warm gradient `#FFF7ED → #FFEDD5 → #FFF`
- `.animate-pulse-live` — LIVE badge pulsing animation
- `.animate-countdown` — countdown timer scale animation
- `.card-hover` — card hover lift + shadow effect
- `.sidebar-item` — sidebar hover slide effect
- `.scrollbar-thin` — thin custom scrollbar

## Custom Theme Colors (globals.css)
- `--color-orange: #F97316` — Primary CTA
- `--color-cyan: #06B6D4` — Secondary/Info
- `--color-success: #22C55E` — LIVE, active states
- `--color-error: #EF4444` — Error, dislike

## Image Domains (next.config.ts)
- `ui-avatars.com` — Generated avatar placeholders
- `images.unsplash.com` — Event/trade show posters

## Architecture (Target)
```
Browser → Next.js (BFF + SSR) → Java Spring Boot API → PostgreSQL
```
- Next.js BFF: proxy, transform/aggregate data, auth (JWT httpOnly cookie)
- Spring Boot: business logic, validation, REST API
- PostgreSQL: relational data, 21 tables planned

## Development Commands
```bash
npm run dev      # Start dev server (Turbopack)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

## Code Conventions

### File Naming
- Components: `PascalCase.tsx` (e.g., `LenderCard.tsx`)
- Pages: `page.tsx` (Next.js App Router)
- Layouts: `layout.tsx`
- Hooks: `use-*.ts` (e.g., `use-lenders.ts`)
- Stores: `use-*-store.ts` (e.g., `use-filter-store.ts`)
- Utils: `camelCase.ts`

### Component Pattern
```tsx
// Server Component (default in App Router)
export default function LenderCard({ lender }: { lender: Lender }) {
  return <div className="...">{lender.name}</div>;
}

// Client Component (when needed)
"use client";
export default function FilterBar() {
  const [filter, setFilter] = useState("");
  return <input value={filter} onChange={e => setFilter(e.target.value)} />;
}
```

### Styling Pattern
- Use Tailwind utility classes directly
- Use `cn()` from `@/lib/utils` for conditional classes
- Use Shadcn/ui CSS variables for theme colors
- Custom animations in `globals.css`

```tsx
import { cn } from "@/lib/utils";

<div className={cn(
  "rounded-lg border p-4",
  isActive && "border-orange-500 bg-orange-50"
)} />
```

### Responsive Breakpoints
```
Mobile  (< 640px):   1 column
Tablet  (640-1024):  2 columns
Desktop (> 1024):    3-4 columns
```

## Implementation Phases

| Phase | Scope | Status |
|-------|-------|--------|
| Phase 1 | Project setup, Docker, Next.js + Spring Boot skeleton | NOT STARTED |
| Phase 2 | Lenders tab: card grid, FilterBar, Like, StarRating | NOT STARTED |
| Phase 3 | Finder, Events, DPA, Trade Shows, Vendors | NOT STARTED |
| Phase 4 | Animations, mobile, performance audit, E2E tests | NOT STARTED |

## Notes for AI Assistants
- This is a **Next.js 16 + React 19 + TypeScript** project, NOT Java/GWT
- Use **App Router** (not Pages Router)
- Default to **Server Components** unless client interactivity needed
- Use `"use client"` directive only when state/effects/event handlers required
- Use `@/` path alias for all imports
- Mock data available in `src/mocks/data.ts` — use these during development
- Shadcn components installed via `npx shadcn@latest add [component]`
- Full planning docs in `PROGRESS.md` — read for business context
- **IMPORTANT:** Always respond in bilingual format - Vietnamese first, then English translation in parentheses
- **IMPORTANT:** Format: "Vietnamese sentence (English translation)" for every response
- **IMPORTANT:** Example: "Toi da tao file thanh cong! (I've successfully created the file!)"
- **IMPORTANT:** When explaining technical concepts, prefer using diagrams (ASCII art, flowcharts) or tables for clarity
- **IMPORTANT:** Use simple language in both Vietnamese and English, avoid overly technical jargon when possible
- **IMPORTANT:** This bilingual approach helps user improve English while understanding technical concepts
- **IMPORTANT:** When user starts a new conversation about a new feature, ask if they want to create a feature documentation file (.md) to track progress
- **IMPORTANT:** Once a feature documentation file (.md) is created, automatically update it every 5 requests/tasks
- **IMPORTANT:** When writing code, minimize comments - only comment complex business logic or non-obvious decisions
- **IMPORTANT:** When returning to edit code, respect user's manual changes - NEVER overwrite without asking
- **IMPORTANT:** Suggest adding project-wide patterns/conventions to CLAUDE.MD when discovered
- **IMPORTANT:** After exploring codebase, ask if findings should be added to CLAUDE.MD for future reference
