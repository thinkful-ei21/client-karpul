import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import Tab from './tab';
import HeaderBar from './header-bar';


export class Dashboard extends React.Component {

        state = {
          active:'profile'
        };
    
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    changeTab = (tab, url) => {
        this.props.history.replace(url)
        this.setState({
            active: tab
        })
    }

    render() {
        return (
            <div className="dashboard">
                <div className="header-username">
                    {/* Welcome {this.props.username} */}
                </div>
                <HeaderBar />
                <Tab history={this.props.history} changeTab={this.changeTab}
                active={this.props.active || this.state.active}/>
            </div>

        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data,

    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
