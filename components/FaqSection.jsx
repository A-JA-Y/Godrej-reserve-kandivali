import JsonLd from "./JsonLd";

const faqs = [
  {
    q: "Where is Godrej Reserve located?",
    a: "Godrej Reserve is on Akurli Road, Kandivali East, Mumbai 400101 — opposite Growel's 101 Mall, about 300 m from Akurli Metro Station (Line 7) and a minute from the Western Express Highway.",
  },
  {
    q: "What configurations are available at Godrej Reserve Kandivali?",
    a: "Spacious 3 BHK (1,126–1,471 sq.ft. carpet) and 4 BHK (2,009–2,039 sq.ft. carpet) residences with private decks. A limited run of 2 BHKs (750–822 sq.ft.) was offered in the first phase and is largely sold out.",
  },
  {
    q: "What is the Godrej Reserve Kandivali price?",
    a: "3 BHK residences start at ₹5.94 Cr.+* (indicative agreement value; taxes and charges extra). All-inclusive market cost sheets range from about ₹4.85 Cr for compact 3 BHKs to ₹9.40 Cr for 4 BHKs. Request the current cost sheet for exact pricing.",
  },
  {
    q: "What is the possession date of Godrej Reserve?",
    a: "Possession is targeted for June 2030; the MahaRERA completion date is December 2030. Construction was about 50% complete as of mid-2026.",
  },
  {
    q: "Is Godrej Reserve RERA registered?",
    a: "Yes. Five wings are registered with MahaRERA: P51800054703, P51800079457, P51800055694, P51800054691 and P51800054690 (verifiable at maharera.maharashtra.gov.in).",
  },
  {
    q: "How big is the project and how much of it is open space?",
    a: "Godrej Reserve spreads across 18.6 acres with roughly 6 acres (75%*) of landscaped open space over two podium levels, four themed landscape zones and a ~57,000 sq.ft.* clubhouse with 40+ amenities.",
  },
  {
    q: "Why is Godrej Reserve a good investment in Kandivali East?",
    a: "An 18.6-acre branded development is rare in Mumbai's western suburbs. The project launched with ~₹2,690 crore in sales (Godrej Properties' best-ever Mumbai launch), sits ~300 m from the metro, and commands pricing backed by scale, greens and the Godrej brand. (Not investment advice — do your own diligence.)",
  },
  {
    q: "What payment plans and offers are available?",
    a: "A 25:25:50 construction-linked plan — 10% booking amount, 15% within 45 days of booking, 25% in March 2027, 40% on application of the Occupancy Certificate and 10% on intimation of possession. Project loans are approved by SBI, HDFC, ICICI, Axis, Kotak and others, and a bank-subvention scheme (no EMI for 2 years from the Agreement for Sale) has been advertised by the developer — confirm current offers at enquiry.",
  },
];

export default function FaqSection() {
  return (
    <section className="w-full bg-white py-16 px-6" id="faq">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        }}
      />

      <div className="max-w-4xl mx-auto">
        <p className="text-center uppercase text-xs tracking-widest text-[#DCA54A] mb-3">FAQ</p>
        <h2 className="text-center font-bold text-gray-900 mb-10 leading-tight">
          Godrej Reserve Kandivali — Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <details
              key={q}
              open={i === 0}
              className="group border border-[#e5dcc5] rounded-lg bg-[#FCFAF5] open:bg-white"
            >
              <summary className="flex justify-between items-center gap-4 cursor-pointer list-none px-5 py-4">
                <h3 className="text-[15px] font-semibold text-gray-900">{q}</h3>
                <span
                  aria-hidden="true"
                  className="text-[#c8952a] text-sm flex-shrink-0 transition-transform group-open:rotate-180"
                >
                  ▾
                </span>
              </summary>
              <p className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
