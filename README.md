# Clear Creek Chiropractic

Native Next.js App Router modernization of the Clear Creek Chiropractic homepage. The implementation keeps the original visual language and imagery while adding responsive behavior, accessible controls, and Framer Motion interactions.

## Stack

- Next.js 16 App Router with React 19
- TypeScript with strict checking
- Framer Motion for interaction and transitions
- Lucide React for interface icons
- Vercel-ready static page output

## Project structure

```text
src/
├── app/
│   ├── globals.css       # Global design system and responsive layout
│   ├── icon.png          # Favicon
│   ├── layout.tsx        # Metadata and global providers
│   └── page.tsx          # Route entry point
├── components/
│   ├── layout/           # Header, utility bar, and footer
│   ├── sections/         # Page sections grouped by responsibility
│   ├── ui/               # Motion presets and reusable links
│   ├── motion.tsx        # Global reduced-motion provider
│   └── site-page.tsx     # Shallow page composition
└── lib/
    └── site-content.ts   # Typed copy, links, locations, and media data
```

## Scripts

These commands are defined in `package.json`:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create the optimized production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run Next.js ESLint checks |
| `npm run typecheck` | Run TypeScript without emitting files |

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

The appointment form is intentionally presentation-only until the clinic's preferred booking or CRM endpoint is connected.

## Architecture

The route stays intentionally thin. It mounts the shared motion provider and delegates the page composition to the organized component tree.

```mermaid
flowchart TD
    Route[src/app/page.tsx] --> SitePage[src/components/site-page.tsx]
    SitePage --> Layout[layout/]
    SitePage --> Sections[sections/]
    SitePage --> UI[ui/]
    SitePage --> Content[src/lib/site-content.ts]

    Layout --> Header[SiteHeader]
    Layout --> Footer[SiteFooter]
    Layout --> Utility[TopLine]

    Sections --> Primary[Hero / Intro / Treatments]
    Sections --> Experience[Story / Steps / Reviews / Team]
    Sections --> Conversion[Locations / Appointment / CTAs]

    UI --> MotionPresets[Shared motion presets]
    UI --> ArrowLink[Animated secondary links]
    MotionPresets --> Sections
    Content --> Sections
```

## Page composition

The homepage follows the original site's narrative order: introduce the practice, explain care, build trust, show the team, then convert the visitor.

```mermaid
flowchart LR
    A[Utility bar] --> B[Header]
    B --> C[Hero: More movement]
    C --> D[Care philosophy]
    D --> E[Treatment cards]
    E --> F[Practice story]
    F --> G[Three-step visit guide]
    G --> H[Patient reviews]
    H --> I[Team cards]
    I --> J[Locations]
    J --> K[Appointment request]
    K --> L[Attorney referral]
    L --> M[Final CTA]
    M --> N[Footer]
```

## Interaction model

All primary controls and cards use Framer Motion. The global provider respects reduced-motion preferences while preserving keyboard and native browser behavior.

```mermaid
flowchart TD
    Visitor[Visitor interaction] --> CTA{Interaction type}
    CTA -->|Primary CTA| Scale[Scale on hover / tap]
    CTA -->|Treatment or team card| Lift[Lift and image zoom]
    CTA -->|Secondary link| Nudge[Directional arrow nudge]
    CTA -->|Testimonial control| Carousel[Update local review state]
    CTA -->|Mobile menu| Toggle[Open or close navigation]
    Scale --> Destination[Appointment section]
    Lift --> Destination
    Nudge --> Destination
    Carousel --> Reviews[Review content]
    Toggle --> Navigation[Responsive navigation]

    Preferences[Reduced-motion preference] --> MotionConfig[MotionConfig]
    MotionConfig --> Scale
    MotionConfig --> Lift
    MotionConfig --> Nudge
    MotionConfig --> Carousel
    MotionConfig --> Toggle
```

## Content and asset map

Typed content models keep copy and media references separate from presentation components.

```mermaid
erDiagram
    SITE_PAGE ||--|| NAVIGATION : renders
    SITE_PAGE ||--o{ TREATMENT : presents
    SITE_PAGE ||--o{ REVIEW : rotates
    SITE_PAGE ||--o{ LOCATION : lists
    SITE_PAGE ||--o{ TEAM_MEMBER : introduces
    TREATMENT }o--|| IMAGE_ASSET : uses
    TEAM_MEMBER }o--|| IMAGE_ASSET : uses

    NAVIGATION {
        string label
        string href
        boolean external
    }
    TREATMENT {
        string number
        string title
        string description
        string image
    }
    REVIEW {
        string quote
        string author
    }
    LOCATION {
        string name
        string address
        string city
        string mapsQuery
    }
    TEAM_MEMBER {
        string name
        string role
        string image
    }
    IMAGE_ASSET {
        string path
        string altText
    }
```

## Deployment flow

```mermaid
gitGraph
    commit id: "Native Next.js foundation"
    commit id: "Add original local imagery"
    commit id: "Add responsive fidelity treatment"
    commit id: "Add Framer Motion interactions"
    commit id: "Split typed components and document architecture"
```
