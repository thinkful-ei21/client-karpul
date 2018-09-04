import React from 'react';
import Profile from './profile';
import FindCarpools from './find-carpools';
import MyCarpools from './myCarpools';
import GPS from './GPS';
import Help from './help';
import './tab.css';

export default class Tab extends React.Component{

  generateActiveStyle(tab){
    if(tab === this.props.active){
      return 'active';
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
      // case 'GPS':
      // return <GPS />
      // break;
      case 'help':
      return <Help />
      break;
    }
  }

  render(){
    console.log(this.props)
    return (
      <div>
        <ul className="tabContainer">
          <li><a className={this.generateActiveStyle('profile')} 
            onClick={() => this.props.changeTab('profile', '/profile')}>Profile</a></li>
          <li><a className={this.generateActiveStyle('findCarpools')} 
            onClick={() => this.props.changeTab('findCarpools', '/find-carpools')}>Find Karpüls</a></li>
          <li><a className={this.generateActiveStyle('myCarpools')} 
            onClick={() => this.props.changeTab('myCarpools', '/my-carpools')}>My Karpüls</a></li>
          {/* <li><a className={this.generateActiveStyle('GPS')} 
            onClick={() => this.props.changeTab('GPS', '/gps')}>GPS</a></li> */}
          <li><a className={this.generateActiveStyle('help')} 
            onClick={() => this.props.changeTab('help', '/help')}>Help</a></li>
        </ul>
        {this.renderTabComponent()}
    </div>);
  }
}