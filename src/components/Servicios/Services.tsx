// src/components/Services.tsx
import React from "react";
import "./Services.css";
import {
  FaUserMd,
  FaGraduationCap,
  FaCertificate,
  FaBuilding,
  FaArrowRight
} from "react-icons/fa";

export const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Atención Psicológica Profesional",
      description: "Contamos con una amplia red de psicólogos certificados y capacitados, listos para brindar apoyo psicológico de calidad a la comunidad.",
      icon: <FaUserMd />,
      features: [
        "Psicólogos certificados y afiliados",
        "Diversas especialidades disponibles",
        "Atención presencial y online",
        "Profesionales experimentados",
        "Servicio ético y confidencial"
      ],
      highlight: "Consulta directa ",
      actionText: "Más Información"
    },
    {
      id: 2,
      title: "Cursos y Capacitaciones",
      description: "Programas de formación continua diseñados para el desarrollo profesional de nuestros afiliados.",
      icon: <FaGraduationCap />,
      features: [
        "Talleres especializados",
        "Seminarios internacionales",
        "Cursos de actualización",
        "Certificación oficial",
        "Modalidad presencial y online"
      ],
      highlight: "Desde Bs. 300/curso",
      actionText: "Más Información"
    },
    {
      id: 3,
      title: "Certificaciones",
      description: "Otorgamos certificados oficiales que acreditan tu experiencia y especialización profesional.",
      icon: <FaCertificate />,
      features: [
        "Certificación de especialidades",
        "Reconocimiento nacional",
        "Validez profesional",
        "Proceso simplificado",
        "Registro permanente"
      ],
      highlight: "Bs. 200 - 500",
      actionText: "Más Información"
    },
    {
      id: 4,
      title: "Servicios Institucionales",
      description: "Apoyo institucional para el ejercicio profesional ético y de calidad.",
      icon: <FaBuilding />,
      features: [
        "Asesoría legal profesional",
        "Supervisión clínica",
        "Bolsa de trabajo",
        "Biblioteca especializada",
        "Red de contactos profesionales"
      ],
      highlight: "Incluido con afiliación",
      actionText: "Más Información"
    }
  ];

  return (
    <div className="services-container">
      <div className="services-wrapper">
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-card-inner">
                <div className="service-top-section">
                  <div className="service-icon-container">
                    <div className="service-icon-circle">
                      <div className="service-icon">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  
                  <div className="service-title-section">
                    <h2 className="service-title">{service.title}</h2>
                    <p className="service-description">{service.description}</p>
                  </div>
                </div>
                
                <div className="service-content">
                  <ul className="features-list">
                    {service.features.map((feature, index) => (
                      <li key={index} className="feature-item">
                        <span className="feature-bullet">•</span>
                        <span className="feature-text">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="service-footer">
                    <div className="service-highlight">
                      <span className="highlight-text">{service.highlight}</span>
                    </div>
                    
                    <button 
                      className="service-action-btn"
                      onClick={() => alert(`Más información sobre: ${service.title}`)}
                    >
                      <span className="btn-text">{service.actionText}</span>
                      <FaArrowRight className="btn-icon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};