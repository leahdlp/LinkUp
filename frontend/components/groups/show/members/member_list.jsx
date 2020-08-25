import React from 'react';
import MemberListItem from './member_list_item';

const MemberList = ({ members, users }) => {
    return(
        <div className="member-list-container">
            <ul className="member-list">
                {Object.values(members).map(member => (
                    <MemberListItem 
                        key={`member-${member.id}`}
                        member={member} 
                        users={users}
                    />
                ))}
            </ul>
        </div>
    )
}

export default MemberList;