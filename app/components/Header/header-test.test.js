
import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import headerContainer from '../../containers/headerContainer'
import { Provider } from 'react-redux'

describe('header', () => {
  it.skip('should render', () => {
    const wrapper = mount(<Provider><headerContainer /></Provider>)

    console.log(wrapper.debug());

  })
})
