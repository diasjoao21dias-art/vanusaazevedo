import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Blog.css'

function Blog() {
  const [articles, setArticles] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  useEffect(() => {
    window.scrollTo(0, 0)
    fetch('/blog-data.json')
      .then(res => res.json())
      .then(data => setArticles(data))
      .catch(err => console.error('Erro ao carregar blog:', err))
  }, [])

  const categories = ['Todos', ...new Set(articles.map(a => a.category))]
  const filtered = selectedCategory === 'Todos' 
    ? articles 
    : articles.filter(a => a.category === selectedCategory)

  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <h2 className="section-title">Blog de Psicologia</h2>
        <p className="section-subtitle">Artigos e dicas sobre saúde mental e bem-estar</p>

        <div className="blog-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="blog-grid">
          {filtered.length > 0 ? (
            filtered.map(article => (
              <article key={article.id} className="blog-card">
                <div className="blog-category">{article.category}</div>
                <h3>{article.title}</h3>
                <p className="blog-excerpt">{article.excerpt}</p>
                <div className="blog-meta">
                  <span className="blog-date">
                    {new Date(article.date).toLocaleDateString('pt-BR')}
                  </span>
                </div>
                <Link to={`/artigo/${article.id}`} className="blog-link">
                  Ler Artigo →
                </Link>
              </article>
            ))
          ) : (
            <p className="no-articles">Nenhum artigo encontrado</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Blog
