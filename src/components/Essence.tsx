import { Heart, Sun, Sparkles } from "lucide-react";

export function Essence() {
  return (
    <section className="essence-section" id="essencia">
      <div className="container">
        <h2>Nossa Essência em Cada Detalhe</h2>
        <div className="essence-content">
          <div className="essence-item">
            <Heart size={30} />
            <h3>Paixão pela Prata</h3>
            <p>
              Cada joia é escolhida a dedo, refletindo nosso amor pela beleza e
              qualidade da Prata 925.
            </p>
          </div>
          <div className="essence-item">
            <Sun size={30} />
            <h3>Realçando seu Brilho</h3>
            <p>
              Acreditamos que as joias são uma forma de iluminar sua autoestima
              e celebrar quem você é.
            </p>
          </div>
          <div className="essence-item">
            <Sparkles size={30} />
            <h3>Momentos Especiais</h3>
            <p>
              Nossas peças são perfeitas para marcar histórias, presentear quem
              você ama e criar memórias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
