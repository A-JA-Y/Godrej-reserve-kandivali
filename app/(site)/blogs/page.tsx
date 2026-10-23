import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogListing from "@/components/BlogListing";
import ModalWrapper from "@/components/ModalWrapper";
import { pageMetadata } from "@/utils/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Blogs | Godrej Reserve Kandivali",
  description:
    "Buyer guides, price analysis and insights on Godrej Reserve and real estate in Kandivali East, Mumbai.",
  path: "/blogs",
});

export default function BlogsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Blogs", path: "/blogs" }]} />
      <ModalWrapper />
      <BlogListing />
    </>
  );
}
