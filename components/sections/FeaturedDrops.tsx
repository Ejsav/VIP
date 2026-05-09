import { accessDrops } from "@/data/accessDrops";
import { AccessDropCard } from "@/components/cards/AccessDropCard";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { LuxuryLink } from "@/components/ui/LuxuryButton";

export function FeaturedDrops() {
  const featured = accessDrops.slice(0, 6);
  return (
    <section className="relative py-20 md:py-28 border-t border-smoke/40 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[40rem] bg-[radial-gradient(ellipse_at_top,rgba(122,20,40,0.05),transparent_55%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative">
        <MotionReveal>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div className="max-w-2xl">
              <p className="text-[10px] uppercase tracking-[0.32em] text-velvet-bright mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-velvet/60" />
                Tonight's fictional drops
              </p>
              <h2 className="font-display text-4xl md:text-6xl leading-[0.95] tracking-tightest text-ivory">
                Limited access drops,{" "}
                <span className="italic champagne-text">designed for urgency.</span>
              </h2>
              <p className="mt-5 max-w-xl text-base text-ivory-soft leading-relaxed">
                Sample drops show how scarcity, deadlines, and tier-routed reviews can
                turn high-intent demand into a structured, premium booking flow.
              </p>
            </div>
            <div className="hidden md:block">
              <LuxuryLink href="/access-drops" variant="secondary" arrow>
                View all drops
              </LuxuryLink>
            </div>
          </div>
        </MotionReveal>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((d, i) => (
            <AccessDropCard key={d.id} drop={d} index={i} />
          ))}
        </div>

        <div className="mt-10 md:hidden">
          <LuxuryLink
            href="/access-drops"
            variant="secondary"
            arrow
            className="w-full"
          >
            View all drops
          </LuxuryLink>
        </div>
      </div>
    </section>
  );
}
