// Godrej Reserve facts shared by pages, JSON-LD and the footer.
// Figures follow the verified data sheet in the master content file (compiled 23 Oct 2026);
// update them here rather than in individual pages.

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

// Canonical origin for metadata, JSON-LD and the sitemap — server-side use only.
// Set NEXT_PUBLIC_SITE_URL to the live domain; on Vercel the project's production
// domain is used when it is not set.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (productionHost ? `https://${productionHost}` : "http://localhost:3000")
).replace(/\/+$/, "");

// Absolute URL of a page for JSON-LD. Pages are exported as folders (trailingSlash in
// next.config.ts), so page URLs end in "/" like their canonical URLs.
export const absolutePageUrl = (path) => `${SITE_URL}${path.replace(/\/?$/, "/")}`;

export const SITE_NAME = "Godrej Reserve Kandivali";

export const OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Godrej Reserve, Kandivali East — 3 & 4 BHK residences with private decks",
};

export const PROJECT = {
  name: "Godrej Reserve",
  developer: "Godrej Properties Limited",
  streetAddress: "Akurli Road, opp. Growel's 101 Mall",
  locality: "Kandivali East",
  city: "Mumbai",
  region: "Maharashtra",
  postalCode: "400101",
  // Approximate pin from the data sheet — verify before relying on it.
  geo: { latitude: 19.208, longitude: 72.868 },
  startingPrice: "₹5.94 Cr.+*",
  startingPriceValue: 59400000,
  possession: "June 2030 (target)",
};

export const MAHARERA_URL = "https://maharera.maharashtra.gov.in";

export const RERA_WINGS = [
  { wing: "Wing 1", number: "P51800054703" },
  { wing: "Wing 2", number: "P51800079457" },
  { wing: "Wing 3", number: "P51800055694" },
  { wing: "Wing 4", number: "P51800054691" },
  { wing: "Wing 5", number: "P51800054690" },
];

export const CONFIGURATIONS = [
  {
    type: "3 BHK",
    carpet: "1,126 – 1,471 sq.ft.",
    sizes: ["1,126", "1,149", "1,332", "1,450", "1,457", "1,471"],
    price: "₹5.94 Cr.+* onwards",
  },
  {
    type: "4 BHK",
    carpet: "2,009 – 2,039 sq.ft.",
    sizes: ["2,009", "2,033", "2,039"],
    price: "Price on request (market: ₹8.9 Cr+*)",
  },
  {
    type: "2 BHK",
    carpet: "750 – 822 sq.ft.",
    sizes: ["750", "766", "769", "822"],
    price: "Limited availability — enquire",
  },
];

export const SALES_LOUNGE = {
  address: "Sales Lounge, Godrej Reserve, Akurli Road, Kandivali (E), Mumbai 400101",
  grievanceEmail: "grievance.reserve@godrejproperties.com",
};

// Construction-linked payment plan (25:25:50) as quoted by the channel partner.
export const PAYMENT_PLAN = {
  ratio: "25 : 25 : 50",
  milestones: [
    { share: "10%", stage: "Booking amount" },
    { share: "15%", stage: "Within 45 days of booking" },
    { share: "25%", stage: "March 2027" },
    { share: "40%", stage: "On application of the Occupancy Certificate (OC)" },
    { share: "10%", stage: "On intimation of possession" },
  ],
};

export const PARTNER = {
  name: "Synergy Real",
  phoneDisplay: "+91 98201 98173",
  phone: "+919820198173",
  whatsapp: "919820198173",
  // The partner's MahaRERA agent registration number; printed in the footer once set.
  reraAgentNo: "",
  address: {
    streetAddress: "A/1705, Skyvista CHSL, Din Nagar, Municipal School Road, Andheri West",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400053",
    addressCountry: "IN",
  },
};

// Single-line office address for the footer and contact page.
export const PARTNER_ADDRESS_LINE = [
  PARTNER.address.streetAddress,
  `${PARTNER.address.addressLocality} ${PARTNER.address.postalCode}`,
  "India",
].join(", ");

// YouTube ID of an official Godrej Reserve film; the home-page walkthrough shows once set.
export const WALKTHROUGH_VIDEO_ID = "";

const mapQuery = "Godrej Reserve, Akurli Road, Kandivali East, Mumbai 400101";
export const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;
export const MAP_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;

export const whatsappLink = (message) =>
  `https://wa.me/${PARTNER.whatsapp}?text=${encodeURIComponent(message)}`;
