import React from 'react';
import {connect} from 'react-redux';
import {hideModal} from '../actions/modals'
import './profile.css';

export function HostProfileModal(props){
    
    return (
      <div className="profile-modal">
      <div className="pic-container">
         <h2>{props.user.username}</h2>
        <span role="button" className="modal-close" onClick={() => props.dispatch(hideModal())}> X </span>
        <img src={props.user.profilePicUrl} className="profilePic" alt='User Profile'/> 
      </div>
      <section className="login-form profile-modal-container">
              <div className="profile-label-container">
              <label className="profile-labels">Name</label>
              <span className="profile-label-data">{props.user.firstName} {props.user.lastName}</span>
              </div>
              <div className="profile-label-container">
              <label className="profile-labels">Location</label>
              <span className="profile-label-data">{props.user.city} {props.state} </span>
              </div>
              <div className="profile-label-container">
              <label className="profile-labels">About {props.user.firstName}</label>
              <span className="profile-label-data">{props.user.bio}</span>
              </div>
              <button onClick={() => props.dispatch(hideModal())}>Close</button>
          </section>
      </div>
  );
}


export default connect ()(HostProfileModal)