import React from 'react'

const MovieCard = ({title, releaseDate}) => {
  return (
    <section className="movie-card">
      <p>{title}</p>
      <p>{releaseDate}</p>
    </section>
  )
}

export default MovieCard;
