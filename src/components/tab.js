import React from 'react';
import Profile from './profile';
import FindCarpools from './find-carpools';
import MyCarpools from './myCarpools';
import './tab.css';

export default class Tab extends React.Component{

  generateActiveStyle(tab){
    if(tab === this.props.active){
      return 'active';
    }
  }

  menuFunction() {
    var x = document.getElementById("tabContainer");
    if (x.className === "tabContainer") {
        x.className += " responsive";
    } else {
        x.className = "tabContainer";
    }
}

  renderTabComponent(){
    console.log(this.props)
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

  render(){
    console.log(this.props)
    return (
      <div>
        <ul className="tabContainer" id="tabContainer">
          <li className="first-menu-spot"></li>
          <li><a className={this.generateActiveStyle('profile')} 
            onClick={() => this.props.changeTab('profile', '/profile')}>Profile</a></li>
          <li><a className={this.generateActiveStyle('findCarpools')} 
            onClick={() => this.props.changeTab('findCarpools', '/find-carpools')}>Find Karpüls</a></li>
          <li><a className={this.generateActiveStyle('myCarpools')} 
            onClick={() => this.props.changeTab('myCarpools', '/my-carpools')}>My Karpüls</a></li>
          <li className="icon-li"><a className="icon" 
            onClick={() => this.menuFunction()}>Menu</a></li>
        </ul>
        {this.renderTabComponent()}
    </div>);
  }
}