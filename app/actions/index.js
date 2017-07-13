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

export const itemsFetchData = (url) => {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }

        dispatch(itemsIsLoading(false))

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
  console.log('in user fetch', email, password);
  return (dispatch) => {
    dispatch(itemsIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }

        dispatch(itemsIsLoading(false))

        return response
      })
      .then((response) => response.json())
      .then((users) => dispatch(usersFetchDataSuccess(users)))
      .then((users) => dispatch(userLogin(email, password)))
      .catch((error) => {
        dispatch(itemsHasErrored(true))
        console.log(error, 'error fetching data')
      })
  }
}
