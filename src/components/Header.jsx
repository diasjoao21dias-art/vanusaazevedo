import { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo" onClick={() => scrollToSection('hero')}>
          <span className="logo-text">Vanusa Azevedo</span>
          <span className="logo-subtitle">Psicóloga - Especialista em Saúde Mental</span>
        </div>
        
        <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li><a onClick={() => scrollToSection('about')}>Sobre</a></li>
            <li><a onClick={() => scrollToSection('services')}>Serviços</a></li>
            <li><a onClick={() => scrollToSection('approach')}>Abordagem</a></li>
            <li><a onClick={() => scrollToSection('testimonials')}>Depoimentos</a></li>
            <li><a onClick={() => scrollToSection('contact')} className="nav-cta">Agendar Consulta</a></li>
          </ul>
        </nav>

        <button 
          className={`mobile-toggle ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
