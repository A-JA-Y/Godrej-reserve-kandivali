import { FaWhatsapp } from "react-icons/fa";

const PHONE = "917304216059";
const MESSAGE =
  "Hi, I am interested in Godrej Golf Links, Greater Noida. Please share the details.";

export default function FloatingWhatsapp() {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp at +91 73042 16059"
      title="+91 73042 16059"
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