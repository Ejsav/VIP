// Centralized portfolio-safe copy + shared constants.

export const DISCLAIMER_FULL =
  "The Afterlist is a fictional nightlife access product concept designed and built by Eric Jokl for portfolio demonstration purposes. Venue names, access drops, memberships, and booking flows are sample content only. This is not an active booking service and does not represent real venue partnerships or guaranteed access.";

export const DISCLAIMER_SHORT =
  "Fictional product concept by Eric Jokl. No real venue partnerships, bookings, or live availability.";

export const CONFIRMATION_MESSAGE =
  "Demo request created. This fictional flow shows how a premium nightlife access platform could collect qualified demand, route requests, and create a luxury booking experience.";

export const TAGLINE = "Private access to the city after dark.";

export const NAV_LINKS = [
  { label: "Cities", href: "/cities" },
  { label: "Access Drops", href: "/access-drops" },
  { label: "Membership", href: "/membership" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Case Study", href: "/case-study" },
] as const;

export const FOOTER_LINKS = {
  product: [
    { label: "Cities", href: "/cities" },
    { label: "Venues", href: "/venues" },
    { label: "Access Drops", href: "/access-drops" },
    { label: "Membership", href: "/membership" },
    { label: "Request Access", href: "/request" },
  ],
  about: [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Case Study", href: "/case-study" },
    { label: "Concept Notice", href: "/concept-notice" },
  ],
  external: [
    { label: "EricJokl.com", href: "https://ericjokl.com" },
  ],
} as const;
