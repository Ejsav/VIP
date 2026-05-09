/**
 * Verticals registry.
 *
 * Demonstrates that the same product system — typed data, marketplace cards,
 * concierge flow, matcher — re-skins for any premium hospitality vertical.
 * No real partnerships or live inventory. Copy is fictional and portfolio-safe.
 */

export type VerticalId = "nightlife" | "charter" | "restaurant" | "concierge";

export type VerticalSampleCard = {
  name: string;
  cityStyleName: string;
  accessTypeName: string;
  status:
    | "Curated"
    | "Limited Window"
    | "Priority Route"
    | "Concierge Pick"
    | "Private Hold"
    | "High Demand";
  arrivalWindow: string;
  groupFit: string;
  description: string;
  tags: string[];
};

export type Vertical = {
  id: VerticalId;
  name: string;
  shortLabel: string;
  productLabel: string; // "private nightlife access", etc.
  accent: {
    name: string;
    hex: string;
    bright: string;
  };
  hero: {
    eyebrow: string;
    titleA: string;
    titleAccent: string;
    titleB: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  curated: {
    eyebrow: string;
    titleA: string;
    titleAccent: string;
    description: string;
    samples: VerticalSampleCard[];
  };
  finalCta: {
    eyebrow: string;
    title: string;
    description: string;
  };
  noticeLine: string;
};

export const VERTICALS: Record<VerticalId, Vertical> = {
  nightlife: {
    id: "nightlife",
    name: "Nightlife Access",
    shortLabel: "Nightlife",
    productLabel: "private nightlife access",
    accent: {
      name: "Champagne",
      hex: "#c9a961",
      bright: "#e2c98a",
    },
    hero: {
      eyebrow: "Private access · Curated nights",
      titleA: "Private access,",
      titleAccent: "handled before",
      titleB: "you arrive.",
      description:
        "Built for nights that need more than a reservation. Request the room, the table, the list, or the route in.",
      primaryCta: "Request access",
      secondaryCta: "See curated experiences",
    },
    curated: {
      eyebrow: "Curated experiences · Routed access",
      titleA: "Access programs,",
      titleAccent: "already shaped.",
      description:
        "Each experience is a curated route — a city style, a room, a hosted spend, a window. The shape of inventory premium hospitality groups can run on.",
      samples: [],
    },
    finalCta: {
      eyebrow: "Start a request",
      title: "Routed before you arrive.",
      description:
        "Submit a fictional request and watch the system shape it in real time. No real booking is created.",
    },
    noticeLine:
      "A fictional luxury access system built to demonstrate premium UX and conversion architecture.",
  },

  charter: {
    id: "charter",
    name: "Private Charter",
    shortLabel: "Charter",
    productLabel: "private charter routing",
    accent: {
      name: "Platinum",
      hex: "#a8b5c4",
      bright: "#d6dee8",
    },
    hero: {
      eyebrow: "Private charter · Routed travel",
      titleA: "Private travel,",
      titleAccent: "routed before",
      titleB: "the wheels turn.",
      description:
        "Built for trips that need more than a manifest. Request the aircraft, the marine, the ground route, or the full transfer chain.",
      primaryCta: "Request a charter",
      secondaryCta: "See routing programs",
    },
    curated: {
      eyebrow: "Curated routing · Cleared charters",
      titleA: "Trip programs,",
      titleAccent: "already cleared.",
      description:
        "Each program is a curated route — a corridor, a craft style, a hosted spend, a clearance window. The shape of inventory a charter group can run on.",
      samples: [
        {
          name: "Mediterranean Yacht Hold",
          cityStyleName: "Riviera Corridor",
          accessTypeName: "Private Yacht",
          status: "Priority Route",
          arrivalWindow: "Dawn departure · 6 AM",
          groupFit: "6-12",
          description:
            "Held marine routing along the Riviera with on-board crew, cleared port slots, and a routed transfer chain.",
          tags: ["Yacht", "Routed transfer", "Cleared port"],
        },
        {
          name: "Cross-Atlantic Jet Plan",
          cityStyleName: "NY · LDN Corridor",
          accessTypeName: "Private Jet",
          status: "Concierge Pick",
          arrivalWindow: "Late evening · 10 PM",
          groupFit: "4-8",
          description:
            "Mid-cabin jet hold with cleared slots, fixed-base operator routing, and a discreet ground arrival.",
          tags: ["Jet", "FBO routed", "Cleared slot"],
        },
        {
          name: "Caribbean Multi-Stop",
          cityStyleName: "Caribbean Corridor",
          accessTypeName: "Hosted Charter",
          status: "Curated",
          arrivalWindow: "Mid-morning · 11 AM",
          groupFit: "8-14",
          description:
            "Three-stop routing across private islands with marine and rotary transfers held end-to-end.",
          tags: ["Multi-stop", "Marine + rotary", "Hosted"],
        },
      ],
    },
    finalCta: {
      eyebrow: "Start a charter request",
      title: "Routed before the wheels turn.",
      description:
        "Submit a fictional request and watch the routing shape in real time. No real charter is booked.",
    },
    noticeLine:
      "A fictional charter routing system built to demonstrate premium UX and routing architecture.",
  },

  restaurant: {
    id: "restaurant",
    name: "Members Restaurant",
    shortLabel: "Restaurant",
    productLabel: "private dining access",
    accent: {
      name: "Velvet",
      hex: "#b35265",
      bright: "#d4747e",
    },
    hero: {
      eyebrow: "Private dining · Members rooms",
      titleA: "Private dining,",
      titleAccent: "held before the",
      titleB: "doors open.",
      description:
        "Built for dinners that need more than a reservation. Request the private room, the chef's counter, the wine cellar, or the full closed wing.",
      primaryCta: "Request a table",
      secondaryCta: "See dining programs",
    },
    curated: {
      eyebrow: "Curated dining · Held rooms",
      titleA: "Dining programs,",
      titleAccent: "already routed.",
      description:
        "Each program is a curated room — a market style, a service style, a hosted spend, a held window. The shape of inventory a private dining group can run on.",
      samples: [
        {
          name: "Chef's Counter Hold",
          cityStyleName: "New York Editorial",
          accessTypeName: "Counter Service",
          status: "Priority Route",
          arrivalWindow: "First seating · 7 PM",
          groupFit: "2-6",
          description:
            "Held counter directly across from the pass with a paired tasting and a closed-room close.",
          tags: ["Counter", "Tasting", "Editorial"],
        },
        {
          name: "Cellar Dinner Routing",
          cityStyleName: "London Members",
          accessTypeName: "Private Cellar",
          status: "Private Hold",
          arrivalWindow: "Late seating · 9 PM",
          groupFit: "6-12",
          description:
            "Closed cellar room with a paired pour, named sommelier, and a routed after-dinner lounge.",
          tags: ["Cellar", "Sommelier", "Members"],
        },
        {
          name: "Closed Wing Reserve",
          cityStyleName: "Boston Supper Club",
          accessTypeName: "Closed Wing",
          status: "Curated",
          arrivalWindow: "First seating · 7 PM",
          groupFit: "12-20",
          description:
            "Whole dining wing reserved for a single party with tailored menu and a routed close-room transition.",
          tags: ["Closed wing", "Tailored menu", "Group"],
        },
      ],
    },
    finalCta: {
      eyebrow: "Start a dining request",
      title: "Held before the doors open.",
      description:
        "Submit a fictional request and watch the routing shape in real time. No real reservation is created.",
    },
    noticeLine:
      "A fictional members dining system built to demonstrate premium UX and dining-floor architecture.",
  },

  concierge: {
    id: "concierge",
    name: "Concierge Marketplace",
    shortLabel: "Concierge",
    productLabel: "concierge routing",
    accent: {
      name: "Warm Gold",
      hex: "#d6a04e",
      bright: "#e8be7a",
    },
    hero: {
      eyebrow: "Concierge marketplace · Multi-vertical",
      titleA: "The whole night,",
      titleAccent: "shaped through one",
      titleB: "concierge.",
      description:
        "Built for plans that touch every vertical. Request the dinner, the room, the route, the charter, the close — handled by one routing thread.",
      primaryCta: "Open a concierge thread",
      secondaryCta: "See routing programs",
    },
    curated: {
      eyebrow: "Curated routing · Multi-stop plans",
      titleA: "Concierge programs,",
      titleAccent: "already threaded.",
      description:
        "Each program is a curated multi-stop plan — dining, access, charter, transfer — routed through one thread, one named concierge, one window.",
      samples: [
        {
          name: "Birthday Multi-Route",
          cityStyleName: "Miami Energy",
          accessTypeName: "Concierge Plan",
          status: "Concierge Pick",
          arrivalWindow: "Sunset start · 7 PM",
          groupFit: "6-12",
          description:
            "Routed birthday plan: dinner held, rooftop cleared, late room closed, transfers locked. Single concierge thread.",
          tags: ["Multi-stop", "Birthday", "Threaded"],
        },
        {
          name: "Visiting Principal Plan",
          cityStyleName: "London Members",
          accessTypeName: "Concierge Plan",
          status: "Private Hold",
          arrivalWindow: "Three-night arc",
          groupFit: "2-4",
          description:
            "Three-night multi-vertical plan with members dining, private travel, and discreet ground routing.",
          tags: ["Principal", "Multi-vertical", "Discreet"],
        },
        {
          name: "Yacht Week Routing",
          cityStyleName: "Mediterranean",
          accessTypeName: "Concierge Plan",
          status: "Curated",
          arrivalWindow: "Seven-day arc",
          groupFit: "8-14",
          description:
            "Full week of marine routing with shore-side dining, rotary transfers, and held members rooms at every stop.",
          tags: ["Yacht week", "Multi-stop", "Hosted"],
        },
      ],
    },
    finalCta: {
      eyebrow: "Open a concierge thread",
      title: "One thread. The whole plan.",
      description:
        "Submit a fictional request and watch the multi-vertical routing shape in real time. No real plan is booked.",
    },
    noticeLine:
      "A fictional concierge marketplace built to demonstrate premium UX and multi-vertical routing.",
  },
};

export const VERTICAL_LIST: Vertical[] = [
  VERTICALS.nightlife,
  VERTICALS.charter,
  VERTICALS.restaurant,
  VERTICALS.concierge,
];

export const DEFAULT_VERTICAL: VerticalId = "nightlife";
