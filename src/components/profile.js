import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import './profile.css';


export class Profile extends React.Component{

  onSubmit(values) {
    return 
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
          className="login-form"
          onSubmit={this.props.handleSubmit(values =>
              this.onSubmit(values)
          )}>
          {error}  
          <label htmlFor="profilePic" id="profilePiclbl">Profile Pic</label>
          <input type="file" onChange={this.handleUploadFile} />                  
          <Field
              component={Input}
              type="text"
              name="firstName"
              id="firstName"   
              label="First Name"           
          />          
          <Field
              component={Input}
              type="text"
              name="lastName"
              id="lastName"              
              label="Last Name"
          />          
          <Field
              component={Input}
              type="text"
              name="userName"
              id="userName"
              label="User Name"
          />          
          <Field
              component={Input}
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              label="Phone Number"              
          />          
          <Field
              component={Input}
              type="textarea"
              name="address"
              id="address"
              label="Address"              
          />
          <Field
              component={Input}
              type="textarea"
              name="bio"
              id="bio"
              label="Bio"              
          />


      </form>
  );
  }
}

export default reduxForm({
  form: 'profile',
  onSubmitFail: (errors, dispatch) => dispatch(focus('profile', 'firstName'))
})(Profile);