import { combineReducers } from 'redux'
import { users, items, itemsHasErrored, itemsIsLoading, loginUser } from './items'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  // loginUser,
  users,
  items,
  itemsHasErrored,
  itemsIsLoading,
  router: routerReducer
})


export default rootReducer
