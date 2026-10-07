# Portfolio Website: Complete Plan

**Owner:** Muhammad Awais, full-stack AI engineer (CS, NUML 2026) **Purpose:** one site that works for job and internship search, professor outreach (CSC, ANSO, Italy), and MS applications (AI track, cybersecurity). **Constraint:** everything free, from development to deployment. Development happens later, so this document is the blueprint.

---

## 1. Strategy

### 1.1 Three audiences, one site

| Audience | Question they're asking | What convinces them |
| --- | --- | --- |
| Recruiters and hiring managers | Can this person ship, and does the stack match? | Deployed projects, clear stack, internship and freelance evidence |
| Professors and supervisors | Does this student have research potential and fit my lab? | FYP method and results, research interests, depth, clear writing |
| Admissions and scholarship committees | Is the trajectory coherent and the goal clear? | Story, roadmap, achievements, consistent focus |

### 1.2 Positioning statement (one thread that ties everything together)

> Full-stack AI engineer who builds computer vision, LLM and agentic systems end to end, from data collection to deployed product, and wants to deepen this through research in AI and secure AI systems.

Why this matters: AI, full stack and cybersecurity can look scattered. The thread is **"AI systems that are built to work in the real world, and built securely."** Your CV already supports it (self-collected vision dataset, RBAC and secure APIs, deployed products).

### 1.3 Core ideas

1. **Audience lens:** a switcher on the home page (Recruiter, Professor, Admissions) reorders sections. Shareable links such as `/for/recruiters`, `/for/professors`, `/for/admissions` go into the matching emails and applications.
2. **Evidence over claims:** every skill links to a project, and every project is a case study, not just a card with a GitHub link.
3. **Per-professor "research fit" pages:** unlisted pages (noindex) such as `/fit/<professor-slug>` that connect your work to that professor's published research. Send these in outreach emails. This is the strongest feature for scholarship applications.
4. **The site is itself a project:** a retrieval-based "Ask my portfolio" assistant, live demos, and clean engineering show your AI and full-stack skills directly.

---

## 2. Sitemap and modules

### 2.1 Pages

| Route | Purpose | Key content | Main audience |
| --- | --- | --- | --- |
| `/` | First impression | Hero with interactive traffic-detection demo, positioning line, audience switcher, availability status, featured projects, highlights, call to action | All |
| `/projects` | Project index | Filter by AI/ML, Full-stack, Security, Computer vision, LLM/Agents; sort by featured | Recruiters |
| `/projects/[slug]` | Case study | Problem, role, architecture diagram, stack, method, results, demo, repo, lessons | All |
| `/research` | Academic profile | Research interests, FYP write-up, research statement summary, publications (when available), target topics, open questions | Professors |
| `/roadmap` | Goals and plans | MS AI, MS cybersecurity, CSC, ANSO, Italy; timeline; what you bring to each | Admissions, professors |
| `/experience` | Timeline | NIC internship, freelance work, education, coursework | All |
| `/skills` | Skills map | Grouped skills, each linked to projects that prove it | Recruiters |
| `/achievements` | Credibility | Certifications, awards, competitions, hackathons | All |
| `/writing` (optional) | Thinking in public | Short technical posts and project retrospectives | Professors, recruiters |
| `/resume` | Documents | Industry CV and Academic CV (PDF, LaTeX source), preview and download | All |
| `/contact` | Conversion | Contact form, email, LinkedIn, GitHub, availability | All |
| `/for/[audience]` | Tailored entry | Home page preset to one audience | Targeted outreach |
| `/fit/[slug]` | Per-professor page | Why you fit this lab; relevant projects; link to your CV (noindex) | Specific professors |
| `/404`, `/sitemap.xml`, `/robots.txt` | Housekeeping | Friendly 404, SEO files | All |

### 2.2 Reusable modules (components)

- **Layout:** header with section nav, theme toggle, command palette trigger, footer with contact links
- **Hero module:** headline, subline, status badge, CTA buttons, interactive demo slot
- **Audience switcher:** reads and writes `?for=` and the route, reorders sections
- **Project card and project row:** title, one-line outcome, tags, links
- **Case study template:** structured sections (see 4.2)
- **Timeline:** used for experience, education and the roadmap
- **Skill map:** grouped chips or graph; hover shows linked projects
- **Stat or proof strip:** metrics (only real numbers: FPS, mAP, users, load-time gains)
- **Certification list** with issuer and optional credential link
- **Contact form** with validation and spam protection
- **Assistant widget:** chat drawer for "Ask my portfolio"
- **SEO component:** metadata, Open Graph, JSON-LD

