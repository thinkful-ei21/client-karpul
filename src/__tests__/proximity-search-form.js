import React from 'react';
import {shallow, mount} from 'enzyme';

import ProximitySearchForm from '../components/proximity-search-form';

describe('<ProximitySearchForm />', () => {

  it('Renders without crashing', () => {
    shallow(<ProximitySearchForm />);
  })

});