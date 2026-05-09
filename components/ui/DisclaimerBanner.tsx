import { Info } from "lucide-react";
import { DISCLAIMER_FULL, DISCLAIMER_SHORT } from "@/lib/copy";
import { cn } from "@/lib/cn";

export function DisclaimerBanner({
  variant = "full",
  className,
}: {
  variant?: "full" | "short";
  className?: string;
}) {
  const text = variant === "full" ? DISCLAIMER_FULL : DISCLAIMER_SHORT;
  return (
    <aside
      className={cn(
        "flex items-start gap-3 rounded-xl border border-smoke/70 bg-charcoal/60 backdrop-blur p-4 md:p-5",
        className
      )}
    >
      <Info
        className="mt-0.5 w-4 h-4 text-champagne shrink-0"
        strokeWidth={1.5}
      />
      <p className="text-xs md:text-[13px] leading-relaxed text-ivory-soft">
        <span className="text-ivory mr-2 font-medium">Concept notice.</span>
        {text}
      </p>
    </aside>
  );
}
