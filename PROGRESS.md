# Mortgage Marketplace Platform - Progress Tracking

## Project Status: PLANNING PHASE
**Report Version:** v7.1
**Last Updated:** 2026-02-20
**Google Doc:** https://docs.google.com/document/d/16up4dW8TWjryQ15TzkRAwuU2HFo1dOP9dnxdDXiQK-0/edit

---

## 1. Project Overview

**Tên dự án:** Multi-Tab Mortgage Marketplace Platform
**Mô tả:** Xây dựng lại module Marketplace của hệ sinh thái Loan Factory — nền tảng SaaS B2B toàn diện phục vụ ngành Mortgage Lending tại Hoa Kỳ
**Gồm 12 sections:** 6 public + 6 logged-in only
**Staging:** viet18.com (staging) ↔ loanfactory.com (production) | Chau Chau Inc (staging) ↔ Loan Factory (production)

**Public tabs (6):** Lenders, Lender Finder, Events, DPA Programs, Trade Shows, Vendors
**Logged-in only tabs (6):** Loan Factory (Company Directory), Announcement, 3rd-party Processors, Shout-outs, Lender Statistics, Loan Factory Statistics

### 1.1 Mục đích và Nghiệp vụ Cốt lõi

Loan Factory Marketplace là nền tảng B2B Marketplace chuyên biệt cho ngành cho vay thế chấp (Mortgage Lending) tại Hoa Kỳ. Nền tảng đóng vai trò trung tâm kết nối giữa Mortgage Brokerage Company (Loan Factory) với hệ sinh thái 139+ Wholesale Lenders, Vendors, và Loan Officers. Mục tiêu cốt lõi: tối ưu hóa quy trình tìm kiếm, so sánh, tương tác giữa Loan Officers (LO) với các Lenders, cung cấp công cụ quản lý nội bộ, đào tạo, và phân tích hiệu suất.

### 1.2 Kiến trúc Điều hướng Hệ thống Hiện tại (Staging Audit)

**Nguồn khảo sát:** viet18.com/marketplace (staging v3.45.0, ngày 20/02/2026)

**Top Navigation Bar (Header cố định):** Logo "LOAN FACTORY" (trái) | Search | Dashboard | Pricing Engine | Hot Leads | Leads | Prospects | Loans | **Marketplace** (active) | GO LIVE (nút xanh lá → Google Meet) | Resources (dropdown) | Message (notification badge) | User Avatar (phải). Ngay dưới header: Alert Banner cam cảnh báo leave requests chờ duyệt.

**Left Sidebar (Thu gọn/Mở rộng):**
- CREATE A NEW LOAN
- MAIN FEATURES / MARKETING FEATURES / MISCELLANEOUS FEATURES / LOAN PRODUCTS (expandable)
- USER SETTINGS: LO Important Settings, System Preference, Credentials, Marketing
- ADMIN: Transactions, Rate Alerts, Users, Associate's To-Dos, Admin, Service Desks, Customer Relationship, Leave Management, Recruiting, LO Recruiting, Compensation, Shared Documents, Marketing, My Training Academy, Real Estate Division

**Marketplace 12-Tab System:** Lenders | Loan Factory Inc | Lender Finder | Events | DPA Programs | Trade Shows | Announcement | Vendors | 3rd-party Processors | Shout-outs | Lender Statistics | Loan Factory Statistics

**Floating Elements:** Bộ công cụ nổi bên phải (tick, thumbs-up, code, refresh), HELP button, chatbot mascot, notification badge, scroll-to-top. Footer-left: Fill form, Debug mode, Which code is this?, Clear page cache, Get Help?, LoanFactory AI Chat, Consumer Chat, datastore, logs.

### 1.3 Chi tiết 12 Tab Marketplace (Staging Audit)

#### TAB 1: LENDERS (Default Tab) — `/marketplace/Lenders`
- **Mục đích:** Catalog 139+ wholesale lenders cho LO browse/compare
- **Layout:** 4-column card grid + toolbar (dropdown "LIVE lenders" xanh lá, "Action" xám đậm) + filter bar (Channel, Lender Name, Product Offered, Program comboboxes, Reset filters, More)
- **Card elements:** LIVE/OFFLINE badge (animation), Referral Lender badge (đỏ), Logo, Product tags (QM, Non-QM, Jumbo, Private Loan, Commercial, Home Equity, Vacant Land/Lot, Reverse Mortgage), "Rate sheet and more..." CTA, Like/Dislike counts, Star rating (5 sao), Review count
- **Resources:** Non-QM Brief Handbook (Google Drive PDF), HELOC Lenders (Google Sheets)
- **Stats:** "139 lender(s), 1 lender(s) online"

#### TAB 2: LOAN FACTORY INC (Company Directory & HR) — `/marketplace/Loan_Factory_Inc`
- **Mục đích:** Directory nhân viên nội bộ, tổ chức, đánh giá
- **Layout:** 4-column employee card grid + 7 sub-buttons (Departments, Teams, Corporate Coaches, Production Partners, Company Organization Chart, Associate Reviews, Live Schedule)
- **Filters:** Name/Email/Phone search, Department, Special Role, Licensed State(s), Role
- **CTA nổi bật:** "I want to GO LIVE now" (nền xanh gradient)
- **Employee Card:** LIVE badge, role badge (Production Partner / Team Leader), custom status message, avatar, tên + location, title code, email/phone icons, additional languages, like/dislike, reviews
- **Modal - Organization Chart:** Sơ đồ tổ chức dạng cây phân cấp (tree chart) với departments (LOA Support, Licensing, IT, Accounting, HR, Follow up...) và team leads
- **Modal - Associate Reviews:** Biểu đồ phân bố star rating + bảng dữ liệu (Reviewer, Rating/Feedback, Reviewee, Note, History, Loan link)
- **Modal - Live Schedule:** Bảng lịch trực theo department (Loan Officer Support, Underwriting, Support for Processors) Mon-Fri/Sat/Sun PST

#### TAB 3: LENDER FINDER (Inquiry Social Feed) — `/marketplace/lender_finder`
- **Mục đích:** LO post inquiry mô tả kịch bản vay → Lenders nhận notification → phản hồi qua comment
- **Layout:** Vertical social feed (Facebook/LinkedIn style)
- **Toolbar:** "POST A LENDER INQUIRY" (xanh dương), "SAVED INQUIRY" (cam), "Most Recent" (sort dropdown)
- **Filters:** Inquiry ID/Author/#hashtag, Lenders, Lenders response, Product Offered, Program, Responded?, Active badge
- **Post elements:** Avatar + tên + org (link), timestamp, Active badge, post ID, 3-dot menu, text content, comment count, Like/Comment/Share, threaded comments + Reply, input "Write a comment..."

