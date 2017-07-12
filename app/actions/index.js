import { key } from '../key.js'

// export const fetchMovies = () => {
//   //api call
//   return {
//     type: 'FETCH_MOVIES',
//     moviesArray: fetch(...)
//   }
// }


export function itemsHasErrored(bool) {
  return {
    type: 'ITEMS_HAS_ERRORED',
    hasErrored: bool
  };
}

export function itemsIsLoading(bool) {
  return {
    type: 'ITEMS_IS_LOADING',
    isLoading: bool
  };
}

export function itemsFetchDataSuccess(items) {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items
  };
}

export function itemsFetchData(url) {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(respose.statusText)
        }

        dispatch(itemsIsLoading(false))

        return response
      })
      .then((response) => response.json())
      .then((items) => dispatch(itemsFetchDataSuccess(items)))
      .catch((error) => {
        dispatch(itemsHasErrored(true))
        console.log(error, 'error fetching data')
      })
  }
}



// export const fetchUser = () => {
//   //api call
// }
//
// export const postUser = (email, password, id) => {
//   //adding a new user who doesnt have an account, signing up
//   return {
//     type: 'POST_USER',
//     email,
//     password,
//     id
//   }
// }
//
// export const loginUser = (email, password) => {
//   //logging in someone who already has an account
//   type: 'LOGIN_USER'
// }
//
// export const addFavorite = () => {
//   return {
//     type: 'ADD_FAVORITE'
//   }
// }
