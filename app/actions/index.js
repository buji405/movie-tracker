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
        console.log(users);
         dispatch(usersFetchDataSuccess(users))
         dispatch(success('SUCCESS'))

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
        console.log(users);
         dispatch(usersFetchDataSuccess(users))
         dispatch(success('SUCCESS'))
         dispatch(usersFetchData('/api/users/', email, password))
      })

      .catch((error) => {
        dispatch(duplicates('DUPLICATE'))
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
