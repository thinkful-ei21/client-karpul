import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CarpoolForm from './carpool-form';
import {  fetchUserCarpools, deleteCarpool, leaveCarpool  } from '../actions/carpools';
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

  notifyLeave = () => {
    return toast.success(`You left ${this} group`, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: true
    });
  }

  notifyRemove = () => {
    return toast.success(`You removed ${this} group`, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: true
    });
  }

  renderResults() {

    if (this.props.error) {
        return <strong>{this.props.error}</strong>;
    }
    const userCarpools = this.props.carpools.userCarpools;
    console.log(userCarpools)
    const carpool = userCarpools.map((carpool, index) => (
    <li className="carpool-result"
      key={index}>
      <div className="carpool-item">
        <div className="carpool-item-text">
          <h2 className="title">{carpool.carpoolTitle}</h2>
          <span className="days"><span className="days-title">Days: </span>{carpool.days.map((day) => `${day} `)}</span><br/>
          <span className="arrival-time"><span className="arrival-title">Destination Arrival Time: </span>{carpool.arrivalTime}</span><br/>
          <span className="open-seats"><span className="seats-title">Open Seats: </span>{carpool.openSeats}</span><br/>
          <span className="address"><span className="address-title">Start Address: </span>{carpool.startAddress.streetNumber} {carpool.startAddress.streetName} {carpool.startAddress.city}, {carpool.startAddress.state} {carpool.startAddress.zipcode}
          </span><br/>
          <span className="address"><span className="address-title">End Address: </span>{carpool.endAddress.streetNumber} {carpool.endAddress.streetName} {carpool.endAddress.city}, {carpool.endAddress.state} {carpool.endAddress.zipcode}
          </span><br/>
          <span className="carpool-details"><span className="details-title">Details: </span>{carpool.details}</span><br/>
          {/* <span className="carpool-details"><span className="details-title">Host: 
          </span>{<img src={carpool.host.profilePicUrl} onClick={()=>{this.props.dispatch(showModal("profile-modal", carpool.host))}} className="members-images"/>}</span><br/> */}
          <span className="carpool-details"><span className="details-title">Members: 
          </span>{carpool.users.map((user, index)=> {
            if(user.id === carpool.host.id){
              return <div className="hosttip" key="host"><img className="members-images" src={user.profilePicUrl} key={index} onClick={()=>{this.props.dispatch(showModal("profile-modal", user))}}/><span className="hosttiptext">Host</span></div>
            } else {
              return <img className="members-images" src={user.profilePicUrl} key={index} onClick={()=>{this.props.dispatch(showModal("profile-modal", user))}}/>
            }
           })}</span><br/>
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