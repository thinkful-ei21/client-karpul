import React from 'react';
import {showModal} from '../actions/modals'
import {connect} from 'react-redux';

export class GPS extends React.Component{

  render(){
    return (<div>
      <button onClick={()=>this.props.dispatch(showModal("example"))}>Modal Example</button>
    </div>)
  }
}

export default connect()(GPS);