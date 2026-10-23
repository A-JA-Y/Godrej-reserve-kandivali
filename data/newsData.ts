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
    id: "godrej-reserve-construction-update-2026",

    /* SEO */
    title:
      "Godrej Reserve Kandivali Construction Update: ~50% Complete, Possession Targeted for June 2030",
    slug: "godrej-reserve-kandivali-construction-update-2026",
    excerpt:
      "Construction at Godrej Properties' 18.6-acre Kandivali East project was about half complete as of July 2026, with possession targeted for June 2030 and a MahaRERA completion date of December 2030.",
    metaTitle:
      "Godrej Reserve Construction Update 2026 | Possession Date & RERA Status",
    metaDescription:
      "Godrej Reserve Kandivali was ~50% complete as of July 2026. Possession is targeted for June 2030; MahaRERA completion date December 2030. Timeline, RERA numbers and what it means for buyers.",
    keywords: [
      "godrej reserve possession date",
      "godrej reserve kandivali",
      "godrej reserve rera number",
      "godrej reserve construction status",
      "godrej reserve kandivali east",
    ],
    canonical: "/news/godrej-reserve-kandivali-construction-update-2026",

    /* Display */
    image: "/images/godrej-reserve-podium-greens.webp",
    altText: "Aerial view of the podium greens at Godrej Reserve, Kandivali East — artist's impression",
    date: "2026-10-23",
    updatedAt: "2026-10-23",
    author: "Admin",
    category: "Project Update",
    readTime: "4 min read",
    featured: true,
    tags: ["godrej reserve", "construction update", "possession", "maharera", "kandivali east"],

    /* Extra */
    location: "Kandivali East, Mumbai",
    newsType: "Project",
  },
];

export default NewsData;
