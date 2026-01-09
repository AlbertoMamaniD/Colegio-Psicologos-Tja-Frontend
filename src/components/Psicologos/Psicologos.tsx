import React from "react";
import { PageHero } from "../../layouts/PageHero";
import { Especialidades } from "./Especialidades";
import "./Psicologos.css";
import { 
  FaMapMarkerAlt, 
  FaUserClock, 
  FaCalendarCheck, 
  FaRegUserCircle,
  FaUsers as FaUsersGroup
} from "react-icons/fa";
import { FaPersonWalkingLuggage, FaCertificate } from "react-icons/fa6";
import { FcVideoCall } from "react-icons/fc";

export const Psicologos: React.FC = () => {
  const psicologos = [
    {
      id: 1,
      nombre: "Dra. María González",
      especialidad: "Psicología Clínica",
      ubicacion: "San José",
      modalidad: "Presencial y Online",
      experiencia: "12 años",
      poblacion: "Adolescentes, Adultos",
      certificaciones: [
        "Certificada en Terapia Cognitivo-Conductual",
        "Especialista en Ansiedad y Depresión"
      ]
    },
    {
      id: 2,
      nombre: "Dr. Carlos Ramírez",
      especialidad: "Psicología Infantil",
      ubicacion: "Heredia",
      modalidad: "Presencial",
      experiencia: "8 años",
      poblacion: "Niños, Adolescentes",
      certificaciones: [
        "Especialista en Terapia de Juego",
        "Certificado en TDAH"
      ]
    },
    {
      id: 3,
      nombre: "Dra. Ana Solano",
      especialidad: "Terapia de Pareja",
      ubicacion: "San José",
      modalidad: "Online",
      experiencia: "15 años",
      poblacion: "Adultos, Parejas",
      certificaciones: [
        "Terapeuta de Pareja certificada",
        "Especialista en Comunicación"
      ]
    },
    {
      id: 4,
      nombre: "Dr. Roberto Mora",
      especialidad: "Neuropsicología",
      ubicacion: "Cartago",
      modalidad: "Presencial",
      experiencia: "10 años",
      poblacion: "Todas las edades",
      certificaciones: [
        "Neuropsicólogo Clínico",
        "Especialista en Rehabilitación Cognitiva"
      ]
    }
  ];

  // Función para obtener el ícono de modalidad según el texto
  const getModalidadIcon = (modalidad: string) => {
    const modalidadLower = modalidad.toLowerCase();
    if (modalidadLower.includes("online") && modalidadLower.includes("presencial")) {
      return (
        <div className="dual-icons">
          <FaPersonWalkingLuggage className="icon-presencial" />
          <FcVideoCall className="icon-online" />
        </div>
      );
    }
    if (modalidadLower.includes("online")) {
      return <FcVideoCall className="icon-online" />;
    }
    if (modalidadLower.includes("presencial")) {
      return <FaPersonWalkingLuggage className="icon-presencial" />;
    }
    return <FaPersonWalkingLuggage className="icon-presencial" />;
  };

  return (
    <>
      <PageHero />
      <Especialidades />
      <div className="psicologos-wrapper">
        <div className="psicologos-container">
          {/* Header */}
          <div className="psicologos-header">
            <h1 className="psicologos-title">Nuestros Psicólogos</h1>
            <p className="psicologos-subtitle">
              Profesionales certificados listos para ayudarte en tu bienestar mental
            </p>
            <div className="psicologos-underline"></div>
          </div>

          {/* Cards Grid */}
          <div className="psicologos-grid">
            {psicologos.map((psicologo) => (
              <div key={psicologo.id} className="psicologo-card">
                {/* Card Header */}
                <div className="card-header">
                  <div className="psicologo-avatar">
                    <FaRegUserCircle />
                  </div>
                  <div className="psicologo-info">
                    <h3 className="psicologo-nombre">{psicologo.nombre}</h3>
                    <div className="especialidad-ubicacion">
                      <span className="especialidad">{psicologo.especialidad}</span>
                      <span className="ubicacion">
                        <FaMapMarkerAlt /> {psicologo.ubicacion}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="card-content">
                  {/* Información principal */}
                  <div className="info-section">
                    {/* Modalidad */}
                    <div className="info-item">
                      <span className="info-icon modalidad-icon">
                        {getModalidadIcon(psicologo.modalidad)}
                      </span>
                      <div className="info-content">
                        <span className="info-label">Modalidad</span>
                        <span className="info-value">{psicologo.modalidad}</span>
                      </div>
                    </div>

                    {/* Experiencia */}
                    <div className="info-item">
                      <span className="info-icon">
                        <FaUserClock className="icon-experiencia" />
                      </span>
                      <div className="info-content">
                        <span className="info-label">Experiencia</span>
                        <span className="info-value">{psicologo.experiencia}</span>
                      </div>
                    </div>

                    {/* Población */}
                    <div className="info-item">
                      <span className="info-icon">
                        <FaUsersGroup className="icon-poblacion" />
                      </span>
                      <div className="info-content">
                        <span className="info-label">Población</span>
                        <span className="info-value">{psicologo.poblacion}</span>
                      </div>
                    </div>
                  </div>

                  {/* Certificaciones */}
                  <div className="certificaciones-section">
                    <div className="certificaciones-header">
                      <FaCertificate className="cert-icon" />
                      <span className="cert-title">Certificaciones</span>
                    </div>
                    <ul className="certificaciones-list">
                      {psicologo.certificaciones.map((cert, index) => (
                        <li key={index} className="certificacion-item">
                           {cert}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="card-footer">
                  <button className="btn-ver-perfil">
                    Ver Perfil
                  </button>
                  <button className="btn-agendar">
                    <FaCalendarCheck /> Agendar Cita
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};