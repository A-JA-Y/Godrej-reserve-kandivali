"use client";
import Image from "next/image";
import Link from "next/link";

import deckLiving from "@/assets/deck-living-room.webp";
import masterBedroom from "@/assets/master-bedroom.webp";
import { CONFIGURATIONS, whatsappLink } from "@/data/project";

import { useModal } from "./ModalContext";

const unitNotes: Record<string, string> = {
  "3 BHK":
    "The mid-size 3 BHKs (1,126–1,332 sq.ft.) suit families upgrading within Kandivali; the 1,450+ sq.ft. “grande” 3 BHKs offer en-suite bedrooms and a wider deck.",
  "4 BHK":
    "Corner residences with walk-in wardrobe, utility room and panoramic decks facing the central greens or the national-park skyline.",
  "2 BHK":
    "First-phase 2 BHKs are largely sold out; enquire for resale or new-wing releases.",
};

const interiors = [
  { src: deckLiving, alt: "Living room opening onto a private deck at Godrej Reserve" },
  { src: masterBedroom, alt: "Master bedroom with a city view at Godrej Reserve" },
];

const linkClass = "text-[#c8922a] font-semibold hover:underline";

export default function FloorPlanSection() {
  const { openModal } = useModal();

  return (
    <section className="w-full py-16 px-6" id="floor-plans" aria-label="Godrej Reserve floor plans">
      <div className="max-w-5xl mx-auto flex flex-col gap-14">
        {/* Intro */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 leading-relaxed">
              Every residence at Godrej Reserve Kandivali East is planned around light,
              cross-ventilation and a private deck off the living room. With only eight apartments
              per floor and seven lifts per wing, floor plates stay uncrowded. Homes are
              Vastu-friendly, and 4 BHK residences add a dedicated walk-in wardrobe (approx. 5&apos;
              x 10&apos;) to the master suite.
            </p>
            <button
              onClick={() => openModal()}
              className="mt-6 bg-[#DCA54A] text-white text-sm px-8 py-3 rounded uppercase font-semibold hover:bg-[#c9943a] transition cursor-pointer"
            >
              Download Brochure
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {interiors.map((image) => (
              <figure key={image.alt} className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 240px"
                />
                <figcaption className="absolute bottom-2 right-2 text-[10px] text-white bg-black/40 px-2 py-0.5 rounded">
                  Artist&apos;s impression
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Unit mix */}
        <div>
          <h2 className="font-bold text-gray-900 text-center mb-3 leading-tight">Unit Mix</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto text-sm mb-10">
            Carpet-area-wise unit options at Godrej Reserve, Kandivali East.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {CONFIGURATIONS.map((config) => (
              <div
                key={config.type}
                className="bg-white rounded-lg shadow-md border border-gray-100 border-t-[3px] border-t-[#DCA54A] p-6 flex flex-col"
              >
                <h3 className="text-xl font-bold text-gray-900">{config.type}</h3>
                <p className="text-sm text-[#c8922a] font-semibold mt-1">{config.carpet} carpet</p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {config.sizes.map((size) => (
                    <span key={size} className="text-xs bg-[#FAF8F4] border border-[#e5dcc5] text-gray-700 px-2.5 py-1 rounded-full">
                      {size} sq.ft.
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mt-4 flex-1">{unitNotes[config.type]}</p>
                <button
                  onClick={() => openModal()}
                  className="mt-5 w-full bg-[#DCA54A] text-white text-xs px-4 py-2.5 rounded uppercase font-semibold hover:bg-[#c9943a] transition cursor-pointer"
                >
                  {config.type === "2 BHK" ? "Enquire About Availability" : `Request ${config.type} Floor Plan`}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Note block */}
        <div className="bg-gray-50 rounded-lg p-6 md:p-8 text-center border border-gray-200">
          <p className="text-gray-700 max-w-2xl mx-auto">
            Detailed unit plans, tower-wise placement and floor-rise charts are shared on request or
            at the sales lounge.
          </p>
          <a
            href={whatsappLink("Hi, please share the Godrej Reserve Kandivali floor plans.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block bg-[#25D366] hover:bg-[#1ebe57] text-white text-sm font-semibold uppercase tracking-wider px-6 py-3 rounded transition-colors"
          >
            Get Floor Plans on WhatsApp
          </a>
          <p className="text-sm text-gray-600 mt-5">
            See the <Link href="/master-plan" className={linkClass}>Master Plan</Link> for tower
            positions and the <Link href="/price" className={linkClass}>Price</Link> page for
            area-wise cost sheets.
          </p>
        </div>
      </div>
    </section>
  );
}
