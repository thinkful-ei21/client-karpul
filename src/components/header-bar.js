import React from 'react';
import './header-bar.css';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import ProximitySearchForm from './proximity-search-form'

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()}>Log out</button>
            );
        }
        return (
            <div className="header-bar" role="banner" aria-live="polite" aria-atomic="true">
                <ProximitySearchForm />
                <h1>Karpul</h1>
                {logOutButton}
            </div>
        );
    }
}

const mapStateToProps = state => (
    {
        loggedIn: state.auth.currentUser !== null
});


export default connect(mapStateToProps)(HeaderBar);
