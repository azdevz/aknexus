import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat({ phone }: { phone: string }) {
  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} color="#fff" fill="#fff" />
    </a>
  );
}
