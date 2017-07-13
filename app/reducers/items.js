export function itemsHasErrored(state = false, action) {
  switch (action.type) {
    case 'ITEMS_HAS_ERRORED':
      return action.hasErrored;
    default:
      return state;
  }
}

export function itemsIsLoading(state = false, action) {
  switch (action.type) {
    case 'ITEMS_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}

export function items(state = [], action) {
  switch (action.type) {
    case 'ITEMS_FETCH_DATA_SUCCESS':
      return action.items;
    default:
      return state;
  }
}

export function users(state = {}, action) {
  switch (action.type) {
    case 'USERS_FETCH_DATA_SUCCESS':
      return action.user
    case 'USER_LOGIN':
      return  state
    case 'DELETE_USER':

      return Object.assign({})
    default:
      return state
  }
}
