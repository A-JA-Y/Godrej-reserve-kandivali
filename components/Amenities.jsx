"use client";
import Link from "next/link";
import {
  FaSwimmingPool,
  FaWater,
  FaBuilding,
  FaTree,
  FaLeaf,
  FaTableTennis,
  FaRunning,
  FaTheaterMasks,
  FaChild,
  FaShieldAlt,
} from "react-icons/fa";

import poolEvening from "@/assets/clubhouse-pool-evening.webp";
import springTerraces from "@/assets/zone-spring-terraces.webp";
import forestRetreat from "@/assets/zone-forest-retreat.webp";
import amphitheatre from "@/assets/amphitheatre.webp";
import kidsPlay from "@/assets/kids-play-area.webp";
import poolDeck from "@/assets/clubhouse-pool-deck.webp";


const images = [
  { src: poolEvening, alt: "Pool and clubhouse at Godrej Reserve in the evening" },
  { src: springTerraces, alt: "Pool deck and café pavilion in the Spring Terraces zone" },
  { src: forestRetreat, alt: "Shaded lawns of the Forest Retreat zone" },
  { src: amphitheatre, alt: "Stepped amphitheatre set in landscaped lawns" },
  { src: kidsPlay, alt: "Kids' play area at Godrej Reserve" },
  { src: poolDeck, alt: "Pool deck beside the clubhouse pavilion" },
];
import ImageSlider from "@/components/ImageSlider";


import bgImg from "../assets/Lines-PNG-Free-Image.webp";


const amenities = [
  { icon: <FaSwimmingPool />, text: "Olympic-length lap pool & temperature-controlled pool" },
  { icon: <FaWater />,        text: "Massage pool, kids' pool & aqua gym" },
  { icon: <FaBuilding />,     text: "~57,000 sq.ft.* clubhouse" },
  { icon: <FaTree />,         text: "~6 acres of two-level landscaped greens" },
  { icon: <FaLeaf />,         text: "Four themed zones — Forest Retreat, Tropical Oasis, Spring Terraces & Green Acres" },
  { icon: <FaTableTennis />,  text: "Squash, badminton & multi-sport courts" },
  { icon: <FaRunning />,      text: "Cricket turf, jogging & cycling tracks" },
  { icon: <FaTheaterMasks />, text: "500-seat* amphitheatre & mini theatre" },
  { icon: <FaChild />,        text: "Kids' adventure play & crèche space" },
  { icon: <FaShieldAlt />,    text: "Multi-tier security with CCTV & access control" },
];

import { useModal } from "./ModalContext";

export default function Amenities() {
  const { openModal } = useModal();
  return (
    <section
      id="amenities"
      className="w-full bg-[#4F3318] py-16 px-6 md:px-12 lg:px-20 text-[#FDE6C0] relative overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-3 pointer-events-none"
        style={{
          backgroundImage: `url(${bgImg.src})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "contain",
        }}
      />

      {/* Mirrored background */}
      <div
        className="absolute inset-0 opacity-3 transform scale-x-[-1] pointer-events-none"
        style={{
          backgroundImage: `url(${bgImg.src})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "contain",
        }}
      />

      <div className="max-w-5xl mx-auto flex flex-col gap-10">

        {/* Heading */}
        <div className="text-center">
          <h6 className="text-[#DCA54A] uppercase mb-4">
            40+ Resort Amenities
          </h6>
          <h2 className="text-[#FDE6C0] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto">
            An Endless Vacation, Every Day
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

          {/* Left */}
          <div className="flex-1 flex flex-col gap-5">
            <p className="text-sm md:text-base leading-relaxed">
              Godrej Reserve backs its &ldquo;endless vacation&rdquo; promise with more than 40
              amenities spread across the ~57,000 sq.ft.* clubhouse, the two-level podium greens
              and the towers themselves.
            </p>

            <ul className="flex flex-col gap-[18px]">
              {amenities.map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="flex-shrink-0 text-lg text-[#DCA54A]">
                    {item.icon}
                  </span>
                  <span className="text-sm md:text-base">{item.text}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs leading-relaxed mt-1 text-[#FDE6C0]/80">
              *As per project collateral; final amenity mix per Agreement for Sale.
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-5">
              <button
                onClick={() => openModal()}
                className="inline-block bg-[#c9a84c] text-[#fff] text-xs rounded-[8px] font-bold uppercase px-7 py-3 cursor-pointer hover:bg-[#b8933e] transition"
              >
                Know More
              </button>
              <Link
                href="/amenities"
                className="text-sm font-semibold text-[#DCA54A] hover:underline"
              >
                View all amenities →
              </Link>
            </div>
          </div>

          {/* Right Image */}
         <div className="w-full lg:w-[50%]  h-[300px] md:h-[550px] flex-shrink-0">
  <ImageSlider images={images} caption="Artist's impression" />
</div>

        </div>
      </div>
    </section>
  );
}
