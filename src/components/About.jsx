import './About.css'

function About() {
  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      ),
      title: "Escuta Acolhedora",
      description: "Um espaço seguro onde você pode se expressar livremente"
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      ),
      title: "Flexibilidade",
      description: "Atendimento presencial e online para sua comodidade"
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Ética Profissional",
      description: "Sigilo e respeito em cada sessão"
    }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-section">
            <div className="about-image-wrapper">
              <img src="/vanusa-about.jpg" alt="Vanusa Azevedo - Psicóloga" className="about-photo" />
              <div className="about-badge">
                <span className="badge-number">+5</span>
                <span className="badge-text">Anos de Experiência</span>
              </div>
            </div>
          </div>
          
          <div className="about-content">
            <span className="section-tag">Sobre Mim</span>
            <h2 className="section-title">
              Psicóloga dedicada ao seu
              <span className="highlight"> bem-estar emocional</span>
            </h2>
            <p className="about-text">
              Sou Vanusa Azevedo, psicóloga registrada no CRP 04/63578, e encontrei na Terapia Cognitivo-Comportamental (TCC) o método e, na escuta acolhedora, a minha missão. Atuo convivendo com histórias que me ensinam, diariamente, sobre a força humana, a dor silenciosa e a esperança e o cuidado.
            </p>
            <p className="about-text">
              Meu olhar é sensível ao que vai além da superfície. Acredito profundamente na transformação que acontece quando alguém é ouvido de verdade — com respeito, sem julgamentos, com empatia. Meu trabalho é ajudar você a explorar seus pensamentos, emoções e comportamentos, e juntos construirmos caminhos mais leves e possíveis e uma qualidade de vida.
            </p>
            <p className="about-text">
              Ofereço atendimentos clínicos online ou presencial.
            </p>
            <p className="about-text">
              Se sentir que é o momento de cuidar de você, estou por aqui. Com escuta, presença e compromisso.
            </p>
            <p className="about-text">
              Acredito que cada pessoa possui dentro de si os recursos necessários para o seu desenvolvimento pessoal, e meu papel é auxiliar nessa jornada de autodescoberta e desenvolvimento interno.
            </p>
            
            <div className="about-features">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon">{feature.icon}</div>
                  <div className="feature-content">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
