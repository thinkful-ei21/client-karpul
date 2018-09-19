import React from 'react';
import './header-bar.css';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchPic} from '../actions/users'

export class HeaderBar extends React.Component {

    componentDidMount(){
        this.props.dispatch(fetchPic(this.props.username))
    }

    render() {
        return (
            <div className="header-bar" role="banner" aria-live="polite" aria-atomic="true">
                <Link to="/my-carpools" style={{ textDecoration: 'none' }}><h1>Karpül</h1></Link>
                {this.props.loggedIn
                ? <Link to="/profile" style={{ textDecoration: 'none' }} className="header-profile-pic-container"><img className="header-profile-pic" src={this.props.profilePic}/></Link>
                : ''}
            </div>
        );
    }
}

const mapStateToProps = state => (
    {
        loggedIn: state.auth.currentUser !== null,
        username: state.auth.currentUser !== null ? state.auth.currentUser.username : "",
        profilePic: state.users.picUrl
});


export default connect(mapStateToProps)(HeaderBar);
