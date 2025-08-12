import { contentService } from '../../service/content.service'

// Action Types
export const SET_POSTS = 'SET_POSTS'
export const SET_VIDEOS = 'SET_VIDEOS'
export const ADD_POST = 'ADD_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const ADD_VIDEO = 'ADD_VIDEO'
export const UPDATE_VIDEO = 'UPDATE_VIDEO'
export const REMOVE_VIDEO = 'REMOVE_VIDEO'

// Action Creators
export const setPosts = (posts) => {
  console.log('Action: setPosts called with:', posts)
  return { type: SET_POSTS, posts }
}

export const setVideos = (videos) => {
  console.log('Action: setVideos called with:', videos)
  return { type: SET_VIDEOS, videos }
}
export const addPost = (post) => ({ type: ADD_POST, post })
export const updatePost = (post) => ({ type: UPDATE_POST, post })
export const removePost = (postId) => ({ type: REMOVE_POST, postId })
export const addVideo = (video) => ({ type: ADD_VIDEO, video })
export const updateVideo = (video) => ({ type: UPDATE_VIDEO, video })
export const removeVideo = (videoId) => ({ type: REMOVE_VIDEO, videoId })

// Async Actions
export const loadPosts = () => async (dispatch) => {
  try {
    console.log('Loading posts...')
    const posts = await contentService.getPosts()
    console.log('Posts loaded:', posts)
    dispatch(setPosts(posts))
  } catch (error) {
    console.error('Error loading posts:', error)
  }
}

export const loadVideos = () => async (dispatch) => {
  try {
    console.log('Loading videos...')
    const videos = await contentService.getVideos()
    console.log('Videos loaded:', videos)
    dispatch(setVideos(videos))
  } catch (error) {
    console.error('Error loading videos:', error)
  }
}

export const savePost = (post) => async (dispatch) => {
  try {
    if (post.id && post.id !== 'new') {
      const updatedPost = await contentService.updatePost(post)
      dispatch(updatePost(updatedPost))
    } else {
      const newPost = await contentService.addPost(post)
      dispatch(addPost(newPost))
    }
  } catch (error) {
    console.error('Error saving post:', error)
    throw error
  }
}

export const saveVideo = (video) => async (dispatch) => {
  try {
    if (video.id && video.id !== 'new') {
      const updatedVideo = await contentService.updateVideo(video)
      dispatch(updateVideo(updatedVideo))
    } else {
      const newVideo = await contentService.addVideo(video)
      dispatch(addVideo(newVideo))
    }
  } catch (error) {
    console.error('Error saving video:', error)
    throw error
  }
}

export const deletePost = (postId) => async (dispatch) => {
  try {
    await contentService.deletePost(postId)
    dispatch(removePost(postId))
  } catch (error) {
    console.error('Error deleting post:', error)
    throw error
  }
}

export const deleteVideo = (videoId) => async (dispatch) => {
  try {
    await contentService.deleteVideo(videoId)
    dispatch(removeVideo(videoId))
  } catch (error) {
    console.error('Error deleting video:', error)
    throw error
  }
}

export const togglePostStatus = (postId, newStatus) => async (dispatch, getState) => {
  try {
    const state = getState()
    const post = state.content.posts.find(p => p.id === postId)
    if (post) {
      const updatedPost = { ...post, status: newStatus }
      await contentService.updatePost(updatedPost)
      dispatch(updatePost(updatedPost))
    }
  } catch (error) {
    console.error('Error toggling post status:', error)
    throw error
  }
}

export const toggleVideoStatus = (videoId, newStatus) => async (dispatch, getState) => {
  try {
    const state = getState()
    const video = state.content.videos.find(v => v.id === videoId)
    if (video) {
      const updatedVideo = { ...video, status: newStatus }
      await contentService.updateVideo(updatedVideo)
      dispatch(updateVideo(updatedVideo))
    }
  } catch (error) {
    console.error('Error toggling video status:', error)
    throw error
  }
}
