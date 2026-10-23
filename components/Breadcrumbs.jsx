import Link from "next/link";
import JsonLd from "./JsonLd";
import { absolutePageUrl } from "@/data/project";

// Visible breadcrumb trail plus the matching BreadcrumbList JSON-LD.
// `items` lists the crumbs after Home, e.g. [{ name: "Price", path: "/price" }].
export default function Breadcrumbs({ items }) {
  const trail = [{ name: "Home", path: "/" }, ...items];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: trail.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.name,
            item: absolutePageUrl(item.path),
          })),
        }}
      />
      <nav aria-label="Breadcrumb" className="w-full bg-white border-b border-[#efe7d3]">
        <ol className="max-w-5xl mx-auto px-6 py-2.5 flex flex-wrap items-center gap-1.5 text-xs text-gray-500">
          {trail.map((item, i) => (
            <li key={item.path} className="flex items-center gap-1.5">
              {i > 0 && (
                <span aria-hidden="true" className="text-[#c8952a]">
                  /
                </span>
              )}
              {i === trail.length - 1 ? (
                <span aria-current="page" className="text-gray-800">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-[#c8952a] transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
