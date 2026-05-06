# Product Requirements Document (PRD)
## DataraAI Website

**Version:** 2.0
**Date:** April 19, 2026
**Live URL:** https://dataraai.ai
**Source:** Website codebase + investor deck (PhysicalAI RobotEyeview DataEngine 2.pdf)

---

## 1. Company Overview

DataraAI is a **PhysicalAI company** and **member of the NVIDIA Inception program**. Founded by two IIT graduates with 40+ years of combined expertise, DataraAI provides the foundational real-world data infrastructure that makes industrial robots work outside simulation.

**Core thesis:** Robotics and industrial automation works in simulation — it breaks in the real world. DataraAI fixes that.

**One-line:** "We fix what breaks Robotics — Foundation Real-world data and Tools that make robots work."

---

## 2. The Problem

### The Sim-to-Real Gap
Physical AI (robots, automation) is stuck in the lab:
- Works in simulation, fails in the real world
- Root cause: **Scarcity of real-world egocentric training data**
- The AI brain can Perceive (solved) and Act (solved) — but **Predict (Behavior & Intent) is the unsolved gap**

### Why Industrial Robots Fail in the Wild
| Failure Mode | Description |
|---|---|
| Missing Global Data | Limited diverse training scenarios prevent real-world adaptation |
| Failure Intelligence Gap | Companies build robots but can't anticipate real-world failures |

### Real Customer Pain Examples
- **Peer Robotics (Warehouse AMRs):** Struggled with glare, wet patches, mixed box sizes, load imbalance → pallet pickup failures, lift stability issues, path execution failures
- **Automotive Manufacturing (BMW):** Intensive labor cost, missing ego-centric data, failure rates costing the business
- **Data Center Rack/Server Manufacturing (Pegatron/SuperMicro):** Not able to scale with demand, intensive labor cost, automation not working

---

## 3. The Solution

**DataraAI provides Foundation Real-world data and Tools that make robots work.**

### How It Works
Simulation-only training → lower accuracy (~85%), larger inference models
DataraAI PhysicalAI real data → higher accuracy (>95%), smaller inference models

Key benefits of DataraAI data:
- Enhances training with real-world data
- Reduces inference size for efficient deployment
- Accelerates Sim-to-Real transfer

---

## 4. Product Suite

### 4.1 RoboDataHub — Data at Scale
- Large industrial datasets: automotive, warehouse, data center assembly
- 100+ team with infrastructure to generate data on demand

### 4.2 RoboEyeView — Exo → Ego Conversion *(Patented IP)*
- Converts existing factory video (exocentric) into robot-eye-view (egocentric) datasets
- Pipeline: Exocentric video → Remove Technician → 3D Rendering → RoboEyeView
- Physics-aware: handles slip, glare, load shifts, real conditions
- Proven on BMW automotive assembly line data

### 4.3 RoboHandMotion — Dexterity Data
- Detailed hand, tool, and object interaction data for fine manipulation tasks

### 4.4 RoboTaskManipulator — Task Intelligence *(Patented IP)*
- Multi-step structured workflows: assembly, pick-place, cabling
- Task-aware manipulation intelligence
- Adaptive lift + motion planning under real load conditions
- Deployed at Peer Robotics → **95% precision in warehouse operations**

### 4.5 PhysicalAI Data Platform (Universal ETL)
Full pipeline:
```
Raw Data Sources
  ├── Existing EXO-centric data (customers + web)
  ├── Existing EGO-centric data (customers + web)
  └── Ego-centric data generation (partners)
           ↓
    [Exo → Ego Conversion]
           ↓
    [Task Scoring + Task Planning]
           ↓
    Training Data
  ├── Perception Data (for model training)
  └── Task Manipulation Data (for model training)
           ↓
    Customers (Robot OEMs, Model Companies, Humanoids)
```

---

## 5. Patented Technology

