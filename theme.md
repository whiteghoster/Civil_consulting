# Saranya Civil Consulting Theme

This document defines the visual, content, and interaction direction for the Saranya Civil Consulting website. Use it when redesigning the homepage and every follow-up page, including Services, Projects, About, Contact, Career, and individual project pages.

## Core Direction

Saranya Civil Consulting should feel like a serious civil consulting practice, not a SaaS product, tech startup, construction contractor brochure, or generic portfolio template.

The site must be:
- Light-first.
- White and blue based.
- Civil engineering focused.
- Project and proof led.
- Premium, clean, and restrained.
- Easy for developers, builders, and private project owners to trust quickly.

Primary audience:
- Developers.
- Builders.
- Real estate investors.
- Private residential and commercial project owners.

Core promise:

> Build with cost certainty, technical confidence, and independent civil oversight.

Primary conversion action:
- `Book a Consultation`

Secondary conversion action:
- `View Services`

Audience language:
- Use `developers, builders, investors, and private project owners`.
- Avoid leading with `homeowners`; it makes the firm feel smaller and more residential-contractor focused.
- When residential work is relevant, use `private residential project owners` or `residential project owners`.

## Market Comparison

Most credible civil, engineering, infrastructure, and AEC consulting websites do not look like dark SaaS products. They usually rely on light surfaces, white space, blue or navy authority colors, strong navigation, service taxonomies, real project photography, and proof of technical competence.

Reference patterns to synthesize:
- Colliers Engineering & Design uses practical buyer navigation around `Who We Are`, `What We Do`, `Projects`, `Markets`, `Careers`, `Locations`, and `Contact Us`. Its service structure is broad, explicit, and easy to scan.
- AECOM and Stantec lead with infrastructure-scale authority, projects, insights, and sector expertise rather than abstract product styling.
- WSB positions itself directly as an engineering, design, consulting, and civil engineering firm, with service categories that make the practice areas obvious.
- Blue Engineering & Consulting presents direct service entry points such as engineering design, owner engineering, regulatory support, safety, and compliance.
- Engineering/AEC website galleries consistently highlight real photography, project evidence, and service clarity as the strongest conversion signals.

Reference URLs:
- https://colliersengineering.com/
- https://aecom.com/
- https://www.stantec.com/en
- https://www.wsbeng.com/
- https://www.blueengineeringandconsulting.com/
- https://www.windmillstrategy.com/best-engineering-aec-ed-epc-website-design-examples/
- https://openasset.com/resources/engineering-website-examples/

Reusable lesson:
- Lead with authority, not hype.
- Use white and pale blue surfaces as the base.
- Make services easy to scan before asking users to contact.
- Use projects, documents, site photography, and metrics as proof.
- Make consultation feel like the natural next step.

## Current Homepage Audit

The current homepage has useful content foundations, but the feel is still too close to a SaaS/product landing page.

Keep:
- Service categories: Quantity Surveying, Project Monitoring, Technical Due Diligence, Investment Advisory.
- Metrics and trust bar.
- Project cards with type, location, value, and contribution.
- Clear CTAs.
- Lucide icons for scannable service cues.
- Geist font if the implementation keeps it disciplined.

Change:
- Replace dark or tinted hero treatment with a white/light-blue civil consulting hero.
- Remove animated blobs, ambient glows, aurora effects, bokeh, and decorative orbs.
- Remove glassmorphism as a main card language.
- Remove magnetic/ripple button effects from serious business CTAs.
- Remove gradient text and shiny product-style treatments.
- Remove palette-customizer/product-theme behavior from the public brand experience.
- Reduce overly rounded SaaS buttons.
- Replace `Watch Reel` and entertainment-style actions with consultation, service, project, and report-oriented actions.
- Replace vague hero copy like `Building India's Future With Engineering Precision` with cost, risk, and oversight language.
- Avoid claims like `India's Premier` or `Since 2020` unless verified and intentionally part of the brand.

## Brand Positioning

Saranya Civil Consulting is an independent civil consulting partner that helps clients plan, estimate, monitor, and de-risk construction projects before cost overruns or site issues become expensive.

