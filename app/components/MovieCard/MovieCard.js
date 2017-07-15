import React from 'react';

const MovieCard = ({data, addFavorite}) => {
  return (
    <section className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
           height='450px'
           width='300px' />
         <button onClick={(e) => addFavorite(data)}>Favorite Me!</button>
    </section>
  );
}

export default MovieCard;
