import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CarpoolForm from './carpool-form';
import {  fetchUserCarpools, deleteCarpool, leaveCarpool  } from '../actions/carpools';
import {requestRequest} from '../actions/request';
import './carpools.css';
import {showModal} from '../actions/modals';
import { connect } from 'react-redux';

class MyCarpools extends React.Component{
  constructor(props) {
    super(props)

    this.state = { 
      currentUser: null,
      errorMessage: '',
      carpools: []
    }

  }

  componentDidMount() {
    this.getMyCarpools();
  }

  getMyCarpools() {
    return this.props.dispatch(fetchUserCarpools());
  }

  createCarpool() {
    return <CarpoolForm />
  }

  leaveCarpool(id) {
    return this.props.dispatch(leaveCarpool(id))
    .then(this.notifyLeave())
    .then(this.props.dispatch(fetchUserCarpools()))
  }

  removeCarpool(id) {
    return this.props.dispatch(deleteCarpool(id))
    .then(this.notifyRemove())
    .then(this.props.dispatch(fetchUserCarpools()))
  }

  acceptRequest(carpoolId, userId) {
    return this.props.dispatch(requestRequest(carpoolId, userId, true))
  }

  denyRequest(carpoolId, userId) {
    return this.props.dispatch(requestRequest(carpoolId, userId, false))
  }

  notifyLeave = () => {
    return toast.success(`Leaving Group`, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: true
    });
  }

  notifyRemove = () => {
    return toast.success(`Removing Group`, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: true
    });
  }

  renderArrivalTime(arrivalTime){
    if( arrivalTime.hrs){
      if(arrivalTime.mins < 10){
        return arrivalTime.hrs + ':0' + arrivalTime.mins;
      }
      return arrivalTime.hrs + ':' + arrivalTime.mins;
    }
    return arrivalTime;
  }
  renderResults() {

    if (this.props.error) {
        return <strong>{this.props.error}</strong>;
    }
    const userCarpools = this.props.carpools.userCarpools;
    const carpool = userCarpools.map((carpool, index) => (
    <li className="carpool-result"
      key={index}>
      <div className="carpool-item">
        <div className="carpool-item-text">
          <h2 className="title">{carpool.carpoolTitle}</h2>
          <span className="days"><span className="days-title">Days: </span>{carpool.days.map((day) => `${day} `)}</span><br/>
          <span className="arrival-time"><span className="arrival-title">Destination Arrival Time: </span>{`${this.renderArrivalTime(carpool.arrivalTime)}`}</span><br/>
          <span className="open-seats"><span className="seats-title">Open Seats: </span>{carpool.openSeats}</span><br/>
          <span className="address"><span className="address-title">Start Address: </span>{carpool.startAddress.streetAddress} {carpool.startAddress.city}, {carpool.startAddress.state}
          </span><br/>
          <span className="address"><span className="address-title">End Address: </span>{carpool.endAddress.streetAddress} {carpool.endAddress.city}, {carpool.endAddress.state}
          </span><br/>
          <span className="carpool-details"><span className="details-title">Details: </span>{carpool.details}</span><br/>
          <span className="carpool-details"><span className="details-title">Members: </span>
          {carpool.users.map((user, index)=> {
            if(user.id === carpool.host.id){
              return (
                <div key={index} >
                  <div className="hosttip" key="host">
                  <img className="members-images" src={user.profilePicUrl} key={index} onClick={()=>{this.props.dispatch(showModal("profile-modal", user))}}/><span className="hosttiptext">Host</span>
                  </div>
                  {/* <span className="requests">
                      <span className="request-title">Pending Requests: </span>
                        {carpool.pendingRequests.map((member, index) => {
                        return (
                            <div key={index} >
                              <img className="members-images" src={member.profilePicUrl} key={index} 
                                onClick={()=>{this.props.dispatch(showModal("profile-modal", user))}}/>
                              <button
                                onClick={e => this.acceptRequest(carpool.id, member.id, true)}
                                className="accept-button">Accept</button>
                              <button
                                onClick={e => this.denyRequest(carpool.id, member.id, false)}
                                className="deny-button">Deny</button>
                            </div>
                            )
                          })
                        }
                    </span><br/> */}
                </div>
                )
              } else {
                return (
                  <div className="member-request" key={index} >
                    <img className="members-images" src={user.profilePicUrl} key={index} onClick={()=>{this.props.dispatch(showModal("profile-modal", user))}}/>
                  </div>
                )
              }
            })}
            {carpool.users.map((user, index)=> {
            if(carpool.pendingRequests.length >= 1 )  {
            if((this.props.currentUser._id === carpool.host.id) && (carpool.pendingRequests)) {
              return (
                <div key={index} >
                  <span className="requests">
                    <span className="request-title">Pending Requests: </span>
                      {carpool.pendingRequests.map((member, index) => {
                      return (
                        <div key={index} >
                          <img className="request-members-images" src={member.profilePicUrl} key={index} 
                            onClick={()=>{this.props.dispatch(showModal("profile-modal", user))}}/>
                          <button
                            onClick={e => this.acceptRequest(carpool.id, member.id, true)}
                            className="accept-button">Accept</button>
                          <button
                            onClick={e => this.denyRequest(carpool.id, member.id, false)}
                            className="deny-button">Deny</button>
                        </div>
                      )})}
                    </span><br/>
                </div>
              )} 
            }
            })}
            </span>
           <br/>
        </div>
        {
        this.props.currentUser._id === carpool.host.id
        ? <button
            onClick={e => this.removeCarpool(carpool.id)}
            className="leave-button">Remove</button>
        : <button
            onClick={e => this.leaveCarpool(carpool.id)}
            className="leave-button">Leave</button>
        }
      </div>
    </li>
  ));

    return  <div>
              <ul className="carpool-list"> {carpool} </ul>
            </div>;
}

  render(){

    return (
      <div className="carpool-results" aria-live="polite" aria-atomic="true" role="complementary">
        <ToastContainer />
        <button onClick={()=>this.props.dispatch(showModal("carpool-form"))}>Create Karpül</button>
        <ul className="carpool-item">
          {this.renderResults()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const user = state.auth.currentUser;
  return {
    carpools: state.carpools,
    currentUser: user,
    loggedIn: user !== null
  };

}

export default connect(mapStateToProps)(MyCarpools)