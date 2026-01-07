// src/components/InfoModal.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './InfoModal.css';

interface InfoModalProps {
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ onClose }) => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const navigate = useNavigate();

  const faqData = [
    {
      question: "¿Cómo puedo afiliarme al colegio?",
      answer: "Para afiliarte al colegio, necesitas completar el formulario de afiliación en línea con tus documentos profesionales. El proceso incluye la verificación de tu título, certificaciones y registro profesional. El tiempo estimado es de 15 días hábiles."
    },
    {
      question: "¿Cuánto cuesta la afiliación?",
      answer: "El costo de afiliación es de 20 Bs al mes. Puedes realizar pagos mensuales o adelantar varios meses según tu preferencia."
    },
    {
      question: "¿Cómo busco un psicólogo en el directorio?",
      answer: "Puedes buscar psicólogos en nuestro directorio filtrando por especialidad, ubicación y modalidad de atención (presencial o en línea). Todos nuestros afiliados cuentan con certificaciones verificadas."
    },
    {
      question: "¿Qué servicios ofrece el colegio a los afiliados?",
      answer: "Ofrecemos: acceso al directorio profesional, capacitaciones continuas, respaldo institucional, certificaciones profesionales, red de contactos, oficina compartida para consultas, y soporte administrativo."
    },
    {
      question: "¿Cómo funciona la reserva de la oficina?",
      answer: "Los psicólogos afiliados pueden reservar la oficina por horas a través de su oficina virtual. Cada reserva tiene una duración de 1 hora y debe realizarse con anticipación. No se pueden cancelar reservas si faltan menos de 20 minutos."
    },
    {
      question: "¿Qué modalidades de atención están disponibles?",
      answer: "Nuestros psicólogos ofrecen atención presencial y en línea (videollamada). Puedes filtrar por modalidad en el directorio según tu preferencia."
    },
    {
      question: "¿Cómo me comunico con el colegio?",
      answer: "Puedes contactarnos a través de WhatsApp haciendo clic en el botón verde, enviando un mensaje desde la sección de Contacto, o visitando nuestras oficinas. También puedes escribirnos directamente desde tu oficina virtual si eres afiliado."
    },
    {
      question: "¿Qué requisitos necesito para ser psicólogo afiliado?",
      answer: "Necesitas: título universitario en Psicología, registro profesional vigente, certificaciones de especialización (si aplica), y completar el proceso de verificación de documentos. Todos los documentos se envían de forma digital durante el proceso de afiliación."
    }
  ];

  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  // Prevenir scroll en el fondo cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Manejar la tecla ESC para cerrar el modal
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-container" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-container">
            <h2 className="modal-title">Preguntas Frecuentes</h2>
            <p className="modal-subtitle">Encuentra respuestas a las preguntas más comunes</p>
          </div>
          <button 
            className="modal-close" 
            onClick={onClose} 
            aria-label="Cerrar modal"
          >
            {/* SVG directo para la X */}
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5"
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Lista de FAQ - Scroll personalizado */}
        <div className="faq-scroll-container">
          <div className="faq-list">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeQuestion === index ? 'active' : ''}`}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={activeQuestion === index}
                >
                  <span className="faq-number">{index + 1}.</span>
                  <span className="faq-text">{faq.question}</span>
                  <span className="faq-toggle">
                    {activeQuestion === index ? '−' : '+'}
                  </span>
                </button>
                
                <div className="faq-answer" style={{ 
                  maxHeight: activeQuestion === index ? '500px' : '0',
                  opacity: activeQuestion === index ? 1 : 0
                }}>
                  <div className="answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer del modal */}
        <div className="modal-footer">
          <p className="footer-text">
            ¿No encontraste lo que buscabas? Contáctanos directamente
          </p>
          <div className="footer-buttons">
            <button 
              className="footer-button whatsapp-button"
              onClick={() => {
                const phoneNumber = '+59146664444';
                const message = 'Hola, tengo una pregunta que no encontré en las FAQ.';
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              Contactar por WhatsApp
            </button>
            <button 
              className="footer-button contact-button"
              onClick={() => {
                onClose();
                navigate('/contacto');
              }}
            >
              Ir a Contacto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};