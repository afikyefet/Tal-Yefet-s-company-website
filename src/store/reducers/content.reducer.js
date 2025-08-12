import {
  ADD_POST,
  ADD_VIDEO,
  REMOVE_POST,
  REMOVE_VIDEO,
  SET_POSTS,
  SET_VIDEOS,
  UPDATE_POST,
  UPDATE_VIDEO
} from '../actions/content.action'

const initialState = {
  posts: [],
  videos: []
}

export function contentReducer(state = initialState, action) {
  console.log('ContentReducer: Received action:', action.type, action)
  console.log('ContentReducer: Current state:', state)

  switch (action.type) {
    case SET_POSTS:
      console.log('ContentReducer: Setting posts to:', action.posts)
      return {
        ...state,
        posts: action.posts
      }

    case SET_VIDEOS:
      console.log('ContentReducer: Setting videos to:', action.videos)
      return {
        ...state,
        videos: action.videos
      }

    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.post]
      }

    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.post.id ? action.post : post
        )
      }

    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.postId)
      }

    case ADD_VIDEO:
      return {
        ...state,
        videos: [...state.videos, action.video]
      }

    case UPDATE_VIDEO:
      return {
        ...state,
        videos: state.videos.map(video =>
          video.id === action.video.id ? action.video : video
        )
      }

    case REMOVE_VIDEO:
      return {
        ...state,
        videos: state.videos.filter(video => video.id !== action.videoId)
      }

    default:
      return state
  }
}
