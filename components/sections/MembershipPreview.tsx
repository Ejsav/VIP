import { membershipTiers } from "@/data/membership";
import { MembershipTierCard } from "@/components/cards/MembershipTierCard";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function MembershipPreview() {
  return (
    <section
      id="membership"
      className="relative py-20 md:py-28 border-t border-smoke/40 overflow-hidden"
    >
      <div className="absolute inset-x-0 -top-40 h-[40rem] bg-[radial-gradient(ellipse_at_center,rgba(201,169,97,0.05),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative">
        <MotionReveal>
          <div className="max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.32em] text-champagne mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-champagne/60" />
              Membership
            </p>
            <h2 className="font-display text-4xl md:text-6xl leading-[0.95] tracking-tightest text-ivory">
              A membership model{" "}
              <span className="italic champagne-text">built for status and segmentation.</span>
            </h2>
            <p className="mt-5 text-base text-ivory-soft leading-relaxed">
              Three demo tiers create priority, scarcity, repeat usage, higher-intent leads,
              and cleaner segmentation. The same structure adapts to any premium service
              that needs to route demand by tier.
            </p>
          </div>
        </MotionReveal>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {membershipTiers.map((tier, i) => (
            <MembershipTierCard
              key={tier.id}
              tier={tier}
              highlighted={tier.id === "select"}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
