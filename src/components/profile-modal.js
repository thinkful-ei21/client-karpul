import React from 'react';
import {connect} from 'react-redux';
import {hideModal} from '../actions/modals'
import './profile.css';

export function Profile(props){
    
    return (
      <div className="profile-modal">
      <div className="pic-container">
          <img src={props.profilePicUrl} className="profilePic" alt='Sample Image'/> 
      </div>
      <section className="login-form profile-container">
              <div className="profile-label-container">
              <label className="profile-labels">Name</label>
              <span className="profile-label-data">{props.firstName} {props.lastName}</span>
              </div>
              <div className="profile-label-container">
              <label className="profile-labels">Phone Number</label>
              <span className="profile-label-data">{props.phone}</span>
              </div>
              <div className="profile-label-container">
              <label className="profile-labels">Location</label>
              <span className="profile-label-data">{props.city} {props.state} </span>
              </div>
              <div className="profile-label-container">
              <label className="profile-labels">About {props.firstName}</label>
              <span className="profile-label-data">{props.bio}</span>
              </div>
              <button onClick={() => props.dispatch(hideModal())}>Close</button>
          </section>
      </div>
  );
}


export default connect ()(Profile)