---

## 3. Features

### 3.1 Must have

- Audience switcher and shareable `/for/` links
- Interactive hero demo (traffic density slider with simulated YOLO detections)
- Project case studies in MDX
- Two CV versions, downloadable
- Responsive, mobile-first layout, light and dark themes
- Contact form and direct email
- Semantic HTML, accessibility basics, SEO metadata, Open Graph images
- Analytics (privacy-friendly)

### 3.2 Should have

- Command palette (Ctrl/Cmd+K) for navigation and search
- Static full-text search
- Per-professor fit pages
- "Ask my portfolio" assistant
- Skill-to-project linking
- Auto-generated social preview images per page

### 3.3 Nice to have

- Embedded live demos (small hosted model demos or recorded video walkthroughs)
- Writing section with RSS
- Roadmap progress tracker (status flags: planned, in progress, done)
- Print-friendly CV page

### 3.4 Semantic and meaningful UI

- **Semantic HTML:** `header`, `nav`, `main`, `section`, `article`, `time`, heading hierarchy, ARIA only where needed
- **Meaning in the design:** status badges ("Open to roles", "Applying 2027"), colour-coded tracks on the roadmap, evidence links on skills, timeline for sequence, tags for domain
- **Structured data:** JSON-LD `Person`, `CreativeWork` for projects, so search engines and tools understand the site

---

## 4. Content plan: what to add

### 4.1 Already available from your CV

- Experience: NIC Islamabad (stayOvers.pk, RBAC, OOP backend, Postman, Agile), Fiverr freelance (React, Next.js, Python, payments and auth, Vercel and Netlify)
- Education: BS Computer Science, NUML, CGPA 3.34
- Projects: Traffic choking detection (FYP), AI Smart Health Platform, ArticleSift, Multi-agent research system
- Skills and 14 certifications

### 4.2 Case study template (for each project)

1. One-line summary and outcome
2. Problem and context
3. Your role and what you personally built
4. Architecture diagram
5. Method (data, model, training, evaluation) with **real metrics**
6. Stack
7. Results and demo (video, GIF, or live link)
8. Challenges and what you'd improve
9. Links: repository, demo, write-up

### 4.3 Content gaps to fill (highest impact first)

| Item | Why it matters |
| --- | --- |
| Real metrics for the FYP (dataset size, classes, mAP, precision/recall, FPS before and after tuning) | Professors and recruiters trust numbers; this is your strongest project |
| Demo videos or GIFs (30 to 60 seconds) for each project | People rarely read; they watch |
| Individual GitHub repo links with clean READMEs | Evidence |
| Live link for stayOvers.pk (if public) and any deployed apps | Proves production work |
| Research statement (one page) and 150-word summary for the site | Core of academic applications |
| Target professor list with their key papers | Needed for `/fit/` pages |
| Recommendation letter status (do not publish letters; only mention referees if they agree) | Credibility without privacy risk |
| Academic CV (education first, research, projects, skills) | Different layout from the industry CV |
| Professional photo | Humanises the site |
| Transcript highlights (relevant courses and grades) | Admissions |
| Publications, preprints or a technical write-up of the FYP | Even an arXiv-style report adds weight |

### 4.4 Roadmap page content

Write it as a coherent story, not a list of applications:

- **Where I am:** CS graduate with deployed AI and full-stack work
- **What I'm pursuing:** MS in AI (computer vision, agentic systems) and/or cybersecurity (secure AI systems)
- **Routes:** CSC, ANSO, Italy, plus other MS options
- **Status per track:** planned, contacting professors, applied, accepted
- **What I bring:** projects, research interests, engineering skills

Do not claim acceptances until they are confirmed. When a professor's acceptance letter arrives, add a short public line (with their permission) and keep the letter itself private.

### 4.5 Privacy rules

- Do not publish phone number, home address, ID or passport details
- Use a contact form plus a professional email
- Strip metadata from the CV PDFs
- Ask permission before naming professors or supervisors publicly

---

## 5. Design system

- **Style:** clean, editorial, professional. Generous whitespace, strong typography, restrained colour
- **Typography:** one expressive heading face and one readable body face (self-hosted via Fontsource, with system-font fallbacks)
- **Colour:** a calm neutral base, one accent for actions, and semantic colours (green and red are used in the traffic demo, so keep them meaningful elsewhere)
- **Themes:** light and dark, with design tokens as CSS variables
- **Layout:** varied, not a wall of identical cards. Project rows, timelines and definition lists
- **Motion:** purposeful only (the hero demo, state changes, hover feedback). Respect `prefers-reduced-motion`
- **Quality floor:** keyboard focus visible, contrast 4.5:1 or better, mobile first, line length under 80 characters
- **Design source:** the published HTML prototype already defines the look and feel; use it as the reference for the Next.js build

