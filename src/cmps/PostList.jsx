import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deletePost, togglePostStatus } from '../store/actions/content.action'
import { format } from 'date-fns'
import { he } from 'date-fns/locale'

export function PostList({ posts, onEdit }) {
  const [filterStatus, setFilterStatus] = useState('all')
  const dispatch = useDispatch()

  const filteredPosts = posts.filter(post => {
    if (filterStatus === 'all') return true
    return post.status === filterStatus
  })

  const handleDelete = async (postId) => {
    if (window.confirm('האם אתה בטוח שברצונך למחוק פוסט זה?')) {
      await dispatch(deletePost(postId))
    }
  }

  const handleToggleStatus = async (post) => {
    const newStatus = post.status === 'published' ? 'draft' : 'published'
    await dispatch(togglePostStatus(post.id, newStatus))
  }

  const getStatusBadge = (status) => {
    return (
      <span className={`status-badge ${status}`}>
        {status === 'published' ? 'מפורסם' : 'טיוטה'}
      </span>
    )
  }

  if (!posts.length) {
    return (
      <div className="empty-state">
        <p>אין פוסטים עדיין. צור פוסט ראשון כדי להתחיל!</p>
      </div>
    )
  }

  return (
    <div className="post-list">
      <div className="list-filters">
        <select 
          value={filterStatus} 
          onChange={(e) => setFilterStatus(e.target.value)}
          className="filter-select"
        >
          <option value="all">כל הפוסטים</option>
          <option value="published">מפורסמים</option>
          <option value="draft">טיוטות</option>
        </select>
      </div>

      <div className="posts-grid">
        {filteredPosts.map(post => (
          <div key={post.id} className="post-card">
            <div className="post-header">
              <h3 className="post-title">{post.title}</h3>
              {getStatusBadge(post.status)}
            </div>
            
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

            {post.excerpt && (
              <p className="post-excerpt">{post.excerpt}</p>
            )}

            <div className="post-actions">
              <button 
                onClick={() => onEdit(post)}
                className="edit-button"
              >
                ערוך
              </button>
              <button 
                onClick={() => handleToggleStatus(post)}
                className={`status-button ${post.status === 'published' ? 'unpublish' : 'publish'}`}
              >
                {post.status === 'published' ? 'הסר מפרסום' : 'פרסם'}
              </button>
              <button 
                onClick={() => handleDelete(post.id)}
                className="delete-button"
              >
                מחק
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
