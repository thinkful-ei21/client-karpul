import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import { createNewCarpool } from '../actions/carpools';
import {required, nonEmpty} from '../validators';

import '../styles/carpool-form.css';

export class CarpoolForm extends React.Component {
    onSubmit(values) {
        console.log(values)
        return this.props.dispatch(createNewCarpool(
          values.title, 
          values.startLocation,
          values.endLocation,
          values.arrivalTime,
          values.seats, // totalSeats?
          values.details
        ));
    }

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
            <form
                className="carpool-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>

                {error}

                <label htmlFor="title">Title</label>
                <Field
                    component={Input}
                    type="text"
                    name="title"
                    id="title"
                    validate={[required, nonEmpty]}
                />

                <label htmlFor="startLocation">Start Location</label>
                <Field
                    component={Input}
                    type="text"
                    name="startLocation"
                    id="startLocation"
                    validate={[required, nonEmpty]}
                />

                <label htmlFor="endLocation">End Location</label>
                <Field
                    component={Input}
                    type="text"
                    name="endLocation"
                    id="endLocation"
                    validate={[required, nonEmpty]}
                />

                <label htmlFor="arrivalTime">Arrival Time</label>
                <Field
                    component={Input}
                    type="text"
                    name="arrivalTime"
                    id="arrivalTime"
                    validate={[required, nonEmpty]}
                />

                <label htmlFor="seats">Seats</label>
                <Field
                    component="select"
                    type="select"
                    name="seats"
                    id="seats"
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </Field>

                <label htmlFor="details">Details</label>
                <Field
                    component="textarea"
                    type="textarea"
                    name="details"
                    id="details"
                    validate={[required, nonEmpty]}
                />

                <button disabled={this.props.pristine || this.props.submitting}>
                    Create Carpool
                </button>

            </form>
        );
    }
}

export default reduxForm({
    form: 'carpool',
    onSubmitFail: (errors, dispatch) => dispatch(focus('carpool', 'title'))
})(CarpoolForm);
