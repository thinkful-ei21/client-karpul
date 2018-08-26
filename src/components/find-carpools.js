import React from 'react';
import { fetchNearbyCarpools } from '../actions/carpools';
import {connect} from 'react-redux';
import ProximitySearchForm from './proximity-search-form';
import './carpools.css';
import Maps from './maps';
class FindCarpools extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null,
      errorMessage: '',
      nearbyCarpools: []
    }

  }
  componentDidMount() {
    console.log(this.props.nearbyCarpools)
  }

  joinCarpool() {
    console.log('Join carpool')
  }

  renderResults() {

    if (this.props.error) {
      return <strong>{this.props.error}</strong>;
    }
    // const nearbyCarpools = this.props.carpools.nearbyCarpools;
    // console.log('nearbyCarpools: ',nearbyCarpools)
    // const carpool = nearbyCarpools.map((carpool, index) => (
    // <li className="carpool-result"
    //   key={index}>
    //   <div className="carpool-item">
    //       <div className="carpool-item-text">
    //         <button
    //           onClick={e => this.joinCarpool(carpool)}
    //           className="remove-button"> + </button>
    //         <h2 className="title">{carpool.carpoolTitle}</h2>
    //         <span className="arrival-time"><span className="arrival-title">Destination Arrival Time: </span>{carpool.arrivalTime}</span><br/>
    //         <span className="address"><span className="address-title">Start Address: </span>{carpool.startAddress.streetNumber} {carpool.startAddress.streetName} {carpool.startAddress.city}, {carpool.startAddress.state} {carpool.startAddress.zipcode}
    //         </span><br/>
    //         <span className="address"><span className="address-title">End Address: </span>{carpool.endAddress.streetNumber} {carpool.endAddress.streetName} {carpool.endAddress.city}, {carpool.endAddress.state} {carpool.endAddress.zipcode}
    //         </span><br/>
    //         <span className="carpool-details"><span className="details-title">Details: </span>{carpool.details}</span><br/>
    //       </div>
    //     </div>
    //   </li>
    // ));

    // return  <ul className="carpool-list"> {carpool} </ul>;
}
coor = [
  {longitude:-73.43,
  latitude: 40}
]
  render(){

    return (
      <div className="carpool-results" aria-live="polite" aria-atomic="true" role="complementary">
        <h1>Find Carpools</h1>
        <ProximitySearchForm />
        <Maps coordinates={this.coor}/>
        <ul className="carpool-item">
          {this.renderResults()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  nearbyCarpools: state.carpools.nearbyCarpools
})

export default connect(mapStateToProps)(FindCarpools);
