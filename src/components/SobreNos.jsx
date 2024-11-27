import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const SobreNos = () => {
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });

  const teamMembers = [
    { name: "João Silva", role: "CEO", img: "/img/team-1.jpg" },
    { name: "Maria Oliveira", role: "Desenvolvedora", img: "/img/team-2.jpg" },
    { name: "Carlos Souza", role: "Designer", img: "/img/team-3.jpg" },
    { name: "Ana Costa", role: "Gerente de Projetos", img: "/img/team-4.jpg" }
  ];

  return (
    <div ref={sectionRef} className="sobre-nos-container" id="sobre-nos">
      <div className={`sobre-nos-content animate-on-scroll ${isVisible ? 'fade-in-up' : ''}`}>
        <h1>Sobre Nós</h1>
        <div className="mission-vision">
          <div className="section-card">
            <h2>Nossa Missão</h2>
            <p>
              Promover a sustentabilidade através de soluções tecnológicas inovadoras,
              conectando pessoas e ideias para um futuro mais verde e consciente.
            </p>
          </div>
          
          <div className="section-card">
            <h2>Nossa Visão</h2>
            <p>
              Ser referência em soluções sustentáveis, inspirando mudanças positivas
              e contribuindo para um mundo mais equilibrado e responsável.
            </p>
          </div>
        </div>

        <div className="team-section">
          <h2>Nossa Equipe</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <img 
                  src={member.img} 
                  alt={`Foto de ${member.name}, ${member.role}`}
                  loading="lazy"
                />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreNos;