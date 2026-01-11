// src/components/Servicios.tsx
import React from "react";
import { PageHero } from "../../layouts/PageHero";
import { Services } from "./Services";
import "./Servicios.css";
import { FaPhoneAlt, FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Servicios: React.FC = () => {
  const navigate = useNavigate();

  const handleAfiliacionClick = () => {
    // Usa un estado o query param para forzar scroll al inicio
    navigate('/afiliacion?scrollToForm=true');
  };

  return (
    <>
      <PageHero />
      <Services />
      
      {/* Sección de CTA - Simplificada */}
      <div className="servicios-cta-section">
        <div className="cta-content-wrapper">
          <div className="cta-content">
            <h2 className="cta-title">¿Interesado en nuestros servicios?</h2>
            <p className="cta-description">
              Contáctanos para obtener más información sobre nuestros servicios institucionales 
              y cómo pueden beneficiar tu práctica profesional.
            </p>
            
            <div className="cta-buttons">
              <button 
                className="cta-btn cta-btn-primary"
                onClick={() => navigate('/contacto')}
              >
                <FaPhoneAlt className="cta-btn-icon" />
                Contactar
              </button>
              
              <button 
                className="cta-btn cta-btn-secondary"
                onClick={handleAfiliacionClick}
              >
                <FaUserPlus className="cta-btn-icon" />
                Solicitar Afiliación
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};