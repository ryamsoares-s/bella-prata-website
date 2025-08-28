"use client"; // Necessário para usar interatividade (useState) no Next.js App Router

import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Dados das perguntas e respostas
const faqData = [
  {
    question: "Qual o material das joias?",
    answer:
      "Todas as nossas joias são confeccionadas em Prata 925 legítima. A Prata 925 é uma liga de alta qualidade composta por 92,5% de prata pura.",
  },
  {
    question: "Como posso cuidar da minha peça?",
    answer:
      "Para manter o brilho da sua joia, evite o contato com produtos químicos, perfumes e água do mar. Guarde-a em local seco e limpe-a com uma flanela macia.",
  },
  {
    question: "Qual o prazo de entrega?",
    answer:
      "O prazo de entrega varia de acordo com a sua localidade. Após a confirmação do pagamento, preparamos seu pedido e informamos o código de rastreio.",
  },
  {
    question: "A loja física existe?",
    answer:
      "No momento, a Bella Prata é uma loja exclusivamente online, com atendimento personalizado através do WhatsApp e Instagram para todo o Brasil.",
  },
];

export function Faq() {
  // O 'useState' controla qual pergunta está aberta. '-1' significa nenhuma.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="duvidas" className="faq-section">
      <div className="container">
        <h2 className="section-title">Dúvidas Frequentes</h2>
        <div className="accordion">
          {faqData.map((item, index) => (
            <div key={index} className="accordion-item">
              <button
                onClick={() => toggleFaq(index)}
                className="accordion-question"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`accordion-answer ${
                  openIndex === index ? "open" : ""
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
