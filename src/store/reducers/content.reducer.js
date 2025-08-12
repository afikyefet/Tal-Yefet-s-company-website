import {
  SET_POSTS,
  SET_VIDEOS,
  ADD_POST,
  UPDATE_POST,
  REMOVE_POST,
  ADD_VIDEO,
  UPDATE_VIDEO,
  REMOVE_VIDEO
} from '../actions/content.action'

const initialState = {
  posts: [],
  videos: []
}

export function contentReducer(state = initialState, action) {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.posts
      }

    case SET_VIDEOS:
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
