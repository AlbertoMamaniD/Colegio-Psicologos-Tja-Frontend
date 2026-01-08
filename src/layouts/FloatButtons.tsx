// src/components/FloatButtons.tsx
import React, { useState } from 'react';
import './FloatButtons.css';
import { FaWhatsapp, FaQuestionCircle } from 'react-icons/fa';
import { InfoModal } from './InfoModal';

export const FloatButtons: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = '+59146664444';
    const message = 'Hola, me gustaría obtener más información sobre los servicios del Colegio de Psicólogos.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="float-buttons">
      {/* Botón de WhatsApp */}
      <div className="float-button-container">
      
        <button 
          className="float-button whatsapp-button"
          onClick={handleWhatsAppClick}
         
        >
          <FaWhatsapp className="float-icon" />
        </button>
        <span className="float-tooltip">Escríbenos por WhatsApp</span>
      </div>

      {/* Botón de Preguntas - Ahora abre el modal */}
      <div className="float-button-container">
  
        <button 
          className="float-button question-button"
          onClick={() => setShowModal(true)}
         
        >
          <FaQuestionCircle className="float-icon" />
        </button>
        <span className="float-tooltip">¿Tienes preguntas?</span>
      </div>

      {/* Modal de FAQ */}
      {showModal && <InfoModal onClose={() => setShowModal(false)} />}
    </div>
  );
};