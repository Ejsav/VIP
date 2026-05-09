import { Suspense } from "react";
import { RequestForm } from "@/components/request/RequestForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { DisclaimerBanner } from "@/components/ui/DisclaimerBanner";

export const metadata = {
  title: "Request Access · The Afterlist",
  description:
    "Submit a fictional request for guest list, private table, rooftop, private room, or concierge night plan. Demo flow only — no real booking is created.",
};

export default function RequestPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 md:px-8">
      <PageHeader
        eyebrow="Request access · Demo flow"
        title="Submit a fictional request."
        description="Seven steps. Mobile-first. Built to demonstrate how a premium platform could collect, qualify, and route demand. No real booking is created."
      />

      <Suspense fallback={<RequestFormFallback />}>
        <RequestForm />
      </Suspense>

      <div className="mt-16">
        <DisclaimerBanner variant="full" />
      </div>
    </div>
  );
}

function RequestFormFallback() {
  return (
    <div className="rounded-3xl border border-smoke bg-charcoal/60 backdrop-blur-xl p-12 min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block h-2 w-2 rounded-full bg-champagne animate-ping-soft" />
        <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-ivory-soft">
          Loading request flow…
        </p>
      </div>
    </div>
  );
}
