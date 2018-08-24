import React from 'react';
import {hideModal} from '../actions/modals'
import { connect } from 'react-redux';

import './example.css'

export function Example(props) {
  return (
    <div className="example-container">
      <section className="example-section">
      <h1>Example Modal</h1>
      <button onClick={() => props.dispatch(hideModal())}>Close</button>
      </section>
    </div>
  );
}

export default connect()(Example);