import { Tag, CreditCard, Truck } from "lucide-react";

export function InfoBar() {
  return (
    <section className="info-bar">
      <div className="container info-bar-content">
        <div className="info-item">
          <Tag size={40} strokeWidth={1} />
          <h4>DESCONTO DE 5% OFF</h4>
          <p>pagamentos por PIX</p>
        </div>
        <div className="info-item">
          <CreditCard size={40} strokeWidth={1} />
          <h4>PARCELE EM ATÉ 6X</h4>
          <p>sem juros</p>
        </div>
        <div className="info-item">
          <Truck size={40} strokeWidth={1} />
          <h4>FRETE GRÁTIS</h4>
          <p>acima de R$199</p>
        </div>
      </div>
    </section>
  );
}
