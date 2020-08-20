import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {

    loggedIn(user) {
        // let logout = this.props.logout;
        return (
            <div className="loggedIn-header">
                <h2>Welcome aboard! {user.first_name} {user.last_name}</h2>
                <Link 
                    to="/"
                    className="logout-btn" 
                    onClick={() => this.props.logout()}
                >
                    Log out
                </Link>
            </div>
        )
    }

    loggedOut() {
        return (
            <div className="login-signup-header">
                <div className="nav-btns">
                    <Link to="/login" id="login-link">Log in</Link>
                    <Link to="/signup" id="signup-link">Sign up</Link>
                </div>
            </div>
        )
    }

    render () {
        let user = this.props.currentUser;
        let nav = user ? this.loggedIn(user) : this.loggedOut();
        return nav;
    }
}

export default NavBar;