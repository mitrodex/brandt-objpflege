import ContactForm from "../components/ContactForm";
import FeatureBand from "../components/FeatureBand";
import FocusAreas from "../components/FocusAreas";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProcessStep from "../components/ProcessStep";
import SectionIntro from "../components/SectionIntro";
import ServiceCard from "../components/ServiceCard";
import { processSteps, services } from "../data/siteContent";

function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />
      <Hero />
      <FeatureBand />
      <ServicesSection />
      <ProcessSection />
      <ObjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

function ServicesSection() {
  return (
    <section id="leistungen" className="scroll-mt-24 bg-white px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Leistungen" title="Reinigung, die zum Objekt passt.">
          Vom gepflegten Treppenhaus bis zur laufenden Büroreinigung: Leistungen
          werden passend zu Nutzung, Frequenz und Anspruch zusammengestellt.
        </SectionIntro>
        <div className="mt-12 flex flex-col overflow-hidden rounded-md border border-slate-200 bg-slate-200 md:flex-row md:flex-wrap">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="ablauf" className="scroll-mt-24 bg-[#071b3d] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-20 sm:px-8 lg:flex-row lg:items-start">
        <div className="lg:w-[45%]">
          <SectionIntro
            eyebrow="Ablauf"
            title="Klar starten, sauber dranbleiben."
            inverted
          >
            Eine gute Reinigung lebt von festen Standards und kurzer
            Kommunikation. Deshalb ist der Ablauf einfach und transparent.
          </SectionIntro>
        </div>
        <div className="flex overflow-hidden rounded-md border border-white/10 bg-white/10 max-sm:flex-col sm:flex-wrap lg:w-[55%]">
          {processSteps.map((step) => (
            <ProcessStep key={step.title} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ObjectsSection() {
  return (
    <section id="objekte" className="scroll-mt-24 bg-slate-50 px-5 py-20 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center">
        <div className="lg:w-1/2">
          <SectionIntro
            eyebrow="Objekte"
            title="Für Immobilien, die täglich funktionieren müssen."
          >
            Brandt Objektpflege unterstützt Eigentümer, Hausverwaltungen und
            Unternehmen bei der laufenden Pflege ihrer Gebäude.
          </SectionIntro>
        </div>
        <div className="lg:w-1/2">
          <FocusAreas />
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="kontakt" className="scroll-mt-24 bg-white px-5 py-20 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row">
        <div className="lg:w-[42%]">
          <SectionIntro eyebrow="Kontakt" title="Objektpflege besprechen.">
            Schreiben Sie kurz, welches Objekt gereinigt werden soll und welche
            Leistungen Sie benötigen. Brandt Objektpflege meldet sich zur
            Abstimmung der nächsten Schritte.
          </SectionIntro>
        </div>
        <div className="lg:w-[58%]">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default HomePage;
