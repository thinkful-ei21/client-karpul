import React from 'react';
import CarpoolForm from './carpool-form';
import {  fetchUserCarpools  } from '../actions/carpools';
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

  renderResults() {

    if (this.props.error) {
        return <strong>{this.props.error}</strong>;
    }

    console.log('userCarpools: ', this.props.carpools.userCarpools)
    // const carpool = this.props.carpools.map((carpool, index) => (
    // <li className="carpool-result"
    //   key={index}>
    //   <div className="carpool-item">
    //       <img className="carpool-item-map" src={carpool.map} alt={carpool.title}/>
    //       <div className="carpool-item-text">
    //         <span className="title">{carpool.carpoolTitle}</span><br/>
    //         <span className="arrival-time">{carpool.startAddress.arrivalTime}</span><br/>
    //         <h2>Start Address</h2>
    //         <span className="street-number">{carpool.startAddress.streetNumber}</span><br/>
    //         <span className="street-name">{carpool.startAddress.streetName}</span>
    //         <span className="city">{carpool.startAddress.city}</span><br/>
    //         <span className="state">{carpool.startAddress.state}</span><br/>
    //         <span className="zipcode">{carpool.startAddress.zipcode}</span>
    //         <h2>End Address</h2>
    //         <span className="street-number">{carpool.endAddress.streetNumber}</span><br/>
    //         <span className="street-name">{carpool.endAddress.streetName}</span>
    //         <span className="city">{carpool.endAddress.city}</span><br/>
    //         <span className="state">{carpool.endAddress.state}</span><br/>
    //         <span className="zipcode">{carpool.endAddress.zipcode}</span>
    //       </div>
    //     </div>
    //     <span
    //     onClick={e => this.removeCarpool(carpool)}
    //     className="remove-button"> - </span>
    //   </li>
    // ));

    // return  <ul className="collection-list"> {carpool} </ul>;
}

  render(){

    return (
      <div className="carpool-results" aria-live="polite" aria-atomic="true" role="complementary">
        <button onClick={this.createCarpool}>Create Carpool</button>
        <CarpoolForm />
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