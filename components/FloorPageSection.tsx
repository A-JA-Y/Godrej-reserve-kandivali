"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import plan1 from "@/assets/tower-1.webp";
import plan2 from "@/assets/tower-2.webp";
import plan3 from "@/assets/tower-3.webp";
import plan4 from "@/assets/tower-4.webp";
import masterPlan from "@/assets/tower-6.webp";

import { useModal } from "./ModalContext";

// Villa floor plan data
const villaPlans = [
  {
    id: "v1",
    type: "V1",
    size: "100 sq.yd",
    config: "3 BHK",
    price: "₹3.7 Cr",
    image: plan1,
    description:
      "Entry-point villa — 3 BHK independent home with modular kitchen, private courtyard and dedicated parking. Ideal for first-time villa buyers.",
    features: ["3 Bedrooms", "4 Bathrooms", "Private Courtyard", "Modular Kitchen"],
  },
  {
    id: "v2",
    type: "V2",
    size: "125 sq.yd",
    config: "4 BHK",
    price: "₹4.0 Cr",
    image: plan2,
    description:
      "Compact 4 BHK with formal living, dining hall, modular kitchen with utility and private rear garden. Perfect for families upgrading from apartments.",
    features: ["4 Bedrooms", "5 Bathrooms", "Private Garden", "Utility Area"],
  },
  {
    id: "v3",
    type: "V3",
    size: "150 sq.yd",
    config: "4 BHK",
    price: "₹5.25 Cr",
    image: plan3,
    description:
      "Most popular configuration — 4 BHK with separate family lounge, larger bedrooms, servant quarter and deeper private garden. Best balance of space and price.",
    features: ["4 Bedrooms", "5 Bathrooms", "Family Lounge", "Servant Quarter"],
  },
  {
    id: "v4",
    type: "V4",
    size: "220 sq.yd",
    config: "4 BHK",
    price: "₹7.50 Cr",
    image: plan4,
    description:
      "Spacious 4 BHK with multiple en-suite bedrooms, generous family lounge, formal living and dining areas, private terrace and landscaped lawn.",
    features: ["4 Bedrooms", "5 Bathrooms", "Private Terrace", "Landscaped Lawn"],
  },
  {
    id: "v5",
    type: "V5",
    size: "300 sq.yd",
    config: "5 BHK",
    price: "₹14 Cr",
    image: plan1,
    description:
      "Luxury 5 BHK with additional bedroom suite, deeper outdoor space, home office/guest suite and provisions for private pool. Ideal for multi-generational families.",
    features: ["5 Bedrooms", "6 Bathrooms", "Home Office", "Pool Provision"],
  },
  {
    id: "v6",
    type: "V6",
    size: "500 sq.yd",
    config: "6 BHK",
    price: "₹22 Cr",
    image: plan2,
    description:
      "Estate-style 6 BHK with six full bedroom suites, multiple lounges, private pool, party deck, gym provision and direct golf course views.",
    features: ["6 Bedrooms", "7 Bathrooms", "Private Pool", "Gym Provision"],
  },
  {
    id: "v7",
    type: "V7",
    size: "1000 sq.yd",
    config: "9 BHK",
    price: "₹33 Cr",
    image: plan3,
    description:
      "Flagship estate — 9 BHK generational home with nine en-suite bedrooms, multiple drawing and dining rooms, private pool, party lawn and dedicated staff quarters.",
    features: ["9 Bedrooms", "10 Bathrooms", "Private Pool", "Staff Quarters"],
  },
];

