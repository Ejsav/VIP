"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Send,
  MapPin,
  Sparkles,
  Users,
  Calendar,
  Wine,
  DollarSign,
  Mail,
  ClipboardCheck,
  CheckCircle2,
} from "lucide-react";
import { cities } from "@/data/cities";
import { accessTypes } from "@/data/accessTypes";
import { CONFIRMATION_MESSAGE } from "@/lib/copy";
import { cn } from "@/lib/cn";

type FormState = {
  city: string;
  accessType: string;
  date: string;
  partySize: string;
  occasion: string;
  vibe: string;
  budgetRange: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
  tier: string;
};

const initial: FormState = {
  city: "",
  accessType: "",
  date: "",
  partySize: "",
  occasion: "",
  vibe: "",
  budgetRange: "",
  name: "",
  email: "",
  phone: "",
  notes: "",
  tier: "guest",
};

const partySizeOptions = [
  "1 to 2",
  "3 to 4",
  "5 to 6",
  "7 to 10",
  "11 to 14",
  "15 to 20",
  "20+",
];

const occasionOptions = [
  { value: "Casual night out", icon: "✦" },
  { value: "Birthday", icon: "✦" },
  { value: "Business", icon: "✦" },
  { value: "Date night", icon: "✦" },
  { value: "Bachelor / Bachelorette", icon: "✦" },
  { value: "Special celebration", icon: "✦" },
  { value: "VIP visitor", icon: "✦" },
];

const vibeOptions = [
  { value: "Editorial / quiet luxury", desc: "Tailored, slow tempo." },
  { value: "Late tempo / lounge", desc: "Music led, post-midnight." },
  { value: "High-energy / club", desc: "Driving floor, peak tempo." },
  { value: "Rooftop / open-air", desc: "View first, slow build." },
  { value: "Members / private", desc: "Closed door, controlled room." },
];

const budgetOptions = [
  { value: "Under $1,000", tier: "Guest", note: "Standard guest list level." },
  { value: "$1,000 – $2,500", tier: "Select", note: "Tables and small groups." },
  { value: "$2,500 – $5,000", tier: "Select", note: "Premium tables, mid-tier." },
  { value: "$5,000 – $10,000", tier: "Select / Black Card", note: "Hosted nights." },
  { value: "$10,000+", tier: "Black Card", note: "Concierge-level routing." },
];

const steps = [
  { n: 1, label: "City", icon: MapPin },
  { n: 2, label: "Access", icon: Sparkles },
  { n: 3, label: "Party", icon: Users },
  { n: 4, label: "Vibe", icon: Wine },
  { n: 5, label: "Budget", icon: DollarSign },
  { n: 6, label: "Contact", icon: Mail },
  { n: 7, label: "Review", icon: ClipboardCheck },
];

