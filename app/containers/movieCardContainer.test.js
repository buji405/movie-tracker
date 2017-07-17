import React from 'react';
import fetchMock from 'fetch-mock';
import { shallow } from 'enzyme';
import movieCardContainer from './movieCardContainer';
import configureMockStore from 'redux-mock-store'

describe('movie card containers', () => {
  it('renders a container element', () => {

    const mockStore = configureMockStore()({
      items: [],
      
    })
    const wrapper = shallow(<Provider store={mockStore}><movieCardContainer/></Provider>);

    expect(wrapper.find('.header')).toHaveLength(1);
  });
