import React, { Component } from 'react'
import { connect } from 'react-redux'
import Example from './example'
import CarpoolForm from './carpool-form';
import ProfileModal from './profile-modal';

// import {setEventEditIndex} from '../actions/event-list'

import './modal.css'


class Modal extends Component {
  setPage() {
    if (this.props.page === 'example'){
      return <Example />
    }
    if (this.props.page === 'carpool-form') {
      return <CarpoolForm />
    }
    if (this.props.page === "profile-modal"){
      return <ProfileModal  user={this.props.id}/>
    }
  }
  render() {

    return (
      <div className="modal">
        { this.props.isShowing &&
          <div>
            <div className="modal-backdrop"></div>
            <div className="confirm-modal-content">
            {this.setPage()} 
            </div>
          </div>
        }
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    isShowing: state.modals.isShowing,
    page: state.modals.page,
    id: state.modals.id
  }
}

export default connect(mapStateToProps)(Modal)