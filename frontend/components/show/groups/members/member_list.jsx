import React from 'react';
import MemberListItem from './member_list_item';

const MemberList = ({ members, users }) => {
    return(
        <div className="members-container">
            <div className="member-list-container">
                <h3>Members ({Object.values(members).length})</h3>
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
        </div>
    )
}

export default MemberList;