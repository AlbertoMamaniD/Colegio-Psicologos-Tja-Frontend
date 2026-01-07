import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LenisProvider } from "./components/LenisProvider";
import { Navigation } from "./layouts/Navigation";
import { Footer } from "./layouts/Footer";
import { FloatButtons } from "./layouts/FloatButtons";
import { Home } from "./components/Home";
import { Contacto } from "./components/Contacto";
import { Psicologos } from "./components/Psicologos";
import { Noticias } from "./components/Noticias";
import { Servicios } from "./components/Servicios";
import { Afiliacion } from "./components/Afiliacion";
import { AcercaDe } from "./components/AcercaDe";

function App() {
  return (
    <BrowserRouter>
      <LenisProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/psicologos" element={<Psicologos />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/afiliacion" element={<Afiliacion />} />
          <Route path="/acerca" element={<AcercaDe />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
        <FloatButtons />
      </LenisProvider>
    </BrowserRouter>
  );
}

export default App;