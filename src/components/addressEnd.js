import React from 'react';
import {Field} from 'redux-form';
import Input from './input';
import SearchInput from './search-input';
import {required, nonEmpty} from '../validators';
var places = require('places.js');
var placesAutocomplete;

var select = false;
const invalid = () => (select ? undefined : 'Invalid Address. Please select from dropdown list.');

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
    placesAutocomplete.on("change", () => {select = true;document.activeElement.blur()})
    }

  render() {
    return (
      <div>
        <fieldset className="address-end-fieldset" onBlur={()=>{placesAutocomplete.close()}}>
          <Field 
            name="streetAddress"
            id="streetAdress" 
            component={SearchInput}
            onChange={()=>{select = false}}
            type="text" 
            label="End Address"
            validate={[required, invalid]}
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