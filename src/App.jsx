import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import LegalPage from "./pages/LegalPage";

function getRoute() {
  return window.location.hash.replace("#/", "");
}

function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const updateRoute = () => setRoute(getRoute());

    window.addEventListener("hashchange", updateRoute);
    return () => window.removeEventListener("hashchange", updateRoute);
  }, []);

  if (route === "impressum") {
    return <LegalPage type="impressum" />;
  }

  if (route === "datenschutz") {
    return <LegalPage type="datenschutz" />;
  }

  return <HomePage />;
}

export default App;
