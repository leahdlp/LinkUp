import React from 'react';
import { Link } from 'react-router-dom'

const GroupShowHeaderNav = ({ group }) => {
    return (
        <div className="show-navbar-container">
            <div className="show-navbar">
                <Link to={`/groups/${group.id}`} id="nav-button">About</Link>
                <Link to={`/groups/${group.id}`} id="nav-button">Events</Link>
                <Link to={`/groups/${group.id}`} id="nav-button">Members</Link>
                <Link to={`/groups/${group.id}`} id="nav-button">Photos</Link>
                <button onClick={() => console.log('this')}>Join this group</button>
            </div>
        </div>
    )
}

export default GroupShowHeaderNav;