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

## Next Steps
1. Add shadcn/ui components as needed
2. Create portfolio sections (Hero, About, Services, CTA)
3. Implement WhatsApp and Calendly integrations
4. Optimize for Instagram traffic and Brazilian audience
5. Deploy to Vercel

## Local Development
```bash
npm run dev
# Website will be available at http://localhost:3000
``` 