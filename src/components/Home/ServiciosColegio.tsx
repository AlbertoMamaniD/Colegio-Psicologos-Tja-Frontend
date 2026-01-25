// src/components/ServiciosColegio.tsx
import React from "react";
import "./ServiciosColegio.css";
import { useNavigate } from "react-router-dom"; // ← agregar esto
import { 
  FaUsers,
  FaGraduationCap, 
  FaCertificate,
  FaBuilding 
} from "react-icons/fa";

export const ServiciosColegio: React.FC = () => {
  const navigate = useNavigate(); // ← hook para navegar

  const services = [
    {
      id: 1,
      title: "Atención Psicológica",
      description: "Psicólogos certificados listos para brindar apoyo profesional.",
      icon: <FaUsers />,
    },
    {
      id: 2,
      title: "Capacitaciones",
      description: "Cursos y talleres de formación continua para profesionales.",
      icon: <FaGraduationCap />,
    },
    {
      id: 3,
      title: "Certificaciones",
      description: "Certificados oficiales de especialización y experiencia.",
      icon: <FaCertificate />,
    },
    {
      id: 4,
      title: "Servicios Institucionales",
      description: "Asesoría legal, supervisión clínica y bolsa de trabajo.",
      icon: <FaBuilding />,
    }
  ];

  return (
    <div className="sc-container">
      {/* Título arriba */}
      <div className="sc-header">
        <h1 className="sc-title">Servicios del Colegio</h1>
        <p className="sc-subtitle">
          Ofrecemos una amplia gama de servicios para apoyar tu desarrollo profesional.
        </p>
      </div>

      {/* Cards */}
      <div className="sc-row">
        {services.map((service) => (
          <div key={service.id} className="sc-card">
            <div className="sc-card-content">
              <div className="sc-icon-wrapper">
                <div className="sc-icon-circle">
                  <div className="sc-card-icon">
                    {service.icon}
                  </div>
                </div>
              </div>
              
              <div className="sc-text-content">
                <h3 className="sc-card-title">{service.title}</h3>
                <p className="sc-card-description">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botón centrado abajo */}
      <div className="sc-button-container">
        <button 
          className="sc-button"
          onClick={() => navigate("/servicios")} // ← navega a la ruta de Servicios.tsx
        >
          Ver Todos los Servicios
        </button>
      </div>
    </div>
  );
};