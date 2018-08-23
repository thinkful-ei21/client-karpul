import React from 'react';
import { fetchNearbyCarpools } from '../actions/carpools';
import {connect} from 'react-redux';



export class FindCarpools extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchNearbyCarpools());
    // each carpool card will link to:
    // <Link to={`/${this.props.nearbyCarpools.id}`} />
  }

  render(){
    return <div>FindCarpools</div>;
  }
}

const mapStateToProps = state => ({
  nearbyCarpools: state.carpools.nearbyCarpools
})

export default connect(mapStateToProps)(FindCarpools);