"use client";
import {
  FaGolfBall,
  FaSwimmingPool,
  FaBuilding,
  FaConciergeBell,
  FaFilm,
  FaTableTennis,
  FaSpa,
  FaDumbbell,
  FaHotel,
  FaShieldAlt,
} from "react-icons/fa";

import g1 from "@/assets/g-1.webp";
import g2 from "@/assets/g-2.webp";
import g3 from "@/assets/g-3.webp";
import g4 from "@/assets/g-4.webp";
import g5 from "@/assets/g-5.webp";
import g6 from "@/assets/g-6.webp";
import studioImg from "../assets/Studio-Apartments-Smart-Investment.webp";


const images = [studioImg, g1, g2, g3, g4, g5, g6];
import ImageSlider from "@/components/ImageSlider";


import bgImg from "../assets/Lines-PNG-Free-Image.webp";


const amenities = [
  { icon: <FaGolfBall />,       text: "9 Hole Golf Course" },
  { icon: <FaSwimmingPool />,  text: "Swimming Centre with Indoor Heated Pool" },
  { icon: <FaBuilding />,      text: "55,000 sq. ft. Clubhouse (4 Clubhouses)" },
  { icon: <FaConciergeBell />, text: "Premium Concierge Service" },
  { icon: <FaFilm />,          text: "Drive-in Cinema" },
  { icon: <FaTableTennis />,   text: "Squash Courts" },
  { icon: <FaSpa />,           text: "Spa & Salon by Warren Tricomi" },
  { icon: <FaDumbbell />,      text: "Gymnasium by Holyfield Gymnasium" },
  { icon: <FaHotel />,         text: "Hospitality by Spree" },
  { icon: <FaShieldAlt />,     text: "24×7 Security & Surveillance" },
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
            Luxurious Amenities
          </h6>
          <h2 className="text-[#FDE6C0] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto">
            Curated Amenities for a Complete Lifestyle Experience
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
          
          {/* Left */}
          <div className="flex-1 flex flex-col gap-5">
            <p className="text-sm md:text-base leading-relaxed">
              Experience a thoughtfully designed lifestyle with world-class
              amenities at Godrej Golf Links. Every feature is crafted to offer
              comfort, luxury, and convenience within a premium township.
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

            <p className="text-sm md:text-base leading-relaxed mt-1">
              From wellness and recreation to entertainment and security, every
              aspect is designed to elevate your everyday living experience.
            </p>

            <div className="mt-3">
              <button
                onClick={() => openModal()}
                className="inline-block bg-[#c9a84c] text-[#fff] text-xs rounded-[8px] font-bold uppercase px-7 py-3 cursor-pointer hover:bg-[#b8933e] transition"
              >
                Know More
              </button>
            </div>
          </div>

          {/* Right Image */}
         <div className="w-full lg:w-[50%]  h-[300px] md:h-[550px] flex-shrink-0">
  <ImageSlider images={images} />
</div>

        </div>
      </div>
    </section>
  );
}