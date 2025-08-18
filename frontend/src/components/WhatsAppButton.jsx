
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/254759306105"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-110"
    >
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  );
}

export default WhatsAppButton;
