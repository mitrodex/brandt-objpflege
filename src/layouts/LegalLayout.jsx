import BrandLink from "../components/BrandLink";
import Footer from "../components/Footer";

function LegalLayout({ children }) {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <BrandLink tone="dark" />
          <a
            className="rounded-md bg-[#071b3d] px-4 py-2 text-sm font-bold text-white"
            href="/"
          >
            Zur Startseite
          </a>
        </nav>
      </header>
      {children}
      <Footer simple />
    </main>
  );
}

export default LegalLayout;
