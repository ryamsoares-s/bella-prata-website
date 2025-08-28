import type { Metadata } from "next";
// 1. Importamos as duas fontes do Google
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

// 2. Configuramos cada fonte e associamos a uma variável CSS
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat", // Disponibiliza a Montserrat como '--font-montserrat'
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cormorant", // Disponibiliza a Cormorant como '--font-cormorant'
});

export const metadata = {
  title: "Bella Prata - Joias em Prata 925",
  description: "Descubra joias exclusivas em Prata 925.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 3. Aplicamos as variáveis ao elemento <html> para que o CSS possa usá-las
    <html
      lang="pt-br"
      className={`${montserrat.variable} ${cormorant.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
