import { PageHeader } from "@/components/ui/PageHeader";
import { DisclaimerBanner } from "@/components/ui/DisclaimerBanner";
import { LuxuryLink } from "@/components/ui/LuxuryButton";
import { MotionReveal } from "@/components/ui/MotionReveal";
import {
  MapPin,
  Sparkles,
  Users,
  FileCheck,
  Send,
  Filter,
  Shield,
  Crown,
} from "lucide-react";

const flow = [
  {
    n: "01",
    icon: MapPin,
    title: "Browse cities",
    body: "The network spans eight cities. Each carries its own demand signal, lead time, mood mix, and access types. Browsing is the first qualification layer.",
  },
  {
    n: "02",
    icon: Sparkles,
    title: "Explore fictional venues",
    body: "Marketplace-style cards reveal status, mood, access level, capacity, dress code, and request window. Each venue routes to the request flow with context preselected.",
  },
  {
    n: "03",
    icon: Filter,
    title: "View access drops",
    body: "Limited drops display deadlines, party-size ranges, minimum tier, and routing status. Scarcity is structured, not invented.",
  },
  {
    n: "04",
    icon: Send,
    title: "Submit a request",
    body: "Seven-step request flow captures city, access type, party size, date, vibe, budget, and contact. Built mobile-first with option cards instead of dropdowns.",
  },
  {
    n: "05",
    icon: Shield,
    title: "Routed by signal",
    body: "Requests sort by city, access type, budget, date, party size, and tier. The same routing logic adapts to any premium service that handles structured demand.",
  },
  {
    n: "06",
    icon: FileCheck,
    title: "Premium confirmation",
    body: "A polished demo confirmation screen explains the system logic. No real booking is created — the flow is fictional and exists to demonstrate UX, not to transact.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="max-w-6xl mx-auto px-5 md:px-8">
      <PageHeader
        eyebrow="How it works · Six layers"
        title="A premium request flow, built like a product."
        description="The Afterlist demonstrates how a luxury booking system could move guests from city to confirmed request through one structured experience."
      />

      <ol className="grid gap-3 md:gap-4">
        {flow.map((s, i) => {
          const Icon = s.icon;
          return (
            <MotionReveal key={s.n} delay={i * 0.04}>
              <li className="group relative grid grid-cols-12 items-start md:items-center gap-4 md:gap-6 rounded-2xl border border-smoke bg-charcoal/50 backdrop-blur-md px-5 md:px-7 py-5 md:py-7 hover:border-champagne/30 transition-colors">
                <div className="col-span-2 md:col-span-1">
                  <span className="font-display text-2xl md:text-3xl text-ivory-dim group-hover:text-champagne transition-colors">
                    {s.n}
                  </span>
                </div>
                <div className="col-span-10 md:col-span-1 flex md:justify-center">
                  <span className="h-9 w-9 rounded-full ring-1 ring-smoke flex items-center justify-center bg-charcoal-light/60 text-champagne group-hover:ring-champagne/40 transition-colors">
                    <Icon className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                </div>
                <div className="col-span-12 md:col-span-3">
                  <h2 className="font-display text-xl md:text-2xl tracking-tight text-ivory">
                    {s.title}
                  </h2>
                </div>
                <div className="col-span-12 md:col-span-7">
                  <p className="text-sm md:text-base text-ivory-soft leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </li>
            </MotionReveal>
          );
        })}
      </ol>

      <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-smoke bg-charcoal/50 backdrop-blur-md p-7 md:p-8">
          <p className="text-[10px] uppercase tracking-[0.32em] text-champagne mb-3 flex items-center gap-2">
            <Users className="w-3 h-3" strokeWidth={1.5} /> Lead qualification
          </p>
          <h3 className="font-display text-2xl md:text-3xl tracking-tight text-ivory leading-tight">
            Every step qualifies the lead.
          </h3>
          <p className="mt-3 text-sm text-ivory-soft leading-relaxed">
            City selection narrows region. Access type narrows intent. Party size and date
            narrow capacity. Vibe narrows fit. Budget narrows tier. By the time a request
            is reviewed, the data is structured, complete, and routable.
          </p>
        </div>
        <div className="rounded-2xl border border-smoke bg-charcoal/50 backdrop-blur-md p-7 md:p-8">
          <p className="text-[10px] uppercase tracking-[0.32em] text-champagne mb-3 flex items-center gap-2">
            <Crown className="w-3 h-3" strokeWidth={1.5} /> Tier routing
          </p>
          <h3 className="font-display text-2xl md:text-3xl tracking-tight text-ivory leading-tight">
            Tier decides priority, not access.
          </h3>
          <p className="mt-3 text-sm text-ivory-soft leading-relaxed">
            Guest, Select, and Black Card change the queue, the visible drops, and the
            review window — but the request itself is the same structured object. The
            same architecture re-skins into private clubs, charter services, and
            concierge marketplaces.
          </p>
        </div>
      </section>

      <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
        <LuxuryLink href="/request" arrow size="lg">
          Start a request
        </LuxuryLink>
        <LuxuryLink href="/case-study" variant="secondary" arrow size="lg">
          Read the case study
        </LuxuryLink>
      </div>

      <div className="mt-16">
        <DisclaimerBanner variant="full" />
      </div>
    </div>
  );
}
