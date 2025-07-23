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
│   ├── abordagem/
│   │   └── page.tsx (approach page with back navigation)
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/ (shadcn components)
│   ├── sections/ (Header, MainSection, Testimonials)
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

## Tone of Voice & Content Style ✅
Based on the Abordagem page content analysis, the communication style follows these principles:

### **Warm & Personal Approach**
- Uses direct address ("você", "você mesma") creating intimacy
- Emphasizes personal connection and individual journey
- Balances professionalism with warmth and accessibility

### **Empowering & Non-Judgmental Language**
- Focuses on "questionar padrões tradicionais" (questioning traditional patterns)
- Emphasizes "liberdade e autenticidade" (freedom and authenticity)
- Uses inclusive language that validates different life choices
- Avoids prescriptive or judgmental terminology

### **Specific Target Audience Language**
- Addresses specific life situations: motherhood decisions, relationship revaluation, expatriation
- Uses culturally relevant terms for Brazilian women living abroad
- Acknowledges the challenges of "recomeçar em um novo lugar" (starting over in a new place)

### **Professional Credibility**
- Clear academic credentials (CRP 07/24244, UFCSPA, Universidade de Lisboa)
- Specific specializations (Terapias Cognitivas, Família e Género)
- Professional experience in HR and multidisciplinary teams
- Transparent about methodology and session structure

### **Accessible & Clear Communication**
- Simple, direct sentences without jargon
- Clear pricing and session structure (30min free, 50min paid sessions)
- Practical information about technology (Google Meet, WhatsApp)
- Payment options clearly stated (Pix, PayPal)

### **Encouraging & Invitational**
- Ends with "Vamos juntas?" (Shall we go together?) - collaborative invitation
- Emphasizes partnership in therapeutic process
- Uses "juntas" (together) to emphasize collaboration
- Creates sense of beginning a journey rather than fixing problems

### Header Section
- Rounded avatar image (Ariane's face with zoom effect)
- Name: "Ariane Bochi"
- Job Title: "Psicóloga online"
- Description: "Dedicada às mulheres que questionam os padrões tradicionais. Apoio você a viver suas escolhas com liberdade e autenticidade."
- Approach Button: Small button with right arrow linking to "/abordagem"
- Visual grouping: Name and job title are grouped together

### Main Section
- A description of what she does and for whom
- List of action buttons with consistent spacing
- WhatsApp button with WhatsApp icon for direct messaging
- Calendar button with calendar icon for booking appointments (30min initial conversation)
- Button hierarchy: Outline style for info buttons, gradient style for primary CTA
- Social media icons: Instagram and LinkedIn (centered, gray, hover effects)
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
- **Header.tsx**: Avatar with zoom effect, name "Ariane Bochi", refined description, approach button - Server Component
- **MainSection.tsx**: WhatsApp and Calendly buttons, social media icons - Client Component
- **Testimonials.tsx**: Interactive carousel with 3 testimonials and dot navigation - Client Component
- **Main Page**: Linktree-inspired layout with sticky background
- **Abordagem Page**: New page with back navigation, therapeutic approach content, same layout structure

## Technical Notes
- **Client Components**: MainSection and Testimonials use "use client" directive for interactivity
- **Server Components**: Header and main page remain server-side for better performance
- **Testimonials Carousel**: Advanced touch/mouse interaction with circular navigation
- **Responsive Behavior**: Different interaction patterns for mobile (touch) vs desktop (auto-scroll + hover)

## Integration Details
- **WhatsApp**: Pre-filled message in Portuguese, opens in new tab
- **Calendly**: Placeholder URL for booking system (30min initial conversation)
- **Social Media**: Instagram and LinkedIn icons with external links
- **Testimonials**: Sample testimonials in Portuguese (no ratings)
- **Background**: Shadow-7 image as fixed background
- **Images**: Organized in `public/images/` directory
- **Navigation**: Approach page accessible via "/abordagem" with back button

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
11. ✅ Create Approach page with header, main content, and footer sections
12. ✅ Update header description with refined catchphrase
13. ✅ Add social media icons (Instagram, LinkedIn) to main section
14. ✅ Convert approach link to small button with right arrow
15. Optimize for Instagram traffic and Brazilian audience
16. Deploy to Vercel

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