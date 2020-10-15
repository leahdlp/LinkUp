import React from 'react';
import GroupShowHeader from './header/group_show_header';
import MemberList from './members/member_list';
import SubcategoriesList from './subcategories/show_subcategories'

const GroupShow = props => {
    const group = props.group

    return (
        <div>
            <div className="mem-head-body">
                <GroupShowHeader 
                    currentUser={props.currentUser}
                    events={props.events}
                    members={props.members}
                    attendees={props.attendees}
                    group={group}
                    fetchAttendees={props.fetchAttendees}
                    createMember={props.createMember}
                    deleteMember={props.deleteMember}
                    deleteGroup={props.deleteGroup}
                    history={props.history}
                />
                <div className="member-section">
                    <div className="member-container">
                        <MemberList 
                            groupId={props.group.id}
                            members={props.members}
                            users={props.users}
                        />
                    </div>
                </div>
            </div>
            
            <div className="category-section">
                <div className="subcats-list-container">
                    <SubcategoriesList 
                        subcategory={group.subcategory}
                    />
                </div>
            </div>
        </div>
    )
}

export default GroupShow;