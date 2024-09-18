import { Header } from "@/components";
import Balancer from "react-wrap-balancer";

export default function Home() {
  return (
    <div className="rounded-2xl bg-white/5 p-4 md:p-7 shadow-lg shadow-green-800/50 animate-grow">
      <Header sticky={false} />

      <div className="my-5 space-y-3">
        <p>
          <Balancer>
            {`Ciao, sono Marco, un Web Developer di 31 anni con base ad
            Alberobello, ma sempre con la valigia pronta. La mia passione per
            l'informatica è iniziata presto: ho frequentato le scuole superiori
            come perito informatico e mi sono laureato in Informatica presso
            l'Università degli Studi di Milano.`}
          </Balancer>
        </p>
        <p>
          <Balancer>
            {`Da piccolo, passavo molto tempo a giocare con i Lego, costruendo e
            inventando storie con i personaggi. Questo amore per la costruzione
            e la creatività ha trovato terreno fertile nella programmazione, che
            mi ha permesso di costruire e realizzare software innovativi e
            funzionali.`}
          </Balancer>
        </p>
        <p>
          <Balancer>
            {`Inizialmente mi sono approcciato al mondo del Frontend e all'uso di
            programmi di grafica come Photoshop, Illustrator e After Effects. Con il tempo,
            ho ampliato le mie conoscenze anche ai linguaggi di Backend,
            permettendomi di creare E-Commerce, Blog e Siti Web per clienti in
            cerca di consulenza.`}
          </Balancer>
        </p>
        <p>
          <Balancer>
            {`Quando un progetto mi appassiona, mi dedico completamente, curando
            ogni dettaglio e lavorando in team per apprendere nuove tecnologie e
            ottimizzare il flusso di lavoro.`}
          </Balancer>
        </p>
        <p>
          <Balancer>
            {`Sono sempre alla ricerca di nuove sfide e opportunità per mettere le
            mani su progetti stimolanti e innovativi.`}
          </Balancer>
        </p>
      </div>
    </div>
  );
}
