# PRD — Dutyee Interactive (Prashant Kumar Portfolio)

## Problem Statement
> http://www.dutyee.com make this interactive

Reimagined as an immersive, editorial-grade interactive portfolio for Prashant Kumar — APAC Business Development Leader bridging OT and IT for industrial enterprises.

## Source Materials
- Live site: dutyee.com
- LinkedIn About paragraph (provided by user)
- Resume DOCX (full work history, skills, education, certifications)
- Portrait: red-background suit photo
- WhatsApp: +65 93914327 (deep-link only — **never displayed as text**)
- Email: prashantkumar18@gmail.com
- LinkedIn: /in/prashant-kumar-digital

## Architecture
- **Frontend**: React 19 + React Router 7 + Framer Motion + Tailwind
- **Backend**: FastAPI + Motor (MongoDB)
- **Design**: Cinematic Swiss / High-Contrast Executive — dark (#050505) with amber accent (#F59E0B); Clash Display + Outfit + JetBrains Mono fonts
- **Routes**: `/`, `/videos`, `/articles`
- **API**: `GET /api/`, `POST/GET /api/contact`

## Page Structure (Home)
1. Hero — large title, red-bg portrait card, marquee, scroll progress
2. About — portrait + LinkedIn About copy + WhatsApp/Email/LinkedIn CTAs
3. Stats — 4 animated counters (21+, APAC, IT+OT, LIMS)
4. What I Do — 4 pillars (IT/OT, Solution Selling, AI Platforms, BD) + intro + content metrics strip (no $/%)
5. Achievements — 6 cards (Top 40 LinkedIn Influencer, Industry 4.0 Thought Leader, etc.)
6. Career Chronicle — 9 real roles 2004→2026 (Yokogawa → Web Synergies → … → ICFAI)
7. Sectors — bento I/E/S/A
8. Skills — 4 groups (Industry 4.0/OT, Enterprise IT, Banking/FSI, Commercial/GTM) + operating style
9. Education — 4 degrees + 4 certifications
10. Contact — form + WhatsApp CTA (no number text) + Email + LinkedIn

## Interactive Layer
- Scroll progress bar (top, amber)
- Custom cursor dot (expands on interactives)
- Grain/noise overlay
- Framer-motion scroll-triggered reveals throughout
- Radial-glow tile hover effect
- Animated counters (intersection observer)
- Floating credential pills
- Marquee keyword strip
- Sticky glass nav with mobile menu

## User Personas
1. APAC enterprise client evaluating Industry 4.0 / IT-OT capability
2. Recruiter / partner exploring credentials + thought leadership
3. Conference / podcast organizer discovering via LinkedIn

## Implemented (Jan 2026)
### Iteration 1
- Initial dark immersive design system, Hero + Stats + Pillars + Timeline + Sectors + Credentials + Contact
- Backend `POST/GET /api/contact`
- Videos & Articles placeholder pages
- 100% test pass

### Iteration 2 (current)
- ✅ Red-background portrait integrated into Hero (right column) and About section
- ✅ New About section with LinkedIn copy + bottom-strip company tags (Yokogawa · Web Synergies · Singapore)
- ✅ 4-pillar What-I-Do (IT/OT, Solution Selling, AI Platforms, Business Development) — pulled directly from LinkedIn About bullets
- ✅ New Achievements section (6 cards, no $/% numbers)
- ✅ Real career timeline (9 roles, 2004→2026) replacing earlier 3-step editorial timeline
- ✅ Skills section restructured into 4 groups + operating-style strip — pulled from resume
- ✅ Education + Certifications block (Columbia/MIT, MBA, CSM, CISI, etc.)
- ✅ Phone number text removed everywhere; WhatsApp CTA still functional via wa.me deep-link
- ✅ Videos page restyled around Industry 4.0 use-cases (MES, Digital Twin, AI/OCR, IT-OT, EMS, GTM, etc.) with cards linking to LinkedIn
- ✅ ScrollProgress component
- ✅ 100% backend (9/9) + 100% frontend tests pass

## Backlog / Future
- **P1**: Embed actual LinkedIn videos once specific URLs are shared (currently outbound links)
- **P1**: Real article content with `/articles/:slug` detail routes
- **P1**: Real email delivery (SendGrid/Resend) — currently DB-only
- **P2**: Admin view for contact submissions
- **P2**: WebGL/Three.js hero element
- **P2**: Lenis momentum scrolling
- **P2**: Newsletter opt-in
- **P2**: SEO meta + OpenGraph + sitemap

## Files of Reference
- `/app/backend/server.py`
- `/app/frontend/src/App.js`
- `/app/frontend/src/pages/{Home,Videos,Articles}.jsx`
- `/app/frontend/src/components/{Navigation,Hero,About,Stats,Pillars,Achievements,Timeline,Sectors,Credentials,Education,Contact,Footer,CursorDot,ScrollProgress}.jsx`
- `/app/design_guidelines.json`
