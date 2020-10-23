import React from 'react';

const MemberListItem = ({ member }) => {
    return <li key={`member-${member.id}`} className="member-list-item">
        <img src={member.photoUrl} alt=""/>
    </li>
}

export default MemberListItem;