import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import ModalWrapper from "@/components/ModalWrapper";
import logo from "@/assets/godrej-properties-logo.webp";
import StickyDownloadButton from "@/components/StickyButton";
import { pageMetadata } from "@/utils/metadata";

export const metadata: Metadata = pageMetadata({
  title: "About Godrej Properties | Developer of Godrej Reserve Kandivali",
  description:
    "Godrej Properties — the 1990-founded real estate arm of the 127-year Godrej Group. Presence across 12+ cities, 200+ projects, and Mumbai's best-ever launch at Godrej Reserve.",
  path: "/about-godrej-properties",
  keywords: ["godrej properties kandivali", "godrej reserve kandivali"],
});

export default function AboutGodrejPropertiesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "About Godrej Properties", path: "/about-godrej-properties" }]} />
      <PageBanner
        eyebrow="The Developer"
        title="About Godrej Properties"
        subtitle="The real estate arm of the 127-year Godrej Group — and the developer behind Godrej Reserve, Kandivali East."
      />
      <ModalWrapper />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-start">
          <div className="md:w-1/3 flex-shrink-0">
            <Image
              src={logo}
              alt="Godrej Properties"
              width={240}
              height={49}
              className="w-auto h-auto max-w-[220px]"
            />
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <p className="text-gray-600 text-sm leading-relaxed">
              Godrej Properties Limited (GPL) brings the Godrej Group&apos;s 127-year legacy of
              trust into real estate. Established in 1990, GPL was the first real estate company
              in India to achieve ISO certification and today develops residential and mixed-use
              projects across 12+ cities, with a cumulative pipeline of over 89 million sq.ft.
              The company has repeatedly ranked among India&apos;s largest listed developers by
              sales bookings.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              In Mumbai&apos;s western suburbs, Godrej Reserve Kandivali is GPL&apos;s statement
              project: an 18.6-acre outright land acquisition (December 2022) brought to market in
              just fifteen months, whose March 2024 launch generated about ₹2,690 crore in
              bookings — the developer&apos;s best-ever Mumbai launch. GPL&apos;s delivery record in
              MMR, its listed-company governance and its RERA-first disclosure practice are core
              reasons buyers shortlist the Reserve.
            </p>

            <ul className="flex flex-col gap-2 mt-2">
              {[
                "Real estate arm of the 127-year Godrej Group, established 1990",
                "First real estate company in India to achieve ISO certification",
                "Residential and mixed-use projects across 12+ cities",
                "Cumulative pipeline of over 89 million sq.ft.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-[#c8952a] mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-600 text-sm leading-relaxed mt-2">
              See why the project stands out on the{" "}
              <Link href="/about" className="text-[#c8922a] font-semibold hover:underline">
                About the Project
              </Link>{" "}
              page.
            </p>

            <div className="mt-2">
              <Link
                href="/about"
                className="inline-block bg-[#DCA54A] hover:bg-[#C49A2B] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-md transition-colors"
              >
                Explore Godrej Reserve
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
