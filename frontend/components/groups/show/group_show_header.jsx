import React from 'react';
import GroupShowHeaderNav from './group_show_header_nav'

const GroupShowHeader = props => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.locationId}</p>
            <p>{props.creatorId}</p>
            <GroupShowHeaderNav group={props.group}/>
        </div>
    )
}

export default GroupShowHeader;