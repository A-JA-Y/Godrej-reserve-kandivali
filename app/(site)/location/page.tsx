import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import ModalWrapper from "@/components/ModalWrapper";
import EnquireButton from "@/components/EnquireButton";
import StickyDownloadButton from "@/components/StickyButton";
import locationMap from "@/assets/godrej-reserve-location-map.webp";
import skyline from "@/assets/kandivali-east-skyline.webp";
import { MAP_EMBED_URL, MAP_LINK_URL } from "@/data/project";
import { pageMetadata } from "@/utils/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Godrej Reserve Location | Akurli Road, Kandivali East, Mumbai 400101",
  description:
    "Godrej Reserve location advantages — 100 m from Growel's 101 Mall, ~300 m from Akurli Metro (Line 7), minutes to Kandivali Station & Western Express Highway, ~25 min to the airport.",
  path: "/location",
});

const locationGroups = [
  {
    title: "Connectivity",
    items: [
      { label: "Akurli Metro Station (Line 7)", dist: "~300 m / 2-min walk" },
      { label: "Kandivali Railway Station (Western Line)", dist: "~700 m–2 km / 5–10 min" },
      { label: "Western Express Highway", dist: "~1–5 min" },
      { label: "Goregaon–Mulund Link Road & proposed Coastal Road extension", dist: "Easy reach" },
      { label: "Mumbai International Airport", dist: "~12 km / 25–30 min" },
    ],
  },
  {
    title: "Retail & Lifestyle",
    items: [
      { label: "Growel's 101 Mall (opposite the project)", dist: "~100 m" },
      { label: "Oberoi Mall, Goregaon", dist: "~10 min" },
      { label: "Raghuleela Mega Mall / Thakur Mall / V Mall", dist: "5–10 min" },
      { label: "PVR Kandivali", dist: "~8 min" },
    ],
  },
  {
    title: "Schools",
    items: [
      { label: "Cambridge School", dist: "~4 min" },
      { label: "VIBGYOR High", dist: "~5 min" },
      { label: "Lokhandwala Foundation School", dist: "~6 min" },
      { label: "Billabong High", dist: "~8 min" },
      { label: "Thakur College belt", dist: "~10 min" },
      { label: "Ryan International", dist: "~15 min" },
    ],
  },
  {
    title: "Healthcare",
    items: [
      { label: "ESIS Hospital", dist: "~1 min" },
      { label: "Sanchaiti Super Speciality", dist: "~500 m" },
      { label: "HCG Cancer Centre", dist: "~3 min" },
      { label: "DNA Multispeciality", dist: "~6 min" },
      { label: "Kokilaben Hospital", dist: "~20 min" },
    ],
  },
  {
    title: "Work Hubs",
    items: [
      { label: "Goregaon IT parks / Nesco", dist: "~10 min" },
      { label: "Andheri", dist: "~12–15 min" },
      { label: "Powai", dist: "~15 min" },
      { label: "Mindspace Malad", dist: "~15 min" },
      { label: "BKC", dist: "~25–30 min" },
    ],
  },
];

const linkClass = "text-[#c8922a] font-semibold hover:underline";

export default function LocationPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Location", path: "/location" }]} />
      <PageBanner
        eyebrow="Location & Connectivity"
        title="Godrej Reserve Location — Akurli Road, Kandivali East"
        subtitle="Opposite Growel's 101 Mall, a short walk from Akurli Metro (Line 7) and a minute from the Western Express Highway."
      />
      <ModalWrapper />

      {/* Intro + maps */}
      <section className="w-full bg-white py-16 px-6" id="location">
        <div className="max-w-5xl mx-auto">
          <p className="text-gray-700 leading-relaxed text-lg">
            Godrej Reserve&apos;s address is its quiet superpower: Akurli Road sits between the
            Western Express Highway and the green edge of the Sanjay Gandhi National Park belt,
            directly opposite Growel&apos;s 101 Mall and a short walk from the Akurli Metro Station
            on Line 7. Kandivali East gives you three rail systems (metro, suburban rail, and the
            WEH bus/expressway corridor) without surrendering the greenery that gives the Reserve
            its name.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mt-10 items-start">
            <figure>
              <div className="relative w-full aspect-[906/526] rounded-lg overflow-hidden shadow-md border border-[#e5dcc5] bg-white">
                <Image
                  src={locationMap}
                  alt="Location map of Godrej Reserve on Akurli Road near Akurli and Poisar metro stations, Growel's 101 Mall and ESIS Hospital"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
              </div>
              <figcaption className="text-[11px] text-gray-500 mt-2">
                Location map — not to scale, as published by the developer.
              </figcaption>
            </figure>

            <div>
              <div className="w-full h-[300px] rounded-lg overflow-hidden shadow-md border border-[#e5dcc5]">
                <iframe
                  src={MAP_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Godrej Reserve, Akurli Road, Kandivali East on Google Maps"
                ></iframe>
              </div>
              <a
                href={MAP_LINK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-[#c8922a] hover:bg-[#b07d20] text-white font-semibold px-6 py-3 rounded-md transition-colors"
              >
                Get Driving Directions →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Distances */}
      <section className="w-full bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {locationGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-2xl! font-bold text-gray-900 mb-4 leading-tight">{group.title}</h2>
                <ul className="bg-white border border-gray-200 rounded-lg px-4 py-2">
                  {group.items.map((item, i) => (
                    <li
                      key={item.label}
                      className={`flex items-start gap-3 py-2.5 ${i < group.items.length - 1 ? "border-b border-gray-100" : ""}`}
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-[#c8922a] flex-shrink-0 mt-1.5" />
                      <span className="flex-1 text-sm text-gray-800">{item.label}</span>
                      <span className="text-xs text-[#8a6a1f] font-medium bg-[#FAF8F4] border border-[#e5dcc5] px-2 py-0.5 rounded-full flex-shrink-0">
                        {item.dist}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-8">(Travel times are indicative, non-peak.)</p>
        </div>
      </section>

      {/* Nature */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-bold text-gray-900 mb-4 leading-tight">Nature</h2>
            <p className="text-gray-700 leading-relaxed">
              Sanjay Gandhi National Park edge — the reason Kandivali East stays green; Aarey Colony
              ~5 min.
            </p>
          </div>
          <div className="relative w-full aspect-[13/6] rounded-lg overflow-hidden shadow-md">
            <Image
              src={skyline}
              alt="Kandivali East skyline against the green hills of the Sanjay Gandhi National Park belt"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 480px"
            />
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-12 bg-[#FAF8F4] border border-[#e5dcc5] rounded-lg p-6 md:p-8 text-center">
          <p className="text-gray-800 font-semibold">Get directions to the Godrej Reserve sales lounge.</p>
          <EnquireButton className="mt-4 inline-block bg-[#DCA54A] hover:bg-[#C49A2B] text-white text-sm font-semibold tracking-widest uppercase px-8 py-3 rounded-md transition-colors cursor-pointer">
            Book Site Visit
          </EnquireButton>
          <p className="text-sm text-gray-600 mt-4">
            Pair the address with the lifestyle on the{" "}
            <Link href="/amenities" className={linkClass}>Amenities</Link> page.
          </p>
        </div>
      </section>

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
