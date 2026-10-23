import { MAHARERA_URL, RERA_WINGS } from "@/data/project";

const ReraStrip = () => {
  return (
    <div className="block md:hidden w-full bg-[#F2EDE0] px-5 py-3 text-center">
      <p className="text-[11px] font-semibold uppercase tracking-widest text-[#8a6a1f]">
        MahaRERA Registered
      </p>
      <p className="mt-1 text-[11px] leading-relaxed text-[#3B3B3B]">
        {RERA_WINGS.map((w) => `${w.wing}: ${w.number}`).join(" · ")}
      </p>
      <a
        href={MAHARERA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[11px] text-[#8a6a1f] underline underline-offset-2"
      >
        maharera.maharashtra.gov.in
      </a>
    </div>
  );
};

export default ReraStrip;
