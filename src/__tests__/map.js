import React from 'react';
import {shallow, mount} from 'enzyme';

import {Maps} from '../components/maps';

describe('<Maps />', () => {

  it('Renders without crashing', () => {

    const mapbox = {
      longitude: 0,
      latitude: 0,
      zoom: 0
    };

    shallow(<Maps mapbox={mapbox}/>);
  })

});