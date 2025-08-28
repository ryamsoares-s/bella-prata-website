import { Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-columns">
          <div className="footer-column">
            <h4>Ajuda e Suporte</h4>
            <ul>
              <li>
                <a href="#duvidas">Dúvidas Frequentes</a>
              </li>
              <li>
                <a href="#">Fale Conosco</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Atendimento</h4>
            <ul>
              <li>
                <p>(65) 98468-6274</p>
              </li>
              <li>
                <p>contato@bellaprata.com</p>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Redes Sociais</h4>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/pratasbella1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={24} />
              </a>
              <a href="#">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Bella Prata. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
