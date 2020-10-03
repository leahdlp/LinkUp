import React from 'react';
import EventBox from './event_box';
import GroupBox from './group_box';

const Sidebar = ({event, group}) => (
    <div className="sidebar">
        <div className="sidebar-group-details">
            <GroupBox group={group} />
        </div>
        <div className="sidebar-event-details">
            <EventBox event={event} />
        </div>
    </div>
);

export default Sidebar;