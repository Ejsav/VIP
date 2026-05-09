import { PageHeader } from "@/components/ui/PageHeader";
import { LuxuryLink } from "@/components/ui/LuxuryButton";
import { DISCLAIMER_FULL } from "@/lib/copy";
import { Lock, ShieldCheck, FileText } from "lucide-react";

const points = [
  {
    icon: ShieldCheck,
    title: "No real bookings are made.",
    body: "Submitting the request flow does not contact any venue, host, or operator. The confirmation screen exists only to demonstrate UX. No payment, calendar, or reservation system is triggered.",
  },
  {
    icon: FileText,
    title: "Venue names and drops are sample content.",
    body: "All venue names (Noir House, Velvet Room, Atlas Roof, etc.), city moods, access drops, dress codes, and member-tier features are fictional. They exist to demonstrate marketplace structure and request routing.",
  },
  {
    icon: Lock,
    title: "No partnerships are claimed.",
    body: "The Afterlist does not represent or imply real partnerships with any nightlife operator, hospitality group, restaurant, or concierge service. No operator has been onboarded, contracted, or paid.",
  },
];

export default function ConceptNoticePage() {
  return (
    <div className="max-w-4xl mx-auto px-5 md:px-8">
      <PageHeader
        eyebrow="Concept notice · Portfolio framing"
        title="A fictional concept with real product logic."
        description="The Afterlist is a portfolio demonstration. This page exists to keep the concept legally clean while still letting the product feel commercially believable."
      />

      <div className="rounded-3xl border border-smoke bg-charcoal/60 backdrop-blur-xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />
        <p className="text-[11px] uppercase tracking-[0.32em] text-champagne mb-5">
          Disclaimer
        </p>
        <p className="text-base md:text-lg text-ivory leading-relaxed">
          {DISCLAIMER_FULL}
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {points.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.title}
              className="rounded-2xl border border-smoke bg-charcoal/50 backdrop-blur-md p-6"
            >
              <span className="h-9 w-9 rounded-full ring-1 ring-smoke flex items-center justify-center bg-charcoal-light/60 text-champagne">
                <Icon className="w-4 h-4" strokeWidth={1.5} />
              </span>
              <h3 className="mt-4 font-display text-xl tracking-tight text-ivory leading-tight">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-ivory-soft leading-relaxed">{p.body}</p>
            </div>
          );
        })}
      </div>

      <section className="mt-12 rounded-2xl border border-smoke bg-charcoal/50 backdrop-blur-md p-7 md:p-9">
        <p className="text-[10px] uppercase tracking-[0.32em] text-champagne mb-3">
          About the concept
        </p>
        <h2 className="font-display text-3xl md:text-4xl tracking-tight text-ivory leading-tight">
          Why a fictional product, not a real launch.
        </h2>
        <p className="mt-4 text-base text-ivory-soft leading-relaxed">
          A fictional concept lets me move faster, design with full control, and explore
          a category without the operational weight of running a live booking service. It
          also lets the work serve its real purpose: showing that I can take an idea, build
          a brand, design a system, structure a marketplace, write a conversion flow, and
          ship a polished frontend that feels commercially believable.
        </p>
        <p className="mt-4 text-base text-ivory-soft leading-relaxed">
          If you are a hospitality group, concierge brand, or premium service business and
          the architecture is interesting for your category, the system can be customized
          and rebuilt for real use.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <LuxuryLink href="/case-study" arrow>
            Read the case study
          </LuxuryLink>
          <LuxuryLink href="https://ericjokl.com" external variant="secondary" arrow>
            EricJokl.com
          </LuxuryLink>
        </div>
      </section>
    </div>
  );
}
