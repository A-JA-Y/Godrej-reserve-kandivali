import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import EmiCalculator from "@/components/EmiCalculator";
import ReasonsToInvest from "@/components/ReasonToInvest";
import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = {
  title: "Godrej Golf Links Villas Price 2026 | Greater Noida Price List",
  description:
    "Godrej Golf Links villas price in Greater Noida starts from ₹3.7 Cr (V1, 3 BHK) up to ₹33 Cr (V7, 9 BHK). See the full villa price list & EMI calculator.",
  alternates: { canonical: "https://www.godrejgolflink.in/price" },
  keywords: "Godrej golf links villas price, Godrej golf links greater Noida price, Godrej golf links price list, Godrej golf links price, Godrej golf links studio apartment price",
};

const priceTable = [
  { type: "V1 Villa", size: "100 sq. yd.", config: "3 BHK", price: "₹3.7 Cr*" },
  { type: "V2 Villa", size: "125 sq. yd.", config: "4 BHK", price: "₹4.0 Cr*" },
  { type: "V3 Villa", size: "150 sq. yd.", config: "4 BHK", price: "₹5.25 Cr*" },
  { type: "V4 Villa", size: "220 sq. yd.", config: "4 BHK", price: "₹7.50 Cr*" },
  { type: "V5 Villa", size: "300 sq. yd.", config: "5 BHK", price: "₹14 Cr*" },
  { type: "V6 Villa", size: "500 sq. yd.", config: "6 BHK", price: "₹22 Cr*" },
  { type: "V7 Villa", size: "1000 sq. yd.", config: "9 BHK", price: "₹33 Cr*" },
];

