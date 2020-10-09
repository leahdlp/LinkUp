import React from 'react'
import { Link } from 'react-router-dom'

import SearchBar from '../../search_bar/search_bar'

class NavBar extends React.Component {

    loggedIn(user) {
        return (
          <div className="loggedIn-header">
            <div className="left-header">
              <div
                className="logo"
                onClick={() => this.props.history.push("/")}
              >
                {/* <i className="fab fa-meetup" id="logo-icon"></i> */}
              </div>
              <div className="search-bar-container">
                <SearchBar 
                  setKeyword={this.props.setKeyword}
                  history={this.props.history}
                />
              </div>
            </div>
            <div id="nav-links-container">
              <Link id="special-offer" to="/groups/new">
                Start a new group 50% OFF
              </Link>
              <Link id="explore" to="/">
                Explore
              </Link>
              <Link
                to="/"
                id="logout"
                className="logout-btn"
                onClick={() => this.props.logout()}
              >
                Log out
              </Link>
              <div className="dropdown">
                <button className="dropbtn">
                  <i className="fas fa-chevron-down"></i>
                </button>
                <div className="dropdown-content">
                  <button onClick={() => this.props.history.push("/")}>
                    Profile
                  </button>
                  <button onClick={() => this.props.logout()}>Log out</button>
                  <button onClick={() => this.props.history.push("/")}>
                    <i className="fab fa-linkedin"></i>
                    <a href="https://www.linkedin.com/in/leahdelapena/">
                      LinkedIn
                    </a>
                  </button>
                  <button onClick={() => this.props.history.push("/")}>
                    <i className="fab fa-github-square"></i>
                    <a href="https://github.com/leahdlp">Github</a>
                  </button>
                  <button
                    id="last-dropdown"
                    onClick={() => this.props.history.push("/")}
                  >
                    <i className="fab fa-angellist"></i>
                    <a href="https://angel.co/u/leah-de-la-pena">AngelList</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
    }

    loggedOut() {
        return (
          <div className="login-signup-header">
            <div 
                className="logo"
                onClick={() => this.props.history.push("/")}>
              {/* <i className="fab fa-meetup" id="logo-icon"></i> */}
            </div>
            <div className="nav-btns">
              <Link to="/login" id="login-link">
                Log in
              </Link>
              <Link to="/signup" id="signup-link">
                Sign up
              </Link>
            </div>
          </div>
        );
    }

    render () {
        let user = this.props.currentUser;
        let nav = user ? this.loggedIn(user) : this.loggedOut();
        return nav;
    }
}

export default NavBar;