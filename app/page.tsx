import { ProfileImage, Nav } from "@/components";

export default function Home() {
  return (
    <div className="rounded-2xl bg-white/5 p-4 md:p-7 shadow-lg shadow-green-800/50 animate-grow">
      <div className="flex flex-wrap items-center">
        <ProfileImage />

        <div className="mx-3 flex-1 sm:mx-6 min-w-72">
          <h1 className="text-4xl font-semibold leading-none text-green-100">
            Marco De Carlo
          </h1>
          <h2 className="mt-2 text-lg font-medium leading-none text-green-100/50">
            Web Developer
          </h2>
          <Nav />
        </div>

        <div className="my-5 space-y-3">
          <p>
            Ciao, sono Marco, un Web Developer di 31 anni con base ad
            Alberobello, ma sempre con la valigia pronta. La mia passione per
            l'informatica è iniziata presto: ho frequentato le scuole superiori
            come perito informatico e mi sono laureato in Informatica presso
            l'Università degli Studi di Milano.
          </p>
          <p>
            Da piccolo, passavo molto tempo a giocare con i Lego, costruendo e
            inventando storie con i personaggi. Questo amore per la costruzione
            e la creatività ha trovato terreno fertile nella programmazione, che
            mi ha permesso di costruire e realizzare software innovativi e
            funzionali.
          </p>
          <p>
            Inizialmente mi sono approcciato al mondo del Frontend e all'uso di
            programmi come Photoshop, Illustrator e After Effects. Con il tempo,
            ho ampliato le mie conoscenze anche ai linguaggi di Backend,
            permettendomi di creare E-Commerce, Blog e Siti Web per clienti in
            cerca di consulenza.
          </p>
          <p>
            Quando un progetto mi appassiona, mi dedico completamente, curando
            ogni dettaglio e lavorando in team per apprendere nuove tecnologie e
            ottimizzare il flusso di lavoro.
          </p>
          <p>
            Sono sempre alla ricerca di nuove sfide e opportunità per mettere le
            mani su progetti stimolanti e innovativi.
          </p>
        </div>
      </div>
    </div>
  );
}
