import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Amenities from "@/components/Amenities";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = {
  title: "Godrej Golf Links Amenities | 9-Hole Golf, Clubhouse & Spa in Greater Noida",
  description:
    "Explore the Godrej Golf Links amenities — a 9-hole golf course, 55,000 sq. ft. clubhouse, heated pool, spa by Warren Tricomi & drive-in cinema at Godrej Golf Links Greater Noida.",
  alternates: { canonical: "https://www.godrejgolflink.in/amenities" },
};

export default function AmenitiesPage() {
  return (
    <>
      {/* Schema Markup - BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.godrejgolflink.in/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Amenities",
                "item": "https://www.godrejgolflink.in/amenities"
              }
            ]
          })
        }}
      />

      {/* Schema Markup - FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What amenities does Godrej Golf Links offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The headline amenities include a 9-hole golf course at the centre of the township, a master clubhouse spanning 55,000+ sq. ft. across multiple clubhouses, an indoor heated swimming pool, a gymnasium, a spa and salon, squash courts, a drive-in cinema, landscaped greens, jogging pathways, kids' play areas, and 24x7 security."
                }
              },
              {
                "@type": "Question",
                "name": "Does Godrej Golf Links have a golf course?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. The defining feature of Godrej Golf Links is an internationally designed 9-hole golf course. Villas wrap around it, so many homes get golf-facing views and added privacy."
                }
              },
              {
                "@type": "Question",
                "name": "How big is the clubhouse at Godrej Golf Links?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The township has an expansive master clubhouse of 55,000 sq. ft. spread across multiple clubhouses, housing fitness, sports, dining, and party facilities for residents."
                }
              },
              {
                "@type": "Question",
                "name": "Is there a swimming pool at Godrej Golf Links?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. There is a swimming centre with an indoor heated pool, so residents can swim comfortably through both winter and summer."
                }
              },
              {
                "@type": "Question",
                "name": "Are the spa and gym at Godrej Golf Links run by professional brands?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. The spa and salon are operated by Warren Tricomi and the gymnasium is curated by Holyfield, bringing international wellness standards into the township."
                }
              },
              {
                "@type": "Question",
                "name": "What sports and recreation facilities are available at Godrej Golf Links?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Beyond golf, residents have access to squash courts, multipurpose sports courts, a fitness gym, jogging pathways, and landscaped open greens. A drive-in cinema adds a unique entertainment option."
                }
              },
              {
                "@type": "Question",
                "name": "Do all villa residents get access to the amenities at Godrej Golf Links?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Residents across the villa clusters get access to the golf course, clubhouses, pool, spa, gym, and sports facilities, along with the gated security infrastructure."
                }
              },
              {
                "@type": "Question",
                "name": "Is Godrej Golf Links a gated and secure community?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. It is a gated township with 24x7 security personnel and surveillance. The internal layout keeps vehicle traffic out of living zones, making it safe for children to play outdoors."
                }
              },
              {
                "@type": "Question",
                "name": "Are the amenities at Godrej Golf Links ready and operational?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Major phases are completed with families already living in the township, and the golf course and core amenities are operational. Possession across most clusters began in 2024. Buyers are advised to confirm the status of their specific cluster."
                }
              },
              {
                "@type": "Question",
                "name": "Where is Godrej Golf Links located and what is nearby?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Godrej Golf Links is in Sector 27, Greater Noida, near Pari Chowk, close to the Aqua Line metro and the Noida-Greater Noida Expressway. Top schools, hospitals, and malls are nearby, and the upcoming Noida International Airport at Jewar is roughly 30 to 45 minutes away."
                }
              }
            ]
          })
        }}
      />

      {/* Schema Markup - Local Business / RealEstateAgent */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "@id": "https://www.godrejgolflink.in/#realestateagent",
            "name": "Godrej Golf Links - Authorised Channel Partner",
            "description": "Authorised channel partner for Godrej Golf Links, a premium golf-centric villa township by Godrej Properties in Sector 27, Greater Noida.",
            "url": "https://www.godrejgolflink.in/",
            "image": "https://www.godrejgolflink.in/godrej-hero.webp",
            "telephone": "+91-9810890353",
            "priceRange": "₹₹₹",
            "areaServed": {
              "@type": "Place",
              "name": "Greater Noida, Uttar Pradesh"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "601, SL Tower, 6th Floor, Alpha Commercial Belt",
              "addressLocality": "Greater Noida",
              "addressRegion": "Uttar Pradesh",
              "postalCode": "201310",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "28.4744",
              "longitude": "77.5040"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "10:00",
              "closes": "19:00"
            }
          })
        }}
      />

      {/* Page Banner with Hero Image */}
      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/100acre.webp"
            alt="Godrej Golf Links Amenities - Luxurious Township in Greater Noida"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Content */}
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <span className="inline-block text-[#DCA54A] text-sm md:text-base uppercase tracking-widest font-semibold mb-3">
            Lifestyle
          </span>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Amenities
          </h3>
          <p className="text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Curated amenities designed for wellness, recreation, entertainment, and everyday luxury within the township.
          </p>

        </div>
      </section>

      <ModalWrapper />
      <Amenities />

      {/* New Content Section */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* H1 */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Godrej Golf Links Amenities
          </h1>

          {/* Intro */}
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
            At Godrej Golf Links, amenities aren't an afterthought — they are the very foundation of the lifestyle.
            Imagine stepping out of your villa to a manicured fairway at dawn, enjoying a heated indoor swim through
            the winter, unwinding at an internationally branded spa by evening, and catching a film under the stars
            at a private drive-in cinema by night. That is the everyday reality the Godrej Golf Links amenities are
            designed to deliver.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            Set within one of Greater Noida's most prestigious golf-centric townships by Godrej Properties, this
            collection of world-class facilities transforms a residence into a complete living experience. Whether
            you're a family seeking space and recreation, a professional craving wellness and convenience, or an
            investor evaluating long-term lifestyle value, the amenities at Godrej Golf Links Greater Noida sit at
            the heart of what makes this address exceptional.
          </p>
        </div>
      </section>

      {/* A Lifestyle Township Section */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            A Lifestyle Township, Not Just a Home
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Most residential projects offer facilities. Godrej Golf Links Greater Noida offers an ecosystem.
            Spread across thoughtfully landscaped surroundings, the township weaves together sport, wellness,
            entertainment, hospitality, and security into a single, seamless environment where every need is anticipated.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            This integrated approach is what elevates the Godrej villas Greater Noida from premium homes into
            destinations in their own right. Here, the boundary between "home" and "resort" dissolves. A morning
            round of golf, an afternoon at the clubhouse, an evening spa session, and a late-night film all happen
            within the security of your own gated community — no commute, no compromise.
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link
              href="/about-godrej-golf-links"
              className="text-[#DCA54A] hover:underline font-medium"
            >
              About Godrej Golf Links →
            </Link>
            <Link
              href="/about-godrej-properties"
              className="text-[#DCA54A] hover:underline font-medium"
            >
              About Godrej Properties →
            </Link>
          </div>
        </div>
      </section>

      {/* The Signature Amenities Section */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            The Signature Godrej Golf Links Amenities
          </h2>
          <p className="text-lg text-center max-w-4xl mx-auto text-gray-700 mb-12">
            The amenities at Godrej Golf Links are organised around five pillars of premium living — sport, wellness,
            entertainment, hospitality, and safety. Each is curated in partnership with globally celebrated names,
            bringing international standards to everyday life in Greater Noida.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Amenity Card 1 - Golf Course */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-[#DCA54A]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">9-Hole Golf Course — The Defining Centrepiece</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The crown jewel of the Godrej Golf Links amenities is its private 9-hole golf course.
                Manicured fairways and landscaped greens wind through the township, offering residents
                an exclusive golfing lifestyle that is exceedingly rare in the Greater Noida real estate market.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mt-2">
                For golf enthusiasts, this means the course is quite literally at your doorstep — no club
                memberships elsewhere, no long drives to play a round. For every resident, the course delivers
                something just as valuable: uninterrupted green vistas, cleaner air, and a sense of openness
                that defines the golf-facing villa configurations here. Many of the V3, V4, and V5 villas are
                positioned to maximise these golf-facing views, a premium reflected in their long-term
                appreciation potential.
              </p>
            </div>

            {/* Amenity Card 2 - Swimming Pool */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-[#DCA54A]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Swimming Centre with Indoor Heated Pool</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                North India's seasons can be extreme, so the Godrej villas Greater Noida community enjoys
                a dedicated swimming centre featuring a climate-controlled, indoor heated pool. Swim
                comfortably through the cold Greater Noida winters and the peak of summer alike. It's wellness
                and recreation made truly year-round — ideal for fitness laps, family time, or simple relaxation.
              </p>
            </div>

            {/* Amenity Card 3 - Clubhouse */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-[#DCA54A]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">55,000 Sq. Ft. Clubhouse Across 4 Clubhouses</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Social life at Godrej Golf Links revolves around an expansive 55,000 sq. ft. of clubhouse
                space, thoughtfully distributed across four separate clubhouses. These are the township's
                beating heart — venues for dining, celebrations, community gatherings, and quiet evenings alike.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mt-2">
                With multiple clubhouses rather than a single hub, the community avoids crowding and ensures
                that recreation, events, and everyday socialising always have room to breathe. It's an
                infrastructure scale that few projects in Godrej Golf Links Greater Noida can match.
              </p>
            </div>

            {/* Amenity Card 4 - Spa */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-[#DCA54A]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Spa & Salon by Warren Tricomi</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Wellness reaches a global standard with a spa and salon operated by Warren Tricomi, an
                internationally acclaimed luxury grooming and rejuvenation brand. Residents enjoy
                world-class treatments, styling, and self-care without ever leaving the township — a level
                of indulgence that turns routine grooming into a genuine retreat.
              </p>
            </div>

            {/* Amenity Card 5 - Gymnasium */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-[#DCA54A]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Gymnasium by Holyfield</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Fitness at Godrej Golf Links is anchored by a state-of-the-art gymnasium curated by the
                globally renowned Holyfield name. Equipped for strength training, cardio, and personalised
                fitness programmes, the facility brings professional-grade infrastructure into your daily
                routine, complementing the active lifestyle that the golf course and swimming centre encourage.
              </p>
            </div>

            {/* Amenity Card 6 - Drive-in Cinema */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-[#DCA54A]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Drive-In Cinema</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                In a township full of firsts, the private drive-in cinema stands out as a uniquely
                memorable amenity. A large-format, open-air entertainment experience reserved exclusively
                for residents, it brings a touch of cinematic nostalgia and novelty to community life —
                perfect for family movie nights and social weekends.
              </p>
            </div>

            {/* Amenity Card 7 - Squash Courts */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-[#DCA54A]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Squash Courts</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                For high-energy sport beyond the golf course, professionally designed squash courts
                give residents a space for competitive play and fitness. It's part of a broader sporting
                ecosystem that makes the Godrej Golf Links amenities appealing to active families and
                individuals alike.
              </p>
            </div>

            {/* Amenity Card 8 - Concierge */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-[#DCA54A]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Concierge Service & Hospitality by Spree</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Everyday convenience is elevated through a premium concierge service and curated hospitality
                delivered by Spree. From managing daily errands to coordinating services, this resort-style
                hospitality layer means residents of the Godrej villas Greater Noida experience the ease of
                a five-star stay within their own home.
              </p>
            </div>

            {/* Amenity Card 9 - Security */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-[#DCA54A]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">24×7 Security & Surveillance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Underpinning every luxury is the assurance of safety. Round-the-clock security personnel
                and advanced surveillance systems protect the township at all hours, giving families
                complete peace of mind. It's the foundation that allows every other amenity to be enjoyed
                freely and without worry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Stand Apart Section */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why the Godrej Golf Links Amenities Stand Apart
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            What truly distinguishes Godrej Golf Links Greater Noida is the calibre of its partnerships.
            Rather than generic in-house facilities, the township brings in globally celebrated specialists —
            Warren Tricomi for the spa and salon, Holyfield for the gymnasium, and Spree for hospitality.
            Each partner imports international standards directly into your daily life.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Layer onto this the rare luxury of a private 9-hole golf course, four clubhouses spanning
            55,000 sq. ft., and an exclusive drive-in cinema, and the result is a lifestyle proposition
            that is difficult to replicate anywhere else in the region. For investors, these branded,
            high-quality amenities are also a powerful driver of long-term value.
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link
              href="/price"
              className="text-[#DCA54A] hover:underline font-medium"
            >
              View Pricing →
            </Link>
            <Link
              href="/villas-configurations"
              className="text-[#DCA54A] hover:underline font-medium"
            >
              Villas & Configurations →
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Amenities That Complement an Unbeatable Location
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            The Godrej Golf Links amenities are made even more valuable by where they sit. The township enjoys
            strong road and metro connectivity and lies close to the upcoming Noida International Airport,
            while top schools, hospitals, and retail destinations are all within easy reach. Together, the
            internal amenities and external social infrastructure create a genuinely self-sufficient lifestyle.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/location-connectivity"
              className="px-6 py-3 bg-[#DCA54A] text-white rounded-lg hover:bg-[#c9953a] transition-colors font-medium"
            >
              View Location & Connectivity
            </Link>
            <Link
              href="/floor-plans"
              className="px-6 py-3 border-2 border-[#DCA54A] text-[#DCA54A] rounded-lg hover:bg-[#DCA54A] hover:text-white transition-colors font-medium"
            >
              Explore Floor Plans
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20  bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Experience the Godrej Golf Links Lifestyle
          </h2>
          <p className="text-lg md:text-xl text-black mb-6 leading-relaxed">
            From a private 9-hole golf course and four world-class clubhouses to an indoor heated pool,
            internationally branded spa, and a one-of-a-kind drive-in cinema, every element of the
            Godrej Golf Links amenities is designed to elevate everyday living. This is more than a
            collection of facilities — it is an invitation to live fully, surrounded by greenery,
            comfort, and the trusted legacy of Godrej Properties.
          </p>
          <p className="text-lg text-black mb-8 leading-relaxed">
            Make Godrej Golf Links your address and step into a community built around wellness,
            recreation, and uncompromising luxury in the heart of Greater Noida.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="px-8 py-4 bg-[#DCA54A] text-white font-semibold rounded-lg hover:bg-[#c9953a] transition-colors text-lg"
            >
              Enquire Now
            </Link>
            <Link
              href="/blogs"
              className="px-8 py-4 border-2 border-[#DCA54A] text-[#DCA54A] font-semibold rounded-lg hover:bg-[#DCA54A] hover:text-white transition-colors text-lg"
            >
              Blog & News
            </Link>
          </div>
        </div>
      </section>
      <div className="relative">
        <StickyDownloadButton />
      </div>

      {/* Your Existing Amenities Component */}

    </>
  );
}