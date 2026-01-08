// src/components/FormAfiliacion.tsx
import React, { useState } from 'react';
import './FormAfiliacion.css';
import { 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaComment, 
  FaPaperPlane,
  FaShieldAlt
} from 'react-icons/fa';

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
  aceptarTerminos: boolean;
}

export const FormAfiliacion: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
    aceptarTerminos: false
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre completo es requerido';
    } else if (formData.nombre.length < 3) {
      newErrors.nombre = 'El nombre debe tener al menos 3 caracteres';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingresa un correo electrónico válido';
    }
    
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido';
    } else if (!/^\+?\d{7,15}$/.test(formData.telefono.replace(/\s/g, ''))) {
      newErrors.telefono = 'Ingresa un número de teléfono válido';
    }
    
    if (!formData.aceptarTerminos) {
      newErrors.aceptarTerminos = 'Debes aceptar los términos y condiciones' as any;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simular envío a API
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Aquí iría la lógica real de envío
      console.log('Formulario enviado:', formData);
      
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: '',
        aceptarTerminos: false
      });
      
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      mensaje: '',
      aceptarTerminos: false
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="form-success-container">
        <div className="success-icon-container">
          <FaShieldAlt className="success-icon" />
        </div>
        <h2 className="success-title">¡Solicitud Enviada con Éxito!</h2>
        <p className="success-message">
          Hemos recibido tu solicitud de afiliación. Te contactaremos en las 
          próximas 24 horas para continuar con el proceso.
        </p>
        <button 
          onClick={handleReset}
          className="new-request-button"
        >
          Enviar Otra Solicitud
        </button>
      </div>
    );
  }

  return (
    <div className="form-afiliacion-container">
      <div className="form-header">
        <h1 className="form-title">Solicitar Afiliación</h1>
        <p className="form-subtitle">
          Completa el formulario para iniciar tu proceso.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="afiliacion-form">
        {/* Nombre Completo */}
        <div className="form-group">
          <label htmlFor="nombre" className="form-label">
            <span className="label-text">Nombre Completo *</span>
          </label>
          <div className="input-wrapper">
            <FaUser className="input-icon" />
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className={`form-input ${errors.nombre ? 'input-error' : ''}`}
              placeholder="Juan Pérez"
            />
          </div>
          {errors.nombre && (
            <span className="error-message">{errors.nombre}</span>
          )}
        </div>

        {/* Correo Electrónico */}
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            <span className="label-text">Correo Electrónico *</span>
          </label>
          <div className="input-wrapper">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-input ${errors.email ? 'input-error' : ''}`}
              placeholder="ejemplo@correo.com"
            />
          </div>
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>

        {/* Teléfono */}
        <div className="form-group">
          <label htmlFor="telefono" className="form-label">
            <span className="label-text">Teléfono / Celular *</span>
          </label>
          <div className="input-wrapper">
            <FaPhone className="input-icon" />
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className={`form-input ${errors.telefono ? 'input-error' : ''}`}
              placeholder="+591 70000000"
            />
          </div>
          {errors.telefono && (
            <span className="error-message">{errors.telefono}</span>
          )}
        </div>

        {/* Mensaje Adicional */}
        <div className="form-group">
          <label htmlFor="mensaje" className="form-label">
            <span className="label-text">Mensaje adicional</span>
          </label>
          <div className="textarea-wrapper">
            <FaComment className="textarea-icon" />
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              className="form-textarea"
              placeholder="Comenta tu interés en afiliarte o cualquier duda que tengas..."
              rows={4}
            />
          </div>
        </div>

        {/* Separador */}
        <div className="form-divider"></div>

        {/* Términos y Condiciones */}
        <div className="terms-group">
          <div className="terms-content">
            <div className="terms-checkbox">
              <input
                type="checkbox"
                id="aceptarTerminos"
                name="aceptarTerminos"
                checked={formData.aceptarTerminos}
                onChange={handleChange}
                className="checkbox-input"
              />
              <label htmlFor="aceptarTerminos" className="checkbox-label">
                <span className="checkbox-custom"></span>
                <span className="checkbox-text">
                  Al enviar el formulario, aceptas nuestros{' '}
                  <a href="/terminos" className="terms-link">términos y condiciones</a>{' '}
                  de privacidad.
                </span>
              </label>
            </div>
            {errors.aceptarTerminos && (
              <span className="error-message">{errors.aceptarTerminos}</span>
            )}
          </div>
        </div>

        {/* Botón de envío */}
        <div className="form-actions">
          <button
            type="submit"
            disabled={isSubmitting}
            className="submit-button"
          >
            <FaPaperPlane className="button-icon" />
            <span className="button-text">
              {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};