import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
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
  const [activePath, setActivePath] = useState('/dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sincronizar con localStorage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme === 'dark' || (!savedTheme && prefersDark);
  });

  // Aplicar tema inicial
  useEffect(() => {
    applyTheme(isDarkMode);
    setActivePath(window.location.pathname);
  }, []);

  // Escuchar cambios en localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      const theme = localStorage.getItem('theme');
      const newDarkMode = theme === 'dark';
      setIsDarkMode(newDarkMode);
      applyTheme(newDarkMode);
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('themeChange', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('themeChange', handleStorageChange);
    };
  }, []);

  const applyTheme = (isDark: boolean) => {
    if (isDark) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  };

  const handleThemeToggle = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    applyTheme(newMode);

    // Disparar evento personalizado para sincronizar
    window.dispatchEvent(new Event('themeChange'));
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
    setIsMobileMenuOpen(false); // Cerrar menú al navegar en móvil
  };

  const menuItems = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
      ),
      label: 'Dashboard',
      path: '/dashboard'
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
      label: 'Solicitudes de Cita',
      path: '/solicitudes'
    },
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
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      ),
      label: 'Mi Perfil',
      path: '/perfil'
    }
  ];

  return (
    <>
      <button
        className="mobile-menu-toggle"
        onClick={() => setIsMobileMenuOpen(true)}
        aria-label="Abrir menú"
      >
        <Bars3Icon width={24} height={24} />
      </button>

      {isMobileMenuOpen && (
        <div
          className="menu-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div className={`menu-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="menu-header">
          <div className="menu-brand">
            <div className="menu-brand-container">
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

            <div className="menu-actions-header">
              <button
                className="theme-toggle-btn-header"
                onClick={handleThemeToggle}
                aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              >
                <div className="theme-icon-wrapper-header">
                  <SunIcon className={`theme-icon-header sun-icon ${!isDarkMode ? 'active' : ''}`} />
                  <MoonIcon className={`theme-icon-header moon-icon ${isDarkMode ? 'active' : ''}`} />
                </div>
              </button>

              <button
                className="mobile-menu-close"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Cerrar menú"
              >
                <XMarkIcon width={24} height={24} />
              </button>
            </div>
          </div>

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
          </div>
        </div>

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
    </>
  );
};