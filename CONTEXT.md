# Portfolio Ariane - Project Context & Documentation

## Purpose of This Document

This document serves as the central reference for the Portfolio Ariane project. It captures the project's context, architecture decisions, design principles, and development progress. The goal is to provide clear understanding of the project's purpose, target audience, and technical approach for anyone working on it.

**Maintenance Instructions**: This document should be updated live as the project progresses. When significant changes are made to the project (new features, design updates, architecture changes), the relevant sections should be updated to reflect the current state and reasoning behind decisions.

---

## Project Requirements
- Simple portfolio for a psychologist
- 1 responsive page
- Traffic mainly from Instagram
- Target: Brazilian women
- Goal: Present services and sell 1-to-1 consultations
- Main CTA: WhatsApp conversation
- Secondary CTA: Calendly booking
- No contact form needed
- Based in Portugal, targeting Brazilians

## Tech Stack Decisions
- **Framework**: Next.js 14 with App Router
- **UI Library**: shadcn/ui
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Additional**: Framer Motion (recommended for animations)

## Setup Commands Executed
```bash
# Create Next.js project
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --yes

# Initialize shadcn/ui
npx shadcn@latest init
# Selected: Neutral color scheme
```

## Project Structure
```
src/
├── app/
│   ├── page.tsx (main portfolio page)
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/ (shadcn components)
│   ├── sections/ (Hero, About, Services, etc.)
│   └── layout/ (Header, Footer)
├── lib/
│   └── utils.ts
└── public/
    └── images/
```

## Git Setup ✅
- Repository: https://github.com/mathieugrac/portfolio-ariane.git
- Branch: main (default)
- Remote: origin configured
- README.md: Professional documentation added
- Workflow: Ready for development and deployment

## Design Specifications ✅
- **Inspiration**: Linktree template style
- **Approach**: Mobile-first design
- **Layout**: Single centered column, max-width 600px
- **Background**: Shadow-7 image as sticky background covering full viewport
- **Color Scheme**: Sober black-and-white theme (professional, trustworthy)

### Header Section
- Rounded avatar image (Ariane's face - placeholder for now)
- Name: "Ariane Bochi"
- Job Title: "Psicóloga brasileira em Portugal."
- Description: Specialization and services information
- Visual grouping: Name and job title are grouped together, description separated below

### Main Section
- List of action buttons with consistent spacing
- WhatsApp button with WhatsApp icon for direct messaging
- Calendar button with calendar icon for booking appointments
- Button hierarchy: Outline style for info buttons, gradient style for primary CTA
- Proper spacing from header section

### Footer Section
- 3 testimonials in interactive horizontal carousel
- Centered layout with avatar above client name
- Clean design without ratings or title
- **Mobile**: Touch-draggable horizontal scrolling with snap-to-card
- **Desktop**: Auto-scroll every 4s, pause on hover, grab cursor
- **Navigation**: Dot indicators with circular navigation
- **Features**: Infinite loop carousel, text selection disabled, smooth transitions

## Components Created ✅
- **Header.tsx**: Avatar placeholder, name "Ariane Bochi", Portuguese tagline
- **MainSection.tsx**: 4 buttons (Approach, Background, WhatsApp, Calendly) - Client Component
- **Testimonials.tsx**: Interactive carousel with 3 testimonials and dot navigation - Client Component
- **Main Page**: Linktree-inspired layout with sticky background

## Technical Notes
- **Client Components**: MainSection and Testimonials use "use client" directive for interactivity
- **Server Components**: Header and main page remain server-side for better performance
- **Testimonials Carousel**: Advanced touch/mouse interaction with circular navigation
- **Responsive Behavior**: Different interaction patterns for mobile (touch) vs desktop (auto-scroll + hover)

## Integration Details
- **WhatsApp**: Pre-filled message in Portuguese, opens in new tab
- **Calendly**: Placeholder URL for booking system
- **Testimonials**: Sample testimonials in Portuguese (no ratings)
- **Background**: Shadow-7 image as fixed background
- **Images**: Organized in `public/images/` directory

## Layout & Spacing Specifications ✅
- **Page padding**: Generous top and bottom spacing for better visual breathing room
- **Section spacing**: Consistent spacing between major sections
- **Header to buttons**: Moderate spacing to group related content
- **Button spacing**: Tight spacing for action button grouping
- **Testimonial navigation**: Arrows positioned outside cards for cleaner design

## Next Steps
1. ✅ Git repository setup and hosting
2. ✅ shadcn/ui components added (button, card, badge)
3. ✅ Design specifications defined
4. ✅ Portfolio sections created (Header, Main, Footer)
5. ✅ Images directory structure created
6. ✅ Shadow-7 background image added
7. ✅ Theme updated to sober black-and-white design
8. ✅ Ariane's photo added to header with zoom effect
9. ✅ Advanced testimonials carousel with circular navigation
10. ✅ Update WhatsApp number and Calendly URL with real data
11. Create Approach and Background pages
12. Optimize for Instagram traffic and Brazilian audience
13. Deploy to Vercel

## Local Development
```bash
npm run dev
# Website will be available at http://localhost:3000
```

## Git Workflow
```bash
# Make changes, then:
git add .
git commit -m "Description of changes"
git push
```

## Deployment Notes

- **Platform**: Vercel
- **Production URL**: https://portfolio-ariane-mathieugracs-projects.vercel.app
- **How to Deploy**: After ensuring a successful local build (`npm run build`), run `npx vercel --prod` to deploy.
- **Vercel Project**: Linked to mathieugrac’s Vercel account.

## Recent Technical Fixes

- Fixed ESLint errors in `src/components/sections/Testimonials.tsx` to allow successful build and deployment.
- Always commit lint/build fixes before deploying to Vercel. 