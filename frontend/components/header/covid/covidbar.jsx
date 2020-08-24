import React from 'react'
import { Link } from 'react-router-dom'

class CovidBar extends React.Component {

    // loggedIn(user) {
    //     let logout = this.props.logout;
    //     return (
    //         <div className="loggedIn-">
    //             <h2>Welcome aboard! {user.first_name} {user.last_name}</h2>
    //             <button className="logout-btn" onClick={() => this.props.logout()}>Log Out!</button>
    //         </div>
    //     )
    // }

    loggedOut() {
        return (
            <div className="covid-alert">
                <label className="covid-alert-header">COVID-19 advisory
                    <p>
                        For the health and safety of Meetup communities, we're 
                        advising that all events be hosted online in the coming weeks. 
                    </p>
                </label>
            </div>
        )
    }

    render() {
        let user = this.props.currentUser;
        let alert = user ? "" : this.loggedOut();
        return alert;
    }
}

export default CovidBar;