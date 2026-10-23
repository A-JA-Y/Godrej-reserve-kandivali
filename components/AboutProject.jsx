"use client";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import ImageSlider from "./ImageSlider";

import projectBuilding from "../assets/Project-Building.webp";
import projectBuilding2 from "../assets/Project-Building-2.JPG.webp";
import pic2 from "../assets/pic-2.webp";
import launge from "../assets/launge.webp";
import township from "../assets/township.webp";


import { useModal } from "./ModalContext";

const AboutProject = ({heading}) => {
  const { openModal } = useModal();
  return (
    <section
      id="overview"
      className="w-full bg-white py-[70px] px-[30px] md:min-h-[750px]"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 center-box">
        
        {/* Left: Images */}
        <div className="hidden md:flex flex-col items-start relative w-full md:w-1/2 h-[500px]">
         

          <ImageSlider images={[projectBuilding,projectBuilding2,pic2,township,launge]}/>
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          
          {/* Tagline */}
          <h6 className="text-[#c8952a] font-semibold text-xs tracking-widest uppercase">
            For All three: First time buyer, Investor or an upgrader
          </h6>

          {/* Title */}
         {heading ? ( <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            About Godrej Golf Links
          </h1>):( <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            About Godrej Golf Links
          </h2>)}

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed">
            Godrej Golf Links offers luxury villas in a large, green township.
            The project includes villa types V2, V3, V4, and V5, each designed
            with a focus on space, privacy, and comfort.
          </p>

          <p className="text-gray-600 text-sm leading-relaxed">
            The township features a 9-hole golf course, enhancing both lifestyle
            and visual appeal. Developed by Godrej Properties, the project
            reflects a strong legacy of quality, design, and reliability.
          </p>

          <p className="text-gray-600 text-sm leading-relaxed">
            This is not just housing — it is a complete residential ecosystem
            built for modern living.
          </p>

          {/* Checklist */}
          <ul className="flex flex-col gap-2 mt-1">
            {[
              "Golf Course Township",
              "Premium Clubhouse",
              "High-Street Retail",
              "Fully Planned Layout",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-gray-700 text-sm"
              >
                <FaCheck className="mt-0.5 text-[#c8952a] flex-shrink-0 text-sm" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Button */}
          <div className="mt-4">
            <button
              onClick={() => openModal()}
              className="inline-block bg-[#c8952a] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 hover:bg-[#b07d1f] transition-colors duration-300 cursor-pointer"
            >
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;