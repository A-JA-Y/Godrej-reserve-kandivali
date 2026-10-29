import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import ModalWrapper from "@/components/ModalWrapper";
import EnquireButton from "@/components/EnquireButton";
import EmiCalculator from "@/components/EmiCalculator";
import StickyDownloadButton from "@/components/StickyButton";
import { PARTNER, PAYMENT_PLAN, RERA_WINGS } from "@/data/project";
import { pageMetadata } from "@/utils/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Godrej Reserve Kandivali Price 2026 | 3 & 4 BHK Cost Sheet",
  description:
    "Godrej Reserve Kandivali price list 2026 — 3 BHK from ₹5.94 Cr*, 4 BHK from ₹8.9 Cr*. Carpet areas, payment plan, bank offers and all-inclusive cost sheet for Kandivali East's landmark project.",
  path: "/price",
  keywords: [
    "godrej reserve price",
    "godrej reserve kandivali price",
    "3 bhk in kandivali east",
    "4 bhk in kandivali east",
  ],
});

const priceTable = [
  { config: "2 BHK", carpet: "750 – 822 sq.ft.", price: "Limited availability — enquire" },
  { config: "3 BHK", carpet: "1,126 sq.ft.", price: "₹4.97 Cr* (all-in market quote)" },
  { config: "3 BHK", carpet: "1,149 sq.ft.", price: "₹4.85 Cr* (all-in market quote)" },
  { config: "3 BHK", carpet: "1,332 sq.ft.", price: "₹5.20 Cr* (all-in market quote)" },
  { config: "3 BHK", carpet: "1,450–1,471 sq.ft.", price: "₹6.40 – 6.45 Cr*" },
  { config: "4 BHK", carpet: "2,009 sq.ft.", price: "₹8.90 Cr*" },
  { config: "4 BHK", carpet: "2,033–2,039 sq.ft.", price: "₹9.00 – 9.40 Cr*" },
];

const linkClass = "text-[#c8922a] font-semibold hover:underline";

