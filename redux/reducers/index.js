import { combineReducers } from 'redux'
import { stepReducer } from './stepReducer'
import { userReducer } from './userReducer'

export default combineReducers({
  step: stepReducer,
  user: userReducer
})