**RoboEyeView** is DataraAI's core patented IP:
- Takes exocentric factory video
- Removes human technician from frame
- Generates 3D rendering
- Outputs robot-eye-view egocentric dataset
- Result: improves model accuracy from ~85% (synthetic) to >95% (real-world)

**Industrial Hazard Annotation** — annotates what simulators miss:
- Electrical system failures
- Mechanical breakdowns
- Safety barrier violations
- Chemical contamination events

---

## 6. Proven Customer Traction

### Paying Customers
| Customer | Vertical | Status |
|---|---|---|
| Peer Robotics | Warehouse | Paying — 95% precision achieved |
| Pegatron | Server/Rack Manufacturing | Engaged |
| Ather Energy | India EV (NRE) | NRE contract |

### Pipeline Customers
| Customer | Vertical |
|---|---|
| BMW | Automotive Manufacturing |
| GM Ventures | Automotive Manufacturing |
| SuperMicro | Data Center |
| CAT | Construction/Farming |
| John Deere | Construction/Farming |
| Oshkosh | Construction/Farming |
| Mahindra Auto | India Automotive |
| Stealth Startup | Warehouse |

### Model Company Targets
Foundation model companies building humanoid/robotic AI systems

---

## 7. Market Opportunity

| Market | Size |
|---|---|
| Total Opportunity | **$35 Billion annually** |
| SAM | $3.26B (training data $1.86B + planning software $800M + consulting $600M) |
| SOM | $326M (10% market share in 5 years) |

**DataraAI is the essential utility layer required to unlock the promise of Physical AI fleet-wide.**

---

## 8. Go-To-Market Strategy: Land. Expand. Standardize.

### Phase 1 — The Beachhead (6–9 months, Now)
- Deploy with Tier 1 lighthouse partners: Pegatron, Leadpoint, Peer Robotics
- Perfect data interpretation to improve accuracy
- Prove Zero-to-One viability

### Phase 2 — Strategic Expansion (Q4 2026 / Q1 2027)
- Move from single-cell pilots to full-factory floor automation: BMW, Ather Energy, Mahindra
- Enterprise (OEM) expansion
- Increase ACV by 5–10x per customer

### Phase 3 — Market Leadership (Q3 2027)
- New verticals: Automotive, Construction (Siemens, ABB, CAT)
- Standardize the **"Datara Schema"** as industry standard
- Position DataraAI as the "Operating System" for Physical AI

---

## 9. Business Model

### Core Data Services (SaaS)
| Tier | Price | Access |
|---|---|---|
| Starter | $15K/month | 500 hours access |
| Professional | $50K/month | 2K hours + API |
| Enterprise | $150K/month | Unlimited access |

### Industrial Data Labeling
- Multi-modal data: $5–50/hour
- Edge case premium: 3x pricing
- Hazard annotations: $100–500/incident

### Egocentric Data API
- Real-time annotation: $0.25–1.00/minute
- Batch processing: $10–25/hour
- Expert knowledge transfer: $2–5/decision

### Enterprise & Licensing
- Automotive manufacturing vertical: $500K–2M/year
- Electronics assembly: $300K–1M/year
- Custom robotics datasets: $1M–5M/deployment
- On-site data collection: $100K–500K/facility
- White-label licensing: $250K–1M/year
- Implementation consulting: $2K–5K/day

### Revenue Sharing
- Robot OEM partnerships: 5–15% of deployment value
- System integrator deals: 10–20% revenue share

---

## 10. Team

### Founders
| Name | Role | Background |
|---|---|---|
| Durgesh Srivastava | Co-Founder & CEO | Serial entrepreneur (exited MIPS), Ex-NVIDIA Sr. Director AI & Robotics, Omniverse/Systems/LLM expert, IIT Kanpur |
| Niraj Rai | Co-Founder & CTO | Serial entrepreneur, Founder SproutsAi, Ex-CTO AI/Robotics startup (Vimaan), Software & AI expert, IIT Kharagpur |

