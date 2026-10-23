import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import AboutProject from "@/components/AboutProject";
import GaurTownship from "@/components/GaurTownship";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = {
  title: "About Godrej Golf Links | Godrej Golf Links Greater Noida",
  description:
    "Learn about Godrej Golf Links Greater Noida — luxury villas, golf township living, and premium residential ecosystem by Godrej Properties.",
  alternates: { canonical: "https://www.godrejgolflink.in/about-godrej-golf-links" },
};

export default function AboutGodrejGolfLinksPage() {
  return (
    <>
      <PageBanner
        eyebrow="The Project"
        title="About Godrej Golf Links"
        subtitle="A premium golf-facing township in Greater Noida offering luxury villas, curated amenities, and a complete lifestyle ecosystem."
      />
      <ModalWrapper />
      <AboutProject heading={true} />
      <GaurTownship />
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
