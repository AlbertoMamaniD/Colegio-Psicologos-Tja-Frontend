// Carousel.tsx
import React, { useState, useEffect, useRef, useMemo } from 'react';
import './Carousel.css';
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from 'lucide-react';

interface Comunicado {
  id: number;
  fecha: string;
  titulo: string;
  descripcion: string;
  categoria: string;
  imagen: string;
}

export const Carousel: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  const comunicados: Comunicado[] = [
    {
      id: 1,
      fecha: "17 de noviembre de 2025",
      titulo: "Nuevas Certificaciones Disponibles para Afiliados",
      descripcion: "El colegio anuncia nuevos programas de certificación en terapias especializadas.",
      categoria: "Comunicados",
      imagen: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
    },
    {
      id: 2,
      fecha: "14 de noviembre de 2025",
      titulo: "5 Consejos para Manejar el Estrés Diario",
      descripcion: "Estrategias prácticas para reducir el estrés y mejorar tu bienestar emocional.",
      categoria: "Consejos",
      imagen: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80"
    },
    {
      id: 3,
      fecha: "9 de noviembre de 2025",
      titulo: "Congreso Nacional de Psicología 2025",
      descripcion: "Únete al evento más importante del año para profesionales de la psicología.",
      categoria: "Actividades",
      imagen: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
    },
    {
      id: 4,
      fecha: "5 de noviembre de 2025",
      titulo: "Taller de Mindfulness y Meditación",
      descripcion: "Aprende técnicas de mindfulness para mejorar la concentración y reducir la ansiedad.",
      categoria: "Actividades",
      imagen: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80"
    },
    {
      id: 5,
      fecha: "1 de noviembre de 2025",
      titulo: "Nuevos Protocolos de Atención Virtual",
      descripcion: "Conoce las mejores prácticas para sesiones de terapia en línea y atención remota.",
      categoria: "Comunicados",
      imagen: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
    },
    {
      id: 6,
      fecha: "28 de octubre de 2025",
      titulo: "Seminario de Psicología Infantil",
      descripcion: "Técnicas avanzadas para el trabajo terapéutico con niños y adolescentes.",
      categoria: "Actividades",
      imagen: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'next' | 'prev'>('next');
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(comunicados.map(c => c.categoria)));
    return ["Todas", ...cats];
  }, []);

  // Filter comunicados
  const filteredComunicados = useMemo(() => {
    if (selectedCategory === "Todas") return comunicados;
    return comunicados.filter(c => c.categoria === selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1200) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(filteredComunicados.length / itemsPerSlide);

  const getVisibleComunicados = () => {
    // Determine the subset of filteredComunicados to show based on currentIndex
    const start = currentIndex * itemsPerSlide;
    // We only take the slice for the current page
    // If we have fewer items than itemsPerSlide, we just show them all
    const pageItems = filteredComunicados.slice(start, start + itemsPerSlide);

    // Note: The previous logic might have been trying to loop/wrap items. 
    // For simplicity with filtering, standard pagination logic is safer to avoid index out of bounds.
    return pageItems;
  };

  const visibleComunicados = getVisibleComunicados();

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  const startAutoRotation = () => {
    // Only auto-rotate if we have more than 1 page
    if (totalSlides <= 1) return;

    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 5000);
  };

  const stopAutoRotation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleNext = () => {
    if (isAnimating || totalSlides <= 1) return;
    setIsAnimating(true);
    setSlideDirection('next');

    setTimeout(() => {
      setCurrentIndex((prev) => {
        return (prev + 1) % totalSlides;
      });
      setIsAnimating(false);
    }, 500);
  };

  const handlePrev = () => {
    if (isAnimating || totalSlides <= 1) return;
    setIsAnimating(true);
    setSlideDirection('prev');

    setTimeout(() => {
      setCurrentIndex((prev) => {
        return (prev - 1 + totalSlides) % totalSlides;
      });
      setIsAnimating(false);
    }, 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    const direction = index > currentIndex ? 'next' : 'prev';
    setIsAnimating(true);
    setSlideDirection(direction);

    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    startAutoRotation();
    return () => stopAutoRotation();
  }, [itemsPerSlide, totalSlides, selectedCategory]); // added selectedCategory dependency

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="carousel-wrapper-section">
      {/* Toggle Dark Mode */}


      {/* Header */}
      <div className="carousel-header">
        <h2 className="carousel-title">Últimas Noticias</h2>
        <p className="carousel-subtitle">
          Mantente informado sobre salud mental, eventos y actualizaciones del colegio.
        </p>
        <div className="title-underline"></div>
      </div>

      {/* Categories Filter */}
      <div className="carousel-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Carousel Content */}
      <div
        className="carousel-content-wrapper"
        onMouseEnter={stopAutoRotation}
        onMouseLeave={startAutoRotation}
      >
        <button
          onClick={handlePrev}
          className="nav-button-side"
          disabled={isAnimating || totalSlides <= 1}
          aria-label="Noticias anteriores"
          style={{ opacity: totalSlides <= 1 ? 0 : 1 }}
        >
          <ChevronLeft size={28} />
        </button>

        <div className="carousel-slides-container">
          {/* We calculate key to force re-render on category change which might be smoother */}
          <div className={`carousel-slides ${isAnimating ? 'animating' : ''} slide-${slideDirection}`} key={selectedCategory}>
            {visibleComunicados.length > 0 ? (
              visibleComunicados.map((comunicado, index) => (
                <div
                  key={`${comunicado.id}-${index}`}
                  className="comunicado-card"
                  data-card-position={index}
                >
                  <div className="card-image-container">
                    <img
                      src={comunicado.imagen}
                      alt={comunicado.titulo}
                      className="card-image"
                    />
                    <div className="card-category-badge">
                      {comunicado.categoria}
                    </div>
                  </div>

                  <div className="card-content">
                    <div className="card-fecha">
                      <Calendar className="calendar-icon" size={16} />
                      <span>{comunicado.fecha}</span>
                    </div>

                    <h3 className="card-titulo">{comunicado.titulo}</h3>
                    <p className="card-descripcion">{comunicado.descripcion}</p>

                    <a href="#" className="card-link">
                      <span>Leer más</span>
                      <ArrowRight className="arrow-icon" size={14} />
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results-message">
                No se encontraron noticias en esta categoría.
              </div>
            )}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="nav-button-side"
          disabled={isAnimating || totalSlides <= 1}
          aria-label="Siguientes noticias"
          style={{ opacity: totalSlides <= 1 ? 0 : 1 }}
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Dots Navigation */}
      {totalSlides > 1 && (
        <div className="carousel-dots">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir a noticias ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Progress Indicator */}
      {totalSlides > 1 && (
        <div className="carousel-progress">
          <span className="current-slide">{currentIndex + 1}</span>
          <span className="slide-separator">/</span>
          <span className="total-slides">{totalSlides}</span>
        </div>
      )}
    </div>
  );
};