### Advisors
| Name | Background |
|---|---|
| Brian Kelleher | Sr. VP NVIDIA, Angel Investor |
| Dr. Teck Joo Goh | Angel Investor, Corporate VP SkyeChip, ex-GM Intel |
| Dr. Amit Roy-Chowdhury | Professor & UC Presidential Chair, CS & Engineering, Chair Robotics Program, UC Riverside |
| Lomesh Agarwal | VP Software Apptronik, Ex-MagicLeap |

---

## 11. Competitive Landscape

| Dimension | LightWheel.ai | **DataraAI** | WorldLabs.ai |
|---|---|---|---|
| Primary Focus | Realistic Digital Twin | **Data Infrastructure for Model Training** | 3D Environment Generation |
| Technology | GPU-based Real→Physics→Digital Twin | **Egocentric Data Gen (Exo→Ego)** | Single photo/text→spatial 3D |
| Product | EgoSuite: RealData2Sim | **RoboEyeView** | High Fidelity 3D spaces |
| Strategy | Simulation platform | **Foundational Data for AI** | 3D Gaussian Splat scenes |
| Task Manipulation | No | **Yes** | No |
| Simulation Integration | Isaacsim | **Isaacsim + others** | Marble platform |

**Key differentiator:** DataraAI is the only player capturing real-world multi-modal industrial data with task manipulation intelligence. Competitors (Lightwheel, World Labs) use simulation — not real data.

### Partner Ecosystem
- **Encord** — IDE for physical AI toolchain, data curation and labeling
- **Foxglove** — observability and visualization for physical AI
- **Roboflow** — model deployment platform

---

## 12. Physical AI Ecosystem Position

DataraAI sits at the **Data & Infrastructure** layer:
- Real-world data capture (unique vs. competitors)
- Task planning intelligence
- Data annotation, curation, and evaluation

Downstream customers include:
- Foundation model companies (OpenAI, Anthropic, Google, Meta AI)
- Robotic foundation model companies (Figure AI, Tesla, Agility Robotics)
- Industrial robot platforms (ABB, KUKA, FANUC)
- Advanced humanoid platforms (Boston Dynamics, Apptronik, Figure AI)

---

## 13. Website Pages & Content

### Current Pages
| Page | URL | Purpose |
|---|---|---|
| Industrial Robotics Data Engine | `/` (robotics.html) | Primary PhysicalAI pitch |
| AI Datacenter Solutions | `/datacenter.html` | Secondary product — full-stack AI for SMBs |
| About Us | `/about_us.html` | Team credibility |

### Tech Stack
- Frontend: HTML5, Tailwind CSS, Vanilla JS
- Backend: Node.js + Express (static server)
- Deployment: Vercel

---

## 14. Current Gaps / Recommended Website Updates

Based on this deck vs. the current website, the following key content is **missing or outdated** on the website:

| Gap | Priority |
|---|---|
| Website doesn't mention "PhysicalAI" company positioning or NVIDIA Inception membership | High |
| No advisors section (Brian Kelleher, Dr. Goh, Dr. Roy-Chowdhury, Lomesh Agarwal) | High |
| No customer traction section (Peer Robotics 95% result, BMW, GM, Pegatron pipeline) | High |
| Products listed are outdated — website shows old "Egocentric Data Platform" vs. actual product names: RoboDataHub, RoboEyeView, RoboHandMotion, RoboTaskManipulator | High |
| No business model / pricing page | Medium |
| No competitive landscape section | Medium |
| No GTM roadmap section | Medium |
| Market size shown as $3.26B SAM vs. updated $35B annual opportunity | Medium |
| No mobile hamburger menu | High |
| No contact form — all CTAs open email client | High |
| Server route order bug: wildcard registered before named routes | High |
| No SEO meta tags (og:title, description, canonical) | Medium |
| Founder bios missing IIT campus specifics (IITK vs IIT KGP) | Low |

---

*© 2025 DataraAI. All rights reserved.*
