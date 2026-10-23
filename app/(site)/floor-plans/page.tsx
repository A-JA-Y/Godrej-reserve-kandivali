import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import FloorPlanSection from "@/components/FloorPageSection"

import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = {
  title: "Godrej Golf Links Floor Plan | V1 to V7 Villas Floor Plan & PDF",
  description:
    "Explore Godrej Golf Links floor plan — V1, V2, V3, V4, V5, V6 & V7 villas floor plan from 100 to 1000 sq.yd, 3 BHK to 9 BHK at Greater Noida. Download PDF.",
  alternates: {
    canonical: "https://www.godrejgolflink.in/floor-plans",
  },
  keywords:
    "Godrej Golf Links floor plan, Godrej Golf Links villas floor plan, Godrej Golf Links floor plan V1, V2, V3, V4, V5, V6, V7",
  openGraph: {
    title: "Godrej Golf Links Floor Plan | V1 to V7 Villas Floor Plan & PDF",
    description:
      "Explore Godrej Golf Links floor plan — V1, V2, V3, V4, V5, V6 & V7 villas floor plan from 100 to 1000 sq.yd, 3 BHK to 9 BHK at Greater Noida. Download PDF.",
    url: "https://www.godrejgolflink.in/floor-plans",
    type: "website",
  },
};

export default function FloorPlansPage() {
  return (
    <>
      <PageBanner
        eyebrow="Floor Plans"
        title="Godrej Golf Links Villas Floor Plans"
        subtitle="Explore V1 to V7 luxury villa layouts and the master township plan for Godrej Golf Links in Greater Noida."
      />
      <ModalWrapper />
      <FloorPlanSection />
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}