import React from 'react';

const MemberListItem = ({ member }) => {
    return (
        <li key={`member-${member.id}`} className="member-list-item">
            {/* {member.funk} */}
        </li>
    )
}

export default MemberListItem;