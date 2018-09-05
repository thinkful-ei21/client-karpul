import React from 'react';
import Profile from './profile';
import FindCarpools from './find-carpools';
import MyCarpools from './myCarpools';
import GPS from './GPS';
import Help from './help';
import './tab.css';
import {Route, withRouter} from 'react-router-dom';

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

  render(){
    const {history} = this.props;
    return (
      <div>
        <ul className="tabContainer">
          <li><a className={this.generateActiveStyle('profile')} onClick={() => {history.push('/dashboard/profile');this.setState({active: 'profile'}) }}>Profile</a></li>
          <li><a className={this.generateActiveStyle('findCarpools')} onClick={() => {history.push('/dashboard/find-carpool');this.setState({active: 'findCarpools'})}}>Find Karpüls</a></li>
          <li><a className={this.generateActiveStyle('myCarpools')} onClick={() => {history.push('/dashboard/my-carpools');this.setState({active: 'myCarpools'})}}>My Karpüls</a></li>          
          <li><a className={this.generateActiveStyle('help')} onClick={() => {history.push('/dashboard/help');this.setState({active: 'help'})}}>Help</a></li>
        </ul>        
        <Route exact path="/dashboard/profile" component={Profile} />
        <Route exact path="/dashboard/find-carpool" component={FindCarpools} />
        <Route exact path="/dashboard/my-carpools" component={MyCarpools} />
        <Route exact path="/dashboard/help" component={Help} />        
    </div>);
  }
}