export function RequestForm() {
  const params = useSearchParams();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);

  // Prefill from URL
  useEffect(() => {
    const next: Partial<FormState> = {};
    const c = params.get("city");
    const at = params.get("accessType");
    const tier = params.get("tier");
    if (c && cities.find((x) => x.slug === c)) next.city = c;
    if (at && accessTypes.find((x) => x.id === at)) next.accessType = at;
    if (tier) next.tier = tier;
    if (Object.keys(next).length) {
      setData((d) => ({ ...d, ...next }));
      // Skip to first incomplete step if prefilled
      if (next.city && !next.accessType) setStep(2);
      if (next.city && next.accessType) setStep(3);
    }
  }, [params]);

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setData((d) => ({ ...d, [k]: v }));

  const canAdvance = useMemo(() => {
    switch (step) {
      case 1:
        return !!data.city;
      case 2:
        return !!data.accessType;
      case 3:
        return !!data.partySize && !!data.date;
      case 4:
        return !!data.vibe && !!data.occasion;
      case 5:
        return !!data.budgetRange;
      case 6:
        return data.name.length >= 2 && /\S+@\S+\.\S+/.test(data.email);
      case 7:
        return true;
      default:
        return false;
    }
  }, [step, data]);

  const next = () => setStep((s) => Math.min(7, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  const submit = () => setSubmitted(true);
  const reset = () => {
    setData(initial);
    setStep(1);
    setSubmitted(false);
  };

  if (submitted) return <Confirmation data={data} onReset={reset} />;

  return (
    <div className="relative">
      <Stepper current={step} onJump={(n) => n < step && setStep(n)} />

      <div className="mt-8 md:mt-10 rounded-3xl border border-smoke bg-charcoal/60 backdrop-blur-xl shadow-panel">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
            className="p-6 md:p-10 min-h-[60vh] md:min-h-[55vh] flex flex-col"
          >
            {step === 1 && (
              <StepCity
                value={data.city}
                onChange={(v) => update("city", v)}
              />
            )}
            {step === 2 && (
              <StepAccess
                value={data.accessType}
                onChange={(v) => update("accessType", v)}
              />
            )}
            {step === 3 && (
              <StepParty
                size={data.partySize}
                date={data.date}
                onSize={(v) => update("partySize", v)}
                onDate={(v) => update("date", v)}
              />
            )}
            {step === 4 && (
              <StepVibe
                vibe={data.vibe}
                occasion={data.occasion}
                onVibe={(v) => update("vibe", v)}
                onOccasion={(v) => update("occasion", v)}
              />
            )}
            {step === 5 && (
              <StepBudget
                value={data.budgetRange}
                onChange={(v) => update("budgetRange", v)}
              />
            )}
            {step === 6 && (
              <StepContact
                data={data}
                update={update}
              />
            )}
            {step === 7 && <StepReview data={data} />}

            <div className="mt-auto pt-8 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={back}
                disabled={step === 1}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-5 py-3 text-[11px] uppercase tracking-[0.22em] transition-all",
                  step === 1
                    ? "text-ivory-dim cursor-not-allowed opacity-50"
                    : "text-ivory-soft hover:text-champagne ring-1 ring-smoke hover:ring-champagne/40"
                )}
              >
                <ChevronLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
                Back
              </button>

              {step < 7 ? (
                <button
                  type="button"
                  onClick={next}
                  disabled={!canAdvance}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-[11px] uppercase tracking-[0.22em] font-medium transition-all",
                    canAdvance
                      ? "bg-champagne text-obsidian hover:bg-champagne-bright shadow-glow-champagne"
                      : "bg-charcoal-light/40 text-ivory-dim ring-1 ring-smoke cursor-not-allowed"
                  )}
                >
                  Continue
                  <ChevronRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={submit}
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[11px] uppercase tracking-[0.22em] font-medium bg-champagne text-obsidian hover:bg-champagne-bright shadow-glow-champagne transition-all"
                >
                  Submit demo request
                  <Send className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="mt-5 text-center text-[11px] uppercase tracking-[0.22em] text-ivory-dim">
        Demo flow · No real booking is created
      </p>
    </div>
  );
}

/* ------------------------------- Stepper ------------------------------- */

