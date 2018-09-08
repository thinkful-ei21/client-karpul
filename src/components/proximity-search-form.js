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
var select = false;
const invalid = () => (select ? undefined : 'Invalid Address. Please select from dropdown list.');
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
    placesAutocomplete.on("change", () => {select = true})
    this.props.initialize({fromTime: "09:00:00", toTime: "17:00:00", searchRadius: "5"})
    
  }
  

  onSubmit(values) {
    values.days = this.state.days;
    console.log(values)
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
      <div>
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
          <label htmlFor="proximitySearch" aria-label="proximity search">Destination</label>
            <Field
                component={SearchInput}
                onBlur={()=>{placesAutocomplete.close()}}
                onChange={()=>{select = false}}
                type="text"
                name="proximitySearch"
                id="proximitySearch"              
                validate={[required, nonEmpty, invalid]}
            />
            <label className="days-label" htmlFor="days">Days of Week</label>
                  <CheckboxGroup
                      checkboxDepth={2} // This is needed to optimize the checkbox group
                      className="days-checkbox"
                      name="days"
                      role="group"
                      aria-labelledby="days"
                      value={this.state.days}
                      onChange={this.chooseDays}>
                      <label id="days"><Checkbox value="Mon"/>Mon</label>
                      <label id="days"><Checkbox value="Tues"/>Tues</label>
                      <label id="days"><Checkbox value="Wed"/>Wed</label><br />
                      <label id="days"><Checkbox value="Thurs"/>Thurs</label>
                      <label id="days"><Checkbox value="Fri"/>Fri</label>
                      <label id="days"><Checkbox value="Sat"/>Sat</label>
                      <label id="days"><Checkbox value="Sun"/>Sun</label>
                  </CheckboxGroup>
          <div className="to-time-containter">
          <label className="from-time-label" htmlFor="fromTime">FROM</label>
          <Field
              component={Input}
              type="time"
              className="time-picker"
              aria-label="time input"
              onChange={this.onFromTimeSelect}
              value={this.state.fromTime}
              name="fromTime"
              id="fromTime"            
          />
          </div>
          
          <div className="to-time-containter">
          <label className="to-time-label" htmlFor="toTime">TO</label>
          <Field
              component={Input}
              type="time"
              aria-label="time input"
              className="time-picker"
              onChange={this.onToTimeSelect}
              value={this.state.toTime}
              name="toTime"
              id="toTime"            
          />
          </div>

          <label className="searchRadius-label" htmlFor="searchRadius">Search Radius</label>
            <Field
                component="select"
                type="textarea"
                className="time-picker"
                name="searchRadius"
                id="searchRadius"
                label="Search Radius"
                aria-label="Search Radius"
                aria-required="true"
                validate={[]}
            >     
                  <option value='1'>1 mile</option>
                  <option value="5">5 miles</option>
                  <option value="10">10 miles</option>
            </Field>

          <button type="submit" className="proximity-search-button" id="proximity-search-button" disabled={this.props.pristine || this.props.submitting}>
            Search
          </button>
        </Form>
        {error}
      </div>
    )
  }
}

export default reduxForm({
  form: 'proximitySearchForm',
  obSubmitFail: (errors, dispatch) => dispatch(focus('proximitySearchForm', 'proximitySearch'))
})(ProximitySearchForm);