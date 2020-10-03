import React from 'react';
import GroupShowHeader from './header/group_show_header';
import MemberList from './members/member_list';
import SubcategoriesList from './subcategories/show_subcategories'

class GroupShow extends React.Component {
    componentDidMount() {
        this.props.fetchSubcategory(this.props.group.subcategory_id);
    }

    render () {
        const group = this.props.group
        const subcategories = this.props.subcategories
        
        if (subcategories === undefined) return null;
        if (Object.values(subcategories).length === 0) return null;
        // console.log(this.props.history);
        // console.log(this.props)
        return (
            <div>
                <GroupShowHeader 
                    currentUser={this.props.currentUser}
                    events={this.props.events}
                    members={this.props.members}
                    attendees={this.props.attendees}
                    locations={this.props.locations}
                    group={group}
                    fetchAttendees={this.props.fetchAttendees}
                    createMember={this.props.createMember}
                    deleteMember={this.props.deleteMember}
                    deleteGroup={this.props.deleteGroup}
                    history={this.props.history}
                />
                <div className="member-section">
                    <div className="member-container">
                        <MemberList 
                            groupId={this.props.group.id}
                            members={this.props.members}
                            users={this.props.users}
                        />
                    </div>
                </div>
                
                <div className="subcats-list-container">
                    <SubcategoriesList 
                        group={group}
                        subcategories={this.props.subcategories}
                    />
                </div>
            </div>
        )
    }
}

export default GroupShow;