import { cn } from "@/lib/cn";
import { Lock } from "lucide-react";

export function ConceptBadge({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-charcoal-light/60 backdrop-blur-md px-3 py-1.5 ring-1 ring-smoke",
        className
      )}
    >
      <Lock className="w-3 h-3 text-champagne" strokeWidth={1.5} />
      <span className="text-[10px] uppercase tracking-[0.22em] text-ivory-soft">
        Fictional portfolio concept by{" "}
        <span className="text-champagne">Eric Jokl</span>
      </span>
    </div>
  );
}
