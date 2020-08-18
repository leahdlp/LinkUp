import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {

    loggedIn(user) {
        let logout = this.props.logout;
        return (
            <div className="loggedIn-header">
                <h2>Welcome aboard! {user.first_name} {user.last_name}</h2>
                <button className="logout-btn" onClick={() => this.props.logout()}>Log Out!</button>
            </div>
        )
    }

    loggedOut() {
        return (
            <div className="login-signup-header">
                <div className="nav-btns">
                    <Link to="/signup">Sign up</Link>
                    <Link to="/login">Log in</Link>
                </div>
            </div>
        )
    }

    render () {
        let user = this.props.currentUser;
        let greeting = user ? this.loggedIn(user) : this.loggedOut();
        return greeting;
    }
}

export default NavBar;