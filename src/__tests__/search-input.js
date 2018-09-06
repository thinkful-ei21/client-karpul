import React from 'react';
import {shallow, mount} from 'enzyme';
import {createMockStore} from 'react-test-utils';

import SearchInput from '../components/search-input';

// const shallowWithStore = (component, store) => {
//   const context = {
//     store,
//   };
//   return shallow(component, { context });
// }

// const mountWithStore = (component, store) => {
//   const context = {
//     store,
//   };
//   return mount(component, { context });
// }

describe('<SearchInput />', () => {

  // const testState = {
  //   test: {}
  // }

  // const store = createMockStore(testState);

  // it('Renders without crashing', () => {
  //   mountWithStore(<SearchInput />, store);
  // })

  // it('Renders without crashing', () => {
  //   shallowWithStore(<SearchInput />, store);
  // })

  // it('Renders without crashing', () => {
  //   mount(<SearchInput />);
  // })

  // it('Renders without crashing', () => {
  //   mount(<SearchInput />).dive();
  // })

  it('Renders without crashing', () => {
    shallow(<SearchInput />);
  })

});