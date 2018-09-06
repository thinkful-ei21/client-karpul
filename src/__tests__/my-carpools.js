import React from 'react';
import {shallow, mount} from 'enzyme';

import {MyCarpools} from '../components/myCarpools';

describe('<MyCarpools />', () => {

  it('Renders without crashing', () => {
    shallow(<MyCarpools />);
  })

});