
import React from 'react';
import { shallow, mount } from 'enzyme';
import {Header} from './Header';
import headerContainer from '../../containers/headerContainer'
import { Provider } from 'react-redux';
import {NavLink} from 'react-router-dom'

describe('header', () => {

  it('should render', () => {
    console.log(<Header />);
    const props = {
      "state": {
        'users': {
          "data": {
            "id": 1,
            "name": "Taylor",
            "password": "password",
            "email": "tman2272@aol.com",
            "favorites": []
          },
        }
      },
      handleLogout: jest.fn()
    }

    const wrapper = shallow(<Header state={props.state.users}/>)

    console.log(wrapper.debug());
    expect(wrapper.find('.header')).toHaveLength(1)
  })
})
