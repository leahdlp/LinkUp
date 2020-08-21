import React from 'react';

const GroupsIndexItem = ({history, group, fetchGroup}) => (
    <li onClick={() => history.push(`/groups/${group.id}`)}>{group.name}</li>
)

export default GroupsIndexItem;