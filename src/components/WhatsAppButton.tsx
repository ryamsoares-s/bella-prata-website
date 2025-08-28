import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "5565984686274";
  const message = "Olá! Vi o site da Bella Prata e gostaria de ver mais joias.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <MessageCircle size={32} />
    </a>
  );
}
