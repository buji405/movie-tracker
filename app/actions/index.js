export const fetchMovies = () => {
  //api call
  return {
    type: 'FETCH_MOVIES',
    moviesArray: fetch(...)
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
