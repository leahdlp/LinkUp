import React from 'react';
import MemberListItem from './member_list_item';
import { Link } from 'react-router-dom';

const MemberList = ({ members, groupId, users }) => {
    let groupMems = [];

    Object.values(members).forEach(member => {
        if (member.group_id === groupId) groupMems.push(member)
    })

    let see = groupMems.length > 15 ? 
    <Link
        to={`/groups/${groupId}/members`}
        id="see-all"
    >
        See all
    </Link> : "";

    let count = 1;
    return(
        <div className="members-container">
            <div className="member-list-container">
                <div className="member-list-header">
                    <h3>Members ({Object.values(members).length})</h3>
                    {see}
                </div>
                <ul className="member-list">
                    {groupMems.map(member => {
                        if (count <= 15) {
                            count += 1;
                            return (
                                <MemberListItem 
                                    key={`member-${member.id}`}
                                    member={member} 
                                    users={users}
                                />
                            );
                        } else {
                            return null;
                        }
                    })}
                </ul>
            </div>
        </div>
    )
}

export default MemberList;