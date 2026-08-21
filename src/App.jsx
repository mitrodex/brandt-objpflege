import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import LegalPage from "./pages/LegalPage";

const baseUrl = "https://brandt-objektpflege.de";

const seoByRoute = {
  "": {
    title: "Brandt Objektpflege | Gebaeudereinigung in Hamburg",
    description:
      "Brandt Objektpflege in Hamburg: Unterhaltsreinigung, Treppenhausreinigung, Glasreinigung und Objektpflege fuer Wohn- und Gewerbeimmobilien.",
    canonical: `${baseUrl}/`,
  },
  impressum: {
    title: "Impressum | Brandt Objektpflege",
    description: "Impressum und Kontaktangaben von Brandt Objektpflege in Hamburg.",
    canonical: `${baseUrl}/impressum`,
  },
  datenschutz: {
    title: "Datenschutz | Brandt Objektpflege",
    description: "Datenschutzerklaerung von Brandt Objektpflege.",
    canonical: `${baseUrl}/datenschutz`,
  },
};

function getRoute() {
  const pathRoute = window.location.pathname.replace(/^\/+|\/+$/g, "");
  const hashRoute = window.location.hash.replace("#/", "");

  return pathRoute || hashRoute;
}

function setMeta(name, content, attribute = "name") {
  const selector = `meta[${attribute}="${name}"]`;
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function setCanonical(href) {
  let tag = document.head.querySelector('link[rel="canonical"]');

  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }

  tag.setAttribute("href", href);
}

function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const updateRoute = () => setRoute(getRoute());

    window.addEventListener("hashchange", updateRoute);
    window.addEventListener("popstate", updateRoute);
    return () => {
      window.removeEventListener("hashchange", updateRoute);
      window.removeEventListener("popstate", updateRoute);
    };
  }, []);

  useEffect(() => {
    const seo = seoByRoute[route] || seoByRoute[""];

    document.title = seo.title;
    setMeta("description", seo.description);
    setMeta("og:title", seo.title, "property");
    setMeta("og:description", seo.description, "property");
    setMeta("og:url", seo.canonical, "property");
    setMeta("twitter:title", seo.title);
    setMeta("twitter:description", seo.description);
    setCanonical(seo.canonical);
  }, [route]);

  if (route === "impressum") {
    return <LegalPage type="impressum" />;
  }

  if (route === "datenschutz") {
    return <LegalPage type="datenschutz" />;
  }

  return <HomePage />;
}

export default App;