Main proof themes:
1. Cost certainty: BOQ, estimates, cost planning, tender review, value engineering.
2. Risk reduction: technical due diligence, audits, compliance review, independent reporting.
3. Project visibility: site monitoring, milestone tracking, progress reports, issue escalation.
4. Trust: years of experience, project value monitored, client types, completed work.

Tone:
- Professional.
- Grounded.
- Precise.
- Calm.
- Evidence-led.
- Locally credible.

Avoid:
- Startup hype.
- Tech jargon unless it directly supports civil consulting.
- Generic promises like `engineering excellence` without proof.
- Overly dramatic construction language.
- Casual homeowner-service copy.
- Entertainment-led sections.

## Visual System

The default theme is white and blue. The site can feel premium without being dark.

Recommended color direction:
- Background: clean white.
- Alternate background: very pale blue or cool concrete.
- Primary text: deep charcoal/navy.
- Primary authority color: civil navy / engineering blue.
- Secondary color: steel blue / slate.
- Accent and CTA marker: restrained amber or survey-orange, used sparingly.
- Borders: cool concrete gray.
- Cards: white on pale blue/concrete bands.

Suggested tokens:
- `--color-background`: `#FFFFFF`
- `--color-foreground`: `#142033`
- `--color-primary`: `#123A63`
- `--color-primary-foreground`: `#FFFFFF`
- `--color-secondary`: `#4F6B85`
- `--color-secondary-foreground`: `#FFFFFF`
- `--color-accent`: `#D9902F`
- `--color-accent-foreground`: `#211404`
- `--color-muted`: `#F2F7FB`
- `--color-muted-foreground`: `#5D6B78`
- `--color-card`: `#FFFFFF`
- `--color-card-foreground`: `#142033`
- `--color-border`: `#D8E2EA`
- `--color-input`: `#D8E2EA`
- `--color-ring`: `#123A63`
- `--color-gradient-from`: do not use for heading text.
- `--color-gradient-to`: do not use for heading text.

Dark mode:
- Do not make dark mode the brand default.
- If dark mode remains in code, it must be secondary and should not drive homepage design decisions.
- Public marketing pages should render as light-first unless the user explicitly toggles another mode.

Avoid:
- Purple SaaS palettes.
- Neon gradients.
- Dominant dark navy/black backgrounds.
- Glassmorphism as the main visual language.
- Glowing blobs, aurora backgrounds, bokeh, decorative orbs, and abstract tech effects.
- Heavy dark overlays that make site photos hard to inspect.
- One-note beige/sand treatment; blue should be the authority color.

## Typography

Keep Geist unless the brand later needs a larger identity shift. The current font can feel premium when styled soberly.

Rules:
- Headings should be confident, architectural, and practical.
- Do not use gradient-highlighted words in headings.
- Do not use futuristic or tech-like typography treatments.
- Body copy should be direct and outcome oriented.
- Labels can be small uppercase when they improve scanning, but avoid using them on every element.
- Numbers should feel like credentials, not entertainment.
- Letter spacing should be 0 unless a tiny uppercase label needs restrained tracking.

Recommended heading style:
- Large, clear, low-decoration.
- Tight but readable line-height.
- Strong hierarchy between page hero, section title, card title, and metadata.
- No animated underline or shiny reveal treatments.

## Photography Direction

The visual brand should be carried by credible civil consulting imagery, not abstract effects.

Hero photo:
- Engineers reviewing drawings, plans, BOQ documents, or inspection notes on or near a real site.
- Should show human expertise and construction context.
- Use bright, inspectable photography with natural daylight.
- Avoid hiding the image behind a dark overlay.

Good image subjects:
- Engineers reviewing drawings on site.
- Site inspections.
- Quantity surveying documents, measurement, and cost plans.
- Structural work in progress.
- Completed residential, commercial, and infrastructure projects where details are visible.
- Teams discussing drawings, costs, risks, or project progress.

Avoid:
- Generic dark crane silhouettes.
- Pure skyline glamour shots.
- Stock business handshakes.
- Photos where the actual civil/project context is unclear.
- Heavy blur, heavy tint, or dark overlays that hide detail.

## Layout Language

The layout should feel like a premium civil advisory website, not a dashboard or app shell.

