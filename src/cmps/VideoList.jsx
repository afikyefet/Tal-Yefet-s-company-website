import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteVideo, toggleVideoStatus } from '../store/actions/content.action'
import { format } from 'date-fns'
import { he } from 'date-fns/locale'

export function VideoList({ videos, onEdit }) {
  const [filterStatus, setFilterStatus] = useState('all')
  const dispatch = useDispatch()

  const filteredVideos = videos.filter(video => {
    if (filterStatus === 'all') return true
    return video.status === filterStatus
  })

  const handleDelete = async (videoId) => {
    if (window.confirm('האם אתה בטוח שברצונך למחוק סרטון זה?')) {
      await dispatch(deleteVideo(videoId))
    }
  }

  const handleToggleStatus = async (video) => {
    const newStatus = video.status === 'published' ? 'draft' : 'published'
    await dispatch(toggleVideoStatus(video.id, newStatus))
  }

  const getStatusBadge = (status) => {
    return (
      <span className={`status-badge ${status}`}>
        {status === 'published' ? 'מפורסם' : 'טיוטה'}
      </span>
    )
  }

  const formatFileSize = (size) => {
    if (typeof size === 'string') return size
    return `${size} MB`
  }

  if (!videos.length) {
    return (
      <div className="empty-state">
        <p>אין סרטונים עדיין. העלה סרטון ראשון כדי להתחיל!</p>
      </div>
    )
  }

  return (
    <div className="video-list">
      <div className="list-filters">
        <select 
          value={filterStatus} 
          onChange={(e) => setFilterStatus(e.target.value)}
          className="filter-select"
        >
          <option value="all">כל הסרטונים</option>
          <option value="published">מפורסמים</option>
          <option value="draft">טיוטות</option>
        </select>
      </div>

      <div className="videos-grid">
        {filteredVideos.map(video => (
          <div key={video.id} className="video-card">
            <div className="video-thumbnail">
              {video.thumbnailUrl ? (
                <img src={video.thumbnailUrl} alt={video.title} />
              ) : (
                <div className="no-thumbnail">
                  <span>🎥</span>
                </div>
              )}
              <div className="video-overlay">
                <button 
                  onClick={() => onEdit(video)}
                  className="play-button"
                >
                  ▶
                </button>
              </div>
            </div>

            <div className="video-content">
              <div className="video-header">
                <h3 className="video-title">{video.title}</h3>
                {getStatusBadge(video.status)}
              </div>
              
              <div className="video-meta">
                <span className="video-date">
                  {format(new Date(video.createdAt), 'dd/MM/yyyy', { locale: he })}
                </span>
                {video.duration && (
                  <span className="video-duration">{video.duration}</span>
                )}
                {video.fileSize && (
                  <span className="video-size">{formatFileSize(video.fileSize)}</span>
                )}
              </div>

              {video.description && (
                <p className="video-description">{video.description}</p>
              )}

              {video.tags && video.tags.length > 0 && (
                <div className="video-tags">
                  {video.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              )}

              <div className="video-actions">
                <button 
                  onClick={() => onEdit(video)}
                  className="edit-button"
                >
                  ערוך
                </button>
                <button 
                  onClick={() => handleToggleStatus(video)}
                  className={`status-button ${video.status === 'published' ? 'unpublish' : 'publish'}`}
                >
                  {video.status === 'published' ? 'הסר מפרסום' : 'פרסם'}
                </button>
                <button 
                  onClick={() => handleDelete(video.id)}
                  className="delete-button"
                >
                  מחק
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
