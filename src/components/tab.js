import React from 'react';
import Profile from './profile';
import FindCarpools from './find-carpools';
import MyCarpools from './myCarpools';
import GPS from './GPS';
import Help from './help';
import './tab.css';

export default class Tab extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      active:'profile'
    };
  }

  generateActiveStyle(tab){
    if(tab === this.state.active){
      return 'active';
    }
  }

  renderTabComponent(){
    switch(this.state.active){
      case 'profile':
      return <Profile />
      break;
      case 'findCarpools':
      return <FindCarpools />
      break;
      case 'myCarpools':
      return <MyCarpools />
      break;
      case 'GPS':
      return <GPS />
      break;
      case 'help':
      return <Help />
      break;
    }
  }

  render(){
    return (
      <div>
        <ul className="tabContainer">
          <li><a className={this.generateActiveStyle('profile')} onClick={() => this.setState({active: 'profile'})}>Profile</a></li>
          <li><a className={this.generateActiveStyle('findCarpools')} onClick={() => this.setState({active: 'findCarpools'})}>Find Karpüls</a></li>
          <li><a className={this.generateActiveStyle('myCarpools')} onClick={() => this.setState({active: 'myCarpools'})}>My Karpüls</a></li>
          <li><a className={this.generateActiveStyle('GPS')} onClick={() => this.setState({active: 'GPS'})}>GPS</a></li>
          <li><a className={this.generateActiveStyle('help')} onClick={() => this.setState({active: 'help'})}>Help</a></li>
        </ul>
        {this.renderTabComponent()}
    </div>);
  }
}