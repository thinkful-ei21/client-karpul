import React from 'react';
import {shallow, mount} from 'enzyme';

import CarpoolsForm from '../components/carpool-form';

describe('<CarpoolsForm />', () => {

  it('Renders without crashing', () => {
    shallow(<CarpoolsForm />);
  })

});