import React from 'react';
import './header-bar.css';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import ProximitySearchForm from './proximity-search-form'
import {fetchPic} from '../actions/users'

export class HeaderBar extends React.Component {

    componentDidMount(){
        this.props.dispatch(fetchPic(this.props.username))
    }

    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <div>
                <div className="header-profile-pic-container"><img className="header-profile-pic" src={this.props.profilePic}/></div>
                <button className="log-out-button" onClick={() => this.logOut()}>Log out</button>
                </div>
            );
        }
        return (
            <div className="header-bar" role="banner" aria-live="polite" aria-atomic="true">
                <h1>Karpul</h1>
                {logOutButton}
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
