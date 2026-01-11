import React from "react";
import "./Stats.css";
import { FaUsers } from "react-icons/fa";

export const Stats: React.FC = () => {
  const statsData = [
    {
      id: 1,
      number: "500+",
      title: "Psicólogos Afiliados",
      description: "Profesionales certificados trabajando en red",
    },
    {
      id: 2,
      number: "15",
      title: "Años de Trayectoria",
      description: "Más de una década de experiencia y crecimiento",
    },
    {
      id: 3,
      number: "10,000+",
      title: "Personas Atendidas",
      description: "Impacto positivo en la comunidad tarijeña",
    },
    {
      id: 4,
      number: "50+",
      title: "Capacitaciones Anuales",
      description: "Formación continua y actualización profesional",
    },
  ];

  return (
    <div className="stats-container">
      {/* Fondo con nubes */}
      <div className="stats-background">
        <div className="cloud"></div>
        <div className="cloud"></div>
        <div className="cloud"></div>
        <div className="cloud"></div>
      </div>

      {/* Ícono único centrado arriba */}
      <div className="stats-icon-container">
        <div className="stats-main-icon-circle">
          <div className="stats-main-icon">
            <FaUsers />
          </div>
        </div>
      </div>

      <div className="stats-wrapper">
        <div className="stats-grid">
          {statsData.map((stat) => (
            <div key={stat.id} className="stat-card">
              <div className="stat-content">
                <div className="stat-number">
                  {stat.number.includes("+") ? (
                    <>
                      {stat.number.replace("+", "")}
                      <span className="stat-plus">+</span>
                    </>
                  ) : (
                    stat.number
                  )}
                </div>
                <h3 className="stat-title">{stat.title}</h3>
                <p className="stat-description">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};