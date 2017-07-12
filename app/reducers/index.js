import { combineReducers } from 'redux'
import { items, itemsHasErrored, itemsIsLoading } from './items'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,
  router: routerReducer
})


export default rootReducer
