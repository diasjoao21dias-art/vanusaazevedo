import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import './BlogPost.css'

function BlogPost() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [allArticles, setAllArticles] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0)
    fetch('/blog-data.json')
      .then(res => res.json())
      .then(data => {
        setAllArticles(data)
        const found = data.find(a => a.id === id)
        setArticle(found)
        setLoading(false)
      })
      .catch(err => {
        console.error('Erro ao carregar artigo:', err)
        setLoading(false)
      })
  }, [id])

  if (loading) return <div className="loading">Carregando...</div>
  if (!article) {
    return (
      <section className="blog-post-section">
        <div className="container">
          <div className="article-not-found">
            <h2>Artigo não encontrado</h2>
            <Link to="/blog" className="back-link">← Voltar ao Blog</Link>
          </div>
        </div>
      </section>
    )
  }

  const otherArticles = allArticles.filter(a => a.id !== id).slice(0, 2)

  return (
    <section className="blog-post-section">
      <div className="container">
        <Link to="/blog" className="back-link">← Voltar ao Blog</Link>

        <article className="blog-post">
          <header className="post-header">
            <div className="post-category">{article.category}</div>
            <h1>{article.title}</h1>
            <div className="post-meta">
              <span className="post-date">
                {new Date(article.date).toLocaleDateString('pt-BR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </span>
              <span className="post-category-badge">{article.category}</span>
            </div>
          </header>

          <div className="post-content">
            {article.content.split('\n\n').map((paragraph, i) => (
              paragraph.startsWith('#') ? (
                <h2 key={i} className="post-heading">
                  {paragraph.replace(/^#+\s/, '')}
                </h2>
              ) : paragraph.startsWith('-') ? (
                <ul key={i} className="post-list">
                  {paragraph.split('\n').map((item, j) => (
                    <li key={j}>{item.replace(/^-\s/, '')}</li>
                  ))}
                </ul>
              ) : (
                <p key={i}>{paragraph}</p>
              )
            ))}
          </div>

          <div className="post-cta">
            <p>Quer conversar mais sobre este assunto?</p>
            <a href="https://wa.me/553499228-1523?text=Olá,%20vi%20seu%20artigo%20e%20gostaria%20de%20conversar" 
               target="_blank" 
               rel="noopener noreferrer"
               className="cta-button">
              Agendar Consulta via WhatsApp
            </a>
          </div>
        </article>

        {otherArticles.length > 0 && (
          <section className="related-articles">
            <h3>Artigos Relacionados</h3>
            <div className="related-grid">
              {otherArticles.map(a => (
                <div key={a.id} className="related-card">
                  <h4>{a.title}</h4>
                  <p>{a.excerpt}</p>
                  <Link to={`/artigo/${a.id}`} className="related-link">
                    Ler Artigo →
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </section>
  )
}

export default BlogPost
