// src/components/Vision.tsx
import React from "react";
import "./Vision.css";
import { 
  FaBullseye, 
  FaEye, 
  FaHeart
} from "react-icons/fa";

export const Vision: React.FC = () => {
  const sections = [
    {
      id: 1,
      title: "Misión",
      description: "Promover la excelencia profesional de nuestros afiliados y garantizar servicios psicológicos de calidad que contribuyan al bienestar emocional de la comunidad tarijeña y boliviana.",
      icon: <FaBullseye />,
    },
    {
      id: 2,
      title: "Visión",
      description: "Ser la organización líder en el desarrollo profesional de la psicología en Bolivia, reconocida por nuestro compromiso con la ética, la innovación y el servicio a la sociedad.",
      icon: <FaEye />,
    },
    {
      id: 3,
      title: "Valores",
      description: "Ética profesional, respeto, empatía, excelencia, compromiso social e innovación continua en la práctica psicológica y el servicio a nuestra comunidad.",
      icon: <FaHeart />,
    }
  ];

  return (
    <div className="vision-container">
      <div className="vision-wrapper">
        <div className="vision-grid">
          {sections.map((section) => (
            <div key={section.id} className="vision-card">
              <div className="card-top">
                <div className="icon-wrapper">
                  <div className="icon-circle">
                    <div className="card-icon">
                      {section.icon}
                    </div>
                  </div>
                </div>
                
                <div className="card-title-section">
                  <h2 className="card-title">{section.title}</h2>
                  <p className="card-description">{section.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};