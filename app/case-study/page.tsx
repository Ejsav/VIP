import { PageHeader } from "@/components/ui/PageHeader";
import { DisclaimerBanner } from "@/components/ui/DisclaimerBanner";
import { LuxuryLink } from "@/components/ui/LuxuryButton";
import { MotionReveal } from "@/components/ui/MotionReveal";

const sections = [
  {
    n: "01",
    label: "Overview",
    title: "A fictional luxury nightlife access product system.",
    body: "I designed The Afterlist as a fictional product concept to show how premium hospitality brands, nightlife groups, and luxury service businesses could turn high-intent demand into a structured digital experience. The build spans brand, design system, marketplace, multi-step request flow, membership tiers, and conversion-focused UX, framed as a portfolio demonstration.",
  },
  {
    n: "02",
    label: "Problem",
    title: "Premium nightlife demand is unstructured.",
    body: "Most luxury hospitality groups still capture demand through DMs, text threads, scattered host stands, and ad-hoc concierge contact. The data is messy, the routing is manual, and the experience does not match the product itself. The Afterlist explores what a unified, premium request platform would look like for this category.",
  },
  {
    n: "03",
    label: "Strategy",
    title: "Productize access, not a club.",
    body: "Instead of a single venue or city, I positioned The Afterlist as a network-level access platform — a private layer behind the experience. The product is universal across cities, agnostic to specific venues, and structured around request flows, scarcity drops, and tiered membership. That keeps the system commercially adaptable and creates a strong portfolio object.",
  },
  {
    n: "04",
    label: "Brand system",
    title: "Editorial luxury, controlled and confident.",
    body: "The brand reads like a hospitality publication, not a club flyer. Obsidian backgrounds, warm ivory typography, champagne accents, smoke-gray borders, and subtle red-velvet micro-accents. Display type is editorial; body type is modern. The system avoids generic startup gradients, fake luxury, and neon nightclub aesthetics in favor of restraint.",
  },
  {
    n: "05",
    label: "UX system",
    title: "Mobile-first, app-like, premium.",
    body: "Every page is built mobile-first. Sticky bottom CTAs keep the request flow one tap away. Filters collapse into a drawer. Cards stack cleanly. The hero ships with a fictional product dashboard mockup so the first frame communicates that this is a product, not a landing page.",
  },
  {
    n: "06",
    label: "Marketplace structure",
    title: "City → Venue → Drop → Request.",
    body: "The browsable inventory is fully data-driven: cities, fictional venues, and limited access drops live as structured data. Filtering by city, mood, access type, status, and demand happens in-page. The same data shape can re-skin for restaurants, charter services, private clubs, and concierge marketplaces.",
  },
  {
    n: "07",
    label: "Conversion flow",
    title: "Seven steps, one feeling.",
    body: "The request flow is a seven-step option-card form: city, access type, party size and date, vibe, budget, contact, review. Each step qualifies the lead. The review screen reduces abandonment. The confirmation is portfolio-safe and explains the system logic instead of pretending to confirm a real booking.",
  },
  {
    n: "08",
    label: "Motion and interaction",
    title: "Cinematic, restrained, on purpose.",
    body: "Motion is built for premium feel: cinematic hero entrance, soft scroll reveals, glowing card hovers, status pulse indicators, ambient blurred light orbs, and a subtle grain layer. No bouncy startup motion, no neon, no 3D. Reduced-motion preferences are respected.",
  },
  {
    n: "09",
    label: "Technical build",
    title: "Next.js 14, TypeScript, Tailwind, Framer Motion.",
    body: "Built with the App Router, server components, structured data files, and reusable UI primitives. The design system lives in Tailwind tokens and a small set of components (LuxuryButton, GlassPanel, StatusBadge, MotionReveal, FilterChips, etc.). Deployable on Vercel out of the box.",
  },
  {
    n: "10",
    label: "Client-customizable system",
    title: "One architecture, many businesses.",
    body: "The same system structure adapts to restaurant reservations, private event booking, charter and travel, real estate showings, private clubs, concierge marketplaces, wedding vendors, and local service routing. Inventory shape, request fields, and tier logic re-skin without rebuilding the product.",
  },
  {
    n: "11",
    label: "What this proves",
    title: "Real product thinking, end to end.",
    body: "The Afterlist is built to demonstrate that I can take a brand idea, design a premium system, structure a marketplace, design a conversion flow, ship a polished mobile-first frontend, and frame the whole thing in a portfolio-safe way. The goal is not a website. It is a product object.",
  },
];

export default function CaseStudyPage() {
  return (
    <div className="max-w-5xl mx-auto px-5 md:px-8">
      <PageHeader
        eyebrow="Case study · The Afterlist"
        title="A fictional luxury nightlife access product system."
        description="Designed and built by Eric Jokl as a portfolio demonstration of premium brand, marketplace structure, conversion-focused UX, and mobile-first frontend."
      />

      <div className="mb-14 flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.22em] text-ivory-soft">
        {[
          "Concept · Fictional",
          "Eight cities",
          "Three tiers",
          "Seven-step request",
          "Mobile-first",
          "Vercel-deployable",
        ].map((t) => (
          <span
            key={t}
            className="rounded-full ring-1 ring-smoke bg-charcoal-light/40 px-3 py-1.5 backdrop-blur"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="space-y-3 md:space-y-4">
        {sections.map((s, i) => (
          <MotionReveal key={s.n} delay={i * 0.03}>
            <article className="rounded-2xl border border-smoke bg-charcoal/50 backdrop-blur-md p-6 md:p-9 hover:border-champagne/30 transition-colors">
              <div className="grid grid-cols-12 gap-4 md:gap-8">
                <div className="col-span-12 md:col-span-3">
                  <p className="font-mono text-[11px] tracking-[0.22em] text-ivory-dim">
                    {s.n} · {s.label}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <h2 className="font-display text-2xl md:text-[34px] tracking-tightest text-ivory leading-[1.05]">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-base text-ivory-soft leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </div>
            </article>
          </MotionReveal>
        ))}
      </div>

      <section className="mt-20 rounded-3xl border border-smoke bg-gradient-to-br from-charcoal/80 to-ink p-8 md:p-12 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-champagne/[0.06] blur-3xl pointer-events-none" />
        <div className="relative">
          <p className="text-[10px] uppercase tracking-[0.32em] text-champagne mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-champagne/60" />
            Available for select projects
          </p>
          <h3 className="font-display text-3xl md:text-5xl tracking-tightest text-ivory leading-[1.05]">
            Build the private layer{" "}
            <span className="italic champagne-text">behind the experience.</span>
          </h3>
          <p className="mt-5 max-w-2xl text-base text-ivory-soft leading-relaxed">
            If you are a hospitality group, concierge service, luxury brand, or premium
            local marketplace, the same architecture re-skins into your category. I take a
            limited number of projects per quarter.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LuxuryLink href="https://ericjokl.com" external arrow>
              Visit EricJokl.com
            </LuxuryLink>
            <LuxuryLink href="/request" variant="secondary" arrow>
              Try the request flow
            </LuxuryLink>
          </div>
        </div>
      </section>

      <div className="mt-16">
        <DisclaimerBanner variant="full" />
      </div>
    </div>
  );
}
