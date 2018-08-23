import React from 'react';
import {Field, reduxForm, focus, Form} from 'redux-form';
import {required, nonEmpty} from '../validators';


import {connect} from 'react-redux';
import Input from './input';
import axios from 'axios'
import {fetchPic, fetchUserData, updateUserData} from '../actions/users'
import {API_BASE_URL} from '../config';
import './profile.css';


export class Profile extends React.Component{
  
    constructor(props) {                                                                                                                                                                                                                                                                                                                                                                                                                
        super(props);
        // Don't call this.setState() here!
        this.state = { edit: false };
    }

  componentDidMount(){
      this.props.dispatch(fetchPic(this.props.currentUser._id))
      this.props.dispatch(fetchUserData(this.props.currentUser._id))
  }

  setEditView(error){
      if(this.state.edit){
          return <Form
          className="login-form"
          aria-live="polite"
          aria-atomic="true"
          role="complementary"
          onSubmit={this.props.handleSubmit(values =>
              this.onSubmit(values)
          )}>
          {error}

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
              name="city"
              id="city"
              label="City"
              aria-label="City"
              aria-required="true"
              validate={[required, nonEmpty]}
          />
          <label style={{display: 'block'}} htmlFor="state">State</label>
          <Field
              component="select"
              type="textarea"
              name="state"
              id="state"
              label="State"
              aria-label="State"
              aria-required="true"
              validate={[required, nonEmpty]}
          >
                <option value="AL">AL</option>
                <option value="AK">AK</option>
                <option value="AR">AR</option>	
                <option value="AZ">AZ</option>
                <option value="CA">CA</option>
                <option value="CO">CO</option>
                <option value="CT">CT</option>
                <option value="DC">DC</option>
                <option value="DE">DE</option>
                <option value="FL">FL</option>
                <option value="GA">GA</option>
                <option value="HI">HI</option>
                <option value="IA">IA</option>	
                <option value="ID">ID</option>
                <option value="IL">IL</option>
                <option value="IN">IN</option>
                <option value="KS">KS</option>
                <option value="KY">KY</option>
                <option value="LA">LA</option>
                <option value="MA">MA</option>
                <option value="MD">MD</option>
                <option value="ME">ME</option>
                <option value="MI">MI</option>
                <option value="MN">MN</option>
                <option value="MO">MO</option>	
                <option value="MS">MS</option>
                <option value="MT">MT</option>
                <option value="NC">NC</option>	
                <option value="NE">NE</option>
                <option value="NH">NH</option>
                <option value="NJ">NJ</option>
                <option value="NM">NM</option>			
                <option value="NV">NV</option>
                <option value="NY">NY</option>
                <option value="ND">ND</option>
                <option value="OH">OH</option>
                <option value="OK">OK</option>
                <option value="OR">OR</option>
                <option value="PA">PA</option>
                <option value="RI">RI</option>
                <option value="SC">SC</option>
                <option value="SD">SD</option>
                <option value="TN">TN</option>
                <option value="TX">TX</option>
                <option value="UT">UT</option>
                <option value="VT">VT</option>
                <option value="VA">VA</option>
                <option value="WA">WA</option>
                <option value="WI">WI</option>	
                <option value="WV">WV</option>
                <option value="WY">WY</option>
          </Field>
          <label style={{display: 'block'}} htmlFor="bio">About Me</label>
          <Field
              style={{width: '250px', height: '100px', border: 'solid black 1px'}}
              component="textarea"
              type="textarea"
              name="bio"
              id="bio"
              label="About Me"
              aria-label="Bio"
              aria-required="true"
              validate={[required, nonEmpty]}
          />
            <button
                type="submit"
                disabled={this.props.pristine || this.props.submitting}
                >
                Save Changes
            </button>

      </Form>
      }
      else {
          return <section>
              <div className="profile-label-container">
              <label className="profile-labels">Name</label>
              <span className="profile-label-data">{this.props.userData.firstName} {this.props.userData.lastName}</span>
              </div>
              <div className="profile-label-container">
              <label className="profile-labels">Phone Number</label>
              <span className="profile-label-data">{this.props.userData.phone}</span>
              </div>
              <div className="profile-label-container">
              <label className="profile-labels">Location</label>
              <span className="profile-label-data">{this.props.userData.city} {this.props.userData.state} </span>
              </div>
              <div className="profile-label-container">
              <label className="profile-labels">About Me</label>
              <span className="profile-label-data">{this.props.userData.bio}</span>
              </div>
              <button onClick={()=>{this.setState({edit: true})}}>Edit Profile</button>
          </section>
      }
  }

  onSubmit(values) {
      console.log("triggered")
    const {city, state, bio, phoneNumber} = values
    const userData = {city, state, bio, id: this.props.currentUser._id, phone: phoneNumber}
    return this.props.dispatch(updateUserData(userData)).then(this.setState({edit: false}))
  }

  handleUploadFile = (event) => {
    const data = new FormData();
    data.append('file', event.target.files[0]);
    data.append('id', this.props.currentUser._id)
    // '/files' is your node.js route that triggers our middleware
    axios.post(`${API_BASE_URL}/files`, data).then((response) => {
      axios.post(`${API_BASE_URL}/profilePic`, {id: this.props.currentUser._id, profilePicUrl: response.data})
      .then((response)=> {this.props.dispatch(fetchPic(this.props.currentUser._id))})

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
      <div>
      <div className="pic-container">
          <label htmlFor="profilePic" id="profilePiclbl">Profile Pic</label>
          <img src={this.props.profilePic} className="profilePic" alt='Sample Image'/>
          <input type="file" onChange={this.handleUploadFile} accept="image/*" />   
      </div>
        {this.setEditView(error)}
      </div>
  );
  }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    currentUser: state.auth.currentUser !== null ? state.auth.currentUser : "",
    userData: state.users.userData,
    profilePic: state.users.picUrl
});

export default connect (mapStateToProps)(reduxForm({
  form: 'profile',
  onSubmitFail: (errors, dispatch) => dispatch(focus('profile', 'firstName'))
})(Profile))