#### TAB 4: EVENTS (Event Management) — `/marketplace/Events`
- **Mục đích:** Tạo, đăng ký, quản lý sự kiện đào tạo LO
- **Layout:** Vertical event cards + list/grid toggle
- **Toolbar:** "Add new event" (xanh dương), "My events" (cam), "All events" (xám). Toggle UPCOMING/COMPLETED
- **Filters:** Event title/host/#hashtag, Event type, Event source
- **Event Card:** Thumbnail, calendar date badge (FEB 20), countdown timer (cam nổi bật), "Register for Event" CTA (xanh lá), "Add to my calendar" (outline), UPCOMING badge, title, datetime PST, engagement metrics, "Will be recorded" badge, pin icon, type badges (LO TRAINING, AFTER PARTY AVAILABLE)

#### TAB 5: DPA PROGRAMS (Down Payment Assistance) — `/marketplace/dpa_programs`
- **Mục đích:** Catalog chương trình hỗ trợ trả trước
- **Layout:** 3-column card grid
- **Filters:** Lender Name, Eligible States, Eligible Borrower
- **Card elements:** Lender logo, DPA program name (button link), description, eligibility badges (US citizens/Permanent Residents, No requirement, Income Limit, Loan limit, Meet FHA/USDA guidelines), credit score range
- **Resources:** Non-QM Brief Handbook, HELOC Lenders (shared with Lenders tab)

#### TAB 6: TRADE SHOWS — `/marketplace/tradeshow`
- **Mục đích:** Quản lý triển lãm thương mại mortgage
- **Layout:** Vertical event cards
- **Toolbar:** "Add new Trade Show" (xanh dương), "My Trade Shows" (cam), "Company Trade Shows" (xám). Header "UPCOMING TRADE SHOWS" (blue full-width)
- **Filters:** Trade Show name/Speakers, Trade Show type, State
- **Card:** Thumbnail, calendar date badge, title, datetime PST, location (pin icon), Register button, AFTER PARTY AVAILABLE badge

#### TAB 7: ANNOUNCEMENT (Bulletin Board) — `/marketplace/Announcement`
- **Mục đích:** Lenders share updates, promotional programs, rate sheets → LOs
- **Layout:** Vertical social feed (giống Lender Finder)
- **Toolbar:** "POST AN ANNOUNCEMENT" (xanh dương), "SAVED ANNOUNCEMENT" (cam), "Most Recent" (sort)
- **Filters:** Announcement ID/#hashtag, Lender, Vendor, Type announcement
- **Post format:** Avatar + tên + org, timestamp, Active/Pin badges, text content, Like/Comment/Share, threaded comments

#### TAB 8: VENDORS (Third-Party Partners) — `/marketplace/Vendors`
- **Mục đích:** Catalog vendors (insurance, appraisal, etc.)
- **Layout:** 3-column card grid
- **Filters:** Name search, Products/services, Approved badge
- **Stats:** "3 vendor(s), 0 vendor(s) online"
- **Card:** "Loan Factory Approved Partner" badge (xanh lá), logo, product tags, "Special discounts/Important information" CTA, Like/Dislike, Reviews

#### TAB 9: 3RD-PARTY PROCESSORS (TPP) — Shares same interface/data model as Vendors tab

#### TAB 10: SHOUT-OUTS (Recognition Board) — `/marketplace/Shout-outs`
- **Mục đích:** Internal recognition board + HR/management announcements
- **Layout:** Vertical social feed
- **Toolbar:** "POST SHOUT-OUT" (xanh dương), "PENDING APPROVALS" (cam — approval workflow), "Most Recent"
- **Filters:** Shout-out ID/#hashtag/created by
- **Post format:** "Shout-out to: [Person Name]" (link), text content, @mentions, Like/Comment/Share

#### TAB 11: LENDER STATISTICS (Analytics Dashboard) — `/marketplace/Lender%20Statistics/`
5 sub-tabs:
1. **The last time GO LIVE** — Bar chart ngang, Lender/User filters, time period toggle (Last month/3m/6m/YTD), pagination
2. **Total hours GO LIVE** — Bar chart ngang, color-coded theo tháng
3. **Lender Finder - Response Rate** — Table: Full name, Scenarios received/responded/skipped, Response %
4. **Login history** — AUTHENTICATION AUDIT LOGS: User (avatar+name+role badge), Type (Login/Logout/Session expired color-coded), Active time, Tracking link
5. **Lender Information Tracker** — Compliance: Lender, Submitted Date, Verification Status (dropdown), Send reminder (email), Note, Audit log

#### TAB 12: LOAN FACTORY STATISTICS — `/marketplace/Loan%20Factory%20Statistics/`
2 sub-tabs:
1. **LO Total Hours GO LIVE** — Bar chart cho Loan Officers, User filter, time period toggle, pagination (1-5 of 34)
2. **Non-LO Total Hours GO LIVE** — Tương tự cho non-LO staff

### 1.4 UI/UX Design Patterns (Audit Findings)

**Layout Categories theo Tab:**

| Layout Type | Tabs | Mục đích |
|-------------|------|----------|
| Card-based catalog (grid) | Lenders (4-col), Vendors (3-col), DPA Programs (3-col) | Browse / Discover |
| Social feed (vertical) | Lender Finder, Announcement, Shout-outs | Community interaction |
| Event cards (vertical) | Events, Trade Shows | Scheduling / Registration |
| Charts + Tables | Lender Statistics (5 sub-tabs), Loan Factory Statistics (2 sub-tabs) | Analytics / Compliance |
| Hybrid (cards + modals) | Loan Factory Inc (7 sub-buttons) | HR / Org Management |

