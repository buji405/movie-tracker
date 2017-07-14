import React from 'react'

const MovieCard = ({poster}) => {
  return (
    <section className="movie-card">
    <img height='450px' width='300px' src={`https://image.tmdb.org/t/p/w300${poster}`}/>
    <button>Favorite Me</button>
    </section>
  )
}

export default MovieCard;
