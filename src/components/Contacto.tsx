// src/components/Contacto.tsx
import React, { useState } from "react";
import "./Contacto.css";
import {
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
  FaEnvelope,
} from "react-icons/fa";

export const Contacto: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío del formulario
    setTimeout(() => {
      alert("¡Mensaje enviado con éxito! Te contactaremos pronto.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="contacto-container">
      <div className="contacto-wrapper">
        <header className="contacto-header">
          <h1 className="contacto-title">Contáctanos</h1>
          <p className="contacto-subtitle">
            Estamos aquí para ayudarte. Completa el formulario y nuestro equipo
            se pondrá en contacto contigo a la brevedad.
          </p>
        </header>

        <form className="contacto-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              className="form-input"
              placeholder="Tu nombre completo"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="tucorreo@ejemplo.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <a
              href="mailto:info@colegiopsicologostarija.bo"
              className="email-link"
            >
              <FaEnvelope className="email-icon" />
              info@colegiopsicologostarija.bo
            </a>
          </div>

          <div className="form-group">
            <label htmlFor="subject" className="form-label">
              Asunto
            </label>
            <input
              type="text"
              id="subject"
              className="form-input"
              placeholder="¿En qué podemos ayudarte?"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Mensaje
            </label>
            <textarea
              id="message"
              className="form-textarea"
              placeholder="Escribe tu mensaje aquí..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-divider"></div>

          <button
            type="submit"
            className="submit-btn"
            disabled={isSubmitting}
          >
            <FaPaperPlane className="submit-icon" />
            {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
          </button>
        </form>

        <div className="contacto-info">
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <h3 className="info-title">Dirección</h3>
            <p className="info-text">Av. Principal 123, Tarija, Bolivia</p>
          </div>
          <div className="info-item">
            <FaPhone className="info-icon" />
            <h3 className="info-title">Teléfono</h3>
            <p className="info-text">+591 4-666-4444</p>
          </div>
          <div className="info-item">
            <FaClock className="info-icon" />
            <h3 className="info-title">Horario de Atención</h3>
            <p className="info-text">Lun - Vie: 8:00 - 18:00</p>
            <p className="info-text">Sáb: 9:00 - 13:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};