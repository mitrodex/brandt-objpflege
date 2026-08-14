import LegalLayout from "../layouts/LegalLayout";

function LegalPage({ type }) {
  const isPrivacy = type === "datenschutz";

  return (
    <LegalLayout>
      {isPrivacy ? <PrivacyContent /> : <ImprintContent />}
    </LegalLayout>
  );
}

function ImprintContent() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-[#071b3d]">
        Impressum
      </p>
      <div className="mt-8 flex flex-col gap-8 rounded-md border border-slate-200 bg-white p-7 sm:p-9 lg:flex-row">
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold">Angaben gemäß § 5 DDG</h1>
          <p className="mt-5 leading-7 text-slate-600">
            Brandt Objektpflege
            <br />
            Inhaber: Jonas Brandt
            <br />
            Moorlandbogen 16
            <br />
            21149 Hamburg
            <br />
            Deutschland
          </p>
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-xl font-bold">Kontakt</h2>
          <p className="mt-5 leading-7 text-slate-600">
            Telefon: +49 174 7287170
            <br />
            E-Mail: kontakt@brandt-objektpflege.de
          </p>
          <h2 className="mt-8 text-xl font-bold">Verbraucherstreitbeilegung</h2>
          <p className="mt-4 leading-7 text-slate-600">
            Wir sind nicht verpflichtet und nicht bereit, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </div>
      </div>
    </section>
  );
}

function PrivacyContent() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-[#071b3d]">
        Datenschutz
      </p>
      <div className="mt-8 flex flex-col gap-8 text-slate-700 lg:flex-row">
        <div className="lg:w-[35%]">
          <h1 className="text-3xl font-bold text-slate-950">
            Datenschutzerklärung
          </h1>
          <p className="mt-5 leading-7">
            Diese Erklärung beschreibt, wie personenbezogene Daten beim Besuch
            dieser Webseite und bei Nutzung des Kontaktformulars verarbeitet
            werden. Die Platzhalter müssen vor Veröffentlichung durch die
            tatsächlichen Betreiberdaten ersetzt werden.
          </p>
        </div>
        <div className="flex flex-col gap-8 leading-7 lg:w-[65%]">
          <LegalArticle title="Verantwortlicher">
            Verantwortlich für die Datenverarbeitung ist Brandt Objektpflege,
            Jonas Brandt, Moorlandbogen 16, 21149 Hamburg,
            kontakt@brandt-objektpflege.de, +49 174 7287170.
          </LegalArticle>
          <LegalArticle title="Kontaktformular">
            <p>
              Wenn Sie das Kontaktformular nutzen, verarbeiten wir die von Ihnen
              eingegebenen Daten, insbesondere Name, E-Mail-Adresse,
              Telefonnummer und Nachrichtentext. Die Verarbeitung erfolgt zur
              Bearbeitung Ihrer Anfrage und für mögliche Anschlussfragen.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit die Anfrage
              der Vertragsanbahnung dient, im Übrigen Art. 6 Abs. 1 lit. f DSGVO
              auf Grundlage unseres berechtigten Interesses an einer effizienten
              Kommunikation.
            </p>
            <p className="mt-3">
              Für die technische Übermittlung des Formulars nutzen wir
              FormSubmit. Die im Formular eingegebenen Daten werden an
              FormSubmit übermittelt und anschließend an die hinterlegte
              E-Mail-Adresse weitergeleitet. Bitte prüfen Sie vor
              Veröffentlichung die Datenschutzinformationen und
              Vertragsbedingungen von FormSubmit und ergänzen Sie erforderliche
              Angaben, insbesondere zu Empfängern, Auftragsverarbeitung und
              möglichen Drittlandübermittlungen.
            </p>
          </LegalArticle>
          <LegalArticle title="Hosting und Serverdaten">
            Beim Aufruf der Webseite können durch den Hosting-Anbieter
            technische Zugriffsdaten verarbeitet werden, zum Beispiel
            IP-Adresse, Datum und Uhrzeit des Abrufs, Browsertyp, Betriebssystem
            und angefragte Dateien. Die Verarbeitung dient der sicheren und
            stabilen Bereitstellung der Webseite. Rechtsgrundlage ist Art. 6
            Abs. 1 lit. f DSGVO.
          </LegalArticle>
          <LegalArticle title="Speicherdauer">
            Kontaktanfragen speichern wir nur so lange, wie dies zur Bearbeitung
            der Anfrage erforderlich ist oder gesetzliche Aufbewahrungspflichten
            bestehen. Serverdaten werden nach Maßgabe des Hosting-Anbieters
            gelöscht.
          </LegalArticle>
          <LegalArticle title="Ihre Rechte">
            Sie haben nach Maßgabe der DSGVO Rechte auf Auskunft, Berichtigung,
            Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie
            Widerspruch gegen bestimmte Verarbeitungen. Außerdem können Sie sich
            bei einer Datenschutzaufsichtsbehörde beschweren.
          </LegalArticle>
          <LegalArticle title="Stand">August 2026</LegalArticle>
        </div>
      </div>
    </section>
  );
}

function LegalArticle({ title, children }) {
  return (
    <article>
      <h2 className="text-xl font-bold text-slate-950">{title}</h2>
      <div className="mt-3">{children}</div>
    </article>
  );
}

export default LegalPage;
