import React from 'react';
import { Link } from 'react-router-dom'

class GroupShowHeaderNav extends React.Component {
    memberButton () {
        
    }

    render () {
        const group = this.props.group;
        console.log(group);
        console.log(this.props.members);
        console.log(this.props.currentUser);
        return (
            <div className="show-navbar-container">
                <div className="show-navbar">
                    <Link to={`/groups/${group.id}`} id="nav-button">About</Link>
                    <Link to={`/groups/${group.id}`} id="nav-button">Events</Link>
                    <Link to={`/groups/${group.id}`} id="nav-button">Members</Link>
                    <Link to={`/groups/${group.id}`} id="nav-button">Photos</Link>
    
                    <div className="pink-btn-container" id="pink-btn-show-pg">
                        <div className="pink-btn">
                            <button
                                onClick={() => this.props.createMember(group.id)}
                            >
                                Join this group
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GroupShowHeaderNav;