import React from 'react'

const MovieCard = ({poster}) => {
  return (
    <section className="movie-card">
    <img src={`https://image.tmdb.org/t/p/w300${poster}`}/>
    </section>
  )
}

export default MovieCard;
