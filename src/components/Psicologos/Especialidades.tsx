import React, { useState } from 'react';
import { 
  FaSearch, 
  FaBrain, 
  FaChild, 
  FaStethoscope,
  FaUserFriends,
  FaUserShield,
  FaUserGraduate,
  FaUserTie,
  FaUserCheck
} from 'react-icons/fa';
import './Especialidades.css';

interface EspecialidadItem {
  id: number;
  nombre: string;
  icono: React.ReactNode;
  categoria?: string;
}

interface EspecialidadesProps {
  onEspecialidadSelect?: (especialidad: string | null) => void;
  especialidadSeleccionada?: string | null;
}

export const Especialidades: React.FC<EspecialidadesProps> = ({ 
  onEspecialidadSelect,
  especialidadSeleccionada 
}) => {
  const [busqueda, setBusqueda] = useState('');

  const especialidades: EspecialidadItem[] = [
    { id: 1, nombre: "Clínica", icono: <FaStethoscope />, categoria: "Psicología Clínica" },
    { id: 2, nombre: "Infantil", icono: <FaChild />, categoria: "Psicología Clínica" },
    { id: 3, nombre: "Pareja", icono: <FaUserFriends />, categoria: "Psicología Clínica" },
    { id: 4, nombre: "Educativa", icono: <FaUserGraduate />, categoria: "Psicología Clínica" },
    { id: 5, nombre: "Forense", icono: <FaUserShield />, categoria: "Neuropsicología" },
    { id: 6, nombre: "Organizacional", icono: <FaUserTie />, categoria: "Neuropsicología" },
    { id: 7, nombre: "TCC", icono: <FaUserCheck />, categoria: "Neuropsicología" },
    { id: 8, nombre: "Neuropsicología", icono: <FaBrain />, categoria: "Especialidad" },
  ];

  // Filtrar especialidades basado en búsqueda
  const especialidadesFiltradas = especialidades.filter(esp => 
    esp.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    (esp.categoria && esp.categoria.toLowerCase().includes(busqueda.toLowerCase()))
  );

  const handleClick = (nombre: string) => {
    if (onEspecialidadSelect) {
      // Si ya está seleccionada, la deselecciona
      if (especialidadSeleccionada === nombre) {
        onEspecialidadSelect(null);
      } else {
        onEspecialidadSelect(nombre);
      }
    }
  };

  return (
    <div className="especialidades-wrapper">
      <div className="especialidades-container">
        {/* Header */}
        <div className="especialidades-header">
          <h1 className="especialidades-title">
            <FaSearch className="search-title-icon" />
            Buscar por Especialidad
          </h1>
          <p className="especialidades-subtitle">
            Encuentra al profesional especializado que necesitas según tu situación
          </p>
          <div className="title-underline"></div>
        </div>

        {/* Buscador */}
        <div className="buscador-container">
          <div className="search-input-wrapper">
            <FaSearch className="search-icon" />
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar especialidad..."
              className="search-input"
            />
            {busqueda && (
              <button 
                type="button" 
                onClick={() => setBusqueda('')}
                className="clear-search"
                aria-label="Limpiar búsqueda"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Grid de iconos */}
        <div className="iconos-grid">
          {especialidadesFiltradas.length > 0 ? (
            especialidadesFiltradas.map((especialidad) => (
              <div 
                key={especialidad.id}
                className={`icono-item ${especialidadSeleccionada === especialidad.nombre ? 'seleccionado' : ''}`}
                onClick={() => handleClick(especialidad.nombre)}
                title={especialidad.nombre}
              >
                <div className="icono-container">
                  {especialidad.icono}
                </div>
                <span className="icono-nombre">{especialidad.nombre}</span>
                {especialidad.categoria && especialidad.categoria !== "General" && especialidad.categoria !== "Especialidad" && (
                  <span className="icono-categoria">{especialidad.categoria}</span>
                )}
              </div>
            ))
          ) : (
            <div className="no-resultados">
              <p>No se encontraron especialidades para "{busqueda}"</p>
            </div>
          )}
        </div>

        {/* Info selección */}
        {especialidadSeleccionada && (
          <div className="seleccion-info">
            <p>
              Has seleccionado: <strong>{especialidadSeleccionada}</strong>
            </p>
        
              
    
          </div>
        )}
      </div>
    </div>
  );
};