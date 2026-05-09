import { Lock } from "lucide-react";
import { DISCLAIMER_FULL } from "@/lib/copy";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function PortfolioSafeNotice() {
  return (
    <section className="relative py-20 md:py-28 border-t border-smoke/40 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[30rem] bg-[radial-gradient(ellipse_at_top,rgba(122,20,40,0.06),transparent_60%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 md:px-8 relative">
        <MotionReveal>
          <div className="rounded-3xl border border-smoke bg-charcoal/60 backdrop-blur-xl p-8 md:p-14 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />
            <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-velvet/[0.08] blur-3xl pointer-events-none" />

            <div className="flex items-center gap-3 mb-6">
              <span className="h-9 w-9 rounded-full ring-1 ring-champagne/40 bg-charcoal-light/60 flex items-center justify-center text-champagne">
                <Lock className="w-4 h-4" strokeWidth={1.5} />
              </span>
              <p className="text-[10px] uppercase tracking-[0.32em] text-champagne">
                Concept notice · Portfolio framing
              </p>
            </div>

            <h2 className="font-display text-4xl md:text-5xl leading-[1.0] tracking-tightest text-ivory max-w-3xl">
              A fictional concept{" "}
              <span className="italic champagne-text">with real product logic.</span>
            </h2>

            <p className="mt-6 text-base md:text-lg text-ivory-soft leading-relaxed max-w-3xl">
              {DISCLAIMER_FULL}
            </p>

            <div className="mt-8 pt-6 border-t border-smoke/60 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.32em] text-ivory-dim">
                  Designed and built by
                </p>
                <p className="mt-1 font-display text-xl text-ivory">Eric Jokl</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.32em] text-ivory-dim">
                  Status
                </p>
                <p className="mt-1 font-display text-xl text-ivory">Concept · Demo only</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.32em] text-ivory-dim">
                  Use
                </p>
                <p className="mt-1 font-display text-xl text-ivory">
                  Portfolio demonstration
                </p>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
