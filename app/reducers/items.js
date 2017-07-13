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

export function users(state = [], action) {
  switch (action.type) {
    case 'USERS_FETCH_DATA_SUCCESS':
      return action.user
    case 'USER_LOGIN':
      console.log('in the reducer login', state.data, action.email, action.password)
      return state.data.filter(e => (e.email === action.email && e.password === action.password))
    default:
      return state;
  }
}

export function loginUser(state = [], action) {
  switch (action.type) {

    default:
      return state
  }
}