function Stepper({
  current,
  onJump,
}: {
  current: number;
  onJump: (n: number) => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-ivory-dim mb-3">
        <span>Step {current} of 7</span>
        <span className="text-champagne">
          {steps.find((s) => s.n === current)?.label}
        </span>
      </div>
      <div className="flex gap-1">
        {steps.map((s) => (
          <button
            key={s.n}
            type="button"
            onClick={() => onJump(s.n)}
            aria-label={`Jump to step ${s.n}: ${s.label}`}
            className={cn(
              "h-1 flex-1 rounded-full transition-colors",
              s.n < current
                ? "bg-champagne"
                : s.n === current
                ? "bg-champagne"
                : "bg-smoke"
            )}
          />
        ))}
      </div>
      <div className="mt-4 hidden md:flex items-center justify-between text-[10px] uppercase tracking-[0.22em]">
        {steps.map((s) => {
          const Icon = s.icon;
          const done = s.n < current;
          const active = s.n === current;
          return (
            <div
              key={s.n}
              className="flex items-center gap-2 flex-1 first:justify-start last:justify-end"
            >
              <span
                className={cn(
                  "h-6 w-6 rounded-full ring-1 flex items-center justify-center transition-colors",
                  done
                    ? "bg-champagne text-obsidian ring-champagne"
                    : active
                    ? "bg-charcoal-light/60 text-champagne ring-champagne/40"
                    : "bg-charcoal-light/40 text-ivory-dim ring-smoke"
                )}
              >
                {done ? (
                  <Check className="w-3 h-3" strokeWidth={2} />
                ) : (
                  <Icon className="w-3 h-3" strokeWidth={1.5} />
                )}
              </span>
              <span className={cn(active ? "text-ivory" : done ? "text-ivory-soft" : "text-ivory-dim")}>
                {s.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* -------------------------------- Steps -------------------------------- */

function StepHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-7 md:mb-9">
      <p className="text-[10px] uppercase tracking-[0.32em] text-champagne mb-3 flex items-center gap-3">
        <span className="h-px w-8 bg-champagne/60" />
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl md:text-5xl tracking-tightest text-ivory leading-[1.05]">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-sm md:text-base text-ivory-soft leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

function OptionCard({
  selected,
  onClick,
  children,
  className,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative text-left rounded-xl border p-4 md:p-5 transition-all duration-300 group",
        selected
          ? "border-champagne/60 bg-champagne/[0.06] shadow-glow-soft"
          : "border-smoke bg-charcoal-light/40 hover:border-champagne/30",
        className
      )}
    >
      {selected && (
        <span className="absolute top-3 right-3 h-5 w-5 rounded-full bg-champagne text-obsidian flex items-center justify-center">
          <Check className="w-3 h-3" strokeWidth={2.5} />
        </span>
      )}
      {children}
    </button>
  );
}

function StepCity({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <>
      <StepHeading
        eyebrow="Step 01 · City"
        title="Where do you want the night?"
        description="Each city carries its own demand signal and routing logic. Choose the market for the request."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {cities.map((c) => (
          <OptionCard
            key={c.slug}
            selected={value === c.slug}
            onClick={() => onChange(c.slug)}
          >
            <div className="flex items-center justify-between gap-3">
              <p className="font-display text-xl md:text-2xl tracking-tight text-ivory">
                {c.name}
              </p>
              <span className="text-[10px] uppercase tracking-[0.22em] text-ivory-soft">
                {c.region}
              </span>
            </div>
            <p className="mt-1.5 text-xs text-ivory-soft leading-relaxed line-clamp-2">
              {c.headline}
            </p>
            <p className="mt-3 text-[10px] uppercase tracking-[0.22em] text-champagne">
              {c.demandLevel} · {c.leadTime}
            </p>
          </OptionCard>
        ))}
      </div>
    </>
  );
}

function StepAccess({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <>
      <StepHeading
        eyebrow="Step 02 · Access"
        title="What kind of night is this?"
        description="The access type controls which fields the form captures next."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
        {accessTypes.map((a) => (
          <OptionCard
            key={a.id}
            selected={value === a.id}
            onClick={() => onChange(a.id)}
          >
            <p className="font-display text-xl tracking-tight text-ivory">{a.name}</p>
            <p className="mt-1 text-xs text-ivory-soft leading-relaxed">{a.short}</p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {a.collects.map((c) => (
                <li
                  key={c}
                  className="text-[10px] uppercase tracking-[0.16em] text-ivory-soft bg-charcoal-light/60 ring-1 ring-smoke rounded-full px-2 py-0.5"
                >
                  {c}
                </li>
              ))}
            </ul>
          </OptionCard>
        ))}
      </div>
    </>
  );
}

function StepParty({
  size,
  date,
  onSize,
  onDate,
}: {
  size: string;
  date: string;
  onSize: (v: string) => void;
  onDate: (v: string) => void;
}) {
  const today = new Date().toISOString().slice(0, 10);
  return (
    <>
      <StepHeading
        eyebrow="Step 03 · Party"
        title="How big and when?"
        description="Party size and target date set the routing window."
      />
      <div className="grid gap-7">
        <div>
          <label className="text-[10px] uppercase tracking-[0.22em] text-ivory-dim mb-3 block">
            Party size
          </label>
          <div className="flex flex-wrap gap-2">
            {partySizeOptions.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => onSize(s)}
                className={cn(
                  "rounded-full px-4 py-2.5 text-sm transition-all border",
                  size === s
                    ? "bg-champagne text-obsidian border-champagne shadow-glow-champagne"
                    : "border-smoke bg-charcoal-light/40 text-ivory-soft hover:border-champagne/40 hover:text-champagne"
                )}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="date-input"
            className="text-[10px] uppercase tracking-[0.22em] text-ivory-dim mb-3 block"
          >
            Target date
          </label>
          <div className="relative max-w-sm">
            <Calendar
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-champagne pointer-events-none"
              strokeWidth={1.5}
            />
            <input
              id="date-input"
              type="date"
              min={today}
              value={date}
              onChange={(e) => onDate(e.target.value)}
              className="w-full rounded-xl bg-charcoal-light/40 border border-smoke focus:border-champagne/50 outline-none pl-11 pr-4 py-3.5 text-base text-ivory transition-colors [color-scheme:dark]"
            />
          </div>
          <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-ivory-dim">
            Lead time varies by city. Demo only — no real availability check.
          </p>
        </div>
      </div>
    </>
  );
}

function StepVibe({
  vibe,
  occasion,
  onVibe,
  onOccasion,
}: {
  vibe: string;
  occasion: string;
  onVibe: (v: string) => void;
  onOccasion: (v: string) => void;
}) {
  return (
    <>
      <StepHeading
        eyebrow="Step 04 · Vibe"
        title="What atmosphere are you after?"
        description="Vibe and occasion narrow the request to the right room style."
      />
      <div className="grid gap-7">
        <div>
          <label className="text-[10px] uppercase tracking-[0.22em] text-ivory-dim mb-3 block">
            Atmosphere
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {vibeOptions.map((v) => (
              <OptionCard
                key={v.value}
                selected={vibe === v.value}
                onClick={() => onVibe(v.value)}
                className="p-4"
              >
                <p className="text-sm text-ivory">{v.value}</p>
                <p className="text-[11px] text-ivory-soft mt-0.5">{v.desc}</p>
              </OptionCard>
            ))}
          </div>
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-[0.22em] text-ivory-dim mb-3 block">
            Occasion
          </label>
          <div className="flex flex-wrap gap-2">
            {occasionOptions.map((o) => (
              <button
                key={o.value}
                type="button"
                onClick={() => onOccasion(o.value)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition-all border",
                  occasion === o.value
                    ? "bg-champagne text-obsidian border-champagne shadow-glow-champagne"
                    : "border-smoke bg-charcoal-light/40 text-ivory-soft hover:border-champagne/40 hover:text-champagne"
                )}
              >
                {o.value}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function StepBudget({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <>
      <StepHeading
        eyebrow="Step 05 · Budget"
        title="What's the spend range?"
        description="Budget ranges qualify the request and route to the right tier."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        {budgetOptions.map((b) => (
          <OptionCard
            key={b.value}
            selected={value === b.value}
            onClick={() => onChange(b.value)}
          >
            <div className="flex items-center justify-between gap-3">
              <p className="font-display text-xl tracking-tight text-ivory">{b.value}</p>
              <span className="text-[10px] uppercase tracking-[0.22em] text-champagne ring-1 ring-champagne/30 bg-charcoal/40 rounded-full px-2 py-0.5">
                {b.tier}
              </span>
            </div>
            <p className="mt-1 text-xs text-ivory-soft">{b.note}</p>
          </OptionCard>
        ))}
      </div>
      <p className="mt-5 text-[11px] uppercase tracking-[0.22em] text-ivory-dim">
        Demo ranges only. No payment is collected at any step.
      </p>
    </>
  );
}

function StepContact({
  data,
  update,
}: {
  data: FormState;
  update: <K extends keyof FormState>(k: K, v: FormState[K]) => void;
}) {
  return (
    <>
      <StepHeading
        eyebrow="Step 06 · Contact"
        title="Who's the point person?"
        description="Used by the demo flow to show how a real platform would reply. No real outreach happens."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field
          label="Full name"
          required
          value={data.name}
          onChange={(v) => update("name", v)}
          placeholder="First Last"
        />
        <Field
          label="Email"
          required
          type="email"
          value={data.email}
          onChange={(v) => update("email", v)}
          placeholder="you@domain.com"
        />
        <Field
          label="Phone (optional)"
          type="tel"
          value={data.phone}
          onChange={(v) => update("phone", v)}
          placeholder="Optional"
        />
        <Field
          label="Tier preference"
          asSelect
          value={data.tier}
          onChange={(v) => update("tier", v)}
          options={[
            { value: "guest", label: "Guest" },
            { value: "select", label: "Select" },
            { value: "black-card", label: "Black Card" },
          ]}
        />
      </div>
      <div className="mt-5">
        <label className="text-[10px] uppercase tracking-[0.22em] text-ivory-dim mb-2 block">
          Anything else? (optional)
        </label>
        <textarea
          value={data.notes}
          onChange={(e) => update("notes", e.target.value)}
          rows={4}
          placeholder="Names of guests of honor, dietary, music notes, etc."
          className="w-full rounded-xl bg-charcoal-light/40 border border-smoke focus:border-champagne/50 outline-none px-4 py-3 text-sm text-ivory placeholder:text-ivory-dim transition-colors resize-none"
        />
      </div>
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  asSelect,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  asSelect?: boolean;
  options?: { value: string; label: string }[];
}) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.22em] text-ivory-dim mb-2 block">
        {label}
        {required && <span className="text-champagne ml-1">*</span>}
      </span>
      {asSelect && options ? (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-xl bg-charcoal-light/40 border border-smoke focus:border-champagne/50 outline-none px-4 py-3 text-sm text-ivory transition-colors [color-scheme:dark]"
        >
          {options.map((o) => (
            <option key={o.value} value={o.value} className="bg-charcoal text-ivory">
              {o.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-xl bg-charcoal-light/40 border border-smoke focus:border-champagne/50 outline-none px-4 py-3 text-sm text-ivory placeholder:text-ivory-dim transition-colors"
        />
      )}
    </label>
  );
}

function StepReview({ data }: { data: FormState }) {
  const city = cities.find((c) => c.slug === data.city);
  const access = accessTypes.find((a) => a.id === data.accessType);

  const rows: { label: string; value: string }[] = [
    { label: "City", value: city ? `${city.name} · ${city.region}` : "—" },
    { label: "Access type", value: access ? access.name : "—" },
    { label: "Date", value: data.date || "—" },
    { label: "Party size", value: data.partySize || "—" },
    { label: "Occasion", value: data.occasion || "—" },
    { label: "Atmosphere", value: data.vibe || "—" },
    { label: "Budget range", value: data.budgetRange || "—" },
    { label: "Tier", value: data.tier },
    { label: "Name", value: data.name },
    { label: "Email", value: data.email },
    { label: "Phone", value: data.phone || "—" },
    { label: "Notes", value: data.notes || "—" },
  ];

  return (
    <>
      <StepHeading
        eyebrow="Step 07 · Review"
        title="Review the request."
        description="One screen, full summary. This is where a real platform would qualify, route, and respond."
      />
      <div className="rounded-2xl border border-smoke bg-charcoal-light/40 divide-y divide-smoke/40">
        {rows.map((r) => (
          <div
            key={r.label}
            className="grid grid-cols-12 items-center gap-3 px-4 md:px-6 py-3.5"
          >
            <span className="col-span-5 md:col-span-4 text-[10px] uppercase tracking-[0.22em] text-ivory-dim">
              {r.label}
            </span>
            <span className="col-span-7 md:col-span-8 text-sm text-ivory truncate">
              {r.value}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-ivory-dim">
        On submit, the demo confirmation explains the system logic. No real booking is created.
      </p>
    </>
  );
}

/* ----------------------------- Confirmation ----------------------------- */

function Confirmation({
  data,
  onReset,
}: {
  data: FormState;
  onReset: () => void;
}) {
  const city = cities.find((c) => c.slug === data.city);
  const access = accessTypes.find((a) => a.id === data.accessType);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
      className="rounded-3xl border border-smoke bg-charcoal/60 backdrop-blur-xl p-7 md:p-12 relative overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne to-transparent" />
      <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-champagne/[0.08] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full bg-velvet/[0.06] blur-3xl pointer-events-none" />

      <div className="relative">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
          className="h-14 w-14 rounded-full bg-champagne/10 ring-1 ring-champagne/40 flex items-center justify-center text-champagne"
        >
          <CheckCircle2 className="w-6 h-6" strokeWidth={1.5} />
        </motion.div>

        <p className="mt-7 text-[10px] uppercase tracking-[0.32em] text-champagne flex items-center gap-3">
          <span className="h-px w-8 bg-champagne/60" />
          Demo request created
        </p>
        <h2 className="mt-3 font-display text-4xl md:text-6xl tracking-tightest text-ivory leading-[1.0]">
          Request received,{" "}
          <span className="italic champagne-text">in concept.</span>
        </h2>
        <p className="mt-5 max-w-2xl text-base text-ivory-soft leading-relaxed">
          {CONFIRMATION_MESSAGE}
        </p>

        <div className="mt-9 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          <Summary label="Routing" value={`${city?.name ?? "—"} · ${city?.region ?? ""}`} />
          <Summary label="Access" value={access?.name ?? "—"} />
          <Summary label="Window" value={`${data.partySize || "—"} · ${data.date || "—"}`} />
        </div>

        <div className="mt-9 grid grid-cols-1 md:grid-cols-2 gap-3">
          <button
            type="button"
            onClick={onReset}
            className="rounded-full border border-smoke bg-charcoal-light/40 px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-ivory-soft hover:border-champagne/40 hover:text-champagne transition-colors"
          >
            Start a new demo request
          </button>
          <a
            href="/case-study"
            className="rounded-full bg-champagne text-obsidian px-6 py-4 text-[11px] uppercase tracking-[0.22em] font-medium hover:bg-champagne-bright shadow-glow-champagne transition-all text-center inline-flex items-center justify-center gap-2"
          >
            Read the case study
            <ChevronRight className="w-3.5 h-3.5" strokeWidth={1.5} />
          </a>
        </div>

        <div className="mt-10 pt-7 border-t border-smoke/60">
          <p className="text-[10px] uppercase tracking-[0.32em] text-ivory-dim mb-3">
            What this demonstrates
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-ivory-soft">
            <li>· Premium UX and motion across a full request flow.</li>
            <li>· Marketplace structure with city, venue, and drop layers.</li>
            <li>· Conversion-focused steps with option cards and review.</li>
            <li>· Tier routing and lead qualification logic.</li>
            <li>· Mobile-first UI with sticky CTA and drawer filters.</li>
            <li>· Portfolio-safe framing throughout.</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function Summary({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-smoke bg-charcoal-light/40 px-4 py-3">
      <p className="text-[10px] uppercase tracking-[0.22em] text-ivory-dim">{label}</p>
      <p className="mt-1 text-sm text-ivory truncate">{value}</p>
    </div>
  );
}
