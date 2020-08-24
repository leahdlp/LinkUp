import React from 'react';

const MemberListItem = ({ member }) => {
    return (
        <li>
            {member.name}
            {/* {users[member.user_id].name} */}
        </li>
    )
}

export default MemberListItem;