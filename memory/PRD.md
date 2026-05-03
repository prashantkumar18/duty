# PRD — Dutyee Interactive (Prashant Kumar Portfolio)

## Problem Statement
> http://www.dutyee.com make this interactive

Rebuild Prashant Kumar's professional profile (Digital Transformation Leader, 21+ yrs, APAC) as an immersive, interactive portfolio — preserving the executive tone while dramatically elevating presentation, motion, and engagement.

## User Choices (verbatim)
- Scope: all three (recreate + add sections + full reimagination)
- Interactivity: all three (subtle + rich + immersive)
- Visual theme: designer's pick
- Contact: working form + WhatsApp CTA
- Videos & Articles subpages: yes
- WhatsApp number: **+65 93914327**
- Email: **prashantkumar18@gmail.com**

## Architecture
- **Frontend**: React 19 + React Router 7 + Framer Motion + Tailwind
- **Backend**: FastAPI + Motor (MongoDB)
- **Design**: Cinematic Swiss / High-Contrast Executive — dark (#050505) with amber accent (#F59E0B); Clash Display + Outfit + JetBrains Mono fonts; noise overlay; custom cursor; grid background
- **Routes**: `/`, `/videos`, `/articles`
- **API**: `GET /api/`, `POST|GET /api/contact`, legacy `/api/status`

## User Personas
1. Enterprise prospect / APAC client evaluating Prashant's IT-OT capability
2. Conference organizer / podcast host discovering via LinkedIn
3. Partner / recruiter browsing credentials + thought leadership

## Core Requirements (static)
- Immersive hero with animated typography + marquee
- Animated stat counters (21+, APAC, IT+OT, LIMS)
- 3 pillar cards (Business / Transformation / Influence) with reveal + radial hover glow
- Editorial career timeline (APAC / IT / OT)
- Bento sectors grid (I / E / S / A)
- Credentials pill cloud (floating)
- Contact section: WhatsApp CTA, Email CTA, LinkedIn + form
- Videos and Articles subpages with consistent visual language
- Glass sticky nav, mobile menu, footer
- Fully dark theme, readable, no dark-on-dark issues

## Implemented (Jan 2026)
- ✅ Full dark immersive design system (/app/frontend/src/index.css)
- ✅ Home page with Hero, Stats, Pillars, Timeline, Sectors, Credentials, Contact, Footer
- ✅ Videos page (6 placeholder videos, grid)
- ✅ Articles page (6 placeholder articles, editorial list)
- ✅ Backend `POST/GET /api/contact` with Pydantic validation (EmailStr)
- ✅ Custom cursor dot, grain overlay, scroll-triggered reveals (framer-motion)
- ✅ Radial hover glow on tiles; marquee; floating credential pills
- ✅ Mobile responsive nav with toggle
- ✅ data-testid on all interactive elements
- ✅ Testing agent: 100% backend (9/9) and 100% frontend flows pass

## Backlog / Future (P0/P1/P2)
- **P1**: Real email delivery via SendGrid/Resend (currently DB-only storage)
- **P1**: Populate Videos page with real YouTube embeds
- **P1**: Populate Articles page with real article content + detail routes (`/articles/:slug`)
- **P2**: Lenis momentum scrolling (currently CSS smooth scroll)
- **P2**: Admin dashboard `/admin/messages` to view contact submissions
- **P2**: Contact rate limiting / captcha
- **P2**: WebGL/Three.js hero element (currently image + grid + blobs)
- **P2**: Newsletter subscription
- **P2**: SEO meta tags, OpenGraph, sitemap

## Files of Reference
- `/app/backend/server.py` — contact endpoints
- `/app/frontend/src/App.js` — router
- `/app/frontend/src/pages/{Home,Videos,Articles}.jsx`
- `/app/frontend/src/components/{Navigation,Hero,Stats,Pillars,Timeline,Sectors,Credentials,Contact,Footer,CursorDot}.jsx`
- `/app/design_guidelines.json`
