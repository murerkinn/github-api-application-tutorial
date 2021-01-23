import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userReducer } from './reducers'

const rootReducer = combineReducers({
  user: userReducer,
})

const middlewares = [thunk]

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
)

export type RootState = ReturnType<typeof rootReducer>
export default store
