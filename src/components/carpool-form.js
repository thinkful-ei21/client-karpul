import React from 'react';
import {Field, reduxForm, focus, Form, FormSection} from 'redux-form';
import Input from './input';
import Address from './address';
import './carpool-form.css';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';
import {hideModal} from '../actions/modals';
import { createNewCarpool } from '../actions/carpools';
import {  fetchUserCarpools  } from '../actions/carpools';
import {required, nonEmpty} from '../validators';

import '../styles/carpool-form.css';

export class CarpoolForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          days: [],
          openSeats: "1"
        };
      }

    onSubmit(values) {
        values.days = this.state.days;
        return this.props.dispatch(createNewCarpool(values))
        .then (() => this.props.dispatch(hideModal()))
        .then(() => this.props.dispatch(fetchUserCarpools()))
    }

    chooseDays = (myDays) => {
        this.setState({
          days: myDays
        });
      }

    onTimeSelect = arrivalTime => this.setState({ arrivalTime })

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <Form
                className="carpool-form"
                aria-live="polite"
                aria-atomic="true"
                role="complementary"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <label className="carpool-title-label" htmlFor="startAddress">Carpool Title</label>
                <Field
                    component={Input}
                    type="text"
                    name="carpoolTitle"
                    id="carpoolTitle"
                    validate={[required, nonEmpty]}
                />

                <label className="start-address-label" htmlFor="startAddress">Start Address</label>
                <FormSection name="startAddress">
                    <Address />
                </FormSection>

                <label className="end-address-label" htmlFor="endAddress">End Address</label>
                <FormSection name="endAddress">
                    <Address />
                </FormSection>

                <label className="arrival-time-label" htmlFor="arrivalTime">Arrival Time</label>
                <Field
                    component={Input}
                    type="time"
                    className="time-picker"
                    onChange={this.onTimeSelect}
                    value={this.state.arrivalTime}
                    name="arrivalTime"
                    id="arrivalTime"
                    validate={[required]}
                />

                <label className="days-label" htmlFor="days">Days of Week</label>
                <CheckboxGroup
                    checkboxDepth={2} // This is needed to optimize the checkbox group
                    className="days-checkbox"
                    name="days"
                    value={this.state.days}
                    onChange={this.chooseDays}>
                    <label><Checkbox value="Mon"/>Mon</label>
                    <label><Checkbox value="Tues"/>Tues</label>
                    <label><Checkbox value="Wed"/>Wed</label><br />
                    <label><Checkbox value="Thurs"/>Thurs</label>
                    <label><Checkbox value="Fri"/>Fri</label>
                    <label><Checkbox value="Sat"/>Sat</label>
                    <label><Checkbox value="Sun"/>Sun</label>
                </CheckboxGroup>

                <label className="available-seats-label" htmlFor="seats">Seats</label>
                <Field
                    component="select"
                    type="select"
                    name="openSeats"
                    id="seats"
                    className="seat-selector"
                >
                    <option 
                    className="seat-selector" value="1">1</option>
                    <option 
                    className="seat-selector" value="2">2</option>
                    <option 
                    className="seat-selector" value="3">3</option>
                    <option 
                    className="seat-selector" value="4">4</option>
                </Field>

                <label className="details-label" htmlFor="details">Details</label>
                <Field
                    className="details-input"
                    component="textarea"
                    type="textarea"
                    name="details"
                    id="details"
                    validate={[required, nonEmpty]}
                />

                <button type="submit" className="create-carpool-button" disabled={this.props.pristine || this.props.submitting}>
                    Create Carpool
                </button>
                <button onClick={() => this.props.dispatch(hideModal())}>Cancel</button>
            </Form>
        );
    }
}

export default reduxForm({
    form: 'carpool',
    onSubmitFail: (errors, dispatch) => dispatch(focus('carpool', 'title'))
})(CarpoolForm);