import { formSubmitEndpoint } from "../data/siteContent";

const inputClass =
  "rounded-md border border-slate-300 px-4 py-3 outline-none transition focus:border-[#071b3d]";
const legalLinkClass = "font-semibold text-[#071b3d] underline";

function ContactForm() {
  return (
    <form action={formSubmitEndpoint} className="flex flex-col gap-4" method="POST">
      <input type="hidden" name="_subject" value="Neue Anfrage über die Webseite" />
      <input type="hidden" name="_template" value="table" />
      <input
        type="text"
        name="_honey"
        className="hidden"
        tabIndex="-1"
        autoComplete="off"
      />
      <div className="flex flex-col gap-4 sm:flex-row">
        <input
          className={`${inputClass} flex-1`}
          name="name"
          placeholder="Name"
          required
          type="text"
        />
        <input
          className={`${inputClass} flex-1`}
          name="email"
          placeholder="E-Mail"
          required
          type="email"
        />
      </div>
      <input
        className={inputClass}
        name="telefon"
        placeholder="Telefon"
        type="tel"
      />
      <textarea
        className={`${inputClass} min-h-36`}
        name="nachricht"
        placeholder="Objekt, Ort und gewünschte Leistung"
        required
      />
      <label className="flex items-start gap-3 text-sm leading-6 text-slate-600">
        <input
          className="mt-1 size-4 rounded border-slate-300 accent-[#071b3d]"
          name="datenschutz_zustimmung"
          required
          type="checkbox"
          value="zugestimmt"
        />
        <span>
          Ich habe die{" "}
          <a className={legalLinkClass} href="#/datenschutz">
            Datenschutzerklärung
          </a>{" "}
          gelesen und stimme zu, dass meine Angaben zur Bearbeitung der Anfrage
          verarbeitet werden.
        </span>
      </label>
      <button
        className="rounded-md bg-[#071b3d] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0b2a5a]"
        type="submit"
      >
        Anfrage senden
      </button>
    </form>
  );
}

export default ContactForm;
