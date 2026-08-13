import { navLinks } from "../data/siteContent";
import BrandLink from "./BrandLink";

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-20 border-b border-white/15 bg-[#071b3d]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 text-white sm:px-8">
        <BrandLink compact />
        <div className="hidden items-center gap-7 text-sm font-medium text-slate-200 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#kontakt"
          className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#071b3d] transition hover:bg-slate-100"
        >
          Anfrage
        </a>
      </nav>
    </header>
  );
}

export default Header;
