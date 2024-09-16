import { Header } from "@/components";

export default function Home() {
  return (
    <div className="rounded-2xl bg-white/5 p-4 md:p-7 shadow-lg shadow-green-800/50 animate-grow">
      <Header sticky={false} />

      <div className="my-5 space-y-3">
        <p>
          {`Ciao, sono Marco, un Web Developer di 31 anni con base ad
            Alberobello, ma sempre con la valigia pronta. La mia passione per
            l'informatica è iniziata presto: ho frequentato le scuole superiori
            come perito informatico e mi sono laureato in Informatica presso
            l'Università degli Studi di Milano.`}
        </p>
        <p>
          {`Da piccolo, passavo molto tempo a giocare con i Lego, costruendo e
            inventando storie con i personaggi. Questo amore per la costruzione
            e la creatività ha trovato terreno fertile nella programmazione, che
            mi ha permesso di costruire e realizzare software innovativi e
            funzionali.`}
        </p>
        <p>
          {`Inizialmente mi sono approcciato al mondo del Frontend e all'uso di
            programmi come Photoshop, Illustrator e After Effects. Con il tempo,
            ho ampliato le mie conoscenze anche ai linguaggi di Backend,
            permettendomi di creare E-Commerce, Blog e Siti Web per clienti in
            cerca di consulenza.`}
        </p>
        <p>
          {`Quando un progetto mi appassiona, mi dedico completamente, curando
            ogni dettaglio e lavorando in team per apprendere nuove tecnologie e
            ottimizzare il flusso di lavoro.`}
        </p>
        <p>
          {`Sono sempre alla ricerca di nuove sfide e opportunità per mettere le
            mani su progetti stimolanti e innovativi.`}
        </p>
      </div>
    </div>
  );
}
