import React from "react";
import { Link } from "react-router-dom";
import { PageHero } from "../../layouts/PageHero";
import { Notices } from "./Notices";
import { Trayectoria } from "./Trayectoria";
import { ServiciosColegio } from "./ServiciosColegio";
import { Equipo } from "./Equipo";
import { Heart, Search, UserPlus } from "lucide-react";
import "./Home.css";

export const Home: React.FC = () => {
  return (
    <>
      <PageHero />
      <Notices />
      <ServiciosColegio />
      <Equipo />
      <Trayectoria />

      {/* CTA Section */}
      <div className="home-cta-section">
        <div className="home-cta-container">
          <div className="home-cta-icon-wrapper">
            <Heart className="home-cta-icon" size={32} />
          </div>

          <h2 className="home-cta-title">¿Listo para comenzar?</h2>
          <p className="home-cta-subtitle">
            Encuentra el psicólogo ideal para ti o únete a nuestra comunidad de profesionales.
          </p>

          <div className="home-cta-buttons">
            <Link to="/psicologos" className="home-cta-btn home-cta-btn-primary">
              <Search size={20} />
              <span>Buscar Psicólogo</span>
            </Link>

            <Link to="/afiliacion" className="home-cta-btn home-cta-btn-secondary">
              <UserPlus size={20} />
              <span>Afiliarse Ahora</span>
            </Link>
          </div>
        </div>
      </div>


    </>
  );
};

