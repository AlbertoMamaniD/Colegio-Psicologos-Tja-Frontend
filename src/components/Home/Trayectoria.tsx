// src/components/Trayectoria.tsx
import React from "react";
import "./Trayectoria.css";
import { FaBullseye, FaEye, FaHeart } from "react-icons/fa";

export const Trayectoria: React.FC = () => {
  const sections = [
    {
      id: 1,
      title: "Misión",
      description:
        "Promover la excelencia profesional y garantizar servicios psicológicos de calidad.",
      icon: <FaBullseye />,
    },
    {
      id: 2,
      title: "Visión",
      description:
        "Ser la organización líder en el desarrollo profesional de la psicología.",
      icon: <FaEye />,
    },
    {
      id: 3,
      title: "Valores",
      description: "Ética, respeto, empatía y compromiso con la sociedad.",
      icon: <FaHeart />,
    },
  ];

  return (
    <div className="trayectoria-container">
      <div className="trayectoria-wrapper">
        {/* Sección "Acerca del Colegio" */}
        <div className="acerca-colegio">
          <h1 className="acerca-titulo">Acerca del Colegio</h1>
          <p className="acerca-descripcion">
            Somos una institución dedicada a la promoción de la salud mental y el desarrollo profesional de los psicólogos en Bolivia.
          </p>
        </div>

        {/* Grid de Misión, Visión y Valores */}
        <div className="vision-grid">
          {sections.map((section) => (
            <div key={section.id} className="vision-card-home">
              <div className="icon-wrapper-home">
                <div className="icon-circle-home">
                  <span className="card-icon-home">{section.icon}</span>
                </div>
              </div>

              <h2 className="card-title-home">{section.title}</h2>
              <p className="card-description-home">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};