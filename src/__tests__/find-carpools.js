import React from 'react';
import {shallow, mount} from 'enzyme';

import {FindCarpools} from '../components/find-carpools';

describe('<FindCarpools />', () => {

  it('Renders without crashing', () => {
    shallow(<FindCarpools />);
  })

});