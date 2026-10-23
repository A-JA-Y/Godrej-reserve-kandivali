import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import ModalWrapper from "@/components/ModalWrapper";
import EnquireButton from "@/components/EnquireButton";
import StickyDownloadButton from "@/components/StickyButton";
import towersRender from "@/assets/godrej-reserve-hero.webp";
import podiumGreens from "@/assets/podium-greens-aerial.webp";
import { MAHARERA_URL, RERA_WINGS } from "@/data/project";
import { pageMetadata } from "@/utils/metadata";

export const metadata: Metadata = pageMetadata({
  title: "About Godrej Reserve Kandivali East | 18.6-Acre Project by Godrej Properties",
  description:
    "All about Godrej Reserve Kandivali East — land acquisition, launch success, master plan, towers, construction status and RERA details of Godrej Properties' 18.6-acre Mumbai project.",
  path: "/about",
});

const stats = [
  { value: "18.6 acres", label: "Freehold land parcel" },
  { value: "~3.72 mn sq.ft.", label: "Developable potential" },
  { value: "₹2,690 Cr", label: "Sold at launch (Mar 2024)" },
  { value: "~G+8P+51", label: "Floors per tower" },
  { value: "1,600+", label: "Residences in the registered phase" },
  { value: "~50%", label: "Construction complete (Jul 2026)" },
];

const linkClass = "text-[#c8922a] font-semibold hover:underline";

export default function AboutGodrejReservePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "About Godrej Reserve", path: "/about" }]} />
      <PageBanner
        eyebrow="The Project"
        title="About Godrej Reserve, Kandivali East"
        subtitle="Godrej Properties' 18.6-acre development on Akurli Road — towers over an eight-level podium, ~6 acres of greens and homes with private decks."
      />
      <ModalWrapper />

      {/* The story */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-gray-900 leading-tight mb-6">
            A Landmark 15 Months in the Making
          </h2>
          <p className="text-gray-700 leading-relaxed">
            In December 2022, Godrej Properties acquired an 18.6-acre freehold land parcel on
            Akurli Road, Kandivali East — one of the largest outright land purchases in
            Mumbai&apos;s western suburbs, with a developable potential of roughly 3.72 million
            sq.ft. and an estimated revenue potential of about ₹7,000 crore. Within fifteen months,
            the company brought the project to market: Godrej Reserve launched in March 2024 and
            sold approximately ₹2,690 crore of homes at launch, which Godrej Properties&apos; MD
            &amp; CEO Gaurav Pandey called &ldquo;the best-ever launch in Mumbai residential real
            estate.&rdquo;
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-10">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-[#FAF8F4] border border-[#efe7d3] rounded-lg px-4 py-5 text-center">
                <p className="text-xl md:text-2xl font-bold text-[#0B5842]">{stat.value}</p>
                <p className="text-[11px] uppercase tracking-wide text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The development */}
      <section className="w-full bg-[#FAF8F4] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <figure className="relative w-full aspect-[16/7] rounded-lg overflow-hidden shadow-md mb-10">
            <Image
              src={towersRender}
              alt="Godrej Reserve towers rising over the podium and greens in Kandivali East"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
            <figcaption className="absolute bottom-2 right-3 text-[10px] text-white bg-black/40 px-2 py-0.5 rounded">
              Artist&apos;s impression
            </figcaption>
          </figure>

          <h2 className="font-bold text-gray-900 leading-tight mb-6">Scale, Density, Design</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Godrej Reserve Kandivali is planned as a low-density, high-rise community: six towers on
            the master plan (five wings currently registered with MahaRERA), each rising
            approximately 51 floors over a ground-plus-8-level podium, with just eight residences
            per floor served by seven high-speed lifts. The registered phase holds over 1,600
            residences, leaving a significant amount of inventory for future phases. The latest
            addition teased by Godrej Properties is the Godrej Infinium Tower — enquire for current
            availability.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <p className="text-gray-700 leading-relaxed">
              The podium design lifts daily life above street level: ~6 acres (2.42 hectares) of
              landscaped open space over two levels, with around 75%* of the site kept open. A
              supporting retail plaza (units of 450–2,500 sq.ft.) is planned at the street edge, and
              the project targets IGBC green-building certification.
            </p>
            <figure className="relative w-full aspect-[13/6] rounded-lg overflow-hidden shadow-md">
              <Image
                src={podiumGreens}
                alt="Aerial view of the landscaped podium greens at Godrej Reserve"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 480px"
              />
              <figcaption className="absolute bottom-2 right-3 text-[10px] text-white bg-black/40 px-2 py-0.5 rounded">
                Artist&apos;s impression
              </figcaption>
            </figure>
          </div>
          <p className="text-xs text-gray-500 mt-4">*As per project collateral.</p>
        </div>
      </section>

      {/* Construction status */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-gray-900 leading-tight mb-6">Construction Status</h2>
          <p className="text-gray-700 leading-relaxed">
            Construction was approximately 50% complete as of July 2026, with possession targeted
            for June 2030 (MahaRERA completion date: December 2030). Commencement certificates are
            in place; the occupancy certificate will be applied for closer to possession.
          </p>
        </div>
      </section>

      {/* RERA */}
      <section className="w-full bg-[#FAF8F4] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-gray-900 leading-tight mb-6">Godrej Reserve RERA Numbers</h2>
          <p className="text-gray-700 mb-5">Godrej Reserve is registered with MahaRERA:</p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
            {RERA_WINGS.map((wing) => (
              <li
                key={wing.number}
                className="flex justify-between items-center bg-white border border-[#e5dcc5] rounded-md px-4 py-3 text-sm"
              >
                <span className="text-gray-600">{wing.wing}</span>
                <span className="font-semibold text-gray-900 tracking-wide">{wing.number}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-700">
            Details:{" "}
            <a href={MAHARERA_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
              https://maharera.maharashtra.gov.in
            </a>
          </p>

          <p className="text-gray-700 mt-8">
            See the <Link href="/master-plan" className={linkClass}>Master Plan</Link> and{" "}
            <Link href="/floor-plan" className={linkClass}>Floor Plan</Link> pages for layouts, or
            jump to <Link href="/amenities" className={linkClass}>Amenities</Link>.
          </p>
          <EnquireButton className="mt-6 inline-block bg-[#DCA54A] hover:bg-[#C49A2B] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-md transition-colors cursor-pointer">
            Download Brochure
          </EnquireButton>
        </div>
      </section>

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
