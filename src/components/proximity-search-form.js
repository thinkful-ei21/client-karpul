import React from 'react';
import {Field, reduxForm, focus, Form} from 'redux-form';
import Input from './input';
import SearchInput from './search-input';
import {required, nonEmpty} from '../validators';
import { fetchNearbyCarpools } from '../actions/carpools';
import './proximity-search-form.css'
var places = require('places.js');
var placesAutocomplete;
  var options;
    


export class ProximitySearchForm extends React.Component {
  componentDidMount(){
    if(document.querySelector('#proximitySearch')){
      console.log("triggered")
      placesAutocomplete = places({
        container: document.querySelector('#proximitySearch'),
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
  onSubmit(values) {
    return this.props.dispatch(fetchNearbyCarpools(values));
  }

  render() {
    let error;

    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      )
    }
    
    

    return (
      <Form
        className="proximity-search-form"
        aria-live="polite"
        aria-atomic="true"
        role="complementary"
        onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values)
        )}>

        {error}
        <label htmlFor="proximitySearch">Find Karpüls</label>
          <Field
              component={SearchInput}
              type="text"
              name="proximitySearch"
              id="proximitySearch"
              validate={[required, nonEmpty]}
          />
        <button type="submit" className="proximity-search-button"  disabled={this.props.pristine || this.props.submitting}>
          Search
        </button>
      </Form>
    )
  }
}

export default reduxForm({
  form: 'proximitySearchForm',
  obSubmitFail: (errors, dispatch) => dispatch(focus('proximitySearchForm', 'proximitySearch'))
})(ProximitySearchForm);