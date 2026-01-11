// src/components/PageHero.tsx
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './PageHero.css';
import { 
  FaCalendarDay,
  FaSchool,
  FaUsers,
  FaUserCheck,
  FaSearch,
  FaUserPlus,
  FaSignInAlt
} from 'react-icons/fa';
import { RiServiceLine } from "react-icons/ri";

interface PageHeroProps {
  customTitle?: string;
  customSubtitle?: string;
  customImage?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  customTitle,
  customSubtitle,
  customImage,
}) => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Contenido por defecto basado en la ruta
  let title = 'Bienvenido al Colegio de Psicólogos de Tarija';
  let subtitle = 'Promoviendo la excelencia profesional y el bienestar emocional de nuestra comunidad.';
  let backgroundImage = 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1600&q=80';
  let badgeText = '';
  let icon = null;
  
  // Para la página de inicio (/) usar el contenido específico reorganizado
  if (currentPath === '/') {
    backgroundImage = 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=1600&q=80';
    return (
      <section className="page-hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="page-hero-overlay">
          <div className="page-hero-content">
            {/* Título completo en una línea - SIN ICONO */}
            <h1 className="page-hero-title">
              Tu Bienestar Emocional es Nuestra Prioridad
            </h1>
            
            {/* Subtítulo con mejor distribución */}
            <div className="page-hero-subtitle-container">
              <p className="page-hero-subtitle">
                Conectamos a las personas con psicólogos profesionales certificados.
              </p>
              <p className="page-hero-subtitle">
                Encuentra el apoyo que necesitas para tu salud mental y bienestar emocional.
              </p>
            </div>
            
            {/* Botones con mejor distribución */}
            <div className="page-hero-buttons">
              <div className="button-row main-buttons">
                <Link to="/psicologos">
                  <button className="hero-button primary-button">
                    <div className="button-icon-circle">
                      <FaSearch className="button-icon" />
                    </div>
                    <span className="button-text">Buscar Psicólogo</span>
                  </button>
                </Link>
                <Link to="/afiliacion">
                  <button className="hero-button secondary-button glassmorphism-button">
                    <div className="button-icon-circle">
                      <FaUserPlus className="button-icon" />
                    </div>
                    <span className="button-text">Afiliarse</span>
                  </button>
                </Link>
              </div>
              
              {/* Línea divisoria elegante */}
              <div className="divider-line"></div>
              
              {/* Fila inferior con enlace y botón */}
              <div className="link-row">
                <Link to="/login" className="hero-link">
                  <span className="link-text">¿Eres psicólogo afiliado?</span>
                </Link>
                <Link to="/oficina-virtual">
                  <button className="hero-button tertiary-button">
                    <div className="button-icon-circle">
                      <FaSignInAlt className="button-icon" />
                    </div>
                    <span className="button-text">Entrar a Oficina Virtual</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Para otras páginas, usar los contenidos específicos de las imágenes
  if (currentPath === '/psicologos') {
    title = 'Encuentra a tu Psicólogo Ideal';
    subtitle = 'Todos nuestros psicólogos están certificados y comprometidos con tu bienestar emocional y psicológico. Encuentra el especialista adecuado para ti.';
    badgeText = 'Directorio Profesional';
    icon = <FaUsers className="page-icon" />;
    backgroundImage = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1600&q=80';
  } else if (currentPath === '/noticias') {
    title = 'Noticias y Eventos';
    subtitle = 'Mantente informado sobre novedades, eventos y capacitaciones del Colegio de Psicólogos.';
    icon = <FaCalendarDay className="page-icon" />;
    backgroundImage = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&q=80';
  } else if (currentPath === '/servicios') {
    title = 'Servicios del Colegio';
    subtitle = 'Ofrecemos una amplia gama de servicios diseñados para apoyar el desarrollo profesional y garantizar la excelencia en la práctica psicológica.';
    icon = <RiServiceLine className="page-icon" />;
    backgroundImage = 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&q=80';
  } else if (currentPath === '/afiliacion') {
    title = 'Afiliación Profesional';
    subtitle = 'Únete a nuestra comunidad de psicólogos certificados y accede a herramientas profesionales exclusivas.';
    icon = <FaUserCheck className="page-icon" />;
    backgroundImage = 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80';
  } else if (currentPath === '/acerca') {
    title = 'Acerca del Colegio';
    subtitle = 'Somos una institución dedicada a la promoción de la salud mental y el desarrollo profesional de los psicólogos en Tarija, Bolivia.';
    icon = <FaSchool className="page-icon" />;
    backgroundImage = 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1600&q=80';
  }

  // Sobrescribe con props si se pasan
  if (customTitle) title = customTitle;
  if (customSubtitle) subtitle = customSubtitle;
  if (customImage) backgroundImage = customImage;

  return (
    <section className="page-hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="page-hero-overlay">
        <div className="page-hero-content">
          {badgeText && (
            <div className="page-badge-container">
              <span className="page-badge glassmorphism-badge">
                {badgeText}
              </span>
            </div>
          )}
          
          {icon && (
            <div className="hero-icon-circle glassmorphism-icon">
              {icon}
            </div>
          )}
          
          <h1 className="page-hero-title">{title}</h1>
          <p className="page-hero-subtitle">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};