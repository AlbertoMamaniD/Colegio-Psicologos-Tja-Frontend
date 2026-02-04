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
  // Inicializar estado basado en localStorage o preferencia del sistema
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme === 'dark' || (!savedTheme && prefersDark);
  });

  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isOficinPage = location.pathname === "/oficina";

  // Sincronizar estado cuando ocurre un cambio de tema externo (ej: desde el Menú)
  useEffect(() => {
    const handleThemeChange = () => {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
      setDarkMode(isDark);
    };

    window.addEventListener('themeChange', handleThemeChange);
    window.addEventListener('storage', handleThemeChange);

    return () => {
      window.removeEventListener('themeChange', handleThemeChange);
      window.removeEventListener('storage', handleThemeChange);
    };
  }, []);

  // Aplicar clase dark al body y asegurar persistencia visual
  useEffect(() => {
    const applyDarkMode = () => {
      if (darkMode) {
        document.body.classList.add('dark');
        // Asegurar que localStorage esté sincronizado si App fuerza el cambio
        if (localStorage.getItem('theme') !== 'dark') {
          localStorage.setItem('theme', 'dark');
        }
      } else {
        document.body.classList.remove('dark');
        if (localStorage.getItem('theme') === 'dark') {
          localStorage.setItem('theme', 'light');
        }
      }
    };

    applyDarkMode();

    // Observer para proteger la clase contra componentes "rogue" que intenten quitarla
    const observer = new MutationObserver(() => {
      const hasDarkClass = document.body.classList.contains('dark');
      if (darkMode && !hasDarkClass) {
        document.body.classList.add('dark');
      } else if (!darkMode && hasDarkClass) {
        document.body.classList.remove('dark');
      }
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, [darkMode]);

  // Re-aplicar al navegar
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