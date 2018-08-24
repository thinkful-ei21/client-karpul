import React from 'react';
import { fetchNearbyCarpools } from '../actions/carpools';
import {connect} from 'react-redux';



export class FindCarpools extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchNearbyCarpools());
    // each carpool card will link to:
    // <Link to={`/${this.props.nearbyCarpools.id}`} />
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.value)
  }

  render(){
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
      <input/>
      <button type="submit">Test</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  nearbyCarpools: state.carpools.nearbyCarpools
})

export default connect(mapStateToProps)(FindCarpools);