# Implementation Plan - Masjid360 AI

Modern, mobile-first SPA for mosque and Islamic center management.

## Scope Summary
- **App Name:** Masjid360 AI
- **Framework:** React (Vite-based)
- **Styling:** Tailwind CSS with custom theme variables (#008080 Emerald, #FFFFFF White, #FFD700 Gold).
- **Key Modules:** Member Management, Donation Tracking, Event Management, Education, Volunteer Coordination, Community Activities.
- **Core UI:** Landing page (Hero + Features) and a Responsive Administrative Dashboard.
- **Data:** Client-side only (mock data/localStorage). No Supabase/backend.

## Assumptions & Open Questions
- **Navigation:** SPA routing will be handled via `react-router-dom` (standard for this template).
- **Icons:** Using `lucide-react` for a modern look.
- **Data Persistence:** Using `localStorage` for any "save" actions in this session to simulate functionality without a DB.

## Affected Areas
- **Styling:** `src/index.css` to define Emerald Green and Gold theme.
- **Layouts:** New `DashboardLayout` and `MainLayout`.
- **Pages:** Home, Dashboard, and specific module views (Members, Donations, etc.).
- **Components:** Navigation, Hero, Feature Cards, Data Tables for management.

## Phases

### Phase 1: Theme & Foundations
- Define CSS variables in `src/index.css` for #008080, #FFFFFF, and #FFD700.
- Set up `react-router-dom` and basic route structure.
- **Deliverable:** Working theme and routing skeleton.

### Phase 2: Public Landing Page
- Build a responsive Hero section communicating the value proposition.
- Build a Features Overview section detailing the modular management system.
- **Deliverable:** Functional and aesthetically pleasing homepage.

### Phase 3: Administrative Dashboard Shell
- Create a mobile-first Sidebar/Navigation for the dashboard.
- Implement the dashboard layout using CSS Grid/Flexbox.
- **Deliverable:** Navigable dashboard container.

### Phase 4: Management Modules (UI Only)
- Implement UI views for: Member Administration, Donation Tracking, Event Management, Education.
- Use Shadcn components (already present in `src/components/ui`) for tables, cards, and forms.
- **Deliverable:** Functional UI for all core management modules with mock data.

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Setup theme and build the full SPA structure (landing + dashboard).

**Per-agent instructions:**
### 1. frontend_engineer
- **Phases:** 1, 2, 3, 4
- **Scope:** 
    - Initialize routing (`react-router-dom`).
    - Update `src/index.css` with colors: `--primary: #008080` (Emerald), `--accent: #FFD700` (Gold), `--background: #FFFFFF`.
    - Create `MainLayout.tsx` for the landing page.
    - Create `DashboardLayout.tsx` with a mobile-responsive sidebar using `src/components/ui/sidebar.tsx` or simple Flexbox.
    - Build `Home.tsx` with Hero and Feature sections.
    - Build `Dashboard.tsx` with stats overview.
    - Build modular views for Members, Donations, Events, and Education (tables/cards).
- **Files:** `src/index.css`, `src/App.tsx`, `src/components/*`, `src/pages/*`
- **Depends on:** none
- **Acceptance criteria:** 
    - App is mobile-responsive.
    - Theme colors are correctly applied.
    - Dashboard sidebar works on mobile (drawer/overlay).
    - Landing page clearly states "Masjid360 AI" and its features.
