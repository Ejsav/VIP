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
