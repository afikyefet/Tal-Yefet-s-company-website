import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from 'redux-thunk'
import { contentReducer } from "./reducers/content.reducer"
import { userReducer } from "./reducers/user.reducer"

const rootReducer = combineReducers({
    userModule: userReducer,
    content: contentReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

// Debug logging
console.log('Store initialized with reducers:', Object.keys(rootReducer))
console.log('Store state:', store.getState())

window.gStore = store