---

## 6. Tech stack (all free)

| Layer | Choice | Why |
| --- | --- | --- |
| Framework | **Next.js (App Router) + TypeScript** | SEO, routing, API routes, strong full-stack signal |
| Styling | **Tailwind CSS + shadcn/ui** | Fast, consistent, accessible components |
| Animation | **Framer Motion** (sparingly) | Purposeful transitions |
| Content | **MDX files in the repo**, validated with **Zod** (via Velite or a small custom loader) | No CMS, versioned in Git, type-safe frontmatter |
| Icons and fonts | Lucide, Fontsource | Free, self-hosted |
| Search | **Pagefind** | Static, no server |
| Diagrams | **Mermaid** or hand-drawn SVG | Architecture diagrams in case studies |
| Contact | **Resend** (free tier) or **Formspree** | Email delivery without running a server |
| Assistant (LLM) | **Vercel AI SDK** with a free-tier model API (Groq, Gemini or Cloudflare Workers AI) | Streaming chat with little setup |
| Retrieval | Embeddings generated at build time, stored as a static JSON file, cosine similarity inside the API route | No vector database to pay for |
| Rate limiting | **Upstash Redis** free tier, or an IP limiter in the route | Protects the free quota |
| Analytics | **Cloudflare Web Analytics** or **Vercel Analytics** | Privacy-friendly, free |
| Testing | **Playwright**, **axe** (accessibility), **Lighthouse CI** | Catch regressions before deploy |
| Quality | ESLint, Prettier, TypeScript strict mode | Clean code |
| CV | **Overleaf (LaTeX)**, exported to PDF | Professional, free |
| Design | **Figma** (free) for wireframes | Optional, the prototype already exists |
| Source and CI | **GitHub** and **GitHub Actions** | Free for public repos |

Free-tier limits change. Check each provider's current limits before building, and design the site to degrade gracefully (the site must work fully if the assistant is unavailable).

---

## 7. Architecture

### 7.1 Overview

```
Visitor -> CDN (Vercel/Cloudflare) -> Next.js pages (static, pre-rendered)
                                   -> /api/contact  -> Resend -> your inbox
                                   -> /api/chat     -> rate limit -> retrieval (static embeddings)
                                                                   -> LLM API -> streamed answer
Content (MDX) -> build step -> pages + search index + embeddings
```

### 7.2 Repository structure

```
/content
  /projects/*.mdx      (frontmatter: title, summary, tags, stack, metrics, links, featured)
  /research/*.mdx
  /posts/*.mdx
  profile.json         (name, positioning, status, links)
  roadmap.json         (tracks, status, milestones)
  /fit/*.mdx           (per-professor pages, noindex)
/app                   (routes, layouts, API routes)
/components            (ui, sections, assistant)
/lib                   (content loader, retrieval, seo helpers)
/public                (CVs, images, OG fallbacks)
/scripts               (build-time embedding generator)
/tests                 (Playwright, axe)
```

### 7.3 Assistant design ("Ask my portfolio")

1. At build time, split all content into chunks and create embeddings
2. At question time, embed the query, retrieve the top matches, pass them to the LLM with a strict system prompt: *answer only from the provided content, say "I don't know" otherwise, cite the page*
3. Show source links under each answer
4. Add rate limiting, a daily cap, a short max input length, and a fallback message when the quota is reached
5. Log nothing sensitive; do not store conversations

### 7.4 Audience switching

- Source of truth: a config that maps each audience to a section order and a short intro line
- Routes `/for/[audience]` render the same page with a preset; the home page switcher updates `?for=`
- Analytics tag each visit by audience, so you learn which outreach links get opened

---

## 8. Quality: SEO, accessibility, performance, security

- **SEO:** unique title and description per page, canonical URLs, sitemap, robots.txt, Open Graph and Twitter cards, JSON-LD (`Person`, `CreativeWork`). Mark `/fit/*` as `noindex`
- **Accessibility:** WCAG 2.2 AA target, keyboard navigation, skip link, alt text, reduced motion, tested with axe and a manual screen reader pass
- **Performance:** Lighthouse 95+ on all four scores, optimised images (next/image, WebP/AVIF), self-hosted fonts, minimal client JavaScript, lazy-load the assistant
- **Security:** security headers (CSP, X-Content-Type-Options, Referrer-Policy), form spam protection (honeypot plus rate limit), server-side validation, secrets only in environment variables, dependency updates via Dependabot
- **Privacy:** no third-party trackers, cookie banner not needed with cookieless analytics

