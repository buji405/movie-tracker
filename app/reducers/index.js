import { combineReducers } from 'redux'
import { users, items, itemsHasErrored, itemsIsLoading, loginUser, errors } from './items'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  // loginUser,
  users,
  errors,
  items,
  itemsHasErrored,
  itemsIsLoading,
  router: routerReducer
})


export default rootReducer
