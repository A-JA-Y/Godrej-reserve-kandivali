import { FaWhatsapp } from "react-icons/fa";
import { PARTNER, whatsappLink } from "@/data/project";

const MESSAGE =
  "Hi, I am interested in Godrej Reserve, Kandivali East. Please share the details.";

export default function FloatingWhatsapp() {
  return (
    <a
      href={whatsappLink(MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with us on WhatsApp at ${PARTNER.phoneDisplay}`}
      title={PARTNER.phoneDisplay}
      className="
        fixed bottom-6 right-3 z-[1000]
        flex items-center justify-center
        w-16 h-16
        rounded-full bg-[#25D366] text-white
        shadow-xl
        hover:bg-[#1ebe57] hover:scale-110
        transition-all duration-300
        animate-bounce
      "
    >
      <FaWhatsapp
        size={34}
        className="animate-pulse"
      />
    </a>
  );
}
