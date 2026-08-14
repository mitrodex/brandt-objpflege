import { useState } from "react";
import { formSubmitEndpoint } from "../data/siteContent";

const inputClass =
  "w-full rounded-md border border-slate-300 px-4 py-3 outline-none transition focus:border-[#071b3d] focus:ring-2 focus:ring-[#071b3d]/10";
const invalidInputClass =
  "border-red-500 bg-red-50/70 focus:border-red-600 focus:ring-red-100";
const labelClass = "text-sm font-semibold text-slate-800";
const legalLinkClass = "font-semibold text-[#071b3d] underline";

const initialErrors = {
  name: "",
  email: "",
  nachricht: "",
  datenschutz_zustimmung: "",
};

function validate(values) {
  const nextErrors = { ...initialErrors };

  if (!values.name.trim()) {
    nextErrors.name = "Bitte geben Sie Ihren Namen ein.";
  }

  if (!values.email.trim()) {
    nextErrors.email = "Bitte geben Sie Ihre E-Mail-Adresse ein.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    nextErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
  }

  if (!values.nachricht.trim()) {
    nextErrors.nachricht = "Bitte beschreiben Sie kurz Ihr Objekt oder Anliegen.";
  }

  if (!values.datenschutz_zustimmung) {
    nextErrors.datenschutz_zustimmung =
      "Bitte stimmen Sie der Verarbeitung Ihrer Angaben zu.";
  }

  return nextErrors;
}

function hasErrors(errors) {
  return Object.values(errors).some(Boolean);
}

function FieldError({ id, children }) {
  if (!children) {
    return null;
  }

  return (
    <p id={id} className="mt-2 text-sm font-medium text-red-700">
      {children}
    </p>
  );
}

function ContactForm() {
  const [errors, setErrors] = useState(initialErrors);
  const [submitted, setSubmitted] = useState(false);

  function getValues(form) {
    const formData = new FormData(form);

    return {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      nachricht: String(formData.get("nachricht") || ""),
      datenschutz_zustimmung: formData.has("datenschutz_zustimmung"),
    };
  }

  function validateForm(form) {
    const nextErrors = validate(getValues(form));
    setErrors(nextErrors);

    return !hasErrors(nextErrors);
  }

  function handleSubmit(event) {
    setSubmitted(true);

    if (!validateForm(event.currentTarget)) {
      event.preventDefault();
    }
  }

  function handleChange(event) {
    if (submitted) {
      validateForm(event.currentTarget.form);
    }
  }

  return (
    <form
      action={formSubmitEndpoint}
      className="flex flex-col gap-5"
      method="POST"
      noValidate
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
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
        <div className="flex-1">
          <label className={labelClass} htmlFor="contact-name">
            Name
          </label>
          <input
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            aria-invalid={Boolean(errors.name)}
            className={`${inputClass} mt-2 ${errors.name ? invalidInputClass : ""}`}
            id="contact-name"
            name="name"
            placeholder="Max Mustermann"
            type="text"
          />
          <FieldError id="contact-name-error">{errors.name}</FieldError>
        </div>
        <div className="flex-1">
          <label className={labelClass} htmlFor="contact-email">
            E-Mail
          </label>
          <input
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            aria-invalid={Boolean(errors.email)}
            className={`${inputClass} mt-2 ${errors.email ? invalidInputClass : ""}`}
            id="contact-email"
            name="email"
            placeholder="name@example.de"
            type="email"
          />
          <FieldError id="contact-email-error">{errors.email}</FieldError>
        </div>
      </div>
      <div>
        <label className={labelClass} htmlFor="contact-phone">
          Telefon
        </label>
        <input
          className={`${inputClass} mt-2`}
          id="contact-phone"
          name="telefon"
          placeholder="+49 123 456789"
          type="tel"
        />
      </div>
      <div>
        <label className={labelClass} htmlFor="contact-message">
          Nachricht
        </label>
        <textarea
          aria-describedby={
            errors.nachricht ? "contact-message-error" : undefined
          }
          aria-invalid={Boolean(errors.nachricht)}
          className={`${inputClass} mt-2 min-h-36 resize-y ${
            errors.nachricht ? invalidInputClass : ""
          }`}
          id="contact-message"
          name="nachricht"
          placeholder="Objekt, Ort und gewünschte Leistung"
        />
        <FieldError id="contact-message-error">{errors.nachricht}</FieldError>
      </div>
      <div>
        <label
          className={`flex items-start gap-3 rounded-md border p-4 text-sm leading-6 transition ${
            errors.datenschutz_zustimmung
              ? "border-red-200 bg-red-50 text-red-900"
              : "border-slate-200 bg-slate-50 text-slate-600"
          }`}
        >
          <input
            aria-describedby={
              errors.datenschutz_zustimmung ? "contact-privacy-error" : undefined
            }
            aria-invalid={Boolean(errors.datenschutz_zustimmung)}
            className="mt-1 size-4 rounded border-slate-300 accent-[#071b3d]"
            name="datenschutz_zustimmung"
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
        <FieldError id="contact-privacy-error">
          {errors.datenschutz_zustimmung}
        </FieldError>
      </div>
      <button
        className="rounded-md bg-[#071b3d] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0b2a5a] focus:outline-none focus:ring-2 focus:ring-[#071b3d]/25 focus:ring-offset-2"
        type="submit"
      >
        Anfrage senden
      </button>
    </form>
  );
}

export default ContactForm;
