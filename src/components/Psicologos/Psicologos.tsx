import React, { useState } from "react";
import { PageHero } from "../../layouts/PageHero";
import { Especialidades } from "./Especialidades";
import "./Psicologos.css";
import { 
  FaMapMarkerAlt, 
  FaUserClock, 
  FaCalendarCheck,
  FaUsers as FaUsersGroup
} from "react-icons/fa";
import { FaPersonWalkingLuggage, FaCertificate } from "react-icons/fa6";
import { FcVideoCall } from "react-icons/fc";

export const Psicologos: React.FC = () => {
  const [especialidadSeleccionada, setEspecialidadSeleccionada] = useState<string | null>(null);

  const psicologos = [
    {
      id: 1,
      nombre: "Dra. María González",
      especialidad: "Clínica",
      ubicacion: "San José",
      modalidad: "Presencial y Online",
      experiencia: "12 años",
      poblacion: "Adolescentes, Adultos",
      imagen: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
      certificaciones: [
        "Certificada en Terapia Cognitivo-Conductual",
        "Especialista en Ansiedad y Depresión"
      ]
    },
    {
      id: 2,
      nombre: "Dr. Carlos Ramírez",
      especialidad: "Infantil",
      ubicacion: "Heredia",
      modalidad: "Presencial",
      experiencia: "8 años",
      poblacion: "Niños, Adolescentes",
      imagen: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
      certificaciones: [
        "Especialista en Terapia de Juego",
        "Certificado en TDAH"
      ]
    },
    {
      id: 3,
      nombre: "Dra. Ana Solano",
      especialidad: "Pareja",
      ubicacion: "San José",
      modalidad: "Online",
      experiencia: "15 años",
      poblacion: "Adultos, Parejas",
      imagen: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
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
      imagen: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
      certificaciones: [
        "Neuropsicólogo Clínico",
        "Especialista en Rehabilitación Cognitiva"
      ]
    }
  ];

  // Filtrar psicólogos según la especialidad seleccionada
  const psicologosFiltrados = especialidadSeleccionada
    ? psicologos.filter(p => p.especialidad === especialidadSeleccionada)
    : psicologos;

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
      <Especialidades 
        onEspecialidadSelect={setEspecialidadSeleccionada}
        especialidadSeleccionada={especialidadSeleccionada}
      />
      <div className="psicologos-wrapper">
        <div className="psicologos-container">
          {/* Header */}
          <div className="psicologos-header">
            <h1 className="psicologos-title">Nuestros Psicólogos</h1>
            <p className="psicologos-subtitle">
              {especialidadSeleccionada 
                ? `Especialistas en ${especialidadSeleccionada}`
                : "Profesionales certificados listos para ayudarte en tu bienestar mental"
              }
            </p>
            <div className="psicologos-underline"></div>
          </div>

          {/* Cards Grid */}
          {psicologosFiltrados.length > 0 ? (
            <div className="psicologos-grid">
              {psicologosFiltrados.map((psicologo) => (
                <div key={psicologo.id} className="psicologo-card">
                  {/* Card Header */}
                  <div className="card-header">
                    <div className="psicologo-avatar">
                      <img src={psicologo.imagen} alt={psicologo.nombre} />
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
          ) : (
            <div className="no-resultados">
              <p>No se encontraron psicólogos con la especialidad "{especialidadSeleccionada}"</p>
              <button 
                className="btn-limpiar-filtro"
                onClick={() => setEspecialidadSeleccionada(null)}
              >
                Ver todos los psicólogos
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};