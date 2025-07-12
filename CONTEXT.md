# Portfolio Ariane - Project Setup Chat History

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
- **Background**: Sticky background image covering full viewport

### Header Section
- Rounded avatar image (Ariane's face - placeholder for now)
- Name: "Ariane Bochi"
- Tagline: 2-3 lines describing who she is, what she does, and for whom

### Main Section
- List of buttons linking to other pages:
  - Her Approach
  - Her Background
  - Talk with me (WhatsApp link)
  - Book a 1-1 consultation

### Footer Section
- 3 testimonials in horizontal scrollable carousel
- Display one testimonial at a time
- Three dots navigation buttons

## Components Created ✅
- **Header.tsx**: Avatar placeholder, name "Ariane Bochi", Portuguese tagline
- **MainSection.tsx**: 4 buttons (Approach, Background, WhatsApp, Calendly)
- **Testimonials.tsx**: Interactive carousel with 3 testimonials and dot navigation
- **Main Page**: Linktree-inspired layout with sticky background

## Integration Details
- **WhatsApp**: Pre-filled message in Portuguese, opens in new tab
- **Calendly**: Placeholder URL for booking system
- **Testimonials**: Sample testimonials in Portuguese with 5-star ratings
- **Background**: Subtle gradient with dot pattern overlay

## Next Steps
1. ✅ Git repository setup and hosting
2. ✅ shadcn/ui components added (button, card, badge)
3. ✅ Design specifications defined
4. ✅ Portfolio sections created (Header, Main, Footer)
5. Update WhatsApp number and Calendly URL with real data
6. Add Ariane's actual photo to replace placeholder
7. Create Approach and Background pages
8. Optimize for Instagram traffic and Brazilian audience
9. Deploy to Vercel

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