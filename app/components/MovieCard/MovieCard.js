import React from 'react';
import {NavLink} from 'react-router-dom'

const MovieCard = ({data, addFavorite, postFavorites, userId, userData}) => {
  const url = '/api/users/favorites/new'

  const updateFavs = <button onClick={(e) => {postFavorites(url, userId.data.id, data, userData);
                             addFavorite(data)}}>
                        Favorite Me!
                      </button>

  const redirectFavs = <NavLink className='fav-redirect' to='/login' activeClassName='selected'>Favorite Me</NavLink>

  const favBtn = userData.data ? updateFavs : redirectFavs


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
