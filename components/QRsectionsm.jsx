import Image from "next/image";

import reraScaled from "../assets/Rera-Godrej-Detail.webp";


const ReraStrip = () => {
  return (
    <div className="block md:hidden w-full bg-[#F2EDE0]  py-[5px] text-[1rem]">
      <Image
        src={reraScaled}
        alt="RERA Gaur Aero Suites"
        className="w-full h-auto object-contain"
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 400px"
        quality={80}
       
      />
    </div>
  );
};

export default ReraStrip;
