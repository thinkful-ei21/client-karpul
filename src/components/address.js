import React from 'react';
import {Field} from 'redux-form';
import Input from './input';

export default class Address extends React.Component {

  static defaultProps = {
    name: "address"
  }

  render() {
    return (
      <div>
        <fieldset className="address-fieldset">
          <Field 
            name="streetAddress" 
            component={Input}
            type="text" 
            label="Street Address"
          />

          <Field
            name="city" 
            component={Input} 
            type="text"
            label="City"/>

          <Field name="state"
            component={Input}
            type="text"
            label="State"/>

        </fieldset>
      </div>
    )
  }

}