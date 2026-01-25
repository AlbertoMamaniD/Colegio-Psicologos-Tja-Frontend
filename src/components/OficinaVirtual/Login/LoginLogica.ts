export type UserRole = 'psicologo' | 'administrador';

export interface LoginCredentials {
  email: string;
  password: string;
  role: UserRole;
}

export interface LoginOptions {
  onLogin?: (credentials: LoginCredentials) => void;
  onForgotPassword?: () => void;
  onRequestAffiliation?: () => void;
  navigate?: (path: string) => void;
}

export class LoginLogic {
  private email: string = '';
  private password: string = '';
  private selectedRole: UserRole = 'psicologo';
  private options: LoginOptions;
  
  constructor(options: LoginOptions = {}) {
    this.options = options;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  getEmail(): string {
    return this.email;
  }

  setPassword(password: string): void {
    this.password = password;
  }

  getPassword(): string {
    return this.password;
  }

  setSelectedRole(role: UserRole): void {
    this.selectedRole = role;
  }

  getSelectedRole(): UserRole {
    return this.selectedRole;
  }

  handleLogin(event?: React.FormEvent): void {
    if (event) {
      event.preventDefault();
    }

    const credentials: LoginCredentials = {
      email: this.email,
      password: this.password,
      role: this.selectedRole
    };

    // Validar credenciales de prueba (a@gmail.com / 12345678)
    if (this.email === 'a@gmail.com' && this.password === '12345678') {
      console.log('✅ Login exitoso:', credentials);
      
      if (this.options.onLogin) {
        this.options.onLogin(credentials);
      } else {
        alert(`✅ ¡Login exitoso!\n\nUsuario: ${this.email}\nRol: ${this.selectedRole}`);
      }

      // Redirigir a la página de Oficina usando navigate
      if (this.options.navigate) {
        this.options.navigate('/oficina');
      }
    } else {
      console.error('❌ Credenciales incorrectas');
      alert('❌ Credenciales incorrectas\n\nUsa:\n• Email: a@gmail.com\n• Contraseña: 12345678');
    }
  }

  handleForgotPassword(): void {
    console.log('🔑 Recuperación de contraseña solicitada');
    if (this.options.onForgotPassword) {
      this.options.onForgotPassword();
    } else {
      alert('🔑 Función de recuperación de contraseña');
    }
  }

  handleRequestAffiliation(): void {
    console.log('📝 Solicitud de afiliación');
    if (this.options.onRequestAffiliation) {
      this.options.onRequestAffiliation();
    } else {
      alert('📝 Función de solicitud de afiliación');
    }
  }

  validateForm(): boolean {
    if (!this.email.trim()) {
      return false;
    }
    
    if (!this.password.trim()) {
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      return false;
    }

    return true;
  }
}

export function initializeLogin(options?: LoginOptions): LoginLogic {
  return new LoginLogic(options);
}