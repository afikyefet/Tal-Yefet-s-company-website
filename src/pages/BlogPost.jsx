import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { loadPosts } from '../store/actions/content.action'
import { format } from 'date-fns'
import { he } from 'date-fns/locale'

export function BlogPost() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { posts } = useSelector(state => state.content)
  const [post, setPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    dispatch(loadPosts())
  }, [dispatch])

  useEffect(() => {
    if (posts.length > 0) {
      const currentPost = posts.find(p => p.id === id && p.status === 'published')
      setPost(currentPost)

      if (currentPost) {
        // Find related posts based on tags
        const related = posts
          .filter(p => p.id !== id && p.status === 'published')
          .filter(p => p.tags.some(tag => currentPost.tags.includes(tag)))
          .slice(0, 3)
        setRelatedPosts(related)
      }
    }
  }, [posts, id])

  if (!post) {
    return (
      <div className="blog-post-page">
        <div className="not-found">
          <h1>הפוסט לא נמצא</h1>
          <p>הפוסט שחיפשת לא קיים או לא זמין לצפייה.</p>
          <Link to="/blog" className="back-link">← חזור לבלוג</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="blog-post-page">
      <article className="blog-post">
        <header className="post-header">
          <h1 className="post-title">{post.title}</h1>
          
          <div className="post-meta">
            <span className="post-date">
              {format(new Date(post.createdAt), 'dd/MM/yyyy', { locale: he })}
            </span>
            {post.tags && post.tags.length > 0 && (
              <div className="post-tags">
                {post.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            )}
          </div>
        </header>

        {post.excerpt && (
          <div className="post-excerpt">
            <p>{post.excerpt}</p>
          </div>
        )}

        <div className="post-content">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <footer className="post-footer">
          <Link to="/blog" className="back-link">← חזור לבלוג</Link>
        </footer>
      </article>

      {relatedPosts.length > 0 && (
        <aside className="related-posts">
          <h3>מאמרים קשורים</h3>
          <div className="related-grid">
            {relatedPosts.map(relatedPost => (
              <article key={relatedPost.id} className="related-card">
                <h4 className="related-title">
                  <Link to={`/blog/${relatedPost.id}`}>{relatedPost.title}</Link>
                </h4>
                {relatedPost.excerpt && (
                  <p className="related-excerpt">{relatedPost.excerpt}</p>
                )}
                <Link to={`/blog/${relatedPost.id}`} className="read-more">
                  קרא עוד →
                </Link>
              </article>
            ))}
          </div>
        </aside>
      )}
    </div>
  )
}
