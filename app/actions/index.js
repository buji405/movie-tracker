export const itemsHasErrored = (bool) => {
  return {
    type: 'ITEMS_HAS_ERRORED',
    hasErrored: bool
  };
}

export const itemsIsLoading = (bool) => {
  return {
    type: 'ITEMS_IS_LOADING',
    isLoading: bool
  };
}

export const itemsFetchDataSuccess = (items) => {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items
  };
}

export const usersFetchDataSuccess = (user) => {
  return {
    type: 'USERS_FETCH_DATA_SUCCESS',
    user
  };
}

export const userLogin = (email, password) => {
  console.log('in userLogin action', email, password);
  return {
    type: 'USER_LOGIN',
    email,
    password,
  };
}

export const deleteUser = () => {
  return {
    type: 'DELETE_USER'
  }
}

export const itemsFetchData = (url) => {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }

        dispatch(itemsIsLoading(false))
        dispatch(itemsHasErrored(false))

        return response
      })
      .then((response) => response.json())
      .then((items) => dispatch(itemsFetchDataSuccess(items)))
      .catch((error) => {
        dispatch(itemsHasErrored(true))
        console.log(error, 'error fetching data')
      })
  }
}

export const usersFetchData = (url, email, password) => {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {'Content-Type': 'application/json'}
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }

        dispatch(itemsIsLoading(false))
        dispatch(itemsHasErrored(false))

        return response
      })
      .then((response) => response.json())
      .then((users) => {
         dispatch(usersFetchDataSuccess(users))
         dispatch(success('SUCCESS'))
         return users
      })
      .then((user) => {
        // console.log(user.data.id);
        const id = user.data.id
        dispatch(getUserFavorites(`/api/users/${id}/favorites`, id))
      })
      .catch((error) => {
        dispatch(itemsHasErrored(true))
        dispatch(invalidCredentials('INVALID CREDENTIALS'))
        console.log(error, 'error fetching data')
      })
  }
}

export const addUser = (url, email, password, name) => {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({email, password, name}),
      headers: {'Content-Type': 'application/json'}
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }

        dispatch(itemsIsLoading(false))
        dispatch(itemsHasErrored(false))

        return response
      })
      .then((response) => response.json())
      .then((users) => {
         dispatch(usersFetchDataSuccess(users))
         dispatch(success('SUCCESS'))
         dispatch(usersFetchData('/api/users/', email, password))
         return users
      })
      .catch((error) => {
        dispatch(duplicates('DUPLICATE'))
        dispatch(itemsHasErrored(true))
        console.log(error, 'error fetching data')
      })
  }
}

export const postFavorites = (url, user, movie, userData) => {
  const {id, title, poster_path, release_date, vote_average, overview} = movie
  const userId = user


  return (dispatch) => {
    let favsIds;

    if (userData.data) {
      favsIds = userData.data.favorites.map(favorite => favorite.id)
    }
    console.log(favsIds);
    console.log(movie.id);
    if (favsIds.includes(movie.id)) {

      return
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({movie_id: id, user_id: userId, title, poster_path, release_date, vote_average, overview}),
      headers: {'Content-Type': 'application/json'}
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }

        return response
      })

      .catch((error) => {
        dispatch(itemsHasErrored(true))
        console.log(error, 'error fetching data')
      })
  }
}

export const getUserFavorites = (url) => {
  return (dispatch) => {

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }

        return response
      })
      .then((response) => response.json())
      .then((response) => {
        dispatch(favoritesServer(response.data))
      })

      .catch((error) => {
        dispatch(itemsHasErrored(true))
        console.log(error, 'error fetching data')
      })
  }
}

export const duplicates = (str) => {
  return {
    type: 'DUPLICATE',
    error: str
  }
}

export const invalidCredentials = (str) => {
  return {
    type: 'INVALID CREDENTIALS',
    error: str
  }
}

export const success = () => {
  return {
    type: 'SUCCESS'
  }
}

  export const favorite = (favorite) => {
    return {
      type: 'ADD_FAVORITE',
      favorite
    }
  }

  export const favoritesServer = (favorite) => {
    return {
      type: 'ADD_FAVORITE_SERVER',
      favorite
    }
  }

  export const deleteFavorite = (favorite) => {
    return {
      type: 'DELETE_FAVORITE',
      favorite
    }
  }

  export const deleteFavoriteServer = (user, movie) => {

    return (dispatch) => {
      let favsIds;

      if (userData.data) {
        favsIds = userData.data.favorites.map(favorite => favorite.id)
      }

      if (favsIds.includes(movie.id)) {

        return
      }

      fetch(`/api/users/${user}/favorites/${movie.id}`, {
        method: 'POST',
        body: JSON.stringify({movie_id: id, user_id: userId}),
        headers: {'Content-Type': 'application/json'}
      })
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText)
          }

          return response
        })

        .catch((error) => {
          dispatch(duplicates('DUPLICATE'))
          dispatch(itemsHasErrored(true))
          console.log(error, 'error fetching data')
        })
    }
  }
