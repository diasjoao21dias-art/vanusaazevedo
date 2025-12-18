import { useEffect, useRef, useState } from 'react'
import './Services.css'

function Services() {
  const [visibleCards, setVisibleCards] = useState([])
  const cardsRef = useRef([])

  const services = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      ),
      title: "Terapia Individual",
      description: "Atendimento personalizado focado em suas necessidades únicas, trabalhando questões emocionais, comportamentais e de desenvolvimento pessoal.",
      features: ["Autoconhecimento", "Gestão emocional", "Desenvolvimento pessoal"]
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: "Relacionamentos: Conflitos, divórcio, dificuldades de comunicação, terapia de casal/família",
      description: "Apoio para casais que buscam melhorar a comunicação, resolver conflitos e fortalecer o relacionamento.",
      features: ["Comunicação", "Resolução de conflitos", "Reconexão afetiva"]
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      title: "Atendimento Online",
      description: "Sessões por videochamada com a mesma qualidade do atendimento presencial, proporcionando conforto e praticidade.",
      features: ["Praticidade", "Conforto", "Flexibilidade de horários"]
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      ),
      title: "Ansiedade, Estresse e Burnout (Síndrome de Esgotamento Profissional)",
      description: "Tratamento especializado para transtornos de ansiedade, síndrome do pânico e gestão do estresse do dia a dia.",
      features: ["Técnicas de relaxamento", "Reestruturação cognitiva", "Manejo de crises e busca de qualidade de vida"]
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          <line x1="9" y1="9" x2="9.01" y2="9"/>
          <line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
      ),
      title: "Depressão",
      description: "Acompanhamento terapêutico para sintomas depressivos, auxiliando na recuperação do bem-estar e qualidade de vida.",
      features: ["Suporte emocional", "Ressignificação", "Retomada de atividades"]
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      title: "Comportamentos e Hábitos",
      description: "Vícios, compulsões, hábitos nocivos, dificuldade em tomar decisões.",
      features: ["Mudança de padrões negativos", "Novas percepções do mundo interno", "Planejamento"]
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, index])
            }, index * 100)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <span className="section-tag">Serviços</span>
          <h2 className="section-title">
            Como posso te <span className="highlight">ajudar</span>
          </h2>
          <p className="services-subtitle">
            Ofereço diferentes modalidades de atendimento para atender suas necessidades
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              ref={(el) => cardsRef.current[index] = el}
              data-index={index}
              className={`service-card ${visibleCards.includes(index) ? 'visible' : ''}`}
            >
              <div className="service-icon-wrapper">
                <div className="service-icon">{service.icon}</div>
                <div className="service-icon-bg"></div>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
