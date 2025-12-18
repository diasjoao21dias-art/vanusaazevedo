import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Services from './components/Services'
import Approach from './components/Approach'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import './App.css'

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Stats />
      <Services />
      <Approach />
      <Testimonials />
      <Contact />
    </main>
  )
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <Router>
      <div className={`app ${isLoaded ? 'loaded' : ''}`}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/artigo/:id" element={<BlogPost />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  )
}

export default App
