import React, { useState, useEffect } from 'react';
import type { LoginLogic, UserRole, LoginOptions } from './LoginLogica';
import { initializeLogin } from './LoginLogica';
import { useNavigate } from 'react-router-dom';
import './Login.css';

interface LoginProps extends LoginOptions {}

export const Login: React.FC<LoginProps> = (props) => {
  const navigate = useNavigate();
  const [loginLogic, setLoginLogic] = useState<LoginLogic>(() => 
    initializeLogin({ ...props, navigate })
  );
  const [, forceUpdate] = useState({});
  const [isMounted, setIsMounted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setLoginLogic(initializeLogin({ ...props, navigate }));
    setIsMounted(true);
    document.body.classList.remove('dark');
  }, [navigate, props]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    loginLogic.setEmail(e.target.value);
    forceUpdate({});
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    loginLogic.setPassword(e.target.value);
    forceUpdate({});
  };

  const handleRoleChange = (role: UserRole) => {
    loginLogic.setSelectedRole(role);
    forceUpdate({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Intentando login con:', loginLogic.getEmail(), loginLogic.getPassword());
    loginLogic.handleLogin(e);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (!isMounted) return null;

  return (
    <div className="login-wrapper">
      {/* Botón volver al inicio - ARRIBA */}
      <button 
        className="back-home-top"
        type="button"
        onClick={() => navigate('/')}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Volver al inicio
      </button>

      <div className="login-container">
        {/* Icono de login */}
        <div className="login-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
            <polyline points="10 17 15 12 10 7"></polyline>
            <line x1="15" y1="12" x2="3" y2="12"></line>
          </svg>
        </div>

        {/* Header */}
        <div className="login-header">
          <h1 className="login-title">Bienvenido</h1>
          <p className="login-subtitle">
            Inicia sesión en tu cuenta institucional
          </p>
        </div>

        {/* Selector de rol tipo switch */}
        <div className="role-switch-container">
          <div className="role-switch">
            <button
              className={`role-switch-option ${loginLogic.getSelectedRole() === 'psicologo' ? 'active' : ''}`}
              onClick={() => handleRoleChange('psicologo')}
              type="button"
            >
              Psicólogo
            </button>
            <button
              className={`role-switch-option ${loginLogic.getSelectedRole() === 'administrador' ? 'active' : ''}`}
              onClick={() => handleRoleChange('administrador')}
              type="button"
            >
              Administrador
            </button>
            <div 
              className={`role-switch-slider ${loginLogic.getSelectedRole() === 'administrador' ? 'right' : 'left'}`}
            ></div>
          </div>
        </div>

        {/* Formulario */}
        <div className="login-card">
          <form className="login-form" onSubmit={handleSubmit}>
            {/* Campo de email */}
            <div className="login-input-group">
              <label htmlFor="email" className="input-label">Correo Electrónico</label>
              <div className="input-with-icon">
                <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                  <polyline points="3 7 12 13 21 7"></polyline>
                </svg>
                <input
                  id="email"
                  type="email"
                  className="login-input"
                  placeholder="ejemplo@correo.com"
                  value={loginLogic.getEmail()}
                  onChange={handleEmailChange}
                  required
                />
              </div>
            </div>

            {/* Campo de contraseña */}
            <div className="login-input-group">
              <label htmlFor="password" className="input-label">Contraseña</label>
              <div className="input-with-icon input-password">
                <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                  <circle cx="12" cy="16" r="1"></circle>
                  <path d="M8 11V7a4 4 0 0 1 8 0v4"></path>
                </svg>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="login-input password-input"
                  placeholder="●●●●●●●"
                  value={loginLogic.getPassword()}
                  onChange={handlePasswordChange}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                >
                  {showPassword ? (
                    // Ojo cerrado
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  ) : (
                    // Ojo abierto
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Botón de login */}
            <div className="login-btn-container">
              <button 
                type="submit" 
                className="login-btn"
                disabled={!loginLogic.validateForm()}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                  <polyline points="10 17 15 12 10 7"></polyline>
                  <line x1="15" y1="12" x2="3" y2="12"></line>
                </svg>
                <span>Iniciar Sesión</span>
              </button>
            </div>
          </form>

          {/* Enlaces del footer */}
          <div className="login-links">
            <button 
              className="link-btn"
              type="button"
              onClick={() => loginLogic.handleForgotPassword()}
            >
              ¿Olvidaste tu contraseña?
            </button>
            <button 
              className="link-btn"
              type="button"
              onClick={() => loginLogic.handleRequestAffiliation()}
            >
              ¿No tienes cuenta? Solicitar afiliación
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};