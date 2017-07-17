import * as actions from '../actions';

describe('action', () => {
  it('return an error when itemsHasErrored', () => {
    const action = actions.itemsHasErrored(false);

    expect(action.hasErrored).toEqual(false);
    expect(action.type).toEqual('ITEMS_HAS_ERRORED')
  })

  it('should return loading when itemsIsLoading', () => {
    const action = actions.itemsIsLoading(true)

    expect(action.isLoading).toEqual(true);
    expect(action.type).toEqual('ITEMS_IS_LOADING')
  })

  it('should return items when itemsFetchDataSuccess', () => {
    const items = { key: 'value' }
    const action = actions.itemsFetchDataSuccess(items)

    expect(action.items).toEqual({ key: 'value' });
    expect(action.type).toEqual('ITEMS_FETCH_DATA_SUCCESS')
  })

  it('should return email and password when userLogin is fired', () => {
    const user = 'tman@aol.com'
    const action = actions.usersFetchDataSuccess(user)

    expect(action.user).toEqual('tman@aol.com');
    expect(action.type).toEqual('USERS_FETCH_DATA_SUCCESS')
  })

  it('should return email and password when userLogin is fired', () => {
    const email = 'tman@aol.com'
    const password = 'password'
    const action = actions.userLogin(email, password)

    expect(action.email).toEqual('tman@aol.com');
    expect(action.password).toEqual('password');
    expect(action.type).toEqual('USER_LOGIN')
  })

  it('should delete a user', () => {
    const action = actions.deleteUser()

    expect(action.type).toEqual('DELETE_USER')
  })

  it('should handle duplicates', () => {
    const string = 'redundant'
    const action = actions.duplicates(string)

    expect(action.error).toEqual('redundant')
    expect(action.type).toEqual('DUPLICATE')
  })

  it('should handle invalid credentials', () => {
    const string = 'wrong info'
    const action = actions.invalidCredentials(string)

    expect(action.error).toEqual('wrong info')
    expect(action.type).toEqual('INVALID CREDENTIALS')
  })

  it('should handle successes', () => {
    const action = actions.success()

    expect(action.type).toEqual('SUCCESS')
  })

  it('should handle favorites', () => {
    const favorite = {item: 'favorite'}
    const action = actions.favorite(favorite)


    expect(action.favorite).toEqual({item: 'favorite'})
    expect(action.type).toEqual('ADD_FAVORITE')
  })

  it('should handle favorites server side', () => {
    const favorite = {item: 'favorite'}
    const action = actions.favoritesServer(favorite)

    expect(action.favorite).toEqual({item: 'favorite'})
    expect(action.type).toEqual('ADD_FAVORITE_SERVER')
  })

  it('should handle deleting a favorite', () => {
    const favorite = {item: 'favorite'}
    const action = actions.deleteFavorite(favorite)

    expect(action.favorite).toEqual({item: 'favorite'})
    expect(action.type).toEqual('DELETE_FAVORITE')
  })

  // it('should handle deleting a favorite server side', () => {
  //   const user = 'steve'
  //   const movie = 'Shindlers List'
  //   const action = actions.deleteFavoriteServer()
  // 
  //   expect(action.favorite).toEqual({item: 'favorite'})
  //   expect(action.type).toEqual('DELETE_FAVORITE')
  // })


})
