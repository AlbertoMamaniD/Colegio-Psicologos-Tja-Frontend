import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import logo from '../../../assets/Logo1.jpg';
import './Menu.css';

interface MenuProps {
  onLogout?: () => void;
  userName?: string;
  userRole?: string;
}

export const Menu: React.FC<MenuProps> = ({ 
  onLogout, 
  userName = "Dr. Juan Pérez", 
  userRole = "Psicólogo" 
}) => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activePath, setActivePath] = useState('/dashboard');

  // Detectar tema inicial
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    // Aplicar tema guardado o detectado
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      applyDarkTheme();
    } else {
      applyLightTheme();
    }

    // Establecer ruta activa
    setActivePath(window.location.pathname);
  }, []);

  // Aplicar tema oscuro
  const applyDarkTheme = () => {
    setIsDarkMode(true);
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  };

  // Aplicar tema claro
  const applyLightTheme = () => {
    setIsDarkMode(false);
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  };

  // Alternar tema
  const handleThemeToggle = () => {
    if (isDarkMode) {
      applyLightTheme();
    } else {
      applyDarkTheme();
    }
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    } else {
      navigate('/login');
    }
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setActivePath(path);
  };

  const menuItems = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      ),
      label: 'Agenda',
      path: '/agenda'
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      ),
      label: 'Reservas',
      path: '/reservas'
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="5" width="20" height="14" rx="2"></rect>
          <line x1="2" y1="10" x2="22" y2="10"></line>
        </svg>
      ),
      label: 'Gestión de Pagos',
      path: '/pagos'
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
      label: 'Mis Contribuciones',
      path: '/contribuciones'
    }
  ];

  return (
    <div className="menu-sidebar">
      {/* Header superior */}
      <div className="menu-header">
        <div className="menu-brand">
          <div className="menu-logo">
            <img 
              src={logo} 
              alt="Logo Colegio de Psicólogos" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                borderRadius: 'var(--radius-md)'
              }} 
            />
          </div>
          <div className="menu-brand-text">
            <h1 className="menu-brand-title">Colegio de Psicólogos</h1>
            <p className="menu-brand-subtitle">Oficina Virtual</p>
          </div>
        </div>

        {/* Información del usuario */}
        <div className="menu-user-info">
          <div className="user-avatar">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="user-details">
            <h3 className="user-name">{userName}</h3>
            <p className="user-role">{userRole}</p>
          </div>
          <button 
            className="theme-toggle-btn"
            onClick={handleThemeToggle}
            aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            <div className="theme-icon-wrapper">
              <SunIcon className={`theme-icon sun-icon ${!isDarkMode ? 'active' : ''}`} />
              <MoonIcon className={`theme-icon moon-icon ${isDarkMode ? 'active' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Menú de navegación */}
      <nav className="menu-nav">
        <ul className="menu-list">
          {menuItems.map((item) => (
            <li key={item.label}>
              <button
                className={`menu-item ${activePath === item.path ? 'active' : ''}`}
                onClick={() => handleNavigation(item.path)}
              >
                <span className="menu-item-icon">{item.icon}</span>
                <span className="menu-item-label">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="menu-divider"></div>

        {/* Botones adicionales */}
        <button
          className="menu-profile-btn"
          onClick={() => handleNavigation('/perfil')}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span>Mi Perfil</span>
        </button>

        <button
          className="menu-logout-btn"
          onClick={handleLogout}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
          <span>Cerrar Sesión</span>
        </button>
      </nav>
    </div>
  );
};