const getMovies = () => {
  let moviesPromise = fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=82b7b36567e7dd90ee1bc240d23a8e49a&language=en-US&page=1')

  return Promise.all([getMovies])
    .then(movieArray => {
      return movieArray[0].results.map((value, index) => {
        const movieObj = {};
        Object.assign(movieObj, {title: value.title,
                                 vote_average: value.vote_average,
                                 vote_count: value.vote_count,
                                 poster_path: value.poster_path,
                                 overview: value.overview,
                                 id: value.id,
                                 release_date: value.release_date})
        return movieObj
      })
    })
}

export default getMovies;
