import { accessTypes } from "@/data/accessTypes";
import { AccessTypeCard } from "@/components/cards/AccessTypeCard";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function AccessTypes() {
  return (
    <section className="relative py-20 md:py-28 border-t border-smoke/40">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <MotionReveal>
          <div className="max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.32em] text-champagne mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-champagne/60" />
              Request types
            </p>
            <h2 className="font-display text-4xl md:text-6xl leading-[0.95] tracking-tightest text-ivory">
              One request flow{" "}
              <span className="italic champagne-text">for every kind of night.</span>
            </h2>
            <p className="mt-5 text-base text-ivory-soft leading-relaxed">
              Every access type collects different fields, but the experience is a single,
              premium flow. Built so the same system can route a guest list, a private
              table, a rooftop, or a full concierge night plan.
            </p>
          </div>
        </MotionReveal>

        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {accessTypes.map((t, i) => (
            <AccessTypeCard key={t.id} type={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
