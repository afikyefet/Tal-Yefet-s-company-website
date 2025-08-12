import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { saveVideo } from '../store/actions/content.action'
import { useDropzone } from 'react-dropzone'

export function VideoUploader({ video, onClose }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: '',
    status: 'draft'
  })
  const [videoFile, setVideoFile] = useState(null)
  const [thumbnailFile, setThumbnailFile] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  const dispatch = useDispatch()

  useEffect(() => {
    if (video) {
      setFormData({
        title: video.title || '',
        description: video.description || '',
        tags: video.tags ? video.tags.join(', ') : '',
        status: video.status || 'draft'
      })
    }
  }, [video])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'video/*': ['.mp4', '.avi', '.mov', '.wmv', '.flv']
    },
    onDrop: acceptedFiles => {
      setVideoFile(acceptedFiles[0])
    }
  })

  const { getRootProps: getThumbnailRootProps, getInputProps: getThumbnailInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpg', '.jpeg', '.png', '.webp']
    },
    onDrop: acceptedFiles => {
      setThumbnailFile(acceptedFiles[0])
    }
  })

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
      // Simulate file upload progress
      for (let i = 0; i <= 100; i += 10) {
        setUploadProgress(i)
        await new Promise(resolve => setTimeout(resolve, 100))
      }

      const videoData = {
        ...formData,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
        updatedAt: new Date().toISOString(),
        videoUrl: videoFile ? URL.createObjectURL(videoFile) : (video?.videoUrl || ''),
        thumbnailUrl: thumbnailFile ? URL.createObjectURL(thumbnailFile) : (video?.thumbnailUrl || ''),
        duration: videoFile ? '00:00:00' : (video?.duration || '00:00:00'),
        fileSize: videoFile ? (videoFile.size / (1024 * 1024)).toFixed(2) : (video?.fileSize || '0')
      }

      if (video) {
        videoData.id = video.id
        videoData.createdAt = video.createdAt
      } else {
        videoData.id = Date.now().toString()
        videoData.createdAt = new Date().toISOString()
      }

      await dispatch(saveVideo(videoData))
      onClose()
    } catch (error) {
      console.error('Error saving video:', error)
    } finally {
      setIsSubmitting(false)
      setUploadProgress(0)
    }
  }

  return (
    <div className="video-uploader-overlay">
      <div className="video-uploader">
        <div className="uploader-header">
          <h2>{video ? 'ערוך סרטון' : 'העלה סרטון חדש'}</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit} className="video-form">
          <div className="form-group">
            <label htmlFor="title">כותרת הסרטון</label>
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
            <label htmlFor="description">תיאור</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="4"
              className="form-textarea"
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
                placeholder="HR, הדרכה, אופטימיזציה"
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

          <div className="upload-sections">
            <div className="upload-section">
              <label>העלאת סרטון</label>
              <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
                <input {...getInputProps()} />
                {videoFile ? (
                  <div className="file-info">
                    <p>נבחר: {videoFile.name}</p>
                    <p>גודל: {(videoFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                  </div>
                ) : (
                  <p>גרור סרטון לכאן או לחץ לבחירה</p>
                )}
              </div>
            </div>

            <div className="upload-section">
              <label>תמונת ממוזערת (אופציונלי)</label>
              <div {...getThumbnailRootProps()} className="dropzone">
                <input {...getThumbnailInputProps()} />
                {thumbnailFile ? (
                  <div className="file-info">
                    <p>נבחר: {thumbnailFile.name}</p>
                  </div>
                ) : (
                  <p>גרור תמונה לכאן או לחץ לבחירה</p>
                )}
              </div>
            </div>
          </div>

          {isSubmitting && (
            <div className="upload-progress">
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
              <p>מעלה... {uploadProgress}%</p>
            </div>
          )}

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
              disabled={isSubmitting || !videoFile}
            >
              {isSubmitting ? 'מעלה...' : (video ? 'עדכן' : 'העלה')}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
