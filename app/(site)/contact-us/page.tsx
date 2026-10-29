import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import EnquirySection from "@/components/EnquirySection";
import EnquireButton from "@/components/EnquireButton";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";
import {
  MAP_EMBED_URL,
  PARTNER,
  PARTNER_ADDRESS_LINE,
  SALES_LOUNGE,
  whatsappLink,
} from "@/data/project";
import { pageMetadata } from "@/utils/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact | Godrej Reserve Kandivali East — Site Visit & Cost Sheet",
  description:
    "Book a Godrej Reserve Kandivali site visit, get the latest price list, floor plans and brochure. Sales lounge on Akurli Road, Kandivali East, Mumbai 400101.",
  path: "/contact-us",
});

const contactCards = [
  { label: "Visit", value: SALES_LOUNGE.address },
  {
    label: "Call / WhatsApp",
    value: PARTNER.phoneDisplay,
    href: `tel:${PARTNER.phone}`,
  },
  {
    label: "Grievance (developer)",
    value: SALES_LOUNGE.grievanceEmail,
    href: `mailto:${SALES_LOUNGE.grievanceEmail}`,
  },
  {
    label: `Channel partner — ${PARTNER.name}`,
    value: PARTNER_ADDRESS_LINE,
  },
];

export default function ContactUsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Contact Us", path: "/contact-us" }]} />
      <PageBanner
        eyebrow="Get in Touch"
        title="Contact — Godrej Reserve Kandivali"
        subtitle="Book a site visit, get the latest price list, floor plans and brochure."
      />
      <ModalWrapper />

      <section className="w-full px-6 py-12 bg-white">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 items-start">
          <ul className="grid sm:grid-cols-2 gap-4">
            {contactCards.map((card) => (
              <li key={card.label} className="bg-[#FAF8F4] border border-[#e5dcc5] rounded-lg p-5">
                <p className="text-[11px] uppercase tracking-widest text-[#8a6a1f] font-semibold mb-2">
                  {card.label}
                </p>
                {card.href ? (
                  <a href={card.href} className="text-sm text-gray-900 font-medium break-words hover:text-[#c8952a]">
                    {card.value}
                  </a>
                ) : (
                  <p className="text-sm text-gray-900 font-medium">{card.value}</p>
                )}
              </li>
            ))}
          </ul>

          <div className="w-full h-[280px] rounded-lg overflow-hidden shadow-md border border-[#e5dcc5]">
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="Godrej Reserve sales lounge, Akurli Road, Kandivali East on Google Maps"
            ></iframe>
          </div>
        </div>
      </section>

      <EnquirySection
        heading="Request a Call Back"
        body="Tell us the configuration you are interested in and our team will share the latest cost sheet, floor plans and site-visit slots."
        detailed
        submitLabel="Request Call Back"
      >
        <div className="flex flex-wrap gap-3">
          <EnquireButton className="bg-[#141004] hover:bg-black text-white text-xs font-semibold uppercase tracking-widest px-5 py-3 rounded transition-colors cursor-pointer">
            Download Brochure
          </EnquireButton>
          <a
            href={whatsappLink("Hi, I would like to schedule a site visit to Godrej Reserve, Kandivali East.")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#1ebe57] text-white text-xs font-semibold uppercase tracking-widest px-5 py-3 rounded transition-colors"
          >
            Schedule Site Visit
          </a>
        </div>
      </EnquirySection>

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
