import { useEffect, useRef, useState } from 'react'
import './Stats.css'

function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  const stats = [
    { number: 500, suffix: '+', label: 'Pacientes Atendidos' },
    { number: 5, suffix: '+', label: 'Anos de Experiência' },
    { number: 98, suffix: '%', label: 'Satisfação dos Pacientes' },
    { number: 1000, suffix: '+', label: 'Sessões Realizadas' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats" ref={ref}>
      <div className="stats-bg"></div>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">
                <CountUp end={stat.number} isVisible={isVisible} duration={2000} />
                <span className="stat-suffix">{stat.suffix}</span>
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CountUp({ end, isVisible, duration = 2000 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [isVisible, end, duration])

  return <span>{count}</span>
}

export default Stats
