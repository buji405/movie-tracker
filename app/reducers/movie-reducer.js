const getMovies = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_MOVIES':
    const newMovies = action.moviesArray
    return [...state, ]
    default:
    return state
  }
}
