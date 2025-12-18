import './Approach.css'

function Approach() {
  const steps = [
    {
      number: "01",
      title: "Primeiro Contato",
      description: "Entre em contato pelo WhatsApp ou Instagram. Vamos conversar brevemente sobre suas necessidades e agendar uma consulta inicial."
    },
    {
      number: "02",
      title: "Avaliação Inicial",
      description: "Na primeira sessão, conversamos sobre sua história, suas queixas e definimos juntos os objetivos do tratamento."
    },
    {
      number: "03",
      title: "Plano Terapêutico",
      description: "Desenvolvo um plano personalizado considerando suas particularidades, com frequência de sessões adequada ao seu momento."
    },
    {
      number: "04",
      title: "Jornada Terapêutica",
      description: "Acompanho você em cada etapa do processo, oferecendo suporte, técnicas e ferramentas para seu desenvolvimento."
    }
  ]

  return (
    <section id="approach" className="approach">
      <div className="container">
        <div className="approach-content">
          <div className="approach-header">
            <span className="section-tag">Abordagem</span>
            <h2 className="section-title">
              Como funciona o <span className="highlight">processo terapêutico</span>
            </h2>
            <div className="approach-intro">
              <div className="approach-intro-text">
                <p className="approach-text">
                  A terapia é um processo de construção conjunta. Trabalho com uma 
                  abordagem humanizada e acolhedora, respeitando o ritmo e as 
                  necessidades individuais de cada pessoa.
                </p>
              </div>
              <div className="approach-intro-image">
                <img src="/vanusa-approach.jpg" alt="Vanusa Azevedo - Psicóloga" />
              </div>
            </div>
          </div>

          <div className="steps-grid">
            {steps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="step-connector">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="approach-values">
          <div className="value-card">
            <div className="value-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h4>Sigilo Absoluto</h4>
            <p>Tudo o que é compartilhado em sessão é protegido pelo sigilo profissional</p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4M12 8h.01"/>
              </svg>
            </div>
            <h4>Sem Julgamentos</h4>
            <p>Ambiente livre de julgamentos para você se expressar com segurança</p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h4>Comprometimento</h4>
            <p>Dedicação total ao seu processo de crescimento e bem-estar</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Approach
