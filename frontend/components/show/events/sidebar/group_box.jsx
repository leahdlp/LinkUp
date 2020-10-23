import React from 'react';
import { Link } from 'react-router-dom'

const GroupBox = ({ group }) => (
    <div className="group-info">
        <div className="event-group-pic">
            <img src={group.photoUrl} alt=""/>
        </div>
        <Link 
            className="group-title" 
            to={`/groups/${group.id}`}>
            {group.name}
        </Link>
    </div>
)

export default GroupBox;