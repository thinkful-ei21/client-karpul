import React from 'react';
import Profile from './profile';
import FindCarpools from './find-carpools';
import MyCarpools from './myCarpools';
import {connect} from 'react-redux';
import {fetchNearbyCarpools} from '../actions/carpools';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import './tab.css';
export class Tab extends React.Component{

  generateActiveStyle(tab){
    if(tab === this.props.active){
      return 'active';
    }
  }

  menuFunction() {
    var x = document.getElementById("tabContainer");
    if (x.className === "tabContainer") {
        x.className += " responsive";
        x.classList.toggle("change")
    } else {
        x.className = "tabContainer";
    }
}

  renderTabComponent(){
    switch(this.props.active){
      case 'profile':
      return <Profile />
      break;
      case 'findCarpools':
      return <FindCarpools />
      break;
      case 'myCarpools':
      return <MyCarpools />
      break;
    }
  }

  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render(){
    let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button className="log-out-button" onClick={() => this.logOut()}>Logout</button>
            );
        }
    return (
      <div role="complementary" aria-live="polite">
        <ul className="tabContainer" id="tabContainer">
          <li className="first-menu-spot"></li>
          <li><a className={this.generateActiveStyle('profile')} 
            onClick={() => this.props.changeTab('profile', '/profile')}>Profile</a></li>
          <li><a className={this.generateActiveStyle('findCarpools')} 
            onClick={() => { const values = {fromTime: "09:00:00", toTime: "17:00:00", searchRadius: "5", proximitySearch: "", days: Array(0)}
            fetchNearbyCarpools(values);
              this.props.changeTab('findCarpools', '/find-carpools')}}>Find Karpüls</a></li>
          <li><a className={this.generateActiveStyle('myCarpools')} 
            onClick={() => this.props.changeTab('myCarpools', '/my-carpools')}>My Karpüls</a></li>
          <li><a className={this.generateActiveStyle('logout')}>{logOutButton}</a></li>
          <li className="icon-li"><a className="icon" 
            onClick={() => this.menuFunction()}>
            <div className="burger">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
            </a></li>
        </ul>
        {this.renderTabComponent()}
    </div>);
  }
}

const mapStateToProps = state => (
  {
    loggedIn: state.auth.currentUser !== null
  });


export default connect(mapStateToProps)(Tab);