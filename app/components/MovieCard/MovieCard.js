import React from 'react';

const MovieCard = ({data, addFavorite, postFavorites, userId, userData}) => {
  const url = '/api/users/favorites/new'

if(userData.data) {
  userData.data.favorites.filter(favorite => favorite.id === data.id )
}

  return (
    <section className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
           height='450px'
           width='300px' />
         <button onClick={(e) => {postFavorites(url, userId.data.id, data, userData); addFavorite(data)}}>Favorite Me!</button>
    </section>
  );
}

export default MovieCard;
