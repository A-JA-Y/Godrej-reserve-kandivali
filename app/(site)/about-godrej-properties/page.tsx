import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import logo from "@/assets/godrej-logo.webp";
import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = {
  title: "About Godrej Properties | Godrej Golf Links",
  description:
    "Godrej Properties is one of India's leading real estate developers. Learn about the brand behind Godrej Golf Links Greater Noida.",
  alternates: { canonical: "https://www.godrejgolflink.in/about-godrej-properties" },
};

export default function AboutGodrejPropertiesPage() {
  return (
    <>
      <PageBanner
        eyebrow="The Developer"
        title="About Godrej Properties"
        subtitle="A trusted name in Indian real estate known for design excellence, quality construction, and customer-centric developments."
      />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-start">
          <div className="md:w-1/3 flex-shrink-0">
            <Image
              src={logo}
              alt="Godrej Properties"
              width={160}
              height={140}
              className="w-auto h-auto max-w-[140px]"
            />
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <p className="text-gray-600 text-sm leading-relaxed">
              Godrej Properties brings decades of legacy and a strong commitment to
              creating thoughtfully planned residential destinations. The brand is
              recognised for premium townships, sustainable planning, and
              long-term value for homeowners and investors alike.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              At Godrej Golf Links, this expertise translates into a golf-facing
              villa community with curated amenities, robust infrastructure, and a
              lifestyle-focused master plan in Greater Noida.
            </p>

            <ul className="flex flex-col gap-2 mt-2">
              {[
                "Trusted developer brand with pan-India presence",
                "Focus on design, quality, and customer experience",
                "Premium township and villa developments",
                "Strong track record in NCR residential projects",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-[#c8952a] mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <Link
                href="/about-godrej-golf-links"
                className="inline-block bg-[#DCA54A] hover:bg-[#C49A2B] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-md transition-colors"
              >
                Explore Godrej Golf Links
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