---

## 9. Deployment (free)

1. **Repository:** create a GitHub repo. Keep content in the repo; add a README that explains the project
2. **Hosting:** connect the repo to **Vercel Hobby** (personal, non-commercial use fits a portfolio) or **Cloudflare Pages**. Every push to `main` deploys automatically; pull requests get preview URLs
3. **Environment variables:** store the LLM key, email key and rate-limit credentials in the host's dashboard, never in the repo
4. **CI:** GitHub Actions runs lint, type-check, build, Playwright and Lighthouse on every pull request
5. **Domain:**
   - Free: `yourname.vercel.app` or `yourname.pages.dev`
   - Optional: a custom domain costs roughly USD 10 per year. Check whether any student offer applies to you. A custom domain also gives you a professional email address
6. **Analytics:** enable Cloudflare Web Analytics or Vercel Analytics
7. **Monitoring:** free uptime checks (for example UptimeRobot) and Search Console for indexing
8. **Backups:** the Git history is the backup; keep CV source files (LaTeX) in the repo

---

## 10. Build phases and timeline

Estimated 5 to 6 weeks part-time. Phase 0 can start immediately and runs in parallel.

| Phase | Work | Output |
| --- | --- | --- |
| **0. Content (week 1, ongoing)** | Gather metrics, demo videos, repo links, research statement, photo, professor list | Content folder filled |
| **1. Foundation (week 1)** | Repo, Next.js and Tailwind setup, design tokens, layout, theme, CI | Empty site deploying on every push |
| **2. Core pages (weeks 2 to 3)** | Home with hero demo, projects and case studies, experience, skills, achievements | Recruiter-ready site |
| **3. Academic layer (week 3 to 4)** | Research page, roadmap, two CVs, audience routes, fit pages | Professor and admissions-ready site |
| **4. Smart features (week 4 to 5)** | Command palette, search, assistant, OG images | Differentiators live |
| **5. Polish and launch (week 5 to 6)** | Accessibility, performance, SEO, testing, analytics, domain | Public launch |
| **6. Maintenance (ongoing)** | Add projects, update roadmap status, review analytics monthly | Living portfolio |

### Launch checklist

- [ ] All four projects have case studies with at least one metric and a demo or video
- [ ] Both CVs uploaded and metadata stripped
- [ ] Research page and roadmap reviewed for tone and accuracy
- [ ] `/for/` links tested on mobile
- [ ] Contact form delivers to your inbox
- [ ] Lighthouse 95+, axe shows no critical issues
- [ ] Open Graph previews checked on LinkedIn and WhatsApp
- [ ] Assistant answers correctly and fails safely
- [ ] Site added to LinkedIn, GitHub profile, email signature, CV header

---

## 11. Using the site in your applications

- **Job and internship:** email or LinkedIn message with the `/for/recruiters` link and one strongest project
- **Professors:** short email, your academic CV, and a `/fit/<professor>` link that names their paper and your relevant work
- **MS applications:** put the portfolio URL in the CV and the application form; keep the roadmap page consistent with your statement of purpose
- **Keep it fresh:** update the status badge and roadmap whenever something changes

---

## 12. Risks and mitigations

| Risk | Mitigation |
| --- | --- |
| Looks scattered across AI, full stack and security | One positioning thread; audience lens controls emphasis |
| Weak content, strong design | Phase 0 is first and has a checklist |
| Free LLM quota exhausted | Rate limiting, daily cap, graceful fallback |
| Over-building delays applications | Ship the recruiter-ready version first, add the rest in phases |
| Overclaiming achievements | Only publish confirmed facts and real metrics |
| Free-tier terms change | Keep hosting portable (standard Next.js, content in Git) |

---

## 13. Success measures

- Visitors from outreach links (tracked by `?for=`)
- Replies to emails that included a portfolio link
- Time spent on project and research pages
- Lighthouse and accessibility scores kept above target
- Number of interviews, professor responses and acceptances that mention the site

---

## 14. Next steps

1. Collect the Phase 0 content (start with FYP metrics and demo videos)
2. Confirm positioning statement and roadmap wording
3. Start development from the existing HTML prototype as the visual reference