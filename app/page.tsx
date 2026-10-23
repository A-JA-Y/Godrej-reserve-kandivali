import dynamic from "next/dynamic";
// import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ReraStrip from "@/components/QRsectionsm";
import ContactForm from "@/components/ContactForm";
import ModalWrapper from "@/components/ModalWrapper";
import HomePageHeader from "@/components/HomePageHeader";

// Lazy load below-the-fold components
const AboutProject = dynamic(() => import("@/components/AboutProject"));
const Amenities = dynamic(() => import("@/components/Amenities"));
const GaurTownship = dynamic(() => import("@/components/GaurTownship"));
const ReasonsToInvest = dynamic(() => import("@/components/ReasonToInvest"));
const VillaFeatures = dynamic(() => import("@/components/PremiumInventory"));
const PlansSection = dynamic(() => import("@/components/FloorPlan"));
const EmiCalculator = dynamic(() => import("@/components/EmiCalculator"));
const LocationAdvantages = dynamic(() => import("@/components/LocationAdvantages"));
const WalkThroughVideo = dynamic(() => import("@/components/WalkThroughVideo"));
const BlogSection = dynamic(() => import("@/components/BlogSection"));
const NewsSection = dynamic(() => import("@/components/NewsSection"));
const EnquirySection = dynamic(() => import("@/components/EnquirySection"));
const QRSection = dynamic(() => import("@/components/QRSections"));
const StickyDownloadButton = dynamic(() => import("@/components/StickyButton"));
const Footer = dynamic(() => import("@/components/Footer"));
const FloatingWhatsapp = dynamic(()=>import("@/components/FloatingWhatsapp"));
const FloatingCall = dynamic(()=>import("@/components/FloatingcallButton"));

export default function Home() {
  return (
    <div className="w-full">
      <h1 className="hidden">
        Godrej Golf Links Greater Noida – Luxury Villas by Godrej Properties Greater Noida
      </h1>

      {/* SCHEMA START */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.godrejgolflink.in/",
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: "Godrej Golf Links",
            image: "https://www.godrejgolflink.in/godrej-hero.webp",
            "@id": "https://www.godrejgolflink.in/",
            url: "https://www.godrejgolflink.in/",
            telephone: "",
            priceRange: "₹3Cr+",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Godrej Golf Links",
              addressLocality: "Greater Noida",
              postalCode: "201301",
              addressCountry: "IN",
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Where is Godrej Golf Links located?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Godrej Golf Links is located in Greater Noida, Uttar Pradesh.",
                },
              },
              {
                "@type": "Question",
                name: "What is the price of villas in Godrej Golf Links?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The price of villas starts from approximately ₹3 Crore onwards.",
                },
              },
              {
                "@type": "Question",
                name: "Is Godrej Golf Links a good investment?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, due to its premium location, golf township concept, and brand value, it offers strong ROI potential.",
                },
              },
            ],
          }),
        }}
      />
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

        <AboutProject  heading={false}/>
        <Amenities />
        <GaurTownship />
        <ReasonsToInvest />
        <VillaFeatures />
        <PlansSection />
        <EmiCalculator />
        <LocationAdvantages />
        <WalkThroughVideo />
        <BlogSection />
        <NewsSection />
        <EnquirySection />
        <QRSection />
      </main>
      <StickyDownloadButton />
      <FloatingCall />
      <FloatingWhatsapp />
      <Footer />
    </div>
  );
}
