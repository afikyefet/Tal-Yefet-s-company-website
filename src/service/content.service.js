import { storageService } from './async-storage.service'

const STORAGE_KEY_POSTS = 'posts'
const STORAGE_KEY_VIDEOS = 'videos'

// Sample data for initial posts
const samplePosts = [
  {
    id: '1',
    title: 'אופטימיזציה של זמנים בחברות גדולות',
    excerpt: 'כיצד לשפר את יעילות העבודה ולחסוך זמן יקר בארגון שלך',
    content: 'במאמר זה נדון באסטרטגיות מתקדמות לאופטימיזציה של זמנים בחברות גדולות. נבחן את האתגרים העיקריים ונציע פתרונות מעשיים שיכולים לשנות את הדרך שבה הארגון שלך עובד.',
    tags: ['אופטימיזציה', 'יעילות', 'ניהול זמן'],
    status: 'published',
    createdAt: '2024-01-15T10:00:00.000Z',
    updatedAt: '2024-01-15T10:00:00.000Z'
  },
  {
    id: '2',
    title: 'בקרת נוכחות מתקדמת',
    excerpt: 'שיטות חדשניות לניהול נוכחות עובדים',
    content: 'בקרת נוכחות היא אחד הנושאים החשובים ביותר בניהול משאבי אנוש. נציג שיטות מתקדמות שיעזרו לך לנהל את הנוכחות בצורה יעילה ומדויקת.',
    tags: ['נוכחות', 'בקרה', 'HR'],
    status: 'published',
    createdAt: '2024-01-10T10:00:00.000Z',
    updatedAt: '2024-01-10T10:00:00.000Z'
  }
]

// Sample data for initial videos
const sampleVideos = [
  {
    id: '1',
    title: 'הדרכה: אופטימיזציה של זמנים',
    description: 'סרטון הדרכה מקיף על איך לשפר את יעילות העבודה בארגון',
    tags: ['הדרכה', 'אופטימיזציה', 'יעילות'],
    status: 'published',
    videoUrl: '/sample-video-1.mp4',
    thumbnailUrl: '/sample-thumbnail-1.jpg',
    duration: '00:15:30',
    fileSize: '45.2',
    createdAt: '2024-01-15T10:00:00.000Z',
    updatedAt: '2024-01-15T10:00:00.000Z'
  },
  {
    id: '2',
    title: 'סדנת ניהול נוכחות',
    description: 'סדנה מעשית על ניהול נוכחות עובדים',
    tags: ['סדנה', 'נוכחות', 'ניהול'],
    status: 'published',
    videoUrl: '/sample-video-2.mp4',
    thumbnailUrl: '/sample-thumbnail-2.jpg',
    duration: '00:22:15',
    fileSize: '67.8',
    createdAt: '2024-01-12T10:00:00.000Z',
    updatedAt: '2024-01-12T10:00:00.000Z'
  }
]

export const contentService = {
  // Posts
  async getPosts() {
    try {
      console.log('ContentService: Getting posts...')
      let posts = await storageService.query(STORAGE_KEY_POSTS)
      console.log('ContentService: Posts from storage:', posts)
      
      if (!posts || !posts.length) {
        console.log('ContentService: No posts found, using sample data')
        posts = samplePosts
        try {
          await storageService.save(STORAGE_KEY_POSTS, posts)
          console.log('ContentService: Sample posts saved to storage')
        } catch (saveError) {
          console.error('ContentService: Error saving sample posts:', saveError)
        }
      }
      
      console.log('ContentService: Returning posts:', posts)
      return posts
    } catch (error) {
      console.error('ContentService: Error in getPosts:', error)
      console.log('ContentService: Returning sample posts as fallback')
      return samplePosts
    }
  },

  async getPostById(postId) {
    const posts = await this.getPosts()
    return posts.find(post => post.id === postId)
  },

  async addPost(post) {
    const posts = await this.getPosts()
    const newPost = { ...post, id: Date.now().toString() }
    posts.push(newPost)
    await storageService.save(STORAGE_KEY_POSTS, posts)
    return newPost
  },

  async updatePost(updatedPost) {
    const posts = await this.getPosts()
    const idx = posts.findIndex(post => post.id === updatedPost.id)
    if (idx !== -1) {
      posts[idx] = updatedPost
      await storageService.save(STORAGE_KEY_POSTS, posts)
    }
    return updatedPost
  },

  async deletePost(postId) {
    const posts = await this.getPosts()
    const filteredPosts = posts.filter(post => post.id !== postId)
    await storageService.save(STORAGE_KEY_POSTS, filteredPosts)
  },

  // Videos
  async getVideos() {
    try {
      console.log('ContentService: Getting videos...')
      let videos = await storageService.query(STORAGE_KEY_VIDEOS)
      console.log('ContentService: Videos from storage:', videos)
      
      if (!videos || !videos.length) {
        console.log('ContentService: No videos found, using sample data')
        videos = sampleVideos
        try {
          await storageService.save(STORAGE_KEY_VIDEOS, videos)
          console.log('ContentService: Sample videos saved to storage')
        } catch (saveError) {
          console.error('ContentService: Error saving sample videos:', saveError)
        }
      }
      
      console.log('ContentService: Returning videos:', videos)
      return videos
    } catch (error) {
      console.error('ContentService: Error in getVideos:', error)
      console.log('ContentService: Returning sample videos as fallback')
      return sampleVideos
    }
  },

  async getVideoById(videoId) {
    const videos = await this.getVideos()
    return videos.find(video => video.id === videoId)
  },

  async addVideo(video) {
    const videos = await this.getVideos()
    const newVideo = { ...video, id: Date.now().toString() }
    videos.push(newVideo)
    await storageService.save(STORAGE_KEY_VIDEOS, videos)
    return newVideo
  },

  async updateVideo(updatedVideo) {
    const videos = await this.getVideos()
    const idx = videos.findIndex(video => video.id === updatedVideo.id)
    if (idx !== -1) {
      videos[idx] = updatedVideo
      await storageService.save(STORAGE_KEY_VIDEOS, videos)
    }
    return updatedVideo
  },

  async deleteVideo(videoId) {
    const videos = await this.getVideos()
    const filteredVideos = videos.filter(video => video.id !== videoId)
    await storageService.save(STORAGE_KEY_VIDEOS, filteredVideos)
  },

  // Search and filtering
  async searchPosts(query) {
    const posts = await this.getPosts()
    const searchTerm = query.toLowerCase()
    return posts.filter(post => 
      post.title.toLowerCase().includes(searchTerm) ||
      post.content.toLowerCase().includes(searchTerm) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    )
  },

  async searchVideos(query) {
    const videos = await this.getVideos()
    const searchTerm = query.toLowerCase()
    return videos.filter(video => 
      video.title.toLowerCase().includes(searchTerm) ||
      video.description.toLowerCase().includes(searchTerm) ||
      video.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    )
  },

  async getPublishedPosts() {
    const posts = await this.getPosts()
    return posts.filter(post => post.status === 'published')
  },

  async getPublishedVideos() {
    const videos = await this.getVideos()
    return videos.filter(video => video.status === 'published')
  }
}
