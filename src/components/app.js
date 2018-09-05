import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import HeaderBar from './header-bar';
import LandingPage from './landing-page';
import Dashboard from './dashboard';
import RegistrationPage from './registration-page';
import CarpoolPage from './carpool-page';
import {refreshAuthToken} from '../actions/auth';
import MyCarpools from './myCarpools';
import Help from './help';
import FindCarpools from './find-carpools';
import Profile from './profile';
import Modal from './modal';
import './app.css';

export class App extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

    render() {
        return (
            <div className="app">
                <HeaderBar />
                <Modal />
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/dashboard" component={(props) => <Dashboard active={'profile'} {...props}/>} />
                <Route exact path="/profile" component={(props) => <Dashboard active={'profile'} {...props}/>} />
                <Route exact path="/find-carpools" component={(props) => <Dashboard active={'findCarpools'} {...props}/>} />
                <Route exact path="/my-carpools" component={(props) => <Dashboard active={'myCarpools'} {...props}/>} />
                {/* <Route exact path="/gps" component={(props) => <Dashboard active={'gps'} {...props}/>} /> */}
                <Route exact path="/help" component={(props) => <Dashboard active={'help'} {...props}/>} />
                <Route exact path="/register" component={RegistrationPage} />
                <Route path="/carpools/:carpool" component={CarpoolPage} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
