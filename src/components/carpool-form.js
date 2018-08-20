import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import { createNewCarpool } from '../actions/carpools';
import {required, nonEmpty} from '../validators';

export class CarpoolForm extends React.Component {
    onSubmit(values) {
        console.log(values)
        return this.props.dispatch(createNewCarpool(
          values.title, 
          values.startLocation,
          values.endLocation,
          values.startTime,
          values.endTime,
          values.seats, // totalSeats?
          values.description
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

                <label htmlFor="startTime">Start Time</label>
                <Field
                    component={Input}
                    type="text"
                    name="startTime"
                    id="startTime"
                    validate={[required, nonEmpty]}
                />

                <label htmlFor="endTime">End Time</label>
                <Field
                    component={Input}
                    type="text"
                    name="endTime"
                    id="endTime"
                    validate={[required, nonEmpty]}
                />

                <label htmlFor="seats">Seats</label>
                <Field
                    component={Input}
                    type="text"
                    name="seats"
                    id="seats"
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
