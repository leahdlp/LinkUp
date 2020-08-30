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
        
        return (
            <div>
                <GroupShowHeader 
                    currentUser={this.props.currentUser}
                    members={this.props.members}
                    locations={this.props.locations}
                    group={group}
                    createMember={this.props.createMember}
                    deleteMember={this.props.deleteMember}
                    deleteGroup={this.props.deleteGroup}
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
                
                <div className="subcats">
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