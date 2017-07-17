import React from 'react';
import {NavLink} from 'react-router-dom'

const MovieCard = ({data, addFavorite, postFavorites, userId, userData, pathName, deleteFavorite}) => {
  const url = '/api/users/favorites/new'
  let favsArray;

  // console.log(userData);





  const updateFavs = <button onClick={(e) => {
      postFavorites(url, userId.data.id, data, userData);
      if (pathName === '/favorites') {
        deleteFavorite(data)
      } else {
        addFavorite(data)
      }}}>
      Favorite Me!
    </button>

  const redirectFavs = <NavLink className='fav-redirect' to='/login' activeClassName='selected'>Favorite Me</NavLink>

  const favBtn = userData.data ? updateFavs : redirectFavs

  if(userData.data) {
    favsArray = userData.data.favorites.map(fav => fav.movie_id)
    // console.log(favsArray);
  }

  return (
    <section className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
           height='450px'
           width='300px' />
         {favBtn}
    </section>
  );
}

export default MovieCard;
