import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import ModalWrapper from "@/components/ModalWrapper";
import EnquireButton from "@/components/EnquireButton";
import StickyDownloadButton from "@/components/StickyButton";
import podiumGreens from "@/assets/podium-greens-aerial.webp";
import forestRetreat from "@/assets/zone-forest-retreat.webp";
import tropicalOasis from "@/assets/zone-tropical-oasis.webp";
import springTerraces from "@/assets/zone-spring-terraces.webp";
import greenAcres from "@/assets/zone-green-acres.webp";
import forestRetreatIcon from "@/assets/zone-icon-forest-retreat.webp";
import tropicalOasisIcon from "@/assets/zone-icon-tropical-oasis.webp";
import springTerracesIcon from "@/assets/zone-icon-spring-terraces.webp";
import greenAcresIcon from "@/assets/zone-icon-green-acres.webp";
import { pageMetadata } from "@/utils/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Godrej Reserve Master Plan | 18.6 Acres, 6 Towers, 6-Acre Greens",
  description:
    "Godrej Reserve master plan — 6 towers on 18.6 acres with ~6 acres of two-level landscaped greens, 4 themed zones, 57,000 sq.ft.* clubhouse and street-front retail plaza.",
  path: "/master-plan",
});

const zones = [
  {
    name: "Forest Retreat",
    image: forestRetreat,
    icon: forestRetreatIcon,
    body: "Dense native planting, nature trails, bird-watching corners and shaded sit-outs that borrow the mood of the Sanjay Gandhi National Park belt nearby.",
  },
  {
    name: "Tropical Oasis",
    image: tropicalOasis,
    icon: tropicalOasisIcon,
    body: "The resort core: the pool cluster (Olympic-length lap pool, massage pool, temperature-controlled pool, kids' pool and aqua gym) with poolside café space.",
  },
  {
    name: "Spring Terraces",
    image: springTerraces,
    icon: springTerracesIcon,
    body: "Stepped gardens over the podium with lawns, sensory garden and the amphitheatre.",
  },
  {
    name: "Green Acres",
    image: greenAcres,
    icon: greenAcresIcon,
    body: "Open play: cricket turf, courts, jogging and cycling loops, picnic lawns and kids' adventure play.",
  },
];

const linkClass = "text-[#c8922a] font-semibold hover:underline";

export default function MasterPlanPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Master Plan", path: "/master-plan" }]} />
      <PageBanner
        eyebrow="Master Plan"
        title="Godrej Reserve Master Plan"
        subtitle="Towers along the edges of 18.6 acres, with nearly 6 acres of landscaped greens across two levels at the heart of the site."
      />
      <ModalWrapper />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-gray-700 leading-relaxed text-lg">
            The Godrej Reserve master plan arranges six high-rise towers (five wings
            RERA-registered) along the edges of the 18.6-acre site, releasing the heart of the
            land — nearly 6 acres — as continuous landscaped open space across two levels. Around
            75%* of the site remains open, an exceptional figure for Kandivali East.
          </p>

          <figure className="relative w-full aspect-[13/6] rounded-lg overflow-hidden shadow-md mt-10">
            <Image
              src={podiumGreens}
              alt="Aerial view of the two-level podium greens and pool at Godrej Reserve"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
            <figcaption className="absolute bottom-2 right-3 text-[10px] text-white bg-black/40 px-2 py-0.5 rounded">
              Artist&apos;s impression
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="w-full bg-[#FAF8F4] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bold text-gray-900 text-center mb-12 leading-tight">
            Four Themed Landscape Zones
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {zones.map((zone, i) => (
              <article key={zone.name} className="bg-white rounded-lg overflow-hidden shadow-md border border-[#efe7d3]">
                <div className="relative aspect-[1166/550]">
                  <Image
                    src={zone.image}
                    alt={`${zone.name} landscape zone at Godrej Reserve`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 560px"
                  />
                  <span className="absolute top-3 left-3 bg-[#0B5842] text-[#E9C77B] text-xs font-semibold px-3 py-1 rounded-full">
                    Zone {i + 1}
                  </span>
                </div>
                <div className="p-6 flex gap-4 items-start">
                  <Image
                    src={zone.icon}
                    alt=""
                    className="w-14 h-14 flex-shrink-0 rounded-full bg-[#0B5842]"
                    sizes="56px"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{zone.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mt-2">{zone.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-gray-700 leading-relaxed">
            Street-front, the plan provides a retail plaza (450–2,500 sq.ft. units) so daily
            conveniences sit at the gate without traffic entering the residential podium. Parking is
            absorbed into the multi-level podium with an E-deck arrival experience.
          </p>
          <p className="text-xs text-gray-500 mt-4">*As per project collateral.</p>

          <div className="mt-10 bg-[#FAF8F4] border border-[#e5dcc5] rounded-lg p-6 md:p-8 text-center">
            <p className="text-gray-800 font-semibold">Walk the master plan at the sales lounge.</p>
            <EnquireButton className="mt-4 inline-block bg-[#DCA54A] hover:bg-[#C49A2B] text-white text-sm font-semibold tracking-widest uppercase px-8 py-3 rounded-md transition-colors cursor-pointer">
              Book Site Visit
            </EnquireButton>
            <p className="text-sm text-gray-600 mt-4">
              Browse everything the plan contains on the{" "}
              <Link href="/amenities" className={linkClass}>Amenities</Link> page.
            </p>
          </div>
        </div>
      </section>

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
