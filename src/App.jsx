const services = [
  {
    number: '01',
    title: 'Unterhaltsreinigung',
    text: 'Regelmäßige Reinigung von Büros, Praxen, Hausfluren und Gewerbeflächen mit klar abgestimmten Intervallen.',
  },
  {
    number: '02',
    title: 'Glas- und Rahmenreinigung',
    text: 'Saubere Fenster, Glasflächen und Rahmen für gepflegte Eingänge, Arbeitsräume und Immobilien.',
  },
  {
    number: '03',
    title: 'Treppenhausreinigung',
    text: 'Zuverlässige Pflege gemeinschaftlicher Bereiche in Wohn- und Geschäftsgebäuden.',
  },
  {
    number: '04',
    title: 'Außenanlagen & Service',
    text: 'Ordentliche Eingangsbereiche, Wege und Außenflächen als erster guter Eindruck Ihrer Immobilie.',
  },
]

const process = [
  ['01', 'Besichtigung', 'Objekt, Flächen und gewünschte Leistungen gemeinsam aufnehmen.'],
  ['02', 'Planung', 'Reinigungsplan, Rhythmus und Zuständigkeiten verständlich festlegen.'],
  ['03', 'Umsetzung', 'Saubere Durchführung mit festen Abläufen und erreichbaren Ansprechpartnern.'],
  ['04', 'Kontrolle', 'Regelmäßige Abstimmung, kurze Wege und Anpassung bei Bedarf.'],
]

const focusAreas = [
  'Büros und Praxen',
  'Mehrfamilienhäuser',
  'Gewerbeflächen',
  'Eingangsbereiche',
]

function App() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950">
      <header className="fixed left-0 right-0 top-0 z-20 border-b border-white/15 bg-zinc-950/75 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 text-white sm:px-8">
          <a href="#start" className="flex items-center gap-3 font-semibold">
            <span className="grid size-9 place-items-center rounded-md bg-emerald-400 text-zinc-950">
              B
            </span>
            <span>Brandt Objektpflege</span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-zinc-200 md:flex">
            <a href="#leistungen" className="transition hover:text-white">
              Leistungen
            </a>
            <a href="#ablauf" className="transition hover:text-white">
              Ablauf
            </a>
            <a href="#objekte" className="transition hover:text-white">
              Objekte
            </a>
            <a href="#kontakt" className="transition hover:text-white">
              Kontakt
            </a>
          </div>
          <a
            href="#kontakt"
            className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-100"
          >
            Anfrage
          </a>
        </nav>
      </header>

      <section
        id="start"
        className="relative flex min-h-[88vh] items-end bg-zinc-900 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(9, 9, 11, 0.88), rgba(9, 9, 11, 0.56), rgba(9, 9, 11, 0.22)), url("https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1800&q=80")',
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-32 text-white sm:px-8 lg:pb-24">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
            Gebäudereinigung, Objektpflege, Service
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
            Gepflegte Immobilien, zuverlässig betreut.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-100">
            Brandt Objektpflege reinigt und betreut Wohn- und Gewerbeobjekte
            mit klaren Abläufen, festen Ansprechpartnern und Blick fürs Detail.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#kontakt"
              className="rounded-md bg-emerald-400 px-5 py-3 text-sm font-bold text-zinc-950 transition hover:bg-emerald-300"
            >
              Angebot anfragen
            </a>
            <a
              href="#leistungen"
              className="rounded-md border border-white/40 px-5 py-3 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
            >
              Leistungen ansehen
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:grid-cols-3 sm:px-8">
          <div>
            <p className="text-sm font-semibold text-zinc-500">Planbar</p>
            <p className="mt-1 text-lg font-bold">Feste Reinigungsintervalle</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-zinc-500">Gründlich</p>
            <p className="mt-1 text-lg font-bold">Saubere Flächen und Details</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-zinc-500">Nahbar</p>
            <p className="mt-1 text-lg font-bold">Direkte Abstimmung vor Ort</p>
          </div>
        </div>
      </section>

      <section id="leistungen" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Leistungen
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
            Reinigung, die zum Objekt passt.
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-600">
            Vom gepflegten Treppenhaus bis zur laufenden Büroreinigung:
            Leistungen werden passend zu Nutzung, Frequenz und Anspruch
            zusammengestellt.
          </p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-zinc-200 bg-zinc-200 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="bg-white p-7 sm:p-9">
              <p className="text-sm font-bold text-emerald-700">
                {service.number}
              </p>
              <h3 className="mt-8 text-2xl font-bold">{service.title}</h3>
              <p className="mt-4 leading-7 text-zinc-600">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="ablauf" className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                Ablauf
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
                Klar starten, sauber dranbleiben.
              </h2>
              <p className="mt-5 text-lg leading-8 text-zinc-300">
                Eine gute Reinigung lebt von festen Standards und kurzer
                Kommunikation. Deshalb ist der Ablauf einfach und transparent.
              </p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-md border border-white/10 bg-white/10 sm:grid-cols-2">
              {process.map(([number, title, text]) => (
                <article key={title} className="bg-zinc-950 p-7">
                  <p className="text-sm font-bold text-emerald-300">{number}</p>
                  <h3 className="mt-8 text-xl font-bold">{title}</h3>
                  <p className="mt-4 leading-7 text-zinc-300">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="objekte" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Objekte
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
              Für Immobilien, die täglich funktionieren müssen.
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-600">
              Brandt Objektpflege unterstützt Eigentümer, Hausverwaltungen und
              Unternehmen bei der laufenden Pflege ihrer Gebäude.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <div
                key={area}
                className="rounded-md border border-zinc-200 bg-white p-5 text-lg font-bold shadow-sm"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Kontakt
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
              Objektpflege besprechen.
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-600">
              Schreiben Sie kurz, welches Objekt gereinigt werden soll und
              welche Leistungen Sie benötigen. Brandt Objektpflege meldet sich
              zur Abstimmung der nächsten Schritte.
            </p>
          </div>
          <form className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                className="rounded-md border border-zinc-300 px-4 py-3 outline-none transition focus:border-emerald-600"
                placeholder="Name"
                type="text"
              />
              <input
                className="rounded-md border border-zinc-300 px-4 py-3 outline-none transition focus:border-emerald-600"
                placeholder="E-Mail"
                type="email"
              />
            </div>
            <input
              className="rounded-md border border-zinc-300 px-4 py-3 outline-none transition focus:border-emerald-600"
              placeholder="Telefon"
              type="tel"
            />
            <textarea
              className="min-h-36 rounded-md border border-zinc-300 px-4 py-3 outline-none transition focus:border-emerald-600"
              placeholder="Objekt, Ort und gewünschte Leistung"
            />
            <button
              className="rounded-md bg-zinc-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
              type="button"
            >
              Anfrage senden
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-zinc-200 bg-zinc-50 px-5 py-8 text-sm text-zinc-600 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© Brandt Objektpflege</p>
          <p>Gebäudereinigung, Objektpflege, Service</p>
        </div>
      </footer>
    </main>
  )
}

export default App