export default function PricePage() {
  return (
    <>
      <PageBanner
        eyebrow="Investment"
        title="Price"
        subtitle="Godrej Golf Links Villas Price in Greater Noida"
      />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-12">

          <div className="prose max-w-none text-gray-700">
            <h1 className="text-3xl font-semibold text-gray-900 mb-6 border-b pb-4">Godrej Golf Links Villas Price in Greater Noida</h1>
            <p className="text-lg leading-relaxed mb-6">
              Godrej Golf Links villas price in Greater Noida starts from approximately <strong>₹3.7 Crore</strong> for a V1 (3 BHK, 100 sq. yd.) villa and goes up to approximately <strong>₹33 Crore</strong> for a V7 (9 BHK, 1000 sq. yd.) villa. The project is a ready-to-move 100-acre golf township in Sector 27, Greater Noida, developed by Godrej Properties, offering seven villa configurations (V1 to V7). Final pricing depends on plot size, floor, golf-facing position, and current availability. Request the latest official price list from our authorized channel-partner team.
            </p>
            <Link
              href="/contact-us"
              className="inline-block text-[#c8922a] hover:underline font-semibold"
            >
              Get Latest Price List &rarr;
            </Link>

            <p className="mt-8 text-base leading-relaxed">
              If you are researching the Godrej Golf Links villas price, this page gives you an honest, up-to-date breakdown of the full V1–V7 price list, the super area and configuration of each villa, and how to get the official, unit-specific quote. Godrej Golf Links is a premium golf-course township spread across nearly 100 acres in Sector 27, Greater Noida, built around a 9-hole golf course and developed by Godrej Properties. The figures below are expected/indicative prices to help you shortlist — the confirmed price for a specific unit is shared on request, since it varies by plot, floor, and golf view.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Godrej Golf Links Price List 2026 (V1 to V7)</h2>
            <p className="mb-6 text-gray-700">The table below is the complete Godrej Golf Links villa price list across all seven configurations in Greater Noida, with super area, BHK layout, and expected price.</p>
            <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm mb-4">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#FAF8F4] text-[#c8922a] uppercase text-xs tracking-wider">
                  <tr>
                    <th className="px-5 py-4">Villa Type</th>
                    <th className="px-5 py-4">Super Area</th>
                    <th className="px-5 py-4">Configuration</th>
                    <th className="px-5 py-4">Expected Price</th>
                  </tr>
                </thead>
                <tbody>
                  {priceTable.map((row) => (
                    <tr key={row.type} className="border-t border-[#e5dcc5]">
                      <td className="px-5 py-4 font-semibold text-gray-900">{row.type}</td>
                      <td className="px-5 py-4 text-gray-600">{row.size}</td>
                      <td className="px-5 py-4 text-gray-600">{row.config}</td>
                      <td className="px-5 py-4 text-gray-800 font-semibold">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed mb-6 italic">
              *Prices are indicative/expected and subject to change without prior notice. Please contact our team for the latest availability, payment plans, and the official price list.
            </p>
            <Link
              href="/contact-us"
              className="inline-block text-[#c8922a] hover:underline font-semibold"
            >
              Request the Official Godrej Golf Links Price List &rarr;
            </Link>
          </div>

          <div className="prose max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Godrej Golf Links Price by Villa Configuration</h2>
            <div className="space-y-6">
              <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5]">
                <h3 className="text-lg font-bold text-gray-900 mb-2">V1 Villa Price — 3 BHK, 100 sq. yd. (from ₹3.7 Cr)</h3>
                <p>The V1 is the entry-level villa at Godrej Golf Links, offering a 3 BHK layout on a 100 sq. yd. plot. The Godrej Golf Links V1 villa price starts from approximately ₹3.7 Crore, making it the most accessible way into golf-township villa living for first-time luxury buyers and nuclear families.</p>
              </div>
              <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5]">
                <h3 className="text-lg font-bold text-gray-900 mb-2">V2 Villa Price — 4 BHK, 125 sq. yd. (from ₹4.0 Cr)</h3>
                <p>The V2 steps up to a 4 BHK layout on a 125 sq. yd. plot. The V2 villa price is approximately ₹4.0 Crore, ideal for growing families wanting an extra bedroom without a large jump in budget.</p>
              </div>
              <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5]">
                <h3 className="text-lg font-bold text-gray-900 mb-2">V3 Villa Price — 4 BHK, 150 sq. yd. (from ₹5.25 Cr)</h3>
                <p>The V3 is a spacious 4 BHK family villa on a 150 sq. yd. plot with generous living and outdoor space. The Godrej Golf Links V3 villa price is approximately ₹5.25 Crore.</p>
              </div>
              <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5]">
                <h3 className="text-lg font-bold text-gray-900 mb-2">V4 Villa Price — 4 BHK, 220 sq. yd. (from ₹7.50 Cr)</h3>
                <p>The V4 offers a larger premium 4 BHK layout on a 220 sq. yd. plot, with enhanced privacy and bigger built-up area. The V4 villa price is approximately ₹7.50 Crore.</p>
              </div>
              <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5]">
                <h3 className="text-lg font-bold text-gray-900 mb-2">V5 Villa Price — 5 BHK, 300 sq. yd. (from ₹14 Cr)</h3>
                <p>The V5 is a 5 BHK large-format villa on a 300 sq. yd. plot, part of the township's premium tier with spaces such as study, guest rooms, and servant quarters. The V5 villa price is approximately ₹14 Crore.</p>
              </div>
              <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5]">
                <h3 className="text-lg font-bold text-gray-900 mb-2">V6 Villa Price — 6 BHK, 500 sq. yd. (from ₹22 Cr)</h3>
                <p>The V6 is an ultra-luxury 6 BHK villa on an expansive 500 sq. yd. plot. The V6 villa price is approximately ₹22 Crore, suited to large families and buyers seeking a signature golf-facing residence.</p>
              </div>
              <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5]">
                <h3 className="text-lg font-bold text-gray-900 mb-2">V7 Villa Price — 9 BHK, 1000 sq. yd. (from ₹33 Cr)</h3>
                <p>The V7 is the largest and most exclusive villa at Godrej Golf Links — a 9 BHK mansion-format residence on a 1000 sq. yd. plot. The V7 villa price is approximately ₹33 Crore, representing the top of the township's luxury inventory.</p>
              </div>
            </div>
          </div>

          <div className="prose max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Godrej Golf Links Studio Apartment Price</h2>
            <p className="mb-4">Buyers often search specifically for the Godrej Golf Links studio apartment price. Here's the honest context: studio and 2 BHK apartments were offered in the township's earlier apartment phase, "The Suites," alongside the villa clusters. Apartment-phase possession in the township commenced around mid-2022.</p>
            <p className="mb-6">Because the township's current sales focus is on villas (V1–V7), fresh studio-apartment inventory is limited and availability is typically through resale. If you are specifically looking for a studio or apartment unit and its current price, the most reliable route is to request availability from our channel-partner team, who can confirm whether any resale studio/apartment inventory is live and at what price.</p>
            <Link
              href="/contact-us"
              className="inline-block text-[#c8922a] hover:underline font-semibold"
            >
              Check Studio / Apartment Availability &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Affects the Godrej Golf Links Price?</h2>
              <p className="mb-4">Several factors influence the final Godrej Golf Links Greater Noida price for any given unit:</p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li><strong>Configuration (V1 to V7):</strong> Larger villas with more bedrooms and bigger plots command higher pricing — from a 3 BHK V1 up to a 9 BHK V7.</li>
                <li><strong>Super area / plot size:</strong> Plot sizes range from 100 sq. yd. up to 1000 sq. yd., directly driving the total cost.</li>
                <li><strong>Golf-facing vs. internal position:</strong> Units with direct golf-course or green views are priced at a premium.</li>
                <li><strong>Floor and corner positioning:</strong> Premium positions carry a higher rate.</li>
                <li><strong>Furnishing and inclusions:</strong> Fully furnished options (modular kitchen, air-conditioning, wardrobes, appliances) affect the all-in price.</li>
                <li><strong>Current availability:</strong> Limited inventory in any configuration can move pricing.</li>
              </ul>
              <p>Because of these variables, the expected prices above are a guide — we share a unit-specific quote for the exact villa you shortlist.</p>
            </div>

            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Godrej Golf Links is a Smart Investment</h2>
              <p className="mb-4">Beyond the Godrej Golf Links price, here's why buyers and investors consider this township:</p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Prime Greater Noida location in Sector 27, near Pari Chowk.</li>
                <li>Close to the upcoming Noida International Airport (Jewar), a major appreciation driver.</li>
                <li>Strong road and metro connectivity across the Noida–Greater Noida corridor.</li>
                <li>Premium golf-course lifestyle around a 9-hole golf course.</li>
                <li>Ready-to-move villas — villa handovers in the township were completed by 2024.</li>
                <li>Trusted developer brand in Godrej Properties.</li>
                <li>Low-density, green-led master plan with a large share of open space.</li>
              </ul>
              <p>For end-users this means comfort and a premium lifestyle; for investors it offers strong long-term appreciation potential.</p>
            </div>
          </div>

          <div className="prose max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">EMI Calculator — Plan Your Godrej Golf Links Purchase</h2>
            <p className="mb-4">Use the on-page EMI calculator to estimate your monthly outflow based on loan amount, down payment, tenure, and interest rate. As an illustration, a typical home-loan structure for a villa purchase can be planned around a 20% advance with a 20–25 year tenure — adjust the sliders to match your own budget and bank offer.</p>
            <p className="italic text-sm text-gray-500 mb-6">(EMI figures are indicative and for planning purposes only; actual rates depend on your lender and profile.)</p>
          </div>

          <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5] text-sm text-gray-600 space-y-2">
            <p><strong>Project:</strong> Godrej Golf Links, Sector 27, Greater Noida, Uttar Pradesh</p>
            <p><strong>Developer:</strong> Godrej Properties (township developed by A R Landcraft LLP)</p>
            <p><strong>RERA (Crest):</strong> UPRERAPRJ151 &middot; <strong>RERA (Presidential/Exquisite Villas):</strong> UPRERAPRJ13203 — verify at up-rera.in</p>
            <p><strong>Contact:</strong> +91 9810890353</p>
            <p><strong>Page last reviewed:</strong> June 2026</p>
          </div>
        </div>
      </section>

      <EmiCalculator />
      <ReasonsToInvest />
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
