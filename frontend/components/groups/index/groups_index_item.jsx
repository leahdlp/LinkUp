import React from 'react';

const GroupsIndexItem = ({history, group, fetchGroup}) => (
    <div className="grid-item"><li 
        className="group-item"
        onClick={() => history.push(`/groups/${group.id}`)}
    >
        {group.name}
    </li></div>
)

export default GroupsIndexItem;