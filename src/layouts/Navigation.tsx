import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";
import logo from "../assets/Logo1.jpg";
import { ArrowUpRightIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export const Navigation: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const menuItems = [
    { name: "Inicio", path: "/" },
    { name: "Psicólogos", path: "/psicologos" },
    { name: "Noticias y eventos", path: "/noticias" },
    { name: "Servicios", path: "/servicios" },
    { name: "Afiliación", path: "/afiliacion" },
    { name: "Acerca de", path: "/acerca" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <nav className={`navbar ${darkMode ? "dark-mode" : ""}`}>
      {/* Logo + Texto */}
      <div className="navbar-logo-container">
        <a href="#" className="logo-link" onClick={(e) => e.preventDefault()}>
          <img
            src={logo}
            alt="Colegio de Psicólogos Tarija"
            className="logo-img"
          />
        </a>

        <div className="logo-text">
          <div className="logo-title">Colegio de Psicólogos</div>
          <div className="logo-subtitle">Tarija, Bolivia</div>
        </div>
      </div>

      {/* Menú central */}
      <ul className="navbar-links">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={location.pathname === item.path ? "active" : ""}
          >
            <Link to={item.path}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Botones derecha */}
      <div className="navbar-buttons">
        <button className="btn-virtual">
          Oficina Virtual
          <ArrowUpRightIcon className="icon-arrow-hero" />
        </button>

        <button
          className="btn-mode-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
        >
          <div className="icon-mode-wrapper">
            <SunIcon className={`icon-mode icon-sun ${!darkMode ? 'active' : ''}`} />
            <MoonIcon className={`icon-mode icon-moon ${darkMode ? 'active' : ''}`} />
          </div>
        </button>
      </div>
    </nav>
  );
};