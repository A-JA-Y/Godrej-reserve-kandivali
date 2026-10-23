import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import NewsListing from "@/components/NewsListing";
import ModalWrapper from "@/components/ModalWrapper";
import { pageMetadata } from "@/utils/metadata";

export const metadata: Metadata = pageMetadata({
  title: "News & Updates | Godrej Reserve Kandivali",
  description:
    "Latest updates on Godrej Reserve, Kandivali East — construction progress, launch milestones and market news.",
  path: "/news",
});

export default function NewsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "News", path: "/news" }]} />
      <ModalWrapper />
      <NewsListing />
    </>
  );
}
