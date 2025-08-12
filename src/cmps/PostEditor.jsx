import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { savePost } from '../store/actions/content.action'
import { format } from 'date-fns'
import { he } from 'date-fns/locale'

export function PostEditor({ post, onClose }) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    tags: '',
    status: 'draft'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    if (post) {
      setFormData({
        title: post.title || '',
        content: post.content || '',
        excerpt: post.excerpt || '',
        tags: post.tags ? post.tags.join(', ') : '',
        status: post.status || 'draft'
      })
    }
  }, [post])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const postData = {
        ...formData,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
        updatedAt: new Date().toISOString()
      }

      if (post) {
        postData.id = post.id
        postData.createdAt = post.createdAt
      } else {
        postData.id = Date.now().toString()
        postData.createdAt = new Date().toISOString()
      }

      await dispatch(savePost(postData))
      onClose()
    } catch (error) {
      console.error('Error saving post:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="post-editor-overlay">
      <div className="post-editor">
        <div className="editor-header">
          <h2>{post ? 'ערוך פוסט' : 'פוסט חדש'}</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit} className="post-form">
          <div className="form-group">
            <label htmlFor="title">כותרת</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="excerpt">תקציר</label>
            <textarea
              id="excerpt"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleInputChange}
              rows="3"
              className="form-textarea"
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">תוכן</label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              rows="15"
              required
              className="form-textarea rich-editor"
              placeholder="כתוב את תוכן הפוסט כאן..."
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="tags">תגיות (מופרדות בפסיקים)</label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleInputChange}
                className="form-input"
                placeholder="HR, אופטימיזציה, נוכחות"
              />
            </div>

            <div className="form-group">
              <label htmlFor="status">סטטוס</label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="draft">טיוטה</option>
                <option value="published">מפורסם</option>
              </select>
            </div>
          </div>

          <div className="form-actions">
            <button
              type="button"
              onClick={onClose}
              className="cancel-button"
              disabled={isSubmitting}
            >
              ביטול
            </button>
            <button
              type="submit"
              className="save-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'שומר...' : (post ? 'עדכן' : 'שמור')}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
