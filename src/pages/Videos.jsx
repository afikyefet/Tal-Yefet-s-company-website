import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadVideos } from '../store/actions/content.action'
import { format } from 'date-fns'
import { he } from 'date-fns/locale'

export function Videos() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState('')
  const [selectedVideo, setSelectedVideo] = useState(null)
  const dispatch = useDispatch()
  const { videos } = useSelector(state => state.content)

  useEffect(() => {
    dispatch(loadVideos())
  }, [dispatch])

  const publishedVideos = videos.filter(video => video.status === 'published')
  
  const filteredVideos = publishedVideos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTag = !selectedTag || video.tags.includes(selectedTag)
    return matchesSearch && matchesTag
  })

  const allTags = [...new Set(publishedVideos.flatMap(video => video.tags))]

  const handleVideoClick = (video) => {
    setSelectedVideo(video)
  }

  const closeVideoModal = () => {
    setSelectedVideo(null)
  }

  return (
    <div className="videos-page">
      <div className="page-header">
        <h1>סרטונים</h1>
        <p>סרטוני הדרכה וסדנאות מקצועיות על אופטימיזציה של זמנים וניהול משאבי אנוש</p>
      </div>

      <div className="videos-filters">
        <div className="search-section">
          <input
            type="text"
            placeholder="חיפוש בסרטונים..."
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

      {filteredVideos.length === 0 ? (
        <div className="no-results">
          <p>לא נמצאו סרטונים התואמים לחיפוש שלך.</p>
        </div>
      ) : (
        <div className="videos-grid">
          {filteredVideos.map(video => (
            <div key={video.id} className="video-card">
              <div className="video-thumbnail" onClick={() => handleVideoClick(video)}>
                {video.thumbnailUrl ? (
                  <img src={video.thumbnailUrl} alt={video.title} />
                ) : (
                  <div className="no-thumbnail">
                    <span>🎥</span>
                  </div>
                )}
                <div className="video-overlay">
                  <button className="play-button">▶</button>
                </div>
              </div>

              <div className="video-content">
                <h3 className="video-title" onClick={() => handleVideoClick(video)}>
                  {video.title}
                </h3>
                
                <div className="video-meta">
                  <span className="video-date">
                    {format(new Date(video.createdAt), 'dd/MM/yyyy', { locale: he })}
                  </span>
                  {video.duration && (
                    <span className="video-duration">{video.duration}</span>
                  )}
                </div>

                {video.description && (
                  <p className="video-description">{video.description}</p>
                )}

                {video.tags && video.tags.length > 0 && (
                  <div className="video-tags">
                    {video.tags.map(tag => (
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
            </div>
          ))}
        </div>
      )}

      {selectedVideo && (
        <div className="video-modal-overlay" onClick={closeVideoModal}>
          <div className="video-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedVideo.title}</h3>
              <button className="close-button" onClick={closeVideoModal}>×</button>
            </div>
            <div className="video-player">
              <video controls>
                <source src={selectedVideo.videoUrl} type="video/mp4" />
                הדפדפן שלך לא תומך בנגינת סרטונים.
              </video>
            </div>
            {selectedVideo.description && (
              <div className="video-description-modal">
                <p>{selectedVideo.description}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
