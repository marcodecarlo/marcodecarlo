import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">COOKIE POLICY</h1>

      <h4 className="font-bold mb-4">INFORMATIVA SUI COOKIE</h4>
      <p className="mb-6">
        I cookie sono piccole stringhe di testo che i siti web visitati
        dall&apos;utente inviano ai dispositivi (di solito il browser), dove
        vengono memorizzati e ritrasmessi una volta che l&apos;utente visita
        nuovamente il sito web. I cookie informatici sono creati non solo dal
        sito web che l&apos;utente sta navigando, ma anche da altri siti web
        (&quot;Terze Parti&quot;) che eseguono annunci, widget, immagini, mappe,
        suoni, link specifici a pagine su altri domini o altri elementi sulla
        pagina in caricamento. I cookie, di solito presenti nei browser degli
        utenti, possono svolgere diverse funzioni e avere diverse
        caratteristiche: autenticazione del computer, tracciamento delle
        sessioni, memorizzazione di informazioni su configurazioni specifiche
        riguardanti gli utenti che accedono al server, ecc.
      </p>

      <h4 className="font-bold mb-4">IL TUO CONSENSO</h4>
      <p className="mb-6">
        Continuando a utilizzare questo sito web, acconsenti
        all&apos;installazione di cookie sul tuo computer al fine di analizzare
        il modo in cui utilizzi il nostro sito web. Leggi attentamente questa
        politica sui cookie per ulteriori dettagli sulle informazioni che
        raccogliamo quando utilizzi questo sito web.
      </p>

      <h4 className="font-bold mb-4">
        TIPO DI COOKIE UTILIZZATI DA QUESTI SITI WEB{" "}
        <Link href="https://marcodecarlo.com" className="text-green-500">
          <span>https://marcodecarlo.com</span>
        </Link>
      </h4>

      <div className="overflow-x-auto mb-8">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border px-4 py-2">Tipologia</th>
              <th className="border px-4 py-2">Utilizzato da</th>
              <th className="border px-4 py-2">Scopo</th>
              <th className="border px-4 py-2">Nome del cookie</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2 text-center">
                Terze Parti, Prestazioni
              </td>
              <td className="border px-4 py-2 text-center">marcodecarlo.com</td>
              <td className="border px-4 py-2 text-center">
                Questi cookie vengono utilizzati per tracciare le prestazioni
                del sito web tramite Google Analytics. Tutti questi cookie
                vengono cancellati dopo un massimo di 1 ora.
              </td>
              <td className="border px-4 py-2 text-center">_ga, _gat, _gid</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 className="font-bold mb-4">
        AUTORIZZAZIONE, BLOCCO E CANCELLAZIONE DEI COOKIE
      </h4>
      <p className="mb-6">
        Gli utenti possono decidere liberamente se installare i nostri cookie o
        ricevere un avviso sullo schermo per ogni singolo cookie e poi decidere
        se installarlo o meno.
      </p>

      <h4 className="font-bold mb-4">
        GESTISCI LE TUE PREFERENZE ATTRAVERSO LE IMPOSTAZIONI DEL TUO BROWSER.
      </h4>

      <ul className="mb-8 list-disc pl-5">
        <li className="mb-2">
          <p>
            Per ulteriori informazioni su Google Chrome, clicca{" "}
            <Link
              href="https://support.google.com/chrome/answer/95647?hl=it"
              className="text-green-500"
            >
              qui
            </Link>
          </p>
        </li>
        <li className="mb-2">
          <p>
            Per ulteriori informazioni su Mozilla Firefox, clicca{" "}
            <Link
              href="https://support.mozilla.org/it/kb/informazioni-sui-cookie-siti-web-salvano-sul-tuo-computer"
              className="text-green-500"
            >
              qui
            </Link>
          </p>
        </li>
        <li>
          <p>
            Per ulteriori informazioni su Safari, clicca{" "}
            <Link
              href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
              className="text-green-500"
            >
              qui
            </Link>
          </p>
        </li>
      </ul>

      <h4 className="font-bold mb-4">
        UTILIZZO DI STRUMENTI FORNITI DA TERZE PARTI DISPONIBILI ONLINE.
        CONTROLLA
      </h4>

      <ul className="mb-8 list-disc pl-5">
        <li className="mb-4">
          <p>
            Alcuni degli strumenti di Terze Parti disponibili online consentono
            all&apos;utente di identificare i cookie su ogni sito web visitato e
            gestirne la disattivazione. Ad esempio, se l&apos;utente non
            desidera essere tracciato da Google Analytics, può gestire le
            opzioni tramite{" "}
            <Link
              href="https://tools.google.com/dlpage/gaoptout?hl=it"
              className="text-green-500"
            >
              questo link
            </Link>
            .
          </p>
        </li>
        <li>
          <p>
            Se l&apos;utente decide di impostare il suo browser per rimuovere
            tutti i cookie o bloccare solo quelli essenziali, potrebbe
            riscontrare problemi durante la procedura di acquisto online. In
            questo caso, la navigazione potrebbe rallentare o generare errori.
            In qualsiasi momento e in ogni caso, l&apos;utente può revocare il
            consenso all&apos;uso dei cookie per questo sito web attraverso le
            impostazioni del browser.
          </p>
        </li>
      </ul>

      <h4 className="font-bold mb-4">COMUNICAZIONE E DIVULGAZIONE</h4>
      <p className="mb-6">
        Le informazioni personali possono essere comunicate a coloro che ne sono
        responsabili, o a professionisti che ne hanno bisogno per esigenze
        organizzative e funzionali e sempre e solo per il solo scopo correlato
        ai servizi offerti. Questo personale è stato adeguatamente formato sulla
        sicurezza e la protezione dei dati personali, con il divieto di
        diffondere o divulgare dati personali a terze parti diverse.
      </p>

      <h4 className="font-bold mb-4">CONTATTI</h4>
      <p className="mb-6">
        Il titolare del trattamento del sito web{" "}
        <Link href="https://marcodecarlo.com" className="text-green-500">
          https://marcodecarlo.com
        </Link>{" "}
        è:{" "}
        <Link
          href="mailto:marcodecarlo.developer@gmail.com"
          className="text-green-500"
        >
          marcodecarlo.developer@gmail.com
        </Link>
      </p>

      <h4 className="font-bold mb-4">INFORMATIVA SULLA PRIVACY</h4>
      <p className="mb-6">
        Per ulteriori informazioni, in conformità al Regolamento UE 679 del 2016
        (Regolamento generale sulla protezione dei dati), consulta la nostra
        informativa sulla privacy.
      </p>
    </div>
  );
}
