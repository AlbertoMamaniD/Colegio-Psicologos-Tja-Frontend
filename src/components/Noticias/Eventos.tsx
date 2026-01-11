import React from "react";
import "./Eventos.css";
import { 
  FaCalendarAlt, 
  FaClock, 
  FaUsers,
  FaArrowRight,
  FaChalkboardTeacher,
  FaUserFriends,
  FaLaptopCode,
  FaVideo,
  FaBuilding
} from "react-icons/fa";
import { FaPersonWalkingLuggage} from "react-icons/fa6";

export const Eventos: React.FC = () => {
  const eventos = [
    {
      id: 1,
      titulo: "Taller de Intervención en Crisis",
      fecha: "domingo, 14 de diciembre",
      hora: "09:00 - 17:00",
      lugar: "Auditorio Principal",
      capacidad: "50 personas",
      tipo: "Taller",
      descripcion: "Taller intensivo sobre técnicas de intervención en situaciones de crisis psicológica. Aprende estrategias prácticas para manejar emergencias psicológicas.",
      imagen: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icono: <FaChalkboardTeacher />,
      esOnline: false
    },
    {
      id: 2,
      titulo: "Congreso Nacional de Psicología",
      fecha: "sábado, 20 de diciembre",
      hora: "08:00 - 18:00",
      lugar: "Centro de Convenciones",
      capacidad: "200 personas",
      tipo: "Congreso",
      descripcion: "Congreso anual con ponencias nacionales e internacionales sobre avances en psicología. Networking con profesionales destacados.",
      imagen: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icono: <FaUserFriends />,
      esOnline: false
    },
    {
      id: 3,
      titulo: "Seminario de Psicología Digital",
      fecha: "sábado, 27 de diciembre",
      hora: "15:00 - 18:00",
      lugar: "Sala Virtual (Online)",
      capacidad: "Ilimitado",
      tipo: "Seminario",
      descripcion: "Seminario sobre el impacto de la tecnología en la salud mental y nuevas formas de intervención digital. Certificación incluida.",
      imagen: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icono: <FaLaptopCode />,
      esOnline: true
    }
  ];

  return (
    <div className="eventos-wrapper">
      <div className="eventos-container">
        {/* Header */}
        <div className="eventos-header">
          <h1 className="eventos-title">Próximos Eventos</h1>
          <p className="eventos-subtitle">
            Talleres y capacitaciones para tu desarrollo profesional.
          </p>
          <div className="eventos-underline"></div>
        </div>

        {/* Eventos Grid */}
        <div className="eventos-grid">
          {eventos.map((evento) => (
            <div key={evento.id} className="evento-card">
              {/* Imagen del evento */}
              <div className="evento-imagen-container">
                <img 
                  src={evento.imagen} 
                  alt={evento.titulo}
                  className="evento-imagen"
                  loading="lazy"
                />
                <div className="evento-imagen-overlay"></div>
                
                {/* Tipo de evento */}
                <div className="evento-tipo">
                  <span className="evento-tipo-icon">{evento.icono}</span>
                  <span>{evento.tipo}</span>
                </div>
              </div>

              {/* Contenido del evento */}
              <div className="evento-content">
                <h3 className="evento-titulo">{evento.titulo}</h3>
                
                <div className="evento-info">
                  <div className="info-item">
                    <div className="info-icon-wrapper">
                      <FaCalendarAlt className="info-icon" />
                    </div>
                    <span className="info-text">{evento.fecha}</span>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon-wrapper">
                      <FaClock className="info-icon" />
                    </div>
                    <span className="info-text">{evento.hora}</span>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon-wrapper">
                      {evento.esOnline ? (
                        <FaVideo className="info-icon" />
                      ) : (
                        <FaPersonWalkingLuggage className="info-icon" />
                      )}
                    </div>
                    <span className="info-text">{evento.lugar}</span>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon-wrapper">
                      <FaUsers className="info-icon" />
                    </div>
                    <span className="info-text">{evento.capacidad}</span>
                  </div>
                </div>

                {/* Descripción */}
                <div className="evento-descripcion">
                  <p>{evento.descripcion}</p>
                </div>

                {/* Etiqueta Online/Presencial */}
                <div className="evento-etiqueta-container">
                  {evento.esOnline ? (
                    <div className="evento-etiqueta online">
                      <FaVideo className="etiqueta-icon" />
                      <span>ONLINE</span>
                    </div>
                  ) : (
                    <div className="evento-etiqueta presencial">
                      <FaBuilding className="etiqueta-icon" />
                      <span>PRESENCIAL</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Botón */}
              <div className="evento-footer">
                <button className="evento-btn">
                  Inscribirse <FaArrowRight className="btn-icon" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};