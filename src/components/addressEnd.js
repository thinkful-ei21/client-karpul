import React from 'react';
import {Field} from 'redux-form';
import Input from './input';
import SearchInput from './search-input';

var places = require('places.js');
var placesAutocomplete;

export default class AddressEnd extends React.Component {

  static defaultProps = {
    name: "address"
  }

  componentDidMount(){
    if(document.querySelector('.address-end-fieldset input')){
      console.log("triggered")
        placesAutocomplete = places({
        container: document.querySelector(".address-end-fieldset input"),
        countries: ['US'],
        appId: 'plKVDLCDNM8Z',
        apiKey: '39480e11ee39e841bac900f118a4b901',
        type: 'address',
        useDeviceLocation: false,
        autocompleteOptions: {
            autoselect: false,
            minLength: 3,
        }
        });
    }
    
    }

  render() {
    return (
      <div>
        <fieldset className="address-end-fieldset">
          <Field 
            name="streetAddress"
            id="streetAdress" 
            component={SearchInput}
            type="text" 
            label="End Address"
          />

          {/* <Field
            name="city" 
            component={Input} 
            type="text"
            label="City"/>

          <Field name="state"
            component={Input}
            type="text"
            label="State"/> */}

        </fieldset>
      </div>
    )
  }

}