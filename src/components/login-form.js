import React from 'react';
import {Field, reduxForm, focus, Form} from 'redux-form';
import {Link} from 'react-router-dom';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';
// import axios from 'axios';
// import {API_BASE_URL} from '../config';

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    // handleUploadFile = (event) => {
    //     const data = new FormData();
    //     data.append('file', event.target.files[0]);
    //     data.append('name', 'some value user types');
    //     data.append('description', 'some value user types');
    //     // '/files' is your node.js route that triggers our middleware
    //     axios.post(`${API_BASE_URL}files`, data).then((response) => {
    //       console.log(response); // do something with the response
    //     });}

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
                className="login-form"
                aria-live="polite"
                aria-atomic="true"
                role="complementary"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <h2>Login</h2>
                {error}
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    label="Username"
                    id="username"
                    aria-label="Username"
                    aria-required="true"
                    validate={[required, nonEmpty]}
                    autoFocus
                />
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    label="Password"
                    aria-label="Password"
                    aria-required="true"
                    validate={[required, nonEmpty]}
                />
                <button disabled={this.props.pristine || this.props.submitting}>
                    Log in
                </button>
                <br />
                or
                <Link to="/register" className="register-link"><h2 className="register-text">Register</h2></Link>
            </Form>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
