import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import Amenities from "@/components/Amenities";
import ModalWrapper from "@/components/ModalWrapper";
import EnquireButton from "@/components/EnquireButton";
import StickyDownloadButton from "@/components/StickyButton";
import clubhousePoolDeck from "@/assets/clubhouse-pool-deck.webp";
import amphitheatre from "@/assets/amphitheatre.webp";
import kidsPlay from "@/assets/kids-play-area.webp";
import meditationZone from "@/assets/meditation-zone.webp";
import centralGarden from "@/assets/central-garden.webp";
import greenAcres from "@/assets/zone-green-acres.webp";
import { pageMetadata } from "@/utils/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Godrej Reserve Amenities | 40+ Resort Amenities & 57,000 sq.ft.* Clubhouse",
  description:
    "Godrej Reserve amenities — Olympic-length pool, aqua gym, 57,000 sq.ft.* clubhouse, squash, cricket turf, spa, amphitheatre and 6 acres of themed greens in Kandivali East.",
  path: "/amenities",
});

const amenityGroups = [
  {
    title: "Aquatic & Wellness",
    items: [
      "Olympic-length lap pool",
      "Temperature-controlled pool",
      "Massage pool",
      "Kids' pool",
      "Aqua gym",
      "Spa & salon space",
      "Sauna & steam",
      "Jacuzzi",
      "Yoga & meditation zone",
      "Reflexology path",
      "Herbal/sensory garden",
    ],
  },
  {
    title: "Sports & Fitness",
    items: [
      "Fully equipped gymnasium",
      "Squash court",
      "Badminton courts",
      "Cricket turf & practice pitch",
      "Basketball/multi-sport court",
      "Jogging track",
      "Cycling track",
      "Rock-climbing wall",
      "Aerobics/dance studio",
    ],
  },
  {
    title: "Clubhouse & Social",
    items: [
      "~57,000 sq.ft.* clubhouse",
      "Banquet/multipurpose halls",
      "Mini theatre / AV room",
      "Indoor games room",
      "Reading lounge/library",
      "Co-working space",
      "Guest suites",
      "Café / poolside F&B",
      "Crèche space",
      "Senior-citizen zone",
      "500-seat* amphitheatre",
    ],
  },
  {
    title: "Outdoors",
    items: [
      "~6 acres of two-level greens",
      "Nature trails & bird-watching zones",
      "Central garden & lush lawns",
      "Party lawns & picnic zones",
      "Kids' adventure play areas",
      "Gazebos & nature sit-outs",
      "Pet-friendly corners",
    ],
  },
  {
    title: "Everyday Assurance",
    items: [
      "Multi-tier security with CCTV & access control",
      "Video door phones",
      "24x7 power backup for common areas",
      "High-speed lifts (7 per wing)",
      "Rainwater harvesting & STP",
      "IGBC-aligned green design",
      "E-deck arrival plaza",
      "Podium & covered parking",
    ],
  },
];

const gallery = [
  { src: clubhousePoolDeck, caption: "Clubhouse & pool deck" },
  { src: amphitheatre, caption: "Amphitheatre" },
  { src: kidsPlay, caption: "Kids' play area" },
  { src: meditationZone, caption: "Meditation zone" },
  { src: centralGarden, caption: "Central garden" },
  { src: greenAcres, caption: "Green Acres" },
];

export default function AmenitiesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Amenities", path: "/amenities" }]} />
      <PageBanner
        eyebrow="Lifestyle"
        title="Amenities at Godrej Reserve"
        subtitle="Godrej Reserve backs its “endless vacation” promise with more than 40 amenities spread across the ~57,000 sq.ft.* clubhouse, the two-level podium greens and the towers themselves."
      />

      <ModalWrapper />
      <Amenities />

      {/* Full amenity list */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {amenityGroups.map((group) => (
              <div
                key={group.title}
                className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#DCA54A] last:md:col-span-2"
              >
                <h2 className="text-2xl! font-bold text-gray-900 mb-4 leading-tight">{group.title}</h2>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-gray-700 bg-white border border-[#e5dcc5] rounded-full px-3 py-1.5"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-500 mt-8">
            *As per project collateral; final amenity mix per Agreement for Sale.
          </p>
          <p className="text-gray-700 mt-3">
            Check where each amenity sits on the{" "}
            <Link href="/master-plan" className="text-[#DCA54A] hover:underline font-medium">
              Master Plan
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bold text-gray-900 text-center mb-10 leading-tight">Amenities Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((image) => (
              <figure key={image.caption} className="relative aspect-square rounded-lg overflow-hidden shadow-md group">
                <Image
                  src={image.src}
                  alt={`${image.caption} at Godrej Reserve, Kandivali East`}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 50vw, 360px"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent text-white text-sm font-medium px-4 pb-3 pt-10">
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="text-[11px] text-gray-500 mt-4 text-center">
            Images are artist&apos;s impressions / representative, as published by the developer.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-bold text-black mb-6 leading-tight">Experience the Amenities in Person</h2>
          <p className="text-lg text-black mb-8 leading-relaxed">
            Book a site visit to the Godrej Reserve sales lounge on Akurli Road — walk the master
            plan, the show flat and the podium greens.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <EnquireButton className="px-8 py-4 bg-[#DCA54A] text-white font-semibold rounded-lg hover:bg-[#c9953a] transition-colors text-lg cursor-pointer">
              Book Site Visit
            </EnquireButton>
            <Link
              href="/location"
              className="px-8 py-4 border-2 border-[#DCA54A] text-[#DCA54A] font-semibold rounded-lg hover:bg-[#DCA54A] hover:text-white transition-colors text-lg"
            >
              View Location
            </Link>
          </div>
        </div>
      </section>
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