export default function PricePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Price", path: "/price" }]} />
      <PageBanner
        eyebrow="Price List 2026"
        title="Godrej Reserve Kandivali Price List"
        subtitle="3 BHK from ₹5.94 Cr.+* — carpet-area-wise prices, payment plan and bank offers."
      />
      <ModalWrapper />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-12">

          <div className="text-gray-700">
            <p className="text-lg leading-relaxed">
              The Godrej Reserve Kandivali price starts at <strong>₹5.94 Cr.+*</strong> for a 3 BHK
              (indicative agreement value as published by Godrej Properties, January 2026; stamp
              duty, registration, GST and other charges extra). On an all-inclusive basis, market
              cost sheets place 3 BHKs between roughly ₹4.85 Cr and ₹6.45 Cr depending on carpet
              area, floor and view, and 4 BHKs between ₹8.90 Cr and ₹9.40 Cr. At an average of about
              ₹42,400 per sq.ft., Godrej Reserve commands a premium over the Kandivali East average
              of roughly ₹31,750 per sq.ft. — the price of 18.6 acres, 6 acres of greens and the
              Godrej badge.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-gray-900 mb-6 leading-tight">Godrej Reserve Price Table</h2>
            <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm mb-4">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#FAF8F4] text-[#c8922a] uppercase text-xs tracking-wider">
                  <tr>
                    <th className="px-5 py-4">Configuration</th>
                    <th className="px-5 py-4">Carpet Area</th>
                    <th className="px-5 py-4">Indicative Price*</th>
                  </tr>
                </thead>
                <tbody>
                  {priceTable.map((row) => (
                    <tr key={`${row.config}-${row.carpet}`} className="border-t border-[#e5dcc5]">
                      <td className="px-5 py-4 font-semibold text-gray-900">{row.config}</td>
                      <td className="px-5 py-4 text-gray-600">{row.carpet}</td>
                      <td className="px-5 py-4 text-gray-800 font-semibold">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed italic">
              *Indicative, subject to change; official start price ₹5.94 Cr+ for 3 BHK excludes
              taxes/charges. Request today&apos;s cost sheet for exact numbers. Price list last
              reviewed: October 2026.
            </p>
          </div>

          <div className="text-gray-700">
            <h2 className="font-semibold text-gray-900 mb-6 leading-tight">
              Godrej Reserve Payment Plan &amp; Offers
            </h2>
            <p className="mb-5 leading-relaxed">
              Godrej Reserve is sold on a{" "}
              <strong>{PAYMENT_PLAN.ratio} construction-linked payment plan</strong> — 25% through
              booking, 25% by March 2027 and the balance 50% against the Occupancy Certificate and
              possession.
            </p>
            <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm mb-6">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#FAF8F4] text-[#c8922a] uppercase text-xs tracking-wider">
                  <tr>
                    <th className="px-5 py-4">Payment</th>
                    <th className="px-5 py-4">Milestone</th>
                  </tr>
                </thead>
                <tbody>
                  {PAYMENT_PLAN.milestones.map((milestone) => (
                    <tr key={milestone.stage} className="border-t border-[#e5dcc5]">
                      <td className="px-5 py-4 font-semibold text-gray-900 whitespace-nowrap">
                        {milestone.share}
                      </td>
                      <td className="px-5 py-4 text-gray-600">{milestone.stage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="list-disc pl-5 space-y-3 leading-relaxed">
              <li>
                Advertised bank-subvention offer: book with 10%, register the Agreement for Sale
                within 30 days, and pay no EMI for 2 years from the AFS date (offer as published on
                the official site with a stated window till 31 March 2026; subject to bank
                discretion and withdrawal — confirm current status at enquiry).
              </li>
              <li>
                Home loans: project approved with SBI, HDFC Bank, ICICI Bank, Axis Bank, Kotak
                Mahindra Bank, Bank of Baroda, Union Bank and others; funding up to 90% subject to
                eligibility.
              </li>
              <li>Minimum down payment reported around ₹45 lakh (all-in cost sheets).</li>
            </ul>
          </div>

          <div className="bg-[#FAF8F4] border border-[#e5dcc5] rounded-lg p-6 md:p-8 text-center">
            <p className="text-gray-800 font-semibold">
              Get the latest Godrej Reserve price breakup, floor-rise and offer details.
            </p>
            <EnquireButton className="mt-4 inline-block bg-[#DCA54A] hover:bg-[#C49A2B] text-white text-sm font-semibold tracking-widest uppercase px-8 py-3 rounded-md transition-colors cursor-pointer">
              Request Cost Sheet
            </EnquireButton>
            <p className="text-sm text-gray-600 mt-4">
              Compare layouts on the <Link href="/floor-plan" className={linkClass}>Floor Plan</Link>{" "}
              page before you shortlist.
            </p>
          </div>

          <div className="text-gray-700">
            <h2 className="font-semibold text-gray-900 mb-4 leading-tight">EMI Calculator</h2>
            <p className="mb-2">
              Estimate your monthly outflow from the property value, advance payment, tenure and
              interest rate. With ~10% at booking and loans of up to 90% subject to eligibility,
              adjust the sliders to match your own budget and bank offer.
            </p>
            <p className="italic text-sm text-gray-500">
              (EMI figures are indicative and for planning purposes only; actual rates depend on
              your lender and profile.)
            </p>
          </div>
        </div>
      </section>

      <EmiCalculator />

      <section className="w-full bg-white px-6 pb-16">
        <div className="max-w-5xl mx-auto bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5] text-sm text-gray-600 space-y-2">
          <p><strong>Project:</strong> Godrej Reserve, Akurli Road, Kandivali East, Mumbai 400101</p>
          <p><strong>Developer:</strong> Godrej Properties Ltd.</p>
          <p>
            <strong>MahaRERA:</strong>{" "}
            {RERA_WINGS.map((w) => `${w.wing} ${w.number}`).join(" · ")} — verify at
            maharera.maharashtra.gov.in
          </p>
          <p><strong>Contact:</strong> {PARTNER.phoneDisplay}</p>
          <p><strong>Page last reviewed:</strong> October 2026</p>
        </div>
      </section>

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
