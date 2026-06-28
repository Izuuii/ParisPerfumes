import { site } from "../data/site";
import { IconWhatsApp } from "./icons";

export default function FloatingWhatsApp() {
  return (
    <a
      href={site.contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contáctanos por WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform hover:scale-105"
    >
      <IconWhatsApp className="h-7 w-7" />
    </a>
  );
}
