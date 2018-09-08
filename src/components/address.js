import React from 'react';
import {Field} from 'redux-form';
import Input from './input';
import SearchInput from './search-input';
import {required, nonEmpty} from '../validators';

var places = require('places.js');
var placesAutocomplete;
var select = false;
const invalid = () => (select ? undefined : 'Invalid Address. Please select from dropdown list.');

export default class Address extends React.Component {

  static defaultProps = {
    name: "address"
  }

  componentDidMount(){
    if(document.querySelector('.address-fieldset input')){
      console.log("triggered")
        placesAutocomplete = places({
        container: document.querySelector(".address-fieldset input"),
        countries: ['US'],
        appId: 'plKVDLCDNM8Z',
        apiKey: '39480e11ee39e841bac900f118a4b901',
        type: 'address',
        useDeviceLocation: false,
        autocompleteOptions: {
            autoselect: true,
            minLength: 3,
            autoselectOnBlur: true,
            hint: false,
        }
        });
    }

    placesAutocomplete.on("change", () => {select = true;document.activeElement.blur()})
    
    }

  render() {
    return (
      <div>
        <fieldset className="address-fieldset" onBlur={()=>{placesAutocomplete.close()}}>
          <Field 
            name="streetAddress"
            id="streetAdress" 
            component={SearchInput}
            onChange={()=>{select = false}}
            type="text" 
            label="Start Address"
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