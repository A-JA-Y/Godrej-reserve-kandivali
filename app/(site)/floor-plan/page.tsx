import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import FloorPlanSection from "@/components/FloorPageSection"

import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";
import { pageMetadata } from "@/utils/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Godrej Reserve Floor Plan | 2, 3 & 4 BHK Carpet Areas",
  description:
    "Godrej Reserve floor plans — 3 BHK of 1,126–1,471 sq.ft. and 4 BHK of 2,009–2,039 sq.ft. with private decks and walk-in wardrobes. Carpet-area-wise unit options in Kandivali East.",
  path: "/floor-plan",
  keywords: ["godrej reserve floor plan", "3 bhk in kandivali east", "4 bhk in kandivali east"],
});

export default function FloorPlansPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Floor Plan", path: "/floor-plan" }]} />
      <PageBanner
        eyebrow="Floor Plans"
        title="Godrej Reserve Floor Plans"
        subtitle="3 BHK of 1,126–1,471 sq.ft. and 4 BHK of 2,009–2,039 sq.ft. carpet — every home with a private deck."
      />
      <ModalWrapper />
      <FloorPlanSection />
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
