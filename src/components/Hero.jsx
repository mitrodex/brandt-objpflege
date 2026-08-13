import brandLogo from "../assets/logo-big.jpeg";

const heroBackground = {
  backgroundImage:
    "radial-gradient(circle at 82% 18%, rgba(148, 163, 184, 0.34), transparent 30%), linear-gradient(135deg, #071b3d 0%, #0b2a5a 48%, #6f7479 100%)",
};

function Hero() {
  return (
    <section
      id="start"
      className="relative flex min-h-[78vh] scroll-mt-24 items-center overflow-hidden lg:min-h-[calc(100vh-128px)]"
      style={heroBackground}
    >
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 pb-20 pt-28 text-white sm:px-8 sm:pb-20 sm:pt-32 lg:flex-row lg:items-center lg:justify-between lg:pb-12 lg:pt-24">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-200">
            Gebäudereinigung, Objektpflege, Service
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-6xl">
            Gepflegte Immobilien, zuverlässig betreut.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-100">
            Brandt Objektpflege reinigt und betreut Wohn- und Gewerbeobjekte
            mit klaren Abläufen, festen Ansprechpartnern und Blick fürs Detail.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#kontakt"
              className="rounded-md bg-white px-5 py-3 text-sm font-bold text-[#071b3d] transition hover:bg-slate-100"
            >
              Angebot anfragen
            </a>
            <a
              href="#leistungen"
              className="rounded-md border border-white/45 px-5 py-3 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
            >
              Leistungen ansehen
            </a>
          </div>
        </div>
        <img
          src={brandLogo}
          alt="Brandt Objektpflege"
          className="w-full max-w-sm self-start rounded-md bg-white p-4 shadow-2xl shadow-black/30 lg:self-auto"
        />
      </div>
    </section>
  );
}

export default Hero;
