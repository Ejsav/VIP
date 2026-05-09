import Link from "next/link";
import { cn } from "@/lib/cn";
import { ArrowUpRight } from "lucide-react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-champagne text-obsidian hover:bg-champagne-bright shadow-glow-champagne",
  secondary:
    "bg-charcoal-light/60 text-ivory border border-smoke hover:border-champagne/50 hover:text-champagne backdrop-blur-md",
  ghost:
    "text-ivory-soft hover:text-champagne",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-xs tracking-[0.18em]",
  md: "px-6 py-3 text-[11px] tracking-[0.22em]",
  lg: "px-8 py-4 text-xs tracking-[0.24em]",
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  children: ReactNode;
  className?: string;
};

type ButtonProps = BaseProps &
  Omit<ComponentPropsWithoutRef<"button">, "children" | "className">;
type LinkProps = BaseProps & { href: string; external?: boolean };

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-full font-sans uppercase font-medium transition-all duration-300 ease-out select-none";

export function LuxuryButton({
  variant = "primary",
  size = "md",
  arrow,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(baseClass, variants[variant], sizes[size], className)}
      {...rest}
    >
      <span>{children}</span>
      {arrow && <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />}
    </button>
  );
}

export function LuxuryLink({
  variant = "primary",
  size = "md",
  arrow,
  href,
  external,
  className,
  children,
}: LinkProps) {
  const cls = cn(baseClass, variants[variant], sizes[size], className);
  const inner = (
    <>
      <span>{children}</span>
      {arrow && <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />}
    </>
  );
  if (external) {
    return (
      <a className={cls} href={href} target="_blank" rel="noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <Link className={cls} href={href}>
      {inner}
    </Link>
  );
}
