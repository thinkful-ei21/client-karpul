import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {Link} from 'react-router-dom';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
    onSubmit(values) {
        const {username, password, firstName, lastName, phone} = values;
        const user = {username, password, firstName, lastName, phone};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
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
            <div>
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <h2>Register</h2>
                {error}
                <Field component={Input}
                    type="text"
                    name="firstName"
                    id="firstName"
                    label="First Name"/>
                <Field component={Input}
                    type="text"
                    name="lastName"
                    id="lastName"
                    label="Last Name"/>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                    label="User Name"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <Field
                    component={Input}
                    type="text"
                    name="phone"
                    id="phone"
                    label="Phone Number"
                    validate={[required, passwordLength, isTrimmed]}
                />
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    label="Password"
                    validate={[required, passwordLength, isTrimmed]}
                />
                <Field
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    label="Confirm password"
                    validate={[required, nonEmpty, matchesPassword]}
                />
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Register
                </button>
                <br />
                or
                <Link to="/" className="login-link">
                    <h2 className="register-text">Login</h2>
                </Link>
            </form>
           
          </div>
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
