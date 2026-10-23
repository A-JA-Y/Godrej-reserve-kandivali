export type BlogMeta = {
  id: string;

  /* SEO */
  title: string;
  slug: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  canonical: string;
  altText?: string;

  /* Display */
  image: string;
  date: string;
  updatedAt: string;
  author: string;
  category: string;
  readTime: string;
  tags: string[];
  featured: boolean;

  /* JSON-LD */
  schemaMarkup?:
  | Record<string, unknown>
  | Record<string, unknown>[];
  faqSchema?: Record<string, unknown>;
};

export const blogData: BlogMeta[] = [
  {
    id: "godrej-reserve-buyers-guide-2026",

    /* SEO */
    title: "Godrej Reserve Kandivali East: Complete Buyer's Guide 2026",
    slug: "godrej-reserve-kandivali-east-buyers-guide-2026",
    excerpt:
      "Configurations, carpet areas, prices, payment plan, amenities, location, possession and RERA details for Godrej Reserve — Godrej Properties' 18.6-acre project in Kandivali East.",
    metaTitle:
      "Godrej Reserve Kandivali East Buyer's Guide 2026 | Price, Floor Plan, RERA",
    metaDescription:
      "Godrej Reserve Kandivali buyer's guide 2026 — 3 & 4 BHK carpet areas, price from ₹5.94 Cr*, payment plan, amenities, location, possession date and MahaRERA numbers.",
    keywords: [
      "godrej reserve kandivali",
      "godrej reserve kandivali east",
      "godrej reserve price",
      "godrej reserve floor plan",
      "godrej reserve possession date",
      "godrej reserve rera number",
      "3 bhk in kandivali east",
      "4 bhk in kandivali east",
    ],
    canonical: "/blogs/godrej-reserve-kandivali-east-buyers-guide-2026",

    /* Display */
    image: "/images/godrej-reserve-towers-wide.webp",
    altText: "Godrej Reserve towers rising above the podium greens in Kandivali East — artist's impression",
    date: "2026-10-23",
    updatedAt: "2026-10-23",
    author: "Admin",
    category: "Buyer Guide",
    readTime: "10 min read",
    tags: ["godrej reserve", "kandivali east", "3 bhk", "4 bhk", "godrej properties", "mumbai"],
    featured: true,

    /* JSON-LD */
    faqSchema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the carpet area of a 3 BHK at Godrej Reserve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "3 BHK residences range from 1,126 to 1,471 sq.ft. carpet: mid-size homes of 1,126–1,332 sq.ft. and grande homes of 1,450–1,471 sq.ft.",
          },
        },
        {
          "@type": "Question",
          name: "Are 2 BHK flats still available at Godrej Reserve Kandivali?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Only on a limited basis. The 750–822 sq.ft. 2 BHKs offered in the first phase are largely sold out; enquire for resale or new-wing releases.",
          },
        },
        {
          "@type": "Question",
          name: "How many homes are there on each floor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Each floor holds just eight residences, served by seven lifts per wing, in towers of approximately G+8P+51 floors.",
          },
        },
        {
          "@type": "Question",
          name: "What is the average price per sq.ft. at Godrej Reserve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "About ₹42,400 per sq.ft., against a Kandivali East average of roughly ₹31,750 per sq.ft. (SquareYards).",
          },
        },
        {
          "@type": "Question",
          name: "Which banks have approved Godrej Reserve for home loans?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SBI, HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra Bank, Bank of Baroda, Union Bank and others, with funding of up to 90% subject to eligibility.",
          },
        },
        {
          "@type": "Question",
          name: "Why are there two possession dates?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "June 2030 is the developer's target possession date; December 2030 is the completion date registered with MahaRERA.",
          },
        },
      ],
    },
  },
  {
    id: "godrej-reserve-price-analysis-2026",

    /* SEO */
    title: "Godrej Reserve Price vs the Kandivali East Average: What the Premium Buys",
    slug: "godrej-reserve-price-vs-kandivali-east-average",
    excerpt:
      "Godrej Reserve averages about ₹42,400 per sq.ft. against roughly ₹31,750 for Kandivali East. How to read the cost sheet — and what the premium pays for.",
    metaTitle:
      "Godrej Reserve Kandivali Price Analysis 2026 | Cost Sheet & Premium Explained",
    metaDescription:
      "Why Godrej Reserve Kandivali is priced at ~₹42,400/sq.ft. vs ~₹31,750 for Kandivali East — official ₹5.94 Cr* start price, all-in cost sheets, payment plan and what the premium buys.",
    keywords: [
      "godrej reserve price",
      "godrej reserve kandivali price",
      "luxury apartments in kandivali east",
      "godrej reserve kandivali",
      "godrej properties kandivali",
    ],
    canonical: "/blogs/godrej-reserve-price-vs-kandivali-east-average",

    /* Display */
    image: "/images/godrej-reserve-clubhouse-pool.webp",
    altText: "Pool and clubhouse at Godrej Reserve in the evening — artist's impression",
    date: "2026-10-23",
    updatedAt: "2026-10-23",
    author: "Admin",
    category: "Price Analysis",
    readTime: "7 min read",
    tags: ["godrej reserve", "price", "cost sheet", "kandivali east", "mumbai real estate"],
    featured: false,

    /* JSON-LD */
    faqSchema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why is Godrej Reserve priced above the Kandivali East average?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The project averages about ₹42,400 per sq.ft. against roughly ₹31,750 for Kandivali East. The premium reflects its 18.6-acre scale, ~6 acres of greens, private-deck homes, metro access and the Godrej brand.",
          },
        },
        {
          "@type": "Question",
          name: "Does the ₹5.94 Cr starting price include taxes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. ₹5.94 Cr.+* is an indicative agreement value; stamp duty, registration, GST and other charges are extra.",
          },
        },
        {
          "@type": "Question",
          name: "What is the price of a 4 BHK at Godrej Reserve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "All-inclusive market quotes place 4 BHKs (2,009–2,039 sq.ft. carpet) between about ₹8.90 Cr and ₹9.40 Cr. Request the current cost sheet for exact figures.",
          },
        },
        {
          "@type": "Question",
          name: "How much do I need to pay at booking?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "About 10% at booking under the construction-linked plan; all-in cost sheets report a minimum down payment of around ₹45 lakh.",
          },
        },
      ],
    },
  },
];