**Design System hiện tại (staging):**
- Color Palette: Primary cyan/teal (#00BCD4), Green CTAs (#4CAF50), Orange alerts/timers, Red OFFLINE/critical, Dark sidebar (#2C3E50)
- Card Pattern: border-radius, shadow hover, footer Like/Dislike/Stars/Reviews
- Social Feed Pattern: Avatar + Name + Org + Timestamp + Badge + Content + Like/Comment/Share + Threaded Comments
- Filter Pattern: "Reset filters" + "More" toggle + inline combobox dropdowns
- Badge System: LIVE (green animated), OFFLINE (red), Referral Lender (red), Approved Partner (green), Active (green), Pin (orange), Product types (cyan)
- Modal Pattern: Overlay X close for charts, org chart, reviews, schedules
- Chart Pattern: Horizontal bar charts, month color-coding, time period toggle, pagination

### 1.5 User Roles (Từ Audit)

| Role | Chức năng chính |
|------|----------------|
| **Loan Officer (LO)** | Browse lenders, post inquiries, register events, view DPA, give/receive shout-outs |
| **Lender Account Executive (AE)** | Post announcements, respond inquiries, manage rate sheets, GO LIVE real-time support |
| **Admin/Manager** | Lender Statistics, Compliance Tracker, Associate Reviews, Leave Management, sidebar admin tools |
| **Vendor** | Manage vendor profile, post special discounts |

### 1.6 Luồng Nghiệp vụ Chính (Key Business Flows)

1. **Lender Discovery:** Filter → Card Detail → Rate Sheet → Contact
2. **Inquiry → Deal:** Post Inquiry → Lender Notification → Response → Comment Thread → Deal
3. **Event Management:** Create → Registration → Calendar Sync → Attendance
4. **DPA Search:** Program Search → Eligibility Check → Lender Contact
5. **Recognition:** Shout-out Post → Approval Workflow → Publication → Social Engagement
6. **Performance Monitoring:** Statistics → Compliance Tracking → Email Reminders

### 1.7 Integration Points (Hệ thống hiện tại)

| Integration | Mục đích |
|-------------|----------|
| Google Meet | GO LIVE feature (real-time video) |
| Google Drive | Non-QM Handbook PDF |
| Google Sheets | HELOC Lenders spreadsheet |
| Email system | Send reminder, notifications |
| Calendar system | Add to my calendar |
| Chat system | LoanFactory AI Chat, Consumer Chat |
| SMS/Text | Lender Finder notifications |

---

## 2. Architecture Decisions

### 2.1 Overall Architecture: Option C - BFF Pattern
```
Browser → Next.js (BFF + SSR) → Java Spring Boot API → PostgreSQL
```

**Lý do chọn Option C:**
- SSR/SSG tận dụng tối đa → SEO tốt cho marketplace
- Bảo mật: token, API keys giữ ở server Next.js (httpOnly cookie)
- Không cần CORS (browser chỉ gọi Next.js, server-to-server tới Spring)
- Gộp nhiều API calls thành 1 request, giảm 60% latency
- HTML render sẵn data → user thấy content ngay
- ISR caching: revalidate mỗi 5 phút cho static data

**Nguyên tắc vàng cho BFF:**
- Next.js BFF chỉ làm 3 việc: proxy requests, transform/gộp data, xử lý auth
- KHÔNG chứa business logic
- KHÔNG truy cập database trực tiếp
- Mọi business logic → Java Spring

**Phân chia trách nhiệm:**

| Next.js BFF (CHỈ LÀM) | Spring Boot (XỬ LÝ) | PostgreSQL (LƯU TRỮ) |
|------------------------|---------------------|----------------------|
| Proxy requests, Transform/gộp data, Auth (JWT cookie), SSR/SSG render. ✕ KHÔNG business logic, ✕ KHÔNG truy cập DB | Business logic, Validation rules, JWT generation, REST API endpoints, Rate limiting, Email notifications | Relational data, ACID transactions, Complex JOINs, Full-text search, Indexes & constraints, Migrations |

**So sánh kiến trúc:**

| Tiêu chí | A: SPA | B: Fullstack | C: BFF ✓ |
|----------|--------|-------------|----------|
| SEO | Kém | Tốt | Tốt nhất |
| Bảo mật | Client token | Tốt | Server token |
| Performance | Waterfall | Tốt | Gộp API |
| Phù hợp | Dashboard | Prototype | Marketplace |

### 2.2 Error Handling Standard (RFC 7807) ★ NEW
- Chuẩn quốc tế format lỗi API thống nhất: `{type, title, status, detail, instance}`
- Spring Boot 3 hỗ trợ sẵn qua `@ControllerAdvice` + `ProblemDetail` class
- BFF luôn biết cách parse lỗi, Frontend luôn biết cách hiển thị
- 1 format cho TẤT CẢ API thay vì mỗi endpoint trả format khác nhau

### 2.3 OpenAPI / Swagger - Đồng bộ API tự động ★ NEW
- `springdoc-openapi` tích hợp Spring Boot → tự sinh API docs từ Java code
- `openapi-generator` tự sinh TypeScript interfaces cho Next.js BFF
- Backend đổi field → Frontend build FAIL ngay (compile-time) thay vì runtime error
- So sánh: OpenAPI ✓ (REST+BFF perfect fit) vs GraphQL (over-engineering ~20 endpoints) vs Manual (rủi ro cao)

### 2.4 Tech Stack

| Layer | Technology | Ghi chú |
|-------|-----------|---------|
| **Frontend** | Next.js 15 + React 19 | SSR + BFF layer |
| **Styling** | Tailwind CSS | Utility-first, ~10KB (purge) |
| **UI Components** | Shadcn/ui + 8 libs (~56KB) | Copy-paste, full control, Radix a11y |
| **Client State** | Zustand (~1KB) | UI state, filters, modals |
| **Server State** | TanStack Query | Fetch, cache, pagination |
| **Animation** | Framer Motion (~33KB) | Declarative, gestures |
| **Forms** | React Hook Form + Zod | Performance, type-safe |
| **Backend** | Java Spring Boot 3 | Business logic, REST API |
| **ORM** | JPA / Hibernate | Mature, battle-tested |
| **Database** | PostgreSQL 16 | Relational data, strong JOINs |
| **DB Migration** | Flyway ★ | Version control for DB schema |
| **API Contract** | OpenAPI/Swagger ★ | Auto-gen TypeScript types |
| **Error Format** | RFC 7807 ★ | Standardized API errors |
| **Auth** | Spring Security + JWT | httpOnly cookie via BFF |
| **Cache** | Redis | Session + data cache, rate limiting |
| **File Storage** | Cloud Storage (S3/GCS) | Scalable, presigned URL, CDN |
| **Containerization** | Docker + docker-compose | Dev + Production |
| **Testing** | JUnit 5 + Mockito + Playwright ★ | Unit + Integration + E2E |
| **AI Tools** | Claude Code + 2 Skills | Coding + Design + Performance |
| **Hosting** | Vercel (FE) + AWS/DO (BE+DB) | Tách biệt deploy |

### 2.5 State Management: Zustand ✓

**Khái niệm:** Thư viện quản lý trạng thái tối giản, centralized store không cần wrapper provider phức tạp.

**Tại sao chọn:** Xử lý luồng dữ liệu phức tạp như Multi-step Mortgage Form mà không gây ảnh hưởng hiệu năng.

**Ưu điểm:**
- Hiệu năng vượt trội: Chỉ render lại component nào thực sự sử dụng state đó (Selector)
- Siêu nhẹ: ~1KB (nhẹ hơn Redux Toolkit ~10 lần)
- Đơn giản: Ít boilerplate, không cần Actions/Reducers phức tạp
- Không "Zombie Child": Giải quyết triệt để stale state trong React

**Nhược điểm → Giải pháp:**
- Tự do quá mức → cấu trúc code lộn xộn → Quy định Store chia theo feature (`useAuthStore`, `useCartStore`)

**So sánh chi tiết 3 chiều:**

| Tiêu chí | Zustand (Đề xuất) | Redux Toolkit | React Context API |
|----------|-------------------|---------------|-------------------|
| Độ phức tạp | Thấp: hook useStore, setup 5 phút | Cao: Store, Slices, Reducers, Actions, Provider | Trung bình: Context, Provider, Wrapper |
| Hiệu năng | Tốt: Chỉ re-render component đang lắng nghe | Tốt: Tương tự nhưng setup dài dòng | Thấp: state đổi → re-render cả cây component con |
| Ví dụ | Form Wizard 5 bước: chỉ ô input đang nhập cập nhật | Core Banking cực lớn (quá khổ cho dự án này) | Dark/Light Mode OK. Form nhập liệu → giật lag |

**So sánh nhanh:**

| Tiêu chí | Redux | Zustand ✓ | Jotai | Recoil |
|----------|-------|-----------|-------|--------|
| Bundle | ~11KB | ~1KB | ~3KB | ~20KB |
| Boilerplate | Nhiều | Ít nhất | Ít | TB |
| SSR | Config | Tốt | Tốt | Phức tạp |

### 2.7 Authentication: Spring Security Lead
**Flow:**
1. User login → Next.js proxy tới Spring `/auth/login`
2. Spring validate → return JWT
3. Next.js lưu JWT vào httpOnly cookie
4. Mọi request sau: Next.js đọc cookie → attach JWT header → gọi Spring
5. Token refresh tự động khi hết hạn

**Roles:** ADMIN, LENDER, USER, VENDOR

### 2.8 Repo Structure: Monorepo Hybrid
```
mortgage-marketplace/
├── docker-compose.yml
├── docker-compose.dev.yml
├── Makefile
├── apps/
│   ├── web/                  # Next.js frontend + BFF
│   └── api/                  # Java Spring Boot backend
├── packages/
│   └── api-contracts/        # Shared API types (OpenAPI generated)
├── database/
│   ├── migrations/           # Flyway SQL migrations (V1__, V2__, ...)
│   ├── init.sql
│   └── seed.sql
└── deploy/
    ├── production/
    └── staging/
```

---

## 3. Database Schema Design

### 3.1 Tổng quan: 21 bảng

| Category | Tables | Count |
|----------|--------|-------|
| Auth | users, refresh_tokens | 2 |
| Lenders | lenders, lender_products, lender_programs | 3 |
| Inquiries | inquiries, inquiry_tags, inquiry_responses | 3 |
| Events | events, event_registrations | 2 |
| DPA | dpa_programs, dpa_eligible_states, dpa_eligible_borrowers, dpa_features | 4 |
| Trade Shows | trade_shows, trade_show_speakers | 2 |
| Vendors | vendors, vendor_services | 2 |
| Shared (Polymorphic) | reactions, comments, reviews | 3 |
| **Total** | | **21** |

### 3.2 Flyway Database Migration ★ NEW
- Version control for DB: `V1__Create_Users.sql`, `V2__Create_Lenders.sql`, `V3__Add_Credit_Score.sql`
- Spring Boot start → Flyway auto check & apply pending migrations
- So sánh: Flyway ✓ (SQL thuần, Spring tích hợp sẵn) vs Liquibase (XML verbose) vs Hibernate ddl-auto (nguy hiểm Production)
- Mọi môi trường (Dev/Staging/Prod) ĐỒNG BỘ 100%

### 3.3 Polymorphic Tables
3 bảng dùng chung cho nhiều entities:
- **reactions** → Like/Dislike cho LENDER, VENDOR, INQUIRY, EVENT, COMMENT
- **comments** → Comments cho INQUIRY, EVENT, LENDER, VENDOR (nested replies qua parent_id)
- **reviews** → Rating 1-5 sao cho LENDER, VENDOR

### 3.4 Tại sao PostgreSQL thay vì MongoDB
- Marketplace data có nhiều quan hệ phức tạp (Lender ↔ Program ↔ User ↔ Review)
- 1 SQL query sạch (JOINs) vs MongoDB pipeline dài, khó debug
- UNIQUE constraints enforce 1 user = 1 like (DB level, 100% safe) vs MongoDB manual check (race condition)
- Java Spring + JPA/Hibernate rất mature với PostgreSQL

**3 Ví dụ Query so sánh:**

| Ví dụ | PostgreSQL ✓ | MongoDB |
|-------|-------------|---------|
| **1. Lender + rating + like** | 1 query: SELECT + JOIN + AVG + FILTER → rõ ràng | aggregate pipeline ($match, $lookup×2, $addFields) → dài, khó debug |
| **2. UNIQUE 1 user 1 like** | CREATE UNIQUE INDEX + ON CONFLICT → DB enforce 100% safe | findOne → if/else → race condition = duplicate |
| **3. Filter DPA theo State** | JOIN dpa_eligible_states → normalized, flexible queries | $match nested arrays → update 50 states cùng lúc rất khó |

### 3.5 Key Design Decisions
- VARCHAR thay vì ENUM → dễ thay đổi sau
- BIGSERIAL cho IDs → scale millions of records
- ON DELETE CASCADE → tránh orphan data
- UNIQUE constraints → 1 user = 1 like/review per target
- Soft delete cho comments (is_deleted flag)
- Indexes trên foreign keys + filter columns

### 3.6 Entity Relationships
```
User ──┬──▶ Inquiry ◀── Lender (via inquiry_responses)
       ├──▶ Comment (polymorphic)
       ├──▶ Reaction (polymorphic)
       ├──▶ Review (polymorphic)
       ├──▶ Event Registration
       ├──▶ Lender (owner, 1-1)
       └──▶ Vendor (owner, 1-1)

Lender ──┬──▶ Lender Products (1-N)
         ├──▶ Lender Programs (1-N)
         └──▶ DPA Programs (1-N)

DPA Program ──┬──▶ Eligible States (N-N via junction)
              ├──▶ Eligible Borrowers (N-N via junction)
              └──▶ Features (1-N)

Trade Show ──▶ Speakers (1-N)
Vendor ──▶ Vendor Services (1-N)
```

---

## 4. Frontend Structure (apps/web/)

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    # → redirect /marketplace
│   ├── login/page.tsx
│   ├── register/page.tsx
│   └── marketplace/
│       ├── layout.tsx              # Header + Tabs
│       ├── page.tsx                # → redirect /lenders
│       ├── lenders/
│       ├── lender-finder/
│       ├── events/
│       ├── dpa-programs/
│       ├── trade-shows/
│       └── vendors/
├── components/
│   ├── ui/                         # Shadcn/ui
│   ├── layout/                     # Header, Tabs, Footer
│   └── shared/                     # FilterBar, CardGrid, LikeButtons, etc.
├── hooks/                          # TanStack Query hooks
├── stores/                         # Zustand stores (per feature)
├── lib/                            # api-client, auth helpers, utils
└── types/                          # OpenAPI generated types
```

---

## 5. Backend Structure (apps/api/)

```
com/marketplace/
├── MarketplaceApplication.java
├── config/                         # Security, CORS, JWT, OpenAPI/Swagger
├── common/                         # ApiResponse, ProblemDetail (RFC 7807), exceptions
├── auth/                           # controller, service, dto, entity, repository
├── lender/
├── inquiry/
├── event/
├── dpa/
├── tradeshow/
└── vendor/
```

Mỗi module theo pattern: controller → service → repository → dto → entity

---

## 6. Docker Setup

```
docker-compose.yml
├── Next.js        :3000
├── Java Spring    :8080
├── PostgreSQL     :5432
├── Redis          :6379 (cache + rate limiting)
├── pgAdmin        :5050 (DB GUI)
└── Cloud Storage  S3/GCS (external)
```

---

## 7. UI/UX Design System

### 7.1 Tailwind CSS + Shadcn/ui
- **Tailwind:** ~10KB production (purge), custom design, no Bootstrap look, dark mode built-in
- **Shadcn/ui:** Copy-paste components, 0KB bundle overhead, Radix a11y, 50K+ GitHub stars
- **8 bổ sung libs:** Framer Motion, date-fns, nuqs, react-hot-toast, cmdk, textarea-autosize, vaul, embla-carousel (~56KB total)

**Tailwind vs Bootstrap:**

| Tiêu chí | Tailwind CSS ✓ | Bootstrap |
|----------|---------------|-----------|
| Triết lý | Utility-first: xây từ gạch nhỏ | Component-first: override |
| Bundle | ~10KB (purge) | ~200KB+ |
| Custom | Mọi thứ qua config | Giới hạn variables |
| Design | Không site nào giống | Bootstrap look dễ nhận |
| Dark mode | Built-in `dark:` prefix | Cần plugin |
| Next.js | Native, zero config | Cần react-bootstrap |

**Ví dụ Lender Card - Tailwind vs Bootstrap:**
```
// Tailwind - Full control:
<div className="bg-white rounded-2xl shadow-lg hover:shadow-xl
  transition-all duration-300 border-l-4 border-orange-500 p-6 group">
  <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">LIVE</span>
→ Card độc đáo, brand accent riêng

// Bootstrap - Override khó:
<div className="card"><div className="card-body">
  <span className="badge bg-success">LIVE</span>
</div></div>
/* Custom CSS override cần: */ .card { border-radius: 1rem; border-left: 4px solid orange; }
→ Override nhiều, CSS specificity wars
```

**Shadcn/ui vs MUI vs Ant Design:**

| Tiêu chí | Shadcn/ui ✓ | MUI | Ant Design |
|----------|-------------|-----|------------|
| Bundle | ~0KB (copy-paste) | ~300KB+ | ~400KB+ |
| Custom | Full control code | Theme only | Theme + CSS |
| SSR | Native support | Cần config | Cần config |
| Components | ~40 cơ bản | ~60+ rich | ~70+ rich |
| Marketplace fit | Cao (custom card) | Trung bình | Thấp |

### 7.2 Color Palette
```
Primary (CTA):     #F97316 (Orange)
Secondary (Info):   #06B6D4 (Cyan)
Success:           #22C55E (Green - LIVE, active)
Error:             #EF4444 (Red - dislike, error)
Neutral:           #6B7280 (Gray)
```

### 7.3 10 Custom Components

| # | Component | Used In | AI Generate % |
|---|-----------|---------|--------------|
| 1 | LikeDislikeButtons | All tabs | 70% + Framer Motion |
| 2 | StarRating | Lenders, Vendors | 90% |
| 3 | CountdownTimer | Events | 60% + date-fns |
| 4 | ExpandableText | Finder, Events | 95% |
| 5 | FilterBar | All tabs | 75% + nuqs + cmdk |
| 6 | StatusBadge | All tabs | 98% |
| 7 | LoadingSkeleton | All tabs | 95% |
| 8 | EmptyState | All tabs | 98% |
| 9 | CommentSection | Finder, Events | 50% + textarea-autosize |
| 10 | OnlineStatusDot | Lenders, Vendors | 98% |

### 7.4 Card Templates per Tab

| Tab | Card Layout | Components |
|-----|------------|------------|
| **Lenders** | 3-col grid, LIVE badge, star rating, like/dislike | Card+Badge+Button+Avatar |
| **Finder** | Feed vertical, avatar + inquiry + comments | Card+Avatar+Separator |
| **Events** | Poster 30% + details 70%, countdown | Card+Badge+Tabs |
| **DPA** | 4-col, logo + program + features | Card+Badge+Select |
| **Trade Shows** | Poster + date + speakers | Card+Badge+Avatar |
| **Vendors** | 4-col, approved + logo + services | Card+Badge+Select |

### 7.5 Responsive Breakpoints
```
Mobile  (< 640px):   1 column, stacked layout
Tablet  (640-1024):  2 columns
Desktop (> 1024):    3 columns (Lenders) / 4 columns (DPA, Vendors)
```

### 7.6 Shadcn/ui Templates tham khảo

| Template | Mô tả |
|----------|-------|
| **next-shadcn-dashboard-starter** | Next.js 16, Shadcn, auth, RBAC, TanStack Tables |
| **Shadcn Admin** | 10+ pages, dark/light, command palette |
| **next-saas-stripe-starter** | SaaS, Auth.js, Prisma, Stripe, RBAC |
| **Relivator eCommerce** | Next.js 15, React 19, full eCommerce |

**Đề xuất tham khảo chính:** next-shadcn-dashboard-starter (cùng tech stack, RBAC, server-side search/filter/pagination)

### 7.7 8 Thư viện bổ sung (~56KB total vs MUI ~300KB+)

| Library | Size | Component | Tại sao? |
|---------|------|-----------|----------|
| Framer Motion | ~33KB | Like, Star, Countdown, cards | Animations CSS không mượt |
| date-fns | ~2KB | CountdownTimer, Events | Tree-shake, differenceInSeconds |
| nuqs | ~3KB | FilterBar | Type-safe URL params Next.js |
| react-hot-toast | ~5KB | Notifications | Tailwind-styled, auto-dismiss |
| cmdk | ~4KB | Cmd+K search | Shadcn Command compatible |
| textarea-autosize | ~2KB | CommentSection | Auto-grow textarea |
| vaul | ~5KB | Mobile drawers | Touch bottom sheet |
---

## 8. AI Tools Stack

| AI Tool | Vai trò | Cài đặt | Phase |
|---------|---------|---------|-------|
| **Claude Code** | Primary coding agent | `npm i -g @anthropic-ai/claude-code` | Phase 1-4 |
| **React Best Practices** | 57 performance rules (Vercel) | `npx add-skill vercel-labs/agent-skills` | Phase 1-4 |
| **UI UX Pro Max** | Design intelligence | `npm i -g uipro-cli && uipro init --ai claude` | Phase 1-3 |

**UI UX Pro Max Database:**
- 50+ UI styles (minimalism, glassmorphism, brutalism, dark mode, bento grid...)
- 97 color palettes (theo industry: fintech, healthcare, e-commerce, marketplace...)
- 57 font pairings (heading + body combinations chuyên nghiệp)
- 99 UX guidelines (accessibility, animation, responsive, forms...)
- 25 chart types (line, bar, area, donut, heatmap...)
- 100 Reasoning Rules (industry-specific design system generation)
- 9 tech stacks: React, Next.js, Vue, Svelte, Tailwind, Shadcn, Flutter, SwiftUI, React Native
- MASTER.md file persist design tokens qua sessions → nhất quán toàn project

**React Best Practices áp dụng theo Phase:**

| Category | Impact | Ph.1 | Ph.2 | Ph.3 | Ph.4 |
|----------|--------|------|------|------|------|
| Async Waterfalls | CRITICAL | ✓ | ✓✓ | ✓✓ | Review |
| Bundle Size | CRITICAL | ✓ | ✓✓ | ✓✓ | Audit |
| Server Perf | HIGH | ✓ | ✓✓ | ✓ | Tune |
| Client Fetch | HIGH | Setup | ✓✓ | ✓✓ | Opt. |
| Re-render | MEDIUM | — | ✓ | ✓✓ | Profile |
| Adv Patterns | LOW | — | — | ✓ | ✓✓ |

**Áp dụng theo Component:**

| Component | Rule | Chi tiết |
|-----------|------|----------|
| BFF Layer | Async Waterfall | Promise.all() cho lenders + filters + counts |
| LikeDislikeButtons | Re-render | Isolate state, memo(), optimistic |
| FilterBar | Bundle Size | Dynamic import, lazy load |
| LenderGrid | Suspense | Suspense boundary + Skeleton |
| CommentSection | Client Fetch | TanStack Query infinite scroll |
| CountdownTimer | Re-render | useRef interval, không setState/s |
| Search | Adv Patterns | Debounce + LRU cache |

---

## 9. Quality Assurance & Testing Strategy ★ NEW

### 9.1 Testing Pyramid
```
Unit Test:        JUnit 5 + Mockito (BE) + Vitest (FE) → Coverage > 70%
Integration Test: Spring Boot Test → API endpoints
E2E Test:         Playwright → Critical user paths
```

### 9.2 Framework Choices

**E2E:** Playwright ✓ (nhanh, song song, multi-tab/domain OAuth) vs Cypress (same-origin hạn chế) vs Selenium (chậm)
**Backend Unit:** JUnit 5 + Mockito ✓ (Spring Boot default) vs TestNG (cần config thêm)

---

## 10. Observability & Monitoring ★ NEW

| Trụ cột | Dev/MVP | Phase 2 | Production |
|---------|---------|---------|------------|
| **Logs** | Console.log + Spring log | + Structured JSON | ELK Stack / Loki |
| **Metrics** | Spring Actuator | + Prometheus | Prometheus + Grafana |
| **Traces** | Request ID header | + Correlation ID | OpenTelemetry |
| **Errors** | Console | + Sentry (FE+BE) | Sentry + PagerDuty |
| **Uptime** | Manual check | Health check endpoints | UptimeRobot + alerts |

---

## 11. Infrastructure Decisions

### 11.1 Cloud Storage (S3 / GCS)
- Upload flow: User → BFF → Spring (presigned URL) → Browser direct upload → S3/GCS
- File types: Lender logos (~200KB), event posters (~2MB), user avatars (~500KB)
- AWS S3: $0.023/GB/tháng, CloudFront CDN | GCS: $0.020/GB/tháng, Cloud CDN

### 11.2 Redis Caching Strategy
- **Phase 1 (MVP):** Next.js ISR (revalidate 5 phút) + React Query cache → không cần Redis
- **Phase 2+:** Redis cho reaction counts (TTL 30s), lender lists (TTL 5 phút), sessions (TTL 24h)
- Docker đã có Redis service → sẵn sàng khi cần

### 11.3 Email Notifications
- **Dev:** Log email ra console
- **Production:** SendGrid/AWS SES + async queue (Redis/SQS)

### 11.4 Search Engine
- PostgreSQL Full-Text Search cho tất cả phases (~250 lenders, ~50 vendors → PG dư sức)

### 11.5 Rate Limiting
- **MVP:** Auth endpoints only (login 5 req/phút/IP)
- **Production:** Bucket4j + Redis cho tất cả endpoints

---

## 12. Implementation Phases

| Phase | Scope | Best Practices | Status |
|-------|-------|---------------|--------|
| **Phase 1** | Docker + Monorepo + Next.js + Spring Boot + Cloud Storage + AI Tools + **Flyway** | Setup config | NOT STARTED |
| **Phase 2** | Lenders tab: card grid, FilterBar, Like, StarRating, mock data, BFF + **OpenAPI** | Waterfall + Bundle | NOT STARTED |
| **Phase 3** | Finder, Events, DPA, Trade Shows, Vendors + CommentSection | SSR + Suspense | NOT STARTED |
| **Phase 4** | Animations, mobile, performance audit, virtual scroll, LRU cache + **E2E tests** | Full audit | NOT STARTED |

---

## 13. Technology Decisions Summary (12 CONFIRMED)

| Quyết định | Đã chọn | Thay thế đã cân nhắc | Trạng thái |
|-----------|---------|---------------------|------------|
| Architecture | **BFF Pattern (Next.js)** | SPA thuần, Fullstack Next | CONFIRMED |
| Frontend | **Next.js 15 + React 19** | Remix, Nuxt.js | CONFIRMED |
| Styling | **Tailwind CSS** | Bootstrap, CSS Modules | CONFIRMED |
| UI Library | **Shadcn/ui + 8 libs** | MUI, Ant Design | CONFIRMED |
| State | **Zustand** | Redux, Jotai, Recoil | CONFIRMED |
| Backend | **Spring Boot 3 (Java)** | Express.js, Django | CONFIRMED |
| Database | **PostgreSQL 16 + Flyway** ★ | MongoDB, MySQL | CONFIRMED |
| API Contract | **OpenAPI/Swagger** ★ | GraphQL, Manual | CONFIRMED |
| File Storage | **Cloud Storage (S3/GCS)** | Docker local | CONFIRMED |
| Testing | **JUnit 5 + Playwright** ★ | Cypress, Selenium | CONFIRMED |
| AI Tools | **Claude Code + 2 Skills** | Cursor, GitHub Copilot | CONFIRMED |
| Infra | **Docker Compose** | Kubernetes (overkill) | CONFIRMED |

---

## 14. Risks & Mitigations (13 risks)

### CAO (4)
| Risk | Mitigation |
|------|-----------|
| Learning Curve (GWT → Next.js+React+TS+Tailwind) | Phase 1 setup only. Pair programming. Vietnamese cheat sheets. |
| AI Tool Dependency (Claude Code down) | Review output. Manual backup. Task nhỏ. Budget API cost. |
| BFF Complexity (debug difficulty) | Structured logging + request ID. Sentry từ Phase 1. |
| 10 Custom Components (time estimate sai) | Start simple (StatusBadge). CommentSection Phase 3. |

### TRUNG BÌNH (5)
| Risk | Mitigation |
|------|-----------|
| Bundle Size Creep | Named imports. Bundle analyzer. Budget < 100KB. |
| PostgreSQL N+1 | Index strategy. JPA LAZY. Batch 50. HikariCP. |
| Design Inconsistency | MASTER.md shared. Storybook. Design review/PR. |
| Cloud Storage Cost | Max 5MB. Compression. CDN caching. Lifecycle policy. |
| Backend Perf Gap | Spring Boot checklist: N+1, pool, cache, index. |

### THẤP (4)
| Risk | Mitigation |
|------|-----------|
| Tailwind Verbosity | cn() utility. ESLint plugin. IntelliSense. |
| Next.js Version Lock | Pin version. Test trước upgrade. |
| Monorepo Complexity | Turborepo/Nx. Docker layer caching. |
| SEO Dependency SSR | ISR revalidate 5min. Client-side cho real-time. |

---

## 15. Open Questions / TODO

- [x] ~~Architecture decision~~ → BFF Pattern (Option C)
- [x] ~~Database choice~~ → PostgreSQL + Flyway
- [x] ~~UI framework~~ → Tailwind + Shadcn/ui + 8 libs
- [x] ~~State management~~ → Zustand + TanStack Query
- [x] ~~UI mockups~~ → 6 tab card templates designed
- [x] ~~Redis caching~~ → Phase 1: ISR. Phase 2+: Redis
- [x] ~~File upload~~ → Cloud Storage (S3/GCS) presigned URL
- [x] ~~Email notifications~~ → Dev: console. Prod: SendGrid/SES
- [x] ~~Search engine~~ → PostgreSQL Full-Text Search
- [x] ~~Rate limiting~~ → MVP: auth only. Prod: Bucket4j + Redis
- [x] ~~Monitoring~~ → Sentry + Actuator + Grafana (phased)
- [x] ~~API contract~~ → OpenAPI/Swagger ★ NEW
- [x] ~~DB migration~~ → Flyway ★ NEW
- [x] ~~Error handling~~ → RFC 7807 ★ NEW
- [x] ~~Testing strategy~~ → JUnit 5 + Playwright ★ NEW
- [x] ~~Observability~~ → 3 pillars phased ★ NEW
- [ ] CI/CD pipeline (GitHub Actions?)
- [ ] Cloud provider final decision (AWS vs GCP)
- [ ] Hosting & deployment plan
- [ ] Domain & SSL setup

---

## 16. Discussion Items (10 items, cần thảo luận trước Phase 1)

| # | Vấn đề | Ưu tiên |
|---|--------|--------|
| 1 | Cloud Provider: S3 hay GCS? | CAO |
| 2 | CI/CD Pipeline: GitHub Actions? Jenkins? | CAO |
| 3 | Testing: Coverage target? E2E cho luồng nào? | CAO |
| 4 | Hosting: Vercel (FE) + AWS/GCP (BE)? Chi phí? | CAO |
| 5 | Email Service: SendGrid hay AWS SES? | TRUNG BÌNH |
| 6 | Monitoring: Sentry + Grafana? Chi phí? | TRUNG BÌNH |
| 7 | Image Optimization: Next.js Image + CDN đủ? | TRUNG BÌNH |
| 8 | Rate Limiting: requests/minute cho like? Comment? | THẤP |
| 9 | Backup: PostgreSQL backup frequency? PITR? | THẤP |
| 10 | Domain & SSL: Cloudflare hay ACM? | THẤP |

---

## 17. API Endpoints Plan

```
Auth:
  POST /auth/login
  POST /auth/register
  POST /auth/refresh
  POST /auth/logout

Lenders:
  GET  /api/lenders?status=&channel=&product=&program=&page=&size=
  GET  /api/lenders/:id

Inquiries:
  GET  /api/inquiries?status=&product=&program=&page=&size=
  POST /api/inquiries
  GET  /api/inquiries/:id
  POST /api/inquiries/:id/responses

Events:
  GET  /api/events?status=&type=&page=&size=
  GET  /api/events/:id
  POST /api/events/:id/register

DPA Programs:
  GET  /api/dpa-programs?lender=&state=&borrower=&page=&size=

Trade Shows:
  GET  /api/trade-shows?state=&page=&size=

Vendors:
  GET  /api/vendors?service=&approved=&page=&size=

Shared:
  POST /api/reactions          { targetType, targetId, reactionType }
  POST /api/comments           { targetType, targetId, content, parentId? }
  POST /api/reviews            { targetType, targetId, rating, comment? }

OpenAPI Docs: GET /swagger-ui.html (auto-generated)
Health Check: GET /actuator/health
```

---

## 18. Report Documents

| Document | Version | Location |
|----------|---------|----------|
| Báo cáo đề xuất dự án (chính) | v7.0 | [Google Doc](https://docs.google.com/document/d/1FEix6qmmQf7bJ4mvGwvvV1oWQSuj-g5s-6lRMy9GsdE/edit) |
| Báo cáo tổng hợp (copy) | v7.0 | [Google Doc](https://docs.google.com/document/d/16up4dW8TWjryQ15TzkRAwuU2HFo1dOP9dnxdDXiQK-0/edit) |
| Báo cáo Word (offline) | v7.0 | `Mortgage_Marketplace_Complete_Report_v7.docx` |
| Progress tracking | v7.1 | `PROGRESS.md` (this file) |
| Marketplace Audit Report | v1.0 | Comprehensive audit of staging (viet18.com) 12 tabs |

---

## 19. Changelog

| Date | Description |
|------|-------------|
| 2026-02-11 | Initial planning complete - all architecture decisions made |
| 2026-02-11 | Database schema designed (21 tables) |
| 2026-02-11 | Progress tracking file created |
| 2026-02-11 | UI Design System: Tailwind + Shadcn confirmed, color palette, 6 tab mockups, 10 custom components |
| 2026-02-11 | Infrastructure decisions: Redis (phased), S3 upload, SendGrid/SES, PG FTS, Bucket4j, Sentry |
| 2026-02-12 | Report v6.0: Complete 23-section report with 7 parts, all comparisons and examples |
| 2026-02-12 | Project scope expanded: 6 tabs → 12 tabs (6 public + 6 logged-in only) |
| 2026-02-19 | ★ Gemini review: 4 suggestions for improvement identified |
| 2026-02-19 | ★ v7.0 additions: OpenAPI/Swagger (API contract), Flyway (DB migration), Testing Strategy (Playwright + JUnit), Error Handling (RFC 7807), Observability (3 pillars phased) |
| 2026-02-20 | ★ Report v7.0: 24 sections, 7 parts, 12 confirmed technology decisions, 13 risks identified |
| 2026-02-20 | ★ Google Doc synced: v7.0 complete with Zustand expanded (Khái niệm, Ưu/Nhược, So sánh 3 chiều) |
| 2026-02-20 | ★ PROGRESS.md updated to v7.0: all new sections integrated |
| 2026-02-20 | ★ Section 1 expanded: Comprehensive Marketplace Audit (12 tabs detail, UI/UX patterns, user roles, business flows, integration points) from staging viet18.com |
| 2026-02-21 | ★ Glassmorphism Design System: 100+ lines CSS, trust elements, testimonials, contact form |
| 2026-02-21 | ★ Vercel Best Practices Refactoring: optimizePackageImports, dynamic Recharts, React.cache(), Server/Client split, Suspense boundaries |

---

## 20. Vercel Best Practices Refactoring (2026-02-21) ★ CRITICAL

### 20.1 Overview
Comprehensive refactoring based on **Vercel React Best Practices** (40+ rules, 8 categories) from `.agents/skills/vercel-react-best-practices/AGENTS.md`

### 20.2 Bundle Size Optimization (CRITICAL)

| Optimization | Before | After | Impact |
|-------------|--------|-------|--------|
| `optimizePackageImports` | ❌ None | ✅ `['lucide-react', 'recharts']` | 15-70% faster dev boot |
| Recharts import | ❌ Direct (~300KB) | ✅ Dynamic import | Lazy loaded on demand |
| Lucide icons | ❌ Barrel import | ✅ Auto-optimized | ~1MB → ~2KB |

**Code Changes:**
```typescript
// next.config.ts
experimental: {
  optimizePackageImports: ["lucide-react", "recharts"]
}
```

### 20.3 Async Waterfall Elimination (CRITICAL)

| Pattern | Status |
|---------|--------|
| `Promise.all()` | ✅ All data fetching parallelized |
| `React.cache()` | ✅ Data layer with per-request deduplication |
| Suspense boundaries | ✅ Layout + all 12 pages |
| Server/Client split | ✅ All 12 pages converted |

**New Files:**
```
src/lib/data.ts                    # React.cache() data layer
src/components/shared/charts.tsx   # Dynamic Recharts imports
```

### 20.4 Server/Client Component Split

| Before | After |
|--------|-------|
| All 12 pages: `"use client"` | Server Components (default) + Client Components |
| Layout: `"use client"` | Server Component with Suspense |
| No Suspense | Suspense boundaries with skeletons |

**Pattern Applied:**
```tsx
// page.tsx (Server Component)
export default async function LendersPage() {
  const [lenders, onlineCount] = await Promise.all([
    getLenders(),
    getOnlineLenderCount(),
  ]);
  return (
    <Suspense fallback={<LenderGridSkeleton />}>
      <LenderGrid lenders={lenders} />
    </Suspense>
  );
}

// _components/lender-grid.tsx (Client Component)
"use client";
export function LenderGrid({ lenders }) { ... }
```

### 20.5 File Structure After Refactoring

```
src/
├── lib/
│   ├── data.ts                    # React.cache() data fetchers
│   └── utils.ts                   # cn() helper
├── components/
│   ├── shared/
│   │   ├── charts.tsx             # Dynamic Recharts imports
│   │   ├── skeletons.tsx          # Loading skeletons
│   │   ├── star-rating.tsx
│   │   └── like-dislike-buttons.tsx
│   ├── ui/                        # Shadcn components
│   └── layout/                    # Layout components
├── app/
│   ├── globals.css                # Glassmorphism + performance CSS
│   ├── marketplace/
│   │   ├── layout.tsx             # Server Component + Suspense
│   │   ├── lenders/
│   │   │   ├── page.tsx           # Server Component
│   │   │   └── _components/       # Client Components
│   │   │       ├── hero.tsx
│   │   │       ├── filter-bar.tsx
│   │   │       ├── lender-card.tsx    # memo()
│   │   │       ├── lender-grid.tsx
│   │   │       ├── testimonials.tsx
│   │   │       └── contact-form.tsx
│   │   ├── finder/
│   │   │   ├── page.tsx
│   │   │   └── _components/
│   │   ├── events/
│   │   │   ├── page.tsx
│   │   │   └── _components/
│   │   ├── dpa/
│   │   │   ├── page.tsx
│   │   │   └── _components/
│   │   ├── trade-shows/page.tsx
│   │   ├── announcement/page.tsx
│   │   ├── vendors/page.tsx
│   │   ├── processors/page.tsx
│   │   ├── shoutouts/page.tsx
│   │   ├── lender-stats/page.tsx
│   │   ├── company-stats/page.tsx
│   │   └── chau-chau-inc/page.tsx
```

### 20.6 Performance CSS Added

```css
/* Virtual scroll for long lists */
.card-list-item {
  content-visibility: auto;
  contain-intrinsic-size: 0 200px;
}

/* Reduced motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 20.7 React.cache() Data Layer

```typescript
// src/lib/data.ts
import { cache } from "react";

export const getLenders = cache(async () => mockLenders);
export const getOnlineLenderCount = cache(async () => {
  const lenders = await getLenders();
  return lenders.filter(l => l.status === "LIVE").length;
});

// Parallel fetching
export async function getDashboardData() {
  const [lenders, events, programs] = await Promise.all([
    getLenders(),
    getEvents(),
    getDPAPrograms(),
  ]);
  return { lenders, events, programs };
}
```

### 20.8 Dynamic Recharts Import

```typescript
// src/components/shared/charts.tsx
"use client";
import dynamic from "next/dynamic";

export const BarChart = dynamic(
  () => import("recharts").then(mod => mod.BarChart),
  { ssr: false, loading: () => <ChartSkeleton /> }
);
```

### 20.9 Expected Performance Improvements

| Metric | Improvement |
|--------|-------------|
| **Dev boot time** | 15-70% faster |
| **Build time** | 28% faster |
| **Cold start** | 40% faster |
| **Initial bundle** | ~300KB smaller |
| **TTI (Time to Interactive)** | Faster with Suspense |
| **Layout shift (CLS)** | Reduced with skeletons |

### 20.10 Rules Applied from Vercel Best Practices

| Category | Rules Applied | Count |
|----------|---------------|-------|
| **1. Eliminating Waterfalls** | 1.4 Promise.all, 1.5 Suspense Boundaries | 2 |
| **2. Bundle Size Optimization** | 2.1 Barrel Imports, 2.4 Dynamic Imports | 2 |
| **3. Server-Side Performance** | 3.5 Parallel Fetching, 3.6 React.cache() | 2 |
| **5. Re-render Optimization** | 5.5 Memoized Components, 5.9 Functional setState | 2 |
| **6. Rendering Performance** | 6.2 content-visibility | 1 |

### 20.11 Build Verification

```
✓ Compiled successfully in 1673.7ms
✓ Generating static pages (16/16) in 208.0ms

Route (app)
├ ○ /marketplace/lenders
├ ○ /marketplace/finder
├ ○ /marketplace/events
├ ○ /marketplace/dpa
├ ○ /marketplace/trade-shows
├ ○ /marketplace/announcement
├ ○ /marketplace/vendors
├ ○ /marketplace/processors
├ ○ /marketplace/shoutouts
├ ○ /marketplace/lender-stats
├ ○ /marketplace/company-stats
└ ○ /marketplace/chau-chau-inc
```
