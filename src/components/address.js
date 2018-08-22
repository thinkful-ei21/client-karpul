import React from 'react';
import {Field} from 'redux-form';

export default class Address extends React.Component {

  static defaultProps = {
    name: "address"
  }

  render() {
    return (
      <div>
        <label htmlFor="streetNumber">Street Number</label>
        <Field name="streetNumber" component="input" type="text" />

        <label htmlFor="streetName">Street Name</label>
        <Field name="streetName" component="input" type="text" />

        <label htmlFor="city">City</label>
        <Field name="city" component="input" type="text" />

        <label htmlFor="state">State</label>
        <Field name="state" component="input" type="text" />

        <label htmlFor="zipcode">Zip Code</label>
        <Field name="zipcode" component="input" type="text" />
      </div>
    )
  }

}