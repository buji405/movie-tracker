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
    case 'ADD_FAVORITE':
      console.log('add favorites local');
      if(!state.data['favorites']) {
        state.data['favorites'] = []
      }
      state.data.favorites = [...state.data.favorites, action.favorite]
      const newState = Object.assign({}, state)
      return newState
    case 'ADD_FAVORITE_SERVER':
      if(!state.data['favorites']) {
        state.data['favorites'] = []
      }
      state.data.favorites = [...state.data.favorites, ...action.favorite]
      const stateFromServer = Object.assign({}, state)
      return stateFromServer
    default:
      return state
  }
}

export function errors(state = {}, action) {
  switch(action.type) {
    case 'DUPLICATE':
      return action.error
    case 'INVALID CREDENTIALS':
      return action.error
    case 'SUCCESS':
      return Object.assign({})
    default:
      return state
  }
}



// export function favorites(state=[], action) {
//   console.log('reducer', action);
//   switch(action.type) {
//     case 'ADD_FAVORITE':
//       return [...state, action.favorite]
//     default:
//       return state
//   }
// }
