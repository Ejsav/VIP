import { cn } from "@/lib/cn";
import { MotionReveal } from "./MotionReveal";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: Props) {
  return (
    <header
      className={cn(
        "relative pt-32 md:pt-40 pb-12 md:pb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <MotionReveal>
        {eyebrow && (
          <div
            className={cn(
              "mb-6 text-[10px] uppercase tracking-[0.32em] text-champagne",
              align === "center" && "flex justify-center"
            )}
          >
            <span className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-champagne/60" />
              {eyebrow}
            </span>
          </div>
        )}
        <h1 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tightest text-ivory max-w-4xl">
          {title}
        </h1>
        {description && (
          <p
            className={cn(
              "mt-6 max-w-2xl text-base md:text-lg text-ivory-soft leading-relaxed",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        )}
      </MotionReveal>
    </header>
  );
}
