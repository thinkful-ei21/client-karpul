import React from 'react';
import {connect} from 'react-redux';
import {hideModal, showModal} from '../actions/modals'
import './profile.css';

export function FindCarpoolProfileModal(props){
    console.log(props.carpool)
    return (
      <div className="profile-modal">
      <div className="pic-container">
         <h2>{props.carpool.host.username}</h2>
          <img src={props.carpool.host.profilePicUrl} className="profilePic" alt='Sample Image'/> 
      </div>
      <section className="login-form profile-modal-container">
              <div className="profile-label-container">
              <label className="profile-labels">Name</label>
              <span className="profile-label-data">{props.carpool.host.firstName} {props.carpool.host.lastName}</span>
              </div>
              {/* <div className="profile-label-container">
              <label className="profile-labels">Phone Number</label>
              <span className="profile-label-data">{props.carpool.host.phone}</span>
              </div> */}
              <div className="profile-label-container">
              <label className="profile-labels">Location</label>
              <span className="profile-label-data">{props.carpool.host.city} {props.carpool.host.state} </span>
              </div>
              <div className="profile-label-container">
              <label className="profile-labels">About {props.carpool.host.firstName}</label>
              <span className="profile-label-data">{props.carpool.host.bio}</span>
              </div>
              <button onClick={() => props.dispatch(showModal('find-carpool-modal', props.carpool))}>Close</button>
          </section>
      </div>
  );
}


export default connect ()(FindCarpoolProfileModal)