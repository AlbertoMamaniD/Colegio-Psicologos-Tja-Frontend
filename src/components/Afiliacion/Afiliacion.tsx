import React, { useEffect, useRef, useState } from "react";
import { PageHero } from "../../layouts/PageHero";
import { FormAfiliacion } from "./FormAfiliacion";
import "./Afiliacion.css";
import { 
  FaFileAlt, 
  FaCreditCard, 
  FaCheckCircle,
  FaLink,
  FaClock
} from "react-icons/fa";

export const Afiliacion: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <>
      <PageHero />
      
      <main className="afiliacion-container">
        {/* Sección de introducción */}
        <section 
          className="afiliacion-intro"
          id="intro"
          data-animate
        >
          <h1 className={`afiliacion-main-title ${visibleSections.has('intro') ? 'animate-in' : ''}`}>
            Únete a Nuestra Comunidad Profesional
          </h1>
          <p className={`afiliacion-intro-text ${visibleSections.has('intro') ? 'animate-in' : ''}`}>
            Como psicólogo afiliado al Colegio de Tarija, accederás a herramientas exclusivas, 
            capacitaciones continuas y una red de apoyo profesional que potenciará tu carrera.
          </p>
        </section>

        <div className="afiliacion-grid">
          {/* Columna izquierda: Requisitos */}
          <section 
            className={`afiliacion-card requisitos-card ${visibleSections.has('requisitos') ? 'animate-in' : ''}`}
            id="requisitos"
            data-animate
          >
            <div className="card-header">
              <h2 className="card-title">Requisitos para Afiliarse</h2>
              <p className="card-subtitle">
                Antes de comenzar, asegúrate de contar con la documentación necesaria.
              </p>
            </div>
            
            <div className="requisitos-grid">
              {[
                "Título profesional en Psicología",
                "Cédula de identidad vigente",
                "Certificado de nacimiento actualizado",
                "Dos fotografías tamaño carnet",
                "CV actualizado y documentado",
                "Certificados de especialización (si aplica)"
              ].map((texto, index) => (
                <div 
                  key={index}
                  className={`requisito-item ${visibleSections.has('requisitos') ? 'animate-in' : ''}`}
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="requisito-icon">
                    <FaCheckCircle />
                  </div>
                  <span className="requisito-text">{texto}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Columna central: Proceso */}
          <section 
            className={`afiliacion-card proceso-card ${visibleSections.has('proceso') ? 'animate-in' : ''}`}
            id="proceso"
            data-animate
          >
            <div className="card-header">
              <h2 className="card-title">Proceso de Afiliación</h2>
              <p className="card-subtitle">
                Sigue estos pasos para completar tu afiliación de manera sencilla.
              </p>
            </div>
            
            <div className="proceso-timeline">
              {[
                { icon: FaFileAlt, title: "Envío de solicitud inicial", desc: "Completa el formulario con tus datos básicos." },
                { icon: FaClock, title: "Revisión y aprobación", desc: "Tu solicitud será evaluada por el administrador." },
                { icon: FaLink, title: "Enlace personalizado", desc: "Recibirás un enlace por correo y WhatsApp." },
                { icon: FaCreditCard, title: "Documentos y pago", desc: "Sube tus documentos y comprobante de pago." },
                { icon: FaCheckCircle, title: "Confirmación final", desc: "Recibirás acceso a la Oficina Virtual." }
              ].map((paso, index) => {
                const Icon = paso.icon;
                return (
                  <div 
                    key={index}
                    className={`proceso-step ${visibleSections.has('proceso') ? 'animate-in' : ''}`}
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className="step-circle">
                      <Icon />
                    </div>
                    {index < 4 && <div className="step-line"></div>}
                    <div className="step-info">
                      <div className="step-badge">PASO {index + 1}</div>
                      <h3 className="step-title">{paso.title}</h3>
                      <p className="step-description">{paso.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Columna derecha: Costo */}
          <section 
            className={`afiliacion-card costo-card ${visibleSections.has('costo') ? 'animate-in' : ''}`}
            id="costo"
            data-animate
          >
            <div className="card-header">
              <h2 className="card-title">Costo de Afiliación</h2>
            </div>
            
            <div className="costo-content">
              <div className="costo-badge">CUOTA MENSUAL</div>
              
              <div className="costo-precio">
                <span className="precio-amount">Bs. 20</span>
                <span className="precio-period">/mes</span>
              </div>

              <p className="costo-note">
                Puedes pagar mes a mes o adelantar varios meses para tu comodidad.
              </p>

              <div className="beneficios-section">
                <h3 className="beneficios-title">Incluye:</h3>
                <p className="beneficios-text">
                  Acceso a capacitaciones, bolsa de trabajo, asesoría legal, supervisión clínica y oficina virtual.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* ===== SECCIÓN DEL FORMULARIO ===== */}
        <section 
          className="form-section"
          id="solicitar"
          data-animate
        >
          
          
          {/* Aquí integramos el formulario existente */}
          <div className={`form-wrapper ${visibleSections.has('solicitar') ? 'animate-in' : ''}`}>
            <FormAfiliacion />
          </div>
        </section>
      </main>
    </>
  );
};