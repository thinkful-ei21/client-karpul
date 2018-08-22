import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {connect} from 'react-redux';
import Input from './input';
import axios from 'axios'
import {refreshAuthToken} from '../actions/auth'
import {API_BASE_URL} from '../config';
import './profile.css';


export class Profile extends React.Component{

  onSubmit(values) {
    return 
  }

  handleUploadFile = (event) => {
    console.log(this.props.currentUser)
    const data = new FormData();
    data.append('file', event.target.files[0]);
    data.append('id', this.props.currentUser._id)
    // '/files' is your node.js route that triggers our middleware
    axios.post(`${API_BASE_URL}/files`, data).then((response) => {
      axios.post(`${API_BASE_URL}/profilePic`, {id: this.props.currentUser._id, profilePicUrl: response.data})
      .then((response)=> {this.props.dispatch(refreshAuthToken())})
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
      <form
          className="login-form"
          onSubmit={this.props.handleSubmit(values =>
              this.onSubmit(values)
          )}>
          {error}  
          <label htmlFor="profilePic" id="profilePiclbl">Profile Pic</label>
          <input type="file" onChange={this.handleUploadFile} />
          <img src={this.props.currentUser.profilePicUrl} alt='Sample Image'/>              
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

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    currentUser: state.auth.currentUser !== null ? state.auth.currentUser : ""
});

export default connect (mapStateToProps)(reduxForm({
  form: 'profile',
  onSubmitFail: (errors, dispatch) => dispatch(focus('profile', 'firstName'))
})(Profile))