"use client";
import Link from "next/link";
import ImageSlider from "./ImageSlider";

import towers from "../assets/godrej-reserve-towers.webp";
import podiumGreens from "../assets/podium-greens-aerial.webp";
import deckLiving from "../assets/deck-living-room.webp";
import poolEvening from "../assets/clubhouse-pool-evening.webp";
import masterBedroom from "../assets/master-bedroom.webp";


import { useModal } from "./ModalContext";

const slides = [
  { src: towers, alt: "Godrej Reserve towers above the eight-level podium in Kandivali East" },
  { src: podiumGreens, alt: "Aerial view of the two-level podium greens at Godrej Reserve" },
  { src: deckLiving, alt: "Living room opening onto a private deck at Godrej Reserve" },
  { src: poolEvening, alt: "Clubhouse and pool at Godrej Reserve in the evening" },
  { src: masterBedroom, alt: "Master bedroom with a city view at Godrej Reserve" },
];

const linkClass = "text-[#c8952a] font-semibold hover:underline";

const AboutProject = () => {
  const { openModal } = useModal();
  return (
    <section
      id="overview"
      className="w-full bg-white py-[70px] px-[30px] md:min-h-[750px]"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 center-box">

        {/* Left: Images */}
        <div className="hidden md:flex flex-col items-start relative w-full md:w-1/2 h-[580px]">
          <ImageSlider images={slides} caption="Artist's impression" />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">

          {/* Tagline */}
          <h6 className="text-[#c8952a] font-semibold text-xs tracking-widest uppercase">
            18.6-Acre Flagship by Godrej Properties
          </h6>

          {/* Title */}
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Welcome to Godrej Reserve Kandivali
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed">
            Godrej Reserve Kandivali is Godrej Properties&apos; flagship 18.6-acre residential
            development on Akurli Road, Kandivali East, Mumbai — one of the largest luxury land
            parcels in the city&apos;s western suburbs. Rising approximately 52 storeys over an
            8-level podium, the towers at Godrej Reserve Kandivali East frame nearly 6 acres of
            landscaped greens laid out across two levels, giving the project its resort-like
            character and its promise of &ldquo;an endless vacation at home.&rdquo;
          </p>

          <p className="text-gray-600 text-sm leading-relaxed">
            The project offers spacious 3 BHK and 4 BHK residences (with a limited, largely
            sold-out run of 2 BHKs in the first phase), each designed with a private deck that
            extends the living room into the open air. With around 75%* open space, four themed
            landscape zones and a ~57,000 sq.ft.* clubhouse, this is Kandivali East living at a
            scale the location has rarely seen.
          </p>

          <p className="text-gray-600 text-sm leading-relaxed">
            Launched in March 2024, Godrej Reserve recorded about ₹2,690 crore in sales at
            launch — the best-ever residential launch in Mumbai for Godrej Properties.
            Construction is in full swing and possession is targeted for June 2030.
          </p>

          <p className="text-gray-600 text-sm leading-relaxed">
            Explore the <Link href="/price" className={linkClass}>Price</Link> page for current
            cost sheets, browse <Link href="/floor-plan" className={linkClass}>Floor Plan</Link>{" "}
            options for every configuration, or see the full{" "}
            <Link href="/amenities" className={linkClass}>Amenities</Link> line-up.
          </p>

          {/* Button */}
          <div className="mt-2">
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
