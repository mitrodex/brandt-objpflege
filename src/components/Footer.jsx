import brandIcon from "../assets/icon.jpeg";

function Footer({ simple = false }) {
  if (simple) {
    return (
      <footer className="border-t border-slate-200 px-5 py-8 text-sm text-slate-600 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-5">
          <a className="transition hover:text-[#071b3d]" href="#">
            Startseite
          </a>
          <a className="transition hover:text-[#071b3d]" href="/impressum">
            Impressum
          </a>
          <a className="transition hover:text-[#071b3d]" href="/datenschutz">
            Datenschutz
          </a>
        </div>
      </footer>
    );
  }

  return (
    <footer className="border-t border-slate-200 bg-slate-50 px-5 py-8 text-sm text-slate-600 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="flex items-center gap-2">
          <img
            src={brandIcon}
            alt=""
            className="size-6 rounded bg-white object-cover"
          />
          © Brandt Objektpflege
        </p>
        <div className="flex flex-wrap gap-5">
          <a className="transition hover:text-[#071b3d]" href="/impressum">
            Impressum
          </a>
          <a className="transition hover:text-[#071b3d]" href="/datenschutz">
            Datenschutz
          </a>
          <span>Gebäudereinigung, Objektpflege, Service</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
