import React from 'react';

const MemberListItem = ({ member }) => {
    return (
        <li key={`member-${member.id}`} className="member-list-item">
            {member.name}
            {/* {users[member.user_id].name} */}
        </li>
    )
}

export default MemberListItem;