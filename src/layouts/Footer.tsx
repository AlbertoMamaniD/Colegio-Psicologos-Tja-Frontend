// src/layouts/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';
import logo from "../assets/logo1.jpg";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* 4 Columnas principales */}
        <div className="footer-grid">
          
          {/* Columna 1: Logo, Descripción y Redes Sociales */}
          <div className="footer-col footer-col-main">
            <div className="footer-brand">
              <img src={logo} alt="Colegio de Psicólogos Tarija" className="footer-logo" />
              <h1 className="footer-title">Colegio de Psicólogos</h1>
            </div>
            <p className="footer-mission">
              Promoviendo la excelencia profesional y el bienestar emocional de nuestra comunidad,
              con un enfoque ético y humano.
            </p>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="footer-col">
            <h3 className="footer-col-title">Enlaces Rápidos</h3>
            <ul className="footer-links">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/psicologos">Psicólogos</Link></li>
              <li><Link to="/noticias">Noticias y eventos</Link></li>
              <li><Link to="/servicios">Servicios</Link></li>
              <li><Link to="/afiliacion">Afiliación</Link></li>
              <li><Link to="/acerca">Acerca de</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
              <li><a href="/oficina-virtual">Oficina Virtual</a></li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className="footer-col">
            <h3 className="footer-col-title">Contacto</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div className="contact-info">
                  <strong>Tarija, Bolivia</strong>
                </div>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div className="contact-info">
                  <strong>+591 4-666-4444</strong>
                </div>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div className="contact-info">
                  <strong>info@colegiopsicologostarija.bo</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Columna 4: Legal */}
          <div className="footer-col">
            <h3 className="footer-col-title">Legal</h3>
            <ul className="footer-legal-links">
              <li><a href="/terminos">Términos y Condiciones</a></li>
              <li><a href="/privacidad">Política de Privacidad</a></li>
              <li><a href="/cookies">Política de Cookies</a></li>
            </ul>
          </div>

        </div>

        {/* Línea divisoria */}
        <div className="footer-divider"></div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 Colegio de Psicólogos Tarija. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};