Use:
- Strong white hero with image support.
- Crisp section bands in white and pale blue.
- Clear grids for services, deliverables, and project proof.
- Image-led project sections.
- Tables or structured lists for deliverables where useful.
- Narrow, readable copy blocks.
- Generous but controlled spacing.

Avoid:
- Floating cards everywhere.
- Cards inside cards.
- Product dashboard panels as decoration.
- Overly centered SaaS hero composition.
- Full-page dark hero unless a specific real project photograph requires contrast.
- Decorative grid backgrounds that feel like a software product.

## Motion And Interaction

Motion should feel restrained and professional.

Use:
- Subtle fade-up reveals.
- Small hover state changes.
- Clear focus and active states.
- Smooth but minimal transitions.

Avoid:
- Magnetic cursor effects.
- Ripple buttons on core CTAs.
- Playful blob movement.
- Excessive parallax.
- Animated counters unless the numbers are verified and add clear credibility.
- Scroll gimmicks that distract from services and proof.

## Components

Buttons:
- Primary button: engineering blue or navy.
- Secondary button: white with blue border.
- Accent button: amber only in high-intent CTA sections.
- Button copy should be short: `Book a Consultation`, `View Services`, `Discuss Your Project`, `Request a Cost Review`.
- Keep radius moderate, closer to 6-8px than pill-shaped SaaS buttons.
- Use icons only when they clarify the action.

Cards:
- Use simple bordered cards on white or pale blue sections.
- Use subtle shadow only when it helps hierarchy.
- Avoid nested cards.
- Avoid heavy glass effects.
- Service cards should include problem, audience, and deliverable.
- Project cards should be image-led and include concrete metadata.

Section headers:
- Use a short eyebrow only when it helps context.
- Headline should explain buyer value.
- Supporting copy should clarify the service outcome.

Metrics:
- Use compact credential strips.
- Prioritize meaning over animation.
- Good metrics: projects delivered, years, project value monitored, client types, report turnaround.
- Do not show inflated or unverified claims.

Navigation:
- Keep simple and buyer-oriented.
- Primary nav should make Services, Projects, About, Contact easy to reach.
- CTA should be visible: `Book a Consultation`.
- Avoid app-like theme controls in the public nav.

## Homepage Structure

Use this order:

1. Hero
   - Brand signal: `Saranya Civil Consulting`.
   - Headline: `Build with cost certainty and independent civil expertise.`
   - Body: `Civil consulting for developers, builders, investors, and private project owners who need cost clarity, technical confidence, and independent oversight.`
   - Primary CTA: `Book a Consultation`
   - Secondary CTA: `View Services`
   - Visual: bright civil consulting/site image, not a dark product background.

2. Trust bar
   - Compact credentials.
   - Example metrics: `250+ projects delivered`, `15+ years experience`, `₹500Cr+ project value monitored`, `Developers, builders, investors, and private project owners`.
   - Only use metrics that are approved or clearly placeholder data.

3. Services
   - Quantity Surveying & Cost Estimation.
   - Project Monitoring & Audit.
   - Technical Due Diligence.
   - Investment Advisory.
   - Each card should answer: what it solves, who needs it, and what deliverable the client receives.

4. Process
   - Consultation.
   - Scope and document review.
   - Estimate, report, or monitoring plan.
   - Site monitoring, advisory, or decision support.
   - Keep it practical and confidence-building.

5. Featured projects / use cases
   - Use real imagery where possible.
   - Include project type, location, value, and the firm contribution.
   - If real client names are placeholders, avoid implying false endorsements.

6. Why choose Saranya Civil Consulting
   - Independent advice.
   - Cost control discipline.
   - Technical risk visibility.
   - Site-level reporting.
   - Developer-grade standards for private project owners.

7. Testimonials / client proof
   - Keep professional and evidence-led.
   - Avoid exaggerated quotes.
   - Prefer titles and outcomes where credible.

8. Final CTA
   - Ask for the consultation.
   - Include phone and contact form path.
   - Reassure the user that the first step is scope discussion, not immediate commitment.

## Page-Level Guidance

### Services Page

Purpose:
- Help visitors self-identify the service they need.

Structure:
- Hero focused on cost clarity and technical confidence.
- Service overview grid.
- Detailed service sections.
- Deliverables for each service.
- When to use this service.
- Final consultation CTA.

