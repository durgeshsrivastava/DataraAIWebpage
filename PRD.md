# Product Requirements Document (PRD)
## DataraAI Website

**Version:** 1.0
**Date:** April 18, 2026
**Live URL:** https://dataraai.ai

---

## 1. Product Overview

DataraAI is an AI technology company founded by two IIT graduates with 40+ years of combined expertise in AI, CUDA, robotics, and data centers. The website serves as the primary marketing and lead-generation surface for two distinct product lines:

1. **Industrial Robotics Data Engine** — solving the real-world training data bottleneck for industrial robots
2. **AI Datacenter Solutions** — full-stack AI infrastructure for small businesses and enterprises

---

## 2. Business Goals

- Establish credibility and authority in industrial robotics AI and datacenter AI solutions
- Generate inbound leads via email (durgesh@dataraai.ai)
- Communicate the technical vision and market opportunity to potential investors and customers
- Showcase founding team's domain expertise (NVIDIA, SproutsAi, MIPS exits)

---

## 3. Target Audiences

| Segment | Description |
|---|---|
| Robot OEMs / Manufacturers | Companies building industrial robots who need better training data |
| Enterprise Buyers | Manufacturing, semiconductor, logistics verticals seeking AI automation |
| Small Businesses | Companies seeking full-stack AI without enterprise budgets |
| Investors | VCs / angels evaluating the robotics data market opportunity |

---

## 4. Site Architecture

```
/ (root)
├── robotics.html      ← Default homepage (Industrial Robotics Data Engine)
├── datacenter.html    ← AI Datacenter Solutions page
├── about_us.html      ← Team / Company page
└── error.html         ← 404 fallback
```

**Tech Stack:**
- Frontend: HTML5, Tailwind CSS (compiled to `css/output.css`), Vanilla JS
- Backend: Node.js + Express (static file server)
- Deployment: Vercel

---

## 5. Pages & Content Requirements

### 5.1 Home Page — Industrial Robotics Data Engine (`robotics.html`)

**Purpose:** Primary landing page targeting robotics companies and investors.

#### Sections:

| Section | Content |
|---|---|
| Hero | "Industrial Robotics Data Engine" — tagline: "Corner Cases break robots – we fix that" |
| What Robots Can Handle Today | 6 cards: Assembly & Inspection, Pick/Place/Inspect, Weld & Polish, Automated Welding, Precision Assembly, Robotic Painting |
| Why Robots Fail in the Wild | 2 root causes: Missing Global Data, Failure Intelligence Gap |
| Why Now | Tech catalysts (Meta Aria wearables, Multimodal AI, Edge Computing) + Market drivers (post-COVID automation, labor shortages, Industry 4.0) |
| Market Size | SAM $3.26B (training data $1.86B + planning software $800M + consulting $600M); SOM $326M (10% in 5 years) |
| Robotics Stuck in the Lab | Industrial Foundational Dataset & Failure Mode Intelligence visual |
| Two Core Products | Egocentric Data Platform + Planning-as-a-Service (see §6) |
| Simulators Miss These | 4 real-world failure categories captured by patent-protected IP |
| CTA | "Ready to Transform Robotics?" → email contact |

---

### 5.2 AI Datacenter Solutions (`datacenter.html`)

**Purpose:** Secondary product page targeting small businesses needing full-stack AI.

#### Sections:

| Section | Content |
|---|---|
| Hero | "Where Datacenter Meets Direction" — full-stack AI for small businesses and enterprises |
| Features (6) | Optimized Hardware, Integrated Software Stack, Seamless Integration, Enterprise-Grade Security, 99.9% Uptime Reliability, Dedicated Support |
| Solutions (3) | AI Infrastructure, AI Software Platform, Ready-to-Use AI Applications |
| CTA | "Ready to Transform Your Business with AI?" → Schedule a Consultation |

---

### 5.3 About Us (`about_us.html`)

**Purpose:** Build trust and credibility through founder profiles.

#### Sections:

