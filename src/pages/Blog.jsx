import { Link } from 'react-router-dom'
import './Blog.css'

const blogPosts = []

function Blog() {
  return (
    <div className="blog">
      {/* Page Hero */}
      <section className="page-hero blog-hero">
        <div className="page-hero-background">
          <img
            src="/images/supply-distribution.jpg"
            alt="Supply distribution in Haiti"
            className="page-hero-image"
          />
        </div>
        <div className="container">
          <h1>Updates & Stories</h1>
          <p className="page-hero-subtitle">Follow our journey as we work to bring joy to Haiti</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="blog-section">
        <div className="container">
          {blogPosts.length > 0 ? (
            <div className="blog-container">
              {blogPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="blog-post"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="blog-date">{post.date}</div>
                  <h2>{post.title}</h2>
                  <div className="blog-image">
                    <img src={post.image} alt={post.imageAlt} />
                  </div>
                  {post.content.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </article>
              ))}
            </div>
          ) : (
            <div className="blog-empty">
              <p>Updates coming soon. In the meantime, follow us on <a href="https://www.facebook.com/p/Joy-for-Haiti-100070952906247/" target="_blank" rel="noopener noreferrer">Facebook</a> for the latest news.</p>
              <Link to="/support" className="btn btn-primary">Support Our Mission</Link>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Blog
