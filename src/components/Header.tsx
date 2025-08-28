import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="main-header">
      <div className="container header-container">
        <div className="header-logo">
          <h1>Bella Prata</h1>
        </div>
        <nav className="header-nav">
          <ul>
            <li>
              <a href="#instagram">Ver Coleção</a>
            </li>
            <li>
              <a href="#duvidas">Dúvidas</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
