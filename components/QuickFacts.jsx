import { RERA_WINGS } from "@/data/project";

const facts = [
  ["Project", "Godrej Reserve"],
  ["Location", "Akurli Road, Kandivali East, Mumbai 400101"],
  ["Land", "18.6 acres"],
  ["Towers", "6 planned (5 wings RERA-registered)"],
  ["Floors", "~G+8P+51"],
  ["Residences", "1,600+ (registered phase)"],
  ["Configurations", "2*, 3 & 4 BHK (*limited)"],
  ["Carpet areas", "750 – 2,039 sq.ft."],
  ["Price", "3 BHK from ₹5.94 Cr.+*"],
  ["Possession", "June 2030 (target)"],
  ["RERA", RERA_WINGS.map((w) => w.number).join(", ")],
];

export default function QuickFacts() {
  return (
    <section className="w-full bg-[#FAF8F4] py-16 px-6" id="quick-facts">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <p className="uppercase text-xs tracking-widest text-[#DCA54A] mb-3">At a Glance</p>
          <h2 className="font-bold text-gray-900 leading-tight">Godrej Reserve Quick Facts</h2>
        </div>

        <div className="overflow-hidden rounded-lg border border-[#e5dcc5] bg-white shadow-sm">
          <table className="w-full text-sm">
            <tbody>
              {facts.map(([label, value], i) => (
                <tr key={label} className={i % 2 ? "bg-[#FCFAF5]" : "bg-white"}>
                  <th
                    scope="row"
                    className="w-[38%] md:w-1/3 text-left align-top px-5 py-3.5 font-semibold text-[#8a6a1f] border-b border-[#efe7d3]"
                  >
                    {label}
                  </th>
                  <td className="px-5 py-3.5 text-gray-800 border-b border-[#efe7d3] break-words">
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[11px] text-gray-500 mt-3 text-center">
          *Indicative agreement value; stamp duty, registration, GST &amp; other charges extra.
        </p>
      </div>
    </section>
  );
}
