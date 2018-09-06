import React from 'react';
import {shallow, mount} from 'enzyme';
import configureStore from 'redux-mock-store';

import {Profile} from '../components/profile';

const mockStore = configureStore();

describe('<Profile />', () => {

  it('Renders without crashing', () => {

    const userData = {
      firstName: 'test',
      lastName: 'test',
      phone: 1111111111,
      city: 'test',
      state: 'test',
      bio: 'test',
    }

    const currentUser = {
      username: 'test'
    }

    shallow(<Profile userData={userData} currentUser={currentUser} store={mockStore({ runtime: {} })}/>);
  })

});