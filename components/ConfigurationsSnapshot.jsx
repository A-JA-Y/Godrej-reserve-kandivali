"use client";

import Image from "next/image";
import Link from "next/link";
import deckLiving from "../assets/deck-living-room.webp";
import { CONFIGURATIONS } from "@/data/project";
import { useModal } from "./ModalContext";

const linkClass = "text-[#8a6a1f] font-semibold hover:underline";

export default function ConfigurationsSnapshot() {
  const { openModal } = useModal();

  return (
    <section className="w-full py-16 px-4 sm:px-8 bg-[#faf6e8]" id="configurations">
      <div className="max-w-5xl mx-auto">
        <p className="text-center uppercase mb-3 text-[#c8922a] tracking-[2.5px] text-[11px] font-semibold">
          Residences
        </p>
        <h2 className="text-center font-bold text-[#2c1f0e] mb-10 leading-tight">
          Godrej Reserve Price &amp; Configurations
        </h2>

        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-6 items-stretch">
          {/* Deck living */}
          <div className="relative min-h-[280px] rounded-lg overflow-hidden shadow-md">
            <Image
              src={deckLiving}
              alt="Living room opening onto a private deck at Godrej Reserve"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 520px"
            />
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/75 to-transparent p-5 pt-16">
              <p className="text-white font-semibold">Every 3 &amp; 4 BHK opens to a private deck</p>
              <p className="text-white/80 text-xs mt-1">4 BHKs add a walk-in wardrobe (approx. 5&apos; × 10&apos;)</p>
            </div>
            <span className="absolute top-3 right-3 bg-black/45 text-white text-[10px] px-2 py-0.5 rounded">
              Artist&apos;s impression
            </span>
          </div>

          {/* Configurations */}
          <div className="flex flex-col gap-3">
            {CONFIGURATIONS.map((config) => (
              <div
                key={config.type}
                className="bg-white p-5 border-t-[3px] border-[#DCA54A] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <h3 className="font-bold text-lg text-[#2c1f0e]">{config.type}</h3>
                  <p className="text-sm text-[#5c4a2a]">{config.carpet} carpet</p>
                  <p className="text-sm font-semibold text-[#8a6a1f] mt-1">{config.price}</p>
                </div>
                <button
                  type="button"
                  onClick={() => openModal()}
                  className="flex-shrink-0 bg-[#DCA54A] hover:bg-[#c9943a] text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded transition-colors cursor-pointer"
                >
                  {config.type === "2 BHK" ? "Enquire" : "Get Floor Plan"}
                </button>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-[#5c4a2a] mt-6 leading-relaxed text-center">
          *Indicative agreement value; taxes &amp; charges extra. See the{" "}
          <Link href="/price" className={linkClass}>Price</Link> page for cost sheets and the{" "}
          <Link href="/master-plan" className={linkClass}>Master Plan</Link> for tower positions.
        </p>
      </div>
    </section>
  );
}
