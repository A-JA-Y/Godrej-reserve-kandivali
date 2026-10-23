"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// `images` is a list of { src, alt }; `caption` labels every slide (e.g. "Artist's impression").
export default function ImageSlider({ images, caption }) {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden rounded shadow-2xl"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      {/* Images */}
      {images.map((img, index) => (
        <Image
          key={index}
          src={img.src}
          alt={img.alt}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0"
          }`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 512px"
          quality={80}

        />
      ))}

      {caption && (
        <span className="absolute top-3 right-3 z-20 bg-black/45 text-white text-[10px] px-2 py-0.5 rounded">
          {caption}
        </span>
      )}

      {/* Left Button */}
      <button
        onClick={prevSlide}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black/70"
      >
        ‹
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        aria-label="Next image"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black/70"
      >
        ›
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Show image ${index + 1}`}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
