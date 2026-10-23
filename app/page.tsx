import type { Metadata } from "next";
import dynamic from "next/dynamic";
// import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ReraStrip from "@/components/QRsectionsm";
import ContactForm from "@/components/ContactForm";
import ModalWrapper from "@/components/ModalWrapper";
import HomePageHeader from "@/components/HomePageHeader";
import JsonLd from "@/components/JsonLd";
import { OG_IMAGE, PROJECT, SITE_URL, WALKTHROUGH_VIDEO_ID } from "@/data/project";
import { pageMetadata } from "@/utils/metadata";

// Lazy load below-the-fold components
const AboutProject = dynamic(() => import("@/components/AboutProject"));
const QuickFacts = dynamic(() => import("@/components/QuickFacts"));
const WhyGodrejReserve = dynamic(() => import("@/components/WhyGodrejReserve"));
const Amenities = dynamic(() => import("@/components/Amenities"));
const ConfigurationsSnapshot = dynamic(() => import("@/components/ConfigurationsSnapshot"));
const EmiCalculator = dynamic(() => import("@/components/EmiCalculator"));
const LocationAdvantages = dynamic(() => import("@/components/LocationAdvantages"));
const WalkThroughVideo = dynamic(() => import("@/components/WalkThroughVideo"));
const BlogSection = dynamic(() => import("@/components/BlogSection"));
const NewsSection = dynamic(() => import("@/components/NewsSection"));
const FaqSection = dynamic(() => import("@/components/FaqSection"));
const EnquirySection = dynamic(() => import("@/components/EnquirySection"));
const StickyDownloadButton = dynamic(() => import("@/components/StickyButton"));
const Footer = dynamic(() => import("@/components/Footer"));
const FloatingWhatsapp = dynamic(()=>import("@/components/FloatingWhatsapp"));
const FloatingCall = dynamic(()=>import("@/components/FloatingcallButton"));

export const metadata: Metadata = pageMetadata({
  title: "Godrej Reserve Kandivali East, Mumbai | 3 & 4 BHK from ₹5.94 Cr*",
  description:
    "Godrej Reserve Kandivali — 18.6-acre luxury project by Godrej Properties on Akurli Road, Kandivali East. 3 & 4 BHK with private decks, 6 acres of greens, 40+ amenities. RERA approved. Possession June 2030.",
  path: "/",
  keywords: [
    "godrej reserve kandivali",
    "godrej reserve kandivali east",
    "godrej reserve mumbai",
    "godrej properties kandivali",
    "luxury apartments in kandivali east",
    "3 bhk in kandivali east",
    "4 bhk in kandivali east",
  ],
});

const amenityNames = [
  "Olympic-length lap pool",
  "Temperature-controlled pool",
  "Massage pool",
  "Kids' pool",
  "Aqua gym",
  "~57,000 sq.ft. clubhouse",
  "~6 acres of landscaped open space",
  "Squash court",
  "Cricket turf",
  "Amphitheatre",
  "Jogging and cycling tracks",
  "Multi-tier security with CCTV",
];

const residenceSchema = {
  "@context": "https://schema.org",
  "@type": ["ApartmentComplex", "Product"],
  "@id": `${SITE_URL}/#residence`,
  name: "Godrej Reserve",
  description:
    "18.6-acre residential development by Godrej Properties on Akurli Road, Kandivali East, Mumbai, with 3 & 4 BHK residences with private decks, ~6 acres of landscaped greens and 40+ amenities.",
  url: `${SITE_URL}/`,
  image: `${SITE_URL}${OG_IMAGE.url}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${PROJECT.streetAddress}, ${PROJECT.locality}`,
    addressLocality: PROJECT.city,
    addressRegion: PROJECT.region,
    postalCode: PROJECT.postalCode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: PROJECT.geo.latitude,
    longitude: PROJECT.geo.longitude,
  },
  numberOfAccommodationUnits: { "@type": "QuantitativeValue", minValue: 1600 },
  amenityFeature: amenityNames.map((name) => ({
    "@type": "LocationFeatureSpecification",
    name,
    value: true,
  })),
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "INR",
    lowPrice: PROJECT.startingPriceValue,
    description: "3 BHK from ₹5.94 Cr (indicative agreement value; taxes and charges extra)",
  },
};

export default function Home() {
  return (
    <div className="w-full">
      {/* SCHEMA START */}
      <JsonLd data={residenceSchema} />
      {/* SCHEMA END */}

      <HomePageHeader />
      <Hero />
      <ReraStrip />

      <main className="w-full">
        <section className="md:px-[30px] md:py-[45px] md:relative top-[-98px]">
          <div className="md:block max-w-5xl m-auto">
            <ContactForm />
          </div>
        </section>

        <ModalWrapper />

        <AboutProject />
        <QuickFacts />
        <WhyGodrejReserve />
        <Amenities />
        <ConfigurationsSnapshot />
        <EmiCalculator />
        <LocationAdvantages />
        {WALKTHROUGH_VIDEO_ID && <WalkThroughVideo videoId={WALKTHROUGH_VIDEO_ID} />}
        <BlogSection />
        <NewsSection />
        <FaqSection />
        <EnquirySection />
      </main>
      <StickyDownloadButton />
      <FloatingCall />
      <FloatingWhatsapp />
      <Footer />
    </div>
  );
}
