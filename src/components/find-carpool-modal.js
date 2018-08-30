import React from 'react';
import {connect} from 'react-redux';
import { joinCarpool } from '../actions/carpools';
import {hideModal} from '../actions/modals'
import { ToastContainer, toast } from 'react-toastify';
import {showModal} from '../actions/modals';
import './carpools.css';

export function FindCarpoolModal(props){

    function renderArrivalTime(arrivalTime){
      if( arrivalTime.hrs){
        if(arrivalTime.mins < 10){
          return arrivalTime.hrs + ':0' + arrivalTime.mins;
        }
        return arrivalTime.hrs + ':' + arrivalTime.mins;
      }
      return arrivalTime;
    }

    function notify ()  {
        return toast.success(`You Joined ${this} Group`, {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: true
        });
      }
    console.log(props.carpool)
    return (
        <div className="carpool-item">
        <div className="carpool-item-text">
          <button
            onClick={() => {
              notify();
              props.dispatch(joinCarpool(props.carpool.id))
            }
          }
            className="join-button">Join</button>
          <h2 className="title">{props.carpool.carpoolTitle}</h2>
          <span className="days"><span className="days-title">Days: </span>{props.carpool.days.map((day) => `${day} `)}</span><br/>
          <span className="arrival-time"><span className="arrival-title">Destination Arrival Time: </span>{renderArrivalTime(props.carpool.arrivalTime)}</span><br/>
          <span className="open-seats"><span className="seats-title">Open Seats: </span>{props.carpool.openSeats}</span><br/>
          <span className="address"><span className="address-title">Start Address: </span>{props.carpool.startAddress.streetAddress} {props.carpool.startAddress.city}, {props.carpool.startAddress.state}
          </span><br/>
          <span className="address"><span className="address-title">End Address: </span>{props.carpool.endAddress.streetAddress} {props.carpool.endAddress.city}, {props.carpool.endAddress.state}
          </span><br/>
          <span className="carpool-details"><span className="details-title">Details: </span>{props.carpool.details}</span><br/>
          <span className="carpool-details"><span className="details-title">Host: 
          </span>{<img src={props.carpool.host.profilePicUrl} onClick={()=>{props.dispatch(showModal("find-carpool-profile-modal", props.carpool))}} className="members-images"/>}</span><br/>
          <button onClick={() => props.dispatch(hideModal())}>Close</button>
        </div>
       
      </div>
  );
}


export default connect ()(FindCarpoolModal)