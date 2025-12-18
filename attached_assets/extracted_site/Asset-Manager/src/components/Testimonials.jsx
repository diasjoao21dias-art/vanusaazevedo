import { useState, useEffect } from 'react'
import './Testimonials.css'

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const testimonials = [
    {
      text: "A terapia com a Vanusa mudou minha vida. Encontrei um espaço seguro para me reconectar comigo mesma e aprender a lidar com minha ansiedade de forma mais saudável.",
      author: "Maria S.",
      role: "Paciente há 1 ano"
    },
    {
      text: "Profissional incrível! Me ajudou a atravessar um momento muito difícil com acolhimento e profissionalismo. Recomendo de olhos fechados.",
      author: "João P.",
      role: "Paciente há 8 meses"
    },
    {
      text: "A abordagem humanizada da Vanusa faz toda a diferença. Ela realmente escuta e me ajuda a encontrar as respostas dentro de mim.",
      author: "Ana L.",
      role: "Paciente há 2 anos"
    }
  ]

  const changeSlide = (newIndex) => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex(newIndex)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const nextTestimonial = () => {
    changeSlide((activeIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    changeSlide((activeIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000)
    return () => clearInterval(interval)
  }, [activeIndex])

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-bg">
        <div className="bg-shape bg-1"></div>
        <div className="bg-shape bg-2"></div>
        <div className="bg-pattern"></div>
      </div>

      <div className="container">
        <div className="testimonials-header">
          <span className="section-tag">Depoimentos</span>
          <h2 className="section-title">
            O que dizem sobre o <span className="highlight">atendimento</span>
          </h2>
        </div>

        <div className="testimonials-slider">
          <div className="testimonial-card">
            <div className="quote-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
            </div>
            <div className="testimonial-content">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`testimonial-item ${index === activeIndex ? 'active' : ''}`}
                >
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div className="author-info">
                      <span className="author-name">{testimonial.author}</span>
                      <span className="author-role">{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="testimonial-progress">
              {testimonials.map((_, index) => (
                <div 
                  key={index} 
                  className={`progress-bar ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => changeSlide(index)}
                >
                  <div className="progress-fill"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="slider-controls">
            <button className="slider-btn" onClick={prevTestimonial} aria-label="Anterior">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <div className="slider-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => changeSlide(index)}
                  aria-label={`Depoimento ${index + 1}`}
                />
              ))}
            </div>
            <button className="slider-btn" onClick={nextTestimonial} aria-label="Próximo">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
