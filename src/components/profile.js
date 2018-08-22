import React from 'react';
import {Field, reduxForm, focus, Form} from 'redux-form';
import {required, nonEmpty} from '../validators';
import axios from 'axios';
import {API_BASE_URL} from '../config';
import Input from './input';
import './profile.css';


export class Profile extends React.Component{

  onSubmit(values) {
    return 
  }

  handleUploadFile = (event) => {
    const data = new FormData();
    data.append('file', event.target.files[0]);
    data.append('name', 'some value user types');
    data.append('description', 'some value user types');
    // '/files' is your node.js route that triggers our middleware
    axios.post(`${API_BASE_URL}files`, data).then((response) => {
      console.log(response); // do something with the response
    });}

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
          {error}  
          <label htmlFor="profilePic" id="profilePiclbl">Profile Pic</label>
          <button type="file" onChange={this.handleUploadFile} >Upload Profile Pic</button>
          <Field
              component={Input}
              type="text"
              name="firstName"
              id="firstName"
              aria-label="First Name"
              aria-required="true"
              validate={[required, nonEmpty]}
              label="First Name" 
          />
          <Field
              component={Input}
              type="text"
              name="lastName"
              id="lastName"
              label="Last Name"
              aria-label="Last Name"
              aria-required="true"
              validate={[required, nonEmpty]}
          />
          <Field
              component={Input}
              type="text"
              name="userName"
              id="userName"
              label="User Name"
              aria-label="User Name"
              aria-required="true"
              validate={[required, nonEmpty]}
          />
          <Field
              component={Input}
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              label="Phone Number"
              aria-label="Phone Number"
              aria-required="true"
              validate={[required, nonEmpty]}
          />
          <Field
              component={Input}
              type="textarea"
              name="address"
              id="address"
              label="Address"
              aria-label="Address"
              aria-required="true"
              validate={[required, nonEmpty]}
          />
          <label htmlFor="bio">Bio</label>
          <Field
              component="textarea"
              type="textarea"
              name="bio"
              id="bio"
              label="Bio"
              aria-label="Bio"
              aria-required="true"
              validate={[required, nonEmpty]}
          />
            <button
                type="submit"
                disabled={this.props.pristine || this.props.submitting}>
                Create Profile
            </button>

      </Form>
  );
  }
}

export default reduxForm({
  form: 'profile',
  onSubmitFail: (errors, dispatch) => dispatch(focus('profile', 'firstName'))
})(Profile);