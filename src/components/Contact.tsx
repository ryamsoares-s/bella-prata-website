import { MessageCircle, Instagram, Mail } from "lucide-react";

export function Contact() {
  const phoneNumber = "556599990274";
  const message =
    "Olá! Vim pelo site da Bella Prata e gostaria de mais informações.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  return (
    <section id="contato" className="contact-section">
      <div className="container">
        <h2 className="section-title">Entre em Contato</h2>
        <p className="section-subtitle">
          Adoraríamos ouvir de você! Nos chame em um de nossos canais.
        </p>
        <div className="contact-channels">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <MessageCircle size={32} />
            <h3>WhatsApp</h3>
            <p>(65) 99999-0274</p>
          </a>
          <a
            href="https://www.instagram.com/pratasbella1/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <Instagram size={32} />
            <h3>Instagram</h3>
            <p>@pratasbella1</p>
          </a>
          <a href="mailto:contato@bellaprata.com" className="contact-card">
            <Mail size={32} />
            <h3>E-mail</h3>
            <p>contato@bellaprata.com</p>
          </a>
        </div>
      </div>
    </section>
  );
}
