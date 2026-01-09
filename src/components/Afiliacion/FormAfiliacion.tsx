import React, { useState } from 'react';
import './FormAfiliacion.css';
import { 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaComment, 
  FaPaperPlane,
  FaCheckCircle,
  FaShieldAlt,
  FaExclamationCircle
} from 'react-icons/fa';

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
  aceptarTerminos: boolean;
}

interface FormErrors {
  nombre?: string;
  email?: string;
  telefono?: string;
  aceptarTerminos?: string;
}

export const FormAfiliacion: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
    aceptarTerminos: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
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
    
    // Limpiar error cuando el usuario empieza a escribir
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
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
    } else if (!/^\+?[\d\s-]{7,15}$/.test(formData.telefono.replace(/\s/g, ''))) {
      newErrors.telefono = 'Ingresa un número de teléfono válido';
    }
    
    if (!formData.aceptarTerminos) {
      newErrors.aceptarTerminos = 'Debes aceptar los términos y condiciones';
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
      
      console.log('Formulario enviado:', formData);
      setIsSubmitted(true);
      
      // Resetear formulario después del envío exitoso
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
          <FaCheckCircle className="success-icon" />
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
          <FaPaperPlane className="button-icon" />
          <span>Enviar Otra Solicitud</span>
        </button>
      </div>
    );
  }

  return (
    <div className="form-afiliacion-container">
      <div className="form-header">
        <h1 className="form-title">Solicitar Afiliación</h1>
        <p className="form-subtitle">
          Completa el formulario para iniciar tu proceso de afiliación.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="afiliacion-form">
        {/* Nombre Completo */}
        <div className="form-group">
          <label htmlFor="nombre" className="form-label">
            <FaUser className="label-icon" />
            <span>Nombre Completo</span>
            <span className="required-asterisk">*</span>
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
              placeholder="Ej: Juan Pérez"
            />
          </div>
          {errors.nombre && (
            <div className="error-message">
              <FaExclamationCircle className="error-icon" />
              <span>{errors.nombre}</span>
            </div>
          )}
        </div>

        {/* Correo Electrónico */}
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            <FaEnvelope className="label-icon" />
            <span>Correo Electrónico</span>
            <span className="required-asterisk">*</span>
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
              placeholder="Ej: ejemplo@correo.com"
            />
          </div>
          {errors.email && (
            <div className="error-message">
              <FaExclamationCircle className="error-icon" />
              <span>{errors.email}</span>
            </div>
          )}
        </div>

        {/* Teléfono */}
        <div className="form-group">
          <label htmlFor="telefono" className="form-label">
            <FaPhone className="label-icon" />
            <span>Teléfono / Celular</span>
            <span className="required-asterisk">*</span>
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
              placeholder="Ej: +591 70000000"
            />
          </div>
          {errors.telefono && (
            <div className="error-message">
              <FaExclamationCircle className="error-icon" />
              <span>{errors.telefono}</span>
            </div>
          )}
        </div>

        {/* Mensaje Adicional */}
        <div className="form-group">
          <label htmlFor="mensaje" className="form-label">
            <FaComment className="label-icon" />
            <span>Mensaje Adicional</span>
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
        <div className="form-divider">
          <FaShieldAlt className="divider-icon" />
        </div>

        {/* Términos y Condiciones */}
        <div className="terms-group">
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
                Acepto los <a href="/terminos" className="terms-link">términos y condiciones</a>{' '}
                y la <a href="/privacidad" className="terms-link">política de privacidad</a>.
              </span>
            </label>
          </div>
          {errors.aceptarTerminos && (
            <div className="error-message">
              <FaExclamationCircle className="error-icon" />
              <span>{errors.aceptarTerminos}</span>
            </div>
          )}
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