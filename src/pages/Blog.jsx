import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { loadPosts } from '../store/actions/content.action'
import { format } from 'date-fns'
import { he } from 'date-fns/locale'

export function Blog() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState('')
  const dispatch = useDispatch()
  const { posts } = useSelector(state => state.content)

  useEffect(() => {
    dispatch(loadPosts())
  }, [dispatch])

  const publishedPosts = posts.filter(post => post.status === 'published')
  
  const filteredPosts = publishedPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTag = !selectedTag || post.tags.includes(selectedTag)
    return matchesSearch && matchesTag
  })

  const allTags = [...new Set(publishedPosts.flatMap(post => post.tags))]

  return (
    <div className="blog-page">
      <div className="page-header">
        <h1>בלוג</h1>
        <p>מאמרים מקצועיים על אופטימיזציה של זמנים, ניהול משאבי אנוש ובקרת נוכחות</p>
      </div>

      <div className="blog-filters">
        <div className="search-section">
          <input
            type="text"
            placeholder="חיפוש במאמרים..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="tags-section">
          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="tag-filter"
          >
            <option value="">כל התגיות</option>
            {allTags.map(tag => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>
        </div>
      </div>

      {filteredPosts.length === 0 ? (
        <div className="no-results">
          <p>לא נמצאו מאמרים התואמים לחיפוש שלך.</p>
        </div>
      ) : (
        <div className="blog-grid">
          {filteredPosts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-card-content">
                <h2 className="blog-title">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                
                <div className="blog-meta">
                  <span className="blog-date">
                    {format(new Date(post.createdAt), 'dd/MM/yyyy', { locale: he })}
                  </span>
                  {post.tags && post.tags.length > 0 && (
                    <div className="blog-tags">
                      {post.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="tag"
                          onClick={() => setSelectedTag(tag)}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {post.excerpt && (
                  <p className="blog-excerpt">{post.excerpt}</p>
                )}

                <Link to={`/blog/${post.id}`} className="read-more">
                  קרא עוד →
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
