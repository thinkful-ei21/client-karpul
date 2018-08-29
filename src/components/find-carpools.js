import React from 'react';
import { joinCarpool } from '../actions/carpools';
import {connect} from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {showModal} from '../actions/modals';
import ProximitySearchForm from './proximity-search-form';
import './carpools.css';
import Maps from './maps';
class FindCarpools extends React.Component {

  componentDidMount() {
    // console.log(this.props.nearbyCarpools)
  }

  notify = () => {
    return toast.success(`You Joined ${this} Group`, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: true
    });
  }

  renderResults() {

    if (this.props.error) {
      return <strong>{this.props.error}</strong>;
    }

    const nearbyCarpools = this.props.nearbyCarpools;
    const carpool = nearbyCarpools.map((carpool, index) => (
    <li className="carpool-result"
      key={index}>
      <div className="carpool-item">
        <div className="carpool-item-text">
          <button
            onClick={() => {
              this.notify();
              this.props.dispatch(joinCarpool(carpool.id))
            }
          }
            className="join-button">Join</button>
          <h2 className="title">{carpool.carpoolTitle}</h2>
          <span className="days"><span className="days-title">Days: </span>{carpool.days.map((day) => `${day} `)}</span><br/>
          <span className="arrival-time"><span className="arrival-title">Destination Arrival Time: </span>{carpool.arrivalTime}</span><br/>
          <span className="open-seats"><span className="seats-title">Open Seats: </span>{carpool.openSeats}</span><br/>
          <span className="address"><span className="address-title">Start Address: </span>{carpool.startAddress.streetNumber} {carpool.startAddress.streetName} {carpool.startAddress.city}, {carpool.startAddress.state} {carpool.startAddress.zipcode}
          </span><br/>
          <span className="address"><span className="address-title">End Address: </span>{carpool.endAddress.streetNumber} {carpool.endAddress.streetName} {carpool.endAddress.city}, {carpool.endAddress.state} {carpool.endAddress.zipcode}
          </span><br/>
          <span className="carpool-details"><span className="details-title">Details: </span>{carpool.details}</span><br/>
          <span className="carpool-details"><span className="details-title">Host: 
          </span>{<img src={carpool.host.profilePicUrl} onClick={()=>{this.props.dispatch(showModal("profile-modal", carpool.host))}} className="members-images"/>}</span><br/>
        </div>
       
      </div>
    </li>
  ));

    return  <ul className="carpool-list"> {carpool} </ul>;
}
coor = [
  {longitude:-73.43,
  latitude: 40},
  {
    longitude:-73.43,
    latitude: 41
  },
  {
    longitude:-72.43,
    latitude: 41.45
  },
]
  render(){

    if (this.props.nearbyCarpools) {
      this.props.nearbyCarpools.map((carpool, index) => {
        console.log(`${index}: ${carpool.startAddress.location.coordinates}`)
      })
    }

    return (
      <div>

        <ProximitySearchForm />

        <div className="coor">
          <Maps coordinates={this.coor}/>
        </div>
        <ToastContainer />
        <div className="carpool-results" aria-live="polite" aria-atomic="true" role="complementary">

          <ul className="carpool-item">
           {this.renderResults()}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  nearbyCarpools: state.carpools.nearbyCarpools
})

export default connect(mapStateToProps)(FindCarpools);
