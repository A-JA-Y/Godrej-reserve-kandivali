"use client";

import Image, { getImageProps } from "next/image";
import heroDesktop from "../assets/godrej-reserve-hero.webp";
import heroMobile from "../assets/godrej-reserve-hero-mobile.webp";
import logoWhite from "../assets/godrej-reserve-logo-white.webp";
import { MAHARERA_URL, PROJECT, RERA_WINGS } from "@/data/project";
import { useModal } from "./ModalContext";

const highlights = [
  "18.6 Acres",
  "~6 Acres of Open Greens",
  "40+ Amenities",
  "MahaRERA Registered",
];

const heroImage = {
  alt: "Godrej Reserve towers rising above the podium and greens of Kandivali East — artist's impression",
  sizes: "100vw",
  quality: 80,
  fetchPriority: "high",
  loading: "eager",
};

const Hero = () => {
  const { openModal } = useModal();

  // Art direction: tall render on phones, wide render from md up
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ ...heroImage, src: heroDesktop });
  const { props: mobileImageProps } = getImageProps({ ...heroImage, src: heroMobile });

  return (
    <section className="relative w-full overflow-hidden bg-[#0d1f17] text-white min-h-[680px] md:min-h-[640px]">
      <picture>
        <source media="(min-width: 768px)" srcSet={desktopSrcSet} sizes="100vw" />
        <img
          {...mobileImageProps}
          alt={heroImage.alt}
          className="absolute inset-0 h-full w-full object-cover object-bottom md:object-[70%_center]"
        />
      </picture>
      <div className="absolute inset-0 bg-linear-to-b from-[#0d1f17]/90 via-[#0d1f17]/75 via-60% to-transparent md:bg-linear-to-r md:via-[#0d1f17]/55 md:via-50%" />

      <div className="relative max-w-7xl mx-auto px-6 pt-10 pb-60 md:pt-16 md:pb-[130px] flex">
        <div className="w-full md:max-w-xl text-center md:text-left">
          <Image
            src={logoWhite}
            alt="Godrej Reserve"
            className="mx-auto md:mx-0 w-40 md:w-52 h-auto"
            sizes="208px"
            preload
          />

          <p className="mt-6 text-[#E9C77B] text-[11px] md:text-xs uppercase tracking-[0.25em] font-semibold">
            {PROJECT.name} <span className="text-white/40">|</span> Akurli Road, Kandivali East, Mumbai
          </p>

          <h1 className="mt-4 text-[2rem] md:text-5xl font-bold leading-[1.15]">
            Godrej Reserve Kandivali East
            <span className="sr-only"> — </span>
            <span className="block mt-2 text-[#E9C77B] font-semibold text-2xl md:text-[2.1rem]">
              An Endless Vacation at Home
            </span>
          </h1>

          <p className="mt-5 text-base md:text-lg text-gray-100">
            3 &amp; 4 BHK Residences with Private Decks
            <span className="hidden sm:inline text-[#E9C77B]"> | </span>
            <span className="block sm:inline">
              3 BHK from <strong className="text-white">{PROJECT.startingPrice}</strong>
            </span>
          </p>

          <ul className="mt-6 flex flex-wrap justify-center md:justify-start gap-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="border border-[#E9C77B]/60 bg-black/25 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-xs md:text-[13px] tracking-wide"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap justify-center md:justify-start gap-3">
            <button
              type="button"
              onClick={() => openModal()}
              className="bg-[#C49A2B] hover:bg-[#A8841E] text-white text-xs md:text-sm font-semibold uppercase tracking-widest px-7 py-3.5 rounded-md transition-colors cursor-pointer"
            >
              Enquire Now
            </button>
            <button
              type="button"
              onClick={() => openModal()}
              className="border border-[#E9C77B] bg-black/20 text-[#F3DCA3] hover:bg-[#C49A2B] hover:border-[#C49A2B] hover:text-white text-xs md:text-sm font-semibold uppercase tracking-widest px-7 py-3.5 rounded-md transition-colors cursor-pointer"
            >
              Download Brochure
            </button>
          </div>

          <p className="mt-5 text-[11px] text-gray-200">
            *Indicative agreement value; stamp duty, registration, GST &amp; other charges extra.
          </p>

          {/* Mobile shows the RERA strip below the hero instead */}
          <p className="hidden md:block mt-1.5 text-[11px] text-gray-200 tracking-wide">
            MahaRERA: {RERA_WINGS.map((w) => `${w.wing} ${w.number}`).join(" | ")} —{" "}
            <a
              href={MAHARERA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white"
            >
              maharera.maharashtra.gov.in
            </a>
          </p>
        </div>
      </div>

      <p className="absolute bottom-2 right-3 md:bottom-auto md:top-3 text-[10px] text-white/80">
        Artist&apos;s impression
      </p>
    </section>
  );
};

export default Hero;
