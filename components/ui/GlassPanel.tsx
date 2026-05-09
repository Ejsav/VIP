import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  as?: "div" | "section" | "article";
};

export function GlassPanel({
  children,
  className,
  glow = false,
  as: Tag = "div",
}: Props) {
  return (
    <Tag
      className={cn(
        "relative rounded-2xl bg-charcoal/60 backdrop-blur-xl border border-smoke/70",
        "shadow-panel",
        glow && "glow-border",
        className
      )}
    >
      {children}
    </Tag>
  );
}
