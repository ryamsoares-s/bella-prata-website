import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="main-header">
      <div className="container header-container">
        <div className="header-logo">
          <Link href="/">
            <Image
              src="/images/logo-bella-prata.png"
              alt="Logo Bella Prata"
              width={160}
              height={90}
              priority
            />
          </Link>
        </div>
        <nav className="header-nav">
          <ul>
            <li>
              <a href="#essencia">Nossa Essência</a>
            </li>
            <li>
              <a href="#instagram">Instagram</a>
            </li>
            <li>
              <a href="#duvidas">Dúvidas</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
