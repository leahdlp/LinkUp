import React from 'react';
import GroupShowHeaderNav from './group_show_header_nav'

const GroupShowHeader = props => {
    return (
        <div className="show-pg-header-container">
            <div className="show-pg-header">
                <div className="group-details">
                    <h1>{props.name}</h1>
                    <p>{props.locationId}</p>
                    <p>{props.creatorId}</p>
                </div>
                <GroupShowHeaderNav 
                    group={props.group}
                    id="grp-show-nav"
                />
            </div>
        </div>
    )
}

export default GroupShowHeader;