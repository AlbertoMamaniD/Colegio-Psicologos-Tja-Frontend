import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";
import logo from "../assets/Logo1.jpg";
import { ArrowUpRightIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";

interface NavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ darkMode, toggleDarkMode }) => {
  const location = useLocation();

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
        <Link to="/" className="logo-link">
          <img
            src={logo}
            alt="Colegio de Psicólogos Tarija"
            className="logo-img"
          />
        </Link>

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
        <Link to="/oficina-virtual">
          <button className="btn-virtual">
            Oficina Virtual
            <ArrowUpRightIcon className="icon-arrow-hero" />
          </button>
        </Link>

        <button
          className="btn-mode-toggle"
          onClick={toggleDarkMode}
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