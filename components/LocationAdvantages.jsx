import Link from "next/link";
import { MAP_EMBED_URL, MAP_LINK_URL } from "@/data/project";

const checkItems = [
  "Growel's 101 Mall — ~100 m (opposite the project)",
  "Akurli Metro Station (Line 7) — ~300 m / 2-min walk",
  "Western Express Highway — ~1–5 min",
  "Kandivali Railway Station (Western Line) — 5–10 min",
  "BKC — ~25–30 min",
  "Mumbai International Airport — ~25–30 min",
];

export default function LocationAdvantages() {
  return (
    <section className="w-full bg-white py-16 px-6" id="location">
      <div className="max-w-5xl mx-auto">

        {/* Label */}
        <p className="text-center text-xs font-bold uppercase mb-4 text-[#c8922a] tracking-[0.2em]">
          Location & Connectivity
        </p>

        {/* Heading */}
        <h2 className="text-center font-bold text-gray-900 mb-14 text-3xl md:text-4xl leading-tight">
          Kandivali East Address That Works
        </h2>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* LEFT: TEXT */}
          <div className="flex-1 max-w-lg">

            <h3 className="font-bold text-gray-900 mb-3 text-base">
              Akurli Road, Kandivali East
            </h3>

            <p className="text-gray-600 leading-relaxed mb-8 text-sm">
              Godrej Reserve sits on Akurli Road, directly opposite Growel&apos;s 101 Mall and
              about 300 m from Akurli Metro Station on Line 7, with the Western Express Highway a
              minute away. BKC is ~25–30 minutes, the international airport ~25–30 minutes. Full
              details on the{" "}
              <Link href="/location" className="text-[#c8922a] font-semibold hover:underline">
                Location
              </Link>{" "}
              page.
            </p>

            <ul className="space-y-4">
              {checkItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">

                  {/* Check Icon */}
                  <span className="text-[#c8922a] mt-1">
                    ✓
                  </span>

                  <span className="text-gray-800 text-sm">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-500 mt-6">(Travel times are indicative, non-peak.)</p>
          </div>

          {/* RIGHT: MAP */}
          <div className="flex-1 w-full">
            <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md border border-[#e5dcc5]">
              <iframe
                src={MAP_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Godrej Reserve, Akurli Road, Kandivali East on Google Maps"
              ></iframe>
            </div>

            {/* Small CTA */}
            <a
              href={MAP_LINK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm text-[#c8922a] hover:underline"
            >
              View on Google Maps →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
