import React from 'react';
import {connect} from 'react-redux';
import {fetchOneCarpool} from '../actions/carpools';

export class CarpoolPage extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchOneCarpool(this.props.match.params.carpool));
  }

  render() {
    return (
      <div>test</div>
    )
  }
  
}

const mapStateToProps = state => ({
  carpool: state.carpool.selectedCarpool
})

export default connect(mapStateToProps)(CarpoolPage);