import React from 'react';
import {Field, reduxForm, focus, Form} from 'redux-form';
import Input from './input';
import SearchInput from './search-input';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';
import {required, nonEmpty} from '../validators';
import { fetchNearbyCarpools } from '../actions/carpools';
import './proximity-search-form.css'
import { grabQueryGeocode } from '../actions/mapbox';
var places = require('places.js');
var placesAutocomplete;
  var options;
    


export class ProximitySearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: []   
    };
  }

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
    values.days = this.state.days;
    return this.props.dispatch(fetchNearbyCarpools(values));
  }

  chooseDays = (myDays) => {
    this.setState({
      days: myDays
    });
  }

  onFromTimeSelect = fromTime => this.setState({ fromTime });
  onToTimeSelect = toTime => this.setState({ toTime });

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
            {
              
              this.onSubmit(values);
            }
        )}>

        {error}
        <label htmlFor="proximitySearch">Destination</label>
          <Field
              component={SearchInput}
              type="text"
              name="proximitySearch"
              id="proximitySearch"              
              validate={[required, nonEmpty]}
          />
        {/* <button type="submit" className="proximity-search-button"  disabled={this.props.pristine || this.props.submitting} /> */}
          <label className="days-label" htmlFor="days">Days of Week</label>
                <CheckboxGroup
                    checkboxDepth={2} // This is needed to optimize the checkbox group
                    className="days-checkbox"
                    name="days"
                    value={this.state.days}
                    onChange={this.chooseDays}>
                    <label><Checkbox value="Mon"/>Mon</label>
                    <label><Checkbox value="Tues"/>Tues</label>
                    <label><Checkbox value="Wed"/>Wed</label>
                    <label><Checkbox value="Thurs"/>Thurs</label>
                    <label><Checkbox value="Fri"/>Fri</label>
                    <label><Checkbox value="Sat"/>Sat</label>
                    <label><Checkbox value="Sun"/>Sun</label>
                </CheckboxGroup>

        <label className="from-time-label" htmlFor="fromTime">FROM</label>
        <Field
            component={Input}
            type="time"
            className="time-picker"
            onChange={this.onFromTimeSelect}
            value={this.state.fromTime}
            name="fromTime"
            id="fromTime"            
        />

        <label className="to-time-label" htmlFor="toTime">TO</label>
        <Field
            component={Input}
            type="time"
            className="time-picker"
            onChange={this.onToTimeSelect}
            value={this.state.toTime}
            name="toTime"
            id="toTime"            
        />
        <button type="submit" className="proximity-search-button" disabled={this.props.pristine || this.props.submitting}>
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