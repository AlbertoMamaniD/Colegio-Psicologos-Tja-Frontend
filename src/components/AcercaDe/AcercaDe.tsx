import React from "react";
import { PageHero } from "../../layouts/PageHero";
import { Vision } from "./Vision";
import { Stats } from "./Stats";
import { Info } from "./Info";
import { FaHeart, FaUserPlus, FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./AcercaDe.css";

export const AcercaDe: React.FC = () => {
  const navigate = useNavigate();

  const handleAfiliacionClick = () => {
    navigate('/afiliacion?scrollToForm=true');
  };

  return (
    <>
      <PageHero />
      
      <main className="acerca-main">
       

        {/* Componentes en orden */}
        <Vision />
        <Stats />
        <Info />
        
        {/* Sección "Únete a Nuestra Comunidad" */}
        <section className="unete-section">
          <div className="unete-container">
            <div className="unete-content">
              
              {/* Ícono del corazón */}
              <div className="unete-icon-wrapper">
                <div className="unete-icon-circle">
                  <FaHeart className="unete-icon" />
                </div>
              </div>
              
              {/* Contenido textual */}
              <div className="unete-text-content">
                <h2 className="unete-title">Únete a Nuestra Comunidad</h2>
                <p className="unete-subtitle">
                  Forma parte de una red de profesionales comprometidos con la excelencia en la psicología.
                </p>
              </div>
              
              {/* Botones CON ICONOS */}
              <div className="unete-actions">
                <button 
                  className="unete-btn unete-btn-primary"
                  onClick={handleAfiliacionClick}
                >
                  <FaUserPlus className="unete-btn-icon" />
                  Solicitar Afiliación
                </button>
                
                <button 
                  className="unete-btn unete-btn-secondary"
                  onClick={() => navigate('/contacto')}
                >
                  <FaPhoneAlt className="unete-btn-icon" />
                  Contactar
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};