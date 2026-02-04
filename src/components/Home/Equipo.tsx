import React from 'react';
import './Equipo.css';

// Imágenes de psicólogos profesionales (Unsplash)
const teamImages = {
  patricia: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  miguel: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  sofia: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  ricardo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
};

interface TeamMember {
  id: number;
  name: string;
  title: string;
  image: string;
}

export const Equipo: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Dra. Patricia Rojas',
      title: 'Directora Ejecutiva',
      image: teamImages.patricia
    },
    {
      id: 2,
      name: 'Dr. Miguel Castillo',
      title: 'Director Académico',
      image: teamImages.miguel
    },
    {
      id: 3,
      name: 'Lic. Sofía Herrera',
      title: 'Coordinadora de Afiliaciones',
      image: teamImages.sofia
    },
    {
      id: 4,
      name: 'Dr. Ricardo Monge',
      title: 'Coordinador de Ética',
      image: teamImages.ricardo
    }
  ];

  return (
    <div className="info-container">
      <main className="info-content">
        {/* Sección de Equipo Directivo */}
        <section className="team-section">
          <div className="section-header">
            <h2>Directorio Ejecutivo</h2>
            <p className="section-subtitle">
              Profesionales comprometidos con la excelencia y el desarrollo de la psicología.
            </p>
            <div className="divider"></div>
          </div>

          <div className="team-grid">
            {teamMembers.map(member => (
              <div className="team-member" key={member.id}>
                <div className="member-avatar-container">
                  <img src={member.image} alt={member.name} className="member-avatar" />
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <h4 className="member-title">{member.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </section>


      </main>
    </div>
  );
};