| Section | Content |
|---|---|
| Hero | "Meet Our Team" — IIT Graduates, 40+ years combined expertise |
| Leadership | Durgesh Srivastava (CEO) + Niraj Rai (CTO) — detailed bios and achievements |
| Why Choose DataraAI | Narrative about combined expertise: NVIDIA → startup exits |
| Stats | 40+ years combined expertise, 2 successful exits |
| CTA | "Ready to Work with Our Expert Team?" → email contact |

#### Founder Profiles:

**Durgesh Srivastava — Co-Founder & CEO**
- Serial entrepreneur (exited MIPS)
- Ex-NVIDIA Sr. Director, AI
- Expert in Data Center, AI, Robotics LLM
- IIT Graduate

**Niraj Rai — Co-Founder & CTO**
- Serial entrepreneur
- Founder, SproutsAi
- Ex-CTO of AI/Robotics startup
- Software & AI expert
- IIT Graduate

---

## 6. Core Products (Detailed)

### 6.1 Egocentric Data Platform

Captures real-world industrial robot failure data via wearable devices.

| Component | Description |
|---|---|
| Wearable Capture Devices | Field-worn hardware to capture egocentric (first-person) POV data |
| AI-Powered Annotation | Automated labeling of captured footage and sensor data |
| Edge Processing | On-device processing to handle latency and bandwidth constraints |

**What it captures that simulators miss:**
- Electrical system failures
- Mechanical breakdowns
- Safety barrier violations
- Chemical contamination events

**IP:** Patent-protected annotation methodology for real-world industrial data.

---

### 6.2 Planning-as-a-Service (PaaS)

Cloud/edge service providing robot planning intelligence based on real-world failure data.

| Component | Description |
|---|---|
| Execution Engine | Core planning inference layer for robot decision-making |
| Real-Time APIs | Integration endpoints for robot OEMs and automation platforms |
| Edge Case Handling | Specialized handling for corner cases that break conventional robots |

---

## 7. Navigation

All three pages share the same navigation bar:

| Link | Target |
|---|---|
| Solutions | `/datacenter.html#solutions` |
| Features | `/datacenter.html#features` |
| About Us | `about_us.html` |
| Contact | `/datacenter.html#contact` |
| AI Datacenter Solutions | `/datacenter.html` |
| Get Started (CTA button) | `mailto:durgesh@dataraai.ai` |

---

## 8. Design System

| Token | Value |
|---|---|
| Primary color | `#1de9b6` (teal/green) |
| Secondary color | `#1e88e5` (blue) |
| Accent | Orange (`#FF6600`) — used in logo |
| Background (dark) | `#0a192f` / `#1e293b` |
| Background (darker) | `#181f2a` |
| Font | Inter (400, 700, 900) via Google Fonts |
| Card style | Glass morphism + rounded-3xl + hover lift |
| Animations | Intersection Observer scroll-in, gradient animation, float, pulse, bounce |

---

## 9. Lead Generation

**Primary CTA:** `mailto:durgesh@dataraai.ai`
**Secondary:** LinkedIn — `https://www.linkedin.com/company/dataraai/`

All CTA buttons across every page route to email contact. No form or backend lead capture currently implemented.

---

## 10. Current Gaps / Future Improvements

| Gap | Priority |
|---|---|
| No contact form — all CTAs open email client | High |
| Navigation footer links for Solutions/Resources/Documentation are commented out | Medium |
| No mobile hamburger menu for small screens | High |
| No analytics / tracking integration | Medium |
| Images are loaded from local `robotics_data_engine_presentation/ppt/media/` — no CDN | Medium |
| Server route order bug: wildcard `app.get('*')` is registered before named routes, so `/about_us` and `/datacenter` routes are unreachable | High |
| No SEO meta tags (og:title, description, canonical) | Medium |
| No sitemap.xml or robots.txt | Low |

---

## 11. Market Context

- **SAM:** $3.26B (industrial robotics training data + planning software + consulting)
- **SOM:** $326M (10% of SAM over 5 years)
- **Target verticals:** Manufacturing, semiconductor fabrication, logistics
- **Key differentiator:** Real-world egocentric data + patent-protected IP vs. simulator-only approaches
- **Competitive moat:** IIT-trained founders with NVIDIA AI and robotics startup backgrounds

---

*© 2025 DataraAI. All rights reserved.*
