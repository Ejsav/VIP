export type DemandLevel = "Quiet" | "Rising" | "High Demand" | "Members First";

export type AccessTypeId =
  | "guest-list"
  | "private-table"
  | "rooftop"
  | "private-room"
  | "birthday"
  | "group-entry"
  | "dinner-to-club"
  | "concierge-night";

export type AccessType = {
  id: AccessTypeId;
  name: string;
  short: string;
  description: string;
  collects: string[];
  icon: string; // lucide name
};

export type City = {
  id: string;
  name: string;
  slug: string;
  region: string;
  headline: string;
  description: string;
  mood: string[];
  accessTypes: AccessTypeId[];
  featuredVenueIds: string[];
  demandLevel: DemandLevel;
  bestNights: string[];
  leadTime: string;
  heroImageMood: string;
  signalNote: string;
};

export type VenueStatus =
  | "Limited Requests"
  | "Members First"
  | "Private Room Available"
  | "Waitlist Only"
  | "Open for Requests"
  | "Closing Soon"
  | "Private Review";

export type Venue = {
  id: string;
  name: string;
  slug: string;
  citySlug: string;
  cityName: string;
  type: string;
  mood: string[];
  accessLevel: "Guest" | "Select" | "Black Card";
  capacityStyle: string;
  accessOptions: AccessTypeId[];
  dressCode: string;
  requestWindow: string;
  demandLabel: string;
  status: VenueStatus;
  tagline: string;
  notes: string;
};

export type AccessDrop = {
  id: string;
  citySlug: string;
  cityName: string;
  venueId: string;
  venueName: string;
  dateLabel: string;
  accessType: AccessTypeId;
  status: VenueStatus;
  partySize: string;
  minTier: "Guest" | "Select" | "Black Card";
  deadline: string;
  description: string;
  ctaLabel: string;
  hoursLeft: number;
};

export type MembershipTier = {
  id: "guest" | "select" | "black-card";
  name: string;
  positioning: string;
  price: string;
  priceNote: string;
  features: string[];
  highlightFeatures: string[];
  badge: string;
};

/* ---------- Curated experiences + city style layer ---------- */

export type CityStyleId =
  | "miami-energy"
  | "nyc-private-room"
  | "vegas-table-service"
  | "la-rooftop"
  | "boston-supper-club"
  | "london-members-club"
  | "dubai-skyline"
  | "ibiza-late-night";

export type CityStyle = {
  id: CityStyleId;
  name: string;
  citySlug: string;
  cityName: string;
  region: string;
  shortLabel: string;
  description: string;
  signature: string[];
  tempo: "Editorial" | "Late-tempo" | "High-energy" | "Cinematic";
};

export type ExperienceStatus =
  | "Curated"
  | "Limited Window"
  | "Priority Route"
  | "Concierge Pick"
  | "Private Hold"
  | "High Demand";

export type Atmosphere =
  | "Editorial / Quiet luxury"
  | "Late tempo / Lounge"
  | "High-energy / Driving"
  | "Rooftop / Open-air"
  | "Members / Private";

export type GroupFit = "1-2" | "3-4" | "5-6" | "7-10" | "11-14" | "15-20" | "20+";

export type SpendRange =
  | "Under $1,000"
  | "$1,000 – $2,500"
  | "$2,500 – $5,000"
  | "$5,000 – $10,000"
  | "$10,000+";

export type Experience = {
  id: string;
  slug: string;
  name: string;
  cityStyle: CityStyleId;
  cityStyleName: string;
  accessType: AccessTypeId;
  accessTypeName: string;
  atmosphere: Atmosphere;
  groupFit: GroupFit[];
  spendRange: SpendRange[];
  status: ExperienceStatus;
  arrivalWindow: string;
  description: string;
  positioning: string;
  tags: string[];
  featured: boolean;
  minTier: "Guest" | "Select" | "Black Card";
};

/* ---------- Concierge request + match ---------- */

export type ConciergeRequest = {
  cityStyle?: CityStyleId | "";
  accessType?: AccessTypeId | "";
  atmosphere?: Atmosphere | "";
  groupSize?: GroupFit | "";
  spendRange?: SpendRange | "";
  arrivalWindow?: string;
  date?: string;
  occasion?: string;
  notes?: string;
  name?: string;
  email?: string;
  phone?: string;
  tier?: "guest" | "select" | "black-card";
};

export type MatchConfidence = "Light Match" | "Strong Match" | "Priority Match";

export type MatchResult = {
  experience: Experience;
  confidence: MatchConfidence;
  score: number; // 0-100
  why: string[];
  arrivalWindow: string;
  groupFitNote: string;
  spendNote: string;
  alternates: Experience[];
};
