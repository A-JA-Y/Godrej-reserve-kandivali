import { FaAward, FaLandmark, FaSubway, FaSwimmingPool, FaTree } from "react-icons/fa";
import { MdBalcony } from "react-icons/md";

const reasons = [
  {
    icon: FaLandmark,
    title: "18.6-Acre Landmark",
    body: "One of the biggest luxury developments in Mumbai's western suburbs, with a ~₹7,000 crore development on a single freehold land parcel.",
  },
  {
    icon: FaTree,
    title: "~6 Acres of Greens",
    body: "Forest Retreat, Tropical Oasis, Spring Terraces and Green Acres: four themed zones spread across two landscape levels.",
  },
  {
    icon: MdBalcony,
    title: "Private Deck Homes",
    body: "Every 3 and 4 BHK comes with a private deck; 4 BHKs add a walk-in wardrobe.",
  },
  {
    icon: FaSwimmingPool,
    title: "40+ Resort Amenities",
    body: "Olympic-length pool, aqua gym, temperature-controlled pool and a ~57,000 sq.ft.* clubhouse.",
  },
  {
    icon: FaSubway,
    title: "Unbeatable Connectivity",
    body: "Growel's 101 Mall ~100 m, Akurli Metro Station (Line 7) ~300 m, Kandivali Railway Station minutes away, Western Express Highway at the doorstep.",
  },
  {
    icon: FaAward,
    title: "Godrej Trust",
    body: "A 127-year Godrej legacy and Mumbai's best-selling launch of 2024.",
  },
];

export default function WhyGodrejReserve() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8" id="why-godrej-reserve">
      <div className="max-w-6xl mx-auto">
        <p className="text-center uppercase mb-3 text-[#c8922a] tracking-widest text-sm">
          The Reserve Advantage
        </p>
        <h2 className="text-center font-semibold text-gray-900 mb-4 leading-tight">
          Why Godrej Reserve Kandivali
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto text-sm leading-relaxed">
          Scale, greens and connectivity that are rare in Mumbai&apos;s western suburbs — backed by
          the Godrej name.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-[#FCFAF5] border border-[#efe7d3] border-t-[3px] border-t-[#DCA54A] rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#0B5842] text-[#E9C77B] text-lg mb-4">
                <Icon aria-hidden="true" />
              </span>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
