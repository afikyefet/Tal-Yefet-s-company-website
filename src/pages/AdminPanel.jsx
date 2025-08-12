import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostEditor } from '../cmps/PostEditor'
import { VideoUploader } from '../cmps/VideoUploader'
import { PostList } from '../cmps/PostList'
import { VideoList } from '../cmps/VideoList'
import { loadPosts, loadVideos } from '../store/actions/content.action'

export function AdminPanel() {
  const [activeTab, setActiveTab] = useState('posts')
  const [showPostEditor, setShowPostEditor] = useState(false)
  const [showVideoUploader, setShowVideoUploader] = useState(false)
  const [editingPost, setEditingPost] = useState(null)
  const [editingVideo, setEditingVideo] = useState(null)

  const dispatch = useDispatch()
  const { posts, videos } = useSelector(state => state.content)

  useEffect(() => {
    dispatch(loadPosts())
    dispatch(loadVideos())
  }, [dispatch])

  const handleEditPost = (post) => {
    setEditingPost(post)
    setShowPostEditor(true)
  }

  const handleEditVideo = (video) => {
    setEditingVideo(video)
    setShowVideoUploader(true)
  }

  const handleCloseEditor = () => {
    setShowPostEditor(false)
    setShowVideoUploader(false)
    setEditingPost(null)
    setEditingVideo(null)
  }

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h1>לוח ניהול</h1>
        <p>ניהול תוכן האתר - פוסטים וסרטונים</p>
      </div>

      <div className="admin-tabs">
        <button 
          className={`tab-button ${activeTab === 'posts' ? 'active' : ''}`}
          onClick={() => setActiveTab('posts')}
        >
          פוסטים
        </button>
        <button 
          className={`tab-button ${activeTab === 'videos' ? 'active' : ''}`}
          onClick={() => setActiveTab('videos')}
        >
          סרטונים
        </button>
      </div>

      {activeTab === 'posts' && (
        <div className="posts-section">
          <div className="section-header">
            <h2>ניהול פוסטים</h2>
            <button 
              className="add-button"
              onClick={() => setShowPostEditor(true)}
            >
              הוסף פוסט חדש
            </button>
          </div>
          <PostList posts={posts} onEdit={handleEditPost} />
        </div>
      )}

      {activeTab === 'videos' && (
        <div className="videos-section">
          <div className="section-header">
            <h2>ניהול סרטונים</h2>
            <button 
              className="add-button"
              onClick={() => setShowVideoUploader(true)}
            >
              העלה סרטון חדש
            </button>
          </div>
          <VideoList videos={videos} onEdit={handleEditVideo} />
        </div>
      )}

      {showPostEditor && (
        <PostEditor 
          post={editingPost}
          onClose={handleCloseEditor}
        />
      )}

      {showVideoUploader && (
        <VideoUploader 
          video={editingVideo}
          onClose={handleCloseEditor}
        />
      )}
    </div>
  )
}