export default function FloorPlanSection() {
  const { openModal, isLeadSubmitted } = useModal();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [activePlan, setActivePlan] = useState<(typeof villaPlans)[0] | null>(null);
  const [isMasterOpen, setIsMasterOpen] = useState(false);
  const [selectedVilla, setSelectedVilla] = useState("");

  useEffect(() => {
    if (isLeadSubmitted) {
      setIsUnlocked(true);
      localStorage.setItem("plansUnlocked", "true");
    } else {
      const saved = localStorage.getItem("plansUnlocked");
      if (saved === "true") setIsUnlocked(true);
    }
  }, [isLeadSubmitted]);

  // Price comparison table data
  const priceData = [
    { type: "V1", size: "100 sq.yd", config: "3 BHK", price: "₹3.7 Cr" },
    { type: "V2", size: "125 sq.yd", config: "4 BHK", price: "₹4.0 Cr" },
    { type: "V3", size: "150 sq.yd", config: "4 BHK", price: "₹5.25 Cr" },
    { type: "V4", size: "220 sq.yd", config: "4 BHK", price: "₹7.50 Cr" },
    { type: "V5", size: "300 sq.yd", config: "5 BHK", price: "₹14 Cr" },
    { type: "V6", size: "500 sq.yd", config: "6 BHK", price: "₹22 Cr" },
    { type: "V7", size: "1000 sq.yd", config: "9 BHK", price: "₹33 Cr" },
  ];

  return (
    <section className="w-full py-16 px-6" id="floor-plans" aria-label="Godrej Golf Links Floor Plans">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* H1 Heading */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Godrej Golf Links Floor Plan — V1 to V7 Villas Floor Plan in Greater Noida
          </h1>
          <p className="text-gray-600 max-w-4xl mx-auto text-sm md:text-base leading-relaxed">
            Explore the complete Godrej Golf Links floor plan collection — seven curated luxury{" "}
            Godrej Golf Links villas floor plan designs built around the championship golf course
            at Sector 27, Greater Noida. The Godrej Golf Links floor plan range spans seven
            configurations — V1, V2, V3, V4, V5, V6 and V7 — covering 100 sq.yd to 1000 sq.yd
            plots and 3 BHK to 9 BHK homes. Whether you're a first-time villa buyer or seeking a
            9 BHK estate, this page brings every layout, size, configuration and price together
            in one place.
          </p>
          <button
            onClick={() => openModal()}
            className="mt-6 bg-[#DCA54A] text-white text-sm px-8 py-3 rounded uppercase font-semibold hover:bg-[#c9943a] transition"
            aria-label="Download Floor Plan PDF"
          >
            Download Floor Plan PDF
          </button>
        </div>

        {/* H2 - Price Chart */}
        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
            Godrej Golf Links Villas Price Chart
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto text-sm mb-8">
            The Godrej Golf Links villas floor plan range is one of the widest in any luxury
            township in Greater Noida — from a compact 100 sq.yd 3 BHK villa to a sprawling
            1000 sq.yd 9 BHK estate. Use the table below to compare every Godrej Golf Links
            floor plan at a glance:
          </p>

          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="w-full text-sm md:text-base border-collapse">
              <thead>
                <tr className="bg-[#DCA54A] text-white">
                  <th className="px-4 py-3 text-left">Villa Type</th>
                  <th className="px-4 py-3 text-left">Super Area</th>
                  <th className="px-4 py-3 text-left">Configuration</th>
                  <th className="px-4 py-3 text-left">Expected Price</th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((item, idx) => (
                  <tr
                    key={item.type}
                    className={`${
                      idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-gray-100 transition`}
                  >
                    <td className="px-4 py-3 font-semibold">{item.type}</td>
                    <td className="px-4 py-3">{item.size}</td>
                    <td className="px-4 py-3">{item.config}</td>
                    <td className="px-4 py-3 font-semibold text-[#DCA54A]">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">
            Prices are indicative and subject to change. Contact our channel partner team for the
            most current Godrej Golf Links floor plan price list.
          </p>
        </div>

        {/* H2 - Floor Plan Configurations */}
        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
            Godrej Golf Links Floor Plan Configurations
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto text-sm mb-10">
            Godrej Golf Links is a low-density villa township by Godrej Properties — meaning
            every Godrej Golf Links floor plan is an independent standalone villa, not an
            apartment unit. The Godrej Golf Links villas floor plan range is organised across
            seven core variants, each designed for a specific stage of life and lifestyle
            preference.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {villaPlans.map((plan) => (
              <div
                key={plan.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer border border-gray-100"
                onClick={() => {
                  if (!isUnlocked) {
                    openModal();
                  } else {
                    setActivePlan(plan);
                  }
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={plan.image}
                    alt={`${plan.type} ${plan.config} Godrej Golf Links Floor Plan - ${plan.size}`}
                    className={`w-full h-full object-cover transition duration-500 ${
                      !isUnlocked ? "blur-[2px] scale-105" : "hover:scale-105"
                    }`}
                    loading="lazy"
                  />
                  {!isUnlocked && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-sm font-semibold">
                      🔒 Unlock to View
                    </div>
                  )}
                  <span className="absolute top-3 left-3 bg-[#DCA54A] text-white text-xs px-3 py-1 rounded">
                    {plan.type}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    {plan.type} Villa Floor Plan <span className="text-sm font-normal">({plan.size})</span>
                  </h3>
                  <p className="text-sm text-[#DCA54A] font-semibold">{plan.config} · {plan.price}</p>
                  <p className="text-xs text-gray-600 mt-2 line-clamp-2">{plan.description}</p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {plan.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="text-[10px] bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                    {plan.features.length > 3 && (
                      <span className="text-[10px] text-gray-500">+{plan.features.length - 3} more</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* H2 - Selection Guide Table */}
        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
            Choose the Right Godrej Golf Links Floor Plan for You
          </h2>

          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="w-full text-sm md:text-base border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-4 py-3 text-left">If You Are...</th>
                  <th className="px-4 py-3 text-left">Recommended Villa</th>
                  <th className="px-4 py-3 text-left">Why</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { buyer: "A first-time villa buyer", villa: "V1 (3 BHK · ₹3.7 Cr)", why: "Most affordable entry into the Godrej Golf Links villas floor plan range" },
                  { buyer: "A family upgrading from a 3 BHK apartment", villa: "V2 (4 BHK · ₹4 Cr)", why: "Smallest 4 BHK with full villa amenities" },
                  { buyer: "A growing family", villa: "V3 (4 BHK · ₹5.25 Cr) ⭐", why: "Most popular — best balance of space and price" },
                  { buyer: "A larger 4 BHK family", villa: "V4 (4 BHK · ₹7.50 Cr)", why: "More outdoor space, terrace and family lounge" },
                  { buyer: "A multi-generational family", villa: "V5 (5 BHK · ₹14 Cr)", why: "Extra bedroom, larger plot, private pool option" },
                  { buyer: "Building a legacy estate", villa: "V6 (6 BHK · ₹22 Cr)", why: "Premium villa with golf course frontage" },
                  { buyer: "Seeking a flagship estate", villa: "V7 (9 BHK · ₹33 Cr)", why: "Largest plot, 9 BHK — flagship Godrej Golf Links floor plan" },
                ].map((item, idx) => (
                  <tr
                    key={idx}
                    className={`${
                      idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-gray-100 transition`}
                  >
                    <td className="px-4 py-3 font-medium">{item.buyer}</td>
                    <td className="px-4 py-3 font-semibold text-[#DCA54A]">{item.villa}</td>
                    <td className="px-4 py-3 text-sm">{item.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* H2 - Master Plan Section */}
        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            Godrej Golf Links Master Plan
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto text-sm mb-6">
            Alongside the seven individual villa layouts, the Godrej Golf Links master plan is
            the township blueprint that surrounds every Godrej Golf Links villas floor plan. It
            covers the 9-hole championship golf course, the 55,000 sq.ft. clubhouse, landscaped
            green belts, internal road network, sports zones, water bodies and the gated community
            perimeter. The master plan ensures no Godrej Golf Links floor plan sits in isolation —
            every villa, from the V1 to the V7, is part of an integrated, walkable, low-density
            township.
          </p>

          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto text-sm mb-6">
            <ul className="space-y-1 list-disc list-inside text-gray-600">
              <li>9-Hole Championship Golf Course</li>
              <li>55,000 sq.ft. Clubhouse (4 clubhouses)</li>
              <li>Internal road and walking trail network</li>
            </ul>
            <ul className="space-y-1 list-disc list-inside text-gray-600">
              <li>Landscaped green belts and water bodies</li>
              <li>Villa clusters arranged for golf-facing orientations</li>
              <li>Multi-tier gated security with 24×7 surveillance</li>
            </ul>
          </div>

          <div
            className="relative w-full rounded-lg overflow-hidden shadow-lg cursor-pointer group max-w-4xl mx-auto"
            onClick={() => {
              if (!isUnlocked) {
                openModal();
              } else {
                setIsMasterOpen(true);
              }
            }}
          >
            <Image
              src={masterPlan}
              alt="Godrej Golf Links Master Plan - Township Layout with Golf Course and Villa Clusters"
              className="w-full h-[260px] md:h-[320px] object-cover blur-[1px] scale-105"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white">
              <p className="text-lg font-semibold">📐 Godrej Golf Links Master Plan</p>
              <p className="text-sm mt-1">
                {isUnlocked ? "Click to View & Download" : "Unlock to Access"}
              </p>
              <button
                className="mt-4 bg-[#DCA54A] text-white text-xs px-6 py-2 rounded uppercase hover:bg-[#c9943a] transition"
                aria-label="View Master Plan"
              >
                {isUnlocked ? "View Master Plan" : "Unlock Now"}
              </button>
            </div>
            <span className="absolute top-3 left-3 bg-[#DCA54A] text-white text-[10px] px-2 py-1 rounded">
              Premium
            </span>
          </div>
          <div className="text-center mt-4">
            <button
              onClick={() => {
                if (!isUnlocked) openModal();
                else setIsMasterOpen(true);
              }}
              className="bg-[#DCA54A] text-white text-xs px-6 py-2 rounded uppercase hover:bg-[#c9943a] transition"
            >
              View Master Plan PDF
            </button>
          </div>
        </div>

        {/* H2 - PDF Download Section */}
        <div className="mt-8 bg-gray-50 rounded-lg p-6 md:p-8 text-center border border-gray-200">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Godrej Golf Links Floor Plan PDF — Download
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm mb-6">
            The official Godrej Golf Links floor plan PDF includes detailed layout drawings for
            the V1, V2, V3, V4, V5, V6 and V7 Godrej Golf Links villas floor plan, the master
            plan, dimensions, room sizes and orientation references. The PDF is shared directly
            with verified buyers to maintain accurate, RERA-aligned distribution.
          </p>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-6">
            To download the Godrej Golf Links floor plan PDF, share your name, phone and preferred
            villa configuration via the enquiry form below. Our channel partner team will email
            the latest PDF along with the current price sheet within a few hours.
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DCA54A]"
                aria-label="Your Name"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DCA54A]"
                aria-label="Phone Number"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DCA54A]"
                aria-label="Email Address"
              />
              <select
                value={selectedVilla}
                onChange={(e) => setSelectedVilla(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DCA54A]"
                aria-label="Preferred Villa Configuration"
              >
                <option value="">Preferred Villa Configuration</option>
                <option value="V1">V1 - 100 sq.yd · 3 BHK</option>
                <option value="V2">V2 - 125 sq.yd · 4 BHK</option>
                <option value="V3">V3 - 150 sq.yd · 4 BHK</option>
                <option value="V4">V4 - 220 sq.yd · 4 BHK</option>
                <option value="V5">V5 - 300 sq.yd · 5 BHK</option>
                <option value="V6">V6 - 500 sq.yd · 6 BHK</option>
                <option value="V7">V7 - 1000 sq.yd · 9 BHK</option>
              </select>
              <button
                onClick={() => openModal()}
                className="bg-[#DCA54A] text-white font-semibold px-6 py-3 rounded uppercase hover:bg-[#c9943a] transition"
              >
                Email Me the Floor Plan PDF
              </button>
            </div>
          </div>
        </div>

        {/* H2 - Price Info */}
        <div className="text-center text-sm text-gray-500 mt-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Godrej Golf Links Floor Plan Price
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The Godrej Golf Links floor plan price ranges from <strong>₹3.7 Cr</strong> for the
            V1 to <strong>₹33 Cr</strong> for the V7, depending on villa type, plot size, floor
            orientation and current launch phase. Pricing is shared on a one-to-one basis to
            ensure you receive the most current offer applicable to the V1 through V7 Godrej
            Golf Links villas floor plan you're interested in.
          </p>
          <p className="mt-3">
            For the latest price for any Godrej Golf Links villas floor plan, visit the{" "}
            <a href="/price" className="text-[#DCA54A] hover:underline">
              Price page
            </a>{" "}
            or request a callback through the{" "}
            <a href="/contact-us" className="text-[#DCA54A] hover:underline">
              Contact form
            </a>.
          </p>
        </div>
      </div>

      {/* FLOOR PLAN MODAL */}
      {activePlan && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${activePlan.type} ${activePlan.config} Villa Floor Plan`}
          onClick={() => setActivePlan(null)}
        >
          <div className="relative bg-white p-3 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActivePlan(null)}
              className="absolute top-2 right-2 text-black text-xl hover:text-gray-600 z-10 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center"
              aria-label="Close plan preview"
            >
              ✕
            </button>

            <div className="mb-3">
              <h3 className="text-lg font-bold text-gray-900">
                {activePlan.type} {activePlan.config} Floor Plan
              </h3>
              <p className="text-sm text-gray-600">
                {activePlan.size} · {activePlan.price}
              </p>
            </div>

            <Image
              src={activePlan.image}
              alt={`${activePlan.type} ${activePlan.config} Godrej Golf Links Floor Plan - ${activePlan.size}`}
              className="w-full h-auto object-contain"
            />

            <div className="mt-3 flex flex-wrap gap-2">
              {activePlan.features.map((feature) => (
                <span key={feature} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MASTER PLAN MODAL */}
      {isMasterOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Godrej Golf Links Master Plan"
          onClick={() => setIsMasterOpen(false)}
        >
          <div className="relative bg-white p-4 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsMasterOpen(false)}
              className="absolute top-2 right-2 text-black text-xl hover:text-gray-600 z-10 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center"
              aria-label="Close master plan"
            >
              ✕
            </button>

            <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
              Godrej Golf Links Master Plan
            </h3>

            <Image
              src={masterPlan}
              alt="Godrej Golf Links Master Plan - Complete Township Layout"
              className="w-full h-auto object-contain mb-4"
            />

            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="/master-plan.pdf"
                download
                className="bg-[#DCA54A] text-white text-sm px-6 py-3 rounded uppercase hover:bg-[#c9943a] transition"
                aria-label="Download Master Plan PDF"
              >
                📥 Download Master Plan PDF
              </a> 
              <button
                onClick={() => {
                  setIsMasterOpen(false);
                  openModal();
                }}
                className="bg-gray-200 text-gray-700 text-sm px-6 py-3 rounded uppercase hover:bg-gray-300 transition"
              >
                Request Full Brochure
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}