Style:
- More structured and practical than the homepage.
- Use checklists, deliverable lists, and short examples.

### Projects Page

Purpose:
- Prove capability with real work.

Structure:
- Hero focused on project evidence.
- Filters by project type if useful.
- Image-led project cards.
- Metadata: type, location, value, status, scope.
- CTA after project grid.

Style:
- Let photos carry authority.
- Avoid flashy hover overlays that hide details.

### Project Detail Pages

Purpose:
- Show how the firm creates value.

Structure:
- Project hero with image and metadata.
- Client challenge.
- Scope of work.
- Method or approach.
- Outcome or project status.
- Related services.
- CTA for similar projects.

Important:
- If project data is fictional or placeholder, label internally and replace before launch.

### About Page

Purpose:
- Build trust in the firm behind the service.

Structure:
- Clear firm positioning.
- Leadership / team credibility.
- Values tied to client outcomes.
- Certifications or standards if real.
- Working principles.
- CTA.

Style:
- Professional and human.
- Avoid generic mission statements.

### Contact Page

Purpose:
- Convert intent into a real inquiry.

Structure:
- Clear invitation: `Book a consultation for your project`.
- Form with project type, location, service need, timeline, and budget range if appropriate.
- Phone and email.
- Office details.
- Response expectation.

Style:
- Minimal friction.
- Serious and reassuring.

### Career Page

Purpose:
- Attract credible civil, QS, monitoring, and advisory talent.

Structure:
- Culture based on technical rigor and client trust.
- Roles / open positions.
- What work looks like.
- Hiring CTA.

Style:
- Professional, not startup-culture heavy.

## Copy Rules

Prefer:
- `Saranya Civil Consulting`
- `cost certainty`
- `independent oversight`
- `technical confidence`
- `project visibility`
- `scope clarity`
- `site monitoring`
- `quantity surveying`
- `technical due diligence`
- `budget control`
- `risk visibility`
- `cost review`
- `tender comparison`
- `site audit`
- `progress report`

Avoid:
- `future-proofing your vision`
- `engineering excellence` without proof
- `disruptive`
- `AI-powered`
- `dashboard-first`
- `next-gen`
- `landmark` unless tied to real project evidence
- `premier` unless substantiated
- `watch reel` as a primary homepage action

Sample headlines:
- `Build with cost certainty and independent civil expertise.`
- `Know the cost, risk, and progress before decisions become expensive.`
- `Civil consulting that keeps projects clear, controlled, and accountable.`
- `From BOQ to site monitoring, get independent clarity at every stage.`
- `Independent civil advice for developers, builders, and private project owners.`

Sample CTA copy:
- `Book a Consultation`
- `Discuss Your Project`
- `View Services`
- `Request a Cost Review`
- `Start Due Diligence`

## Current Site Changes Implied By This Theme

Remove or reduce:
- Dark tech-style hero treatment.
- Purple-led or overly warm beige color systems.
- Text gradients in headings.
- Animated blobs, aurora effects, and ambient glows.
- Glass-card styling as the main card language.
- Magnetic and ripple button effects.
- Overly rounded SaaS buttons.
- Public palette/theme customizer behavior.
- Decorative grid backgrounds that read like software tooling.

Replace with:
- White and pale-blue page base.
- Engineering blue/navy authority color.
- Bright site/project photography.
- Simple bordered service and deliverable cards.
- Project evidence and metadata.
- Serious CTAs around consultation, services, cost review, and due diligence.

Keep and refine:
- Existing section component structure.
- Existing service categories.
- Existing project metadata pattern.
- Framer Motion for subtle reveal only.
- Lucide icons where they support scanning.
- Geist font.

## Implementation Principles

When redesigning pages:
1. Start with the buyer question the page must answer.
2. Lead with a clear promise.
3. Show the service or proof quickly.
4. Use real project/site imagery.
5. Keep CTAs consistent.
6. Make components reusable across pages.
7. Avoid one-off visual tricks.
8. Test responsive layouts for text fit and image framing.

Quality bar:
- Premium.
- Restrained.
- Clear.
- Built for conversion.
- Civil consulting first, technology second.
- White/blue by default, not dark SaaS by default.
