import React from 'react';
import CarpoolForm from './carpool-form';
import {  fetchUserCarpools  } from '../actions/carpools';
import './my-carpools.css';
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

  removeCarpool() {
    console.log('remove button reached');
  }

  renderResults() {

    if (this.props.error) {
        return <strong>{this.props.error}</strong>;
    }
    const userCarpools = this.props.carpools.userCarpools;
    console.log('userCarpools: ',userCarpools)
    const carpool = userCarpools.map((carpool, index) => (
    <li className="carpool-result"
      key={index}>
      <div className="carpool-item">
          <div className="carpool-item-text">
            <button
              onClick={e => this.removeCarpool(carpool)}
              className="remove-button"> - </button>
            <h2 className="title">{carpool.carpoolTitle}</h2>
            <span className="arrival-time"><span className="arrival-title">Destination Arrival Time: </span>{carpool.arrivalTime}</span><br/>
            <span className="address"><span className="address-title">Start Address: </span>{carpool.startAddress.streetNumber} {carpool.startAddress.streetName} {carpool.startAddress.city}, {carpool.startAddress.state} {carpool.startAddress.zipcode}
            </span><br/>
            <span className="address"><span className="address-title">End Address: </span>{carpool.endAddress.streetNumber} {carpool.endAddress.streetName} {carpool.endAddress.city}, {carpool.endAddress.state} {carpool.endAddress.zipcode}
            </span><br/>
            <span className="carpool-details"><span className="details-title">Details: </span>{carpool.details}</span><br/>
          </div>
        </div>
      </li>
    ));

    return  <ul className="carpool-list"> {carpool} </ul>;
}

  render(){

    return (
      <div className="carpool-results" aria-live="polite" aria-atomic="true" role="complementary">
        <button onClick={this.createCarpool}>Create Carpool</button>
        {/* <CarpoolForm />  */}
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