import { membershipTiers } from "@/data/membership";
import { MembershipTierCard } from "@/components/cards/MembershipTierCard";
import { PageHeader } from "@/components/ui/PageHeader";
import { DisclaimerBanner } from "@/components/ui/DisclaimerBanner";
import { Check, Minus } from "lucide-react";

const compareRows: { label: string; values: [boolean | string, boolean | string, boolean | string] }[] = [
  { label: "Browse cities and venues", values: [true, true, true] },
  { label: "View public access drops", values: [true, true, true] },
  { label: "Submit standard request", values: [true, true, true] },
  { label: "Saved party preferences", values: [false, true, true] },
  { label: "Priority request review", values: [false, true, true] },
  { label: "Early access to limited drops", values: [false, true, true] },
  { label: "Group planning tools (8+)", values: [false, true, true] },
  { label: "Members-first access drops", values: [false, false, true] },
  { label: "Concierge-style request UI", values: [false, false, true] },
  { label: "Multi-stop route planning", values: [false, false, true] },
  { label: "Private review queue", values: [false, false, true] },
  { label: "Off-menu and private room routing", values: [false, false, true] },
];

export default function MembershipPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <PageHeader
        eyebrow="Membership · Three tiers"
        title="Status, segmentation, and priority — by design."
        description="The Afterlist uses a three-tier membership model to create scarcity, repeat usage, higher-intent leads, and better segmentation. Demo tiers only — no real billing or accounts."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {membershipTiers.map((tier, i) => (
          <MembershipTierCard
            key={tier.id}
            tier={tier}
            highlighted={tier.id === "select"}
            index={i}
          />
        ))}
      </div>

      {/* Comparison table */}
      <section className="mt-20 rounded-3xl border border-smoke bg-charcoal/50 backdrop-blur-md overflow-hidden">
        <div className="px-6 md:px-8 pt-6 md:pt-8 pb-4 border-b border-smoke/60">
          <p className="text-[10px] uppercase tracking-[0.32em] text-champagne">
            Feature comparison
          </p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl tracking-tightest text-ivory">
            What each tier unlocks.
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr className="text-left text-[10px] uppercase tracking-[0.22em] text-ivory-dim">
                <th className="py-4 px-6 md:px-8 font-medium">Feature</th>
                <th className="py-4 px-6 font-medium">Guest</th>
                <th className="py-4 px-6 font-medium text-champagne">Select</th>
                <th className="py-4 px-6 font-medium text-velvet-bright">Black Card</th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row, i) => (
                <tr key={row.label} className="border-t border-smoke/40">
                  <td className="py-4 px-6 md:px-8 text-sm text-ivory">{row.label}</td>
                  {row.values.map((v, idx) => (
                    <td key={idx} className="py-4 px-6">
                      {v === true ? (
                        <Check
                          className={`w-4 h-4 ${
                            idx === 0
                              ? "text-ivory-soft"
                              : idx === 1
                              ? "text-champagne"
                              : "text-velvet-bright"
                          }`}
                          strokeWidth={2}
                        />
                      ) : v === false ? (
                        <Minus className="w-4 h-4 text-ivory-dim" strokeWidth={1.5} />
                      ) : (
                        <span className="text-sm text-ivory">{v}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 md:px-8 py-5 border-t border-smoke/60 text-[11px] uppercase tracking-[0.22em] text-ivory-dim">
          Demo tiers · fictional concept · no real billing or accounts
        </div>
      </section>

      {/* Why it matters */}
      <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-smoke bg-charcoal/50 backdrop-blur-md p-7 md:p-8">
          <p className="text-[10px] uppercase tracking-[0.32em] text-champagne mb-3">
            Why a tiered model
          </p>
          <h3 className="font-display text-2xl md:text-3xl tracking-tight text-ivory">
            Membership creates structure.
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-ivory-soft leading-relaxed">
            <li>· Priority for high-intent leads.</li>
            <li>· Scarcity around members-first drops.</li>
            <li>· Repeat-usage hooks via saved preferences.</li>
            <li>· Cleaner segmentation for routing.</li>
            <li>· Premium positioning across the network.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-smoke bg-charcoal/50 backdrop-blur-md p-7 md:p-8">
          <p className="text-[10px] uppercase tracking-[0.32em] text-champagne mb-3">
            Adapts for clients
          </p>
          <h3 className="font-display text-2xl md:text-3xl tracking-tight text-ivory">
            Re-skins for any premium service.
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-ivory-soft leading-relaxed">
            <li>· Hospitality groups · priority dining.</li>
            <li>· Charter and travel · tiered routing.</li>
            <li>· Wedding vendors · qualified inquiries.</li>
            <li>· Real estate · private showings.</li>
            <li>· Concierge marketplaces · routed by tier.</li>
          </ul>
        </div>
      </section>

      <div className="mt-16">
        <DisclaimerBanner variant="full" />
      </div>
    </div>
  );
}
