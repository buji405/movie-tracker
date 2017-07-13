import { combineReducers } from 'redux'
import { users, items, itemsHasErrored, itemsIsLoading } from './items'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  users,
  items,
  itemsHasErrored,
  itemsIsLoading,
  router: routerReducer
})


export default rootReducer
