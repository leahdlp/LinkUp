import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {

    loggedIn(user) {
        return (
            <div className="loggedIn-header">
                <div id="logo">
                    <h2>Welcome aboard! {user.name}</h2>
                </div>
                <div id="nav-links-container">
                    <Link
                        id="special-offer"
                        to="/"
                    >
                        Start a new group 50% OFF
                    </Link>
                    <Link 
                        id="explore"
                        to="/"
                    >
                        Explore
                    </Link>
                    <Link 
                        id="messages"
                        to="/"
                    >
                        Messages
                    </Link>
                    <Link 
                        to="/"
                        className="logout-btn" 
                        onClick={() => this.props.logout()}
                    >
                        Log out
                    </Link>
                    <div className="profile-dropdown">
                        <button className="dropbtn">
                            Drop Icon
                        </button>
                        <div className="dropdown-content">
                            <button onClick={()=>(this.props.history.push("/"))}>
                                Profile
                            </button>
                            <button onClick={()=>(this.props.history.push("/"))}>
                                Log out
                            </button>                            
                            <button onClick={()=>(this.props.history.push("/"))}>
                                LinkedIn
                            </button>                            
                            <button onClick={()=>this.props.history.push("/")}>
                                Github
                            </button>
                            <button onClick={()=>(this.props.history.push("/"))}>
                                AngelList
                            </button>
                        </div>
                    </div>
                </div>
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