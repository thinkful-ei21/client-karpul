import React from 'react';
import {Field, reduxForm, focus, Form, FormSection} from 'redux-form';
import Input from './input';
import Address from './address';
import { createNewCarpool } from '../actions/carpools';
import {required, nonEmpty} from '../validators';

import '../styles/carpool-form.css';

export class CarpoolForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(createNewCarpool(values));
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
            <Form
                className="carpool-form"
                aria-live="polite"
                aria-atomic="true"
                role="complementary"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <label htmlFor="carpoolTitle">Carpool Title</label>
                <Field
                    component={Input}
                    type="text"
                    name="carpoolTitle"
                    id="carpoolTitle"
                    validate={[required, nonEmpty]}
                />
                
                <label htmlFor="startAddress">Start Address</label>
                <FormSection name="startAddress">
                    <Address />
                </FormSection>

                <label htmlFor="endAddress">End Address</label>
                <FormSection name="endAddress">
                    <Address />
                </FormSection>

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

                <label htmlFor="details">Details</label>
                <Field
                    component="textarea"
                    type="textarea"
                    name="details"
                    id="details"
                    validate={[required, nonEmpty]}
                />

                <button type="submit" className="create-carpool-button" disabled={this.props.pristine || this.props.submitting}>
                    Create Carpool
                </button>
            </Form>
        );
    }
}

export default reduxForm({
    form: 'carpool',
    onSubmitFail: (errors, dispatch) => dispatch(focus('carpool', 'title'))
})(CarpoolForm);