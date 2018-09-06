import React from 'react';
import {shallow, mount} from 'enzyme';

import LoginForm from '../components/login-form';

const user1 = ['abc', 'abc'];
const user2 = ['testing123', 'testing123'];

describe('<LoginForm />', () => {

  it('Renders without crashing', () => {
    shallow(<LoginForm />);
  })

});