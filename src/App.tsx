import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { LenisProvider } from "./components/LenisProvider";
import { Navigation } from "./layouts/Navigation";
import { Footer } from "./layouts/Footer";
import { FloatButtons } from "./layouts/FloatButtons";
import { Home } from "./components/Home/Home";
import { Contacto } from "./components/Contacto/Contacto";
import { Psicologos } from "./components/Psicologos/Psicologos";
import { Noticias } from "./components/Noticias/Noticias";
import { Servicios } from "./components/Servicios/Servicios";
import { Afiliacion } from "./components/Afiliacion/Afiliacion";
import { AcercaDe } from "./components/AcercaDe/AcercaDe";
import { Login } from "./components/OficinaVirtual/Login/Login";
import Oficina from "./components/OficinaVirtual/Oficina";

function AppContent() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isOficinPage = location.pathname === "/oficina";

  // Aplicar clase dark al body - SE EJECUTA SIEMPRE
  useEffect(() => {
    const applyDarkMode = () => {
      if (darkMode) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    };

    applyDarkMode();

    // Observer para detectar cambios en las clases del body
    const observer = new MutationObserver(() => {
      if (darkMode && !document.body.classList.contains('dark')) {
        document.body.classList.add('dark');
      } else if (!darkMode && document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
      }
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, [darkMode]);

  // FORZAR aplicación de clase dark al cambiar de ruta
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [location.pathname, darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  // Si es login u oficina, renderizar SOLO eso sin nada más
  if (isLoginPage) {
    return <Login />;
  }

  if (isOficinPage) {
    return <Oficina />;
  }

  // Para otras páginas, renderizar con Navigation, Footer, FloatButtons
  return (
    <LenisProvider>
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/psicologos" element={<Psicologos />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/afiliacion" element={<Afiliacion />} />
        <Route path="/acerca" element={<AcercaDe />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/oficina" element={<Oficina />} />
      </Routes>
      <Footer />
      <FloatButtons />
    </LenisProvider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;