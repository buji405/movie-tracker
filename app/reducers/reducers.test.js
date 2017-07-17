import * as reducers from './items.js';

describe('itemsHasErrored reducer', () => {
  it('should default state to false', () => {
    const initialAction = { type: 'init' }

    expect(reducers.itemsHasErrored(undefined, initialAction)).toEqual(false)
  })

  it('should return an error if there is an error', () => {
    const actionError = {
      type: 'ITEMS_HAS_ERRORED',
      hasErrored: true
    }
    const state = false

    expect(reducers.itemsHasErrored(state, actionError)).toEqual(true)
  })
})

describe('itemsIsLoading reducer', () => {
  it('should default state to false', () => {
    const initialAction = { type: 'init' }

    expect(reducers.itemsIsLoading(undefined, initialAction)).toEqual(false)
  })

  it('should return is loading if it is loading', () => {
    const actionError = {
      type: 'ITEMS_IS_LOADING',
      isLoading: true
    }
    const state = false

    expect(reducers.itemsIsLoading(state, actionError)).toEqual(true)
  })
})

describe('items reducer', () => {
  it('should default state to empty array', () => {
    const initialAction = { type: 'init' }

    expect(reducers.items(undefined, initialAction)).toEqual([])
  })

  it('should return array of items with movie_id', () => {
    const actionItems = {
      type: 'ITEMS_FETCH_DATA_SUCCESS',
      items: {
        results: [
        {id: '1'},
        {id: '2'}
      ]}
    }
    const state = []

    expect(reducers.items(state, actionItems)).toEqual([
      {id: '1',
      movie_id: '1'},
      {id: '2',
      movie_id: '2'}
    ])
  })
})

describe('users reducer', () => {
  it('should set state to an empty object', () => {
    const initialAction = { type: 'init' }

    expect(reducers.users(undefined, initialAction)).toEqual({})
  })

  it('should return a user on success', () => {
    const userAction = {
      type: 'USERS_FETCH_DATA_SUCCESS',
      user: 'Bill Brasky'
    }

    expect(reducers.users({}, userAction)).toEqual('Bill Brasky')
  })

  it('should return state on user login', () => {
    const userAction = {
      type: 'USER_LOGIN',
    }

    expect(reducers.users({}, userAction)).toEqual({})
  })

  it('should delete a user and return an empty object', () => {
    const userAction = {
      type: 'DELETE_USER',
    }
    const state = {users: 'Antonio Banderaz'}

    expect(reducers.users(state, userAction)).toEqual({})
  })

  it('Add a favorites property if not present', () => {
    const userAction = {
      type: 'ADD_FAVORITE',
    }
    const state = { data: {}}

    expect(reducers.users(state, userAction)).toEqual({"data": {"favorites": [undefined]}})
  })

  it('Add a favorites to the favorites array', () => {
    const action = {
      type: 'ADD_FAVORITE',
      favorite: ['Greg']
    }

    const state = { data: {favorites: []}}

    expect(reducers.users(state, action).data.favorites.length).toEqual(1)
  })

  it('Add favorites from the server', () => {
    const action = {
      type: 'ADD_FAVORITE_SERVER',
      favorite: ['Greg', 'Marty']
    }

    const state = { data: {favorites: []}}

    expect(reducers.users(state, action).data.favorites.length).toEqual(2)
  })
  it('should delete a favorite', () => {
    const action = {
      type: 'DELETE_FAVORITE',
      favorite: {movie_id: 1}
    }

    const state = { data: {favorites: [
        {movie_id: 1},
        {movie_id: 2}
      ]
    }}
    expect(state.data.favorites.length).toEqual(2)
    expect(reducers.users(state, action).data.favorites.length).toEqual(1)
  })
})

describe('errors reducer', () => {
  it('should handle default to empty object', () => {
    const action = {
      type: 'init',
    }

    expect(reducers.errors(undefined, action)).toEqual({})
  })

  it('should handle duplicate errors', () => {
    const action = {
      type: 'DUPLICATE',
      error: 'duplication'
    }

    expect(reducers.errors(undefined, action)).toEqual('duplication')
  })

  it('should handle invalid credentials', () => {
    const action = {
      type: 'INVALID CREDENTIALS',
      error: 'invalid credentials'
    }

    expect(reducers.errors(undefined, action)).toEqual('invalid credentials')
  })

  it('should reset errors on success', () => {
    const action = {
      type: 'SUCCESS',
    }

    const state = 'invalid credentials'

    expect(reducers.errors(state, action)).toEqual({})
  })
})
