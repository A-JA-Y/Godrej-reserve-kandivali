export type NewsMeta = {
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
  featured?: boolean;
  tags?: string[];

  /* Extra */
  location?: string;
  newsType?: string;

  /* Structured Data */
  schemaMarkup?: Record<string, unknown>;
  faqSchema?: Record<string, unknown>;
};

const NewsData: NewsMeta[] = [
  {
    id: "news-5",

    /* SEO */
    title:
      "Greater Noida Circle Rates Hiked for First Time in 9 Years — What It Means for Godrej Golf Links Villa Prices",
    slug: "greater-noida-circle-rate-hike-godrej-golf-links-2026",
    excerpt:
      "Greater Noida Authority approved a 3.58% circle rate hike after 9 years, impacting luxury villa pricing, stamp duty, and investment sentiment around Godrej Golf Links.",
    metaTitle:
      "Greater Noida Circle Rate Hike 2026 | Impact on Godrej Golf Links Villas",
    metaDescription:
      "Greater Noida circle rates increased by 3.58% after 9 years. Explore how the revision affects Godrej Golf Links villa prices, registration costs, and real estate investment outlook in 2026.",
    keywords: [
      "Greater Noida circle rate hike",
      "Godrej Golf Links",
      "Godrej Golf Links villa price",
      "Greater Noida luxury villas",
      "Jewar Airport real estate",
      "Yamuna Expressway property",
      "Godrej Golf Links Greater Noida",
      "circle rate 2026",
    ],
    canonical:
      "https://www.godrejgolflink.in/news/greater-noida-circle-rate-hike-godrej-golf-links-2026",

    /* Display */
    image: "/news-1.webp",
    altText:
      "Luxury villas and golf township at Godrej Golf Links Greater Noida after circle rate hike announcement",
    date: "2026-05-06",
    updatedAt: "2026-05-06",
    author: "Admin",
    category: "Real Estate News",
    readTime: "6 min read",
    featured: true,
    tags: [
      "greater noida",
      "circle rate",
      "godrej golf links",
      "luxury villas",
      "real estate",
      "investment",
      "yamuna expressway",
    ],

    /* Extra */
    location: "Greater Noida",
    newsType: "Market",

    /* Structured Data */
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline:
        "Greater Noida Circle Rates Hiked for First Time in 9 Years — What It Means for Godrej Golf Links Villa Prices",
      description:
        "Greater Noida Authority approved a 3.58% circle rate hike after 9 years, impacting luxury villa pricing and investment outlook around Godrej Golf Links.",
      image: ["https://godrejgolflink.in/images/news-1.webp"],
      datePublished: "2026-05-06",
      dateModified: "2026-05-06",
      author: {
        "@type": "Person",
        name: "Admin",
      },
      publisher: {
        "@type": "Organization",
        name: "Your Company",
        logo: {
          "@type": "ImageObject",
          url: "https://godrejgolflink.in/logo.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://godrejgolflink.in/news/greater-noida-circle-rate-hike-godrej-golf-links-2026",
      },
      articleSection: "Real Estate",
      keywords:
        "Greater Noida circle rate, Godrej Golf Links, luxury villas, Jewar Airport, Yamuna Expressway",
      about: [
        {
          "@type": "Place",
          name: "Greater Noida",
        },
        {
          "@type": "Residence",
          name: "Godrej Golf Links",
        },
      ],
    },
  },
];

export default NewsData;