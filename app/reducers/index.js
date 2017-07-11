import { combineReducers } from 'redux'
import { fetchMovies } from './movie-reducer'

const rootReducer = combineReducers({
  fetchMovies
})


export default rootReducer
