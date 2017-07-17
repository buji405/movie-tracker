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

  it('Add a favorites property if not present', () => {
    const action = {
      type: 'ADD_FAVORITE',
      favorite: ['Greg']
    }

    console.log(action.favorite);
    const state = { data: {favorites: []}}

    expect(reducers.users(state, action).data.favorites.length).toEqual(1)
  })
})


// const initialAction = { type: 'init' }
// it('default state is an empty array', () => {
//
//   expect(reducers.ideas(undefined, initialAction)).toEqual([]);
// });
//
// it('ADD_IDEA adds an idea to the initial state', () => {
//   const action = { type: 'ADD_IDEA', idea: {} }
//
//   expect(reducers.ideas(undefined, action).length).toEqual(1);
// });
//
// it('default state is an empty array', () => {
//   const action = { type: 'DELETE_IDEA', id: 1 }
//
//   expect(reducers.ideas(undefined, action)).toEqual([]);
// });
